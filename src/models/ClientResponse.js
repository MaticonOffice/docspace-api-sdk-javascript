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
 * The ClientResponse model module.
 * @module models/ClientResponse
 * @version 3.2.0
 */
class ClientResponse {
    /**
     * Constructs a new <code>ClientResponse</code>.
     * @alias module:models/ClientResponse
     */
    constructor() { 
        
        ClientResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClientResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ClientResponse} obj Optional instance to populate.
     * @return {module:models/ClientResponse} The populated <code>ClientResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientResponse();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('tenant')) {
                obj['tenant'] = ApiClient.convertToType(data['tenant'], 'Number');
            }
            if (data.hasOwnProperty('scopes')) {
                obj['scopes'] = ApiClient.convertToType(data['scopes'], ['String']);
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
            }
            if (data.hasOwnProperty('client_secret')) {
                obj['client_secret'] = ApiClient.convertToType(data['client_secret'], 'String');
            }
            if (data.hasOwnProperty('website_url')) {
                obj['website_url'] = ApiClient.convertToType(data['website_url'], 'String');
            }
            if (data.hasOwnProperty('terms_url')) {
                obj['terms_url'] = ApiClient.convertToType(data['terms_url'], 'String');
            }
            if (data.hasOwnProperty('policy_url')) {
                obj['policy_url'] = ApiClient.convertToType(data['policy_url'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('authentication_methods')) {
                obj['authentication_methods'] = ApiClient.convertToType(data['authentication_methods'], ['String']);
            }
            if (data.hasOwnProperty('redirect_uris')) {
                obj['redirect_uris'] = ApiClient.convertToType(data['redirect_uris'], ['String']);
            }
            if (data.hasOwnProperty('allowed_origins')) {
                obj['allowed_origins'] = ApiClient.convertToType(data['allowed_origins'], ['String']);
            }
            if (data.hasOwnProperty('logout_redirect_uris')) {
                obj['logout_redirect_uris'] = ApiClient.convertToType(data['logout_redirect_uris'], ['String']);
            }
            if (data.hasOwnProperty('created_on')) {
                obj['created_on'] = ApiClient.convertToType(data['created_on'], 'Date');
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = ApiClient.convertToType(data['created_by'], 'String');
            }
            if (data.hasOwnProperty('modified_on')) {
                obj['modified_on'] = ApiClient.convertToType(data['modified_on'], 'Date');
            }
            if (data.hasOwnProperty('modified_by')) {
                obj['modified_by'] = ApiClient.convertToType(data['modified_by'], 'String');
            }
            if (data.hasOwnProperty('is_public')) {
                obj['is_public'] = ApiClient.convertToType(data['is_public'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ClientResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ClientResponse</code>.
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
        // ensure the json data is an array
        if (!Array.isArray(data['scopes'])) {
            throw new Error("Expected the field `scopes` to be an array in the JSON data but got " + data['scopes']);
        }
        // ensure the json data is a string
        if (data['client_id'] && !(typeof data['client_id'] === 'string' || data['client_id'] instanceof String)) {
            throw new Error("Expected the field `client_id` to be a primitive type in the JSON string but got " + data['client_id']);
        }
        // ensure the json data is a string
        if (data['client_secret'] && !(typeof data['client_secret'] === 'string' || data['client_secret'] instanceof String)) {
            throw new Error("Expected the field `client_secret` to be a primitive type in the JSON string but got " + data['client_secret']);
        }
        // ensure the json data is a string
        if (data['website_url'] && !(typeof data['website_url'] === 'string' || data['website_url'] instanceof String)) {
            throw new Error("Expected the field `website_url` to be a primitive type in the JSON string but got " + data['website_url']);
        }
        // ensure the json data is a string
        if (data['terms_url'] && !(typeof data['terms_url'] === 'string' || data['terms_url'] instanceof String)) {
            throw new Error("Expected the field `terms_url` to be a primitive type in the JSON string but got " + data['terms_url']);
        }
        // ensure the json data is a string
        if (data['policy_url'] && !(typeof data['policy_url'] === 'string' || data['policy_url'] instanceof String)) {
            throw new Error("Expected the field `policy_url` to be a primitive type in the JSON string but got " + data['policy_url']);
        }
        // ensure the json data is a string
        if (data['logo'] && !(typeof data['logo'] === 'string' || data['logo'] instanceof String)) {
            throw new Error("Expected the field `logo` to be a primitive type in the JSON string but got " + data['logo']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['authentication_methods'])) {
            throw new Error("Expected the field `authentication_methods` to be an array in the JSON data but got " + data['authentication_methods']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['redirect_uris'])) {
            throw new Error("Expected the field `redirect_uris` to be an array in the JSON data but got " + data['redirect_uris']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['allowed_origins'])) {
            throw new Error("Expected the field `allowed_origins` to be an array in the JSON data but got " + data['allowed_origins']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['logout_redirect_uris'])) {
            throw new Error("Expected the field `logout_redirect_uris` to be an array in the JSON data but got " + data['logout_redirect_uris']);
        }
        // ensure the json data is a string
        if (data['created_by'] && !(typeof data['created_by'] === 'string' || data['created_by'] instanceof String)) {
            throw new Error("Expected the field `created_by` to be a primitive type in the JSON string but got " + data['created_by']);
        }
        // ensure the json data is a string
        if (data['modified_by'] && !(typeof data['modified_by'] === 'string' || data['modified_by'] instanceof String)) {
            throw new Error("Expected the field `modified_by` to be a primitive type in the JSON string but got " + data['modified_by']);
        }

        return true;
    }


}



/**
 * The client name.
 * @member {String} name
 */
ClientResponse.prototype['name'] = undefined;

/**
 * The client description.
 * @member {String} description
 */
ClientResponse.prototype['description'] = undefined;

/**
 * The tenant ID associated with the client.
 * @member {Number} tenant
 */
ClientResponse.prototype['tenant'] = undefined;

/**
 * The client scopes.
 * @member {Array.<String>} scopes
 */
ClientResponse.prototype['scopes'] = undefined;

/**
 * Specifies if the client is currently enabled or not.
 * @member {Boolean} enabled
 */
ClientResponse.prototype['enabled'] = undefined;

/**
 * The client identifier issued to the client during registration.
 * @member {String} client_id
 */
ClientResponse.prototype['client_id'] = undefined;

/**
 * The client secret issued to the client during registration.
 * @member {String} client_secret
 */
ClientResponse.prototype['client_secret'] = undefined;

/**
 * The URL to the client's website.
 * @member {String} website_url
 */
ClientResponse.prototype['website_url'] = undefined;

/**
 * The URL to the client's terms of service.
 * @member {String} terms_url
 */
ClientResponse.prototype['terms_url'] = undefined;

/**
 * The URL to the client's privacy policy.
 * @member {String} policy_url
 */
ClientResponse.prototype['policy_url'] = undefined;

/**
 * The URL to the client's logo.
 * @member {String} logo
 */
ClientResponse.prototype['logo'] = undefined;

/**
 * The authentication methods supported by the client.
 * @member {Array.<String>} authentication_methods
 */
ClientResponse.prototype['authentication_methods'] = undefined;

/**
 * The list of allowed redirect URIs.
 * @member {Array.<String>} redirect_uris
 */
ClientResponse.prototype['redirect_uris'] = undefined;

/**
 * The list of allowed CORS origins.
 * @member {Array.<String>} allowed_origins
 */
ClientResponse.prototype['allowed_origins'] = undefined;

/**
 * The list of allowed logout redirect URIs.
 * @member {Array.<String>} logout_redirect_uris
 */
ClientResponse.prototype['logout_redirect_uris'] = undefined;

/**
 * The date and time when the client was created.
 * @member {Date} created_on
 */
ClientResponse.prototype['created_on'] = undefined;

/**
 * The user who created the client.
 * @member {String} created_by
 */
ClientResponse.prototype['created_by'] = undefined;

/**
 * The date and time when the client was last modified.
 * @member {Date} modified_on
 */
ClientResponse.prototype['modified_on'] = undefined;

/**
 * The user who last modified the client.
 * @member {String} modified_by
 */
ClientResponse.prototype['modified_by'] = undefined;

/**
 * Indicates whether the client is accessible by third-party tenants.
 * @member {Boolean} is_public
 */
ClientResponse.prototype['is_public'] = undefined;






export default ClientResponse;

