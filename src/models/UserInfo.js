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
import EmployeeActivationStatus from './EmployeeActivationStatus';
import EmployeeStatus from './EmployeeStatus';
import MobilePhoneActivationStatus from './MobilePhoneActivationStatus';

/**
 * The UserInfo model module.
 * @module models/UserInfo
 * @version 3.2.0
 */
class UserInfo {
    /**
     * Constructs a new <code>UserInfo</code>.
     * The user information.
     * @alias module:models/UserInfo
     */
    constructor() { 
        
        UserInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UserInfo} obj Optional instance to populate.
     * @return {module:models/UserInfo} The populated <code>UserInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserInfo();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('userName')) {
                obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
            }
            if (data.hasOwnProperty('birthDate')) {
                obj['birthDate'] = ApiClient.convertToType(data['birthDate'], 'Date');
            }
            if (data.hasOwnProperty('sex')) {
                obj['sex'] = ApiClient.convertToType(data['sex'], 'Boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = EmployeeStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('activationStatus')) {
                obj['activationStatus'] = EmployeeActivationStatus.constructFromObject(data['activationStatus']);
            }
            if (data.hasOwnProperty('terminatedDate')) {
                obj['terminatedDate'] = ApiClient.convertToType(data['terminatedDate'], 'Date');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('workFromDate')) {
                obj['workFromDate'] = ApiClient.convertToType(data['workFromDate'], 'Date');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('contacts')) {
                obj['contacts'] = ApiClient.convertToType(data['contacts'], 'String');
            }
            if (data.hasOwnProperty('contactsList')) {
                obj['contactsList'] = ApiClient.convertToType(data['contactsList'], ['String']);
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('removed')) {
                obj['removed'] = ApiClient.convertToType(data['removed'], 'Boolean');
            }
            if (data.hasOwnProperty('lastModified')) {
                obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Date');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'Number');
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
            if (data.hasOwnProperty('cultureName')) {
                obj['cultureName'] = ApiClient.convertToType(data['cultureName'], 'String');
            }
            if (data.hasOwnProperty('mobilePhone')) {
                obj['mobilePhone'] = ApiClient.convertToType(data['mobilePhone'], 'String');
            }
            if (data.hasOwnProperty('mobilePhoneActivationStatus')) {
                obj['mobilePhoneActivationStatus'] = MobilePhoneActivationStatus.constructFromObject(data['mobilePhoneActivationStatus']);
            }
            if (data.hasOwnProperty('sid')) {
                obj['sid'] = ApiClient.convertToType(data['sid'], 'String');
            }
            if (data.hasOwnProperty('ldapQouta')) {
                obj['ldapQouta'] = ApiClient.convertToType(data['ldapQouta'], 'Number');
            }
            if (data.hasOwnProperty('ssoNameId')) {
                obj['ssoNameId'] = ApiClient.convertToType(data['ssoNameId'], 'String');
            }
            if (data.hasOwnProperty('ssoSessionId')) {
                obj['ssoSessionId'] = ApiClient.convertToType(data['ssoSessionId'], 'String');
            }
            if (data.hasOwnProperty('createDate')) {
                obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
            }
            if (data.hasOwnProperty('spam')) {
                obj['spam'] = ApiClient.convertToType(data['spam'], 'Boolean');
            }
            if (data.hasOwnProperty('checkActivation')) {
                obj['checkActivation'] = ApiClient.convertToType(data['checkActivation'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['firstName'] && !(typeof data['firstName'] === 'string' || data['firstName'] instanceof String)) {
            throw new Error("Expected the field `firstName` to be a primitive type in the JSON string but got " + data['firstName']);
        }
        // ensure the json data is a string
        if (data['lastName'] && !(typeof data['lastName'] === 'string' || data['lastName'] instanceof String)) {
            throw new Error("Expected the field `lastName` to be a primitive type in the JSON string but got " + data['lastName']);
        }
        // ensure the json data is a string
        if (data['userName'] && !(typeof data['userName'] === 'string' || data['userName'] instanceof String)) {
            throw new Error("Expected the field `userName` to be a primitive type in the JSON string but got " + data['userName']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['contacts'] && !(typeof data['contacts'] === 'string' || data['contacts'] instanceof String)) {
            throw new Error("Expected the field `contacts` to be a primitive type in the JSON string but got " + data['contacts']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['contactsList'])) {
            throw new Error("Expected the field `contactsList` to be an array in the JSON data but got " + data['contactsList']);
        }
        // ensure the json data is a string
        if (data['location'] && !(typeof data['location'] === 'string' || data['location'] instanceof String)) {
            throw new Error("Expected the field `location` to be a primitive type in the JSON string but got " + data['location']);
        }
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }
        // ensure the json data is a string
        if (data['cultureName'] && !(typeof data['cultureName'] === 'string' || data['cultureName'] instanceof String)) {
            throw new Error("Expected the field `cultureName` to be a primitive type in the JSON string but got " + data['cultureName']);
        }
        // ensure the json data is a string
        if (data['mobilePhone'] && !(typeof data['mobilePhone'] === 'string' || data['mobilePhone'] instanceof String)) {
            throw new Error("Expected the field `mobilePhone` to be a primitive type in the JSON string but got " + data['mobilePhone']);
        }
        // ensure the json data is a string
        if (data['sid'] && !(typeof data['sid'] === 'string' || data['sid'] instanceof String)) {
            throw new Error("Expected the field `sid` to be a primitive type in the JSON string but got " + data['sid']);
        }
        // ensure the json data is a string
        if (data['ssoNameId'] && !(typeof data['ssoNameId'] === 'string' || data['ssoNameId'] instanceof String)) {
            throw new Error("Expected the field `ssoNameId` to be a primitive type in the JSON string but got " + data['ssoNameId']);
        }
        // ensure the json data is a string
        if (data['ssoSessionId'] && !(typeof data['ssoSessionId'] === 'string' || data['ssoSessionId'] instanceof String)) {
            throw new Error("Expected the field `ssoSessionId` to be a primitive type in the JSON string but got " + data['ssoSessionId']);
        }
        // ensure the json data is a string
        if (data['createdBy'] && !(typeof data['createdBy'] === 'string' || data['createdBy'] instanceof String)) {
            throw new Error("Expected the field `createdBy` to be a primitive type in the JSON string but got " + data['createdBy']);
        }

        return true;
    }


}



/**
 * The user ID.
 * @member {String} id
 */
UserInfo.prototype['id'] = undefined;

/**
 * The user first name.
 * @member {String} firstName
 */
UserInfo.prototype['firstName'] = undefined;

/**
 * The user last name.
 * @member {String} lastName
 */
UserInfo.prototype['lastName'] = undefined;

/**
 * The user username.
 * @member {String} userName
 */
UserInfo.prototype['userName'] = undefined;

/**
 * The user birthday.
 * @member {Date} birthDate
 */
UserInfo.prototype['birthDate'] = undefined;

/**
 * The user sex (male or female).
 * @member {Boolean} sex
 */
UserInfo.prototype['sex'] = undefined;

/**
 * @member {module:models/EmployeeStatus} status
 */
UserInfo.prototype['status'] = undefined;

/**
 * @member {module:models/EmployeeActivationStatus} activationStatus
 */
UserInfo.prototype['activationStatus'] = undefined;

/**
 * The date and time when the user account was terminated.
 * @member {Date} terminatedDate
 */
UserInfo.prototype['terminatedDate'] = undefined;

/**
 * The user title.
 * @member {String} title
 */
UserInfo.prototype['title'] = undefined;

/**
 * The user registration date.
 * @member {Date} workFromDate
 */
UserInfo.prototype['workFromDate'] = undefined;

/**
 * The user email address.
 * @member {String} email
 */
UserInfo.prototype['email'] = undefined;

/**
 * The list of user contacts in the string format.
 * @member {String} contacts
 */
UserInfo.prototype['contacts'] = undefined;

/**
 * The list of user contacts.
 * @member {Array.<String>} contactsList
 */
UserInfo.prototype['contactsList'] = undefined;

/**
 * The user location.
 * @member {String} location
 */
UserInfo.prototype['location'] = undefined;

/**
 * The user notes.
 * @member {String} notes
 */
UserInfo.prototype['notes'] = undefined;

/**
 * Specifies if the user account was removed or not.
 * @member {Boolean} removed
 */
UserInfo.prototype['removed'] = undefined;

/**
 * The date and time when the user account was last modified.
 * @member {Date} lastModified
 */
UserInfo.prototype['lastModified'] = undefined;

/**
 * The tenant ID.
 * @member {Number} tenantId
 */
UserInfo.prototype['tenantId'] = undefined;

/**
 * Specifies if the user is active or not.
 * @member {Boolean} isActive
 */
UserInfo.prototype['isActive'] = undefined;

/**
 * The user culture code.
 * @member {String} cultureName
 */
UserInfo.prototype['cultureName'] = undefined;

/**
 * The user mobile phone.
 * @member {String} mobilePhone
 */
UserInfo.prototype['mobilePhone'] = undefined;

/**
 * @member {module:models/MobilePhoneActivationStatus} mobilePhoneActivationStatus
 */
UserInfo.prototype['mobilePhoneActivationStatus'] = undefined;

/**
 * The LDAP user identificator.
 * @member {String} sid
 */
UserInfo.prototype['sid'] = undefined;

/**
 * The LDAP user quota attribute.
 * @member {Number} ldapQouta
 */
UserInfo.prototype['ldapQouta'] = undefined;

/**
 * The SSO SAML user identificator.
 * @member {String} ssoNameId
 */
UserInfo.prototype['ssoNameId'] = undefined;

/**
 * The SSO SAML user session identificator.
 * @member {String} ssoSessionId
 */
UserInfo.prototype['ssoSessionId'] = undefined;

/**
 * The date and time when the user account was created.
 * @member {Date} createDate
 */
UserInfo.prototype['createDate'] = undefined;

/**
 * The ID of the user who created the current user account.
 * @member {String} createdBy
 */
UserInfo.prototype['createdBy'] = undefined;

/**
 * Specifies if tips, updates and offers are allowed to be sent to the user or not.
 * @member {Boolean} spam
 */
UserInfo.prototype['spam'] = undefined;

/**
 * @member {Boolean} checkActivation
 */
UserInfo.prototype['checkActivation'] = undefined;






export default UserInfo;

