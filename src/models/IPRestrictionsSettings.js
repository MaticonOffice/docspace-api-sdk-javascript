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
 * The IPRestrictionsSettings model module.
 * @module models/IPRestrictionsSettings
 * @version 3.2.0
 */
class IPRestrictionsSettings {
    /**
     * Constructs a new <code>IPRestrictionsSettings</code>.
     * @alias module:models/IPRestrictionsSettings
     */
    constructor() { 
        
        IPRestrictionsSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IPRestrictionsSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/IPRestrictionsSettings} obj Optional instance to populate.
     * @return {module:models/IPRestrictionsSettings} The populated <code>IPRestrictionsSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IPRestrictionsSettings();

            if (data.hasOwnProperty('enable')) {
                obj['enable'] = ApiClient.convertToType(data['enable'], 'Boolean');
            }
            if (data.hasOwnProperty('lastModified')) {
                obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IPRestrictionsSettings</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IPRestrictionsSettings</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Boolean} enable
 */
IPRestrictionsSettings.prototype['enable'] = undefined;

/**
 * @member {Date} lastModified
 */
IPRestrictionsSettings.prototype['lastModified'] = undefined;






export default IPRestrictionsSettings;

