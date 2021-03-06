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
 * The IBM Watson&trade; Visual Recognition service uses deep learning algorithms to identify scenes, objects, and faces  in images you upload to the service. You can create and train a custom classifier to identify subjects that suit your needs.
 */
var VisualRecognitionV3 = /** @class */ (function (_super) {
    __extends(VisualRecognitionV3, _super);
    /**
     * Construct a VisualRecognitionV3 object.
     *
     * @param {Object} options - Options for the service.
     * @param {string} options.version - The API version date to use with the service, in "YYYY-MM-DD" format. Whenever the API is changed in a backwards incompatible way, a new minor version of the API is released. The service uses the API version for the date you specify, or the most recent version before that date. Note that you should not programmatically specify the current date at runtime, in case the API has been updated since your application's release. Instead, specify a version date that is compatible with your application, and don't change it until your application is ready for a later version.
     * @param {string} [options.url] - The base url to use when contacting the service (e.g. 'https://gateway.watsonplatform.net/visual-recognition/api'). The base url may differ between IBM Cloud regions.
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
     * @returns {VisualRecognitionV3}
     * @throws {Error}
     */
    function VisualRecognitionV3(options) {
        var _this = _super.call(this, options) || this;
        // check if 'version' was provided
        if (typeof _this._options.version === 'undefined') {
            throw new Error('Argument error: version was not specified');
        }
        _this._options.qs.version = options.version;
        return _this;
    }
    /*************************
     * general
     ************************/
    /**
     * Classify images.
     *
     * Classify images with built-in or custom classifiers.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} [params.images_file] - An image file (.gif, .jpg, .png, .tif) or
     * .zip file with images. Maximum image size is 10 MB. Include no more than 20 images and limit the .zip file to 100
     * MB. Encode the image and .zip file names in UTF-8 if they contain non-ASCII characters. The service assumes UTF-8
     * encoding if it encounters non-ASCII characters.
     *
     * You can also include an image with the **url** parameter.
     * @param {string} [params.images_filename] - The filename for images_file.
     * @param {string} [params.images_file_content_type] - The content type of images_file.
     * @param {string} [params.url] - The URL of an image (.gif, .jpg, .png, .tif) to analyze. The minimum recommended
     * pixel density is 32X32 pixels, but the service tends to perform better with images that are at least 224 x 224
     * pixels. The maximum image size is 10 MB.
     *
     * You can also include images with the **images_file** parameter.
     * @param {number} [params.threshold] - The minimum score a class must have to be displayed in the response. Set the
     * threshold to `0.0` to return all identified classes.
     * @param {string[]} [params.owners] - The categories of classifiers to apply. The **classifier_ids** parameter
     * overrides **owners**, so make sure that **classifier_ids** is empty.
     * - Use `IBM` to classify against the `default` general classifier. You get the same result if both
     * **classifier_ids** and **owners** parameters are empty.
     * - Use `me` to classify against all your custom classifiers. However, for better performance use **classifier_ids**
     * to specify the specific custom classifiers to apply.
     * - Use both `IBM` and `me` to analyze the image against both classifier categories.
     * @param {string[]} [params.classifier_ids] - Which classifiers to apply. Overrides the **owners** parameter. You can
     * specify both custom and built-in classifier IDs. The built-in `default` classifier is used if both
     * **classifier_ids** and **owners** parameters are empty.
     *
     * The following built-in classifier IDs require no training:
     * - `default`: Returns classes from thousands of general tags.
     * - `food`: Enhances specificity and accuracy for images of food items.
     * - `explicit`: Evaluates whether the image might be pornographic.
     * @param {string} [params.accept_language] - The desired language of parts of the response. See the response for
     * details.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    VisualRecognitionV3.prototype.classify = function (params, callback) {
        var _this = this;
        var _params = (typeof params === 'function' && !callback) ? {} : extend({}, params);
        var _callback = (typeof params === 'function' && !callback) ? params : callback;
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.classify(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var formData = {
            'images_file': {
                data: _params.images_file,
                filename: _params.images_filename,
                contentType: _params.images_file_content_type
            },
            'url': _params.url,
            'threshold': _params.threshold,
            'owners': _params.owners,
            'classifier_ids': _params.classifier_ids
        };
        var sdkHeaders = common_1.getSdkHeaders('watson_vision_combined', 'v3', 'classify');
        var parameters = {
            options: {
                url: '/v3/classify',
                method: 'POST',
                formData: formData
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Accept-Language': _params.accept_language
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /*************************
     * face
     ************************/
    /**
     * Detect faces in images.
     *
     * **Important:** On April 2, 2018, the identity information in the response to calls to the Face model was removed.
     * The identity information refers to the `name` of the person, `score`, and `type_hierarchy` knowledge graph. For
     * details about the enhanced Face model, see the [Release
     * notes](https://cloud.ibm.com/docs/services/visual-recognition?topic=visual-recognition-release-notes#2april2018).
     *
     * Analyze and get data about faces in images. Responses can include estimated age and gender. This feature uses a
     * built-in model, so no training is necessary. The **Detect faces** method does not support general biometric facial
     * recognition.
     *
     * Supported image formats include .gif, .jpg, .png, and .tif. The maximum image size is 10 MB. The minimum
     * recommended pixel density is 32X32 pixels, but the service tends to perform better with images that are at least
     * 224 x 224 pixels.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} [params.images_file] - An image file (gif, .jpg, .png, .tif.) or
     * .zip file with images. Limit the .zip file to 100 MB. You can include a maximum of 15 images in a request.
     *
     * Encode the image and .zip file names in UTF-8 if they contain non-ASCII characters. The service assumes UTF-8
     * encoding if it encounters non-ASCII characters.
     *
     * You can also include an image with the **url** parameter.
     * @param {string} [params.images_filename] - The filename for images_file.
     * @param {string} [params.images_file_content_type] - The content type of images_file.
     * @param {string} [params.url] - The URL of an image to analyze. Must be in .gif, .jpg, .png, or .tif format. The
     * minimum recommended pixel density is 32X32 pixels, but the service tends to perform better with images that are at
     * least 224 x 224 pixels. The maximum image size is 10 MB. Redirects are followed, so you can use a shortened URL.
     *
     * You can also include images with the **images_file** parameter.
     * @param {string} [params.accept_language] - The desired language of parts of the response. See the response for
     * details.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    VisualRecognitionV3.prototype.detectFaces = function (params, callback) {
        var _this = this;
        var _params = (typeof params === 'function' && !callback) ? {} : extend({}, params);
        var _callback = (typeof params === 'function' && !callback) ? params : callback;
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.detectFaces(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var formData = {
            'images_file': {
                data: _params.images_file,
                filename: _params.images_filename,
                contentType: _params.images_file_content_type
            },
            'url': _params.url
        };
        var sdkHeaders = common_1.getSdkHeaders('watson_vision_combined', 'v3', 'detectFaces');
        var parameters = {
            options: {
                url: '/v3/detect_faces',
                method: 'POST',
                formData: formData
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Accept-Language': _params.accept_language
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /*************************
     * custom
     ************************/
    /**
     * Create a classifier.
     *
     * Train a new multi-faceted classifier on the uploaded image data. Create your custom classifier with positive or
     * negative examples. Include at least two sets of examples, either two positive example files or one positive and one
     * negative file. You can upload a maximum of 256 MB per call.
     *
     * Encode all names in UTF-8 if they contain non-ASCII characters (.zip and image file names, and classifier and class
     * names). The service assumes UTF-8 encoding if it encounters non-ASCII characters.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.name - The name of the new classifier. Encode special characters in UTF-8.
     * @param {Record<string, NodeJS.ReadableStream|FileObject|Buffer>} params.positive_examples - A dictionary that contains
     * the value for each classname. The value is a .zip file of images that depict the visual subject of a class in the
     * new classifier. You can include more than one positive example file in a call.
     *
     * Specify the parameter name by appending `_positive_examples` to the class name. For example,
     * `goldenretriever_positive_examples` creates the class **goldenretriever**.
     *
     * Include at least 10 images in .jpg or .png format. The minimum recommended image resolution is 32X32 pixels. The
     * maximum number of images is 10,000 images or 100 MB per .zip file.
     *
     * Encode special characters in the file name in UTF-8.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} [params.negative_examples] - A .zip file of images that do not
     * depict the visual subject of any of the classes of the new classifier. Must contain a minimum of 10 images.
     *
     * Encode special characters in the file name in UTF-8.
     * @param {string} [params.negative_examples_filename] - The filename for negative_examples.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    VisualRecognitionV3.prototype.createClassifier = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['name', 'positive_examples'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.createClassifier(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var formData = {
            'name': _params.name,
            'negative_examples': {
                data: _params.negative_examples,
                filename: _params.negative_examples_filename,
                contentType: 'application/octet-stream'
            }
        };
        Object.keys(_params.positive_examples || {}).forEach(function (key) {
            var partName = key + "_positive_examples";
            formData[partName] = {
                data: _params.positive_examples[key],
                contentType: 'application/octet-stream',
            };
        });
        var sdkHeaders = common_1.getSdkHeaders('watson_vision_combined', 'v3', 'createClassifier');
        var parameters = {
            options: {
                url: '/v3/classifiers',
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
    /**
     * Delete a classifier.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.classifier_id - The ID of the classifier.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    VisualRecognitionV3.prototype.deleteClassifier = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['classifier_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.deleteClassifier(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'classifier_id': _params.classifier_id
        };
        var sdkHeaders = common_1.getSdkHeaders('watson_vision_combined', 'v3', 'deleteClassifier');
        var parameters = {
            options: {
                url: '/v3/classifiers/{classifier_id}',
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
     * Retrieve classifier details.
     *
     * Retrieve information about a custom classifier.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.classifier_id - The ID of the classifier.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    VisualRecognitionV3.prototype.getClassifier = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['classifier_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getClassifier(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'classifier_id': _params.classifier_id
        };
        var sdkHeaders = common_1.getSdkHeaders('watson_vision_combined', 'v3', 'getClassifier');
        var parameters = {
            options: {
                url: '/v3/classifiers/{classifier_id}',
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
     * Retrieve a list of classifiers.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {boolean} [params.verbose] - Specify `true` to return details about the classifiers. Omit this parameter to
     * return a brief list of classifiers.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    VisualRecognitionV3.prototype.listClassifiers = function (params, callback) {
        var _this = this;
        var _params = (typeof params === 'function' && !callback) ? {} : extend({}, params);
        var _callback = (typeof params === 'function' && !callback) ? params : callback;
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.listClassifiers(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var query = {
            'verbose': _params.verbose
        };
        var sdkHeaders = common_1.getSdkHeaders('watson_vision_combined', 'v3', 'listClassifiers');
        var parameters = {
            options: {
                url: '/v3/classifiers',
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
     * Update a classifier.
     *
     * Update a custom classifier by adding new positive or negative classes or by adding new images to existing classes.
     * You must supply at least one set of positive or negative examples. For details, see [Updating custom
     * classifiers](https://cloud.ibm.com/docs/services/visual-recognition?topic=visual-recognition-customizing#updating-custom-classifiers).
     *
     * Encode all names in UTF-8 if they contain non-ASCII characters (.zip and image file names, and classifier and class
     * names). The service assumes UTF-8 encoding if it encounters non-ASCII characters.
     *
     * **Tip:** Don't make retraining calls on a classifier until the status is ready. When you submit retraining requests
     * in parallel, the last request overwrites the previous requests. The retrained property shows the last time the
     * classifier retraining finished.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.classifier_id - The ID of the classifier.
     * @param {Record<string, NodeJS.ReadableStream|FileObject|Buffer>} [params.positive_examples] - A dictionary that
     * contains the value for each classname. The value is a .zip file of images that depict the visual subject of a class
     * in the classifier. The positive examples create or update classes in the classifier. You can include more than one
     * positive example file in a call.
     *
     * Specify the parameter name by appending `_positive_examples` to the class name. For example,
     * `goldenretriever_positive_examples` creates the class `goldenretriever`.
     *
     * Include at least 10 images in .jpg or .png format. The minimum recommended image resolution is 32X32 pixels. The
     * maximum number of images is 10,000 images or 100 MB per .zip file.
     *
     * Encode special characters in the file name in UTF-8.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} [params.negative_examples] - A .zip file of images that do not
     * depict the visual subject of any of the classes of the new classifier. Must contain a minimum of 10 images.
     *
     * Encode special characters in the file name in UTF-8.
     * @param {string} [params.negative_examples_filename] - The filename for negative_examples.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    VisualRecognitionV3.prototype.updateClassifier = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['classifier_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.updateClassifier(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var formData = {
            'negative_examples': {
                data: _params.negative_examples,
                filename: _params.negative_examples_filename,
                contentType: 'application/octet-stream'
            }
        };
        Object.keys(_params.positive_examples || {}).forEach(function (key) {
            var partName = key + "_positive_examples";
            formData[partName] = {
                data: _params.positive_examples[key],
                contentType: 'application/octet-stream',
            };
        });
        var path = {
            'classifier_id': _params.classifier_id
        };
        var sdkHeaders = common_1.getSdkHeaders('watson_vision_combined', 'v3', 'updateClassifier');
        var parameters = {
            options: {
                url: '/v3/classifiers/{classifier_id}',
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
     * coreML
     ************************/
    /**
     * Retrieve a Core ML model of a classifier.
     *
     * Download a Core ML model file (.mlmodel) of a custom classifier that returns <tt>\"core_ml_enabled\": true</tt> in
     * the classifier details.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.classifier_id - The ID of the classifier.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    VisualRecognitionV3.prototype.getCoreMlModel = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['classifier_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getCoreMlModel(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'classifier_id': _params.classifier_id
        };
        var sdkHeaders = common_1.getSdkHeaders('watson_vision_combined', 'v3', 'getCoreMlModel');
        var parameters = {
            options: {
                url: '/v3/classifiers/{classifier_id}/core_ml_model',
                method: 'GET',
                path: path,
                responseType: 'stream',
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/octet-stream',
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
     * You associate a customer ID with data by passing the `X-Watson-Metadata` header with a request that passes data.
     * For more information about personal data and customer IDs, see [Information
     * security](https://cloud.ibm.com/docs/services/visual-recognition?topic=visual-recognition-information-security).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.customer_id - The customer ID for which all data is to be deleted.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    VisualRecognitionV3.prototype.deleteUserData = function (params, callback) {
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
        var sdkHeaders = common_1.getSdkHeaders('watson_vision_combined', 'v3', 'deleteUserData');
        var parameters = {
            options: {
                url: '/v3/user_data',
                method: 'DELETE',
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
    VisualRecognitionV3.URL = 'https://gateway.watsonplatform.net/visual-recognition/api';
    return VisualRecognitionV3;
}(ibm_cloud_sdk_core_1.BaseService));
VisualRecognitionV3.prototype.name = 'watson_vision_combined';
VisualRecognitionV3.prototype.serviceVersion = 'v3';
/*************************
 * interfaces
 ************************/
(function (VisualRecognitionV3) {
    /** Constants for the `classify` operation. */
    var ClassifyConstants;
    (function (ClassifyConstants) {
        /** The desired language of parts of the response. See the response for details. */
        var AcceptLanguage;
        (function (AcceptLanguage) {
            AcceptLanguage["EN"] = "en";
            AcceptLanguage["AR"] = "ar";
            AcceptLanguage["DE"] = "de";
            AcceptLanguage["ES"] = "es";
            AcceptLanguage["FR"] = "fr";
            AcceptLanguage["IT"] = "it";
            AcceptLanguage["JA"] = "ja";
            AcceptLanguage["KO"] = "ko";
            AcceptLanguage["PT_BR"] = "pt-br";
            AcceptLanguage["ZH_CN"] = "zh-cn";
            AcceptLanguage["ZH_TW"] = "zh-tw";
        })(AcceptLanguage = ClassifyConstants.AcceptLanguage || (ClassifyConstants.AcceptLanguage = {}));
    })(ClassifyConstants = VisualRecognitionV3.ClassifyConstants || (VisualRecognitionV3.ClassifyConstants = {}));
    /** Constants for the `detectFaces` operation. */
    var DetectFacesConstants;
    (function (DetectFacesConstants) {
        /** The desired language of parts of the response. See the response for details. */
        var AcceptLanguage;
        (function (AcceptLanguage) {
            AcceptLanguage["EN"] = "en";
            AcceptLanguage["AR"] = "ar";
            AcceptLanguage["DE"] = "de";
            AcceptLanguage["ES"] = "es";
            AcceptLanguage["FR"] = "fr";
            AcceptLanguage["IT"] = "it";
            AcceptLanguage["JA"] = "ja";
            AcceptLanguage["KO"] = "ko";
            AcceptLanguage["PT_BR"] = "pt-br";
            AcceptLanguage["ZH_CN"] = "zh-cn";
            AcceptLanguage["ZH_TW"] = "zh-tw";
        })(AcceptLanguage = DetectFacesConstants.AcceptLanguage || (DetectFacesConstants.AcceptLanguage = {}));
    })(DetectFacesConstants = VisualRecognitionV3.DetectFacesConstants || (VisualRecognitionV3.DetectFacesConstants = {}));
})(VisualRecognitionV3 || (VisualRecognitionV3 = {}));
module.exports = VisualRecognitionV3;
//# sourceMappingURL=v3.js.map