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
import FileUploadResultWrapper from '../models/FileUploadResultWrapper';
import KeyValuePairStringStringValues from '../models/KeyValuePairStringStringValues';
import ThumbnailsDataWrapper from '../models/ThumbnailsDataWrapper';
import ThumbnailsRequest from '../models/ThumbnailsRequest';
import UpdatePhotoMemberRequest from '../models/UpdatePhotoMemberRequest';

/**
* PeoplePhotos service.
* @module api/PeoplePhotosApi
* @version 3.2.0
*/
export default class PeoplePhotosApi {

    /**
    * Constructs a new PeoplePhotosApi. 
    * @alias module:api/PeoplePhotosApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createMemberPhotoThumbnails operation.
     * @callback module:api/PeoplePhotosApi~createMemberPhotoThumbnailsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ThumbnailsDataWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create photo thumbnails
     * Creates the user photo thumbnails by coordinates of the original image specified in the request.
     * @param {String} userid The user ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/ThumbnailsRequest} [thumbnailsRequest] The thumbnail request.
     * @param {module:api/PeoplePhotosApi~createMemberPhotoThumbnailsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ThumbnailsDataWrapper}
     */
    createMemberPhotoThumbnails(userid, opts, callback) {
      opts = opts || {};
      let postBody = opts['thumbnailsRequest'];
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling createMemberPhotoThumbnails");
      }

      let pathParams = {
        'userid': userid
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
      let returnType = ThumbnailsDataWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/{userid}/photo/thumbnails', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteMemberPhoto operation.
     * @callback module:api/PeoplePhotosApi~deleteMemberPhotoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ThumbnailsDataWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user photo
     * Deletes a photo of the user with the ID specified in the request.
     * @param {String} userid The user ID.
     * @param {module:api/PeoplePhotosApi~deleteMemberPhotoCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ThumbnailsDataWrapper}
     */
    deleteMemberPhoto(userid, callback) {
      let postBody = null;
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling deleteMemberPhoto");
      }

      let pathParams = {
        'userid': userid
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
      let returnType = ThumbnailsDataWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/{userid}/photo', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMemberPhoto operation.
     * @callback module:api/PeoplePhotosApi~getMemberPhotoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ThumbnailsDataWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a user photo
     * Returns a photo of the user with the ID specified in the request.
     * @param {String} userid The user ID.
     * @param {module:api/PeoplePhotosApi~getMemberPhotoCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ThumbnailsDataWrapper}
     */
    getMemberPhoto(userid, callback) {
      let postBody = null;
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling getMemberPhoto");
      }

      let pathParams = {
        'userid': userid
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
      let returnType = ThumbnailsDataWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/{userid}/photo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateMemberPhoto operation.
     * @callback module:api/PeoplePhotosApi~updateMemberPhotoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ThumbnailsDataWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user photo
     * Updates a photo of the user with the ID specified in the request.
     * @param {String} userid The user ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdatePhotoMemberRequest} [updatePhotoMemberRequest] The request parameters for updating a photo.
     * @param {module:api/PeoplePhotosApi~updateMemberPhotoCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ThumbnailsDataWrapper}
     */
    updateMemberPhoto(userid, opts, callback) {
      opts = opts || {};
      let postBody = opts['updatePhotoMemberRequest'];
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling updateMemberPhoto");
      }

      let pathParams = {
        'userid': userid
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
      let returnType = ThumbnailsDataWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/{userid}/photo', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadMemberPhoto operation.
     * @callback module:api/PeoplePhotosApi~uploadMemberPhotoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileUploadResultWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload a user photo
     * Uploads a photo of the user with the ID specified in the request.
     * @param {String} userid The user ID.
     * @param {Array.<module:models/KeyValuePairStringStringValues>} formCollection The image data.
     * @param {module:api/PeoplePhotosApi~uploadMemberPhotoCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileUploadResultWrapper}
     */
    uploadMemberPhoto(userid, formCollection, callback) {
      let postBody = null;
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling uploadMemberPhoto");
      }
      // verify the required parameter 'formCollection' is set
      if (formCollection === undefined || formCollection === null) {
        throw new Error("Missing the required parameter 'formCollection' when calling uploadMemberPhoto");
      }

      let pathParams = {
        'userid': userid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'formCollection': this.apiClient.buildCollectionParam(formCollection, 'multi')
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = FileUploadResultWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/{userid}/photo', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
