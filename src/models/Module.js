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
 * The Module model module.
 * @module models/Module
 * @version 3.2.0
 */
class Module {
    /**
     * Constructs a new <code>Module</code>.
     * The module information.
     * @alias module:models/Module
     */
    constructor() { 
        
        Module.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Module</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/Module} obj Optional instance to populate.
     * @return {module:models/Module} The populated <code>Module</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Module();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('appName')) {
                obj['appName'] = ApiClient.convertToType(data['appName'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('iconUrl')) {
                obj['iconUrl'] = ApiClient.convertToType(data['iconUrl'], 'String');
            }
            if (data.hasOwnProperty('imageUrl')) {
                obj['imageUrl'] = ApiClient.convertToType(data['imageUrl'], 'String');
            }
            if (data.hasOwnProperty('helpUrl')) {
                obj['helpUrl'] = ApiClient.convertToType(data['helpUrl'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('isPrimary')) {
                obj['isPrimary'] = ApiClient.convertToType(data['isPrimary'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Module</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Module</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['appName'] && !(typeof data['appName'] === 'string' || data['appName'] instanceof String)) {
            throw new Error("Expected the field `appName` to be a primitive type in the JSON string but got " + data['appName']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['link'] && !(typeof data['link'] === 'string' || data['link'] instanceof String)) {
            throw new Error("Expected the field `link` to be a primitive type in the JSON string but got " + data['link']);
        }
        // ensure the json data is a string
        if (data['iconUrl'] && !(typeof data['iconUrl'] === 'string' || data['iconUrl'] instanceof String)) {
            throw new Error("Expected the field `iconUrl` to be a primitive type in the JSON string but got " + data['iconUrl']);
        }
        // ensure the json data is a string
        if (data['imageUrl'] && !(typeof data['imageUrl'] === 'string' || data['imageUrl'] instanceof String)) {
            throw new Error("Expected the field `imageUrl` to be a primitive type in the JSON string but got " + data['imageUrl']);
        }
        // ensure the json data is a string
        if (data['helpUrl'] && !(typeof data['helpUrl'] === 'string' || data['helpUrl'] instanceof String)) {
            throw new Error("Expected the field `helpUrl` to be a primitive type in the JSON string but got " + data['helpUrl']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}



/**
 * The module ID.
 * @member {String} id
 */
Module.prototype['id'] = undefined;

/**
 * The module product class name.
 * @member {String} appName
 */
Module.prototype['appName'] = undefined;

/**
 * The module product class name.
 * @member {String} title
 */
Module.prototype['title'] = undefined;

/**
 * The URL to the module start page.
 * @member {String} link
 */
Module.prototype['link'] = undefined;

/**
 * The module icon URL.
 * @member {String} iconUrl
 */
Module.prototype['iconUrl'] = undefined;

/**
 * The module large image URL.
 * @member {String} imageUrl
 */
Module.prototype['imageUrl'] = undefined;

/**
 * The module help URL.
 * @member {String} helpUrl
 */
Module.prototype['helpUrl'] = undefined;

/**
 * The module description.
 * @member {String} description
 */
Module.prototype['description'] = undefined;

/**
 * Specifies if the module is primary or not.
 * @member {Boolean} isPrimary
 */
Module.prototype['isPrimary'] = undefined;






export default Module;

