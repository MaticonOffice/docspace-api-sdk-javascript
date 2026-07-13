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
 * The EditHistoryUrl model module.
 * @module models/EditHistoryUrl
 * @version 3.2.0
 */
class EditHistoryUrl {
    /**
     * Constructs a new <code>EditHistoryUrl</code>.
     * The file editing history URL parameters.
     * @alias module:models/EditHistoryUrl
     */
    constructor() { 
        
        EditHistoryUrl.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EditHistoryUrl</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/EditHistoryUrl} obj Optional instance to populate.
     * @return {module:models/EditHistoryUrl} The populated <code>EditHistoryUrl</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EditHistoryUrl();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('fileType')) {
                obj['fileType'] = ApiClient.convertToType(data['fileType'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EditHistoryUrl</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EditHistoryUrl</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['fileType'] && !(typeof data['fileType'] === 'string' || data['fileType'] instanceof String)) {
            throw new Error("Expected the field `fileType` to be a primitive type in the JSON string but got " + data['fileType']);
        }

        return true;
    }


}



/**
 * The document identifier of the previous version of the document.
 * @member {String} key
 */
EditHistoryUrl.prototype['key'] = undefined;

/**
 * The url address of the previous version of the document.
 * @member {String} url
 */
EditHistoryUrl.prototype['url'] = undefined;

/**
 * The document extension.
 * @member {String} fileType
 */
EditHistoryUrl.prototype['fileType'] = undefined;






export default EditHistoryUrl;

