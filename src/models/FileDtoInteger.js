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
import DraftLocationInteger from './DraftLocationInteger';
import EmployeeDto from './EmployeeDto';
import FileDtoIntegerSecurity from './FileDtoIntegerSecurity';
import FileDtoIntegerViewAccessibility from './FileDtoIntegerViewAccessibility';
import FileEntryType from './FileEntryType';
import FileShare from './FileShare';
import FileStatus from './FileStatus';
import FileType from './FileType';
import FolderType from './FolderType';
import FormFillingStatus from './FormFillingStatus';
import Thumbnail from './Thumbnail';

/**
 * The FileDtoInteger model module.
 * @module models/FileDtoInteger
 * @version 3.2.0
 */
class FileDtoInteger {
    /**
     * Constructs a new <code>FileDtoInteger</code>.
     * The file parameters.
     * @alias module:models/FileDtoInteger
     */
    constructor() { 
        
        FileDtoInteger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileDtoInteger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FileDtoInteger} obj Optional instance to populate.
     * @return {module:models/FileDtoInteger} The populated <code>FileDtoInteger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileDtoInteger();

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
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('rootFolderId')) {
                obj['rootFolderId'] = ApiClient.convertToType(data['rootFolderId'], 'Number');
            }
            if (data.hasOwnProperty('originId')) {
                obj['originId'] = ApiClient.convertToType(data['originId'], 'Number');
            }
            if (data.hasOwnProperty('originRoomId')) {
                obj['originRoomId'] = ApiClient.convertToType(data['originRoomId'], 'Number');
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
            if (data.hasOwnProperty('folderId')) {
                obj['folderId'] = ApiClient.convertToType(data['folderId'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('versionGroup')) {
                obj['versionGroup'] = ApiClient.convertToType(data['versionGroup'], 'Number');
            }
            if (data.hasOwnProperty('contentLength')) {
                obj['contentLength'] = ApiClient.convertToType(data['contentLength'], 'String');
            }
            if (data.hasOwnProperty('pureContentLength')) {
                obj['pureContentLength'] = ApiClient.convertToType(data['pureContentLength'], 'Number');
            }
            if (data.hasOwnProperty('fileStatus')) {
                obj['fileStatus'] = FileStatus.constructFromObject(data['fileStatus']);
            }
            if (data.hasOwnProperty('mute')) {
                obj['mute'] = ApiClient.convertToType(data['mute'], 'Boolean');
            }
            if (data.hasOwnProperty('viewUrl')) {
                obj['viewUrl'] = ApiClient.convertToType(data['viewUrl'], 'String');
            }
            if (data.hasOwnProperty('webUrl')) {
                obj['webUrl'] = ApiClient.convertToType(data['webUrl'], 'String');
            }
            if (data.hasOwnProperty('shortWebUrl')) {
                obj['shortWebUrl'] = ApiClient.convertToType(data['shortWebUrl'], 'String');
            }
            if (data.hasOwnProperty('fileType')) {
                obj['fileType'] = FileType.constructFromObject(data['fileType']);
            }
            if (data.hasOwnProperty('fileExst')) {
                obj['fileExst'] = ApiClient.convertToType(data['fileExst'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('encrypted')) {
                obj['encrypted'] = ApiClient.convertToType(data['encrypted'], 'Boolean');
            }
            if (data.hasOwnProperty('thumbnailUrl')) {
                obj['thumbnailUrl'] = ApiClient.convertToType(data['thumbnailUrl'], 'String');
            }
            if (data.hasOwnProperty('thumbnailStatus')) {
                obj['thumbnailStatus'] = Thumbnail.constructFromObject(data['thumbnailStatus']);
            }
            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
            }
            if (data.hasOwnProperty('lockedBy')) {
                obj['lockedBy'] = ApiClient.convertToType(data['lockedBy'], 'String');
            }
            if (data.hasOwnProperty('hasDraft')) {
                obj['hasDraft'] = ApiClient.convertToType(data['hasDraft'], 'Boolean');
            }
            if (data.hasOwnProperty('formFillingStatus')) {
                obj['formFillingStatus'] = FormFillingStatus.constructFromObject(data['formFillingStatus']);
            }
            if (data.hasOwnProperty('isForm')) {
                obj['isForm'] = ApiClient.convertToType(data['isForm'], 'Boolean');
            }
            if (data.hasOwnProperty('customFilterEnabled')) {
                obj['customFilterEnabled'] = ApiClient.convertToType(data['customFilterEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('customFilterEnabledBy')) {
                obj['customFilterEnabledBy'] = ApiClient.convertToType(data['customFilterEnabledBy'], 'String');
            }
            if (data.hasOwnProperty('startFilling')) {
                obj['startFilling'] = ApiClient.convertToType(data['startFilling'], 'Boolean');
            }
            if (data.hasOwnProperty('inProcessFolderId')) {
                obj['inProcessFolderId'] = ApiClient.convertToType(data['inProcessFolderId'], 'Number');
            }
            if (data.hasOwnProperty('inProcessFolderTitle')) {
                obj['inProcessFolderTitle'] = ApiClient.convertToType(data['inProcessFolderTitle'], 'String');
            }
            if (data.hasOwnProperty('draftLocation')) {
                obj['draftLocation'] = DraftLocationInteger.constructFromObject(data['draftLocation']);
            }
            if (data.hasOwnProperty('viewAccessibility')) {
                obj['viewAccessibility'] = FileDtoIntegerViewAccessibility.constructFromObject(data['viewAccessibility']);
            }
            if (data.hasOwnProperty('availableExternalRights')) {
                obj['availableExternalRights'] = ApiClient.convertToType(data['availableExternalRights'], {'String': 'Boolean'});
            }
            if (data.hasOwnProperty('lastOpened')) {
                obj['lastOpened'] = ApiDateTime.constructFromObject(data['lastOpened']);
            }
            if (data.hasOwnProperty('expired')) {
                obj['expired'] = ApiDateTime.constructFromObject(data['expired']);
            }
            if (data.hasOwnProperty('fileEntryType')) {
                obj['fileEntryType'] = FileEntryType.constructFromObject(data['fileEntryType']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileDtoInteger</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileDtoInteger</code>.
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
        if (data['contentLength'] && !(typeof data['contentLength'] === 'string' || data['contentLength'] instanceof String)) {
            throw new Error("Expected the field `contentLength` to be a primitive type in the JSON string but got " + data['contentLength']);
        }
        // ensure the json data is a string
        if (data['viewUrl'] && !(typeof data['viewUrl'] === 'string' || data['viewUrl'] instanceof String)) {
            throw new Error("Expected the field `viewUrl` to be a primitive type in the JSON string but got " + data['viewUrl']);
        }
        // ensure the json data is a string
        if (data['webUrl'] && !(typeof data['webUrl'] === 'string' || data['webUrl'] instanceof String)) {
            throw new Error("Expected the field `webUrl` to be a primitive type in the JSON string but got " + data['webUrl']);
        }
        // ensure the json data is a string
        if (data['shortWebUrl'] && !(typeof data['shortWebUrl'] === 'string' || data['shortWebUrl'] instanceof String)) {
            throw new Error("Expected the field `shortWebUrl` to be a primitive type in the JSON string but got " + data['shortWebUrl']);
        }
        // ensure the json data is a string
        if (data['fileExst'] && !(typeof data['fileExst'] === 'string' || data['fileExst'] instanceof String)) {
            throw new Error("Expected the field `fileExst` to be a primitive type in the JSON string but got " + data['fileExst']);
        }
        // ensure the json data is a string
        if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
            throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
        }
        // ensure the json data is a string
        if (data['thumbnailUrl'] && !(typeof data['thumbnailUrl'] === 'string' || data['thumbnailUrl'] instanceof String)) {
            throw new Error("Expected the field `thumbnailUrl` to be a primitive type in the JSON string but got " + data['thumbnailUrl']);
        }
        // ensure the json data is a string
        if (data['lockedBy'] && !(typeof data['lockedBy'] === 'string' || data['lockedBy'] instanceof String)) {
            throw new Error("Expected the field `lockedBy` to be a primitive type in the JSON string but got " + data['lockedBy']);
        }
        // ensure the json data is a string
        if (data['customFilterEnabledBy'] && !(typeof data['customFilterEnabledBy'] === 'string' || data['customFilterEnabledBy'] instanceof String)) {
            throw new Error("Expected the field `customFilterEnabledBy` to be a primitive type in the JSON string but got " + data['customFilterEnabledBy']);
        }
        // ensure the json data is a string
        if (data['inProcessFolderTitle'] && !(typeof data['inProcessFolderTitle'] === 'string' || data['inProcessFolderTitle'] instanceof String)) {
            throw new Error("Expected the field `inProcessFolderTitle` to be a primitive type in the JSON string but got " + data['inProcessFolderTitle']);
        }
        // validate the optional field `draftLocation`
        if (data['draftLocation']) { // data not null
          DraftLocationInteger.validateJSON(data['draftLocation']);
        }
        // validate the optional field `viewAccessibility`
        if (data['viewAccessibility']) { // data not null
          FileDtoIntegerViewAccessibility.validateJSON(data['viewAccessibility']);
        }
        // validate the optional field `lastOpened`
        if (data['lastOpened']) { // data not null
          ApiDateTime.validateJSON(data['lastOpened']);
        }
        // validate the optional field `expired`
        if (data['expired']) { // data not null
          ApiDateTime.validateJSON(data['expired']);
        }

        return true;
    }


}



/**
 * The file entry title.
 * @member {String} title
 */
FileDtoInteger.prototype['title'] = undefined;

/**
 * @member {module:models/FileShare} access
 */
FileDtoInteger.prototype['access'] = undefined;

/**
 * Specifies if the file entry is shared or not.
 * @member {Boolean} shared
 */
FileDtoInteger.prototype['shared'] = undefined;

/**
 * @member {module:models/ApiDateTime} created
 */
FileDtoInteger.prototype['created'] = undefined;

/**
 * @member {module:models/EmployeeDto} createdBy
 */
FileDtoInteger.prototype['createdBy'] = undefined;

/**
 * @member {module:models/ApiDateTime} updated
 */
FileDtoInteger.prototype['updated'] = undefined;

/**
 * @member {module:models/ApiDateTime} autoDelete
 */
FileDtoInteger.prototype['autoDelete'] = undefined;

/**
 * @member {module:models/FolderType} rootFolderType
 */
FileDtoInteger.prototype['rootFolderType'] = undefined;

/**
 * @member {module:models/FolderType} parentRoomType
 */
FileDtoInteger.prototype['parentRoomType'] = undefined;

/**
 * @member {module:models/EmployeeDto} updatedBy
 */
FileDtoInteger.prototype['updatedBy'] = undefined;

/**
 * Specifies if the file entry provider is specified or not.
 * @member {Boolean} providerItem
 */
FileDtoInteger.prototype['providerItem'] = undefined;

/**
 * The provider key of the file entry.
 * @member {String} providerKey
 */
FileDtoInteger.prototype['providerKey'] = undefined;

/**
 * The provider ID of the file entry.
 * @member {Number} providerId
 */
FileDtoInteger.prototype['providerId'] = undefined;

/**
 * The order of the file entry.
 * @member {String} order
 */
FileDtoInteger.prototype['order'] = undefined;

/**
 * The file entry ID.
 * @member {Number} id
 */
FileDtoInteger.prototype['id'] = undefined;

/**
 * The root folder ID of the file entry.
 * @member {Number} rootFolderId
 */
FileDtoInteger.prototype['rootFolderId'] = undefined;

/**
 * The origin ID of the file entry.
 * @member {Number} originId
 */
FileDtoInteger.prototype['originId'] = undefined;

/**
 * The origin room ID of the file entry.
 * @member {Number} originRoomId
 */
FileDtoInteger.prototype['originRoomId'] = undefined;

/**
 * The origin title of the file entry.
 * @member {String} originTitle
 */
FileDtoInteger.prototype['originTitle'] = undefined;

/**
 * The origin room title of the file entry.
 * @member {String} originRoomTitle
 */
FileDtoInteger.prototype['originRoomTitle'] = undefined;

/**
 * Specifies if the file entry can be shared or not.
 * @member {Boolean} canShare
 */
FileDtoInteger.prototype['canShare'] = undefined;

/**
 * @member {module:models/FileDtoIntegerSecurity} security
 */
FileDtoInteger.prototype['security'] = undefined;

/**
 * The request token of the file entry.
 * @member {String} requestToken
 */
FileDtoInteger.prototype['requestToken'] = undefined;

/**
 * The folder ID where the file is located.
 * @member {Number} folderId
 */
FileDtoInteger.prototype['folderId'] = undefined;

/**
 * The file version.
 * @member {Number} version
 */
FileDtoInteger.prototype['version'] = undefined;

/**
 * The version group of the file.
 * @member {Number} versionGroup
 */
FileDtoInteger.prototype['versionGroup'] = undefined;

/**
 * The content length of the file.
 * @member {String} contentLength
 */
FileDtoInteger.prototype['contentLength'] = undefined;

/**
 * The pure content length of the file.
 * @member {Number} pureContentLength
 */
FileDtoInteger.prototype['pureContentLength'] = undefined;

/**
 * @member {module:models/FileStatus} fileStatus
 */
FileDtoInteger.prototype['fileStatus'] = undefined;

/**
 * Specifies if the file is muted or not.
 * @member {Boolean} mute
 */
FileDtoInteger.prototype['mute'] = undefined;

/**
 * The URL link to view the file.
 * @member {String} viewUrl
 */
FileDtoInteger.prototype['viewUrl'] = undefined;

/**
 * The Web URL link to the file.
 * @member {String} webUrl
 */
FileDtoInteger.prototype['webUrl'] = undefined;

/**
 * The short Web URL.
 * @member {String} shortWebUrl
 */
FileDtoInteger.prototype['shortWebUrl'] = undefined;

/**
 * @member {module:models/FileType} fileType
 */
FileDtoInteger.prototype['fileType'] = undefined;

/**
 * The file extension.
 * @member {String} fileExst
 */
FileDtoInteger.prototype['fileExst'] = undefined;

/**
 * The comment to the file.
 * @member {String} comment
 */
FileDtoInteger.prototype['comment'] = undefined;

/**
 * Specifies if the file is encrypted or not.
 * @member {Boolean} encrypted
 */
FileDtoInteger.prototype['encrypted'] = undefined;

/**
 * The thumbnail URL of the file.
 * @member {String} thumbnailUrl
 */
FileDtoInteger.prototype['thumbnailUrl'] = undefined;

/**
 * @member {module:models/Thumbnail} thumbnailStatus
 */
FileDtoInteger.prototype['thumbnailStatus'] = undefined;

/**
 * Specifies if the file is locked or not.
 * @member {Boolean} locked
 */
FileDtoInteger.prototype['locked'] = undefined;

/**
 * The user ID of the person who locked the file.
 * @member {String} lockedBy
 */
FileDtoInteger.prototype['lockedBy'] = undefined;

/**
 * Specifies if the file has a draft or not.
 * @member {Boolean} hasDraft
 */
FileDtoInteger.prototype['hasDraft'] = undefined;

/**
 * @member {module:models/FormFillingStatus} formFillingStatus
 */
FileDtoInteger.prototype['formFillingStatus'] = undefined;

/**
 * Specifies if the file is a form or not.
 * @member {Boolean} isForm
 */
FileDtoInteger.prototype['isForm'] = undefined;

/**
 * Specifies if the Custom Filter editing mode is enabled for a file or not.
 * @member {Boolean} customFilterEnabled
 */
FileDtoInteger.prototype['customFilterEnabled'] = undefined;

/**
 * The name of the user who enabled a Custom Filter editing mode for a file.
 * @member {String} customFilterEnabledBy
 */
FileDtoInteger.prototype['customFilterEnabledBy'] = undefined;

/**
 * Specifies if the filling has started or not.
 * @member {Boolean} startFilling
 */
FileDtoInteger.prototype['startFilling'] = undefined;

/**
 * The InProcess folder ID of the file.
 * @member {Number} inProcessFolderId
 */
FileDtoInteger.prototype['inProcessFolderId'] = undefined;

/**
 * The InProcess folder title of the file.
 * @member {String} inProcessFolderTitle
 */
FileDtoInteger.prototype['inProcessFolderTitle'] = undefined;

/**
 * @member {module:models/DraftLocationInteger} draftLocation
 */
FileDtoInteger.prototype['draftLocation'] = undefined;

/**
 * @member {module:models/FileDtoIntegerViewAccessibility} viewAccessibility
 */
FileDtoInteger.prototype['viewAccessibility'] = undefined;

/**
 * The available external rights of the file.
 * @member {Object.<String, Boolean>} availableExternalRights
 */
FileDtoInteger.prototype['availableExternalRights'] = undefined;

/**
 * @member {module:models/ApiDateTime} lastOpened
 */
FileDtoInteger.prototype['lastOpened'] = undefined;

/**
 * @member {module:models/ApiDateTime} expired
 */
FileDtoInteger.prototype['expired'] = undefined;

/**
 * @member {module:models/FileEntryType} fileEntryType
 */
FileDtoInteger.prototype['fileEntryType'] = undefined;






export default FileDtoInteger;

