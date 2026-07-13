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
import WatermarkAdditions from './WatermarkAdditions';

/**
 * The WatermarkDto model module.
 * @module models/WatermarkDto
 * @version 3.2.0
 */
class WatermarkDto {
    /**
     * Constructs a new <code>WatermarkDto</code>.
     * The watermark settings.
     * @alias module:models/WatermarkDto
     */
    constructor() { 
        
        WatermarkDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WatermarkDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/WatermarkDto} obj Optional instance to populate.
     * @return {module:models/WatermarkDto} The populated <code>WatermarkDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WatermarkDto();

            if (data.hasOwnProperty('additions')) {
                obj['additions'] = WatermarkAdditions.constructFromObject(data['additions']);
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('rotate')) {
                obj['rotate'] = ApiClient.convertToType(data['rotate'], 'Number');
            }
            if (data.hasOwnProperty('imageScale')) {
                obj['imageScale'] = ApiClient.convertToType(data['imageScale'], 'Number');
            }
            if (data.hasOwnProperty('imageUrl')) {
                obj['imageUrl'] = ApiClient.convertToType(data['imageUrl'], 'String');
            }
            if (data.hasOwnProperty('imageHeight')) {
                obj['imageHeight'] = ApiClient.convertToType(data['imageHeight'], 'Number');
            }
            if (data.hasOwnProperty('imageWidth')) {
                obj['imageWidth'] = ApiClient.convertToType(data['imageWidth'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WatermarkDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WatermarkDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['text'] && !(typeof data['text'] === 'string' || data['text'] instanceof String)) {
            throw new Error("Expected the field `text` to be a primitive type in the JSON string but got " + data['text']);
        }
        // ensure the json data is a string
        if (data['imageUrl'] && !(typeof data['imageUrl'] === 'string' || data['imageUrl'] instanceof String)) {
            throw new Error("Expected the field `imageUrl` to be a primitive type in the JSON string but got " + data['imageUrl']);
        }

        return true;
    }


}



/**
 * @member {module:models/WatermarkAdditions} additions
 */
WatermarkDto.prototype['additions'] = undefined;

/**
 * The watermark text.
 * @member {String} text
 */
WatermarkDto.prototype['text'] = undefined;

/**
 * The watermark text and image rotate.
 * @member {Number} rotate
 */
WatermarkDto.prototype['rotate'] = undefined;

/**
 * The watermark image scale.
 * @member {Number} imageScale
 */
WatermarkDto.prototype['imageScale'] = undefined;

/**
 * The watermark image url.
 * @member {String} imageUrl
 */
WatermarkDto.prototype['imageUrl'] = undefined;

/**
 * The watermark image height.
 * @member {Number} imageHeight
 */
WatermarkDto.prototype['imageHeight'] = undefined;

/**
 * The watermark image width.
 * @member {Number} imageWidth
 */
WatermarkDto.prototype['imageWidth'] = undefined;






export default WatermarkDto;

