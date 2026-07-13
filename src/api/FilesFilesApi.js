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
import ApiDateTime from '../models/ApiDateTime';
import BaseBatchRequestDto from '../models/BaseBatchRequestDto';
import BooleanWrapper from '../models/BooleanWrapper';
import ChangeHistory from '../models/ChangeHistory';
import CheckFillFormDraft from '../models/CheckFillFormDraft';
import ConfigurationIntegerWrapper from '../models/ConfigurationIntegerWrapper';
import CopyAsJsonElement from '../models/CopyAsJsonElement';
import CreateFileJsonElement from '../models/CreateFileJsonElement';
import CreateTextOrHtmlFile from '../models/CreateTextOrHtmlFile';
import CustomFilterParameters from '../models/CustomFilterParameters';
import Delete from '../models/Delete';
import EditHistoryArrayWrapper from '../models/EditHistoryArrayWrapper';
import EditHistoryDataWrapper from '../models/EditHistoryDataWrapper';
import EditorType from '../models/EditorType';
import FileEntryWrapper from '../models/FileEntryWrapper';
import FileIntegerArrayWrapper from '../models/FileIntegerArrayWrapper';
import FileIntegerWrapper from '../models/FileIntegerWrapper';
import FileLinkRequest from '../models/FileLinkRequest';
import FileLinkWrapper from '../models/FileLinkWrapper';
import FileOperationArrayWrapper from '../models/FileOperationArrayWrapper';
import FileReferenceWrapper from '../models/FileReferenceWrapper';
import FileShareArrayWrapper from '../models/FileShareArrayWrapper';
import FileShareWrapper from '../models/FileShareWrapper';
import FillingFormResultIntegerWrapper from '../models/FillingFormResultIntegerWrapper';
import FormRoleArrayWrapper from '../models/FormRoleArrayWrapper';
import FormRoleWrapper from '../models/FormRoleWrapper';
import GetReferenceDataDtoInteger from '../models/GetReferenceDataDtoInteger';
import HistoryArrayWrapper from '../models/HistoryArrayWrapper';
import KeyValuePairBooleanStringWrapper from '../models/KeyValuePairBooleanStringWrapper';
import LockFileParameters from '../models/LockFileParameters';
import ManageFormFillingDtoInteger from '../models/ManageFormFillingDtoInteger';
import MentionWrapperArrayWrapper from '../models/MentionWrapperArrayWrapper';
import NoContentResultWrapper from '../models/NoContentResultWrapper';
import ObjectArrayWrapper from '../models/ObjectArrayWrapper';
import ObjectWrapper from '../models/ObjectWrapper';
import OrderRequestDto from '../models/OrderRequestDto';
import OrdersRequestDtoInteger from '../models/OrdersRequestDtoInteger';
import SaveAsPdfInteger from '../models/SaveAsPdfInteger';
import SaveFormRoleMappingDtoInteger from '../models/SaveFormRoleMappingDtoInteger';
import StartEdit from '../models/StartEdit';
import StringWrapper from '../models/StringWrapper';
import TemplatesRequestDto from '../models/TemplatesRequestDto';
import UpdateFile from '../models/UpdateFile';

/**
* FilesFiles service.
* @module api/FilesFilesApi
* @version 3.2.0
*/
export default class FilesFilesApi {

