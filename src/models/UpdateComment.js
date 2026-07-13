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
 * The UpdateComment model module.
 * @module models/UpdateComment
 * @version 3.2.0
 */
class UpdateComment {
    /**
     * Constructs a new <code>UpdateComment</code>.
     * The parameters for updating a comment.
     * @alias module:models/UpdateComment
     * @param version {Number} The comment version.
     */
    constructor(version) { 
        
        UpdateComment.initialize(this, version);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, version) { 
        obj['version'] = version;
    }

    /**
     * Constructs a <code>UpdateComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UpdateComment} obj Optional instance to populate.
     * @return {module:models/UpdateComment} The populated <code>UpdateComment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateComment();

            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateComment</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateComment</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateComment.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
            throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
        }

        return true;
    }


}

UpdateComment.RequiredProperties = ["version"];

/**
 * The comment version.
 * @member {Number} version
 */
UpdateComment.prototype['version'] = undefined;

/**
 * The comment text.
 * @member {String} comment
 */
UpdateComment.prototype['comment'] = undefined;






export default UpdateComment;

