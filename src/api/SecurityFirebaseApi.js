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
import FireBaseUserWrapper from '../models/FireBaseUserWrapper';
import FirebaseRequestsDto from '../models/FirebaseRequestsDto';

/**
* SecurityFirebase service.
* @module api/SecurityFirebaseApi
* @version 3.2.0
*/
export default class SecurityFirebaseApi {

    /**
    * Constructs a new SecurityFirebaseApi. 
    * @alias module:api/SecurityFirebaseApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the docRegisterPusnNotificationDevice operation.
     * @callback module:api/SecurityFirebaseApi~docRegisterPusnNotificationDeviceCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FireBaseUserWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save the Documents Firebase device token
     * Saves the Firebase device token specified in the request for the Documents application.
     * @param {Object} opts Optional parameters
     * @param {module:models/FirebaseRequestsDto} [firebaseRequestsDto] 
     * @param {module:api/SecurityFirebaseApi~docRegisterPusnNotificationDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FireBaseUserWrapper}
     */
    docRegisterPusnNotificationDevice(opts, callback) {
      opts = opts || {};
      let postBody = opts['firebaseRequestsDto'];

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
      let returnType = FireBaseUserWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/push/docregisterdevice', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the subscribeDocumentsPushNotification operation.
     * @callback module:api/SecurityFirebaseApi~subscribeDocumentsPushNotificationCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FireBaseUserWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Subscribe to Documents push notification
     * Subscribes to the Documents push notification.
     * @param {Object} opts Optional parameters
     * @param {module:models/FirebaseRequestsDto} [firebaseRequestsDto] 
     * @param {module:api/SecurityFirebaseApi~subscribeDocumentsPushNotificationCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FireBaseUserWrapper}
     */
    subscribeDocumentsPushNotification(opts, callback) {
      opts = opts || {};
      let postBody = opts['firebaseRequestsDto'];

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
      let returnType = FireBaseUserWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/push/docsubscribe', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
