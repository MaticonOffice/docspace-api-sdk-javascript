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
 * The TenantBannerSettings model module.
 * @module models/TenantBannerSettings
 * @version 3.2.0
 */
class TenantBannerSettings {
    /**
     * Constructs a new <code>TenantBannerSettings</code>.
     * The promotional banners visibility settings.
     * @alias module:models/TenantBannerSettings
     */
    constructor() { 
        
        TenantBannerSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TenantBannerSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TenantBannerSettings} obj Optional instance to populate.
     * @return {module:models/TenantBannerSettings} The populated <code>TenantBannerSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TenantBannerSettings();

            if (data.hasOwnProperty('hidden')) {
                obj['hidden'] = ApiClient.convertToType(data['hidden'], 'Boolean');
            }
            if (data.hasOwnProperty('lastModified')) {
                obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TenantBannerSettings</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TenantBannerSettings</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The banners visibility flag.
 * @member {Boolean} hidden
 */
TenantBannerSettings.prototype['hidden'] = undefined;

/**
 * @member {Date} lastModified
 */
TenantBannerSettings.prototype['lastModified'] = undefined;






export default TenantBannerSettings;

