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
import FileEntryDto from './FileEntryDto';
import FolderDtoInteger from './FolderDtoInteger';

/**
 * The FolderContentDtoInteger model module.
 * @module models/FolderContentDtoInteger
 * @version 3.2.0
 */
class FolderContentDtoInteger {
    /**
     * Constructs a new <code>FolderContentDtoInteger</code>.
     * The folder content information.
     * @alias module:models/FolderContentDtoInteger
     */
    constructor() { 
        
        FolderContentDtoInteger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FolderContentDtoInteger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FolderContentDtoInteger} obj Optional instance to populate.
     * @return {module:models/FolderContentDtoInteger} The populated <code>FolderContentDtoInteger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FolderContentDtoInteger();

            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], [FileEntryDto]);
            }
            if (data.hasOwnProperty('folders')) {
                obj['folders'] = ApiClient.convertToType(data['folders'], [FileEntryDto]);
            }
            if (data.hasOwnProperty('current')) {
                obj['current'] = FolderDtoInteger.constructFromObject(data['current']);
            }
            if (data.hasOwnProperty('pathParts')) {
                obj['pathParts'] = ApiClient.convertToType(data['pathParts'], Object);
            }
            if (data.hasOwnProperty('startIndex')) {
                obj['startIndex'] = ApiClient.convertToType(data['startIndex'], 'Number');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FolderContentDtoInteger</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FolderContentDtoInteger</code>.
     */
    static validateJSON(data) {
        if (data['files']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['files'])) {
                throw new Error("Expected the field `files` to be an array in the JSON data but got " + data['files']);
            }
            // validate the optional field `files` (array)
            for (const item of data['files']) {
                FileEntryDto.validateJSON(item);
            };
        }
        if (data['folders']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['folders'])) {
                throw new Error("Expected the field `folders` to be an array in the JSON data but got " + data['folders']);
            }
            // validate the optional field `folders` (array)
            for (const item of data['folders']) {
                FileEntryDto.validateJSON(item);
            };
        }
        // validate the optional field `current`
        if (data['current']) { // data not null
          FolderDtoInteger.validateJSON(data['current']);
        }

        return true;
    }


}



/**
 * The list of files in the folder.
 * @member {Array.<module:models/FileEntryDto>} files
 */
FolderContentDtoInteger.prototype['files'] = undefined;

/**
 * The list of folders in the folder.
 * @member {Array.<module:models/FileEntryDto>} folders
 */
FolderContentDtoInteger.prototype['folders'] = undefined;

/**
 * @member {module:models/FolderDtoInteger} current
 */
FolderContentDtoInteger.prototype['current'] = undefined;

/**
 * The folder path.
 * @member {Object} pathParts
 */
FolderContentDtoInteger.prototype['pathParts'] = undefined;

/**
 * The folder start index.
 * @member {Number} startIndex
 */
FolderContentDtoInteger.prototype['startIndex'] = undefined;

/**
 * The number of folder elements.
 * @member {Number} count
 */
FolderContentDtoInteger.prototype['count'] = undefined;

/**
 * The total number of elements in the folder.
 * @member {Number} total
 */
FolderContentDtoInteger.prototype['total'] = undefined;

/**
 * The new element index in the folder.
 * @member {Number} new
 */
FolderContentDtoInteger.prototype['new'] = undefined;






export default FolderContentDtoInteger;

