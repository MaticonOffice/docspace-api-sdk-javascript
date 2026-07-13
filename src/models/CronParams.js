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
 * The CronParams model module.
 * @module models/CronParams
 * @version 3.2.0
 */
class CronParams {
    /**
     * Constructs a new <code>CronParams</code>.
     * @alias module:models/CronParams
     */
    constructor() { 
        
        CronParams.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CronParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CronParams} obj Optional instance to populate.
     * @return {module:models/CronParams} The populated <code>CronParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CronParams();

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
     * Validates the JSON data with respect to <code>CronParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CronParams</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {module:models/BackupPeriod} period
 */
CronParams.prototype['period'] = undefined;

/**
 * @member {Number} hour
 */
CronParams.prototype['hour'] = undefined;

/**
 * @member {Number} day
 */
CronParams.prototype['day'] = undefined;






export default CronParams;

