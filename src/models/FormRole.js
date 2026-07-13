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
 * The FormRole model module.
 * @module models/FormRole
 * @version 3.2.0
 */
class FormRole {
    /**
     * Constructs a new <code>FormRole</code>.
     * The form role.
     * @alias module:models/FormRole
     */
    constructor() { 
        
        FormRole.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FormRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FormRole} obj Optional instance to populate.
     * @return {module:models/FormRole} The populated <code>FormRole</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FormRole();

            if (data.hasOwnProperty('roomId')) {
                obj['roomId'] = ApiClient.convertToType(data['roomId'], 'Number');
            }
            if (data.hasOwnProperty('roleName')) {
                obj['roleName'] = ApiClient.convertToType(data['roleName'], 'String');
            }
            if (data.hasOwnProperty('roleColor')) {
                obj['roleColor'] = ApiClient.convertToType(data['roleColor'], 'String');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('sequence')) {
                obj['sequence'] = ApiClient.convertToType(data['sequence'], 'Number');
            }
            if (data.hasOwnProperty('submitted')) {
                obj['submitted'] = ApiClient.convertToType(data['submitted'], 'Boolean');
            }
            if (data.hasOwnProperty('openedAt')) {
                obj['openedAt'] = ApiClient.convertToType(data['openedAt'], 'Date');
            }
            if (data.hasOwnProperty('submissionDate')) {
                obj['submissionDate'] = ApiClient.convertToType(data['submissionDate'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FormRole</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FormRole</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['roleName'] && !(typeof data['roleName'] === 'string' || data['roleName'] instanceof String)) {
            throw new Error("Expected the field `roleName` to be a primitive type in the JSON string but got " + data['roleName']);
        }
        // ensure the json data is a string
        if (data['roleColor'] && !(typeof data['roleColor'] === 'string' || data['roleColor'] instanceof String)) {
            throw new Error("Expected the field `roleColor` to be a primitive type in the JSON string but got " + data['roleColor']);
        }
        // ensure the json data is a string
        if (data['userId'] && !(typeof data['userId'] === 'string' || data['userId'] instanceof String)) {
            throw new Error("Expected the field `userId` to be a primitive type in the JSON string but got " + data['userId']);
        }

        return true;
    }


}



/**
 * The room ID.
 * @member {Number} roomId
 */
FormRole.prototype['roomId'] = undefined;

/**
 * The role name.
 * @member {String} roleName
 */
FormRole.prototype['roleName'] = undefined;

/**
 * The role color.
 * @member {String} roleColor
 */
FormRole.prototype['roleColor'] = undefined;

/**
 * The user ID.
 * @member {String} userId
 */
FormRole.prototype['userId'] = undefined;

/**
 * The role sequence.
 * @member {Number} sequence
 */
FormRole.prototype['sequence'] = undefined;

/**
 * Specifies if the role was submitted or not.
 * @member {Boolean} submitted
 */
FormRole.prototype['submitted'] = undefined;

/**
 * The date and time when the role was opened.
 * @member {Date} openedAt
 */
FormRole.prototype['openedAt'] = undefined;

/**
 * The date and time when the role was submitted.
 * @member {Date} submissionDate
 */
FormRole.prototype['submissionDate'] = undefined;






export default FormRole;

