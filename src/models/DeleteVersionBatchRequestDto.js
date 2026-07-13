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
 * The DeleteVersionBatchRequestDto model module.
 * @module models/DeleteVersionBatchRequestDto
 * @version 3.2.0
 */
class DeleteVersionBatchRequestDto {
    /**
     * Constructs a new <code>DeleteVersionBatchRequestDto</code>.
     * The request parameters for deleting file versions.
     * @alias module:models/DeleteVersionBatchRequestDto
     * @param fileId {Number} The file ID to delete.
     * @param versions {Array.<Number>} The collection of file versions to be deleted.
     */
    constructor(fileId, versions) { 
        
        DeleteVersionBatchRequestDto.initialize(this, fileId, versions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fileId, versions) { 
        obj['fileId'] = fileId;
        obj['versions'] = versions;
    }

    /**
     * Constructs a <code>DeleteVersionBatchRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/DeleteVersionBatchRequestDto} obj Optional instance to populate.
     * @return {module:models/DeleteVersionBatchRequestDto} The populated <code>DeleteVersionBatchRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteVersionBatchRequestDto();

            if (data.hasOwnProperty('returnSingleOperation')) {
                obj['returnSingleOperation'] = ApiClient.convertToType(data['returnSingleOperation'], 'Boolean');
            }
            if (data.hasOwnProperty('deleteAfter')) {
                obj['deleteAfter'] = ApiClient.convertToType(data['deleteAfter'], 'Boolean');
            }
            if (data.hasOwnProperty('fileId')) {
                obj['fileId'] = ApiClient.convertToType(data['fileId'], 'Number');
            }
            if (data.hasOwnProperty('versions')) {
                obj['versions'] = ApiClient.convertToType(data['versions'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteVersionBatchRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteVersionBatchRequestDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeleteVersionBatchRequestDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['versions'])) {
            throw new Error("Expected the field `versions` to be an array in the JSON data but got " + data['versions']);
        }

        return true;
    }


}

DeleteVersionBatchRequestDto.RequiredProperties = ["fileId", "versions"];

/**
 * Specifies whether to return only the current operation
 * @member {Boolean} returnSingleOperation
 */
DeleteVersionBatchRequestDto.prototype['returnSingleOperation'] = undefined;

/**
 * Specifies whether to delete a file after the editing session is finished or not.
 * @member {Boolean} deleteAfter
 */
DeleteVersionBatchRequestDto.prototype['deleteAfter'] = undefined;

/**
 * The file ID to delete.
 * @member {Number} fileId
 */
DeleteVersionBatchRequestDto.prototype['fileId'] = undefined;

/**
 * The collection of file versions to be deleted.
 * @member {Array.<Number>} versions
 */
DeleteVersionBatchRequestDto.prototype['versions'] = undefined;






export default DeleteVersionBatchRequestDto;

