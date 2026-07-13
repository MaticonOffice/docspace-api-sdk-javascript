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
import CdnStorageSettingsWrapper from '../models/CdnStorageSettingsWrapper';
import DoubleWrapper from '../models/DoubleWrapper';
import ObjectWrapper from '../models/ObjectWrapper';
import StorageArrayWrapper from '../models/StorageArrayWrapper';
import StorageRequestsDto from '../models/StorageRequestsDto';
import StorageSettingsWrapper from '../models/StorageSettingsWrapper';

/**
* SettingsStorage service.
* @module api/SettingsStorageApi
* @version 3.2.0
*/
export default class SettingsStorageApi {

    /**
    * Constructs a new SettingsStorageApi. 
    * @alias module:api/SettingsStorageApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAllBackupStorages operation.
     * @callback module:api/SettingsStorageApi~getAllBackupStoragesCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StorageArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the backup storages
     * Returns a list of all the backup storages.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [dump] 
     * @param {module:api/SettingsStorageApi~getAllBackupStoragesCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StorageArrayWrapper}
     */
    getAllBackupStorages(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'Dump': opts['dump']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = StorageArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/storage/backup', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllCdnStorages operation.
     * @callback module:api/SettingsStorageApi~getAllCdnStoragesCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StorageArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the CDN storages
     * Returns a list of all the CDN storages.
     * @param {module:api/SettingsStorageApi~getAllCdnStoragesCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StorageArrayWrapper}
     */
    getAllCdnStorages(callback) {
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
      let returnType = StorageArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/storage/cdn', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllStorages operation.
     * @callback module:api/SettingsStorageApi~getAllStoragesCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StorageArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get storages
     * Returns a list of all the portal storages.
     * @param {module:api/SettingsStorageApi~getAllStoragesCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StorageArrayWrapper}
     */
    getAllStorages(callback) {
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
      let returnType = StorageArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/storage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAmazonS3Regions operation.
     * @callback module:api/SettingsStorageApi~getAmazonS3RegionsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ObjectWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Amazon regions
     * Returns a list of all Amazon regions.
     * @param {module:api/SettingsStorageApi~getAmazonS3RegionsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ObjectWrapper}
     */
    getAmazonS3Regions(callback) {
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
      let returnType = ObjectWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/storage/s3/regions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getStorageProgress operation.
     * @callback module:api/SettingsStorageApi~getStorageProgressCallback
     * @param {String} error Error message, if any.
     * @param {module:models/DoubleWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the storage progress
     * Returns the storage progress.
     * @param {module:api/SettingsStorageApi~getStorageProgressCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/DoubleWrapper}
     */
    getStorageProgress(callback) {
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
        '/api/2.0/settings/storage/progress', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the resetCdnToDefault operation.
     * @callback module:api/SettingsStorageApi~resetCdnToDefaultCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset the CDN storage settings
     * Resets the CDN storage settings to the default parameters.
     * @param {module:api/SettingsStorageApi~resetCdnToDefaultCallback} callback The callback function, accepting three arguments: error, data, response
     */
    resetCdnToDefault(callback) {
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/2.0/settings/storage/cdn', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the resetStorageToDefault operation.
     * @callback module:api/SettingsStorageApi~resetStorageToDefaultCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset the storage settings
     * Resets the storage settings to the default parameters.
     * @param {module:api/SettingsStorageApi~resetStorageToDefaultCallback} callback The callback function, accepting three arguments: error, data, response
     */
    resetStorageToDefault(callback) {
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/2.0/settings/storage', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCdnStorage operation.
     * @callback module:api/SettingsStorageApi~updateCdnStorageCallback
     * @param {String} error Error message, if any.
     * @param {module:models/CdnStorageSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the CDN storage
     * Updates the CDN storage with the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/StorageRequestsDto} [storageRequestsDto] 
     * @param {module:api/SettingsStorageApi~updateCdnStorageCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/CdnStorageSettingsWrapper}
     */
    updateCdnStorage(opts, callback) {
      opts = opts || {};
      let postBody = opts['storageRequestsDto'];

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
      let returnType = CdnStorageSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/storage/cdn', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateStorage operation.
     * @callback module:api/SettingsStorageApi~updateStorageCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StorageSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a storage
     * Updates a storage with the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/StorageRequestsDto} [storageRequestsDto] 
     * @param {module:api/SettingsStorageApi~updateStorageCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StorageSettingsWrapper}
     */
    updateStorage(opts, callback) {
      opts = opts || {};
      let postBody = opts['storageRequestsDto'];

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
      let returnType = StorageSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/storage', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
