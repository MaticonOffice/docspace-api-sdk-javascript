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
import MigratingApiGroup from './MigratingApiGroup';
import MigratingApiUser from './MigratingApiUser';

/**
 * The MigrationApiInfo model module.
 * @module models/MigrationApiInfo
 * @version 3.2.0
 */
class MigrationApiInfo {
    /**
     * Constructs a new <code>MigrationApiInfo</code>.
     * @alias module:models/MigrationApiInfo
     */
    constructor() { 
        
        MigrationApiInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MigrationApiInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/MigrationApiInfo} obj Optional instance to populate.
     * @return {module:models/MigrationApiInfo} The populated <code>MigrationApiInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MigrationApiInfo();

            if (data.hasOwnProperty('migratorName')) {
                obj['migratorName'] = ApiClient.convertToType(data['migratorName'], 'String');
            }
            if (data.hasOwnProperty('operation')) {
                obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
            }
            if (data.hasOwnProperty('failedArchives')) {
                obj['failedArchives'] = ApiClient.convertToType(data['failedArchives'], ['String']);
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [MigratingApiUser]);
            }
            if (data.hasOwnProperty('withoutEmailUsers')) {
                obj['withoutEmailUsers'] = ApiClient.convertToType(data['withoutEmailUsers'], [MigratingApiUser]);
            }
            if (data.hasOwnProperty('existUsers')) {
                obj['existUsers'] = ApiClient.convertToType(data['existUsers'], [MigratingApiUser]);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], [MigratingApiGroup]);
            }
            if (data.hasOwnProperty('importPersonalFiles')) {
                obj['importPersonalFiles'] = ApiClient.convertToType(data['importPersonalFiles'], 'Boolean');
            }
            if (data.hasOwnProperty('importSharedFiles')) {
                obj['importSharedFiles'] = ApiClient.convertToType(data['importSharedFiles'], 'Boolean');
            }
            if (data.hasOwnProperty('importSharedFolders')) {
                obj['importSharedFolders'] = ApiClient.convertToType(data['importSharedFolders'], 'Boolean');
            }
            if (data.hasOwnProperty('importCommonFiles')) {
                obj['importCommonFiles'] = ApiClient.convertToType(data['importCommonFiles'], 'Boolean');
            }
            if (data.hasOwnProperty('importProjectFiles')) {
                obj['importProjectFiles'] = ApiClient.convertToType(data['importProjectFiles'], 'Boolean');
            }
            if (data.hasOwnProperty('importGroups')) {
                obj['importGroups'] = ApiClient.convertToType(data['importGroups'], 'Boolean');
            }
            if (data.hasOwnProperty('successedUsers')) {
                obj['successedUsers'] = ApiClient.convertToType(data['successedUsers'], 'Number');
            }
            if (data.hasOwnProperty('failedUsers')) {
                obj['failedUsers'] = ApiClient.convertToType(data['failedUsers'], 'Number');
            }
            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], ['String']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MigrationApiInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MigrationApiInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['migratorName'] && !(typeof data['migratorName'] === 'string' || data['migratorName'] instanceof String)) {
            throw new Error("Expected the field `migratorName` to be a primitive type in the JSON string but got " + data['migratorName']);
        }
        // ensure the json data is a string
        if (data['operation'] && !(typeof data['operation'] === 'string' || data['operation'] instanceof String)) {
            throw new Error("Expected the field `operation` to be a primitive type in the JSON string but got " + data['operation']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['failedArchives'])) {
            throw new Error("Expected the field `failedArchives` to be an array in the JSON data but got " + data['failedArchives']);
        }
        if (data['users']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['users'])) {
                throw new Error("Expected the field `users` to be an array in the JSON data but got " + data['users']);
            }
            // validate the optional field `users` (array)
            for (const item of data['users']) {
                MigratingApiUser.validateJSON(item);
            };
        }
        if (data['withoutEmailUsers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['withoutEmailUsers'])) {
                throw new Error("Expected the field `withoutEmailUsers` to be an array in the JSON data but got " + data['withoutEmailUsers']);
            }
            // validate the optional field `withoutEmailUsers` (array)
            for (const item of data['withoutEmailUsers']) {
                MigratingApiUser.validateJSON(item);
            };
        }
        if (data['existUsers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['existUsers'])) {
                throw new Error("Expected the field `existUsers` to be an array in the JSON data but got " + data['existUsers']);
            }
            // validate the optional field `existUsers` (array)
            for (const item of data['existUsers']) {
                MigratingApiUser.validateJSON(item);
            };
        }
        if (data['groups']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['groups'])) {
                throw new Error("Expected the field `groups` to be an array in the JSON data but got " + data['groups']);
            }
            // validate the optional field `groups` (array)
            for (const item of data['groups']) {
                MigratingApiGroup.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['files'])) {
            throw new Error("Expected the field `files` to be an array in the JSON data but got " + data['files']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['errors'])) {
            throw new Error("Expected the field `errors` to be an array in the JSON data but got " + data['errors']);
        }

        return true;
    }


}



/**
 * @member {String} migratorName
 */
MigrationApiInfo.prototype['migratorName'] = undefined;

/**
 * @member {String} operation
 */
MigrationApiInfo.prototype['operation'] = undefined;

/**
 * @member {Array.<String>} failedArchives
 */
MigrationApiInfo.prototype['failedArchives'] = undefined;

/**
 * @member {Array.<module:models/MigratingApiUser>} users
 */
MigrationApiInfo.prototype['users'] = undefined;

/**
 * @member {Array.<module:models/MigratingApiUser>} withoutEmailUsers
 */
MigrationApiInfo.prototype['withoutEmailUsers'] = undefined;

/**
 * @member {Array.<module:models/MigratingApiUser>} existUsers
 */
MigrationApiInfo.prototype['existUsers'] = undefined;

/**
 * @member {Array.<module:models/MigratingApiGroup>} groups
 */
MigrationApiInfo.prototype['groups'] = undefined;

/**
 * @member {Boolean} importPersonalFiles
 */
MigrationApiInfo.prototype['importPersonalFiles'] = undefined;

/**
 * @member {Boolean} importSharedFiles
 */
MigrationApiInfo.prototype['importSharedFiles'] = undefined;

/**
 * @member {Boolean} importSharedFolders
 */
MigrationApiInfo.prototype['importSharedFolders'] = undefined;

/**
 * @member {Boolean} importCommonFiles
 */
MigrationApiInfo.prototype['importCommonFiles'] = undefined;

/**
 * @member {Boolean} importProjectFiles
 */
MigrationApiInfo.prototype['importProjectFiles'] = undefined;

/**
 * @member {Boolean} importGroups
 */
MigrationApiInfo.prototype['importGroups'] = undefined;

/**
 * @member {Number} successedUsers
 */
MigrationApiInfo.prototype['successedUsers'] = undefined;

/**
 * @member {Number} failedUsers
 */
MigrationApiInfo.prototype['failedUsers'] = undefined;

/**
 * @member {Array.<String>} files
 */
MigrationApiInfo.prototype['files'] = undefined;

/**
 * @member {Array.<String>} errors
 */
MigrationApiInfo.prototype['errors'] = undefined;






export default MigrationApiInfo;

