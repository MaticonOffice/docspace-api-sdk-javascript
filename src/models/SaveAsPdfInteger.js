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
 * The SaveAsPdfInteger model module.
 * @module models/SaveAsPdfInteger
 * @version 3.2.0
 */
class SaveAsPdfInteger {
    /**
     * Constructs a new <code>SaveAsPdfInteger</code>.
     * The parameters for saving the file as PDF.
     * @alias module:models/SaveAsPdfInteger
     * @param folderId {Number} The folder ID to save the file as PDF.
     * @param title {String} The file title to save as PDF.
     */
    constructor(folderId, title) { 
        
        SaveAsPdfInteger.initialize(this, folderId, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, folderId, title) { 
        obj['folderId'] = folderId;
        obj['title'] = title;
    }

    /**
     * Constructs a <code>SaveAsPdfInteger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SaveAsPdfInteger} obj Optional instance to populate.
     * @return {module:models/SaveAsPdfInteger} The populated <code>SaveAsPdfInteger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SaveAsPdfInteger();

            if (data.hasOwnProperty('folderId')) {
                obj['folderId'] = ApiClient.convertToType(data['folderId'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SaveAsPdfInteger</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SaveAsPdfInteger</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SaveAsPdfInteger.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }

        return true;
    }


}

SaveAsPdfInteger.RequiredProperties = ["folderId", "title"];

/**
 * The folder ID to save the file as PDF.
 * @member {Number} folderId
 */
SaveAsPdfInteger.prototype['folderId'] = undefined;

/**
 * The file title to save as PDF.
 * @member {String} title
 */
SaveAsPdfInteger.prototype['title'] = undefined;






export default SaveAsPdfInteger;

