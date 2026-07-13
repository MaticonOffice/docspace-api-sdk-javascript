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
import AccountInfoArrayWrapper from '../models/AccountInfoArrayWrapper';
import LinkAccountRequestDto from '../models/LinkAccountRequestDto';
import SignupAccountRequestDto from '../models/SignupAccountRequestDto';

/**
* PeopleThirdPartyAccounts service.
* @module api/PeopleThirdPartyAccountsApi
* @version 3.2.0
*/
export default class PeopleThirdPartyAccountsApi {

    /**
    * Constructs a new PeopleThirdPartyAccountsApi. 
    * @alias module:api/PeopleThirdPartyAccountsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getThirdPartyAuthProviders operation.
     * @callback module:api/PeopleThirdPartyAccountsApi~getThirdPartyAuthProvidersCallback
     * @param {String} error Error message, if any.
     * @param {module:models/AccountInfoArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get third-party accounts
     * Returns a list of the available third-party accounts.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [inviteView] Specifies whether to return providers that are available for invitation links, i.e. the user can login or register through these providers.
     * @param {Boolean} [settingsView] Specifies whether to display the provider settings in a pop-up window (true) or redirect them to the desktop application (false).
     * @param {String} [clientCallback] The method that is called after authentication.
     * @param {String} [fromOnly] The provider name if a response is required only from this provider.
     * @param {module:api/PeopleThirdPartyAccountsApi~getThirdPartyAuthProvidersCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/AccountInfoArrayWrapper}
     */
    getThirdPartyAuthProviders(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'inviteView': opts['inviteView'],
        'settingsView': opts['settingsView'],
        'clientCallback': opts['clientCallback'],
        'fromOnly': opts['fromOnly']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AccountInfoArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/thirdparty/providers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the linkThirdPartyAccount operation.
     * @callback module:api/PeopleThirdPartyAccountsApi~linkThirdPartyAccountCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Link a third-pary account
     * Links a third-party account specified in the request to the user profile.
     * @param {Object} opts Optional parameters
     * @param {module:models/LinkAccountRequestDto} [linkAccountRequestDto] 
     * @param {module:api/PeopleThirdPartyAccountsApi~linkThirdPartyAccountCallback} callback The callback function, accepting three arguments: error, data, response
     */
    linkThirdPartyAccount(opts, callback) {
      opts = opts || {};
      let postBody = opts['linkAccountRequestDto'];

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
        '/api/2.0/people/thirdparty/linkaccount', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the signupThirdPartyAccount operation.
     * @callback module:api/PeopleThirdPartyAccountsApi~signupThirdPartyAccountCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a third-pary account
     * Creates a third-party account with the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/SignupAccountRequestDto} [signupAccountRequestDto] 
     * @param {module:api/PeopleThirdPartyAccountsApi~signupThirdPartyAccountCallback} callback The callback function, accepting three arguments: error, data, response
     */
    signupThirdPartyAccount(opts, callback) {
      opts = opts || {};
      let postBody = opts['signupAccountRequestDto'];

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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/2.0/people/thirdparty/signup', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unlinkThirdPartyAccount operation.
     * @callback module:api/PeopleThirdPartyAccountsApi~unlinkThirdPartyAccountCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unlink a third-pary account
     * Unlinks a third-party account specified in the request from the user profile.
     * @param {Object} opts Optional parameters
     * @param {String} [provider] The provider name.
     * @param {module:api/PeopleThirdPartyAccountsApi~unlinkThirdPartyAccountCallback} callback The callback function, accepting three arguments: error, data, response
     */
    unlinkThirdPartyAccount(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'provider': opts['provider']
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
        '/api/2.0/people/thirdparty/unlinkaccount', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
