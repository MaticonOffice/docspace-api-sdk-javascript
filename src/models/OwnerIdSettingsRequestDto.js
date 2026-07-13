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
 * The OwnerIdSettingsRequestDto model module.
 * @module models/OwnerIdSettingsRequestDto
 * @version 3.2.0
 */
class OwnerIdSettingsRequestDto {
    /**
     * Constructs a new <code>OwnerIdSettingsRequestDto</code>.
     * The request parameters for managing the owner-specific settings.
     * @alias module:models/OwnerIdSettingsRequestDto
     * @param ownerId {String} The ID of the owner whose settings are being managed.
     */
    constructor(ownerId) { 
        
        OwnerIdSettingsRequestDto.initialize(this, ownerId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ownerId) { 
        obj['ownerId'] = ownerId;
    }

    /**
     * Constructs a <code>OwnerIdSettingsRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/OwnerIdSettingsRequestDto} obj Optional instance to populate.
     * @return {module:models/OwnerIdSettingsRequestDto} The populated <code>OwnerIdSettingsRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OwnerIdSettingsRequestDto();

            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OwnerIdSettingsRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OwnerIdSettingsRequestDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OwnerIdSettingsRequestDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['ownerId'] && !(typeof data['ownerId'] === 'string' || data['ownerId'] instanceof String)) {
            throw new Error("Expected the field `ownerId` to be a primitive type in the JSON string but got " + data['ownerId']);
        }

        return true;
    }


}

OwnerIdSettingsRequestDto.RequiredProperties = ["ownerId"];

/**
 * The ID of the owner whose settings are being managed.
 * @member {String} ownerId
 */
OwnerIdSettingsRequestDto.prototype['ownerId'] = undefined;






export default OwnerIdSettingsRequestDto;

