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
 * The CurrenciesDto model module.
 * @module models/CurrenciesDto
 * @version 3.2.0
 */
class CurrenciesDto {
    /**
     * Constructs a new <code>CurrenciesDto</code>.
     * The currencies parameters.
     * @alias module:models/CurrenciesDto
     */
    constructor() { 
        
        CurrenciesDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CurrenciesDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CurrenciesDto} obj Optional instance to populate.
     * @return {module:models/CurrenciesDto} The populated <code>CurrenciesDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CurrenciesDto();

            if (data.hasOwnProperty('isoCountryCode')) {
                obj['isoCountryCode'] = ApiClient.convertToType(data['isoCountryCode'], 'String');
            }
            if (data.hasOwnProperty('isoCurrencySymbol')) {
                obj['isoCurrencySymbol'] = ApiClient.convertToType(data['isoCurrencySymbol'], 'String');
            }
            if (data.hasOwnProperty('currencyNativeName')) {
                obj['currencyNativeName'] = ApiClient.convertToType(data['currencyNativeName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CurrenciesDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CurrenciesDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['isoCountryCode'] && !(typeof data['isoCountryCode'] === 'string' || data['isoCountryCode'] instanceof String)) {
            throw new Error("Expected the field `isoCountryCode` to be a primitive type in the JSON string but got " + data['isoCountryCode']);
        }
        // ensure the json data is a string
        if (data['isoCurrencySymbol'] && !(typeof data['isoCurrencySymbol'] === 'string' || data['isoCurrencySymbol'] instanceof String)) {
            throw new Error("Expected the field `isoCurrencySymbol` to be a primitive type in the JSON string but got " + data['isoCurrencySymbol']);
        }
        // ensure the json data is a string
        if (data['currencyNativeName'] && !(typeof data['currencyNativeName'] === 'string' || data['currencyNativeName'] instanceof String)) {
            throw new Error("Expected the field `currencyNativeName` to be a primitive type in the JSON string but got " + data['currencyNativeName']);
        }

        return true;
    }


}



/**
 * The ISO country code.
 * @member {String} isoCountryCode
 */
CurrenciesDto.prototype['isoCountryCode'] = undefined;

/**
 * The ISO currency symbol.
 * @member {String} isoCurrencySymbol
 */
CurrenciesDto.prototype['isoCurrencySymbol'] = undefined;

/**
 * The currency native name.
 * @member {String} currencyNativeName
 */
CurrenciesDto.prototype['currencyNativeName'] = undefined;






export default CurrenciesDto;

