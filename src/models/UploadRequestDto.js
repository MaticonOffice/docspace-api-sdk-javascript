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
import ContentDisposition from './ContentDisposition';
import ContentType from './ContentType';

/**
 * The UploadRequestDto model module.
 * @module models/UploadRequestDto
 * @version 3.2.0
 */
class UploadRequestDto {
    /**
     * Constructs a new <code>UploadRequestDto</code>.
     * The request parameters for uploading a file.
     * @alias module:models/UploadRequestDto
     */
    constructor() { 
        
        UploadRequestDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UploadRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UploadRequestDto} obj Optional instance to populate.
     * @return {module:models/UploadRequestDto} The populated <code>UploadRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UploadRequestDto();

            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], File);
            }
            if (data.hasOwnProperty('contentType')) {
                obj['contentType'] = ContentType.constructFromObject(data['contentType']);
            }
            if (data.hasOwnProperty('contentDisposition')) {
                obj['contentDisposition'] = ContentDisposition.constructFromObject(data['contentDisposition']);
            }
            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], [File]);
            }
            if (data.hasOwnProperty('createNewIfExist')) {
                obj['createNewIfExist'] = ApiClient.convertToType(data['createNewIfExist'], 'Boolean');
            }
            if (data.hasOwnProperty('storeOriginalFileFlag')) {
                obj['storeOriginalFileFlag'] = ApiClient.convertToType(data['storeOriginalFileFlag'], 'Boolean');
            }
            if (data.hasOwnProperty('keepConvertStatus')) {
                obj['keepConvertStatus'] = ApiClient.convertToType(data['keepConvertStatus'], 'Boolean');
            }
            if (data.hasOwnProperty('stream')) {
                obj['stream'] = ApiClient.convertToType(data['stream'], File);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UploadRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UploadRequestDto</code>.
     */
    static validateJSON(data) {
        // validate the optional field `contentType`
        if (data['contentType']) { // data not null
          ContentType.validateJSON(data['contentType']);
        }
        // validate the optional field `contentDisposition`
        if (data['contentDisposition']) { // data not null
          ContentDisposition.validateJSON(data['contentDisposition']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['files'])) {
            throw new Error("Expected the field `files` to be an array in the JSON data but got " + data['files']);
        }

        return true;
    }


}



/**
 * The file to be uploaded.
 * @member {File} file
 */
UploadRequestDto.prototype['file'] = undefined;

/**
 * @member {module:models/ContentType} contentType
 */
UploadRequestDto.prototype['contentType'] = undefined;

/**
 * @member {module:models/ContentDisposition} contentDisposition
 */
UploadRequestDto.prototype['contentDisposition'] = undefined;

/**
 * The list of files when specified as multipart/form-data.
 * @member {Array.<File>} files
 */
UploadRequestDto.prototype['files'] = undefined;

/**
 * Specifies whether to create the new file if it already exists or not.
 * @member {Boolean} createNewIfExist
 */
UploadRequestDto.prototype['createNewIfExist'] = undefined;

/**
 * Specifies whether to upload documents in the original formats as well or not.
 * @member {Boolean} storeOriginalFileFlag
 */
UploadRequestDto.prototype['storeOriginalFileFlag'] = undefined;

/**
 * Specifies whether to keep the file converting status or not.
 * @member {Boolean} keepConvertStatus
 */
UploadRequestDto.prototype['keepConvertStatus'] = undefined;

/**
 * The request input stream.
 * @member {File} stream
 */
UploadRequestDto.prototype['stream'] = undefined;






export default UploadRequestDto;

