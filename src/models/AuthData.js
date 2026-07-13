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
import OAuth20Token from './OAuth20Token';

/**
 * The AuthData model module.
 * @module models/AuthData
 * @version 3.2.0
 */
class AuthData {
    /**
     * Constructs a new <code>AuthData</code>.
     * The authentication data.
     * @alias module:models/AuthData
     */
    constructor() { 
        
        AuthData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/AuthData} obj Optional instance to populate.
     * @return {module:models/AuthData} The populated <code>AuthData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthData();

            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('rawToken')) {
                obj['rawToken'] = ApiClient.convertToType(data['rawToken'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = OAuth20Token.constructFromObject(data['token']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['login'] && !(typeof data['login'] === 'string' || data['login'] instanceof String)) {
            throw new Error("Expected the field `login` to be a primitive type in the JSON string but got " + data['login']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['rawToken'] && !(typeof data['rawToken'] === 'string' || data['rawToken'] instanceof String)) {
            throw new Error("Expected the field `rawToken` to be a primitive type in the JSON string but got " + data['rawToken']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['provider'] && !(typeof data['provider'] === 'string' || data['provider'] instanceof String)) {
            throw new Error("Expected the field `provider` to be a primitive type in the JSON string but got " + data['provider']);
        }
        // validate the optional field `token`
        if (data['token']) { // data not null
          OAuth20Token.validateJSON(data['token']);
        }

        return true;
    }


}



/**
 * The authentication login.
 * @member {String} login
 */
AuthData.prototype['login'] = undefined;

/**
 * The authentication password.
 * @member {String} password
 */
AuthData.prototype['password'] = undefined;

/**
 * The authentication raw token.
 * @member {String} rawToken
 */
AuthData.prototype['rawToken'] = undefined;

/**
 * The authentication URL.
 * @member {String} url
 */
AuthData.prototype['url'] = undefined;

/**
 * The authentication provider.
 * @member {String} provider
 */
AuthData.prototype['provider'] = undefined;

/**
 * @member {module:models/OAuth20Token} token
 */
AuthData.prototype['token'] = undefined;






export default AuthData;

