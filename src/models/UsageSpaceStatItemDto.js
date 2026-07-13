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
 * The UsageSpaceStatItemDto model module.
 * @module models/UsageSpaceStatItemDto
 * @version 3.2.0
 */
class UsageSpaceStatItemDto {
    /**
     * Constructs a new <code>UsageSpaceStatItemDto</code>.
     * The parameters of the usage space statistics item.
     * @alias module:models/UsageSpaceStatItemDto
     */
    constructor() { 
        
        UsageSpaceStatItemDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UsageSpaceStatItemDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UsageSpaceStatItemDto} obj Optional instance to populate.
     * @return {module:models/UsageSpaceStatItemDto} The populated <code>UsageSpaceStatItemDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsageSpaceStatItemDto();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UsageSpaceStatItemDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsageSpaceStatItemDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['icon'] && !(typeof data['icon'] === 'string' || data['icon'] instanceof String)) {
            throw new Error("Expected the field `icon` to be a primitive type in the JSON string but got " + data['icon']);
        }
        // ensure the json data is a string
        if (data['size'] && !(typeof data['size'] === 'string' || data['size'] instanceof String)) {
            throw new Error("Expected the field `size` to be a primitive type in the JSON string but got " + data['size']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}



/**
 * The item name.
 * @member {String} name
 */
UsageSpaceStatItemDto.prototype['name'] = undefined;

/**
 * The item icon path.
 * @member {String} icon
 */
UsageSpaceStatItemDto.prototype['icon'] = undefined;

/**
 * Specifies if the item is disabled or not.
 * @member {Boolean} disabled
 */
UsageSpaceStatItemDto.prototype['disabled'] = undefined;

/**
 * The item used space.
 * @member {String} size
 */
UsageSpaceStatItemDto.prototype['size'] = undefined;

/**
 * The item URL.
 * @member {String} url
 */
UsageSpaceStatItemDto.prototype['url'] = undefined;






export default UsageSpaceStatItemDto;

