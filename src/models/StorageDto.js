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
import AuthKey from './AuthKey';

/**
 * The StorageDto model module.
 * @module models/StorageDto
 * @version 3.2.0
 */
class StorageDto {
    /**
     * Constructs a new <code>StorageDto</code>.
     * The storage information.
     * @alias module:models/StorageDto
     */
    constructor() { 
        
        StorageDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StorageDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/StorageDto} obj Optional instance to populate.
     * @return {module:models/StorageDto} The populated <code>StorageDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorageDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [AuthKey]);
            }
            if (data.hasOwnProperty('current')) {
                obj['current'] = ApiClient.convertToType(data['current'], 'Boolean');
            }
            if (data.hasOwnProperty('isSet')) {
                obj['isSet'] = ApiClient.convertToType(data['isSet'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StorageDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StorageDto</code>.
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
        if (data['properties']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['properties'])) {
                throw new Error("Expected the field `properties` to be an array in the JSON data but got " + data['properties']);
            }
            // validate the optional field `properties` (array)
            for (const item of data['properties']) {
                AuthKey.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The storage ID.
 * @member {String} id
 */
StorageDto.prototype['id'] = undefined;

/**
 * The storage title.
 * @member {String} title
 */
StorageDto.prototype['title'] = undefined;

/**
 * The list of storage authentication keys.
 * @member {Array.<module:models/AuthKey>} properties
 */
StorageDto.prototype['properties'] = undefined;

/**
 * Specifies if this is the current portal storage or not.
 * @member {Boolean} current
 */
StorageDto.prototype['current'] = undefined;

/**
 * Specifies if this storage can be set or not.
 * @member {Boolean} isSet
 */
StorageDto.prototype['isSet'] = undefined;






export default StorageDto;

