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
import ItemKeyValuePairObjectObject from './ItemKeyValuePairObjectObject';

/**
 * The BackupRestoreDto model module.
 * @module models/BackupRestoreDto
 * @version 3.2.0
 */
class BackupRestoreDto {
    /**
     * Constructs a new <code>BackupRestoreDto</code>.
     * The backup restoring parameters.
     * @alias module:models/BackupRestoreDto
     */
    constructor() { 
        
        BackupRestoreDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BackupRestoreDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/BackupRestoreDto} obj Optional instance to populate.
     * @return {module:models/BackupRestoreDto} The populated <code>BackupRestoreDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BackupRestoreDto();

            if (data.hasOwnProperty('backupId')) {
                obj['backupId'] = ApiClient.convertToType(data['backupId'], 'String');
            }
            if (data.hasOwnProperty('storageType')) {
                obj['storageType'] = BackupStorageType.constructFromObject(data['storageType']);
            }
            if (data.hasOwnProperty('storageParams')) {
                obj['storageParams'] = ApiClient.convertToType(data['storageParams'], [ItemKeyValuePairObjectObject]);
            }
            if (data.hasOwnProperty('notify')) {
                obj['notify'] = ApiClient.convertToType(data['notify'], 'Boolean');
            }
            if (data.hasOwnProperty('dump')) {
                obj['dump'] = ApiClient.convertToType(data['dump'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BackupRestoreDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BackupRestoreDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['backupId'] && !(typeof data['backupId'] === 'string' || data['backupId'] instanceof String)) {
            throw new Error("Expected the field `backupId` to be a primitive type in the JSON string but got " + data['backupId']);
        }
        if (data['storageParams']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['storageParams'])) {
                throw new Error("Expected the field `storageParams` to be an array in the JSON data but got " + data['storageParams']);
            }
            // validate the optional field `storageParams` (array)
            for (const item of data['storageParams']) {
                ItemKeyValuePairObjectObject.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The backup ID.
 * @member {String} backupId
 */
BackupRestoreDto.prototype['backupId'] = undefined;

/**
 * @member {module:models/BackupStorageType} storageType
 */
BackupRestoreDto.prototype['storageType'] = undefined;

/**
 * The backup storage parameters.
 * @member {Array.<module:models/ItemKeyValuePairObjectObject>} storageParams
 */
BackupRestoreDto.prototype['storageParams'] = undefined;

/**
 * Notifies users about the portal restoring process or not.
 * @member {Boolean} notify
 */
BackupRestoreDto.prototype['notify'] = undefined;

/**
 * Specifies if a dump will be created or not.
 * @member {Boolean} dump
 */
BackupRestoreDto.prototype['dump'] = undefined;






export default BackupRestoreDto;

