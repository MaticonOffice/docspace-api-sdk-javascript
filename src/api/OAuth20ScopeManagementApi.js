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
import ErrorResponse from '../models/ErrorResponse';
import ScopeResponse from '../models/ScopeResponse';

/**
* OAuth20ScopeManagement service.
* @module api/OAuth20ScopeManagementApi
* @version 3.2.0
*/
export default class OAuth20ScopeManagementApi {

    /**
    * Constructs a new OAuth20ScopeManagementApi. 
    * @alias module:api/OAuth20ScopeManagementApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getScopes operation.
     * @callback module:api/OAuth20ScopeManagementApi~getScopesCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ScopeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get available OAuth2 scopes
     * Retrieves a list of all available OAuth2 scopes for the specified tenant. The scopes define the permissions that can be requested by OAuth2 clients. The list is ordered alphabetically, with the 'openid' scope always appearing first.
     * @param {module:api/OAuth20ScopeManagementApi~getScopesCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ScopeResponse}
     */
    getScopes(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['asc_auth_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ScopeResponse;
      return this.apiClient.callApi(
        '/api/2.0/scopes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
