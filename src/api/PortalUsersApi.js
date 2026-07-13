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
import EmployeeType from '../models/EmployeeType';
import Int64Wrapper from '../models/Int64Wrapper';
import StringWrapper from '../models/StringWrapper';
import UserInfoWrapper from '../models/UserInfoWrapper';

/**
* PortalUsers service.
* @module api/PortalUsersApi
* @version 3.2.0
*/
export default class PortalUsersApi {

    /**
    * Constructs a new PortalUsersApi. 
    * @alias module:api/PortalUsersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getInvitationLink operation.
     * @callback module:api/PortalUsersApi~getInvitationLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an invitation link
     * Returns an invitation link for joining the portal.
     * @param {module:models/EmployeeType} employeeType The type of employee role for the invitation link (All, RoomAdmin, Guest, DocSpaceAdmin, User).
     * @param {module:api/PortalUsersApi~getInvitationLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    getInvitationLink(employeeType, callback) {
      let postBody = null;
      // verify the required parameter 'employeeType' is set
      if (employeeType === undefined || employeeType === null) {
        throw new Error("Missing the required parameter 'employeeType' when calling getInvitationLink");
      }

      let pathParams = {
        'employeeType': employeeType
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
        '/api/2.0/portal/users/invite/{employeeType}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPortalUsersCount operation.
     * @callback module:api/PortalUsersApi~getPortalUsersCountCallback
     * @param {String} error Error message, if any.
     * @param {module:models/Int64Wrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a number of portal users
     * Returns a number of portal users.
     * @param {module:api/PortalUsersApi~getPortalUsersCountCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/Int64Wrapper}
     */
    getPortalUsersCount(callback) {
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
      let returnType = Int64Wrapper;
      return this.apiClient.callApi(
        '/api/2.0/portal/userscount', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserById operation.
     * @callback module:api/PortalUsersApi~getUserByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:models/UserInfoWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a user by ID
     * Returns a user with the ID specified in the request from the current portal.
     * @param {String} userID The user ID extracted from the route parameters.
     * @param {module:api/PortalUsersApi~getUserByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/UserInfoWrapper}
     */
    getUserById(userID, callback) {
      let postBody = null;
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling getUserById");
      }

      let pathParams = {
        'userID': userID
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
      let returnType = UserInfoWrapper;
      return this.apiClient.callApi(
        '/api/2.0/portal/users/{userID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the markGiftMessageAsRead operation.
     * @callback module:api/PortalUsersApi~markGiftMessageAsReadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark a gift message as read
     * Marks a gift message as read.
     * @param {module:api/PortalUsersApi~markGiftMessageAsReadCallback} callback The callback function, accepting three arguments: error, data, response
     */
    markGiftMessageAsRead(callback) {
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/2.0/portal/present/mark', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sendCongratulations operation.
     * @callback module:api/PortalUsersApi~sendCongratulationsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send congratulations
     * Sends congratulations to the user after registering a portal.
     * @param {Object} opts Optional parameters
     * @param {String} [userid] The user ID to receive the congratulatory message.
     * @param {String} [key] The template identifier or email configuration key.
     * @param {module:api/PortalUsersApi~sendCongratulationsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    sendCongratulations(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'Userid': opts['userid'],
        'Key': opts['key']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/2.0/portal/sendcongratulations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
