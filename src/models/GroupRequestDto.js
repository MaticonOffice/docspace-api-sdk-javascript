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
 * The GroupRequestDto model module.
 * @module models/GroupRequestDto
 * @version 3.2.0
 */
class GroupRequestDto {
    /**
     * Constructs a new <code>GroupRequestDto</code>.
     * The group request parameters.
     * @alias module:models/GroupRequestDto
     * @param groupManager {String} Group manager ID
     */
    constructor(groupManager) { 
        
        GroupRequestDto.initialize(this, groupManager);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, groupManager) { 
        obj['groupManager'] = groupManager;
    }

    /**
     * Constructs a <code>GroupRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/GroupRequestDto} obj Optional instance to populate.
     * @return {module:models/GroupRequestDto} The populated <code>GroupRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupRequestDto();

            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], ['String']);
            }
            if (data.hasOwnProperty('groupManager')) {
                obj['groupManager'] = ApiClient.convertToType(data['groupManager'], 'String');
            }
            if (data.hasOwnProperty('groupName')) {
                obj['groupName'] = ApiClient.convertToType(data['groupName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GroupRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GroupRequestDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GroupRequestDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['members'])) {
            throw new Error("Expected the field `members` to be an array in the JSON data but got " + data['members']);
        }
        // ensure the json data is a string
        if (data['groupManager'] && !(typeof data['groupManager'] === 'string' || data['groupManager'] instanceof String)) {
            throw new Error("Expected the field `groupManager` to be a primitive type in the JSON string but got " + data['groupManager']);
        }
        // ensure the json data is a string
        if (data['groupName'] && !(typeof data['groupName'] === 'string' || data['groupName'] instanceof String)) {
            throw new Error("Expected the field `groupName` to be a primitive type in the JSON string but got " + data['groupName']);
        }

        return true;
    }


}

GroupRequestDto.RequiredProperties = ["groupManager"];

/**
 * The list of group member IDs.
 * @member {Array.<String>} members
 */
GroupRequestDto.prototype['members'] = undefined;

/**
 * Group manager ID
 * @member {String} groupManager
 */
GroupRequestDto.prototype['groupManager'] = undefined;

/**
 * Group name
 * @member {String} groupName
 */
GroupRequestDto.prototype['groupName'] = undefined;






export default GroupRequestDto;

