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
 * The SmtpOperationStatusRequestsDto model module.
 * @module models/SmtpOperationStatusRequestsDto
 * @version 3.2.0
 */
class SmtpOperationStatusRequestsDto {
    /**
     * Constructs a new <code>SmtpOperationStatusRequestsDto</code>.
     * The request parameters for tracking SMTP (Simple Mail Transfer Protocol) operation status.
     * @alias module:models/SmtpOperationStatusRequestsDto
     */
    constructor() { 
        
        SmtpOperationStatusRequestsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SmtpOperationStatusRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SmtpOperationStatusRequestsDto} obj Optional instance to populate.
     * @return {module:models/SmtpOperationStatusRequestsDto} The populated <code>SmtpOperationStatusRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmtpOperationStatusRequestsDto();

            if (data.hasOwnProperty('completed')) {
                obj['completed'] = ApiClient.convertToType(data['completed'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('percents')) {
                obj['percents'] = ApiClient.convertToType(data['percents'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SmtpOperationStatusRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SmtpOperationStatusRequestsDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['error'] && !(typeof data['error'] === 'string' || data['error'] instanceof String)) {
            throw new Error("Expected the field `error` to be a primitive type in the JSON string but got " + data['error']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}



/**
 * Specifies whether the SMTP operation has finished processing.
 * @member {Boolean} completed
 */
SmtpOperationStatusRequestsDto.prototype['completed'] = undefined;

/**
 * The unique identifier for tracking the SMTP operation.
 * @member {String} id
 */
SmtpOperationStatusRequestsDto.prototype['id'] = undefined;

/**
 * The error message if the SMTP operation encountered issues.
 * @member {String} error
 */
SmtpOperationStatusRequestsDto.prototype['error'] = undefined;

/**
 * The current state of the SMTP operation.
 * @member {String} status
 */
SmtpOperationStatusRequestsDto.prototype['status'] = undefined;

/**
 * The progress indicator showing completion percentage of the operation.
 * @member {Number} percents
 */
SmtpOperationStatusRequestsDto.prototype['percents'] = undefined;






export default SmtpOperationStatusRequestsDto;

