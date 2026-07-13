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

/**
* GroupRooms service.
* @module api/GroupRoomsApi
* @version 3.2.0
*/
export default class GroupRoomsApi {

    /**
    * Constructs a new GroupRoomsApi. 
    * @alias module:api/GroupRoomsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getGroupsWithShared operation.
     * @callback module:api/GroupRoomsApi~getGroupsWithSharedCallback
     * @param {String} error Error message, if any.
     * @param {module:models/GroupArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get groups with sharing settings
     * Returns groups with their sharing settings.
     * @param {Number} id The group ID.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [excludeShared] Specifies whether to exclude the group sharing settings from the response.
     * @param {Number} [count] The number of groups to retrieve in the request.
     * @param {Number} [startIndex] The starting index from which to begin retrieving groups with their sharing settings.
     * @param {String} [filterValue] The text used as a filter for retrieving groups with their sharing settings.
     * @param {module:api/GroupRoomsApi~getGroupsWithSharedCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/GroupArrayWrapper}
     */
    getGroupsWithShared(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getGroupsWithShared");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'excludeShared': opts['excludeShared'],
        'count': opts['count'],
        'startIndex': opts['startIndex'],
        'filterValue': opts['filterValue']
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
        '/api/2.0/group/room/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
