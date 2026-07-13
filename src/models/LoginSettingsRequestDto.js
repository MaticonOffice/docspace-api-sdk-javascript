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
 * The LoginSettingsRequestDto model module.
 * @module models/LoginSettingsRequestDto
 * @version 3.2.0
 */
class LoginSettingsRequestDto {
    /**
     * Constructs a new <code>LoginSettingsRequestDto</code>.
     * The request parameters for configuring login security and performance settings.
     * @alias module:models/LoginSettingsRequestDto
     */
    constructor() { 
        
        LoginSettingsRequestDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoginSettingsRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/LoginSettingsRequestDto} obj Optional instance to populate.
     * @return {module:models/LoginSettingsRequestDto} The populated <code>LoginSettingsRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoginSettingsRequestDto();

            if (data.hasOwnProperty('attemptCount')) {
                obj['attemptCount'] = ApiClient.convertToType(data['attemptCount'], 'Number');
            }
            if (data.hasOwnProperty('blockTime')) {
                obj['blockTime'] = ApiClient.convertToType(data['blockTime'], 'Number');
            }
            if (data.hasOwnProperty('checkPeriod')) {
                obj['checkPeriod'] = ApiClient.convertToType(data['checkPeriod'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LoginSettingsRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LoginSettingsRequestDto</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The maximum number of consecutive failed login attempts allowed before triggering account suspension.
 * @member {Number} attemptCount
 */
LoginSettingsRequestDto.prototype['attemptCount'] = undefined;

/**
 * The duration (in minutes) for which an account remains suspended after exceeding maximum login attempts.
 * @member {Number} blockTime
 */
LoginSettingsRequestDto.prototype['blockTime'] = undefined;

/**
 * The maximum time (in seconds) allowed for server to process and respond to login requests.
 * @member {Number} checkPeriod
 */
LoginSettingsRequestDto.prototype['checkPeriod'] = undefined;






export default LoginSettingsRequestDto;

