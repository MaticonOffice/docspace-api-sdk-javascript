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
 * The NotificationSettingsRequestsDto model module.
 * @module models/NotificationSettingsRequestsDto
 * @version 3.2.0
 */
class NotificationSettingsRequestsDto {
    /**
     * Constructs a new <code>NotificationSettingsRequestsDto</code>.
     * The request parameters for configuring notification settings.
     * @alias module:models/NotificationSettingsRequestsDto
     * @param type {module:models/NotificationType} 
     */
    constructor(type) { 
        
        NotificationSettingsRequestsDto.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>NotificationSettingsRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/NotificationSettingsRequestsDto} obj Optional instance to populate.
     * @return {module:models/NotificationSettingsRequestsDto} The populated <code>NotificationSettingsRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationSettingsRequestsDto();

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
     * Validates the JSON data with respect to <code>NotificationSettingsRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NotificationSettingsRequestsDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NotificationSettingsRequestsDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

NotificationSettingsRequestsDto.RequiredProperties = ["type"];

/**
 * @member {module:models/NotificationType} type
 */
NotificationSettingsRequestsDto.prototype['type'] = undefined;

/**
 * Specifies if the specified notification type is enabled or not.
 * @member {Boolean} isEnabled
 */
NotificationSettingsRequestsDto.prototype['isEnabled'] = undefined;






export default NotificationSettingsRequestsDto;

