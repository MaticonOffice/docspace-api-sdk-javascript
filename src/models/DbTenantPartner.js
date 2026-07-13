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
 * The DbTenantPartner model module.
 * @module models/DbTenantPartner
 * @version 3.2.0
 */
class DbTenantPartner {
    /**
     * Constructs a new <code>DbTenantPartner</code>.
     * The database tenant partner parameters.
     * @alias module:models/DbTenantPartner
     */
    constructor() { 
        
        DbTenantPartner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DbTenantPartner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/DbTenantPartner} obj Optional instance to populate.
     * @return {module:models/DbTenantPartner} The populated <code>DbTenantPartner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DbTenantPartner();

            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'Number');
            }
            if (data.hasOwnProperty('partnerId')) {
                obj['partnerId'] = ApiClient.convertToType(data['partnerId'], 'String');
            }
            if (data.hasOwnProperty('affiliateId')) {
                obj['affiliateId'] = ApiClient.convertToType(data['affiliateId'], 'String');
            }
            if (data.hasOwnProperty('campaign')) {
                obj['campaign'] = ApiClient.convertToType(data['campaign'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DbTenantPartner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DbTenantPartner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['partnerId'] && !(typeof data['partnerId'] === 'string' || data['partnerId'] instanceof String)) {
            throw new Error("Expected the field `partnerId` to be a primitive type in the JSON string but got " + data['partnerId']);
        }
        // ensure the json data is a string
        if (data['affiliateId'] && !(typeof data['affiliateId'] === 'string' || data['affiliateId'] instanceof String)) {
            throw new Error("Expected the field `affiliateId` to be a primitive type in the JSON string but got " + data['affiliateId']);
        }
        // ensure the json data is a string
        if (data['campaign'] && !(typeof data['campaign'] === 'string' || data['campaign'] instanceof String)) {
            throw new Error("Expected the field `campaign` to be a primitive type in the JSON string but got " + data['campaign']);
        }

        return true;
    }


}



/**
 * The tenant ID.
 * @member {Number} tenantId
 */
DbTenantPartner.prototype['tenantId'] = undefined;

/**
 * The partner ID.
 * @member {String} partnerId
 */
DbTenantPartner.prototype['partnerId'] = undefined;

/**
 * The affiliate ID.
 * @member {String} affiliateId
 */
DbTenantPartner.prototype['affiliateId'] = undefined;

/**
 * The tenant partner campaign.
 * @member {String} campaign
 */
DbTenantPartner.prototype['campaign'] = undefined;






export default DbTenantPartner;

