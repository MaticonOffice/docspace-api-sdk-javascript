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
 * The IsDefaultWhiteLabelLogosDto model module.
 * @module models/IsDefaultWhiteLabelLogosDto
 * @version 3.2.0
 */
class IsDefaultWhiteLabelLogosDto {
    /**
     * Constructs a new <code>IsDefaultWhiteLabelLogosDto</code>.
     * The default white label logos parameters.
     * @alias module:models/IsDefaultWhiteLabelLogosDto
     */
    constructor() { 
        
        IsDefaultWhiteLabelLogosDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IsDefaultWhiteLabelLogosDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/IsDefaultWhiteLabelLogosDto} obj Optional instance to populate.
     * @return {module:models/IsDefaultWhiteLabelLogosDto} The populated <code>IsDefaultWhiteLabelLogosDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IsDefaultWhiteLabelLogosDto();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IsDefaultWhiteLabelLogosDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IsDefaultWhiteLabelLogosDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * The white label logo name.
 * @member {String} name
 */
IsDefaultWhiteLabelLogosDto.prototype['name'] = undefined;

/**
 * Specifies if the white label logo is default or not.
 * @member {Boolean} default
 */
IsDefaultWhiteLabelLogosDto.prototype['default'] = undefined;






export default IsDefaultWhiteLabelLogosDto;

