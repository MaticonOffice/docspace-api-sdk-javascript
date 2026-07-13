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
 * The WebPluginRequests model module.
 * @module models/WebPluginRequests
 * @version 3.2.0
 */
class WebPluginRequests {
    /**
     * Constructs a new <code>WebPluginRequests</code>.
     * The configuration settings for the web plugin instance.
     * @alias module:models/WebPluginRequests
     */
    constructor() { 
        
        WebPluginRequests.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebPluginRequests</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/WebPluginRequests} obj Optional instance to populate.
     * @return {module:models/WebPluginRequests} The populated <code>WebPluginRequests</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebPluginRequests();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = ApiClient.convertToType(data['settings'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebPluginRequests</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebPluginRequests</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['settings'] && !(typeof data['settings'] === 'string' || data['settings'] instanceof String)) {
            throw new Error("Expected the field `settings` to be a primitive type in the JSON string but got " + data['settings']);
        }

        return true;
    }


}



/**
 * Controls whether the web plugin is active and operational.
 * @member {Boolean} enabled
 */
WebPluginRequests.prototype['enabled'] = undefined;

/**
 * The JSON-formatted configuration settings for the web plugin.
 * @member {String} settings
 */
WebPluginRequests.prototype['settings'] = undefined;






export default WebPluginRequests;

