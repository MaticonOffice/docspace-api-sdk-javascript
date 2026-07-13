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
import TenantIndustry from './TenantIndustry';
import TenantStatus from './TenantStatus';
import TenantTrustedDomainsType from './TenantTrustedDomainsType';

/**
 * The TenantDto model module.
 * @module models/TenantDto
 * @version 3.2.0
 */
class TenantDto {
    /**
     * Constructs a new <code>TenantDto</code>.
     * The tenant parameters.
     * @alias module:models/TenantDto
     */
    constructor() { 
        
        TenantDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TenantDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TenantDto} obj Optional instance to populate.
     * @return {module:models/TenantDto} The populated <code>TenantDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TenantDto();

            if (data.hasOwnProperty('affiliateId')) {
                obj['affiliateId'] = ApiClient.convertToType(data['affiliateId'], 'String');
            }
            if (data.hasOwnProperty('tenantAlias')) {
                obj['tenantAlias'] = ApiClient.convertToType(data['tenantAlias'], 'String');
            }
            if (data.hasOwnProperty('calls')) {
                obj['calls'] = ApiClient.convertToType(data['calls'], 'Boolean');
            }
            if (data.hasOwnProperty('campaign')) {
                obj['campaign'] = ApiClient.convertToType(data['campaign'], 'String');
            }
            if (data.hasOwnProperty('creationDateTime')) {
                obj['creationDateTime'] = ApiClient.convertToType(data['creationDateTime'], 'Date');
            }
            if (data.hasOwnProperty('hostedRegion')) {
                obj['hostedRegion'] = ApiClient.convertToType(data['hostedRegion'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'Number');
            }
            if (data.hasOwnProperty('industry')) {
                obj['industry'] = TenantIndustry.constructFromObject(data['industry']);
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('lastModified')) {
                obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Date');
            }
            if (data.hasOwnProperty('mappedDomain')) {
                obj['mappedDomain'] = ApiClient.convertToType(data['mappedDomain'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
            if (data.hasOwnProperty('paymentId')) {
                obj['paymentId'] = ApiClient.convertToType(data['paymentId'], 'String');
            }
            if (data.hasOwnProperty('spam')) {
                obj['spam'] = ApiClient.convertToType(data['spam'], 'Boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = TenantStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('statusChangeDate')) {
                obj['statusChangeDate'] = ApiClient.convertToType(data['statusChangeDate'], 'Date');
            }
            if (data.hasOwnProperty('timeZone')) {
                obj['timeZone'] = ApiClient.convertToType(data['timeZone'], 'String');
            }
            if (data.hasOwnProperty('trustedDomains')) {
                obj['trustedDomains'] = ApiClient.convertToType(data['trustedDomains'], ['String']);
            }
            if (data.hasOwnProperty('trustedDomainsRaw')) {
                obj['trustedDomainsRaw'] = ApiClient.convertToType(data['trustedDomainsRaw'], 'String');
            }
            if (data.hasOwnProperty('trustedDomainsType')) {
                obj['trustedDomainsType'] = TenantTrustedDomainsType.constructFromObject(data['trustedDomainsType']);
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('versionChanged')) {
                obj['versionChanged'] = ApiClient.convertToType(data['versionChanged'], 'Date');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TenantDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TenantDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['affiliateId'] && !(typeof data['affiliateId'] === 'string' || data['affiliateId'] instanceof String)) {
            throw new Error("Expected the field `affiliateId` to be a primitive type in the JSON string but got " + data['affiliateId']);
        }
        // ensure the json data is a string
        if (data['tenantAlias'] && !(typeof data['tenantAlias'] === 'string' || data['tenantAlias'] instanceof String)) {
            throw new Error("Expected the field `tenantAlias` to be a primitive type in the JSON string but got " + data['tenantAlias']);
        }
        // ensure the json data is a string
        if (data['campaign'] && !(typeof data['campaign'] === 'string' || data['campaign'] instanceof String)) {
            throw new Error("Expected the field `campaign` to be a primitive type in the JSON string but got " + data['campaign']);
        }
        // ensure the json data is a string
        if (data['hostedRegion'] && !(typeof data['hostedRegion'] === 'string' || data['hostedRegion'] instanceof String)) {
            throw new Error("Expected the field `hostedRegion` to be a primitive type in the JSON string but got " + data['hostedRegion']);
        }
        // ensure the json data is a string
        if (data['language'] && !(typeof data['language'] === 'string' || data['language'] instanceof String)) {
            throw new Error("Expected the field `language` to be a primitive type in the JSON string but got " + data['language']);
        }
        // ensure the json data is a string
        if (data['mappedDomain'] && !(typeof data['mappedDomain'] === 'string' || data['mappedDomain'] instanceof String)) {
            throw new Error("Expected the field `mappedDomain` to be a primitive type in the JSON string but got " + data['mappedDomain']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['ownerId'] && !(typeof data['ownerId'] === 'string' || data['ownerId'] instanceof String)) {
            throw new Error("Expected the field `ownerId` to be a primitive type in the JSON string but got " + data['ownerId']);
        }
        // ensure the json data is a string
        if (data['paymentId'] && !(typeof data['paymentId'] === 'string' || data['paymentId'] instanceof String)) {
            throw new Error("Expected the field `paymentId` to be a primitive type in the JSON string but got " + data['paymentId']);
        }
        // ensure the json data is a string
        if (data['timeZone'] && !(typeof data['timeZone'] === 'string' || data['timeZone'] instanceof String)) {
            throw new Error("Expected the field `timeZone` to be a primitive type in the JSON string but got " + data['timeZone']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['trustedDomains'])) {
            throw new Error("Expected the field `trustedDomains` to be an array in the JSON data but got " + data['trustedDomains']);
        }
        // ensure the json data is a string
        if (data['trustedDomainsRaw'] && !(typeof data['trustedDomainsRaw'] === 'string' || data['trustedDomainsRaw'] instanceof String)) {
            throw new Error("Expected the field `trustedDomainsRaw` to be a primitive type in the JSON string but got " + data['trustedDomainsRaw']);
        }
        // ensure the json data is a string
        if (data['region'] && !(typeof data['region'] === 'string' || data['region'] instanceof String)) {
            throw new Error("Expected the field `region` to be a primitive type in the JSON string but got " + data['region']);
        }

        return true;
    }


}



/**
 * The affiliate ID.
 * @member {String} affiliateId
 */
TenantDto.prototype['affiliateId'] = undefined;

/**
 * The tenant alias.
 * @member {String} tenantAlias
 */
TenantDto.prototype['tenantAlias'] = undefined;

/**
 * Specifies if the calls are available for this tenant or not.
 * @member {Boolean} calls
 */
TenantDto.prototype['calls'] = undefined;

/**
 * The tenant campaign.
 * @member {String} campaign
 */
TenantDto.prototype['campaign'] = undefined;

/**
 * The tenant creation date and time.
 * @member {Date} creationDateTime
 */
TenantDto.prototype['creationDateTime'] = undefined;

/**
 * The hosted region.
 * @member {String} hostedRegion
 */
TenantDto.prototype['hostedRegion'] = undefined;

/**
 * The tenant ID.
 * @member {Number} tenantId
 */
TenantDto.prototype['tenantId'] = undefined;

/**
 * @member {module:models/TenantIndustry} industry
 */
TenantDto.prototype['industry'] = undefined;

/**
 * The tenant language.
 * @member {String} language
 */
TenantDto.prototype['language'] = undefined;

/**
 * The date and time when the tenant was last modified.
 * @member {Date} lastModified
 */
TenantDto.prototype['lastModified'] = undefined;

/**
 * The tenant mapped domain.
 * @member {String} mappedDomain
 */
TenantDto.prototype['mappedDomain'] = undefined;

/**
 * The tenant name.
 * @member {String} name
 */
TenantDto.prototype['name'] = undefined;

/**
 * The tenant owner ID.
 * @member {String} ownerId
 */
TenantDto.prototype['ownerId'] = undefined;

/**
 * The tenant payment ID.
 * @member {String} paymentId
 */
TenantDto.prototype['paymentId'] = undefined;

/**
 * Specifies if the MATICONOFFICE newsletter is allowed or not.
 * @member {Boolean} spam
 */
TenantDto.prototype['spam'] = undefined;

/**
 * @member {module:models/TenantStatus} status
 */
TenantDto.prototype['status'] = undefined;

/**
 * The date and time when the tenant status was changed.
 * @member {Date} statusChangeDate
 */
TenantDto.prototype['statusChangeDate'] = undefined;

/**
 * The tenant time zone.
 * @member {String} timeZone
 */
TenantDto.prototype['timeZone'] = undefined;

/**
 * The list of tenant trusted domains.
 * @member {Array.<String>} trustedDomains
 */
TenantDto.prototype['trustedDomains'] = undefined;

/**
 * The tenant trusted domains in the string format.
 * @member {String} trustedDomainsRaw
 */
TenantDto.prototype['trustedDomainsRaw'] = undefined;

/**
 * @member {module:models/TenantTrustedDomainsType} trustedDomainsType
 */
TenantDto.prototype['trustedDomainsType'] = undefined;

/**
 * The tenant version
 * @member {Number} version
 */
TenantDto.prototype['version'] = undefined;

/**
 * The date and time when the tenant version was changed.
 * @member {Date} versionChanged
 */
TenantDto.prototype['versionChanged'] = undefined;

/**
 * The tenant AWS region.
 * @member {String} region
 */
TenantDto.prototype['region'] = undefined;






export default TenantDto;

