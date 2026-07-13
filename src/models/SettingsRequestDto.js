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
 * The SettingsRequestDto model module.
 * @module models/SettingsRequestDto
 * @version 3.2.0
 */
class SettingsRequestDto {
    /**
     * Constructs a new <code>SettingsRequestDto</code>.
     * The settings request parameters.
     * @alias module:models/SettingsRequestDto
     */
    constructor() { 
        
        SettingsRequestDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SettingsRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SettingsRequestDto} obj Optional instance to populate.
     * @return {module:models/SettingsRequestDto} The populated <code>SettingsRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SettingsRequestDto();

            if (data.hasOwnProperty('set')) {
                obj['set'] = ApiClient.convertToType(data['set'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SettingsRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SettingsRequestDto</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Specifies whether to set the specified settings or not.
 * @member {Boolean} set
 */
SettingsRequestDto.prototype['set'] = undefined;






export default SettingsRequestDto;

