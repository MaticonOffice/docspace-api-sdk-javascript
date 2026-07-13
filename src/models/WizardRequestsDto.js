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
 * The WizardRequestsDto model module.
 * @module models/WizardRequestsDto
 * @version 3.2.0
 */
class WizardRequestsDto {
    /**
     * Constructs a new <code>WizardRequestsDto</code>.
     * The request parameters for initial configuration of the setup wizard.
     * @alias module:models/WizardRequestsDto
     * @param email {String} The user's email address for authentication and communication.
     * @param passwordHash {String} The hashed representation of the user's password.
     */
    constructor(email, passwordHash) { 
        
        WizardRequestsDto.initialize(this, email, passwordHash);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, passwordHash) { 
        obj['email'] = email;
        obj['passwordHash'] = passwordHash;
    }

    /**
     * Constructs a <code>WizardRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/WizardRequestsDto} obj Optional instance to populate.
     * @return {module:models/WizardRequestsDto} The populated <code>WizardRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WizardRequestsDto();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('passwordHash')) {
                obj['passwordHash'] = ApiClient.convertToType(data['passwordHash'], 'String');
            }
            if (data.hasOwnProperty('lng')) {
                obj['lng'] = ApiClient.convertToType(data['lng'], 'String');
            }
            if (data.hasOwnProperty('timeZone')) {
                obj['timeZone'] = ApiClient.convertToType(data['timeZone'], 'String');
            }
            if (data.hasOwnProperty('amiId')) {
                obj['amiId'] = ApiClient.convertToType(data['amiId'], 'String');
            }
            if (data.hasOwnProperty('subscribeFromSite')) {
                obj['subscribeFromSite'] = ApiClient.convertToType(data['subscribeFromSite'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WizardRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WizardRequestsDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WizardRequestsDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['passwordHash'] && !(typeof data['passwordHash'] === 'string' || data['passwordHash'] instanceof String)) {
            throw new Error("Expected the field `passwordHash` to be a primitive type in the JSON string but got " + data['passwordHash']);
        }
        // ensure the json data is a string
        if (data['lng'] && !(typeof data['lng'] === 'string' || data['lng'] instanceof String)) {
            throw new Error("Expected the field `lng` to be a primitive type in the JSON string but got " + data['lng']);
        }
        // ensure the json data is a string
        if (data['timeZone'] && !(typeof data['timeZone'] === 'string' || data['timeZone'] instanceof String)) {
            throw new Error("Expected the field `timeZone` to be a primitive type in the JSON string but got " + data['timeZone']);
        }
        // ensure the json data is a string
        if (data['amiId'] && !(typeof data['amiId'] === 'string' || data['amiId'] instanceof String)) {
            throw new Error("Expected the field `amiId` to be a primitive type in the JSON string but got " + data['amiId']);
        }

        return true;
    }


}

WizardRequestsDto.RequiredProperties = ["email", "passwordHash"];

/**
 * The user's email address for authentication and communication.
 * @member {String} email
 */
WizardRequestsDto.prototype['email'] = undefined;

/**
 * The hashed representation of the user's password.
 * @member {String} passwordHash
 */
WizardRequestsDto.prototype['passwordHash'] = undefined;

/**
 * The user's preferred interface language code.
 * @member {String} lng
 */
WizardRequestsDto.prototype['lng'] = undefined;

/**
 * The user's time zone identifier.
 * @member {String} timeZone
 */
WizardRequestsDto.prototype['timeZone'] = undefined;

/**
 * The Amazon Machine Image (AMI) identifier.
 * @member {String} amiId
 */
WizardRequestsDto.prototype['amiId'] = undefined;

/**
 * Specifies whether the user opted in for site communications.
 * @member {Boolean} subscribeFromSite
 */
WizardRequestsDto.prototype['subscribeFromSite'] = undefined;






export default WizardRequestsDto;

