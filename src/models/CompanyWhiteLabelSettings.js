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
 * The CompanyWhiteLabelSettings model module.
 * @module models/CompanyWhiteLabelSettings
 * @version 3.2.0
 */
class CompanyWhiteLabelSettings {
    /**
     * Constructs a new <code>CompanyWhiteLabelSettings</code>.
     * The company white label settings.
     * @alias module:models/CompanyWhiteLabelSettings
     */
    constructor() { 
        
        CompanyWhiteLabelSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompanyWhiteLabelSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CompanyWhiteLabelSettings} obj Optional instance to populate.
     * @return {module:models/CompanyWhiteLabelSettings} The populated <code>CompanyWhiteLabelSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompanyWhiteLabelSettings();

            if (data.hasOwnProperty('companyName')) {
                obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
            }
            if (data.hasOwnProperty('site')) {
                obj['site'] = ApiClient.convertToType(data['site'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('IsLicensor')) {
                obj['IsLicensor'] = ApiClient.convertToType(data['IsLicensor'], 'Boolean');
            }
            if (data.hasOwnProperty('lastModified')) {
                obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CompanyWhiteLabelSettings</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CompanyWhiteLabelSettings</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['companyName'] && !(typeof data['companyName'] === 'string' || data['companyName'] instanceof String)) {
            throw new Error("Expected the field `companyName` to be a primitive type in the JSON string but got " + data['companyName']);
        }
        // ensure the json data is a string
        if (data['site'] && !(typeof data['site'] === 'string' || data['site'] instanceof String)) {
            throw new Error("Expected the field `site` to be a primitive type in the JSON string but got " + data['site']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is a string
        if (data['phone'] && !(typeof data['phone'] === 'string' || data['phone'] instanceof String)) {
            throw new Error("Expected the field `phone` to be a primitive type in the JSON string but got " + data['phone']);
        }

        return true;
    }


}



/**
 * The company name.
 * @member {String} companyName
 */
CompanyWhiteLabelSettings.prototype['companyName'] = undefined;

/**
 * The company site.
 * @member {String} site
 */
CompanyWhiteLabelSettings.prototype['site'] = undefined;

/**
 * The company email address.
 * @member {String} email
 */
CompanyWhiteLabelSettings.prototype['email'] = undefined;

/**
 * The company address.
 * @member {String} address
 */
CompanyWhiteLabelSettings.prototype['address'] = undefined;

/**
 * The company phone number.
 * @member {String} phone
 */
CompanyWhiteLabelSettings.prototype['phone'] = undefined;

/**
 * Specifies if a company is a licensor or not.
 * @member {Boolean} IsLicensor
 */
CompanyWhiteLabelSettings.prototype['IsLicensor'] = undefined;

/**
 * @member {Date} lastModified
 */
CompanyWhiteLabelSettings.prototype['lastModified'] = undefined;






export default CompanyWhiteLabelSettings;

