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
 * IBM Watson&trade; Discovery is a cognitive search and content analytics engine that you can add to applications to identify patterns, trends and actionable insights to drive better decision-making. Securely unify structured and unstructured data with pre-enriched content, and use a simplified query language to eliminate the need for manual filtering of results.
 */
var DiscoveryV1 = /** @class */ (function (_super) {
    __extends(DiscoveryV1, _super);
    /**
     * Construct a DiscoveryV1 object.
     *
     * @param {Object} options - Options for the service.
     * @param {string} options.version - The API version date to use with the service, in "YYYY-MM-DD" format. Whenever the API is changed in a backwards incompatible way, a new minor version of the API is released. The service uses the API version for the date you specify, or the most recent version before that date. Note that you should not programmatically specify the current date at runtime, in case the API has been updated since your application's release. Instead, specify a version date that is compatible with your application, and don't change it until your application is ready for a later version.
     * @param {string} [options.url] - The base url to use when contacting the service (e.g. 'https://gateway.watsonplatform.net/discovery/api'). The base url may differ between IBM Cloud regions.
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
     * @returns {DiscoveryV1}
     * @throws {Error}
     */
    function DiscoveryV1(options) {
        var _this = _super.call(this, options) || this;
        // check if 'version' was provided
        if (typeof _this._options.version === 'undefined') {
            throw new Error('Argument error: version was not specified');
        }
        _this._options.qs.version = options.version;
        return _this;
    }
    /*************************
     * environments
     ************************/
    /**
     * Create an environment.
     *
     * Creates a new environment for private data. An environment must be created before collections can be created.
     *
     * **Note**: You can create only one environment for private data per service instance. An attempt to create another
     * environment results in an error.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.name - Name that identifies the environment.
     * @param {string} [params.description] - Description of the environment.
     * @param {string} [params.size] - Size of the environment. In the Lite plan the default and only accepted value is
     * `LT`, in all other plans the default is `S`.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.createEnvironment = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['name'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.createEnvironment(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'name': _params.name,
            'description': _params.description,
            'size': _params.size
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'createEnvironment');
        var parameters = {
            options: {
                url: '/v1/environments',
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
     * Delete environment.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.deleteEnvironment = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.deleteEnvironment(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'deleteEnvironment');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}',
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
     * Get environment info.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.getEnvironment = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getEnvironment(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'getEnvironment');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}',
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
     * List environments.
     *
     * List existing environments for the service instance.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {string} [params.name] - Show only the environment with the given name.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.listEnvironments = function (params, callback) {
        var _this = this;
        var _params = (typeof params === 'function' && !callback) ? {} : extend({}, params);
        var _callback = (typeof params === 'function' && !callback) ? params : callback;
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.listEnvironments(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var query = {
            'name': _params.name
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'listEnvironments');
        var parameters = {
            options: {
                url: '/v1/environments',
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
    /**
     * List fields across collections.
     *
     * Gets a list of the unique fields (and their types) stored in the indexes of the specified collections.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string[]} params.collection_ids - A comma-separated list of collection IDs to be queried against.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.listFields = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_ids'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.listFields(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var query = {
            'collection_ids': _params.collection_ids
        };
        var path = {
            'environment_id': _params.environment_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'listFields');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/fields',
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
     * Update an environment.
     *
     * Updates an environment. The environment's **name** and  **description** parameters can be changed. You must specify
     * a **name** for the environment.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} [params.name] - Name that identifies the environment.
     * @param {string} [params.description] - Description of the environment.
     * @param {string} [params.size] - Size that the environment should be increased to. Environment size cannot be
     * modified when using a Lite plan. Environment size can only increased and not decreased.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.updateEnvironment = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.updateEnvironment(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'name': _params.name,
            'description': _params.description,
            'size': _params.size
        };
        var path = {
            'environment_id': _params.environment_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'updateEnvironment');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}',
                method: 'PUT',
                body: body,
                path: path,
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
     * configurations
     ************************/
    /**
     * Add configuration.
     *
     * Creates a new configuration.
     *
     * If the input configuration contains the **configuration_id**, **created**, or **updated** properties, then they are
     * ignored and overridden by the system, and an error is not returned so that the overridden fields do not need to be
     * removed when copying a configuration.
     *
     * The configuration can contain unrecognized JSON fields. Any such fields are ignored and do not generate an error.
     * This makes it easier to use newer configuration files with older versions of the API and the service. It also makes
     * it possible for the tooling to add additional metadata and information to the configuration.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.name - The name of the configuration.
     * @param {string} [params.description] - The description of the configuration, if available.
     * @param {Conversions} [params.conversions] - Document conversion settings.
     * @param {Enrichment[]} [params.enrichments] - An array of document enrichment settings for the configuration.
     * @param {NormalizationOperation[]} [params.normalizations] - Defines operations that can be used to transform the
     * final output JSON into a normalized form. Operations are executed in the order that they appear in the array.
     * @param {Source} [params.source] - Object containing source parameters for the configuration.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.createConfiguration = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'name'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.createConfiguration(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'name': _params.name,
            'description': _params.description,
            'conversions': _params.conversions,
            'enrichments': _params.enrichments,
            'normalizations': _params.normalizations,
            'source': _params.source
        };
        var path = {
            'environment_id': _params.environment_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'createConfiguration');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/configurations',
                method: 'POST',
                body: body,
                path: path,
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
     * Delete a configuration.
     *
     * The deletion is performed unconditionally. A configuration deletion request succeeds even if the configuration is
     * referenced by a collection or document ingestion. However, documents that have already been submitted for
     * processing continue to use the deleted configuration. Documents are always processed with a snapshot of the
     * configuration as it existed at the time the document was submitted.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.configuration_id - The ID of the configuration.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.deleteConfiguration = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'configuration_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.deleteConfiguration(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id,
            'configuration_id': _params.configuration_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'deleteConfiguration');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/configurations/{configuration_id}',
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
     * Get configuration details.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.configuration_id - The ID of the configuration.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.getConfiguration = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'configuration_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getConfiguration(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id,
            'configuration_id': _params.configuration_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'getConfiguration');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/configurations/{configuration_id}',
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
     * List configurations.
     *
     * Lists existing configurations for the service instance.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} [params.name] - Find configurations with the given name.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.listConfigurations = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.listConfigurations(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var query = {
            'name': _params.name
        };
        var path = {
            'environment_id': _params.environment_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'listConfigurations');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/configurations',
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
     * Update a configuration.
     *
     * Replaces an existing configuration.
     *   * Completely replaces the original configuration.
     *   * The **configuration_id**, **updated**, and **created** fields are accepted in the request, but they are
     * ignored, and an error is not generated. It is also acceptable for users to submit an updated configuration with
     * none of the three properties.
     *   * Documents are processed with a snapshot of the configuration as it was at the time the document was submitted
     * to be ingested. This means that already submitted documents will not see any updates made to the configuration.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.configuration_id - The ID of the configuration.
     * @param {string} params.name - The name of the configuration.
     * @param {string} [params.description] - The description of the configuration, if available.
     * @param {Conversions} [params.conversions] - Document conversion settings.
     * @param {Enrichment[]} [params.enrichments] - An array of document enrichment settings for the configuration.
     * @param {NormalizationOperation[]} [params.normalizations] - Defines operations that can be used to transform the
     * final output JSON into a normalized form. Operations are executed in the order that they appear in the array.
     * @param {Source} [params.source] - Object containing source parameters for the configuration.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.updateConfiguration = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'configuration_id', 'name'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.updateConfiguration(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'name': _params.name,
            'description': _params.description,
            'conversions': _params.conversions,
            'enrichments': _params.enrichments,
            'normalizations': _params.normalizations,
            'source': _params.source
        };
        var path = {
            'environment_id': _params.environment_id,
            'configuration_id': _params.configuration_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'updateConfiguration');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/configurations/{configuration_id}',
                method: 'PUT',
                body: body,
                path: path,
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
     * testYourConfigurationOnADocument
     ************************/
    /**
     * Test configuration.
     *
     * **Deprecated** This method is no longer supported and is scheduled to be removed from service on July 31st 2019.
     *
     *  Runs a sample document through the default or your configuration and returns diagnostic information designed to
     * help you understand how the document was processed. The document is not added to the index.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} [params.configuration] - The configuration to use to process the document. If this part is
     * provided, then the provided configuration is used to process the document. If the **configuration_id** is also
     * provided (both are present at the same time), then request is rejected. The maximum supported configuration size is
     * 1 MB. Configuration parts larger than 1 MB are rejected.
     * See the `GET /configurations/{configuration_id}` operation for an example configuration.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} [params.file] - The content of the document to ingest. The maximum
     * supported file size when adding a file to a collection is 50 megabytes, the maximum supported file size when
     * testing a confiruration is 1 megabyte. Files larger than the supported size are rejected.
     * @param {string} [params.filename] - The filename for file.
     * @param {string} [params.file_content_type] - The content type of file.
     * @param {string} [params.metadata] - The maximum supported metadata file size is 1 MB. Metadata parts larger than 1
     * MB are rejected.
     * Example:  ``` {
     *   "Creator": "Johnny Appleseed",
     *   "Subject": "Apples"
     * } ```.
     * @param {string} [params.step] - Specify to only run the input document through the given step instead of running
     * the input document through the entire ingestion workflow. Valid values are `convert`, `enrich`, and `normalize`.
     * @param {string} [params.configuration_id] - The ID of the configuration to use to process the document. If the
     * **configuration** form part is also provided (both are present at the same time), then the request will be
     * rejected.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.testConfigurationInEnvironment = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.testConfigurationInEnvironment(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var formData = {
            'configuration': _params.configuration,
            'file': {
                data: _params.file,
                filename: _params.filename,
                contentType: _params.file_content_type
            },
            'metadata': _params.metadata
        };
        var query = {
            'step': _params.step,
            'configuration_id': _params.configuration_id
        };
        var path = {
            'environment_id': _params.environment_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'testConfigurationInEnvironment');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/preview',
                method: 'POST',
                qs: query,
                path: path,
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
     * collections
     ************************/
    /**
     * Create a collection.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.name - The name of the collection to be created.
     * @param {string} [params.description] - A description of the collection.
     * @param {string} [params.configuration_id] - The ID of the configuration in which the collection is to be created.
     * @param {string} [params.language] - The language of the documents stored in the collection, in the form of an ISO
     * 639-1 language code.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.createCollection = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'name'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.createCollection(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'name': _params.name,
            'description': _params.description,
            'configuration_id': _params.configuration_id,
            'language': _params.language
        };
        var path = {
            'environment_id': _params.environment_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'createCollection');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections',
                method: 'POST',
                body: body,
                path: path,
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
     * Delete a collection.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.deleteCollection = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.deleteCollection(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'deleteCollection');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}',
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
     * Get collection details.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.getCollection = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getCollection(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'getCollection');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}',
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
     * List collection fields.
     *
     * Gets a list of the unique fields (and their types) stored in the index.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.listCollectionFields = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.listCollectionFields(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'listCollectionFields');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/fields',
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
     * List collections.
     *
     * Lists existing collections for the service instance.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} [params.name] - Find collections with the given name.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.listCollections = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.listCollections(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var query = {
            'name': _params.name
        };
        var path = {
            'environment_id': _params.environment_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'listCollections');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections',
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
     * Update a collection.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} params.name - The name of the collection.
     * @param {string} [params.description] - A description of the collection.
     * @param {string} [params.configuration_id] - The ID of the configuration in which the collection is to be updated.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.updateCollection = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.updateCollection(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'name': _params.name,
            'description': _params.description,
            'configuration_id': _params.configuration_id
        };
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'updateCollection');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}',
                method: 'PUT',
                body: body,
                path: path,
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
     * queryModifications
     ************************/
    /**
     * Create or update expansion list.
     *
     * Create or replace the Expansion list for this collection. The maximum number of expanded terms per collection is
     * `500`.
     * The current expansion list is replaced with the uploaded content.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {Expansion[]} params.expansions - An array of query expansion definitions.
     *
     *  Each object in the **expansions** array represents a term or set of terms that will be expanded into other terms.
     * Each expansion object can be configured as bidirectional or unidirectional. Bidirectional means that all terms are
     * expanded to all other terms in the object. Unidirectional means that a set list of terms can be expanded into a
     * second list of terms.
     *
     *  To create a bi-directional expansion specify an **expanded_terms** array. When found in a query, all items in the
     * **expanded_terms** array are then expanded to the other items in the same array.
     *
     *  To create a uni-directional expansion, specify both an array of **input_terms** and an array of
     * **expanded_terms**. When items in the **input_terms** array are present in a query, they are expanded using the
     * items listed in the **expanded_terms** array.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.createExpansions = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id', 'expansions'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.createExpansions(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'expansions': _params.expansions
        };
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'createExpansions');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/expansions',
                method: 'POST',
                body: body,
                path: path,
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
     * Create stopword list.
     *
     * Upload a custom stopword list to use with the specified collection.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} params.stopword_file - The content of the stopword list to ingest.
     * @param {string} params.stopword_filename - The filename for stopword_file.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.createStopwordList = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id', 'stopword_file', 'stopword_filename'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.createStopwordList(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var formData = {
            'stopword_file': {
                data: _params.stopword_file,
                filename: _params.stopword_filename,
                contentType: 'application/octet-stream'
            }
        };
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'createStopwordList');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/word_lists/stopwords',
                method: 'POST',
                path: path,
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
     * Create tokenization dictionary.
     *
     * Upload a custom tokenization dictionary to use with the specified collection.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {TokenDictRule[]} [params.tokenization_rules] - An array of tokenization rules. Each rule contains, the
     * original `text` string, component `tokens`, any alternate character set `readings`, and which `part_of_speech` the
     * text is from.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.createTokenizationDictionary = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.createTokenizationDictionary(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'tokenization_rules': _params.tokenization_rules
        };
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'createTokenizationDictionary');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/word_lists/tokenization_dictionary',
                method: 'POST',
                body: body,
                path: path,
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
     * Delete the expansion list.
     *
     * Remove the expansion information for this collection. The expansion list must be deleted to disable query expansion
     * for a collection.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.deleteExpansions = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.deleteExpansions(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'deleteExpansions');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/expansions',
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
     * Delete a custom stopword list.
     *
     * Delete a custom stopword list from the collection. After a custom stopword list is deleted, the default list is
     * used for the collection.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.deleteStopwordList = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.deleteStopwordList(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'deleteStopwordList');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/word_lists/stopwords',
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
     * Delete tokenization dictionary.
     *
     * Delete the tokenization dictionary from the collection.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.deleteTokenizationDictionary = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.deleteTokenizationDictionary(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'deleteTokenizationDictionary');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/word_lists/tokenization_dictionary',
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
     * Get stopword list status.
     *
     * Returns the current status of the stopword list for the specified collection.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.getStopwordListStatus = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getStopwordListStatus(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'getStopwordListStatus');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/word_lists/stopwords',
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
     * Get tokenization dictionary status.
     *
     * Returns the current status of the tokenization dictionary for the specified collection.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.getTokenizationDictionaryStatus = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getTokenizationDictionaryStatus(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'getTokenizationDictionaryStatus');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/word_lists/tokenization_dictionary',
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
     * Get the expansion list.
     *
     * Returns the current expansion list for the specified collection. If an expansion list is not specified, an object
     * with empty expansion arrays is returned.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.listExpansions = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.listExpansions(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'listExpansions');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/expansions',
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
    /*************************
     * documents
     ************************/
    /**
     * Add a document.
     *
     * Add a document to a collection with optional metadata.
     *
     *   * The **version** query parameter is still required.
     *
     *   * Returns immediately after the system has accepted the document for processing.
     *
     *   * The user must provide document content, metadata, or both. If the request is missing both document content and
     * metadata, it is rejected.
     *
     *   * The user can set the **Content-Type** parameter on the **file** part to indicate the media type of the
     * document. If the **Content-Type** parameter is missing or is one of the generic media types (for example,
     * `application/octet-stream`), then the service attempts to automatically detect the document's media type.
     *
     *   * The following field names are reserved and will be filtered out if present after normalization: `id`, `score`,
     * `highlight`, and any field with the prefix of: `_`, `+`, or `-`
     *
     *   * Fields with empty name values after normalization are filtered out before indexing.
     *
     *   * Fields containing the following characters after normalization are filtered out before indexing: `#` and `,`
     *
     *  **Note:** Documents can be added with a specific **document_id** by using the
     * **_/v1/environments/{environment_id}/collections/{collection_id}/documents** method.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} [params.file] - The content of the document to ingest. The maximum
     * supported file size when adding a file to a collection is 50 megabytes, the maximum supported file size when
     * testing a confiruration is 1 megabyte. Files larger than the supported size are rejected.
     * @param {string} [params.filename] - The filename for file.
     * @param {string} [params.file_content_type] - The content type of file.
     * @param {string} [params.metadata] - The maximum supported metadata file size is 1 MB. Metadata parts larger than 1
     * MB are rejected.
     * Example:  ``` {
     *   "Creator": "Johnny Appleseed",
     *   "Subject": "Apples"
     * } ```.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.addDocument = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.addDocument(params, function (err, bod, res) {
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
            'metadata': _params.metadata
        };
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'addDocument');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/documents',
                method: 'POST',
                path: path,
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
     * Delete a document.
     *
     * If the given document ID is invalid, or if the document is not found, then the a success response is returned (HTTP
     * status code `200`) with the status set to 'deleted'.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} params.document_id - The ID of the document.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.deleteDocument = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id', 'document_id'];
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
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id,
            'document_id': _params.document_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'deleteDocument');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/documents/{document_id}',
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
     * Get document details.
     *
     * Fetch status details about a submitted document. **Note:** this operation does not return the document itself.
     * Instead, it returns only the document's processing status and any notices (warnings or errors) that were generated
     * when the document was ingested. Use the query API to retrieve the actual document content.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} params.document_id - The ID of the document.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.getDocumentStatus = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id', 'document_id'];
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
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id,
            'document_id': _params.document_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'getDocumentStatus');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/documents/{document_id}',
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
     * Update a document.
     *
     * Replace an existing document or add a document with a specified **document_id**. Starts ingesting a document with
     * optional metadata.
     *
     * **Note:** When uploading a new document with this method it automatically replaces any document stored with the
     * same **document_id** if it exists.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} params.document_id - The ID of the document.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} [params.file] - The content of the document to ingest. The maximum
     * supported file size when adding a file to a collection is 50 megabytes, the maximum supported file size when
     * testing a confiruration is 1 megabyte. Files larger than the supported size are rejected.
     * @param {string} [params.filename] - The filename for file.
     * @param {string} [params.file_content_type] - The content type of file.
     * @param {string} [params.metadata] - The maximum supported metadata file size is 1 MB. Metadata parts larger than 1
     * MB are rejected.
     * Example:  ``` {
     *   "Creator": "Johnny Appleseed",
     *   "Subject": "Apples"
     * } ```.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.updateDocument = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id', 'document_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.updateDocument(params, function (err, bod, res) {
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
            'metadata': _params.metadata
        };
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id,
            'document_id': _params.document_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'updateDocument');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/documents/{document_id}',
                method: 'POST',
                path: path,
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
     * queries
     ************************/
    /**
     * Query multiple collections.
     *
     * By using this method, you can construct long queries that search multiple collection. For details, see the
     * [Discovery
     * documentation](https://cloud.ibm.com/docs/services/discovery?topic=discovery-query-concepts#query-concepts).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} [params.filter] - A cacheable query that excludes documents that don't mention the query content.
     * Filter searches are better for metadata-type searches and for assessing the concepts in the data set.
     * @param {string} [params.query] - A query search returns all documents in your data set with full enrichments and
     * full text, but with the most relevant documents listed first. Use a query search when you want to find the most
     * relevant search results.
     * @param {string} [params.natural_language_query] - A natural language query that returns relevant documents by
     * utilizing training data and natural language understanding.
     * @param {boolean} [params.passages] - A passages query that returns the most relevant passages from the results.
     * @param {string} [params.aggregation] - An aggregation search that returns an exact answer by combining query search
     * with filters. Useful for applications to build lists, tables, and time series. For a full list of possible
     * aggregations, see the Query reference.
     * @param {number} [params.count] - Number of results to return.
     * @param {string} [params.return_fields] - A comma-separated list of the portion of the document hierarchy to return.
     * @param {number} [params.offset] - The number of query results to skip at the beginning. For example, if the total
     * number of results that are returned is 10 and the offset is 8, it returns the last two results.
     * @param {string} [params.sort] - A comma-separated list of fields in the document to sort on. You can optionally
     * specify a sort direction by prefixing the field with `-` for descending or `+` for ascending. Ascending is the
     * default sort direction if no prefix is specified. This parameter cannot be used in the same query as the **bias**
     * parameter.
     * @param {boolean} [params.highlight] - When true, a highlight field is returned for each result which contains the
     * fields which match the query with `<em></em>` tags around the matching query terms.
     * @param {string} [params.passages_fields] - A comma-separated list of fields that passages are drawn from. If this
     * parameter not specified, then all top-level fields are included.
     * @param {number} [params.passages_count] - The maximum number of passages to return. The search returns fewer
     * passages if the requested total is not found. The default is `10`. The maximum is `100`.
     * @param {number} [params.passages_characters] - The approximate number of characters that any one passage will have.
     * @param {boolean} [params.deduplicate] - When `true`, and used with a Watson Discovery News collection, duplicate
     * results (based on the contents of the **title** field) are removed. Duplicate comparison is limited to the current
     * query only; **offset** is not considered. This parameter is currently Beta functionality.
     * @param {string} [params.deduplicate_field] - When specified, duplicate results based on the field specified are
     * removed from the returned results. Duplicate comparison is limited to the current query only, **offset** is not
     * considered. This parameter is currently Beta functionality.
     * @param {string} [params.collection_ids] - A comma-separated list of collection IDs to be queried against. Required
     * when querying multiple collections, invalid when performing a single collection query.
     * @param {boolean} [params.similar] - When `true`, results are returned based on their similarity to the document IDs
     * specified in the **similar.document_ids** parameter.
     * @param {string} [params.similar_document_ids] - A comma-separated list of document IDs to find similar documents.
     *
     * **Tip:** Include the **natural_language_query** parameter to expand the scope of the document similarity search
     * with the natural language query. Other query parameters, such as **filter** and **query**, are subsequently applied
     * and reduce the scope.
     * @param {string} [params.similar_fields] - A comma-separated list of field names that are used as a basis for
     * comparison to identify similar documents. If not specified, the entire document is used for comparison.
     * @param {string} [params.bias] - Field which the returned results will be biased against. The specified field must
     * be either a **date** or **number** format. When a **date** type field is specified returned results are biased
     * towards field values closer to the current date. When a **number** type field is specified, returned results are
     * biased towards higher field values. This parameter cannot be used in the same query as the **sort** parameter.
     * @param {boolean} [params.logging_opt_out] - If `true`, queries are not stored in the Discovery **Logs** endpoint.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.federatedQuery = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.federatedQuery(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'filter': _params.filter,
            'query': _params.query,
            'natural_language_query': _params.natural_language_query,
            'passages': _params.passages,
            'aggregation': _params.aggregation,
            'count': _params.count,
            'return': _params.return_fields,
            'offset': _params.offset,
            'sort': _params.sort,
            'highlight': _params.highlight,
            'passages.fields': _params.passages_fields,
            'passages.count': _params.passages_count,
            'passages.characters': _params.passages_characters,
            'deduplicate': _params.deduplicate,
            'deduplicate.field': _params.deduplicate_field,
            'collection_ids': _params.collection_ids,
            'similar': _params.similar,
            'similar.document_ids': _params.similar_document_ids,
            'similar.fields': _params.similar_fields,
            'bias': _params.bias
        };
        var path = {
            'environment_id': _params.environment_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'federatedQuery');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/query',
                method: 'POST',
                body: body,
                path: path,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Watson-Logging-Opt-Out': _params.logging_opt_out
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /**
     * Query multiple collection system notices.
     *
     * Queries for notices (errors or warnings) that might have been generated by the system. Notices are generated when
     * ingesting documents and performing relevance training. See the [Discovery
     * documentation](https://cloud.ibm.com/docs/services/discovery?topic=discovery-query-concepts#query-concepts) for
     * more details on the query language.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string[]} params.collection_ids - A comma-separated list of collection IDs to be queried against.
     * @param {string} [params.filter] - A cacheable query that excludes documents that don't mention the query content.
     * Filter searches are better for metadata-type searches and for assessing the concepts in the data set.
     * @param {string} [params.query] - A query search returns all documents in your data set with full enrichments and
     * full text, but with the most relevant documents listed first.
     * @param {string} [params.natural_language_query] - A natural language query that returns relevant documents by
     * utilizing training data and natural language understanding.
     * @param {string} [params.aggregation] - An aggregation search that returns an exact answer by combining query search
     * with filters. Useful for applications to build lists, tables, and time series. For a full list of possible
     * aggregations, see the Query reference.
     * @param {number} [params.count] - Number of results to return. The maximum for the **count** and **offset** values
     * together in any one query is **10000**.
     * @param {string[]} [params.return_fields] - A comma-separated list of the portion of the document hierarchy to
     * return.
     * @param {number} [params.offset] - The number of query results to skip at the beginning. For example, if the total
     * number of results that are returned is 10 and the offset is 8, it returns the last two results. The maximum for the
     * **count** and **offset** values together in any one query is **10000**.
     * @param {string[]} [params.sort] - A comma-separated list of fields in the document to sort on. You can optionally
     * specify a sort direction by prefixing the field with `-` for descending or `+` for ascending. Ascending is the
     * default sort direction if no prefix is specified.
     * @param {boolean} [params.highlight] - When true, a highlight field is returned for each result which contains the
     * fields which match the query with `<em></em>` tags around the matching query terms.
     * @param {string} [params.deduplicate_field] - When specified, duplicate results based on the field specified are
     * removed from the returned results. Duplicate comparison is limited to the current query only, **offset** is not
     * considered. This parameter is currently Beta functionality.
     * @param {boolean} [params.similar] - When `true`, results are returned based on their similarity to the document IDs
     * specified in the **similar.document_ids** parameter.
     * @param {string[]} [params.similar_document_ids] - A comma-separated list of document IDs to find similar documents.
     *
     * **Tip:** Include the **natural_language_query** parameter to expand the scope of the document similarity search
     * with the natural language query. Other query parameters, such as **filter** and **query**, are subsequently applied
     * and reduce the scope.
     * @param {string[]} [params.similar_fields] - A comma-separated list of field names that are used as a basis for
     * comparison to identify similar documents. If not specified, the entire document is used for comparison.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.federatedQueryNotices = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_ids'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.federatedQueryNotices(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var query = {
            'collection_ids': _params.collection_ids,
            'filter': _params.filter,
            'query': _params.query,
            'natural_language_query': _params.natural_language_query,
            'aggregation': _params.aggregation,
            'count': _params.count,
            'return': _params.return_fields,
            'offset': _params.offset,
            'sort': _params.sort,
            'highlight': _params.highlight,
            'deduplicate.field': _params.deduplicate_field,
            'similar': _params.similar,
            'similar.document_ids': _params.similar_document_ids,
            'similar.fields': _params.similar_fields
        };
        var path = {
            'environment_id': _params.environment_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'federatedQueryNotices');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/notices',
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
     * Query a collection.
     *
     * By using this method, you can construct long queries. For details, see the [Discovery
     * documentation](https://cloud.ibm.com/docs/services/discovery?topic=discovery-query-concepts#query-concepts).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} [params.filter] - A cacheable query that excludes documents that don't mention the query content.
     * Filter searches are better for metadata-type searches and for assessing the concepts in the data set.
     * @param {string} [params.query] - A query search returns all documents in your data set with full enrichments and
     * full text, but with the most relevant documents listed first. Use a query search when you want to find the most
     * relevant search results.
     * @param {string} [params.natural_language_query] - A natural language query that returns relevant documents by
     * utilizing training data and natural language understanding.
     * @param {boolean} [params.passages] - A passages query that returns the most relevant passages from the results.
     * @param {string} [params.aggregation] - An aggregation search that returns an exact answer by combining query search
     * with filters. Useful for applications to build lists, tables, and time series. For a full list of possible
     * aggregations, see the Query reference.
     * @param {number} [params.count] - Number of results to return.
     * @param {string} [params.return_fields] - A comma-separated list of the portion of the document hierarchy to return.
     * @param {number} [params.offset] - The number of query results to skip at the beginning. For example, if the total
     * number of results that are returned is 10 and the offset is 8, it returns the last two results.
     * @param {string} [params.sort] - A comma-separated list of fields in the document to sort on. You can optionally
     * specify a sort direction by prefixing the field with `-` for descending or `+` for ascending. Ascending is the
     * default sort direction if no prefix is specified. This parameter cannot be used in the same query as the **bias**
     * parameter.
     * @param {boolean} [params.highlight] - When true, a highlight field is returned for each result which contains the
     * fields which match the query with `<em></em>` tags around the matching query terms.
     * @param {string} [params.passages_fields] - A comma-separated list of fields that passages are drawn from. If this
     * parameter not specified, then all top-level fields are included.
     * @param {number} [params.passages_count] - The maximum number of passages to return. The search returns fewer
     * passages if the requested total is not found. The default is `10`. The maximum is `100`.
     * @param {number} [params.passages_characters] - The approximate number of characters that any one passage will have.
     * @param {boolean} [params.deduplicate] - When `true`, and used with a Watson Discovery News collection, duplicate
     * results (based on the contents of the **title** field) are removed. Duplicate comparison is limited to the current
     * query only; **offset** is not considered. This parameter is currently Beta functionality.
     * @param {string} [params.deduplicate_field] - When specified, duplicate results based on the field specified are
     * removed from the returned results. Duplicate comparison is limited to the current query only, **offset** is not
     * considered. This parameter is currently Beta functionality.
     * @param {string} [params.collection_ids] - A comma-separated list of collection IDs to be queried against. Required
     * when querying multiple collections, invalid when performing a single collection query.
     * @param {boolean} [params.similar] - When `true`, results are returned based on their similarity to the document IDs
     * specified in the **similar.document_ids** parameter.
     * @param {string} [params.similar_document_ids] - A comma-separated list of document IDs to find similar documents.
     *
     * **Tip:** Include the **natural_language_query** parameter to expand the scope of the document similarity search
     * with the natural language query. Other query parameters, such as **filter** and **query**, are subsequently applied
     * and reduce the scope.
     * @param {string} [params.similar_fields] - A comma-separated list of field names that are used as a basis for
     * comparison to identify similar documents. If not specified, the entire document is used for comparison.
     * @param {string} [params.bias] - Field which the returned results will be biased against. The specified field must
     * be either a **date** or **number** format. When a **date** type field is specified returned results are biased
     * towards field values closer to the current date. When a **number** type field is specified, returned results are
     * biased towards higher field values. This parameter cannot be used in the same query as the **sort** parameter.
     * @param {boolean} [params.logging_opt_out] - If `true`, queries are not stored in the Discovery **Logs** endpoint.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.query = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.query(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'filter': _params.filter,
            'query': _params.query,
            'natural_language_query': _params.natural_language_query,
            'passages': _params.passages,
            'aggregation': _params.aggregation,
            'count': _params.count,
            'return': _params.return_fields,
            'offset': _params.offset,
            'sort': _params.sort,
            'highlight': _params.highlight,
            'passages.fields': _params.passages_fields,
            'passages.count': _params.passages_count,
            'passages.characters': _params.passages_characters,
            'deduplicate': _params.deduplicate,
            'deduplicate.field': _params.deduplicate_field,
            'collection_ids': _params.collection_ids,
            'similar': _params.similar,
            'similar.document_ids': _params.similar_document_ids,
            'similar.fields': _params.similar_fields,
            'bias': _params.bias
        };
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'query');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/query',
                method: 'POST',
                body: body,
                path: path,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Watson-Logging-Opt-Out': _params.logging_opt_out
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /**
     * Knowledge Graph entity query.
     *
     * See the [Knowledge Graph documentation](https://cloud.ibm.com/docs/services/discovery?topic=discovery-kg#kg) for
     * more details.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} [params.feature] - The entity query feature to perform. Supported features are `disambiguate` and
     * `similar_entities`.
     * @param {QueryEntitiesEntity} [params.entity] - A text string that appears within the entity text field.
     * @param {QueryEntitiesContext} [params.context] - Entity text to provide context for the queried entity and rank
     * based on that association. For example, if you wanted to query the city of London in England your query would look
     * for `London` with the context of `England`.
     * @param {number} [params.count] - The number of results to return. The default is `10`. The maximum is `1000`.
     * @param {number} [params.evidence_count] - The number of evidence items to return for each result. The default is
     * `0`. The maximum number of evidence items per query is 10,000.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.queryEntities = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.queryEntities(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'feature': _params.feature,
            'entity': _params.entity,
            'context': _params.context,
            'count': _params.count,
            'evidence_count': _params.evidence_count
        };
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'queryEntities');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/query_entities',
                method: 'POST',
                body: body,
                path: path,
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
     * Query system notices.
     *
     * Queries for notices (errors or warnings) that might have been generated by the system. Notices are generated when
     * ingesting documents and performing relevance training. See the [Discovery
     * documentation](https://cloud.ibm.com/docs/services/discovery?topic=discovery-query-concepts#query-concepts) for
     * more details on the query language.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} [params.filter] - A cacheable query that excludes documents that don't mention the query content.
     * Filter searches are better for metadata-type searches and for assessing the concepts in the data set.
     * @param {string} [params.query] - A query search returns all documents in your data set with full enrichments and
     * full text, but with the most relevant documents listed first.
     * @param {string} [params.natural_language_query] - A natural language query that returns relevant documents by
     * utilizing training data and natural language understanding.
     * @param {boolean} [params.passages] - A passages query that returns the most relevant passages from the results.
     * @param {string} [params.aggregation] - An aggregation search that returns an exact answer by combining query search
     * with filters. Useful for applications to build lists, tables, and time series. For a full list of possible
     * aggregations, see the Query reference.
     * @param {number} [params.count] - Number of results to return. The maximum for the **count** and **offset** values
     * together in any one query is **10000**.
     * @param {string[]} [params.return_fields] - A comma-separated list of the portion of the document hierarchy to
     * return.
     * @param {number} [params.offset] - The number of query results to skip at the beginning. For example, if the total
     * number of results that are returned is 10 and the offset is 8, it returns the last two results. The maximum for the
     * **count** and **offset** values together in any one query is **10000**.
     * @param {string[]} [params.sort] - A comma-separated list of fields in the document to sort on. You can optionally
     * specify a sort direction by prefixing the field with `-` for descending or `+` for ascending. Ascending is the
     * default sort direction if no prefix is specified.
     * @param {boolean} [params.highlight] - When true, a highlight field is returned for each result which contains the
     * fields which match the query with `<em></em>` tags around the matching query terms.
     * @param {string[]} [params.passages_fields] - A comma-separated list of fields that passages are drawn from. If this
     * parameter not specified, then all top-level fields are included.
     * @param {number} [params.passages_count] - The maximum number of passages to return. The search returns fewer
     * passages if the requested total is not found.
     * @param {number} [params.passages_characters] - The approximate number of characters that any one passage will have.
     * @param {string} [params.deduplicate_field] - When specified, duplicate results based on the field specified are
     * removed from the returned results. Duplicate comparison is limited to the current query only, **offset** is not
     * considered. This parameter is currently Beta functionality.
     * @param {boolean} [params.similar] - When `true`, results are returned based on their similarity to the document IDs
     * specified in the **similar.document_ids** parameter.
     * @param {string[]} [params.similar_document_ids] - A comma-separated list of document IDs to find similar documents.
     *
     * **Tip:** Include the **natural_language_query** parameter to expand the scope of the document similarity search
     * with the natural language query. Other query parameters, such as **filter** and **query**, are subsequently applied
     * and reduce the scope.
     * @param {string[]} [params.similar_fields] - A comma-separated list of field names that are used as a basis for
     * comparison to identify similar documents. If not specified, the entire document is used for comparison.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.queryNotices = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.queryNotices(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var query = {
            'filter': _params.filter,
            'query': _params.query,
            'natural_language_query': _params.natural_language_query,
            'passages': _params.passages,
            'aggregation': _params.aggregation,
            'count': _params.count,
            'return': _params.return_fields,
            'offset': _params.offset,
            'sort': _params.sort,
            'highlight': _params.highlight,
            'passages.fields': _params.passages_fields,
            'passages.count': _params.passages_count,
            'passages.characters': _params.passages_characters,
            'deduplicate.field': _params.deduplicate_field,
            'similar': _params.similar,
            'similar.document_ids': _params.similar_document_ids,
            'similar.fields': _params.similar_fields
        };
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'queryNotices');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/notices',
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
     * Knowledge Graph relationship query.
     *
     * See the [Knowledge Graph documentation](https://cloud.ibm.com/docs/services/discovery?topic=discovery-kg#kg) for
     * more details.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {QueryRelationsEntity[]} [params.entities] - An array of entities to find relationships for.
     * @param {QueryEntitiesContext} [params.context] - Entity text to provide context for the queried entity and rank
     * based on that association. For example, if you wanted to query the city of London in England your query would look
     * for `London` with the context of `England`.
     * @param {string} [params.sort] - The sorting method for the relationships, can be `score` or `frequency`.
     * `frequency` is the number of unique times each entity is identified. The default is `score`. This parameter cannot
     * be used in the same query as the **bias** parameter.
     * @param {QueryRelationsFilter} [params.filter] -
     * @param {number} [params.count] - The number of results to return. The default is `10`. The maximum is `1000`.
     * @param {number} [params.evidence_count] - The number of evidence items to return for each result. The default is
     * `0`. The maximum number of evidence items per query is 10,000.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.queryRelations = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.queryRelations(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'entities': _params.entities,
            'context': _params.context,
            'sort': _params.sort,
            'filter': _params.filter,
            'count': _params.count,
            'evidence_count': _params.evidence_count
        };
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'queryRelations');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/query_relations',
                method: 'POST',
                body: body,
                path: path,
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
     * trainingData
     ************************/
    /**
     * Add query to training data.
     *
     * Adds a query to the training data for this collection. The query can contain a filter and natural language query.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} [params.natural_language_query] - The natural text query for the new training query.
     * @param {string} [params.filter] - The filter used on the collection before the **natural_language_query** is
     * applied.
     * @param {TrainingExample[]} [params.examples] - Array of training examples.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.addTrainingData = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.addTrainingData(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'natural_language_query': _params.natural_language_query,
            'filter': _params.filter,
            'examples': _params.examples
        };
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'addTrainingData');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/training_data',
                method: 'POST',
                body: body,
                path: path,
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
     * Add example to training data query.
     *
     * Adds a example to this training data query.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} params.query_id - The ID of the query used for training.
     * @param {string} [params.document_id] - The document ID associated with this training example.
     * @param {string} [params.cross_reference] - The cross reference associated with this training example.
     * @param {number} [params.relevance] - The relevance of the training example.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.createTrainingExample = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id', 'query_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.createTrainingExample(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'document_id': _params.document_id,
            'cross_reference': _params.cross_reference,
            'relevance': _params.relevance
        };
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id,
            'query_id': _params.query_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'createTrainingExample');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/training_data/{query_id}/examples',
                method: 'POST',
                body: body,
                path: path,
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
     * Delete all training data.
     *
     * Deletes all training data from a collection.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.deleteAllTrainingData = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.deleteAllTrainingData(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'deleteAllTrainingData');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/training_data',
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
     * Delete a training data query.
     *
     * Removes the training data query and all associated examples from the training data set.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} params.query_id - The ID of the query used for training.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.deleteTrainingData = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id', 'query_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.deleteTrainingData(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id,
            'query_id': _params.query_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'deleteTrainingData');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/training_data/{query_id}',
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
     * Delete example for training data query.
     *
     * Deletes the example document with the given ID from the training data query.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} params.query_id - The ID of the query used for training.
     * @param {string} params.example_id - The ID of the document as it is indexed.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.deleteTrainingExample = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id', 'query_id', 'example_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.deleteTrainingExample(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id,
            'query_id': _params.query_id,
            'example_id': _params.example_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'deleteTrainingExample');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/training_data/{query_id}/examples/{example_id}',
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
     * Get details about a query.
     *
     * Gets details for a specific training data query, including the query string and all examples.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} params.query_id - The ID of the query used for training.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.getTrainingData = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id', 'query_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getTrainingData(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id,
            'query_id': _params.query_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'getTrainingData');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/training_data/{query_id}',
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
     * Get details for training data example.
     *
     * Gets the details for this training example.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} params.query_id - The ID of the query used for training.
     * @param {string} params.example_id - The ID of the document as it is indexed.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.getTrainingExample = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id', 'query_id', 'example_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getTrainingExample(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id,
            'query_id': _params.query_id,
            'example_id': _params.example_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'getTrainingExample');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/training_data/{query_id}/examples/{example_id}',
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
     * List training data.
     *
     * Lists the training data for the specified collection.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.listTrainingData = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.listTrainingData(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'listTrainingData');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/training_data',
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
     * List examples for a training data query.
     *
     * List all examples for this training data query.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} params.query_id - The ID of the query used for training.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.listTrainingExamples = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id', 'query_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.listTrainingExamples(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id,
            'query_id': _params.query_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'listTrainingExamples');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/training_data/{query_id}/examples',
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
     * Change label or cross reference for example.
     *
     * Changes the label or cross reference query for this training data example.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} params.query_id - The ID of the query used for training.
     * @param {string} params.example_id - The ID of the document as it is indexed.
     * @param {string} [params.cross_reference] - The example to add.
     * @param {number} [params.relevance] - The relevance value for this example.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.updateTrainingExample = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'collection_id', 'query_id', 'example_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.updateTrainingExample(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'cross_reference': _params.cross_reference,
            'relevance': _params.relevance
        };
        var path = {
            'environment_id': _params.environment_id,
            'collection_id': _params.collection_id,
            'query_id': _params.query_id,
            'example_id': _params.example_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'updateTrainingExample');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/collections/{collection_id}/training_data/{query_id}/examples/{example_id}',
                method: 'PUT',
                body: body,
                path: path,
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
     * userData
     ************************/
    /**
     * Delete labeled data.
     *
     * Deletes all data associated with a specified customer ID. The method has no effect if no data is associated with
     * the customer ID.
     *
     * You associate a customer ID with data by passing the **X-Watson-Metadata** header with a request that passes data.
     * For more information about personal data and customer IDs, see [Information
     * security](https://cloud.ibm.com/docs/services/discovery?topic=discovery-information-security#information-security).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.customer_id - The customer ID for which all data is to be deleted.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.deleteUserData = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['customer_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.deleteUserData(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var query = {
            'customer_id': _params.customer_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'deleteUserData');
        var parameters = {
            options: {
                url: '/v1/user_data',
                method: 'DELETE',
                qs: query,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, sdkHeaders, {}, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /*************************
     * eventsAndFeedback
     ************************/
    /**
     * Create event.
     *
     * The **Events** API can be used to create log entries that are associated with specific queries. For example, you
     * can record which documents in the results set were \"clicked\" by a user and when that click occured.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.type - The event type to be created.
     * @param {EventData} params.data - Query event data object.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.createEvent = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['type', 'data'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.createEvent(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'type': _params.type,
            'data': _params.data
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'createEvent');
        var parameters = {
            options: {
                url: '/v1/events',
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
     * Percentage of queries with an associated event.
     *
     * The percentage of queries using the **natural_language_query** parameter that have a corresponding \"click\" event
     * over a specified time window.  This metric requires having integrated event tracking in your application using the
     * **Events** API.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {string} [params.start_time] - Metric is computed from data recorded after this timestamp; must be in
     * `YYYY-MM-DDThh:mm:ssZ` format.
     * @param {string} [params.end_time] - Metric is computed from data recorded before this timestamp; must be in
     * `YYYY-MM-DDThh:mm:ssZ` format.
     * @param {string} [params.result_type] - The type of result to consider when calculating the metric.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.getMetricsEventRate = function (params, callback) {
        var _this = this;
        var _params = (typeof params === 'function' && !callback) ? {} : extend({}, params);
        var _callback = (typeof params === 'function' && !callback) ? params : callback;
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getMetricsEventRate(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var query = {
            'start_time': _params.start_time,
            'end_time': _params.end_time,
            'result_type': _params.result_type
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'getMetricsEventRate');
        var parameters = {
            options: {
                url: '/v1/metrics/event_rate',
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
    /**
     * Number of queries over time.
     *
     * Total number of queries using the **natural_language_query** parameter over a specific time window.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {string} [params.start_time] - Metric is computed from data recorded after this timestamp; must be in
     * `YYYY-MM-DDThh:mm:ssZ` format.
     * @param {string} [params.end_time] - Metric is computed from data recorded before this timestamp; must be in
     * `YYYY-MM-DDThh:mm:ssZ` format.
     * @param {string} [params.result_type] - The type of result to consider when calculating the metric.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.getMetricsQuery = function (params, callback) {
        var _this = this;
        var _params = (typeof params === 'function' && !callback) ? {} : extend({}, params);
        var _callback = (typeof params === 'function' && !callback) ? params : callback;
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getMetricsQuery(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var query = {
            'start_time': _params.start_time,
            'end_time': _params.end_time,
            'result_type': _params.result_type
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'getMetricsQuery');
        var parameters = {
            options: {
                url: '/v1/metrics/number_of_queries',
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
    /**
     * Number of queries with an event over time.
     *
     * Total number of queries using the **natural_language_query** parameter that have a corresponding \"click\" event
     * over a specified time window. This metric requires having integrated event tracking in your application using the
     * **Events** API.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {string} [params.start_time] - Metric is computed from data recorded after this timestamp; must be in
     * `YYYY-MM-DDThh:mm:ssZ` format.
     * @param {string} [params.end_time] - Metric is computed from data recorded before this timestamp; must be in
     * `YYYY-MM-DDThh:mm:ssZ` format.
     * @param {string} [params.result_type] - The type of result to consider when calculating the metric.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.getMetricsQueryEvent = function (params, callback) {
        var _this = this;
        var _params = (typeof params === 'function' && !callback) ? {} : extend({}, params);
        var _callback = (typeof params === 'function' && !callback) ? params : callback;
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getMetricsQueryEvent(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var query = {
            'start_time': _params.start_time,
            'end_time': _params.end_time,
            'result_type': _params.result_type
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'getMetricsQueryEvent');
        var parameters = {
            options: {
                url: '/v1/metrics/number_of_queries_with_event',
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
    /**
     * Number of queries with no search results over time.
     *
     * Total number of queries using the **natural_language_query** parameter that have no results returned over a
     * specified time window.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {string} [params.start_time] - Metric is computed from data recorded after this timestamp; must be in
     * `YYYY-MM-DDThh:mm:ssZ` format.
     * @param {string} [params.end_time] - Metric is computed from data recorded before this timestamp; must be in
     * `YYYY-MM-DDThh:mm:ssZ` format.
     * @param {string} [params.result_type] - The type of result to consider when calculating the metric.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.getMetricsQueryNoResults = function (params, callback) {
        var _this = this;
        var _params = (typeof params === 'function' && !callback) ? {} : extend({}, params);
        var _callback = (typeof params === 'function' && !callback) ? params : callback;
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getMetricsQueryNoResults(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var query = {
            'start_time': _params.start_time,
            'end_time': _params.end_time,
            'result_type': _params.result_type
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'getMetricsQueryNoResults');
        var parameters = {
            options: {
                url: '/v1/metrics/number_of_queries_with_no_search_results',
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
    /**
     * Most frequent query tokens with an event.
     *
     * The most frequent query tokens parsed from the **natural_language_query** parameter and their corresponding
     * \"click\" event rate within the recording period (queries and events are stored for 30 days). A query token is an
     * individual word or unigram within the query string.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {number} [params.count] - Number of results to return. The maximum for the **count** and **offset** values
     * together in any one query is **10000**.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.getMetricsQueryTokenEvent = function (params, callback) {
        var _this = this;
        var _params = (typeof params === 'function' && !callback) ? {} : extend({}, params);
        var _callback = (typeof params === 'function' && !callback) ? params : callback;
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getMetricsQueryTokenEvent(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var query = {
            'count': _params.count
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'getMetricsQueryTokenEvent');
        var parameters = {
            options: {
                url: '/v1/metrics/top_query_tokens_with_event_rate',
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
    /**
     * Search the query and event log.
     *
     * Searches the query and event log to find query sessions that match the specified criteria. Searching the **logs**
     * endpoint uses the standard Discovery query syntax for the parameters that are supported.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {string} [params.filter] - A cacheable query that excludes documents that don't mention the query content.
     * Filter searches are better for metadata-type searches and for assessing the concepts in the data set.
     * @param {string} [params.query] - A query search returns all documents in your data set with full enrichments and
     * full text, but with the most relevant documents listed first.
     * @param {number} [params.count] - Number of results to return. The maximum for the **count** and **offset** values
     * together in any one query is **10000**.
     * @param {number} [params.offset] - The number of query results to skip at the beginning. For example, if the total
     * number of results that are returned is 10 and the offset is 8, it returns the last two results. The maximum for the
     * **count** and **offset** values together in any one query is **10000**.
     * @param {string[]} [params.sort] - A comma-separated list of fields in the document to sort on. You can optionally
     * specify a sort direction by prefixing the field with `-` for descending or `+` for ascending. Ascending is the
     * default sort direction if no prefix is specified.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.queryLog = function (params, callback) {
        var _this = this;
        var _params = (typeof params === 'function' && !callback) ? {} : extend({}, params);
        var _callback = (typeof params === 'function' && !callback) ? params : callback;
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.queryLog(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var query = {
            'filter': _params.filter,
            'query': _params.query,
            'count': _params.count,
            'offset': _params.offset,
            'sort': _params.sort
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'queryLog');
        var parameters = {
            options: {
                url: '/v1/logs',
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
     * credentials
     ************************/
    /**
     * Create credentials.
     *
     * Creates a set of credentials to connect to a remote source. Created credentials are used in a configuration to
     * associate a collection with the remote source.
     *
     * **Note:** All credentials are sent over an encrypted connection and encrypted at rest.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} [params.source_type] - The source that this credentials object connects to.
     * -  `box` indicates the credentials are used to connect an instance of Enterprise Box.
     * -  `salesforce` indicates the credentials are used to connect to Salesforce.
     * -  `sharepoint` indicates the credentials are used to connect to Microsoft SharePoint Online.
     * -  `web_crawl` indicates the credentials are used to perform a web crawl.
     * =  `cloud_object_storage` indicates the credentials are used to connect to an IBM Cloud Object Store.
     * @param {CredentialDetails} [params.credential_details] - Object containing details of the stored credentials.
     *
     * Obtain credentials for your source from the administrator of the source.
     * @param {string} [params.status] - The current status of this set of credentials. `connected` indicates that the
     * credentials are available to use with the source configuration of a collection. `invalid` refers to the credentials
     * (for example, the password provided has expired) and must be corrected before they can be used with a collection.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.createCredentials = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.createCredentials(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'source_type': _params.source_type,
            'credential_details': _params.credential_details,
            'status': _params.status
        };
        var path = {
            'environment_id': _params.environment_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'createCredentials');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/credentials',
                method: 'POST',
                body: body,
                path: path,
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
     * Delete credentials.
     *
     * Deletes a set of stored credentials from your Discovery instance.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.credential_id - The unique identifier for a set of source credentials.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.deleteCredentials = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'credential_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.deleteCredentials(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id,
            'credential_id': _params.credential_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'deleteCredentials');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/credentials/{credential_id}',
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
     * View Credentials.
     *
     * Returns details about the specified credentials.
     *
     *  **Note:** Secure credential information such as a password or SSH key is never returned and must be obtained from
     * the source system.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.credential_id - The unique identifier for a set of source credentials.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.getCredentials = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'credential_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getCredentials(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id,
            'credential_id': _params.credential_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'getCredentials');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/credentials/{credential_id}',
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
     * List credentials.
     *
     * List all the source credentials that have been created for this service instance.
     *
     *  **Note:**  All credentials are sent over an encrypted connection and encrypted at rest.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.listCredentials = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.listCredentials(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'listCredentials');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/credentials',
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
     * Update credentials.
     *
     * Updates an existing set of source credentials.
     *
     * **Note:** All credentials are sent over an encrypted connection and encrypted at rest.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.credential_id - The unique identifier for a set of source credentials.
     * @param {string} [params.source_type] - The source that this credentials object connects to.
     * -  `box` indicates the credentials are used to connect an instance of Enterprise Box.
     * -  `salesforce` indicates the credentials are used to connect to Salesforce.
     * -  `sharepoint` indicates the credentials are used to connect to Microsoft SharePoint Online.
     * -  `web_crawl` indicates the credentials are used to perform a web crawl.
     * =  `cloud_object_storage` indicates the credentials are used to connect to an IBM Cloud Object Store.
     * @param {CredentialDetails} [params.credential_details] - Object containing details of the stored credentials.
     *
     * Obtain credentials for your source from the administrator of the source.
     * @param {string} [params.status] - The current status of this set of credentials. `connected` indicates that the
     * credentials are available to use with the source configuration of a collection. `invalid` refers to the credentials
     * (for example, the password provided has expired) and must be corrected before they can be used with a collection.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.updateCredentials = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'credential_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.updateCredentials(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'source_type': _params.source_type,
            'credential_details': _params.credential_details,
            'status': _params.status
        };
        var path = {
            'environment_id': _params.environment_id,
            'credential_id': _params.credential_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'updateCredentials');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/credentials/{credential_id}',
                method: 'PUT',
                body: body,
                path: path,
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
     * gatewayConfiguration
     ************************/
    /**
     * Create Gateway.
     *
     * Create a gateway configuration to use with a remotely installed gateway.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} [params.name] - User-defined name.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.createGateway = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.createGateway(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'name': _params.name
        };
        var path = {
            'environment_id': _params.environment_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'createGateway');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/gateways',
                method: 'POST',
                body: body,
                path: path,
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
     * Delete Gateway.
     *
     * Delete the specified gateway configuration.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.gateway_id - The requested gateway ID.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.deleteGateway = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'gateway_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.deleteGateway(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id,
            'gateway_id': _params.gateway_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'deleteGateway');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/gateways/{gateway_id}',
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
     * List Gateway Details.
     *
     * List information about the specified gateway.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.gateway_id - The requested gateway ID.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.getGateway = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id', 'gateway_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getGateway(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id,
            'gateway_id': _params.gateway_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'getGateway');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/gateways/{gateway_id}',
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
     * List Gateways.
     *
     * List the currently configured gateways.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    DiscoveryV1.prototype.listGateways = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['environment_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.listGateways(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'environment_id': _params.environment_id
        };
        var sdkHeaders = common_1.getSdkHeaders('discovery', 'v1', 'listGateways');
        var parameters = {
            options: {
                url: '/v1/environments/{environment_id}/gateways',
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
    DiscoveryV1.URL = 'https://gateway.watsonplatform.net/discovery/api';
    return DiscoveryV1;
}(ibm_cloud_sdk_core_1.BaseService));
DiscoveryV1.prototype.name = 'discovery';
DiscoveryV1.prototype.serviceVersion = 'v1';
/*************************
 * interfaces
 ************************/
(function (DiscoveryV1) {
    /** Constants for the `createEnvironment` operation. */
    var CreateEnvironmentConstants;
    (function (CreateEnvironmentConstants) {
        /** Size of the environment. In the Lite plan the default and only accepted value is `LT`, in all other plans the default is `S`. */
        var Size;
        (function (Size) {
            Size["LT"] = "LT";
            Size["XS"] = "XS";
            Size["S"] = "S";
            Size["MS"] = "MS";
            Size["M"] = "M";
            Size["ML"] = "ML";
            Size["L"] = "L";
            Size["XL"] = "XL";
            Size["XXL"] = "XXL";
            Size["XXXL"] = "XXXL";
        })(Size = CreateEnvironmentConstants.Size || (CreateEnvironmentConstants.Size = {}));
    })(CreateEnvironmentConstants = DiscoveryV1.CreateEnvironmentConstants || (DiscoveryV1.CreateEnvironmentConstants = {}));
    /** Constants for the `updateEnvironment` operation. */
    var UpdateEnvironmentConstants;
    (function (UpdateEnvironmentConstants) {
        /** Size that the environment should be increased to. Environment size cannot be modified when using a Lite plan. Environment size can only increased and not decreased. */
        var Size;
        (function (Size) {
            Size["S"] = "S";
            Size["MS"] = "MS";
            Size["M"] = "M";
            Size["ML"] = "ML";
            Size["L"] = "L";
            Size["XL"] = "XL";
            Size["XXL"] = "XXL";
            Size["XXXL"] = "XXXL";
        })(Size = UpdateEnvironmentConstants.Size || (UpdateEnvironmentConstants.Size = {}));
    })(UpdateEnvironmentConstants = DiscoveryV1.UpdateEnvironmentConstants || (DiscoveryV1.UpdateEnvironmentConstants = {}));
    /** Constants for the `testConfigurationInEnvironment` operation. */
    var TestConfigurationInEnvironmentConstants;
    (function (TestConfigurationInEnvironmentConstants) {
        /** The content type of file. */
        var FileContentType;
        (function (FileContentType) {
            FileContentType["APPLICATION_JSON"] = "application/json";
            FileContentType["APPLICATION_MSWORD"] = "application/msword";
            FileContentType["APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
            FileContentType["APPLICATION_PDF"] = "application/pdf";
            FileContentType["TEXT_HTML"] = "text/html";
            FileContentType["APPLICATION_XHTML_XML"] = "application/xhtml+xml";
        })(FileContentType = TestConfigurationInEnvironmentConstants.FileContentType || (TestConfigurationInEnvironmentConstants.FileContentType = {}));
        /** Specify to only run the input document through the given step instead of running the input document through the entire ingestion workflow. Valid values are `convert`, `enrich`, and `normalize`. */
        var Step;
        (function (Step) {
            Step["HTML_INPUT"] = "html_input";
            Step["HTML_OUTPUT"] = "html_output";
            Step["JSON_OUTPUT"] = "json_output";
            Step["JSON_NORMALIZATIONS_OUTPUT"] = "json_normalizations_output";
            Step["ENRICHMENTS_OUTPUT"] = "enrichments_output";
            Step["NORMALIZATIONS_OUTPUT"] = "normalizations_output";
        })(Step = TestConfigurationInEnvironmentConstants.Step || (TestConfigurationInEnvironmentConstants.Step = {}));
    })(TestConfigurationInEnvironmentConstants = DiscoveryV1.TestConfigurationInEnvironmentConstants || (DiscoveryV1.TestConfigurationInEnvironmentConstants = {}));
    /** Constants for the `createCollection` operation. */
    var CreateCollectionConstants;
    (function (CreateCollectionConstants) {
        /** The language of the documents stored in the collection, in the form of an ISO 639-1 language code. */
        var Language;
        (function (Language) {
            Language["EN"] = "en";
            Language["ES"] = "es";
            Language["DE"] = "de";
            Language["AR"] = "ar";
            Language["FR"] = "fr";
            Language["IT"] = "it";
            Language["JA"] = "ja";
            Language["KO"] = "ko";
            Language["PT"] = "pt";
            Language["NL"] = "nl";
            Language["ZH_CN"] = "zh-CN";
        })(Language = CreateCollectionConstants.Language || (CreateCollectionConstants.Language = {}));
    })(CreateCollectionConstants = DiscoveryV1.CreateCollectionConstants || (DiscoveryV1.CreateCollectionConstants = {}));
    /** Constants for the `addDocument` operation. */
    var AddDocumentConstants;
    (function (AddDocumentConstants) {
        /** The content type of file. */
        var FileContentType;
        (function (FileContentType) {
            FileContentType["APPLICATION_JSON"] = "application/json";
            FileContentType["APPLICATION_MSWORD"] = "application/msword";
            FileContentType["APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
            FileContentType["APPLICATION_PDF"] = "application/pdf";
            FileContentType["TEXT_HTML"] = "text/html";
            FileContentType["APPLICATION_XHTML_XML"] = "application/xhtml+xml";
        })(FileContentType = AddDocumentConstants.FileContentType || (AddDocumentConstants.FileContentType = {}));
    })(AddDocumentConstants = DiscoveryV1.AddDocumentConstants || (DiscoveryV1.AddDocumentConstants = {}));
    /** Constants for the `updateDocument` operation. */
    var UpdateDocumentConstants;
    (function (UpdateDocumentConstants) {
        /** The content type of file. */
        var FileContentType;
        (function (FileContentType) {
            FileContentType["APPLICATION_JSON"] = "application/json";
            FileContentType["APPLICATION_MSWORD"] = "application/msword";
            FileContentType["APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
            FileContentType["APPLICATION_PDF"] = "application/pdf";
            FileContentType["TEXT_HTML"] = "text/html";
            FileContentType["APPLICATION_XHTML_XML"] = "application/xhtml+xml";
        })(FileContentType = UpdateDocumentConstants.FileContentType || (UpdateDocumentConstants.FileContentType = {}));
    })(UpdateDocumentConstants = DiscoveryV1.UpdateDocumentConstants || (DiscoveryV1.UpdateDocumentConstants = {}));
    /** Constants for the `queryRelations` operation. */
    var QueryRelationsConstants;
    (function (QueryRelationsConstants) {
        /** The sorting method for the relationships, can be `score` or `frequency`. `frequency` is the number of unique times each entity is identified. The default is `score`. This parameter cannot be used in the same query as the **bias** parameter. */
        var Sort;
        (function (Sort) {
            Sort["SCORE"] = "score";
            Sort["FREQUENCY"] = "frequency";
        })(Sort = QueryRelationsConstants.Sort || (QueryRelationsConstants.Sort = {}));
    })(QueryRelationsConstants = DiscoveryV1.QueryRelationsConstants || (DiscoveryV1.QueryRelationsConstants = {}));
    /** Constants for the `createEvent` operation. */
    var CreateEventConstants;
    (function (CreateEventConstants) {
        /** The event type to be created. */
        var Type;
        (function (Type) {
            Type["CLICK"] = "click";
        })(Type = CreateEventConstants.Type || (CreateEventConstants.Type = {}));
    })(CreateEventConstants = DiscoveryV1.CreateEventConstants || (DiscoveryV1.CreateEventConstants = {}));
    /** Constants for the `getMetricsEventRate` operation. */
    var GetMetricsEventRateConstants;
    (function (GetMetricsEventRateConstants) {
        /** The type of result to consider when calculating the metric. */
        var ResultType;
        (function (ResultType) {
            ResultType["DOCUMENT"] = "document";
        })(ResultType = GetMetricsEventRateConstants.ResultType || (GetMetricsEventRateConstants.ResultType = {}));
    })(GetMetricsEventRateConstants = DiscoveryV1.GetMetricsEventRateConstants || (DiscoveryV1.GetMetricsEventRateConstants = {}));
    /** Constants for the `getMetricsQuery` operation. */
    var GetMetricsQueryConstants;
    (function (GetMetricsQueryConstants) {
        /** The type of result to consider when calculating the metric. */
        var ResultType;
        (function (ResultType) {
            ResultType["DOCUMENT"] = "document";
        })(ResultType = GetMetricsQueryConstants.ResultType || (GetMetricsQueryConstants.ResultType = {}));
    })(GetMetricsQueryConstants = DiscoveryV1.GetMetricsQueryConstants || (DiscoveryV1.GetMetricsQueryConstants = {}));
    /** Constants for the `getMetricsQueryEvent` operation. */
    var GetMetricsQueryEventConstants;
    (function (GetMetricsQueryEventConstants) {
        /** The type of result to consider when calculating the metric. */
        var ResultType;
        (function (ResultType) {
            ResultType["DOCUMENT"] = "document";
        })(ResultType = GetMetricsQueryEventConstants.ResultType || (GetMetricsQueryEventConstants.ResultType = {}));
    })(GetMetricsQueryEventConstants = DiscoveryV1.GetMetricsQueryEventConstants || (DiscoveryV1.GetMetricsQueryEventConstants = {}));
    /** Constants for the `getMetricsQueryNoResults` operation. */
    var GetMetricsQueryNoResultsConstants;
    (function (GetMetricsQueryNoResultsConstants) {
        /** The type of result to consider when calculating the metric. */
        var ResultType;
        (function (ResultType) {
            ResultType["DOCUMENT"] = "document";
        })(ResultType = GetMetricsQueryNoResultsConstants.ResultType || (GetMetricsQueryNoResultsConstants.ResultType = {}));
    })(GetMetricsQueryNoResultsConstants = DiscoveryV1.GetMetricsQueryNoResultsConstants || (DiscoveryV1.GetMetricsQueryNoResultsConstants = {}));
    /** Constants for the `createCredentials` operation. */
    var CreateCredentialsConstants;
    (function (CreateCredentialsConstants) {
        /** The source that this credentials object connects to. -  `box` indicates the credentials are used to connect an instance of Enterprise Box. -  `salesforce` indicates the credentials are used to connect to Salesforce. -  `sharepoint` indicates the credentials are used to connect to Microsoft SharePoint Online. -  `web_crawl` indicates the credentials are used to perform a web crawl. =  `cloud_object_storage` indicates the credentials are used to connect to an IBM Cloud Object Store. */
        var SourceType;
        (function (SourceType) {
            SourceType["BOX"] = "box";
            SourceType["SALESFORCE"] = "salesforce";
            SourceType["SHAREPOINT"] = "sharepoint";
            SourceType["WEB_CRAWL"] = "web_crawl";
            SourceType["CLOUD_OBJECT_STORAGE"] = "cloud_object_storage";
        })(SourceType = CreateCredentialsConstants.SourceType || (CreateCredentialsConstants.SourceType = {}));
        /** The current status of this set of credentials. `connected` indicates that the credentials are available to use with the source configuration of a collection. `invalid` refers to the credentials (for example, the password provided has expired) and must be corrected before they can be used with a collection. */
        var Status;
        (function (Status) {
            Status["CONNECTED"] = "connected";
            Status["INVALID"] = "invalid";
        })(Status = CreateCredentialsConstants.Status || (CreateCredentialsConstants.Status = {}));
    })(CreateCredentialsConstants = DiscoveryV1.CreateCredentialsConstants || (DiscoveryV1.CreateCredentialsConstants = {}));
    /** Constants for the `updateCredentials` operation. */
    var UpdateCredentialsConstants;
    (function (UpdateCredentialsConstants) {
        /** The source that this credentials object connects to. -  `box` indicates the credentials are used to connect an instance of Enterprise Box. -  `salesforce` indicates the credentials are used to connect to Salesforce. -  `sharepoint` indicates the credentials are used to connect to Microsoft SharePoint Online. -  `web_crawl` indicates the credentials are used to perform a web crawl. =  `cloud_object_storage` indicates the credentials are used to connect to an IBM Cloud Object Store. */
        var SourceType;
        (function (SourceType) {
            SourceType["BOX"] = "box";
            SourceType["SALESFORCE"] = "salesforce";
            SourceType["SHAREPOINT"] = "sharepoint";
            SourceType["WEB_CRAWL"] = "web_crawl";
            SourceType["CLOUD_OBJECT_STORAGE"] = "cloud_object_storage";
        })(SourceType = UpdateCredentialsConstants.SourceType || (UpdateCredentialsConstants.SourceType = {}));
        /** The current status of this set of credentials. `connected` indicates that the credentials are available to use with the source configuration of a collection. `invalid` refers to the credentials (for example, the password provided has expired) and must be corrected before they can be used with a collection. */
        var Status;
        (function (Status) {
            Status["CONNECTED"] = "connected";
            Status["INVALID"] = "invalid";
        })(Status = UpdateCredentialsConstants.Status || (UpdateCredentialsConstants.Status = {}));
    })(UpdateCredentialsConstants = DiscoveryV1.UpdateCredentialsConstants || (DiscoveryV1.UpdateCredentialsConstants = {}));
})(DiscoveryV1 || (DiscoveryV1 = {}));
module.exports = DiscoveryV1;
//# sourceMappingURL=v1.js.map