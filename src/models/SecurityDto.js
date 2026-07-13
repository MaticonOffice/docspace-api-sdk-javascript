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
import EmployeeDto from './EmployeeDto';
import GroupSummaryDto from './GroupSummaryDto';

/**
 * The SecurityDto model module.
 * @module models/SecurityDto
 * @version 3.2.0
 */
class SecurityDto {
    /**
     * Constructs a new <code>SecurityDto</code>.
     * The security information.
     * @alias module:models/SecurityDto
     */
    constructor() { 
        
        SecurityDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SecurityDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SecurityDto} obj Optional instance to populate.
     * @return {module:models/SecurityDto} The populated <code>SecurityDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecurityDto();

            if (data.hasOwnProperty('webItemId')) {
                obj['webItemId'] = ApiClient.convertToType(data['webItemId'], 'String');
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [EmployeeDto]);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], [GroupSummaryDto]);
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('isSubItem')) {
                obj['isSubItem'] = ApiClient.convertToType(data['isSubItem'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SecurityDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SecurityDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['webItemId'] && !(typeof data['webItemId'] === 'string' || data['webItemId'] instanceof String)) {
            throw new Error("Expected the field `webItemId` to be a primitive type in the JSON string but got " + data['webItemId']);
        }
        if (data['users']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['users'])) {
                throw new Error("Expected the field `users` to be an array in the JSON data but got " + data['users']);
            }
            // validate the optional field `users` (array)
            for (const item of data['users']) {
                EmployeeDto.validateJSON(item);
            };
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

        return true;
    }


}



/**
 * The module ID.
 * @member {String} webItemId
 */
SecurityDto.prototype['webItemId'] = undefined;

/**
 * The list of users with the access to the module.
 * @member {Array.<module:models/EmployeeDto>} users
 */
SecurityDto.prototype['users'] = undefined;

/**
 * The list of groups with the access to the module.
 * @member {Array.<module:models/GroupSummaryDto>} groups
 */
SecurityDto.prototype['groups'] = undefined;

/**
 * Specifies if the security settings are enabled or not.
 * @member {Boolean} enabled
 */
SecurityDto.prototype['enabled'] = undefined;

/**
 * Specifies if the module is a subitem or not.
 * @member {Boolean} isSubItem
 */
SecurityDto.prototype['isSubItem'] = undefined;






export default SecurityDto;

