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
 * The PasswordSettingsDto model module.
 * @module models/PasswordSettingsDto
 * @version 3.2.0
 */
class PasswordSettingsDto {
    /**
     * Constructs a new <code>PasswordSettingsDto</code>.
     * The password settings parameters.
     * @alias module:models/PasswordSettingsDto
     */
    constructor() { 
        
        PasswordSettingsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PasswordSettingsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/PasswordSettingsDto} obj Optional instance to populate.
     * @return {module:models/PasswordSettingsDto} The populated <code>PasswordSettingsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PasswordSettingsDto();

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
            if (data.hasOwnProperty('allowedCharactersRegexStr')) {
                obj['allowedCharactersRegexStr'] = ApiClient.convertToType(data['allowedCharactersRegexStr'], 'String');
            }
            if (data.hasOwnProperty('digitsRegexStr')) {
                obj['digitsRegexStr'] = ApiClient.convertToType(data['digitsRegexStr'], 'String');
            }
            if (data.hasOwnProperty('upperCaseRegexStr')) {
                obj['upperCaseRegexStr'] = ApiClient.convertToType(data['upperCaseRegexStr'], 'String');
            }
            if (data.hasOwnProperty('specSymbolsRegexStr')) {
                obj['specSymbolsRegexStr'] = ApiClient.convertToType(data['specSymbolsRegexStr'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PasswordSettingsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PasswordSettingsDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['allowedCharactersRegexStr'] && !(typeof data['allowedCharactersRegexStr'] === 'string' || data['allowedCharactersRegexStr'] instanceof String)) {
            throw new Error("Expected the field `allowedCharactersRegexStr` to be a primitive type in the JSON string but got " + data['allowedCharactersRegexStr']);
        }
        // ensure the json data is a string
        if (data['digitsRegexStr'] && !(typeof data['digitsRegexStr'] === 'string' || data['digitsRegexStr'] instanceof String)) {
            throw new Error("Expected the field `digitsRegexStr` to be a primitive type in the JSON string but got " + data['digitsRegexStr']);
        }
        // ensure the json data is a string
        if (data['upperCaseRegexStr'] && !(typeof data['upperCaseRegexStr'] === 'string' || data['upperCaseRegexStr'] instanceof String)) {
            throw new Error("Expected the field `upperCaseRegexStr` to be a primitive type in the JSON string but got " + data['upperCaseRegexStr']);
        }
        // ensure the json data is a string
        if (data['specSymbolsRegexStr'] && !(typeof data['specSymbolsRegexStr'] === 'string' || data['specSymbolsRegexStr'] instanceof String)) {
            throw new Error("Expected the field `specSymbolsRegexStr` to be a primitive type in the JSON string but got " + data['specSymbolsRegexStr']);
        }

        return true;
    }


}



/**
 * The minimum number of characters required for valid passwords.
 * @member {Number} minLength
 */
PasswordSettingsDto.prototype['minLength'] = undefined;

/**
 * Specifies whether the password should contain the uppercase letters or not.
 * @member {Boolean} upperCase
 */
PasswordSettingsDto.prototype['upperCase'] = undefined;

/**
 * Specifies whether the password should contain the digits or not.
 * @member {Boolean} digits
 */
PasswordSettingsDto.prototype['digits'] = undefined;

/**
 * Specifies whether the password should contain the special symbols or not.
 * @member {Boolean} specSymbols
 */
PasswordSettingsDto.prototype['specSymbols'] = undefined;

/**
 * The allowed password characters in the regex string format.
 * @member {String} allowedCharactersRegexStr
 */
PasswordSettingsDto.prototype['allowedCharactersRegexStr'] = undefined;

/**
 * The password digits in the regex string format.
 * @member {String} digitsRegexStr
 */
PasswordSettingsDto.prototype['digitsRegexStr'] = undefined;

/**
 * The password uppercase letters in the regex string format.
 * @member {String} upperCaseRegexStr
 */
PasswordSettingsDto.prototype['upperCaseRegexStr'] = undefined;

/**
 * The passaword special symbols in the regex string format.
 * @member {String} specSymbolsRegexStr
 */
PasswordSettingsDto.prototype['specSymbolsRegexStr'] = undefined;






export default PasswordSettingsDto;

