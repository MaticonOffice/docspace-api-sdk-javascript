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
 * The UpdateApiKeyRequest model module.
 * @module models/UpdateApiKeyRequest
 * @version 3.2.0
 */
class UpdateApiKeyRequest {
    /**
     * Constructs a new <code>UpdateApiKeyRequest</code>.
     * The request parameters for updating an existing API key.
     * @alias module:models/UpdateApiKeyRequest
     */
    constructor() { 
        
        UpdateApiKeyRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateApiKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UpdateApiKeyRequest} obj Optional instance to populate.
     * @return {module:models/UpdateApiKeyRequest} The populated <code>UpdateApiKeyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateApiKeyRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], ['String']);
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateApiKeyRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateApiKeyRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['permissions'])) {
            throw new Error("Expected the field `permissions` to be an array in the JSON data but got " + data['permissions']);
        }

        return true;
    }


}



/**
 * The new name for the API key.
 * @member {String} name
 */
UpdateApiKeyRequest.prototype['name'] = undefined;

/**
 * The new list of permissions for the API key.
 * @member {Array.<String>} permissions
 */
UpdateApiKeyRequest.prototype['permissions'] = undefined;

/**
 * Indicates whether the API key should be active or not.
 * @member {Boolean} isActive
 */
UpdateApiKeyRequest.prototype['isActive'] = undefined;






export default UpdateApiKeyRequest;

