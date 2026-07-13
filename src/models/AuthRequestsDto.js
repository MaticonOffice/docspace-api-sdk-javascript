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
import ConfirmData from './ConfirmData';
import RecaptchaType from './RecaptchaType';

/**
 * The AuthRequestsDto model module.
 * @module models/AuthRequestsDto
 * @version 3.2.0
 */
class AuthRequestsDto {
    /**
     * Constructs a new <code>AuthRequestsDto</code>.
     * The parameters required for the user authentication requests.
     * @alias module:models/AuthRequestsDto
     */
    constructor() { 
        
        AuthRequestsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/AuthRequestsDto} obj Optional instance to populate.
     * @return {module:models/AuthRequestsDto} The populated <code>AuthRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthRequestsDto();

            if (data.hasOwnProperty('userName')) {
                obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('passwordHash')) {
                obj['passwordHash'] = ApiClient.convertToType(data['passwordHash'], 'String');
            }
            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('accessToken')) {
                obj['accessToken'] = ApiClient.convertToType(data['accessToken'], 'String');
            }
            if (data.hasOwnProperty('serializedProfile')) {
                obj['serializedProfile'] = ApiClient.convertToType(data['serializedProfile'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('codeOAuth')) {
                obj['codeOAuth'] = ApiClient.convertToType(data['codeOAuth'], 'String');
            }
            if (data.hasOwnProperty('session')) {
                obj['session'] = ApiClient.convertToType(data['session'], 'Boolean');
            }
            if (data.hasOwnProperty('confirmData')) {
                obj['confirmData'] = ConfirmData.constructFromObject(data['confirmData']);
            }
            if (data.hasOwnProperty('recaptchaType')) {
                obj['recaptchaType'] = RecaptchaType.constructFromObject(data['recaptchaType']);
            }
            if (data.hasOwnProperty('recaptchaResponse')) {
                obj['recaptchaResponse'] = ApiClient.convertToType(data['recaptchaResponse'], 'String');
            }
            if (data.hasOwnProperty('culture')) {
                obj['culture'] = ApiClient.convertToType(data['culture'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthRequestsDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['userName'] && !(typeof data['userName'] === 'string' || data['userName'] instanceof String)) {
            throw new Error("Expected the field `userName` to be a primitive type in the JSON string but got " + data['userName']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['passwordHash'] && !(typeof data['passwordHash'] === 'string' || data['passwordHash'] instanceof String)) {
            throw new Error("Expected the field `passwordHash` to be a primitive type in the JSON string but got " + data['passwordHash']);
        }
        // ensure the json data is a string
        if (data['provider'] && !(typeof data['provider'] === 'string' || data['provider'] instanceof String)) {
            throw new Error("Expected the field `provider` to be a primitive type in the JSON string but got " + data['provider']);
        }
        // ensure the json data is a string
        if (data['accessToken'] && !(typeof data['accessToken'] === 'string' || data['accessToken'] instanceof String)) {
            throw new Error("Expected the field `accessToken` to be a primitive type in the JSON string but got " + data['accessToken']);
        }
        // ensure the json data is a string
        if (data['serializedProfile'] && !(typeof data['serializedProfile'] === 'string' || data['serializedProfile'] instanceof String)) {
            throw new Error("Expected the field `serializedProfile` to be a primitive type in the JSON string but got " + data['serializedProfile']);
        }
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['codeOAuth'] && !(typeof data['codeOAuth'] === 'string' || data['codeOAuth'] instanceof String)) {
            throw new Error("Expected the field `codeOAuth` to be a primitive type in the JSON string but got " + data['codeOAuth']);
        }
        // validate the optional field `confirmData`
        if (data['confirmData']) { // data not null
          ConfirmData.validateJSON(data['confirmData']);
        }
        // ensure the json data is a string
        if (data['recaptchaResponse'] && !(typeof data['recaptchaResponse'] === 'string' || data['recaptchaResponse'] instanceof String)) {
            throw new Error("Expected the field `recaptchaResponse` to be a primitive type in the JSON string but got " + data['recaptchaResponse']);
        }
        // ensure the json data is a string
        if (data['culture'] && !(typeof data['culture'] === 'string' || data['culture'] instanceof String)) {
            throw new Error("Expected the field `culture` to be a primitive type in the JSON string but got " + data['culture']);
        }

        return true;
    }


}



/**
 * The username or email used for authentication.
 * @member {String} userName
 */
AuthRequestsDto.prototype['userName'] = undefined;

/**
 * The password in plain text for user authentication.
 * @member {String} password
 */
AuthRequestsDto.prototype['password'] = undefined;

/**
 * The hashed password for secure verification.
 * @member {String} passwordHash
 */
AuthRequestsDto.prototype['passwordHash'] = undefined;

/**
 * The type of authentication provider (e.g., internal, Google, Azure).
 * @member {String} provider
 */
AuthRequestsDto.prototype['provider'] = undefined;

/**
 * The access token used for authentication with external providers.
 * @member {String} accessToken
 */
AuthRequestsDto.prototype['accessToken'] = undefined;

/**
 * The serialized user profile data, if applicable.
 * @member {String} serializedProfile
 */
AuthRequestsDto.prototype['serializedProfile'] = undefined;

/**
 * The code for two-factor authentication.
 * @member {String} code
 */
AuthRequestsDto.prototype['code'] = undefined;

/**
 * The authorization code used for obtaining OAuth tokens.
 * @member {String} codeOAuth
 */
AuthRequestsDto.prototype['codeOAuth'] = undefined;

/**
 * Specifies whether the authentication is session-based.
 * @member {Boolean} session
 */
AuthRequestsDto.prototype['session'] = undefined;

/**
 * @member {module:models/ConfirmData} confirmData
 */
AuthRequestsDto.prototype['confirmData'] = undefined;

/**
 * @member {module:models/RecaptchaType} recaptchaType
 */
AuthRequestsDto.prototype['recaptchaType'] = undefined;

/**
 * The user's response to the CAPTCHA challenge.
 * @member {String} recaptchaResponse
 */
AuthRequestsDto.prototype['recaptchaResponse'] = undefined;

/**
 * The culture code for localization during authentication.
 * @member {String} culture
 */
AuthRequestsDto.prototype['culture'] = undefined;






export default AuthRequestsDto;

