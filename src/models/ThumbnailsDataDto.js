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
 * The ThumbnailsDataDto model module.
 * @module models/ThumbnailsDataDto
 * @version 3.2.0
 */
class ThumbnailsDataDto {
    /**
     * Constructs a new <code>ThumbnailsDataDto</code>.
     * The thumbnails data parameters.
     * @alias module:models/ThumbnailsDataDto
     */
    constructor() { 
        
        ThumbnailsDataDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ThumbnailsDataDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ThumbnailsDataDto} obj Optional instance to populate.
     * @return {module:models/ThumbnailsDataDto} The populated <code>ThumbnailsDataDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThumbnailsDataDto();

            if (data.hasOwnProperty('original')) {
                obj['original'] = ApiClient.convertToType(data['original'], 'String');
            }
            if (data.hasOwnProperty('retina')) {
                obj['retina'] = ApiClient.convertToType(data['retina'], 'String');
            }
            if (data.hasOwnProperty('max')) {
                obj['max'] = ApiClient.convertToType(data['max'], 'String');
            }
            if (data.hasOwnProperty('big')) {
                obj['big'] = ApiClient.convertToType(data['big'], 'String');
            }
            if (data.hasOwnProperty('medium')) {
                obj['medium'] = ApiClient.convertToType(data['medium'], 'String');
            }
            if (data.hasOwnProperty('small')) {
                obj['small'] = ApiClient.convertToType(data['small'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ThumbnailsDataDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ThumbnailsDataDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['original'] && !(typeof data['original'] === 'string' || data['original'] instanceof String)) {
            throw new Error("Expected the field `original` to be a primitive type in the JSON string but got " + data['original']);
        }
        // ensure the json data is a string
        if (data['retina'] && !(typeof data['retina'] === 'string' || data['retina'] instanceof String)) {
            throw new Error("Expected the field `retina` to be a primitive type in the JSON string but got " + data['retina']);
        }
        // ensure the json data is a string
        if (data['max'] && !(typeof data['max'] === 'string' || data['max'] instanceof String)) {
            throw new Error("Expected the field `max` to be a primitive type in the JSON string but got " + data['max']);
        }
        // ensure the json data is a string
        if (data['big'] && !(typeof data['big'] === 'string' || data['big'] instanceof String)) {
            throw new Error("Expected the field `big` to be a primitive type in the JSON string but got " + data['big']);
        }
        // ensure the json data is a string
        if (data['medium'] && !(typeof data['medium'] === 'string' || data['medium'] instanceof String)) {
            throw new Error("Expected the field `medium` to be a primitive type in the JSON string but got " + data['medium']);
        }
        // ensure the json data is a string
        if (data['small'] && !(typeof data['small'] === 'string' || data['small'] instanceof String)) {
            throw new Error("Expected the field `small` to be a primitive type in the JSON string but got " + data['small']);
        }

        return true;
    }


}



/**
 * The thumbnail original photo.
 * @member {String} original
 */
ThumbnailsDataDto.prototype['original'] = undefined;

/**
 * The thumbnail retina.
 * @member {String} retina
 */
ThumbnailsDataDto.prototype['retina'] = undefined;

/**
 * The thumbnail maximum size photo.
 * @member {String} max
 */
ThumbnailsDataDto.prototype['max'] = undefined;

/**
 * The thumbnail big size photo.
 * @member {String} big
 */
ThumbnailsDataDto.prototype['big'] = undefined;

/**
 * The thumbnail medium size photo.
 * @member {String} medium
 */
ThumbnailsDataDto.prototype['medium'] = undefined;

/**
 * The thumbnail small size photo.
 * @member {String} small
 */
ThumbnailsDataDto.prototype['small'] = undefined;






export default ThumbnailsDataDto;

