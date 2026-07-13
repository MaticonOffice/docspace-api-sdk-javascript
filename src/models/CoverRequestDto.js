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
 * The CoverRequestDto model module.
 * @module models/CoverRequestDto
 * @version 3.2.0
 */
class CoverRequestDto {
    /**
     * Constructs a new <code>CoverRequestDto</code>.
     * The request parameters to change the room cover.
     * @alias module:models/CoverRequestDto
     */
    constructor() { 
        
        CoverRequestDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CoverRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CoverRequestDto} obj Optional instance to populate.
     * @return {module:models/CoverRequestDto} The populated <code>CoverRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CoverRequestDto();

            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('cover')) {
                obj['cover'] = ApiClient.convertToType(data['cover'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CoverRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CoverRequestDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['color'] && !(typeof data['color'] === 'string' || data['color'] instanceof String)) {
            throw new Error("Expected the field `color` to be a primitive type in the JSON string but got " + data['color']);
        }
        // ensure the json data is a string
        if (data['cover'] && !(typeof data['cover'] === 'string' || data['cover'] instanceof String)) {
            throw new Error("Expected the field `cover` to be a primitive type in the JSON string but got " + data['cover']);
        }

        return true;
    }


}



/**
 * The cover color.
 * @member {String} color
 */
CoverRequestDto.prototype['color'] = undefined;

/**
 * The cover name.
 * @member {String} cover
 */
CoverRequestDto.prototype['cover'] = undefined;






export default CoverRequestDto;

