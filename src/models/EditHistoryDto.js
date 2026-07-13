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
import ApiDateTime from './ApiDateTime';
import EditHistoryAuthor from './EditHistoryAuthor';
import EditHistoryChangesWrapper from './EditHistoryChangesWrapper';

/**
 * The EditHistoryDto model module.
 * @module models/EditHistoryDto
 * @version 3.2.0
 */
class EditHistoryDto {
    /**
     * Constructs a new <code>EditHistoryDto</code>.
     * The file editing history parameters.
     * @alias module:models/EditHistoryDto
     */
    constructor() { 
        
        EditHistoryDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EditHistoryDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/EditHistoryDto} obj Optional instance to populate.
     * @return {module:models/EditHistoryDto} The populated <code>EditHistoryDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EditHistoryDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('versionGroup')) {
                obj['versionGroup'] = ApiClient.convertToType(data['versionGroup'], 'Number');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = EditHistoryAuthor.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiDateTime.constructFromObject(data['created']);
            }
            if (data.hasOwnProperty('changesHistory')) {
                obj['changesHistory'] = ApiClient.convertToType(data['changesHistory'], 'String');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = ApiClient.convertToType(data['changes'], [EditHistoryChangesWrapper]);
            }
            if (data.hasOwnProperty('serverVersion')) {
                obj['serverVersion'] = ApiClient.convertToType(data['serverVersion'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EditHistoryDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EditHistoryDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // validate the optional field `user`
        if (data['user']) { // data not null
          EditHistoryAuthor.validateJSON(data['user']);
        }
        // validate the optional field `created`
        if (data['created']) { // data not null
          ApiDateTime.validateJSON(data['created']);
        }
        // ensure the json data is a string
        if (data['changesHistory'] && !(typeof data['changesHistory'] === 'string' || data['changesHistory'] instanceof String)) {
            throw new Error("Expected the field `changesHistory` to be a primitive type in the JSON string but got " + data['changesHistory']);
        }
        if (data['changes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['changes'])) {
                throw new Error("Expected the field `changes` to be an array in the JSON data but got " + data['changes']);
            }
            // validate the optional field `changes` (array)
            for (const item of data['changes']) {
                EditHistoryChangesWrapper.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['serverVersion'] && !(typeof data['serverVersion'] === 'string' || data['serverVersion'] instanceof String)) {
            throw new Error("Expected the field `serverVersion` to be a primitive type in the JSON string but got " + data['serverVersion']);
        }

        return true;
    }


}



/**
 * The document ID.
 * @member {Number} id
 */
EditHistoryDto.prototype['id'] = undefined;

/**
 * The document identifier used to unambiguously identify the document file.
 * @member {String} key
 */
EditHistoryDto.prototype['key'] = undefined;

/**
 * The document version number.
 * @member {Number} version
 */
EditHistoryDto.prototype['version'] = undefined;

/**
 * The document version group.
 * @member {Number} versionGroup
 */
EditHistoryDto.prototype['versionGroup'] = undefined;

/**
 * @member {module:models/EditHistoryAuthor} user
 */
EditHistoryDto.prototype['user'] = undefined;

/**
 * @member {module:models/ApiDateTime} created
 */
EditHistoryDto.prototype['created'] = undefined;

/**
 * The file history changes in the string format.
 * @member {String} changesHistory
 */
EditHistoryDto.prototype['changesHistory'] = undefined;

/**
 * The list of file history changes.
 * @member {Array.<module:models/EditHistoryChangesWrapper>} changes
 */
EditHistoryDto.prototype['changes'] = undefined;

/**
 * The current server version number.
 * @member {String} serverVersion
 */
EditHistoryDto.prototype['serverVersion'] = undefined;






export default EditHistoryDto;

