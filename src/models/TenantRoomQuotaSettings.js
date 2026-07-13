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
 * The TenantRoomQuotaSettings model module.
 * @module models/TenantRoomQuotaSettings
 * @version 3.2.0
 */
class TenantRoomQuotaSettings {
    /**
     * Constructs a new <code>TenantRoomQuotaSettings</code>.
     * The room quota settings.
     * @alias module:models/TenantRoomQuotaSettings
     */
    constructor() { 
        
        TenantRoomQuotaSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TenantRoomQuotaSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TenantRoomQuotaSettings} obj Optional instance to populate.
     * @return {module:models/TenantRoomQuotaSettings} The populated <code>TenantRoomQuotaSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TenantRoomQuotaSettings();

            if (data.hasOwnProperty('enableQuota')) {
                obj['enableQuota'] = ApiClient.convertToType(data['enableQuota'], 'Boolean');
            }
            if (data.hasOwnProperty('defaultQuota')) {
                obj['defaultQuota'] = ApiClient.convertToType(data['defaultQuota'], 'Number');
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
     * Validates the JSON data with respect to <code>TenantRoomQuotaSettings</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TenantRoomQuotaSettings</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Specifies if the quota is enabled for the tenant entity or not.
 * @member {Boolean} enableQuota
 */
TenantRoomQuotaSettings.prototype['enableQuota'] = undefined;

/**
 * The default quota of the tenant entity.
 * @member {Number} defaultQuota
 */
TenantRoomQuotaSettings.prototype['defaultQuota'] = undefined;

/**
 * The date of the last quota recalculation.
 * @member {Date} lastRecalculateDate
 */
TenantRoomQuotaSettings.prototype['lastRecalculateDate'] = undefined;

/**
 * @member {Date} lastModified
 */
TenantRoomQuotaSettings.prototype['lastModified'] = undefined;






export default TenantRoomQuotaSettings;

