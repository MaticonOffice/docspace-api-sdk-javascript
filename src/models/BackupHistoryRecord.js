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
import BackupStorageType from './BackupStorageType';

/**
 * The BackupHistoryRecord model module.
 * @module models/BackupHistoryRecord
 * @version 3.2.0
 */
class BackupHistoryRecord {
    /**
     * Constructs a new <code>BackupHistoryRecord</code>.
     * @alias module:models/BackupHistoryRecord
     */
    constructor() { 
        
        BackupHistoryRecord.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BackupHistoryRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/BackupHistoryRecord} obj Optional instance to populate.
     * @return {module:models/BackupHistoryRecord} The populated <code>BackupHistoryRecord</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BackupHistoryRecord();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('fileName')) {
                obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
            }
            if (data.hasOwnProperty('storageType')) {
                obj['storageType'] = BackupStorageType.constructFromObject(data['storageType']);
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
            }
            if (data.hasOwnProperty('expiresOn')) {
                obj['expiresOn'] = ApiClient.convertToType(data['expiresOn'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BackupHistoryRecord</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BackupHistoryRecord</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['fileName'] && !(typeof data['fileName'] === 'string' || data['fileName'] instanceof String)) {
            throw new Error("Expected the field `fileName` to be a primitive type in the JSON string but got " + data['fileName']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
BackupHistoryRecord.prototype['id'] = undefined;

/**
 * @member {String} fileName
 */
BackupHistoryRecord.prototype['fileName'] = undefined;

/**
 * @member {module:models/BackupStorageType} storageType
 */
BackupHistoryRecord.prototype['storageType'] = undefined;

/**
 * @member {Date} createdOn
 */
BackupHistoryRecord.prototype['createdOn'] = undefined;

/**
 * @member {Date} expiresOn
 */
BackupHistoryRecord.prototype['expiresOn'] = undefined;






export default BackupHistoryRecord;

