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
import EmployeeDto from './EmployeeDto';

/**
 * The WebPluginDto model module.
 * @module models/WebPluginDto
 * @version 3.2.0
 */
class WebPluginDto {
    /**
     * Constructs a new <code>WebPluginDto</code>.
     * The web plugin information.
     * @alias module:models/WebPluginDto
     */
    constructor() { 
        
        WebPluginDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebPluginDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/WebPluginDto} obj Optional instance to populate.
     * @return {module:models/WebPluginDto} The populated <code>WebPluginDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebPluginDto();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('license')) {
                obj['license'] = ApiClient.convertToType(data['license'], 'String');
            }
            if (data.hasOwnProperty('author')) {
                obj['author'] = ApiClient.convertToType(data['author'], 'String');
            }
            if (data.hasOwnProperty('homePage')) {
                obj['homePage'] = ApiClient.convertToType(data['homePage'], 'String');
            }
            if (data.hasOwnProperty('pluginName')) {
                obj['pluginName'] = ApiClient.convertToType(data['pluginName'], 'String');
            }
            if (data.hasOwnProperty('scopes')) {
                obj['scopes'] = ApiClient.convertToType(data['scopes'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('createBy')) {
                obj['createBy'] = EmployeeDto.constructFromObject(data['createBy']);
            }
            if (data.hasOwnProperty('createOn')) {
                obj['createOn'] = ApiClient.convertToType(data['createOn'], 'Date');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('system')) {
                obj['system'] = ApiClient.convertToType(data['system'], 'Boolean');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = ApiClient.convertToType(data['settings'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebPluginDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebPluginDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['license'] && !(typeof data['license'] === 'string' || data['license'] instanceof String)) {
            throw new Error("Expected the field `license` to be a primitive type in the JSON string but got " + data['license']);
        }
        // ensure the json data is a string
        if (data['author'] && !(typeof data['author'] === 'string' || data['author'] instanceof String)) {
            throw new Error("Expected the field `author` to be a primitive type in the JSON string but got " + data['author']);
        }
        // ensure the json data is a string
        if (data['homePage'] && !(typeof data['homePage'] === 'string' || data['homePage'] instanceof String)) {
            throw new Error("Expected the field `homePage` to be a primitive type in the JSON string but got " + data['homePage']);
        }
        // ensure the json data is a string
        if (data['pluginName'] && !(typeof data['pluginName'] === 'string' || data['pluginName'] instanceof String)) {
            throw new Error("Expected the field `pluginName` to be a primitive type in the JSON string but got " + data['pluginName']);
        }
        // ensure the json data is a string
        if (data['scopes'] && !(typeof data['scopes'] === 'string' || data['scopes'] instanceof String)) {
            throw new Error("Expected the field `scopes` to be a primitive type in the JSON string but got " + data['scopes']);
        }
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }
        // validate the optional field `createBy`
        if (data['createBy']) { // data not null
          EmployeeDto.validateJSON(data['createBy']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['settings'] && !(typeof data['settings'] === 'string' || data['settings'] instanceof String)) {
            throw new Error("Expected the field `settings` to be a primitive type in the JSON string but got " + data['settings']);
        }

        return true;
    }


}



/**
 * The web plugin name.
 * @member {String} name
 */
WebPluginDto.prototype['name'] = undefined;

/**
 * The web plugin version.
 * @member {String} version
 */
WebPluginDto.prototype['version'] = undefined;

/**
 * The web plugin description.
 * @member {String} description
 */
WebPluginDto.prototype['description'] = undefined;

/**
 * The web plugin license.
 * @member {String} license
 */
WebPluginDto.prototype['license'] = undefined;

/**
 * The web plugin author.
 * @member {String} author
 */
WebPluginDto.prototype['author'] = undefined;

/**
 * The web plugin home page URL.
 * @member {String} homePage
 */
WebPluginDto.prototype['homePage'] = undefined;

/**
 * The name by which the web plugin is registered in the window object.
 * @member {String} pluginName
 */
WebPluginDto.prototype['pluginName'] = undefined;

/**
 * The web plugin scopes.
 * @member {String} scopes
 */
WebPluginDto.prototype['scopes'] = undefined;

/**
 * The web plugin image.
 * @member {String} image
 */
WebPluginDto.prototype['image'] = undefined;

/**
 * @member {module:models/EmployeeDto} createBy
 */
WebPluginDto.prototype['createBy'] = undefined;

/**
 * The date and time when the web plugin was created.
 * @member {Date} createOn
 */
WebPluginDto.prototype['createOn'] = undefined;

/**
 * Specifies if the web plugin is enabled or not.
 * @member {Boolean} enabled
 */
WebPluginDto.prototype['enabled'] = undefined;

/**
 * Specifies if the web plugin is system or not.
 * @member {Boolean} system
 */
WebPluginDto.prototype['system'] = undefined;

/**
 * The web plugin URL.
 * @member {String} url
 */
WebPluginDto.prototype['url'] = undefined;

/**
 * The web plugin settings.
 * @member {String} settings
 */
WebPluginDto.prototype['settings'] = undefined;






export default WebPluginDto;

