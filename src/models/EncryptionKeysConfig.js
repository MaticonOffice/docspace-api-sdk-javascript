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
 * The EncryptionKeysConfig model module.
 * @module models/EncryptionKeysConfig
 * @version 3.2.0
 */
class EncryptionKeysConfig {
    /**
     * Constructs a new <code>EncryptionKeysConfig</code>.
     * The encryption keys of the editor configuration.
     * @alias module:models/EncryptionKeysConfig
     */
    constructor() { 
        
        EncryptionKeysConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EncryptionKeysConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/EncryptionKeysConfig} obj Optional instance to populate.
     * @return {module:models/EncryptionKeysConfig} The populated <code>EncryptionKeysConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EncryptionKeysConfig();

            if (data.hasOwnProperty('cryptoEngineId')) {
                obj['cryptoEngineId'] = ApiClient.convertToType(data['cryptoEngineId'], 'String');
            }
            if (data.hasOwnProperty('privateKeyEnc')) {
                obj['privateKeyEnc'] = ApiClient.convertToType(data['privateKeyEnc'], 'String');
            }
            if (data.hasOwnProperty('publicKey')) {
                obj['publicKey'] = ApiClient.convertToType(data['publicKey'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EncryptionKeysConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EncryptionKeysConfig</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['cryptoEngineId'] && !(typeof data['cryptoEngineId'] === 'string' || data['cryptoEngineId'] instanceof String)) {
            throw new Error("Expected the field `cryptoEngineId` to be a primitive type in the JSON string but got " + data['cryptoEngineId']);
        }
        // ensure the json data is a string
        if (data['privateKeyEnc'] && !(typeof data['privateKeyEnc'] === 'string' || data['privateKeyEnc'] instanceof String)) {
            throw new Error("Expected the field `privateKeyEnc` to be a primitive type in the JSON string but got " + data['privateKeyEnc']);
        }
        // ensure the json data is a string
        if (data['publicKey'] && !(typeof data['publicKey'] === 'string' || data['publicKey'] instanceof String)) {
            throw new Error("Expected the field `publicKey` to be a primitive type in the JSON string but got " + data['publicKey']);
        }

        return true;
    }


}



/**
 * The crypto engine ID of the encryption key.
 * @member {String} cryptoEngineId
 */
EncryptionKeysConfig.prototype['cryptoEngineId'] = undefined;

/**
 * The private key.
 * @member {String} privateKeyEnc
 */
EncryptionKeysConfig.prototype['privateKeyEnc'] = undefined;

/**
 * The public key.
 * @member {String} publicKey
 */
EncryptionKeysConfig.prototype['publicKey'] = undefined;






export default EncryptionKeysConfig;

