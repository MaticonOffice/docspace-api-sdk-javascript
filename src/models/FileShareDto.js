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
import FileShare from './FileShare';
import SubjectType from './SubjectType';

/**
 * The FileShareDto model module.
 * @module models/FileShareDto
 * @version 3.2.0
 */
class FileShareDto {
    /**
     * Constructs a new <code>FileShareDto</code>.
     * The file sharing information and access rights.
     * @alias module:models/FileShareDto
     */
    constructor() { 
        
        FileShareDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileShareDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FileShareDto} obj Optional instance to populate.
     * @return {module:models/FileShareDto} The populated <code>FileShareDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileShareDto();

            if (data.hasOwnProperty('access')) {
                obj['access'] = FileShare.constructFromObject(data['access']);
            }
            if (data.hasOwnProperty('sharedTo')) {
                obj['sharedTo'] = ApiClient.convertToType(data['sharedTo'], Object);
            }
            if (data.hasOwnProperty('isLocked')) {
                obj['isLocked'] = ApiClient.convertToType(data['isLocked'], 'Boolean');
            }
            if (data.hasOwnProperty('isOwner')) {
                obj['isOwner'] = ApiClient.convertToType(data['isOwner'], 'Boolean');
            }
            if (data.hasOwnProperty('canEditAccess')) {
                obj['canEditAccess'] = ApiClient.convertToType(data['canEditAccess'], 'Boolean');
            }
            if (data.hasOwnProperty('subjectType')) {
                obj['subjectType'] = SubjectType.constructFromObject(data['subjectType']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileShareDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileShareDto</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {module:models/FileShare} access
 */
FileShareDto.prototype['access'] = undefined;

/**
 * The user who has the access to the specified file.
 * @member {Object} sharedTo
 */
FileShareDto.prototype['sharedTo'] = undefined;

/**
 * Specifies if the access right is locked or not.
 * @member {Boolean} isLocked
 */
FileShareDto.prototype['isLocked'] = undefined;

/**
 * Specifies if the user is an owner of the specified file or not.
 * @member {Boolean} isOwner
 */
FileShareDto.prototype['isOwner'] = undefined;

/**
 * Specifies if the user can edit the access to the specified file or not.
 * @member {Boolean} canEditAccess
 */
FileShareDto.prototype['canEditAccess'] = undefined;

/**
 * @member {module:models/SubjectType} subjectType
 */
FileShareDto.prototype['subjectType'] = undefined;






export default FileShareDto;

