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
import CspRequestsDto from '../models/CspRequestsDto';
import CspWrapper from '../models/CspWrapper';

/**
* SecurityCSP service.
* @module api/SecurityCSPApi
* @version 3.2.0
*/
export default class SecurityCSPApi {

    /**
    * Constructs a new SecurityCSPApi. 
    * @alias module:api/SecurityCSPApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the configureCsp operation.
     * @callback module:api/SecurityCSPApi~configureCspCallback
     * @param {String} error Error message, if any.
     * @param {module:models/CspWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Configure CSP settings
     * Configures the CSP (Content Security Policy) settings for the current portal.
     * @param {Object} opts Optional parameters
     * @param {module:models/CspRequestsDto} [cspRequestsDto] 
     * @param {module:api/SecurityCSPApi~configureCspCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/CspWrapper}
     */
    configureCsp(opts, callback) {
      opts = opts || {};
      let postBody = opts['cspRequestsDto'];

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
      let returnType = CspWrapper;
      return this.apiClient.callApi(
        '/api/2.0/security/csp', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCspSettings operation.
     * @callback module:api/SecurityCSPApi~getCspSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/CspWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get CSP settings
     * Returns the CSP (Content Security Policy) settings for the current portal.
     * @param {module:api/SecurityCSPApi~getCspSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/CspWrapper}
     */
    getCspSettings(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CspWrapper;
      return this.apiClient.callApi(
        '/api/2.0/security/csp', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
