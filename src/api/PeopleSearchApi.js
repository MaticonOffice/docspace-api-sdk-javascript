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
import AccountLoginType from '../models/AccountLoginType';
import Area from '../models/Area';
import EmployeeActivationStatus from '../models/EmployeeActivationStatus';
import EmployeeArrayWrapper from '../models/EmployeeArrayWrapper';
import EmployeeFullArrayWrapper from '../models/EmployeeFullArrayWrapper';
import EmployeeStatus from '../models/EmployeeStatus';
import EmployeeType from '../models/EmployeeType';
import ObjectArrayWrapper from '../models/ObjectArrayWrapper';
import Payments from '../models/Payments';
import QuotaFilter from '../models/QuotaFilter';
import SortOrder from '../models/SortOrder';

/**
* PeopleSearch service.
* @module api/PeopleSearchApi
* @version 3.2.0
*/
export default class PeopleSearchApi {

    /**
    * Constructs a new PeopleSearchApi. 
    * @alias module:api/PeopleSearchApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAccountsEntriesWithShared operation.
     * @callback module:api/PeopleSearchApi~getAccountsEntriesWithSharedCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ObjectArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get account entries
     * Returns the account entries with their sharing settings.
     * @param {Number} id The user ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/EmployeeStatus} [employeeStatus] The user status.
     * @param {module:models/EmployeeActivationStatus} [activationStatus] The user activation status.
     * @param {Boolean} [excludeShared] Specifies whether to exclude the account sharing settings from the response.
     * @param {Boolean} [includeShared] Specifies whether to include the account sharing settings in the response.
     * @param {Boolean} [invitedByMe] Specifies whether the user is invited by the current user or not.
     * @param {String} [inviterId] The inviter ID.
     * @param {module:models/Area} [area] The area of the account entries.
     * @param {Array.<module:models/EmployeeType>} [employeeTypes] The list of the user types.
     * @param {Number} [count] The number of items to retrieve in a request.
     * @param {Number} [startIndex] The starting index for the query results.
     * @param {String} [filterSeparator] Specifies the separator used in filter expressions.
     * @param {String} [filterValue] The text filter applied to the accounts search query.
     * @param {module:api/PeopleSearchApi~getAccountsEntriesWithSharedCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ObjectArrayWrapper}
     */
    getAccountsEntriesWithShared(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAccountsEntriesWithShared");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'employeeStatus': opts['employeeStatus'],
        'activationStatus': opts['activationStatus'],
        'excludeShared': opts['excludeShared'],
        'includeShared': opts['includeShared'],
        'invitedByMe': opts['invitedByMe'],
        'inviterId': opts['inviterId'],
        'area': opts['area'],
        'employeeTypes': this.apiClient.buildCollectionParam(opts['employeeTypes'], 'csv'),
        'count': opts['count'],
        'startIndex': opts['startIndex'],
        'filterSeparator': opts['filterSeparator'],
        'filterValue': opts['filterValue']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ObjectArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/accounts/room/{id}/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSearch operation.
     * @callback module:api/PeopleSearchApi~getSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search users
     * Returns a list of users matching the search query.
     * @param {String} query The search query.
     * @param {Object} opts Optional parameters
     * @param {String} [filterBy] Specifies a filter criteria for the user search query.
     * @param {String} [filterValue] The value used for filtering users, allowing additional constraints for the query.
     * @param {module:api/PeopleSearchApi~getSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullArrayWrapper}
     */
    getSearch(query, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling getSearch");
      }

      let pathParams = {
        'query': query
      };
      let queryParams = {
        'filterBy': opts['filterBy'],
        'filterValue': opts['filterValue']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EmployeeFullArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/@search/{query}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSimpleByFilter operation.
     * @callback module:api/PeopleSearchApi~getSimpleByFilterCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search users by extended filter
     * Returns a list of users matching the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/EmployeeStatus} [employeeStatus] The user status.
     * @param {String} [groupId] The group ID.
     * @param {module:models/EmployeeActivationStatus} [activationStatus] The user activation status.
     * @param {module:models/EmployeeType} [employeeType] The user type.
     * @param {Array.<module:models/Number>} [employeeTypes] The list of user types.
     * @param {Boolean} [isAdministrator] Specifies if the user is an administrator or not.
     * @param {module:models/Payments} [payments] The user payment status.
     * @param {module:models/AccountLoginType} [accountLoginType] The account login type.
     * @param {module:models/QuotaFilter} [quotaFilter] The quota filter (All - 0, Default - 1, Custom - 2).
     * @param {Boolean} [withoutGroup] Specifies whether the user should be a member of a group or not.
     * @param {Boolean} [excludeGroup] Specifies whether the user should be a member of the group with the specified ID.
     * @param {Boolean} [invitedByMe] Specifies whether the user is invited by the current user or not.
     * @param {String} [inviterId] The inviter ID.
     * @param {module:models/Area} [area] The filter area.
     * @param {Number} [count] The maximum number of items to be retrieved in the response.
     * @param {Number} [startIndex] The zero-based index of the first item to be retrieved in a filtered result set.
     * @param {String} [sortBy] Specifies the property or field name by which the results should be sorted.
     * @param {module:models/SortOrder} [sortOrder] The order in which the results are sorted.
     * @param {String} [filterSeparator] Represents the separator used to split filter criteria in query parameters.
     * @param {String} [filterValue] The search text used to filter results based on user input.
     * @param {} [fields] Comma-separated list of fields to include in the response
     * @param {module:api/PeopleSearchApi~getSimpleByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeArrayWrapper}
     */
    getSimpleByFilter(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'employeeStatus': opts['employeeStatus'],
        'groupId': opts['groupId'],
        'activationStatus': opts['activationStatus'],
        'employeeType': opts['employeeType'],
        'employeeTypes': this.apiClient.buildCollectionParam(opts['employeeTypes'], 'csv'),
        'isAdministrator': opts['isAdministrator'],
        'payments': opts['payments'],
        'accountLoginType': opts['accountLoginType'],
        'quotaFilter': opts['quotaFilter'],
        'withoutGroup': opts['withoutGroup'],
        'excludeGroup': opts['excludeGroup'],
        'invitedByMe': opts['invitedByMe'],
        'inviterId': opts['inviterId'],
        'area': opts['area'],
        'count': opts['count'],
        'startIndex': opts['startIndex'],
        'sortBy': opts['sortBy'],
        'sortOrder': opts['sortOrder'],
        'filterSeparator': opts['filterSeparator'],
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
      let returnType = EmployeeArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/simple/filter', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsersWithRoomShared operation.
     * @callback module:api/PeopleSearchApi~getUsersWithRoomSharedCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get users with room sharing settings
     * Returns the users with the sharing settings in a room with the ID specified in request.
     * @param {Number} id The user ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/EmployeeStatus} [employeeStatus] The user status.
     * @param {module:models/EmployeeActivationStatus} [activationStatus] The user activation status.
     * @param {Boolean} [excludeShared] Specifies whether to exclude the user sharing settings or not.
     * @param {Boolean} [includeShared] Specifies whether to include the user sharing settings or not.
     * @param {Boolean} [invitedByMe] Specifies whether the user was invited by the current user or not.
     * @param {String} [inviterId] The inviter ID.
     * @param {module:models/Area} [area] The user area.
     * @param {Array.<module:models/EmployeeType>} [employeeTypes] The list of user types.
     * @param {Number} [count] The maximum number of users to be retrieved in the request.
     * @param {Number} [startIndex] The zero-based index of the first record to retrieve in a paged query.
     * @param {String} [filterSeparator] The character or string used to separate multiple filter values in a filtering query.
     * @param {String} [filterValue] The filter text value used for searching or filtering user results.
     * @param {module:api/PeopleSearchApi~getUsersWithRoomSharedCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullArrayWrapper}
     */
    getUsersWithRoomShared(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUsersWithRoomShared");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'employeeStatus': opts['employeeStatus'],
        'activationStatus': opts['activationStatus'],
        'excludeShared': opts['excludeShared'],
        'includeShared': opts['includeShared'],
        'invitedByMe': opts['invitedByMe'],
        'inviterId': opts['inviterId'],
        'area': opts['area'],
        'employeeTypes': this.apiClient.buildCollectionParam(opts['employeeTypes'], 'csv'),
        'count': opts['count'],
        'startIndex': opts['startIndex'],
        'filterSeparator': opts['filterSeparator'],
        'filterValue': opts['filterValue']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EmployeeFullArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/room/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchUsersByExtendedFilter operation.
     * @callback module:api/PeopleSearchApi~searchUsersByExtendedFilterCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search users with detaailed information by extended filter
     * Returns a list of users with full information about them matching the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/EmployeeStatus} [employeeStatus] The user status.
     * @param {String} [groupId] The group ID.
     * @param {module:models/EmployeeActivationStatus} [activationStatus] The user activation status.
     * @param {module:models/EmployeeType} [employeeType] The user type.
     * @param {Array.<module:models/Number>} [employeeTypes] The list of user types.
     * @param {Boolean} [isAdministrator] Specifies if the user is an administrator or not.
     * @param {module:models/Payments} [payments] The user payment status.
     * @param {module:models/AccountLoginType} [accountLoginType] The account login type.
     * @param {module:models/QuotaFilter} [quotaFilter] The quota filter (All - 0, Default - 1, Custom - 2).
     * @param {Boolean} [withoutGroup] Specifies whether the user should be a member of a group or not.
     * @param {Boolean} [excludeGroup] Specifies whether the user should be a member of the group with the specified ID.
     * @param {Boolean} [invitedByMe] Specifies whether the user is invited by the current user or not.
     * @param {String} [inviterId] The inviter ID.
     * @param {module:models/Area} [area] The filter area.
     * @param {Number} [count] The maximum number of items to be retrieved in the response.
     * @param {Number} [startIndex] The zero-based index of the first item to be retrieved in a filtered result set.
     * @param {String} [sortBy] Specifies the property or field name by which the results should be sorted.
     * @param {module:models/SortOrder} [sortOrder] The order in which the results are sorted.
     * @param {String} [filterSeparator] Represents the separator used to split filter criteria in query parameters.
     * @param {String} [filterValue] The search text used to filter results based on user input.
     * @param {} [fields] Comma-separated list of fields to include in the response
     * @param {module:api/PeopleSearchApi~searchUsersByExtendedFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullArrayWrapper}
     */
    searchUsersByExtendedFilter(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'employeeStatus': opts['employeeStatus'],
        'groupId': opts['groupId'],
        'activationStatus': opts['activationStatus'],
        'employeeType': opts['employeeType'],
        'employeeTypes': this.apiClient.buildCollectionParam(opts['employeeTypes'], 'csv'),
        'isAdministrator': opts['isAdministrator'],
        'payments': opts['payments'],
        'accountLoginType': opts['accountLoginType'],
        'quotaFilter': opts['quotaFilter'],
        'withoutGroup': opts['withoutGroup'],
        'excludeGroup': opts['excludeGroup'],
        'invitedByMe': opts['invitedByMe'],
        'inviterId': opts['inviterId'],
        'area': opts['area'],
        'count': opts['count'],
        'startIndex': opts['startIndex'],
        'sortBy': opts['sortBy'],
        'sortOrder': opts['sortOrder'],
        'filterSeparator': opts['filterSeparator'],
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
      let returnType = EmployeeFullArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/filter', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchUsersByQuery operation.
     * @callback module:api/PeopleSearchApi~searchUsersByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search users (using query parameters)
     * Returns a list of users matching the search query. This method uses the query parameters.
     * @param {Object} opts Optional parameters
     * @param {String} [query] The search query.
     * @param {module:api/PeopleSearchApi~searchUsersByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeArrayWrapper}
     */
    searchUsersByQuery(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'query': opts['query']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EmployeeArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchUsersByStatus operation.
     * @callback module:api/PeopleSearchApi~searchUsersByStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search users by status filter
     * Returns a list of users matching the status filter and search query.
     * @param {module:models/EmployeeStatus} status The user status.
     * @param {Object} opts Optional parameters
     * @param {String} [query] The advanced search query.
     * @param {String} [filterBy] Specifies the criteria used to filter search results in advanced queries.
     * @param {String} [filterValue] The value used to filter the search query.
     * @param {module:api/PeopleSearchApi~searchUsersByStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullArrayWrapper}
     */
    searchUsersByStatus(status, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling searchUsersByStatus");
      }

      let pathParams = {
        'status': status
      };
      let queryParams = {
        'query': opts['query'],
        'filterBy': opts['filterBy'],
        'filterValue': opts['filterValue']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EmployeeFullArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/status/{status}/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
