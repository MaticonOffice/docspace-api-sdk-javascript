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
import FileReferenceData from './FileReferenceData';

/**
 * The FileReference model module.
 * @module models/FileReference
 * @version 3.2.0
 */
class FileReference {
    /**
     * Constructs a new <code>FileReference</code>.
     * The file reference parameters.
     * @alias module:models/FileReference
     */
    constructor() { 
        
        FileReference.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileReference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FileReference} obj Optional instance to populate.
     * @return {module:models/FileReference} The populated <code>FileReference</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileReference();

            if (data.hasOwnProperty('referenceData')) {
                obj['referenceData'] = FileReferenceData.constructFromObject(data['referenceData']);
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('fileType')) {
                obj['fileType'] = ApiClient.convertToType(data['fileType'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileReference</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileReference</code>.
     */
    static validateJSON(data) {
        // validate the optional field `referenceData`
        if (data['referenceData']) { // data not null
          FileReferenceData.validateJSON(data['referenceData']);
        }
        // ensure the json data is a string
        if (data['error'] && !(typeof data['error'] === 'string' || data['error'] instanceof String)) {
            throw new Error("Expected the field `error` to be a primitive type in the JSON string but got " + data['error']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['fileType'] && !(typeof data['fileType'] === 'string' || data['fileType'] instanceof String)) {
            throw new Error("Expected the field `fileType` to be a primitive type in the JSON string but got " + data['fileType']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['link'] && !(typeof data['link'] === 'string' || data['link'] instanceof String)) {
            throw new Error("Expected the field `link` to be a primitive type in the JSON string but got " + data['link']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }

        return true;
    }


}



/**
 * @member {module:models/FileReferenceData} referenceData
 */
FileReference.prototype['referenceData'] = undefined;

/**
 * The error message text.
 * @member {String} error
 */
FileReference.prototype['error'] = undefined;

/**
 * The file name or relative path for the formula editor.
 * @member {String} path
 */
FileReference.prototype['path'] = undefined;

/**
 * The URL address to download the current file.
 * @member {String} url
 */
FileReference.prototype['url'] = undefined;

/**
 * An extension of the document specified with the url parameter.
 * @member {String} fileType
 */
FileReference.prototype['fileType'] = undefined;

/**
 * The unique document identifier used by the service to take the data from the co-editing session.
 * @member {String} key
 */
FileReference.prototype['key'] = undefined;

/**
 * The file URL.
 * @member {String} link
 */
FileReference.prototype['link'] = undefined;

/**
 * The encrypted signature added to the parameter in the form of a token.
 * @member {String} token
 */
FileReference.prototype['token'] = undefined;






export default FileReference;

