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
import SmtpOperationStatusRequestsWrapper from '../models/SmtpOperationStatusRequestsWrapper';
import SmtpSettingsDto from '../models/SmtpSettingsDto';
import SmtpSettingsWrapper from '../models/SmtpSettingsWrapper';

/**
* SecuritySMTPSettings service.
* @module api/SecuritySMTPSettingsApi
* @version 3.2.0
*/
export default class SecuritySMTPSettingsApi {

    /**
    * Constructs a new SecuritySMTPSettingsApi. 
    * @alias module:api/SecuritySMTPSettingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getSmtpOperationStatus operation.
     * @callback module:api/SecuritySMTPSettingsApi~getSmtpOperationStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:models/SmtpOperationStatusRequestsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the SMTP testing process status
     * Returns the status of the SMTP testing process.
     * @param {module:api/SecuritySMTPSettingsApi~getSmtpOperationStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/SmtpOperationStatusRequestsWrapper}
     */
    getSmtpOperationStatus(callback) {
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
      let returnType = SmtpOperationStatusRequestsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/smtpsettings/smtp/test/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSmtpSettings operation.
     * @callback module:api/SecuritySMTPSettingsApi~getSmtpSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/SmtpSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the SMTP settings
     * Returns the current portal SMTP settings.
     * @param {module:api/SecuritySMTPSettingsApi~getSmtpSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/SmtpSettingsWrapper}
     */
    getSmtpSettings(callback) {
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
      let returnType = SmtpSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/smtpsettings/smtp', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the resetSmtpSettings operation.
     * @callback module:api/SecuritySMTPSettingsApi~resetSmtpSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/SmtpSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset the SMTP settings
     * Resets the SMTP settings of the current portal.
     * @param {module:api/SecuritySMTPSettingsApi~resetSmtpSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/SmtpSettingsWrapper}
     */
    resetSmtpSettings(callback) {
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
      let returnType = SmtpSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/smtpsettings/smtp', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveSmtpSettings operation.
     * @callback module:api/SecuritySMTPSettingsApi~saveSmtpSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/SmtpSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save the SMTP settings
     * Saves the SMTP settings for the current portal.
     * @param {Object} opts Optional parameters
     * @param {module:models/SmtpSettingsDto} [smtpSettingsDto] 
     * @param {module:api/SecuritySMTPSettingsApi~saveSmtpSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/SmtpSettingsWrapper}
     */
    saveSmtpSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['smtpSettingsDto'];

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
      let returnType = SmtpSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/smtpsettings/smtp', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the testSmtpSettings operation.
     * @callback module:api/SecuritySMTPSettingsApi~testSmtpSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/SmtpOperationStatusRequestsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Test the SMTP settings
     * Tests the SMTP settings for the current portal (sends test message to the user email).
     * @param {module:api/SecuritySMTPSettingsApi~testSmtpSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/SmtpOperationStatusRequestsWrapper}
     */
    testSmtpSettings(callback) {
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
      let returnType = SmtpOperationStatusRequestsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/smtpsettings/smtp/test', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
