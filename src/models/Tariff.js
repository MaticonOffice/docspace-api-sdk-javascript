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
import Quota from './Quota';
import TariffState from './TariffState';

/**
 * The Tariff model module.
 * @module models/Tariff
 * @version 3.2.0
 */
class Tariff {
    /**
     * Constructs a new <code>Tariff</code>.
     * The tariff parameters.
     * @alias module:models/Tariff
     */
    constructor() { 
        
        Tariff.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Tariff</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/Tariff} obj Optional instance to populate.
     * @return {module:models/Tariff} The populated <code>Tariff</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Tariff();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = TariffState.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('dueDate')) {
                obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'Date');
            }
            if (data.hasOwnProperty('delayDueDate')) {
                obj['delayDueDate'] = ApiClient.convertToType(data['delayDueDate'], 'Date');
            }
            if (data.hasOwnProperty('licenseDate')) {
                obj['licenseDate'] = ApiClient.convertToType(data['licenseDate'], 'Date');
            }
            if (data.hasOwnProperty('customerId')) {
                obj['customerId'] = ApiClient.convertToType(data['customerId'], 'String');
            }
            if (data.hasOwnProperty('quotas')) {
                obj['quotas'] = ApiClient.convertToType(data['quotas'], [Quota]);
            }
            if (data.hasOwnProperty('overdueQuotas')) {
                obj['overdueQuotas'] = ApiClient.convertToType(data['overdueQuotas'], [Quota]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Tariff</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Tariff</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['customerId'] && !(typeof data['customerId'] === 'string' || data['customerId'] instanceof String)) {
            throw new Error("Expected the field `customerId` to be a primitive type in the JSON string but got " + data['customerId']);
        }
        if (data['quotas']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['quotas'])) {
                throw new Error("Expected the field `quotas` to be an array in the JSON data but got " + data['quotas']);
            }
            // validate the optional field `quotas` (array)
            for (const item of data['quotas']) {
                Quota.validateJSON(item);
            };
        }
        if (data['overdueQuotas']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['overdueQuotas'])) {
                throw new Error("Expected the field `overdueQuotas` to be an array in the JSON data but got " + data['overdueQuotas']);
            }
            // validate the optional field `overdueQuotas` (array)
            for (const item of data['overdueQuotas']) {
                Quota.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The tariff ID.
 * @member {Number} id
 */
Tariff.prototype['id'] = undefined;

/**
 * @member {module:models/TariffState} state
 */
Tariff.prototype['state'] = undefined;

/**
 * The tariff due date.
 * @member {Date} dueDate
 */
Tariff.prototype['dueDate'] = undefined;

/**
 * The tariff delay due date.
 * @member {Date} delayDueDate
 */
Tariff.prototype['delayDueDate'] = undefined;

/**
 * The tariff license date.
 * @member {Date} licenseDate
 */
Tariff.prototype['licenseDate'] = undefined;

/**
 * The tariff customer ID.
 * @member {String} customerId
 */
Tariff.prototype['customerId'] = undefined;

/**
 * The list of tariff quotas.
 * @member {Array.<module:models/Quota>} quotas
 */
Tariff.prototype['quotas'] = undefined;

/**
 * The list of overdue tariff quotas.
 * @member {Array.<module:models/Quota>} overdueQuotas
 */
Tariff.prototype['overdueQuotas'] = undefined;






export default Tariff;

