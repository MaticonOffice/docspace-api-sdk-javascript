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
import CronParams from './CronParams';

/**
 * The Schedule model module.
 * @module models/Schedule
 * @version 3.2.0
 */
class Schedule {
    /**
     * Constructs a new <code>Schedule</code>.
     * @alias module:models/Schedule
     */
    constructor() { 
        
        Schedule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Schedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/Schedule} obj Optional instance to populate.
     * @return {module:models/Schedule} The populated <code>Schedule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Schedule();

            if (data.hasOwnProperty('storageType')) {
                obj['storageType'] = BackupStorageType.constructFromObject(data['storageType']);
            }
            if (data.hasOwnProperty('storageParams')) {
                obj['storageParams'] = ApiClient.convertToType(data['storageParams'], {'String': 'String'});
            }
            if (data.hasOwnProperty('cronParams')) {
                obj['cronParams'] = CronParams.constructFromObject(data['cronParams']);
            }
            if (data.hasOwnProperty('backupsStored')) {
                obj['backupsStored'] = ApiClient.convertToType(data['backupsStored'], 'Number');
            }
            if (data.hasOwnProperty('lastBackupTime')) {
                obj['lastBackupTime'] = ApiClient.convertToType(data['lastBackupTime'], 'Date');
            }
            if (data.hasOwnProperty('dump')) {
                obj['dump'] = ApiClient.convertToType(data['dump'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Schedule</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Schedule</code>.
     */
    static validateJSON(data) {
        // validate the optional field `cronParams`
        if (data['cronParams']) { // data not null
          CronParams.validateJSON(data['cronParams']);
        }

        return true;
    }


}



/**
 * @member {module:models/BackupStorageType} storageType
 */
Schedule.prototype['storageType'] = undefined;

/**
 * @member {Object.<String, String>} storageParams
 */
Schedule.prototype['storageParams'] = undefined;

/**
 * @member {module:models/CronParams} cronParams
 */
Schedule.prototype['cronParams'] = undefined;

/**
 * @member {Number} backupsStored
 */
Schedule.prototype['backupsStored'] = undefined;

/**
 * @member {Date} lastBackupTime
 */
Schedule.prototype['lastBackupTime'] = undefined;

/**
 * @member {Boolean} dump
 */
Schedule.prototype['dump'] = undefined;






export default Schedule;

