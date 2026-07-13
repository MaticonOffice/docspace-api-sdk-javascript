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
import DarkThemeSettingsRequestDto from '../models/DarkThemeSettingsRequestDto';
import DarkThemeSettingsWrapper from '../models/DarkThemeSettingsWrapper';

/**
* PeopleTheme service.
* @module api/PeopleThemeApi
* @version 3.2.0
*/
export default class PeopleThemeApi {

    /**
    * Constructs a new PeopleThemeApi. 
    * @alias module:api/PeopleThemeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the changePortalTheme operation.
     * @callback module:api/PeopleThemeApi~changePortalThemeCallback
     * @param {String} error Error message, if any.
     * @param {module:models/DarkThemeSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change the portal theme
     * Changes the current portal theme.
     * @param {Object} opts Optional parameters
     * @param {module:models/DarkThemeSettingsRequestDto} [darkThemeSettingsRequestDto] 
     * @param {module:api/PeopleThemeApi~changePortalThemeCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/DarkThemeSettingsWrapper}
     */
    changePortalTheme(opts, callback) {
      opts = opts || {};
      let postBody = opts['darkThemeSettingsRequestDto'];

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
      let returnType = DarkThemeSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/theme', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPortalTheme operation.
     * @callback module:api/PeopleThemeApi~getPortalThemeCallback
     * @param {String} error Error message, if any.
     * @param {module:models/DarkThemeSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the portal theme
     * Returns a theme which is set to the current portal.
     * @param {module:api/PeopleThemeApi~getPortalThemeCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/DarkThemeSettingsWrapper}
     */
    getPortalTheme(callback) {
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
      let returnType = DarkThemeSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/theme', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
