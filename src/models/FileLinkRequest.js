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
import FileShare from './FileShare';

/**
 * The FileLinkRequest model module.
 * @module models/FileLinkRequest
 * @version 3.2.0
 */
class FileLinkRequest {
    /**
     * Constructs a new <code>FileLinkRequest</code>.
     * The external link request parameters.
     * @alias module:models/FileLinkRequest
     */
    constructor() { 
        
        FileLinkRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileLinkRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FileLinkRequest} obj Optional instance to populate.
     * @return {module:models/FileLinkRequest} The populated <code>FileLinkRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileLinkRequest();

            if (data.hasOwnProperty('linkId')) {
                obj['linkId'] = ApiClient.convertToType(data['linkId'], 'String');
            }
            if (data.hasOwnProperty('access')) {
                obj['access'] = FileShare.constructFromObject(data['access']);
            }
            if (data.hasOwnProperty('expirationDate')) {
                obj['expirationDate'] = ApiDateTime.constructFromObject(data['expirationDate']);
            }
            if (data.hasOwnProperty('internal')) {
                obj['internal'] = ApiClient.convertToType(data['internal'], 'Boolean');
            }
            if (data.hasOwnProperty('primary')) {
                obj['primary'] = ApiClient.convertToType(data['primary'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileLinkRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileLinkRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['linkId'] && !(typeof data['linkId'] === 'string' || data['linkId'] instanceof String)) {
            throw new Error("Expected the field `linkId` to be a primitive type in the JSON string but got " + data['linkId']);
        }
        // validate the optional field `expirationDate`
        if (data['expirationDate']) { // data not null
          ApiDateTime.validateJSON(data['expirationDate']);
        }

        return true;
    }


}



/**
 * The external link ID.
 * @member {String} linkId
 */
FileLinkRequest.prototype['linkId'] = undefined;

/**
 * @member {module:models/FileShare} access
 */
FileLinkRequest.prototype['access'] = undefined;

/**
 * @member {module:models/ApiDateTime} expirationDate
 */
FileLinkRequest.prototype['expirationDate'] = undefined;

/**
 * The link scope, whether it is internal or not.
 * @member {Boolean} internal
 */
FileLinkRequest.prototype['internal'] = undefined;

/**
 * Specifies whether the file link is primary or not.
 * @member {Boolean} primary
 */
FileLinkRequest.prototype['primary'] = undefined;






export default FileLinkRequest;

