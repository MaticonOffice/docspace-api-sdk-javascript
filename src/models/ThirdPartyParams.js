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
import AuthData from './AuthData';

/**
 * The ThirdPartyParams model module.
 * @module models/ThirdPartyParams
 * @version 3.2.0
 */
class ThirdPartyParams {
    /**
     * Constructs a new <code>ThirdPartyParams</code>.
     * The third-party account parameters.
     * @alias module:models/ThirdPartyParams
     */
    constructor() { 
        
        ThirdPartyParams.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ThirdPartyParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ThirdPartyParams} obj Optional instance to populate.
     * @return {module:models/ThirdPartyParams} The populated <code>ThirdPartyParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThirdPartyParams();

            if (data.hasOwnProperty('auth_data')) {
                obj['auth_data'] = AuthData.constructFromObject(data['auth_data']);
            }
            if (data.hasOwnProperty('corporate')) {
                obj['corporate'] = ApiClient.convertToType(data['corporate'], 'Boolean');
            }
            if (data.hasOwnProperty('roomsStorage')) {
                obj['roomsStorage'] = ApiClient.convertToType(data['roomsStorage'], 'Boolean');
            }
            if (data.hasOwnProperty('customer_title')) {
                obj['customer_title'] = ApiClient.convertToType(data['customer_title'], 'String');
            }
            if (data.hasOwnProperty('provider_id')) {
                obj['provider_id'] = ApiClient.convertToType(data['provider_id'], 'Number');
            }
            if (data.hasOwnProperty('provider_key')) {
                obj['provider_key'] = ApiClient.convertToType(data['provider_key'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ThirdPartyParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ThirdPartyParams</code>.
     */
    static validateJSON(data) {
        // validate the optional field `auth_data`
        if (data['auth_data']) { // data not null
          AuthData.validateJSON(data['auth_data']);
        }
        // ensure the json data is a string
        if (data['customer_title'] && !(typeof data['customer_title'] === 'string' || data['customer_title'] instanceof String)) {
            throw new Error("Expected the field `customer_title` to be a primitive type in the JSON string but got " + data['customer_title']);
        }
        // ensure the json data is a string
        if (data['provider_key'] && !(typeof data['provider_key'] === 'string' || data['provider_key'] instanceof String)) {
            throw new Error("Expected the field `provider_key` to be a primitive type in the JSON string but got " + data['provider_key']);
        }

        return true;
    }


}



/**
 * @member {module:models/AuthData} auth_data
 */
ThirdPartyParams.prototype['auth_data'] = undefined;

/**
 * Specifies if this is a corporate account or not.
 * @member {Boolean} corporate
 */
ThirdPartyParams.prototype['corporate'] = undefined;

/**
 * Specifies if this is a room storage or not.
 * @member {Boolean} roomsStorage
 */
ThirdPartyParams.prototype['roomsStorage'] = undefined;

/**
 * The customer title.
 * @member {String} customer_title
 */
ThirdPartyParams.prototype['customer_title'] = undefined;

/**
 * The provider ID.
 * @member {Number} provider_id
 */
ThirdPartyParams.prototype['provider_id'] = undefined;

/**
 * The provider key.
 * @member {String} provider_key
 */
ThirdPartyParams.prototype['provider_key'] = undefined;






export default ThirdPartyParams;

