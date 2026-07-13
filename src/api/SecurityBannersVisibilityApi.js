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
import TenantBannerSettingsDto from '../models/TenantBannerSettingsDto';
import TenantBannerSettingsWrapper from '../models/TenantBannerSettingsWrapper';

/**
* SecurityBannersVisibility service.
* @module api/SecurityBannersVisibilityApi
* @version 3.2.0
*/
export default class SecurityBannersVisibilityApi {

    /**
    * Constructs a new SecurityBannersVisibilityApi. 
    * @alias module:api/SecurityBannersVisibilityApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the setTenantBannerSettings operation.
     * @callback module:api/SecurityBannersVisibilityApi~setTenantBannerSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TenantBannerSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the promotional banners visibility settings
     * Sets the promotional banners visibility settings settings for the portal.
     * @param {Object} opts Optional parameters
     * @param {module:models/TenantBannerSettingsDto} [tenantBannerSettingsDto] 
     * @param {module:api/SecurityBannersVisibilityApi~setTenantBannerSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TenantBannerSettingsWrapper}
     */
    setTenantBannerSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['tenantBannerSettingsDto'];

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
      let returnType = TenantBannerSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/banner', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
