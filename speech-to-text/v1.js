"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var async = require("async");
var extend = require("extend");
var isStream = require("isstream");
var RecognizeStream = require("../lib/recognize-stream");
var GeneratedSpeechToTextV1 = require("./v1-generated");
// tslint:disable-next-line:no-var-requires
var pkg = require('../package.json');
var protocols = {
    https: require('https'),
    http: require('http')
};
var PARAMS_ALLOWED = [
    'max_alternatives',
    'timestamps',
    'word_confidence',
    'inactivity_timeout',
    'model',
    'content-type',
    'interim_results',
    'keywords',
    'keywords_threshold',
    'word_alternatives_threshold',
    'profanity_filter',
    'smart_formatting',
    'customization_id',
    'acoustic_customization_id',
    'speaker_labels',
    'customization_weight',
    'base_model_version'
];
/**
 * Check if there is a corpus that is still being processed
 * @private
 * @param corporaList
 * @return {boolean}
 */
function isProcessing(corporaList) {
    return corporaList.corpora.some(function (record) { return record['status'] === 'being_processed'; });
}
/**
 * Check if corpora has been analyzed
 * @private
 * @param corporaList
 * @return {boolean}
 */
function isAnalyzed(corporaList) {
    return corporaList.corpora.some(function (record) { return record['status'] === 'analyzed'; });
}
/**
 * @private
 * @param chunk
 * @return {any}
 */
