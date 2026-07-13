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
 * The UpdateClientRequest model module.
 * @module models/UpdateClientRequest
 * @version 3.2.0
 */
class UpdateClientRequest {
    /**
     * Constructs a new <code>UpdateClientRequest</code>.
     * The request for updating client details.
     * @alias module:models/UpdateClientRequest
     */
    constructor() { 
        
        UpdateClientRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateClientRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UpdateClientRequest} obj Optional instance to populate.
     * @return {module:models/UpdateClientRequest} The populated <code>UpdateClientRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateClientRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('allow_pkce')) {
                obj['allow_pkce'] = ApiClient.convertToType(data['allow_pkce'], 'Boolean');
            }
            if (data.hasOwnProperty('is_public')) {
                obj['is_public'] = ApiClient.convertToType(data['is_public'], 'Boolean');
            }
            if (data.hasOwnProperty('allowed_origins')) {
                obj['allowed_origins'] = ApiClient.convertToType(data['allowed_origins'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateClientRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateClientRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['logo'] && !(typeof data['logo'] === 'string' || data['logo'] instanceof String)) {
            throw new Error("Expected the field `logo` to be a primitive type in the JSON string but got " + data['logo']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['allowed_origins'])) {
            throw new Error("Expected the field `allowed_origins` to be an array in the JSON data but got " + data['allowed_origins']);
        }

        return true;
    }


}



/**
 * The client name.
 * @member {String} name
 */
UpdateClientRequest.prototype['name'] = undefined;

/**
 * The client description
 * @member {String} description
 */
UpdateClientRequest.prototype['description'] = undefined;

/**
 * The client logo in base64 format.
 * @member {String} logo
 */
UpdateClientRequest.prototype['logo'] = undefined;

/**
 * Indicates whether PKCE is allowed for the client.
 * @member {Boolean} allow_pkce
 */
UpdateClientRequest.prototype['allow_pkce'] = undefined;

/**
 * Indicates whether the client is accessible by third-party tenants.
 * @member {Boolean} is_public
 */
UpdateClientRequest.prototype['is_public'] = undefined;

/**
 * The allowed origins for the client.
 * @member {Array.<String>} allowed_origins
 */
UpdateClientRequest.prototype['allowed_origins'] = undefined;






export default UpdateClientRequest;

