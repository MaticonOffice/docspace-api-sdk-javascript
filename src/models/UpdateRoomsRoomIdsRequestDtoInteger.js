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
import BaseBatchRequestDtoFolderIdsInner from './BaseBatchRequestDtoFolderIdsInner';

/**
 * The UpdateRoomsRoomIdsRequestDtoInteger model module.
 * @module models/UpdateRoomsRoomIdsRequestDtoInteger
 * @version 3.2.0
 */
class UpdateRoomsRoomIdsRequestDtoInteger {
    /**
     * Constructs a new <code>UpdateRoomsRoomIdsRequestDtoInteger</code>.
     * The request parameters for updating the room.
     * @alias module:models/UpdateRoomsRoomIdsRequestDtoInteger
     */
    constructor() { 
        
        UpdateRoomsRoomIdsRequestDtoInteger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateRoomsRoomIdsRequestDtoInteger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UpdateRoomsRoomIdsRequestDtoInteger} obj Optional instance to populate.
     * @return {module:models/UpdateRoomsRoomIdsRequestDtoInteger} The populated <code>UpdateRoomsRoomIdsRequestDtoInteger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateRoomsRoomIdsRequestDtoInteger();

            if (data.hasOwnProperty('roomIds')) {
                obj['roomIds'] = ApiClient.convertToType(data['roomIds'], [BaseBatchRequestDtoFolderIdsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateRoomsRoomIdsRequestDtoInteger</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateRoomsRoomIdsRequestDtoInteger</code>.
     */
    static validateJSON(data) {
        if (data['roomIds']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['roomIds'])) {
                throw new Error("Expected the field `roomIds` to be an array in the JSON data but got " + data['roomIds']);
            }
            // validate the optional field `roomIds` (array)
            for (const item of data['roomIds']) {
                BaseBatchRequestDtoFolderIdsInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The list of room IDs.
 * @member {Array.<module:models/BaseBatchRequestDtoFolderIdsInner>} roomIds
 */
UpdateRoomsRoomIdsRequestDtoInteger.prototype['roomIds'] = undefined;






export default UpdateRoomsRoomIdsRequestDtoInteger;

