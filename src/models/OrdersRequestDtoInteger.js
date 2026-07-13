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
import OrdersItemRequestDtoInteger from './OrdersItemRequestDtoInteger';

/**
 * The OrdersRequestDtoInteger model module.
 * @module models/OrdersRequestDtoInteger
 * @version 3.2.0
 */
class OrdersRequestDtoInteger {
    /**
     * Constructs a new <code>OrdersRequestDtoInteger</code>.
     * The collection of items to be ordered.
     * @alias module:models/OrdersRequestDtoInteger
     */
    constructor() { 
        
        OrdersRequestDtoInteger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrdersRequestDtoInteger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/OrdersRequestDtoInteger} obj Optional instance to populate.
     * @return {module:models/OrdersRequestDtoInteger} The populated <code>OrdersRequestDtoInteger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrdersRequestDtoInteger();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [OrdersItemRequestDtoInteger]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrdersRequestDtoInteger</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrdersRequestDtoInteger</code>.
     */
    static validateJSON(data) {
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                OrdersItemRequestDtoInteger.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The list of items with their ordering information.
 * @member {Array.<module:models/OrdersItemRequestDtoInteger>} items
 */
OrdersRequestDtoInteger.prototype['items'] = undefined;






export default OrdersRequestDtoInteger;

