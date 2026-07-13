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
import ArrayArrayWrapper from '../models/ArrayArrayWrapper';
import FolderStringArrayWrapper from '../models/FolderStringArrayWrapper';
import FolderStringWrapper from '../models/FolderStringWrapper';
import ProviderArrayWrapper from '../models/ProviderArrayWrapper';
import StringWrapper from '../models/StringWrapper';
import ThirdPartyBackupRequestDto from '../models/ThirdPartyBackupRequestDto';
import ThirdPartyParamsArrayWrapper from '../models/ThirdPartyParamsArrayWrapper';
import ThirdPartyRequestDto from '../models/ThirdPartyRequestDto';

/**
* FilesThirdPartyIntegration service.
* @module api/FilesThirdPartyIntegrationApi
* @version 3.2.0
*/
export default class FilesThirdPartyIntegrationApi {

    /**
    * Constructs a new FilesThirdPartyIntegrationApi. 
    * @alias module:api/FilesThirdPartyIntegrationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteThirdParty operation.
     * @callback module:api/FilesThirdPartyIntegrationApi~deleteThirdPartyCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a third-party account
     * Removes the third-party storage service account with the ID specified in the request.
     * @param {Number} providerId The provider ID.
     * @param {module:api/FilesThirdPartyIntegrationApi~deleteThirdPartyCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    deleteThirdParty(providerId, callback) {
      let postBody = null;
      // verify the required parameter 'providerId' is set
      if (providerId === undefined || providerId === null) {
        throw new Error("Missing the required parameter 'providerId' when calling deleteThirdParty");
      }

      let pathParams = {
        'providerId': providerId
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
        '/api/2.0/files/thirdparty/{providerId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllProviders operation.
     * @callback module:api/FilesThirdPartyIntegrationApi~getAllProvidersCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ProviderArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all providers
     * Returns a list of all providers.   **Note**: Available provider keys: Dropbox, Box, WebDav, OneDrive, GoogleDrive, kDrive, ownCloud, Nextcloud.
     * @param {module:api/FilesThirdPartyIntegrationApi~getAllProvidersCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ProviderArrayWrapper}
     */
    getAllProviders(callback) {
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
      let returnType = ProviderArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/thirdparty/providers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getBackupThirdPartyAccount operation.
     * @callback module:api/FilesThirdPartyIntegrationApi~getBackupThirdPartyAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderStringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a third-party account backup
     * Returns a backup of the connected third-party account.
     * @param {module:api/FilesThirdPartyIntegrationApi~getBackupThirdPartyAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderStringWrapper}
     */
    getBackupThirdPartyAccount(callback) {
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
      let returnType = FolderStringWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/thirdparty/backup', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCapabilities operation.
     * @callback module:api/FilesThirdPartyIntegrationApi~getCapabilitiesCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ArrayArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get providers
     * Returns the list of the available providers.   **Note**: Available provider keys: DropboxV2, Box, WebDav, Yandex, OneDrive, SharePoint, GoogleDrive, kDrive.
     * @param {module:api/FilesThirdPartyIntegrationApi~getCapabilitiesCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ArrayArrayWrapper}
     */
    getCapabilities(callback) {
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
      let returnType = ArrayArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/thirdparty/capabilities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCommonThirdPartyFolders operation.
     * @callback module:api/FilesThirdPartyIntegrationApi~getCommonThirdPartyFoldersCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderStringArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the common third-party services
     * Returns a list of the third-party services connected to the \"Common\" section.
     * @param {module:api/FilesThirdPartyIntegrationApi~getCommonThirdPartyFoldersCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderStringArrayWrapper}
     */
    getCommonThirdPartyFolders(callback) {
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
      let returnType = FolderStringArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/thirdparty/common', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getThirdPartyAccounts operation.
     * @callback module:api/FilesThirdPartyIntegrationApi~getThirdPartyAccountsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ThirdPartyParamsArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the third-party accounts
     * Returns a list of all the connected third-party accounts.
     * @param {module:api/FilesThirdPartyIntegrationApi~getThirdPartyAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ThirdPartyParamsArrayWrapper}
     */
    getThirdPartyAccounts(callback) {
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
      let returnType = ThirdPartyParamsArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/thirdparty', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveThirdParty operation.
     * @callback module:api/FilesThirdPartyIntegrationApi~saveThirdPartyCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderStringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save a third-party account
     * Saves the third-party storage service account. For WebDav, Yandex, kDrive and SharePoint, the login and password are used for authentication. For other providers, the authentication is performed using a token received via OAuth 2.0.   **Note**: List of provider keys: DropboxV2, Box, WebDav, Yandex, OneDrive, SharePoint, GoogleDrive, kDrive.
     * @param {Object} opts Optional parameters
     * @param {module:models/ThirdPartyRequestDto} [thirdPartyRequestDto] 
     * @param {module:api/FilesThirdPartyIntegrationApi~saveThirdPartyCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderStringWrapper}
     */
    saveThirdParty(opts, callback) {
      opts = opts || {};
      let postBody = opts['thirdPartyRequestDto'];

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
      let returnType = FolderStringWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/thirdparty', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveThirdPartyBackup operation.
     * @callback module:api/FilesThirdPartyIntegrationApi~saveThirdPartyBackupCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderStringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save a third-party account backup
     * Saves a backup of the connected third-party account.   **Note**: List of provider keys: DropboxV2, Box, WebDav, Yandex, OneDrive, SharePoint, GoogleDrive, kDrive.
     * @param {Object} opts Optional parameters
     * @param {module:models/ThirdPartyBackupRequestDto} [thirdPartyBackupRequestDto] 
     * @param {module:api/FilesThirdPartyIntegrationApi~saveThirdPartyBackupCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderStringWrapper}
     */
    saveThirdPartyBackup(opts, callback) {
      opts = opts || {};
      let postBody = opts['thirdPartyBackupRequestDto'];

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
      let returnType = FolderStringWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/thirdparty/backup', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
