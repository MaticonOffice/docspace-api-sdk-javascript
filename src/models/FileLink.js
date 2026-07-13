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
 * The FileLink model module.
 * @module models/FileLink
 * @version 3.2.0
 */
class FileLink {
    /**
     * Constructs a new <code>FileLink</code>.
     * The file link properties.
     * @alias module:models/FileLink
     */
    constructor() { 
        
        FileLink.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileLink</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FileLink} obj Optional instance to populate.
     * @return {module:models/FileLink} The populated <code>FileLink</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileLink();

            if (data.hasOwnProperty('filetype')) {
                obj['filetype'] = ApiClient.convertToType(data['filetype'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileLink</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileLink</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['filetype'] && !(typeof data['filetype'] === 'string' || data['filetype'] instanceof String)) {
            throw new Error("Expected the field `filetype` to be a primitive type in the JSON string but got " + data['filetype']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}



/**
 * The type of the file for the source viewed or edited document.
 * @member {String} filetype
 */
FileLink.prototype['filetype'] = undefined;

/**
 * The encrypted signature added to the config in the form of a token.
 * @member {String} token
 */
FileLink.prototype['token'] = undefined;

/**
 * The absolute URL where the source viewed or edited document is stored.
 * @member {String} url
 */
FileLink.prototype['url'] = undefined;






export default FileLink;

