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
import UserInvitationRequestDto from './UserInvitationRequestDto';

/**
 * The InviteUsersRequestDto model module.
 * @module models/InviteUsersRequestDto
 * @version 3.2.0
 */
class InviteUsersRequestDto {
    /**
     * Constructs a new <code>InviteUsersRequestDto</code>.
     * The request parameters for inviting users.
     * @alias module:models/InviteUsersRequestDto
     * @param invitations {Array.<module:models/UserInvitationRequestDto>} The list of user invitations.
     */
    constructor(invitations) { 
        
        InviteUsersRequestDto.initialize(this, invitations);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, invitations) { 
        obj['invitations'] = invitations;
    }

    /**
     * Constructs a <code>InviteUsersRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/InviteUsersRequestDto} obj Optional instance to populate.
     * @return {module:models/InviteUsersRequestDto} The populated <code>InviteUsersRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InviteUsersRequestDto();

            if (data.hasOwnProperty('invitations')) {
                obj['invitations'] = ApiClient.convertToType(data['invitations'], [UserInvitationRequestDto]);
            }
            if (data.hasOwnProperty('culture')) {
                obj['culture'] = ApiClient.convertToType(data['culture'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InviteUsersRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InviteUsersRequestDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of InviteUsersRequestDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['invitations']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['invitations'])) {
                throw new Error("Expected the field `invitations` to be an array in the JSON data but got " + data['invitations']);
            }
            // validate the optional field `invitations` (array)
            for (const item of data['invitations']) {
                UserInvitationRequestDto.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['culture'] && !(typeof data['culture'] === 'string' || data['culture'] instanceof String)) {
            throw new Error("Expected the field `culture` to be a primitive type in the JSON string but got " + data['culture']);
        }

        return true;
    }


}

InviteUsersRequestDto.RequiredProperties = ["invitations"];

/**
 * The list of user invitations.
 * @member {Array.<module:models/UserInvitationRequestDto>} invitations
 */
InviteUsersRequestDto.prototype['invitations'] = undefined;

/**
 * The culture code of invitations.
 * @member {String} culture
 */
InviteUsersRequestDto.prototype['culture'] = undefined;






export default InviteUsersRequestDto;

