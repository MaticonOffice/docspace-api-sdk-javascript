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
 * The LoginSettingsDto model module.
 * @module models/LoginSettingsDto
 * @version 3.2.0
 */
class LoginSettingsDto {
    /**
     * Constructs a new <code>LoginSettingsDto</code>.
     * The login settings parameters.
     * @alias module:models/LoginSettingsDto
     */
    constructor() { 
        
        LoginSettingsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoginSettingsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/LoginSettingsDto} obj Optional instance to populate.
     * @return {module:models/LoginSettingsDto} The populated <code>LoginSettingsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoginSettingsDto();

            if (data.hasOwnProperty('attemptCount')) {
                obj['attemptCount'] = ApiClient.convertToType(data['attemptCount'], 'Number');
            }
            if (data.hasOwnProperty('blockTime')) {
                obj['blockTime'] = ApiClient.convertToType(data['blockTime'], 'Number');
            }
            if (data.hasOwnProperty('checkPeriod')) {
                obj['checkPeriod'] = ApiClient.convertToType(data['checkPeriod'], 'Number');
            }
            if (data.hasOwnProperty('isDefault')) {
                obj['isDefault'] = ApiClient.convertToType(data['isDefault'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LoginSettingsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LoginSettingsDto</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The maximum number of consecutive failed login attempts allowed before triggering account suspension.
 * @member {Number} attemptCount
 */
LoginSettingsDto.prototype['attemptCount'] = undefined;

/**
 * The duration (in minutes) for which an account remains suspended after exceeding maximum login attempts.
 * @member {Number} blockTime
 */
LoginSettingsDto.prototype['blockTime'] = undefined;

/**
 * The maximum time (in seconds) allowed for server to process and respond to login requests.
 * @member {Number} checkPeriod
 */
LoginSettingsDto.prototype['checkPeriod'] = undefined;

/**
 * Specifies if these settings are default or not
 * @member {Boolean} isDefault
 */
LoginSettingsDto.prototype['isDefault'] = undefined;






export default LoginSettingsDto;

