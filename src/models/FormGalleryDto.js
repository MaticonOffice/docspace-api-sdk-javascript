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
 * The FormGalleryDto model module.
 * @module models/FormGalleryDto
 * @version 3.2.0
 */
class FormGalleryDto {
    /**
     * Constructs a new <code>FormGalleryDto</code>.
     * The form gallery parameters.
     * @alias module:models/FormGalleryDto
     */
    constructor() { 
        
        FormGalleryDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FormGalleryDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FormGalleryDto} obj Optional instance to populate.
     * @return {module:models/FormGalleryDto} The populated <code>FormGalleryDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FormGalleryDto();

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('ext')) {
                obj['ext'] = ApiClient.convertToType(data['ext'], 'String');
            }
            if (data.hasOwnProperty('uploadPath')) {
                obj['uploadPath'] = ApiClient.convertToType(data['uploadPath'], 'String');
            }
            if (data.hasOwnProperty('uploadDomain')) {
                obj['uploadDomain'] = ApiClient.convertToType(data['uploadDomain'], 'String');
            }
            if (data.hasOwnProperty('uploadExt')) {
                obj['uploadExt'] = ApiClient.convertToType(data['uploadExt'], 'String');
            }
            if (data.hasOwnProperty('uploadDashboard')) {
                obj['uploadDashboard'] = ApiClient.convertToType(data['uploadDashboard'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FormGalleryDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FormGalleryDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['domain'] && !(typeof data['domain'] === 'string' || data['domain'] instanceof String)) {
            throw new Error("Expected the field `domain` to be a primitive type in the JSON string but got " + data['domain']);
        }
        // ensure the json data is a string
        if (data['ext'] && !(typeof data['ext'] === 'string' || data['ext'] instanceof String)) {
            throw new Error("Expected the field `ext` to be a primitive type in the JSON string but got " + data['ext']);
        }
        // ensure the json data is a string
        if (data['uploadPath'] && !(typeof data['uploadPath'] === 'string' || data['uploadPath'] instanceof String)) {
            throw new Error("Expected the field `uploadPath` to be a primitive type in the JSON string but got " + data['uploadPath']);
        }
        // ensure the json data is a string
        if (data['uploadDomain'] && !(typeof data['uploadDomain'] === 'string' || data['uploadDomain'] instanceof String)) {
            throw new Error("Expected the field `uploadDomain` to be a primitive type in the JSON string but got " + data['uploadDomain']);
        }
        // ensure the json data is a string
        if (data['uploadExt'] && !(typeof data['uploadExt'] === 'string' || data['uploadExt'] instanceof String)) {
            throw new Error("Expected the field `uploadExt` to be a primitive type in the JSON string but got " + data['uploadExt']);
        }
        // ensure the json data is a string
        if (data['uploadDashboard'] && !(typeof data['uploadDashboard'] === 'string' || data['uploadDashboard'] instanceof String)) {
            throw new Error("Expected the field `uploadDashboard` to be a primitive type in the JSON string but got " + data['uploadDashboard']);
        }

        return true;
    }


}



/**
 * The form gallery path.
 * @member {String} path
 */
FormGalleryDto.prototype['path'] = undefined;

/**
 * The form gallery domain.
 * @member {String} domain
 */
FormGalleryDto.prototype['domain'] = undefined;

/**
 * The form gallery extension.
 * @member {String} ext
 */
FormGalleryDto.prototype['ext'] = undefined;

/**
 * The form gallery upload path.
 * @member {String} uploadPath
 */
FormGalleryDto.prototype['uploadPath'] = undefined;

/**
 * The form gallery upload domain.
 * @member {String} uploadDomain
 */
FormGalleryDto.prototype['uploadDomain'] = undefined;

/**
 * The form gallery upload extension.
 * @member {String} uploadExt
 */
FormGalleryDto.prototype['uploadExt'] = undefined;

/**
 * The form gallery upload dashboard.
 * @member {String} uploadDashboard
 */
FormGalleryDto.prototype['uploadDashboard'] = undefined;






export default FormGalleryDto;

