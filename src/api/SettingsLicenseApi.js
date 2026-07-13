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
import StringWrapper from '../models/StringWrapper';

/**
* SettingsLicense service.
* @module api/SettingsLicenseApi
* @version 3.2.0
*/
export default class SettingsLicenseApi {

    /**
    * Constructs a new SettingsLicenseApi. 
    * @alias module:api/SettingsLicenseApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the acceptLicense operation.
     * @callback module:api/SettingsLicenseApi~acceptLicenseCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Activate a license
     * Activates a license for the portal.
     * @param {module:api/SettingsLicenseApi~acceptLicenseCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    acceptLicense(callback) {
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
        '/api/2.0/settings/license/accept', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getIsLicenseRequired operation.
     * @callback module:api/SettingsLicenseApi~getIsLicenseRequiredCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request a license
     * Requests a portal license if necessary.
     * @param {module:api/SettingsLicenseApi~getIsLicenseRequiredCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    getIsLicenseRequired(callback) {
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
      let returnType = BooleanWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/license/required', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the refreshLicense operation.
     * @callback module:api/SettingsLicenseApi~refreshLicenseCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Refresh the license
     * Refreshes the portal license.
     * @param {module:api/SettingsLicenseApi~refreshLicenseCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    refreshLicense(callback) {
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
        '/api/2.0/settings/license/refresh', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadLicense operation.
     * @callback module:api/SettingsLicenseApi~uploadLicenseCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload a license
     * Uploads a portal license specified in the request.
     * @param {Array.<File>} files The list of license files to be uploaded.
     * @param {module:api/SettingsLicenseApi~uploadLicenseCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    uploadLicense(files, callback) {
      let postBody = null;
      // verify the required parameter 'files' is set
      if (files === undefined || files === null) {
        throw new Error("Missing the required parameter 'files' when calling uploadLicense");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'Files': this.apiClient.buildCollectionParam(files, 'passthrough')
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = StringWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/license', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
