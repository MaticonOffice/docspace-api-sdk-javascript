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
 * The CheckUploadRequest model module.
 * @module models/CheckUploadRequest
 * @version 3.2.0
 */
class CheckUploadRequest {
    /**
     * Constructs a new <code>CheckUploadRequest</code>.
     * The request parameters for checking file uploads.
     * @alias module:models/CheckUploadRequest
     */
    constructor() { 
        
        CheckUploadRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CheckUploadRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CheckUploadRequest} obj Optional instance to populate.
     * @return {module:models/CheckUploadRequest} The populated <code>CheckUploadRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckUploadRequest();

            if (data.hasOwnProperty('filesTitle')) {
                obj['filesTitle'] = ApiClient.convertToType(data['filesTitle'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CheckUploadRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CheckUploadRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['filesTitle'])) {
            throw new Error("Expected the field `filesTitle` to be an array in the JSON data but got " + data['filesTitle']);
        }

        return true;
    }


}



/**
 * The list of file titles.
 * @member {Array.<String>} filesTitle
 */
CheckUploadRequest.prototype['filesTitle'] = undefined;






export default CheckUploadRequest;

