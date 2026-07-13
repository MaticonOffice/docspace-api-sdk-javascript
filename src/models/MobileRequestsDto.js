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
 * The MobileRequestsDto model module.
 * @module models/MobileRequestsDto
 * @version 3.2.0
 */
class MobileRequestsDto {
    /**
     * Constructs a new <code>MobileRequestsDto</code>.
     * The parameters required for the mobile phone verification.
     * @alias module:models/MobileRequestsDto
     */
    constructor() { 
        
        MobileRequestsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MobileRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/MobileRequestsDto} obj Optional instance to populate.
     * @return {module:models/MobileRequestsDto} The populated <code>MobileRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MobileRequestsDto();

            if (data.hasOwnProperty('mobilePhone')) {
                obj['mobilePhone'] = ApiClient.convertToType(data['mobilePhone'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MobileRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MobileRequestsDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['mobilePhone'] && !(typeof data['mobilePhone'] === 'string' || data['mobilePhone'] instanceof String)) {
            throw new Error("Expected the field `mobilePhone` to be a primitive type in the JSON string but got " + data['mobilePhone']);
        }

        return true;
    }


}



/**
 * The user's mobile phone number.
 * @member {String} mobilePhone
 */
MobileRequestsDto.prototype['mobilePhone'] = undefined;






export default MobileRequestsDto;

