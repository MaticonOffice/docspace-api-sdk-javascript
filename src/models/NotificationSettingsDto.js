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
import NotificationType from './NotificationType';

/**
 * The NotificationSettingsDto model module.
 * @module models/NotificationSettingsDto
 * @version 3.2.0
 */
class NotificationSettingsDto {
    /**
     * Constructs a new <code>NotificationSettingsDto</code>.
     * The notification settings parameters.
     * @alias module:models/NotificationSettingsDto
     */
    constructor() { 
        
        NotificationSettingsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NotificationSettingsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/NotificationSettingsDto} obj Optional instance to populate.
     * @return {module:models/NotificationSettingsDto} The populated <code>NotificationSettingsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationSettingsDto();

            if (data.hasOwnProperty('type')) {
                obj['type'] = NotificationType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('isEnabled')) {
                obj['isEnabled'] = ApiClient.convertToType(data['isEnabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NotificationSettingsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NotificationSettingsDto</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {module:models/NotificationType} type
 */
NotificationSettingsDto.prototype['type'] = undefined;

/**
 * Specifies if the notification type is enabled or not.
 * @member {Boolean} isEnabled
 */
NotificationSettingsDto.prototype['isEnabled'] = undefined;






export default NotificationSettingsDto;

