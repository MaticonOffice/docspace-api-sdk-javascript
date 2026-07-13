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
import Paragraph from './Paragraph';

/**
 * The WatermarkOnDraw model module.
 * @module models/WatermarkOnDraw
 * @version 3.2.0
 */
class WatermarkOnDraw {
    /**
     * Constructs a new <code>WatermarkOnDraw</code>.
     * The document watermark parameters.
     * @alias module:models/WatermarkOnDraw
     */
    constructor() { 
        
        WatermarkOnDraw.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WatermarkOnDraw</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/WatermarkOnDraw} obj Optional instance to populate.
     * @return {module:models/WatermarkOnDraw} The populated <code>WatermarkOnDraw</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WatermarkOnDraw();

            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('margins')) {
                obj['margins'] = ApiClient.convertToType(data['margins'], ['Number']);
            }
            if (data.hasOwnProperty('fill')) {
                obj['fill'] = ApiClient.convertToType(data['fill'], 'String');
            }
            if (data.hasOwnProperty('rotate')) {
                obj['rotate'] = ApiClient.convertToType(data['rotate'], 'Number');
            }
            if (data.hasOwnProperty('transparent')) {
                obj['transparent'] = ApiClient.convertToType(data['transparent'], 'Number');
            }
            if (data.hasOwnProperty('paragraphs')) {
                obj['paragraphs'] = ApiClient.convertToType(data['paragraphs'], [Paragraph]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WatermarkOnDraw</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WatermarkOnDraw</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['margins'])) {
            throw new Error("Expected the field `margins` to be an array in the JSON data but got " + data['margins']);
        }
        // ensure the json data is a string
        if (data['fill'] && !(typeof data['fill'] === 'string' || data['fill'] instanceof String)) {
            throw new Error("Expected the field `fill` to be a primitive type in the JSON string but got " + data['fill']);
        }
        if (data['paragraphs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['paragraphs'])) {
                throw new Error("Expected the field `paragraphs` to be an array in the JSON data but got " + data['paragraphs']);
            }
            // validate the optional field `paragraphs` (array)
            for (const item of data['paragraphs']) {
                Paragraph.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Defines the watermark width measured in millimeters.
 * @member {Number} width
 */
WatermarkOnDraw.prototype['width'] = undefined;

/**
 * Defines the watermark height measured in millimeters.
 * @member {Number} height
 */
WatermarkOnDraw.prototype['height'] = undefined;

/**
 * Defines the watermark margins measured in millimeters.
 * @member {Array.<Number>} margins
 */
WatermarkOnDraw.prototype['margins'] = undefined;

/**
 * Defines the watermark fill color.
 * @member {String} fill
 */
WatermarkOnDraw.prototype['fill'] = undefined;

/**
 * Defines the watermark rotation angle.
 * @member {Number} rotate
 */
WatermarkOnDraw.prototype['rotate'] = undefined;

/**
 * Defines the watermark transparency percentage.
 * @member {Number} transparent
 */
WatermarkOnDraw.prototype['transparent'] = undefined;

/**
 * The list of paragraphs of the watermark.
 * @member {Array.<module:models/Paragraph>} paragraphs
 */
WatermarkOnDraw.prototype['paragraphs'] = undefined;






export default WatermarkOnDraw;

