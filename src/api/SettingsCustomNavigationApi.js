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
import CustomNavigationItem from '../models/CustomNavigationItem';
import CustomNavigationItemArrayWrapper from '../models/CustomNavigationItemArrayWrapper';
import CustomNavigationItemWrapper from '../models/CustomNavigationItemWrapper';

/**
* SettingsCustomNavigation service.
* @module api/SettingsCustomNavigationApi
* @version 3.2.0
*/
export default class SettingsCustomNavigationApi {

    /**
    * Constructs a new SettingsCustomNavigationApi. 
    * @alias module:api/SettingsCustomNavigationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createCustomNavigationItem operation.
     * @callback module:api/SettingsCustomNavigationApi~createCustomNavigationItemCallback
     * @param {String} error Error message, if any.
     * @param {module:models/CustomNavigationItemWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a custom navigation item
     * Adds a custom navigation item with the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/CustomNavigationItem} [customNavigationItem] 
     * @param {module:api/SettingsCustomNavigationApi~createCustomNavigationItemCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/CustomNavigationItemWrapper}
     */
    createCustomNavigationItem(opts, callback) {
      opts = opts || {};
      let postBody = opts['customNavigationItem'];

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
      let returnType = CustomNavigationItemWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/customnavigation/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCustomNavigationItem operation.
     * @callback module:api/SettingsCustomNavigationApi~deleteCustomNavigationItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a custom navigation item
     * Deletes a custom navigation item with the ID specified in the request.
     * @param {String} id The ID extracted from the route parameters.
     * @param {module:api/SettingsCustomNavigationApi~deleteCustomNavigationItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteCustomNavigationItem(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteCustomNavigationItem");
      }

      let pathParams = {
        'id': id
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
        '/api/2.0/settings/customnavigation/delete/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomNavigationItem operation.
     * @callback module:api/SettingsCustomNavigationApi~getCustomNavigationItemCallback
     * @param {String} error Error message, if any.
     * @param {module:models/CustomNavigationItemWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a custom navigation item by ID
     * Returns a custom navigation item by the ID specified in the request.
     * @param {String} id The ID extracted from the route parameters.
     * @param {module:api/SettingsCustomNavigationApi~getCustomNavigationItemCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/CustomNavigationItemWrapper}
     */
    getCustomNavigationItem(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCustomNavigationItem");
      }

      let pathParams = {
        'id': id
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
      let returnType = CustomNavigationItemWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/customnavigation/get/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomNavigationItemSample operation.
     * @callback module:api/SettingsCustomNavigationApi~getCustomNavigationItemSampleCallback
     * @param {String} error Error message, if any.
     * @param {module:models/CustomNavigationItemWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a custom navigation item sample
     * Returns a sample of the custom navigation item.
     * @param {module:api/SettingsCustomNavigationApi~getCustomNavigationItemSampleCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/CustomNavigationItemWrapper}
     */
    getCustomNavigationItemSample(callback) {
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
      let returnType = CustomNavigationItemWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/customnavigation/getsample', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomNavigationItems operation.
     * @callback module:api/SettingsCustomNavigationApi~getCustomNavigationItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/CustomNavigationItemArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the custom navigation items
     * Returns a list of the custom navigation items.
     * @param {module:api/SettingsCustomNavigationApi~getCustomNavigationItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/CustomNavigationItemArrayWrapper}
     */
    getCustomNavigationItems(callback) {
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
      let returnType = CustomNavigationItemArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/customnavigation/getall', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
