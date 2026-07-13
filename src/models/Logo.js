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
import LogoCover from './LogoCover';

/**
 * The Logo model module.
 * @module models/Logo
 * @version 3.2.0
 */
class Logo {
    /**
     * Constructs a new <code>Logo</code>.
     * The room logo information.
     * @alias module:models/Logo
     */
    constructor() { 
        
        Logo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Logo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/Logo} obj Optional instance to populate.
     * @return {module:models/Logo} The populated <code>Logo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Logo();

            if (data.hasOwnProperty('original')) {
                obj['original'] = ApiClient.convertToType(data['original'], 'String');
            }
            if (data.hasOwnProperty('large')) {
                obj['large'] = ApiClient.convertToType(data['large'], 'String');
            }
            if (data.hasOwnProperty('medium')) {
                obj['medium'] = ApiClient.convertToType(data['medium'], 'String');
            }
            if (data.hasOwnProperty('small')) {
                obj['small'] = ApiClient.convertToType(data['small'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('cover')) {
                obj['cover'] = LogoCover.constructFromObject(data['cover']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Logo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Logo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['original'] && !(typeof data['original'] === 'string' || data['original'] instanceof String)) {
            throw new Error("Expected the field `original` to be a primitive type in the JSON string but got " + data['original']);
        }
        // ensure the json data is a string
        if (data['large'] && !(typeof data['large'] === 'string' || data['large'] instanceof String)) {
            throw new Error("Expected the field `large` to be a primitive type in the JSON string but got " + data['large']);
        }
        // ensure the json data is a string
        if (data['medium'] && !(typeof data['medium'] === 'string' || data['medium'] instanceof String)) {
            throw new Error("Expected the field `medium` to be a primitive type in the JSON string but got " + data['medium']);
        }
        // ensure the json data is a string
        if (data['small'] && !(typeof data['small'] === 'string' || data['small'] instanceof String)) {
            throw new Error("Expected the field `small` to be a primitive type in the JSON string but got " + data['small']);
        }
        // ensure the json data is a string
        if (data['color'] && !(typeof data['color'] === 'string' || data['color'] instanceof String)) {
            throw new Error("Expected the field `color` to be a primitive type in the JSON string but got " + data['color']);
        }
        // validate the optional field `cover`
        if (data['cover']) { // data not null
          LogoCover.validateJSON(data['cover']);
        }

        return true;
    }


}



/**
 * The original logo.
 * @member {String} original
 */
Logo.prototype['original'] = undefined;

/**
 * The large logo.
 * @member {String} large
 */
Logo.prototype['large'] = undefined;

/**
 * The medium logo.
 * @member {String} medium
 */
Logo.prototype['medium'] = undefined;

/**
 * The small logo.
 * @member {String} small
 */
Logo.prototype['small'] = undefined;

/**
 * The logo color.
 * @member {String} color
 */
Logo.prototype['color'] = undefined;

/**
 * @member {module:models/LogoCover} cover
 */
Logo.prototype['cover'] = undefined;






export default Logo;

