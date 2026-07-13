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
import CustomColorThemesSettingsColorItem from './CustomColorThemesSettingsColorItem';

/**
 * The CustomColorThemesSettingsItem model module.
 * @module models/CustomColorThemesSettingsItem
 * @version 3.2.0
 */
class CustomColorThemesSettingsItem {
    /**
     * Constructs a new <code>CustomColorThemesSettingsItem</code>.
     * The custom color theme settings.
     * @alias module:models/CustomColorThemesSettingsItem
     */
    constructor() { 
        
        CustomColorThemesSettingsItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomColorThemesSettingsItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CustomColorThemesSettingsItem} obj Optional instance to populate.
     * @return {module:models/CustomColorThemesSettingsItem} The populated <code>CustomColorThemesSettingsItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomColorThemesSettingsItem();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('main')) {
                obj['main'] = CustomColorThemesSettingsColorItem.constructFromObject(data['main']);
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = CustomColorThemesSettingsColorItem.constructFromObject(data['text']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomColorThemesSettingsItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomColorThemesSettingsItem</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `main`
        if (data['main']) { // data not null
          CustomColorThemesSettingsColorItem.validateJSON(data['main']);
        }
        // validate the optional field `text`
        if (data['text']) { // data not null
          CustomColorThemesSettingsColorItem.validateJSON(data['text']);
        }

        return true;
    }


}



/**
 * The custom color theme ID.
 * @member {Number} id
 */
CustomColorThemesSettingsItem.prototype['id'] = undefined;

/**
 * The custom color theme name.
 * @member {String} name
 */
CustomColorThemesSettingsItem.prototype['name'] = undefined;

/**
 * @member {module:models/CustomColorThemesSettingsColorItem} main
 */
CustomColorThemesSettingsItem.prototype['main'] = undefined;

/**
 * @member {module:models/CustomColorThemesSettingsColorItem} text
 */
CustomColorThemesSettingsItem.prototype['text'] = undefined;






export default CustomColorThemesSettingsItem;

