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
import CoEditingConfig from './CoEditingConfig';
import CustomizationConfigDto from './CustomizationConfigDto';
import EmbeddedConfig from './EmbeddedConfig';
import EncryptionKeysConfig from './EncryptionKeysConfig';
import PluginsConfig from './PluginsConfig';
import RecentConfig from './RecentConfig';
import TemplatesConfig from './TemplatesConfig';
import UserConfig from './UserConfig';

/**
 * The EditorConfigurationDto model module.
 * @module models/EditorConfigurationDto
 * @version 3.2.0
 */
class EditorConfigurationDto {
    /**
     * Constructs a new <code>EditorConfigurationDto</code>.
     * The editor configuration parameters.
     * @alias module:models/EditorConfigurationDto
     */
    constructor() { 
        
        EditorConfigurationDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EditorConfigurationDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/EditorConfigurationDto} obj Optional instance to populate.
     * @return {module:models/EditorConfigurationDto} The populated <code>EditorConfigurationDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EditorConfigurationDto();

            if (data.hasOwnProperty('callbackUrl')) {
                obj['callbackUrl'] = ApiClient.convertToType(data['callbackUrl'], 'String');
            }
            if (data.hasOwnProperty('coEditing')) {
                obj['coEditing'] = CoEditingConfig.constructFromObject(data['coEditing']);
            }
            if (data.hasOwnProperty('createUrl')) {
                obj['createUrl'] = ApiClient.convertToType(data['createUrl'], 'String');
            }
            if (data.hasOwnProperty('customization')) {
                obj['customization'] = CustomizationConfigDto.constructFromObject(data['customization']);
            }
            if (data.hasOwnProperty('embedded')) {
                obj['embedded'] = EmbeddedConfig.constructFromObject(data['embedded']);
            }
            if (data.hasOwnProperty('encryptionKeys')) {
                obj['encryptionKeys'] = EncryptionKeysConfig.constructFromObject(data['encryptionKeys']);
            }
            if (data.hasOwnProperty('lang')) {
                obj['lang'] = ApiClient.convertToType(data['lang'], 'String');
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
            }
            if (data.hasOwnProperty('modeWrite')) {
                obj['modeWrite'] = ApiClient.convertToType(data['modeWrite'], 'Boolean');
            }
            if (data.hasOwnProperty('plugins')) {
                obj['plugins'] = PluginsConfig.constructFromObject(data['plugins']);
            }
            if (data.hasOwnProperty('recent')) {
                obj['recent'] = ApiClient.convertToType(data['recent'], [RecentConfig]);
            }
            if (data.hasOwnProperty('templates')) {
                obj['templates'] = ApiClient.convertToType(data['templates'], [TemplatesConfig]);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = UserConfig.constructFromObject(data['user']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EditorConfigurationDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EditorConfigurationDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['callbackUrl'] && !(typeof data['callbackUrl'] === 'string' || data['callbackUrl'] instanceof String)) {
            throw new Error("Expected the field `callbackUrl` to be a primitive type in the JSON string but got " + data['callbackUrl']);
        }
        // validate the optional field `coEditing`
        if (data['coEditing']) { // data not null
          CoEditingConfig.validateJSON(data['coEditing']);
        }
        // ensure the json data is a string
        if (data['createUrl'] && !(typeof data['createUrl'] === 'string' || data['createUrl'] instanceof String)) {
            throw new Error("Expected the field `createUrl` to be a primitive type in the JSON string but got " + data['createUrl']);
        }
        // validate the optional field `customization`
        if (data['customization']) { // data not null
          CustomizationConfigDto.validateJSON(data['customization']);
        }
        // validate the optional field `embedded`
        if (data['embedded']) { // data not null
          EmbeddedConfig.validateJSON(data['embedded']);
        }
        // validate the optional field `encryptionKeys`
        if (data['encryptionKeys']) { // data not null
          EncryptionKeysConfig.validateJSON(data['encryptionKeys']);
        }
        // ensure the json data is a string
        if (data['lang'] && !(typeof data['lang'] === 'string' || data['lang'] instanceof String)) {
            throw new Error("Expected the field `lang` to be a primitive type in the JSON string but got " + data['lang']);
        }
        // ensure the json data is a string
        if (data['mode'] && !(typeof data['mode'] === 'string' || data['mode'] instanceof String)) {
            throw new Error("Expected the field `mode` to be a primitive type in the JSON string but got " + data['mode']);
        }
        // validate the optional field `plugins`
        if (data['plugins']) { // data not null
          PluginsConfig.validateJSON(data['plugins']);
        }
        if (data['recent']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['recent'])) {
                throw new Error("Expected the field `recent` to be an array in the JSON data but got " + data['recent']);
            }
            // validate the optional field `recent` (array)
            for (const item of data['recent']) {
                RecentConfig.validateJSON(item);
            };
        }
        if (data['templates']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['templates'])) {
                throw new Error("Expected the field `templates` to be an array in the JSON data but got " + data['templates']);
            }
            // validate the optional field `templates` (array)
            for (const item of data['templates']) {
                TemplatesConfig.validateJSON(item);
            };
        }
        // validate the optional field `user`
        if (data['user']) { // data not null
          UserConfig.validateJSON(data['user']);
        }

        return true;
    }


}



/**
 * The callback URL of the editor.
 * @member {String} callbackUrl
 */
EditorConfigurationDto.prototype['callbackUrl'] = undefined;

/**
 * @member {module:models/CoEditingConfig} coEditing
 */
EditorConfigurationDto.prototype['coEditing'] = undefined;

/**
 * The creation URL of the editor.
 * @member {String} createUrl
 */
EditorConfigurationDto.prototype['createUrl'] = undefined;

/**
 * @member {module:models/CustomizationConfigDto} customization
 */
EditorConfigurationDto.prototype['customization'] = undefined;

/**
 * @member {module:models/EmbeddedConfig} embedded
 */
EditorConfigurationDto.prototype['embedded'] = undefined;

/**
 * @member {module:models/EncryptionKeysConfig} encryptionKeys
 */
EditorConfigurationDto.prototype['encryptionKeys'] = undefined;

/**
 * The language of the editor configuration.
 * @member {String} lang
 */
EditorConfigurationDto.prototype['lang'] = undefined;

/**
 * The mode of the editor configuration.
 * @member {String} mode
 */
EditorConfigurationDto.prototype['mode'] = undefined;

/**
 * Specifies if the mode is write of the editor configuration.
 * @member {Boolean} modeWrite
 */
EditorConfigurationDto.prototype['modeWrite'] = undefined;

/**
 * @member {module:models/PluginsConfig} plugins
 */
EditorConfigurationDto.prototype['plugins'] = undefined;

/**
 * The recent configuration of the editor.
 * @member {Array.<module:models/RecentConfig>} recent
 */
EditorConfigurationDto.prototype['recent'] = undefined;

/**
 * The templates of the editor configuration.
 * @member {Array.<module:models/TemplatesConfig>} templates
 */
EditorConfigurationDto.prototype['templates'] = undefined;

/**
 * @member {module:models/UserConfig} user
 */
EditorConfigurationDto.prototype['user'] = undefined;






export default EditorConfigurationDto;

