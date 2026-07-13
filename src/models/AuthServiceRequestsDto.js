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
import AuthKey from './AuthKey';

/**
 * The AuthServiceRequestsDto model module.
 * @module models/AuthServiceRequestsDto
 * @version 3.2.0
 */
class AuthServiceRequestsDto {
    /**
     * Constructs a new <code>AuthServiceRequestsDto</code>.
     * The request parameters for handling the authorization service.
     * @alias module:models/AuthServiceRequestsDto
     */
    constructor() { 
        
        AuthServiceRequestsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthServiceRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/AuthServiceRequestsDto} obj Optional instance to populate.
     * @return {module:models/AuthServiceRequestsDto} The populated <code>AuthServiceRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthServiceRequestsDto();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('instruction')) {
                obj['instruction'] = ApiClient.convertToType(data['instruction'], 'String');
            }
            if (data.hasOwnProperty('canSet')) {
                obj['canSet'] = ApiClient.convertToType(data['canSet'], 'Boolean');
            }
            if (data.hasOwnProperty('props')) {
                obj['props'] = ApiClient.convertToType(data['props'], [AuthKey]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthServiceRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthServiceRequestsDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['instruction'] && !(typeof data['instruction'] === 'string' || data['instruction'] instanceof String)) {
            throw new Error("Expected the field `instruction` to be a primitive type in the JSON string but got " + data['instruction']);
        }
        if (data['props']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['props'])) {
                throw new Error("Expected the field `props` to be an array in the JSON data but got " + data['props']);
            }
            // validate the optional field `props` (array)
            for (const item of data['props']) {
                AuthKey.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The name of the authentication service.
 * @member {String} name
 */
AuthServiceRequestsDto.prototype['name'] = undefined;

/**
 * The user-friendly display title of the authentication service.
 * @member {String} title
 */
AuthServiceRequestsDto.prototype['title'] = undefined;

/**
 * The brief description of the authentication service.
 * @member {String} description
 */
AuthServiceRequestsDto.prototype['description'] = undefined;

/**
 * The detailed instructions for configuring or using the authentication service.
 * @member {String} instruction
 */
AuthServiceRequestsDto.prototype['instruction'] = undefined;

/**
 * Specifies whether the authentication service can be configured by the user.
 * @member {Boolean} canSet
 */
AuthServiceRequestsDto.prototype['canSet'] = undefined;

/**
 * The collection of authorization keys associated with the authentication service.
 * @member {Array.<module:models/AuthKey>} props
 */
AuthServiceRequestsDto.prototype['props'] = undefined;






export default AuthServiceRequestsDto;

