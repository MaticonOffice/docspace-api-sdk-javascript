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
 * The DeleteRoomRequest model module.
 * @module models/DeleteRoomRequest
 * @version 3.2.0
 */
class DeleteRoomRequest {
    /**
     * Constructs a new <code>DeleteRoomRequest</code>.
     * The parameters for deleting a room.
     * @alias module:models/DeleteRoomRequest
     */
    constructor() { 
        
        DeleteRoomRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteRoomRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/DeleteRoomRequest} obj Optional instance to populate.
     * @return {module:models/DeleteRoomRequest} The populated <code>DeleteRoomRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteRoomRequest();

            if (data.hasOwnProperty('deleteAfter')) {
                obj['deleteAfter'] = ApiClient.convertToType(data['deleteAfter'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteRoomRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteRoomRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Specifies whether to delete a room after the editing session is finished or not.
 * @member {Boolean} deleteAfter
 */
DeleteRoomRequest.prototype['deleteAfter'] = undefined;






export default DeleteRoomRequest;

