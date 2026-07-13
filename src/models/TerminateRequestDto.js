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
 * The TerminateRequestDto model module.
 * @module models/TerminateRequestDto
 * @version 3.2.0
 */
class TerminateRequestDto {
    /**
     * Constructs a new <code>TerminateRequestDto</code>.
     * The request parameters for terminating the reassignment/deletion process.
     * @alias module:models/TerminateRequestDto
     * @param userId {String} The user ID whose data is reassigned/removed.
     */
    constructor(userId) { 
        
        TerminateRequestDto.initialize(this, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userId) { 
        obj['userId'] = userId;
    }

    /**
     * Constructs a <code>TerminateRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TerminateRequestDto} obj Optional instance to populate.
     * @return {module:models/TerminateRequestDto} The populated <code>TerminateRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TerminateRequestDto();

            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TerminateRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TerminateRequestDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TerminateRequestDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['userId'] && !(typeof data['userId'] === 'string' || data['userId'] instanceof String)) {
            throw new Error("Expected the field `userId` to be a primitive type in the JSON string but got " + data['userId']);
        }

        return true;
    }


}

TerminateRequestDto.RequiredProperties = ["userId"];

/**
 * The user ID whose data is reassigned/removed.
 * @member {String} userId
 */
TerminateRequestDto.prototype['userId'] = undefined;






export default TerminateRequestDto;

