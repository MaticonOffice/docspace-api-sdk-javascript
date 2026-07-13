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
import ValidationResult from './ValidationResult';

/**
 * The ConfirmDto model module.
 * @module models/ConfirmDto
 * @version 3.2.0
 */
class ConfirmDto {
    /**
     * Constructs a new <code>ConfirmDto</code>.
     * The confirmation parameters.
     * @alias module:models/ConfirmDto
     */
    constructor() { 
        
        ConfirmDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConfirmDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ConfirmDto} obj Optional instance to populate.
     * @return {module:models/ConfirmDto} The populated <code>ConfirmDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfirmDto();

            if (data.hasOwnProperty('result')) {
                obj['result'] = ValidationResult.constructFromObject(data['result']);
            }
            if (data.hasOwnProperty('roomId')) {
                obj['roomId'] = ApiClient.convertToType(data['roomId'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ConfirmDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConfirmDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['roomId'] && !(typeof data['roomId'] === 'string' || data['roomId'] instanceof String)) {
            throw new Error("Expected the field `roomId` to be a primitive type in the JSON string but got " + data['roomId']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }

        return true;
    }


}



/**
 * @member {module:models/ValidationResult} result
 */
ConfirmDto.prototype['result'] = undefined;

/**
 * The confirmation room ID.
 * @member {String} roomId
 */
ConfirmDto.prototype['roomId'] = undefined;

/**
 * The confirmation title.
 * @member {String} title
 */
ConfirmDto.prototype['title'] = undefined;






export default ConfirmDto;

