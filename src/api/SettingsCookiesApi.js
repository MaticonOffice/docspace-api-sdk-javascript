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
import CookieSettingsRequestsDto from '../models/CookieSettingsRequestsDto';
import CookieSettingsWrapper from '../models/CookieSettingsWrapper';
import StringWrapper from '../models/StringWrapper';

/**
* SettingsCookies service.
* @module api/SettingsCookiesApi
* @version 3.2.0
*/
export default class SettingsCookiesApi {

    /**
    * Constructs a new SettingsCookiesApi. 
    * @alias module:api/SettingsCookiesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getCookieSettings operation.
     * @callback module:api/SettingsCookiesApi~getCookieSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/CookieSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cookies lifetime
     * Returns the cookies lifetime value in minutes.
     * @param {module:api/SettingsCookiesApi~getCookieSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/CookieSettingsWrapper}
     */
    getCookieSettings(callback) {
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
      let returnType = CookieSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/cookiesettings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCookieSettings operation.
     * @callback module:api/SettingsCookiesApi~updateCookieSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update cookies lifetime
     * Updates the cookies lifetime value in minutes.
     * @param {Object} opts Optional parameters
     * @param {module:models/CookieSettingsRequestsDto} [cookieSettingsRequestsDto] 
     * @param {module:api/SettingsCookiesApi~updateCookieSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    updateCookieSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['cookieSettingsRequestsDto'];

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
      let returnType = StringWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/cookiesettings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
