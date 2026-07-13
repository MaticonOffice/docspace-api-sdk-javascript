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
 * The CapabilitiesDto model module.
 * @module models/CapabilitiesDto
 * @version 3.2.0
 */
class CapabilitiesDto {
    /**
     * Constructs a new <code>CapabilitiesDto</code>.
     * The capabilities parameters.
     * @alias module:models/CapabilitiesDto
     */
    constructor() { 
        
        CapabilitiesDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CapabilitiesDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CapabilitiesDto} obj Optional instance to populate.
     * @return {module:models/CapabilitiesDto} The populated <code>CapabilitiesDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CapabilitiesDto();

            if (data.hasOwnProperty('ldapEnabled')) {
                obj['ldapEnabled'] = ApiClient.convertToType(data['ldapEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('ldapDomain')) {
                obj['ldapDomain'] = ApiClient.convertToType(data['ldapDomain'], 'String');
            }
            if (data.hasOwnProperty('providers')) {
                obj['providers'] = ApiClient.convertToType(data['providers'], ['String']);
            }
            if (data.hasOwnProperty('ssoLabel')) {
                obj['ssoLabel'] = ApiClient.convertToType(data['ssoLabel'], 'String');
            }
            if (data.hasOwnProperty('oauthEnabled')) {
                obj['oauthEnabled'] = ApiClient.convertToType(data['oauthEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('ssoUrl')) {
                obj['ssoUrl'] = ApiClient.convertToType(data['ssoUrl'], 'String');
            }
            if (data.hasOwnProperty('identityServerEnabled')) {
                obj['identityServerEnabled'] = ApiClient.convertToType(data['identityServerEnabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CapabilitiesDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CapabilitiesDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ldapDomain'] && !(typeof data['ldapDomain'] === 'string' || data['ldapDomain'] instanceof String)) {
            throw new Error("Expected the field `ldapDomain` to be a primitive type in the JSON string but got " + data['ldapDomain']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['providers'])) {
            throw new Error("Expected the field `providers` to be an array in the JSON data but got " + data['providers']);
        }
        // ensure the json data is a string
        if (data['ssoLabel'] && !(typeof data['ssoLabel'] === 'string' || data['ssoLabel'] instanceof String)) {
            throw new Error("Expected the field `ssoLabel` to be a primitive type in the JSON string but got " + data['ssoLabel']);
        }
        // ensure the json data is a string
        if (data['ssoUrl'] && !(typeof data['ssoUrl'] === 'string' || data['ssoUrl'] instanceof String)) {
            throw new Error("Expected the field `ssoUrl` to be a primitive type in the JSON string but got " + data['ssoUrl']);
        }

        return true;
    }


}



/**
 * Specifies if the LDAP settings are enabled or not.
 * @member {Boolean} ldapEnabled
 */
CapabilitiesDto.prototype['ldapEnabled'] = undefined;

/**
 * The LDAP domain.
 * @member {String} ldapDomain
 */
CapabilitiesDto.prototype['ldapDomain'] = undefined;

/**
 * The list of providers.
 * @member {Array.<String>} providers
 */
CapabilitiesDto.prototype['providers'] = undefined;

/**
 * The SP login label.
 * @member {String} ssoLabel
 */
CapabilitiesDto.prototype['ssoLabel'] = undefined;

/**
 * Specifies if OAuth is enabled or not.
 * @member {Boolean} oauthEnabled
 */
CapabilitiesDto.prototype['oauthEnabled'] = undefined;

/**
 * The SSO URL. If this parameter is empty, then the SSO settings are disabled.
 * @member {String} ssoUrl
 */
CapabilitiesDto.prototype['ssoUrl'] = undefined;

/**
 * Specifies if identity server is enabled or not
 * @member {Boolean} identityServerEnabled
 */
CapabilitiesDto.prototype['identityServerEnabled'] = undefined;






export default CapabilitiesDto;

