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
 * The CustomColorThemesSettingsColorItem model module.
 * @module models/CustomColorThemesSettingsColorItem
 * @version 3.2.0
 */
class CustomColorThemesSettingsColorItem {
    /**
     * Constructs a new <code>CustomColorThemesSettingsColorItem</code>.
     * The custom color theme color parameters.
     * @alias module:models/CustomColorThemesSettingsColorItem
     */
    constructor() { 
        
        CustomColorThemesSettingsColorItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomColorThemesSettingsColorItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CustomColorThemesSettingsColorItem} obj Optional instance to populate.
     * @return {module:models/CustomColorThemesSettingsColorItem} The populated <code>CustomColorThemesSettingsColorItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomColorThemesSettingsColorItem();

            if (data.hasOwnProperty('accent')) {
                obj['accent'] = ApiClient.convertToType(data['accent'], 'String');
            }
            if (data.hasOwnProperty('buttons')) {
                obj['buttons'] = ApiClient.convertToType(data['buttons'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomColorThemesSettingsColorItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomColorThemesSettingsColorItem</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['accent'] && !(typeof data['accent'] === 'string' || data['accent'] instanceof String)) {
            throw new Error("Expected the field `accent` to be a primitive type in the JSON string but got " + data['accent']);
        }
        // ensure the json data is a string
        if (data['buttons'] && !(typeof data['buttons'] === 'string' || data['buttons'] instanceof String)) {
            throw new Error("Expected the field `buttons` to be a primitive type in the JSON string but got " + data['buttons']);
        }

        return true;
    }


}



/**
 * The accent color.
 * @member {String} accent
 */
CustomColorThemesSettingsColorItem.prototype['accent'] = undefined;

/**
 * The button color.
 * @member {String} buttons
 */
CustomColorThemesSettingsColorItem.prototype['buttons'] = undefined;






export default CustomColorThemesSettingsColorItem;

