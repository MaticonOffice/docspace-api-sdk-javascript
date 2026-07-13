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
 * The ThumbnailsRequest model module.
 * @module models/ThumbnailsRequest
 * @version 3.2.0
 */
class ThumbnailsRequest {
    /**
     * Constructs a new <code>ThumbnailsRequest</code>.
     * The thumbnail request.
     * @alias module:models/ThumbnailsRequest
     */
    constructor() { 
        
        ThumbnailsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ThumbnailsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ThumbnailsRequest} obj Optional instance to populate.
     * @return {module:models/ThumbnailsRequest} The populated <code>ThumbnailsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThumbnailsRequest();

            if (data.hasOwnProperty('tmpFile')) {
                obj['tmpFile'] = ApiClient.convertToType(data['tmpFile'], 'String');
            }
            if (data.hasOwnProperty('x')) {
                obj['x'] = ApiClient.convertToType(data['x'], 'Number');
            }
            if (data.hasOwnProperty('y')) {
                obj['y'] = ApiClient.convertToType(data['y'], 'Number');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ThumbnailsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ThumbnailsRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['tmpFile'] && !(typeof data['tmpFile'] === 'string' || data['tmpFile'] instanceof String)) {
            throw new Error("Expected the field `tmpFile` to be a primitive type in the JSON string but got " + data['tmpFile']);
        }

        return true;
    }


}



/**
 * The path to the temporary thumbnail file.
 * @member {String} tmpFile
 */
ThumbnailsRequest.prototype['tmpFile'] = undefined;

/**
 * The thumbnail horizontal coordinate.
 * @member {Number} x
 */
ThumbnailsRequest.prototype['x'] = undefined;

/**
 * The thumbnail vertical coordinate.
 * @member {Number} y
 */
ThumbnailsRequest.prototype['y'] = undefined;

/**
 * The thumbnail width.
 * @member {Number} width
 */
ThumbnailsRequest.prototype['width'] = undefined;

/**
 * The thumbnail height.
 * @member {Number} height
 */
ThumbnailsRequest.prototype['height'] = undefined;






export default ThumbnailsRequest;

