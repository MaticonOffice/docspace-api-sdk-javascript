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
import AceShortWrapperArrayWrapper from '../models/AceShortWrapperArrayWrapper';
import ChangeOwnerRequestDto from '../models/ChangeOwnerRequestDto';
import ExternalShareRequestParam from '../models/ExternalShareRequestParam';
import ExternalShareWrapper from '../models/ExternalShareWrapper';
import FileEntryArrayWrapper from '../models/FileEntryArrayWrapper';
import MentionMessageWrapper from '../models/MentionMessageWrapper';
import MentionWrapperArrayWrapper from '../models/MentionWrapperArrayWrapper';

/**
* FilesSharing service.
* @module api/FilesSharingApi
* @version 3.2.0
*/
export default class FilesSharingApi {

    /**
    * Constructs a new FilesSharingApi. 
    * @alias module:api/FilesSharingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the applyExternalSharePassword operation.
     * @callback module:api/FilesSharingApi~applyExternalSharePasswordCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ExternalShareWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apply external data password
     * Applies a password specified in the request to get the external data.
     * @param {String} key The unique document identifier.
     * @param {Object} opts Optional parameters
     * @param {module:models/ExternalShareRequestParam} [externalShareRequestParam] The external data share request parameters.
     * @param {module:api/FilesSharingApi~applyExternalSharePasswordCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ExternalShareWrapper}
     */
    applyExternalSharePassword(key, opts, callback) {
      opts = opts || {};
      let postBody = opts['externalShareRequestParam'];
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling applyExternalSharePassword");
      }

      let pathParams = {
        'key': key
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
      let returnType = ExternalShareWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/share/{key}/password', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the changeFileOwner operation.
     * @callback module:api/FilesSharingApi~changeFileOwnerCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileEntryArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change the file owner
     * Changes the owner of the file with the ID specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/ChangeOwnerRequestDto} [changeOwnerRequestDto] 
     * @param {module:api/FilesSharingApi~changeFileOwnerCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileEntryArrayWrapper}
     */
    changeFileOwner(opts, callback) {
      opts = opts || {};
      let postBody = opts['changeOwnerRequestDto'];

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
      let returnType = FileEntryArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/owner', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getExternalShareData operation.
     * @callback module:api/FilesSharingApi~getExternalShareDataCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ExternalShareWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the external data
     * Returns the external data by the key specified in the request.
     * @param {String} key The unique key of the external shared data.
     * @param {Object} opts Optional parameters
     * @param {String} [fileId] The unique document identifier.
     * @param {module:api/FilesSharingApi~getExternalShareDataCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ExternalShareWrapper}
     */
    getExternalShareData(key, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling getExternalShareData");
      }

      let pathParams = {
        'key': key
      };
      let queryParams = {
        'fileId': opts['fileId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ExternalShareWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/share/{key}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSharedUsers operation.
     * @callback module:api/FilesSharingApi~getSharedUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:models/MentionWrapperArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user access rights by file ID
     * Returns a list of users with their access rights to the file with the ID specified in the request.
     * @param {Number} fileId The file ID of the request.
     * @param {module:api/FilesSharingApi~getSharedUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/MentionWrapperArrayWrapper}
     */
    getSharedUsers(fileId, callback) {
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling getSharedUsers");
      }

      let pathParams = {
        'fileId': fileId
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
      let returnType = MentionWrapperArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/sharedusers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sendEditorNotify operation.
     * @callback module:api/FilesSharingApi~sendEditorNotifyCallback
     * @param {String} error Error message, if any.
     * @param {module:models/AceShortWrapperArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send the mention message
     * Sends a message to the users who are mentioned in the file with the ID specified in the request.
     * @param {Number} fileId The file ID of the mention message.
     * @param {Object} opts Optional parameters
     * @param {module:models/MentionMessageWrapper} [mentionMessageWrapper] The mention message.
     * @param {module:api/FilesSharingApi~sendEditorNotifyCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/AceShortWrapperArrayWrapper}
     */
    sendEditorNotify(fileId, opts, callback) {
      opts = opts || {};
      let postBody = opts['mentionMessageWrapper'];
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling sendEditorNotify");
      }

      let pathParams = {
        'fileId': fileId
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
      let returnType = AceShortWrapperArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/sendeditornotify', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
