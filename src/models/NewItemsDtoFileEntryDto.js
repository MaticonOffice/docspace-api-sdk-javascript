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
import ApiDateTime from './ApiDateTime';
import FileEntryDto from './FileEntryDto';

/**
 * The NewItemsDtoFileEntryDto model module.
 * @module models/NewItemsDtoFileEntryDto
 * @version 3.2.0
 */
class NewItemsDtoFileEntryDto {
    /**
     * Constructs a new <code>NewItemsDtoFileEntryDto</code>.
     * The new item parameters.
     * @alias module:models/NewItemsDtoFileEntryDto
     */
    constructor() { 
        
        NewItemsDtoFileEntryDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NewItemsDtoFileEntryDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/NewItemsDtoFileEntryDto} obj Optional instance to populate.
     * @return {module:models/NewItemsDtoFileEntryDto} The populated <code>NewItemsDtoFileEntryDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewItemsDtoFileEntryDto();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiDateTime.constructFromObject(data['date']);
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [FileEntryDto]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NewItemsDtoFileEntryDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NewItemsDtoFileEntryDto</code>.
     */
    static validateJSON(data) {
        // validate the optional field `date`
        if (data['date']) { // data not null
          ApiDateTime.validateJSON(data['date']);
        }
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                FileEntryDto.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:models/ApiDateTime} date
 */
NewItemsDtoFileEntryDto.prototype['date'] = undefined;

/**
 * The list of items.
 * @member {Array.<module:models/FileEntryDto>} items
 */
NewItemsDtoFileEntryDto.prototype['items'] = undefined;






export default NewItemsDtoFileEntryDto;

