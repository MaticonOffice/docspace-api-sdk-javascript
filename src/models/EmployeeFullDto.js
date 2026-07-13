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
import DarkThemeSettingsType from './DarkThemeSettingsType';
import EmployeeActivationStatus from './EmployeeActivationStatus';
import EmployeeDto from './EmployeeDto';
import EmployeeStatus from './EmployeeStatus';
import GroupSummaryDto from './GroupSummaryDto';
import MobilePhoneActivationStatus from './MobilePhoneActivationStatus';

/**
 * The EmployeeFullDto model module.
 * @module models/EmployeeFullDto
 * @version 3.2.0
 */
class EmployeeFullDto {
    /**
     * Constructs a new <code>EmployeeFullDto</code>.
     * The full list of user parameters.
     * @alias module:models/EmployeeFullDto
     */
    constructor() { 
        
        EmployeeFullDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmployeeFullDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/EmployeeFullDto} obj Optional instance to populate.
     * @return {module:models/EmployeeFullDto} The populated <code>EmployeeFullDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmployeeFullDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
            }
            if (data.hasOwnProperty('avatarOriginal')) {
                obj['avatarOriginal'] = ApiClient.convertToType(data['avatarOriginal'], 'String');
            }
            if (data.hasOwnProperty('avatarMax')) {
                obj['avatarMax'] = ApiClient.convertToType(data['avatarMax'], 'String');
            }
            if (data.hasOwnProperty('avatarMedium')) {
                obj['avatarMedium'] = ApiClient.convertToType(data['avatarMedium'], 'String');
            }
            if (data.hasOwnProperty('avatarSmall')) {
                obj['avatarSmall'] = ApiClient.convertToType(data['avatarSmall'], 'String');
            }
            if (data.hasOwnProperty('profileUrl')) {
                obj['profileUrl'] = ApiClient.convertToType(data['profileUrl'], 'String');
            }
            if (data.hasOwnProperty('hasAvatar')) {
                obj['hasAvatar'] = ApiClient.convertToType(data['hasAvatar'], 'Boolean');
            }
            if (data.hasOwnProperty('isAnonim')) {
                obj['isAnonim'] = ApiClient.convertToType(data['isAnonim'], 'Boolean');
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
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('contacts')) {
                obj['contacts'] = ApiClient.convertToType(data['contacts'], [Contact]);
            }
            if (data.hasOwnProperty('birthday')) {
                obj['birthday'] = ApiDateTime.constructFromObject(data['birthday']);
            }
            if (data.hasOwnProperty('sex')) {
                obj['sex'] = ApiClient.convertToType(data['sex'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = EmployeeStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('activationStatus')) {
                obj['activationStatus'] = EmployeeActivationStatus.constructFromObject(data['activationStatus']);
            }
            if (data.hasOwnProperty('terminated')) {
                obj['terminated'] = ApiDateTime.constructFromObject(data['terminated']);
            }
            if (data.hasOwnProperty('department')) {
                obj['department'] = ApiClient.convertToType(data['department'], 'String');
            }
            if (data.hasOwnProperty('workFrom')) {
                obj['workFrom'] = ApiDateTime.constructFromObject(data['workFrom']);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], [GroupSummaryDto]);
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('isAdmin')) {
                obj['isAdmin'] = ApiClient.convertToType(data['isAdmin'], 'Boolean');
            }
            if (data.hasOwnProperty('isRoomAdmin')) {
                obj['isRoomAdmin'] = ApiClient.convertToType(data['isRoomAdmin'], 'Boolean');
            }
            if (data.hasOwnProperty('isLDAP')) {
                obj['isLDAP'] = ApiClient.convertToType(data['isLDAP'], 'Boolean');
            }
            if (data.hasOwnProperty('listAdminModules')) {
                obj['listAdminModules'] = ApiClient.convertToType(data['listAdminModules'], ['String']);
            }
            if (data.hasOwnProperty('isOwner')) {
                obj['isOwner'] = ApiClient.convertToType(data['isOwner'], 'Boolean');
            }
            if (data.hasOwnProperty('isVisitor')) {
                obj['isVisitor'] = ApiClient.convertToType(data['isVisitor'], 'Boolean');
            }
            if (data.hasOwnProperty('isCollaborator')) {
                obj['isCollaborator'] = ApiClient.convertToType(data['isCollaborator'], 'Boolean');
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
            if (data.hasOwnProperty('isSSO')) {
                obj['isSSO'] = ApiClient.convertToType(data['isSSO'], 'Boolean');
            }
            if (data.hasOwnProperty('theme')) {
                obj['theme'] = DarkThemeSettingsType.constructFromObject(data['theme']);
            }
            if (data.hasOwnProperty('quotaLimit')) {
                obj['quotaLimit'] = ApiClient.convertToType(data['quotaLimit'], 'Number');
            }
            if (data.hasOwnProperty('usedSpace')) {
                obj['usedSpace'] = ApiClient.convertToType(data['usedSpace'], 'Number');
            }
            if (data.hasOwnProperty('shared')) {
                obj['shared'] = ApiClient.convertToType(data['shared'], 'Boolean');
            }
            if (data.hasOwnProperty('isCustomQuota')) {
                obj['isCustomQuota'] = ApiClient.convertToType(data['isCustomQuota'], 'Boolean');
            }
            if (data.hasOwnProperty('loginEventId')) {
                obj['loginEventId'] = ApiClient.convertToType(data['loginEventId'], 'Number');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = EmployeeDto.constructFromObject(data['createdBy']);
            }
            if (data.hasOwnProperty('registrationDate')) {
                obj['registrationDate'] = ApiDateTime.constructFromObject(data['registrationDate']);
            }
            if (data.hasOwnProperty('hasPersonalFolder')) {
                obj['hasPersonalFolder'] = ApiClient.convertToType(data['hasPersonalFolder'], 'Boolean');
            }
            if (data.hasOwnProperty('tfaAppEnabled')) {
                obj['tfaAppEnabled'] = ApiClient.convertToType(data['tfaAppEnabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmployeeFullDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmployeeFullDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['displayName'] && !(typeof data['displayName'] === 'string' || data['displayName'] instanceof String)) {
            throw new Error("Expected the field `displayName` to be a primitive type in the JSON string but got " + data['displayName']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['avatar'] && !(typeof data['avatar'] === 'string' || data['avatar'] instanceof String)) {
            throw new Error("Expected the field `avatar` to be a primitive type in the JSON string but got " + data['avatar']);
        }
        // ensure the json data is a string
        if (data['avatarOriginal'] && !(typeof data['avatarOriginal'] === 'string' || data['avatarOriginal'] instanceof String)) {
            throw new Error("Expected the field `avatarOriginal` to be a primitive type in the JSON string but got " + data['avatarOriginal']);
        }
        // ensure the json data is a string
        if (data['avatarMax'] && !(typeof data['avatarMax'] === 'string' || data['avatarMax'] instanceof String)) {
            throw new Error("Expected the field `avatarMax` to be a primitive type in the JSON string but got " + data['avatarMax']);
        }
        // ensure the json data is a string
        if (data['avatarMedium'] && !(typeof data['avatarMedium'] === 'string' || data['avatarMedium'] instanceof String)) {
            throw new Error("Expected the field `avatarMedium` to be a primitive type in the JSON string but got " + data['avatarMedium']);
        }
        // ensure the json data is a string
        if (data['avatarSmall'] && !(typeof data['avatarSmall'] === 'string' || data['avatarSmall'] instanceof String)) {
            throw new Error("Expected the field `avatarSmall` to be a primitive type in the JSON string but got " + data['avatarSmall']);
        }
        // ensure the json data is a string
        if (data['profileUrl'] && !(typeof data['profileUrl'] === 'string' || data['profileUrl'] instanceof String)) {
            throw new Error("Expected the field `profileUrl` to be a primitive type in the JSON string but got " + data['profileUrl']);
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
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
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
        // validate the optional field `birthday`
        if (data['birthday']) { // data not null
          ApiDateTime.validateJSON(data['birthday']);
        }
        // ensure the json data is a string
        if (data['sex'] && !(typeof data['sex'] === 'string' || data['sex'] instanceof String)) {
            throw new Error("Expected the field `sex` to be a primitive type in the JSON string but got " + data['sex']);
        }
        // validate the optional field `terminated`
        if (data['terminated']) { // data not null
          ApiDateTime.validateJSON(data['terminated']);
        }
        // ensure the json data is a string
        if (data['department'] && !(typeof data['department'] === 'string' || data['department'] instanceof String)) {
            throw new Error("Expected the field `department` to be a primitive type in the JSON string but got " + data['department']);
        }
        // validate the optional field `workFrom`
        if (data['workFrom']) { // data not null
          ApiDateTime.validateJSON(data['workFrom']);
        }
        if (data['groups']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['groups'])) {
                throw new Error("Expected the field `groups` to be an array in the JSON data but got " + data['groups']);
            }
            // validate the optional field `groups` (array)
            for (const item of data['groups']) {
                GroupSummaryDto.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['location'] && !(typeof data['location'] === 'string' || data['location'] instanceof String)) {
            throw new Error("Expected the field `location` to be a primitive type in the JSON string but got " + data['location']);
        }
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['listAdminModules'])) {
            throw new Error("Expected the field `listAdminModules` to be an array in the JSON data but got " + data['listAdminModules']);
        }
        // ensure the json data is a string
        if (data['cultureName'] && !(typeof data['cultureName'] === 'string' || data['cultureName'] instanceof String)) {
            throw new Error("Expected the field `cultureName` to be a primitive type in the JSON string but got " + data['cultureName']);
        }
        // ensure the json data is a string
        if (data['mobilePhone'] && !(typeof data['mobilePhone'] === 'string' || data['mobilePhone'] instanceof String)) {
            throw new Error("Expected the field `mobilePhone` to be a primitive type in the JSON string but got " + data['mobilePhone']);
        }
        // validate the optional field `createdBy`
        if (data['createdBy']) { // data not null
          EmployeeDto.validateJSON(data['createdBy']);
        }
        // validate the optional field `registrationDate`
        if (data['registrationDate']) { // data not null
          ApiDateTime.validateJSON(data['registrationDate']);
        }

        return true;
    }


}



