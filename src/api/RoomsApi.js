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
import ArchiveRoomRequest from '../models/ArchiveRoomRequest';
import BatchTagsRequestDto from '../models/BatchTagsRequestDto';
import BooleanWrapper from '../models/BooleanWrapper';
import CoverRequestDto from '../models/CoverRequestDto';
import CoversResultArrayWrapper from '../models/CoversResultArrayWrapper';
import CreateRoomFromTemplateDto from '../models/CreateRoomFromTemplateDto';
import CreateRoomRequestDto from '../models/CreateRoomRequestDto';
import CreateTagRequestDto from '../models/CreateTagRequestDto';
import CreateThirdPartyRoom from '../models/CreateThirdPartyRoom';
import DeleteRoomRequest from '../models/DeleteRoomRequest';
import DocumentBuilderTaskWrapper from '../models/DocumentBuilderTaskWrapper';
import FileOperationWrapper from '../models/FileOperationWrapper';
import FileShareArrayWrapper from '../models/FileShareArrayWrapper';
import FileShareWrapper from '../models/FileShareWrapper';
import FolderContentIntegerWrapper from '../models/FolderContentIntegerWrapper';
import FolderIntegerWrapper from '../models/FolderIntegerWrapper';
import FolderStringWrapper from '../models/FolderStringWrapper';
import KeyValuePairStringStringValues from '../models/KeyValuePairStringStringValues';
import LinkType from '../models/LinkType';
import LogoRequest from '../models/LogoRequest';
import NewItemsFileEntryArrayWrapper from '../models/NewItemsFileEntryArrayWrapper';
import NewItemsRoomNewItemsArrayWrapper from '../models/NewItemsRoomNewItemsArrayWrapper';
import ObjectArrayWrapper from '../models/ObjectArrayWrapper';
import ObjectWrapper from '../models/ObjectWrapper';
import ProviderFilter from '../models/ProviderFilter';
import QuotaFilter from '../models/QuotaFilter';
import RoomFromTemplateStatusWrapper from '../models/RoomFromTemplateStatusWrapper';
import RoomInvitationRequest from '../models/RoomInvitationRequest';
import RoomLinkRequest from '../models/RoomLinkRequest';
import RoomSecurityWrapper from '../models/RoomSecurityWrapper';
import RoomTemplateDto from '../models/RoomTemplateDto';
import RoomTemplateStatusWrapper from '../models/RoomTemplateStatusWrapper';
import RoomType from '../models/RoomType';
import SearchArea from '../models/SearchArea';
import SetPublicDto from '../models/SetPublicDto';
import ShareFilterType from '../models/ShareFilterType';
import SortOrder from '../models/SortOrder';
import StorageFilter from '../models/StorageFilter';
import SubjectFilter from '../models/SubjectFilter';
import UpdateRoomRequest from '../models/UpdateRoomRequest';
import UploadResultWrapper from '../models/UploadResultWrapper';
import UserInvitation from '../models/UserInvitation';

/**
* Rooms service.
* @module api/RoomsApi
* @version 3.2.0
*/
export default class RoomsApi {

