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
 * The DraftLocationInteger model module.
 * @module models/DraftLocationInteger
 * @version 3.2.0
 */
class DraftLocationInteger {
    /**
     * Constructs a new <code>DraftLocationInteger</code>.
     * The file draft parameters.
     * @alias module:models/DraftLocationInteger
     */
    constructor() { 
        
        DraftLocationInteger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DraftLocationInteger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/DraftLocationInteger} obj Optional instance to populate.
     * @return {module:models/DraftLocationInteger} The populated <code>DraftLocationInteger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DraftLocationInteger();

            if (data.hasOwnProperty('folderId')) {
                obj['folderId'] = ApiClient.convertToType(data['folderId'], 'Number');
            }
            if (data.hasOwnProperty('folderTitle')) {
                obj['folderTitle'] = ApiClient.convertToType(data['folderTitle'], 'String');
            }
            if (data.hasOwnProperty('fileId')) {
                obj['fileId'] = ApiClient.convertToType(data['fileId'], 'Number');
            }
            if (data.hasOwnProperty('fileTitle')) {
                obj['fileTitle'] = ApiClient.convertToType(data['fileTitle'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DraftLocationInteger</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DraftLocationInteger</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['folderTitle'] && !(typeof data['folderTitle'] === 'string' || data['folderTitle'] instanceof String)) {
            throw new Error("Expected the field `folderTitle` to be a primitive type in the JSON string but got " + data['folderTitle']);
        }
        // ensure the json data is a string
        if (data['fileTitle'] && !(typeof data['fileTitle'] === 'string' || data['fileTitle'] instanceof String)) {
            throw new Error("Expected the field `fileTitle` to be a primitive type in the JSON string but got " + data['fileTitle']);
        }

        return true;
    }


}



/**
 * The InProcess folder ID of the draft.
 * @member {Number} folderId
 */
DraftLocationInteger.prototype['folderId'] = undefined;

/**
 * The InProcess folder title of the draft.
 * @member {String} folderTitle
 */
DraftLocationInteger.prototype['folderTitle'] = undefined;

/**
 * The draft ID.
 * @member {Number} fileId
 */
DraftLocationInteger.prototype['fileId'] = undefined;

/**
 * The draft title.
 * @member {String} fileTitle
 */
DraftLocationInteger.prototype['fileTitle'] = undefined;






export default DraftLocationInteger;

