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
import EmployeeFullDto from './EmployeeFullDto';

/**
 * The GroupDto model module.
 * @module models/GroupDto
 * @version 3.2.0
 */
class GroupDto {
    /**
     * Constructs a new <code>GroupDto</code>.
     * The group parameters.
     * @alias module:models/GroupDto
     */
    constructor() { 
        
        GroupDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GroupDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/GroupDto} obj Optional instance to populate.
     * @return {module:models/GroupDto} The populated <code>GroupDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupDto();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('isLDAP')) {
                obj['isLDAP'] = ApiClient.convertToType(data['isLDAP'], 'Boolean');
            }
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = EmployeeFullDto.constructFromObject(data['manager']);
            }
            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], [EmployeeFullDto]);
            }
            if (data.hasOwnProperty('shared')) {
                obj['shared'] = ApiClient.convertToType(data['shared'], 'Boolean');
            }
            if (data.hasOwnProperty('membersCount')) {
                obj['membersCount'] = ApiClient.convertToType(data['membersCount'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GroupDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GroupDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['parent'] && !(typeof data['parent'] === 'string' || data['parent'] instanceof String)) {
            throw new Error("Expected the field `parent` to be a primitive type in the JSON string but got " + data['parent']);
        }
        // ensure the json data is a string
        if (data['category'] && !(typeof data['category'] === 'string' || data['category'] instanceof String)) {
            throw new Error("Expected the field `category` to be a primitive type in the JSON string but got " + data['category']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `manager`
        if (data['manager']) { // data not null
          EmployeeFullDto.validateJSON(data['manager']);
        }
        if (data['members']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['members'])) {
                throw new Error("Expected the field `members` to be an array in the JSON data but got " + data['members']);
            }
            // validate the optional field `members` (array)
            for (const item of data['members']) {
                EmployeeFullDto.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The group name.
 * @member {String} name
 */
GroupDto.prototype['name'] = undefined;

/**
 * The parent group ID.
 * @member {String} parent
 */
GroupDto.prototype['parent'] = undefined;

/**
 * The group category ID.
 * @member {String} category
 */
GroupDto.prototype['category'] = undefined;

/**
 * The group ID.
 * @member {String} id
 */
GroupDto.prototype['id'] = undefined;

/**
 * Specifies if the LDAP settings are enabled for the group or not.
 * @member {Boolean} isLDAP
 */
GroupDto.prototype['isLDAP'] = undefined;

/**
 * @member {module:models/EmployeeFullDto} manager
 */
GroupDto.prototype['manager'] = undefined;

/**
 * The list of group members.
 * @member {Array.<module:models/EmployeeFullDto>} members
 */
GroupDto.prototype['members'] = undefined;

/**
 * Specifies whether the group can be shared or not.
 * @member {Boolean} shared
 */
GroupDto.prototype['shared'] = undefined;

/**
 * The number of group members.
 * @member {Number} membersCount
 */
GroupDto.prototype['membersCount'] = undefined;






export default GroupDto;

