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
import DownloadRequestItemDtoKey from './DownloadRequestItemDtoKey';

/**
 * The DownloadRequestItemDto model module.
 * @module models/DownloadRequestItemDto
 * @version 3.2.0
 */
class DownloadRequestItemDto {
    /**
     * Constructs a new <code>DownloadRequestItemDto</code>.
     * The download request item with conversion parameters and security settings.
     * @alias module:models/DownloadRequestItemDto
     * @param key {module:models/DownloadRequestItemDtoKey} 
     * @param value {String} The target format or conversion type for the file download.
     */
    constructor(key, value) { 
        
        DownloadRequestItemDto.initialize(this, key, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, value) { 
        obj['key'] = key;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>DownloadRequestItemDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/DownloadRequestItemDto} obj Optional instance to populate.
     * @return {module:models/DownloadRequestItemDto} The populated <code>DownloadRequestItemDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DownloadRequestItemDto();

            if (data.hasOwnProperty('key')) {
                obj['key'] = DownloadRequestItemDtoKey.constructFromObject(data['key']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DownloadRequestItemDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DownloadRequestItemDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DownloadRequestItemDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `key`
        if (data['key']) { // data not null
          DownloadRequestItemDtoKey.validateJSON(data['key']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }

        return true;
    }


}

DownloadRequestItemDto.RequiredProperties = ["key", "value"];

/**
 * @member {module:models/DownloadRequestItemDtoKey} key
 */
DownloadRequestItemDto.prototype['key'] = undefined;

/**
 * The target format or conversion type for the file download.
 * @member {String} value
 */
DownloadRequestItemDto.prototype['value'] = undefined;

/**
 * The optional password for accessing protected files.
 * @member {String} password
 */
DownloadRequestItemDto.prototype['password'] = undefined;






export default DownloadRequestItemDto;

