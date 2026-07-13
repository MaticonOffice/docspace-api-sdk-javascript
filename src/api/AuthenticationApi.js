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
import AuthRequestsDto from '../models/AuthRequestsDto';
import AuthenticationTokenWrapper from '../models/AuthenticationTokenWrapper';
import BooleanWrapper from '../models/BooleanWrapper';
import ConfirmWrapper from '../models/ConfirmWrapper';
import EmailValidationKeyModel from '../models/EmailValidationKeyModel';
import MobileRequestsDto from '../models/MobileRequestsDto';
import StringWrapper from '../models/StringWrapper';

/**
* Authentication service.
* @module api/AuthenticationApi
* @version 3.2.0
*/
export default class AuthenticationApi {

    /**
    * Constructs a new AuthenticationApi. 
    * @alias module:api/AuthenticationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the authenticateMe operation.
     * @callback module:api/AuthenticationApi~authenticateMeCallback
     * @param {String} error Error message, if any.
     * @param {module:models/AuthenticationTokenWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Authenticate a user
     * Authenticates the current user by SMS, authenticator app, or without two-factor authentication.
     * @param {Object} opts Optional parameters
     * @param {module:models/AuthRequestsDto} [authRequestsDto] 
     * @param {module:api/AuthenticationApi~authenticateMeCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/AuthenticationTokenWrapper}
     */
    authenticateMe(opts, callback) {
      opts = opts || {};
      let postBody = opts['authRequestsDto'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuthenticationTokenWrapper;
      return this.apiClient.callApi(
        '/api/2.0/authentication', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the authenticateMeFromBodyWithCode operation.
     * @callback module:api/AuthenticationApi~authenticateMeFromBodyWithCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:models/AuthenticationTokenWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Authenticate a user by code
     * Authenticates the current user by SMS or two-factor authentication code.
     * @param {String} code 
     * @param {Object} opts Optional parameters
     * @param {module:models/AuthRequestsDto} [authRequestsDto] 
     * @param {module:api/AuthenticationApi~authenticateMeFromBodyWithCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/AuthenticationTokenWrapper}
     */
    authenticateMeFromBodyWithCode(code, opts, callback) {
      opts = opts || {};
      let postBody = opts['authRequestsDto'];
      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling authenticateMeFromBodyWithCode");
      }

      let pathParams = {
        'code': code
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuthenticationTokenWrapper;
      return this.apiClient.callApi(
        '/api/2.0/authentication/{code}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the checkConfirm operation.
     * @callback module:api/AuthenticationApi~checkConfirmCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ConfirmWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Open confirmation email URL
     * Opens a confirmation email URL to validate a certain action (employee invitation, portal removal, phone activation, etc.).
     * @param {Object} opts Optional parameters
     * @param {module:models/EmailValidationKeyModel} [emailValidationKeyModel] 
     * @param {module:api/AuthenticationApi~checkConfirmCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ConfirmWrapper}
     */
    checkConfirm(opts, callback) {
      opts = opts || {};
      let postBody = opts['emailValidationKeyModel'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ConfirmWrapper;
      return this.apiClient.callApi(
        '/api/2.0/authentication/confirm', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getIsAuthentificated operation.
     * @callback module:api/AuthenticationApi~getIsAuthentificatedCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check authentication
     * Checks if the current user is authenticated or not.
     * @param {module:api/AuthenticationApi~getIsAuthentificatedCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    getIsAuthentificated(callback) {
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
        '/api/2.0/authentication', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the logout operation.
     * @callback module:api/AuthenticationApi~logoutCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Log out
     * Logs out of the current user account.
     * @param {module:api/AuthenticationApi~logoutCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    logout(callback) {
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
      let returnType = StringWrapper;
      return this.apiClient.callApi(
        '/api/2.0/authentication/logout', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveMobilePhone operation.
     * @callback module:api/AuthenticationApi~saveMobilePhoneCallback
     * @param {String} error Error message, if any.
     * @param {module:models/AuthenticationTokenWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set a mobile phone
     * Sets a mobile phone for the current user.
     * @param {Object} opts Optional parameters
     * @param {module:models/MobileRequestsDto} [mobileRequestsDto] 
     * @param {module:api/AuthenticationApi~saveMobilePhoneCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/AuthenticationTokenWrapper}
     */
    saveMobilePhone(opts, callback) {
      opts = opts || {};
      let postBody = opts['mobileRequestsDto'];

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
      let returnType = AuthenticationTokenWrapper;
      return this.apiClient.callApi(
        '/api/2.0/authentication/setphone', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sendSmsCode operation.
     * @callback module:api/AuthenticationApi~sendSmsCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:models/AuthenticationTokenWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send SMS code
     * Sends SMS with an authentication code.
     * @param {Object} opts Optional parameters
     * @param {module:models/AuthRequestsDto} [authRequestsDto] 
     * @param {module:api/AuthenticationApi~sendSmsCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/AuthenticationTokenWrapper}
     */
    sendSmsCode(opts, callback) {
      opts = opts || {};
      let postBody = opts['authRequestsDto'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuthenticationTokenWrapper;
      return this.apiClient.callApi(
        '/api/2.0/authentication/sendsms', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
