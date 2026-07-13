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
import FileShareDto from './FileShareDto';
import RoomSecurityError from './RoomSecurityError';

/**
 * The RoomSecurityDto model module.
 * @module models/RoomSecurityDto
 * @version 3.2.0
 */
class RoomSecurityDto {
    /**
     * Constructs a new <code>RoomSecurityDto</code>.
     * The room security parameters.
     * @alias module:models/RoomSecurityDto
     */
    constructor() { 
        
        RoomSecurityDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RoomSecurityDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/RoomSecurityDto} obj Optional instance to populate.
     * @return {module:models/RoomSecurityDto} The populated <code>RoomSecurityDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoomSecurityDto();

            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], [FileShareDto]);
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = ApiClient.convertToType(data['warning'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = RoomSecurityError.constructFromObject(data['error']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RoomSecurityDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RoomSecurityDto</code>.
     */
    static validateJSON(data) {
        if (data['members']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['members'])) {
                throw new Error("Expected the field `members` to be an array in the JSON data but got " + data['members']);
            }
            // validate the optional field `members` (array)
            for (const item of data['members']) {
                FileShareDto.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['warning'] && !(typeof data['warning'] === 'string' || data['warning'] instanceof String)) {
            throw new Error("Expected the field `warning` to be a primitive type in the JSON string but got " + data['warning']);
        }

        return true;
    }


}



/**
 * The list of room members.
 * @member {Array.<module:models/FileShareDto>} members
 */
RoomSecurityDto.prototype['members'] = undefined;

/**
 * The warning message.
 * @member {String} warning
 */
RoomSecurityDto.prototype['warning'] = undefined;

/**
 * @member {module:models/RoomSecurityError} error
 */
RoomSecurityDto.prototype['error'] = undefined;






export default RoomSecurityDto;

