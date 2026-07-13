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
import BooleanWrapper from '../models/BooleanWrapper';
import EmployeeType from '../models/EmployeeType';
import StartReassignRequestDto from '../models/StartReassignRequestDto';
import StringWrapper from '../models/StringWrapper';
import TaskProgressResponseWrapper from '../models/TaskProgressResponseWrapper';
import TerminateRequestDto from '../models/TerminateRequestDto';

/**
* PeopleUserData service.
* @module api/PeopleUserDataApi
* @version 3.2.0
*/
export default class PeopleUserDataApi {

    /**
    * Constructs a new PeopleUserDataApi. 
    * @alias module:api/PeopleUserDataApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getDeletePersonalFolderProgress operation.
     * @callback module:api/PeopleUserDataApi~getDeletePersonalFolderProgressCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TaskProgressResponseWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the progress of deleting the personal folder
     * Returns the progress of deleting the personal folder.
     * @param {module:api/PeopleUserDataApi~getDeletePersonalFolderProgressCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TaskProgressResponseWrapper}
     */
    getDeletePersonalFolderProgress(callback) {
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
      let returnType = TaskProgressResponseWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/delete/personal/progress', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getReassignProgress operation.
     * @callback module:api/PeopleUserDataApi~getReassignProgressCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TaskProgressResponseWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the reassignment progress
     * Returns the progress of the started data reassignment for the user with the ID specified in the request.
     * @param {String} userid The user ID.
     * @param {module:api/PeopleUserDataApi~getReassignProgressCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TaskProgressResponseWrapper}
     */
    getReassignProgress(userid, callback) {
      let postBody = null;
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling getReassignProgress");
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
        '/api/2.0/people/reassign/progress/{userid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRemoveProgress operation.
     * @callback module:api/PeopleUserDataApi~getRemoveProgressCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TaskProgressResponseWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the deletion progress
     * Returns the progress of the started data deletion for the user with the ID specified in the request.
     * @param {String} userid The user ID.
     * @param {module:api/PeopleUserDataApi~getRemoveProgressCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TaskProgressResponseWrapper}
     */
    getRemoveProgress(userid, callback) {
      let postBody = null;
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling getRemoveProgress");
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
        '/api/2.0/people/remove/progress/{userid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the necessaryReassign operation.
     * @callback module:api/PeopleUserDataApi~necessaryReassignCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check the data reassignment need
     * Checks if the reassignment of rooms and shared files is necessary or not.
     * @param {Object} opts Optional parameters
     * @param {String} [userId] The user ID.
     * @param {module:models/EmployeeType} [type] The expected user type.
     * @param {module:api/PeopleUserDataApi~necessaryReassignCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    necessaryReassign(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'UserId': opts['userId'],
        'Type': opts['type']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BooleanWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/reassign/necessary', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sendInstructionsToDelete operation.
     * @callback module:api/PeopleUserDataApi~sendInstructionsToDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send the deletion instructions
     * Sends the instructions for deleting a user profile.
     * @param {module:api/PeopleUserDataApi~sendInstructionsToDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    sendInstructionsToDelete(callback) {
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
      let returnType = StringWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/self/delete', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the startDeletePersonalFolder operation.
     * @callback module:api/PeopleUserDataApi~startDeletePersonalFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TaskProgressResponseWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the personal folder
     * Starts deleting the personal folder.
     * @param {module:api/PeopleUserDataApi~startDeletePersonalFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TaskProgressResponseWrapper}
     */
    startDeletePersonalFolder(callback) {
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
      let returnType = TaskProgressResponseWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/delete/personal/start', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the startReassign operation.
     * @callback module:api/PeopleUserDataApi~startReassignCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TaskProgressResponseWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start the data reassignment
     * Starts the data reassignment for the user with the ID specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/StartReassignRequestDto} [startReassignRequestDto] 
     * @param {module:api/PeopleUserDataApi~startReassignCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TaskProgressResponseWrapper}
     */
    startReassign(opts, callback) {
      opts = opts || {};
      let postBody = opts['startReassignRequestDto'];

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
        '/api/2.0/people/reassign/start', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the startRemove operation.
     * @callback module:api/PeopleUserDataApi~startRemoveCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TaskProgressResponseWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start the data deletion
     * Starts the data deletion for the user with the ID specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/TerminateRequestDto} [terminateRequestDto] 
     * @param {module:api/PeopleUserDataApi~startRemoveCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TaskProgressResponseWrapper}
     */
    startRemove(opts, callback) {
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
        '/api/2.0/people/remove/start', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the terminateReassign operation.
     * @callback module:api/PeopleUserDataApi~terminateReassignCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TaskProgressResponseWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Terminate the data reassignment
     * Terminates the data reassignment for the user with the ID specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/TerminateRequestDto} [terminateRequestDto] 
     * @param {module:api/PeopleUserDataApi~terminateReassignCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TaskProgressResponseWrapper}
     */
    terminateReassign(opts, callback) {
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
        '/api/2.0/people/reassign/terminate', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the terminateRemove operation.
     * @callback module:api/PeopleUserDataApi~terminateRemoveCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Terminate the data deletion
     * Terminates the data deletion for the user with the ID specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/TerminateRequestDto} [terminateRequestDto] 
     * @param {module:api/PeopleUserDataApi~terminateRemoveCallback} callback The callback function, accepting three arguments: error, data, response
     */
    terminateRemove(opts, callback) {
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/2.0/people/remove/terminate', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
