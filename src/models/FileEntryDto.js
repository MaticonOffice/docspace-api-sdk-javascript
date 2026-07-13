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
import FileEntryType from './FileEntryType';
import FileShare from './FileShare';
import FolderType from './FolderType';

/**
 * The FileEntryDto model module.
 * @module models/FileEntryDto
 * @version 3.2.0
 */
class FileEntryDto {
    /**
     * Constructs a new <code>FileEntryDto</code>.
     * The file entry information.
     * @alias module:models/FileEntryDto
     */
    constructor() { 
        
        FileEntryDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileEntryDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FileEntryDto} obj Optional instance to populate.
     * @return {module:models/FileEntryDto} The populated <code>FileEntryDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileEntryDto();

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
            if (data.hasOwnProperty('fileEntryType')) {
                obj['fileEntryType'] = FileEntryType.constructFromObject(data['fileEntryType']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileEntryDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileEntryDto</code>.
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

        return true;
    }


}



/**
 * The file entry title.
 * @member {String} title
 */
FileEntryDto.prototype['title'] = undefined;

/**
 * @member {module:models/FileShare} access
 */
FileEntryDto.prototype['access'] = undefined;

/**
 * Specifies if the file entry is shared or not.
 * @member {Boolean} shared
 */
FileEntryDto.prototype['shared'] = undefined;

/**
 * @member {module:models/ApiDateTime} created
 */
FileEntryDto.prototype['created'] = undefined;

/**
 * @member {module:models/EmployeeDto} createdBy
 */
FileEntryDto.prototype['createdBy'] = undefined;

/**
 * @member {module:models/ApiDateTime} updated
 */
FileEntryDto.prototype['updated'] = undefined;

/**
 * @member {module:models/ApiDateTime} autoDelete
 */
FileEntryDto.prototype['autoDelete'] = undefined;

/**
 * @member {module:models/FolderType} rootFolderType
 */
FileEntryDto.prototype['rootFolderType'] = undefined;

/**
 * @member {module:models/FolderType} parentRoomType
 */
FileEntryDto.prototype['parentRoomType'] = undefined;

/**
 * @member {module:models/EmployeeDto} updatedBy
 */
FileEntryDto.prototype['updatedBy'] = undefined;

/**
 * Specifies if the file entry provider is specified or not.
 * @member {Boolean} providerItem
 */
FileEntryDto.prototype['providerItem'] = undefined;

/**
 * The provider key of the file entry.
 * @member {String} providerKey
 */
FileEntryDto.prototype['providerKey'] = undefined;

/**
 * The provider ID of the file entry.
 * @member {Number} providerId
 */
FileEntryDto.prototype['providerId'] = undefined;

/**
 * The order of the file entry.
 * @member {String} order
 */
FileEntryDto.prototype['order'] = undefined;

/**
 * @member {module:models/FileEntryType} fileEntryType
 */
FileEntryDto.prototype['fileEntryType'] = undefined;






export default FileEntryDto;

