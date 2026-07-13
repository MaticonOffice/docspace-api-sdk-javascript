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
import CopyAsJsonElementDestFolderId from './CopyAsJsonElementDestFolderId';

/**
 * The CopyAsJsonElement model module.
 * @module models/CopyAsJsonElement
 * @version 3.2.0
 */
class CopyAsJsonElement {
    /**
     * Constructs a new <code>CopyAsJsonElement</code>.
     * The parameters for copying a file.
     * @alias module:models/CopyAsJsonElement
     * @param destTitle {String} The copied file name.
     * @param destFolderId {module:models/CopyAsJsonElementDestFolderId} 
     */
    constructor(destTitle, destFolderId) { 
        
        CopyAsJsonElement.initialize(this, destTitle, destFolderId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, destTitle, destFolderId) { 
        obj['destTitle'] = destTitle;
        obj['destFolderId'] = destFolderId;
    }

    /**
     * Constructs a <code>CopyAsJsonElement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CopyAsJsonElement} obj Optional instance to populate.
     * @return {module:models/CopyAsJsonElement} The populated <code>CopyAsJsonElement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CopyAsJsonElement();

            if (data.hasOwnProperty('destTitle')) {
                obj['destTitle'] = ApiClient.convertToType(data['destTitle'], 'String');
            }
            if (data.hasOwnProperty('destFolderId')) {
                obj['destFolderId'] = CopyAsJsonElementDestFolderId.constructFromObject(data['destFolderId']);
            }
            if (data.hasOwnProperty('enableExternalExt')) {
                obj['enableExternalExt'] = ApiClient.convertToType(data['enableExternalExt'], 'Boolean');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('toForm')) {
                obj['toForm'] = ApiClient.convertToType(data['toForm'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CopyAsJsonElement</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CopyAsJsonElement</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CopyAsJsonElement.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['destTitle'] && !(typeof data['destTitle'] === 'string' || data['destTitle'] instanceof String)) {
            throw new Error("Expected the field `destTitle` to be a primitive type in the JSON string but got " + data['destTitle']);
        }
        // validate the optional field `destFolderId`
        if (data['destFolderId']) { // data not null
          CopyAsJsonElementDestFolderId.validateJSON(data['destFolderId']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }

        return true;
    }


}

CopyAsJsonElement.RequiredProperties = ["destTitle", "destFolderId"];

/**
 * The copied file name.
 * @member {String} destTitle
 */
CopyAsJsonElement.prototype['destTitle'] = undefined;

/**
 * @member {module:models/CopyAsJsonElementDestFolderId} destFolderId
 */
CopyAsJsonElement.prototype['destFolderId'] = undefined;

/**
 * Specifies whether to allow creating the copied file of an external extension or not.
 * @member {Boolean} enableExternalExt
 */
CopyAsJsonElement.prototype['enableExternalExt'] = undefined;

/**
 * The copied file password.
 * @member {String} password
 */
CopyAsJsonElement.prototype['password'] = undefined;

/**
 * Specifies whether to convert the file to form or not.
 * @member {Boolean} toForm
 */
CopyAsJsonElement.prototype['toForm'] = undefined;






export default CopyAsJsonElement;

