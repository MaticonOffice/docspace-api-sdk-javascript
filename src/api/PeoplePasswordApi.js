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
import MemberBaseRequestDto from '../models/MemberBaseRequestDto';
import StringWrapper from '../models/StringWrapper';

/**
* PeoplePassword service.
* @module api/PeoplePasswordApi
* @version 3.2.0
*/
export default class PeoplePasswordApi {

    /**
    * Constructs a new PeoplePasswordApi. 
    * @alias module:api/PeoplePasswordApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the changeUserPassword operation.
     * @callback module:api/PeoplePasswordApi~changeUserPasswordCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change a user password
     * Sets a new password to the user with the ID specified in the request.
     * @param {String} userid The user ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/MemberBaseRequestDto} [memberBaseRequestDto] The request parameters for the user generic information.
     * @param {module:api/PeoplePasswordApi~changeUserPasswordCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullWrapper}
     */
    changeUserPassword(userid, opts, callback) {
      opts = opts || {};
      let postBody = opts['memberBaseRequestDto'];
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling changeUserPassword");
      }

      let pathParams = {
        'userid': userid
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
        '/api/2.0/people/{userid}/password', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sendUserPassword operation.
     * @callback module:api/PeoplePasswordApi~sendUserPasswordCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remind a user password
     * Reminds a password to the user using the email address specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/EmailMemberRequestDto} [emailMemberRequestDto] 
     * @param {module:api/PeoplePasswordApi~sendUserPasswordCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    sendUserPassword(opts, callback) {
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

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StringWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/password', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
