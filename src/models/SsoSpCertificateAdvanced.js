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
 * The SsoSpCertificateAdvanced model module.
 * @module models/SsoSpCertificateAdvanced
 * @version 3.2.0
 */
class SsoSpCertificateAdvanced {
    /**
     * Constructs a new <code>SsoSpCertificateAdvanced</code>.
     * The SP advanced certificate parameters.
     * @alias module:models/SsoSpCertificateAdvanced
     */
    constructor() { 
        
        SsoSpCertificateAdvanced.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SsoSpCertificateAdvanced</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SsoSpCertificateAdvanced} obj Optional instance to populate.
     * @return {module:models/SsoSpCertificateAdvanced} The populated <code>SsoSpCertificateAdvanced</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SsoSpCertificateAdvanced();

            if (data.hasOwnProperty('signingAlgorithm')) {
                obj['signingAlgorithm'] = ApiClient.convertToType(data['signingAlgorithm'], 'String');
            }
            if (data.hasOwnProperty('signAuthRequests')) {
                obj['signAuthRequests'] = ApiClient.convertToType(data['signAuthRequests'], 'Boolean');
            }
            if (data.hasOwnProperty('signLogoutRequests')) {
                obj['signLogoutRequests'] = ApiClient.convertToType(data['signLogoutRequests'], 'Boolean');
            }
            if (data.hasOwnProperty('signLogoutResponses')) {
                obj['signLogoutResponses'] = ApiClient.convertToType(data['signLogoutResponses'], 'Boolean');
            }
            if (data.hasOwnProperty('encryptAlgorithm')) {
                obj['encryptAlgorithm'] = ApiClient.convertToType(data['encryptAlgorithm'], 'String');
            }
            if (data.hasOwnProperty('decryptAlgorithm')) {
                obj['decryptAlgorithm'] = ApiClient.convertToType(data['decryptAlgorithm'], 'String');
            }
            if (data.hasOwnProperty('encryptAssertions')) {
                obj['encryptAssertions'] = ApiClient.convertToType(data['encryptAssertions'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SsoSpCertificateAdvanced</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SsoSpCertificateAdvanced</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['signingAlgorithm'] && !(typeof data['signingAlgorithm'] === 'string' || data['signingAlgorithm'] instanceof String)) {
            throw new Error("Expected the field `signingAlgorithm` to be a primitive type in the JSON string but got " + data['signingAlgorithm']);
        }
        // ensure the json data is a string
        if (data['encryptAlgorithm'] && !(typeof data['encryptAlgorithm'] === 'string' || data['encryptAlgorithm'] instanceof String)) {
            throw new Error("Expected the field `encryptAlgorithm` to be a primitive type in the JSON string but got " + data['encryptAlgorithm']);
        }
        // ensure the json data is a string
        if (data['decryptAlgorithm'] && !(typeof data['decryptAlgorithm'] === 'string' || data['decryptAlgorithm'] instanceof String)) {
            throw new Error("Expected the field `decryptAlgorithm` to be a primitive type in the JSON string but got " + data['decryptAlgorithm']);
        }

        return true;
    }


}



/**
 * The certificate signing algorithm.
 * @member {String} signingAlgorithm
 */
SsoSpCertificateAdvanced.prototype['signingAlgorithm'] = undefined;

/**
 * Specifies if SP will sign the SAML authentication requests sent to IdP or not.
 * @member {Boolean} signAuthRequests
 */
SsoSpCertificateAdvanced.prototype['signAuthRequests'] = undefined;

/**
 * Specifies if SP will sign the SAML logout requests sent to IdP or not.
 * @member {Boolean} signLogoutRequests
 */
SsoSpCertificateAdvanced.prototype['signLogoutRequests'] = undefined;

/**
 * Specifies if SP will sign the SAML logout responses sent to IdP or not.
 * @member {Boolean} signLogoutResponses
 */
SsoSpCertificateAdvanced.prototype['signLogoutResponses'] = undefined;

/**
 * The certificate encryption algorithm.
 * @member {String} encryptAlgorithm
 */
SsoSpCertificateAdvanced.prototype['encryptAlgorithm'] = undefined;

/**
 * The certificate decryption algorithm.
 * @member {String} decryptAlgorithm
 */
SsoSpCertificateAdvanced.prototype['decryptAlgorithm'] = undefined;

/**
 * Specifies if the assertions will be encrypted or not.
 * @member {Boolean} encryptAssertions
 */
SsoSpCertificateAdvanced.prototype['encryptAssertions'] = undefined;






export default SsoSpCertificateAdvanced;

