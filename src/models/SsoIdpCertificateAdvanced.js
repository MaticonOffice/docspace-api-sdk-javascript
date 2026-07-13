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
 * The SsoIdpCertificateAdvanced model module.
 * @module models/SsoIdpCertificateAdvanced
 * @version 3.2.0
 */
class SsoIdpCertificateAdvanced {
    /**
     * Constructs a new <code>SsoIdpCertificateAdvanced</code>.
     * The IdP advanced certificate parameters.
     * @alias module:models/SsoIdpCertificateAdvanced
     */
    constructor() { 
        
        SsoIdpCertificateAdvanced.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SsoIdpCertificateAdvanced</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SsoIdpCertificateAdvanced} obj Optional instance to populate.
     * @return {module:models/SsoIdpCertificateAdvanced} The populated <code>SsoIdpCertificateAdvanced</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SsoIdpCertificateAdvanced();

            if (data.hasOwnProperty('verifyAlgorithm')) {
                obj['verifyAlgorithm'] = ApiClient.convertToType(data['verifyAlgorithm'], 'String');
            }
            if (data.hasOwnProperty('verifyAuthResponsesSign')) {
                obj['verifyAuthResponsesSign'] = ApiClient.convertToType(data['verifyAuthResponsesSign'], 'Boolean');
            }
            if (data.hasOwnProperty('verifyLogoutRequestsSign')) {
                obj['verifyLogoutRequestsSign'] = ApiClient.convertToType(data['verifyLogoutRequestsSign'], 'Boolean');
            }
            if (data.hasOwnProperty('verifyLogoutResponsesSign')) {
                obj['verifyLogoutResponsesSign'] = ApiClient.convertToType(data['verifyLogoutResponsesSign'], 'Boolean');
            }
            if (data.hasOwnProperty('decryptAlgorithm')) {
                obj['decryptAlgorithm'] = ApiClient.convertToType(data['decryptAlgorithm'], 'String');
            }
            if (data.hasOwnProperty('decryptAssertions')) {
                obj['decryptAssertions'] = ApiClient.convertToType(data['decryptAssertions'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SsoIdpCertificateAdvanced</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SsoIdpCertificateAdvanced</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['verifyAlgorithm'] && !(typeof data['verifyAlgorithm'] === 'string' || data['verifyAlgorithm'] instanceof String)) {
            throw new Error("Expected the field `verifyAlgorithm` to be a primitive type in the JSON string but got " + data['verifyAlgorithm']);
        }
        // ensure the json data is a string
        if (data['decryptAlgorithm'] && !(typeof data['decryptAlgorithm'] === 'string' || data['decryptAlgorithm'] instanceof String)) {
            throw new Error("Expected the field `decryptAlgorithm` to be a primitive type in the JSON string but got " + data['decryptAlgorithm']);
        }

        return true;
    }


}



/**
 * The certificate verification algorithm.
 * @member {String} verifyAlgorithm
 */
SsoIdpCertificateAdvanced.prototype['verifyAlgorithm'] = undefined;

/**
 * Specifies if the signatures of the SAML authentication responses sent to SP will be verified or not.
 * @member {Boolean} verifyAuthResponsesSign
 */
SsoIdpCertificateAdvanced.prototype['verifyAuthResponsesSign'] = undefined;

/**
 * Specifies if the signatures of the SAML logout requests sent to SP will be verified or not.
 * @member {Boolean} verifyLogoutRequestsSign
 */
SsoIdpCertificateAdvanced.prototype['verifyLogoutRequestsSign'] = undefined;

/**
 * Specifies if the signatures of the SAML logout responses sent to SP will be verified or not.
 * @member {Boolean} verifyLogoutResponsesSign
 */
SsoIdpCertificateAdvanced.prototype['verifyLogoutResponsesSign'] = undefined;

/**
 * The certificate decryption algorithm.
 * @member {String} decryptAlgorithm
 */
SsoIdpCertificateAdvanced.prototype['decryptAlgorithm'] = undefined;

/**
 * Specifies if the assertions will be decrypted or not.
 * @member {Boolean} decryptAssertions
 */
SsoIdpCertificateAdvanced.prototype['decryptAssertions'] = undefined;






export default SsoIdpCertificateAdvanced;

