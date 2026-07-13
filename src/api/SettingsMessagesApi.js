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
import AdminMessageBaseSettingsRequestsDto from '../models/AdminMessageBaseSettingsRequestsDto';
import AdminMessageSettingsRequestsDto from '../models/AdminMessageSettingsRequestsDto';
import StringWrapper from '../models/StringWrapper';
import TurnOnAdminMessageSettingsRequestDto from '../models/TurnOnAdminMessageSettingsRequestDto';

/**
* SettingsMessages service.
* @module api/SettingsMessagesApi
* @version 3.2.0
*/
export default class SettingsMessagesApi {

    /**
    * Constructs a new SettingsMessagesApi. 
    * @alias module:api/SettingsMessagesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the enableAdminMessageSettings operation.
     * @callback module:api/SettingsMessagesApi~enableAdminMessageSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable the administrator message settings
     * Displays the contact form on the \"Sign In\" page, allowing users to send a message to the DocSpace administrator in case they encounter any issues while accessing DocSpace.
     * @param {Object} opts Optional parameters
     * @param {module:models/TurnOnAdminMessageSettingsRequestDto} [turnOnAdminMessageSettingsRequestDto] 
     * @param {module:api/SettingsMessagesApi~enableAdminMessageSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    enableAdminMessageSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['turnOnAdminMessageSettingsRequestDto'];

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
        '/api/2.0/settings/messagesettings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sendAdminMail operation.
     * @callback module:api/SettingsMessagesApi~sendAdminMailCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send a message to the administrator
     * Sends a message to the administrator email when unauthorized users encounter issues accessing DocSpace.
     * @param {Object} opts Optional parameters
     * @param {module:models/AdminMessageSettingsRequestsDto} [adminMessageSettingsRequestsDto] 
     * @param {module:api/SettingsMessagesApi~sendAdminMailCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    sendAdminMail(opts, callback) {
      opts = opts || {};
      let postBody = opts['adminMessageSettingsRequestsDto'];

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
        '/api/2.0/settings/sendadmmail', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sendJoinInviteMail operation.
     * @callback module:api/SettingsMessagesApi~sendJoinInviteMailCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sends an invitation email
     * Sends an invitation email with a link to the DocSpace.
     * @param {Object} opts Optional parameters
     * @param {module:models/AdminMessageBaseSettingsRequestsDto} [adminMessageBaseSettingsRequestsDto] 
     * @param {module:api/SettingsMessagesApi~sendJoinInviteMailCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    sendJoinInviteMail(opts, callback) {
      opts = opts || {};
      let postBody = opts['adminMessageBaseSettingsRequestsDto'];

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
        '/api/2.0/settings/sendjoininvite', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
