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
import FolderIntegerArrayWrapper from '../models/FolderIntegerArrayWrapper';
import UpdateRoomsQuotaRequestDtoInteger from '../models/UpdateRoomsQuotaRequestDtoInteger';
import UpdateRoomsRoomIdsRequestDtoInteger from '../models/UpdateRoomsRoomIdsRequestDtoInteger';

/**
* FilesQuota service.
* @module api/FilesQuotaApi
* @version 3.2.0
*/
export default class FilesQuotaApi {

    /**
    * Constructs a new FilesQuotaApi. 
    * @alias module:api/FilesQuotaApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the resetRoomQuota operation.
     * @callback module:api/FilesQuotaApi~resetRoomQuotaCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderIntegerArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset the room quota limit
     * Resets the quota limit for the rooms with the IDs specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateRoomsRoomIdsRequestDtoInteger} [updateRoomsRoomIdsRequestDtoInteger] 
     * @param {module:api/FilesQuotaApi~resetRoomQuotaCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderIntegerArrayWrapper}
     */
    resetRoomQuota(opts, callback) {
      opts = opts || {};
      let postBody = opts['updateRoomsRoomIdsRequestDtoInteger'];

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
      let returnType = FolderIntegerArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/resetquota', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateRoomsQuota operation.
     * @callback module:api/FilesQuotaApi~updateRoomsQuotaCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderIntegerArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change the room quota limit
     * Changes the quota limit for the rooms with the IDs specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateRoomsQuotaRequestDtoInteger} [updateRoomsQuotaRequestDtoInteger] 
     * @param {module:api/FilesQuotaApi~updateRoomsQuotaCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderIntegerArrayWrapper}
     */
    updateRoomsQuota(opts, callback) {
      opts = opts || {};
      let postBody = opts['updateRoomsQuotaRequestDtoInteger'];

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
      let returnType = FolderIntegerArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/roomquota', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
