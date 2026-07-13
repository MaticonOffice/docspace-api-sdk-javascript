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
 * The BatchTagsRequestDto model module.
 * @module models/BatchTagsRequestDto
 * @version 3.2.0
 */
class BatchTagsRequestDto {
    /**
     * Constructs a new <code>BatchTagsRequestDto</code>.
     * The parameters for adding tags.
     * @alias module:models/BatchTagsRequestDto
     */
    constructor() { 
        
        BatchTagsRequestDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BatchTagsRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/BatchTagsRequestDto} obj Optional instance to populate.
     * @return {module:models/BatchTagsRequestDto} The populated <code>BatchTagsRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchTagsRequestDto();

            if (data.hasOwnProperty('names')) {
                obj['names'] = ApiClient.convertToType(data['names'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BatchTagsRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BatchTagsRequestDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['names'])) {
            throw new Error("Expected the field `names` to be an array in the JSON data but got " + data['names']);
        }

        return true;
    }


}



/**
 * The list of tag names.
 * @member {Array.<String>} names
 */
BatchTagsRequestDto.prototype['names'] = undefined;






export default BatchTagsRequestDto;

