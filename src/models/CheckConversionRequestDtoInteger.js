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
 * The CheckConversionRequestDtoInteger model module.
 * @module models/CheckConversionRequestDtoInteger
 * @version 3.2.0
 */
class CheckConversionRequestDtoInteger {
    /**
     * Constructs a new <code>CheckConversionRequestDtoInteger</code>.
     * The parameters for checking file conversion.
     * @alias module:models/CheckConversionRequestDtoInteger
     */
    constructor() { 
        
        CheckConversionRequestDtoInteger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CheckConversionRequestDtoInteger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CheckConversionRequestDtoInteger} obj Optional instance to populate.
     * @return {module:models/CheckConversionRequestDtoInteger} The populated <code>CheckConversionRequestDtoInteger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckConversionRequestDtoInteger();

            if (data.hasOwnProperty('fileId')) {
                obj['fileId'] = ApiClient.convertToType(data['fileId'], 'Number');
            }
            if (data.hasOwnProperty('sync')) {
                obj['sync'] = ApiClient.convertToType(data['sync'], 'Boolean');
            }
            if (data.hasOwnProperty('startConvert')) {
                obj['startConvert'] = ApiClient.convertToType(data['startConvert'], 'Boolean');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('outputType')) {
                obj['outputType'] = ApiClient.convertToType(data['outputType'], 'String');
            }
            if (data.hasOwnProperty('createNewIfExist')) {
                obj['createNewIfExist'] = ApiClient.convertToType(data['createNewIfExist'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CheckConversionRequestDtoInteger</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CheckConversionRequestDtoInteger</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['outputType'] && !(typeof data['outputType'] === 'string' || data['outputType'] instanceof String)) {
            throw new Error("Expected the field `outputType` to be a primitive type in the JSON string but got " + data['outputType']);
        }

        return true;
    }


}



/**
 * The file ID to check conversion proccess.
 * @member {Number} fileId
 */
CheckConversionRequestDtoInteger.prototype['fileId'] = undefined;

/**
 * Specifies if the conversion process is synchronous or not.
 * @member {Boolean} sync
 */
CheckConversionRequestDtoInteger.prototype['sync'] = undefined;

/**
 * Specifies whether to start a conversion process or not.
 * @member {Boolean} startConvert
 */
CheckConversionRequestDtoInteger.prototype['startConvert'] = undefined;

/**
 * The file version that is converted.
 * @member {Number} version
 */
CheckConversionRequestDtoInteger.prototype['version'] = undefined;

/**
 * The password of the converted file.
 * @member {String} password
 */
CheckConversionRequestDtoInteger.prototype['password'] = undefined;

/**
 * The conversion output type.
 * @member {String} outputType
 */
CheckConversionRequestDtoInteger.prototype['outputType'] = undefined;

/**
 * Specifies whether to create a new file if it exists or not.
 * @member {Boolean} createNewIfExist
 */
CheckConversionRequestDtoInteger.prototype['createNewIfExist'] = undefined;






export default CheckConversionRequestDtoInteger;

