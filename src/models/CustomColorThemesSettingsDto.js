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
import CustomColorThemesSettingsItem from './CustomColorThemesSettingsItem';

/**
 * The CustomColorThemesSettingsDto model module.
 * @module models/CustomColorThemesSettingsDto
 * @version 3.2.0
 */
class CustomColorThemesSettingsDto {
    /**
     * Constructs a new <code>CustomColorThemesSettingsDto</code>.
     * The custom color themes settings.
     * @alias module:models/CustomColorThemesSettingsDto
     */
    constructor() { 
        
        CustomColorThemesSettingsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomColorThemesSettingsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CustomColorThemesSettingsDto} obj Optional instance to populate.
     * @return {module:models/CustomColorThemesSettingsDto} The populated <code>CustomColorThemesSettingsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomColorThemesSettingsDto();

            if (data.hasOwnProperty('themes')) {
                obj['themes'] = ApiClient.convertToType(data['themes'], [CustomColorThemesSettingsItem]);
            }
            if (data.hasOwnProperty('selected')) {
                obj['selected'] = ApiClient.convertToType(data['selected'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomColorThemesSettingsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomColorThemesSettingsDto</code>.
     */
    static validateJSON(data) {
        if (data['themes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['themes'])) {
                throw new Error("Expected the field `themes` to be an array in the JSON data but got " + data['themes']);
            }
            // validate the optional field `themes` (array)
            for (const item of data['themes']) {
                CustomColorThemesSettingsItem.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The list of the custom color themes.
 * @member {Array.<module:models/CustomColorThemesSettingsItem>} themes
 */
CustomColorThemesSettingsDto.prototype['themes'] = undefined;

/**
 * Specifies whether the custom color theme is selected.
 * @member {Number} selected
 */
CustomColorThemesSettingsDto.prototype['selected'] = undefined;

/**
 * The maximum number of the custom color themes.
 * @member {Number} limit
 */
CustomColorThemesSettingsDto.prototype['limit'] = undefined;






export default CustomColorThemesSettingsDto;

