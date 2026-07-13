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
import MessageAction from './MessageAction';

/**
 * The LoginEventDto model module.
 * @module models/LoginEventDto
 * @version 3.2.0
 */
class LoginEventDto {
    /**
     * Constructs a new <code>LoginEventDto</code>.
     * The login event parameters.
     * @alias module:models/LoginEventDto
     */
    constructor() { 
        
        LoginEventDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoginEventDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/LoginEventDto} obj Optional instance to populate.
     * @return {module:models/LoginEventDto} The populated <code>LoginEventDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoginEventDto();

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
            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LoginEventDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LoginEventDto</code>.
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
        if (data['login'] && !(typeof data['login'] === 'string' || data['login'] instanceof String)) {
            throw new Error("Expected the field `login` to be a primitive type in the JSON string but got " + data['login']);
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

        return true;
    }


}



/**
 * The login event ID.
 * @member {Number} id
 */
LoginEventDto.prototype['id'] = undefined;

/**
 * @member {module:models/ApiDateTime} date
 */
LoginEventDto.prototype['date'] = undefined;

/**
 * The user name of the login event.
 * @member {String} user
 */
LoginEventDto.prototype['user'] = undefined;

/**
 * The user ID of the login event.
 * @member {String} userId
 */
LoginEventDto.prototype['userId'] = undefined;

/**
 * The user login of the login event.
 * @member {String} login
 */
LoginEventDto.prototype['login'] = undefined;

/**
 * The login event action.
 * @member {String} action
 */
LoginEventDto.prototype['action'] = undefined;

/**
 * @member {module:models/MessageAction} actionId
 */
LoginEventDto.prototype['actionId'] = undefined;

/**
 * The login event IP.
 * @member {String} ip
 */
LoginEventDto.prototype['ip'] = undefined;

/**
 * The login event country.
 * @member {String} country
 */
LoginEventDto.prototype['country'] = undefined;

/**
 * The login event city.
 * @member {String} city
 */
LoginEventDto.prototype['city'] = undefined;

/**
 * The login event browser.
 * @member {String} browser
 */
LoginEventDto.prototype['browser'] = undefined;

/**
 * The login event platform.
 * @member {String} platform
 */
LoginEventDto.prototype['platform'] = undefined;

/**
 * The login event page.
 * @member {String} page
 */
LoginEventDto.prototype['page'] = undefined;






export default LoginEventDto;

