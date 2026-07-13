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
 * The PaymentCalculation model module.
 * @module models/PaymentCalculation
 * @version 3.2.0
 */
class PaymentCalculation {
    /**
     * Constructs a new <code>PaymentCalculation</code>.
     * The payment calculation.
     * @alias module:models/PaymentCalculation
     */
    constructor() { 
        
        PaymentCalculation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentCalculation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/PaymentCalculation} obj Optional instance to populate.
     * @return {module:models/PaymentCalculation} The populated <code>PaymentCalculation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentCalculation();

            if (data.hasOwnProperty('operationId')) {
                obj['operationId'] = ApiClient.convertToType(data['operationId'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymentCalculation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymentCalculation</code>.
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
 * Unique identifier of the operation.
 * @member {Number} operationId
 */
PaymentCalculation.prototype['operationId'] = undefined;

/**
 * The amount of the payment calculation.
 * @member {Number} amount
 */
PaymentCalculation.prototype['amount'] = undefined;

/**
 * The three-character ISO 4217 currency symbol of the payment calculation.
 * @member {String} currency
 */
PaymentCalculation.prototype['currency'] = undefined;

/**
 * The quantity associated with the payment calculation.
 * @member {Number} quantity
 */
PaymentCalculation.prototype['quantity'] = undefined;






export default PaymentCalculation;

