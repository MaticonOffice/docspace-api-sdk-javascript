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
 * The CreateTextOrHtmlFile model module.
 * @module models/CreateTextOrHtmlFile
 * @version 3.2.0
 */
class CreateTextOrHtmlFile {
    /**
     * Constructs a new <code>CreateTextOrHtmlFile</code>.
     * The parameters for creating an HTML or text file.
     * @alias module:models/CreateTextOrHtmlFile
     * @param title {String} The file title for text or HTML file.
     */
    constructor(title) { 
        
        CreateTextOrHtmlFile.initialize(this, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title) { 
        obj['title'] = title;
    }

    /**
     * Constructs a <code>CreateTextOrHtmlFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CreateTextOrHtmlFile} obj Optional instance to populate.
     * @return {module:models/CreateTextOrHtmlFile} The populated <code>CreateTextOrHtmlFile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTextOrHtmlFile();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('createNewIfExist')) {
                obj['createNewIfExist'] = ApiClient.convertToType(data['createNewIfExist'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateTextOrHtmlFile</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateTextOrHtmlFile</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateTextOrHtmlFile.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['content'] && !(typeof data['content'] === 'string' || data['content'] instanceof String)) {
            throw new Error("Expected the field `content` to be a primitive type in the JSON string but got " + data['content']);
        }

        return true;
    }


}

CreateTextOrHtmlFile.RequiredProperties = ["title"];

/**
 * The file title for text or HTML file.
 * @member {String} title
 */
CreateTextOrHtmlFile.prototype['title'] = undefined;

/**
 * The text or HTML file contents.
 * @member {String} content
 */
CreateTextOrHtmlFile.prototype['content'] = undefined;

/**
 * Specifies whether to create a new text or HTML file if it exists or not.
 * @member {Boolean} createNewIfExist
 */
CreateTextOrHtmlFile.prototype['createNewIfExist'] = undefined;






export default CreateTextOrHtmlFile;

