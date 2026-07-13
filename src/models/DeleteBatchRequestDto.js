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
 * The DeleteBatchRequestDto model module.
 * @module models/DeleteBatchRequestDto
 * @version 3.2.0
 */
class DeleteBatchRequestDto {
    /**
     * Constructs a new <code>DeleteBatchRequestDto</code>.
     * The request parameters for deleting files.
     * @alias module:models/DeleteBatchRequestDto
     */
    constructor() { 
        
        DeleteBatchRequestDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteBatchRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/DeleteBatchRequestDto} obj Optional instance to populate.
     * @return {module:models/DeleteBatchRequestDto} The populated <code>DeleteBatchRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteBatchRequestDto();

            if (data.hasOwnProperty('returnSingleOperation')) {
                obj['returnSingleOperation'] = ApiClient.convertToType(data['returnSingleOperation'], 'Boolean');
            }
            if (data.hasOwnProperty('folderIds')) {
                obj['folderIds'] = ApiClient.convertToType(data['folderIds'], [BaseBatchRequestDtoFolderIdsInner]);
            }
            if (data.hasOwnProperty('fileIds')) {
                obj['fileIds'] = ApiClient.convertToType(data['fileIds'], [BaseBatchRequestDtoFolderIdsInner]);
            }
            if (data.hasOwnProperty('deleteAfter')) {
                obj['deleteAfter'] = ApiClient.convertToType(data['deleteAfter'], 'Boolean');
            }
            if (data.hasOwnProperty('immediately')) {
                obj['immediately'] = ApiClient.convertToType(data['immediately'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteBatchRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteBatchRequestDto</code>.
     */
    static validateJSON(data) {
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

        return true;
    }


}



/**
 * Specifies whether to return only the current operation
 * @member {Boolean} returnSingleOperation
 */
DeleteBatchRequestDto.prototype['returnSingleOperation'] = undefined;

/**
 * The list of folder IDs to be deleted.
 * @member {Array.<module:models/BaseBatchRequestDtoFolderIdsInner>} folderIds
 */
DeleteBatchRequestDto.prototype['folderIds'] = undefined;

/**
 * The list of file IDs to be deleted.
 * @member {Array.<module:models/BaseBatchRequestDtoFolderIdsInner>} fileIds
 */
DeleteBatchRequestDto.prototype['fileIds'] = undefined;

/**
 * Specifies whether to delete a file after the editing session is finished or not
 * @member {Boolean} deleteAfter
 */
DeleteBatchRequestDto.prototype['deleteAfter'] = undefined;

/**
 * Specifies whether to move a file to the \\\"Trash\\\" folder or delete it immediately.
 * @member {Boolean} immediately
 */
DeleteBatchRequestDto.prototype['immediately'] = undefined;






export default DeleteBatchRequestDto;