/**
 * The user ID.
 * @member {String} id
 */
EmployeeFullDto.prototype['id'] = undefined;

/**
 * The user display name.
 * @member {String} displayName
 */
EmployeeFullDto.prototype['displayName'] = undefined;

/**
 * The user title.
 * @member {String} title
 */
EmployeeFullDto.prototype['title'] = undefined;

/**
 * The user avatar.
 * @member {String} avatar
 */
EmployeeFullDto.prototype['avatar'] = undefined;

/**
 * The user original size avatar.
 * @member {String} avatarOriginal
 */
EmployeeFullDto.prototype['avatarOriginal'] = undefined;

/**
 * The user maximum size avatar.
 * @member {String} avatarMax
 */
EmployeeFullDto.prototype['avatarMax'] = undefined;

/**
 * The user medium size avatar.
 * @member {String} avatarMedium
 */
EmployeeFullDto.prototype['avatarMedium'] = undefined;

/**
 * The user small size avatar.
 * @member {String} avatarSmall
 */
EmployeeFullDto.prototype['avatarSmall'] = undefined;

/**
 * The user profile URL.
 * @member {String} profileUrl
 */
EmployeeFullDto.prototype['profileUrl'] = undefined;

/**
 * Specifies if the user has an avatar or not.
 * @member {Boolean} hasAvatar
 */
