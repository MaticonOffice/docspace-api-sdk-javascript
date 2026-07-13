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
 * The UpdateGroupRequest model module.
 * @module models/UpdateGroupRequest
 * @version 3.2.0
 */
class UpdateGroupRequest {
    /**
     * Constructs a new <code>UpdateGroupRequest</code>.
     * The request for updating a group.
     * @alias module:models/UpdateGroupRequest
     */
    constructor() { 
        
        UpdateGroupRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateGroupRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UpdateGroupRequest} obj Optional instance to populate.
     * @return {module:models/UpdateGroupRequest} The populated <code>UpdateGroupRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateGroupRequest();

            if (data.hasOwnProperty('membersToAdd')) {
                obj['membersToAdd'] = ApiClient.convertToType(data['membersToAdd'], ['String']);
            }
            if (data.hasOwnProperty('membersToRemove')) {
                obj['membersToRemove'] = ApiClient.convertToType(data['membersToRemove'], ['String']);
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
     * Validates the JSON data with respect to <code>UpdateGroupRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateGroupRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['membersToAdd'])) {
            throw new Error("Expected the field `membersToAdd` to be an array in the JSON data but got " + data['membersToAdd']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['membersToRemove'])) {
            throw new Error("Expected the field `membersToRemove` to be an array in the JSON data but got " + data['membersToRemove']);
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



/**
 * The list of user IDs to add to the group.
 * @member {Array.<String>} membersToAdd
 */
UpdateGroupRequest.prototype['membersToAdd'] = undefined;

/**
 * The list of user IDs to remove from the group.
 * @member {Array.<String>} membersToRemove
 */
UpdateGroupRequest.prototype['membersToRemove'] = undefined;

/**
 * The group manager ID.
 * @member {String} groupManager
 */
UpdateGroupRequest.prototype['groupManager'] = undefined;

/**
 * The group name.
 * @member {String} groupName
 */
UpdateGroupRequest.prototype['groupName'] = undefined;






export default UpdateGroupRequest;

