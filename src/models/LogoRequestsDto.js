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
 * The LogoRequestsDto model module.
 * @module models/LogoRequestsDto
 * @version 3.2.0
 */
class LogoRequestsDto {
    /**
     * Constructs a new <code>LogoRequestsDto</code>.
     * The request parameters for the theme-specific logo configurations.
     * @alias module:models/LogoRequestsDto
     */
    constructor() { 
        
        LogoRequestsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogoRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/LogoRequestsDto} obj Optional instance to populate.
     * @return {module:models/LogoRequestsDto} The populated <code>LogoRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogoRequestsDto();

            if (data.hasOwnProperty('light')) {
                obj['light'] = ApiClient.convertToType(data['light'], 'String');
            }
            if (data.hasOwnProperty('dark')) {
                obj['dark'] = ApiClient.convertToType(data['dark'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LogoRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LogoRequestsDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['light'] && !(typeof data['light'] === 'string' || data['light'] instanceof String)) {
            throw new Error("Expected the field `light` to be a primitive type in the JSON string but got " + data['light']);
        }
        // ensure the json data is a string
        if (data['dark'] && !(typeof data['dark'] === 'string' || data['dark'] instanceof String)) {
            throw new Error("Expected the field `dark` to be a primitive type in the JSON string but got " + data['dark']);
        }

        return true;
    }


}



/**
 * The URL or base64-encoded image data for the light theme logo.
 * @member {String} light
 */
LogoRequestsDto.prototype['light'] = undefined;

/**
 * The URL or base64-encoded image data for the dark theme logo.
 * @member {String} dark
 */
LogoRequestsDto.prototype['dark'] = undefined;






export default LogoRequestsDto;

