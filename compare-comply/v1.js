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
 * IBM Watson&trade; Compare and Comply analyzes governing documents to provide details about critical aspects of the documents.
 */
var CompareComplyV1 = /** @class */ (function (_super) {
    __extends(CompareComplyV1, _super);
    /**
     * Construct a CompareComplyV1 object.
     *
     * @param {Object} options - Options for the service.
     * @param {string} options.version - The API version date to use with the service, in "YYYY-MM-DD" format. Whenever the API is changed in a backwards incompatible way, a new minor version of the API is released. The service uses the API version for the date you specify, or the most recent version before that date. Note that you should not programmatically specify the current date at runtime, in case the API has been updated since your application's release. Instead, specify a version date that is compatible with your application, and don't change it until your application is ready for a later version.
     * @param {string} [options.url] - The base url to use when contacting the service (e.g. 'https://gateway.watsonplatform.net/compare-comply/api'). The base url may differ between IBM Cloud regions.
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
     * @returns {CompareComplyV1}
     * @throws {Error}
     */
    function CompareComplyV1(options) {
        var _this = _super.call(this, options) || this;
        // check if 'version' was provided
        if (typeof _this._options.version === 'undefined') {
            throw new Error('Argument error: version was not specified');
        }
        _this._options.qs.version = options.version;
        return _this;
    }
    /*************************
     * hTMLConversion
     ************************/
    /**
     * Convert document to HTML.
     *
     * Converts a document to HTML.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} params.file - The document to convert.
     * @param {string} params.filename - The filename for file.
     * @param {string} [params.file_content_type] - The content type of file.
     * @param {string} [params.model] - The analysis model to be used by the service. For the **Element classification**
     * and **Compare two documents** methods, the default is `contracts`. For the **Extract tables** method, the default
     * is `tables`. These defaults apply to the standalone methods as well as to the methods' use in batch-processing
     * requests.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    CompareComplyV1.prototype.convertToHtml = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['file', 'filename'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.convertToHtml(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var formData = {
            'file': {
                data: _params.file,
                filename: _params.filename,
                contentType: _params.file_content_type
            }
        };
        var query = {
            'model': _params.model
        };
        var sdkHeaders = common_1.getSdkHeaders('compare-comply', 'v1', 'convertToHtml');
        var parameters = {
            options: {
                url: '/v1/html_conversion',
                method: 'POST',
                qs: query,
                formData: formData
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /*************************
     * elementClassification
     ************************/
    /**
     * Classify the elements of a document.
     *
     * Analyzes the structural and semantic elements of a document.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} params.file - The document to classify.
     * @param {string} [params.file_content_type] - The content type of file.
     * @param {string} [params.model] - The analysis model to be used by the service. For the **Element classification**
     * and **Compare two documents** methods, the default is `contracts`. For the **Extract tables** method, the default
     * is `tables`. These defaults apply to the standalone methods as well as to the methods' use in batch-processing
     * requests.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    CompareComplyV1.prototype.classifyElements = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['file'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.classifyElements(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var formData = {
            'file': {
                data: _params.file,
                contentType: _params.file_content_type
            }
        };
        var query = {
            'model': _params.model
        };
        var sdkHeaders = common_1.getSdkHeaders('compare-comply', 'v1', 'classifyElements');
        var parameters = {
            options: {
                url: '/v1/element_classification',
                method: 'POST',
                qs: query,
                formData: formData
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /*************************
     * tables
     ************************/
    /**
     * Extract a document's tables.
     *
     * Analyzes the tables in a document.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} params.file - The document on which to run table extraction.
     * @param {string} [params.file_content_type] - The content type of file.
     * @param {string} [params.model] - The analysis model to be used by the service. For the **Element classification**
     * and **Compare two documents** methods, the default is `contracts`. For the **Extract tables** method, the default
     * is `tables`. These defaults apply to the standalone methods as well as to the methods' use in batch-processing
     * requests.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    CompareComplyV1.prototype.extractTables = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['file'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.extractTables(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var formData = {
            'file': {
                data: _params.file,
                contentType: _params.file_content_type
            }
        };
        var query = {
            'model': _params.model
        };
        var sdkHeaders = common_1.getSdkHeaders('compare-comply', 'v1', 'extractTables');
        var parameters = {
            options: {
                url: '/v1/tables',
                method: 'POST',
                qs: query,
                formData: formData
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /*************************
     * comparison
     ************************/
    /**
     * Compare two documents.
     *
     * Compares two input documents. Documents must be in the same format.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} params.file_1 - The first document to compare.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} params.file_2 - The second document to compare.
     * @param {string} [params.file_1_content_type] - The content type of file_1.
     * @param {string} [params.file_2_content_type] - The content type of file_2.
     * @param {string} [params.file_1_label] - A text label for the first document.
     * @param {string} [params.file_2_label] - A text label for the second document.
     * @param {string} [params.model] - The analysis model to be used by the service. For the **Element classification**
     * and **Compare two documents** methods, the default is `contracts`. For the **Extract tables** method, the default
     * is `tables`. These defaults apply to the standalone methods as well as to the methods' use in batch-processing
     * requests.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    CompareComplyV1.prototype.compareDocuments = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['file_1', 'file_2'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.compareDocuments(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var formData = {
            'file_1': {
                data: _params.file_1,
                contentType: _params.file_1_content_type
            },
            'file_2': {
                data: _params.file_2,
                contentType: _params.file_2_content_type
            }
        };
        var query = {
            'file_1_label': _params.file_1_label,
            'file_2_label': _params.file_2_label,
            'model': _params.model
        };
        var sdkHeaders = common_1.getSdkHeaders('compare-comply', 'v1', 'compareDocuments');
        var parameters = {
            options: {
                url: '/v1/comparison',
                method: 'POST',
                qs: query,
                formData: formData
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /*************************
     * feedback
     ************************/
    /**
     * Add feedback.
     *
     * Adds feedback in the form of _labels_ from a subject-matter expert (SME) to a governing document.
     * **Important:** Feedback is not immediately incorporated into the training model, nor is it guaranteed to be
     * incorporated at a later date. Instead, submitted feedback is used to suggest future updates to the training model.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {FeedbackDataInput} params.feedback_data - Feedback data for submission.
     * @param {string} [params.user_id] - An optional string identifying the user.
     * @param {string} [params.comment] - An optional comment on or description of the feedback.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    CompareComplyV1.prototype.addFeedback = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['feedback_data'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.addFeedback(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'feedback_data': _params.feedback_data,
            'user_id': _params.user_id,
            'comment': _params.comment
        };
        var sdkHeaders = common_1.getSdkHeaders('compare-comply', 'v1', 'addFeedback');
        var parameters = {
            options: {
                url: '/v1/feedback',
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
    /**
     * Delete a specified feedback entry.
     *
     * Deletes a feedback entry with a specified `feedback_id`.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.feedback_id - A string that specifies the feedback entry to be deleted from the document.
     * @param {string} [params.model] - The analysis model to be used by the service. For the **Element classification**
     * and **Compare two documents** methods, the default is `contracts`. For the **Extract tables** method, the default
     * is `tables`. These defaults apply to the standalone methods as well as to the methods' use in batch-processing
     * requests.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    CompareComplyV1.prototype.deleteFeedback = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['feedback_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.deleteFeedback(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var query = {
            'model': _params.model
        };
        var path = {
            'feedback_id': _params.feedback_id
        };
        var sdkHeaders = common_1.getSdkHeaders('compare-comply', 'v1', 'deleteFeedback');
        var parameters = {
            options: {
                url: '/v1/feedback/{feedback_id}',
                method: 'DELETE',
                qs: query,
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
     * Get a specified feedback entry.
     *
     * Gets a feedback entry with a specified `feedback_id`.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.feedback_id - A string that specifies the feedback entry to be included in the output.
     * @param {string} [params.model] - The analysis model to be used by the service. For the **Element classification**
     * and **Compare two documents** methods, the default is `contracts`. For the **Extract tables** method, the default
     * is `tables`. These defaults apply to the standalone methods as well as to the methods' use in batch-processing
     * requests.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    CompareComplyV1.prototype.getFeedback = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['feedback_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getFeedback(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var query = {
            'model': _params.model
        };
        var path = {
            'feedback_id': _params.feedback_id
        };
        var sdkHeaders = common_1.getSdkHeaders('compare-comply', 'v1', 'getFeedback');
        var parameters = {
            options: {
                url: '/v1/feedback/{feedback_id}',
                method: 'GET',
                qs: query,
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
     * List the feedback in a document.
     *
     * Lists the feedback in a document.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {string} [params.feedback_type] - An optional string that filters the output to include only feedback with
     * the specified feedback type. The only permitted value is `element_classification`.
     * @param {string} [params.before] - An optional string in the format `YYYY-MM-DD` that filters the output to include
     * only feedback that was added before the specified date.
     * @param {string} [params.after] - An optional string in the format `YYYY-MM-DD` that filters the output to include
     * only feedback that was added after the specified date.
     * @param {string} [params.document_title] - An optional string that filters the output to include only feedback from
     * the document with the specified `document_title`.
     * @param {string} [params.model_id] - An optional string that filters the output to include only feedback with the
     * specified `model_id`. The only permitted value is `contracts`.
     * @param {string} [params.model_version] - An optional string that filters the output to include only feedback with
     * the specified `model_version`.
     * @param {string} [params.category_removed] - An optional string in the form of a comma-separated list of categories.
     * If this is specified, the service filters the output to include only feedback that has at least one category from
     * the list removed.
     * @param {string} [params.category_added] - An optional string in the form of a comma-separated list of categories.
     * If this is specified, the service filters the output to include only feedback that has at least one category from
     * the list added.
     * @param {string} [params.category_not_changed] - An optional string in the form of a comma-separated list of
     * categories. If this is specified, the service filters the output to include only feedback that has at least one
     * category from the list unchanged.
     * @param {string} [params.type_removed] - An optional string of comma-separated `nature`:`party` pairs. If this is
     * specified, the service filters the output to include only feedback that has at least one `nature`:`party` pair from
     * the list removed.
     * @param {string} [params.type_added] - An optional string of comma-separated `nature`:`party` pairs. If this is
     * specified, the service filters the output to include only feedback that has at least one `nature`:`party` pair from
     * the list removed.
     * @param {string} [params.type_not_changed] - An optional string of comma-separated `nature`:`party` pairs. If this
     * is specified, the service filters the output to include only feedback that has at least one `nature`:`party` pair
     * from the list unchanged.
     * @param {number} [params.page_limit] - An optional integer specifying the number of documents that you want the
     * service to return.
     * @param {string} [params.cursor] - An optional string that returns the set of documents after the previous set. Use
     * this parameter with the `page_limit` parameter.
     * @param {string} [params.sort] - An optional comma-separated list of fields in the document to sort on. You can
     * optionally specify the sort direction by prefixing the value of the field with `-` for descending order or `+` for
     * ascending order (the default). Currently permitted sorting fields are `created`, `user_id`, and `document_title`.
     * @param {boolean} [params.include_total] - An optional boolean value. If specified as `true`, the `pagination`
     * object in the output includes a value called `total` that gives the total count of feedback created.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    CompareComplyV1.prototype.listFeedback = function (params, callback) {
        var _this = this;
        var _params = (typeof params === 'function' && !callback) ? {} : extend({}, params);
        var _callback = (typeof params === 'function' && !callback) ? params : callback;
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.listFeedback(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var query = {
            'feedback_type': _params.feedback_type,
            'before': _params.before,
            'after': _params.after,
            'document_title': _params.document_title,
            'model_id': _params.model_id,
            'model_version': _params.model_version,
            'category_removed': _params.category_removed,
            'category_added': _params.category_added,
            'category_not_changed': _params.category_not_changed,
            'type_removed': _params.type_removed,
            'type_added': _params.type_added,
            'type_not_changed': _params.type_not_changed,
            'page_limit': _params.page_limit,
            'cursor': _params.cursor,
            'sort': _params.sort,
            'include_total': _params.include_total
        };
        var sdkHeaders = common_1.getSdkHeaders('compare-comply', 'v1', 'listFeedback');
        var parameters = {
            options: {
                url: '/v1/feedback',
                method: 'GET',
                qs: query,
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
    /*************************
     * batches
     ************************/
    /**
     * Submit a batch-processing request.
     *
     * Run Compare and Comply methods over a collection of input documents.
     *
     * **Important:** Batch processing requires the use of the [IBM Cloud Object Storage
     * service](https://cloud.ibm.com/docs/services/cloud-object-storage?topic=cloud-object-storage-about#about-ibm-cloud-object-storage).
     * The use of IBM Cloud Object Storage with Compare and Comply is discussed at [Using batch
     * processing](https://cloud.ibm.com/docs/services/compare-comply?topic=compare-comply-batching#before-you-batch).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params._function - The Compare and Comply method to run across the submitted input documents.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} params.input_credentials_file - A JSON file containing the input
     * Cloud Object Storage credentials. At a minimum, the credentials must enable `READ` permissions on the bucket
     * defined by the `input_bucket_name` parameter.
     * @param {string} params.input_bucket_location - The geographical location of the Cloud Object Storage input bucket
     * as listed on the **Endpoint** tab of your Cloud Object Storage instance; for example, `us-geo`, `eu-geo`, or
     * `ap-geo`.
     * @param {string} params.input_bucket_name - The name of the Cloud Object Storage input bucket.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} params.output_credentials_file - A JSON file that lists the Cloud
     * Object Storage output credentials. At a minimum, the credentials must enable `READ` and `WRITE` permissions on the
     * bucket defined by the `output_bucket_name` parameter.
     * @param {string} params.output_bucket_location - The geographical location of the Cloud Object Storage output bucket
     * as listed on the **Endpoint** tab of your Cloud Object Storage instance; for example, `us-geo`, `eu-geo`, or
     * `ap-geo`.
     * @param {string} params.output_bucket_name - The name of the Cloud Object Storage output bucket.
     * @param {string} [params.model] - The analysis model to be used by the service. For the **Element classification**
     * and **Compare two documents** methods, the default is `contracts`. For the **Extract tables** method, the default
     * is `tables`. These defaults apply to the standalone methods as well as to the methods' use in batch-processing
     * requests.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    CompareComplyV1.prototype.createBatch = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['_function', 'input_credentials_file', 'input_bucket_location', 'input_bucket_name', 'output_credentials_file', 'output_bucket_location', 'output_bucket_name'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.createBatch(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var formData = {
            'input_credentials_file': {
                data: _params.input_credentials_file,
                contentType: 'application/json'
            },
            'input_bucket_location': _params.input_bucket_location,
            'input_bucket_name': _params.input_bucket_name,
            'output_credentials_file': {
                data: _params.output_credentials_file,
                contentType: 'application/json'
            },
            'output_bucket_location': _params.output_bucket_location,
            'output_bucket_name': _params.output_bucket_name
        };
        var query = {
            'function': _params._function,
            'model': _params.model
        };
        var sdkHeaders = common_1.getSdkHeaders('compare-comply', 'v1', 'createBatch');
        var parameters = {
            options: {
                url: '/v1/batches',
                method: 'POST',
                qs: query,
                formData: formData
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /**
     * Get information about a specific batch-processing job.
     *
     * Gets information about a batch-processing job with a specified ID.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.batch_id - The ID of the batch-processing job whose information you want to retrieve.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    CompareComplyV1.prototype.getBatch = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['batch_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getBatch(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'batch_id': _params.batch_id
        };
        var sdkHeaders = common_1.getSdkHeaders('compare-comply', 'v1', 'getBatch');
        var parameters = {
            options: {
                url: '/v1/batches/{batch_id}',
                method: 'GET',
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
     * List submitted batch-processing jobs.
     *
     * Lists batch-processing jobs submitted by users.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    CompareComplyV1.prototype.listBatches = function (params, callback) {
        var _this = this;
        var _params = (typeof params === 'function' && !callback) ? {} : extend({}, params);
        var _callback = (typeof params === 'function' && !callback) ? params : callback;
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.listBatches(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var sdkHeaders = common_1.getSdkHeaders('compare-comply', 'v1', 'listBatches');
        var parameters = {
            options: {
                url: '/v1/batches',
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
    /**
     * Update a pending or active batch-processing job.
     *
     * Updates a pending or active batch-processing job. You can rescan the input bucket to check for new documents or
     * cancel a job.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.batch_id - The ID of the batch-processing job you want to update.
     * @param {string} params.action - The action you want to perform on the specified batch-processing job.
     * @param {string} [params.model] - The analysis model to be used by the service. For the **Element classification**
     * and **Compare two documents** methods, the default is `contracts`. For the **Extract tables** method, the default
     * is `tables`. These defaults apply to the standalone methods as well as to the methods' use in batch-processing
     * requests.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    CompareComplyV1.prototype.updateBatch = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['batch_id', 'action'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.updateBatch(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var query = {
            'action': _params.action,
            'model': _params.model
        };
        var path = {
            'batch_id': _params.batch_id
        };
        var sdkHeaders = common_1.getSdkHeaders('compare-comply', 'v1', 'updateBatch');
        var parameters = {
            options: {
                url: '/v1/batches/{batch_id}',
                method: 'PUT',
                qs: query,
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
    CompareComplyV1.URL = 'https://gateway.watsonplatform.net/compare-comply/api';
    return CompareComplyV1;
}(ibm_cloud_sdk_core_1.BaseService));
CompareComplyV1.prototype.name = 'compare-comply';
CompareComplyV1.prototype.serviceVersion = 'v1';
/*************************
 * interfaces
 ************************/
(function (CompareComplyV1) {
    /** Constants for the `convertToHtml` operation. */
    var ConvertToHtmlConstants;
    (function (ConvertToHtmlConstants) {
        /** The content type of file. */
        var FileContentType;
        (function (FileContentType) {
            FileContentType["APPLICATION_PDF"] = "application/pdf";
            FileContentType["APPLICATION_MSWORD"] = "application/msword";
            FileContentType["APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
            FileContentType["IMAGE_BMP"] = "image/bmp";
            FileContentType["IMAGE_GIF"] = "image/gif";
            FileContentType["IMAGE_JPEG"] = "image/jpeg";
            FileContentType["IMAGE_PNG"] = "image/png";
            FileContentType["IMAGE_TIFF"] = "image/tiff";
            FileContentType["TEXT_PLAIN"] = "text/plain";
        })(FileContentType = ConvertToHtmlConstants.FileContentType || (ConvertToHtmlConstants.FileContentType = {}));
        /** The analysis model to be used by the service. For the **Element classification** and **Compare two documents** methods, the default is `contracts`. For the **Extract tables** method, the default is `tables`. These defaults apply to the standalone methods as well as to the methods' use in batch-processing requests. */
        var Model;
        (function (Model) {
            Model["CONTRACTS"] = "contracts";
            Model["TABLES"] = "tables";
        })(Model = ConvertToHtmlConstants.Model || (ConvertToHtmlConstants.Model = {}));
    })(ConvertToHtmlConstants = CompareComplyV1.ConvertToHtmlConstants || (CompareComplyV1.ConvertToHtmlConstants = {}));
    /** Constants for the `classifyElements` operation. */
    var ClassifyElementsConstants;
    (function (ClassifyElementsConstants) {
        /** The content type of file. */
        var FileContentType;
        (function (FileContentType) {
            FileContentType["APPLICATION_PDF"] = "application/pdf";
            FileContentType["APPLICATION_MSWORD"] = "application/msword";
            FileContentType["APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
            FileContentType["IMAGE_BMP"] = "image/bmp";
            FileContentType["IMAGE_GIF"] = "image/gif";
            FileContentType["IMAGE_JPEG"] = "image/jpeg";
            FileContentType["IMAGE_PNG"] = "image/png";
            FileContentType["IMAGE_TIFF"] = "image/tiff";
        })(FileContentType = ClassifyElementsConstants.FileContentType || (ClassifyElementsConstants.FileContentType = {}));
        /** The analysis model to be used by the service. For the **Element classification** and **Compare two documents** methods, the default is `contracts`. For the **Extract tables** method, the default is `tables`. These defaults apply to the standalone methods as well as to the methods' use in batch-processing requests. */
        var Model;
        (function (Model) {
            Model["CONTRACTS"] = "contracts";
            Model["TABLES"] = "tables";
        })(Model = ClassifyElementsConstants.Model || (ClassifyElementsConstants.Model = {}));
    })(ClassifyElementsConstants = CompareComplyV1.ClassifyElementsConstants || (CompareComplyV1.ClassifyElementsConstants = {}));
    /** Constants for the `extractTables` operation. */
    var ExtractTablesConstants;
    (function (ExtractTablesConstants) {
        /** The content type of file. */
        var FileContentType;
        (function (FileContentType) {
            FileContentType["APPLICATION_PDF"] = "application/pdf";
            FileContentType["APPLICATION_MSWORD"] = "application/msword";
            FileContentType["APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
            FileContentType["IMAGE_BMP"] = "image/bmp";
            FileContentType["IMAGE_GIF"] = "image/gif";
            FileContentType["IMAGE_JPEG"] = "image/jpeg";
            FileContentType["IMAGE_PNG"] = "image/png";
            FileContentType["IMAGE_TIFF"] = "image/tiff";
            FileContentType["TEXT_PLAIN"] = "text/plain";
        })(FileContentType = ExtractTablesConstants.FileContentType || (ExtractTablesConstants.FileContentType = {}));
        /** The analysis model to be used by the service. For the **Element classification** and **Compare two documents** methods, the default is `contracts`. For the **Extract tables** method, the default is `tables`. These defaults apply to the standalone methods as well as to the methods' use in batch-processing requests. */
        var Model;
        (function (Model) {
            Model["CONTRACTS"] = "contracts";
            Model["TABLES"] = "tables";
        })(Model = ExtractTablesConstants.Model || (ExtractTablesConstants.Model = {}));
    })(ExtractTablesConstants = CompareComplyV1.ExtractTablesConstants || (CompareComplyV1.ExtractTablesConstants = {}));
    /** Constants for the `compareDocuments` operation. */
    var CompareDocumentsConstants;
    (function (CompareDocumentsConstants) {
        /** The content type of file_1. */
        var File1ContentType;
        (function (File1ContentType) {
            File1ContentType["APPLICATION_PDF"] = "application/pdf";
            File1ContentType["APPLICATION_JSON"] = "application/json";
            File1ContentType["APPLICATION_MSWORD"] = "application/msword";
            File1ContentType["APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
            File1ContentType["IMAGE_BMP"] = "image/bmp";
            File1ContentType["IMAGE_GIF"] = "image/gif";
            File1ContentType["IMAGE_JPEG"] = "image/jpeg";
            File1ContentType["IMAGE_PNG"] = "image/png";
            File1ContentType["IMAGE_TIFF"] = "image/tiff";
        })(File1ContentType = CompareDocumentsConstants.File1ContentType || (CompareDocumentsConstants.File1ContentType = {}));
        /** The content type of file_2. */
        var File2ContentType;
        (function (File2ContentType) {
            File2ContentType["APPLICATION_PDF"] = "application/pdf";
            File2ContentType["APPLICATION_JSON"] = "application/json";
            File2ContentType["APPLICATION_MSWORD"] = "application/msword";
            File2ContentType["APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
            File2ContentType["IMAGE_BMP"] = "image/bmp";
            File2ContentType["IMAGE_GIF"] = "image/gif";
            File2ContentType["IMAGE_JPEG"] = "image/jpeg";
            File2ContentType["IMAGE_PNG"] = "image/png";
            File2ContentType["IMAGE_TIFF"] = "image/tiff";
        })(File2ContentType = CompareDocumentsConstants.File2ContentType || (CompareDocumentsConstants.File2ContentType = {}));
        /** The analysis model to be used by the service. For the **Element classification** and **Compare two documents** methods, the default is `contracts`. For the **Extract tables** method, the default is `tables`. These defaults apply to the standalone methods as well as to the methods' use in batch-processing requests. */
        var Model;
        (function (Model) {
            Model["CONTRACTS"] = "contracts";
            Model["TABLES"] = "tables";
        })(Model = CompareDocumentsConstants.Model || (CompareDocumentsConstants.Model = {}));
    })(CompareDocumentsConstants = CompareComplyV1.CompareDocumentsConstants || (CompareComplyV1.CompareDocumentsConstants = {}));
    /** Constants for the `deleteFeedback` operation. */
    var DeleteFeedbackConstants;
    (function (DeleteFeedbackConstants) {
        /** The analysis model to be used by the service. For the **Element classification** and **Compare two documents** methods, the default is `contracts`. For the **Extract tables** method, the default is `tables`. These defaults apply to the standalone methods as well as to the methods' use in batch-processing requests. */
        var Model;
        (function (Model) {
            Model["CONTRACTS"] = "contracts";
            Model["TABLES"] = "tables";
        })(Model = DeleteFeedbackConstants.Model || (DeleteFeedbackConstants.Model = {}));
    })(DeleteFeedbackConstants = CompareComplyV1.DeleteFeedbackConstants || (CompareComplyV1.DeleteFeedbackConstants = {}));
    /** Constants for the `getFeedback` operation. */
    var GetFeedbackConstants;
    (function (GetFeedbackConstants) {
        /** The analysis model to be used by the service. For the **Element classification** and **Compare two documents** methods, the default is `contracts`. For the **Extract tables** method, the default is `tables`. These defaults apply to the standalone methods as well as to the methods' use in batch-processing requests. */
        var Model;
        (function (Model) {
            Model["CONTRACTS"] = "contracts";
            Model["TABLES"] = "tables";
        })(Model = GetFeedbackConstants.Model || (GetFeedbackConstants.Model = {}));
    })(GetFeedbackConstants = CompareComplyV1.GetFeedbackConstants || (CompareComplyV1.GetFeedbackConstants = {}));
    /** Constants for the `createBatch` operation. */
    var CreateBatchConstants;
    (function (CreateBatchConstants) {
        /** The Compare and Comply method to run across the submitted input documents. */
        var Function;
        (function (Function) {
            Function["HTML_CONVERSION"] = "html_conversion";
            Function["ELEMENT_CLASSIFICATION"] = "element_classification";
            Function["TABLES"] = "tables";
        })(Function = CreateBatchConstants.Function || (CreateBatchConstants.Function = {}));
        /** The analysis model to be used by the service. For the **Element classification** and **Compare two documents** methods, the default is `contracts`. For the **Extract tables** method, the default is `tables`. These defaults apply to the standalone methods as well as to the methods' use in batch-processing requests. */
        var Model;
        (function (Model) {
            Model["CONTRACTS"] = "contracts";
            Model["TABLES"] = "tables";
        })(Model = CreateBatchConstants.Model || (CreateBatchConstants.Model = {}));
    })(CreateBatchConstants = CompareComplyV1.CreateBatchConstants || (CompareComplyV1.CreateBatchConstants = {}));
    /** Constants for the `updateBatch` operation. */
    var UpdateBatchConstants;
    (function (UpdateBatchConstants) {
        /** The action you want to perform on the specified batch-processing job. */
        var Action;
        (function (Action) {
            Action["RESCAN"] = "rescan";
            Action["CANCEL"] = "cancel";
        })(Action = UpdateBatchConstants.Action || (UpdateBatchConstants.Action = {}));
        /** The analysis model to be used by the service. For the **Element classification** and **Compare two documents** methods, the default is `contracts`. For the **Extract tables** method, the default is `tables`. These defaults apply to the standalone methods as well as to the methods' use in batch-processing requests. */
        var Model;
        (function (Model) {
            Model["CONTRACTS"] = "contracts";
            Model["TABLES"] = "tables";
        })(Model = UpdateBatchConstants.Model || (UpdateBatchConstants.Model = {}));
    })(UpdateBatchConstants = CompareComplyV1.UpdateBatchConstants || (CompareComplyV1.UpdateBatchConstants = {}));
})(CompareComplyV1 || (CompareComplyV1 = {}));
module.exports = CompareComplyV1;
//# sourceMappingURL=v1.js.map