EmployeeFullDto.prototype['hasAvatar'] = undefined;

/**
 * Specifies if the user is anonymous or not.
 * @member {Boolean} isAnonim
 */
EmployeeFullDto.prototype['isAnonim'] = undefined;

/**
 * The user first name.
 * @member {String} firstName
 */
EmployeeFullDto.prototype['firstName'] = undefined;

/**
 * The user last name.
 * @member {String} lastName
 */
EmployeeFullDto.prototype['lastName'] = undefined;

/**
 * The user username.
 * @member {String} userName
 */
EmployeeFullDto.prototype['userName'] = undefined;

/**
 * The user email.
 * @member {String} email
 */
EmployeeFullDto.prototype['email'] = undefined;

/**
 * The list of user contacts.
 * @member {Array.<module:models/Contact>} contacts
 */
EmployeeFullDto.prototype['contacts'] = undefined;

/**
 * @member {module:models/ApiDateTime} birthday
 */
EmployeeFullDto.prototype['birthday'] = undefined;

/**
 * The user sex.
 * @member {String} sex
 */
EmployeeFullDto.prototype['sex'] = undefined;

/**
 * @member {module:models/EmployeeStatus} status
 */
EmployeeFullDto.prototype['status'] = undefined;

/**
 * @member {module:models/EmployeeActivationStatus} activationStatus
 */
