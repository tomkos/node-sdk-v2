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
 * The IBM Watson&trade; Personality Insights service enables applications to derive insights from social media, enterprise data, or other digital communications. The service uses linguistic analytics to infer individuals' intrinsic personality characteristics, including Big Five, Needs, and Values, from digital communications such as email, text messages, tweets, and forum posts.  The service can automatically infer, from potentially noisy social media, portraits of individuals that reflect their personality characteristics. The service can infer consumption preferences based on the results of its analysis and, for JSON content that is timestamped, can report temporal behavior. * For information about the meaning of the models that the service uses to describe personality characteristics, see [Personality models](https://cloud.ibm.com/docs/services/personality-insights?topic=personality-insights-models#models). * For information about the meaning of the consumption preferences, see [Consumption preferences](https://cloud.ibm.com/docs/services/personality-insights?topic=personality-insights-preferences#preferences).   **Note:** Request logging is disabled for the Personality Insights service. Regardless of whether you set the `X-Watson-Learning-Opt-Out` request header, the service does not log or retain data from requests and responses.
 */
var PersonalityInsightsV3 = /** @class */ (function (_super) {
    __extends(PersonalityInsightsV3, _super);
    /**
     * Construct a PersonalityInsightsV3 object.
     *
     * @param {Object} options - Options for the service.
     * @param {string} options.version - The API version date to use with the service, in "YYYY-MM-DD" format. Whenever the API is changed in a backwards incompatible way, a new minor version of the API is released. The service uses the API version for the date you specify, or the most recent version before that date. Note that you should not programmatically specify the current date at runtime, in case the API has been updated since your application's release. Instead, specify a version date that is compatible with your application, and don't change it until your application is ready for a later version.
     * @param {string} [options.url] - The base url to use when contacting the service (e.g. 'https://gateway.watsonplatform.net/personality-insights/api'). The base url may differ between IBM Cloud regions.
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
     * @returns {PersonalityInsightsV3}
     * @throws {Error}
     */
    function PersonalityInsightsV3(options) {
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
     * Get profile.
     *
     * Generates a personality profile for the author of the input text. The service accepts a maximum of 20 MB of input
     * content, but it requires much less text to produce an accurate profile. The service can analyze text in Arabic,
     * English, Japanese, Korean, or Spanish. It can return its results in a variety of languages.
     *
     * **See also:**
     * * [Requesting a
     * profile](https://cloud.ibm.com/docs/services/personality-insights?topic=personality-insights-input#input)
     * * [Providing sufficient
     * input](https://cloud.ibm.com/docs/services/personality-insights?topic=personality-insights-input#sufficient)
     *
     * ### Content types
     *
     *  You can provide input content as plain text (`text/plain`), HTML (`text/html`), or JSON (`application/json`) by
     * specifying the **Content-Type** parameter. The default is `text/plain`.
     * * Per the JSON specification, the default character encoding for JSON content is effectively always UTF-8.
     * * Per the HTTP specification, the default encoding for plain text and HTML is ISO-8859-1 (effectively, the ASCII
     * character set).
     *
     * When specifying a content type of plain text or HTML, include the `charset` parameter to indicate the character
     * encoding of the input text; for example, `Content-Type: text/plain;charset=utf-8`.
     *
     * **See also:** [Specifying request and response
     * formats](https://cloud.ibm.com/docs/services/personality-insights?topic=personality-insights-input#formats)
     *
     * ### Accept types
     *
     *  You must request a response as JSON (`application/json`) or comma-separated values (`text/csv`) by specifying the
     * **Accept** parameter. CSV output includes a fixed number of columns. Set the **csv_headers** parameter to `true` to
     * request optional column headers for CSV output.
     *
     * **See also:**
     * * [Understanding a JSON
     * profile](https://cloud.ibm.com/docs/services/personality-insights?topic=personality-insights-output#output)
     * * [Understanding a CSV
     * profile](https://cloud.ibm.com/docs/services/personality-insights?topic=personality-insights-outputCSV#outputCSV).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {Content|string} params.content - A maximum of 20 MB of content to analyze, though the service requires much
     * less text; for more information, see [Providing sufficient
     * input](https://cloud.ibm.com/docs/services/personality-insights?topic=personality-insights-input#sufficient). For
     * JSON input, provide an object of type `Content`.
     * @param {string} [params.content_language] - The language of the input text for the request: Arabic, English,
     * Japanese, Korean, or Spanish. Regional variants are treated as their parent language; for example, `en-US` is
     * interpreted as `en`.
     *
     * The effect of the **Content-Language** parameter depends on the **Content-Type** parameter. When **Content-Type**
     * is `text/plain` or `text/html`, **Content-Language** is the only way to specify the language. When **Content-Type**
     * is `application/json`, **Content-Language** overrides a language specified with the `language` parameter of a
     * `ContentItem` object, and content items that specify a different language are ignored; omit this parameter to base
     * the language on the specification of the content items. You can specify any combination of languages for
     * **Content-Language** and **Accept-Language**.
     * @param {string} [params.accept_language] - The desired language of the response. For two-character arguments,
     * regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. You can
     * specify any combination of languages for the input and response content.
     * @param {boolean} [params.raw_scores] - Indicates whether a raw score in addition to a normalized percentile is
     * returned for each characteristic; raw scores are not compared with a sample population. By default, only normalized
     * percentiles are returned.
     * @param {boolean} [params.csv_headers] - Indicates whether column labels are returned with a CSV response. By
     * default, no column labels are returned. Applies only when the response type is CSV (`text/csv`).
     * @param {boolean} [params.consumption_preferences] - Indicates whether consumption preferences are returned with the
     * results. By default, no consumption preferences are returned.
     * @param {string} [params.content_type] - The type of the input. For more information, see **Content types** in the
     * method description.
     *
     * Default: `text/plain`.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    PersonalityInsightsV3.prototype.profile = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['content'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.profile(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = _params.content;
        var query = {
            'raw_scores': _params.raw_scores,
            'csv_headers': _params.csv_headers,
            'consumption_preferences': _params.consumption_preferences
        };
        var sdkHeaders = common_1.getSdkHeaders('personality_insights', 'v3', 'profile');
        var parameters = {
            options: {
                url: '/v3/profile',
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
     * Get profile as csv.
     *
     * Generates a personality profile for the author of the input text. The service accepts a maximum of 20 MB of input
     * content, but it requires much less text to produce an accurate profile. The service can analyze text in Arabic,
     * English, Japanese, Korean, or Spanish. It can return its results in a variety of languages.
     *
     * **See also:**
     * * [Requesting a
     * profile](https://cloud.ibm.com/docs/services/personality-insights?topic=personality-insights-input#input)
     * * [Providing sufficient
     * input](https://cloud.ibm.com/docs/services/personality-insights?topic=personality-insights-input#sufficient)
     *
     * ### Content types
     *
     *  You can provide input content as plain text (`text/plain`), HTML (`text/html`), or JSON (`application/json`) by
     * specifying the **Content-Type** parameter. The default is `text/plain`.
     * * Per the JSON specification, the default character encoding for JSON content is effectively always UTF-8.
     * * Per the HTTP specification, the default encoding for plain text and HTML is ISO-8859-1 (effectively, the ASCII
     * character set).
     *
     * When specifying a content type of plain text or HTML, include the `charset` parameter to indicate the character
     * encoding of the input text; for example, `Content-Type: text/plain;charset=utf-8`.
     *
     * **See also:** [Specifying request and response
     * formats](https://cloud.ibm.com/docs/services/personality-insights?topic=personality-insights-input#formats)
     *
     * ### Accept types
     *
     *  You must request a response as JSON (`application/json`) or comma-separated values (`text/csv`) by specifying the
     * **Accept** parameter. CSV output includes a fixed number of columns. Set the **csv_headers** parameter to `true` to
     * request optional column headers for CSV output.
     *
     * **See also:**
     * * [Understanding a JSON
     * profile](https://cloud.ibm.com/docs/services/personality-insights?topic=personality-insights-output#output)
     * * [Understanding a CSV
     * profile](https://cloud.ibm.com/docs/services/personality-insights?topic=personality-insights-outputCSV#outputCSV).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {Content|string} params.content - A maximum of 20 MB of content to analyze, though the service requires much
     * less text; for more information, see [Providing sufficient
     * input](https://cloud.ibm.com/docs/services/personality-insights?topic=personality-insights-input#sufficient). For
     * JSON input, provide an object of type `Content`.
     * @param {string} [params.content_language] - The language of the input text for the request: Arabic, English,
     * Japanese, Korean, or Spanish. Regional variants are treated as their parent language; for example, `en-US` is
     * interpreted as `en`.
     *
     * The effect of the **Content-Language** parameter depends on the **Content-Type** parameter. When **Content-Type**
     * is `text/plain` or `text/html`, **Content-Language** is the only way to specify the language. When **Content-Type**
     * is `application/json`, **Content-Language** overrides a language specified with the `language` parameter of a
     * `ContentItem` object, and content items that specify a different language are ignored; omit this parameter to base
     * the language on the specification of the content items. You can specify any combination of languages for
     * **Content-Language** and **Accept-Language**.
     * @param {string} [params.accept_language] - The desired language of the response. For two-character arguments,
     * regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. You can
     * specify any combination of languages for the input and response content.
     * @param {boolean} [params.raw_scores] - Indicates whether a raw score in addition to a normalized percentile is
     * returned for each characteristic; raw scores are not compared with a sample population. By default, only normalized
     * percentiles are returned.
     * @param {boolean} [params.csv_headers] - Indicates whether column labels are returned with a CSV response. By
     * default, no column labels are returned. Applies only when the response type is CSV (`text/csv`).
     * @param {boolean} [params.consumption_preferences] - Indicates whether consumption preferences are returned with the
     * results. By default, no consumption preferences are returned.
     * @param {string} [params.content_type] - The type of the input. For more information, see **Content types** in the
     * method description.
     *
     * Default: `text/plain`.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    PersonalityInsightsV3.prototype.profileAsCsv = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['content'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.profileAsCsv(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = _params.content;
        var query = {
            'raw_scores': _params.raw_scores,
            'csv_headers': _params.csv_headers,
            'consumption_preferences': _params.consumption_preferences
        };
        var sdkHeaders = common_1.getSdkHeaders('personality_insights', 'v3', 'profileAsCsv');
        var parameters = {
            options: {
                url: '/v3/profile',
                method: 'POST',
                body: body,
                qs: query,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'text/csv',
                    'Content-Language': _params.content_language,
                    'Accept-Language': _params.accept_language,
                    'Content-Type': _params.content_type
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    PersonalityInsightsV3.URL = 'https://gateway.watsonplatform.net/personality-insights/api';
    return PersonalityInsightsV3;
}(ibm_cloud_sdk_core_1.BaseService));
PersonalityInsightsV3.prototype.name = 'personality_insights';
PersonalityInsightsV3.prototype.serviceVersion = 'v3';
/*************************
 * interfaces
 ************************/
(function (PersonalityInsightsV3) {
    /** Constants for the `profile` operation. */
    var ProfileConstants;
    (function (ProfileConstants) {
        /** The language of the input text for the request: Arabic, English, Japanese, Korean, or Spanish. Regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. The effect of the **Content-Language** parameter depends on the **Content-Type** parameter. When **Content-Type** is `text/plain` or `text/html`, **Content-Language** is the only way to specify the language. When **Content-Type** is `application/json`, **Content-Language** overrides a language specified with the `language` parameter of a `ContentItem` object, and content items that specify a different language are ignored; omit this parameter to base the language on the specification of the content items. You can specify any combination of languages for **Content-Language** and **Accept-Language**. */
        var ContentLanguage;
        (function (ContentLanguage) {
            ContentLanguage["AR"] = "ar";
            ContentLanguage["EN"] = "en";
            ContentLanguage["ES"] = "es";
            ContentLanguage["JA"] = "ja";
            ContentLanguage["KO"] = "ko";
        })(ContentLanguage = ProfileConstants.ContentLanguage || (ProfileConstants.ContentLanguage = {}));
        /** The desired language of the response. For two-character arguments, regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. You can specify any combination of languages for the input and response content. */
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
        })(AcceptLanguage = ProfileConstants.AcceptLanguage || (ProfileConstants.AcceptLanguage = {}));
        /** The type of the input. For more information, see **Content types** in the method description. Default: `text/plain`. */
        var ContentType;
        (function (ContentType) {
            ContentType["APPLICATION_JSON"] = "application/json";
            ContentType["TEXT_HTML"] = "text/html";
            ContentType["TEXT_PLAIN"] = "text/plain";
        })(ContentType = ProfileConstants.ContentType || (ProfileConstants.ContentType = {}));
    })(ProfileConstants = PersonalityInsightsV3.ProfileConstants || (PersonalityInsightsV3.ProfileConstants = {}));
    /** Constants for the `profileAsCsv` operation. */
    var ProfileAsCsvConstants;
    (function (ProfileAsCsvConstants) {
        /** The language of the input text for the request: Arabic, English, Japanese, Korean, or Spanish. Regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. The effect of the **Content-Language** parameter depends on the **Content-Type** parameter. When **Content-Type** is `text/plain` or `text/html`, **Content-Language** is the only way to specify the language. When **Content-Type** is `application/json`, **Content-Language** overrides a language specified with the `language` parameter of a `ContentItem` object, and content items that specify a different language are ignored; omit this parameter to base the language on the specification of the content items. You can specify any combination of languages for **Content-Language** and **Accept-Language**. */
        var ContentLanguage;
        (function (ContentLanguage) {
            ContentLanguage["AR"] = "ar";
            ContentLanguage["EN"] = "en";
            ContentLanguage["ES"] = "es";
            ContentLanguage["JA"] = "ja";
            ContentLanguage["KO"] = "ko";
        })(ContentLanguage = ProfileAsCsvConstants.ContentLanguage || (ProfileAsCsvConstants.ContentLanguage = {}));
        /** The desired language of the response. For two-character arguments, regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. You can specify any combination of languages for the input and response content. */
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
        })(AcceptLanguage = ProfileAsCsvConstants.AcceptLanguage || (ProfileAsCsvConstants.AcceptLanguage = {}));
        /** The type of the input. For more information, see **Content types** in the method description. Default: `text/plain`. */
        var ContentType;
        (function (ContentType) {
            ContentType["APPLICATION_JSON"] = "application/json";
            ContentType["TEXT_HTML"] = "text/html";
            ContentType["TEXT_PLAIN"] = "text/plain";
        })(ContentType = ProfileAsCsvConstants.ContentType || (ProfileAsCsvConstants.ContentType = {}));
    })(ProfileAsCsvConstants = PersonalityInsightsV3.ProfileAsCsvConstants || (PersonalityInsightsV3.ProfileAsCsvConstants = {}));
})(PersonalityInsightsV3 || (PersonalityInsightsV3 = {}));
module.exports = PersonalityInsightsV3;
//# sourceMappingURL=v3.js.map