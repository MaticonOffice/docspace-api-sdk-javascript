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

/**
 * The ActiveConnectionsItemDto model module.
 * @module models/ActiveConnectionsItemDto
 * @version 3.2.0
 */
class ActiveConnectionsItemDto {
    /**
     * Constructs a new <code>ActiveConnectionsItemDto</code>.
     * The active connection item parameters.
     * @alias module:models/ActiveConnectionsItemDto
     */
    constructor() { 
        
        ActiveConnectionsItemDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActiveConnectionsItemDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ActiveConnectionsItemDto} obj Optional instance to populate.
     * @return {module:models/ActiveConnectionsItemDto} The populated <code>ActiveConnectionsItemDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActiveConnectionsItemDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'Number');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('mobile')) {
                obj['mobile'] = ApiClient.convertToType(data['mobile'], 'Boolean');
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
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiDateTime.constructFromObject(data['date']);
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ActiveConnectionsItemDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActiveConnectionsItemDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['userId'] && !(typeof data['userId'] === 'string' || data['userId'] instanceof String)) {
            throw new Error("Expected the field `userId` to be a primitive type in the JSON string but got " + data['userId']);
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
        // validate the optional field `date`
        if (data['date']) { // data not null
          ApiDateTime.validateJSON(data['date']);
        }
        // ensure the json data is a string
        if (data['page'] && !(typeof data['page'] === 'string' || data['page'] instanceof String)) {
            throw new Error("Expected the field `page` to be a primitive type in the JSON string but got " + data['page']);
        }

        return true;
    }


}



/**
 * The active connection ID.
 * @member {Number} id
 */
ActiveConnectionsItemDto.prototype['id'] = undefined;

/**
 * The tenant ID.
 * @member {Number} tenantId
 */
ActiveConnectionsItemDto.prototype['tenantId'] = undefined;

/**
 * The user ID.
 * @member {String} userId
 */
ActiveConnectionsItemDto.prototype['userId'] = undefined;

/**
 * Specifies if the active connection has a mobile phone or not.
 * @member {Boolean} mobile
 */
ActiveConnectionsItemDto.prototype['mobile'] = undefined;

/**
 * The IP address of the active connection.
 * @member {String} ip
 */
ActiveConnectionsItemDto.prototype['ip'] = undefined;

/**
 * The active connection country.
 * @member {String} country
 */
ActiveConnectionsItemDto.prototype['country'] = undefined;

/**
 * The active connection city.
 * @member {String} city
 */
ActiveConnectionsItemDto.prototype['city'] = undefined;

/**
 * The active connection browser.
 * @member {String} browser
 */
ActiveConnectionsItemDto.prototype['browser'] = undefined;

/**
 * The active connection platform.
 * @member {String} platform
 */
ActiveConnectionsItemDto.prototype['platform'] = undefined;

/**
 * @member {module:models/ApiDateTime} date
 */
ActiveConnectionsItemDto.prototype['date'] = undefined;

/**
 * The active connection page.
 * @member {String} page
 */
ActiveConnectionsItemDto.prototype['page'] = undefined;






export default ActiveConnectionsItemDto;