    /**
    * Constructs a new RoomsApi. 
    * @alias module:api/RoomsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addRoomTags operation.
     * @callback module:api/RoomsApi~addRoomTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add the room tags
     * Adds the tags to a room with the ID specified in the request.
     * @param {Number} id The room Id.
     * @param {Object} opts Optional parameters
     * @param {module:models/BatchTagsRequestDto} [batchTagsRequestDto] The parameters for adding tags.
     * @param {module:api/RoomsApi~addRoomTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderIntegerWrapper}
     */
    addRoomTags(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['batchTagsRequestDto'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addRoomTags");
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
      let returnType = FolderIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/{id}/tags', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the archiveRoom operation.
     * @callback module:api/RoomsApi~archiveRoomCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileOperationWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Archive a room
     * Moves a room with the ID specified in the request to the \"Archive\" section.
     * @param {Number} id The room ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/ArchiveRoomRequest} [archiveRoomRequest] The parameters for archiving a room.
     * @param {module:api/RoomsApi~archiveRoomCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileOperationWrapper}
     */
    archiveRoom(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['archiveRoomRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling archiveRoom");
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
      let returnType = FileOperationWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/{id}/archive', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the changeRoomCover operation.
     * @callback module:api/RoomsApi~changeRoomCoverCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change the room cover
     * Changes a cover of a room with the ID specified in the request.
     * @param {Number} id The room ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/CoverRequestDto} [coverRequestDto] The request parameters to change the room cover.
     * @param {module:api/RoomsApi~changeRoomCoverCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderIntegerWrapper}
     */
    changeRoomCover(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['coverRequestDto'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling changeRoomCover");
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
      let returnType = FolderIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/{id}/cover', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createRoom operation.
     * @callback module:api/RoomsApi~createRoomCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a room
     * Creates a room in the \"Rooms\" section.
     * @param {Object} opts Optional parameters
     * @param {module:models/CreateRoomRequestDto} [createRoomRequestDto] 
     * @param {module:api/RoomsApi~createRoomCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderIntegerWrapper}
     */
    createRoom(opts, callback) {
      opts = opts || {};
      let postBody = opts['createRoomRequestDto'];

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
      let returnType = FolderIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createRoomFromTemplate operation.
     * @callback module:api/RoomsApi~createRoomFromTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:models/RoomFromTemplateStatusWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a room from the template
     * Creates a room in the \"Rooms\" section based on the template.
     * @param {Object} opts Optional parameters
     * @param {module:models/CreateRoomFromTemplateDto} [createRoomFromTemplateDto] 
     * @param {module:api/RoomsApi~createRoomFromTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/RoomFromTemplateStatusWrapper}
     */
    createRoomFromTemplate(opts, callback) {
      opts = opts || {};
      let postBody = opts['createRoomFromTemplateDto'];

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
      let returnType = RoomFromTemplateStatusWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/fromtemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createRoomLogo operation.
     * @callback module:api/RoomsApi~createRoomLogoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a room logo
     * Creates a logo for a room with the ID specified in the request.
     * @param {Number} id The room ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/LogoRequest} [logoRequest] The logo request parameters.
     * @param {module:api/RoomsApi~createRoomLogoCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderIntegerWrapper}
     */
    createRoomLogo(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['logoRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling createRoomLogo");
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
      let returnType = FolderIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/{id}/logo', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createRoomTag operation.
     * @callback module:api/RoomsApi~createRoomTagCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ObjectWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a tag
     * Creates a custom tag with the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/CreateTagRequestDto} [createTagRequestDto] 
     * @param {module:api/RoomsApi~createRoomTagCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ObjectWrapper}
     */
    createRoomTag(opts, callback) {
      opts = opts || {};
      let postBody = opts['createTagRequestDto'];

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
      let returnType = ObjectWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/tags', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createRoomTemplate operation.
     * @callback module:api/RoomsApi~createRoomTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:models/RoomTemplateStatusWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start creating room template
     * Starts creating the room template.
     * @param {Object} opts Optional parameters
     * @param {module:models/RoomTemplateDto} [roomTemplateDto] 
     * @param {module:api/RoomsApi~createRoomTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/RoomTemplateStatusWrapper}
     */
    createRoomTemplate(opts, callback) {
      opts = opts || {};
      let postBody = opts['roomTemplateDto'];

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
      let returnType = RoomTemplateStatusWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/roomtemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createRoomThirdParty operation.
     * @callback module:api/RoomsApi~createRoomThirdPartyCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderStringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a third-party room
     * Creates a room in the \"Rooms\" section stored in a third-party storage.
     * @param {String} id The ID of the folder in the third-party storage in which the contents of the room will be stored.
     * @param {Object} opts Optional parameters
     * @param {module:models/CreateThirdPartyRoom} [createThirdPartyRoom] The third-party room information.
     * @param {module:api/RoomsApi~createRoomThirdPartyCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderStringWrapper}
     */
    createRoomThirdParty(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['createThirdPartyRoom'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling createRoomThirdParty");
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
      let returnType = FolderStringWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/thirdparty/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCustomTags operation.
     * @callback module:api/RoomsApi~deleteCustomTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete tags
     * Deletes a bunch of custom tags specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/BatchTagsRequestDto} [batchTagsRequestDto] 
     * @param {module:api/RoomsApi~deleteCustomTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteCustomTags(opts, callback) {
      opts = opts || {};
      let postBody = opts['batchTagsRequestDto'];

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
        '/api/2.0/files/tags', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRoom operation.
     * @callback module:api/RoomsApi~deleteRoomCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileOperationWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a room
     * Removes a room with the ID specified in the request.
     * @param {Number} id The room ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/DeleteRoomRequest} [deleteRoomRequest] The parameters for deleting a room.
     * @param {module:api/RoomsApi~deleteRoomCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileOperationWrapper}
     */
    deleteRoom(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['deleteRoomRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteRoom");
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
      let returnType = FileOperationWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRoomLogo operation.
     * @callback module:api/RoomsApi~deleteRoomLogoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a room logo
     * Removes a logo from a room with the ID specified in the request.
     * @param {Number} id The room ID of the request.
     * @param {module:api/RoomsApi~deleteRoomLogoCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderIntegerWrapper}
     */
    deleteRoomLogo(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteRoomLogo");
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
      let returnType = FolderIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/{id}/logo', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRoomTags operation.
     * @callback module:api/RoomsApi~deleteRoomTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove the room tags
     * Removes the tags from a room with the ID specified in the request.
     * @param {Number} id The room Id.
     * @param {Object} opts Optional parameters
     * @param {module:models/BatchTagsRequestDto} [batchTagsRequestDto] The parameters for adding tags.
     * @param {module:api/RoomsApi~deleteRoomTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderIntegerWrapper}
     */
    deleteRoomTags(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['batchTagsRequestDto'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteRoomTags");
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
      let returnType = FolderIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/{id}/tags', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getNewRoomItems operation.
     * @callback module:api/RoomsApi~getNewRoomItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/NewItemsFileEntryArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the new room items
     * Returns a list of all the new items from a room with the ID specified in the request.
     * @param {Number} id The room ID of the request.
     * @param {module:api/RoomsApi~getNewRoomItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/NewItemsFileEntryArrayWrapper}
     */
    getNewRoomItems(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getNewRoomItems");
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
      let returnType = NewItemsFileEntryArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/{id}/news', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPublicSettings operation.
     * @callback module:api/RoomsApi~getPublicSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get public settings
     * Returns the public settings of the room template with the ID specified in the request.
     * @param {Number} id The room template ID.
     * @param {module:api/RoomsApi~getPublicSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    getPublicSettings(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPublicSettings");
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
        '/api/2.0/files/roomtemplate/{id}/public', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRoomCovers operation.
     * @callback module:api/RoomsApi~getRoomCoversCallback
     * @param {String} error Error message, if any.
     * @param {module:models/CoversResultArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get covers
     * Returns a list of all covers.
     * @param {module:api/RoomsApi~getRoomCoversCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/CoversResultArrayWrapper}
     */
    getRoomCovers(callback) {
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
      let returnType = CoversResultArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/covers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRoomCreatingStatus operation.
     * @callback module:api/RoomsApi~getRoomCreatingStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:models/RoomFromTemplateStatusWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the room creation progress
     * Returns the progress of creating a room from the template.
     * @param {module:api/RoomsApi~getRoomCreatingStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/RoomFromTemplateStatusWrapper}
     */
    getRoomCreatingStatus(callback) {
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
      let returnType = RoomFromTemplateStatusWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/fromtemplate/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRoomIndexExport operation.
     * @callback module:api/RoomsApi~getRoomIndexExportCallback
     * @param {String} error Error message, if any.
     * @param {module:models/DocumentBuilderTaskWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the room index export
     * Returns the room index export.
     * @param {module:api/RoomsApi~getRoomIndexExportCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/DocumentBuilderTaskWrapper}
     */
    getRoomIndexExport(callback) {
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
      let returnType = DocumentBuilderTaskWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/indexexport', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRoomInfo operation.
     * @callback module:api/RoomsApi~getRoomInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get room information
     * Returns the room information.
     * @param {Number} id The room ID of the request.
     * @param {module:api/RoomsApi~getRoomInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderIntegerWrapper}
     */
    getRoomInfo(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRoomInfo");
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
      let returnType = FolderIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRoomLinks operation.
     * @callback module:api/RoomsApi~getRoomLinksCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileShareArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the room links
     * Returns the links of the room with the ID specified in the request.
     * @param {Number} id The room ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/LinkType} [type] The link type.
     * @param {module:api/RoomsApi~getRoomLinksCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileShareArrayWrapper}
     */
    getRoomLinks(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRoomLinks");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'type': opts['type']
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
        '/api/2.0/files/rooms/{id}/links', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRoomSecurityInfo operation.
     * @callback module:api/RoomsApi~getRoomSecurityInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileShareArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the room access rights
     * Returns the access rights of a room with the ID specified in the request.
     * @param {Number} id The room ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/ShareFilterType} [filterType] The filter type of the access rights.
     * @param {Number} [count] The number of items to be retrieved or processed.
     * @param {Number} [startIndex] The starting index of the items to retrieve in a paginated request.
     * @param {String} [filterValue] The text filter value used for filtering room security information.
     * @param {module:api/RoomsApi~getRoomSecurityInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileShareArrayWrapper}
     */
    getRoomSecurityInfo(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRoomSecurityInfo");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'filterType': opts['filterType'],
        'count': opts['count'],
        'startIndex': opts['startIndex'],
        'filterValue': opts['filterValue']
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
        '/api/2.0/files/rooms/{id}/share', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRoomTagsInfo operation.
     * @callback module:api/RoomsApi~getRoomTagsInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ObjectArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get tags
     * Returns a list of custom tags.
     * @param {Object} opts Optional parameters
     * @param {Number} [count] Gets or sets the number of tag results to retrieve.  This property specifies the maximum amount of tag data to be included in the result set.
     * @param {Number} [startIndex] Represents the starting index from which the tags' information will be retrieved.  This property is used to define the offset for pagination when retrieving a list of tags. It determines  the point in the data set from which the retrieval begins.
     * @param {String} [filterValue] Gets or sets the text value used for searching tags.  This property is typically used as a filter value when retrieving tag information.
     * @param {} [fields] Comma-separated list of fields to include in the response
     * @param {module:api/RoomsApi~getRoomTagsInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ObjectArrayWrapper}
     */
    getRoomTagsInfo(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'count': opts['count'],
        'startIndex': opts['startIndex'],
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
      let returnType = ObjectArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRoomTemplateCreatingStatus operation.
     * @callback module:api/RoomsApi~getRoomTemplateCreatingStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:models/RoomTemplateStatusWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get status of room template creation
     * Returns the progress status of the room template creation process.
     * @param {module:api/RoomsApi~getRoomTemplateCreatingStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/RoomTemplateStatusWrapper}
     */
    getRoomTemplateCreatingStatus(callback) {
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
      let returnType = RoomTemplateStatusWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/roomtemplate/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRoomsFolder operation.
     * @callback module:api/RoomsApi~getRoomsFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderContentIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get rooms
     * Returns the contents of the \"Rooms\" section by the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:models/RoomType>} [type] The filter by room type.
     * @param {String} [subjectId] The filter by user ID.
     * @param {module:models/SearchArea} [searchArea] The room search area (Active, Archive, Any, Recent by links).
     * @param {Boolean} [withoutTags] Specifies whether to search by tags or not.
     * @param {String} [tags] The tags in the serialized format.
     * @param {Boolean} [excludeSubject] Specifies whether to exclude search by user or group ID.
     * @param {module:models/ProviderFilter} [provider] The filter by provider name (None, Box, DropBox, GoogleDrive, kDrive, OneDrive, SharePoint, WebDav, Yandex, Storage).
     * @param {module:models/SubjectFilter} [subjectFilter] The filter by user (Owner - 0, Member - 1).
     * @param {module:models/QuotaFilter} [quotaFilter] The filter by quota (All - 0, Default - 1, Custom - 2).
     * @param {module:models/StorageFilter} [storageFilter] The filter by storage (None - 0, Internal - 1, ThirdParty - 2).
     * @param {Number} [count] Specifies the maximum number of items to retrieve.
     * @param {Number} [startIndex] The index from which to start retrieving the room content.
     * @param {String} [sortBy] Specifies the field by which the room content should be sorted.
     * @param {module:models/SortOrder} [sortOrder] The order in which the results are sorted.
     * @param {String} [filterValue] The text filter value used to refine search or query operations.
     * @param {} [fields] Comma-separated list of fields to include in the response
     * @param {module:api/RoomsApi~getRoomsFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderContentIntegerWrapper}
     */
    getRoomsFolder(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'type': this.apiClient.buildCollectionParam(opts['type'], 'csv'),
        'subjectId': opts['subjectId'],
        'searchArea': opts['searchArea'],
        'withoutTags': opts['withoutTags'],
        'tags': opts['tags'],
        'excludeSubject': opts['excludeSubject'],
        'provider': opts['provider'],
        'subjectFilter': opts['subjectFilter'],
        'quotaFilter': opts['quotaFilter'],
        'storageFilter': opts['storageFilter'],
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
        '/api/2.0/files/rooms', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRoomsNewItems operation.
     * @callback module:api/RoomsApi~getRoomsNewItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/NewItemsRoomNewItemsArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the room new items
     * Returns the room new items.
     * @param {module:api/RoomsApi~getRoomsNewItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/NewItemsRoomNewItemsArrayWrapper}
     */
    getRoomsNewItems(callback) {
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
      let returnType = NewItemsRoomNewItemsArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/news', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRoomsPrimaryExternalLink operation.
     * @callback module:api/RoomsApi~getRoomsPrimaryExternalLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileShareWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the room primary external link
     * Returns the primary external link of the room with the ID specified in the request.
     * @param {Number} id The room ID of the request.
     * @param {module:api/RoomsApi~getRoomsPrimaryExternalLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileShareWrapper}
     */
    getRoomsPrimaryExternalLink(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRoomsPrimaryExternalLink");
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
      let returnType = FileShareWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/{id}/link', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the pinRoom operation.
     * @callback module:api/RoomsApi~pinRoomCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pin a room
     * Pins a room with the ID specified in the request to the top of the list.
     * @param {Number} id The room ID of the request.
     * @param {module:api/RoomsApi~pinRoomCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderIntegerWrapper}
     */
    pinRoom(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling pinRoom");
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
      let returnType = FolderIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/{id}/pin', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the reorderRoom operation.
     * @callback module:api/RoomsApi~reorderRoomCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reorder the room
     * Reorders the room with ID specified in the request.
     * @param {Number} id The room ID of the request.
     * @param {module:api/RoomsApi~reorderRoomCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderIntegerWrapper}
     */
    reorderRoom(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling reorderRoom");
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
      let returnType = FolderIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/{id}/reorder', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the resendEmailInvitations operation.
     * @callback module:api/RoomsApi~resendEmailInvitationsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resend the room invitations
     * Resends the email invitations to a room with the ID specified in the request to the selected users.
     * @param {Number} id The room ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/UserInvitation} [userInvitation] The user invitation parameters.
     * @param {module:api/RoomsApi~resendEmailInvitationsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    resendEmailInvitations(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['userInvitation'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling resendEmailInvitations");
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/{id}/resend', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setPublicSettings operation.
     * @callback module:api/RoomsApi~setPublicSettingsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set public settings
     * Sets the public settings for the room template with the ID specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/SetPublicDto} [setPublicDto] 
     * @param {module:api/RoomsApi~setPublicSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    setPublicSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['setPublicDto'];

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
        '/api/2.0/files/roomtemplate/public', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setRoomLink operation.
     * @callback module:api/RoomsApi~setRoomLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileShareWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the room external or invitation link
     * Sets the room external or invitation link with the ID specified in the request.
     * @param {Number} id The room ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/RoomLinkRequest} [roomLinkRequest] The room link parameters.
     * @param {module:api/RoomsApi~setRoomLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileShareWrapper}
     */
    setRoomLink(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['roomLinkRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setRoomLink");
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
        '/api/2.0/files/rooms/{id}/links', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setRoomSecurity operation.
     * @callback module:api/RoomsApi~setRoomSecurityCallback
     * @param {String} error Error message, if any.
     * @param {module:models/RoomSecurityWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the room access rights
     * Sets the access rights to the room with the ID specified in the request.
     * @param {Number} id The room ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/RoomInvitationRequest} [roomInvitationRequest] The room invitation request.
     * @param {module:api/RoomsApi~setRoomSecurityCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/RoomSecurityWrapper}
     */
    setRoomSecurity(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['roomInvitationRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setRoomSecurity");
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
      let returnType = RoomSecurityWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/{id}/share', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the startRoomIndexExport operation.
     * @callback module:api/RoomsApi~startRoomIndexExportCallback
     * @param {String} error Error message, if any.
     * @param {module:models/DocumentBuilderTaskWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start the room index export
     * Starts the index export of a room with the ID specified in the request.
     * @param {Number} id The room ID of the request.
     * @param {module:api/RoomsApi~startRoomIndexExportCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/DocumentBuilderTaskWrapper}
     */
    startRoomIndexExport(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling startRoomIndexExport");
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
      let returnType = DocumentBuilderTaskWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/{id}/indexexport', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the terminateRoomIndexExport operation.
     * @callback module:api/RoomsApi~terminateRoomIndexExportCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Terminate the room index export
     * Terminates the room index export.
     * @param {module:api/RoomsApi~terminateRoomIndexExportCallback} callback The callback function, accepting three arguments: error, data, response
     */
    terminateRoomIndexExport(callback) {
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
        '/api/2.0/files/rooms/indexexport', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unarchiveRoom operation.
     * @callback module:api/RoomsApi~unarchiveRoomCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileOperationWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unarchive a room
     * Moves a room with the ID specified in the request from the \"Archive\" section to the \"Rooms\" section.
     * @param {Number} id The room ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/ArchiveRoomRequest} [archiveRoomRequest] The parameters for archiving a room.
     * @param {module:api/RoomsApi~unarchiveRoomCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileOperationWrapper}
     */
    unarchiveRoom(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['archiveRoomRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling unarchiveRoom");
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
      let returnType = FileOperationWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/{id}/unarchive', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unpinRoom operation.
     * @callback module:api/RoomsApi~unpinRoomCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unpin a room
     * Unpins a room with the ID specified in the request from the top of the list.
     * @param {Number} id The room ID of the request.
     * @param {module:api/RoomsApi~unpinRoomCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderIntegerWrapper}
     */
    unpinRoom(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling unpinRoom");
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
      let returnType = FolderIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/{id}/unpin', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateRoom operation.
     * @callback module:api/RoomsApi~updateRoomCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FolderIntegerWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a room
     * Updates a room with the ID specified in the request.
     * @param {Number} id The room ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateRoomRequest} [updateRoomRequest] The request parameters for updating a room.
     * @param {module:api/RoomsApi~updateRoomCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FolderIntegerWrapper}
     */
    updateRoom(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['updateRoomRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateRoom");
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
      let returnType = FolderIntegerWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/rooms/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadRoomLogo operation.
     * @callback module:api/RoomsApi~uploadRoomLogoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/UploadResultWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload a room logo image
     * Uploads a temporary image to create a room logo.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:models/KeyValuePairStringStringValues>} [formCollection] The image data.
     * @param {module:api/RoomsApi~uploadRoomLogoCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/UploadResultWrapper}
     */
    uploadRoomLogo(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'FormCollection': this.apiClient.buildCollectionParam(opts['formCollection'], 'multi')
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = UploadResultWrapper;
      return this.apiClient.callApi(
        '/api/2.0/files/logos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
