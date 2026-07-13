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
import CheckDestFolderResult from './CheckDestFolderResult';
import FileEntryDto from './FileEntryDto';

/**
 * The CheckDestFolderDto model module.
 * @module models/CheckDestFolderDto
 * @version 3.2.0
 */
class CheckDestFolderDto {
    /**
     * Constructs a new <code>CheckDestFolderDto</code>.
     * The destination folder checking information.
     * @alias module:models/CheckDestFolderDto
     */
    constructor() { 
        
        CheckDestFolderDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CheckDestFolderDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CheckDestFolderDto} obj Optional instance to populate.
     * @return {module:models/CheckDestFolderDto} The populated <code>CheckDestFolderDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckDestFolderDto();

            if (data.hasOwnProperty('result')) {
                obj['result'] = CheckDestFolderResult.constructFromObject(data['result']);
            }
            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], [FileEntryDto]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CheckDestFolderDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CheckDestFolderDto</code>.
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

        return true;
    }


}



/**
 * @member {module:models/CheckDestFolderResult} result
 */
CheckDestFolderDto.prototype['result'] = undefined;

/**
 * The list of files of the destination folder.
 * @member {Array.<module:models/FileEntryDto>} files
 */
CheckDestFolderDto.prototype['files'] = undefined;






export default CheckDestFolderDto;

