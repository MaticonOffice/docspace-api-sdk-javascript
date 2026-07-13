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
 * The TenantDomainValidator model module.
 * @module models/TenantDomainValidator
 * @version 3.2.0
 */
class TenantDomainValidator {
    /**
     * Constructs a new <code>TenantDomainValidator</code>.
     * The domain validator.
     * @alias module:models/TenantDomainValidator
     */
    constructor() { 
        
        TenantDomainValidator.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TenantDomainValidator</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TenantDomainValidator} obj Optional instance to populate.
     * @return {module:models/TenantDomainValidator} The populated <code>TenantDomainValidator</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TenantDomainValidator();

            if (data.hasOwnProperty('regex')) {
                obj['regex'] = ApiClient.convertToType(data['regex'], 'String');
            }
            if (data.hasOwnProperty('minLength')) {
                obj['minLength'] = ApiClient.convertToType(data['minLength'], 'Number');
            }
            if (data.hasOwnProperty('maxLength')) {
                obj['maxLength'] = ApiClient.convertToType(data['maxLength'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TenantDomainValidator</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TenantDomainValidator</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['regex'] && !(typeof data['regex'] === 'string' || data['regex'] instanceof String)) {
            throw new Error("Expected the field `regex` to be a primitive type in the JSON string but got " + data['regex']);
        }

        return true;
    }


}



/**
 * The regex string to validate a domain.
 * @member {String} regex
 */
TenantDomainValidator.prototype['regex'] = undefined;

/**
 * The minimum length of the valid domain.
 * @member {Number} minLength
 */
TenantDomainValidator.prototype['minLength'] = undefined;

/**
 * The maximum length of the valid domain.
 * @member {Number} maxLength
 */
TenantDomainValidator.prototype['maxLength'] = undefined;






export default TenantDomainValidator;

