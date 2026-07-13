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
import RoomDataLifetimePeriod from './RoomDataLifetimePeriod';

/**
 * The RoomDataLifetimeDto model module.
 * @module models/RoomDataLifetimeDto
 * @version 3.2.0
 */
class RoomDataLifetimeDto {
    /**
     * Constructs a new <code>RoomDataLifetimeDto</code>.
     * The room data lifetime information.
     * @alias module:models/RoomDataLifetimeDto
     */
    constructor() { 
        
        RoomDataLifetimeDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RoomDataLifetimeDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/RoomDataLifetimeDto} obj Optional instance to populate.
     * @return {module:models/RoomDataLifetimeDto} The populated <code>RoomDataLifetimeDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoomDataLifetimeDto();

            if (data.hasOwnProperty('deletePermanently')) {
                obj['deletePermanently'] = ApiClient.convertToType(data['deletePermanently'], 'Boolean');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = RoomDataLifetimePeriod.constructFromObject(data['period']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RoomDataLifetimeDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RoomDataLifetimeDto</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Specifies whether to permanently delete the room data or not.
 * @member {Boolean} deletePermanently
 */
RoomDataLifetimeDto.prototype['deletePermanently'] = undefined;

/**
 * @member {module:models/RoomDataLifetimePeriod} period
 */
RoomDataLifetimeDto.prototype['period'] = undefined;

/**
 * Specifies the time period value of the room data lifetime.
 * @member {Number} value
 */
RoomDataLifetimeDto.prototype['value'] = undefined;

/**
 * Specifies whether the room data lifetime setting is enabled or not.
 * @member {Boolean} enabled
 */
RoomDataLifetimeDto.prototype['enabled'] = undefined;






export default RoomDataLifetimeDto;

