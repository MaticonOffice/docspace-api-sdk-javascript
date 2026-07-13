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
import SortedByType from './SortedByType';

/**
 * The OrderBy model module.
 * @module models/OrderBy
 * @version 3.2.0
 */
class OrderBy {
    /**
     * Constructs a new <code>OrderBy</code>.
     * The sorting parameters.
     * @alias module:models/OrderBy
     */
    constructor() { 
        
        OrderBy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderBy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/OrderBy} obj Optional instance to populate.
     * @return {module:models/OrderBy} The populated <code>OrderBy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderBy();

            if (data.hasOwnProperty('is_asc')) {
                obj['is_asc'] = ApiClient.convertToType(data['is_asc'], 'Boolean');
            }
            if (data.hasOwnProperty('property')) {
                obj['property'] = SortedByType.constructFromObject(data['property']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderBy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderBy</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Specifies if the order is ascending.
 * @member {Boolean} is_asc
 */
OrderBy.prototype['is_asc'] = undefined;

/**
 * @member {module:models/SortedByType} property
 */
OrderBy.prototype['property'] = undefined;






export default OrderBy;

