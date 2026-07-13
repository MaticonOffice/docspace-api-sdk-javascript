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
 * The FilesSettingsDtoInternalFormats model module.
 * @module models/FilesSettingsDtoInternalFormats
 * @version 3.2.0
 */
class FilesSettingsDtoInternalFormats {
    /**
     * Constructs a new <code>FilesSettingsDtoInternalFormats</code>.
     * The internal file formats.
     * @alias module:models/FilesSettingsDtoInternalFormats
     */
    constructor() { 
        
        FilesSettingsDtoInternalFormats.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FilesSettingsDtoInternalFormats</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FilesSettingsDtoInternalFormats} obj Optional instance to populate.
     * @return {module:models/FilesSettingsDtoInternalFormats} The populated <code>FilesSettingsDtoInternalFormats</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FilesSettingsDtoInternalFormats();

            if (data.hasOwnProperty('Unknown')) {
                obj['Unknown'] = ApiClient.convertToType(data['Unknown'], 'String');
            }
            if (data.hasOwnProperty('Archive')) {
                obj['Archive'] = ApiClient.convertToType(data['Archive'], 'String');
            }
            if (data.hasOwnProperty('Video')) {
                obj['Video'] = ApiClient.convertToType(data['Video'], 'String');
            }
            if (data.hasOwnProperty('Audio')) {
                obj['Audio'] = ApiClient.convertToType(data['Audio'], 'String');
            }
            if (data.hasOwnProperty('Image')) {
                obj['Image'] = ApiClient.convertToType(data['Image'], 'String');
            }
            if (data.hasOwnProperty('Spreadsheet')) {
                obj['Spreadsheet'] = ApiClient.convertToType(data['Spreadsheet'], 'String');
            }
            if (data.hasOwnProperty('Presentation')) {
                obj['Presentation'] = ApiClient.convertToType(data['Presentation'], 'String');
            }
            if (data.hasOwnProperty('Document')) {
                obj['Document'] = ApiClient.convertToType(data['Document'], 'String');
            }
            if (data.hasOwnProperty('Pdf')) {
                obj['Pdf'] = ApiClient.convertToType(data['Pdf'], 'String');
            }
            if (data.hasOwnProperty('Diagram')) {
                obj['Diagram'] = ApiClient.convertToType(data['Diagram'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FilesSettingsDtoInternalFormats</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FilesSettingsDtoInternalFormats</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Unknown'] && !(typeof data['Unknown'] === 'string' || data['Unknown'] instanceof String)) {
            throw new Error("Expected the field `Unknown` to be a primitive type in the JSON string but got " + data['Unknown']);
        }
        // ensure the json data is a string
        if (data['Archive'] && !(typeof data['Archive'] === 'string' || data['Archive'] instanceof String)) {
            throw new Error("Expected the field `Archive` to be a primitive type in the JSON string but got " + data['Archive']);
        }
        // ensure the json data is a string
        if (data['Video'] && !(typeof data['Video'] === 'string' || data['Video'] instanceof String)) {
            throw new Error("Expected the field `Video` to be a primitive type in the JSON string but got " + data['Video']);
        }
        // ensure the json data is a string
        if (data['Audio'] && !(typeof data['Audio'] === 'string' || data['Audio'] instanceof String)) {
            throw new Error("Expected the field `Audio` to be a primitive type in the JSON string but got " + data['Audio']);
        }
        // ensure the json data is a string
        if (data['Image'] && !(typeof data['Image'] === 'string' || data['Image'] instanceof String)) {
            throw new Error("Expected the field `Image` to be a primitive type in the JSON string but got " + data['Image']);
        }
        // ensure the json data is a string
        if (data['Spreadsheet'] && !(typeof data['Spreadsheet'] === 'string' || data['Spreadsheet'] instanceof String)) {
            throw new Error("Expected the field `Spreadsheet` to be a primitive type in the JSON string but got " + data['Spreadsheet']);
        }
        // ensure the json data is a string
        if (data['Presentation'] && !(typeof data['Presentation'] === 'string' || data['Presentation'] instanceof String)) {
            throw new Error("Expected the field `Presentation` to be a primitive type in the JSON string but got " + data['Presentation']);
        }
        // ensure the json data is a string
        if (data['Document'] && !(typeof data['Document'] === 'string' || data['Document'] instanceof String)) {
            throw new Error("Expected the field `Document` to be a primitive type in the JSON string but got " + data['Document']);
        }
        // ensure the json data is a string
        if (data['Pdf'] && !(typeof data['Pdf'] === 'string' || data['Pdf'] instanceof String)) {
            throw new Error("Expected the field `Pdf` to be a primitive type in the JSON string but got " + data['Pdf']);
        }
        // ensure the json data is a string
        if (data['Diagram'] && !(typeof data['Diagram'] === 'string' || data['Diagram'] instanceof String)) {
            throw new Error("Expected the field `Diagram` to be a primitive type in the JSON string but got " + data['Diagram']);
        }

        return true;
    }


}



/**
 * @member {String} Unknown
 */
FilesSettingsDtoInternalFormats.prototype['Unknown'] = undefined;

/**
 * @member {String} Archive
 */
FilesSettingsDtoInternalFormats.prototype['Archive'] = undefined;

/**
 * @member {String} Video
 */
FilesSettingsDtoInternalFormats.prototype['Video'] = undefined;

/**
 * @member {String} Audio
 */
FilesSettingsDtoInternalFormats.prototype['Audio'] = undefined;

/**
 * @member {String} Image
 */
FilesSettingsDtoInternalFormats.prototype['Image'] = undefined;

/**
 * @member {String} Spreadsheet
 */
FilesSettingsDtoInternalFormats.prototype['Spreadsheet'] = undefined;

/**
 * @member {String} Presentation
 */
FilesSettingsDtoInternalFormats.prototype['Presentation'] = undefined;

/**
 * @member {String} Document
 */
FilesSettingsDtoInternalFormats.prototype['Document'] = undefined;

/**
 * @member {String} Pdf
 */
FilesSettingsDtoInternalFormats.prototype['Pdf'] = undefined;

/**
 * @member {String} Diagram
 */
FilesSettingsDtoInternalFormats.prototype['Diagram'] = undefined;






export default FilesSettingsDtoInternalFormats;

