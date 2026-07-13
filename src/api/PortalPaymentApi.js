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
import BalanceWrapper from '../models/BalanceWrapper';
import BooleanWrapper from '../models/BooleanWrapper';
import CurrenciesArrayWrapper from '../models/CurrenciesArrayWrapper';
import CustomerInfoWrapper from '../models/CustomerInfoWrapper';
import CustomerOperationsReportRequestDto from '../models/CustomerOperationsReportRequestDto';
import ObjectWrapper from '../models/ObjectWrapper';
import PaymentCalculationWrapper from '../models/PaymentCalculationWrapper';
import PaymentUrlRequestsDto from '../models/PaymentUrlRequestsDto';
import QuantityRequestDto from '../models/QuantityRequestDto';
import QuotaArrayWrapper from '../models/QuotaArrayWrapper';
import QuotaWrapper from '../models/QuotaWrapper';
import ReportWrapper from '../models/ReportWrapper';
import SalesRequestsDto from '../models/SalesRequestsDto';
import StringWrapper from '../models/StringWrapper';
import TenantWalletSettingsWrapper from '../models/TenantWalletSettingsWrapper';
import TopUpDepositRequestDto from '../models/TopUpDepositRequestDto';
import WalletQuantityRequestDto from '../models/WalletQuantityRequestDto';

/**
* PortalPayment service.
* @module api/PortalPaymentApi
* @version 3.2.0
*/
export default class PortalPaymentApi {

