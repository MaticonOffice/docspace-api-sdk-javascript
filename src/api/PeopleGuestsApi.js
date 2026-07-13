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
import EmailMemberRequestDto from '../models/EmailMemberRequestDto';
import EmployeeFullWrapper from '../models/EmployeeFullWrapper';
import UpdateMembersRequestDto from '../models/UpdateMembersRequestDto';

/**
* PeopleGuests service.
* @module api/PeopleGuestsApi
* @version 3.2.0
*/
export default class PeopleGuestsApi {

    /**
    * Constructs a new PeopleGuestsApi. 
    * @alias module:api/PeopleGuestsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the approveGuestShareLink operation.
     * @callback module:api/PeopleGuestsApi~approveGuestShareLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Approve a guest sharing link
     * Approves a guest sharing link and returns the detailed information about a guest.
     * @param {Object} opts Optional parameters
     * @param {module:models/EmailMemberRequestDto} [emailMemberRequestDto] 
     * @param {module:api/PeopleGuestsApi~approveGuestShareLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullWrapper}
     */
    approveGuestShareLink(opts, callback) {
      opts = opts || {};
      let postBody = opts['emailMemberRequestDto'];

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
      let returnType = EmployeeFullWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/guests/share/approve', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGuests operation.
     * @callback module:api/PeopleGuestsApi~deleteGuestsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete guests
     * Deletes guests from the list and excludes them from rooms to which they were invited.
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateMembersRequestDto} [updateMembersRequestDto] 
     * @param {module:api/PeopleGuestsApi~deleteGuestsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteGuests(opts, callback) {
      opts = opts || {};
      let postBody = opts['updateMembersRequestDto'];

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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/2.0/people/guests', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
