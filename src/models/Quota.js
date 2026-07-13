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
import QuotaState from './QuotaState';

/**
 * The Quota model module.
 * @module models/Quota
 * @version 3.2.0
 */
class Quota {
    /**
     * Constructs a new <code>Quota</code>.
     * The quota parameters.
     * @alias module:models/Quota
     */
    constructor() { 
        
        Quota.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Quota</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/Quota} obj Optional instance to populate.
     * @return {module:models/Quota} The populated <code>Quota</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Quota();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('wallet')) {
                obj['wallet'] = ApiClient.convertToType(data['wallet'], 'Boolean');
            }
            if (data.hasOwnProperty('dueDate')) {
                obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'Date');
            }
            if (data.hasOwnProperty('nextQuantity')) {
                obj['nextQuantity'] = ApiClient.convertToType(data['nextQuantity'], 'Number');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = QuotaState.constructFromObject(data['state']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Quota</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Quota</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The quota ID.
 * @member {Number} id
 */
Quota.prototype['id'] = undefined;

/**
 * The quota quantity.
 * @member {Number} quantity
 */
Quota.prototype['quantity'] = undefined;

/**
 * The quota applies to the wallet or not
 * @member {Boolean} wallet
 */
Quota.prototype['wallet'] = undefined;

/**
 * The quota due date.
 * @member {Date} dueDate
 */
Quota.prototype['dueDate'] = undefined;

/**
 * The quota next quantity.
 * @member {Number} nextQuantity
 */
Quota.prototype['nextQuantity'] = undefined;

/**
 * @member {module:models/QuotaState} state
 */
Quota.prototype['state'] = undefined;






export default Quota;

