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
import EmployeeType from '../models/EmployeeType';
import StartUpdateUserTypeDto from '../models/StartUpdateUserTypeDto';
import TaskProgressResponseWrapper from '../models/TaskProgressResponseWrapper';
import TerminateRequestDto from '../models/TerminateRequestDto';
import UpdateMembersRequestDto from '../models/UpdateMembersRequestDto';

/**
* PeopleUserType service.
* @module api/PeopleUserTypeApi
* @version 3.2.0
*/
export default class PeopleUserTypeApi {

    /**
    * Constructs a new PeopleUserTypeApi. 
    * @alias module:api/PeopleUserTypeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getUserTypeUpdateProgress operation.
     * @callback module:api/PeopleUserTypeApi~getUserTypeUpdateProgressCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TaskProgressResponseWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the progress of updating user type
     * Returns the progress of updating the user type.
     * @param {String} userid The user ID.
     * @param {module:api/PeopleUserTypeApi~getUserTypeUpdateProgressCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TaskProgressResponseWrapper}
     */
    getUserTypeUpdateProgress(userid, callback) {
      let postBody = null;
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling getUserTypeUpdateProgress");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TaskProgressResponseWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/type/progress/{userid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the starUserTypetUpdate operation.
     * @callback module:api/PeopleUserTypeApi~starUserTypetUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TaskProgressResponseWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update user type
     * Starts updating the type of the user or guest when reassigning rooms and shared files.
     * @param {Object} opts Optional parameters
     * @param {module:models/StartUpdateUserTypeDto} [startUpdateUserTypeDto] 
     * @param {module:api/PeopleUserTypeApi~starUserTypetUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TaskProgressResponseWrapper}
     */
    starUserTypetUpdate(opts, callback) {
      opts = opts || {};
      let postBody = opts['startUpdateUserTypeDto'];

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
      let returnType = TaskProgressResponseWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/type', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the terminateUserTypeUpdate operation.
     * @callback module:api/PeopleUserTypeApi~terminateUserTypeUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TaskProgressResponseWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Terminate update user type
     * Terminates the process of updating the type of the user or guest.
     * @param {Object} opts Optional parameters
     * @param {module:models/TerminateRequestDto} [terminateRequestDto] 
     * @param {module:api/PeopleUserTypeApi~terminateUserTypeUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TaskProgressResponseWrapper}
     */
    terminateUserTypeUpdate(opts, callback) {
      opts = opts || {};
      let postBody = opts['terminateRequestDto'];

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
      let returnType = TaskProgressResponseWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/type/terminate', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUserType operation.
     * @callback module:api/PeopleUserTypeApi~updateUserTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change a user type
     * Changes a type of the users with the IDs specified in the request.
     * @param {module:models/EmployeeType} type The new user type.
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateMembersRequestDto} [updateMembersRequestDto] The request parameters for updating the user information.
     * @param {module:api/PeopleUserTypeApi~updateUserTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullArrayWrapper}
     */
    updateUserType(type, opts, callback) {
      opts = opts || {};
      let postBody = opts['updateMembersRequestDto'];
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling updateUserType");
      }

      let pathParams = {
        'type': type
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
        '/api/2.0/people/type/{type}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
