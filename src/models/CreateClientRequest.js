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
 * The CreateClientRequest model module.
 * @module models/CreateClientRequest
 * @version 3.2.0
 */
class CreateClientRequest {
    /**
     * Constructs a new <code>CreateClientRequest</code>.
     * The request parameters for creating a client.
     * @alias module:models/CreateClientRequest
     * @param redirectUris {Array.<String>} The list of allowed redirect URIs.
     * @param allowedOrigins {Array.<String>} The list of allowed CORS origins.
     */
    constructor(redirectUris, allowedOrigins) { 
        
        CreateClientRequest.initialize(this, redirectUris, allowedOrigins);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, redirectUris, allowedOrigins) { 
        obj['redirect_uris'] = redirectUris;
        obj['allowed_origins'] = allowedOrigins;
    }

    /**
     * Constructs a <code>CreateClientRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CreateClientRequest} obj Optional instance to populate.
     * @return {module:models/CreateClientRequest} The populated <code>CreateClientRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateClientRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('scopes')) {
                obj['scopes'] = ApiClient.convertToType(data['scopes'], ['String']);
            }
            if (data.hasOwnProperty('allow_pkce')) {
                obj['allow_pkce'] = ApiClient.convertToType(data['allow_pkce'], 'Boolean');
            }
            if (data.hasOwnProperty('is_public')) {
                obj['is_public'] = ApiClient.convertToType(data['is_public'], 'Boolean');
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
            if (data.hasOwnProperty('redirect_uris')) {
                obj['redirect_uris'] = ApiClient.convertToType(data['redirect_uris'], ['String']);
            }
            if (data.hasOwnProperty('allowed_origins')) {
                obj['allowed_origins'] = ApiClient.convertToType(data['allowed_origins'], ['String']);
            }
            if (data.hasOwnProperty('logout_redirect_uri')) {
                obj['logout_redirect_uri'] = ApiClient.convertToType(data['logout_redirect_uri'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateClientRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateClientRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateClientRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
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
        if (!Array.isArray(data['scopes'])) {
            throw new Error("Expected the field `scopes` to be an array in the JSON data but got " + data['scopes']);
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
        // ensure the json data is an array
        if (!Array.isArray(data['redirect_uris'])) {
            throw new Error("Expected the field `redirect_uris` to be an array in the JSON data but got " + data['redirect_uris']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['allowed_origins'])) {
            throw new Error("Expected the field `allowed_origins` to be an array in the JSON data but got " + data['allowed_origins']);
        }
        // ensure the json data is a string
        if (data['logout_redirect_uri'] && !(typeof data['logout_redirect_uri'] === 'string' || data['logout_redirect_uri'] instanceof String)) {
            throw new Error("Expected the field `logout_redirect_uri` to be a primitive type in the JSON string but got " + data['logout_redirect_uri']);
        }

        return true;
    }


}

CreateClientRequest.RequiredProperties = ["redirect_uris", "allowed_origins"];

/**
 * The client name.
 * @member {String} name
 */
CreateClientRequest.prototype['name'] = undefined;

/**
 * The client description.
 * @member {String} description
 */
CreateClientRequest.prototype['description'] = undefined;

/**
 * The client logo in base64 format.
 * @member {String} logo
 */
CreateClientRequest.prototype['logo'] = undefined;

/**
 * The client scopes.
 * @member {Array.<String>} scopes
 */
CreateClientRequest.prototype['scopes'] = undefined;

/**
 * Indicates whether PKCE is allowed for the client.
 * @member {Boolean} allow_pkce
 */
CreateClientRequest.prototype['allow_pkce'] = undefined;

/**
 * Indicates whether the client is accessible by third-party tenants.
 * @member {Boolean} is_public
 */
CreateClientRequest.prototype['is_public'] = undefined;

/**
 * The URL to the client's website.
 * @member {String} website_url
 */
CreateClientRequest.prototype['website_url'] = undefined;

/**
 * The URL to the client's terms of service.
 * @member {String} terms_url
 */
CreateClientRequest.prototype['terms_url'] = undefined;

/**
 * The URL to the client's privacy policy.
 * @member {String} policy_url
 */
CreateClientRequest.prototype['policy_url'] = undefined;

/**
 * The list of allowed redirect URIs.
 * @member {Array.<String>} redirect_uris
 */
CreateClientRequest.prototype['redirect_uris'] = undefined;

/**
 * The list of allowed CORS origins.
 * @member {Array.<String>} allowed_origins
 */
CreateClientRequest.prototype['allowed_origins'] = undefined;

/**
 * The list of allowed logout redirect URIs.
 * @member {String} logout_redirect_uri
 */
CreateClientRequest.prototype['logout_redirect_uri'] = undefined;






export default CreateClientRequest;

