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
 * The AdminMessageSettingsRequestsDto model module.
 * @module models/AdminMessageSettingsRequestsDto
 * @version 3.2.0
 */
class AdminMessageSettingsRequestsDto {
    /**
     * Constructs a new <code>AdminMessageSettingsRequestsDto</code>.
     * The request parameters for configuring the administrator message content.
     * @alias module:models/AdminMessageSettingsRequestsDto
     * @param message {String} The content of the administrator message to be sent.
     * @param email {String} Email
     */
    constructor(message, email) { 
        
        AdminMessageSettingsRequestsDto.initialize(this, message, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, message, email) { 
        obj['message'] = message;
        obj['email'] = email;
    }

    /**
     * Constructs a <code>AdminMessageSettingsRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/AdminMessageSettingsRequestsDto} obj Optional instance to populate.
     * @return {module:models/AdminMessageSettingsRequestsDto} The populated <code>AdminMessageSettingsRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AdminMessageSettingsRequestsDto();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
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
     * Validates the JSON data with respect to <code>AdminMessageSettingsRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AdminMessageSettingsRequestsDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AdminMessageSettingsRequestsDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
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

AdminMessageSettingsRequestsDto.RequiredProperties = ["message", "email"];

/**
 * The content of the administrator message to be sent.
 * @member {String} message
 */
AdminMessageSettingsRequestsDto.prototype['message'] = undefined;

/**
 * Email
 * @member {String} email
 */
AdminMessageSettingsRequestsDto.prototype['email'] = undefined;

/**
 * Culture
 * @member {String} culture
 */
AdminMessageSettingsRequestsDto.prototype['culture'] = undefined;






export default AdminMessageSettingsRequestsDto;

