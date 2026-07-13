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
 * The OAuth20Token model module.
 * @module models/OAuth20Token
 * @version 3.2.0
 */
class OAuth20Token {
    /**
     * Constructs a new <code>OAuth20Token</code>.
     * @alias module:models/OAuth20Token
     */
    constructor() { 
        
        OAuth20Token.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OAuth20Token</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/OAuth20Token} obj Optional instance to populate.
     * @return {module:models/OAuth20Token} The populated <code>OAuth20Token</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OAuth20Token();

            if (data.hasOwnProperty('access_token')) {
                obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
            }
            if (data.hasOwnProperty('refresh_token')) {
                obj['refresh_token'] = ApiClient.convertToType(data['refresh_token'], 'String');
            }
            if (data.hasOwnProperty('expires_in')) {
                obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'Number');
            }
            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
            }
            if (data.hasOwnProperty('client_secret')) {
                obj['client_secret'] = ApiClient.convertToType(data['client_secret'], 'String');
            }
            if (data.hasOwnProperty('redirect_uri')) {
                obj['redirect_uri'] = ApiClient.convertToType(data['redirect_uri'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
            if (data.hasOwnProperty('isExpired')) {
                obj['isExpired'] = ApiClient.convertToType(data['isExpired'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OAuth20Token</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OAuth20Token</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['access_token'] && !(typeof data['access_token'] === 'string' || data['access_token'] instanceof String)) {
            throw new Error("Expected the field `access_token` to be a primitive type in the JSON string but got " + data['access_token']);
        }
        // ensure the json data is a string
        if (data['refresh_token'] && !(typeof data['refresh_token'] === 'string' || data['refresh_token'] instanceof String)) {
            throw new Error("Expected the field `refresh_token` to be a primitive type in the JSON string but got " + data['refresh_token']);
        }
        // ensure the json data is a string
        if (data['client_id'] && !(typeof data['client_id'] === 'string' || data['client_id'] instanceof String)) {
            throw new Error("Expected the field `client_id` to be a primitive type in the JSON string but got " + data['client_id']);
        }
        // ensure the json data is a string
        if (data['client_secret'] && !(typeof data['client_secret'] === 'string' || data['client_secret'] instanceof String)) {
            throw new Error("Expected the field `client_secret` to be a primitive type in the JSON string but got " + data['client_secret']);
        }
        // ensure the json data is a string
        if (data['redirect_uri'] && !(typeof data['redirect_uri'] === 'string' || data['redirect_uri'] instanceof String)) {
            throw new Error("Expected the field `redirect_uri` to be a primitive type in the JSON string but got " + data['redirect_uri']);
        }

        return true;
    }


}



/**
 * @member {String} access_token
 */
OAuth20Token.prototype['access_token'] = undefined;

/**
 * @member {String} refresh_token
 */
OAuth20Token.prototype['refresh_token'] = undefined;

/**
 * @member {Number} expires_in
 */
OAuth20Token.prototype['expires_in'] = undefined;

/**
 * @member {String} client_id
 */
OAuth20Token.prototype['client_id'] = undefined;

/**
 * @member {String} client_secret
 */
OAuth20Token.prototype['client_secret'] = undefined;

/**
 * @member {String} redirect_uri
 */
OAuth20Token.prototype['redirect_uri'] = undefined;

/**
 * @member {Date} timestamp
 */
OAuth20Token.prototype['timestamp'] = undefined;

/**
 * @member {Boolean} isExpired
 */
OAuth20Token.prototype['isExpired'] = undefined;






export default OAuth20Token;

