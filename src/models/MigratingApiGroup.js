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
 * The MigratingApiGroup model module.
 * @module models/MigratingApiGroup
 * @version 3.2.0
 */
class MigratingApiGroup {
    /**
     * Constructs a new <code>MigratingApiGroup</code>.
     * @alias module:models/MigratingApiGroup
     */
    constructor() { 
        
        MigratingApiGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MigratingApiGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/MigratingApiGroup} obj Optional instance to populate.
     * @return {module:models/MigratingApiGroup} The populated <code>MigratingApiGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MigratingApiGroup();

            if (data.hasOwnProperty('shouldImport')) {
                obj['shouldImport'] = ApiClient.convertToType(data['shouldImport'], 'Boolean');
            }
            if (data.hasOwnProperty('groupName')) {
                obj['groupName'] = ApiClient.convertToType(data['groupName'], 'String');
            }
            if (data.hasOwnProperty('moduleName')) {
                obj['moduleName'] = ApiClient.convertToType(data['moduleName'], 'String');
            }
            if (data.hasOwnProperty('userUidList')) {
                obj['userUidList'] = ApiClient.convertToType(data['userUidList'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MigratingApiGroup</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MigratingApiGroup</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['groupName'] && !(typeof data['groupName'] === 'string' || data['groupName'] instanceof String)) {
            throw new Error("Expected the field `groupName` to be a primitive type in the JSON string but got " + data['groupName']);
        }
        // ensure the json data is a string
        if (data['moduleName'] && !(typeof data['moduleName'] === 'string' || data['moduleName'] instanceof String)) {
            throw new Error("Expected the field `moduleName` to be a primitive type in the JSON string but got " + data['moduleName']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['userUidList'])) {
            throw new Error("Expected the field `userUidList` to be an array in the JSON data but got " + data['userUidList']);
        }

        return true;
    }


}



/**
 * @member {Boolean} shouldImport
 */
MigratingApiGroup.prototype['shouldImport'] = undefined;

/**
 * @member {String} groupName
 */
MigratingApiGroup.prototype['groupName'] = undefined;

/**
 * @member {String} moduleName
 */
MigratingApiGroup.prototype['moduleName'] = undefined;

/**
 * @member {Array.<String>} userUidList
 */
MigratingApiGroup.prototype['userUidList'] = undefined;






export default MigratingApiGroup;

