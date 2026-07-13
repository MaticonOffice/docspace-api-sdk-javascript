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
 * The EmbeddedConfig model module.
 * @module models/EmbeddedConfig
 * @version 3.2.0
 */
class EmbeddedConfig {
    /**
     * Constructs a new <code>EmbeddedConfig</code>.
     * The configuration parameters for the embedded document type.
     * @alias module:models/EmbeddedConfig
     */
    constructor() { 
        
        EmbeddedConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmbeddedConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/EmbeddedConfig} obj Optional instance to populate.
     * @return {module:models/EmbeddedConfig} The populated <code>EmbeddedConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmbeddedConfig();

            if (data.hasOwnProperty('embedUrl')) {
                obj['embedUrl'] = ApiClient.convertToType(data['embedUrl'], 'String');
            }
            if (data.hasOwnProperty('saveUrl')) {
                obj['saveUrl'] = ApiClient.convertToType(data['saveUrl'], 'String');
            }
            if (data.hasOwnProperty('shareLinkParam')) {
                obj['shareLinkParam'] = ApiClient.convertToType(data['shareLinkParam'], 'String');
            }
            if (data.hasOwnProperty('shareUrl')) {
                obj['shareUrl'] = ApiClient.convertToType(data['shareUrl'], 'String');
            }
            if (data.hasOwnProperty('toolbarDocked')) {
                obj['toolbarDocked'] = ApiClient.convertToType(data['toolbarDocked'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmbeddedConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmbeddedConfig</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['embedUrl'] && !(typeof data['embedUrl'] === 'string' || data['embedUrl'] instanceof String)) {
            throw new Error("Expected the field `embedUrl` to be a primitive type in the JSON string but got " + data['embedUrl']);
        }
        // ensure the json data is a string
        if (data['saveUrl'] && !(typeof data['saveUrl'] === 'string' || data['saveUrl'] instanceof String)) {
            throw new Error("Expected the field `saveUrl` to be a primitive type in the JSON string but got " + data['saveUrl']);
        }
        // ensure the json data is a string
        if (data['shareLinkParam'] && !(typeof data['shareLinkParam'] === 'string' || data['shareLinkParam'] instanceof String)) {
            throw new Error("Expected the field `shareLinkParam` to be a primitive type in the JSON string but got " + data['shareLinkParam']);
        }
        // ensure the json data is a string
        if (data['shareUrl'] && !(typeof data['shareUrl'] === 'string' || data['shareUrl'] instanceof String)) {
            throw new Error("Expected the field `shareUrl` to be a primitive type in the JSON string but got " + data['shareUrl']);
        }
        // ensure the json data is a string
        if (data['toolbarDocked'] && !(typeof data['toolbarDocked'] === 'string' || data['toolbarDocked'] instanceof String)) {
            throw new Error("Expected the field `toolbarDocked` to be a primitive type in the JSON string but got " + data['toolbarDocked']);
        }

        return true;
    }


}



/**
 * The absolute URL to the document serving as a source file for the document embedded into the web page.
 * @member {String} embedUrl
 */
EmbeddedConfig.prototype['embedUrl'] = undefined;

/**
 * The absolute URL that will allow the document to be saved onto the user personal computer.
 * @member {String} saveUrl
 */
EmbeddedConfig.prototype['saveUrl'] = undefined;

/**
 * The shared URL parameter.
 * @member {String} shareLinkParam
 */
EmbeddedConfig.prototype['shareLinkParam'] = undefined;

/**
 * The absolute URL that will allow other users to share this document.
 * @member {String} shareUrl
 */
EmbeddedConfig.prototype['shareUrl'] = undefined;

/**
 * The place for the embedded viewer toolbar, can be either \"top\" or \"bottom\".
 * @member {String} toolbarDocked
 */
EmbeddedConfig.prototype['toolbarDocked'] = undefined;






export default EmbeddedConfig;

