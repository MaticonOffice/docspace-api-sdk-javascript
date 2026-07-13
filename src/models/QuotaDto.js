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
import PriceDto from './PriceDto';
import TenantEntityQuotaSettings from './TenantEntityQuotaSettings';
import TenantQuotaFeatureDto from './TenantQuotaFeatureDto';
import TenantQuotaSettings from './TenantQuotaSettings';

/**
 * The QuotaDto model module.
 * @module models/QuotaDto
 * @version 3.2.0
 */
class QuotaDto {
    /**
     * Constructs a new <code>QuotaDto</code>.
     * The quota information.
     * @alias module:models/QuotaDto
     */
    constructor() { 
        
        QuotaDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuotaDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/QuotaDto} obj Optional instance to populate.
     * @return {module:models/QuotaDto} The populated <code>QuotaDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuotaDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = PriceDto.constructFromObject(data['price']);
            }
            if (data.hasOwnProperty('nonProfit')) {
                obj['nonProfit'] = ApiClient.convertToType(data['nonProfit'], 'Boolean');
            }
            if (data.hasOwnProperty('free')) {
                obj['free'] = ApiClient.convertToType(data['free'], 'Boolean');
            }
            if (data.hasOwnProperty('trial')) {
                obj['trial'] = ApiClient.convertToType(data['trial'], 'Boolean');
            }
            if (data.hasOwnProperty('features')) {
                obj['features'] = ApiClient.convertToType(data['features'], [TenantQuotaFeatureDto]);
            }
            if (data.hasOwnProperty('usersQuota')) {
                obj['usersQuota'] = TenantEntityQuotaSettings.constructFromObject(data['usersQuota']);
            }
            if (data.hasOwnProperty('roomsQuota')) {
                obj['roomsQuota'] = TenantEntityQuotaSettings.constructFromObject(data['roomsQuota']);
            }
            if (data.hasOwnProperty('tenantCustomQuota')) {
                obj['tenantCustomQuota'] = TenantQuotaSettings.constructFromObject(data['tenantCustomQuota']);
            }
            if (data.hasOwnProperty('dueDate')) {
                obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuotaDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuotaDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // validate the optional field `price`
        if (data['price']) { // data not null
          PriceDto.validateJSON(data['price']);
        }
        if (data['features']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['features'])) {
                throw new Error("Expected the field `features` to be an array in the JSON data but got " + data['features']);
            }
            // validate the optional field `features` (array)
            for (const item of data['features']) {
                TenantQuotaFeatureDto.validateJSON(item);
            };
        }
        // validate the optional field `usersQuota`
        if (data['usersQuota']) { // data not null
          TenantEntityQuotaSettings.validateJSON(data['usersQuota']);
        }
        // validate the optional field `roomsQuota`
        if (data['roomsQuota']) { // data not null
          TenantEntityQuotaSettings.validateJSON(data['roomsQuota']);
        }
        // validate the optional field `tenantCustomQuota`
        if (data['tenantCustomQuota']) { // data not null
          TenantQuotaSettings.validateJSON(data['tenantCustomQuota']);
        }

        return true;
    }


}



/**
 * The quota ID.
 * @member {Number} id
 */
QuotaDto.prototype['id'] = undefined;

/**
 * The quota title.
 * @member {String} title
 */
QuotaDto.prototype['title'] = undefined;

/**
 * @member {module:models/PriceDto} price
 */
QuotaDto.prototype['price'] = undefined;

/**
 * Specifies if the quota is nonprofit or not.
 * @member {Boolean} nonProfit
 */
QuotaDto.prototype['nonProfit'] = undefined;

/**
 * Specifies if the quota is free or not.
 * @member {Boolean} free
 */
QuotaDto.prototype['free'] = undefined;

/**
 * Specifies if the quota is trial or not.
 * @member {Boolean} trial
 */
QuotaDto.prototype['trial'] = undefined;

/**
 * The list of tenant quota features.
 * @member {Array.<module:models/TenantQuotaFeatureDto>} features
 */
QuotaDto.prototype['features'] = undefined;

/**
 * @member {module:models/TenantEntityQuotaSettings} usersQuota
 */
QuotaDto.prototype['usersQuota'] = undefined;

/**
 * @member {module:models/TenantEntityQuotaSettings} roomsQuota
 */
QuotaDto.prototype['roomsQuota'] = undefined;

/**
 * @member {module:models/TenantQuotaSettings} tenantCustomQuota
 */
QuotaDto.prototype['tenantCustomQuota'] = undefined;

/**
 * The due date.
 * @member {Date} dueDate
 */
QuotaDto.prototype['dueDate'] = undefined;






export default QuotaDto;

