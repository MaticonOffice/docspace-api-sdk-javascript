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
 * The SetupCode model module.
 * @module models/SetupCode
 * @version 3.2.0
 */
class SetupCode {
    /**
     * Constructs a new <code>SetupCode</code>.
     * @alias module:models/SetupCode
     */
    constructor() { 
        
        SetupCode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SetupCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SetupCode} obj Optional instance to populate.
     * @return {module:models/SetupCode} The populated <code>SetupCode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetupCode();

            if (data.hasOwnProperty('account')) {
                obj['account'] = ApiClient.convertToType(data['account'], 'String');
            }
            if (data.hasOwnProperty('manualEntryKey')) {
                obj['manualEntryKey'] = ApiClient.convertToType(data['manualEntryKey'], 'String');
            }
            if (data.hasOwnProperty('qrCodeSetupImageUrl')) {
                obj['qrCodeSetupImageUrl'] = ApiClient.convertToType(data['qrCodeSetupImageUrl'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SetupCode</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SetupCode</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['account'] && !(typeof data['account'] === 'string' || data['account'] instanceof String)) {
            throw new Error("Expected the field `account` to be a primitive type in the JSON string but got " + data['account']);
        }
        // ensure the json data is a string
        if (data['manualEntryKey'] && !(typeof data['manualEntryKey'] === 'string' || data['manualEntryKey'] instanceof String)) {
            throw new Error("Expected the field `manualEntryKey` to be a primitive type in the JSON string but got " + data['manualEntryKey']);
        }
        // ensure the json data is a string
        if (data['qrCodeSetupImageUrl'] && !(typeof data['qrCodeSetupImageUrl'] === 'string' || data['qrCodeSetupImageUrl'] instanceof String)) {
            throw new Error("Expected the field `qrCodeSetupImageUrl` to be a primitive type in the JSON string but got " + data['qrCodeSetupImageUrl']);
        }

        return true;
    }


}



/**
 * @member {String} account
 */
SetupCode.prototype['account'] = undefined;

/**
 * @member {String} manualEntryKey
 */
SetupCode.prototype['manualEntryKey'] = undefined;

/**
 * @member {String} qrCodeSetupImageUrl
 */
SetupCode.prototype['qrCodeSetupImageUrl'] = undefined;






export default SetupCode;

