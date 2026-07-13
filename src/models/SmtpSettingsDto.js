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
 * The SmtpSettingsDto model module.
 * @module models/SmtpSettingsDto
 * @version 3.2.0
 */
class SmtpSettingsDto {
    /**
     * Constructs a new <code>SmtpSettingsDto</code>.
     * The SMTP settings parameters.
     * @alias module:models/SmtpSettingsDto
     */
    constructor() { 
        
        SmtpSettingsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SmtpSettingsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SmtpSettingsDto} obj Optional instance to populate.
     * @return {module:models/SmtpSettingsDto} The populated <code>SmtpSettingsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmtpSettingsDto();

            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('senderAddress')) {
                obj['senderAddress'] = ApiClient.convertToType(data['senderAddress'], 'String');
            }
            if (data.hasOwnProperty('senderDisplayName')) {
                obj['senderDisplayName'] = ApiClient.convertToType(data['senderDisplayName'], 'String');
            }
            if (data.hasOwnProperty('credentialsUserName')) {
                obj['credentialsUserName'] = ApiClient.convertToType(data['credentialsUserName'], 'String');
            }
            if (data.hasOwnProperty('credentialsUserPassword')) {
                obj['credentialsUserPassword'] = ApiClient.convertToType(data['credentialsUserPassword'], 'String');
            }
            if (data.hasOwnProperty('enableSSL')) {
                obj['enableSSL'] = ApiClient.convertToType(data['enableSSL'], 'Boolean');
            }
            if (data.hasOwnProperty('enableAuth')) {
                obj['enableAuth'] = ApiClient.convertToType(data['enableAuth'], 'Boolean');
            }
            if (data.hasOwnProperty('useNtlm')) {
                obj['useNtlm'] = ApiClient.convertToType(data['useNtlm'], 'Boolean');
            }
            if (data.hasOwnProperty('isDefaultSettings')) {
                obj['isDefaultSettings'] = ApiClient.convertToType(data['isDefaultSettings'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SmtpSettingsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SmtpSettingsDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['host'] && !(typeof data['host'] === 'string' || data['host'] instanceof String)) {
            throw new Error("Expected the field `host` to be a primitive type in the JSON string but got " + data['host']);
        }
        // ensure the json data is a string
        if (data['senderAddress'] && !(typeof data['senderAddress'] === 'string' || data['senderAddress'] instanceof String)) {
            throw new Error("Expected the field `senderAddress` to be a primitive type in the JSON string but got " + data['senderAddress']);
        }
        // ensure the json data is a string
        if (data['senderDisplayName'] && !(typeof data['senderDisplayName'] === 'string' || data['senderDisplayName'] instanceof String)) {
            throw new Error("Expected the field `senderDisplayName` to be a primitive type in the JSON string but got " + data['senderDisplayName']);
        }
        // ensure the json data is a string
        if (data['credentialsUserName'] && !(typeof data['credentialsUserName'] === 'string' || data['credentialsUserName'] instanceof String)) {
            throw new Error("Expected the field `credentialsUserName` to be a primitive type in the JSON string but got " + data['credentialsUserName']);
        }
        // ensure the json data is a string
        if (data['credentialsUserPassword'] && !(typeof data['credentialsUserPassword'] === 'string' || data['credentialsUserPassword'] instanceof String)) {
            throw new Error("Expected the field `credentialsUserPassword` to be a primitive type in the JSON string but got " + data['credentialsUserPassword']);
        }

        return true;
    }


}



/**
 * The SMTP host.
 * @member {String} host
 */
SmtpSettingsDto.prototype['host'] = undefined;

/**
 * The SMTP port.
 * @member {Number} port
 */
SmtpSettingsDto.prototype['port'] = undefined;

/**
 * The sender address.
 * @member {String} senderAddress
 */
SmtpSettingsDto.prototype['senderAddress'] = undefined;

/**
 * The sender display name.
 * @member {String} senderDisplayName
 */
SmtpSettingsDto.prototype['senderDisplayName'] = undefined;

/**
 * The credentials username.
 * @member {String} credentialsUserName
 */
SmtpSettingsDto.prototype['credentialsUserName'] = undefined;

/**
 * The credentials user password.
 * @member {String} credentialsUserPassword
 */
SmtpSettingsDto.prototype['credentialsUserPassword'] = undefined;

/**
 * Specifies whether the SSL is enabled or not.
 * @member {Boolean} enableSSL
 */
SmtpSettingsDto.prototype['enableSSL'] = undefined;

/**
 * Specifies whether the authentication is enabled or not.
 * @member {Boolean} enableAuth
 */
SmtpSettingsDto.prototype['enableAuth'] = undefined;

/**
 * Specifies whether to use NTLM or not.
 * @member {Boolean} useNtlm
 */
SmtpSettingsDto.prototype['useNtlm'] = undefined;

/**
 * Specifies if the current settings are default or not.
 * @member {Boolean} isDefaultSettings
 */
SmtpSettingsDto.prototype['isDefaultSettings'] = undefined;






export default SmtpSettingsDto;

