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
import BaseBatchRequestDtoFolderIdsInner from './BaseBatchRequestDtoFolderIdsInner';

/**
 * The ChangeOwnerRequestDto model module.
 * @module models/ChangeOwnerRequestDto
 * @version 3.2.0
 */
class ChangeOwnerRequestDto {
    /**
     * Constructs a new <code>ChangeOwnerRequestDto</code>.
     * The request parameters for changing the file owner.
     * @alias module:models/ChangeOwnerRequestDto
     * @param userId {String} The new file owner ID.
     */
    constructor(userId) { 
        
        ChangeOwnerRequestDto.initialize(this, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userId) { 
        obj['userId'] = userId;
    }

    /**
     * Constructs a <code>ChangeOwnerRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ChangeOwnerRequestDto} obj Optional instance to populate.
     * @return {module:models/ChangeOwnerRequestDto} The populated <code>ChangeOwnerRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChangeOwnerRequestDto();

            if (data.hasOwnProperty('folderIds')) {
                obj['folderIds'] = ApiClient.convertToType(data['folderIds'], [BaseBatchRequestDtoFolderIdsInner]);
            }
            if (data.hasOwnProperty('fileIds')) {
                obj['fileIds'] = ApiClient.convertToType(data['fileIds'], [BaseBatchRequestDtoFolderIdsInner]);
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChangeOwnerRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChangeOwnerRequestDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ChangeOwnerRequestDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['folderIds']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['folderIds'])) {
                throw new Error("Expected the field `folderIds` to be an array in the JSON data but got " + data['folderIds']);
            }
            // validate the optional field `folderIds` (array)
            for (const item of data['folderIds']) {
                BaseBatchRequestDtoFolderIdsInner.validateJSON(item);
            };
        }
        if (data['fileIds']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['fileIds'])) {
                throw new Error("Expected the field `fileIds` to be an array in the JSON data but got " + data['fileIds']);
            }
            // validate the optional field `fileIds` (array)
            for (const item of data['fileIds']) {
                BaseBatchRequestDtoFolderIdsInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['userId'] && !(typeof data['userId'] === 'string' || data['userId'] instanceof String)) {
            throw new Error("Expected the field `userId` to be a primitive type in the JSON string but got " + data['userId']);
        }

        return true;
    }


}

ChangeOwnerRequestDto.RequiredProperties = ["userId"];

/**
 * The list of folder IDs to change the owner.
 * @member {Array.<module:models/BaseBatchRequestDtoFolderIdsInner>} folderIds
 */
ChangeOwnerRequestDto.prototype['folderIds'] = undefined;

/**
 * The list of file IDs to change the owner.
 * @member {Array.<module:models/BaseBatchRequestDtoFolderIdsInner>} fileIds
 */
ChangeOwnerRequestDto.prototype['fileIds'] = undefined;

/**
 * The new file owner ID.
 * @member {String} userId
 */
ChangeOwnerRequestDto.prototype['userId'] = undefined;






export default ChangeOwnerRequestDto;

