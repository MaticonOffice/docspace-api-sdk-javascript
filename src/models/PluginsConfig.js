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
 * The PluginsConfig model module.
 * @module models/PluginsConfig
 * @version 3.2.0
 */
class PluginsConfig {
    /**
     * Constructs a new <code>PluginsConfig</code>.
     * The configuration settings to connect the special add-ons.
     * @alias module:models/PluginsConfig
     */
    constructor() { 
        
        PluginsConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PluginsConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/PluginsConfig} obj Optional instance to populate.
     * @return {module:models/PluginsConfig} The populated <code>PluginsConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PluginsConfig();

            if (data.hasOwnProperty('pluginsData')) {
                obj['pluginsData'] = ApiClient.convertToType(data['pluginsData'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PluginsConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PluginsConfig</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['pluginsData'])) {
            throw new Error("Expected the field `pluginsData` to be an array in the JSON data but got " + data['pluginsData']);
        }

        return true;
    }


}



/**
 * The array of absolute URLs to the plugin configuration files.
 * @member {Array.<String>} pluginsData
 */
PluginsConfig.prototype['pluginsData'] = undefined;






export default PluginsConfig;

