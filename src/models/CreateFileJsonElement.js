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
import CreateFileJsonElementTemplateId from './CreateFileJsonElementTemplateId';

/**
 * The CreateFileJsonElement model module.
 * @module models/CreateFileJsonElement
 * @version 3.2.0
 */
class CreateFileJsonElement {
    /**
     * Constructs a new <code>CreateFileJsonElement</code>.
     * The parameters for creating a file.
     * @alias module:models/CreateFileJsonElement
     * @param title {String} The file title for creation.
     */
    constructor(title) { 
        
        CreateFileJsonElement.initialize(this, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title) { 
        obj['title'] = title;
    }

    /**
     * Constructs a <code>CreateFileJsonElement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CreateFileJsonElement} obj Optional instance to populate.
     * @return {module:models/CreateFileJsonElement} The populated <code>CreateFileJsonElement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateFileJsonElement();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('templateId')) {
                obj['templateId'] = CreateFileJsonElementTemplateId.constructFromObject(data['templateId']);
            }
            if (data.hasOwnProperty('enableExternalExt')) {
                obj['enableExternalExt'] = ApiClient.convertToType(data['enableExternalExt'], 'Boolean');
            }
            if (data.hasOwnProperty('formId')) {
                obj['formId'] = ApiClient.convertToType(data['formId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateFileJsonElement</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateFileJsonElement</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateFileJsonElement.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // validate the optional field `templateId`
        if (data['templateId']) { // data not null
          CreateFileJsonElementTemplateId.validateJSON(data['templateId']);
        }

        return true;
    }


}

CreateFileJsonElement.RequiredProperties = ["title"];

/**
 * The file title for creation.
 * @member {String} title
 */
CreateFileJsonElement.prototype['title'] = undefined;

/**
 * @member {module:models/CreateFileJsonElementTemplateId} templateId
 */
CreateFileJsonElement.prototype['templateId'] = undefined;

/**
 * Specifies whether to allow creating a file of an external extension or not.
 * @member {Boolean} enableExternalExt
 */
CreateFileJsonElement.prototype['enableExternalExt'] = undefined;

/**
 * The form ID for creation.
 * @member {Number} formId
 */
CreateFileJsonElement.prototype['formId'] = undefined;






export default CreateFileJsonElement;

