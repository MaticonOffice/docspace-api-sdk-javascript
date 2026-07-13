/**
 *
 * (c) Copyright Ascensio System SIA 2025
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import ApiClient from "../ApiClient";
import BooleanWrapper from '../models/BooleanWrapper';
import DoubleWrapper from '../models/DoubleWrapper';
import EncryptionSettingsWrapper from '../models/EncryptionSettingsWrapper';
import StorageEncryptionRequestsDto from '../models/StorageEncryptionRequestsDto';

/**
* SettingsEncryption service.
* @module api/SettingsEncryptionApi
* @version 3.2.0
*/
export default class SettingsEncryptionApi {

    /**
    * Constructs a new SettingsEncryptionApi. 
    * @alias module:api/SettingsEncryptionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getStorageEncryptionProgress operation.
     * @callback module:api/SettingsEncryptionApi~getStorageEncryptionProgressCallback
     * @param {String} error Error message, if any.
     * @param {module:models/DoubleWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the storage encryption progress
     * Returns the storage encryption progress.
     * @param {module:api/SettingsEncryptionApi~getStorageEncryptionProgressCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/DoubleWrapper}
     */
    getStorageEncryptionProgress(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DoubleWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/encryption/progress', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getStorageEncryptionSettings operation.
     * @callback module:api/SettingsEncryptionApi~getStorageEncryptionSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EncryptionSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the storage encryption settings
     * Returns the storage encryption settings.
     * @param {module:api/SettingsEncryptionApi~getStorageEncryptionSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EncryptionSettingsWrapper}
     */
    getStorageEncryptionSettings(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EncryptionSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/encryption/settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the startStorageEncryption operation.
     * @callback module:api/SettingsEncryptionApi~startStorageEncryptionCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start the storage encryption process
     * Starts the storage encryption process.
     * @param {Object} opts Optional parameters
     * @param {module:models/StorageEncryptionRequestsDto} [storageEncryptionRequestsDto] 
     * @param {module:api/SettingsEncryptionApi~startStorageEncryptionCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    startStorageEncryption(opts, callback) {
      opts = opts || {};
      let postBody = opts['storageEncryptionRequestsDto'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = BooleanWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/encryption/start', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
