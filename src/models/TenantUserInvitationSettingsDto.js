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
 * The TenantUserInvitationSettingsDto model module.
 * @module models/TenantUserInvitationSettingsDto
 * @version 3.2.0
 */
class TenantUserInvitationSettingsDto {
    /**
     * Constructs a new <code>TenantUserInvitationSettingsDto</code>.
     * User invitation settings
     * @alias module:models/TenantUserInvitationSettingsDto
     */
    constructor() { 
        
        TenantUserInvitationSettingsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TenantUserInvitationSettingsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TenantUserInvitationSettingsDto} obj Optional instance to populate.
     * @return {module:models/TenantUserInvitationSettingsDto} The populated <code>TenantUserInvitationSettingsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TenantUserInvitationSettingsDto();

            if (data.hasOwnProperty('allowInvitingMembers')) {
                obj['allowInvitingMembers'] = ApiClient.convertToType(data['allowInvitingMembers'], 'Boolean');
            }
            if (data.hasOwnProperty('allowInvitingGuests')) {
                obj['allowInvitingGuests'] = ApiClient.convertToType(data['allowInvitingGuests'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TenantUserInvitationSettingsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TenantUserInvitationSettingsDto</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Allow invite new DocSpace members through the Contacts section.
 * @member {Boolean} allowInvitingMembers
 */
TenantUserInvitationSettingsDto.prototype['allowInvitingMembers'] = undefined;

/**
 * Allow all DocSpace members to invite external guests to rooms.
 * @member {Boolean} allowInvitingGuests
 */
TenantUserInvitationSettingsDto.prototype['allowInvitingGuests'] = undefined;






export default TenantUserInvitationSettingsDto;

