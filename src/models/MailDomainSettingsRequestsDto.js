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
import TenantTrustedDomainsType from './TenantTrustedDomainsType';

/**
 * The MailDomainSettingsRequestsDto model module.
 * @module models/MailDomainSettingsRequestsDto
 * @version 3.2.0
 */
class MailDomainSettingsRequestsDto {
    /**
     * Constructs a new <code>MailDomainSettingsRequestsDto</code>.
     * The request parameters for configuring trusted mail domains and visitor invitation settings.
     * @alias module:models/MailDomainSettingsRequestsDto
     * @param type {module:models/TenantTrustedDomainsType} 
     * @param domains {Array.<String>} The list of authorized email domains that are considered trusted.
     */
    constructor(type, domains) { 
        
        MailDomainSettingsRequestsDto.initialize(this, type, domains);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, domains) { 
        obj['type'] = type;
        obj['domains'] = domains;
    }

    /**
     * Constructs a <code>MailDomainSettingsRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/MailDomainSettingsRequestsDto} obj Optional instance to populate.
     * @return {module:models/MailDomainSettingsRequestsDto} The populated <code>MailDomainSettingsRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MailDomainSettingsRequestsDto();

            if (data.hasOwnProperty('type')) {
                obj['type'] = TenantTrustedDomainsType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('domains')) {
                obj['domains'] = ApiClient.convertToType(data['domains'], ['String']);
            }
            if (data.hasOwnProperty('inviteUsersAsVisitors')) {
                obj['inviteUsersAsVisitors'] = ApiClient.convertToType(data['inviteUsersAsVisitors'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MailDomainSettingsRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MailDomainSettingsRequestsDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of MailDomainSettingsRequestsDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['domains'])) {
            throw new Error("Expected the field `domains` to be an array in the JSON data but got " + data['domains']);
        }

        return true;
    }


}

MailDomainSettingsRequestsDto.RequiredProperties = ["type", "domains"];

/**
 * @member {module:models/TenantTrustedDomainsType} type
 */
MailDomainSettingsRequestsDto.prototype['type'] = undefined;

/**
 * The list of authorized email domains that are considered trusted.
 * @member {Array.<String>} domains
 */
MailDomainSettingsRequestsDto.prototype['domains'] = undefined;

/**
 * Specifies the default permission level for the invited users (visitors or not).
 * @member {Boolean} inviteUsersAsVisitors
 */
MailDomainSettingsRequestsDto.prototype['inviteUsersAsVisitors'] = undefined;






export default MailDomainSettingsRequestsDto;

