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
import FileOperationType from './FileOperationType';

/**
 * The FileOperationDto model module.
 * @module models/FileOperationDto
 * @version 3.2.0
 */
class FileOperationDto {
    /**
     * Constructs a new <code>FileOperationDto</code>.
     * The file operation information.
     * @alias module:models/FileOperationDto
     */
    constructor() { 
        
        FileOperationDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileOperationDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FileOperationDto} obj Optional instance to populate.
     * @return {module:models/FileOperationDto} The populated <code>FileOperationDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileOperationDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('Operation')) {
                obj['Operation'] = FileOperationType.constructFromObject(data['Operation']);
            }
            if (data.hasOwnProperty('progress')) {
                obj['progress'] = ApiClient.convertToType(data['progress'], 'Number');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('processed')) {
                obj['processed'] = ApiClient.convertToType(data['processed'], 'String');
            }
            if (data.hasOwnProperty('finished')) {
                obj['finished'] = ApiClient.convertToType(data['finished'], 'Boolean');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], [FileEntryDto]);
            }
            if (data.hasOwnProperty('folders')) {
                obj['folders'] = ApiClient.convertToType(data['folders'], [FileEntryDto]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileOperationDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileOperationDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['error'] && !(typeof data['error'] === 'string' || data['error'] instanceof String)) {
            throw new Error("Expected the field `error` to be a primitive type in the JSON string but got " + data['error']);
        }
        // ensure the json data is a string
        if (data['processed'] && !(typeof data['processed'] === 'string' || data['processed'] instanceof String)) {
            throw new Error("Expected the field `processed` to be a primitive type in the JSON string but got " + data['processed']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
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

        return true;
    }


}



/**
 * The file operation ID.
 * @member {String} id
 */
FileOperationDto.prototype['id'] = undefined;

/**
 * @member {module:models/FileOperationType} Operation
 */
FileOperationDto.prototype['Operation'] = undefined;

/**
 * The file operation progress in percentage.
 * @member {Number} progress
 */
FileOperationDto.prototype['progress'] = undefined;

/**
 * The file operation error message.
 * @member {String} error
 */
FileOperationDto.prototype['error'] = undefined;

/**
 * The file operation processing status.
 * @member {String} processed
 */
FileOperationDto.prototype['processed'] = undefined;

/**
 * Specifies if the file operation is finished or not.
 * @member {Boolean} finished
 */
FileOperationDto.prototype['finished'] = undefined;

/**
 * The file operation URL.
 * @member {String} url
 */
FileOperationDto.prototype['url'] = undefined;

/**
 * The list of files of the file operation.
 * @member {Array.<module:models/FileEntryDto>} files
 */
FileOperationDto.prototype['files'] = undefined;

/**
 * The list of folders of the file operation.
 * @member {Array.<module:models/FileEntryDto>} folders
 */
FileOperationDto.prototype['folders'] = undefined;






export default FileOperationDto;

