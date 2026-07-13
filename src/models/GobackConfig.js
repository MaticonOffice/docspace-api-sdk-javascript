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
 * The GobackConfig model module.
 * @module models/GobackConfig
 * @version 3.2.0
 */
class GobackConfig {
    /**
     * Constructs a new <code>GobackConfig</code>.
     * The settings for the \&quot;Open file location\&quot; menu button and upper right corner button.
     * @alias module:models/GobackConfig
     */
    constructor() { 
        
        GobackConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GobackConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/GobackConfig} obj Optional instance to populate.
     * @return {module:models/GobackConfig} The populated <code>GobackConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GobackConfig();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GobackConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GobackConfig</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}



/**
 * The absolute URL to the website address which will be opened when clicking the \"Open file location\" menu button.
 * @member {String} url
 */
GobackConfig.prototype['url'] = undefined;






export default GobackConfig;

