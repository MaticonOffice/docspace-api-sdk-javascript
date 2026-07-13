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
import UserInfo from './UserInfo';

/**
 * The MentionWrapper model module.
 * @module models/MentionWrapper
 * @version 3.2.0
 */
class MentionWrapper {
    /**
     * Constructs a new <code>MentionWrapper</code>.
     * The mention message parameters.
     * @alias module:models/MentionWrapper
     */
    constructor() { 
        
        MentionWrapper.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MentionWrapper</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/MentionWrapper} obj Optional instance to populate.
     * @return {module:models/MentionWrapper} The populated <code>MentionWrapper</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MentionWrapper();

            if (data.hasOwnProperty('user')) {
                obj['user'] = UserInfo.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('hasAccess')) {
                obj['hasAccess'] = ApiClient.convertToType(data['hasAccess'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MentionWrapper</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MentionWrapper</code>.
     */
    static validateJSON(data) {
        // validate the optional field `user`
        if (data['user']) { // data not null
          UserInfo.validateJSON(data['user']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * @member {module:models/UserInfo} user
 */
MentionWrapper.prototype['user'] = undefined;

/**
 * The email address of the user.
 * @member {String} email
 */
MentionWrapper.prototype['email'] = undefined;

/**
 * The identification of the user.
 * @member {String} id
 */
MentionWrapper.prototype['id'] = undefined;

/**
 * The path to the user's avatar.
 * @member {String} image
 */
MentionWrapper.prototype['image'] = undefined;

/**
 * Specifies if the user has the access to the file or not.
 * @member {Boolean} hasAccess
 */
MentionWrapper.prototype['hasAccess'] = undefined;

/**
 * The full name of the user.
 * @member {String} name
 */
MentionWrapper.prototype['name'] = undefined;






export default MentionWrapper;

