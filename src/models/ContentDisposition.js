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
 * The ContentDisposition model module.
 * @module models/ContentDisposition
 * @version 3.2.0
 */
class ContentDisposition {
    /**
     * Constructs a new <code>ContentDisposition</code>.
     * @alias module:models/ContentDisposition
     */
    constructor() { 
        
        ContentDisposition.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContentDisposition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ContentDisposition} obj Optional instance to populate.
     * @return {module:models/ContentDisposition} The populated <code>ContentDisposition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentDisposition();

            if (data.hasOwnProperty('dispositionType')) {
                obj['dispositionType'] = ApiClient.convertToType(data['dispositionType'], 'String');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], [Object]);
            }
            if (data.hasOwnProperty('fileName')) {
                obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
            }
            if (data.hasOwnProperty('creationDate')) {
                obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
            }
            if (data.hasOwnProperty('modificationDate')) {
                obj['modificationDate'] = ApiClient.convertToType(data['modificationDate'], 'Date');
            }
            if (data.hasOwnProperty('inline')) {
                obj['inline'] = ApiClient.convertToType(data['inline'], 'Boolean');
            }
            if (data.hasOwnProperty('readDate')) {
                obj['readDate'] = ApiClient.convertToType(data['readDate'], 'Date');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContentDisposition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContentDisposition</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['dispositionType'] && !(typeof data['dispositionType'] === 'string' || data['dispositionType'] instanceof String)) {
            throw new Error("Expected the field `dispositionType` to be a primitive type in the JSON string but got " + data['dispositionType']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['parameters'])) {
            throw new Error("Expected the field `parameters` to be an array in the JSON data but got " + data['parameters']);
        }
        // ensure the json data is a string
        if (data['fileName'] && !(typeof data['fileName'] === 'string' || data['fileName'] instanceof String)) {
            throw new Error("Expected the field `fileName` to be a primitive type in the JSON string but got " + data['fileName']);
        }

        return true;
    }


}



/**
 * @member {String} dispositionType
 */
ContentDisposition.prototype['dispositionType'] = undefined;

/**
 * @member {Array.<Object>} parameters
 */
ContentDisposition.prototype['parameters'] = undefined;

/**
 * @member {String} fileName
 */
ContentDisposition.prototype['fileName'] = undefined;

/**
 * @member {Date} creationDate
 */
ContentDisposition.prototype['creationDate'] = undefined;

/**
 * @member {Date} modificationDate
 */
ContentDisposition.prototype['modificationDate'] = undefined;

/**
 * @member {Boolean} inline
 */
ContentDisposition.prototype['inline'] = undefined;

/**
 * @member {Date} readDate
 */
ContentDisposition.prototype['readDate'] = undefined;

/**
 * @member {Number} size
 */
ContentDisposition.prototype['size'] = undefined;






export default ContentDisposition;