    /**
    * Constructs a new FilesFilesApi. 
    * @alias module:api/FilesFilesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addTemplates operation.
     * @callback module:api/FilesFilesApi~addTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add template files
     * Adds files with the IDs specified in the request to the template list.
     * @param {Object} opts Optional parameters
     * @param {module:models/TemplatesRequestDto} [templatesRequestDto] 
     * @param {module:api/FilesFilesApi~addTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    addTemplates(opts, callback) {
      opts = opts || {};
      let postBody = opts['templatesRequestDto'];

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
        '/api/2.0/files/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the changeVersionHistory operation.
     * @callback module:api/FilesFilesApi~changeVersionHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileIntegerArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change version history
     * Changes the version history of a file with the ID specified in the request.
     * @param {Number} fileId The file Id to change its version history.
     * @param {Object} opts Optional parameters
     * @param {module:models/ChangeHistory} [changeHistory] The parameters for changing version history.
     * @param {module:api/FilesFilesApi~changeVersionHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileIntegerArrayWrapper}
     */
    changeVersionHistory(fileId, opts, callback) {
      opts = opts || {};
      let postBody = opts['changeHistory'];
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling changeVersionHistory");
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
      let returnType = FileIntegerArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/history', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the checkFillFormDraft operation.
     * @callback module:api/FilesFilesApi~checkFillFormDraftCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check the form draft filling
     * Checks if the current file is a form draft which can be filled out.
     * @param {Number} fileId The file ID of the form draft.
     * @param {Object} opts Optional parameters
     * @param {module:models/CheckFillFormDraft} [checkFillFormDraft] The parameters for checking the form draft filling.
     * @param {module:api/FilesFilesApi~checkFillFormDraftCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    checkFillFormDraft(fileId, opts, callback) {
      opts = opts || {};
      let postBody = opts['checkFillFormDraft'];
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling checkFillFormDraft");
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

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StringWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/masterform/{fileId}/checkfillformdraft', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the copyFileAs operation.
     * @callback module:api/FilesFilesApi~copyFileAsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileEntryWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Copy a file
     * Copies (and converts if possible) an existing file to the specified folder.
     * @param {Number} fileId The file ID to copy.
     * @param {Object} opts Optional parameters
     * @param {module:models/CopyAsJsonElement} [copyAsJsonElement] The parameters for copying a file.
     * @param {module:api/FilesFilesApi~copyFileAsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileEntryWrapper}
     */
    copyFileAs(fileId, opts, callback) {
      opts = opts || {};
      let postBody = opts['copyAsJsonElement'];
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling copyFileAs");
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
      let returnType = FileEntryWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/copyas', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createEditSession operation.
     * @callback module:api/FilesFilesApi~createEditSessionCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ObjectWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create the editing session
     * Creates a session to edit the existing file with multiple chunks (needed for WebDAV).   **Note**: Information about created session which includes:  <ul>  <li><b>id:</b> unique ID of this upload session,</li>  <li><b>created:</b> UTC time when the session was created,</li>  <li><b>expired:</b> UTC time when the session will expire if no chunks are sent before that time,</li>  <li><b>location:</b> URL where you should send your next chunk,</li>  <li><b>bytes_uploaded:</b> number of bytes uploaded for the specific upload ID,</li>  <li><b>bytes_total:</b> total number of bytes which will be uploaded.</li>  </ul>
     * @param {Number} fileId The file ID.
     * @param {Object} opts Optional parameters
     * @param {Number} [fileSize] The file size in bytes.
     * @param {module:api/FilesFilesApi~createEditSessionCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ObjectWrapper}
     */
    createEditSession(fileId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling createEditSession");
      }

      let pathParams = {
        'fileId': fileId
      };
      let queryParams = {
        'fileSize': opts['fileSize']
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
        '/api/2.0/files/file/{fileId}/edit_session', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createFile operation.
     * @callback module:api/FilesFilesApi~createFileCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a file
     * Creates a new file in the specified folder with the title specified in the request.   **Note**: If a file extension is different from DOCX/XLSX/PPTX and refers to one of the known text, spreadsheet, or presentation formats, it will be changed to DOCX/XLSX/PPTX accordingly. If the file extension is not specified or is unknown, the DOCX extension will be added to the file title.
     * @param {Number} folderId The folder ID for the file creation.
     * @param {Object} opts Optional parameters
     * @param {module:models/CreateFileJsonElement} [createFileJsonElement] The parameters for creating a file.
     * @param {module:api/FilesFilesApi~createFileCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileIntegerWrapper}
     */
    createFile(folderId, opts, callback) {
      opts = opts || {};
      let postBody = opts['createFileJsonElement'];
      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling createFile");
      }

      let pathParams = {
        'folderId': folderId
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
      let returnType = FileIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/{folderId}/file', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createFileInMyDocuments operation.
     * @callback module:api/FilesFilesApi~createFileInMyDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a file in the \"My documents\" section
     * Creates a new file in the \"My documents\" section with the title specified in the request.   **Note**: If a file extension is different from DOCX/XLSX/PPTX and refers to one of the known text, spreadsheet, or presentation formats, it will be changed to DOCX/XLSX/PPTX accordingly. If the file extension is not specified or is unknown, the DOCX extension will be added to the file title.
     * @param {Object} opts Optional parameters
     * @param {module:models/CreateFileJsonElement} [createFileJsonElement] 
     * @param {module:api/FilesFilesApi~createFileInMyDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileIntegerWrapper}
     */
    createFileInMyDocuments(opts, callback) {
      opts = opts || {};
      let postBody = opts['createFileJsonElement'];

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
      let returnType = FileIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/@my/file', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createHtmlFile operation.
     * @callback module:api/FilesFilesApi~createHtmlFileCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an HTML file
     * Creates an HTML (.html) file in the selected folder with the title and contents specified in the request.
     * @param {Number} folderId The folder ID to create the text or HTML file.
     * @param {Object} opts Optional parameters
     * @param {module:models/CreateTextOrHtmlFile} [createTextOrHtmlFile] The parameters for creating an HTML or text file.
     * @param {module:api/FilesFilesApi~createHtmlFileCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileIntegerWrapper}
     */
    createHtmlFile(folderId, opts, callback) {
      opts = opts || {};
      let postBody = opts['createTextOrHtmlFile'];
      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling createHtmlFile");
      }

      let pathParams = {
        'folderId': folderId
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
      let returnType = FileIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/{folderId}/html', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createHtmlFileInMyDocuments operation.
     * @callback module:api/FilesFilesApi~createHtmlFileInMyDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an HTML file in the \"My documents\" section
     * Creates an HTML (.html) file in the \"My documents\" section with the title and contents specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/CreateTextOrHtmlFile} [createTextOrHtmlFile] 
     * @param {module:api/FilesFilesApi~createHtmlFileInMyDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileIntegerWrapper}
     */
    createHtmlFileInMyDocuments(opts, callback) {
      opts = opts || {};
      let postBody = opts['createTextOrHtmlFile'];

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
      let returnType = FileIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/@my/html', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createPrimaryExternalLink operation.
     * @callback module:api/FilesFilesApi~createPrimaryExternalLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileShareWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create primary external link
     * Creates a primary external link by the identifier specified in the request.
     * @param {Number} id The file ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/FileLinkRequest} [fileLinkRequest] The file external link parameters.
     * @param {module:api/FilesFilesApi~createPrimaryExternalLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileShareWrapper}
     */
    createPrimaryExternalLink(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['fileLinkRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling createPrimaryExternalLink");
      }

      let pathParams = {
        'id': id
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
      let returnType = FileShareWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{id}/link', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createTextFile operation.
     * @callback module:api/FilesFilesApi~createTextFileCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a text file
     * Creates a text (.txt) file in the selected folder with the title and contents specified in the request.
     * @param {Number} folderId The folder ID to create the text or HTML file.
     * @param {Object} opts Optional parameters
     * @param {module:models/CreateTextOrHtmlFile} [createTextOrHtmlFile] The parameters for creating an HTML or text file.
     * @param {module:api/FilesFilesApi~createTextFileCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileIntegerWrapper}
     */
    createTextFile(folderId, opts, callback) {
      opts = opts || {};
      let postBody = opts['createTextOrHtmlFile'];
      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling createTextFile");
      }

      let pathParams = {
        'folderId': folderId
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
      let returnType = FileIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/{folderId}/text', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createTextFileInMyDocuments operation.
     * @callback module:api/FilesFilesApi~createTextFileInMyDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a text file in the \"My documents\" section
     * Creates a text (.txt) file in the \"My documents\" section with the title and contents specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/CreateTextOrHtmlFile} [createTextOrHtmlFile] 
     * @param {module:api/FilesFilesApi~createTextFileInMyDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileIntegerWrapper}
     */
    createTextFileInMyDocuments(opts, callback) {
      opts = opts || {};
      let postBody = opts['createTextOrHtmlFile'];

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
      let returnType = FileIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/@my/text', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createThumbnails operation.
     * @callback module:api/FilesFilesApi~createThumbnailsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ObjectArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create file thumbnails
     * Creates thumbnails for the files with the IDs specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/BaseBatchRequestDto} [baseBatchRequestDto] 
     * @param {module:api/FilesFilesApi~createThumbnailsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ObjectArrayWrapper}
     */
    createThumbnails(opts, callback) {
      opts = opts || {};
      let postBody = opts['baseBatchRequestDto'];

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
      let returnType = ObjectArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/thumbnails', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFile operation.
     * @callback module:api/FilesFilesApi~deleteFileCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileOperationArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a file
     * Deletes a file with the ID specified in the request.
     * @param {Number} fileId The file ID to delete.
     * @param {module:models/Delete} _delete The parameters for deleting a file.
     * @param {module:api/FilesFilesApi~deleteFileCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileOperationArrayWrapper}
     */
    deleteFile(fileId, _delete, callback) {
      let postBody = _delete;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteFile");
      }
      // verify the required parameter '_delete' is set
      if (_delete === undefined || _delete === null) {
        throw new Error("Missing the required parameter '_delete' when calling deleteFile");
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
      let returnType = FileOperationArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRecent operation.
     * @callback module:api/FilesFilesApi~deleteRecentCallback
     * @param {String} error Error message, if any.
     * @param {module:models/NoContentResultWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete recent files
     * Removes files with the IDs specified in the request from the \"Recent\" section.
     * @param {Object} opts Optional parameters
     * @param {module:models/BaseBatchRequestDto} [baseBatchRequestDto] 
     * @param {module:api/FilesFilesApi~deleteRecentCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/NoContentResultWrapper}
     */
    deleteRecent(opts, callback) {
      opts = opts || {};
      let postBody = opts['baseBatchRequestDto'];

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
      let returnType = NoContentResultWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/recent', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTemplates operation.
     * @callback module:api/FilesFilesApi~deleteTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete template files
     * Removes files with the IDs specified in the request from the template list.
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} [requestBody] The file IDs.
     * @param {module:api/FilesFilesApi~deleteTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    deleteTemplates(opts, callback) {
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
      let returnType = BooleanWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/templates', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllFormRoles operation.
     * @callback module:api/FilesFilesApi~getAllFormRolesCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FormRoleArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get form roles
     * Returns all roles for the specified form.
     * @param {Number} fileId The file ID of the request.
     * @param {module:api/FilesFilesApi~getAllFormRolesCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FormRoleArrayWrapper}
     */
    getAllFormRoles(fileId, callback) {
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling getAllFormRoles");
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
      let returnType = FormRoleArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/formroles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEditDiffUrl operation.
     * @callback module:api/FilesFilesApi~getEditDiffUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EditHistoryDataWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get changes URL
     * Returns a URL to the changes of a file version specified in the request.
     * @param {Number} fileId The file ID.
     * @param {Object} opts Optional parameters
     * @param {Number} [version] The file version.
     * @param {module:api/FilesFilesApi~getEditDiffUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EditHistoryDataWrapper}
     */
    getEditDiffUrl(fileId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling getEditDiffUrl");
      }

      let pathParams = {
        'fileId': fileId
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
      let returnType = EditHistoryDataWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/edit/diff', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEditHistory operation.
     * @callback module:api/FilesFilesApi~getEditHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EditHistoryArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get version history
     * Returns the version history of a file with the ID specified in the request.
     * @param {Number} fileId The file ID of the request.
     * @param {module:api/FilesFilesApi~getEditHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EditHistoryArrayWrapper}
     */
    getEditHistory(fileId, callback) {
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling getEditHistory");
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

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EditHistoryArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/edit/history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFileHistory operation.
     * @callback module:api/FilesFilesApi~getFileHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:models/HistoryArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get file history
     * Returns the list of actions performed on the file with the specified identifier.
     * @param {Number} fileId The file ID of the history request.
     * @param {Object} opts Optional parameters
     * @param {module:models/ApiDateTime} [fromDate] The start date of the history.
     * @param {module:models/ApiDateTime} [toDate] The end date of the history.
     * @param {Number} [count] The number of history entries to retrieve for the file log.
     * @param {Number} [startIndex] The starting index for retrieving a subset of file history entries.
     * @param {module:api/FilesFilesApi~getFileHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/HistoryArrayWrapper}
     */
    getFileHistory(fileId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling getFileHistory");
      }

      let pathParams = {
        'fileId': fileId
      };
      let queryParams = {
        'fromDate': opts['fromDate'],
        'toDate': opts['toDate'],
        'count': opts['count'],
        'startIndex': opts['startIndex']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = HistoryArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/log', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFileInfo operation.
     * @callback module:api/FilesFilesApi~getFileInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get file information
     * Returns the detailed information about a file with the ID specified in the request.
     * @param {Number} fileId The file ID.
     * @param {Object} opts Optional parameters
     * @param {Number} [version] The file version.
     * @param {module:api/FilesFilesApi~getFileInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileIntegerWrapper}
     */
    getFileInfo(fileId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling getFileInfo");
      }

      let pathParams = {
        'fileId': fileId
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
      let returnType = FileIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFileLinks operation.
     * @callback module:api/FilesFilesApi~getFileLinksCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileShareArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get file external links
     * Returns the external links of a file with the ID specified in the request.
     * @param {Number} id The file ID of the request.
     * @param {Object} opts Optional parameters
     * @param {Number} [count] The number of items to retrieve in the request.
     * @param {Number} [startIndex] The starting index for the query results.
     * @param {module:api/FilesFilesApi~getFileLinksCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileShareArrayWrapper}
     */
    getFileLinks(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFileLinks");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'count': opts['count'],
        'startIndex': opts['startIndex']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FileShareArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{id}/links', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFilePrimaryExternalLink operation.
     * @callback module:api/FilesFilesApi~getFilePrimaryExternalLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileShareWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get primary external link
     * Returns the primary external link by the identifier specified in the request.
     * @param {Number} id The file ID of the request.
     * @param {Object} opts Optional parameters
     * @param {Number} [count] The number of items to retrieve in the request.
     * @param {Number} [startIndex] The starting index for the query results.
     * @param {module:api/FilesFilesApi~getFilePrimaryExternalLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileShareWrapper}
     */
    getFilePrimaryExternalLink(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFilePrimaryExternalLink");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'count': opts['count'],
        'startIndex': opts['startIndex']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FileShareWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{id}/link', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFileVersionInfo operation.
     * @callback module:api/FilesFilesApi~getFileVersionInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileIntegerArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get file versions
     * Returns the detailed information about all the available file versions with the ID specified in the request.
     * @param {Number} fileId The file ID of the request.
     * @param {module:api/FilesFilesApi~getFileVersionInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileIntegerArrayWrapper}
     */
    getFileVersionInfo(fileId, callback) {
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling getFileVersionInfo");
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

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FileIntegerArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFillResult operation.
     * @callback module:api/FilesFilesApi~getFillResultCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FillingFormResultIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get form-filling result
     * Retrieves the result of a form-filling session.
     * @param {Object} opts Optional parameters
     * @param {String} [fillingSessionId] The form-filling session ID.
     * @param {module:api/FilesFilesApi~getFillResultCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FillingFormResultIntegerWrapper}
     */
    getFillResult(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'fillingSessionId': opts['fillingSessionId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FillingFormResultIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/fillresult', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPresignedFileUri operation.
     * @callback module:api/FilesFilesApi~getPresignedFileUriCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileLinkWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get file download link asynchronously
     * Returns a link to download a file with the ID specified in the request asynchronously.
     * @param {Number} fileId The file ID of the request.
     * @param {module:api/FilesFilesApi~getPresignedFileUriCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileLinkWrapper}
     */
    getPresignedFileUri(fileId, callback) {
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling getPresignedFileUri");
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
      let returnType = FileLinkWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/presigned', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPresignedUri operation.
     * @callback module:api/FilesFilesApi~getPresignedUriCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get file download link
     * Returns a pre-signed URL to download a file with the specified ID.  This temporary link provides secure access to the file.
     * @param {Number} fileId The file ID of the request.
     * @param {module:api/FilesFilesApi~getPresignedUriCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    getPresignedUri(fileId, callback) {
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling getPresignedUri");
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
      let returnType = StringWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/presigneduri', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getProtectedFileUsers operation.
     * @callback module:api/FilesFilesApi~getProtectedFileUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:models/MentionWrapperArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get users access rights to the protected file
     * Returns a list of users with their access rights to the protected file with the ID specified in the request.
     * @param {Number} fileId The file ID of the request.
     * @param {module:api/FilesFilesApi~getProtectedFileUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/MentionWrapperArrayWrapper}
     */
    getProtectedFileUsers(fileId, callback) {
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling getProtectedFileUsers");
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
        '/api/2.0/files/file/{fileId}/protectusers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getReferenceData operation.
     * @callback module:api/FilesFilesApi~getReferenceDataCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileReferenceWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get reference data
     * Returns the reference data to uniquely identify a file in its system and check the availability of insering data into the destination spreadsheet by the external link.
     * @param {Object} opts Optional parameters
     * @param {module:models/GetReferenceDataDtoInteger} [getReferenceDataDtoInteger] 
     * @param {module:api/FilesFilesApi~getReferenceDataCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileReferenceWrapper}
     */
    getReferenceData(opts, callback) {
      opts = opts || {};
      let postBody = opts['getReferenceDataDtoInteger'];

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
      let returnType = FileReferenceWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/referencedata', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the isFormPDF operation.
     * @callback module:api/FilesFilesApi~isFormPDFCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check the PDF file
     * Checks if the PDF file is a form or not.
     * @param {Number} fileId The file ID of the request.
     * @param {module:api/FilesFilesApi~isFormPDFCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    isFormPDF(fileId, callback) {
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling isFormPDF");
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
      let returnType = BooleanWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/isformpdf', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the lockFile operation.
     * @callback module:api/FilesFilesApi~lockFileCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lock a file
     * Locks a file with the ID specified in the request.
     * @param {Number} fileId The file ID for locking.
     * @param {Object} opts Optional parameters
     * @param {module:models/LockFileParameters} [lockFileParameters] The parameters for locking a file.
     * @param {module:api/FilesFilesApi~lockFileCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileIntegerWrapper}
     */
    lockFile(fileId, opts, callback) {
      opts = opts || {};
      let postBody = opts['lockFileParameters'];
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling lockFile");
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
      let returnType = FileIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/lock', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the manageFormFilling operation.
     * @callback module:api/FilesFilesApi~manageFormFillingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Perform form filling action
     * Performs the specified form filling action.
     * @param {String} fileId 
     * @param {Object} opts Optional parameters
     * @param {module:models/ManageFormFillingDtoInteger} [manageFormFillingDtoInteger] 
     * @param {module:api/FilesFilesApi~manageFormFillingCallback} callback The callback function, accepting three arguments: error, data, response
     */
    manageFormFilling(fileId, opts, callback) {
      opts = opts || {};
      let postBody = opts['manageFormFillingDtoInteger'];
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling manageFormFilling");
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/manageformfilling', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the openEditFile operation.
     * @callback module:api/FilesFilesApi~openEditFileCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ConfigurationIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Open a file configuration
     * Returns the initialization configuration of a file to open it in the editor.
     * @param {Number} fileId The file ID to open.
     * @param {Object} opts Optional parameters
     * @param {Number} [version] The file version to open.
     * @param {Boolean} [view] Specifies if the document will be opened for viewing only or not.
     * @param {module:models/EditorType} [editorType] The editor type to open the file.
     * @param {Boolean} [edit] Specifies if the document is opened in the editing mode or not.
     * @param {Boolean} [fill] Specifies if the document is opened in the form-filling mode or not.
     * @param {module:api/FilesFilesApi~openEditFileCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ConfigurationIntegerWrapper}
     */
    openEditFile(fileId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling openEditFile");
      }

      let pathParams = {
        'fileId': fileId
      };
      let queryParams = {
        'version': opts['version'],
        'view': opts['view'],
        'editorType': opts['editorType'],
        'edit': opts['edit'],
        'fill': opts['fill']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ConfigurationIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/openedit', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the restoreFileVersion operation.
     * @callback module:api/FilesFilesApi~restoreFileVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EditHistoryArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Restore a file version
     * Restores a file version specified in the request.
     * @param {Number} fileId The file ID of the restore version.
     * @param {Object} opts Optional parameters
     * @param {Number} [version] The file version of the restore.
     * @param {String} [url] The file version URL of the restore.
     * @param {module:api/FilesFilesApi~restoreFileVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EditHistoryArrayWrapper}
     */
    restoreFileVersion(fileId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling restoreFileVersion");
      }

      let pathParams = {
        'fileId': fileId
      };
      let queryParams = {
        'version': opts['version'],
        'url': opts['url']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EditHistoryArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/restoreversion', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveEditingFileFromForm operation.
     * @callback module:api/FilesFilesApi~saveEditingFileFromFormCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save file edits
     * Saves edits to a file with the ID specified in the request.
     * @param {Number} fileId The editing file ID from the request.
     * @param {Object} opts Optional parameters
     * @param {String} [fileExtension] The editing file extension from the request.
     * @param {String} [downloadUri] The URI to download the editing file.
     * @param {File} [file] The request file stream.
     * @param {Boolean} [forcesave] Specifies whether to force save the file or not.
     * @param {module:api/FilesFilesApi~saveEditingFileFromFormCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileIntegerWrapper}
     */
    saveEditingFileFromForm(fileId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling saveEditingFileFromForm");
      }

      let pathParams = {
        'fileId': fileId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'FileExtension': opts['fileExtension'],
        'DownloadUri': opts['downloadUri'],
        'File': opts['file'],
        'Forcesave': opts['forcesave']
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = FileIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/saveediting', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveFileAsPdf operation.
     * @callback module:api/FilesFilesApi~saveFileAsPdfCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save a file as PDF
     * Saves a file with the identifier specified in the request as a PDF document.
     * @param {Number} id The file ID to save as PDF.
     * @param {Object} opts Optional parameters
     * @param {module:models/SaveAsPdfInteger} [saveAsPdfInteger] The parameters for saving file as PDF.
     * @param {module:api/FilesFilesApi~saveFileAsPdfCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileIntegerWrapper}
     */
    saveFileAsPdf(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['saveAsPdfInteger'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling saveFileAsPdf");
      }

      let pathParams = {
        'id': id
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
      let returnType = FileIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{id}/saveaspdf', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveFormRoleMapping operation.
     * @callback module:api/FilesFilesApi~saveFormRoleMappingCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FormRoleWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save form role mapping
     * Saves the form role mapping.
     * @param {String} fileId 
     * @param {Object} opts Optional parameters
     * @param {module:models/SaveFormRoleMappingDtoInteger} [saveFormRoleMappingDtoInteger] 
     * @param {module:api/FilesFilesApi~saveFormRoleMappingCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FormRoleWrapper}
     */
    saveFormRoleMapping(fileId, opts, callback) {
      opts = opts || {};
      let postBody = opts['saveFormRoleMappingDtoInteger'];
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling saveFormRoleMapping");
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
      let returnType = FormRoleWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/formrolemapping', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setCustomFilterTag operation.
     * @callback module:api/FilesFilesApi~setCustomFilterTagCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the Custom Filter editing mode
     * Sets the Custom Filter editing mode to a file with the ID specified in the request.
     * @param {Number} fileId The file ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/CustomFilterParameters} [customFilterParameters] The parameters for setting the Custom Filter editing mode.
     * @param {module:api/FilesFilesApi~setCustomFilterTagCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileIntegerWrapper}
     */
    setCustomFilterTag(fileId, opts, callback) {
      opts = opts || {};
      let postBody = opts['customFilterParameters'];
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling setCustomFilterTag");
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
      let returnType = FileIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/customfilter', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setExternalLink operation.
     * @callback module:api/FilesFilesApi~setExternalLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileShareWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set an external link
     * Sets an external link to a file with the ID specified in the request.
     * @param {Number} id The file ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/FileLinkRequest} [fileLinkRequest] The file external link parameters.
     * @param {module:api/FilesFilesApi~setExternalLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileShareWrapper}
     */
    setExternalLink(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['fileLinkRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setExternalLink");
      }

      let pathParams = {
        'id': id
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
      let returnType = FileShareWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{id}/links', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setFileOrder operation.
     * @callback module:api/FilesFilesApi~setFileOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set file order
     * Sets order of the file with ID specified in the request.
     * @param {Number} fileId The file unique identifier.
     * @param {Object} opts Optional parameters
     * @param {module:models/OrderRequestDto} [orderRequestDto] The file order information.
     * @param {module:api/FilesFilesApi~setFileOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileIntegerWrapper}
     */
    setFileOrder(fileId, opts, callback) {
      opts = opts || {};
      let postBody = opts['orderRequestDto'];
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling setFileOrder");
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
      let returnType = FileIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/{fileId}/order', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setFilesOrder operation.
     * @callback module:api/FilesFilesApi~setFilesOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileIntegerArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set order of files
     * Sets order of the files.
     * @param {Object} opts Optional parameters
     * @param {module:models/OrdersRequestDtoInteger} [ordersRequestDtoInteger] 
     * @param {module:api/FilesFilesApi~setFilesOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileIntegerArrayWrapper}
     */
    setFilesOrder(opts, callback) {
      opts = opts || {};
      let postBody = opts['ordersRequestDtoInteger'];

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
      let returnType = FileIntegerArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/order', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the startEditFile operation.
     * @callback module:api/FilesFilesApi~startEditFileCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start file editing
     * Informs about opening a file with the ID specified in the request for editing, locking it from being deleted or moved (this method is called by the mobile editors).
     * @param {Number} fileId The file ID to start editing.
     * @param {Object} opts Optional parameters
     * @param {module:models/StartEdit} [startEdit] The file parameters to start editing.
     * @param {module:api/FilesFilesApi~startEditFileCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    startEditFile(fileId, opts, callback) {
      opts = opts || {};
      let postBody = opts['startEdit'];
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling startEditFile");
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

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StringWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/startedit', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the startFillingFile operation.
     * @callback module:api/FilesFilesApi~startFillingFileCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start file filling
     * Starts filling a file with the ID specified in the request.
     * @param {Number} fileId The file ID to start filling.
     * @param {module:api/FilesFilesApi~startFillingFileCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileIntegerWrapper}
     */
    startFillingFile(fileId, callback) {
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling startFillingFile");
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
      let returnType = FileIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/startfilling', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the trackEditFile operation.
     * @callback module:api/FilesFilesApi~trackEditFileCallback
     * @param {String} error Error message, if any.
     * @param {module:models/KeyValuePairBooleanStringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Track file editing
     * Tracks file changes when editing.
     * @param {Number} fileId The file ID to track editing changes.
     * @param {Object} opts Optional parameters
     * @param {String} [tabId] The tab ID to track editing changes.
     * @param {String} [docKeyForTrack] The document key for tracking changes.
     * @param {Boolean} [isFinish] Specifies whether to finish file tracking or not.
     * @param {module:api/FilesFilesApi~trackEditFileCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/KeyValuePairBooleanStringWrapper}
     */
    trackEditFile(fileId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling trackEditFile");
      }

      let pathParams = {
        'fileId': fileId
      };
      let queryParams = {
        'tabId': opts['tabId'],
        'docKeyForTrack': opts['docKeyForTrack'],
        'isFinish': opts['isFinish']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = KeyValuePairBooleanStringWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/trackeditfile', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateFile operation.
     * @callback module:api/FilesFilesApi~updateFileCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a file
     * Updates the information of the selected file with the parameters specified in the request.
     * @param {Number} fileId The file ID to update.
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateFile} [updateFile] The parameters for updating a file.
     * @param {module:api/FilesFilesApi~updateFileCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileIntegerWrapper}
     */
    updateFile(fileId, opts, callback) {
      opts = opts || {};
      let postBody = opts['updateFile'];
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling updateFile");
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

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = FileIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
