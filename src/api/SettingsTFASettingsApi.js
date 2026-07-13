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
import ObjectArrayWrapper from '../models/ObjectArrayWrapper';
import SetupCodeWrapper from '../models/SetupCodeWrapper';
import StringWrapper from '../models/StringWrapper';
import TfaRequestsDto from '../models/TfaRequestsDto';
import TfaSettingsArrayWrapper from '../models/TfaSettingsArrayWrapper';
import TfaValidateRequestsDto from '../models/TfaValidateRequestsDto';

/**
* SettingsTFASettings service.
* @module api/SettingsTFASettingsApi
* @version 3.2.0
*/
export default class SettingsTFASettingsApi {

    /**
    * Constructs a new SettingsTFASettingsApi. 
    * @alias module:api/SettingsTFASettingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getTfaAppCodes operation.
     * @callback module:api/SettingsTFASettingsApi~getTfaAppCodesCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ObjectArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the TFA codes
     * Returns the two-factor authentication application codes.
     * @param {module:api/SettingsTFASettingsApi~getTfaAppCodesCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ObjectArrayWrapper}
     */
    getTfaAppCodes(callback) {
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
      let returnType = ObjectArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/tfaappcodes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTfaConfirmUrl operation.
     * @callback module:api/SettingsTFASettingsApi~getTfaConfirmUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get confirmation email
     * Returns the confirmation email URL for authorization via SMS or TFA application.
     * @param {module:api/SettingsTFASettingsApi~getTfaConfirmUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    getTfaConfirmUrl(callback) {
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
        '/api/2.0/settings/tfaapp/confirm', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTfaSettings operation.
     * @callback module:api/SettingsTFASettingsApi~getTfaSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TfaSettingsArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the TFA settings
     * Returns the current two-factor authentication settings.
     * @param {module:api/SettingsTFASettingsApi~getTfaSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TfaSettingsArrayWrapper}
     */
    getTfaSettings(callback) {
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
      let returnType = TfaSettingsArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/tfaapp', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the tfaAppGenerateSetupCode operation.
     * @callback module:api/SettingsTFASettingsApi~tfaAppGenerateSetupCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:models/SetupCodeWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate setup code
     * Generates the setup TFA code for the current user.
     * @param {module:api/SettingsTFASettingsApi~tfaAppGenerateSetupCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/SetupCodeWrapper}
     */
    tfaAppGenerateSetupCode(callback) {
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
      let returnType = SetupCodeWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/tfaapp/setup', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the tfaValidateAuthCode operation.
     * @callback module:api/SettingsTFASettingsApi~tfaValidateAuthCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate the TFA code
     * Validates the two-factor authentication code specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/TfaValidateRequestsDto} [tfaValidateRequestsDto] 
     * @param {module:api/SettingsTFASettingsApi~tfaValidateAuthCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    tfaValidateAuthCode(opts, callback) {
      opts = opts || {};
      let postBody = opts['tfaValidateRequestsDto'];

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
      let returnType = BooleanWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/tfaapp/validate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unlinkTfaApp operation.
     * @callback module:api/SettingsTFASettingsApi~unlinkTfaAppCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unlink the TFA application
     * Unlinks the current two-factor authentication application from the user account specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/TfaRequestsDto} [tfaRequestsDto] 
     * @param {module:api/SettingsTFASettingsApi~unlinkTfaAppCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    unlinkTfaApp(opts, callback) {
      opts = opts || {};
      let postBody = opts['tfaRequestsDto'];

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
        '/api/2.0/settings/tfaappnewapp', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTfaAppCodes operation.
     * @callback module:api/SettingsTFASettingsApi~updateTfaAppCodesCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ObjectArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the TFA codes
     * Requests the new backup codes for the two-factor authentication application.
     * @param {module:api/SettingsTFASettingsApi~updateTfaAppCodesCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ObjectArrayWrapper}
     */
    updateTfaAppCodes(callback) {
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
      let returnType = ObjectArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/tfaappnewcodes', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTfaSettings operation.
     * @callback module:api/SettingsTFASettingsApi~updateTfaSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the TFA settings
     * Updates the two-factor authentication settings with the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/TfaRequestsDto} [tfaRequestsDto] 
     * @param {module:api/SettingsTFASettingsApi~updateTfaSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    updateTfaSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['tfaRequestsDto'];

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
      let returnType = BooleanWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/tfaapp', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTfaSettingsLink operation.
     * @callback module:api/SettingsTFASettingsApi~updateTfaSettingsLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a confirmation email for updating TFA settings
     * Returns the confirmation email URL for updating TFA settings.
     * @param {Object} opts Optional parameters
     * @param {module:models/TfaRequestsDto} [tfaRequestsDto] 
     * @param {module:api/SettingsTFASettingsApi~updateTfaSettingsLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    updateTfaSettingsLink(opts, callback) {
      opts = opts || {};
      let postBody = opts['tfaRequestsDto'];

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
        '/api/2.0/settings/tfaappwithlink', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
