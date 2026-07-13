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
import EmployeeType from './EmployeeType';

/**
 * The StartUpdateUserTypeDto model module.
 * @module models/StartUpdateUserTypeDto
 * @version 3.2.0
 */
class StartUpdateUserTypeDto {
    /**
     * Constructs a new <code>StartUpdateUserTypeDto</code>.
     * The parameters for updating the type of the user or guest when reassigning rooms and shared files.
     * @alias module:models/StartUpdateUserTypeDto
     */
    constructor() { 
        
        StartUpdateUserTypeDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StartUpdateUserTypeDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/StartUpdateUserTypeDto} obj Optional instance to populate.
     * @return {module:models/StartUpdateUserTypeDto} The populated <code>StartUpdateUserTypeDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StartUpdateUserTypeDto();

            if (data.hasOwnProperty('type')) {
                obj['type'] = EmployeeType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('reassignUserId')) {
                obj['reassignUserId'] = ApiClient.convertToType(data['reassignUserId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StartUpdateUserTypeDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StartUpdateUserTypeDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['userId'] && !(typeof data['userId'] === 'string' || data['userId'] instanceof String)) {
            throw new Error("Expected the field `userId` to be a primitive type in the JSON string but got " + data['userId']);
        }
        // ensure the json data is a string
        if (data['reassignUserId'] && !(typeof data['reassignUserId'] === 'string' || data['reassignUserId'] instanceof String)) {
            throw new Error("Expected the field `reassignUserId` to be a primitive type in the JSON string but got " + data['reassignUserId']);
        }

        return true;
    }


}



/**
 * @member {module:models/EmployeeType} type
 */
StartUpdateUserTypeDto.prototype['type'] = undefined;

/**
 * The user ID.
 * @member {String} userId
 */
StartUpdateUserTypeDto.prototype['userId'] = undefined;

/**
 * The user ID to reassign.
 * @member {String} reassignUserId
 */
StartUpdateUserTypeDto.prototype['reassignUserId'] = undefined;






export default StartUpdateUserTypeDto;

