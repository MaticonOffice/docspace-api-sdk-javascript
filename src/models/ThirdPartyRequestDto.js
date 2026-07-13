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
 * The ThirdPartyRequestDto model module.
 * @module models/ThirdPartyRequestDto
 * @version 3.2.0
 */
class ThirdPartyRequestDto {
    /**
     * Constructs a new <code>ThirdPartyRequestDto</code>.
     * The third-party request parameters.
     * @alias module:models/ThirdPartyRequestDto
     */
    constructor() { 
        
        ThirdPartyRequestDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ThirdPartyRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ThirdPartyRequestDto} obj Optional instance to populate.
     * @return {module:models/ThirdPartyRequestDto} The populated <code>ThirdPartyRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThirdPartyRequestDto();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('customerTitle')) {
                obj['customerTitle'] = ApiClient.convertToType(data['customerTitle'], 'String');
            }
            if (data.hasOwnProperty('providerKey')) {
                obj['providerKey'] = ApiClient.convertToType(data['providerKey'], 'String');
            }
            if (data.hasOwnProperty('providerId')) {
                obj['providerId'] = ApiClient.convertToType(data['providerId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ThirdPartyRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ThirdPartyRequestDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['login'] && !(typeof data['login'] === 'string' || data['login'] instanceof String)) {
            throw new Error("Expected the field `login` to be a primitive type in the JSON string but got " + data['login']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['customerTitle'] && !(typeof data['customerTitle'] === 'string' || data['customerTitle'] instanceof String)) {
            throw new Error("Expected the field `customerTitle` to be a primitive type in the JSON string but got " + data['customerTitle']);
        }
        // ensure the json data is a string
        if (data['providerKey'] && !(typeof data['providerKey'] === 'string' || data['providerKey'] instanceof String)) {
            throw new Error("Expected the field `providerKey` to be a primitive type in the JSON string but got " + data['providerKey']);
        }

        return true;
    }


}



/**
 * The connection URL for the sharepoint.
 * @member {String} url
 */
ThirdPartyRequestDto.prototype['url'] = undefined;

/**
 * The third-party request login.
 * @member {String} login
 */
ThirdPartyRequestDto.prototype['login'] = undefined;

/**
 * The third-party request password.
 * @member {String} password
 */
ThirdPartyRequestDto.prototype['password'] = undefined;

/**
 * The authentication token.
 * @member {String} token
 */
ThirdPartyRequestDto.prototype['token'] = undefined;

/**
 * The customer title.
 * @member {String} customerTitle
 */
ThirdPartyRequestDto.prototype['customerTitle'] = undefined;

/**
 * The provider key.
 * @member {String} providerKey
 */
ThirdPartyRequestDto.prototype['providerKey'] = undefined;

/**
 * The provider ID.
 * @member {Number} providerId
 */
ThirdPartyRequestDto.prototype['providerId'] = undefined;






export default ThirdPartyRequestDto;

