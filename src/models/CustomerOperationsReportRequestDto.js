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
 * The CustomerOperationsReportRequestDto model module.
 * @module models/CustomerOperationsReportRequestDto
 * @version 3.2.0
 */
class CustomerOperationsReportRequestDto {
    /**
     * Constructs a new <code>CustomerOperationsReportRequestDto</code>.
     * Parameters of the request for generating the report on client operations
     * @alias module:models/CustomerOperationsReportRequestDto
     */
    constructor() { 
        
        CustomerOperationsReportRequestDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerOperationsReportRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CustomerOperationsReportRequestDto} obj Optional instance to populate.
     * @return {module:models/CustomerOperationsReportRequestDto} The populated <code>CustomerOperationsReportRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerOperationsReportRequestDto();

            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
            }
            if (data.hasOwnProperty('credit')) {
                obj['credit'] = ApiClient.convertToType(data['credit'], 'Boolean');
            }
            if (data.hasOwnProperty('withdrawal')) {
                obj['withdrawal'] = ApiClient.convertToType(data['withdrawal'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomerOperationsReportRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomerOperationsReportRequestDto</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Start date
 * @member {Date} startDate
 */
CustomerOperationsReportRequestDto.prototype['startDate'] = undefined;

/**
 * End date
 * @member {Date} endDate
 */
CustomerOperationsReportRequestDto.prototype['endDate'] = undefined;

/**
 * Include credit operations
 * @member {Boolean} credit
 */
CustomerOperationsReportRequestDto.prototype['credit'] = undefined;

/**
 * Include withdrawal operations
 * @member {Boolean} withdrawal
 */
CustomerOperationsReportRequestDto.prototype['withdrawal'] = undefined;






export default CustomerOperationsReportRequestDto;

