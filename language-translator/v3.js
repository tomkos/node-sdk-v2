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
 * IBM Watson&trade; Language Translator translates text from one language to another. The service offers multiple IBM provided translation models that you can customize based on your unique terminology and language. Use Language Translator to take news from across the globe and present it in your language, communicate with your customers in their own language, and more.
 */
var LanguageTranslatorV3 = /** @class */ (function (_super) {
    __extends(LanguageTranslatorV3, _super);
    /**
     * Construct a LanguageTranslatorV3 object.
     *
     * @param {Object} options - Options for the service.
     * @param {string} options.version - The API version date to use with the service, in "YYYY-MM-DD" format. Whenever the API is changed in a backwards incompatible way, a new minor version of the API is released. The service uses the API version for the date you specify, or the most recent version before that date. Note that you should not programmatically specify the current date at runtime, in case the API has been updated since your application's release. Instead, specify a version date that is compatible with your application, and don't change it until your application is ready for a later version.
     * @param {string} [options.url] - The base url to use when contacting the service (e.g. 'https://gateway.watsonplatform.net/language-translator/api'). The base url may differ between IBM Cloud regions.
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
     * @returns {LanguageTranslatorV3}
     * @throws {Error}
     */
    function LanguageTranslatorV3(options) {
        var _this = _super.call(this, options) || this;
        // check if 'version' was provided
        if (typeof _this._options.version === 'undefined') {
            throw new Error('Argument error: version was not specified');
        }
        _this._options.qs.version = options.version;
        return _this;
    }
    /*************************
     * translation
     ************************/
    /**
     * Translate.
     *
     * Translates the input text from the source language to the target language.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string[]} params.text - Input text in UTF-8 encoding. Multiple entries will result in multiple translations
     * in the response.
     * @param {string} [params.model_id] - A globally unique string that identifies the underlying model that is used for
     * translation.
     * @param {string} [params.source] - Translation source language code.
     * @param {string} [params.target] - Translation target language code.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    LanguageTranslatorV3.prototype.translate = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['text'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.translate(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'text': _params.text,
            'model_id': _params.model_id,
            'source': _params.source,
            'target': _params.target
        };
        var sdkHeaders = common_1.getSdkHeaders('language_translator', 'v3', 'translate');
        var parameters = {
            options: {
                url: '/v3/translate',
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
     * identification
     ************************/
    /**
     * Identify language.
     *
     * Identifies the language of the input text.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.text - Input text in UTF-8 format.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    LanguageTranslatorV3.prototype.identify = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['text'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.identify(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = _params.text;
        var sdkHeaders = common_1.getSdkHeaders('language_translator', 'v3', 'identify');
        var parameters = {
            options: {
                url: '/v3/identify',
                method: 'POST',
                body: body,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'text/plain',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /**
     * List identifiable languages.
     *
     * Lists the languages that the service can identify. Returns the language code (for example, `en` for English or `es`
     * for Spanish) and name of each language.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    LanguageTranslatorV3.prototype.listIdentifiableLanguages = function (params, callback) {
        var _this = this;
        var _params = (typeof params === 'function' && !callback) ? {} : extend({}, params);
        var _callback = (typeof params === 'function' && !callback) ? params : callback;
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.listIdentifiableLanguages(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var sdkHeaders = common_1.getSdkHeaders('language_translator', 'v3', 'listIdentifiableLanguages');
        var parameters = {
            options: {
                url: '/v3/identifiable_languages',
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
    /*************************
     * models
     ************************/
    /**
     * Create model.
     *
     * Uploads Translation Memory eXchange (TMX) files to customize a translation model.
     *
     * You can either customize a model with a forced glossary or with a corpus that contains parallel sentences. To
     * create a model that is customized with a parallel corpus <b>and</b> a forced glossary, proceed in two steps:
     * customize with a parallel corpus first and then customize the resulting model with a glossary. Depending on the
     * type of customization and the size of the uploaded corpora, training can range from minutes for a glossary to
     * several hours for a large parallel corpus. You can upload a single forced glossary file and this file must be less
     * than <b>10 MB</b>. You can upload multiple parallel corpora tmx files. The cumulative file size of all uploaded
     * files is limited to <b>250 MB</b>. To successfully train with a parallel corpus you must have at least <b>5,000
     * parallel sentences</b> in your corpus.
     *
     * You can have a <b>maxium of 10 custom models per language pair</b>.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.base_model_id - The model ID of the model to use as the base for customization. To see
     * available models, use the `List models` method. Usually all IBM provided models are customizable. In addition, all
     * your models that have been created via parallel corpus customization, can be further customized with a forced
     * glossary.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} [params.forced_glossary] - A TMX file with your customizations.
     * The customizations in the file completely overwrite the domain translaton data, including high frequency or high
     * confidence phrase translations. You can upload only one glossary with a file size less than 10 MB per call. A
     * forced glossary should contain single words or short phrases.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} [params.parallel_corpus] - A TMX file with parallel sentences for
     * source and target language. You can upload multiple parallel_corpus files in one request. All uploaded
     * parallel_corpus files combined, your parallel corpus must contain at least 5,000 parallel sentences to train
     * successfully.
     * @param {string} [params.name] - An optional model name that you can use to identify the model. Valid characters are
     * letters, numbers, dashes, underscores, spaces and apostrophes. The maximum length is 32 characters.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    LanguageTranslatorV3.prototype.createModel = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['base_model_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.createModel(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var formData = {
            'forced_glossary': {
                data: _params.forced_glossary,
                contentType: 'application/octet-stream'
            },
            'parallel_corpus': {
                data: _params.parallel_corpus,
                contentType: 'application/octet-stream'
            }
        };
        var query = {
            'base_model_id': _params.base_model_id,
            'name': _params.name
        };
        var sdkHeaders = common_1.getSdkHeaders('language_translator', 'v3', 'createModel');
        var parameters = {
            options: {
                url: '/v3/models',
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
     * Delete model.
     *
     * Deletes a custom translation model.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.model_id - Model ID of the model to delete.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    LanguageTranslatorV3.prototype.deleteModel = function (params, callback) {
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
        var sdkHeaders = common_1.getSdkHeaders('language_translator', 'v3', 'deleteModel');
        var parameters = {
            options: {
                url: '/v3/models/{model_id}',
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
     * Get model details.
     *
     * Gets information about a translation model, including training status for custom models. Use this API call to poll
     * the status of your customization request. A successfully completed training will have a status of `available`.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.model_id - Model ID of the model to get.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    LanguageTranslatorV3.prototype.getModel = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['model_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getModel(params, function (err, bod, res) {
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
        var sdkHeaders = common_1.getSdkHeaders('language_translator', 'v3', 'getModel');
        var parameters = {
            options: {
                url: '/v3/models/{model_id}',
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
     * List models.
     *
     * Lists available translation models.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {string} [params.source] - Specify a language code to filter results by source language.
     * @param {string} [params.target] - Specify a language code to filter results by target language.
     * @param {boolean} [params.default_models] - If the default parameter isn't specified, the service will return all
     * models (default and non-default) for each language pair. To return only default models, set this to `true`. To
     * return only non-default models, set this to `false`. There is exactly one default model per language pair, the IBM
     * provided base model.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    LanguageTranslatorV3.prototype.listModels = function (params, callback) {
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
        var query = {
            'source': _params.source,
            'target': _params.target,
            'default': _params.default_models
        };
        var sdkHeaders = common_1.getSdkHeaders('language_translator', 'v3', 'listModels');
        var parameters = {
            options: {
                url: '/v3/models',
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
     * documentTranslation
     ************************/
    /**
     * Delete document.
     *
     * Deletes a document.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.document_id - Document ID of the document to delete.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    LanguageTranslatorV3.prototype.deleteDocument = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['document_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.deleteDocument(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'document_id': _params.document_id
        };
        var sdkHeaders = common_1.getSdkHeaders('language_translator', 'v3', 'deleteDocument');
        var parameters = {
            options: {
                url: '/v3/documents/{document_id}',
                method: 'DELETE',
                path: path,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, sdkHeaders, {}, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /**
     * Get document status.
     *
     * Gets the translation status of a document.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.document_id - The document ID of the document.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    LanguageTranslatorV3.prototype.getDocumentStatus = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['document_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getDocumentStatus(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'document_id': _params.document_id
        };
        var sdkHeaders = common_1.getSdkHeaders('language_translator', 'v3', 'getDocumentStatus');
        var parameters = {
            options: {
                url: '/v3/documents/{document_id}',
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
     * Get translated document.
     *
     * Gets the translated document associated with the given document ID.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.document_id - The document ID of the document that was submitted for translation.
     * @param {string} [params.accept] - The type of the response: application/powerpoint, application/mspowerpoint,
     * application/x-rtf, application/json, application/xml, application/vnd.ms-excel,
     * application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-powerpoint,
     * application/vnd.openxmlformats-officedocument.presentationml.presentation, application/msword,
     * application/vnd.openxmlformats-officedocument.wordprocessingml.document,
     * application/vnd.oasis.opendocument.spreadsheet, application/vnd.oasis.opendocument.presentation,
     * application/vnd.oasis.opendocument.text, application/pdf, application/rtf, text/html, text/json, text/plain,
     * text/richtext, text/rtf, or text/xml. A character encoding can be specified by including a `charset` parameter. For
     * example, 'text/html;charset=utf-8'.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    LanguageTranslatorV3.prototype.getTranslatedDocument = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['document_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getTranslatedDocument(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'document_id': _params.document_id
        };
        var sdkHeaders = common_1.getSdkHeaders('language_translator', 'v3', 'getTranslatedDocument');
        var parameters = {
            options: {
                url: '/v3/documents/{document_id}/translated_document',
                method: 'GET',
                path: path,
                responseType: 'stream',
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, sdkHeaders, {
                    'Accept': _params.accept
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /**
     * List documents.
     *
     * Lists documents that have been submitted for translation.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    LanguageTranslatorV3.prototype.listDocuments = function (params, callback) {
        var _this = this;
        var _params = (typeof params === 'function' && !callback) ? {} : extend({}, params);
        var _callback = (typeof params === 'function' && !callback) ? params : callback;
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.listDocuments(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var sdkHeaders = common_1.getSdkHeaders('language_translator', 'v3', 'listDocuments');
        var parameters = {
            options: {
                url: '/v3/documents',
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
     * Translate document.
     *
     * Submit a document for translation. You can submit the document contents in the `file` parameter, or you can
     * reference a previously submitted document by document ID.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} params.file - The source file to translate.
     *
     * [Supported file
     * types](https://cloud.ibm.com/docs/services/language-translator?topic=language-translator-document-translator-tutorial#supported-file-formats)
     *
     * Maximum file size: **20 MB**.
     * @param {string} params.filename - The filename for file.
     * @param {string} [params.file_content_type] - The content type of file.
     * @param {string} [params.model_id] - The model to use for translation. `model_id` or both `source` and `target` are
     * required.
     * @param {string} [params.source] - Language code that specifies the language of the source document.
     * @param {string} [params.target] - Language code that specifies the target language for translation.
     * @param {string} [params.document_id] - To use a previously submitted document as the source for a new translation,
     * enter the `document_id` of the document.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    LanguageTranslatorV3.prototype.translateDocument = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['file', 'filename'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.translateDocument(params, function (err, bod, res) {
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
            },
            'model_id': _params.model_id,
            'source': _params.source,
            'target': _params.target,
            'document_id': _params.document_id
        };
        var sdkHeaders = common_1.getSdkHeaders('language_translator', 'v3', 'translateDocument');
        var parameters = {
            options: {
                url: '/v3/documents',
                method: 'POST',
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
    LanguageTranslatorV3.URL = 'https://gateway.watsonplatform.net/language-translator/api';
    return LanguageTranslatorV3;
}(ibm_cloud_sdk_core_1.BaseService));
LanguageTranslatorV3.prototype.name = 'language_translator';
LanguageTranslatorV3.prototype.serviceVersion = 'v3';
/*************************
 * interfaces
 ************************/
(function (LanguageTranslatorV3) {
    /** Constants for the `getTranslatedDocument` operation. */
    var GetTranslatedDocumentConstants;
    (function (GetTranslatedDocumentConstants) {
        /** The type of the response: application/powerpoint, application/mspowerpoint, application/x-rtf, application/json, application/xml, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.oasis.opendocument.spreadsheet, application/vnd.oasis.opendocument.presentation, application/vnd.oasis.opendocument.text, application/pdf, application/rtf, text/html, text/json, text/plain, text/richtext, text/rtf, or text/xml. A character encoding can be specified by including a `charset` parameter. For example, 'text/html;charset=utf-8'. */
        var Accept;
        (function (Accept) {
            Accept["APPLICATION_POWERPOINT"] = "application/powerpoint";
            Accept["APPLICATION_MSPOWERPOINT"] = "application/mspowerpoint";
            Accept["APPLICATION_X_RTF"] = "application/x-rtf";
            Accept["APPLICATION_JSON"] = "application/json";
            Accept["APPLICATION_XML"] = "application/xml";
            Accept["APPLICATION_VND_MS_EXCEL"] = "application/vnd.ms-excel";
            Accept["APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET"] = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
            Accept["APPLICATION_VND_MS_POWERPOINT"] = "application/vnd.ms-powerpoint";
            Accept["APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION"] = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
            Accept["APPLICATION_MSWORD"] = "application/msword";
            Accept["APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
            Accept["APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET"] = "application/vnd.oasis.opendocument.spreadsheet";
            Accept["APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION"] = "application/vnd.oasis.opendocument.presentation";
            Accept["APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT"] = "application/vnd.oasis.opendocument.text";
            Accept["APPLICATION_PDF"] = "application/pdf";
            Accept["APPLICATION_RTF"] = "application/rtf";
            Accept["TEXT_HTML"] = "text/html";
            Accept["TEXT_JSON"] = "text/json";
            Accept["TEXT_PLAIN"] = "text/plain";
            Accept["TEXT_RICHTEXT"] = "text/richtext";
            Accept["TEXT_RTF"] = "text/rtf";
            Accept["TEXT_XML"] = "text/xml";
        })(Accept = GetTranslatedDocumentConstants.Accept || (GetTranslatedDocumentConstants.Accept = {}));
    })(GetTranslatedDocumentConstants = LanguageTranslatorV3.GetTranslatedDocumentConstants || (LanguageTranslatorV3.GetTranslatedDocumentConstants = {}));
    /** Constants for the `translateDocument` operation. */
    var TranslateDocumentConstants;
    (function (TranslateDocumentConstants) {
        /** The content type of file. */
        var FileContentType;
        (function (FileContentType) {
            FileContentType["APPLICATION_POWERPOINT"] = "application/powerpoint";
            FileContentType["APPLICATION_MSPOWERPOINT"] = "application/mspowerpoint";
            FileContentType["APPLICATION_X_RTF"] = "application/x-rtf";
            FileContentType["APPLICATION_JSON"] = "application/json";
            FileContentType["APPLICATION_XML"] = "application/xml";
            FileContentType["APPLICATION_VND_MS_EXCEL"] = "application/vnd.ms-excel";
            FileContentType["APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET"] = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
            FileContentType["APPLICATION_VND_MS_POWERPOINT"] = "application/vnd.ms-powerpoint";
            FileContentType["APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION"] = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
            FileContentType["APPLICATION_MSWORD"] = "application/msword";
            FileContentType["APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
            FileContentType["APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET"] = "application/vnd.oasis.opendocument.spreadsheet";
            FileContentType["APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION"] = "application/vnd.oasis.opendocument.presentation";
            FileContentType["APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT"] = "application/vnd.oasis.opendocument.text";
            FileContentType["APPLICATION_PDF"] = "application/pdf";
            FileContentType["APPLICATION_RTF"] = "application/rtf";
            FileContentType["TEXT_HTML"] = "text/html";
            FileContentType["TEXT_JSON"] = "text/json";
            FileContentType["TEXT_PLAIN"] = "text/plain";
            FileContentType["TEXT_RICHTEXT"] = "text/richtext";
            FileContentType["TEXT_RTF"] = "text/rtf";
            FileContentType["TEXT_XML"] = "text/xml";
        })(FileContentType = TranslateDocumentConstants.FileContentType || (TranslateDocumentConstants.FileContentType = {}));
    })(TranslateDocumentConstants = LanguageTranslatorV3.TranslateDocumentConstants || (LanguageTranslatorV3.TranslateDocumentConstants = {}));
})(LanguageTranslatorV3 || (LanguageTranslatorV3 = {}));
module.exports = LanguageTranslatorV3;
//# sourceMappingURL=v3.js.map