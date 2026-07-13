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
import ApplyFilterOption from '../models/ApplyFilterOption';
import CheckUploadRequest from '../models/CheckUploadRequest';
import CreateFolder from '../models/CreateFolder';
import DeleteFolder from '../models/DeleteFolder';
import FileEntryArrayWrapper from '../models/FileEntryArrayWrapper';
import FileIntegerWrapper from '../models/FileIntegerWrapper';
import FileOperationArrayWrapper from '../models/FileOperationArrayWrapper';
import FileShareWrapper from '../models/FileShareWrapper';
import FilesStatisticsResultWrapper from '../models/FilesStatisticsResultWrapper';
import FilterType from '../models/FilterType';
import FolderContentIntegerArrayWrapper from '../models/FolderContentIntegerArrayWrapper';
import FolderContentIntegerWrapper from '../models/FolderContentIntegerWrapper';
import FolderIntegerWrapper from '../models/FolderIntegerWrapper';
import FormsItemArrayWrapper from '../models/FormsItemArrayWrapper';
import HistoryArrayWrapper from '../models/HistoryArrayWrapper';
import ObjectWrapper from '../models/ObjectWrapper';
import OrderRequestDto from '../models/OrderRequestDto';
import STRINGArrayWrapper from '../models/STRINGArrayWrapper';
import SearchArea from '../models/SearchArea';
import SortOrder from '../models/SortOrder';
import UploadRequestDto from '../models/UploadRequestDto';

/**
* FilesFolders service.
* @module api/FilesFoldersApi
* @version 3.2.0
*/
export default class FilesFoldersApi {

