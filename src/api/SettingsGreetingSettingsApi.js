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
import BooleanWrapper from '../models/BooleanWrapper';
import GreetingSettingsRequestsDto from '../models/GreetingSettingsRequestsDto';
import ObjectWrapper from '../models/ObjectWrapper';
import StringWrapper from '../models/StringWrapper';

/**
* SettingsGreetingSettings service.
* @module api/SettingsGreetingSettingsApi
* @version 3.2.0
*/
export default class SettingsGreetingSettingsApi {

    /**
    * Constructs a new SettingsGreetingSettingsApi. 
    * @alias module:api/SettingsGreetingSettingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getGreetingSettings operation.
     * @callback module:api/SettingsGreetingSettingsApi~getGreetingSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ObjectWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get greeting settings
     * Returns the greeting settings for the current portal.
     * @param {module:api/SettingsGreetingSettingsApi~getGreetingSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ObjectWrapper}
     */
    getGreetingSettings(callback) {
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
        '/api/2.0/settings/greetingsettings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getIsDefaultGreetingSettings operation.
     * @callback module:api/SettingsGreetingSettingsApi~getIsDefaultGreetingSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check the default greeting settings
     * Checks if the greeting settings of the current portal are set to default or not.
     * @param {module:api/SettingsGreetingSettingsApi~getIsDefaultGreetingSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    getIsDefaultGreetingSettings(callback) {
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
      let returnType = BooleanWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/greetingsettings/isdefault', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the restoreGreetingSettings operation.
     * @callback module:api/SettingsGreetingSettingsApi~restoreGreetingSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Restore the greeting settings
     * Restores the current portal greeting settings.
     * @param {module:api/SettingsGreetingSettingsApi~restoreGreetingSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    restoreGreetingSettings(callback) {
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
      let returnType = StringWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/greetingsettings/restore', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveGreetingSettings operation.
     * @callback module:api/SettingsGreetingSettingsApi~saveGreetingSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save the greeting settings
     * Saves the greeting settings specified in the request to the current portal.
     * @param {Object} opts Optional parameters
     * @param {module:models/GreetingSettingsRequestsDto} [greetingSettingsRequestsDto] 
     * @param {module:api/SettingsGreetingSettingsApi~saveGreetingSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    saveGreetingSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['greetingSettingsRequestsDto'];

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
        '/api/2.0/settings/greetingsettings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
