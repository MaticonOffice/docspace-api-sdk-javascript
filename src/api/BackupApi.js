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
import BackupDto from '../models/BackupDto';
import BackupHistoryRecordArrayWrapper from '../models/BackupHistoryRecordArrayWrapper';
import BackupProgressWrapper from '../models/BackupProgressWrapper';
import BackupRestoreDto from '../models/BackupRestoreDto';
import BackupScheduleDto from '../models/BackupScheduleDto';
import BooleanWrapper from '../models/BooleanWrapper';
import ScheduleWrapper from '../models/ScheduleWrapper';

/**
* Backup service.
* @module api/BackupApi
* @version 3.2.0
*/
export default class BackupApi {

    /**
    * Constructs a new BackupApi. 
    * @alias module:api/BackupApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createBackupSchedule operation.
     * @callback module:api/BackupApi~createBackupScheduleCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create the backup schedule
     * Creates the backup schedule of the current portal with the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/BackupScheduleDto} [backupScheduleDto] 
     * @param {module:api/BackupApi~createBackupScheduleCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    createBackupSchedule(opts, callback) {
      opts = opts || {};
      let postBody = opts['backupScheduleDto'];

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
        '/api/2.0/backup/createbackupschedule', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBackup operation.
     * @callback module:api/BackupApi~deleteBackupCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the backup
     * Deletes the backup with the ID specified in the request.
     * @param {String} id The backup ID.
     * @param {module:api/BackupApi~deleteBackupCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    deleteBackup(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteBackup");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BooleanWrapper;
      return this.apiClient.callApi(
        '/api/2.0/backup/deletebackup/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBackupHistory operation.
     * @callback module:api/BackupApi~deleteBackupHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the backup history
     * Deletes the backup history from the current portal.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [dump] Specifies if a dump will be created or not.
     * @param {module:api/BackupApi~deleteBackupHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    deleteBackupHistory(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'Dump': opts['dump']
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
        '/api/2.0/backup/deletebackuphistory', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBackupSchedule operation.
     * @callback module:api/BackupApi~deleteBackupScheduleCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the backup schedule
     * Deletes the backup schedule of the current portal.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [dump] Specifies if a dump will be created or not.
     * @param {module:api/BackupApi~deleteBackupScheduleCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    deleteBackupSchedule(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'Dump': opts['dump']
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
        '/api/2.0/backup/deletebackupschedule', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getBackupHistory operation.
     * @callback module:api/BackupApi~getBackupHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BackupHistoryRecordArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the backup history
     * Returns the history of the started backup.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [dump] Specifies if a dump will be created or not.
     * @param {module:api/BackupApi~getBackupHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BackupHistoryRecordArrayWrapper}
     */
    getBackupHistory(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'Dump': opts['dump']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BackupHistoryRecordArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/backup/getbackuphistory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getBackupProgress operation.
     * @callback module:api/BackupApi~getBackupProgressCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BackupProgressWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the backup progress
     * Returns the progress of the started backup.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [dump] Specifies if a dump will be created or not.
     * @param {module:api/BackupApi~getBackupProgressCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BackupProgressWrapper}
     */
    getBackupProgress(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'Dump': opts['dump']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BackupProgressWrapper;
      return this.apiClient.callApi(
        '/api/2.0/backup/getbackupprogress', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getBackupSchedule operation.
     * @callback module:api/BackupApi~getBackupScheduleCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ScheduleWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the backup schedule
     * Returns the backup schedule of the current portal.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [dump] Specifies if a dump will be created or not.
     * @param {module:api/BackupApi~getBackupScheduleCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ScheduleWrapper}
     */
    getBackupSchedule(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'Dump': opts['dump']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ScheduleWrapper;
      return this.apiClient.callApi(
        '/api/2.0/backup/getbackupschedule', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRestoreProgress operation.
     * @callback module:api/BackupApi~getRestoreProgressCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BackupProgressWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the restoring progress
     * Returns the progress of the started restoring process.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [dump] Specifies if a dump will be created or not.
     * @param {module:api/BackupApi~getRestoreProgressCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BackupProgressWrapper}
     */
    getRestoreProgress(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'Dump': opts['dump']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BackupProgressWrapper;
      return this.apiClient.callApi(
        '/api/2.0/backup/getrestoreprogress', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the startBackup operation.
     * @callback module:api/BackupApi~startBackupCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BackupProgressWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start the backup
     * Starts the backup of the current portal with the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/BackupDto} [backupDto] 
     * @param {module:api/BackupApi~startBackupCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BackupProgressWrapper}
     */
    startBackup(opts, callback) {
      opts = opts || {};
      let postBody = opts['backupDto'];

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
      let returnType = BackupProgressWrapper;
      return this.apiClient.callApi(
        '/api/2.0/backup/startbackup', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the startBackupRestore operation.
     * @callback module:api/BackupApi~startBackupRestoreCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BackupProgressWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start the restoring process
     * Starts the data restoring process of the current portal with the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/BackupRestoreDto} [backupRestoreDto] 
     * @param {module:api/BackupApi~startBackupRestoreCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BackupProgressWrapper}
     */
    startBackupRestore(opts, callback) {
      opts = opts || {};
      let postBody = opts['backupRestoreDto'];

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
      let returnType = BackupProgressWrapper;
      return this.apiClient.callApi(
        '/api/2.0/backup/startrestore', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
