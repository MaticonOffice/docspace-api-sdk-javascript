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
import ItemKeyValuePairStringLogoRequestsDto from './ItemKeyValuePairStringLogoRequestsDto';

/**
 * The WhiteLabelRequestsDto model module.
 * @module models/WhiteLabelRequestsDto
 * @version 3.2.0
 */
class WhiteLabelRequestsDto {
    /**
     * Constructs a new <code>WhiteLabelRequestsDto</code>.
     * The request parameters for configuring the white label branding settings.
     * @alias module:models/WhiteLabelRequestsDto
     */
    constructor() { 
        
        WhiteLabelRequestsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WhiteLabelRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/WhiteLabelRequestsDto} obj Optional instance to populate.
     * @return {module:models/WhiteLabelRequestsDto} The populated <code>WhiteLabelRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WhiteLabelRequestsDto();

            if (data.hasOwnProperty('logoText')) {
                obj['logoText'] = ApiClient.convertToType(data['logoText'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], [ItemKeyValuePairStringLogoRequestsDto]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WhiteLabelRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WhiteLabelRequestsDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['logoText'] && !(typeof data['logoText'] === 'string' || data['logoText'] instanceof String)) {
            throw new Error("Expected the field `logoText` to be a primitive type in the JSON string but got " + data['logoText']);
        }
        if (data['logo']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['logo'])) {
                throw new Error("Expected the field `logo` to be an array in the JSON data but got " + data['logo']);
            }
            // validate the optional field `logo` (array)
            for (const item of data['logo']) {
                ItemKeyValuePairStringLogoRequestsDto.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The text to display alongside or in place of the logo.
 * @member {String} logoText
 */
WhiteLabelRequestsDto.prototype['logoText'] = undefined;

/**
 * The white label tenant IDs with their logos (light or dark).
 * @member {Array.<module:models/ItemKeyValuePairStringLogoRequestsDto>} logo
 */
WhiteLabelRequestsDto.prototype['logo'] = undefined;






export default WhiteLabelRequestsDto;

