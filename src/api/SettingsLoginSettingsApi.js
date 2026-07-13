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
import LoginSettingsRequestDto from '../models/LoginSettingsRequestDto';
import LoginSettingsWrapper from '../models/LoginSettingsWrapper';

/**
* SettingsLoginSettings service.
* @module api/SettingsLoginSettingsApi
* @version 3.2.0
*/
export default class SettingsLoginSettingsApi {

    /**
    * Constructs a new SettingsLoginSettingsApi. 
    * @alias module:api/SettingsLoginSettingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getLoginSettings operation.
     * @callback module:api/SettingsLoginSettingsApi~getLoginSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/LoginSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the login settings
     * Returns the portal login settings.
     * @param {module:api/SettingsLoginSettingsApi~getLoginSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/LoginSettingsWrapper}
     */
    getLoginSettings(callback) {
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
      let returnType = LoginSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/security/loginsettings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setDefaultLoginSettings operation.
     * @callback module:api/SettingsLoginSettingsApi~setDefaultLoginSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/LoginSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset the login settings
     * Resets the portal login settings to default.
     * @param {module:api/SettingsLoginSettingsApi~setDefaultLoginSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/LoginSettingsWrapper}
     */
    setDefaultLoginSettings(callback) {
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
      let returnType = LoginSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/security/loginsettings', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLoginSettings operation.
     * @callback module:api/SettingsLoginSettingsApi~updateLoginSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/LoginSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the login settings
     * Updates the login settings with the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/LoginSettingsRequestDto} [loginSettingsRequestDto] 
     * @param {module:api/SettingsLoginSettingsApi~updateLoginSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/LoginSettingsWrapper}
     */
    updateLoginSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['loginSettingsRequestDto'];

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
      let returnType = LoginSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/security/loginsettings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
