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
import ItemKeyValuePairStringBoolean from './ItemKeyValuePairStringBoolean';

/**
 * The WebItemsSecurityRequestsDto model module.
 * @module models/WebItemsSecurityRequestsDto
 * @version 3.2.0
 */
class WebItemsSecurityRequestsDto {
    /**
     * Constructs a new <code>WebItemsSecurityRequestsDto</code>.
     * The request parameters for configuring security settings across multiple web modules.
     * @alias module:models/WebItemsSecurityRequestsDto
     */
    constructor() { 
        
        WebItemsSecurityRequestsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebItemsSecurityRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/WebItemsSecurityRequestsDto} obj Optional instance to populate.
     * @return {module:models/WebItemsSecurityRequestsDto} The populated <code>WebItemsSecurityRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebItemsSecurityRequestsDto();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ItemKeyValuePairStringBoolean]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebItemsSecurityRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebItemsSecurityRequestsDto</code>.
     */
    static validateJSON(data) {
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                ItemKeyValuePairStringBoolean.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The list of module security configurations.
 * @member {Array.<module:models/ItemKeyValuePairStringBoolean>} items
 */
WebItemsSecurityRequestsDto.prototype['items'] = undefined;






export default WebItemsSecurityRequestsDto;

