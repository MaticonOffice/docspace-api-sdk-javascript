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
 * The Run model module.
 * @module models/Run
 * @version 3.2.0
 */
class Run {
    /**
     * Constructs a new <code>Run</code>.
     * The text run parameters.
     * @alias module:models/Run
     */
    constructor() { 
        
        Run.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Run</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/Run} obj Optional instance to populate.
     * @return {module:models/Run} The populated <code>Run</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Run();

            if (data.hasOwnProperty('fill')) {
                obj['fill'] = ApiClient.convertToType(data['fill'], ['Number']);
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('font-size')) {
                obj['font-size'] = ApiClient.convertToType(data['font-size'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Run</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Run</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['fill'])) {
            throw new Error("Expected the field `fill` to be an array in the JSON data but got " + data['fill']);
        }
        // ensure the json data is a string
        if (data['text'] && !(typeof data['text'] === 'string' || data['text'] instanceof String)) {
            throw new Error("Expected the field `text` to be a primitive type in the JSON string but got " + data['text']);
        }
        // ensure the json data is a string
        if (data['font-size'] && !(typeof data['font-size'] === 'string' || data['font-size'] instanceof String)) {
            throw new Error("Expected the field `font-size` to be a primitive type in the JSON string but got " + data['font-size']);
        }

        return true;
    }


}



/**
 * The fill color of the text run in RGB format.
 * @member {Array.<Number>} fill
 */
Run.prototype['fill'] = undefined;

/**
 * The run text.
 * @member {String} text
 */
Run.prototype['text'] = undefined;

/**
 * The font size of the text run in points.
 * @member {String} font-size
 */
Run.prototype['font-size'] = undefined;






export default Run;

