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
import ApiDateTime from './ApiDateTime';
import Contact from './Contact';
import EmployeeType from './EmployeeType';
import SexEnum from './SexEnum';

/**
 * The MemberRequestDto model module.
 * @module models/MemberRequestDto
 * @version 3.2.0
 */
class MemberRequestDto {
    /**
     * Constructs a new <code>MemberRequestDto</code>.
     * The user request parameters.
     * @alias module:models/MemberRequestDto
     */
    constructor() { 
        
        MemberRequestDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MemberRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/MemberRequestDto} obj Optional instance to populate.
     * @return {module:models/MemberRequestDto} The populated <code>MemberRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MemberRequestDto();

            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('passwordHash')) {
                obj['passwordHash'] = ApiClient.convertToType(data['passwordHash'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = EmployeeType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('isUser')) {
                obj['isUser'] = ApiClient.convertToType(data['isUser'], 'Boolean');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('department')) {
                obj['department'] = ApiClient.convertToType(data['department'], ['String']);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('sex')) {
                obj['sex'] = SexEnum.constructFromObject(data['sex']);
            }
            if (data.hasOwnProperty('birthday')) {
                obj['birthday'] = ApiDateTime.constructFromObject(data['birthday']);
            }
            if (data.hasOwnProperty('worksfrom')) {
                obj['worksfrom'] = ApiDateTime.constructFromObject(data['worksfrom']);
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('contacts')) {
                obj['contacts'] = ApiClient.convertToType(data['contacts'], [Contact]);
            }
            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], 'String');
            }
            if (data.hasOwnProperty('fromInviteLink')) {
                obj['fromInviteLink'] = ApiClient.convertToType(data['fromInviteLink'], 'Boolean');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('cultureName')) {
                obj['cultureName'] = ApiClient.convertToType(data['cultureName'], 'String');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'String');
            }
            if (data.hasOwnProperty('spam')) {
                obj['spam'] = ApiClient.convertToType(data['spam'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MemberRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MemberRequestDto</code>.
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
        // ensure the json data is a string
        if (data['firstName'] && !(typeof data['firstName'] === 'string' || data['firstName'] instanceof String)) {
            throw new Error("Expected the field `firstName` to be a primitive type in the JSON string but got " + data['firstName']);
        }
        // ensure the json data is a string
        if (data['lastName'] && !(typeof data['lastName'] === 'string' || data['lastName'] instanceof String)) {
            throw new Error("Expected the field `lastName` to be a primitive type in the JSON string but got " + data['lastName']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['department'])) {
            throw new Error("Expected the field `department` to be an array in the JSON data but got " + data['department']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['location'] && !(typeof data['location'] === 'string' || data['location'] instanceof String)) {
            throw new Error("Expected the field `location` to be a primitive type in the JSON string but got " + data['location']);
        }
        // validate the optional field `birthday`
        if (data['birthday']) { // data not null
          ApiDateTime.validateJSON(data['birthday']);
        }
        // validate the optional field `worksfrom`
        if (data['worksfrom']) { // data not null
          ApiDateTime.validateJSON(data['worksfrom']);
        }
        // ensure the json data is a string
        if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
            throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
        }
        if (data['contacts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['contacts'])) {
                throw new Error("Expected the field `contacts` to be an array in the JSON data but got " + data['contacts']);
            }
            // validate the optional field `contacts` (array)
            for (const item of data['contacts']) {
                Contact.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['files'] && !(typeof data['files'] === 'string' || data['files'] instanceof String)) {
            throw new Error("Expected the field `files` to be a primitive type in the JSON string but got " + data['files']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['cultureName'] && !(typeof data['cultureName'] === 'string' || data['cultureName'] instanceof String)) {
            throw new Error("Expected the field `cultureName` to be a primitive type in the JSON string but got " + data['cultureName']);
        }
        // ensure the json data is a string
        if (data['target'] && !(typeof data['target'] === 'string' || data['target'] instanceof String)) {
            throw new Error("Expected the field `target` to be a primitive type in the JSON string but got " + data['target']);
        }

        return true;
    }


}



/**
 * The user password.
 * @member {String} password
 */
MemberRequestDto.prototype['password'] = undefined;

/**
 * The user password hash.
 * @member {String} passwordHash
 */
MemberRequestDto.prototype['passwordHash'] = undefined;

/**
 * The user email address.
 * @member {String} email
 */
MemberRequestDto.prototype['email'] = undefined;

/**
 * @member {module:models/EmployeeType} type
 */
MemberRequestDto.prototype['type'] = undefined;

/**
 * Specifies if this is a guest or a user.
 * @member {Boolean} isUser
 */
MemberRequestDto.prototype['isUser'] = undefined;

/**
 * The user first name.
 * @member {String} firstName
 */
MemberRequestDto.prototype['firstName'] = undefined;

/**
 * The user last name.
 * @member {String} lastName
 */
MemberRequestDto.prototype['lastName'] = undefined;

/**
 * The list of the user departments IDs.
 * @member {Array.<String>} department
 */
MemberRequestDto.prototype['department'] = undefined;

/**
 * The user title.
 * @member {String} title
 */
MemberRequestDto.prototype['title'] = undefined;

/**
 * The user location.
 * @member {String} location
 */
MemberRequestDto.prototype['location'] = undefined;

/**
 * @member {module:models/SexEnum} sex
 */
MemberRequestDto.prototype['sex'] = undefined;

/**
 * @member {module:models/ApiDateTime} birthday
 */
MemberRequestDto.prototype['birthday'] = undefined;

/**
 * @member {module:models/ApiDateTime} worksfrom
 */
MemberRequestDto.prototype['worksfrom'] = undefined;

/**
 * The user comment.
 * @member {String} comment
 */
MemberRequestDto.prototype['comment'] = undefined;

/**
 * The list of the user contacts.
 * @member {Array.<module:models/Contact>} contacts
 */
MemberRequestDto.prototype['contacts'] = undefined;

/**
 * The avatar photo URL.
 * @member {String} files
 */
MemberRequestDto.prototype['files'] = undefined;

/**
 * Specifies if the user is added via the invitation link or not.
 * @member {Boolean} fromInviteLink
 */
MemberRequestDto.prototype['fromInviteLink'] = undefined;

/**
 * The user key.
 * @member {String} key
 */
MemberRequestDto.prototype['key'] = undefined;

/**
 * The user culture code.
 * @member {String} cultureName
 */
MemberRequestDto.prototype['cultureName'] = undefined;

/**
 * The user target ID.
 * @member {String} target
 */
MemberRequestDto.prototype['target'] = undefined;

/**
 * Specifies if tips, updates and offers are allowed to be sent to the user or not.
 * @member {Boolean} spam
 */
MemberRequestDto.prototype['spam'] = undefined;






export default MemberRequestDto;

