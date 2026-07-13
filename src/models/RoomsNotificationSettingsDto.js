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
 * The RoomsNotificationSettingsDto model module.
 * @module models/RoomsNotificationSettingsDto
 * @version 3.2.0
 */
class RoomsNotificationSettingsDto {
    /**
     * Constructs a new <code>RoomsNotificationSettingsDto</code>.
     * The rooms notification settings.
     * @alias module:models/RoomsNotificationSettingsDto
     */
    constructor() { 
        
        RoomsNotificationSettingsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RoomsNotificationSettingsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/RoomsNotificationSettingsDto} obj Optional instance to populate.
     * @return {module:models/RoomsNotificationSettingsDto} The populated <code>RoomsNotificationSettingsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoomsNotificationSettingsDto();

            if (data.hasOwnProperty('disabledRooms')) {
                obj['disabledRooms'] = ApiClient.convertToType(data['disabledRooms'], [Object]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RoomsNotificationSettingsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RoomsNotificationSettingsDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['disabledRooms'])) {
            throw new Error("Expected the field `disabledRooms` to be an array in the JSON data but got " + data['disabledRooms']);
        }

        return true;
    }


}



/**
 * The list of rooms with the disabled notifications.
 * @member {Array.<Object>} disabledRooms
 */
RoomsNotificationSettingsDto.prototype['disabledRooms'] = undefined;






export default RoomsNotificationSettingsDto;

