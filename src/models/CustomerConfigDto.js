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
 * The CustomerConfigDto model module.
 * @module models/CustomerConfigDto
 * @version 3.2.0
 */
class CustomerConfigDto {
    /**
     * Constructs a new <code>CustomerConfigDto</code>.
     * The customer config parameters.
     * @alias module:models/CustomerConfigDto
     */
    constructor() { 
        
        CustomerConfigDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerConfigDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CustomerConfigDto} obj Optional instance to populate.
     * @return {module:models/CustomerConfigDto} The populated <code>CustomerConfigDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerConfigDto();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('logoDark')) {
                obj['logoDark'] = ApiClient.convertToType(data['logoDark'], 'String');
            }
            if (data.hasOwnProperty('mail')) {
                obj['mail'] = ApiClient.convertToType(data['mail'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('www')) {
                obj['www'] = ApiClient.convertToType(data['www'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomerConfigDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomerConfigDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is a string
        if (data['logo'] && !(typeof data['logo'] === 'string' || data['logo'] instanceof String)) {
            throw new Error("Expected the field `logo` to be a primitive type in the JSON string but got " + data['logo']);
        }
        // ensure the json data is a string
        if (data['logoDark'] && !(typeof data['logoDark'] === 'string' || data['logoDark'] instanceof String)) {
            throw new Error("Expected the field `logoDark` to be a primitive type in the JSON string but got " + data['logoDark']);
        }
        // ensure the json data is a string
        if (data['mail'] && !(typeof data['mail'] === 'string' || data['mail'] instanceof String)) {
            throw new Error("Expected the field `mail` to be a primitive type in the JSON string but got " + data['mail']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['www'] && !(typeof data['www'] === 'string' || data['www'] instanceof String)) {
            throw new Error("Expected the field `www` to be a primitive type in the JSON string but got " + data['www']);
        }

        return true;
    }


}



/**
 * The address of the customer configuration.
 * @member {String} address
 */
CustomerConfigDto.prototype['address'] = undefined;

/**
 * The logo of the customer configuration.
 * @member {String} logo
 */
CustomerConfigDto.prototype['logo'] = undefined;

/**
 * The dark logo of the customer configuration.
 * @member {String} logoDark
 */
CustomerConfigDto.prototype['logoDark'] = undefined;

/**
 * The mail address of the customer configuration.
 * @member {String} mail
 */
CustomerConfigDto.prototype['mail'] = undefined;

/**
 * The name of the customer configuration.
 * @member {String} name
 */
CustomerConfigDto.prototype['name'] = undefined;

/**
 * The site web address of the customer configuration.
 * @member {String} www
 */
CustomerConfigDto.prototype['www'] = undefined;






export default CustomerConfigDto;

