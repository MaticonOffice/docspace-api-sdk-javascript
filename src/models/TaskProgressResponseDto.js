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
import DistributedTaskStatus from './DistributedTaskStatus';

/**
 * The TaskProgressResponseDto model module.
 * @module models/TaskProgressResponseDto
 * @version 3.2.0
 */
class TaskProgressResponseDto {
    /**
     * Constructs a new <code>TaskProgressResponseDto</code>.
     * The task progress response parameters.
     * @alias module:models/TaskProgressResponseDto
     */
    constructor() { 
        
        TaskProgressResponseDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaskProgressResponseDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TaskProgressResponseDto} obj Optional instance to populate.
     * @return {module:models/TaskProgressResponseDto} The populated <code>TaskProgressResponseDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskProgressResponseDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
            }
            if (data.hasOwnProperty('isCompleted')) {
                obj['isCompleted'] = ApiClient.convertToType(data['isCompleted'], 'Boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = DistributedTaskStatus.constructFromObject(data['status']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TaskProgressResponseDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TaskProgressResponseDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['error'] && !(typeof data['error'] === 'string' || data['error'] instanceof String)) {
            throw new Error("Expected the field `error` to be a primitive type in the JSON string but got " + data['error']);
        }

        return true;
    }


}



/**
 * The task progress ID.
 * @member {String} id
 */
TaskProgressResponseDto.prototype['id'] = undefined;

/**
 * The task progress error message.
 * @member {String} error
 */
TaskProgressResponseDto.prototype['error'] = undefined;

/**
 * The percentage of the task progress.
 * @member {Number} percentage
 */
TaskProgressResponseDto.prototype['percentage'] = undefined;

/**
 * Specifies if the task peogress is completed or not.
 * @member {Boolean} isCompleted
 */
TaskProgressResponseDto.prototype['isCompleted'] = undefined;

/**
 * @member {module:models/DistributedTaskStatus} status
 */
TaskProgressResponseDto.prototype['status'] = undefined;






export default TaskProgressResponseDto;

