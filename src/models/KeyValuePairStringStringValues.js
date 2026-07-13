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
 * The KeyValuePairStringStringValues model module.
 * @module models/KeyValuePairStringStringValues
 * @version 3.2.0
 */
class KeyValuePairStringStringValues {
    /**
     * Constructs a new <code>KeyValuePairStringStringValues</code>.
     * @alias module:models/KeyValuePairStringStringValues
     */
    constructor() { 
        
        KeyValuePairStringStringValues.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KeyValuePairStringStringValues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/KeyValuePairStringStringValues} obj Optional instance to populate.
     * @return {module:models/KeyValuePairStringStringValues} The populated <code>KeyValuePairStringStringValues</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KeyValuePairStringStringValues();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>KeyValuePairStringStringValues</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>KeyValuePairStringStringValues</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['value'])) {
            throw new Error("Expected the field `value` to be an array in the JSON data but got " + data['value']);
        }

        return true;
    }


}



/**
 * @member {String} key
 */
KeyValuePairStringStringValues.prototype['key'] = undefined;

/**
 * @member {Array.<String>} value
 */
KeyValuePairStringStringValues.prototype['value'] = undefined;






export default KeyValuePairStringStringValues;

