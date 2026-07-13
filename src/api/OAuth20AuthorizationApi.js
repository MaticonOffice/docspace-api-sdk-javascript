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
import ExchangeToken200Response from '../models/ExchangeToken200Response';

/**
* OAuth20Authorization service.
* @module api/OAuth20AuthorizationApi
* @version 3.2.0
*/
export default class OAuth20AuthorizationApi {

    /**
    * Constructs a new OAuth20AuthorizationApi. 
    * @alias module:api/OAuth20AuthorizationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the authorizeOAuth operation.
     * @callback module:api/OAuth20AuthorizationApi~authorizeOAuthCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * OAuth2 authorization endpoint
     * Initiates the OAuth2 authorization flow.
     * @param {String} responseType The OAuth 2.0 response type, must be 'code' for authorization code flow.
     * @param {String} clientId The client identifier issued to the client during registration.
     * @param {String} redirectUri The URL to redirect to after authorization is complete.
     * @param {String} scope The space-separated list of requested scope permissions.
     * @param {module:api/OAuth20AuthorizationApi~authorizeOAuthCallback} callback The callback function, accepting three arguments: error, data, response
     */
    authorizeOAuth(responseType, clientId, redirectUri, scope, callback) {
      let postBody = null;
      // verify the required parameter 'responseType' is set
      if (responseType === undefined || responseType === null) {
        throw new Error("Missing the required parameter 'responseType' when calling authorizeOAuth");
      }
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling authorizeOAuth");
      }
      // verify the required parameter 'redirectUri' is set
      if (redirectUri === undefined || redirectUri === null) {
        throw new Error("Missing the required parameter 'redirectUri' when calling authorizeOAuth");
      }
      // verify the required parameter 'scope' is set
      if (scope === undefined || scope === null) {
        throw new Error("Missing the required parameter 'scope' when calling authorizeOAuth");
      }

      let pathParams = {
      };
      let queryParams = {
        'response_type': responseType,
        'client_id': clientId,
        'redirect_uri': redirectUri,
        'scope': scope
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['asc_auth_key'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/oauth2/authorize', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the exchangeToken operation.
     * @callback module:api/OAuth20AuthorizationApi~exchangeTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ExchangeToken200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * OAuth2 token endpoint
     * Exchanges an authorization code specified in the request for the access token.
     * @param {Object} opts Optional parameters
     * @param {String} [grantType] The OAuth2 grant type, must be 'authorization_code' for the authorization code flow.
     * @param {String} [code] A temporary authorization code that is sent to the client to be exchanged for a token.
     * @param {String} [redirectUri] The URL where the user will be redirected after successful or unsuccessful authentication.
     * @param {String} [clientId] The client identifier issued to the client during registration.
     * @param {String} [clientSecret] The client secret issued to the client during registration.
     * @param {module:api/OAuth20AuthorizationApi~exchangeTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ExchangeToken200Response}
     */
    exchangeToken(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'grant_type': opts['grantType'],
        'code': opts['code'],
        'redirect_uri': opts['redirectUri'],
        'client_id': opts['clientId'],
        'client_secret': opts['clientSecret']
      };

      let authNames = [];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ExchangeToken200Response;
      return this.apiClient.callApi(
        '/oauth2/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the submitConsent operation.
     * @callback module:api/OAuth20AuthorizationApi~submitConsentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * OAuth2 consent endpoint
     * Sends a consent request with the specified parameters.
     * @param {Object} opts Optional parameters
     * @param {String} [clientId] The client identifier issued to the client during registration.
     * @param {String} [state] The random string used to solve the CSRF vulnerability problem.
     * @param {String} [scope] The space-separated list of requested scope permissions.
     * @param {module:api/OAuth20AuthorizationApi~submitConsentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    submitConsent(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'client_id': opts['clientId'],
        'state': opts['state'],
        'scope': opts['scope']
      };

      let authNames = ['asc_auth_key'];
      let contentTypes = ['multipart/form-data'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/oauth2/authorize', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
