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
import BackupProgressEnum from './BackupProgressEnum';

/**
 * The BackupProgress model module.
 * @module models/BackupProgress
 * @version 3.2.0
 */
class BackupProgress {
    /**
     * Constructs a new <code>BackupProgress</code>.
     * @alias module:models/BackupProgress
     */
    constructor() { 
        
        BackupProgress.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BackupProgress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/BackupProgress} obj Optional instance to populate.
     * @return {module:models/BackupProgress} The populated <code>BackupProgress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BackupProgress();

            if (data.hasOwnProperty('isCompleted')) {
                obj['isCompleted'] = ApiClient.convertToType(data['isCompleted'], 'Boolean');
            }
            if (data.hasOwnProperty('progress')) {
                obj['progress'] = ApiClient.convertToType(data['progress'], 'Number');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'Number');
            }
            if (data.hasOwnProperty('backupProgressEnum')) {
                obj['backupProgressEnum'] = BackupProgressEnum.constructFromObject(data['backupProgressEnum']);
            }
            if (data.hasOwnProperty('taskId')) {
                obj['taskId'] = ApiClient.convertToType(data['taskId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BackupProgress</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BackupProgress</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['error'] && !(typeof data['error'] === 'string' || data['error'] instanceof String)) {
            throw new Error("Expected the field `error` to be a primitive type in the JSON string but got " + data['error']);
        }
        // ensure the json data is a string
        if (data['link'] && !(typeof data['link'] === 'string' || data['link'] instanceof String)) {
            throw new Error("Expected the field `link` to be a primitive type in the JSON string but got " + data['link']);
        }
        // ensure the json data is a string
        if (data['taskId'] && !(typeof data['taskId'] === 'string' || data['taskId'] instanceof String)) {
            throw new Error("Expected the field `taskId` to be a primitive type in the JSON string but got " + data['taskId']);
        }

        return true;
    }


}



/**
 * @member {Boolean} isCompleted
 */
BackupProgress.prototype['isCompleted'] = undefined;

/**
 * @member {Number} progress
 */
BackupProgress.prototype['progress'] = undefined;

/**
 * @member {String} error
 */
BackupProgress.prototype['error'] = undefined;

/**
 * @member {String} link
 */
BackupProgress.prototype['link'] = undefined;

/**
 * @member {Number} tenantId
 */
BackupProgress.prototype['tenantId'] = undefined;

/**
 * @member {module:models/BackupProgressEnum} backupProgressEnum
 */
BackupProgress.prototype['backupProgressEnum'] = undefined;

/**
 * @member {String} taskId
 */
BackupProgress.prototype['taskId'] = undefined;






export default BackupProgress;

