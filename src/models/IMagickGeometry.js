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
 * The IMagickGeometry model module.
 * @module models/IMagickGeometry
 * @version 3.2.0
 */
class IMagickGeometry {
    /**
     * Constructs a new <code>IMagickGeometry</code>.
     * @alias module:models/IMagickGeometry
     */
    constructor() { 
        
        IMagickGeometry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IMagickGeometry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/IMagickGeometry} obj Optional instance to populate.
     * @return {module:models/IMagickGeometry} The populated <code>IMagickGeometry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IMagickGeometry();

            if (data.hasOwnProperty('aspectRatio')) {
                obj['aspectRatio'] = ApiClient.convertToType(data['aspectRatio'], 'Boolean');
            }
            if (data.hasOwnProperty('fillArea')) {
                obj['fillArea'] = ApiClient.convertToType(data['fillArea'], 'Boolean');
            }
            if (data.hasOwnProperty('greater')) {
                obj['greater'] = ApiClient.convertToType(data['greater'], 'Boolean');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('ignoreAspectRatio')) {
                obj['ignoreAspectRatio'] = ApiClient.convertToType(data['ignoreAspectRatio'], 'Boolean');
            }
            if (data.hasOwnProperty('isPercentage')) {
                obj['isPercentage'] = ApiClient.convertToType(data['isPercentage'], 'Boolean');
            }
            if (data.hasOwnProperty('less')) {
                obj['less'] = ApiClient.convertToType(data['less'], 'Boolean');
            }
            if (data.hasOwnProperty('limitPixels')) {
                obj['limitPixels'] = ApiClient.convertToType(data['limitPixels'], 'Boolean');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
            if (data.hasOwnProperty('x')) {
                obj['x'] = ApiClient.convertToType(data['x'], 'Number');
            }
            if (data.hasOwnProperty('y')) {
                obj['y'] = ApiClient.convertToType(data['y'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IMagickGeometry</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IMagickGeometry</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Boolean} aspectRatio
 */
IMagickGeometry.prototype['aspectRatio'] = undefined;

/**
 * @member {Boolean} fillArea
 */
IMagickGeometry.prototype['fillArea'] = undefined;

/**
 * @member {Boolean} greater
 */
IMagickGeometry.prototype['greater'] = undefined;

/**
 * @member {Number} height
 */
IMagickGeometry.prototype['height'] = undefined;

/**
 * @member {Boolean} ignoreAspectRatio
 */
IMagickGeometry.prototype['ignoreAspectRatio'] = undefined;

/**
 * @member {Boolean} isPercentage
 */
IMagickGeometry.prototype['isPercentage'] = undefined;

/**
 * @member {Boolean} less
 */
IMagickGeometry.prototype['less'] = undefined;

/**
 * @member {Boolean} limitPixels
 */
IMagickGeometry.prototype['limitPixels'] = undefined;

/**
 * @member {Number} width
 */
IMagickGeometry.prototype['width'] = undefined;

/**
 * @member {Number} x
 */
IMagickGeometry.prototype['x'] = undefined;

/**
 * @member {Number} y
 */
IMagickGeometry.prototype['y'] = undefined;






export default IMagickGeometry;

