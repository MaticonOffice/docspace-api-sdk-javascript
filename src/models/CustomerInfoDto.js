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
import EmployeeDto from './EmployeeDto';
import PaymentMethodStatus from './PaymentMethodStatus';

/**
 * The CustomerInfoDto model module.
 * @module models/CustomerInfoDto
 * @version 3.2.0
 */
class CustomerInfoDto {
    /**
     * Constructs a new <code>CustomerInfoDto</code>.
     * The customer information.
     * @alias module:models/CustomerInfoDto
     */
    constructor() { 
        
        CustomerInfoDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerInfoDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CustomerInfoDto} obj Optional instance to populate.
     * @return {module:models/CustomerInfoDto} The populated <code>CustomerInfoDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerInfoDto();

            if (data.hasOwnProperty('portalId')) {
                obj['portalId'] = ApiClient.convertToType(data['portalId'], 'String');
            }
            if (data.hasOwnProperty('paymentMethodStatus')) {
                obj['paymentMethodStatus'] = PaymentMethodStatus.constructFromObject(data['paymentMethodStatus']);
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('payer')) {
                obj['payer'] = EmployeeDto.constructFromObject(data['payer']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomerInfoDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomerInfoDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['portalId'] && !(typeof data['portalId'] === 'string' || data['portalId'] instanceof String)) {
            throw new Error("Expected the field `portalId` to be a primitive type in the JSON string but got " + data['portalId']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // validate the optional field `payer`
        if (data['payer']) { // data not null
          EmployeeDto.validateJSON(data['payer']);
        }

        return true;
    }


}



/**
 * The portal ID.
 * @member {String} portalId
 */
CustomerInfoDto.prototype['portalId'] = undefined;

/**
 * @member {module:models/PaymentMethodStatus} paymentMethodStatus
 */
CustomerInfoDto.prototype['paymentMethodStatus'] = undefined;

/**
 * The email address of the customer.
 * @member {String} email
 */
CustomerInfoDto.prototype['email'] = undefined;

/**
 * @member {module:models/EmployeeDto} payer
 */
CustomerInfoDto.prototype['payer'] = undefined;






export default CustomerInfoDto;

