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
import EmployeeType from './EmployeeType';
import MigratingApiFiles from './MigratingApiFiles';

/**
 * The MigratingApiUser model module.
 * @module models/MigratingApiUser
 * @version 3.2.0
 */
class MigratingApiUser {
    /**
     * Constructs a new <code>MigratingApiUser</code>.
     * @alias module:models/MigratingApiUser
     */
    constructor() { 
        
        MigratingApiUser.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MigratingApiUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/MigratingApiUser} obj Optional instance to populate.
     * @return {module:models/MigratingApiUser} The populated <code>MigratingApiUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MigratingApiUser();

            if (data.hasOwnProperty('shouldImport')) {
                obj['shouldImport'] = ApiClient.convertToType(data['shouldImport'], 'Boolean');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('userType')) {
                obj['userType'] = EmployeeType.constructFromObject(data['userType']);
            }
            if (data.hasOwnProperty('migratingFiles')) {
                obj['migratingFiles'] = MigratingApiFiles.constructFromObject(data['migratingFiles']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MigratingApiUser</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MigratingApiUser</code>.
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
        if (data['displayName'] && !(typeof data['displayName'] === 'string' || data['displayName'] instanceof String)) {
            throw new Error("Expected the field `displayName` to be a primitive type in the JSON string but got " + data['displayName']);
        }
        // ensure the json data is a string
        if (data['firstName'] && !(typeof data['firstName'] === 'string' || data['firstName'] instanceof String)) {
            throw new Error("Expected the field `firstName` to be a primitive type in the JSON string but got " + data['firstName']);
        }
        // ensure the json data is a string
        if (data['lastName'] && !(typeof data['lastName'] === 'string' || data['lastName'] instanceof String)) {
            throw new Error("Expected the field `lastName` to be a primitive type in the JSON string but got " + data['lastName']);
        }
        // validate the optional field `migratingFiles`
        if (data['migratingFiles']) { // data not null
          MigratingApiFiles.validateJSON(data['migratingFiles']);
        }

        return true;
    }


}



/**
 * @member {Boolean} shouldImport
 */
MigratingApiUser.prototype['shouldImport'] = undefined;

/**
 * @member {String} key
 */
MigratingApiUser.prototype['key'] = undefined;

/**
 * @member {String} email
 */
MigratingApiUser.prototype['email'] = undefined;

/**
 * @member {String} displayName
 */
MigratingApiUser.prototype['displayName'] = undefined;

/**
 * @member {String} firstName
 */
MigratingApiUser.prototype['firstName'] = undefined;

/**
 * @member {String} lastName
 */
MigratingApiUser.prototype['lastName'] = undefined;

/**
 * @member {module:models/EmployeeType} userType
 */
MigratingApiUser.prototype['userType'] = undefined;

/**
 * @member {module:models/MigratingApiFiles} migratingFiles
 */
MigratingApiUser.prototype['migratingFiles'] = undefined;






export default MigratingApiUser;

