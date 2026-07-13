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
 * The CurrentLicenseInfo model module.
 * @module models/CurrentLicenseInfo
 * @version 3.2.0
 */
class CurrentLicenseInfo {
    /**
     * Constructs a new <code>CurrentLicenseInfo</code>.
     * The current license information.
     * @alias module:models/CurrentLicenseInfo
     */
    constructor() { 
        
        CurrentLicenseInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CurrentLicenseInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CurrentLicenseInfo} obj Optional instance to populate.
     * @return {module:models/CurrentLicenseInfo} The populated <code>CurrentLicenseInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CurrentLicenseInfo();

            if (data.hasOwnProperty('trial')) {
                obj['trial'] = ApiClient.convertToType(data['trial'], 'Boolean');
            }
            if (data.hasOwnProperty('dueDate')) {
                obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CurrentLicenseInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CurrentLicenseInfo</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Specifies whether the license is trial or not.
 * @member {Boolean} trial
 */
CurrentLicenseInfo.prototype['trial'] = undefined;

/**
 * The date when the license expires.
 * @member {Date} dueDate
 */
CurrentLicenseInfo.prototype['dueDate'] = undefined;






export default CurrentLicenseInfo;

