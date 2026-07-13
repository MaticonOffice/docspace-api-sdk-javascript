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
import FinishDto from '../models/FinishDto';
import MigrationApiInfo from '../models/MigrationApiInfo';
import MigrationStatusWrapper from '../models/MigrationStatusWrapper';
import STRINGArrayWrapper from '../models/STRINGArrayWrapper';

/**
* Migration service.
* @module api/MigrationApi
* @version 3.2.0
*/
export default class MigrationApi {

    /**
    * Constructs a new MigrationApi. 
    * @alias module:api/MigrationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the cancelMigration operation.
     * @callback module:api/MigrationApi~cancelMigrationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel migration
     * Cancels the migration.
     * @param {module:api/MigrationApi~cancelMigrationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    cancelMigration(callback) {
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/2.0/migration/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clearMigration operation.
     * @callback module:api/MigrationApi~clearMigrationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Clear migration
     * Clears the migration.
     * @param {module:api/MigrationApi~clearMigrationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    clearMigration(callback) {
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/2.0/migration/clear', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the finishMigration operation.
     * @callback module:api/MigrationApi~finishMigrationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Finish migration
     * Finishes the migration process.
     * @param {Object} opts Optional parameters
     * @param {module:models/FinishDto} [finishDto] 
     * @param {module:api/MigrationApi~finishMigrationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    finishMigration(opts, callback) {
      opts = opts || {};
      let postBody = opts['finishDto'];

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
        '/api/2.0/migration/finish', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMigrationLogs operation.
     * @callback module:api/MigrationApi~getMigrationLogsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get migration logs
     * Returns the migration logs.
     * @param {module:api/MigrationApi~getMigrationLogsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getMigrationLogs(callback) {
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/2.0/migration/logs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMigrationStatus operation.
     * @callback module:api/MigrationApi~getMigrationStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:models/MigrationStatusWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get migration status
     * Returns the migration status.
     * @param {module:api/MigrationApi~getMigrationStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/MigrationStatusWrapper}
     */
    getMigrationStatus(callback) {
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
      let returnType = MigrationStatusWrapper;
      return this.apiClient.callApi(
        '/api/2.0/migration/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listMigrations operation.
     * @callback module:api/MigrationApi~listMigrationsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/STRINGArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get migrations
     * Returns a list of available migrations.
     * @param {module:api/MigrationApi~listMigrationsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/STRINGArrayWrapper}
     */
    listMigrations(callback) {
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
      let returnType = STRINGArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/migration/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the startMigration operation.
     * @callback module:api/MigrationApi~startMigrationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start migration
     * Starts the migration process.
     * @param {Object} opts Optional parameters
     * @param {module:models/MigrationApiInfo} [migrationApiInfo] 
     * @param {module:api/MigrationApi~startMigrationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    startMigration(opts, callback) {
      opts = opts || {};
      let postBody = opts['migrationApiInfo'];

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
        '/api/2.0/migration/migrate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadAndInitializeMigration operation.
     * @callback module:api/MigrationApi~uploadAndInitializeMigrationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload and initialize migration
     * Uploads and initializes a migration with a migrator name specified in the request.
     * @param {String} migratorName The migrator name extracted from the route parameters.
     * @param {module:api/MigrationApi~uploadAndInitializeMigrationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    uploadAndInitializeMigration(migratorName, callback) {
      let postBody = null;
      // verify the required parameter 'migratorName' is set
      if (migratorName === undefined || migratorName === null) {
        throw new Error("Missing the required parameter 'migratorName' when calling uploadAndInitializeMigration");
      }

      let pathParams = {
        'migratorName': migratorName
      };
      let queryParams = {
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
        '/api/2.0/migration/init/{migratorName}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
