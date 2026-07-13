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
 * The CdnStorageSettings model module.
 * @module models/CdnStorageSettings
 * @version 3.2.0
 */
class CdnStorageSettings {
    /**
     * Constructs a new <code>CdnStorageSettings</code>.
     * @alias module:models/CdnStorageSettings
     */
    constructor() { 
        
        CdnStorageSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CdnStorageSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CdnStorageSettings} obj Optional instance to populate.
     * @return {module:models/CdnStorageSettings} The populated <code>CdnStorageSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CdnStorageSettings();

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
     * Validates the JSON data with respect to <code>CdnStorageSettings</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CdnStorageSettings</code>.
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
CdnStorageSettings.prototype['module'] = undefined;

/**
 * @member {Object.<String, String>} props
 */
CdnStorageSettings.prototype['props'] = undefined;

/**
 * @member {Date} lastModified
 */
CdnStorageSettings.prototype['lastModified'] = undefined;






export default CdnStorageSettings;