    /**
    * Constructs a new PortalPaymentApi. 
    * @alias module:api/PortalPaymentApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the calculateWalletPayment operation.
     * @callback module:api/PortalPaymentApi~calculateWalletPaymentCallback
     * @param {String} error Error message, if any.
     * @param {module:models/PaymentCalculationWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Calculate amount of the wallet payment
     * Calculate amount of the wallet payment with the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/WalletQuantityRequestDto} [walletQuantityRequestDto] 
     * @param {module:api/PortalPaymentApi~calculateWalletPaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/PaymentCalculationWrapper}
     */
    calculateWalletPayment(opts, callback) {
      opts = opts || {};
      let postBody = opts['walletQuantityRequestDto'];

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
      let returnType = PaymentCalculationWrapper;
      return this.apiClient.callApi(
        '/api/2.0/portal/payment/calculatewallet', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createCustomerOperationsReport operation.
     * @callback module:api/PortalPaymentApi~createCustomerOperationsReportCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate the customer operations report
     * Generates the customer operations report as csv file and save in Documents.
     * @param {Object} opts Optional parameters
     * @param {module:models/CustomerOperationsReportRequestDto} [customerOperationsReportRequestDto] 
     * @param {module:api/PortalPaymentApi~createCustomerOperationsReportCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    createCustomerOperationsReport(opts, callback) {
      opts = opts || {};
      let postBody = opts['customerOperationsReportRequestDto'];

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
        '/api/2.0/portal/payment/customer/operationsreport', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCheckoutSetupUrl operation.
     * @callback module:api/PortalPaymentApi~getCheckoutSetupUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the checkout setup page URL
     * Returns the URL to the checkout setup page.
     * @param {Object} opts Optional parameters
     * @param {String} [backUrl] Back URL
     * @param {module:api/PortalPaymentApi~getCheckoutSetupUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    getCheckoutSetupUrl(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'BackUrl': opts['backUrl']
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
        '/api/2.0/portal/payment/chechoutsetupurl', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomerBalance operation.
     * @callback module:api/PortalPaymentApi~getCustomerBalanceCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BalanceWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the customer balance
     * Returns the customer balance from the accounting service.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [refresh] Specifies whether to refresh the payment information cache or not.
     * @param {module:api/PortalPaymentApi~getCustomerBalanceCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BalanceWrapper}
     */
    getCustomerBalance(opts, callback) {
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
      let returnType = BalanceWrapper;
      return this.apiClient.callApi(
        '/api/2.0/portal/payment/customer/balance', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomerInfo operation.
     * @callback module:api/PortalPaymentApi~getCustomerInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/CustomerInfoWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the customer info
     * Returns the customer info.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [refresh] Specifies whether to refresh the payment information cache or not.
     * @param {module:api/PortalPaymentApi~getCustomerInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/CustomerInfoWrapper}
     */
    getCustomerInfo(opts, callback) {
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
      let returnType = CustomerInfoWrapper;
      return this.apiClient.callApi(
        '/api/2.0/portal/payment/customerinfo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomerOperations operation.
     * @callback module:api/PortalPaymentApi~getCustomerOperationsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ReportWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the customer operations
     * Returns the report of customer operations from the accounting service.
     * @param {Object} opts Optional parameters
     * @param {Date} [startDate] Start date
     * @param {Date} [endDate] End date
     * @param {Boolean} [credit] Include credit operations (true by default)
     * @param {Boolean} [withdrawal] Include withdrawal operations (true by default)
     * @param {Number} [offset] Offset (0 by default)
     * @param {Number} [limit] Limit (25 by default)
     * @param {module:api/PortalPaymentApi~getCustomerOperationsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ReportWrapper}
     */
    getCustomerOperations(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'credit': opts['credit'],
        'withdrawal': opts['withdrawal'],
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ReportWrapper;
      return this.apiClient.callApi(
        '/api/2.0/portal/payment/customer/operations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentAccount operation.
     * @callback module:api/PortalPaymentApi~getPaymentAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the payment account
     * Returns the URL to the payment account.
     * @param {Object} opts Optional parameters
     * @param {String} [backUrl] The URL where the user will be redirected after payment processing.
     * @param {module:api/PortalPaymentApi~getPaymentAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    getPaymentAccount(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'backUrl': opts['backUrl']
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
        '/api/2.0/portal/payment/account', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentCurrencies operation.
     * @callback module:api/PortalPaymentApi~getPaymentCurrenciesCallback
     * @param {String} error Error message, if any.
     * @param {module:models/CurrenciesArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get currencies
     * Returns the available portal currencies.
     * @param {module:api/PortalPaymentApi~getPaymentCurrenciesCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/CurrenciesArrayWrapper}
     */
    getPaymentCurrencies(callback) {
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
      let returnType = CurrenciesArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/portal/payment/currencies', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentQuotas operation.
     * @callback module:api/PortalPaymentApi~getPaymentQuotasCallback
     * @param {String} error Error message, if any.
     * @param {module:models/QuotaArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get quotas
     * Returns the available portal quotas.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [wallet] Get wallet quotas only
     * @param {module:api/PortalPaymentApi~getPaymentQuotasCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/QuotaArrayWrapper}
     */
    getPaymentQuotas(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'wallet': opts['wallet']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = QuotaArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/portal/payment/quotas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentUrl operation.
     * @callback module:api/PortalPaymentApi~getPaymentUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the payment page URL
     * Returns the URL to the payment page.
     * @param {Object} opts Optional parameters
     * @param {module:models/PaymentUrlRequestsDto} [paymentUrlRequestsDto] 
     * @param {module:api/PortalPaymentApi~getPaymentUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    getPaymentUrl(opts, callback) {
      opts = opts || {};
      let postBody = opts['paymentUrlRequestsDto'];

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
        '/api/2.0/portal/payment/url', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPortalPrices operation.
     * @callback module:api/PortalPaymentApi~getPortalPricesCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ObjectWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get prices
     * Returns the available portal prices.
     * @param {module:api/PortalPaymentApi~getPortalPricesCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ObjectWrapper}
     */
    getPortalPrices(callback) {
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
        '/api/2.0/portal/payment/prices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getQuotaPaymentInformation operation.
     * @callback module:api/PortalPaymentApi~getQuotaPaymentInformationCallback
     * @param {String} error Error message, if any.
     * @param {module:models/QuotaWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get quota payment information
     * Returns the payment information about the current portal quota.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [refresh] Specifies whether to refresh the payment information cache or not.
     * @param {module:api/PortalPaymentApi~getQuotaPaymentInformationCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/QuotaWrapper}
     */
    getQuotaPaymentInformation(opts, callback) {
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
      let returnType = QuotaWrapper;
      return this.apiClient.callApi(
        '/api/2.0/portal/payment/quota', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTenantWalletSettings operation.
     * @callback module:api/PortalPaymentApi~getTenantWalletSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TenantWalletSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get wallet auto top up settings
     * Returns the wallet auto top up settings.
     * @param {module:api/PortalPaymentApi~getTenantWalletSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TenantWalletSettingsWrapper}
     */
    getTenantWalletSettings(callback) {
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
      let returnType = TenantWalletSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/portal/payment/topupsettings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sendPaymentRequest operation.
     * @callback module:api/PortalPaymentApi~sendPaymentRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send a payment request
     * Sends a request for the portal payment.
     * @param {Object} opts Optional parameters
     * @param {module:models/SalesRequestsDto} [salesRequestsDto] 
     * @param {module:api/PortalPaymentApi~sendPaymentRequestCallback} callback The callback function, accepting three arguments: error, data, response
     */
    sendPaymentRequest(opts, callback) {
      opts = opts || {};
      let postBody = opts['salesRequestsDto'];

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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/2.0/portal/payment/request', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setTenantWalletSettings operation.
     * @callback module:api/PortalPaymentApi~setTenantWalletSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TenantWalletSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set wallet auto top up settings
     * Set the wallet auto top up settings.
     * @param {Object} opts Optional parameters
     * @param {module:models/TenantWalletSettingsWrapper} [tenantWalletSettingsWrapper] 
     * @param {module:api/PortalPaymentApi~setTenantWalletSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TenantWalletSettingsWrapper}
     */
    setTenantWalletSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['tenantWalletSettingsWrapper'];

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
      let returnType = TenantWalletSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/portal/payment/topupsettings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the topUpDeposit operation.
     * @callback module:api/PortalPaymentApi~topUpDepositCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Put money on deposit
     * Returns result of putting money on deposit.
     * @param {Object} opts Optional parameters
     * @param {module:models/TopUpDepositRequestDto} [topUpDepositRequestDto] 
     * @param {module:api/PortalPaymentApi~topUpDepositCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    topUpDeposit(opts, callback) {
      opts = opts || {};
      let postBody = opts['topUpDepositRequestDto'];

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
        '/api/2.0/portal/payment/deposit', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePayment operation.
     * @callback module:api/PortalPaymentApi~updatePaymentCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the payment quantity
     * Updates the payment quantity with the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/QuantityRequestDto} [quantityRequestDto] 
     * @param {module:api/PortalPaymentApi~updatePaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    updatePayment(opts, callback) {
      opts = opts || {};
      let postBody = opts['quantityRequestDto'];

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
        '/api/2.0/portal/payment/update', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWalletPayment operation.
     * @callback module:api/PortalPaymentApi~updateWalletPaymentCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the wallet payment quantity
     * Updates the wallet payment quantity with the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/WalletQuantityRequestDto} [walletQuantityRequestDto] 
     * @param {module:api/PortalPaymentApi~updateWalletPaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    updateWalletPayment(opts, callback) {
      opts = opts || {};
      let postBody = opts['walletQuantityRequestDto'];

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
        '/api/2.0/portal/payment/updatewallet', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
