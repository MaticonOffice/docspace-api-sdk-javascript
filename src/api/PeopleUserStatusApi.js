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
import EmployeeActivationStatus from '../models/EmployeeActivationStatus';
import EmployeeFullArrayWrapper from '../models/EmployeeFullArrayWrapper';
import EmployeeStatus from '../models/EmployeeStatus';
import SortOrder from '../models/SortOrder';
import UpdateMembersRequestDto from '../models/UpdateMembersRequestDto';

/**
* PeopleUserStatus service.
* @module api/PeopleUserStatusApi
* @version 3.2.0
*/
export default class PeopleUserStatusApi {

    /**
    * Constructs a new PeopleUserStatusApi. 
    * @alias module:api/PeopleUserStatusApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getByStatus operation.
     * @callback module:api/PeopleUserStatusApi~getByStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get profiles by status
     * Returns a list of profiles filtered by the user status.
     * @param {module:models/EmployeeStatus} status The user status.
     * @param {Object} opts Optional parameters
     * @param {String} [filterBy] Specifies the criteria used to filter the profiles in the request.
     * @param {Number} [count] The maximum number of user profiles to retrieve.
     * @param {Number} [startIndex] The starting index for retrieving data in a paginated request.
     * @param {String} [sortBy] Specifies the property or field name by which the results should be sorted.
     * @param {module:models/SortOrder} [sortOrder] The order in which the results are sorted.
     * @param {String} [filterSeparator] Represents the separator used to split multiple filter criteria in a query string.
     * @param {String} [filterValue] A string value representing additional filter criteria used in query parameters.
     * @param {module:api/PeopleUserStatusApi~getByStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullArrayWrapper}
     */
    getByStatus(status, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling getByStatus");
      }

      let pathParams = {
        'status': status
      };
      let queryParams = {
        'filterBy': opts['filterBy'],
        'count': opts['count'],
        'startIndex': opts['startIndex'],
        'sortBy': opts['sortBy'],
        'sortOrder': opts['sortOrder'],
        'filterSeparator': opts['filterSeparator'],
        'filterValue': opts['filterValue']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EmployeeFullArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/status/{status}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUserActivationStatus operation.
     * @callback module:api/PeopleUserStatusApi~updateUserActivationStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set an activation status to the users
     * Sets the required activation status to the list of users with the IDs specified in the request.
     * @param {module:models/EmployeeActivationStatus} activationstatus The new user activation status.
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateMembersRequestDto} [updateMembersRequestDto] The request parameters for updating the user information.
     * @param {module:api/PeopleUserStatusApi~updateUserActivationStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullArrayWrapper}
     */
    updateUserActivationStatus(activationstatus, opts, callback) {
      opts = opts || {};
      let postBody = opts['updateMembersRequestDto'];
      // verify the required parameter 'activationstatus' is set
      if (activationstatus === undefined || activationstatus === null) {
        throw new Error("Missing the required parameter 'activationstatus' when calling updateUserActivationStatus");
      }

      let pathParams = {
        'activationstatus': activationstatus
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
        '/api/2.0/people/activationstatus/{activationstatus}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUserStatus operation.
     * @callback module:api/PeopleUserStatusApi~updateUserStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change a user status
     * Changes a status of the users with the IDs specified in the request.
     * @param {module:models/EmployeeStatus} status The new user status.
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateMembersRequestDto} [updateMembersRequestDto] The request parameters for updating the user information.
     * @param {module:api/PeopleUserStatusApi~updateUserStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullArrayWrapper}
     */
    updateUserStatus(status, opts, callback) {
      opts = opts || {};
      let postBody = opts['updateMembersRequestDto'];
      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling updateUserStatus");
      }

      let pathParams = {
        'status': status
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
        '/api/2.0/people/status/{status}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
