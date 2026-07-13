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
 * The TenantDevToolsAccessSettingsDto model module.
 * @module models/TenantDevToolsAccessSettingsDto
 * @version 3.2.0
 */
class TenantDevToolsAccessSettingsDto {
    /**
     * Constructs a new <code>TenantDevToolsAccessSettingsDto</code>.
     * The request parameters for managing the Developer Tools access settings for the current tenant.
     * @alias module:models/TenantDevToolsAccessSettingsDto
     */
    constructor() { 
        
        TenantDevToolsAccessSettingsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TenantDevToolsAccessSettingsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TenantDevToolsAccessSettingsDto} obj Optional instance to populate.
     * @return {module:models/TenantDevToolsAccessSettingsDto} The populated <code>TenantDevToolsAccessSettingsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TenantDevToolsAccessSettingsDto();

            if (data.hasOwnProperty('limitedAccessForUsers')) {
                obj['limitedAccessForUsers'] = ApiClient.convertToType(data['limitedAccessForUsers'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TenantDevToolsAccessSettingsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TenantDevToolsAccessSettingsDto</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Determines if users have restricted access to the Developer Tools.
 * @member {Boolean} limitedAccessForUsers
 */
TenantDevToolsAccessSettingsDto.prototype['limitedAccessForUsers'] = undefined;






export default TenantDevToolsAccessSettingsDto;

