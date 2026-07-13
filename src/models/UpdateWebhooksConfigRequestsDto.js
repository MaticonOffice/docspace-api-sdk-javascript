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
import WebhookTrigger from './WebhookTrigger';

/**
 * The UpdateWebhooksConfigRequestsDto model module.
 * @module models/UpdateWebhooksConfigRequestsDto
 * @version 3.2.0
 */
class UpdateWebhooksConfigRequestsDto {
    /**
     * Constructs a new <code>UpdateWebhooksConfigRequestsDto</code>.
     * The request parameters for updating the webhook configuration.
     * @alias module:models/UpdateWebhooksConfigRequestsDto
     * @param name {String} The human-readable name of the webhook configuration.
     * @param uri {String} The destination URL where the webhook events will be sent.
     */
    constructor(name, uri) { 
        
        UpdateWebhooksConfigRequestsDto.initialize(this, name, uri);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, uri) { 
        obj['name'] = name;
        obj['uri'] = uri;
    }

    /**
     * Constructs a <code>UpdateWebhooksConfigRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UpdateWebhooksConfigRequestsDto} obj Optional instance to populate.
     * @return {module:models/UpdateWebhooksConfigRequestsDto} The populated <code>UpdateWebhooksConfigRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateWebhooksConfigRequestsDto();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
            if (data.hasOwnProperty('secretKey')) {
                obj['secretKey'] = ApiClient.convertToType(data['secretKey'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('ssl')) {
                obj['ssl'] = ApiClient.convertToType(data['ssl'], 'Boolean');
            }
            if (data.hasOwnProperty('triggers')) {
                obj['triggers'] = WebhookTrigger.constructFromObject(data['triggers']);
            }
            if (data.hasOwnProperty('targetId')) {
                obj['targetId'] = ApiClient.convertToType(data['targetId'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateWebhooksConfigRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateWebhooksConfigRequestsDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateWebhooksConfigRequestsDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['uri'] && !(typeof data['uri'] === 'string' || data['uri'] instanceof String)) {
            throw new Error("Expected the field `uri` to be a primitive type in the JSON string but got " + data['uri']);
        }
        // ensure the json data is a string
        if (data['secretKey'] && !(typeof data['secretKey'] === 'string' || data['secretKey'] instanceof String)) {
            throw new Error("Expected the field `secretKey` to be a primitive type in the JSON string but got " + data['secretKey']);
        }
        // ensure the json data is a string
        if (data['targetId'] && !(typeof data['targetId'] === 'string' || data['targetId'] instanceof String)) {
            throw new Error("Expected the field `targetId` to be a primitive type in the JSON string but got " + data['targetId']);
        }

        return true;
    }


}

UpdateWebhooksConfigRequestsDto.RequiredProperties = ["name", "uri"];

/**
 * The human-readable name of the webhook configuration.
 * @member {String} name
 */
UpdateWebhooksConfigRequestsDto.prototype['name'] = undefined;

/**
 * The destination URL where the webhook events will be sent.
 * @member {String} uri
 */
UpdateWebhooksConfigRequestsDto.prototype['uri'] = undefined;

/**
 * The webhook secret key used to sign the webhook payloads for the security verification.
 * @member {String} secretKey
 */
UpdateWebhooksConfigRequestsDto.prototype['secretKey'] = undefined;

/**
 * Specifies whether the webhook configuration is active or not.
 * @member {Boolean} enabled
 */
UpdateWebhooksConfigRequestsDto.prototype['enabled'] = undefined;

/**
 * Specifies whether the SSL certificate verification is required or not.
 * @member {Boolean} ssl
 */
UpdateWebhooksConfigRequestsDto.prototype['ssl'] = undefined;

/**
 * @member {module:models/WebhookTrigger} triggers
 */
UpdateWebhooksConfigRequestsDto.prototype['triggers'] = undefined;

/**
 * Target ID
 * @member {String} targetId
 */
UpdateWebhooksConfigRequestsDto.prototype['targetId'] = undefined;

/**
 * The webhook configuration ID.
 * @member {Number} id
 */
UpdateWebhooksConfigRequestsDto.prototype['id'] = undefined;






export default UpdateWebhooksConfigRequestsDto;

