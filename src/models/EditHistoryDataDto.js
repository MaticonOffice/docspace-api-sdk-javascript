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
import EditHistoryUrl from './EditHistoryUrl';

/**
 * The EditHistoryDataDto model module.
 * @module models/EditHistoryDataDto
 * @version 3.2.0
 */
class EditHistoryDataDto {
    /**
     * Constructs a new <code>EditHistoryDataDto</code>.
     * The file editing history data.
     * @alias module:models/EditHistoryDataDto
     */
    constructor() { 
        
        EditHistoryDataDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EditHistoryDataDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/EditHistoryDataDto} obj Optional instance to populate.
     * @return {module:models/EditHistoryDataDto} The populated <code>EditHistoryDataDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EditHistoryDataDto();

            if (data.hasOwnProperty('changesUrl')) {
                obj['changesUrl'] = ApiClient.convertToType(data['changesUrl'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = EditHistoryUrl.constructFromObject(data['previous']);
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('fileType')) {
                obj['fileType'] = ApiClient.convertToType(data['fileType'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EditHistoryDataDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EditHistoryDataDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['changesUrl'] && !(typeof data['changesUrl'] === 'string' || data['changesUrl'] instanceof String)) {
            throw new Error("Expected the field `changesUrl` to be a primitive type in the JSON string but got " + data['changesUrl']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // validate the optional field `previous`
        if (data['previous']) { // data not null
          EditHistoryUrl.validateJSON(data['previous']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
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
 * The URL address of the file with the document changes data.
 * @member {String} changesUrl
 */
EditHistoryDataDto.prototype['changesUrl'] = undefined;

/**
 * The document identifier used to unambiguously identify the document file.
 * @member {String} key
 */
EditHistoryDataDto.prototype['key'] = undefined;

/**
 * @member {module:models/EditHistoryUrl} previous
 */
EditHistoryDataDto.prototype['previous'] = undefined;

/**
 * The encrypted signature added to the parameter in the form of a token.
 * @member {String} token
 */
EditHistoryDataDto.prototype['token'] = undefined;

/**
 * The URL address of the current document version.
 * @member {String} url
 */
EditHistoryDataDto.prototype['url'] = undefined;

/**
 * The document version number.
 * @member {Number} version
 */
EditHistoryDataDto.prototype['version'] = undefined;

/**
 * The document extension.
 * @member {String} fileType
 */
EditHistoryDataDto.prototype['fileType'] = undefined;






export default EditHistoryDataDto;