EmployeeFullDto.prototype['activationStatus'] = undefined;

/**
 * @member {module:models/ApiDateTime} terminated
 */
EmployeeFullDto.prototype['terminated'] = undefined;

/**
 * The user department.
 * @member {String} department
 */
EmployeeFullDto.prototype['department'] = undefined;

/**
 * @member {module:models/ApiDateTime} workFrom
 */
EmployeeFullDto.prototype['workFrom'] = undefined;

/**
 * The list of user groups.
 * @member {Array.<module:models/GroupSummaryDto>} groups
 */
EmployeeFullDto.prototype['groups'] = undefined;

/**
 * The user location.
 * @member {String} location
 */
EmployeeFullDto.prototype['location'] = undefined;

/**
 * The user notes.
 * @member {String} notes
 */
EmployeeFullDto.prototype['notes'] = undefined;

/**
 * Specifies if the user is an administrator or not.
 * @member {Boolean} isAdmin
 */
EmployeeFullDto.prototype['isAdmin'] = undefined;

/**
 * Specifies if the user is a room administrator or not.
 * @member {Boolean} isRoomAdmin
 */
EmployeeFullDto.prototype['isRoomAdmin'] = undefined;

/**
 * Specifies if the LDAP settings are enabled for the user or not.
 * @member {Boolean} isLDAP
 */
EmployeeFullDto.prototype['isLDAP'] = undefined;

/**
 * The list of the administrator modules.
 * @member {Array.<String>} listAdminModules
 */
EmployeeFullDto.prototype['listAdminModules'] = undefined;

/**
 * Specifies if the user is a portal owner or not.
 * @member {Boolean} isOwner
 */
EmployeeFullDto.prototype['isOwner'] = undefined;

/**
 * Specifies if the user is a portal visitor or not.
 * @member {Boolean} isVisitor
 */
EmployeeFullDto.prototype['isVisitor'] = undefined;

/**
 * Specifies if the user is a portal collaborator or not.
 * @member {Boolean} isCollaborator
 */
EmployeeFullDto.prototype['isCollaborator'] = undefined;

/**
 * The user culture code.
 * @member {String} cultureName
 */
EmployeeFullDto.prototype['cultureName'] = undefined;

/**
 * The user mobile phone number.
 * @member {String} mobilePhone
 */
EmployeeFullDto.prototype['mobilePhone'] = undefined;

/**
 * @member {module:models/MobilePhoneActivationStatus} mobilePhoneActivationStatus
 */
EmployeeFullDto.prototype['mobilePhoneActivationStatus'] = undefined;

/**
 * Specifies if the SSO settings are enabled for the user or not.
 * @member {Boolean} isSSO
 */
EmployeeFullDto.prototype['isSSO'] = undefined;

/**
 * @member {module:models/DarkThemeSettingsType} theme
 */
EmployeeFullDto.prototype['theme'] = undefined;

/**
 * The user quota limit.
 * @member {Number} quotaLimit
 */
EmployeeFullDto.prototype['quotaLimit'] = undefined;

/**
 * The portal used space of the user.
 * @member {Number} usedSpace
 */
EmployeeFullDto.prototype['usedSpace'] = undefined;

/**
 * Specifies if the user has access rights.
 * @member {Boolean} shared
 */
EmployeeFullDto.prototype['shared'] = undefined;

/**
 * Specifies if the user has a custom quota or not.
 * @member {Boolean} isCustomQuota
 */
EmployeeFullDto.prototype['isCustomQuota'] = undefined;

/**
 * The current login event ID.
 * @member {Number} loginEventId
 */
EmployeeFullDto.prototype['loginEventId'] = undefined;

/**
 * @member {module:models/EmployeeDto} createdBy
 */
EmployeeFullDto.prototype['createdBy'] = undefined;

/**
 * @member {module:models/ApiDateTime} registrationDate
 */
EmployeeFullDto.prototype['registrationDate'] = undefined;

/**
 * Specifies if the user has a personal folder or not.
 * @member {Boolean} hasPersonalFolder
 */
EmployeeFullDto.prototype['hasPersonalFolder'] = undefined;

/**
 * Indicates whether the user has enabled two-factor authentication (TFA) using an authentication app.
 * @member {Boolean} tfaAppEnabled
 */
EmployeeFullDto.prototype['tfaAppEnabled'] = undefined;






export default EmployeeFullDto;

