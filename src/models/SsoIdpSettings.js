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
 * The SsoIdpSettings model module.
 * @module models/SsoIdpSettings
 * @version 3.2.0
 */
class SsoIdpSettings {
    /**
     * Constructs a new <code>SsoIdpSettings</code>.
     * The SSO IdP settings.
     * @alias module:models/SsoIdpSettings
     */
    constructor() { 
        
        SsoIdpSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SsoIdpSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SsoIdpSettings} obj Optional instance to populate.
     * @return {module:models/SsoIdpSettings} The populated <code>SsoIdpSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SsoIdpSettings();

            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('ssoUrl')) {
                obj['ssoUrl'] = ApiClient.convertToType(data['ssoUrl'], 'String');
            }
            if (data.hasOwnProperty('ssoBinding')) {
                obj['ssoBinding'] = ApiClient.convertToType(data['ssoBinding'], 'String');
            }
            if (data.hasOwnProperty('sloUrl')) {
                obj['sloUrl'] = ApiClient.convertToType(data['sloUrl'], 'String');
            }
            if (data.hasOwnProperty('sloBinding')) {
                obj['sloBinding'] = ApiClient.convertToType(data['sloBinding'], 'String');
            }
            if (data.hasOwnProperty('nameIdFormat')) {
                obj['nameIdFormat'] = ApiClient.convertToType(data['nameIdFormat'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SsoIdpSettings</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SsoIdpSettings</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['entityId'] && !(typeof data['entityId'] === 'string' || data['entityId'] instanceof String)) {
            throw new Error("Expected the field `entityId` to be a primitive type in the JSON string but got " + data['entityId']);
        }
        // ensure the json data is a string
        if (data['ssoUrl'] && !(typeof data['ssoUrl'] === 'string' || data['ssoUrl'] instanceof String)) {
            throw new Error("Expected the field `ssoUrl` to be a primitive type in the JSON string but got " + data['ssoUrl']);
        }
        // ensure the json data is a string
        if (data['ssoBinding'] && !(typeof data['ssoBinding'] === 'string' || data['ssoBinding'] instanceof String)) {
            throw new Error("Expected the field `ssoBinding` to be a primitive type in the JSON string but got " + data['ssoBinding']);
        }
        // ensure the json data is a string
        if (data['sloUrl'] && !(typeof data['sloUrl'] === 'string' || data['sloUrl'] instanceof String)) {
            throw new Error("Expected the field `sloUrl` to be a primitive type in the JSON string but got " + data['sloUrl']);
        }
        // ensure the json data is a string
        if (data['sloBinding'] && !(typeof data['sloBinding'] === 'string' || data['sloBinding'] instanceof String)) {
            throw new Error("Expected the field `sloBinding` to be a primitive type in the JSON string but got " + data['sloBinding']);
        }
        // ensure the json data is a string
        if (data['nameIdFormat'] && !(typeof data['nameIdFormat'] === 'string' || data['nameIdFormat'] instanceof String)) {
            throw new Error("Expected the field `nameIdFormat` to be a primitive type in the JSON string but got " + data['nameIdFormat']);
        }

        return true;
    }


}



/**
 * The entity ID.
 * @member {String} entityId
 */
SsoIdpSettings.prototype['entityId'] = undefined;

/**
 * The SSO URL.
 * @member {String} ssoUrl
 */
SsoIdpSettings.prototype['ssoUrl'] = undefined;

/**
 * The SSO binding.
 * @member {String} ssoBinding
 */
SsoIdpSettings.prototype['ssoBinding'] = undefined;

/**
 * The SLO URL.
 * @member {String} sloUrl
 */
SsoIdpSettings.prototype['sloUrl'] = undefined;

/**
 * The SLO binding.
 * @member {String} sloBinding
 */
SsoIdpSettings.prototype['sloBinding'] = undefined;

/**
 * The name ID format.
 * @member {String} nameIdFormat
 */
SsoIdpSettings.prototype['nameIdFormat'] = undefined;






export default SsoIdpSettings;

