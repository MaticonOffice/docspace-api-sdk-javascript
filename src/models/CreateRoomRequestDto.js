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
import FileShareParams from './FileShareParams';
import LogoRequest from './LogoRequest';
import RoomDataLifetimeDto from './RoomDataLifetimeDto';
import RoomType from './RoomType';
import WatermarkRequestDto from './WatermarkRequestDto';

/**
 * The CreateRoomRequestDto model module.
 * @module models/CreateRoomRequestDto
 * @version 3.2.0
 */
class CreateRoomRequestDto {
    /**
     * Constructs a new <code>CreateRoomRequestDto</code>.
     * The request parameters for creating a room.
     * @alias module:models/CreateRoomRequestDto
     * @param title {String} The room name.
     * @param roomType {module:models/RoomType} 
     */
    constructor(title, roomType) { 
        
        CreateRoomRequestDto.initialize(this, title, roomType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title, roomType) { 
        obj['title'] = title;
        obj['roomType'] = roomType;
    }

    /**
     * Constructs a <code>CreateRoomRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CreateRoomRequestDto} obj Optional instance to populate.
     * @return {module:models/CreateRoomRequestDto} The populated <code>CreateRoomRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRoomRequestDto();

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
            if (data.hasOwnProperty('roomType')) {
                obj['roomType'] = RoomType.constructFromObject(data['roomType']);
            }
            if (data.hasOwnProperty('private')) {
                obj['private'] = ApiClient.convertToType(data['private'], 'Boolean');
            }
            if (data.hasOwnProperty('share')) {
                obj['share'] = ApiClient.convertToType(data['share'], [FileShareParams]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateRoomRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateRoomRequestDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateRoomRequestDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
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
        if (data['share']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['share'])) {
                throw new Error("Expected the field `share` to be an array in the JSON data but got " + data['share']);
            }
            // validate the optional field `share` (array)
            for (const item of data['share']) {
                FileShareParams.validateJSON(item);
            };
        }

        return true;
    }


}

CreateRoomRequestDto.RequiredProperties = ["title", "roomType"];

/**
 * The room name.
 * @member {String} title
 */
CreateRoomRequestDto.prototype['title'] = undefined;

/**
 * The room quota.
 * @member {Number} quota
 */
CreateRoomRequestDto.prototype['quota'] = undefined;

/**
 * Specifies whether to create a room with indexing.
 * @member {Boolean} indexing
 */
CreateRoomRequestDto.prototype['indexing'] = undefined;

/**
 * Specifies whether to deny downloads from the room.
 * @member {Boolean} denyDownload
 */
CreateRoomRequestDto.prototype['denyDownload'] = undefined;

/**
 * @member {module:models/RoomDataLifetimeDto} lifetime
 */
CreateRoomRequestDto.prototype['lifetime'] = undefined;

/**
 * @member {module:models/WatermarkRequestDto} watermark
 */
CreateRoomRequestDto.prototype['watermark'] = undefined;

/**
 * @member {module:models/LogoRequest} logo
 */
CreateRoomRequestDto.prototype['logo'] = undefined;

/**
 * The list of tags.
 * @member {Array.<String>} tags
 */
CreateRoomRequestDto.prototype['tags'] = undefined;

/**
 * The room color.
 * @member {String} color
 */
CreateRoomRequestDto.prototype['color'] = undefined;

/**
 * The room cover.
 * @member {String} cover
 */
CreateRoomRequestDto.prototype['cover'] = undefined;

/**
 * @member {module:models/RoomType} roomType
 */
CreateRoomRequestDto.prototype['roomType'] = undefined;

/**
 * Specifies whether the room to be created is private or not.
 * @member {Boolean} private
 */
CreateRoomRequestDto.prototype['private'] = undefined;

/**
 * The collection of sharing parameters.
 * @member {Array.<module:models/FileShareParams>} share
 */
CreateRoomRequestDto.prototype['share'] = undefined;






export default CreateRoomRequestDto;

