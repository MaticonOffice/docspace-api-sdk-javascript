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
import OwnerChangeInstructionsWrapper from '../models/OwnerChangeInstructionsWrapper';
import OwnerIdSettingsRequestDto from '../models/OwnerIdSettingsRequestDto';

/**
* SettingsOwner service.
* @module api/SettingsOwnerApi
* @version 3.2.0
*/
export default class SettingsOwnerApi {

    /**
    * Constructs a new SettingsOwnerApi. 
    * @alias module:api/SettingsOwnerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the sendOwnerChangeInstructions operation.
     * @callback module:api/SettingsOwnerApi~sendOwnerChangeInstructionsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/OwnerChangeInstructionsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send the owner change instructions
     * Sends the instructions to change the DocSpace owner.
     * @param {Object} opts Optional parameters
     * @param {module:models/OwnerIdSettingsRequestDto} [ownerIdSettingsRequestDto] 
     * @param {module:api/SettingsOwnerApi~sendOwnerChangeInstructionsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/OwnerChangeInstructionsWrapper}
     */
    sendOwnerChangeInstructions(opts, callback) {
      opts = opts || {};
      let postBody = opts['ownerIdSettingsRequestDto'];

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
      let returnType = OwnerChangeInstructionsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/owner', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePortalOwner operation.
     * @callback module:api/SettingsOwnerApi~updatePortalOwnerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the portal owner
     * Updates the current portal owner with a new one specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/OwnerIdSettingsRequestDto} [ownerIdSettingsRequestDto] 
     * @param {module:api/SettingsOwnerApi~updatePortalOwnerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updatePortalOwner(opts, callback) {
      opts = opts || {};
      let postBody = opts['ownerIdSettingsRequestDto'];

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
        '/api/2.0/settings/owner', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
