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
import ActionType from './ActionType';
import ApiDateTime from './ApiDateTime';
import EntryType from './EntryType';
import MessageAction from './MessageAction';
import ModuleType from './ModuleType';
import ProductType from './ProductType';

/**
 * The AuditEventDto model module.
 * @module models/AuditEventDto
 * @version 3.2.0
 */
class AuditEventDto {
    /**
     * Constructs a new <code>AuditEventDto</code>.
     * The audit event parameters.
     * @alias module:models/AuditEventDto
     */
    constructor() { 
        
        AuditEventDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuditEventDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/AuditEventDto} obj Optional instance to populate.
     * @return {module:models/AuditEventDto} The populated <code>AuditEventDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuditEventDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiDateTime.constructFromObject(data['date']);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('actionId')) {
                obj['actionId'] = MessageAction.constructFromObject(data['actionId']);
            }
            if (data.hasOwnProperty('ip')) {
                obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('browser')) {
                obj['browser'] = ApiClient.convertToType(data['browser'], 'String');
            }
            if (data.hasOwnProperty('platform')) {
                obj['platform'] = ApiClient.convertToType(data['platform'], 'String');
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'String');
            }
            if (data.hasOwnProperty('actionType')) {
                obj['actionType'] = ActionType.constructFromObject(data['actionType']);
            }
            if (data.hasOwnProperty('product')) {
                obj['product'] = ProductType.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('module')) {
                obj['module'] = ModuleType.constructFromObject(data['module']);
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], ['String']);
            }
            if (data.hasOwnProperty('entries')) {
                obj['entries'] = ApiClient.convertToType(data['entries'], [EntryType]);
            }
            if (data.hasOwnProperty('context')) {
                obj['context'] = ApiClient.convertToType(data['context'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuditEventDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuditEventDto</code>.
     */
    static validateJSON(data) {
        // validate the optional field `date`
        if (data['date']) { // data not null
          ApiDateTime.validateJSON(data['date']);
        }
        // ensure the json data is a string
        if (data['user'] && !(typeof data['user'] === 'string' || data['user'] instanceof String)) {
            throw new Error("Expected the field `user` to be a primitive type in the JSON string but got " + data['user']);
        }
        // ensure the json data is a string
        if (data['userId'] && !(typeof data['userId'] === 'string' || data['userId'] instanceof String)) {
            throw new Error("Expected the field `userId` to be a primitive type in the JSON string but got " + data['userId']);
        }
        // ensure the json data is a string
        if (data['action'] && !(typeof data['action'] === 'string' || data['action'] instanceof String)) {
            throw new Error("Expected the field `action` to be a primitive type in the JSON string but got " + data['action']);
        }
        // ensure the json data is a string
        if (data['ip'] && !(typeof data['ip'] === 'string' || data['ip'] instanceof String)) {
            throw new Error("Expected the field `ip` to be a primitive type in the JSON string but got " + data['ip']);
        }
        // ensure the json data is a string
        if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
            throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
        }
        // ensure the json data is a string
        if (data['city'] && !(typeof data['city'] === 'string' || data['city'] instanceof String)) {
            throw new Error("Expected the field `city` to be a primitive type in the JSON string but got " + data['city']);
        }
        // ensure the json data is a string
        if (data['browser'] && !(typeof data['browser'] === 'string' || data['browser'] instanceof String)) {
            throw new Error("Expected the field `browser` to be a primitive type in the JSON string but got " + data['browser']);
        }
        // ensure the json data is a string
        if (data['platform'] && !(typeof data['platform'] === 'string' || data['platform'] instanceof String)) {
            throw new Error("Expected the field `platform` to be a primitive type in the JSON string but got " + data['platform']);
        }
        // ensure the json data is a string
        if (data['page'] && !(typeof data['page'] === 'string' || data['page'] instanceof String)) {
            throw new Error("Expected the field `page` to be a primitive type in the JSON string but got " + data['page']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['target'])) {
            throw new Error("Expected the field `target` to be an array in the JSON data but got " + data['target']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['entries'])) {
            throw new Error("Expected the field `entries` to be an array in the JSON data but got " + data['entries']);
        }
        // ensure the json data is a string
        if (data['context'] && !(typeof data['context'] === 'string' || data['context'] instanceof String)) {
            throw new Error("Expected the field `context` to be a primitive type in the JSON string but got " + data['context']);
        }

        return true;
    }


}



/**
 * The audit event ID.
 * @member {Number} id
 */
AuditEventDto.prototype['id'] = undefined;

/**
 * @member {module:models/ApiDateTime} date
 */
AuditEventDto.prototype['date'] = undefined;

/**
 * The name of the user who triggered the audit event.
 * @member {String} user
 */
AuditEventDto.prototype['user'] = undefined;

/**
 * The ID of the user who triggered the audit event.
 * @member {String} userId
 */
AuditEventDto.prototype['userId'] = undefined;

/**
 * The audit event action.
 * @member {String} action
 */
AuditEventDto.prototype['action'] = undefined;

/**
 * @member {module:models/MessageAction} actionId
 */
AuditEventDto.prototype['actionId'] = undefined;

/**
 * The audit event IP.
 * @member {String} ip
 */
AuditEventDto.prototype['ip'] = undefined;

/**
 * The audit event country.
 * @member {String} country
 */
AuditEventDto.prototype['country'] = undefined;

/**
 * The audit event city.
 * @member {String} city
 */
AuditEventDto.prototype['city'] = undefined;

/**
 * The audit event browser.
 * @member {String} browser
 */
AuditEventDto.prototype['browser'] = undefined;

/**
 * The audit event platform.
 * @member {String} platform
 */
AuditEventDto.prototype['platform'] = undefined;

/**
 * The audit event page.
 * @member {String} page
 */
AuditEventDto.prototype['page'] = undefined;

/**
 * @member {module:models/ActionType} actionType
 */
AuditEventDto.prototype['actionType'] = undefined;

/**
 * @member {module:models/ProductType} product
 */
AuditEventDto.prototype['product'] = undefined;

/**
 * @member {module:models/ModuleType} module
 */
AuditEventDto.prototype['module'] = undefined;

/**
 * The list of target objects affected by the audit event (e.g., document ID, user account).
 * @member {Array.<String>} target
 */
AuditEventDto.prototype['target'] = undefined;

/**
 * The list of audit entry types (e.g., Folder, User, File).
 * @member {Array.<module:models/EntryType>} entries
 */
AuditEventDto.prototype['entries'] = undefined;

/**
 * The audit event context.
 * @member {String} context
 */
AuditEventDto.prototype['context'] = undefined;






export default AuditEventDto;

