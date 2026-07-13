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
import WatermarkOnDraw from './WatermarkOnDraw';

/**
 * The Options model module.
 * @module models/Options
 * @version 3.2.0
 */
class Options {
    /**
     * Constructs a new <code>Options</code>.
     * The document options.
     * @alias module:models/Options
     */
    constructor() { 
        
        Options.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Options</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/Options} obj Optional instance to populate.
     * @return {module:models/Options} The populated <code>Options</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Options();

            if (data.hasOwnProperty('watermark_on_draw')) {
                obj['watermark_on_draw'] = WatermarkOnDraw.constructFromObject(data['watermark_on_draw']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Options</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Options</code>.
     */
    static validateJSON(data) {
        // validate the optional field `watermark_on_draw`
        if (data['watermark_on_draw']) { // data not null
          WatermarkOnDraw.validateJSON(data['watermark_on_draw']);
        }

        return true;
    }


}



/**
 * @member {module:models/WatermarkOnDraw} watermark_on_draw
 */
Options.prototype['watermark_on_draw'] = undefined;






export default Options;

