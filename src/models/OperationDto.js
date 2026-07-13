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
import ApiDateTime from './ApiDateTime';

/**
 * The OperationDto model module.
 * @module models/OperationDto
 * @version 3.2.0
 */
class OperationDto {
    /**
     * Constructs a new <code>OperationDto</code>.
     * Represents an operation.
     * @alias module:models/OperationDto
     */
    constructor() { 
        
        OperationDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OperationDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/OperationDto} obj Optional instance to populate.
     * @return {module:models/OperationDto} The populated <code>OperationDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OperationDto();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiDateTime.constructFromObject(data['date']);
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = ApiClient.convertToType(data['service'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('serviceUnit')) {
                obj['serviceUnit'] = ApiClient.convertToType(data['serviceUnit'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('credit')) {
                obj['credit'] = ApiClient.convertToType(data['credit'], 'Number');
            }
            if (data.hasOwnProperty('withdrawal')) {
                obj['withdrawal'] = ApiClient.convertToType(data['withdrawal'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OperationDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OperationDto</code>.
     */
    static validateJSON(data) {
        // validate the optional field `date`
        if (data['date']) { // data not null
          ApiDateTime.validateJSON(data['date']);
        }
        // ensure the json data is a string
        if (data['service'] && !(typeof data['service'] === 'string' || data['service'] instanceof String)) {
            throw new Error("Expected the field `service` to be a primitive type in the JSON string but got " + data['service']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['serviceUnit'] && !(typeof data['serviceUnit'] === 'string' || data['serviceUnit'] instanceof String)) {
            throw new Error("Expected the field `serviceUnit` to be a primitive type in the JSON string but got " + data['serviceUnit']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }

        return true;
    }


}



/**
 * @member {module:models/ApiDateTime} date
 */
OperationDto.prototype['date'] = undefined;

/**
 * Service related to the operation.
 * @member {String} service
 */
OperationDto.prototype['service'] = undefined;

/**
 * Brief description of the operation.
 * @member {String} description
 */
OperationDto.prototype['description'] = undefined;

/**
 * Unit of the service.
 * @member {String} serviceUnit
 */
OperationDto.prototype['serviceUnit'] = undefined;

/**
 * Quantity of the service used.
 * @member {Number} quantity
 */
OperationDto.prototype['quantity'] = undefined;

/**
 * The three-character ISO 4217 currency symbol of the operation.
 * @member {String} currency
 */
OperationDto.prototype['currency'] = undefined;

/**
 * Credit amount of the operation.
 * @member {Number} credit
 */
OperationDto.prototype['credit'] = undefined;

/**
 * Withdrawal amount of the operation.
 * @member {Number} withdrawal
 */
OperationDto.prototype['withdrawal'] = undefined;






export default OperationDto;

