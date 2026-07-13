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
 * The Culture model module.
 * @module models/Culture
 * @version 3.2.0
 */
class Culture {
    /**
     * Constructs a new <code>Culture</code>.
     * The culture code parameters.
     * @alias module:models/Culture
     */
    constructor() { 
        
        Culture.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Culture</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/Culture} obj Optional instance to populate.
     * @return {module:models/Culture} The populated <code>Culture</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Culture();

            if (data.hasOwnProperty('cultureName')) {
                obj['cultureName'] = ApiClient.convertToType(data['cultureName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Culture</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Culture</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['cultureName'] && !(typeof data['cultureName'] === 'string' || data['cultureName'] instanceof String)) {
            throw new Error("Expected the field `cultureName` to be a primitive type in the JSON string but got " + data['cultureName']);
        }

        return true;
    }


}



/**
 * The user language.
 * @member {String} cultureName
 */
Culture.prototype['cultureName'] = undefined;






export default Culture;

