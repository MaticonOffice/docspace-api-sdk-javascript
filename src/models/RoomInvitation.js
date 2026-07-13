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
import FileShare from './FileShare';

/**
 * The RoomInvitation model module.
 * @module models/RoomInvitation
 * @version 3.2.0
 */
class RoomInvitation {
    /**
     * Constructs a new <code>RoomInvitation</code>.
     * The room invitation parameters.
     * @alias module:models/RoomInvitation
     */
    constructor() { 
        
        RoomInvitation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RoomInvitation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/RoomInvitation} obj Optional instance to populate.
     * @return {module:models/RoomInvitation} The populated <code>RoomInvitation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoomInvitation();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('access')) {
                obj['access'] = FileShare.constructFromObject(data['access']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RoomInvitation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RoomInvitation</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }

        return true;
    }


}



/**
 * The email address.
 * @member {String} email
 */
RoomInvitation.prototype['email'] = undefined;

/**
 * The ID of the user to share a room with.
 * @member {String} id
 */
RoomInvitation.prototype['id'] = undefined;

/**
 * @member {module:models/FileShare} access
 */
RoomInvitation.prototype['access'] = undefined;






export default RoomInvitation;

