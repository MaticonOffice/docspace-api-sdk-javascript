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
import IPRestrictionArrayWrapper from '../models/IPRestrictionArrayWrapper';
import IPRestrictionsSettingsWrapper from '../models/IPRestrictionsSettingsWrapper';
import IpRestrictionsDto from '../models/IpRestrictionsDto';
import IpRestrictionsWrapper from '../models/IpRestrictionsWrapper';

/**
* SettingsIPRestrictions service.
* @module api/SettingsIPRestrictionsApi
* @version 3.2.0
*/
export default class SettingsIPRestrictionsApi {

    /**
    * Constructs a new SettingsIPRestrictionsApi. 
    * @alias module:api/SettingsIPRestrictionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getIpRestrictions operation.
     * @callback module:api/SettingsIPRestrictionsApi~getIpRestrictionsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/IPRestrictionArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the IP portal restrictions
     * Returns the IP portal restrictions.
     * @param {module:api/SettingsIPRestrictionsApi~getIpRestrictionsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/IPRestrictionArrayWrapper}
     */
    getIpRestrictions(callback) {
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
      let returnType = IPRestrictionArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/iprestrictions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the readIpRestrictionsSettings operation.
     * @callback module:api/SettingsIPRestrictionsApi~readIpRestrictionsSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/IPRestrictionsSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the IP restriction settings
     * Returns the IP restriction settings.
     * @param {module:api/SettingsIPRestrictionsApi~readIpRestrictionsSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/IPRestrictionsSettingsWrapper}
     */
    readIpRestrictionsSettings(callback) {
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
      let returnType = IPRestrictionsSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/iprestrictions/settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveIpRestrictions operation.
     * @callback module:api/SettingsIPRestrictionsApi~saveIpRestrictionsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/IpRestrictionsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the IP restrictions
     * Updates the IP restrictions with the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/IpRestrictionsDto} [ipRestrictionsDto] 
     * @param {module:api/SettingsIPRestrictionsApi~saveIpRestrictionsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/IpRestrictionsWrapper}
     */
    saveIpRestrictions(opts, callback) {
      opts = opts || {};
      let postBody = opts['ipRestrictionsDto'];

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
      let returnType = IpRestrictionsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/iprestrictions', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateIpRestrictionsSettings operation.
     * @callback module:api/SettingsIPRestrictionsApi~updateIpRestrictionsSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/IpRestrictionsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the IP restriction settings
     * Updates the IP restriction settings with the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/IpRestrictionsDto} [ipRestrictionsDto] 
     * @param {module:api/SettingsIPRestrictionsApi~updateIpRestrictionsSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/IpRestrictionsWrapper}
     */
    updateIpRestrictionsSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['ipRestrictionsDto'];

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
      let returnType = IpRestrictionsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/iprestrictions/settings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
