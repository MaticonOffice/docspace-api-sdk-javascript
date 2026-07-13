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
 * The ConfirmData model module.
 * @module models/ConfirmData
 * @version 3.2.0
 */
class ConfirmData {
    /**
     * Constructs a new <code>ConfirmData</code>.
     * The additional confirmation data required for authentication.
     * @alias module:models/ConfirmData
     */
    constructor() { 
        
        ConfirmData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConfirmData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ConfirmData} obj Optional instance to populate.
     * @return {module:models/ConfirmData} The populated <code>ConfirmData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfirmData();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('first')) {
                obj['first'] = ApiClient.convertToType(data['first'], 'Boolean');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ConfirmData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConfirmData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }

        return true;
    }


}



/**
 * The email address to confirm the user's identity.
 * @member {String} email
 */
ConfirmData.prototype['email'] = undefined;

/**
 * Specifies whether this is the first access to the user's account.
 * @member {Boolean} first
 */
ConfirmData.prototype['first'] = undefined;

/**
 * The unique confirmation key for validating user identity.
 * @member {String} key
 */
ConfirmData.prototype['key'] = undefined;






export default ConfirmData;

