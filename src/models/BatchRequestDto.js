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
import BatchRequestDtoDestFolderId from './BatchRequestDtoDestFolderId';
import FileConflictResolveType from './FileConflictResolveType';

/**
 * The BatchRequestDto model module.
 * @module models/BatchRequestDto
 * @version 3.2.0
 */
class BatchRequestDto {
    /**
     * Constructs a new <code>BatchRequestDto</code>.
     * The request parameters for copying/moving files.
     * @alias module:models/BatchRequestDto
     */
    constructor() { 
        
        BatchRequestDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BatchRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/BatchRequestDto} obj Optional instance to populate.
     * @return {module:models/BatchRequestDto} The populated <code>BatchRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchRequestDto();

            if (data.hasOwnProperty('returnSingleOperation')) {
                obj['returnSingleOperation'] = ApiClient.convertToType(data['returnSingleOperation'], 'Boolean');
            }
            if (data.hasOwnProperty('folderIds')) {
                obj['folderIds'] = ApiClient.convertToType(data['folderIds'], [BaseBatchRequestDtoFolderIdsInner]);
            }
            if (data.hasOwnProperty('fileIds')) {
                obj['fileIds'] = ApiClient.convertToType(data['fileIds'], [BaseBatchRequestDtoFolderIdsInner]);
            }
            if (data.hasOwnProperty('destFolderId')) {
                obj['destFolderId'] = BatchRequestDtoDestFolderId.constructFromObject(data['destFolderId']);
            }
            if (data.hasOwnProperty('conflictResolveType')) {
                obj['conflictResolveType'] = FileConflictResolveType.constructFromObject(data['conflictResolveType']);
            }
            if (data.hasOwnProperty('deleteAfter')) {
                obj['deleteAfter'] = ApiClient.convertToType(data['deleteAfter'], 'Boolean');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'Boolean');
            }
            if (data.hasOwnProperty('toFillOut')) {
                obj['toFillOut'] = ApiClient.convertToType(data['toFillOut'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BatchRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BatchRequestDto</code>.
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
        // validate the optional field `destFolderId`
        if (data['destFolderId']) { // data not null
          BatchRequestDtoDestFolderId.validateJSON(data['destFolderId']);
        }

        return true;
    }


}



/**
 * Specifies whether to return only the current operation
 * @member {Boolean} returnSingleOperation
 */
BatchRequestDto.prototype['returnSingleOperation'] = undefined;

/**
 * The list of folder IDs to be copied/moved.
 * @member {Array.<module:models/BaseBatchRequestDtoFolderIdsInner>} folderIds
 */
BatchRequestDto.prototype['folderIds'] = undefined;

/**
 * The list of file IDs to be copied/moved.
 * @member {Array.<module:models/BaseBatchRequestDtoFolderIdsInner>} fileIds
 */
BatchRequestDto.prototype['fileIds'] = undefined;

/**
 * @member {module:models/BatchRequestDtoDestFolderId} destFolderId
 */
BatchRequestDto.prototype['destFolderId'] = undefined;

/**
 * @member {module:models/FileConflictResolveType} conflictResolveType
 */
BatchRequestDto.prototype['conflictResolveType'] = undefined;

/**
 * Specifies whether to delete the source files/folders after they are moved or copied to the destination folder.
 * @member {Boolean} deleteAfter
 */
BatchRequestDto.prototype['deleteAfter'] = undefined;

/**
 * Specifies whether to copy or move the folder content or not.
 * @member {Boolean} content
 */
BatchRequestDto.prototype['content'] = undefined;

/**
 * Specifies whether the file is copied for filling out
 * @member {Boolean} toFillOut
 */
BatchRequestDto.prototype['toFillOut'] = undefined;






export default BatchRequestDto;

