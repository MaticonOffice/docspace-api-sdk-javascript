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
import ChangeClientActivationRequest from '../models/ChangeClientActivationRequest';
import ClientResponse from '../models/ClientResponse';
import ClientSecretResponse from '../models/ClientSecretResponse';
import CreateClientRequest from '../models/CreateClientRequest';
import ErrorResponse from '../models/ErrorResponse';
import UpdateClientRequest from '../models/UpdateClientRequest';

/**
* OAuth20ClientManagement service.
* @module api/OAuth20ClientManagementApi
* @version 3.2.0
*/
export default class OAuth20ClientManagementApi {

    /**
    * Constructs a new OAuth20ClientManagementApi. 
    * @alias module:api/OAuth20ClientManagementApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the changeActivation operation.
     * @callback module:api/OAuth20ClientManagementApi~changeActivationCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change the client activation status
     * Activates or deactivates an OAuth2 client. When deactivated, the client cannot request new access tokens, but existing tokens will remain valid until they expire.
     * @param {String} clientId The client identifier.
     * @param {module:models/ChangeClientActivationRequest} changeClientActivationRequest 
     * @param {module:api/OAuth20ClientManagementApi~changeActivationCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link Object}
     */
    changeActivation(clientId, changeClientActivationRequest, callback) {
      let postBody = changeClientActivationRequest;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling changeActivation");
      }
      // verify the required parameter 'changeClientActivationRequest' is set
      if (changeClientActivationRequest === undefined || changeClientActivationRequest === null) {
        throw new Error("Missing the required parameter 'changeClientActivationRequest' when calling changeActivation");
      }

      let pathParams = {
        'clientId': clientId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['asc_auth_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/2.0/clients/{clientId}/activation', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createClient operation.
     * @callback module:api/OAuth20ClientManagementApi~createClientCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ClientResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new OAuth2 client
     * Creates a new OAuth2 client with the specified configuration. The client will be created with the provided scopes, redirect URIs, and other settings. Returns the created client details including the generated client ID.
     * @param {module:models/CreateClientRequest} createClientRequest 
     * @param {module:api/OAuth20ClientManagementApi~createClientCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ClientResponse}
     */
    createClient(createClientRequest, callback) {
      let postBody = createClientRequest;
      // verify the required parameter 'createClientRequest' is set
      if (createClientRequest === undefined || createClientRequest === null) {
        throw new Error("Missing the required parameter 'createClientRequest' when calling createClient");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['asc_auth_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ClientResponse;
      return this.apiClient.callApi(
        '/api/2.0/clients', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteClient operation.
     * @callback module:api/OAuth20ClientManagementApi~deleteClientCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an OAuth2 client
     * Permanently deletes an OAuth2 client and all associated data. All access and refresh tokens issued to this client will be invalidated. This operation cannot be undone.
     * @param {String} clientId The client identifier.
     * @param {module:api/OAuth20ClientManagementApi~deleteClientCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link Object}
     */
    deleteClient(clientId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling deleteClient");
      }

      let pathParams = {
        'clientId': clientId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['asc_auth_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/2.0/clients/{clientId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the regenerateSecret operation.
     * @callback module:api/OAuth20ClientManagementApi~regenerateSecretCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ClientSecretResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Regenerate the client secret
     * Generates a new client secret for the specified OAuth2 client. The old secret will be immediately invalidated. This operation should be used with caution as it requires updating the secret in all client applications.
     * @param {String} clientId The client identifier.
     * @param {module:api/OAuth20ClientManagementApi~regenerateSecretCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ClientSecretResponse}
     */
    regenerateSecret(clientId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling regenerateSecret");
      }

      let pathParams = {
        'clientId': clientId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['asc_auth_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ClientSecretResponse;
      return this.apiClient.callApi(
        '/api/2.0/clients/{clientId}/regenerate', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the revokeUserClient operation.
     * @callback module:api/OAuth20ClientManagementApi~revokeUserClientCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revoke client consent
     * Revokes all user consents for the specified OAuth2 client. This will invalidate all access tokens and refresh tokens issued to this client for the current user. The user will need to re-authorize the client to access their resources.
     * @param {String} clientId The client identifier.
     * @param {module:api/OAuth20ClientManagementApi~revokeUserClientCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link Object}
     */
    revokeUserClient(clientId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling revokeUserClient");
      }

      let pathParams = {
        'clientId': clientId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['asc_auth_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/2.0/clients/{clientId}/revoke', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateClient operation.
     * @callback module:api/OAuth20ClientManagementApi~updateClientCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing OAuth2 client
     * Updates the configuration of an existing OAuth2 client, allowing modifications to the client name, description, redirect URIs, and other settings. The client ID cannot be modified.
     * @param {String} clientId The client identifier.
     * @param {module:models/UpdateClientRequest} updateClientRequest 
     * @param {module:api/OAuth20ClientManagementApi~updateClientCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link Object}
     */
    updateClient(clientId, updateClientRequest, callback) {
      let postBody = updateClientRequest;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling updateClient");
      }
      // verify the required parameter 'updateClientRequest' is set
      if (updateClientRequest === undefined || updateClientRequest === null) {
        throw new Error("Missing the required parameter 'updateClientRequest' when calling updateClient");
      }

      let pathParams = {
        'clientId': clientId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['asc_auth_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/2.0/clients/{clientId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
