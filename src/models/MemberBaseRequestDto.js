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
 * The MemberBaseRequestDto model module.
 * @module models/MemberBaseRequestDto
 * @version 3.2.0
 */
class MemberBaseRequestDto {
    /**
     * Constructs a new <code>MemberBaseRequestDto</code>.
     * The request parameters for the user generic information.
     * @alias module:models/MemberBaseRequestDto
     */
    constructor() { 
        
        MemberBaseRequestDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MemberBaseRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/MemberBaseRequestDto} obj Optional instance to populate.
     * @return {module:models/MemberBaseRequestDto} The populated <code>MemberBaseRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MemberBaseRequestDto();

            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('passwordHash')) {
                obj['passwordHash'] = ApiClient.convertToType(data['passwordHash'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MemberBaseRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MemberBaseRequestDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['passwordHash'] && !(typeof data['passwordHash'] === 'string' || data['passwordHash'] instanceof String)) {
            throw new Error("Expected the field `passwordHash` to be a primitive type in the JSON string but got " + data['passwordHash']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }

        return true;
    }


}



/**
 * The user password.
 * @member {String} password
 */
MemberBaseRequestDto.prototype['password'] = undefined;

/**
 * The user password hash.
 * @member {String} passwordHash
 */
MemberBaseRequestDto.prototype['passwordHash'] = undefined;

/**
 * The user email address.
 * @member {String} email
 */
MemberBaseRequestDto.prototype['email'] = undefined;






export default MemberBaseRequestDto;

