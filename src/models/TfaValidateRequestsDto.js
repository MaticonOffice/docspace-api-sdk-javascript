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
 * The TfaValidateRequestsDto model module.
 * @module models/TfaValidateRequestsDto
 * @version 3.2.0
 */
class TfaValidateRequestsDto {
    /**
     * Constructs a new <code>TfaValidateRequestsDto</code>.
     * The request parameters for validating the two-factor authentication codes.
     * @alias module:models/TfaValidateRequestsDto
     * @param code {String} The verification code provided by the user.
     */
    constructor(code) { 
        
        TfaValidateRequestsDto.initialize(this, code);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, code) { 
        obj['code'] = code;
    }

    /**
     * Constructs a <code>TfaValidateRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TfaValidateRequestsDto} obj Optional instance to populate.
     * @return {module:models/TfaValidateRequestsDto} The populated <code>TfaValidateRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TfaValidateRequestsDto();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TfaValidateRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TfaValidateRequestsDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TfaValidateRequestsDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }

        return true;
    }


}

TfaValidateRequestsDto.RequiredProperties = ["code"];

/**
 * The verification code provided by the user.
 * @member {String} code
 */
TfaValidateRequestsDto.prototype['code'] = undefined;






export default TfaValidateRequestsDto;

