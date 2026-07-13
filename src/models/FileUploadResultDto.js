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

/**
 * The FileUploadResultDto model module.
 * @module models/FileUploadResultDto
 * @version 3.2.0
 */
class FileUploadResultDto {
    /**
     * Constructs a new <code>FileUploadResultDto</code>.
     * The file upload result.
     * @alias module:models/FileUploadResultDto
     */
    constructor() { 
        
        FileUploadResultDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileUploadResultDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FileUploadResultDto} obj Optional instance to populate.
     * @return {module:models/FileUploadResultDto} The populated <code>FileUploadResultDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileUploadResultDto();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileUploadResultDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileUploadResultDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * Specifies if the upload operation is successful or not.
 * @member {Boolean} success
 */
FileUploadResultDto.prototype['success'] = undefined;

/**
 * The file upload result data.
 * @member {Object} data
 */
FileUploadResultDto.prototype['data'] = undefined;

/**
 * The file upload result message.
 * @member {String} message
 */
FileUploadResultDto.prototype['message'] = undefined;






export default FileUploadResultDto;

