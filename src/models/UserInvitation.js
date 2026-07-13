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
 * The UserInvitation model module.
 * @module models/UserInvitation
 * @version 3.2.0
 */
class UserInvitation {
    /**
     * Constructs a new <code>UserInvitation</code>.
     * The user invitation parameters.
     * @alias module:models/UserInvitation
     */
    constructor() { 
        
        UserInvitation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserInvitation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UserInvitation} obj Optional instance to populate.
     * @return {module:models/UserInvitation} The populated <code>UserInvitation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserInvitation();

            if (data.hasOwnProperty('usersIds')) {
                obj['usersIds'] = ApiClient.convertToType(data['usersIds'], ['String']);
            }
            if (data.hasOwnProperty('resendAll')) {
                obj['resendAll'] = ApiClient.convertToType(data['resendAll'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserInvitation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserInvitation</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['usersIds'])) {
            throw new Error("Expected the field `usersIds` to be an array in the JSON data but got " + data['usersIds']);
        }

        return true;
    }


}



/**
 * The list of user IDs.
 * @member {Array.<String>} usersIds
 */
UserInvitation.prototype['usersIds'] = undefined;

/**
 * Specifies whether to resend all user invitations or not.
 * @member {Boolean} resendAll
 */
UserInvitation.prototype['resendAll'] = undefined;






export default UserInvitation;

