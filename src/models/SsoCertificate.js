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
 * The SsoCertificate model module.
 * @module models/SsoCertificate
 * @version 3.2.0
 */
class SsoCertificate {
    /**
     * Constructs a new <code>SsoCertificate</code>.
     * The SSO certificate parameters.
     * @alias module:models/SsoCertificate
     */
    constructor() { 
        
        SsoCertificate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SsoCertificate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SsoCertificate} obj Optional instance to populate.
     * @return {module:models/SsoCertificate} The populated <code>SsoCertificate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SsoCertificate();

            if (data.hasOwnProperty('selfSigned')) {
                obj['selfSigned'] = ApiClient.convertToType(data['selfSigned'], 'Boolean');
            }
            if (data.hasOwnProperty('crt')) {
                obj['crt'] = ApiClient.convertToType(data['crt'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('domainName')) {
                obj['domainName'] = ApiClient.convertToType(data['domainName'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('expiredDate')) {
                obj['expiredDate'] = ApiClient.convertToType(data['expiredDate'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SsoCertificate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SsoCertificate</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['crt'] && !(typeof data['crt'] === 'string' || data['crt'] instanceof String)) {
            throw new Error("Expected the field `crt` to be a primitive type in the JSON string but got " + data['crt']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['action'] && !(typeof data['action'] === 'string' || data['action'] instanceof String)) {
            throw new Error("Expected the field `action` to be a primitive type in the JSON string but got " + data['action']);
        }
        // ensure the json data is a string
        if (data['domainName'] && !(typeof data['domainName'] === 'string' || data['domainName'] instanceof String)) {
            throw new Error("Expected the field `domainName` to be a primitive type in the JSON string but got " + data['domainName']);
        }

        return true;
    }


}



/**
 * Specifies if a certificate is self-signed or not.
 * @member {Boolean} selfSigned
 */
SsoCertificate.prototype['selfSigned'] = undefined;

/**
 * The CRT certificate file.
 * @member {String} crt
 */
SsoCertificate.prototype['crt'] = undefined;

/**
 * The certificate key.
 * @member {String} key
 */
SsoCertificate.prototype['key'] = undefined;

/**
 * The certificate action.
 * @member {String} action
 */
SsoCertificate.prototype['action'] = undefined;

/**
 * The certificate domain name.
 * @member {String} domainName
 */
SsoCertificate.prototype['domainName'] = undefined;

/**
 * The certificate start date.
 * @member {Date} startDate
 */
SsoCertificate.prototype['startDate'] = undefined;

/**
 * The certificate expiration date.
 * @member {Date} expiredDate
 */
SsoCertificate.prototype['expiredDate'] = undefined;






export default SsoCertificate;

