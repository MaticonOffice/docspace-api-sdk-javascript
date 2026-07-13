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
 * The DeleteFolder model module.
 * @module models/DeleteFolder
 * @version 3.2.0
 */
class DeleteFolder {
    /**
     * Constructs a new <code>DeleteFolder</code>.
     * The parameters for deleting a folder.
     * @alias module:models/DeleteFolder
     */
    constructor() { 
        
        DeleteFolder.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteFolder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/DeleteFolder} obj Optional instance to populate.
     * @return {module:models/DeleteFolder} The populated <code>DeleteFolder</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteFolder();

            if (data.hasOwnProperty('deleteAfter')) {
                obj['deleteAfter'] = ApiClient.convertToType(data['deleteAfter'], 'Boolean');
            }
            if (data.hasOwnProperty('immediately')) {
                obj['immediately'] = ApiClient.convertToType(data['immediately'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteFolder</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteFolder</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Specifies whether to delete a folder after the editing session is finished or not.
 * @member {Boolean} deleteAfter
 */
DeleteFolder.prototype['deleteAfter'] = undefined;

/**
 * Specifies whether to move a folder to the \\\"Trash\\\" folder or delete it immediately.
 * @member {Boolean} immediately
 */
DeleteFolder.prototype['immediately'] = undefined;






export default DeleteFolder;

