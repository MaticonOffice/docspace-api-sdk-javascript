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
import CustomColorThemesSettingsRequestsDto from '../models/CustomColorThemesSettingsRequestsDto';
import CustomColorThemesSettingsWrapper from '../models/CustomColorThemesSettingsWrapper';
import DeepLinkConfigurationRequestsDto from '../models/DeepLinkConfigurationRequestsDto';
import DnsSettingsRequestsDto from '../models/DnsSettingsRequestsDto';
import EmailActivationSettings from '../models/EmailActivationSettings';
import EmailActivationSettingsWrapper from '../models/EmailActivationSettingsWrapper';
import MailDomainSettingsRequestsDto from '../models/MailDomainSettingsRequestsDto';
import ObjectWrapper from '../models/ObjectWrapper';
import PaymentSettingsWrapper from '../models/PaymentSettingsWrapper';
import STRINGArrayWrapper from '../models/STRINGArrayWrapper';
import SettingsWrapper from '../models/SettingsWrapper';
import StringWrapper from '../models/StringWrapper';
import TenantDeepLinkSettingsWrapper from '../models/TenantDeepLinkSettingsWrapper';
import TenantUserInvitationSettingsRequestDto from '../models/TenantUserInvitationSettingsRequestDto';
import TenantUserInvitationSettingsWrapper from '../models/TenantUserInvitationSettingsWrapper';
import TimezonesRequestsArrayWrapper from '../models/TimezonesRequestsArrayWrapper';
import WizardRequestsDto from '../models/WizardRequestsDto';
import WizardSettingsWrapper from '../models/WizardSettingsWrapper';

/**
* SettingsCommonSettings service.
* @module api/SettingsCommonSettingsApi
* @version 3.2.0
*/
export default class SettingsCommonSettingsApi {

