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
 * The UserConfig model module.
 * @module models/UserConfig
 * @version 3.2.0
 */
class UserConfig {
    /**
     * Constructs a new <code>UserConfig</code>.
     * The configuration parameters of the user currently viewing or editing the document.
     * @alias module:models/UserConfig
     */
    constructor() { 
        
        UserConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UserConfig} obj Optional instance to populate.
     * @return {module:models/UserConfig} The populated <code>UserConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserConfig();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserConfig</code>.
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
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['roles'])) {
            throw new Error("Expected the field `roles` to be an array in the JSON data but got " + data['roles']);
        }

        return true;
    }


}



/**
 * The user ID.
 * @member {String} id
 */
UserConfig.prototype['id'] = undefined;

/**
 * The full name of the user.
 * @member {String} name
 */
UserConfig.prototype['name'] = undefined;

/**
 * The path to the user's avatar.
 * @member {String} image
 */
UserConfig.prototype['image'] = undefined;

/**
 * Roles
 * @member {Array.<String>} roles
 */
UserConfig.prototype['roles'] = undefined;






export default UserConfig;

