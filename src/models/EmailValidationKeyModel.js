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
import ConfirmType from './ConfirmType';
import EmployeeType from './EmployeeType';

/**
 * The EmailValidationKeyModel model module.
 * @module models/EmailValidationKeyModel
 * @version 3.2.0
 */
class EmailValidationKeyModel {
    /**
     * Constructs a new <code>EmailValidationKeyModel</code>.
     * The confirmation email parameters.
     * @alias module:models/EmailValidationKeyModel
     */
    constructor() { 
        
        EmailValidationKeyModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailValidationKeyModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/EmailValidationKeyModel} obj Optional instance to populate.
     * @return {module:models/EmailValidationKeyModel} The populated <code>EmailValidationKeyModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailValidationKeyModel();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('emplType')) {
                obj['emplType'] = EmployeeType.constructFromObject(data['emplType']);
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('uiD')) {
                obj['uiD'] = ApiClient.convertToType(data['uiD'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ConfirmType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('first')) {
                obj['first'] = ApiClient.convertToType(data['first'], 'String');
            }
            if (data.hasOwnProperty('roomId')) {
                obj['roomId'] = ApiClient.convertToType(data['roomId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailValidationKeyModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailValidationKeyModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['uiD'] && !(typeof data['uiD'] === 'string' || data['uiD'] instanceof String)) {
            throw new Error("Expected the field `uiD` to be a primitive type in the JSON string but got " + data['uiD']);
        }
        // ensure the json data is a string
        if (data['first'] && !(typeof data['first'] === 'string' || data['first'] instanceof String)) {
            throw new Error("Expected the field `first` to be a primitive type in the JSON string but got " + data['first']);
        }
        // ensure the json data is a string
        if (data['roomId'] && !(typeof data['roomId'] === 'string' || data['roomId'] instanceof String)) {
            throw new Error("Expected the field `roomId` to be a primitive type in the JSON string but got " + data['roomId']);
        }

        return true;
    }


}



/**
 * The email validation key.
 * @member {String} key
 */
EmailValidationKeyModel.prototype['key'] = undefined;

/**
 * @member {module:models/EmployeeType} emplType
 */
EmailValidationKeyModel.prototype['emplType'] = undefined;

/**
 * The email address.
 * @member {String} email
 */
EmailValidationKeyModel.prototype['email'] = undefined;

/**
 * The user ID.
 * @member {String} uiD
 */
EmailValidationKeyModel.prototype['uiD'] = undefined;

/**
 * @member {module:models/ConfirmType} type
 */
EmailValidationKeyModel.prototype['type'] = undefined;

/**
 * Specifies whether it is the first time account access or not.
 * @member {String} first
 */
EmailValidationKeyModel.prototype['first'] = undefined;

/**
 * The room ID.
 * @member {String} roomId
 */
EmailValidationKeyModel.prototype['roomId'] = undefined;






export default EmailValidationKeyModel;

