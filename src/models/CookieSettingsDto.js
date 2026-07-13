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
 * The CookieSettingsDto model module.
 * @module models/CookieSettingsDto
 * @version 3.2.0
 */
class CookieSettingsDto {
    /**
     * Constructs a new <code>CookieSettingsDto</code>.
     * The cookie settings.
     * @alias module:models/CookieSettingsDto
     */
    constructor() { 
        
        CookieSettingsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CookieSettingsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CookieSettingsDto} obj Optional instance to populate.
     * @return {module:models/CookieSettingsDto} The populated <code>CookieSettingsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CookieSettingsDto();

            if (data.hasOwnProperty('lifeTime')) {
                obj['lifeTime'] = ApiClient.convertToType(data['lifeTime'], 'Number');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CookieSettingsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CookieSettingsDto</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The cookie lifetime value in minutes.
 * @member {Number} lifeTime
 */
CookieSettingsDto.prototype['lifeTime'] = undefined;

/**
 * Specifies if the cookie settings are enabled or not.
 * @member {Boolean} enabled
 */
CookieSettingsDto.prototype['enabled'] = undefined;






export default CookieSettingsDto;

