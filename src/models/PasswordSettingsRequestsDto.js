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
 * The PasswordSettingsRequestsDto model module.
 * @module models/PasswordSettingsRequestsDto
 * @version 3.2.0
 */
class PasswordSettingsRequestsDto {
    /**
     * Constructs a new <code>PasswordSettingsRequestsDto</code>.
     * The request parameters for configuring the password complexity requirements.
     * @alias module:models/PasswordSettingsRequestsDto
     */
    constructor() { 
        
        PasswordSettingsRequestsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PasswordSettingsRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/PasswordSettingsRequestsDto} obj Optional instance to populate.
     * @return {module:models/PasswordSettingsRequestsDto} The populated <code>PasswordSettingsRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PasswordSettingsRequestsDto();

            if (data.hasOwnProperty('minLength')) {
                obj['minLength'] = ApiClient.convertToType(data['minLength'], 'Number');
            }
            if (data.hasOwnProperty('upperCase')) {
                obj['upperCase'] = ApiClient.convertToType(data['upperCase'], 'Boolean');
            }
            if (data.hasOwnProperty('digits')) {
                obj['digits'] = ApiClient.convertToType(data['digits'], 'Boolean');
            }
            if (data.hasOwnProperty('specSymbols')) {
                obj['specSymbols'] = ApiClient.convertToType(data['specSymbols'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PasswordSettingsRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PasswordSettingsRequestsDto</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The minimum number of characters required for valid passwords.
 * @member {Number} minLength
 */
PasswordSettingsRequestsDto.prototype['minLength'] = undefined;

/**
 * Specifies whether the password should contain the uppercase letters or not.
 * @member {Boolean} upperCase
 */
PasswordSettingsRequestsDto.prototype['upperCase'] = undefined;

/**
 * Specifies whether the password should contain the digits or not.
 * @member {Boolean} digits
 */
PasswordSettingsRequestsDto.prototype['digits'] = undefined;

/**
 * Specifies whether the password should contain the special symbols or not.
 * @member {Boolean} specSymbols
 */
PasswordSettingsRequestsDto.prototype['specSymbols'] = undefined;






export default PasswordSettingsRequestsDto;

