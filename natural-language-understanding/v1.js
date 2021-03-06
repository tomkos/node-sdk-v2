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
 * Analyze various features of text content at scale. Provide text, raw HTML, or a public URL and IBM Watson Natural Language Understanding will give you results for the features you request. The service cleans HTML content before analysis by default, so the results can ignore most advertisements and other unwanted content.  You can create [custom models](https://cloud.ibm.com/docs/services/natural-language-understanding?topic=natural-language-understanding-customizing) with Watson Knowledge Studio to detect custom entities, relations, and categories in Natural Language Understanding.
 */
var NaturalLanguageUnderstandingV1 = /** @class */ (function (_super) {
    __extends(NaturalLanguageUnderstandingV1, _super);
    /**
     * Construct a NaturalLanguageUnderstandingV1 object.
     *
     * @param {Object} options - Options for the service.
     * @param {string} options.version - The API version date to use with the service, in "YYYY-MM-DD" format. Whenever the API is changed in a backwards incompatible way, a new minor version of the API is released. The service uses the API version for the date you specify, or the most recent version before that date. Note that you should not programmatically specify the current date at runtime, in case the API has been updated since your application's release. Instead, specify a version date that is compatible with your application, and don't change it until your application is ready for a later version.
     * @param {string} [options.url] - The base url to use when contacting the service (e.g. 'https://gateway.watsonplatform.net/natural-language-understanding/api'). The base url may differ between IBM Cloud regions.
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
     * @returns {NaturalLanguageUnderstandingV1}
     * @throws {Error}
     */
    function NaturalLanguageUnderstandingV1(options) {
        var _this = _super.call(this, options) || this;
        // check if 'version' was provided
        if (typeof _this._options.version === 'undefined') {
            throw new Error('Argument error: version was not specified');
        }
        _this._options.qs.version = options.version;
        return _this;
    }
    /*************************
     * analyze
     ************************/
    /**
     * Analyze text.
     *
     * Analyzes text, HTML, or a public webpage for the following features:
     * - Categories
     * - Concepts
     * - Emotion
     * - Entities
     * - Keywords
     * - Metadata
     * - Relations
     * - Semantic roles
     * - Sentiment
     * - Syntax (Experimental).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {Features} params.features - Specific features to analyze the document for.
     * @param {string} [params.text] - The plain text to analyze. One of the `text`, `html`, or `url` parameters is
     * required.
     * @param {string} [params.html] - The HTML file to analyze. One of the `text`, `html`, or `url` parameters is
     * required.
     * @param {string} [params.url] - The webpage to analyze. One of the `text`, `html`, or `url` parameters is required.
     * @param {boolean} [params.clean] - Set this to `false` to disable webpage cleaning. To learn more about webpage
     * cleaning, see the [Analyzing
     * webpages](https://cloud.ibm.com/docs/services/natural-language-understanding?topic=natural-language-understanding-analyzing-webpages)
     * documentation.
     * @param {string} [params.xpath] - An [XPath
     * query](https://cloud.ibm.com/docs/services/natural-language-understanding?topic=natural-language-understanding-analyzing-webpages#xpath)
     * to perform on `html` or `url` input. Results of the query will be appended to the cleaned webpage text before it is
     * analyzed. To analyze only the results of the XPath query, set the `clean` parameter to `false`.
     * @param {boolean} [params.fallback_to_raw] - Whether to use raw HTML content if text cleaning fails.
     * @param {boolean} [params.return_analyzed_text] - Whether or not to return the analyzed text.
     * @param {string} [params.language] - ISO 639-1 code that specifies the language of your text. This overrides
     * automatic language detection. Language support differs depending on the features you include in your analysis. See
     * [Language
     * support](https://cloud.ibm.com/docs/services/natural-language-understanding?topic=natural-language-understanding-language-support)
     * for more information.
     * @param {number} [params.limit_text_characters] - Sets the maximum number of characters that are processed by the
     * service.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    NaturalLanguageUnderstandingV1.prototype.analyze = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['features'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.analyze(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'features': _params.features,
            'text': _params.text,
            'html': _params.html,
            'url': _params.url,
            'clean': _params.clean,
            'xpath': _params.xpath,
            'fallback_to_raw': _params.fallback_to_raw,
            'return_analyzed_text': _params.return_analyzed_text,
            'language': _params.language,
            'limit_text_characters': _params.limit_text_characters
        };
        var sdkHeaders = common_1.getSdkHeaders('natural-language-understanding', 'v1', 'analyze');
        var parameters = {
            options: {
                url: '/v1/analyze',
                method: 'POST',
                body: body,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /*************************
     * manageModels
     ************************/
    /**
     * Delete model.
     *
     * Deletes a custom model.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.model_id - Model ID of the model to delete.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    NaturalLanguageUnderstandingV1.prototype.deleteModel = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['model_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.deleteModel(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'model_id': _params.model_id
        };
        var sdkHeaders = common_1.getSdkHeaders('natural-language-understanding', 'v1', 'deleteModel');
        var parameters = {
            options: {
                url: '/v1/models/{model_id}',
                method: 'DELETE',
                path: path,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /**
     * List models.
     *
     * Lists Watson Knowledge Studio [custom entities and relations
     * models](https://cloud.ibm.com/docs/services/natural-language-understanding?topic=natural-language-understanding-customizing)
     * that are deployed to your Natural Language Understanding service.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    NaturalLanguageUnderstandingV1.prototype.listModels = function (params, callback) {
        var _this = this;
        var _params = (typeof params === 'function' && !callback) ? {} : extend({}, params);
        var _callback = (typeof params === 'function' && !callback) ? params : callback;
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.listModels(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var sdkHeaders = common_1.getSdkHeaders('natural-language-understanding', 'v1', 'listModels');
        var parameters = {
            options: {
                url: '/v1/models',
                method: 'GET',
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    NaturalLanguageUnderstandingV1.URL = 'https://gateway.watsonplatform.net/natural-language-understanding/api';
    return NaturalLanguageUnderstandingV1;
}(ibm_cloud_sdk_core_1.BaseService));
NaturalLanguageUnderstandingV1.prototype.name = 'natural-language-understanding';
NaturalLanguageUnderstandingV1.prototype.serviceVersion = 'v1';
module.exports = NaturalLanguageUnderstandingV1;
//# sourceMappingURL=v1.js.map