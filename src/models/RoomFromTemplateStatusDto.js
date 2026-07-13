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
 * The RoomFromTemplateStatusDto model module.
 * @module models/RoomFromTemplateStatusDto
 * @version 3.2.0
 */
class RoomFromTemplateStatusDto {
    /**
     * Constructs a new <code>RoomFromTemplateStatusDto</code>.
     * The progress parameters of creating a room from the template.
     * @alias module:models/RoomFromTemplateStatusDto
     */
    constructor() { 
        
        RoomFromTemplateStatusDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RoomFromTemplateStatusDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/RoomFromTemplateStatusDto} obj Optional instance to populate.
     * @return {module:models/RoomFromTemplateStatusDto} The populated <code>RoomFromTemplateStatusDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoomFromTemplateStatusDto();

            if (data.hasOwnProperty('roomId')) {
                obj['roomId'] = ApiClient.convertToType(data['roomId'], 'Number');
            }
            if (data.hasOwnProperty('progress')) {
                obj['progress'] = ApiClient.convertToType(data['progress'], 'Number');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('isCompleted')) {
                obj['isCompleted'] = ApiClient.convertToType(data['isCompleted'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RoomFromTemplateStatusDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RoomFromTemplateStatusDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['error'] && !(typeof data['error'] === 'string' || data['error'] instanceof String)) {
            throw new Error("Expected the field `error` to be a primitive type in the JSON string but got " + data['error']);
        }

        return true;
    }


}



/**
 * The room ID.
 * @member {Number} roomId
 */
RoomFromTemplateStatusDto.prototype['roomId'] = undefined;

/**
 * The progress of creating a room from the template.
 * @member {Number} progress
 */
RoomFromTemplateStatusDto.prototype['progress'] = undefined;

/**
 * The error message that is sent when a room is not created successfully from the template.
 * @member {String} error
 */
RoomFromTemplateStatusDto.prototype['error'] = undefined;

/**
 * Specifies whether the process of creating a room from the template is completed.
 * @member {Boolean} isCompleted
 */
RoomFromTemplateStatusDto.prototype['isCompleted'] = undefined;






export default RoomFromTemplateStatusDto;

