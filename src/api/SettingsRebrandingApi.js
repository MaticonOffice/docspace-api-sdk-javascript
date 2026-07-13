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
import AdditionalWhiteLabelSettingsWrapper from '../models/AdditionalWhiteLabelSettingsWrapper';
import BooleanWrapper from '../models/BooleanWrapper';
import CompanyWhiteLabelSettingsArrayWrapper from '../models/CompanyWhiteLabelSettingsArrayWrapper';
import CompanyWhiteLabelSettingsWrapper from '../models/CompanyWhiteLabelSettingsWrapper';
import IsDefaultWhiteLabelLogosArrayWrapper from '../models/IsDefaultWhiteLabelLogosArrayWrapper';
import IsDefaultWhiteLabelLogosWrapper from '../models/IsDefaultWhiteLabelLogosWrapper';
import StringWrapper from '../models/StringWrapper';
import WhiteLabelItemArrayWrapper from '../models/WhiteLabelItemArrayWrapper';
import WhiteLabelRequestsDto from '../models/WhiteLabelRequestsDto';

/**
* SettingsRebranding service.
* @module api/SettingsRebrandingApi
* @version 3.2.0
*/
export default class SettingsRebrandingApi {

    /**
    * Constructs a new SettingsRebrandingApi. 
    * @alias module:api/SettingsRebrandingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteAdditionalWhiteLabelSettings operation.
     * @callback module:api/SettingsRebrandingApi~deleteAdditionalWhiteLabelSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/AdditionalWhiteLabelSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the additional white label settings
     * Deletes the additional white label settings.
     * @param {module:api/SettingsRebrandingApi~deleteAdditionalWhiteLabelSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/AdditionalWhiteLabelSettingsWrapper}
     */
    deleteAdditionalWhiteLabelSettings(callback) {
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
      let returnType = AdditionalWhiteLabelSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/rebranding/additional', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCompanyWhiteLabelSettings operation.
     * @callback module:api/SettingsRebrandingApi~deleteCompanyWhiteLabelSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/CompanyWhiteLabelSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the company white label settings
     * Deletes the company white label settings.
     * @param {module:api/SettingsRebrandingApi~deleteCompanyWhiteLabelSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/CompanyWhiteLabelSettingsWrapper}
     */
    deleteCompanyWhiteLabelSettings(callback) {
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
      let returnType = CompanyWhiteLabelSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/rebranding/company', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAdditionalWhiteLabelSettings operation.
     * @callback module:api/SettingsRebrandingApi~getAdditionalWhiteLabelSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/AdditionalWhiteLabelSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the additional white label settings
     * Returns the additional white label settings.
     * @param {module:api/SettingsRebrandingApi~getAdditionalWhiteLabelSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/AdditionalWhiteLabelSettingsWrapper}
     */
    getAdditionalWhiteLabelSettings(callback) {
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
      let returnType = AdditionalWhiteLabelSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/rebranding/additional', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCompanyWhiteLabelSettings operation.
     * @callback module:api/SettingsRebrandingApi~getCompanyWhiteLabelSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/CompanyWhiteLabelSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the company white label settings
     * Returns the company white label settings.
     * @param {module:api/SettingsRebrandingApi~getCompanyWhiteLabelSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/CompanyWhiteLabelSettingsWrapper}
     */
    getCompanyWhiteLabelSettings(callback) {
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
      let returnType = CompanyWhiteLabelSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/rebranding/company', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnableWhitelabel operation.
     * @callback module:api/SettingsRebrandingApi~getEnableWhitelabelCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check the white label availability
     * Checks if the white label is enabled or not.
     * @param {module:api/SettingsRebrandingApi~getEnableWhitelabelCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    getEnableWhitelabel(callback) {
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
        '/api/2.0/settings/enablewhitelabel', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getIsDefaultWhiteLabelLogoText operation.
     * @callback module:api/SettingsRebrandingApi~getIsDefaultWhiteLabelLogoTextCallback
     * @param {String} error Error message, if any.
     * @param {module:models/IsDefaultWhiteLabelLogosWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check the default white label logo text
     * Specifies if the white label logo text are default or not.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
     * @param {Boolean} [isDefault] Specifies if the logo is for a default tenant or not.
     * @param {module:api/SettingsRebrandingApi~getIsDefaultWhiteLabelLogoTextCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/IsDefaultWhiteLabelLogosWrapper}
     */
    getIsDefaultWhiteLabelLogoText(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'IsDark': opts['isDark'],
        'IsDefault': opts['isDefault']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = IsDefaultWhiteLabelLogosWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/whitelabel/logotext/isdefault', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getIsDefaultWhiteLabelLogos operation.
     * @callback module:api/SettingsRebrandingApi~getIsDefaultWhiteLabelLogosCallback
     * @param {String} error Error message, if any.
     * @param {module:models/IsDefaultWhiteLabelLogosArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check the default white label logos
     * Specifies if the white label logos are default or not.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
     * @param {Boolean} [isDefault] Specifies if the logo is for a default tenant or not.
     * @param {module:api/SettingsRebrandingApi~getIsDefaultWhiteLabelLogosCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/IsDefaultWhiteLabelLogosArrayWrapper}
     */
    getIsDefaultWhiteLabelLogos(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'IsDark': opts['isDark'],
        'IsDefault': opts['isDefault']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = IsDefaultWhiteLabelLogosArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/whitelabel/logos/isdefault', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getLicensorData operation.
     * @callback module:api/SettingsRebrandingApi~getLicensorDataCallback
     * @param {String} error Error message, if any.
     * @param {module:models/CompanyWhiteLabelSettingsArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the licensor data
     * Returns the licensor data.
     * @param {module:api/SettingsRebrandingApi~getLicensorDataCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/CompanyWhiteLabelSettingsArrayWrapper}
     */
    getLicensorData(callback) {
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
      let returnType = CompanyWhiteLabelSettingsArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/companywhitelabel', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWhiteLabelLogoText operation.
     * @callback module:api/SettingsRebrandingApi~getWhiteLabelLogoTextCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the white label logo text
     * Returns the white label logo text.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
     * @param {Boolean} [isDefault] Specifies if the logo is for a default tenant or not.
     * @param {module:api/SettingsRebrandingApi~getWhiteLabelLogoTextCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    getWhiteLabelLogoText(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'IsDark': opts['isDark'],
        'IsDefault': opts['isDefault']
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
        '/api/2.0/settings/whitelabel/logotext', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWhiteLabelLogos operation.
     * @callback module:api/SettingsRebrandingApi~getWhiteLabelLogosCallback
     * @param {String} error Error message, if any.
     * @param {module:models/WhiteLabelItemArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the white label logos
     * Returns the white label logos.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
     * @param {Boolean} [isDefault] Specifies if the logo is for a default tenant or not.
     * @param {module:api/SettingsRebrandingApi~getWhiteLabelLogosCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/WhiteLabelItemArrayWrapper}
     */
    getWhiteLabelLogos(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'IsDark': opts['isDark'],
        'IsDefault': opts['isDefault']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = WhiteLabelItemArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/whitelabel/logos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the restoreWhiteLabelLogoText operation.
     * @callback module:api/SettingsRebrandingApi~restoreWhiteLabelLogoTextCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Restore the white label logo text
     * Restores the white label logo text.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
     * @param {Boolean} [isDefault] Specifies if the logo is for a default tenant or not.
     * @param {module:api/SettingsRebrandingApi~restoreWhiteLabelLogoTextCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    restoreWhiteLabelLogoText(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'IsDark': opts['isDark'],
        'IsDefault': opts['isDefault']
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
        '/api/2.0/settings/whitelabel/logotext/restore', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the restoreWhiteLabelLogos operation.
     * @callback module:api/SettingsRebrandingApi~restoreWhiteLabelLogosCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Restore the white label logos
     * Restores the white label logos.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
     * @param {Boolean} [isDefault] Specifies if the logo is for a default tenant or not.
     * @param {module:api/SettingsRebrandingApi~restoreWhiteLabelLogosCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    restoreWhiteLabelLogos(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'IsDark': opts['isDark'],
        'IsDefault': opts['isDefault']
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
        '/api/2.0/settings/whitelabel/logos/restore', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveAdditionalWhiteLabelSettings operation.
     * @callback module:api/SettingsRebrandingApi~saveAdditionalWhiteLabelSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save the additional white label settings
     * Saves the additional white label settings specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/AdditionalWhiteLabelSettingsWrapper} [additionalWhiteLabelSettingsWrapper] 
     * @param {module:api/SettingsRebrandingApi~saveAdditionalWhiteLabelSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    saveAdditionalWhiteLabelSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['additionalWhiteLabelSettingsWrapper'];

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
        '/api/2.0/settings/rebranding/additional', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveCompanyWhiteLabelSettings operation.
     * @callback module:api/SettingsRebrandingApi~saveCompanyWhiteLabelSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save the company white label settings
     * Saves the company white label settings specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/CompanyWhiteLabelSettingsWrapper} [companyWhiteLabelSettingsWrapper] 
     * @param {module:api/SettingsRebrandingApi~saveCompanyWhiteLabelSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    saveCompanyWhiteLabelSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['companyWhiteLabelSettingsWrapper'];

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
        '/api/2.0/settings/rebranding/company', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveWhiteLabelLogoText operation.
     * @callback module:api/SettingsRebrandingApi~saveWhiteLabelLogoTextCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save the white label logo text settings
     * Saves the white label logo text specified in the request.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
     * @param {Boolean} [isDefault] Specifies if the logo is for a default tenant or not.
     * @param {module:models/WhiteLabelRequestsDto} [whiteLabelRequestsDto] 
     * @param {module:api/SettingsRebrandingApi~saveWhiteLabelLogoTextCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    saveWhiteLabelLogoText(opts, callback) {
      opts = opts || {};
      let postBody = opts['whiteLabelRequestsDto'];

      let pathParams = {
      };
      let queryParams = {
        'IsDark': opts['isDark'],
        'IsDefault': opts['isDefault']
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
        '/api/2.0/settings/whitelabel/logotext/save', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveWhiteLabelSettings operation.
     * @callback module:api/SettingsRebrandingApi~saveWhiteLabelSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save the white label logos
     * Saves the white label logos specified in the request.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
     * @param {Boolean} [isDefault] Specifies if the logo is for a default tenant or not.
     * @param {module:models/WhiteLabelRequestsDto} [whiteLabelRequestsDto] 
     * @param {module:api/SettingsRebrandingApi~saveWhiteLabelSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    saveWhiteLabelSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['whiteLabelRequestsDto'];

      let pathParams = {
      };
      let queryParams = {
        'IsDark': opts['isDark'],
        'IsDefault': opts['isDefault']
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
        '/api/2.0/settings/whitelabel/logos/save', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveWhiteLabelSettingsFromFiles operation.
     * @callback module:api/SettingsRebrandingApi~saveWhiteLabelSettingsFromFilesCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save the white label logos from files
     * Saves the white label logos from files.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
     * @param {Boolean} [isDefault] Specifies if the logo is for a default tenant or not.
     * @param {module:api/SettingsRebrandingApi~saveWhiteLabelSettingsFromFilesCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    saveWhiteLabelSettingsFromFiles(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'IsDark': opts['isDark'],
        'IsDefault': opts['isDefault']
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
        '/api/2.0/settings/whitelabel/logos/savefromfiles', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
