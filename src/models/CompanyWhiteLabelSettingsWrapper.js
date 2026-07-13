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
import CompanyWhiteLabelSettings from './CompanyWhiteLabelSettings';

/**
 * The CompanyWhiteLabelSettingsWrapper model module.
 * @module models/CompanyWhiteLabelSettingsWrapper
 * @version 3.2.0
 */
class CompanyWhiteLabelSettingsWrapper {
    /**
     * Constructs a new <code>CompanyWhiteLabelSettingsWrapper</code>.
     * The company white label settings wrapper.
     * @alias module:models/CompanyWhiteLabelSettingsWrapper
     */
    constructor() { 
        
        CompanyWhiteLabelSettingsWrapper.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompanyWhiteLabelSettingsWrapper</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CompanyWhiteLabelSettingsWrapper} obj Optional instance to populate.
     * @return {module:models/CompanyWhiteLabelSettingsWrapper} The populated <code>CompanyWhiteLabelSettingsWrapper</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompanyWhiteLabelSettingsWrapper();

            if (data.hasOwnProperty('settings')) {
                obj['settings'] = CompanyWhiteLabelSettings.constructFromObject(data['settings']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CompanyWhiteLabelSettingsWrapper</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CompanyWhiteLabelSettingsWrapper</code>.
     */
    static validateJSON(data) {
        // validate the optional field `settings`
        if (data['settings']) { // data not null
          CompanyWhiteLabelSettings.validateJSON(data['settings']);
        }

        return true;
    }


}



/**
 * @member {module:models/CompanyWhiteLabelSettings} settings
 */
CompanyWhiteLabelSettingsWrapper.prototype['settings'] = undefined;






export default CompanyWhiteLabelSettingsWrapper;

