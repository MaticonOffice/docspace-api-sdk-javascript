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
 * The EmployeeDto model module.
 * @module models/EmployeeDto
 * @version 3.2.0
 */
class EmployeeDto {
    /**
     * Constructs a new <code>EmployeeDto</code>.
     * The user parameters.
     * @alias module:models/EmployeeDto
     */
    constructor() { 
        
        EmployeeDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmployeeDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/EmployeeDto} obj Optional instance to populate.
     * @return {module:models/EmployeeDto} The populated <code>EmployeeDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmployeeDto();

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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmployeeDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmployeeDto</code>.
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

        return true;
    }


}



/**
 * The user ID.
 * @member {String} id
 */
EmployeeDto.prototype['id'] = undefined;

/**
 * The user display name.
 * @member {String} displayName
 */
EmployeeDto.prototype['displayName'] = undefined;

/**
 * The user title.
 * @member {String} title
 */
EmployeeDto.prototype['title'] = undefined;

/**
 * The user avatar.
 * @member {String} avatar
 */
EmployeeDto.prototype['avatar'] = undefined;

/**
 * The user original size avatar.
 * @member {String} avatarOriginal
 */
EmployeeDto.prototype['avatarOriginal'] = undefined;

/**
 * The user maximum size avatar.
 * @member {String} avatarMax
 */
EmployeeDto.prototype['avatarMax'] = undefined;

/**
 * The user medium size avatar.
 * @member {String} avatarMedium
 */
EmployeeDto.prototype['avatarMedium'] = undefined;

/**
 * The user small size avatar.
 * @member {String} avatarSmall
 */
EmployeeDto.prototype['avatarSmall'] = undefined;

/**
 * The user profile URL.
 * @member {String} profileUrl
 */
EmployeeDto.prototype['profileUrl'] = undefined;

/**
 * Specifies if the user has an avatar or not.
 * @member {Boolean} hasAvatar
 */
EmployeeDto.prototype['hasAvatar'] = undefined;

/**
 * Specifies if the user is anonymous or not.
 * @member {Boolean} isAnonim
 */
EmployeeDto.prototype['isAnonim'] = undefined;






export default EmployeeDto;

