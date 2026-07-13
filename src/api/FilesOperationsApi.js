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
import BaseBatchRequestDto from '../models/BaseBatchRequestDto';
import BatchRequestDto from '../models/BatchRequestDto';
import CheckConversionRequestDtoInteger from '../models/CheckConversionRequestDtoInteger';
import CheckDestFolderWrapper from '../models/CheckDestFolderWrapper';
import ConversationResultArrayWrapper from '../models/ConversationResultArrayWrapper';
import DeleteBatchRequestDto from '../models/DeleteBatchRequestDto';
import DeleteVersionBatchRequestDto from '../models/DeleteVersionBatchRequestDto';
import DownloadRequestDto from '../models/DownloadRequestDto';
import DuplicateRequestDto from '../models/DuplicateRequestDto';
import FileEntryArrayWrapper from '../models/FileEntryArrayWrapper';
import FileOperationArrayWrapper from '../models/FileOperationArrayWrapper';
import FileOperationType from '../models/FileOperationType';
import FileOperationWrapper from '../models/FileOperationWrapper';
import ObjectWrapper from '../models/ObjectWrapper';
import SessionRequest from '../models/SessionRequest';
import StringWrapper from '../models/StringWrapper';
import UpdateComment from '../models/UpdateComment';

/**
* FilesOperations service.
* @module api/FilesOperationsApi
* @version 3.2.0
*/
export default class FilesOperationsApi {

