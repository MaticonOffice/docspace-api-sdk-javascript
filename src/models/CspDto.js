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
 * The CspDto model module.
 * @module models/CspDto
 * @version 3.2.0
 */
class CspDto {
    /**
     * Constructs a new <code>CspDto</code>.
     * The CSP (Content Security Policy) parameters.
     * @alias module:models/CspDto
     */
    constructor() { 
        
        CspDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CspDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CspDto} obj Optional instance to populate.
     * @return {module:models/CspDto} The populated <code>CspDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CspDto();

            if (data.hasOwnProperty('domains')) {
                obj['domains'] = ApiClient.convertToType(data['domains'], ['String']);
            }
            if (data.hasOwnProperty('header')) {
                obj['header'] = ApiClient.convertToType(data['header'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CspDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CspDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['domains'])) {
            throw new Error("Expected the field `domains` to be an array in the JSON data but got " + data['domains']);
        }
        // ensure the json data is a string
        if (data['header'] && !(typeof data['header'] === 'string' || data['header'] instanceof String)) {
            throw new Error("Expected the field `header` to be a primitive type in the JSON string but got " + data['header']);
        }

        return true;
    }


}



/**
 * The list of CSP domains.
 * @member {Array.<String>} domains
 */
CspDto.prototype['domains'] = undefined;

/**
 * The CSP header.
 * @member {String} header
 */
CspDto.prototype['header'] = undefined;






export default CspDto;

