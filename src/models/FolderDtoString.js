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
import ApiClient from '../ApiClient';
import ApiDateTime from './ApiDateTime';
import EmployeeDto from './EmployeeDto';
import FileDtoIntegerSecurity from './FileDtoIntegerSecurity';
import FileEntryType from './FileEntryType';
import FileShare from './FileShare';
import FolderType from './FolderType';
import Logo from './Logo';
import RoomDataLifetimeDto from './RoomDataLifetimeDto';
import RoomType from './RoomType';
import WatermarkDto from './WatermarkDto';

/**
 * The FolderDtoString model module.
 * @module models/FolderDtoString
 * @version 3.2.0
 */
class FolderDtoString {
    /**
     * Constructs a new <code>FolderDtoString</code>.
     * The folder parameters.
     * @alias module:models/FolderDtoString
     */
    constructor() { 
        
        FolderDtoString.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FolderDtoString</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FolderDtoString} obj Optional instance to populate.
     * @return {module:models/FolderDtoString} The populated <code>FolderDtoString</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FolderDtoString();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('access')) {
                obj['access'] = FileShare.constructFromObject(data['access']);
            }
            if (data.hasOwnProperty('shared')) {
                obj['shared'] = ApiClient.convertToType(data['shared'], 'Boolean');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiDateTime.constructFromObject(data['created']);
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = EmployeeDto.constructFromObject(data['createdBy']);
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiDateTime.constructFromObject(data['updated']);
            }
            if (data.hasOwnProperty('autoDelete')) {
                obj['autoDelete'] = ApiDateTime.constructFromObject(data['autoDelete']);
            }
            if (data.hasOwnProperty('rootFolderType')) {
                obj['rootFolderType'] = FolderType.constructFromObject(data['rootFolderType']);
            }
            if (data.hasOwnProperty('parentRoomType')) {
                obj['parentRoomType'] = FolderType.constructFromObject(data['parentRoomType']);
            }
            if (data.hasOwnProperty('updatedBy')) {
                obj['updatedBy'] = EmployeeDto.constructFromObject(data['updatedBy']);
            }
            if (data.hasOwnProperty('providerItem')) {
                obj['providerItem'] = ApiClient.convertToType(data['providerItem'], 'Boolean');
            }
            if (data.hasOwnProperty('providerKey')) {
                obj['providerKey'] = ApiClient.convertToType(data['providerKey'], 'String');
            }
            if (data.hasOwnProperty('providerId')) {
                obj['providerId'] = ApiClient.convertToType(data['providerId'], 'Number');
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = ApiClient.convertToType(data['order'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('rootFolderId')) {
                obj['rootFolderId'] = ApiClient.convertToType(data['rootFolderId'], 'String');
            }
            if (data.hasOwnProperty('originId')) {
                obj['originId'] = ApiClient.convertToType(data['originId'], 'String');
            }
            if (data.hasOwnProperty('originRoomId')) {
                obj['originRoomId'] = ApiClient.convertToType(data['originRoomId'], 'String');
            }
            if (data.hasOwnProperty('originTitle')) {
                obj['originTitle'] = ApiClient.convertToType(data['originTitle'], 'String');
            }
            if (data.hasOwnProperty('originRoomTitle')) {
                obj['originRoomTitle'] = ApiClient.convertToType(data['originRoomTitle'], 'String');
            }
            if (data.hasOwnProperty('canShare')) {
                obj['canShare'] = ApiClient.convertToType(data['canShare'], 'Boolean');
            }
            if (data.hasOwnProperty('security')) {
                obj['security'] = FileDtoIntegerSecurity.constructFromObject(data['security']);
            }
            if (data.hasOwnProperty('requestToken')) {
                obj['requestToken'] = ApiClient.convertToType(data['requestToken'], 'String');
            }
            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
            }
            if (data.hasOwnProperty('filesCount')) {
                obj['filesCount'] = ApiClient.convertToType(data['filesCount'], 'Number');
            }
            if (data.hasOwnProperty('foldersCount')) {
                obj['foldersCount'] = ApiClient.convertToType(data['foldersCount'], 'Number');
            }
            if (data.hasOwnProperty('isShareable')) {
                obj['isShareable'] = ApiClient.convertToType(data['isShareable'], 'Boolean');
            }
            if (data.hasOwnProperty('isFavorite')) {
                obj['isFavorite'] = ApiClient.convertToType(data['isFavorite'], 'Boolean');
            }
            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], 'Number');
            }
            if (data.hasOwnProperty('mute')) {
                obj['mute'] = ApiClient.convertToType(data['mute'], 'Boolean');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = Logo.constructFromObject(data['logo']);
            }
            if (data.hasOwnProperty('pinned')) {
                obj['pinned'] = ApiClient.convertToType(data['pinned'], 'Boolean');
            }
            if (data.hasOwnProperty('roomType')) {
                obj['roomType'] = RoomType.constructFromObject(data['roomType']);
            }
            if (data.hasOwnProperty('private')) {
                obj['private'] = ApiClient.convertToType(data['private'], 'Boolean');
            }
            if (data.hasOwnProperty('indexing')) {
                obj['indexing'] = ApiClient.convertToType(data['indexing'], 'Boolean');
            }
            if (data.hasOwnProperty('denyDownload')) {
                obj['denyDownload'] = ApiClient.convertToType(data['denyDownload'], 'Boolean');
            }
            if (data.hasOwnProperty('lifetime')) {
                obj['lifetime'] = RoomDataLifetimeDto.constructFromObject(data['lifetime']);
            }
            if (data.hasOwnProperty('watermark')) {
                obj['watermark'] = WatermarkDto.constructFromObject(data['watermark']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = FolderType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('inRoom')) {
                obj['inRoom'] = ApiClient.convertToType(data['inRoom'], 'Boolean');
            }
            if (data.hasOwnProperty('quotaLimit')) {
                obj['quotaLimit'] = ApiClient.convertToType(data['quotaLimit'], 'Number');
            }
            if (data.hasOwnProperty('isCustomQuota')) {
                obj['isCustomQuota'] = ApiClient.convertToType(data['isCustomQuota'], 'Boolean');
            }
            if (data.hasOwnProperty('usedSpace')) {
                obj['usedSpace'] = ApiClient.convertToType(data['usedSpace'], 'Number');
            }
            if (data.hasOwnProperty('external')) {
                obj['external'] = ApiClient.convertToType(data['external'], 'Boolean');
            }
            if (data.hasOwnProperty('passwordProtected')) {
                obj['passwordProtected'] = ApiClient.convertToType(data['passwordProtected'], 'Boolean');
            }
            if (data.hasOwnProperty('expired')) {
                obj['expired'] = ApiClient.convertToType(data['expired'], 'Boolean');
            }
            if (data.hasOwnProperty('fileEntryType')) {
                obj['fileEntryType'] = FileEntryType.constructFromObject(data['fileEntryType']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FolderDtoString</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FolderDtoString</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // validate the optional field `created`
        if (data['created']) { // data not null
          ApiDateTime.validateJSON(data['created']);
        }
        // validate the optional field `createdBy`
        if (data['createdBy']) { // data not null
          EmployeeDto.validateJSON(data['createdBy']);
        }
        // validate the optional field `updated`
        if (data['updated']) { // data not null
          ApiDateTime.validateJSON(data['updated']);
        }
        // validate the optional field `autoDelete`
        if (data['autoDelete']) { // data not null
          ApiDateTime.validateJSON(data['autoDelete']);
        }
        // validate the optional field `updatedBy`
        if (data['updatedBy']) { // data not null
          EmployeeDto.validateJSON(data['updatedBy']);
        }
        // ensure the json data is a string
        if (data['providerKey'] && !(typeof data['providerKey'] === 'string' || data['providerKey'] instanceof String)) {
            throw new Error("Expected the field `providerKey` to be a primitive type in the JSON string but got " + data['providerKey']);
        }
        // ensure the json data is a string
        if (data['order'] && !(typeof data['order'] === 'string' || data['order'] instanceof String)) {
            throw new Error("Expected the field `order` to be a primitive type in the JSON string but got " + data['order']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['rootFolderId'] && !(typeof data['rootFolderId'] === 'string' || data['rootFolderId'] instanceof String)) {
            throw new Error("Expected the field `rootFolderId` to be a primitive type in the JSON string but got " + data['rootFolderId']);
        }
        // ensure the json data is a string
        if (data['originId'] && !(typeof data['originId'] === 'string' || data['originId'] instanceof String)) {
            throw new Error("Expected the field `originId` to be a primitive type in the JSON string but got " + data['originId']);
        }
        // ensure the json data is a string
        if (data['originRoomId'] && !(typeof data['originRoomId'] === 'string' || data['originRoomId'] instanceof String)) {
            throw new Error("Expected the field `originRoomId` to be a primitive type in the JSON string but got " + data['originRoomId']);
        }
        // ensure the json data is a string
        if (data['originTitle'] && !(typeof data['originTitle'] === 'string' || data['originTitle'] instanceof String)) {
            throw new Error("Expected the field `originTitle` to be a primitive type in the JSON string but got " + data['originTitle']);
        }
        // ensure the json data is a string
        if (data['originRoomTitle'] && !(typeof data['originRoomTitle'] === 'string' || data['originRoomTitle'] instanceof String)) {
            throw new Error("Expected the field `originRoomTitle` to be a primitive type in the JSON string but got " + data['originRoomTitle']);
        }
        // validate the optional field `security`
        if (data['security']) { // data not null
          FileDtoIntegerSecurity.validateJSON(data['security']);
        }
        // ensure the json data is a string
        if (data['requestToken'] && !(typeof data['requestToken'] === 'string' || data['requestToken'] instanceof String)) {
            throw new Error("Expected the field `requestToken` to be a primitive type in the JSON string but got " + data['requestToken']);
        }
        // ensure the json data is a string
        if (data['parentId'] && !(typeof data['parentId'] === 'string' || data['parentId'] instanceof String)) {
            throw new Error("Expected the field `parentId` to be a primitive type in the JSON string but got " + data['parentId']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // validate the optional field `logo`
        if (data['logo']) { // data not null
          Logo.validateJSON(data['logo']);
        }
        // validate the optional field `lifetime`
        if (data['lifetime']) { // data not null
          RoomDataLifetimeDto.validateJSON(data['lifetime']);
        }
        // validate the optional field `watermark`
        if (data['watermark']) { // data not null
          WatermarkDto.validateJSON(data['watermark']);
        }

        return true;
    }


}



/**
 * The file entry title.
 * @member {String} title
 */
FolderDtoString.prototype['title'] = undefined;

/**
 * @member {module:models/FileShare} access
 */
FolderDtoString.prototype['access'] = undefined;

/**
 * Specifies if the file entry is shared or not.
 * @member {Boolean} shared
 */
FolderDtoString.prototype['shared'] = undefined;

/**
 * @member {module:models/ApiDateTime} created
 */
FolderDtoString.prototype['created'] = undefined;

/**
 * @member {module:models/EmployeeDto} createdBy
 */
FolderDtoString.prototype['createdBy'] = undefined;

/**
 * @member {module:models/ApiDateTime} updated
 */
FolderDtoString.prototype['updated'] = undefined;

/**
 * @member {module:models/ApiDateTime} autoDelete
 */
FolderDtoString.prototype['autoDelete'] = undefined;

/**
 * @member {module:models/FolderType} rootFolderType
 */
FolderDtoString.prototype['rootFolderType'] = undefined;

/**
 * @member {module:models/FolderType} parentRoomType
 */
FolderDtoString.prototype['parentRoomType'] = undefined;

/**
 * @member {module:models/EmployeeDto} updatedBy
 */
FolderDtoString.prototype['updatedBy'] = undefined;

/**
 * Specifies if the file entry provider is specified or not.
 * @member {Boolean} providerItem
 */
FolderDtoString.prototype['providerItem'] = undefined;

/**
 * The provider key of the file entry.
 * @member {String} providerKey
 */
FolderDtoString.prototype['providerKey'] = undefined;

/**
 * The provider ID of the file entry.
 * @member {Number} providerId
 */
FolderDtoString.prototype['providerId'] = undefined;

/**
 * The order of the file entry.
 * @member {String} order
 */
FolderDtoString.prototype['order'] = undefined;

/**
 * The file entry ID.
 * @member {String} id
 */
FolderDtoString.prototype['id'] = undefined;

/**
 * The root folder ID of the file entry.
 * @member {String} rootFolderId
 */
FolderDtoString.prototype['rootFolderId'] = undefined;

/**
 * The origin ID of the file entry.
 * @member {String} originId
 */
FolderDtoString.prototype['originId'] = undefined;

/**
 * The origin room ID of the file entry.
 * @member {String} originRoomId
 */
FolderDtoString.prototype['originRoomId'] = undefined;

/**
 * The origin title of the file entry.
 * @member {String} originTitle
 */
FolderDtoString.prototype['originTitle'] = undefined;

/**
 * The origin room title of the file entry.
 * @member {String} originRoomTitle
 */
FolderDtoString.prototype['originRoomTitle'] = undefined;

/**
 * Specifies if the file entry can be shared or not.
 * @member {Boolean} canShare
 */
FolderDtoString.prototype['canShare'] = undefined;

/**
 * @member {module:models/FileDtoIntegerSecurity} security
 */
FolderDtoString.prototype['security'] = undefined;

/**
 * The request token of the file entry.
 * @member {String} requestToken
 */
FolderDtoString.prototype['requestToken'] = undefined;

/**
 * The parent folder ID of the folder.
 * @member {String} parentId
 */
FolderDtoString.prototype['parentId'] = undefined;

/**
 * The number of files that the folder contains.
 * @member {Number} filesCount
 */
FolderDtoString.prototype['filesCount'] = undefined;

/**
 * The number of folders that the folder contains.
 * @member {Number} foldersCount
 */
FolderDtoString.prototype['foldersCount'] = undefined;

/**
 * Specifies if the folder can be shared or not.
 * @member {Boolean} isShareable
 */
FolderDtoString.prototype['isShareable'] = undefined;

/**
 * Specifies if the folder is favorite or not.
 * @member {Boolean} isFavorite
 */
FolderDtoString.prototype['isFavorite'] = undefined;

/**
 * The new element index in the folder.
 * @member {Number} new
 */
FolderDtoString.prototype['new'] = undefined;

/**
 * Specifies if the folder notifications are enabled or not.
 * @member {Boolean} mute
 */
FolderDtoString.prototype['mute'] = undefined;

/**
 * The list of tags of the folder.
 * @member {Array.<String>} tags
 */
FolderDtoString.prototype['tags'] = undefined;

/**
 * @member {module:models/Logo} logo
 */
FolderDtoString.prototype['logo'] = undefined;

/**
 * Specifies if the folder is pinned or not.
 * @member {Boolean} pinned
 */
FolderDtoString.prototype['pinned'] = undefined;

/**
 * @member {module:models/RoomType} roomType
 */
FolderDtoString.prototype['roomType'] = undefined;

/**
 * Specifies if the folder is private or not.
 * @member {Boolean} private
 */
FolderDtoString.prototype['private'] = undefined;

/**
 * Specifies if the folder is indexed or not.
 * @member {Boolean} indexing
 */
FolderDtoString.prototype['indexing'] = undefined;

/**
 * Specifies if the folder can be downloaded or not.
 * @member {Boolean} denyDownload
 */
FolderDtoString.prototype['denyDownload'] = undefined;

/**
 * @member {module:models/RoomDataLifetimeDto} lifetime
 */
FolderDtoString.prototype['lifetime'] = undefined;

/**
 * @member {module:models/WatermarkDto} watermark
 */
FolderDtoString.prototype['watermark'] = undefined;

/**
 * @member {module:models/FolderType} type
 */
FolderDtoString.prototype['type'] = undefined;

/**
 * Specifies if the folder is placed in the room or not.
 * @member {Boolean} inRoom
 */
FolderDtoString.prototype['inRoom'] = undefined;

/**
 * The folder quota limit.
 * @member {Number} quotaLimit
 */
FolderDtoString.prototype['quotaLimit'] = undefined;

/**
 * Specifies if the folder room has a custom quota or not.
 * @member {Boolean} isCustomQuota
 */
FolderDtoString.prototype['isCustomQuota'] = undefined;

/**
 * How much folder space is used (counter).
 * @member {Number} usedSpace
 */
FolderDtoString.prototype['usedSpace'] = undefined;

/**
 * Specifies if the folder can be accessed via an external link or not.
 * @member {Boolean} external
 */
FolderDtoString.prototype['external'] = undefined;

/**
 * Specifies if the folder is password protected or not.
 * @member {Boolean} passwordProtected
 */
FolderDtoString.prototype['passwordProtected'] = undefined;

/**
 * Specifies if an external link to the folder is expired or not.
 * @member {Boolean} expired
 */
FolderDtoString.prototype['expired'] = undefined;

/**
 * @member {module:models/FileEntryType} fileEntryType
 */
FolderDtoString.prototype['fileEntryType'] = undefined;






export default FolderDtoString;

