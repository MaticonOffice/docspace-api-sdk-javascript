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
import WebPluginArrayWrapper from '../models/WebPluginArrayWrapper';
import WebPluginRequests from '../models/WebPluginRequests';
import WebPluginWrapper from '../models/WebPluginWrapper';

/**
* SettingsWebplugins service.
* @module api/SettingsWebpluginsApi
* @version 3.2.0
*/
export default class SettingsWebpluginsApi {

    /**
    * Constructs a new SettingsWebpluginsApi. 
    * @alias module:api/SettingsWebpluginsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addWebPluginFromFile operation.
     * @callback module:api/SettingsWebpluginsApi~addWebPluginFromFileCallback
     * @param {String} error Error message, if any.
     * @param {module:models/WebPluginWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a web plugin
     * Adds a web plugin from a file to the current portal.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [system] Specifies whether to load the system plugins or not.
     * @param {module:api/SettingsWebpluginsApi~addWebPluginFromFileCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/WebPluginWrapper}
     */
    addWebPluginFromFile(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'system': opts['system']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = WebPluginWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/webplugins', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWebPlugin operation.
     * @callback module:api/SettingsWebpluginsApi~deleteWebPluginCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a web plugin
     * Deletes a web plugin by the name specified in the request.
     * @param {String} name The web plugin name.
     * @param {module:api/SettingsWebpluginsApi~deleteWebPluginCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteWebPlugin(name, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling deleteWebPlugin");
      }

      let pathParams = {
        'name': name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/2.0/settings/webplugins/{name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebPlugin operation.
     * @callback module:api/SettingsWebpluginsApi~getWebPluginCallback
     * @param {String} error Error message, if any.
     * @param {module:models/WebPluginWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a web plugin by name
     * Returns a web plugin by the name specified in the request.
     * @param {String} name The web plugin name.
     * @param {module:api/SettingsWebpluginsApi~getWebPluginCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/WebPluginWrapper}
     */
    getWebPlugin(name, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getWebPlugin");
      }

      let pathParams = {
        'name': name
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
      let returnType = WebPluginWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/webplugins/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebPlugins operation.
     * @callback module:api/SettingsWebpluginsApi~getWebPluginsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/WebPluginArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get web plugins
     * Returns the portal web plugins.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [enabled] The optional filter for the plugin enabled state.
     * @param {module:api/SettingsWebpluginsApi~getWebPluginsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/WebPluginArrayWrapper}
     */
    getWebPlugins(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'enabled': opts['enabled']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = WebPluginArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/webplugins', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWebPlugin operation.
     * @callback module:api/SettingsWebpluginsApi~updateWebPluginCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a web plugin
     * Updates a web plugin with the parameters specified in the request.
     * @param {String} name The web plugin name.
     * @param {Object} opts Optional parameters
     * @param {module:models/WebPluginRequests} [webPluginRequests] The configuration settings for the web plugin instance.
     * @param {module:api/SettingsWebpluginsApi~updateWebPluginCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateWebPlugin(name, opts, callback) {
      opts = opts || {};
      let postBody = opts['webPluginRequests'];
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling updateWebPlugin");
      }

      let pathParams = {
        'name': name
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
        '/api/2.0/settings/webplugins/{name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
