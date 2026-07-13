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
import EmployeeType from './EmployeeType';

/**
 * The SignupAccountRequestDto model module.
 * @module models/SignupAccountRequestDto
 * @version 3.2.0
 */
class SignupAccountRequestDto {
    /**
     * Constructs a new <code>SignupAccountRequestDto</code>.
     * The request parameters for creating a third-party account.
     * @alias module:models/SignupAccountRequestDto
     */
    constructor() { 
        
        SignupAccountRequestDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SignupAccountRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SignupAccountRequestDto} obj Optional instance to populate.
     * @return {module:models/SignupAccountRequestDto} The populated <code>SignupAccountRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignupAccountRequestDto();

            if (data.hasOwnProperty('employeeType')) {
                obj['employeeType'] = EmployeeType.constructFromObject(data['employeeType']);
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('passwordHash')) {
                obj['passwordHash'] = ApiClient.convertToType(data['passwordHash'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('culture')) {
                obj['culture'] = ApiClient.convertToType(data['culture'], 'String');
            }
            if (data.hasOwnProperty('serializedProfile')) {
                obj['serializedProfile'] = ApiClient.convertToType(data['serializedProfile'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SignupAccountRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SignupAccountRequestDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['firstName'] && !(typeof data['firstName'] === 'string' || data['firstName'] instanceof String)) {
            throw new Error("Expected the field `firstName` to be a primitive type in the JSON string but got " + data['firstName']);
        }
        // ensure the json data is a string
        if (data['lastName'] && !(typeof data['lastName'] === 'string' || data['lastName'] instanceof String)) {
            throw new Error("Expected the field `lastName` to be a primitive type in the JSON string but got " + data['lastName']);
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
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['culture'] && !(typeof data['culture'] === 'string' || data['culture'] instanceof String)) {
            throw new Error("Expected the field `culture` to be a primitive type in the JSON string but got " + data['culture']);
        }
        // ensure the json data is a string
        if (data['serializedProfile'] && !(typeof data['serializedProfile'] === 'string' || data['serializedProfile'] instanceof String)) {
            throw new Error("Expected the field `serializedProfile` to be a primitive type in the JSON string but got " + data['serializedProfile']);
        }

        return true;
    }


}



/**
 * @member {module:models/EmployeeType} employeeType
 */
SignupAccountRequestDto.prototype['employeeType'] = undefined;

/**
 * The user first name.
 * @member {String} firstName
 */
SignupAccountRequestDto.prototype['firstName'] = undefined;

/**
 * The user last name.
 * @member {String} lastName
 */
SignupAccountRequestDto.prototype['lastName'] = undefined;

/**
 * The user email address.
 * @member {String} email
 */
SignupAccountRequestDto.prototype['email'] = undefined;

/**
 * The user password hash.
 * @member {String} passwordHash
 */
SignupAccountRequestDto.prototype['passwordHash'] = undefined;

/**
 * The user link key.
 * @member {String} key
 */
SignupAccountRequestDto.prototype['key'] = undefined;

/**
 * The user culture code.
 * @member {String} culture
 */
SignupAccountRequestDto.prototype['culture'] = undefined;

/**
 * Third-party profile in the serialized format
 * @member {String} serializedProfile
 */
SignupAccountRequestDto.prototype['serializedProfile'] = undefined;






export default SignupAccountRequestDto;

