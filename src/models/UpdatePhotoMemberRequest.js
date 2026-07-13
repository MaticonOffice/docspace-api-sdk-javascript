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
 * The UpdatePhotoMemberRequest model module.
 * @module models/UpdatePhotoMemberRequest
 * @version 3.2.0
 */
class UpdatePhotoMemberRequest {
    /**
     * Constructs a new <code>UpdatePhotoMemberRequest</code>.
     * The request parameters for updating a photo.
     * @alias module:models/UpdatePhotoMemberRequest
     */
    constructor() { 
        
        UpdatePhotoMemberRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdatePhotoMemberRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UpdatePhotoMemberRequest} obj Optional instance to populate.
     * @return {module:models/UpdatePhotoMemberRequest} The populated <code>UpdatePhotoMemberRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePhotoMemberRequest();

            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdatePhotoMemberRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdatePhotoMemberRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['files'] && !(typeof data['files'] === 'string' || data['files'] instanceof String)) {
            throw new Error("Expected the field `files` to be a primitive type in the JSON string but got " + data['files']);
        }

        return true;
    }


}



/**
 * The avatar photo URL.
 * @member {String} files
 */
UpdatePhotoMemberRequest.prototype['files'] = undefined;






export default UpdatePhotoMemberRequest;

