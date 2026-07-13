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
 * The TemplatesConfig model module.
 * @module models/TemplatesConfig
 * @version 3.2.0
 */
class TemplatesConfig {
    /**
     * Constructs a new <code>TemplatesConfig</code>.
     * The presence or absence of the templates in the \&quot;Create New...\&quot; menu option.
     * @alias module:models/TemplatesConfig
     */
    constructor() { 
        
        TemplatesConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TemplatesConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TemplatesConfig} obj Optional instance to populate.
     * @return {module:models/TemplatesConfig} The populated <code>TemplatesConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplatesConfig();

            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TemplatesConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TemplatesConfig</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}



/**
 * The absolute URL to the image for template.
 * @member {String} image
 */
TemplatesConfig.prototype['image'] = undefined;

/**
 * The template title that will be displayed in the \"Create New...\" menu option.
 * @member {String} title
 */
TemplatesConfig.prototype['title'] = undefined;

/**
 * The absolute URL to the document where it will be created and available after creation.
 * @member {String} url
 */
TemplatesConfig.prototype['url'] = undefined;






export default TemplatesConfig;

