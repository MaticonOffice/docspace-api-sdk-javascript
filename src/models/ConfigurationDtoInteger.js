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
import DocumentConfigDto from './DocumentConfigDto';
import EditorConfigurationDto from './EditorConfigurationDto';
import EditorType from './EditorType';
import FileDtoInteger from './FileDtoInteger';
import StartFillingMode from './StartFillingMode';

/**
 * The ConfigurationDtoInteger model module.
 * @module models/ConfigurationDtoInteger
 * @version 3.2.0
 */
class ConfigurationDtoInteger {
    /**
     * Constructs a new <code>ConfigurationDtoInteger</code>.
     * The configuration parameters.
     * @alias module:models/ConfigurationDtoInteger
     */
    constructor() { 
        
        ConfigurationDtoInteger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConfigurationDtoInteger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ConfigurationDtoInteger} obj Optional instance to populate.
     * @return {module:models/ConfigurationDtoInteger} The populated <code>ConfigurationDtoInteger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfigurationDtoInteger();

            if (data.hasOwnProperty('document')) {
                obj['document'] = DocumentConfigDto.constructFromObject(data['document']);
            }
            if (data.hasOwnProperty('documentType')) {
                obj['documentType'] = ApiClient.convertToType(data['documentType'], 'String');
            }
            if (data.hasOwnProperty('editorConfig')) {
                obj['editorConfig'] = EditorConfigurationDto.constructFromObject(data['editorConfig']);
            }
            if (data.hasOwnProperty('editorType')) {
                obj['editorType'] = EditorType.constructFromObject(data['editorType']);
            }
            if (data.hasOwnProperty('editorUrl')) {
                obj['editorUrl'] = ApiClient.convertToType(data['editorUrl'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = FileDtoInteger.constructFromObject(data['file']);
            }
            if (data.hasOwnProperty('errorMessage')) {
                obj['errorMessage'] = ApiClient.convertToType(data['errorMessage'], 'String');
            }
            if (data.hasOwnProperty('startFilling')) {
                obj['startFilling'] = ApiClient.convertToType(data['startFilling'], 'Boolean');
            }
            if (data.hasOwnProperty('fillingStatus')) {
                obj['fillingStatus'] = ApiClient.convertToType(data['fillingStatus'], 'Boolean');
            }
            if (data.hasOwnProperty('startFillingMode')) {
                obj['startFillingMode'] = StartFillingMode.constructFromObject(data['startFillingMode']);
            }
            if (data.hasOwnProperty('fillingSessionId')) {
                obj['fillingSessionId'] = ApiClient.convertToType(data['fillingSessionId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ConfigurationDtoInteger</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConfigurationDtoInteger</code>.
     */
    static validateJSON(data) {
        // validate the optional field `document`
        if (data['document']) { // data not null
          DocumentConfigDto.validateJSON(data['document']);
        }
        // ensure the json data is a string
        if (data['documentType'] && !(typeof data['documentType'] === 'string' || data['documentType'] instanceof String)) {
            throw new Error("Expected the field `documentType` to be a primitive type in the JSON string but got " + data['documentType']);
        }
        // validate the optional field `editorConfig`
        if (data['editorConfig']) { // data not null
          EditorConfigurationDto.validateJSON(data['editorConfig']);
        }
        // ensure the json data is a string
        if (data['editorUrl'] && !(typeof data['editorUrl'] === 'string' || data['editorUrl'] instanceof String)) {
            throw new Error("Expected the field `editorUrl` to be a primitive type in the JSON string but got " + data['editorUrl']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `file`
        if (data['file']) { // data not null
          FileDtoInteger.validateJSON(data['file']);
        }
        // ensure the json data is a string
        if (data['errorMessage'] && !(typeof data['errorMessage'] === 'string' || data['errorMessage'] instanceof String)) {
            throw new Error("Expected the field `errorMessage` to be a primitive type in the JSON string but got " + data['errorMessage']);
        }
        // ensure the json data is a string
        if (data['fillingSessionId'] && !(typeof data['fillingSessionId'] === 'string' || data['fillingSessionId'] instanceof String)) {
            throw new Error("Expected the field `fillingSessionId` to be a primitive type in the JSON string but got " + data['fillingSessionId']);
        }

        return true;
    }


}



/**
 * @member {module:models/DocumentConfigDto} document
 */
ConfigurationDtoInteger.prototype['document'] = undefined;

/**
 * The document type.
 * @member {String} documentType
 */
ConfigurationDtoInteger.prototype['documentType'] = undefined;

/**
 * @member {module:models/EditorConfigurationDto} editorConfig
 */
ConfigurationDtoInteger.prototype['editorConfig'] = undefined;

/**
 * @member {module:models/EditorType} editorType
 */
ConfigurationDtoInteger.prototype['editorType'] = undefined;

/**
 * The editor URL.
 * @member {String} editorUrl
 */
ConfigurationDtoInteger.prototype['editorUrl'] = undefined;

/**
 * The token of the file configuration.
 * @member {String} token
 */
ConfigurationDtoInteger.prototype['token'] = undefined;

/**
 * The platform type.
 * @member {String} type
 */
ConfigurationDtoInteger.prototype['type'] = undefined;

/**
 * @member {module:models/FileDtoInteger} file
 */
ConfigurationDtoInteger.prototype['file'] = undefined;

/**
 * The error message.
 * @member {String} errorMessage
 */
ConfigurationDtoInteger.prototype['errorMessage'] = undefined;

/**
 * Specifies if the file filling has started or not.
 * @member {Boolean} startFilling
 */
ConfigurationDtoInteger.prototype['startFilling'] = undefined;

/**
 * The file filling status.
 * @member {Boolean} fillingStatus
 */
ConfigurationDtoInteger.prototype['fillingStatus'] = undefined;

/**
 * @member {module:models/StartFillingMode} startFillingMode
 */
ConfigurationDtoInteger.prototype['startFillingMode'] = undefined;

/**
 * The file filling session ID.
 * @member {String} fillingSessionId
 */
ConfigurationDtoInteger.prototype['fillingSessionId'] = undefined;






export default ConfigurationDtoInteger;

