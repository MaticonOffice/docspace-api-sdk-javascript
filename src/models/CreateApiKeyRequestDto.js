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
 * The CreateApiKeyRequestDto model module.
 * @module models/CreateApiKeyRequestDto
 * @version 3.2.0
 */
class CreateApiKeyRequestDto {
    /**
     * Constructs a new <code>CreateApiKeyRequestDto</code>.
     * The request parameters for creating a new API key.
     * @alias module:models/CreateApiKeyRequestDto
     * @param name {String} The API key name.
     */
    constructor(name) { 
        
        CreateApiKeyRequestDto.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateApiKeyRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CreateApiKeyRequestDto} obj Optional instance to populate.
     * @return {module:models/CreateApiKeyRequestDto} The populated <code>CreateApiKeyRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateApiKeyRequestDto();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], ['String']);
            }
            if (data.hasOwnProperty('expiresInDays')) {
                obj['expiresInDays'] = ApiClient.convertToType(data['expiresInDays'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateApiKeyRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateApiKeyRequestDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateApiKeyRequestDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['permissions'])) {
            throw new Error("Expected the field `permissions` to be an array in the JSON data but got " + data['permissions']);
        }

        return true;
    }


}

CreateApiKeyRequestDto.RequiredProperties = ["name"];

/**
 * The API key name.
 * @member {String} name
 */
CreateApiKeyRequestDto.prototype['name'] = undefined;

/**
 * The list of permissions granted to the API key.
 * @member {Array.<String>} permissions
 */
CreateApiKeyRequestDto.prototype['permissions'] = undefined;

/**
 * The number of days until the API key expires (null for no expiration).
 * @member {Number} expiresInDays
 */
CreateApiKeyRequestDto.prototype['expiresInDays'] = undefined;






export default CreateApiKeyRequestDto;

