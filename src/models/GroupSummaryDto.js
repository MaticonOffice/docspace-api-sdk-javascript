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
 * The GroupSummaryDto model module.
 * @module models/GroupSummaryDto
 * @version 3.2.0
 */
class GroupSummaryDto {
    /**
     * Constructs a new <code>GroupSummaryDto</code>.
     * The group summary parameters.
     * @alias module:models/GroupSummaryDto
     */
    constructor() { 
        
        GroupSummaryDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GroupSummaryDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/GroupSummaryDto} obj Optional instance to populate.
     * @return {module:models/GroupSummaryDto} The populated <code>GroupSummaryDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupSummaryDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = ApiClient.convertToType(data['manager'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GroupSummaryDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GroupSummaryDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['manager'] && !(typeof data['manager'] === 'string' || data['manager'] instanceof String)) {
            throw new Error("Expected the field `manager` to be a primitive type in the JSON string but got " + data['manager']);
        }

        return true;
    }


}



/**
 * The group ID.
 * @member {String} id
 */
GroupSummaryDto.prototype['id'] = undefined;

/**
 * The group name.
 * @member {String} name
 */
GroupSummaryDto.prototype['name'] = undefined;

/**
 * The group manager.
 * @member {String} manager
 */
GroupSummaryDto.prototype['manager'] = undefined;






export default GroupSummaryDto;

