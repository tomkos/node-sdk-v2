"use strict";
/**
 * Copyright 2019 IBM All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
var extend = require("extend");
var ibm_cloud_sdk_core_1 = require("ibm-cloud-sdk-core");
var common_1 = require("../lib/common");
/**
 * The IBM Watson&trade; Tone Analyzer service uses linguistic analysis to detect emotional and language tones in written text. The service can analyze tone at both the document and sentence levels. You can use the service to understand how your written communications are perceived and then to improve the tone of your communications. Businesses can use the service to learn the tone of their customers' communications and to respond to each customer appropriately, or to understand and improve their customer conversations.  **Note:** Request logging is disabled for the Tone Analyzer service. Regardless of whether you set the `X-Watson-Learning-Opt-Out` request header, the service does not log or retain data from requests and responses.
 */
var ToneAnalyzerV3 = /** @class */ (function (_super) {
    __extends(ToneAnalyzerV3, _super);
    /**
     * Construct a ToneAnalyzerV3 object.
     *
     * @param {Object} options - Options for the service.
     * @param {string} options.version - The API version date to use with the service, in "YYYY-MM-DD" format. Whenever the API is changed in a backwards incompatible way, a new minor version of the API is released. The service uses the API version for the date you specify, or the most recent version before that date. Note that you should not programmatically specify the current date at runtime, in case the API has been updated since your application's release. Instead, specify a version date that is compatible with your application, and don't change it until your application is ready for a later version.
     * @param {string} [options.url] - The base url to use when contacting the service (e.g. 'https://gateway.watsonplatform.net/tone-analyzer/api'). The base url may differ between IBM Cloud regions.
     * @param {string} [options.username] - The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
     * @param {string} [options.password] - The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
     * @param {string} [options.iam_access_token] - An IAM access token fully managed by the application. Responsibility falls on the application to refresh the token, either before it expires or reactively upon receiving a 401 from the service, as any requests made with an expired token will fail.
     * @param {string} [options.iam_apikey] - An API key that can be used to request IAM tokens. If this API key is provided, the SDK will manage the token and handle the refreshing.
     * @param {string} [options.iam_url] - An optional URL for the IAM service API. Defaults to 'https://iam.cloud.ibm.com/identity/token'.
     * @param {string} [options.iam_client_id] - client id (username) for request to iam service
     * @param {string} [options.iam_client_secret] - client secret (password) for request to iam service
     * @param {string} [options.icp4d_access_token] - icp for data access token provided and managed by user
     * @param {string} [options.icp4d_url] - icp for data base url - used for authentication
     * @param {string} [options.authentication_type] - authentication pattern to be used. can be iam, basic, or icp4d
     * @param {boolean} [options.use_unauthenticated] - Set to `true` to avoid including an authorization header. This
     * option may be useful for requests that are proxied.
     * @param {OutgoingHttpHeaders} [options.headers] - Default headers that shall be included with every request to the service.
     * @param {boolean} [options.headers.X-Watson-Learning-Opt-Out] - Set to `true` to opt-out of data collection. By
     * default, all IBM Watson services log requests and their results. Logging is done only to improve the services for
     * future users. The logged data is not shared or made public. If you are concerned with protecting the privacy of
     * users' personal information or otherwise do not want your requests to be logged, you can opt out of logging.
     * @constructor
     * @returns {ToneAnalyzerV3}
     * @throws {Error}
     */
    function ToneAnalyzerV3(options) {
        var _this = _super.call(this, options) || this;
        // check if 'version' was provided
        if (typeof _this._options.version === 'undefined') {
            throw new Error('Argument error: version was not specified');
        }
        _this._options.qs.version = options.version;
        return _this;
    }
    /*************************
     * methods
     ************************/
    /**
     * Analyze general tone.
     *
     * Use the general-purpose endpoint to analyze the tone of your input content. The service analyzes the content for
     * emotional and language tones. The method always analyzes the tone of the full document; by default, it also
     * analyzes the tone of each individual sentence of the content.
     *
     * You can submit no more than 128 KB of total input content and no more than 1000 individual sentences in JSON, plain
     * text, or HTML format. The service analyzes the first 1000 sentences for document-level analysis and only the first
     * 100 sentences for sentence-level analysis.
     *
     * Per the JSON specification, the default character encoding for JSON content is effectively always UTF-8; per the
     * HTTP specification, the default encoding for plain text and HTML is ISO-8859-1 (effectively, the ASCII character
     * set). When specifying a content type of plain text or HTML, include the `charset` parameter to indicate the
     * character encoding of the input text; for example: `Content-Type: text/plain;charset=utf-8`. For `text/html`, the
     * service removes HTML tags and analyzes only the textual content.
     *
     * **See also:** [Using the general-purpose
     * endpoint](https://cloud.ibm.com/docs/services/tone-analyzer?topic=tone-analyzer-utgpe#utgpe).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {ToneInput|string} params.tone_input - JSON, plain text, or HTML input that contains the content to be
     * analyzed. For JSON input, provide an object of type `ToneInput`.
     * @param {boolean} [params.sentences] - Indicates whether the service is to return an analysis of each individual
     * sentence in addition to its analysis of the full document. If `true` (the default), the service returns results for
     * each sentence.
     * @param {string[]} [params.tones] - **`2017-09-21`:** Deprecated. The service continues to accept the parameter for
     * backward-compatibility, but the parameter no longer affects the response.
     *
     * **`2016-05-19`:** A comma-separated list of tones for which the service is to return its analysis of the input; the
     * indicated tones apply both to the full document and to individual sentences of the document. You can specify one or
     * more of the valid values. Omit the parameter to request results for all three tones.
     * @param {string} [params.content_language] - The language of the input text for the request: English or French.
     * Regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. The input
     * content must match the specified language. Do not submit content that contains both languages. You can use
     * different languages for **Content-Language** and **Accept-Language**.
     * * **`2017-09-21`:** Accepts `en` or `fr`.
     * * **`2016-05-19`:** Accepts only `en`.
     * @param {string} [params.accept_language] - The desired language of the response. For two-character arguments,
     * regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. You can use
     * different languages for **Content-Language** and **Accept-Language**.
     * @param {string} [params.content_type] - The type of the input. A character encoding can be specified by including a
     * `charset` parameter. For example, 'text/plain;charset=utf-8'.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    ToneAnalyzerV3.prototype.tone = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['tone_input'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.tone(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = _params.tone_input;
        var query = {
            'sentences': _params.sentences,
            'tones': _params.tones
        };
        var sdkHeaders = common_1.getSdkHeaders('tone_analyzer', 'v3', 'tone');
        var parameters = {
            options: {
                url: '/v3/tone',
                method: 'POST',
                body: body,
                qs: query,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Language': _params.content_language,
                    'Accept-Language': _params.accept_language,
                    'Content-Type': _params.content_type
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /**
     * Analyze customer-engagement tone.
     *
     * Use the customer-engagement endpoint to analyze the tone of customer service and customer support conversations.
     * For each utterance of a conversation, the method reports the most prevalent subset of the following seven tones:
     * sad, frustrated, satisfied, excited, polite, impolite, and sympathetic.
     *
     * If you submit more than 50 utterances, the service returns a warning for the overall content and analyzes only the
     * first 50 utterances. If you submit a single utterance that contains more than 500 characters, the service returns
     * an error for that utterance and does not analyze the utterance. The request fails if all utterances have more than
     * 500 characters. Per the JSON specification, the default character encoding for JSON content is effectively always
     * UTF-8.
     *
     * **See also:** [Using the customer-engagement
     * endpoint](https://cloud.ibm.com/docs/services/tone-analyzer?topic=tone-analyzer-utco#utco).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {Utterance[]} params.utterances - An array of `Utterance` objects that provides the input content that the
     * service is to analyze.
     * @param {string} [params.content_language] - The language of the input text for the request: English or French.
     * Regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. The input
     * content must match the specified language. Do not submit content that contains both languages. You can use
     * different languages for **Content-Language** and **Accept-Language**.
     * * **`2017-09-21`:** Accepts `en` or `fr`.
     * * **`2016-05-19`:** Accepts only `en`.
     * @param {string} [params.accept_language] - The desired language of the response. For two-character arguments,
     * regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. You can use
     * different languages for **Content-Language** and **Accept-Language**.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    ToneAnalyzerV3.prototype.toneChat = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['utterances'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.toneChat(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'utterances': _params.utterances
        };
        var sdkHeaders = common_1.getSdkHeaders('tone_analyzer', 'v3', 'toneChat');
        var parameters = {
            options: {
                url: '/v3/tone_chat',
                method: 'POST',
                body: body,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Content-Language': _params.content_language,
                    'Accept-Language': _params.accept_language
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    ToneAnalyzerV3.URL = 'https://gateway.watsonplatform.net/tone-analyzer/api';
    return ToneAnalyzerV3;
}(ibm_cloud_sdk_core_1.BaseService));
ToneAnalyzerV3.prototype.name = 'tone_analyzer';
ToneAnalyzerV3.prototype.serviceVersion = 'v3';
/*************************
 * interfaces
 ************************/
(function (ToneAnalyzerV3) {
    /** Constants for the `tone` operation. */
    var ToneConstants;
    (function (ToneConstants) {
        /** **`2017-09-21`:** Deprecated. The service continues to accept the parameter for backward-compatibility, but the parameter no longer affects the response. **`2016-05-19`:** A comma-separated list of tones for which the service is to return its analysis of the input; the indicated tones apply both to the full document and to individual sentences of the document. You can specify one or more of the valid values. Omit the parameter to request results for all three tones. */
        var Tones;
        (function (Tones) {
            Tones["EMOTION"] = "emotion";
            Tones["LANGUAGE"] = "language";
            Tones["SOCIAL"] = "social";
        })(Tones = ToneConstants.Tones || (ToneConstants.Tones = {}));
        /** The language of the input text for the request: English or French. Regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. The input content must match the specified language. Do not submit content that contains both languages. You can use different languages for **Content-Language** and **Accept-Language**. * **`2017-09-21`:** Accepts `en` or `fr`. * **`2016-05-19`:** Accepts only `en`. */
        var ContentLanguage;
        (function (ContentLanguage) {
            ContentLanguage["EN"] = "en";
            ContentLanguage["FR"] = "fr";
        })(ContentLanguage = ToneConstants.ContentLanguage || (ToneConstants.ContentLanguage = {}));
        /** The desired language of the response. For two-character arguments, regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. You can use different languages for **Content-Language** and **Accept-Language**. */
        var AcceptLanguage;
        (function (AcceptLanguage) {
            AcceptLanguage["AR"] = "ar";
            AcceptLanguage["DE"] = "de";
            AcceptLanguage["EN"] = "en";
            AcceptLanguage["ES"] = "es";
            AcceptLanguage["FR"] = "fr";
            AcceptLanguage["IT"] = "it";
            AcceptLanguage["JA"] = "ja";
            AcceptLanguage["KO"] = "ko";
            AcceptLanguage["PT_BR"] = "pt-br";
            AcceptLanguage["ZH_CN"] = "zh-cn";
            AcceptLanguage["ZH_TW"] = "zh-tw";
        })(AcceptLanguage = ToneConstants.AcceptLanguage || (ToneConstants.AcceptLanguage = {}));
        /** The type of the input. A character encoding can be specified by including a `charset` parameter. For example, 'text/plain;charset=utf-8'. */
        var ContentType;
        (function (ContentType) {
            ContentType["APPLICATION_JSON"] = "application/json";
            ContentType["TEXT_PLAIN"] = "text/plain";
            ContentType["TEXT_HTML"] = "text/html";
        })(ContentType = ToneConstants.ContentType || (ToneConstants.ContentType = {}));
    })(ToneConstants = ToneAnalyzerV3.ToneConstants || (ToneAnalyzerV3.ToneConstants = {}));
    /** Constants for the `toneChat` operation. */
    var ToneChatConstants;
    (function (ToneChatConstants) {
        /** The language of the input text for the request: English or French. Regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. The input content must match the specified language. Do not submit content that contains both languages. You can use different languages for **Content-Language** and **Accept-Language**. * **`2017-09-21`:** Accepts `en` or `fr`. * **`2016-05-19`:** Accepts only `en`. */
        var ContentLanguage;
        (function (ContentLanguage) {
            ContentLanguage["EN"] = "en";
            ContentLanguage["FR"] = "fr";
        })(ContentLanguage = ToneChatConstants.ContentLanguage || (ToneChatConstants.ContentLanguage = {}));
        /** The desired language of the response. For two-character arguments, regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. You can use different languages for **Content-Language** and **Accept-Language**. */
        var AcceptLanguage;
        (function (AcceptLanguage) {
            AcceptLanguage["AR"] = "ar";
            AcceptLanguage["DE"] = "de";
            AcceptLanguage["EN"] = "en";
            AcceptLanguage["ES"] = "es";
            AcceptLanguage["FR"] = "fr";
            AcceptLanguage["IT"] = "it";
            AcceptLanguage["JA"] = "ja";
            AcceptLanguage["KO"] = "ko";
            AcceptLanguage["PT_BR"] = "pt-br";
            AcceptLanguage["ZH_CN"] = "zh-cn";
            AcceptLanguage["ZH_TW"] = "zh-tw";
        })(AcceptLanguage = ToneChatConstants.AcceptLanguage || (ToneChatConstants.AcceptLanguage = {}));
    })(ToneChatConstants = ToneAnalyzerV3.ToneChatConstants || (ToneAnalyzerV3.ToneChatConstants = {}));
})(ToneAnalyzerV3 || (ToneAnalyzerV3 = {}));
module.exports = ToneAnalyzerV3;
//# sourceMappingURL=v3.js.map