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
import LogoRequest from './LogoRequest';
import RoomDataLifetimeDto from './RoomDataLifetimeDto';
import WatermarkRequestDto from './WatermarkRequestDto';

/**
 * The UpdateRoomRequest model module.
 * @module models/UpdateRoomRequest
 * @version 3.2.0
 */
class UpdateRoomRequest {
    /**
     * Constructs a new <code>UpdateRoomRequest</code>.
     * The request parameters for updating a room.
     * @alias module:models/UpdateRoomRequest
     */
    constructor() { 
        
        UpdateRoomRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateRoomRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UpdateRoomRequest} obj Optional instance to populate.
     * @return {module:models/UpdateRoomRequest} The populated <code>UpdateRoomRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateRoomRequest();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('quota')) {
                obj['quota'] = ApiClient.convertToType(data['quota'], 'Number');
            }
            if (data.hasOwnProperty('indexing')) {
                obj['indexing'] = ApiClient.convertToType(data['indexing'], 'Boolean');
            }
            if (data.hasOwnProperty('denyDownload')) {
                obj['denyDownload'] = ApiClient.convertToType(data['denyDownload'], 'Boolean');
            }
            if (data.hasOwnProperty('lifetime')) {
                obj['lifetime'] = RoomDataLifetimeDto.constructFromObject(data['lifetime']);
            }
            if (data.hasOwnProperty('watermark')) {
                obj['watermark'] = WatermarkRequestDto.constructFromObject(data['watermark']);
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = LogoRequest.constructFromObject(data['logo']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('cover')) {
                obj['cover'] = ApiClient.convertToType(data['cover'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateRoomRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateRoomRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // validate the optional field `lifetime`
        if (data['lifetime']) { // data not null
          RoomDataLifetimeDto.validateJSON(data['lifetime']);
        }
        // validate the optional field `watermark`
        if (data['watermark']) { // data not null
          WatermarkRequestDto.validateJSON(data['watermark']);
        }
        // validate the optional field `logo`
        if (data['logo']) { // data not null
          LogoRequest.validateJSON(data['logo']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is a string
        if (data['color'] && !(typeof data['color'] === 'string' || data['color'] instanceof String)) {
            throw new Error("Expected the field `color` to be a primitive type in the JSON string but got " + data['color']);
        }
        // ensure the json data is a string
        if (data['cover'] && !(typeof data['cover'] === 'string' || data['cover'] instanceof String)) {
            throw new Error("Expected the field `cover` to be a primitive type in the JSON string but got " + data['cover']);
        }

        return true;
    }


}



/**
 * The room title.
 * @member {String} title
 */
UpdateRoomRequest.prototype['title'] = undefined;

/**
 * The room quota.
 * @member {Number} quota
 */
UpdateRoomRequest.prototype['quota'] = undefined;

/**
 * Specifies whether to create a third-party room with indexing.
 * @member {Boolean} indexing
 */
UpdateRoomRequest.prototype['indexing'] = undefined;

/**
 * Specifies whether to deny downloads from the third-party room.
 * @member {Boolean} denyDownload
 */
UpdateRoomRequest.prototype['denyDownload'] = undefined;

/**
 * @member {module:models/RoomDataLifetimeDto} lifetime
 */
UpdateRoomRequest.prototype['lifetime'] = undefined;

/**
 * @member {module:models/WatermarkRequestDto} watermark
 */
UpdateRoomRequest.prototype['watermark'] = undefined;

/**
 * @member {module:models/LogoRequest} logo
 */
UpdateRoomRequest.prototype['logo'] = undefined;

/**
 * The list of tags.
 * @member {Array.<String>} tags
 */
UpdateRoomRequest.prototype['tags'] = undefined;

/**
 * The room color.
 * @member {String} color
 */
UpdateRoomRequest.prototype['color'] = undefined;

/**
 * The room cover.
 * @member {String} cover
 */
UpdateRoomRequest.prototype['cover'] = undefined;






export default UpdateRoomRequest;

