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
 * The IBM&reg; Text to Speech service provides APIs that use IBM's speech-synthesis capabilities to synthesize text into natural-sounding speech in a variety of languages, dialects, and voices. The service supports at least one male or female voice, sometimes both, for each language. The audio is streamed back to the client with minimal delay.   For speech synthesis, the service supports a synchronous HTTP Representational State Transfer (REST) interface. It also supports a WebSocket interface that provides both plain text and SSML input, including the SSML &lt;mark&gt; element and word timings. SSML is an XML-based markup language that provides text annotation for speech-synthesis applications.   The service also offers a customization interface. You can use the interface to define sounds-like or phonetic translations for words. A sounds-like translation consists of one or more words that, when combined, sound like the word. A phonetic translation is based on the SSML phoneme format for representing a word. You can specify a phonetic translation in standard International Phonetic Alphabet (IPA) representation or in the proprietary IBM Symbolic Phonetic Representation (SPR).
 */
var TextToSpeechV1 = /** @class */ (function (_super) {
    __extends(TextToSpeechV1, _super);
    /**
     * Construct a TextToSpeechV1 object.
     *
     * @param {Object} options - Options for the service.
     * @param {string} [options.url] - The base url to use when contacting the service (e.g. 'https://gateway.watsonplatform.net/text-to-speech/api'). The base url may differ between IBM Cloud regions.
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
     * @returns {TextToSpeechV1}
     */
    function TextToSpeechV1(options) {
        return _super.call(this, options) || this;
    }
    /*************************
     * voices
     ************************/
    /**
     * Get a voice.
     *
     * Gets information about the specified voice. The information includes the name, language, gender, and other details
     * about the voice. Specify a customization ID to obtain information for that custom voice model of the specified
     * voice. To list information about all available voices, use the **List voices** method.
     *
     * **See also:** [Listing a specific
     * voice](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-voices#listVoice).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.voice - The voice for which information is to be returned.
     * @param {string} [params.customization_id] - The customization ID (GUID) of a custom voice model for which
     * information is to be returned. You must make the request with service credentials created for the instance of the
     * service that owns the custom model. Omit the parameter to see information about the specified voice with no
     * customization.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    TextToSpeechV1.prototype.getVoice = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['voice'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getVoice(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var query = {
            'customization_id': _params.customization_id
        };
        var path = {
            'voice': _params.voice
        };
        var sdkHeaders = common_1.getSdkHeaders('text_to_speech', 'v1', 'getVoice');
        var parameters = {
            options: {
                url: '/v1/voices/{voice}',
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
     * List voices.
     *
     * Lists all voices available for use with the service. The information includes the name, language, gender, and other
     * details about the voice. To see information about a specific voice, use the **Get a voice** method.
     *
     * **See also:** [Listing all available
     * voices](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-voices#listVoices).
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    TextToSpeechV1.prototype.listVoices = function (params, callback) {
        var _this = this;
        var _params = (typeof params === 'function' && !callback) ? {} : extend({}, params);
        var _callback = (typeof params === 'function' && !callback) ? params : callback;
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.listVoices(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var sdkHeaders = common_1.getSdkHeaders('text_to_speech', 'v1', 'listVoices');
        var parameters = {
            options: {
                url: '/v1/voices',
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
     * synthesis
     ************************/
    /**
     * Synthesize audio.
     *
     * Synthesizes text to audio that is spoken in the specified voice. The service bases its understanding of the
     * language for the input text on the specified voice. Use a voice that matches the language of the input text.
     *
     * The method accepts a maximum of 5 KB of input text in the body of the request, and 8 KB for the URL and headers.
     * The 5 KB limit includes any SSML tags that you specify. The service returns the synthesized audio stream as an
     * array of bytes.
     *
     * **See also:** [The HTTP
     * interface](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-usingHTTP#usingHTTP).
     *
     * ### Audio formats (accept types)
     *
     *  The service can return audio in the following formats (MIME types).
     * * Where indicated, you can optionally specify the sampling rate (`rate`) of the audio. You must specify a sampling
     * rate for the `audio/l16` and `audio/mulaw` formats. A specified sampling rate must lie in the range of 8 kHz to 192
     * kHz.
     * * For the `audio/l16` format, you can optionally specify the endianness (`endianness`) of the audio:
     * `endianness=big-endian` or `endianness=little-endian`.
     *
     * Use the `Accept` header or the `accept` parameter to specify the requested format of the response audio. If you
     * omit an audio format altogether, the service returns the audio in Ogg format with the Opus codec
     * (`audio/ogg;codecs=opus`). The service always returns single-channel audio.
     * * `audio/basic`
     *
     *   The service returns audio with a sampling rate of 8000 Hz.
     * * `audio/flac`
     *
     *   You can optionally specify the `rate` of the audio. The default sampling rate is 22,050 Hz.
     * * `audio/l16`
     *
     *   You must specify the `rate` of the audio. You can optionally specify the `endianness` of the audio. The default
     * endianness is `little-endian`.
     * * `audio/mp3`
     *
     *   You can optionally specify the `rate` of the audio. The default sampling rate is 22,050 Hz.
     * * `audio/mpeg`
     *
     *   You can optionally specify the `rate` of the audio. The default sampling rate is 22,050 Hz.
     * * `audio/mulaw`
     *
     *   You must specify the `rate` of the audio.
     * * `audio/ogg`
     *
     *   The service returns the audio in the `vorbis` codec. You can optionally specify the `rate` of the audio. The
     * default sampling rate is 22,050 Hz.
     * * `audio/ogg;codecs=opus`
     *
     *   You can optionally specify the `rate` of the audio. The default sampling rate is 22,050 Hz.
     * * `audio/ogg;codecs=vorbis`
     *
     *   You can optionally specify the `rate` of the audio. The default sampling rate is 22,050 Hz.
     * * `audio/wav`
     *
     *   You can optionally specify the `rate` of the audio. The default sampling rate is 22,050 Hz.
     * * `audio/webm`
     *
     *   The service returns the audio in the `opus` codec. The service returns audio with a sampling rate of 48,000 Hz.
     * * `audio/webm;codecs=opus`
     *
     *   The service returns audio with a sampling rate of 48,000 Hz.
     * * `audio/webm;codecs=vorbis`
     *
     *   You can optionally specify the `rate` of the audio. The default sampling rate is 22,050 Hz.
     *
     * For more information about specifying an audio format, including additional details about some of the formats, see
     * [Audio formats](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-audioFormats#audioFormats).
     *
     *
     * ### Warning messages
     *
     *  If a request includes invalid query parameters, the service returns a `Warnings` response header that provides
     * messages about the invalid parameters. The warning includes a descriptive message and a list of invalid argument
     * strings. For example, a message such as `\"Unknown arguments:\"` or `\"Unknown url query arguments:\"` followed by
     * a list of the form `\"{invalid_arg_1}, {invalid_arg_2}.\"` The request succeeds despite the warnings.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.text - The text to synthesize.
     * @param {string} [params.voice] - The voice to use for synthesis.
     * @param {string} [params.customization_id] - The customization ID (GUID) of a custom voice model to use for the
     * synthesis. If a custom voice model is specified, it is guaranteed to work only if it matches the language of the
     * indicated voice. You must make the request with service credentials created for the instance of the service that
     * owns the custom model. Omit the parameter to use the specified voice with no customization.
     * @param {string} [params.accept] - The requested format (MIME type) of the audio. You can use the `Accept` header or
     * the `accept` parameter to specify the audio format. For more information about specifying an audio format, see
     * **Audio formats (accept types)** in the method description.
     *
     * Default: `audio/ogg;codecs=opus`.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    TextToSpeechV1.prototype.synthesize = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['text'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.synthesize(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'text': _params.text
        };
        var query = {
            'voice': _params.voice,
            'customization_id': _params.customization_id
        };
        var sdkHeaders = common_1.getSdkHeaders('text_to_speech', 'v1', 'synthesize');
        var parameters = {
            options: {
                url: '/v1/synthesize',
                method: 'POST',
                body: body,
                qs: query,
                responseType: 'stream',
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, sdkHeaders, {
                    'Content-Type': 'application/json',
                    'Accept': _params.accept
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /*************************
     * pronunciation
     ************************/
    /**
     * Get pronunciation.
     *
     * Gets the phonetic pronunciation for the specified word. You can request the pronunciation for a specific format.
     * You can also request the pronunciation for a specific voice to see the default translation for the language of that
     * voice or for a specific custom voice model to see the translation for that voice model.
     *
     * **Note:** This method is currently a beta release.
     *
     * **See also:** [Querying a word from a
     * language](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-customWords#cuWordsQueryLanguage).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.text - The word for which the pronunciation is requested.
     * @param {string} [params.voice] - A voice that specifies the language in which the pronunciation is to be returned.
     * All voices for the same language (for example, `en-US`) return the same translation.
     * @param {string} [params.format] - The phoneme format in which to return the pronunciation. Omit the parameter to
     * obtain the pronunciation in the default format.
     * @param {string} [params.customization_id] - The customization ID (GUID) of a custom voice model for which the
     * pronunciation is to be returned. The language of a specified custom model must match the language of the specified
     * voice. If the word is not defined in the specified custom model, the service returns the default translation for
     * the custom model's language. You must make the request with service credentials created for the instance of the
     * service that owns the custom model. Omit the parameter to see the translation for the specified voice with no
     * customization.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    TextToSpeechV1.prototype.getPronunciation = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['text'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getPronunciation(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var query = {
            'text': _params.text,
            'voice': _params.voice,
            'format': _params.format,
            'customization_id': _params.customization_id
        };
        var sdkHeaders = common_1.getSdkHeaders('text_to_speech', 'v1', 'getPronunciation');
        var parameters = {
            options: {
                url: '/v1/pronunciation',
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
     * customModels
     ************************/
    /**
     * Create a custom model.
     *
     * Creates a new empty custom voice model. You must specify a name for the new custom model. You can optionally
     * specify the language and a description for the new model. The model is owned by the instance of the service whose
     * credentials are used to create it.
     *
     * **Note:** This method is currently a beta release.
     *
     * **See also:** [Creating a custom
     * model](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-customModels#cuModelsCreate).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.name - The name of the new custom voice model.
     * @param {string} [params.language] - The language of the new custom voice model. Omit the parameter to use the the
     * default language, `en-US`.
     * @param {string} [params.description] - A description of the new custom voice model. Specifying a description is
     * recommended.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    TextToSpeechV1.prototype.createVoiceModel = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['name'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.createVoiceModel(params, function (err, bod, res) {
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
            'language': _params.language,
            'description': _params.description
        };
        var sdkHeaders = common_1.getSdkHeaders('text_to_speech', 'v1', 'createVoiceModel');
        var parameters = {
            options: {
                url: '/v1/customizations',
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
     * Delete a custom model.
     *
     * Deletes the specified custom voice model. You must use credentials for the instance of the service that owns a
     * model to delete it.
     *
     * **Note:** This method is currently a beta release.
     *
     * **See also:** [Deleting a custom
     * model](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-customModels#cuModelsDelete).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.customization_id - The customization ID (GUID) of the custom voice model. You must make the
     * request with service credentials created for the instance of the service that owns the custom model.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    TextToSpeechV1.prototype.deleteVoiceModel = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['customization_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.deleteVoiceModel(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'customization_id': _params.customization_id
        };
        var sdkHeaders = common_1.getSdkHeaders('text_to_speech', 'v1', 'deleteVoiceModel');
        var parameters = {
            options: {
                url: '/v1/customizations/{customization_id}',
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
     * Get a custom model.
     *
     * Gets all information about a specified custom voice model. In addition to metadata such as the name and description
     * of the voice model, the output includes the words and their translations as defined in the model. To see just the
     * metadata for a voice model, use the **List custom models** method.
     *
     * **Note:** This method is currently a beta release.
     *
     * **See also:** [Querying a custom
     * model](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-customModels#cuModelsQuery).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.customization_id - The customization ID (GUID) of the custom voice model. You must make the
     * request with service credentials created for the instance of the service that owns the custom model.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    TextToSpeechV1.prototype.getVoiceModel = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['customization_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getVoiceModel(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'customization_id': _params.customization_id
        };
        var sdkHeaders = common_1.getSdkHeaders('text_to_speech', 'v1', 'getVoiceModel');
        var parameters = {
            options: {
                url: '/v1/customizations/{customization_id}',
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
     * List custom models.
     *
     * Lists metadata such as the name and description for all custom voice models that are owned by an instance of the
     * service. Specify a language to list the voice models for that language only. To see the words in addition to the
     * metadata for a specific voice model, use the **List a custom model** method. You must use credentials for the
     * instance of the service that owns a model to list information about it.
     *
     * **Note:** This method is currently a beta release.
     *
     * **See also:** [Querying all custom
     * models](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-customModels#cuModelsQueryAll).
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {string} [params.language] - The language for which custom voice models that are owned by the requesting
     * service credentials are to be returned. Omit the parameter to see all custom voice models that are owned by the
     * requester.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    TextToSpeechV1.prototype.listVoiceModels = function (params, callback) {
        var _this = this;
        var _params = (typeof params === 'function' && !callback) ? {} : extend({}, params);
        var _callback = (typeof params === 'function' && !callback) ? params : callback;
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.listVoiceModels(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var query = {
            'language': _params.language
        };
        var sdkHeaders = common_1.getSdkHeaders('text_to_speech', 'v1', 'listVoiceModels');
        var parameters = {
            options: {
                url: '/v1/customizations',
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
     * Update a custom model.
     *
     * Updates information for the specified custom voice model. You can update metadata such as the name and description
     * of the voice model. You can also update the words in the model and their translations. Adding a new translation for
     * a word that already exists in a custom model overwrites the word's existing translation. A custom model can contain
     * no more than 20,000 entries. You must use credentials for the instance of the service that owns a model to update
     * it.
     *
     * You can define sounds-like or phonetic translations for words. A sounds-like translation consists of one or more
     * words that, when combined, sound like the word. Phonetic translations are based on the SSML phoneme format for
     * representing a word. You can specify them in standard International Phonetic Alphabet (IPA) representation
     *
     *   <code>&lt;phoneme alphabet=\"ipa\" ph=\"t&#601;m&#712;&#593;to\"&gt;&lt;/phoneme&gt;</code>
     *
     *   or in the proprietary IBM Symbolic Phonetic Representation (SPR)
     *
     *   <code>&lt;phoneme alphabet=\"ibm\" ph=\"1gAstroEntxrYFXs\"&gt;&lt;/phoneme&gt;</code>
     *
     * **Note:** This method is currently a beta release.
     *
     * **See also:**
     * * [Updating a custom
     * model](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-customModels#cuModelsUpdate)
     * * [Adding words to a Japanese custom
     * model](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-customWords#cuJapaneseAdd)
     * * [Understanding
     * customization](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-customIntro#customIntro).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.customization_id - The customization ID (GUID) of the custom voice model. You must make the
     * request with service credentials created for the instance of the service that owns the custom model.
     * @param {string} [params.name] - A new name for the custom voice model.
     * @param {string} [params.description] - A new description for the custom voice model.
     * @param {Word[]} [params.words] - An array of `Word` objects that provides the words and their translations that are
     * to be added or updated for the custom voice model. Pass an empty array to make no additions or updates.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    TextToSpeechV1.prototype.updateVoiceModel = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['customization_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.updateVoiceModel(params, function (err, bod, res) {
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
            'words': _params.words
        };
        var path = {
            'customization_id': _params.customization_id
        };
        var sdkHeaders = common_1.getSdkHeaders('text_to_speech', 'v1', 'updateVoiceModel');
        var parameters = {
            options: {
                url: '/v1/customizations/{customization_id}',
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
     * customWords
     ************************/
    /**
     * Add a custom word.
     *
     * Adds a single word and its translation to the specified custom voice model. Adding a new translation for a word
     * that already exists in a custom model overwrites the word's existing translation. A custom model can contain no
     * more than 20,000 entries. You must use credentials for the instance of the service that owns a model to add a word
     * to it.
     *
     * You can define sounds-like or phonetic translations for words. A sounds-like translation consists of one or more
     * words that, when combined, sound like the word. Phonetic translations are based on the SSML phoneme format for
     * representing a word. You can specify them in standard International Phonetic Alphabet (IPA) representation
     *
     *   <code>&lt;phoneme alphabet=\"ipa\" ph=\"t&#601;m&#712;&#593;to\"&gt;&lt;/phoneme&gt;</code>
     *
     *   or in the proprietary IBM Symbolic Phonetic Representation (SPR)
     *
     *   <code>&lt;phoneme alphabet=\"ibm\" ph=\"1gAstroEntxrYFXs\"&gt;&lt;/phoneme&gt;</code>
     *
     * **Note:** This method is currently a beta release.
     *
     * **See also:**
     * * [Adding a single word to a custom
     * model](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-customWords#cuWordAdd)
     * * [Adding words to a Japanese custom
     * model](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-customWords#cuJapaneseAdd)
     * * [Understanding
     * customization](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-customIntro#customIntro).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.customization_id - The customization ID (GUID) of the custom voice model. You must make the
     * request with service credentials created for the instance of the service that owns the custom model.
     * @param {string} params.word - The word that is to be added or updated for the custom voice model.
     * @param {string} params.translation - The phonetic or sounds-like translation for the word. A phonetic translation
     * is based on the SSML format for representing the phonetic string of a word either as an IPA translation or as an
     * IBM SPR translation. A sounds-like is one or more words that, when combined, sound like the word.
     * @param {string} [params.part_of_speech] - **Japanese only.** The part of speech for the word. The service uses the
     * value to produce the correct intonation for the word. You can create only a single entry, with or without a single
     * part of speech, for any word; you cannot create multiple entries with different parts of speech for the same word.
     * For more information, see [Working with Japanese
     * entries](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-rules#jaNotes).
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    TextToSpeechV1.prototype.addWord = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['customization_id', 'word', 'translation'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.addWord(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'translation': _params.translation,
            'part_of_speech': _params.part_of_speech
        };
        var path = {
            'customization_id': _params.customization_id,
            'word': _params.word
        };
        var sdkHeaders = common_1.getSdkHeaders('text_to_speech', 'v1', 'addWord');
        var parameters = {
            options: {
                url: '/v1/customizations/{customization_id}/words/{word}',
                method: 'PUT',
                body: body,
                path: path,
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: extend(true, sdkHeaders, {
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters, _callback);
    };
    ;
    /**
     * Add custom words.
     *
     * Adds one or more words and their translations to the specified custom voice model. Adding a new translation for a
     * word that already exists in a custom model overwrites the word's existing translation. A custom model can contain
     * no more than 20,000 entries. You must use credentials for the instance of the service that owns a model to add
     * words to it.
     *
     * You can define sounds-like or phonetic translations for words. A sounds-like translation consists of one or more
     * words that, when combined, sound like the word. Phonetic translations are based on the SSML phoneme format for
     * representing a word. You can specify them in standard International Phonetic Alphabet (IPA) representation
     *
     *   <code>&lt;phoneme alphabet=\"ipa\" ph=\"t&#601;m&#712;&#593;to\"&gt;&lt;/phoneme&gt;</code>
     *
     *   or in the proprietary IBM Symbolic Phonetic Representation (SPR)
     *
     *   <code>&lt;phoneme alphabet=\"ibm\" ph=\"1gAstroEntxrYFXs\"&gt;&lt;/phoneme&gt;</code>
     *
     * **Note:** This method is currently a beta release.
     *
     * **See also:**
     * * [Adding multiple words to a custom
     * model](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-customWords#cuWordsAdd)
     * * [Adding words to a Japanese custom
     * model](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-customWords#cuJapaneseAdd)
     * * [Understanding
     * customization](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-customIntro#customIntro).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.customization_id - The customization ID (GUID) of the custom voice model. You must make the
     * request with service credentials created for the instance of the service that owns the custom model.
     * @param {Word[]} params.words - The **Add custom words** method accepts an array of `Word` objects. Each object
     * provides a word that is to be added or updated for the custom voice model and the word's translation.
     *
     * The **List custom words** method returns an array of `Word` objects. Each object shows a word and its translation
     * from the custom voice model. The words are listed in alphabetical order, with uppercase letters listed before
     * lowercase letters. The array is empty if the custom model contains no words.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    TextToSpeechV1.prototype.addWords = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['customization_id', 'words'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.addWords(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var body = {
            'words': _params.words
        };
        var path = {
            'customization_id': _params.customization_id
        };
        var sdkHeaders = common_1.getSdkHeaders('text_to_speech', 'v1', 'addWords');
        var parameters = {
            options: {
                url: '/v1/customizations/{customization_id}/words',
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
     * Delete a custom word.
     *
     * Deletes a single word from the specified custom voice model. You must use credentials for the instance of the
     * service that owns a model to delete its words.
     *
     * **Note:** This method is currently a beta release.
     *
     * **See also:** [Deleting a word from a custom
     * model](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-customWords#cuWordDelete).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.customization_id - The customization ID (GUID) of the custom voice model. You must make the
     * request with service credentials created for the instance of the service that owns the custom model.
     * @param {string} params.word - The word that is to be deleted from the custom voice model.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    TextToSpeechV1.prototype.deleteWord = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['customization_id', 'word'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.deleteWord(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'customization_id': _params.customization_id,
            'word': _params.word
        };
        var sdkHeaders = common_1.getSdkHeaders('text_to_speech', 'v1', 'deleteWord');
        var parameters = {
            options: {
                url: '/v1/customizations/{customization_id}/words/{word}',
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
     * Get a custom word.
     *
     * Gets the translation for a single word from the specified custom model. The output shows the translation as it is
     * defined in the model. You must use credentials for the instance of the service that owns a model to list its words.
     *
     *
     * **Note:** This method is currently a beta release.
     *
     * **See also:** [Querying a single word from a custom
     * model](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-customWords#cuWordQueryModel).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.customization_id - The customization ID (GUID) of the custom voice model. You must make the
     * request with service credentials created for the instance of the service that owns the custom model.
     * @param {string} params.word - The word that is to be queried from the custom voice model.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    TextToSpeechV1.prototype.getWord = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['customization_id', 'word'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.getWord(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'customization_id': _params.customization_id,
            'word': _params.word
        };
        var sdkHeaders = common_1.getSdkHeaders('text_to_speech', 'v1', 'getWord');
        var parameters = {
            options: {
                url: '/v1/customizations/{customization_id}/words/{word}',
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
     * List custom words.
     *
     * Lists all of the words and their translations for the specified custom voice model. The output shows the
     * translations as they are defined in the model. You must use credentials for the instance of the service that owns a
     * model to list its words.
     *
     * **Note:** This method is currently a beta release.
     *
     * **See also:** [Querying all words from a custom
     * model](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-customWords#cuWordsQueryModel).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.customization_id - The customization ID (GUID) of the custom voice model. You must make the
     * request with service credentials created for the instance of the service that owns the custom model.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    TextToSpeechV1.prototype.listWords = function (params, callback) {
        var _this = this;
        var _params = extend({}, params);
        var _callback = callback;
        var requiredParams = ['customization_id'];
        if (!_callback) {
            return new Promise(function (resolve, reject) {
                _this.listWords(params, function (err, bod, res) {
                    err ? reject(err) : _params.return_response ? resolve(res) : resolve(bod);
                });
            });
        }
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            'customization_id': _params.customization_id
        };
        var sdkHeaders = common_1.getSdkHeaders('text_to_speech', 'v1', 'listWords');
        var parameters = {
            options: {
                url: '/v1/customizations/{customization_id}/words',
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
     * userData
     ************************/
    /**
     * Delete labeled data.
     *
     * Deletes all data that is associated with a specified customer ID. The method deletes all data for the customer ID,
     * regardless of the method by which the information was added. The method has no effect if no data is associated with
     * the customer ID. You must issue the request with credentials for the same instance of the service that was used to
     * associate the customer ID with the data.
     *
     * You associate a customer ID with data by passing the `X-Watson-Metadata` header with a request that passes the
     * data.
     *
     * **See also:** [Information
     * security](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-information-security#information-security).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.customer_id - The customer ID for which all data is to be deleted.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {Promise<any>|void}
     */
    TextToSpeechV1.prototype.deleteUserData = function (params, callback) {
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
        var sdkHeaders = common_1.getSdkHeaders('text_to_speech', 'v1', 'deleteUserData');
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
    TextToSpeechV1.URL = 'https://stream.watsonplatform.net/text-to-speech/api';
    return TextToSpeechV1;
}(ibm_cloud_sdk_core_1.BaseService));
TextToSpeechV1.prototype.name = 'text_to_speech';
TextToSpeechV1.prototype.serviceVersion = 'v1';
/*************************
 * interfaces
 ************************/
(function (TextToSpeechV1) {
    /** Constants for the `getVoice` operation. */
    var GetVoiceConstants;
    (function (GetVoiceConstants) {
        /** The voice for which information is to be returned. */
        var Voice;
        (function (Voice) {
            Voice["DE_DE_BIRGITVOICE"] = "de-DE_BirgitVoice";
            Voice["DE_DE_BIRGITV2VOICE"] = "de-DE_BirgitV2Voice";
            Voice["DE_DE_DIETERVOICE"] = "de-DE_DieterVoice";
            Voice["DE_DE_DIETERV2VOICE"] = "de-DE_DieterV2Voice";
            Voice["EN_GB_KATEVOICE"] = "en-GB_KateVoice";
            Voice["EN_US_ALLISONVOICE"] = "en-US_AllisonVoice";
            Voice["EN_US_ALLISONV2VOICE"] = "en-US_AllisonV2Voice";
            Voice["EN_US_LISAVOICE"] = "en-US_LisaVoice";
            Voice["EN_US_LISAV2VOICE"] = "en-US_LisaV2Voice";
            Voice["EN_US_MICHAELVOICE"] = "en-US_MichaelVoice";
            Voice["EN_US_MICHAELV2VOICE"] = "en-US_MichaelV2Voice";
            Voice["ES_ES_ENRIQUEVOICE"] = "es-ES_EnriqueVoice";
            Voice["ES_ES_LAURAVOICE"] = "es-ES_LauraVoice";
            Voice["ES_LA_SOFIAVOICE"] = "es-LA_SofiaVoice";
            Voice["ES_US_SOFIAVOICE"] = "es-US_SofiaVoice";
            Voice["FR_FR_RENEEVOICE"] = "fr-FR_ReneeVoice";
            Voice["IT_IT_FRANCESCAVOICE"] = "it-IT_FrancescaVoice";
            Voice["IT_IT_FRANCESCAV2VOICE"] = "it-IT_FrancescaV2Voice";
            Voice["JA_JP_EMIVOICE"] = "ja-JP_EmiVoice";
            Voice["PT_BR_ISABELAVOICE"] = "pt-BR_IsabelaVoice";
        })(Voice = GetVoiceConstants.Voice || (GetVoiceConstants.Voice = {}));
    })(GetVoiceConstants = TextToSpeechV1.GetVoiceConstants || (TextToSpeechV1.GetVoiceConstants = {}));
    /** Constants for the `synthesize` operation. */
    var SynthesizeConstants;
    (function (SynthesizeConstants) {
        /** The voice to use for synthesis. */
        var Voice;
        (function (Voice) {
            Voice["DE_DE_BIRGITVOICE"] = "de-DE_BirgitVoice";
            Voice["DE_DE_BIRGITV2VOICE"] = "de-DE_BirgitV2Voice";
            Voice["DE_DE_DIETERVOICE"] = "de-DE_DieterVoice";
            Voice["DE_DE_DIETERV2VOICE"] = "de-DE_DieterV2Voice";
            Voice["EN_GB_KATEVOICE"] = "en-GB_KateVoice";
            Voice["EN_US_ALLISONVOICE"] = "en-US_AllisonVoice";
            Voice["EN_US_ALLISONV2VOICE"] = "en-US_AllisonV2Voice";
            Voice["EN_US_LISAVOICE"] = "en-US_LisaVoice";
            Voice["EN_US_LISAV2VOICE"] = "en-US_LisaV2Voice";
            Voice["EN_US_MICHAELVOICE"] = "en-US_MichaelVoice";
            Voice["EN_US_MICHAELV2VOICE"] = "en-US_MichaelV2Voice";
            Voice["ES_ES_ENRIQUEVOICE"] = "es-ES_EnriqueVoice";
            Voice["ES_ES_LAURAVOICE"] = "es-ES_LauraVoice";
            Voice["ES_LA_SOFIAVOICE"] = "es-LA_SofiaVoice";
            Voice["ES_US_SOFIAVOICE"] = "es-US_SofiaVoice";
            Voice["FR_FR_RENEEVOICE"] = "fr-FR_ReneeVoice";
            Voice["IT_IT_FRANCESCAVOICE"] = "it-IT_FrancescaVoice";
            Voice["IT_IT_FRANCESCAV2VOICE"] = "it-IT_FrancescaV2Voice";
            Voice["JA_JP_EMIVOICE"] = "ja-JP_EmiVoice";
            Voice["PT_BR_ISABELAVOICE"] = "pt-BR_IsabelaVoice";
        })(Voice = SynthesizeConstants.Voice || (SynthesizeConstants.Voice = {}));
        /** The requested format (MIME type) of the audio. You can use the `Accept` header or the `accept` parameter to specify the audio format. For more information about specifying an audio format, see **Audio formats (accept types)** in the method description. Default: `audio/ogg;codecs=opus`. */
        var Accept;
        (function (Accept) {
            Accept["AUDIO_BASIC"] = "audio/basic";
            Accept["AUDIO_FLAC"] = "audio/flac";
            Accept["AUDIO_L16"] = "audio/l16";
            Accept["AUDIO_OGG"] = "audio/ogg";
            Accept["AUDIO_OGG_CODECS_OPUS"] = "audio/ogg;codecs=opus";
            Accept["AUDIO_OGG_CODECS_VORBIS"] = "audio/ogg;codecs=vorbis";
            Accept["AUDIO_MP3"] = "audio/mp3";
            Accept["AUDIO_MPEG"] = "audio/mpeg";
            Accept["AUDIO_MULAW"] = "audio/mulaw";
            Accept["AUDIO_WAV"] = "audio/wav";
            Accept["AUDIO_WEBM"] = "audio/webm";
            Accept["AUDIO_WEBM_CODECS_OPUS"] = "audio/webm;codecs=opus";
            Accept["AUDIO_WEBM_CODECS_VORBIS"] = "audio/webm;codecs=vorbis";
        })(Accept = SynthesizeConstants.Accept || (SynthesizeConstants.Accept = {}));
    })(SynthesizeConstants = TextToSpeechV1.SynthesizeConstants || (TextToSpeechV1.SynthesizeConstants = {}));
    /** Constants for the `getPronunciation` operation. */
    var GetPronunciationConstants;
    (function (GetPronunciationConstants) {
        /** A voice that specifies the language in which the pronunciation is to be returned. All voices for the same language (for example, `en-US`) return the same translation. */
        var Voice;
        (function (Voice) {
            Voice["DE_DE_BIRGITVOICE"] = "de-DE_BirgitVoice";
            Voice["DE_DE_BIRGITV2VOICE"] = "de-DE_BirgitV2Voice";
            Voice["DE_DE_DIETERVOICE"] = "de-DE_DieterVoice";
            Voice["DE_DE_DIETERV2VOICE"] = "de-DE_DieterV2Voice";
            Voice["EN_GB_KATEVOICE"] = "en-GB_KateVoice";
            Voice["EN_US_ALLISONVOICE"] = "en-US_AllisonVoice";
            Voice["EN_US_ALLISONV2VOICE"] = "en-US_AllisonV2Voice";
            Voice["EN_US_LISAVOICE"] = "en-US_LisaVoice";
            Voice["EN_US_LISAV2VOICE"] = "en-US_LisaV2Voice";
            Voice["EN_US_MICHAELVOICE"] = "en-US_MichaelVoice";
            Voice["EN_US_MICHAELV2VOICE"] = "en-US_MichaelV2Voice";
            Voice["ES_ES_ENRIQUEVOICE"] = "es-ES_EnriqueVoice";
            Voice["ES_ES_LAURAVOICE"] = "es-ES_LauraVoice";
            Voice["ES_LA_SOFIAVOICE"] = "es-LA_SofiaVoice";
            Voice["ES_US_SOFIAVOICE"] = "es-US_SofiaVoice";
            Voice["FR_FR_RENEEVOICE"] = "fr-FR_ReneeVoice";
            Voice["IT_IT_FRANCESCAVOICE"] = "it-IT_FrancescaVoice";
            Voice["IT_IT_FRANCESCAV2VOICE"] = "it-IT_FrancescaV2Voice";
            Voice["JA_JP_EMIVOICE"] = "ja-JP_EmiVoice";
            Voice["PT_BR_ISABELAVOICE"] = "pt-BR_IsabelaVoice";
        })(Voice = GetPronunciationConstants.Voice || (GetPronunciationConstants.Voice = {}));
        /** The phoneme format in which to return the pronunciation. Omit the parameter to obtain the pronunciation in the default format. */
        var Format;
        (function (Format) {
            Format["IBM"] = "ibm";
            Format["IPA"] = "ipa";
        })(Format = GetPronunciationConstants.Format || (GetPronunciationConstants.Format = {}));
    })(GetPronunciationConstants = TextToSpeechV1.GetPronunciationConstants || (TextToSpeechV1.GetPronunciationConstants = {}));
    /** Constants for the `createVoiceModel` operation. */
    var CreateVoiceModelConstants;
    (function (CreateVoiceModelConstants) {
        /** The language of the new custom voice model. Omit the parameter to use the the default language, `en-US`. */
        var Language;
        (function (Language) {
            Language["DE_DE"] = "de-DE";
            Language["EN_GB"] = "en-GB";
            Language["EN_US"] = "en-US";
            Language["ES_ES"] = "es-ES";
            Language["ES_LA"] = "es-LA";
            Language["ES_US"] = "es-US";
            Language["FR_FR"] = "fr-FR";
            Language["IT_IT"] = "it-IT";
            Language["JA_JP"] = "ja-JP";
            Language["PT_BR"] = "pt-BR";
        })(Language = CreateVoiceModelConstants.Language || (CreateVoiceModelConstants.Language = {}));
    })(CreateVoiceModelConstants = TextToSpeechV1.CreateVoiceModelConstants || (TextToSpeechV1.CreateVoiceModelConstants = {}));
    /** Constants for the `listVoiceModels` operation. */
    var ListVoiceModelsConstants;
    (function (ListVoiceModelsConstants) {
        /** The language for which custom voice models that are owned by the requesting service credentials are to be returned. Omit the parameter to see all custom voice models that are owned by the requester. */
        var Language;
        (function (Language) {
            Language["DE_DE"] = "de-DE";
            Language["EN_GB"] = "en-GB";
            Language["EN_US"] = "en-US";
            Language["ES_ES"] = "es-ES";
            Language["ES_LA"] = "es-LA";
            Language["ES_US"] = "es-US";
            Language["FR_FR"] = "fr-FR";
            Language["IT_IT"] = "it-IT";
            Language["JA_JP"] = "ja-JP";
            Language["PT_BR"] = "pt-BR";
        })(Language = ListVoiceModelsConstants.Language || (ListVoiceModelsConstants.Language = {}));
    })(ListVoiceModelsConstants = TextToSpeechV1.ListVoiceModelsConstants || (TextToSpeechV1.ListVoiceModelsConstants = {}));
    /** Constants for the `addWord` operation. */
    var AddWordConstants;
    (function (AddWordConstants) {
        /** **Japanese only.** The part of speech for the word. The service uses the value to produce the correct intonation for the word. You can create only a single entry, with or without a single part of speech, for any word; you cannot create multiple entries with different parts of speech for the same word. For more information, see [Working with Japanese entries](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-rules#jaNotes). */
        var PartOfSpeech;
        (function (PartOfSpeech) {
            PartOfSpeech["DOSI"] = "Dosi";
            PartOfSpeech["FUKU"] = "Fuku";
            PartOfSpeech["GOBI"] = "Gobi";
            PartOfSpeech["HOKA"] = "Hoka";
            PartOfSpeech["JODO"] = "Jodo";
            PartOfSpeech["JOSI"] = "Josi";
            PartOfSpeech["KATO"] = "Kato";
            PartOfSpeech["KEDO"] = "Kedo";
            PartOfSpeech["KEYO"] = "Keyo";
            PartOfSpeech["KIGO"] = "Kigo";
            PartOfSpeech["KOYU"] = "Koyu";
            PartOfSpeech["MESI"] = "Mesi";
            PartOfSpeech["RETA"] = "Reta";
            PartOfSpeech["STBI"] = "Stbi";
            PartOfSpeech["STTO"] = "Stto";
            PartOfSpeech["STZO"] = "Stzo";
            PartOfSpeech["SUJI"] = "Suji";
        })(PartOfSpeech = AddWordConstants.PartOfSpeech || (AddWordConstants.PartOfSpeech = {}));
    })(AddWordConstants = TextToSpeechV1.AddWordConstants || (TextToSpeechV1.AddWordConstants = {}));
})(TextToSpeechV1 || (TextToSpeechV1 = {}));
module.exports = TextToSpeechV1;
//# sourceMappingURL=v1-generated.js.map