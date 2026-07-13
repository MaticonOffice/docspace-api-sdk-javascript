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
import FileShare from './FileShare';

/**
 * The FileShareParams model module.
 * @module models/FileShareParams
 * @version 3.2.0
 */
class FileShareParams {
    /**
     * Constructs a new <code>FileShareParams</code>.
     * The collection of file sharing parameters.
     * @alias module:models/FileShareParams
     */
    constructor() { 
        
        FileShareParams.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileShareParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FileShareParams} obj Optional instance to populate.
     * @return {module:models/FileShareParams} The populated <code>FileShareParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileShareParams();

            if (data.hasOwnProperty('shareTo')) {
                obj['shareTo'] = ApiClient.convertToType(data['shareTo'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('access')) {
                obj['access'] = FileShare.constructFromObject(data['access']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileShareParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileShareParams</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['shareTo'] && !(typeof data['shareTo'] === 'string' || data['shareTo'] instanceof String)) {
            throw new Error("Expected the field `shareTo` to be a primitive type in the JSON string but got " + data['shareTo']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }

        return true;
    }


}



/**
 * The ID of the user to whom the file will be shared.
 * @member {String} shareTo
 */
FileShareParams.prototype['shareTo'] = undefined;

/**
 * The user email address.
 * @member {String} email
 */
FileShareParams.prototype['email'] = undefined;

/**
 * @member {module:models/FileShare} access
 */
FileShareParams.prototype['access'] = undefined;






export default FileShareParams;

