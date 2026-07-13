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

/**
 * The RoomTemplateDto model module.
 * @module models/RoomTemplateDto
 * @version 3.2.0
 */
class RoomTemplateDto {
    /**
     * Constructs a new <code>RoomTemplateDto</code>.
     * The room template parameters.
     * @alias module:models/RoomTemplateDto
     * @param roomId {Number} The room template ID.
     */
    constructor(roomId) { 
        
        RoomTemplateDto.initialize(this, roomId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, roomId) { 
        obj['roomId'] = roomId;
    }

    /**
     * Constructs a <code>RoomTemplateDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/RoomTemplateDto} obj Optional instance to populate.
     * @return {module:models/RoomTemplateDto} The populated <code>RoomTemplateDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoomTemplateDto();

            if (data.hasOwnProperty('roomId')) {
                obj['roomId'] = ApiClient.convertToType(data['roomId'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = LogoRequest.constructFromObject(data['logo']);
            }
            if (data.hasOwnProperty('copyLogo')) {
                obj['copyLogo'] = ApiClient.convertToType(data['copyLogo'], 'Boolean');
            }
            if (data.hasOwnProperty('share')) {
                obj['share'] = ApiClient.convertToType(data['share'], ['String']);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], ['String']);
            }
            if (data.hasOwnProperty('public')) {
                obj['public'] = ApiClient.convertToType(data['public'], 'Boolean');
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
            if (data.hasOwnProperty('quota')) {
                obj['quota'] = ApiClient.convertToType(data['quota'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RoomTemplateDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RoomTemplateDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RoomTemplateDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // validate the optional field `logo`
        if (data['logo']) { // data not null
          LogoRequest.validateJSON(data['logo']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['share'])) {
            throw new Error("Expected the field `share` to be an array in the JSON data but got " + data['share']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['groups'])) {
            throw new Error("Expected the field `groups` to be an array in the JSON data but got " + data['groups']);
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

RoomTemplateDto.RequiredProperties = ["roomId"];

/**
 * The room template ID.
 * @member {Number} roomId
 */
RoomTemplateDto.prototype['roomId'] = undefined;

/**
 * The room template title.
 * @member {String} title
 */
RoomTemplateDto.prototype['title'] = undefined;

/**
 * @member {module:models/LogoRequest} logo
 */
RoomTemplateDto.prototype['logo'] = undefined;

/**
 * Specifies whether to copy room logo or not.
 * @member {Boolean} copyLogo
 */
RoomTemplateDto.prototype['copyLogo'] = undefined;

/**
 * The collection of email addresses of users with whom to share a room.
 * @member {Array.<String>} share
 */
RoomTemplateDto.prototype['share'] = undefined;

/**
 * The collection of groups with whom to share a room.
 * @member {Array.<String>} groups
 */
RoomTemplateDto.prototype['groups'] = undefined;

/**
 * Specifies whether the room template is public or not.
 * @member {Boolean} public
 */
RoomTemplateDto.prototype['public'] = undefined;

/**
 * The collection of tags.
 * @member {Array.<String>} tags
 */
RoomTemplateDto.prototype['tags'] = undefined;

/**
 * The color of the room template.
 * @member {String} color
 */
RoomTemplateDto.prototype['color'] = undefined;

/**
 * The cover of the room template.
 * @member {String} cover
 */
RoomTemplateDto.prototype['cover'] = undefined;

/**
 * Room quota
 * @member {Number} quota
 */
RoomTemplateDto.prototype['quota'] = undefined;






export default RoomTemplateDto;

