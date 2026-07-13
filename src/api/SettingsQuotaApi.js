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
import QuotaSettingsRequestsDto from '../models/QuotaSettingsRequestsDto';
import TenantQuotaSettingsRequestsDto from '../models/TenantQuotaSettingsRequestsDto';
import TenantQuotaSettingsWrapper from '../models/TenantQuotaSettingsWrapper';
import TenantRoomQuotaSettingsWrapper from '../models/TenantRoomQuotaSettingsWrapper';
import TenantUserQuotaSettingsWrapper from '../models/TenantUserQuotaSettingsWrapper';

/**
* SettingsQuota service.
* @module api/SettingsQuotaApi
* @version 3.2.0
*/
export default class SettingsQuotaApi {

    /**
    * Constructs a new SettingsQuotaApi. 
    * @alias module:api/SettingsQuotaApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getUserQuotaSettings operation.
     * @callback module:api/SettingsQuotaApi~getUserQuotaSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TenantUserQuotaSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the user quota settings
     * Returns the user quota settings.
     * @param {module:api/SettingsQuotaApi~getUserQuotaSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TenantUserQuotaSettingsWrapper}
     */
    getUserQuotaSettings(callback) {
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
      let returnType = TenantUserQuotaSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/userquotasettings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveRoomQuotaSettings operation.
     * @callback module:api/SettingsQuotaApi~saveRoomQuotaSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TenantRoomQuotaSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save the room quota settings
     * Saves the room quota settings specified in the request to the current portal.
     * @param {Object} opts Optional parameters
     * @param {module:models/QuotaSettingsRequestsDto} [quotaSettingsRequestsDto] 
     * @param {module:api/SettingsQuotaApi~saveRoomQuotaSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TenantRoomQuotaSettingsWrapper}
     */
    saveRoomQuotaSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['quotaSettingsRequestsDto'];

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
      let returnType = TenantRoomQuotaSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/roomquotasettings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setTenantQuotaSettings operation.
     * @callback module:api/SettingsQuotaApi~setTenantQuotaSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TenantQuotaSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save the tenant quota settings
     * Saves the tenant quota settings specified in the request to the current portal.
     * @param {Object} opts Optional parameters
     * @param {module:models/TenantQuotaSettingsRequestsDto} [tenantQuotaSettingsRequestsDto] 
     * @param {module:api/SettingsQuotaApi~setTenantQuotaSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TenantQuotaSettingsWrapper}
     */
    setTenantQuotaSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['tenantQuotaSettingsRequestsDto'];

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
      let returnType = TenantQuotaSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/tenantquotasettings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
