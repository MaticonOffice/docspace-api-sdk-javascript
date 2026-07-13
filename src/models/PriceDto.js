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
 * The PriceDto model module.
 * @module models/PriceDto
 * @version 3.2.0
 */
class PriceDto {
    /**
     * Constructs a new <code>PriceDto</code>.
     * The price parameters.
     * @alias module:models/PriceDto
     */
    constructor() { 
        
        PriceDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PriceDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/PriceDto} obj Optional instance to populate.
     * @return {module:models/PriceDto} The populated <code>PriceDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceDto();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('currencySymbol')) {
                obj['currencySymbol'] = ApiClient.convertToType(data['currencySymbol'], 'String');
            }
            if (data.hasOwnProperty('isoCurrencySymbol')) {
                obj['isoCurrencySymbol'] = ApiClient.convertToType(data['isoCurrencySymbol'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PriceDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PriceDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['currencySymbol'] && !(typeof data['currencySymbol'] === 'string' || data['currencySymbol'] instanceof String)) {
            throw new Error("Expected the field `currencySymbol` to be a primitive type in the JSON string but got " + data['currencySymbol']);
        }
        // ensure the json data is a string
        if (data['isoCurrencySymbol'] && !(typeof data['isoCurrencySymbol'] === 'string' || data['isoCurrencySymbol'] instanceof String)) {
            throw new Error("Expected the field `isoCurrencySymbol` to be a primitive type in the JSON string but got " + data['isoCurrencySymbol']);
        }

        return true;
    }


}



/**
 * The price value.
 * @member {Number} value
 */
PriceDto.prototype['value'] = undefined;

/**
 * The currency symbol.
 * @member {String} currencySymbol
 */
PriceDto.prototype['currencySymbol'] = undefined;

/**
 * The three-character ISO 4217 currency symbol.
 * @member {String} isoCurrencySymbol
 */
PriceDto.prototype['isoCurrencySymbol'] = undefined;






export default PriceDto;

