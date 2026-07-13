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
 * The FilesStatisticsFolder model module.
 * @module models/FilesStatisticsFolder
 * @version 3.2.0
 */
class FilesStatisticsFolder {
    /**
     * Constructs a new <code>FilesStatisticsFolder</code>.
     * The file statictics folder parameters.
     * @alias module:models/FilesStatisticsFolder
     */
    constructor() { 
        
        FilesStatisticsFolder.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FilesStatisticsFolder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FilesStatisticsFolder} obj Optional instance to populate.
     * @return {module:models/FilesStatisticsFolder} The populated <code>FilesStatisticsFolder</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FilesStatisticsFolder();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('usedSpace')) {
                obj['usedSpace'] = ApiClient.convertToType(data['usedSpace'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FilesStatisticsFolder</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FilesStatisticsFolder</code>.
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
 * The folder title.
 * @member {String} title
 */
FilesStatisticsFolder.prototype['title'] = undefined;

/**
 * The used space in the folder.
 * @member {Number} usedSpace
 */
FilesStatisticsFolder.prototype['usedSpace'] = undefined;






export default FilesStatisticsFolder;

