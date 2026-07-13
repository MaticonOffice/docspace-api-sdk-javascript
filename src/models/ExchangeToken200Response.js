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
 * The ExchangeToken200Response model module.
 * @module models/ExchangeToken200Response
 * @version 3.2.0
 */
class ExchangeToken200Response {
    /**
     * Constructs a new <code>ExchangeToken200Response</code>.
     * @alias module:models/ExchangeToken200Response
     */
    constructor() { 
        
        ExchangeToken200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExchangeToken200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ExchangeToken200Response} obj Optional instance to populate.
     * @return {module:models/ExchangeToken200Response} The populated <code>ExchangeToken200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExchangeToken200Response();

            if (data.hasOwnProperty('access_token')) {
                obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
            }
            if (data.hasOwnProperty('token_type')) {
                obj['token_type'] = ApiClient.convertToType(data['token_type'], 'String');
            }
            if (data.hasOwnProperty('expires_in')) {
                obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'Number');
            }
            if (data.hasOwnProperty('refresh_token')) {
                obj['refresh_token'] = ApiClient.convertToType(data['refresh_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExchangeToken200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExchangeToken200Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['access_token'] && !(typeof data['access_token'] === 'string' || data['access_token'] instanceof String)) {
            throw new Error("Expected the field `access_token` to be a primitive type in the JSON string but got " + data['access_token']);
        }
        // ensure the json data is a string
        if (data['token_type'] && !(typeof data['token_type'] === 'string' || data['token_type'] instanceof String)) {
            throw new Error("Expected the field `token_type` to be a primitive type in the JSON string but got " + data['token_type']);
        }
        // ensure the json data is a string
        if (data['refresh_token'] && !(typeof data['refresh_token'] === 'string' || data['refresh_token'] instanceof String)) {
            throw new Error("Expected the field `refresh_token` to be a primitive type in the JSON string but got " + data['refresh_token']);
        }

        return true;
    }


}



/**
 * The access token issued by the authorization server.
 * @member {String} access_token
 */
ExchangeToken200Response.prototype['access_token'] = undefined;

/**
 * The type of token issued, typically 'Bearer'.
 * @member {String} token_type
 */
ExchangeToken200Response.prototype['token_type'] = undefined;

/**
 * The number of seconds until the access token expires.
 * @member {Number} expires_in
 */
ExchangeToken200Response.prototype['expires_in'] = undefined;

/**
 * The token used to obtain a new access token when the current one expires.
 * @member {String} refresh_token
 */
ExchangeToken200Response.prototype['refresh_token'] = undefined;






export default ExchangeToken200Response;

