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
import ApiDateTime from './ApiDateTime';

/**
 * The SessionRequest model module.
 * @module models/SessionRequest
 * @version 3.2.0
 */
class SessionRequest {
    /**
     * Constructs a new <code>SessionRequest</code>.
     * The session request parameters.
     * @alias module:models/SessionRequest
     * @param fileName {String} The file name.
     */
    constructor(fileName) { 
        
        SessionRequest.initialize(this, fileName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fileName) { 
        obj['fileName'] = fileName;
    }

    /**
     * Constructs a <code>SessionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SessionRequest} obj Optional instance to populate.
     * @return {module:models/SessionRequest} The populated <code>SessionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SessionRequest();

            if (data.hasOwnProperty('fileName')) {
                obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
            }
            if (data.hasOwnProperty('fileSize')) {
                obj['fileSize'] = ApiClient.convertToType(data['fileSize'], 'Number');
            }
            if (data.hasOwnProperty('relativePath')) {
                obj['relativePath'] = ApiClient.convertToType(data['relativePath'], 'String');
            }
            if (data.hasOwnProperty('createOn')) {
                obj['createOn'] = ApiDateTime.constructFromObject(data['createOn']);
            }
            if (data.hasOwnProperty('encrypted')) {
                obj['encrypted'] = ApiClient.convertToType(data['encrypted'], 'Boolean');
            }
            if (data.hasOwnProperty('createNewIfExist')) {
                obj['createNewIfExist'] = ApiClient.convertToType(data['createNewIfExist'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SessionRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SessionRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SessionRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fileName'] && !(typeof data['fileName'] === 'string' || data['fileName'] instanceof String)) {
            throw new Error("Expected the field `fileName` to be a primitive type in the JSON string but got " + data['fileName']);
        }
        // ensure the json data is a string
        if (data['relativePath'] && !(typeof data['relativePath'] === 'string' || data['relativePath'] instanceof String)) {
            throw new Error("Expected the field `relativePath` to be a primitive type in the JSON string but got " + data['relativePath']);
        }
        // validate the optional field `createOn`
        if (data['createOn']) { // data not null
          ApiDateTime.validateJSON(data['createOn']);
        }

        return true;
    }


}

SessionRequest.RequiredProperties = ["fileName"];

/**
 * The file name.
 * @member {String} fileName
 */
SessionRequest.prototype['fileName'] = undefined;

/**
 * The file size.
 * @member {Number} fileSize
 */
SessionRequest.prototype['fileSize'] = undefined;

/**
 * The relative path to the file.
 * @member {String} relativePath
 */
SessionRequest.prototype['relativePath'] = undefined;

/**
 * @member {module:models/ApiDateTime} createOn
 */
SessionRequest.prototype['createOn'] = undefined;

/**
 * Specifies whether the file is encrypted or not.
 * @member {Boolean} encrypted
 */
SessionRequest.prototype['encrypted'] = undefined;

/**
 * Specifies whether to create a new file if it already exists.
 * @member {Boolean} createNewIfExist
 */
SessionRequest.prototype['createNewIfExist'] = undefined;






export default SessionRequest;

