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
import UsageSpaceStatItemArrayWrapper from '../models/UsageSpaceStatItemArrayWrapper';

/**
* SettingsStatistics service.
* @module api/SettingsStatisticsApi
* @version 3.2.0
*/
export default class SettingsStatisticsApi {

    /**
    * Constructs a new SettingsStatisticsApi. 
    * @alias module:api/SettingsStatisticsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getSpaceUsageStatistics operation.
     * @callback module:api/SettingsStatisticsApi~getSpaceUsageStatisticsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/UsageSpaceStatItemArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the space usage statistics
     * Returns the space usage statistics for the module with the ID specified in the request.
     * @param {String} id The ID extracted from the route parameters.
     * @param {module:api/SettingsStatisticsApi~getSpaceUsageStatisticsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/UsageSpaceStatItemArrayWrapper}
     */
    getSpaceUsageStatistics(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSpaceUsageStatistics");
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
      let returnType = UsageSpaceStatItemArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/statistics/spaceusage/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
