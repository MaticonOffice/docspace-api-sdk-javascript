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
import Culture from '../models/Culture';
import EmployeeArrayWrapper from '../models/EmployeeArrayWrapper';
import EmployeeFullArrayWrapper from '../models/EmployeeFullArrayWrapper';
import EmployeeFullWrapper from '../models/EmployeeFullWrapper';
import InviteUsersRequestDto from '../models/InviteUsersRequestDto';
import MemberRequestDto from '../models/MemberRequestDto';
import ObjectWrapper from '../models/ObjectWrapper';
import SortOrder from '../models/SortOrder';
import StringWrapper from '../models/StringWrapper';
import UpdateMemberRequestDto from '../models/UpdateMemberRequestDto';
import UpdateMembersRequestDto from '../models/UpdateMembersRequestDto';

/**
* PeopleProfiles service.
* @module api/PeopleProfilesApi
* @version 3.2.0
*/
export default class PeopleProfilesApi {

    /**
    * Constructs a new PeopleProfilesApi. 
    * @alias module:api/PeopleProfilesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addMember operation.
     * @callback module:api/PeopleProfilesApi~addMemberCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a user
     * Adds a new portal user with the first name, last name, email address, and several optional parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/MemberRequestDto} [memberRequestDto] 
     * @param {module:api/PeopleProfilesApi~addMemberCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullWrapper}
     */
    addMember(opts, callback) {
      opts = opts || {};
      let postBody = opts['memberRequestDto'];

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
        '/api/2.0/people', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteMember operation.
     * @callback module:api/PeopleProfilesApi~deleteMemberCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user
     * Deletes a user with the ID specified in the request from the portal.
     * @param {String} userid The user ID.
     * @param {module:api/PeopleProfilesApi~deleteMemberCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullWrapper}
     */
    deleteMember(userid, callback) {
      let postBody = null;
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling deleteMember");
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
      let returnType = EmployeeFullWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/{userid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProfile operation.
     * @callback module:api/PeopleProfilesApi~deleteProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete my profile
     * Deletes the current user profile.
     * @param {module:api/PeopleProfilesApi~deleteProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullWrapper}
     */
    deleteProfile(callback) {
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
      let returnType = EmployeeFullWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/@self', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllProfiles operation.
     * @callback module:api/PeopleProfilesApi~getAllProfilesCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get profiles
     * Returns a list of profiles for all the portal users.
     * @param {Object} opts Optional parameters
     * @param {Number} [count] The maximum number of items to be retrieved in the response.
     * @param {Number} [startIndex] The zero-based index of the first item to be retrieved in a filtered result set.
     * @param {String} [filterBy] Specifies the filter criteria for user-related queries.
     * @param {String} [sortBy] Specifies the property or field name by which the results should be sorted.
     * @param {module:models/SortOrder} [sortOrder] The order in which the results are sorted.
     * @param {String} [filterSeparator] The character or string used to separate multiple filter values in a filtering query.
     * @param {String} [filterValue] The text value used as an additional filter criterion for profiles retrieval.
     * @param {} [fields] Comma-separated list of fields to include in the response
     * @param {module:api/PeopleProfilesApi~getAllProfilesCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullArrayWrapper}
     */
    getAllProfiles(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'count': opts['count'],
        'startIndex': opts['startIndex'],
        'filterBy': opts['filterBy'],
        'sortBy': opts['sortBy'],
        'sortOrder': opts['sortOrder'],
        'filterSeparator': opts['filterSeparator'],
        'filterValue': opts['filterValue'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
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
        '/api/2.0/people', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getClaims operation.
     * @callback module:api/PeopleProfilesApi~getClaimsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ObjectWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the user claims.
     * Returns the user claims.
     * @param {module:api/PeopleProfilesApi~getClaimsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ObjectWrapper}
     */
    getClaims(callback) {
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
      let returnType = ObjectWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/tokendiagnostics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getProfileByEmail operation.
     * @callback module:api/PeopleProfilesApi~getProfileByEmailCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a profile by user email
     * Returns the detailed information about a profile of the user with the email specified in the request.
     * @param {Object} opts Optional parameters
     * @param {String} [email] The user email address.
     * @param {String} [culture] Culture
     * @param {module:api/PeopleProfilesApi~getProfileByEmailCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullWrapper}
     */
    getProfileByEmail(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'email': opts['email'],
        'culture': opts['culture']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EmployeeFullWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/email', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getProfileByUserId operation.
     * @callback module:api/PeopleProfilesApi~getProfileByUserIdCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a profile by user name
     * Returns the detailed information about a profile of the user with the name specified in the request.
     * @param {String} userid The user ID.
     * @param {module:api/PeopleProfilesApi~getProfileByUserIdCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullWrapper}
     */
    getProfileByUserId(userid, callback) {
      let postBody = null;
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling getProfileByUserId");
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
      let returnType = EmployeeFullWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/{userid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSelfProfile operation.
     * @callback module:api/PeopleProfilesApi~getSelfProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get my profile
     * Returns the detailed information about the current user profile.
     * @param {module:api/PeopleProfilesApi~getSelfProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullWrapper}
     */
    getSelfProfile(callback) {
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
      let returnType = EmployeeFullWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/@self', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the inviteUsers operation.
     * @callback module:api/PeopleProfilesApi~inviteUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Invite users
     * Invites users specified in the request to the current portal.
     * @param {Object} opts Optional parameters
     * @param {module:models/InviteUsersRequestDto} [inviteUsersRequestDto] 
     * @param {module:api/PeopleProfilesApi~inviteUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeArrayWrapper}
     */
    inviteUsers(opts, callback) {
      opts = opts || {};
      let postBody = opts['inviteUsersRequestDto'];

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
      let returnType = EmployeeArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/invite', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeUsers operation.
     * @callback module:api/PeopleProfilesApi~removeUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete users
     * Deletes a list of the users with the IDs specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateMembersRequestDto} [updateMembersRequestDto] 
     * @param {module:api/PeopleProfilesApi~removeUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullArrayWrapper}
     */
    removeUsers(opts, callback) {
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
      let accepts = ['application/json'];
      let returnType = EmployeeFullArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/delete', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the resendUserInvites operation.
     * @callback module:api/PeopleProfilesApi~resendUserInvitesCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resend activation emails
     * Resends emails to the users who have not activated their emails.
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateMembersRequestDto} [updateMembersRequestDto] 
     * @param {module:api/PeopleProfilesApi~resendUserInvitesCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullArrayWrapper}
     */
    resendUserInvites(opts, callback) {
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
      let accepts = ['application/json'];
      let returnType = EmployeeFullArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/invite', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sendEmailChangeInstructions operation.
     * @callback module:api/PeopleProfilesApi~sendEmailChangeInstructionsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send instructions to change email
     * Sends a message to the user email with the instructions to change the email address connected to the portal.
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateMemberRequestDto} [updateMemberRequestDto] 
     * @param {module:api/PeopleProfilesApi~sendEmailChangeInstructionsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    sendEmailChangeInstructions(opts, callback) {
      opts = opts || {};
      let postBody = opts['updateMemberRequestDto'];

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
        '/api/2.0/people/email', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateMember operation.
     * @callback module:api/PeopleProfilesApi~updateMemberCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user
     * Updates the data for the selected portal user with the first name, last name, email address, and/or optional parameters specified in the request.
     * @param {String} userid The user ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateMemberRequestDto} [updateMemberRequestDto] The request parameters for updating the user information.
     * @param {module:api/PeopleProfilesApi~updateMemberCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullWrapper}
     */
    updateMember(userid, opts, callback) {
      opts = opts || {};
      let postBody = opts['updateMemberRequestDto'];
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling updateMember");
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
        '/api/2.0/people/{userid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateMemberCulture operation.
     * @callback module:api/PeopleProfilesApi~updateMemberCultureCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user culture code
     * Updates the user culture code with the parameters specified in the request.
     * @param {String} userid The user ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/Culture} [culture] The culture code parameters.
     * @param {module:api/PeopleProfilesApi~updateMemberCultureCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullWrapper}
     */
    updateMemberCulture(userid, opts, callback) {
      opts = opts || {};
      let postBody = opts['culture'];
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling updateMemberCulture");
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
        '/api/2.0/people/{userid}/culture', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
