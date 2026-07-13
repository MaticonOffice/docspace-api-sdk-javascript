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
 * The CustomColorThemesSettingsRequestsDto model module.
 * @module models/CustomColorThemesSettingsRequestsDto
 * @version 3.2.0
 */
class CustomColorThemesSettingsRequestsDto {
    /**
     * Constructs a new <code>CustomColorThemesSettingsRequestsDto</code>.
     * The request parameters for managing the portal theme settings.
     * @alias module:models/CustomColorThemesSettingsRequestsDto
     */
    constructor() { 
        
        CustomColorThemesSettingsRequestsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomColorThemesSettingsRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CustomColorThemesSettingsRequestsDto} obj Optional instance to populate.
     * @return {module:models/CustomColorThemesSettingsRequestsDto} The populated <code>CustomColorThemesSettingsRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomColorThemesSettingsRequestsDto();

            if (data.hasOwnProperty('theme')) {
                obj['theme'] = CustomColorThemesSettingsItem.constructFromObject(data['theme']);
            }
            if (data.hasOwnProperty('selected')) {
                obj['selected'] = ApiClient.convertToType(data['selected'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomColorThemesSettingsRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomColorThemesSettingsRequestsDto</code>.
     */
    static validateJSON(data) {
        // validate the optional field `theme`
        if (data['theme']) { // data not null
          CustomColorThemesSettingsItem.validateJSON(data['theme']);
        }

        return true;
    }


}



/**
 * @member {module:models/CustomColorThemesSettingsItem} theme
 */
CustomColorThemesSettingsRequestsDto.prototype['theme'] = undefined;

/**
 * Specifies the optional value indicating the selected custom color theme.
 * @member {Number} selected
 */
CustomColorThemesSettingsRequestsDto.prototype['selected'] = undefined;






export default CustomColorThemesSettingsRequestsDto;