function formatChunk(chunk) {
    // Convert the string into an array
    var result = chunk;
    // Check if in the stream doesn't have
    // two results together and parse them
    if (!result || result.indexOf('}{') === -1) {
        return JSON.parse(result);
    }
    // Check if we can parse the response
    try {
        result = '[' + result.replace(/}{/g, '},{') + ']';
        result = JSON.parse(result);
        return result[result.length - 1];
    }
    catch (e) {
        // if it fails, then this isn't valid json (or a concatenated list of valid json) - just return the original string
    }
    return result;
}
var SpeechToTextV1 = /** @class */ (function (_super) {
    __extends(SpeechToTextV1, _super);
    function SpeechToTextV1(options) {
        return _super.call(this, options) || this;
    }
    /**
     * Waits while corpora analysis status is 'being_processes', fires callback once the status is 'analyzed'
     *
     * Note: the code will throw an error in case there in no corpus in the customization
     *
     *
     * @param {Object} params The parameters
     * @param {String} params.customization_id - The GUID of the custom language model
     * @param {Number} [params.interval=5000] - (milliseconds) - how long to wait between status checks
     * @param {Number} [params.times=30] - maximum number of attempts
     * @param {Function} callback
     */
    SpeechToTextV1.prototype.whenCorporaAnalyzed = function (params, callback) {
        var self = this;
        async.parallel([
            // validate that it has at least one corpus
            function (next) {
                self.listCorpora(params, function (err, res) {
                    if (err) {
                        return next(err);
                    }
                    if (!res.corpora.length) {
                        err = new Error('Customization has no corpa and therefore corpus cannot be analyzed');
                        err.code = SpeechToTextV1.ERR_NO_CORPORA;
                        return next(err);
                    }
                    next();
                });
            },
            // check the customization status repeatedly until it's available
            function (next) {
                var options = extend({
                    interval: 5000,
                    times: 30
                }, params);
                options.errorFilter = function (err) {
                    // if it's a timeout error, then listCorpora is called again after params.interval
                    // otherwise the error is passed back to the user
                    // if the params.times limit is reached, the error will be passed to the user regardless
                    return err.code === SpeechToTextV1.ERR_TIMEOUT;
                };
                async.retry(options, function (done) {
                    self.listCorpora(params, function (err, corpora) {
                        if (err) {
                            done(err);
                        }
                        else if (isProcessing(corpora)) {
                            // if the loop times out, async returns the last error, which will be this one.
                            err = new Error('Corpora is still being processed, try increasing interval or times params');
                            err.code = SpeechToTextV1.ERR_TIMEOUT;
                            done(err);
                        }
                        else if (isAnalyzed(corpora)) {
                            done(null, corpora);
                        }
                        else {
                            done(new Error('Unexpected corpus analysis status'));
                        }
                    });
                }, next);
            }
        ], function (err, res) {
            if (err) {
                return callback(err);
            }
            callback(null, res[1]); // callback with the final customization object
        });
    };
    /**
     * Use the recognize function with a single 2-way stream over websockets
     *
     * @param {Object} params The parameters
     * @return {RecognizeStream}
     */
    SpeechToTextV1.prototype.recognizeUsingWebSocket = function (params) {
        params = params || {};
        params.url = this._options.url;
        // if using iam, headers will not be a property on _options
        // and the line `authorization: this._options.headers.Authorization`
        // will crash the code
        if (!this._options.headers) {
            this._options.headers = {};
        }
        // if using iam, pass the token manager to the RecognizeStream object
        if (this.tokenManager) {
            params.token_manager = this.tokenManager;
        }
        params.headers = extend({
            'user-agent': pkg.name + '-nodejs-' + pkg.version,
            authorization: this._options.headers.Authorization
        }, params.headers);
        // allow user to disable ssl verification when using websockets
        params.rejectUnauthorized = this._options.rejectUnauthorized;
        return new RecognizeStream(params);
    };
    SpeechToTextV1.prototype.recognize = function (params, callback) {
        if (params && params.audio && isStream(params.audio) && !params.content_type) {
            callback(new Error('If providing `audio` as a Stream, `content_type` is required.'));
            return;
        }
        return _super.prototype.recognize.call(this, params, callback);
    };
    /**
     * Waits while a customization status is 'pending' or 'training', fires callback once the status is 'ready' or 'available'.
     *
     * Note: the customization will remain in 'pending' status until at least one word corpus is added.
     *
     * See http://www.ibm.com/watson/developercloud/speech-to-text/api/v1/#list_models for status details.
     *
     * @param {Object} params The parameters
     * @param {String} params.customization_id - The GUID of the custom language model
     * @param {Number} [params.interval=5000] - (milliseconds) - how log to wait between status checks
     * @param {Number} [params.times=30] - maximum number of attempts
     * @param {Function} callback
     */
    SpeechToTextV1.prototype.whenCustomizationReady = function (params, callback) {
        var self = this;
        // check the customization status repeatedly until it's ready or available
        var options = extend({
            interval: 5000,
            times: 30
        }, params);
        options.errorFilter = function (err) {
            // if it's a timeout error, then getLanguageModel is called again after params.interval
            // otherwise the error is passed back to the user
            // if the params.times limit is reached, the error will be passed to the user regardless
            return err.code === SpeechToTextV1.ERR_TIMEOUT;
        };
        async.retry(options, function (next) {
            self.getLanguageModel(params, function (err, customization) {
                if (err) {
                    next(err);
                }
                else if (customization.status === 'pending' ||
                    customization.status === 'training') {
                    // if the loop times out, async returns the last error, which will be this one.
                    err = new Error('Customization is still pending, try increasing interval or times params');
                    err.code = SpeechToTextV1.ERR_TIMEOUT;
                    next(err);
                }
                else if (customization.status === 'ready' ||
                    customization.status === 'available') {
                    next(null, customization);
                }
                else if (customization.status === 'failed') {
                    next(new Error('Customization training failed'));
                }
                else {
                    next(new Error('Unexpected customization status: ' + customization.status));
                }
            });
        }, callback);
    };
    SpeechToTextV1.ERR_NO_CORPORA = 'ERR_NO_CORPORA';
    SpeechToTextV1.ERR_TIMEOUT = 'ERR_TIMEOUT';
    return SpeechToTextV1;
}(GeneratedSpeechToTextV1));
module.exports = SpeechToTextV1;
//# sourceMappingURL=v1.js.map