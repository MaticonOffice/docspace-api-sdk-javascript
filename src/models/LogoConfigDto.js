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
 * The LogoConfigDto model module.
 * @module models/LogoConfigDto
 * @version 3.2.0
 */
class LogoConfigDto {
    /**
     * Constructs a new <code>LogoConfigDto</code>.
     * The logo config parameters.
     * @alias module:models/LogoConfigDto
     */
    constructor() { 
        
        LogoConfigDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogoConfigDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/LogoConfigDto} obj Optional instance to populate.
     * @return {module:models/LogoConfigDto} The populated <code>LogoConfigDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogoConfigDto();

            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('imageDark')) {
                obj['imageDark'] = ApiClient.convertToType(data['imageDark'], 'String');
            }
            if (data.hasOwnProperty('imageLight')) {
                obj['imageLight'] = ApiClient.convertToType(data['imageLight'], 'String');
            }
            if (data.hasOwnProperty('imageEmbedded')) {
                obj['imageEmbedded'] = ApiClient.convertToType(data['imageEmbedded'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('visible')) {
                obj['visible'] = ApiClient.convertToType(data['visible'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LogoConfigDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LogoConfigDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }
        // ensure the json data is a string
        if (data['imageDark'] && !(typeof data['imageDark'] === 'string' || data['imageDark'] instanceof String)) {
            throw new Error("Expected the field `imageDark` to be a primitive type in the JSON string but got " + data['imageDark']);
        }
        // ensure the json data is a string
        if (data['imageLight'] && !(typeof data['imageLight'] === 'string' || data['imageLight'] instanceof String)) {
            throw new Error("Expected the field `imageLight` to be a primitive type in the JSON string but got " + data['imageLight']);
        }
        // ensure the json data is a string
        if (data['imageEmbedded'] && !(typeof data['imageEmbedded'] === 'string' || data['imageEmbedded'] instanceof String)) {
            throw new Error("Expected the field `imageEmbedded` to be a primitive type in the JSON string but got " + data['imageEmbedded']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}



/**
 * The image of the logo.
 * @member {String} image
 */
LogoConfigDto.prototype['image'] = undefined;

/**
 * The dark image of the logo.
 * @member {String} imageDark
 */
LogoConfigDto.prototype['imageDark'] = undefined;

/**
 * The light image of the logo.
 * @member {String} imageLight
 */
LogoConfigDto.prototype['imageLight'] = undefined;

/**
 * The embedded image of the logo.
 * @member {String} imageEmbedded
 */
LogoConfigDto.prototype['imageEmbedded'] = undefined;

/**
 * The url link of the logo.
 * @member {String} url
 */
LogoConfigDto.prototype['url'] = undefined;

/**
 * Specifies if the logo is visible.
 * @member {Boolean} visible
 */
LogoConfigDto.prototype['visible'] = undefined;






export default LogoConfigDto;

