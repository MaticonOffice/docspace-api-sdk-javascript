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
import IMagickGeometry from './IMagickGeometry';
import WhiteLabelItemPathDto from './WhiteLabelItemPathDto';

/**
 * The WhiteLabelItemDto model module.
 * @module models/WhiteLabelItemDto
 * @version 3.2.0
 */
class WhiteLabelItemDto {
    /**
     * Constructs a new <code>WhiteLabelItemDto</code>.
     * The white label item parameters.
     * @alias module:models/WhiteLabelItemDto
     */
    constructor() { 
        
        WhiteLabelItemDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WhiteLabelItemDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/WhiteLabelItemDto} obj Optional instance to populate.
     * @return {module:models/WhiteLabelItemDto} The populated <code>WhiteLabelItemDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WhiteLabelItemDto();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = IMagickGeometry.constructFromObject(data['size']);
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = WhiteLabelItemPathDto.constructFromObject(data['path']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WhiteLabelItemDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WhiteLabelItemDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `size`
        if (data['size']) { // data not null
          IMagickGeometry.validateJSON(data['size']);
        }
        // validate the optional field `path`
        if (data['path']) { // data not null
          WhiteLabelItemPathDto.validateJSON(data['path']);
        }

        return true;
    }


}



/**
 * The white label file name.
 * @member {String} name
 */
WhiteLabelItemDto.prototype['name'] = undefined;

/**
 * @member {module:models/IMagickGeometry} size
 */
WhiteLabelItemDto.prototype['size'] = undefined;

/**
 * @member {module:models/WhiteLabelItemPathDto} path
 */
WhiteLabelItemDto.prototype['path'] = undefined;






export default WhiteLabelItemDto;

