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
 * The BaseBatchRequestDto model module.
 * @module models/BaseBatchRequestDto
 * @version 3.2.0
 */
class BaseBatchRequestDto {
    /**
     * Constructs a new <code>BaseBatchRequestDto</code>.
     * The base batch request parameters.
     * @alias module:models/BaseBatchRequestDto
     */
    constructor() { 
        
        BaseBatchRequestDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseBatchRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/BaseBatchRequestDto} obj Optional instance to populate.
     * @return {module:models/BaseBatchRequestDto} The populated <code>BaseBatchRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseBatchRequestDto();

            if (data.hasOwnProperty('returnSingleOperation')) {
                obj['returnSingleOperation'] = ApiClient.convertToType(data['returnSingleOperation'], 'Boolean');
            }
            if (data.hasOwnProperty('folderIds')) {
                obj['folderIds'] = ApiClient.convertToType(data['folderIds'], [BaseBatchRequestDtoFolderIdsInner]);
            }
            if (data.hasOwnProperty('fileIds')) {
                obj['fileIds'] = ApiClient.convertToType(data['fileIds'], [BaseBatchRequestDtoFolderIdsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BaseBatchRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BaseBatchRequestDto</code>.
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
BaseBatchRequestDto.prototype['returnSingleOperation'] = undefined;

/**
 * The list of folder IDs of the base batch request.
 * @member {Array.<module:models/BaseBatchRequestDtoFolderIdsInner>} folderIds
 */
BaseBatchRequestDto.prototype['folderIds'] = undefined;

/**
 * The list of file IDs of the base batch request.
 * @member {Array.<module:models/BaseBatchRequestDtoFolderIdsInner>} fileIds
 */
BaseBatchRequestDto.prototype['fileIds'] = undefined;






export default BaseBatchRequestDto;