    /**
    * Constructs a new FilesFoldersApi. 
    * @alias module:api/FilesFoldersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the checkUpload operation.
     * @callback module:api/FilesFoldersApi~checkUploadCallback
     * @param {String} error Error message, if any.
     * @param {module:models/STRINGArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check file uploads
     * Checks the file uploads to the folder with the ID specified in the request.
     * @param {Number} folderId The folder ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/CheckUploadRequest} [checkUploadRequest] The request parameters for checking file uploads.
     * @param {module:api/FilesFoldersApi~checkUploadCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/STRINGArrayWrapper}
     */
    checkUpload(folderId, opts, callback) {
      opts = opts || {};
      let postBody = opts['checkUploadRequest'];
      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling checkUpload");
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
      let returnType = STRINGArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/{folderId}/upload/check', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createFolder operation.
     * @callback module:api/FilesFoldersApi~createFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a folder
     * Creates a new folder with the title specified in the request. The parent folder ID can be also specified.
     * @param {Number} folderId The folder ID for the folder creation.
     * @param {Object} opts Optional parameters
     * @param {module:models/CreateFolder} [createFolder] The parameters for creating a folder.
     * @param {module:api/FilesFoldersApi~createFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderIntegerWrapper}
     */
    createFolder(folderId, opts, callback) {
      opts = opts || {};
      let postBody = opts['createFolder'];
      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling createFolder");
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
      let returnType = FolderIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/folder/{folderId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFolder operation.
     * @callback module:api/FilesFoldersApi~deleteFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileOperationArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a folder
     * Deletes a folder with the ID specified in the request.
     * @param {Number} folderId The folder ID to delete.
     * @param {Object} opts Optional parameters
     * @param {module:models/DeleteFolder} [deleteFolder] The parameters for deleting a folder.
     * @param {module:api/FilesFoldersApi~deleteFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileOperationArrayWrapper}
     */
    deleteFolder(folderId, opts, callback) {
      opts = opts || {};
      let postBody = opts['deleteFolder'];
      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling deleteFolder");
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
      let returnType = FileOperationArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/folder/{folderId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFilesUsedSpace operation.
     * @callback module:api/FilesFoldersApi~getFilesUsedSpaceCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FilesStatisticsResultWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get used space of files
     * Returns the used space of files in the root folders.
     * @param {module:api/FilesFoldersApi~getFilesUsedSpaceCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FilesStatisticsResultWrapper}
     */
    getFilesUsedSpace(callback) {
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
      let returnType = FilesStatisticsResultWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/filesusedspace', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFolder operation.
     * @callback module:api/FilesFoldersApi~getFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FormsItemArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get folder form filter
     * Returns the form filter of a folder with the ID specified in the request.
     * @param {Number} folderId The request folder ID.
     * @param {module:api/FilesFoldersApi~getFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FormsItemArrayWrapper}
     */
    getFolder(folderId, callback) {
      let postBody = null;
      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling getFolder");
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

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FormsItemArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/{folderId}/formfilter', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFolderByFolderId operation.
     * @callback module:api/FilesFoldersApi~getFolderByFolderIdCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderContentIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a folder by ID
     * Returns the detailed list of files and folders located in the folder with the ID specified in the request.
     * @param {Number} folderId The folder ID of the request.
     * @param {Object} opts Optional parameters
     * @param {String} [userIdOrGroupId] The user or group ID.
     * @param {module:models/FilterType} [filterType] The filter type.
     * @param {Number} [roomId] The room ID.
     * @param {Boolean} [excludeSubject] Specifies whether to exclude search by user or group ID.
     * @param {module:models/ApplyFilterOption} [applyFilterOption] Specifies whether to return only files, only folders or all elements from the specified folder.
     * @param {String} [extension] Specifies whether to search for the specific file extension.
     * @param {module:models/SearchArea} [searchArea] The search area.
     * @param {String} [formsItemKey] The forms item key.
     * @param {String} [formsItemType] The forms item type.
     * @param {Number} [count] The maximum number of items to retrieve in the request.
     * @param {Number} [startIndex] The zero-based index of the first item to retrieve in a paginated request.
     * @param {String} [sortBy] Specifies the property used for sorting the folder request results.
     * @param {module:models/SortOrder} [sortOrder] The order in which the results are sorted.
     * @param {String} [filterValue] The text value used as a filter parameter for folder content queries.
     * @param {module:api/FilesFoldersApi~getFolderByFolderIdCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderContentIntegerWrapper}
     */
    getFolderByFolderId(folderId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling getFolderByFolderId");
      }

      let pathParams = {
        'folderId': folderId
      };
      let queryParams = {
        'userIdOrGroupId': opts['userIdOrGroupId'],
        'filterType': opts['filterType'],
        'roomId': opts['roomId'],
        'excludeSubject': opts['excludeSubject'],
        'applyFilterOption': opts['applyFilterOption'],
        'extension': opts['extension'],
        'searchArea': opts['searchArea'],
        'formsItemKey': opts['formsItemKey'],
        'formsItemType': opts['formsItemType'],
        'count': opts['count'],
        'startIndex': opts['startIndex'],
        'sortBy': opts['sortBy'],
        'sortOrder': opts['sortOrder'],
        'filterValue': opts['filterValue']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FolderContentIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/{folderId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFolderHistory operation.
     * @callback module:api/FilesFoldersApi~getFolderHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:models/HistoryArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get folder history
     * Returns the activity history of a folder with a specified identifier.
     * @param {Number} folderId The folder ID of the history request.
     * @param {Object} opts Optional parameters
     * @param {module:models/ApiDateTime} [fromDate] The start date of the history request.
     * @param {module:models/ApiDateTime} [toDate] The end date of the history request.
     * @param {Number} [count] The number of records to retrieve for the folder history.
     * @param {Number} [startIndex] The starting index from which the history records are retrieved in the request.
     * @param {module:api/FilesFoldersApi~getFolderHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/HistoryArrayWrapper}
     */
    getFolderHistory(folderId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling getFolderHistory");
      }

      let pathParams = {
        'folderId': folderId
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
        '/api/2.0/files/folder/{folderId}/log', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFolderInfo operation.
     * @callback module:api/FilesFoldersApi~getFolderInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get folder information
     * Returns the detailed information about a folder with the ID specified in the request.
     * @param {Number} folderId The request folder ID.
     * @param {module:api/FilesFoldersApi~getFolderInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderIntegerWrapper}
     */
    getFolderInfo(folderId, callback) {
      let postBody = null;
      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling getFolderInfo");
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

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FolderIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/folder/{folderId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFolderPath operation.
     * @callback module:api/FilesFoldersApi~getFolderPathCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileEntryArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the folder path
     * Returns a path to the folder with the ID specified in the request.
     * @param {Number} folderId The request folder ID.
     * @param {module:api/FilesFoldersApi~getFolderPathCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileEntryArrayWrapper}
     */
    getFolderPath(folderId, callback) {
      let postBody = null;
      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling getFolderPath");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FileEntryArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/folder/{folderId}/path', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFolderPrimaryExternalLink operation.
     * @callback module:api/FilesFoldersApi~getFolderPrimaryExternalLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileShareWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get primary external link
     * Returns the primary external link by the identifier specified in the request.
     * @param {Number} id The request folder ID.
     * @param {module:api/FilesFoldersApi~getFolderPrimaryExternalLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileShareWrapper}
     */
    getFolderPrimaryExternalLink(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFolderPrimaryExternalLink");
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
      let returnType = FileShareWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/folder/{id}/link', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFolders operation.
     * @callback module:api/FilesFoldersApi~getFoldersCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileEntryArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get subfolders
     * Returns a list of all the subfolders from a folder with the ID specified in the request.
     * @param {Number} folderId The request folder ID.
     * @param {module:api/FilesFoldersApi~getFoldersCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileEntryArrayWrapper}
     */
    getFolders(folderId, callback) {
      let postBody = null;
      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling getFolders");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FileEntryArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/{folderId}/subfolders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMyFolder operation.
     * @callback module:api/FilesFoldersApi~getMyFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderContentIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the \"My documents\" section
     * Returns the detailed list of files and folders located in the \"My documents\" section.
     * @param {Object} opts Optional parameters
     * @param {String} [userIdOrGroupId] The user or group ID.
     * @param {module:models/FilterType} [filterType] The filter type.
     * @param {module:models/ApplyFilterOption} [applyFilterOption] Specifies whether to return only files, only folders or all elements.
     * @param {Number} [count] The maximum number of items to retrieve in the response.
     * @param {Number} [startIndex] The starting position of the items to be retrieved.
     * @param {String} [sortBy] The property used to specify the sorting criteria for folder contents.
     * @param {module:models/SortOrder} [sortOrder] The order in which the results are sorted.
     * @param {String} [filterValue] The text used for filtering or searching folder contents.
     * @param {} [fields] Comma-separated list of fields to include in the response
     * @param {module:api/FilesFoldersApi~getMyFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderContentIntegerWrapper}
     */
    getMyFolder(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'userIdOrGroupId': opts['userIdOrGroupId'],
        'filterType': opts['filterType'],
        'applyFilterOption': opts['applyFilterOption'],
        'count': opts['count'],
        'startIndex': opts['startIndex'],
        'sortBy': opts['sortBy'],
        'sortOrder': opts['sortOrder'],
        'filterValue': opts['filterValue'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FolderContentIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/@my', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getNewFolderItems operation.
     * @callback module:api/FilesFoldersApi~getNewFolderItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileEntryArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get new folder items
     * Returns a list of all the new items from a folder with the ID specified in the request.
     * @param {Number} folderId The request folder ID.
     * @param {module:api/FilesFoldersApi~getNewFolderItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileEntryArrayWrapper}
     */
    getNewFolderItems(folderId, callback) {
      let postBody = null;
      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling getNewFolderItems");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FileEntryArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/{folderId}/news', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPrivacyFolder operation.
     * @callback module:api/FilesFoldersApi~getPrivacyFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderContentIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the \"Private Room\" section
     * Returns the detailed list of files and folders located in the \"Private Room\" section.
     * @param {Object} opts Optional parameters
     * @param {String} [userIdOrGroupId] The user or group ID.
     * @param {module:models/FilterType} [filterType] The filter type.
     * @param {Number} [count] The maximum number of items to retrieve in the request.
     * @param {Number} [startIndex] The zero-based index of the first item to retrieve in a paginated list.
     * @param {String} [sortBy] Specifies the field by which the folder content should be sorted.
     * @param {module:models/SortOrder} [sortOrder] The order in which the results are sorted.
     * @param {String} [filterValue] The text used as a filter or search criterion for folder content queries.
     * @param {} [fields] Comma-separated list of fields to include in the response
     * @param {module:api/FilesFoldersApi~getPrivacyFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderContentIntegerWrapper}
     */
    getPrivacyFolder(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'userIdOrGroupId': opts['userIdOrGroupId'],
        'filterType': opts['filterType'],
        'count': opts['count'],
        'startIndex': opts['startIndex'],
        'sortBy': opts['sortBy'],
        'sortOrder': opts['sortOrder'],
        'filterValue': opts['filterValue'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FolderContentIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/@privacy', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRootFolders operation.
     * @callback module:api/FilesFoldersApi~getRootFoldersCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderContentIntegerArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get filtered sections
     * Returns all the sections matching the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {String} [userIdOrGroupId] The user or group ID.
     * @param {module:models/FilterType} [filterType] The filter type.
     * @param {Boolean} [withoutTrash] Specifies whether to return the \"Trash\" section or not.
     * @param {Number} [count] The maximum number of items to retrieve in the response.
     * @param {Number} [startIndex] The starting position of the items to be retrieved.
     * @param {String} [sortBy] Specifies the field by which the folder content should be sorted.
     * @param {module:models/SortOrder} [sortOrder] The order in which the results are sorted.
     * @param {String} [filterValue] The text used as a filter for searching or retrieving folder contents.
     * @param {} [fields] Comma-separated list of fields to include in the response
     * @param {module:api/FilesFoldersApi~getRootFoldersCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderContentIntegerArrayWrapper}
     */
    getRootFolders(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'userIdOrGroupId': opts['userIdOrGroupId'],
        'filterType': opts['filterType'],
        'withoutTrash': opts['withoutTrash'],
        'count': opts['count'],
        'startIndex': opts['startIndex'],
        'sortBy': opts['sortBy'],
        'sortOrder': opts['sortOrder'],
        'filterValue': opts['filterValue'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FolderContentIntegerArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/@root', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTrashFolder operation.
     * @callback module:api/FilesFoldersApi~getTrashFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderContentIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the \"Trash\" section
     * Returns the detailed list of files and folders located in the \"Trash\" section.
     * @param {Object} opts Optional parameters
     * @param {String} [userIdOrGroupId] The user or group ID.
     * @param {module:models/FilterType} [filterType] The filter type.
     * @param {module:models/ApplyFilterOption} [applyFilterOption] Specifies whether to return only files, only folders or all elements.
     * @param {Number} [count] The maximum number of items to retrieve in the response.
     * @param {Number} [startIndex] The starting position of the items to be retrieved.
     * @param {String} [sortBy] The property used to specify the sorting criteria for folder contents.
     * @param {module:models/SortOrder} [sortOrder] The order in which the results are sorted.
     * @param {String} [filterValue] The text used for filtering or searching folder contents.
     * @param {} [fields] Comma-separated list of fields to include in the response
     * @param {module:api/FilesFoldersApi~getTrashFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderContentIntegerWrapper}
     */
    getTrashFolder(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'userIdOrGroupId': opts['userIdOrGroupId'],
        'filterType': opts['filterType'],
        'applyFilterOption': opts['applyFilterOption'],
        'count': opts['count'],
        'startIndex': opts['startIndex'],
        'sortBy': opts['sortBy'],
        'sortOrder': opts['sortOrder'],
        'filterValue': opts['filterValue'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FolderContentIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/@trash', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the insertFile operation.
     * @callback module:api/FilesFoldersApi~insertFileCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert a file
     * Inserts a file specified in the request to the selected folder by single file uploading.
     * @param {Number} folderId The folder ID for inserting a file.
     * @param {Object} opts Optional parameters
     * @param {File} [insertFileFile] The file to be inserted.
     * @param {String} [insertFileTitle] The file title to be inserted.
     * @param {Boolean} [insertFileCreateNewIfExist] Specifies whether to create a new file if it already exists or not.
     * @param {Boolean} [insertFileKeepConvertStatus] Specifies whether to keep the file converting status or not.
     * @param {Boolean} [insertFileStreamCanRead] 
     * @param {Boolean} [insertFileStreamCanWrite] 
     * @param {Boolean} [insertFileStreamCanSeek] 
     * @param {Boolean} [insertFileStreamCanTimeout] 
     * @param {Number} [insertFileStreamLength] 
     * @param {Number} [insertFileStreamPosition] 
     * @param {Number} [insertFileStreamReadTimeout] 
     * @param {Number} [insertFileStreamWriteTimeout] 
     * @param {module:api/FilesFoldersApi~insertFileCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileIntegerWrapper}
     */
    insertFile(folderId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling insertFile");
      }

      let pathParams = {
        'folderId': folderId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'InsertFile.File': opts['insertFileFile'],
        'InsertFile.Title': opts['insertFileTitle'],
        'InsertFile.CreateNewIfExist': opts['insertFileCreateNewIfExist'],
        'InsertFile.KeepConvertStatus': opts['insertFileKeepConvertStatus'],
        'InsertFile.Stream.CanRead': opts['insertFileStreamCanRead'],
        'InsertFile.Stream.CanWrite': opts['insertFileStreamCanWrite'],
        'InsertFile.Stream.CanSeek': opts['insertFileStreamCanSeek'],
        'InsertFile.Stream.CanTimeout': opts['insertFileStreamCanTimeout'],
        'InsertFile.Stream.Length': opts['insertFileStreamLength'],
        'InsertFile.Stream.Position': opts['insertFileStreamPosition'],
        'InsertFile.Stream.ReadTimeout': opts['insertFileStreamReadTimeout'],
        'InsertFile.Stream.WriteTimeout': opts['insertFileStreamWriteTimeout']
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = FileIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/{folderId}/insert', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the insertFileToMyFromBody operation.
     * @callback module:api/FilesFoldersApi~insertFileToMyFromBodyCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert a file to the \"My documents\" section
     * Inserts a file specified in the request to the \"My documents\" section by single file uploading.
     * @param {Object} opts Optional parameters
     * @param {File} [file] The file to be inserted.
     * @param {String} [title] The file title to be inserted.
     * @param {Boolean} [createNewIfExist] Specifies whether to create a new file if it already exists or not.
     * @param {Boolean} [keepConvertStatus] Specifies whether to keep the file converting status or not.
     * @param {Boolean} [streamCanRead] 
     * @param {Boolean} [streamCanWrite] 
     * @param {Boolean} [streamCanSeek] 
     * @param {Boolean} [streamCanTimeout] 
     * @param {Number} [streamLength] 
     * @param {Number} [streamPosition] 
     * @param {Number} [streamReadTimeout] 
     * @param {Number} [streamWriteTimeout] 
     * @param {module:api/FilesFoldersApi~insertFileToMyFromBodyCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileIntegerWrapper}
     */
    insertFileToMyFromBody(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'File': opts['file'],
        'Title': opts['title'],
        'CreateNewIfExist': opts['createNewIfExist'],
        'KeepConvertStatus': opts['keepConvertStatus'],
        'Stream.CanRead': opts['streamCanRead'],
        'Stream.CanWrite': opts['streamCanWrite'],
        'Stream.CanSeek': opts['streamCanSeek'],
        'Stream.CanTimeout': opts['streamCanTimeout'],
        'Stream.Length': opts['streamLength'],
        'Stream.Position': opts['streamPosition'],
        'Stream.ReadTimeout': opts['streamReadTimeout'],
        'Stream.WriteTimeout': opts['streamWriteTimeout']
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = FileIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/@my/insert', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the renameFolder operation.
     * @callback module:api/FilesFoldersApi~renameFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Rename a folder
     * Renames the selected folder with a new title specified in the request.
     * @param {Number} folderId The folder ID for the folder creation.
     * @param {Object} opts Optional parameters
     * @param {module:models/CreateFolder} [createFolder] The parameters for creating a folder.
     * @param {module:api/FilesFoldersApi~renameFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderIntegerWrapper}
     */
    renameFolder(folderId, opts, callback) {
      opts = opts || {};
      let postBody = opts['createFolder'];
      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling renameFolder");
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
      let returnType = FolderIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/folder/{folderId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setFolderOrder operation.
     * @callback module:api/FilesFoldersApi~setFolderOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set folder order
     * Sets the file order in the folder with ID specified in the request.
     * @param {Number} folderId The folder unique identifier.
     * @param {Object} opts Optional parameters
     * @param {module:models/OrderRequestDto} [orderRequestDto] The folder order information.
     * @param {module:api/FilesFoldersApi~setFolderOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderIntegerWrapper}
     */
    setFolderOrder(folderId, opts, callback) {
      opts = opts || {};
      let postBody = opts['orderRequestDto'];
      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling setFolderOrder");
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
      let returnType = FolderIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/folder/{folderId}/order', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadFile operation.
     * @callback module:api/FilesFoldersApi~uploadFileCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ObjectWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload a file
     * Uploads a file specified in the request to the selected folder by single file uploading or standart multipart/form-data method.   **Note**:  You can upload files in two different ways:   <ol>  <li>Using single file upload. You should set the Content-Type and Content-Disposition headers to specify a file name and content type, and send the file to the request body.</li>  <li>Using standart multipart/form-data method.</li>  </ol>
     * @param {Number} folderId The folder ID to upload a file.
     * @param {Object} opts Optional parameters
     * @param {module:models/UploadRequestDto} [uploadRequestDto] The request parameters for uploading a file.
     * @param {module:api/FilesFoldersApi~uploadFileCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ObjectWrapper}
     */
    uploadFile(folderId, opts, callback) {
      opts = opts || {};
      let postBody = opts['uploadRequestDto'];
      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling uploadFile");
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
        '/api/2.0/files/{folderId}/upload', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadFileToMy operation.
     * @callback module:api/FilesFoldersApi~uploadFileToMyCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ObjectWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload a file to the \"My documents\" section
     * Uploads a file specified in the request to the \"My documents\" section by single file uploading or standart multipart/form-data method.   **Note**:  You can upload files in two different ways:   <ol>  <li>Using single file upload. You should set the Content-Type and Content-Disposition headers to specify a file name and content type, and send the file to the request body.</li>  <li>Using standart multipart/form-data method.</li>  </ol>
     * @param {Object} opts Optional parameters
     * @param {module:models/UploadRequestDto} [inDto] The request parameters for uploading a file.
     * @param {module:api/FilesFoldersApi~uploadFileToMyCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ObjectWrapper}
     */
    uploadFileToMy(opts, callback) {
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
      let returnType = ObjectWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/@my/upload', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
