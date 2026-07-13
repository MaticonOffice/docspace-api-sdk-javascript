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
import FormFillingManageAction from './FormFillingManageAction';

/**
 * The ManageFormFillingDtoInteger model module.
 * @module models/ManageFormFillingDtoInteger
 * @version 3.2.0
 */
class ManageFormFillingDtoInteger {
    /**
     * Constructs a new <code>ManageFormFillingDtoInteger</code>.
     * The parameters for managing form filling.
     * @alias module:models/ManageFormFillingDtoInteger
     */
    constructor() { 
        
        ManageFormFillingDtoInteger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ManageFormFillingDtoInteger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ManageFormFillingDtoInteger} obj Optional instance to populate.
     * @return {module:models/ManageFormFillingDtoInteger} The populated <code>ManageFormFillingDtoInteger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ManageFormFillingDtoInteger();

            if (data.hasOwnProperty('formId')) {
                obj['formId'] = ApiClient.convertToType(data['formId'], 'Number');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = FormFillingManageAction.constructFromObject(data['action']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ManageFormFillingDtoInteger</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ManageFormFillingDtoInteger</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The ID of the form to manage.
 * @member {Number} formId
 */
ManageFormFillingDtoInteger.prototype['formId'] = undefined;

/**
 * @member {module:models/FormFillingManageAction} action
 */
ManageFormFillingDtoInteger.prototype['action'] = undefined;






export default ManageFormFillingDtoInteger;

