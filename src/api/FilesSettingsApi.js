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
import AutoCleanUpDataWrapper from '../models/AutoCleanUpDataWrapper';
import AutoCleanupRequestDto from '../models/AutoCleanupRequestDto';
import BooleanWrapper from '../models/BooleanWrapper';
import CheckDocServiceUrlRequestDto from '../models/CheckDocServiceUrlRequestDto';
import DisplayRequestDto from '../models/DisplayRequestDto';
import DocServiceUrlWrapper from '../models/DocServiceUrlWrapper';
import FileShareArrayWrapper from '../models/FileShareArrayWrapper';
import FilesSettingsWrapper from '../models/FilesSettingsWrapper';
import HideConfirmConvertRequestDto from '../models/HideConfirmConvertRequestDto';
import ICompressWrapper from '../models/ICompressWrapper';
import ModuleWrapper from '../models/ModuleWrapper';
import SettingsRequestDto from '../models/SettingsRequestDto';

/**
* FilesSettings service.
* @module api/FilesSettingsApi
* @version 3.2.0
*/
export default class FilesSettingsApi {

    /**
    * Constructs a new FilesSettingsApi. 
    * @alias module:api/FilesSettingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the changeAccessToThirdparty operation.
     * @callback module:api/FilesSettingsApi~changeAccessToThirdpartyCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change the third-party settings access
     * Changes the access to the third-party settings.
     * @param {Object} opts Optional parameters
     * @param {module:models/SettingsRequestDto} [settingsRequestDto] 
     * @param {module:api/FilesSettingsApi~changeAccessToThirdpartyCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    changeAccessToThirdparty(opts, callback) {
      opts = opts || {};
      let postBody = opts['settingsRequestDto'];

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
        '/api/2.0/files/thirdparty', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the changeAutomaticallyCleanUp operation.
     * @callback module:api/FilesSettingsApi~changeAutomaticallyCleanUpCallback
     * @param {String} error Error message, if any.
     * @param {module:models/AutoCleanUpDataWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the trash bin auto-clearing setting
     * Updates the trash bin auto-clearing setting.
     * @param {Object} opts Optional parameters
     * @param {module:models/AutoCleanupRequestDto} [autoCleanupRequestDto] 
     * @param {module:api/FilesSettingsApi~changeAutomaticallyCleanUpCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/AutoCleanUpDataWrapper}
     */
    changeAutomaticallyCleanUp(opts, callback) {
      opts = opts || {};
      let postBody = opts['autoCleanupRequestDto'];

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
      let returnType = AutoCleanUpDataWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/settings/autocleanup', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the changeDefaultAccessRights operation.
     * @callback module:api/FilesSettingsApi~changeDefaultAccessRightsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileShareArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change the default access rights
     * Changes the default access rights in the sharing settings.
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} [requestBody] Sharing rights (None, ReadWrite, Read, Restrict, Varies, Review, Comment, FillForms, CustomFilter, RoomAdmin, Editing, Collaborator).
     * @param {module:api/FilesSettingsApi~changeDefaultAccessRightsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileShareArrayWrapper}
     */
    changeDefaultAccessRights(opts, callback) {
      opts = opts || {};
      let postBody = opts['requestBody'];

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
      let returnType = FileShareArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/settings/dafaultaccessrights', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the changeDeleteConfirm operation.
     * @callback module:api/FilesSettingsApi~changeDeleteConfirmCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Confirm the file deletion
     * Specifies whether to confirm the file deletion or not.
     * @param {Object} opts Optional parameters
     * @param {module:models/SettingsRequestDto} [settingsRequestDto] 
     * @param {module:api/FilesSettingsApi~changeDeleteConfirmCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    changeDeleteConfirm(opts, callback) {
      opts = opts || {};
      let postBody = opts['settingsRequestDto'];

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
        '/api/2.0/files/changedeleteconfrim', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the changeDownloadZipFromBody operation.
     * @callback module:api/FilesSettingsApi~changeDownloadZipFromBodyCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ICompressWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change the archive format (using body parameters)
     * Changes the format of the downloaded archive from .zip to .tar.gz. This method uses the body parameters.
     * @param {Object} opts Optional parameters
     * @param {module:models/DisplayRequestDto} [displayRequestDto] 
     * @param {module:api/FilesSettingsApi~changeDownloadZipFromBodyCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ICompressWrapper}
     */
    changeDownloadZipFromBody(opts, callback) {
      opts = opts || {};
      let postBody = opts['displayRequestDto'];

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
      let returnType = ICompressWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/settings/downloadtargz', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the checkDocServiceUrl operation.
     * @callback module:api/FilesSettingsApi~checkDocServiceUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:models/DocServiceUrlWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check the document service URL
     * Checks the document service location URL.
     * @param {Object} opts Optional parameters
     * @param {module:models/CheckDocServiceUrlRequestDto} [checkDocServiceUrlRequestDto] 
     * @param {module:api/FilesSettingsApi~checkDocServiceUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/DocServiceUrlWrapper}
     */
    checkDocServiceUrl(opts, callback) {
      opts = opts || {};
      let postBody = opts['checkDocServiceUrlRequestDto'];

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
      let returnType = DocServiceUrlWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/docservice', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the displayFileExtension operation.
     * @callback module:api/FilesSettingsApi~displayFileExtensionCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Display a file extension
     * Specifies whether to display a file extension or not.
     * @param {Object} opts Optional parameters
     * @param {module:models/SettingsRequestDto} [settingsRequestDto] 
     * @param {module:api/FilesSettingsApi~displayFileExtensionCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    displayFileExtension(opts, callback) {
      opts = opts || {};
      let postBody = opts['settingsRequestDto'];

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
        '/api/2.0/files/displayfileextension', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the externalShare operation.
     * @callback module:api/FilesSettingsApi~externalShareCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change the external sharing ability
     * Changes the ability to share a file externally.
     * @param {Object} opts Optional parameters
     * @param {module:models/DisplayRequestDto} [displayRequestDto] 
     * @param {module:api/FilesSettingsApi~externalShareCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    externalShare(opts, callback) {
      opts = opts || {};
      let postBody = opts['displayRequestDto'];

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
        '/api/2.0/files/settings/external', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the externalShareSocialMedia operation.
     * @callback module:api/FilesSettingsApi~externalShareSocialMediaCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change the external sharing ability on social networks
     * Changes the ability to share a file externally on social networks.
     * @param {Object} opts Optional parameters
     * @param {module:models/DisplayRequestDto} [displayRequestDto] 
     * @param {module:api/FilesSettingsApi~externalShareSocialMediaCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    externalShareSocialMedia(opts, callback) {
      opts = opts || {};
      let postBody = opts['displayRequestDto'];

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
        '/api/2.0/files/settings/externalsocialmedia', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the forcesave operation.
     * @callback module:api/FilesSettingsApi~forcesaveCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change the forcesaving ability
     * Specifies if the file forcesaving is enabled or not.
     * @param {module:api/FilesSettingsApi~forcesaveCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    forcesave(callback) {
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
        '/api/2.0/files/forcesave', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAutomaticallyCleanUp operation.
     * @callback module:api/FilesSettingsApi~getAutomaticallyCleanUpCallback
     * @param {String} error Error message, if any.
     * @param {module:models/AutoCleanUpDataWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the trash bin auto-clearing setting
     * Returns the trash bin auto-clearing setting.
     * @param {module:api/FilesSettingsApi~getAutomaticallyCleanUpCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/AutoCleanUpDataWrapper}
     */
    getAutomaticallyCleanUp(callback) {
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
      let returnType = AutoCleanUpDataWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/settings/autocleanup', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDocServiceUrl operation.
     * @callback module:api/FilesSettingsApi~getDocServiceUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:models/DocServiceUrlWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the document service URL
     * Returns the URL address of the connected editors.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [version] Specifies whether to return the editor version or not.
     * @param {module:api/FilesSettingsApi~getDocServiceUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/DocServiceUrlWrapper}
     */
    getDocServiceUrl(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'version': opts['version']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DocServiceUrlWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/docservice', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFilesModule operation.
     * @callback module:api/FilesSettingsApi~getFilesModuleCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ModuleWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the \"Documents\" information
     * Returns the information about the \"Documents\" module.
     * @param {module:api/FilesSettingsApi~getFilesModuleCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ModuleWrapper}
     */
    getFilesModule(callback) {
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
      let returnType = ModuleWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFilesSettings operation.
     * @callback module:api/FilesSettingsApi~getFilesSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FilesSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get file settings
     * Returns all the file settings.
     * @param {module:api/FilesSettingsApi~getFilesSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FilesSettingsWrapper}
     */
    getFilesSettings(callback) {
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
      let returnType = FilesSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the hideConfirmCancelOperation operation.
     * @callback module:api/FilesSettingsApi~hideConfirmCancelOperationCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Hide confirmation dialog when canceling operations
     * Hides the confirmation dialog when canceling operations.
     * @param {Object} opts Optional parameters
     * @param {module:models/SettingsRequestDto} [settingsRequestDto] 
     * @param {module:api/FilesSettingsApi~hideConfirmCancelOperationCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    hideConfirmCancelOperation(opts, callback) {
      opts = opts || {};
      let postBody = opts['settingsRequestDto'];

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
        '/api/2.0/files/hideconfirmcanceloperation', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the hideConfirmConvert operation.
     * @callback module:api/FilesSettingsApi~hideConfirmConvertCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ModuleWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Hide the confirmation dialog when converting
     * Hides the confirmation dialog for saving the file copy in the original format when converting a file.
     * @param {Object} opts Optional parameters
     * @param {module:models/HideConfirmConvertRequestDto} [hideConfirmConvertRequestDto] 
     * @param {module:api/FilesSettingsApi~hideConfirmConvertCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ModuleWrapper}
     */
    hideConfirmConvert(opts, callback) {
      opts = opts || {};
      let postBody = opts['hideConfirmConvertRequestDto'];

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
      let returnType = ModuleWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/hideconfirmconvert', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the hideConfirmRoomLifetime operation.
     * @callback module:api/FilesSettingsApi~hideConfirmRoomLifetimeCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Hide confirmation dialog when changing room lifetime settings
     * Hides the confirmation dialog when changing the room lifetime settings.
     * @param {Object} opts Optional parameters
     * @param {module:models/SettingsRequestDto} [settingsRequestDto] 
     * @param {module:api/FilesSettingsApi~hideConfirmRoomLifetimeCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    hideConfirmRoomLifetime(opts, callback) {
      opts = opts || {};
      let postBody = opts['settingsRequestDto'];

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
        '/api/2.0/files/hideconfirmroomlifetime', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the isAvailablePrivacyRoomSettings operation.
     * @callback module:api/FilesSettingsApi~isAvailablePrivacyRoomSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check the \"Private Room\" availability
     * Checks if the \"Private Room\" settings are available or not.
     * @param {module:api/FilesSettingsApi~isAvailablePrivacyRoomSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    isAvailablePrivacyRoomSettings(callback) {
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
        '/api/2.0/files/@privacy/available', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the keepNewFileName operation.
     * @callback module:api/FilesSettingsApi~keepNewFileNameCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ask a new file name
     * Specifies whether to ask a user for a file name on creation or not.
     * @param {Object} opts Optional parameters
     * @param {module:models/SettingsRequestDto} [settingsRequestDto] 
     * @param {module:api/FilesSettingsApi~keepNewFileNameCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    keepNewFileName(opts, callback) {
      opts = opts || {};
      let postBody = opts['settingsRequestDto'];

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
        '/api/2.0/files/keepnewfilename', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setOpenEditorInSameTab operation.
     * @callback module:api/FilesSettingsApi~setOpenEditorInSameTabCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Open document in the same browser tab
     * Changes the ability to open the document in the same browser tab.
     * @param {Object} opts Optional parameters
     * @param {module:models/SettingsRequestDto} [settingsRequestDto] 
     * @param {module:api/FilesSettingsApi~setOpenEditorInSameTabCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    setOpenEditorInSameTab(opts, callback) {
      opts = opts || {};
      let postBody = opts['settingsRequestDto'];

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
        '/api/2.0/files/settings/openeditorinsametab', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the storeForcesave operation.
     * @callback module:api/FilesSettingsApi~storeForcesaveCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change the ability to store the forcesaved files
     * Changes the ability to store the forcesaved file versions.
     * @param {module:api/FilesSettingsApi~storeForcesaveCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    storeForcesave(callback) {
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
        '/api/2.0/files/storeforcesave', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the storeOriginal operation.
     * @callback module:api/FilesSettingsApi~storeOriginalCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change the ability to upload original formats
     * Changes the ability to upload documents in the original formats as well.
     * @param {Object} opts Optional parameters
     * @param {module:models/SettingsRequestDto} [settingsRequestDto] 
     * @param {module:api/FilesSettingsApi~storeOriginalCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    storeOriginal(opts, callback) {
      opts = opts || {};
      let postBody = opts['settingsRequestDto'];

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
        '/api/2.0/files/storeoriginal', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateFileIfExist operation.
     * @callback module:api/FilesSettingsApi~updateFileIfExistCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a file version if it exists
     * Updates a file version if a file with such a name already exists.
     * @param {Object} opts Optional parameters
     * @param {module:models/SettingsRequestDto} [settingsRequestDto] 
     * @param {module:api/FilesSettingsApi~updateFileIfExistCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    updateFileIfExist(opts, callback) {
      opts = opts || {};
      let postBody = opts['settingsRequestDto'];

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
        '/api/2.0/files/updateifexist', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
