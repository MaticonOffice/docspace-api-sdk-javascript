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
 * The StartReassignRequestDto model module.
 * @module models/StartReassignRequestDto
 * @version 3.2.0
 */
class StartReassignRequestDto {
    /**
     * Constructs a new <code>StartReassignRequestDto</code>.
     * The request parameters for starting the reassignment process.
     * @alias module:models/StartReassignRequestDto
     * @param fromUserId {String} The user ID whose data will be reassigned to another user.
     * @param toUserId {String} The user ID to whom all the data will be reassigned.
     */
    constructor(fromUserId, toUserId) { 
        
        StartReassignRequestDto.initialize(this, fromUserId, toUserId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fromUserId, toUserId) { 
        obj['fromUserId'] = fromUserId;
        obj['toUserId'] = toUserId;
    }

    /**
     * Constructs a <code>StartReassignRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/StartReassignRequestDto} obj Optional instance to populate.
     * @return {module:models/StartReassignRequestDto} The populated <code>StartReassignRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StartReassignRequestDto();

            if (data.hasOwnProperty('fromUserId')) {
                obj['fromUserId'] = ApiClient.convertToType(data['fromUserId'], 'String');
            }
            if (data.hasOwnProperty('toUserId')) {
                obj['toUserId'] = ApiClient.convertToType(data['toUserId'], 'String');
            }
            if (data.hasOwnProperty('deleteProfile')) {
                obj['deleteProfile'] = ApiClient.convertToType(data['deleteProfile'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StartReassignRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StartReassignRequestDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of StartReassignRequestDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fromUserId'] && !(typeof data['fromUserId'] === 'string' || data['fromUserId'] instanceof String)) {
            throw new Error("Expected the field `fromUserId` to be a primitive type in the JSON string but got " + data['fromUserId']);
        }
        // ensure the json data is a string
        if (data['toUserId'] && !(typeof data['toUserId'] === 'string' || data['toUserId'] instanceof String)) {
            throw new Error("Expected the field `toUserId` to be a primitive type in the JSON string but got " + data['toUserId']);
        }

        return true;
    }


}

StartReassignRequestDto.RequiredProperties = ["fromUserId", "toUserId"];

/**
 * The user ID whose data will be reassigned to another user.
 * @member {String} fromUserId
 */
StartReassignRequestDto.prototype['fromUserId'] = undefined;

/**
 * The user ID to whom all the data will be reassigned.
 * @member {String} toUserId
 */
StartReassignRequestDto.prototype['toUserId'] = undefined;

/**
 * Specifies whether to delete a profile when the data reassignment will be finished or not.
 * @member {Boolean} deleteProfile
 */
StartReassignRequestDto.prototype['deleteProfile'] = undefined;






export default StartReassignRequestDto;

