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
import EncryprtionStatus from './EncryprtionStatus';

/**
 * The EncryptionSettings model module.
 * @module models/EncryptionSettings
 * @version 3.2.0
 */
class EncryptionSettings {
    /**
     * Constructs a new <code>EncryptionSettings</code>.
     * The encryption settings.
     * @alias module:models/EncryptionSettings
     */
    constructor() { 
        
        EncryptionSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EncryptionSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/EncryptionSettings} obj Optional instance to populate.
     * @return {module:models/EncryptionSettings} The populated <code>EncryptionSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EncryptionSettings();

            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = EncryprtionStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('notifyUsers')) {
                obj['notifyUsers'] = ApiClient.convertToType(data['notifyUsers'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EncryptionSettings</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EncryptionSettings</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }

        return true;
    }


}



/**
 * The encryption password.
 * @member {String} password
 */
EncryptionSettings.prototype['password'] = undefined;

/**
 * @member {module:models/EncryprtionStatus} status
 */
EncryptionSettings.prototype['status'] = undefined;

/**
 * Specifies if the users will be notified about the encryption operation or not.
 * @member {Boolean} notifyUsers
 */
EncryptionSettings.prototype['notifyUsers'] = undefined;






export default EncryptionSettings;

