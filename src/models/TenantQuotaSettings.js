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
 * The TenantQuotaSettings model module.
 * @module models/TenantQuotaSettings
 * @version 3.2.0
 */
class TenantQuotaSettings {
    /**
     * Constructs a new <code>TenantQuotaSettings</code>.
     * The tenant quota settings.
     * @alias module:models/TenantQuotaSettings
     */
    constructor() { 
        
        TenantQuotaSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TenantQuotaSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TenantQuotaSettings} obj Optional instance to populate.
     * @return {module:models/TenantQuotaSettings} The populated <code>TenantQuotaSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TenantQuotaSettings();

            if (data.hasOwnProperty('enableQuota')) {
                obj['enableQuota'] = ApiClient.convertToType(data['enableQuota'], 'Boolean');
            }
            if (data.hasOwnProperty('quota')) {
                obj['quota'] = ApiClient.convertToType(data['quota'], 'Number');
            }
            if (data.hasOwnProperty('lastRecalculateDate')) {
                obj['lastRecalculateDate'] = ApiClient.convertToType(data['lastRecalculateDate'], 'Date');
            }
            if (data.hasOwnProperty('lastModified')) {
                obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TenantQuotaSettings</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TenantQuotaSettings</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Specifies if the tenant quota is enabled or not.
 * @member {Boolean} enableQuota
 */
TenantQuotaSettings.prototype['enableQuota'] = undefined;

/**
 * The tenant quota.
 * @member {Number} quota
 */
TenantQuotaSettings.prototype['quota'] = undefined;

/**
 * The date of the last tenant quota recalculation.
 * @member {Date} lastRecalculateDate
 */
TenantQuotaSettings.prototype['lastRecalculateDate'] = undefined;

/**
 * @member {Date} lastModified
 */
TenantQuotaSettings.prototype['lastModified'] = undefined;






export default TenantQuotaSettings;

