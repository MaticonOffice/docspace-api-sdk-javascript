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
import LoginEventArrayWrapper from '../models/LoginEventArrayWrapper';
import MessageAction from '../models/MessageAction';
import StringWrapper from '../models/StringWrapper';

/**
* SecurityLoginHistory service.
* @module api/SecurityLoginHistoryApi
* @version 3.2.0
*/
export default class SecurityLoginHistoryApi {

    /**
    * Constructs a new SecurityLoginHistoryApi. 
    * @alias module:api/SecurityLoginHistoryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createLoginHistoryReport operation.
     * @callback module:api/SecurityLoginHistoryApi~createLoginHistoryReportCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate the login history report
     * Generates the login history report.
     * @param {module:api/SecurityLoginHistoryApi~createLoginHistoryReportCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    createLoginHistoryReport(callback) {
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
      let returnType = StringWrapper;
      return this.apiClient.callApi(
        '/api/2.0/security/audit/login/report', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getLastLoginEvents operation.
     * @callback module:api/SecurityLoginHistoryApi~getLastLoginEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/LoginEventArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get login history
     * Returns all the latest user login activity, including successful logins and error logs.
     * @param {module:api/SecurityLoginHistoryApi~getLastLoginEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/LoginEventArrayWrapper}
     */
    getLastLoginEvents(callback) {
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
      let returnType = LoginEventArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/security/audit/login/last', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getLoginEventsByFilter operation.
     * @callback module:api/SecurityLoginHistoryApi~getLoginEventsByFilterCallback
     * @param {String} error Error message, if any.
     * @param {module:models/LoginEventArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get filtered login events
     * Returns a list of the login events by the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {String} [userId] The ID of the user whose login events are being queried.
     * @param {module:models/MessageAction} [action] The login-related action to filter events by.
     * @param {module:models/ApiDateTime} [from] The starting date and time for filtering login events.
     * @param {module:models/ApiDateTime} [to] The ending date and time for filtering login events.
     * @param {Number} [count] The number of login events to retrieve in the query.
     * @param {Number} [startIndex] The starting index for fetching a subset of login events from the query results.
     * @param {} [fields] Comma-separated list of fields to include in the response
     * @param {module:api/SecurityLoginHistoryApi~getLoginEventsByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/LoginEventArrayWrapper}
     */
    getLoginEventsByFilter(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'userId': opts['userId'],
        'action': opts['action'],
        'from': opts['from'],
        'to': opts['to'],
        'count': opts['count'],
        'startIndex': opts['startIndex'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LoginEventArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/security/audit/login/filter', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
