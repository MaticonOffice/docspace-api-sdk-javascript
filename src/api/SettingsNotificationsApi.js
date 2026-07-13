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
import NotificationSettingsRequestsDto from '../models/NotificationSettingsRequestsDto';
import NotificationSettingsWrapper from '../models/NotificationSettingsWrapper';
import NotificationType from '../models/NotificationType';
import RoomsNotificationSettingsWrapper from '../models/RoomsNotificationSettingsWrapper';
import RoomsNotificationsSettingsRequestDto from '../models/RoomsNotificationsSettingsRequestDto';

/**
* SettingsNotifications service.
* @module api/SettingsNotificationsApi
* @version 3.2.0
*/
export default class SettingsNotificationsApi {

    /**
    * Constructs a new SettingsNotificationsApi. 
    * @alias module:api/SettingsNotificationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getNotificationSettings operation.
     * @callback module:api/SettingsNotificationsApi~getNotificationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/NotificationSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check notification availability
     * Checks if the notification type specified in the request is enabled or not.
     * @param {module:models/NotificationType} type The type of notification to query, specified in the route.
     * @param {module:api/SettingsNotificationsApi~getNotificationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/NotificationSettingsWrapper}
     */
    getNotificationSettings(type, callback) {
      let postBody = null;
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getNotificationSettings");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NotificationSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/notification/{type}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRoomsNotificationSettings operation.
     * @callback module:api/SettingsNotificationsApi~getRoomsNotificationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/RoomsNotificationSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get room notification settings
     * Returns a list of rooms with the disabled notifications.
     * @param {module:api/SettingsNotificationsApi~getRoomsNotificationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/RoomsNotificationSettingsWrapper}
     */
    getRoomsNotificationSettings(callback) {
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
      let returnType = RoomsNotificationSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/notification/rooms', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setNotificationSettings operation.
     * @callback module:api/SettingsNotificationsApi~setNotificationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/NotificationSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable notifications
     * Enables the notification type specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/NotificationSettingsRequestsDto} [notificationSettingsRequestsDto] 
     * @param {module:api/SettingsNotificationsApi~setNotificationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/NotificationSettingsWrapper}
     */
    setNotificationSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['notificationSettingsRequestsDto'];

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
      let returnType = NotificationSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/notification', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setRoomsNotificationStatus operation.
     * @callback module:api/SettingsNotificationsApi~setRoomsNotificationStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:models/RoomsNotificationSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set room notification status
     * Sets a notification status for a room with the ID specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/RoomsNotificationsSettingsRequestDto} [roomsNotificationsSettingsRequestDto] 
     * @param {module:api/SettingsNotificationsApi~setRoomsNotificationStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/RoomsNotificationSettingsWrapper}
     */
    setRoomsNotificationStatus(opts, callback) {
      opts = opts || {};
      let postBody = opts['roomsNotificationsSettingsRequestDto'];

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
      let returnType = RoomsNotificationSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/notification/rooms', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
