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
import CurrentLicenseInfo from './CurrentLicenseInfo';

/**
 * The PaymentSettingsDto model module.
 * @module models/PaymentSettingsDto
 * @version 3.2.0
 */
class PaymentSettingsDto {
    /**
     * Constructs a new <code>PaymentSettingsDto</code>.
     * The payment settings parameters.
     * @alias module:models/PaymentSettingsDto
     */
    constructor() { 
        
        PaymentSettingsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentSettingsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/PaymentSettingsDto} obj Optional instance to populate.
     * @return {module:models/PaymentSettingsDto} The populated <code>PaymentSettingsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentSettingsDto();

            if (data.hasOwnProperty('salesEmail')) {
                obj['salesEmail'] = ApiClient.convertToType(data['salesEmail'], 'String');
            }
            if (data.hasOwnProperty('feedbackAndSupportUrl')) {
                obj['feedbackAndSupportUrl'] = ApiClient.convertToType(data['feedbackAndSupportUrl'], 'String');
            }
            if (data.hasOwnProperty('buyUrl')) {
                obj['buyUrl'] = ApiClient.convertToType(data['buyUrl'], 'String');
            }
            if (data.hasOwnProperty('standalone')) {
                obj['standalone'] = ApiClient.convertToType(data['standalone'], 'Boolean');
            }
            if (data.hasOwnProperty('currentLicense')) {
                obj['currentLicense'] = CurrentLicenseInfo.constructFromObject(data['currentLicense']);
            }
            if (data.hasOwnProperty('max')) {
                obj['max'] = ApiClient.convertToType(data['max'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymentSettingsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymentSettingsDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['salesEmail'] && !(typeof data['salesEmail'] === 'string' || data['salesEmail'] instanceof String)) {
            throw new Error("Expected the field `salesEmail` to be a primitive type in the JSON string but got " + data['salesEmail']);
        }
        // ensure the json data is a string
        if (data['feedbackAndSupportUrl'] && !(typeof data['feedbackAndSupportUrl'] === 'string' || data['feedbackAndSupportUrl'] instanceof String)) {
            throw new Error("Expected the field `feedbackAndSupportUrl` to be a primitive type in the JSON string but got " + data['feedbackAndSupportUrl']);
        }
        // ensure the json data is a string
        if (data['buyUrl'] && !(typeof data['buyUrl'] === 'string' || data['buyUrl'] instanceof String)) {
            throw new Error("Expected the field `buyUrl` to be a primitive type in the JSON string but got " + data['buyUrl']);
        }
        // validate the optional field `currentLicense`
        if (data['currentLicense']) { // data not null
          CurrentLicenseInfo.validateJSON(data['currentLicense']);
        }

        return true;
    }


}



/**
 * The email address for sales inquiries and support.
 * @member {String} salesEmail
 */
PaymentSettingsDto.prototype['salesEmail'] = undefined;

/**
 * The URL for accessing the feedback and support resources.
 * @member {String} feedbackAndSupportUrl
 */
PaymentSettingsDto.prototype['feedbackAndSupportUrl'] = undefined;

/**
 * The URL for purchasing or upgrading the product.
 * @member {String} buyUrl
 */
PaymentSettingsDto.prototype['buyUrl'] = undefined;

/**
 * Indicates whether the system is running in standalone mode.
 * @member {Boolean} standalone
 */
PaymentSettingsDto.prototype['standalone'] = undefined;

/**
 * @member {module:models/CurrentLicenseInfo} currentLicense
 */
PaymentSettingsDto.prototype['currentLicense'] = undefined;

/**
 * The maximum quota quantity.
 * @member {Number} max
 */
PaymentSettingsDto.prototype['max'] = undefined;






export default PaymentSettingsDto;

