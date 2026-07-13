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
 * The PasswordHasher model module.
 * @module models/PasswordHasher
 * @version 3.2.0
 */
class PasswordHasher {
    /**
     * Constructs a new <code>PasswordHasher</code>.
     * @alias module:models/PasswordHasher
     */
    constructor() { 
        
        PasswordHasher.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PasswordHasher</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/PasswordHasher} obj Optional instance to populate.
     * @return {module:models/PasswordHasher} The populated <code>PasswordHasher</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PasswordHasher();

            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('iterations')) {
                obj['iterations'] = ApiClient.convertToType(data['iterations'], 'Number');
            }
            if (data.hasOwnProperty('salt')) {
                obj['salt'] = ApiClient.convertToType(data['salt'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PasswordHasher</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PasswordHasher</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['salt'] && !(typeof data['salt'] === 'string' || data['salt'] instanceof String)) {
            throw new Error("Expected the field `salt` to be a primitive type in the JSON string but got " + data['salt']);
        }

        return true;
    }


}



/**
 * @member {Number} size
 */
PasswordHasher.prototype['size'] = undefined;

/**
 * @member {Number} iterations
 */
PasswordHasher.prototype['iterations'] = undefined;

/**
 * @member {String} salt
 */
PasswordHasher.prototype['salt'] = undefined;






export default PasswordHasher;

