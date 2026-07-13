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
 * The MigratingApiFiles model module.
 * @module models/MigratingApiFiles
 * @version 3.2.0
 */
class MigratingApiFiles {
    /**
     * Constructs a new <code>MigratingApiFiles</code>.
     * @alias module:models/MigratingApiFiles
     */
    constructor() { 
        
        MigratingApiFiles.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MigratingApiFiles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/MigratingApiFiles} obj Optional instance to populate.
     * @return {module:models/MigratingApiFiles} The populated <code>MigratingApiFiles</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MigratingApiFiles();

            if (data.hasOwnProperty('foldersCount')) {
                obj['foldersCount'] = ApiClient.convertToType(data['foldersCount'], 'Number');
            }
            if (data.hasOwnProperty('filesCount')) {
                obj['filesCount'] = ApiClient.convertToType(data['filesCount'], 'Number');
            }
            if (data.hasOwnProperty('bytesTotal')) {
                obj['bytesTotal'] = ApiClient.convertToType(data['bytesTotal'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MigratingApiFiles</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MigratingApiFiles</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} foldersCount
 */
MigratingApiFiles.prototype['foldersCount'] = undefined;

/**
 * @member {Number} filesCount
 */
MigratingApiFiles.prototype['filesCount'] = undefined;

/**
 * @member {Number} bytesTotal
 */
MigratingApiFiles.prototype['bytesTotal'] = undefined;






export default MigratingApiFiles;

