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
import Status from './Status';

/**
 * The ExternalShareDto model module.
 * @module models/ExternalShareDto
 * @version 3.2.0
 */
class ExternalShareDto {
    /**
     * Constructs a new <code>ExternalShareDto</code>.
     * The external sharing information and validation data.
     * @alias module:models/ExternalShareDto
     */
    constructor() { 
        
        ExternalShareDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExternalShareDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ExternalShareDto} obj Optional instance to populate.
     * @return {module:models/ExternalShareDto} The populated <code>ExternalShareDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExternalShareDto();

            if (data.hasOwnProperty('status')) {
                obj['status'] = Status.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'Number');
            }
            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('entryTitle')) {
                obj['entryTitle'] = ApiClient.convertToType(data['entryTitle'], 'String');
            }
            if (data.hasOwnProperty('shared')) {
                obj['shared'] = ApiClient.convertToType(data['shared'], 'Boolean');
            }
            if (data.hasOwnProperty('linkId')) {
                obj['linkId'] = ApiClient.convertToType(data['linkId'], 'String');
            }
            if (data.hasOwnProperty('isAuthenticated')) {
                obj['isAuthenticated'] = ApiClient.convertToType(data['isAuthenticated'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExternalShareDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExternalShareDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['entityId'] && !(typeof data['entityId'] === 'string' || data['entityId'] instanceof String)) {
            throw new Error("Expected the field `entityId` to be a primitive type in the JSON string but got " + data['entityId']);
        }
        // ensure the json data is a string
        if (data['entryTitle'] && !(typeof data['entryTitle'] === 'string' || data['entryTitle'] instanceof String)) {
            throw new Error("Expected the field `entryTitle` to be a primitive type in the JSON string but got " + data['entryTitle']);
        }
        // ensure the json data is a string
        if (data['linkId'] && !(typeof data['linkId'] === 'string' || data['linkId'] instanceof String)) {
            throw new Error("Expected the field `linkId` to be a primitive type in the JSON string but got " + data['linkId']);
        }

        return true;
    }


}



/**
 * @member {module:models/Status} status
 */
ExternalShareDto.prototype['status'] = undefined;

/**
 * The external data ID.
 * @member {String} id
 */
ExternalShareDto.prototype['id'] = undefined;

/**
 * The external data title.
 * @member {String} title
 */
ExternalShareDto.prototype['title'] = undefined;

/**
 * The tenant ID.
 * @member {Number} tenantId
 */
ExternalShareDto.prototype['tenantId'] = undefined;

/**
 * The unique identifier of the shared entity.
 * @member {String} entityId
 */
ExternalShareDto.prototype['entityId'] = undefined;

/**
 * The title of the shared entry.
 * @member {String} entryTitle
 */
ExternalShareDto.prototype['entryTitle'] = undefined;

/**
 * Specifies whether to share the external data or not.
 * @member {Boolean} shared
 */
ExternalShareDto.prototype['shared'] = undefined;

/**
 * The link ID of the external data.
 * @member {String} linkId
 */
ExternalShareDto.prototype['linkId'] = undefined;

/**
 * Specifies whether the user is authenticated or not.
 * @member {Boolean} isAuthenticated
 */
ExternalShareDto.prototype['isAuthenticated'] = undefined;






export default ExternalShareDto;

