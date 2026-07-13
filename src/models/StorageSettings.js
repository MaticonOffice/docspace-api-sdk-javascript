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
 * The StorageSettings model module.
 * @module models/StorageSettings
 * @version 3.2.0
 */
class StorageSettings {
    /**
     * Constructs a new <code>StorageSettings</code>.
     * @alias module:models/StorageSettings
     */
    constructor() { 
        
        StorageSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StorageSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/StorageSettings} obj Optional instance to populate.
     * @return {module:models/StorageSettings} The populated <code>StorageSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorageSettings();

            if (data.hasOwnProperty('module')) {
                obj['module'] = ApiClient.convertToType(data['module'], 'String');
            }
            if (data.hasOwnProperty('props')) {
                obj['props'] = ApiClient.convertToType(data['props'], {'String': 'String'});
            }
            if (data.hasOwnProperty('lastModified')) {
                obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StorageSettings</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StorageSettings</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['module'] && !(typeof data['module'] === 'string' || data['module'] instanceof String)) {
            throw new Error("Expected the field `module` to be a primitive type in the JSON string but got " + data['module']);
        }

        return true;
    }


}



/**
 * @member {String} module
 */
StorageSettings.prototype['module'] = undefined;

/**
 * @member {Object.<String, String>} props
 */
StorageSettings.prototype['props'] = undefined;

/**
 * @member {Date} lastModified
 */
StorageSettings.prototype['lastModified'] = undefined;






export default StorageSettings;

