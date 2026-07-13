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
import FormRole from './FormRole';

/**
 * The SaveFormRoleMappingDtoInteger model module.
 * @module models/SaveFormRoleMappingDtoInteger
 * @version 3.2.0
 */
class SaveFormRoleMappingDtoInteger {
    /**
     * Constructs a new <code>SaveFormRoleMappingDtoInteger</code>.
     * The parameters for saving form role mapping.
     * @alias module:models/SaveFormRoleMappingDtoInteger
     */
    constructor() { 
        
        SaveFormRoleMappingDtoInteger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SaveFormRoleMappingDtoInteger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SaveFormRoleMappingDtoInteger} obj Optional instance to populate.
     * @return {module:models/SaveFormRoleMappingDtoInteger} The populated <code>SaveFormRoleMappingDtoInteger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SaveFormRoleMappingDtoInteger();

            if (data.hasOwnProperty('formId')) {
                obj['formId'] = ApiClient.convertToType(data['formId'], 'Number');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], [FormRole]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SaveFormRoleMappingDtoInteger</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SaveFormRoleMappingDtoInteger</code>.
     */
    static validateJSON(data) {
        if (data['roles']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['roles'])) {
                throw new Error("Expected the field `roles` to be an array in the JSON data but got " + data['roles']);
            }
            // validate the optional field `roles` (array)
            for (const item of data['roles']) {
                FormRole.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The form ID.
 * @member {Number} formId
 */
SaveFormRoleMappingDtoInteger.prototype['formId'] = undefined;

/**
 * The collection of roles.
 * @member {Array.<module:models/FormRole>} roles
 */
SaveFormRoleMappingDtoInteger.prototype['roles'] = undefined;






export default SaveFormRoleMappingDtoInteger;

