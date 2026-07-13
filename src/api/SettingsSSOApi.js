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
import ObjectWrapper from '../models/ObjectWrapper';
import SsoSettingsRequestsDto from '../models/SsoSettingsRequestsDto';
import SsoSettingsV2Wrapper from '../models/SsoSettingsV2Wrapper';

/**
* SettingsSSO service.
* @module api/SettingsSSOApi
* @version 3.2.0
*/
export default class SettingsSSOApi {

    /**
    * Constructs a new SettingsSSOApi. 
    * @alias module:api/SettingsSSOApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getDefaultSsoSettingsV2 operation.
     * @callback module:api/SettingsSSOApi~getDefaultSsoSettingsV2Callback
     * @param {String} error Error message, if any.
     * @param {module:models/SsoSettingsV2Wrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the default SSO settings
     * Returns the default portal SSO settings.
     * @param {module:api/SettingsSSOApi~getDefaultSsoSettingsV2Callback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/SsoSettingsV2Wrapper}
     */
    getDefaultSsoSettingsV2(callback) {
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
      let returnType = SsoSettingsV2Wrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/ssov2/default', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSsoSettingsV2 operation.
     * @callback module:api/SettingsSSOApi~getSsoSettingsV2Callback
     * @param {String} error Error message, if any.
     * @param {module:models/SsoSettingsV2Wrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the SSO settings
     * Returns the current portal SSO settings.
     * @param {module:api/SettingsSSOApi~getSsoSettingsV2Callback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/SsoSettingsV2Wrapper}
     */
    getSsoSettingsV2(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SsoSettingsV2Wrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/ssov2', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSsoSettingsV2Constants operation.
     * @callback module:api/SettingsSSOApi~getSsoSettingsV2ConstantsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ObjectWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the SSO settings constants
     * Returns the SSO settings constants.
     * @param {module:api/SettingsSSOApi~getSsoSettingsV2ConstantsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ObjectWrapper}
     */
    getSsoSettingsV2Constants(callback) {
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
        '/api/2.0/settings/ssov2/constants', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the resetSsoSettingsV2 operation.
     * @callback module:api/SettingsSSOApi~resetSsoSettingsV2Callback
     * @param {String} error Error message, if any.
     * @param {module:models/SsoSettingsV2Wrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset the SSO settings
     * Resets the SSO settings of the current portal.
     * @param {module:api/SettingsSSOApi~resetSsoSettingsV2Callback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/SsoSettingsV2Wrapper}
     */
    resetSsoSettingsV2(callback) {
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
      let returnType = SsoSettingsV2Wrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/ssov2', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveSsoSettingsV2 operation.
     * @callback module:api/SettingsSSOApi~saveSsoSettingsV2Callback
     * @param {String} error Error message, if any.
     * @param {module:models/SsoSettingsV2Wrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save the SSO settings
     * Saves the SSO settings for the current portal.
     * @param {Object} opts Optional parameters
     * @param {module:models/SsoSettingsRequestsDto} [ssoSettingsRequestsDto] 
     * @param {module:api/SettingsSSOApi~saveSsoSettingsV2Callback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/SsoSettingsV2Wrapper}
     */
    saveSsoSettingsV2(opts, callback) {
      opts = opts || {};
      let postBody = opts['ssoSettingsRequestsDto'];

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
      let returnType = SsoSettingsV2Wrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/ssov2', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
