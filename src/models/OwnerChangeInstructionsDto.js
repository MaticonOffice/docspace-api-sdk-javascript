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
 * The OwnerChangeInstructionsDto model module.
 * @module models/OwnerChangeInstructionsDto
 * @version 3.2.0
 */
class OwnerChangeInstructionsDto {
    /**
     * Constructs a new <code>OwnerChangeInstructionsDto</code>.
     * The owner change instructions parameters.
     * @alias module:models/OwnerChangeInstructionsDto
     */
    constructor() { 
        
        OwnerChangeInstructionsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OwnerChangeInstructionsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/OwnerChangeInstructionsDto} obj Optional instance to populate.
     * @return {module:models/OwnerChangeInstructionsDto} The populated <code>OwnerChangeInstructionsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OwnerChangeInstructionsDto();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OwnerChangeInstructionsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OwnerChangeInstructionsDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * The owner change instructions status.
 * @member {Number} status
 */
OwnerChangeInstructionsDto.prototype['status'] = undefined;

/**
 * The owner change instructions message.
 * @member {String} message
 */
OwnerChangeInstructionsDto.prototype['message'] = undefined;






export default OwnerChangeInstructionsDto;

