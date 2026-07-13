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
 * The AdminMessageBaseSettingsRequestsDto model module.
 * @module models/AdminMessageBaseSettingsRequestsDto
 * @version 3.2.0
 */
class AdminMessageBaseSettingsRequestsDto {
    /**
     * Constructs a new <code>AdminMessageBaseSettingsRequestsDto</code>.
     * The request parameters for the administrator message configuration.
     * @alias module:models/AdminMessageBaseSettingsRequestsDto
     * @param email {String} The email address used for sending administrator messages.
     */
    constructor(email) { 
        
        AdminMessageBaseSettingsRequestsDto.initialize(this, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email) { 
        obj['email'] = email;
    }

    /**
     * Constructs a <code>AdminMessageBaseSettingsRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/AdminMessageBaseSettingsRequestsDto} obj Optional instance to populate.
     * @return {module:models/AdminMessageBaseSettingsRequestsDto} The populated <code>AdminMessageBaseSettingsRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AdminMessageBaseSettingsRequestsDto();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('culture')) {
                obj['culture'] = ApiClient.convertToType(data['culture'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AdminMessageBaseSettingsRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AdminMessageBaseSettingsRequestsDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AdminMessageBaseSettingsRequestsDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['culture'] && !(typeof data['culture'] === 'string' || data['culture'] instanceof String)) {
            throw new Error("Expected the field `culture` to be a primitive type in the JSON string but got " + data['culture']);
        }

        return true;
    }


}

AdminMessageBaseSettingsRequestsDto.RequiredProperties = ["email"];

/**
 * The email address used for sending administrator messages.
 * @member {String} email
 */
AdminMessageBaseSettingsRequestsDto.prototype['email'] = undefined;

/**
 * The locale identifier for message localization.
 * @member {String} culture
 */
AdminMessageBaseSettingsRequestsDto.prototype['culture'] = undefined;






export default AdminMessageBaseSettingsRequestsDto;

