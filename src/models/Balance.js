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
import SubAccount from './SubAccount';

/**
 * The Balance model module.
 * @module models/Balance
 * @version 3.2.0
 */
class Balance {
    /**
     * Constructs a new <code>Balance</code>.
     * Represents a balance with an account number and a list of sub-accounts.
     * @alias module:models/Balance
     */
    constructor() { 
        
        Balance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Balance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/Balance} obj Optional instance to populate.
     * @return {module:models/Balance} The populated <code>Balance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Balance();

            if (data.hasOwnProperty('accountNumber')) {
                obj['accountNumber'] = ApiClient.convertToType(data['accountNumber'], 'Number');
            }
            if (data.hasOwnProperty('subAccounts')) {
                obj['subAccounts'] = ApiClient.convertToType(data['subAccounts'], [SubAccount]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Balance</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Balance</code>.
     */
    static validateJSON(data) {
        if (data['subAccounts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['subAccounts'])) {
                throw new Error("Expected the field `subAccounts` to be an array in the JSON data but got " + data['subAccounts']);
            }
            // validate the optional field `subAccounts` (array)
            for (const item of data['subAccounts']) {
                SubAccount.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The account number.
 * @member {Number} accountNumber
 */
Balance.prototype['accountNumber'] = undefined;

/**
 * A list of sub-accounts.
 * @member {Array.<module:models/SubAccount>} subAccounts
 */
Balance.prototype['subAccounts'] = undefined;






export default Balance;

