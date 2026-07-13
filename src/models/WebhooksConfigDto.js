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
import EmployeeDto from './EmployeeDto';
import WebhookTrigger from './WebhookTrigger';

/**
 * The WebhooksConfigDto model module.
 * @module models/WebhooksConfigDto
 * @version 3.2.0
 */
class WebhooksConfigDto {
    /**
     * Constructs a new <code>WebhooksConfigDto</code>.
     * The webhook configuration parameters.
     * @alias module:models/WebhooksConfigDto
     */
    constructor() { 
        
        WebhooksConfigDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhooksConfigDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/WebhooksConfigDto} obj Optional instance to populate.
     * @return {module:models/WebhooksConfigDto} The populated <code>WebhooksConfigDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhooksConfigDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
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
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = EmployeeDto.constructFromObject(data['createdBy']);
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
            }
            if (data.hasOwnProperty('modifiedBy')) {
                obj['modifiedBy'] = EmployeeDto.constructFromObject(data['modifiedBy']);
            }
            if (data.hasOwnProperty('modifiedOn')) {
                obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Date');
            }
            if (data.hasOwnProperty('lastFailureOn')) {
                obj['lastFailureOn'] = ApiClient.convertToType(data['lastFailureOn'], 'Date');
            }
            if (data.hasOwnProperty('lastFailureContent')) {
                obj['lastFailureContent'] = ApiClient.convertToType(data['lastFailureContent'], 'String');
            }
            if (data.hasOwnProperty('lastSuccessOn')) {
                obj['lastSuccessOn'] = ApiClient.convertToType(data['lastSuccessOn'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhooksConfigDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhooksConfigDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['uri'] && !(typeof data['uri'] === 'string' || data['uri'] instanceof String)) {
            throw new Error("Expected the field `uri` to be a primitive type in the JSON string but got " + data['uri']);
        }
        // ensure the json data is a string
        if (data['targetId'] && !(typeof data['targetId'] === 'string' || data['targetId'] instanceof String)) {
            throw new Error("Expected the field `targetId` to be a primitive type in the JSON string but got " + data['targetId']);
        }
        // validate the optional field `createdBy`
        if (data['createdBy']) { // data not null
          EmployeeDto.validateJSON(data['createdBy']);
        }
        // validate the optional field `modifiedBy`
        if (data['modifiedBy']) { // data not null
          EmployeeDto.validateJSON(data['modifiedBy']);
        }
        // ensure the json data is a string
        if (data['lastFailureContent'] && !(typeof data['lastFailureContent'] === 'string' || data['lastFailureContent'] instanceof String)) {
            throw new Error("Expected the field `lastFailureContent` to be a primitive type in the JSON string but got " + data['lastFailureContent']);
        }

        return true;
    }


}



/**
 * The webhook ID.
 * @member {Number} id
 */
WebhooksConfigDto.prototype['id'] = undefined;

/**
 * The webhook name.
 * @member {String} name
 */
WebhooksConfigDto.prototype['name'] = undefined;

/**
 * The webhook URI.
 * @member {String} uri
 */
WebhooksConfigDto.prototype['uri'] = undefined;

/**
 * Specifies if the webhooks are enabled or not.
 * @member {Boolean} enabled
 */
WebhooksConfigDto.prototype['enabled'] = undefined;

/**
 * The webhook SSL verification (enabled or not).
 * @member {Boolean} ssl
 */
WebhooksConfigDto.prototype['ssl'] = undefined;

/**
 * @member {module:models/WebhookTrigger} triggers
 */
WebhooksConfigDto.prototype['triggers'] = undefined;

/**
 * The webhook target ID.
 * @member {String} targetId
 */
WebhooksConfigDto.prototype['targetId'] = undefined;

/**
 * @member {module:models/EmployeeDto} createdBy
 */
WebhooksConfigDto.prototype['createdBy'] = undefined;

/**
 * The date and time when the webhook was created.
 * @member {Date} createdOn
 */
WebhooksConfigDto.prototype['createdOn'] = undefined;

/**
 * @member {module:models/EmployeeDto} modifiedBy
 */
WebhooksConfigDto.prototype['modifiedBy'] = undefined;

/**
 * The date and time when the webhook was modified.
 * @member {Date} modifiedOn
 */
WebhooksConfigDto.prototype['modifiedOn'] = undefined;

/**
 * The date and time of the webhook last failure.
 * @member {Date} lastFailureOn
 */
WebhooksConfigDto.prototype['lastFailureOn'] = undefined;

/**
 * The webhook last failure content.
 * @member {String} lastFailureContent
 */
WebhooksConfigDto.prototype['lastFailureContent'] = undefined;

/**
 * The date and time of the webhook last success.
 * @member {Date} lastSuccessOn
 */
WebhooksConfigDto.prototype['lastSuccessOn'] = undefined;






export default WebhooksConfigDto;

