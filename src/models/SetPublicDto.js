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
 * The SetPublicDto model module.
 * @module models/SetPublicDto
 * @version 3.2.0
 */
class SetPublicDto {
    /**
     * Constructs a new <code>SetPublicDto</code>.
     * The public settings of the room template to set.
     * @alias module:models/SetPublicDto
     * @param id {Number} The room template ID.
     */
    constructor(id) { 
        
        SetPublicDto.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>SetPublicDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SetPublicDto} obj Optional instance to populate.
     * @return {module:models/SetPublicDto} The populated <code>SetPublicDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetPublicDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('public')) {
                obj['public'] = ApiClient.convertToType(data['public'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SetPublicDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SetPublicDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SetPublicDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

SetPublicDto.RequiredProperties = ["id"];

/**
 * The room template ID.
 * @member {Number} id
 */
SetPublicDto.prototype['id'] = undefined;

/**
 * Specifies whether the room template is public or not.
 * @member {Boolean} public
 */
SetPublicDto.prototype['public'] = undefined;






export default SetPublicDto;

