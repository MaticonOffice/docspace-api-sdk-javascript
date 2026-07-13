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
import DoubleWrapper from '../models/DoubleWrapper';
import TariffWrapper from '../models/TariffWrapper';
import TenantQuotaWrapper from '../models/TenantQuotaWrapper';

/**
* PortalQuota service.
* @module api/PortalQuotaApi
* @version 3.2.0
*/
export default class PortalQuotaApi {

    /**
    * Constructs a new PortalQuotaApi. 
    * @alias module:api/PortalQuotaApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getPortalQuota operation.
     * @callback module:api/PortalQuotaApi~getPortalQuotaCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TenantQuotaWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a portal quota
     * Returns the current portal quota.
     * @param {module:api/PortalQuotaApi~getPortalQuotaCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TenantQuotaWrapper}
     */
    getPortalQuota(callback) {
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
      let returnType = TenantQuotaWrapper;
      return this.apiClient.callApi(
        '/api/2.0/portal/quota', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPortalTariff operation.
     * @callback module:api/PortalQuotaApi~getPortalTariffCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TariffWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a portal tariff
     * Returns the current portal tariff.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [refresh] The value indicating whether the current portal tariff information should be refreshed.
     * @param {module:api/PortalQuotaApi~getPortalTariffCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TariffWrapper}
     */
    getPortalTariff(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'refresh': opts['refresh']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TariffWrapper;
      return this.apiClient.callApi(
        '/api/2.0/portal/tariff', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPortalUsedSpace operation.
     * @callback module:api/PortalQuotaApi~getPortalUsedSpaceCallback
     * @param {String} error Error message, if any.
     * @param {module:models/DoubleWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the portal used space
     * Returns the used space of the current portal.
     * @param {module:api/PortalQuotaApi~getPortalUsedSpaceCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/DoubleWrapper}
     */
    getPortalUsedSpace(callback) {
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
      let returnType = DoubleWrapper;
      return this.apiClient.callApi(
        '/api/2.0/portal/usedspace', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRightQuota operation.
     * @callback module:api/PortalQuotaApi~getRightQuotaCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TenantQuotaWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the recommended quota
     * Returns the recommended quota for the current portal.
     * @param {module:api/PortalQuotaApi~getRightQuotaCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TenantQuotaWrapper}
     */
    getRightQuota(callback) {
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
      let returnType = TenantQuotaWrapper;
      return this.apiClient.callApi(
        '/api/2.0/portal/quota/right', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
