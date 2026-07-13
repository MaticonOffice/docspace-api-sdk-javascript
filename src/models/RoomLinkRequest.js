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
import ApiDateTime from './ApiDateTime';
import FileShare from './FileShare';
import LinkType from './LinkType';

/**
 * The RoomLinkRequest model module.
 * @module models/RoomLinkRequest
 * @version 3.2.0
 */
class RoomLinkRequest {
    /**
     * Constructs a new <code>RoomLinkRequest</code>.
     * The room link parameters.
     * @alias module:models/RoomLinkRequest
     */
    constructor() { 
        
        RoomLinkRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RoomLinkRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/RoomLinkRequest} obj Optional instance to populate.
     * @return {module:models/RoomLinkRequest} The populated <code>RoomLinkRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoomLinkRequest();

            if (data.hasOwnProperty('linkId')) {
                obj['linkId'] = ApiClient.convertToType(data['linkId'], 'String');
            }
            if (data.hasOwnProperty('access')) {
                obj['access'] = FileShare.constructFromObject(data['access']);
            }
            if (data.hasOwnProperty('expirationDate')) {
                obj['expirationDate'] = ApiDateTime.constructFromObject(data['expirationDate']);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('linkType')) {
                obj['linkType'] = LinkType.constructFromObject(data['linkType']);
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('denyDownload')) {
                obj['denyDownload'] = ApiClient.convertToType(data['denyDownload'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RoomLinkRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RoomLinkRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['linkId'] && !(typeof data['linkId'] === 'string' || data['linkId'] instanceof String)) {
            throw new Error("Expected the field `linkId` to be a primitive type in the JSON string but got " + data['linkId']);
        }
        // validate the optional field `expirationDate`
        if (data['expirationDate']) { // data not null
          ApiDateTime.validateJSON(data['expirationDate']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }

        return true;
    }


}



/**
 * The room link ID.
 * @member {String} linkId
 */
RoomLinkRequest.prototype['linkId'] = undefined;

/**
 * @member {module:models/FileShare} access
 */
RoomLinkRequest.prototype['access'] = undefined;

/**
 * @member {module:models/ApiDateTime} expirationDate
 */
RoomLinkRequest.prototype['expirationDate'] = undefined;

/**
 * The link name.
 * @member {String} title
 */
RoomLinkRequest.prototype['title'] = undefined;

/**
 * @member {module:models/LinkType} linkType
 */
RoomLinkRequest.prototype['linkType'] = undefined;

/**
 * The link password.
 * @member {String} password
 */
RoomLinkRequest.prototype['password'] = undefined;

/**
 * Specifies if downloading the file from the link is disabled or not.
 * @member {Boolean} denyDownload
 */
RoomLinkRequest.prototype['denyDownload'] = undefined;






export default RoomLinkRequest;

