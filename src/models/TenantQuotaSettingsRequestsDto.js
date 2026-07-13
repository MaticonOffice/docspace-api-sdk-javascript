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
 * The TenantQuotaSettingsRequestsDto model module.
 * @module models/TenantQuotaSettingsRequestsDto
 * @version 3.2.0
 */
class TenantQuotaSettingsRequestsDto {
    /**
     * Constructs a new <code>TenantQuotaSettingsRequestsDto</code>.
     * The request parameters for managing the tenant storage quota settings in a multi-tenant system.
     * @alias module:models/TenantQuotaSettingsRequestsDto
     * @param tenantId {Number} The ID of the tenant whose quota is being configured.
     */
    constructor(tenantId) { 
        
        TenantQuotaSettingsRequestsDto.initialize(this, tenantId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tenantId) { 
        obj['tenantId'] = tenantId;
    }

    /**
     * Constructs a <code>TenantQuotaSettingsRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TenantQuotaSettingsRequestsDto} obj Optional instance to populate.
     * @return {module:models/TenantQuotaSettingsRequestsDto} The populated <code>TenantQuotaSettingsRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TenantQuotaSettingsRequestsDto();

            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'Number');
            }
            if (data.hasOwnProperty('quota')) {
                obj['quota'] = ApiClient.convertToType(data['quota'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TenantQuotaSettingsRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TenantQuotaSettingsRequestsDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TenantQuotaSettingsRequestsDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

TenantQuotaSettingsRequestsDto.RequiredProperties = ["tenantId"];

/**
 * The ID of the tenant whose quota is being configured.
 * @member {Number} tenantId
 */
TenantQuotaSettingsRequestsDto.prototype['tenantId'] = undefined;

/**
 * The storage quota limit in bytes allocated to the tenant.
 * @member {Number} quota
 */
TenantQuotaSettingsRequestsDto.prototype['quota'] = undefined;






export default TenantQuotaSettingsRequestsDto;

