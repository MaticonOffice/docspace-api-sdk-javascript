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
 * The ProviderDto model module.
 * @module models/ProviderDto
 * @version 3.2.0
 */
class ProviderDto {
    /**
     * Constructs a new <code>ProviderDto</code>.
     * The provider information.
     * @alias module:models/ProviderDto
     */
    constructor() { 
        
        ProviderDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProviderDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ProviderDto} obj Optional instance to populate.
     * @return {module:models/ProviderDto} The populated <code>ProviderDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProviderDto();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('connected')) {
                obj['connected'] = ApiClient.convertToType(data['connected'], 'Boolean');
            }
            if (data.hasOwnProperty('oauth')) {
                obj['oauth'] = ApiClient.convertToType(data['oauth'], 'Boolean');
            }
            if (data.hasOwnProperty('redirectUrl')) {
                obj['redirectUrl'] = ApiClient.convertToType(data['redirectUrl'], 'String');
            }
            if (data.hasOwnProperty('requiredConnectionUrl')) {
                obj['requiredConnectionUrl'] = ApiClient.convertToType(data['requiredConnectionUrl'], 'Boolean');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProviderDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProviderDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['redirectUrl'] && !(typeof data['redirectUrl'] === 'string' || data['redirectUrl'] instanceof String)) {
            throw new Error("Expected the field `redirectUrl` to be a primitive type in the JSON string but got " + data['redirectUrl']);
        }
        // ensure the json data is a string
        if (data['clientId'] && !(typeof data['clientId'] === 'string' || data['clientId'] instanceof String)) {
            throw new Error("Expected the field `clientId` to be a primitive type in the JSON string but got " + data['clientId']);
        }

        return true;
    }


}



/**
 * The provider name.
 * @member {String} name
 */
ProviderDto.prototype['name'] = undefined;

/**
 * The provider key.
 * @member {String} key
 */
ProviderDto.prototype['key'] = undefined;

/**
 * Specifies whether the provider is connected.
 * @member {Boolean} connected
 */
ProviderDto.prototype['connected'] = undefined;

/**
 * Specifies if the provider is OAuth.
 * @member {Boolean} oauth
 */
ProviderDto.prototype['oauth'] = undefined;

/**
 * The provider redirect URL.
 * @member {String} redirectUrl
 */
ProviderDto.prototype['redirectUrl'] = undefined;

/**
 * The required connection URL flag.
 * @member {Boolean} requiredConnectionUrl
 */
ProviderDto.prototype['requiredConnectionUrl'] = undefined;

/**
 * The provider OAuth client ID.
 * @member {String} clientId
 */
ProviderDto.prototype['clientId'] = undefined;






export default ProviderDto;

