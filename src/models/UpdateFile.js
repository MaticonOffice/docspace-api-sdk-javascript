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
 * The UpdateFile model module.
 * @module models/UpdateFile
 * @version 3.2.0
 */
class UpdateFile {
    /**
     * Constructs a new <code>UpdateFile</code>.
     * The parameters for updating a file.
     * @alias module:models/UpdateFile
     */
    constructor() { 
        
        UpdateFile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UpdateFile} obj Optional instance to populate.
     * @return {module:models/UpdateFile} The populated <code>UpdateFile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateFile();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('lastVersion')) {
                obj['lastVersion'] = ApiClient.convertToType(data['lastVersion'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateFile</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateFile</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }

        return true;
    }


}



/**
 * The file title to update.
 * @member {String} title
 */
UpdateFile.prototype['title'] = undefined;

/**
 * The number of the latest file version.
 * @member {Number} lastVersion
 */
UpdateFile.prototype['lastVersion'] = undefined;






export default UpdateFile;

