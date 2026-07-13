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
 * The GetReferenceDataDtoInteger model module.
 * @module models/GetReferenceDataDtoInteger
 * @version 3.2.0
 */
class GetReferenceDataDtoInteger {
    /**
     * Constructs a new <code>GetReferenceDataDtoInteger</code>.
     * The request parameters for getting reference data.
     * @alias module:models/GetReferenceDataDtoInteger
     * @param fileKey {String} The unique document identifier used by the service to get a link to the file.
     */
    constructor(fileKey) { 
        
        GetReferenceDataDtoInteger.initialize(this, fileKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fileKey) { 
        obj['fileKey'] = fileKey;
    }

    /**
     * Constructs a <code>GetReferenceDataDtoInteger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/GetReferenceDataDtoInteger} obj Optional instance to populate.
     * @return {module:models/GetReferenceDataDtoInteger} The populated <code>GetReferenceDataDtoInteger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetReferenceDataDtoInteger();

            if (data.hasOwnProperty('fileKey')) {
                obj['fileKey'] = ApiClient.convertToType(data['fileKey'], 'String');
            }
            if (data.hasOwnProperty('instanceId')) {
                obj['instanceId'] = ApiClient.convertToType(data['instanceId'], 'String');
            }
            if (data.hasOwnProperty('sourceFileId')) {
                obj['sourceFileId'] = ApiClient.convertToType(data['sourceFileId'], 'Number');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetReferenceDataDtoInteger</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetReferenceDataDtoInteger</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GetReferenceDataDtoInteger.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fileKey'] && !(typeof data['fileKey'] === 'string' || data['fileKey'] instanceof String)) {
            throw new Error("Expected the field `fileKey` to be a primitive type in the JSON string but got " + data['fileKey']);
        }
        // ensure the json data is a string
        if (data['instanceId'] && !(typeof data['instanceId'] === 'string' || data['instanceId'] instanceof String)) {
            throw new Error("Expected the field `instanceId` to be a primitive type in the JSON string but got " + data['instanceId']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['link'] && !(typeof data['link'] === 'string' || data['link'] instanceof String)) {
            throw new Error("Expected the field `link` to be a primitive type in the JSON string but got " + data['link']);
        }

        return true;
    }


}

GetReferenceDataDtoInteger.RequiredProperties = ["fileKey"];

/**
 * The unique document identifier used by the service to get a link to the file.
 * @member {String} fileKey
 */
GetReferenceDataDtoInteger.prototype['fileKey'] = undefined;

/**
 * The unique system identifier.
 * @member {String} instanceId
 */
GetReferenceDataDtoInteger.prototype['instanceId'] = undefined;

/**
 * The source file ID.
 * @member {Number} sourceFileId
 */
GetReferenceDataDtoInteger.prototype['sourceFileId'] = undefined;

/**
 * The file name or relative path for the formula editor.
 * @member {String} path
 */
GetReferenceDataDtoInteger.prototype['path'] = undefined;

/**
 * The file link.
 * @member {String} link
 */
GetReferenceDataDtoInteger.prototype['link'] = undefined;






export default GetReferenceDataDtoInteger;

