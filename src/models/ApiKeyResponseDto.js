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
import EmployeeDto from './EmployeeDto';

/**
 * The ApiKeyResponseDto model module.
 * @module models/ApiKeyResponseDto
 * @version 3.2.0
 */
class ApiKeyResponseDto {
    /**
     * Constructs a new <code>ApiKeyResponseDto</code>.
     * The response data for the API key operations.
     * @alias module:models/ApiKeyResponseDto
     */
    constructor() { 
        
        ApiKeyResponseDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiKeyResponseDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ApiKeyResponseDto} obj Optional instance to populate.
     * @return {module:models/ApiKeyResponseDto} The populated <code>ApiKeyResponseDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiKeyResponseDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('keyPostfix')) {
                obj['keyPostfix'] = ApiClient.convertToType(data['keyPostfix'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], ['String']);
            }
            if (data.hasOwnProperty('lastUsed')) {
                obj['lastUsed'] = ApiDateTime.constructFromObject(data['lastUsed']);
            }
            if (data.hasOwnProperty('createOn')) {
                obj['createOn'] = ApiDateTime.constructFromObject(data['createOn']);
            }
            if (data.hasOwnProperty('createBy')) {
                obj['createBy'] = EmployeeDto.constructFromObject(data['createBy']);
            }
            if (data.hasOwnProperty('expiresAt')) {
                obj['expiresAt'] = ApiDateTime.constructFromObject(data['expiresAt']);
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApiKeyResponseDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApiKeyResponseDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['keyPostfix'] && !(typeof data['keyPostfix'] === 'string' || data['keyPostfix'] instanceof String)) {
            throw new Error("Expected the field `keyPostfix` to be a primitive type in the JSON string but got " + data['keyPostfix']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['permissions'])) {
            throw new Error("Expected the field `permissions` to be an array in the JSON data but got " + data['permissions']);
        }
        // validate the optional field `lastUsed`
        if (data['lastUsed']) { // data not null
          ApiDateTime.validateJSON(data['lastUsed']);
        }
        // validate the optional field `createOn`
        if (data['createOn']) { // data not null
          ApiDateTime.validateJSON(data['createOn']);
        }
        // validate the optional field `createBy`
        if (data['createBy']) { // data not null
          EmployeeDto.validateJSON(data['createBy']);
        }
        // validate the optional field `expiresAt`
        if (data['expiresAt']) { // data not null
          ApiDateTime.validateJSON(data['expiresAt']);
        }

        return true;
    }


}



/**
 * The unique identifier of the API key.
 * @member {String} id
 */
ApiKeyResponseDto.prototype['id'] = undefined;

/**
 * The API key name.
 * @member {String} name
 */
ApiKeyResponseDto.prototype['name'] = undefined;

/**
 * The full API key value (only returned when creating a new key).
 * @member {String} key
 */
ApiKeyResponseDto.prototype['key'] = undefined;

/**
 * The API key postfix (used for identification).
 * @member {String} keyPostfix
 */
ApiKeyResponseDto.prototype['keyPostfix'] = undefined;

/**
 * The list of permissions granted to the API key.
 * @member {Array.<String>} permissions
 */
ApiKeyResponseDto.prototype['permissions'] = undefined;

/**
 * @member {module:models/ApiDateTime} lastUsed
 */
ApiKeyResponseDto.prototype['lastUsed'] = undefined;

/**
 * @member {module:models/ApiDateTime} createOn
 */
ApiKeyResponseDto.prototype['createOn'] = undefined;

/**
 * @member {module:models/EmployeeDto} createBy
 */
ApiKeyResponseDto.prototype['createBy'] = undefined;

/**
 * @member {module:models/ApiDateTime} expiresAt
 */
ApiKeyResponseDto.prototype['expiresAt'] = undefined;

/**
 * Indicates whether the API key is active or not.
 * @member {Boolean} isActive
 */
ApiKeyResponseDto.prototype['isActive'] = undefined;






export default ApiKeyResponseDto;

