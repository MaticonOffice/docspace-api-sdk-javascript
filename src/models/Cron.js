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
import BackupPeriod from './BackupPeriod';

/**
 * The Cron model module.
 * @module models/Cron
 * @version 3.2.0
 */
class Cron {
    /**
     * Constructs a new <code>Cron</code>.
     * The backup cron parameters.
     * @alias module:models/Cron
     */
    constructor() { 
        
        Cron.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Cron</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/Cron} obj Optional instance to populate.
     * @return {module:models/Cron} The populated <code>Cron</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Cron();

            if (data.hasOwnProperty('period')) {
                obj['period'] = BackupPeriod.constructFromObject(data['period']);
            }
            if (data.hasOwnProperty('hour')) {
                obj['hour'] = ApiClient.convertToType(data['hour'], 'Number');
            }
            if (data.hasOwnProperty('day')) {
                obj['day'] = ApiClient.convertToType(data['day'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Cron</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Cron</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {module:models/BackupPeriod} period
 */
Cron.prototype['period'] = undefined;

/**
 * The time of the day to start the backup process.
 * @member {Number} hour
 */
Cron.prototype['hour'] = undefined;

/**
 * The day of the week to start the backup process.
 * @member {Number} day
 */
Cron.prototype['day'] = undefined;






export default Cron;

