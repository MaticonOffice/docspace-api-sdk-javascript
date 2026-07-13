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
import EmployeeFullDto from './EmployeeFullDto';
import FileDtoInteger from './FileDtoInteger';

/**
 * The FillingFormResultDtoInteger model module.
 * @module models/FillingFormResultDtoInteger
 * @version 3.2.0
 */
class FillingFormResultDtoInteger {
    /**
     * Constructs a new <code>FillingFormResultDtoInteger</code>.
     * The parameters of the form filling result.
     * @alias module:models/FillingFormResultDtoInteger
     */
    constructor() { 
        
        FillingFormResultDtoInteger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FillingFormResultDtoInteger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FillingFormResultDtoInteger} obj Optional instance to populate.
     * @return {module:models/FillingFormResultDtoInteger} The populated <code>FillingFormResultDtoInteger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FillingFormResultDtoInteger();

            if (data.hasOwnProperty('formNumber')) {
                obj['formNumber'] = ApiClient.convertToType(data['formNumber'], 'Number');
            }
            if (data.hasOwnProperty('completedForm')) {
                obj['completedForm'] = FileDtoInteger.constructFromObject(data['completedForm']);
            }
            if (data.hasOwnProperty('originalForm')) {
                obj['originalForm'] = FileDtoInteger.constructFromObject(data['originalForm']);
            }
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = EmployeeFullDto.constructFromObject(data['manager']);
            }
            if (data.hasOwnProperty('roomId')) {
                obj['roomId'] = ApiClient.convertToType(data['roomId'], 'Number');
            }
            if (data.hasOwnProperty('isRoomMember')) {
                obj['isRoomMember'] = ApiClient.convertToType(data['isRoomMember'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FillingFormResultDtoInteger</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FillingFormResultDtoInteger</code>.
     */
    static validateJSON(data) {
        // validate the optional field `completedForm`
        if (data['completedForm']) { // data not null
          FileDtoInteger.validateJSON(data['completedForm']);
        }
        // validate the optional field `originalForm`
        if (data['originalForm']) { // data not null
          FileDtoInteger.validateJSON(data['originalForm']);
        }
        // validate the optional field `manager`
        if (data['manager']) { // data not null
          EmployeeFullDto.validateJSON(data['manager']);
        }

        return true;
    }


}



/**
 * The filling form number.
 * @member {Number} formNumber
 */
FillingFormResultDtoInteger.prototype['formNumber'] = undefined;

/**
 * @member {module:models/FileDtoInteger} completedForm
 */
FillingFormResultDtoInteger.prototype['completedForm'] = undefined;

/**
 * @member {module:models/FileDtoInteger} originalForm
 */
FillingFormResultDtoInteger.prototype['originalForm'] = undefined;

/**
 * @member {module:models/EmployeeFullDto} manager
 */
FillingFormResultDtoInteger.prototype['manager'] = undefined;

/**
 * The room ID where filling the form.
 * @member {Number} roomId
 */
FillingFormResultDtoInteger.prototype['roomId'] = undefined;

/**
 * Specifies if the manager who fills the form is a room member or not.
 * @member {Boolean} isRoomMember
 */
FillingFormResultDtoInteger.prototype['isRoomMember'] = undefined;






export default FillingFormResultDtoInteger;

