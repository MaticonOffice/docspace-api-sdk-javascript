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
 * The TopUpDepositRequestDto model module.
 * @module models/TopUpDepositRequestDto
 * @version 3.2.0
 */
class TopUpDepositRequestDto {
    /**
     * Constructs a new <code>TopUpDepositRequestDto</code>.
     * Put money on deposit request parameters
     * @alias module:models/TopUpDepositRequestDto
     */
    constructor() { 
        
        TopUpDepositRequestDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TopUpDepositRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TopUpDepositRequestDto} obj Optional instance to populate.
     * @return {module:models/TopUpDepositRequestDto} The populated <code>TopUpDepositRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TopUpDepositRequestDto();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TopUpDepositRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TopUpDepositRequestDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }

        return true;
    }


}



/**
 * Amount
 * @member {Number} amount
 */
TopUpDepositRequestDto.prototype['amount'] = undefined;

/**
 * The three-character ISO 4217 currency symbol
 * @member {String} currency
 */
TopUpDepositRequestDto.prototype['currency'] = undefined;






export default TopUpDepositRequestDto;

