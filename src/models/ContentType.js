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
 * The ContentType model module.
 * @module models/ContentType
 * @version 3.2.0
 */
class ContentType {
    /**
     * Constructs a new <code>ContentType</code>.
     * @alias module:models/ContentType
     */
    constructor() { 
        
        ContentType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContentType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ContentType} obj Optional instance to populate.
     * @return {module:models/ContentType} The populated <code>ContentType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentType();

            if (data.hasOwnProperty('boundary')) {
                obj['boundary'] = ApiClient.convertToType(data['boundary'], 'String');
            }
            if (data.hasOwnProperty('charSet')) {
                obj['charSet'] = ApiClient.convertToType(data['charSet'], 'String');
            }
            if (data.hasOwnProperty('mediaType')) {
                obj['mediaType'] = ApiClient.convertToType(data['mediaType'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], [Object]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContentType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContentType</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['boundary'] && !(typeof data['boundary'] === 'string' || data['boundary'] instanceof String)) {
            throw new Error("Expected the field `boundary` to be a primitive type in the JSON string but got " + data['boundary']);
        }
        // ensure the json data is a string
        if (data['charSet'] && !(typeof data['charSet'] === 'string' || data['charSet'] instanceof String)) {
            throw new Error("Expected the field `charSet` to be a primitive type in the JSON string but got " + data['charSet']);
        }
        // ensure the json data is a string
        if (data['mediaType'] && !(typeof data['mediaType'] === 'string' || data['mediaType'] instanceof String)) {
            throw new Error("Expected the field `mediaType` to be a primitive type in the JSON string but got " + data['mediaType']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['parameters'])) {
            throw new Error("Expected the field `parameters` to be an array in the JSON data but got " + data['parameters']);
        }

        return true;
    }


}



/**
 * @member {String} boundary
 */
ContentType.prototype['boundary'] = undefined;

/**
 * @member {String} charSet
 */
ContentType.prototype['charSet'] = undefined;

/**
 * @member {String} mediaType
 */
ContentType.prototype['mediaType'] = undefined;

/**
 * @member {String} name
 */
ContentType.prototype['name'] = undefined;

/**
 * @member {Array.<Object>} parameters
 */
ContentType.prototype['parameters'] = undefined;






export default ContentType;

