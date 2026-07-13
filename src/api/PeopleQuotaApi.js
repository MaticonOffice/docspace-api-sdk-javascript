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
import EmployeeFullArrayWrapper from '../models/EmployeeFullArrayWrapper';
import UpdateMembersQuotaRequestDto from '../models/UpdateMembersQuotaRequestDto';

/**
* PeopleQuota service.
* @module api/PeopleQuotaApi
* @version 3.2.0
*/
export default class PeopleQuotaApi {

    /**
    * Constructs a new PeopleQuotaApi. 
    * @alias module:api/PeopleQuotaApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the resetUsersQuota operation.
     * @callback module:api/PeopleQuotaApi~resetUsersQuotaCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset a user quota limit
     * Resets a quota limit of users with the IDs specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateMembersQuotaRequestDto} [updateMembersQuotaRequestDto] 
     * @param {module:api/PeopleQuotaApi~resetUsersQuotaCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullArrayWrapper}
     */
    resetUsersQuota(opts, callback) {
      opts = opts || {};
      let postBody = opts['updateMembersQuotaRequestDto'];

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
      let returnType = EmployeeFullArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/resetquota', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUserQuota operation.
     * @callback module:api/PeopleQuotaApi~updateUserQuotaCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change a user quota limit
     * Changes a quota limit for the users with the IDs specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateMembersQuotaRequestDto} [updateMembersQuotaRequestDto] 
     * @param {module:api/PeopleQuotaApi~updateUserQuotaCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullArrayWrapper}
     */
    updateUserQuota(opts, callback) {
      opts = opts || {};
      let postBody = opts['updateMembersQuotaRequestDto'];

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
      let returnType = EmployeeFullArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/userquota', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
