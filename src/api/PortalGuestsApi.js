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
import StringWrapper from '../models/StringWrapper';

/**
* PortalGuests service.
* @module api/PortalGuestsApi
* @version 3.2.0
*/
export default class PortalGuestsApi {

    /**
    * Constructs a new PortalGuestsApi. 
    * @alias module:api/PortalGuestsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getGuestSharingLink operation.
     * @callback module:api/PortalGuestsApi~getGuestSharingLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a guest sharing link
     * Returns a link to share a guest with another user.
     * @param {String} userid The user ID.
     * @param {module:api/PortalGuestsApi~getGuestSharingLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    getGuestSharingLink(userid, callback) {
      let postBody = null;
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling getGuestSharingLink");
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
      let returnType = StringWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/guests/{userid}/share', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
