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
import GroupArrayWrapper from '../models/GroupArrayWrapper';
import GroupRequestDto from '../models/GroupRequestDto';
import GroupSummaryArrayWrapper from '../models/GroupSummaryArrayWrapper';
import GroupWrapper from '../models/GroupWrapper';
import MembersRequest from '../models/MembersRequest';
import NoContentResultWrapper from '../models/NoContentResultWrapper';
import SetManagerRequest from '../models/SetManagerRequest';
import SortOrder from '../models/SortOrder';
import UpdateGroupRequest from '../models/UpdateGroupRequest';

/**
* Group service.
* @module api/GroupApi
* @version 3.2.0
*/
export default class GroupApi {

    /**
    * Constructs a new GroupApi. 
    * @alias module:api/GroupApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addGroup operation.
     * @callback module:api/GroupApi~addGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:models/GroupWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new group
     * Adds a new group with the group manager, name, and members specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/GroupRequestDto} [groupRequestDto] 
     * @param {module:api/GroupApi~addGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/GroupWrapper}
     */
    addGroup(opts, callback) {
      opts = opts || {};
      let postBody = opts['groupRequestDto'];

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
      let returnType = GroupWrapper;
      return this.apiClient.callApi(
        '/api/2.0/group', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addMembersTo operation.
     * @callback module:api/GroupApi~addMembersToCallback
     * @param {String} error Error message, if any.
     * @param {module:models/GroupWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add group members
     * Adds new group members to the group with the ID specified in the request.
     * @param {String} id The group ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/MembersRequest} [membersRequest] The member request.
     * @param {module:api/GroupApi~addMembersToCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/GroupWrapper}
     */
    addMembersTo(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['membersRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addMembersTo");
      }

      let pathParams = {
        'id': id
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
      let returnType = GroupWrapper;
      return this.apiClient.callApi(
        '/api/2.0/group/{id}/members', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGroup operation.
     * @callback module:api/GroupApi~deleteGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:models/NoContentResultWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a group
     * Deletes a group with the ID specified in the request from the list of groups on the portal.
     * @param {String} id The group ID.
     * @param {module:api/GroupApi~deleteGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/NoContentResultWrapper}
     */
    deleteGroup(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteGroup");
      }

      let pathParams = {
        'id': id
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
      let returnType = NoContentResultWrapper;
      return this.apiClient.callApi(
        '/api/2.0/group/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getGroup operation.
     * @callback module:api/GroupApi~getGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:models/GroupWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a group
     * Returns the detailed information about the selected group.   **Note**: This method returns full group information.
     * @param {String} id The group ID.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [includeMembers] Specifies whether to include the group members or not.
     * @param {module:api/GroupApi~getGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/GroupWrapper}
     */
    getGroup(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getGroup");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'includeMembers': opts['includeMembers']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GroupWrapper;
      return this.apiClient.callApi(
        '/api/2.0/group/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getGroupByUserId operation.
     * @callback module:api/GroupApi~getGroupByUserIdCallback
     * @param {String} error Error message, if any.
     * @param {module:models/GroupSummaryArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user groups
     * Returns a list of groups for the user with the ID specified in the request.
     * @param {String} userid The user ID.
     * @param {module:api/GroupApi~getGroupByUserIdCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/GroupSummaryArrayWrapper}
     */
    getGroupByUserId(userid, callback) {
      let postBody = null;
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling getGroupByUserId");
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
      let returnType = GroupSummaryArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/group/user/{userid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getGroups operation.
     * @callback module:api/GroupApi~getGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/GroupArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get groups
     * Returns the general information about all the groups, such as group ID and group manager.   **Note**: This method returns partial group information.
     * @param {Object} opts Optional parameters
     * @param {String} [userId] The user ID.
     * @param {Boolean} [manager] Specifies if the user is a manager or not.
     * @param {Number} [count] The number of records to retrieve.
     * @param {Number} [startIndex] The starting index for paginated results.
     * @param {String} [sortBy] Specifies the property used to sort the query results.
     * @param {module:models/SortOrder} [sortOrder] The order in which the results are sorted.
     * @param {String} [filterValue] The text used for filtering or searching group data.
     * @param {} [fields] Comma-separated list of fields to include in the response
     * @param {module:api/GroupApi~getGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/GroupArrayWrapper}
     */
    getGroups(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'userId': opts['userId'],
        'manager': opts['manager'],
        'count': opts['count'],
        'startIndex': opts['startIndex'],
        'sortBy': opts['sortBy'],
        'sortOrder': opts['sortOrder'],
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
      let returnType = GroupArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/group', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the moveMembersTo operation.
     * @callback module:api/GroupApi~moveMembersToCallback
     * @param {String} error Error message, if any.
     * @param {module:models/GroupWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Move group members
     * Moves all the members from the selected group to another one specified in the request.
     * @param {String} fromId The group ID to move from.
     * @param {String} toId The group ID to move to.
     * @param {module:api/GroupApi~moveMembersToCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/GroupWrapper}
     */
    moveMembersTo(fromId, toId, callback) {
      let postBody = null;
      // verify the required parameter 'fromId' is set
      if (fromId === undefined || fromId === null) {
        throw new Error("Missing the required parameter 'fromId' when calling moveMembersTo");
      }
      // verify the required parameter 'toId' is set
      if (toId === undefined || toId === null) {
        throw new Error("Missing the required parameter 'toId' when calling moveMembersTo");
      }

      let pathParams = {
        'fromId': fromId,
        'toId': toId
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
      let returnType = GroupWrapper;
      return this.apiClient.callApi(
        '/api/2.0/group/{fromId}/members/{toId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeMembersFrom operation.
     * @callback module:api/GroupApi~removeMembersFromCallback
     * @param {String} error Error message, if any.
     * @param {module:models/GroupWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove group members
     * Removes the group members specified in the request from the selected group.
     * @param {String} id The group ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/MembersRequest} [membersRequest] The member request.
     * @param {module:api/GroupApi~removeMembersFromCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/GroupWrapper}
     */
    removeMembersFrom(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['membersRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling removeMembersFrom");
      }

      let pathParams = {
        'id': id
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
      let returnType = GroupWrapper;
      return this.apiClient.callApi(
        '/api/2.0/group/{id}/members', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setGroupManager operation.
     * @callback module:api/GroupApi~setGroupManagerCallback
     * @param {String} error Error message, if any.
     * @param {module:models/GroupWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set a group manager
     * Sets a user with the ID specified in the request as a group manager.
     * @param {String} id The group ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/SetManagerRequest} [setManagerRequest] The request for setting a group manager.
     * @param {module:api/GroupApi~setGroupManagerCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/GroupWrapper}
     */
    setGroupManager(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['setManagerRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setGroupManager");
      }

      let pathParams = {
        'id': id
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
      let returnType = GroupWrapper;
      return this.apiClient.callApi(
        '/api/2.0/group/{id}/manager', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setMembersTo operation.
     * @callback module:api/GroupApi~setMembersToCallback
     * @param {String} error Error message, if any.
     * @param {module:models/GroupWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replace group members
     * Replaces the group members with those specified in the request.
     * @param {String} id The group ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/MembersRequest} [membersRequest] The member request.
     * @param {module:api/GroupApi~setMembersToCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/GroupWrapper}
     */
    setMembersTo(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['membersRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setMembersTo");
      }

      let pathParams = {
        'id': id
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
      let returnType = GroupWrapper;
      return this.apiClient.callApi(
        '/api/2.0/group/{id}/members', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGroup operation.
     * @callback module:api/GroupApi~updateGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:models/GroupWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a group
     * Updates the existing group changing the group manager, name, and/or members.
     * @param {String} id The group ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateGroupRequest} [updateGroupRequest] The request for updating a group.
     * @param {module:api/GroupApi~updateGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/GroupWrapper}
     */
    updateGroup(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['updateGroupRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateGroup");
      }

      let pathParams = {
        'id': id
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
      let returnType = GroupWrapper;
      return this.apiClient.callApi(
        '/api/2.0/group/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
