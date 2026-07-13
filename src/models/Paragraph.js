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
import Run from './Run';

/**
 * The Paragraph model module.
 * @module models/Paragraph
 * @version 3.2.0
 */
class Paragraph {
    /**
     * Constructs a new <code>Paragraph</code>.
     * The paragraph parameters.
     * @alias module:models/Paragraph
     */
    constructor() { 
        
        Paragraph.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Paragraph</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/Paragraph} obj Optional instance to populate.
     * @return {module:models/Paragraph} The populated <code>Paragraph</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Paragraph();

            if (data.hasOwnProperty('align')) {
                obj['align'] = ApiClient.convertToType(data['align'], 'Number');
            }
            if (data.hasOwnProperty('runs')) {
                obj['runs'] = ApiClient.convertToType(data['runs'], [Run]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Paragraph</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Paragraph</code>.
     */
    static validateJSON(data) {
        if (data['runs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['runs'])) {
                throw new Error("Expected the field `runs` to be an array in the JSON data but got " + data['runs']);
            }
            // validate the optional field `runs` (array)
            for (const item of data['runs']) {
                Run.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The paragraph align.
 * @member {Number} align
 */
Paragraph.prototype['align'] = undefined;

/**
 * The list of text runs from the paragraph.
 * @member {Array.<module:models/Run>} runs
 */
Paragraph.prototype['runs'] = undefined;






export default Paragraph;