    /**
    * Constructs a new FilesOperationsApi. 
    * @alias module:api/FilesOperationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the bulkDownload operation.
     * @callback module:api/FilesOperationsApi~bulkDownloadCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileOperationArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bulk download
     * Starts the download process of files and folders with the IDs specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/DownloadRequestDto} [downloadRequestDto] 
     * @param {module:api/FilesOperationsApi~bulkDownloadCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileOperationArrayWrapper}
     */
    bulkDownload(opts, callback) {
      opts = opts || {};
      let postBody = opts['downloadRequestDto'];

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
      let returnType = FileOperationArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/fileops/bulkdownload', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the checkConversionStatus operation.
     * @callback module:api/FilesOperationsApi~checkConversionStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ConversationResultArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get conversion status
     * Checks the conversion status of a file with the ID specified in the request.
     * @param {Number} fileId The file ID to check conversion status.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [start] Specifies whether a conversion operation is started or not.
     * @param {module:api/FilesOperationsApi~checkConversionStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ConversationResultArrayWrapper}
     */
    checkConversionStatus(fileId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling checkConversionStatus");
      }

      let pathParams = {
        'fileId': fileId
      };
      let queryParams = {
        'start': opts['start']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ConversationResultArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/checkconversion', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the checkMoveOrCopyBatchItems operation.
     * @callback module:api/FilesOperationsApi~checkMoveOrCopyBatchItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileEntryArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check and move or copy to a folder
     * Checks if files or folders can be moved or copied to the specified folder, moves or copies them, and returns their information.
     * @param {Object} opts Optional parameters
     * @param {module:models/BatchRequestDto} [inDto] The request parameters for copying/moving files.
     * @param {module:api/FilesOperationsApi~checkMoveOrCopyBatchItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileEntryArrayWrapper}
     */
    checkMoveOrCopyBatchItems(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'inDto': opts['inDto']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FileEntryArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/fileops/move', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the checkMoveOrCopyDestFolder operation.
     * @callback module:api/FilesOperationsApi~checkMoveOrCopyDestFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:models/CheckDestFolderWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check for moving or copying to a folder
     * Checks if files can be moved or copied to the specified folder.
     * @param {Object} opts Optional parameters
     * @param {module:models/BatchRequestDto} [inDto] The request parameters for copying/moving files.
     * @param {module:api/FilesOperationsApi~checkMoveOrCopyDestFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/CheckDestFolderWrapper}
     */
    checkMoveOrCopyDestFolder(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'inDto': opts['inDto']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CheckDestFolderWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/fileops/checkdestfolder', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the copyBatchItems operation.
     * @callback module:api/FilesOperationsApi~copyBatchItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileOperationArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Copy to the folder
     * Copies all the selected files and folders to the folder with the ID specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/BatchRequestDto} [batchRequestDto] 
     * @param {module:api/FilesOperationsApi~copyBatchItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileOperationArrayWrapper}
     */
    copyBatchItems(opts, callback) {
      opts = opts || {};
      let postBody = opts['batchRequestDto'];

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
      let returnType = FileOperationArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/fileops/copy', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createUploadSession operation.
     * @callback module:api/FilesOperationsApi~createUploadSessionCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ObjectWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Chunked upload
     * Creates the session to upload large files in multiple chunks to the folder with the ID specified in the request.   **Note**: Each chunk can have different length but the length should be multiple of <b>512</b> and greater or equal to <b>10 mb</b>. Last chunk can have any size.  After the initial response to the request with the <b>200 OK</b> status, you must get the <em>location</em> field value from the response. Send all your chunks to this location.  Each chunk must be sent in the exact order the chunks appear in the file.  After receiving each chunk, the server will respond with the current information about the upload session if no errors occurred.  When the number of bytes uploaded is equal to the number of bytes you sent in the initial request, the server responds with the <b>201 Created</b> status and sends you information about the uploaded file.  Information about created session which includes:  <ul>  <li><b>id:</b> unique ID of this upload session,</li>  <li><b>created:</b> UTC time when the session was created,</li>  <li><b>expired:</b> UTC time when the session will expire if no chunks are sent before that time,</li>  <li><b>location:</b> URL where you should send your next chunk,</li>  <li><b>bytes_uploaded:</b> number of bytes uploaded for the specific upload ID,</li>  <li><b>bytes_total:</b> total number of bytes which will be uploaded.</li>  </ul>
     * @param {Number} folderId The folder ID of the session.
     * @param {Object} opts Optional parameters
     * @param {module:models/SessionRequest} [sessionRequest] The session parameters.
     * @param {module:api/FilesOperationsApi~createUploadSessionCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ObjectWrapper}
     */
    createUploadSession(folderId, opts, callback) {
      opts = opts || {};
      let postBody = opts['sessionRequest'];
      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling createUploadSession");
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
      let returnType = ObjectWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/{folderId}/upload/create_session', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBatchItems operation.
     * @callback module:api/FilesOperationsApi~deleteBatchItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileOperationArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete files and folders
     * Deletes the files and folders with the IDs specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/DeleteBatchRequestDto} [deleteBatchRequestDto] 
     * @param {module:api/FilesOperationsApi~deleteBatchItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileOperationArrayWrapper}
     */
    deleteBatchItems(opts, callback) {
      opts = opts || {};
      let postBody = opts['deleteBatchRequestDto'];

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
      let returnType = FileOperationArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/fileops/delete', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFileVersions operation.
     * @callback module:api/FilesOperationsApi~deleteFileVersionsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileOperationWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete file versions
     * Deletes the file versions with the IDs specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/DeleteVersionBatchRequestDto} [deleteVersionBatchRequestDto] 
     * @param {module:api/FilesOperationsApi~deleteFileVersionsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileOperationWrapper}
     */
    deleteFileVersions(opts, callback) {
      opts = opts || {};
      let postBody = opts['deleteVersionBatchRequestDto'];

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
      let returnType = FileOperationWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/fileops/deleteversion', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the duplicateBatchItems operation.
     * @callback module:api/FilesOperationsApi~duplicateBatchItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileOperationArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Duplicate files and folders
     * Duplicates all the selected files and folders.
     * @param {Object} opts Optional parameters
     * @param {module:models/DuplicateRequestDto} [duplicateRequestDto] 
     * @param {module:api/FilesOperationsApi~duplicateBatchItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileOperationArrayWrapper}
     */
    duplicateBatchItems(opts, callback) {
      opts = opts || {};
      let postBody = opts['duplicateRequestDto'];

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
      let returnType = FileOperationArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/fileops/duplicate', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the emptyTrash operation.
     * @callback module:api/FilesOperationsApi~emptyTrashCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileOperationArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Empty the \"Trash\" folder
     * Deletes all the files and folders from the \"Trash\" folder.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [single] Specifies whether to return only the current operation
     * @param {module:api/FilesOperationsApi~emptyTrashCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileOperationArrayWrapper}
     */
    emptyTrash(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'Single': opts['single']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FileOperationArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/fileops/emptytrash', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOperationStatuses operation.
     * @callback module:api/FilesOperationsApi~getOperationStatusesCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileOperationArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get active file operations
     * Returns a list of all the active file operations.
     * @param {Object} opts Optional parameters
     * @param {String} [id] The ID of the file operation.
     * @param {module:api/FilesOperationsApi~getOperationStatusesCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileOperationArrayWrapper}
     */
    getOperationStatuses(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'id': opts['id']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FileOperationArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/fileops', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOperationStatusesByType operation.
     * @callback module:api/FilesOperationsApi~getOperationStatusesByTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileOperationArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get file operation statuses
     * Retrieves the statuses of operations filtered by the specified operation type.
     * @param {module:models/FileOperationType} operationType Specifies the type of file operation to be retrieved.
     * @param {Object} opts Optional parameters
     * @param {String} [id] The ID of the file operation.
     * @param {module:api/FilesOperationsApi~getOperationStatusesByTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileOperationArrayWrapper}
     */
    getOperationStatusesByType(operationType, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'operationType' is set
      if (operationType === undefined || operationType === null) {
        throw new Error("Missing the required parameter 'operationType' when calling getOperationStatusesByType");
      }

      let pathParams = {
        'operationType': operationType
      };
      let queryParams = {
        'id': opts['id']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FileOperationArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/fileops/{operationType}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the markAsRead operation.
     * @callback module:api/FilesOperationsApi~markAsReadCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileOperationArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark as read
     * Marks the files and folders with the IDs specified in the request as read.
     * @param {Object} opts Optional parameters
     * @param {module:models/BaseBatchRequestDto} [baseBatchRequestDto] 
     * @param {module:api/FilesOperationsApi~markAsReadCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileOperationArrayWrapper}
     */
    markAsRead(opts, callback) {
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
      let returnType = FileOperationArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/fileops/markasread', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the moveBatchItems operation.
     * @callback module:api/FilesOperationsApi~moveBatchItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileOperationArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Move or copy to a folder
     * Moves or copies all the selected files and folders to the folder with the ID specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/BatchRequestDto} [batchRequestDto] 
     * @param {module:api/FilesOperationsApi~moveBatchItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileOperationArrayWrapper}
     */
    moveBatchItems(opts, callback) {
      opts = opts || {};
      let postBody = opts['batchRequestDto'];

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
      let returnType = FileOperationArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/fileops/move', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the startFileConversion operation.
     * @callback module:api/FilesOperationsApi~startFileConversionCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ConversationResultArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start file conversion
     * Starts a conversion operation of a file with the ID specified in the request.
     * @param {Number} fileId The file ID to start conversion proccess.
     * @param {Object} opts Optional parameters
     * @param {module:models/CheckConversionRequestDtoInteger} [checkConversionRequestDtoInteger] The parameters for checking file conversion.
     * @param {module:api/FilesOperationsApi~startFileConversionCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ConversationResultArrayWrapper}
     */
    startFileConversion(fileId, opts, callback) {
      opts = opts || {};
      let postBody = opts['checkConversionRequestDtoInteger'];
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling startFileConversion");
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
      let returnType = ConversationResultArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/checkconversion', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the terminateTasks operation.
     * @callback module:api/FilesOperationsApi~terminateTasksCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileOperationArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Finish active operations
     * Finishes an operation with the ID specified in the request or all the active operations.
     * @param {String} id The operation ID of the request.
     * @param {module:api/FilesOperationsApi~terminateTasksCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileOperationArrayWrapper}
     */
    terminateTasks(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling terminateTasks");
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

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FileOperationArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/fileops/terminate/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateFileComment operation.
     * @callback module:api/FilesOperationsApi~updateFileCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a comment
     * Updates a comment in a file with the ID specified in the request.
     * @param {Number} fileId The file ID where the comment is located.
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateComment} [updateComment] The parameters for updating a comment.
     * @param {module:api/FilesOperationsApi~updateFileCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    updateFileComment(fileId, opts, callback) {
      opts = opts || {};
      let postBody = opts['updateComment'];
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling updateFileComment");
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
      let returnType = StringWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/file/{fileId}/comment', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
