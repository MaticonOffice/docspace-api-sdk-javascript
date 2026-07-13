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
 * The ClientSecretResponse model module.
 * @module models/ClientSecretResponse
 * @version 3.2.0
 */
class ClientSecretResponse {
    /**
     * Constructs a new <code>ClientSecretResponse</code>.
     * The response containing the regenerated client secret.
     * @alias module:models/ClientSecretResponse
     */
    constructor() { 
        
        ClientSecretResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClientSecretResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ClientSecretResponse} obj Optional instance to populate.
     * @return {module:models/ClientSecretResponse} The populated <code>ClientSecretResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientSecretResponse();

            if (data.hasOwnProperty('client_secret')) {
                obj['client_secret'] = ApiClient.convertToType(data['client_secret'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ClientSecretResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ClientSecretResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['client_secret'] && !(typeof data['client_secret'] === 'string' || data['client_secret'] instanceof String)) {
            throw new Error("Expected the field `client_secret` to be a primitive type in the JSON string but got " + data['client_secret']);
        }

        return true;
    }


}



/**
 * The newly generated client secret.
 * @member {String} client_secret
 */
ClientSecretResponse.prototype['client_secret'] = undefined;






export default ClientSecretResponse;