    /**
    * Constructs a new SettingsCommonSettingsApi. 
    * @alias module:api/SettingsCommonSettingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the closeAdminHelper operation.
     * @callback module:api/SettingsCommonSettingsApi~closeAdminHelperCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Close the admin helper
     * Closes the administrator helper notification.
     * @param {module:api/SettingsCommonSettingsApi~closeAdminHelperCallback} callback The callback function, accepting three arguments: error, data, response
     */
    closeAdminHelper(callback) {
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/2.0/settings/closeadminhelper', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the completeWizard operation.
     * @callback module:api/SettingsCommonSettingsApi~completeWizardCallback
     * @param {String} error Error message, if any.
     * @param {module:models/WizardSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Complete the Wizard settings
     * Completes the Wizard settings.
     * @param {Object} opts Optional parameters
     * @param {module:models/WizardRequestsDto} [wizardRequestsDto] 
     * @param {module:api/SettingsCommonSettingsApi~completeWizardCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/WizardSettingsWrapper}
     */
    completeWizard(opts, callback) {
      opts = opts || {};
      let postBody = opts['wizardRequestsDto'];

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
      let returnType = WizardSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/wizard/complete', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the configureDeepLink operation.
     * @callback module:api/SettingsCommonSettingsApi~configureDeepLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TenantDeepLinkSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Configure the deep link settings
     * Saves the deep link configuration settings for the portal.
     * @param {Object} opts Optional parameters
     * @param {module:models/DeepLinkConfigurationRequestsDto} [deepLinkConfigurationRequestsDto] 
     * @param {module:api/SettingsCommonSettingsApi~configureDeepLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TenantDeepLinkSettingsWrapper}
     */
    configureDeepLink(opts, callback) {
      opts = opts || {};
      let postBody = opts['deepLinkConfigurationRequestsDto'];

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
      let returnType = TenantDeepLinkSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/deeplink', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePortalColorTheme operation.
     * @callback module:api/SettingsCommonSettingsApi~deletePortalColorThemeCallback
     * @param {String} error Error message, if any.
     * @param {module:models/CustomColorThemesSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a color theme
     * Deletes the portal color theme with the ID specified in the request.
     * @param {Object} opts Optional parameters
     * @param {Number} [id] The ID of the portal theme to delete.
     * @param {module:api/SettingsCommonSettingsApi~deletePortalColorThemeCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/CustomColorThemesSettingsWrapper}
     */
    deletePortalColorTheme(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'id': opts['id']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CustomColorThemesSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/colortheme', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeepLinkSettings operation.
     * @callback module:api/SettingsCommonSettingsApi~getDeepLinkSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TenantDeepLinkSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the deep link settings
     * Returns the deep link settings.
     * @param {module:api/SettingsCommonSettingsApi~getDeepLinkSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TenantDeepLinkSettingsWrapper}
     */
    getDeepLinkSettings(callback) {
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
      let returnType = TenantDeepLinkSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/deeplink', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentSettings operation.
     * @callback module:api/SettingsCommonSettingsApi~getPaymentSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/PaymentSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the payment settings
     * Returns the portal payment settings.
     * @param {module:api/SettingsCommonSettingsApi~getPaymentSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/PaymentSettingsWrapper}
     */
    getPaymentSettings(callback) {
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
      let returnType = PaymentSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/payment', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPortalColorTheme operation.
     * @callback module:api/SettingsCommonSettingsApi~getPortalColorThemeCallback
     * @param {String} error Error message, if any.
     * @param {module:models/CustomColorThemesSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a color theme
     * Returns the portal color theme.
     * @param {module:api/SettingsCommonSettingsApi~getPortalColorThemeCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/CustomColorThemesSettingsWrapper}
     */
    getPortalColorTheme(callback) {
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
      let returnType = CustomColorThemesSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/colortheme', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPortalHostname operation.
     * @callback module:api/SettingsCommonSettingsApi~getPortalHostnameCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ObjectWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get hostname
     * Returns the portal hostname.
     * @param {module:api/SettingsCommonSettingsApi~getPortalHostnameCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ObjectWrapper}
     */
    getPortalHostname(callback) {
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
        '/api/2.0/settings/machine', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPortalLogo operation.
     * @callback module:api/SettingsCommonSettingsApi~getPortalLogoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a portal logo
     * Returns the portal logo image URL.
     * @param {module:api/SettingsCommonSettingsApi~getPortalLogoCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    getPortalLogo(callback) {
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
        '/api/2.0/settings/logo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPortalSettings operation.
     * @callback module:api/SettingsCommonSettingsApi~getPortalSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/SettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the portal settings
     * Returns a list of all the available portal settings with the current values for each parameter.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [withpassword] Specifies whether to include the password hashing configuration in the response.
     * @param {module:api/SettingsCommonSettingsApi~getPortalSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/SettingsWrapper}
     */
    getPortalSettings(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'withpassword': opts['withpassword']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSocketSettings operation.
     * @callback module:api/SettingsCommonSettingsApi~getSocketSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ObjectWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the socket settings
     * Returns the socket settings.
     * @param {module:api/SettingsCommonSettingsApi~getSocketSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ObjectWrapper}
     */
    getSocketSettings(callback) {
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
        '/api/2.0/settings/socket', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSupportedCultures operation.
     * @callback module:api/SettingsCommonSettingsApi~getSupportedCulturesCallback
     * @param {String} error Error message, if any.
     * @param {module:models/STRINGArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get supported languages
     * Returns a list of all the available portal languages in the format of a two-letter or four-letter language code (e.g. \"de\", \"en-US\", etc.).
     * @param {module:api/SettingsCommonSettingsApi~getSupportedCulturesCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/STRINGArrayWrapper}
     */
    getSupportedCultures(callback) {
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
      let returnType = STRINGArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/cultures', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTenantUserInvitationSettings operation.
     * @callback module:api/SettingsCommonSettingsApi~getTenantUserInvitationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TenantUserInvitationSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the user invitation settings
     * Returns the portal user invitation settings.
     * @param {module:api/SettingsCommonSettingsApi~getTenantUserInvitationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TenantUserInvitationSettingsWrapper}
     */
    getTenantUserInvitationSettings(callback) {
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
      let returnType = TenantUserInvitationSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/invitationsettings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTimeZones operation.
     * @callback module:api/SettingsCommonSettingsApi~getTimeZonesCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TimezonesRequestsArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get time zones
     * Returns a list of all the available portal time zones.
     * @param {module:api/SettingsCommonSettingsApi~getTimeZonesCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TimezonesRequestsArrayWrapper}
     */
    getTimeZones(callback) {
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
      let returnType = TimezonesRequestsArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/timezones', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveDnsSettings operation.
     * @callback module:api/SettingsCommonSettingsApi~saveDnsSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save the DNS settings
     * Saves the DNS settings specified in the request to the current portal.
     * @param {Object} opts Optional parameters
     * @param {module:models/DnsSettingsRequestsDto} [dnsSettingsRequestsDto] 
     * @param {module:api/SettingsCommonSettingsApi~saveDnsSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    saveDnsSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['dnsSettingsRequestsDto'];

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
        '/api/2.0/settings/dns', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveMailDomainSettings operation.
     * @callback module:api/SettingsCommonSettingsApi~saveMailDomainSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save the mail domain settings
     * Saves the mail domain settings specified in the request to the portal.
     * @param {Object} opts Optional parameters
     * @param {module:models/MailDomainSettingsRequestsDto} [mailDomainSettingsRequestsDto] 
     * @param {module:api/SettingsCommonSettingsApi~saveMailDomainSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    saveMailDomainSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['mailDomainSettingsRequestsDto'];

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
        '/api/2.0/settings/maildomainsettings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the savePortalColorTheme operation.
     * @callback module:api/SettingsCommonSettingsApi~savePortalColorThemeCallback
     * @param {String} error Error message, if any.
     * @param {module:models/CustomColorThemesSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save a color theme
     * Saves the portal color theme specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/CustomColorThemesSettingsRequestsDto} [customColorThemesSettingsRequestsDto] 
     * @param {module:api/SettingsCommonSettingsApi~savePortalColorThemeCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/CustomColorThemesSettingsWrapper}
     */
    savePortalColorTheme(opts, callback) {
      opts = opts || {};
      let postBody = opts['customColorThemesSettingsRequestsDto'];

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
      let returnType = CustomColorThemesSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/colortheme', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateEmailActivationSettings operation.
     * @callback module:api/SettingsCommonSettingsApi~updateEmailActivationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmailActivationSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the email activation settings
     * Updates the email activation settings.
     * @param {Object} opts Optional parameters
     * @param {module:models/EmailActivationSettings} [emailActivationSettings] 
     * @param {module:api/SettingsCommonSettingsApi~updateEmailActivationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmailActivationSettingsWrapper}
     */
    updateEmailActivationSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['emailActivationSettings'];

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
      let returnType = EmailActivationSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/emailactivation', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateInvitationSettings operation.
     * @callback module:api/SettingsCommonSettingsApi~updateInvitationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TenantUserInvitationSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update user invitation settings
     * Updates the portal user invitation settings.
     * @param {Object} opts Optional parameters
     * @param {module:models/TenantUserInvitationSettingsRequestDto} [tenantUserInvitationSettingsRequestDto] 
     * @param {module:api/SettingsCommonSettingsApi~updateInvitationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TenantUserInvitationSettingsWrapper}
     */
    updateInvitationSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['tenantUserInvitationSettingsRequestDto'];

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
      let returnType = TenantUserInvitationSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/invitationsettings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
