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
import ApiKeyResponseArrayWrapper from '../models/ApiKeyResponseArrayWrapper';
import ApiKeyResponseWrapper from '../models/ApiKeyResponseWrapper';
import BooleanWrapper from '../models/BooleanWrapper';
import CreateApiKeyRequestDto from '../models/CreateApiKeyRequestDto';
import STRINGArrayWrapper from '../models/STRINGArrayWrapper';
import UpdateApiKeyRequest from '../models/UpdateApiKeyRequest';

/**
* ApiKeys service.
* @module api/ApiKeysApi
* @version 3.2.0
*/
export default class ApiKeysApi {

    /**
    * Constructs a new ApiKeysApi. 
    * @alias module:api/ApiKeysApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createApiKey operation.
     * @callback module:api/ApiKeysApi~createApiKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ApiKeyResponseWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a user API key
     * Creates a user API key with the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/CreateApiKeyRequestDto} [createApiKeyRequestDto] 
     * @param {module:api/ApiKeysApi~createApiKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ApiKeyResponseWrapper}
     */
    createApiKey(opts, callback) {
      opts = opts || {};
      let postBody = opts['createApiKeyRequestDto'];

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
      let returnType = ApiKeyResponseWrapper;
      return this.apiClient.callApi(
        '/api/2.0/keys', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteApiKey operation.
     * @callback module:api/ApiKeysApi~deleteApiKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user API key
     * Delete a user API key by its ID.
     * @param {String} keyId The API key ID.
     * @param {module:api/ApiKeysApi~deleteApiKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    deleteApiKey(keyId, callback) {
      let postBody = null;
      // verify the required parameter 'keyId' is set
      if (keyId === undefined || keyId === null) {
        throw new Error("Missing the required parameter 'keyId' when calling deleteApiKey");
      }

      let pathParams = {
        'keyId': keyId
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
      let returnType = BooleanWrapper;
      return this.apiClient.callApi(
        '/api/2.0/keys/{keyId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllPermissions operation.
     * @callback module:api/ApiKeysApi~getAllPermissionsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/STRINGArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get API key permissions
     * Returns a list of all available permissions for the API key.
     * @param {module:api/ApiKeysApi~getAllPermissionsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/STRINGArrayWrapper}
     */
    getAllPermissions(callback) {
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
      let returnType = STRINGArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/keys/permissions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getApiKey operation.
     * @callback module:api/ApiKeysApi~getApiKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ApiKeyResponseWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user API key info
     * Returns current user API key info.
     * @param {module:api/ApiKeysApi~getApiKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ApiKeyResponseWrapper}
     */
    getApiKey(callback) {
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
      let returnType = ApiKeyResponseWrapper;
      return this.apiClient.callApi(
        '/api/2.0/keys/@self', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getApiKeys operation.
     * @callback module:api/ApiKeysApi~getApiKeysCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ApiKeyResponseArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user API keys
     * Returns a list of all API keys for the current user.
     * @param {module:api/ApiKeysApi~getApiKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ApiKeyResponseArrayWrapper}
     */
    getApiKeys(callback) {
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
      let returnType = ApiKeyResponseArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/keys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateApiKey operation.
     * @callback module:api/ApiKeysApi~updateApiKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an API key
     * Updates an existing API key changing its name, permissions and status.
     * @param {String} keyId The unique identifier of the API key to update.
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateApiKeyRequest} [updateApiKeyRequest] The request parameters for updating an existing API key.
     * @param {module:api/ApiKeysApi~updateApiKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    updateApiKey(keyId, opts, callback) {
      opts = opts || {};
      let postBody = opts['updateApiKeyRequest'];
      // verify the required parameter 'keyId' is set
      if (keyId === undefined || keyId === null) {
        throw new Error("Missing the required parameter 'keyId' when calling updateApiKey");
      }

      let pathParams = {
        'keyId': keyId
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
        '/api/2.0/keys/{keyId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
