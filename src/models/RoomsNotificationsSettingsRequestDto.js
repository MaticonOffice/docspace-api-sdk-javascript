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
 * The RoomsNotificationsSettingsRequestDto model module.
 * @module models/RoomsNotificationsSettingsRequestDto
 * @version 3.2.0
 */
class RoomsNotificationsSettingsRequestDto {
    /**
     * Constructs a new <code>RoomsNotificationsSettingsRequestDto</code>.
     * The request parameters for configuring notification settings for the chat or collaboration rooms.
     * @alias module:models/RoomsNotificationsSettingsRequestDto
     */
    constructor() { 
        
        RoomsNotificationsSettingsRequestDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RoomsNotificationsSettingsRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/RoomsNotificationsSettingsRequestDto} obj Optional instance to populate.
     * @return {module:models/RoomsNotificationsSettingsRequestDto} The populated <code>RoomsNotificationsSettingsRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoomsNotificationsSettingsRequestDto();

            if (data.hasOwnProperty('roomsId')) {
                obj['roomsId'] = ApiClient.convertToType(data['roomsId'], Object);
            }
            if (data.hasOwnProperty('mute')) {
                obj['mute'] = ApiClient.convertToType(data['mute'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RoomsNotificationsSettingsRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RoomsNotificationsSettingsRequestDto</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The target room identifier.
 * @member {Object} roomsId
 */
RoomsNotificationsSettingsRequestDto.prototype['roomsId'] = undefined;

/**
 * Specifies whether the notifications will be delivered to the specified room or not.
 * @member {Boolean} mute
 */
RoomsNotificationsSettingsRequestDto.prototype['mute'] = undefined;






export default RoomsNotificationsSettingsRequestDto;

