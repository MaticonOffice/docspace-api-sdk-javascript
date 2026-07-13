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
 * The TenantQuota model module.
 * @module models/TenantQuota
 * @version 3.2.0
 */
class TenantQuota {
    /**
     * Constructs a new <code>TenantQuota</code>.
     * The current tenant quota.
     * @alias module:models/TenantQuota
     */
    constructor() { 
        
        TenantQuota.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TenantQuota</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TenantQuota} obj Optional instance to populate.
     * @return {module:models/TenantQuota} The populated <code>TenantQuota</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TenantQuota();

            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('priceCurrencySymbol')) {
                obj['priceCurrencySymbol'] = ApiClient.convertToType(data['priceCurrencySymbol'], 'String');
            }
            if (data.hasOwnProperty('priceISOCurrencySymbol')) {
                obj['priceISOCurrencySymbol'] = ApiClient.convertToType(data['priceISOCurrencySymbol'], 'String');
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'String');
            }
            if (data.hasOwnProperty('visible')) {
                obj['visible'] = ApiClient.convertToType(data['visible'], 'Boolean');
            }
            if (data.hasOwnProperty('wallet')) {
                obj['wallet'] = ApiClient.convertToType(data['wallet'], 'Boolean');
            }
            if (data.hasOwnProperty('dueDate')) {
                obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'Date');
            }
            if (data.hasOwnProperty('features')) {
                obj['features'] = ApiClient.convertToType(data['features'], 'String');
            }
            if (data.hasOwnProperty('maxFileSize')) {
                obj['maxFileSize'] = ApiClient.convertToType(data['maxFileSize'], 'Number');
            }
            if (data.hasOwnProperty('maxTotalSize')) {
                obj['maxTotalSize'] = ApiClient.convertToType(data['maxTotalSize'], 'Number');
            }
            if (data.hasOwnProperty('countUser')) {
                obj['countUser'] = ApiClient.convertToType(data['countUser'], 'Number');
            }
            if (data.hasOwnProperty('countRoomAdmin')) {
                obj['countRoomAdmin'] = ApiClient.convertToType(data['countRoomAdmin'], 'Number');
            }
            if (data.hasOwnProperty('usersInRoom')) {
                obj['usersInRoom'] = ApiClient.convertToType(data['usersInRoom'], 'Number');
            }
            if (data.hasOwnProperty('countRoom')) {
                obj['countRoom'] = ApiClient.convertToType(data['countRoom'], 'Number');
            }
            if (data.hasOwnProperty('nonProfit')) {
                obj['nonProfit'] = ApiClient.convertToType(data['nonProfit'], 'Boolean');
            }
            if (data.hasOwnProperty('trial')) {
                obj['trial'] = ApiClient.convertToType(data['trial'], 'Boolean');
            }
            if (data.hasOwnProperty('free')) {
                obj['free'] = ApiClient.convertToType(data['free'], 'Boolean');
            }
            if (data.hasOwnProperty('update')) {
                obj['update'] = ApiClient.convertToType(data['update'], 'Boolean');
            }
            if (data.hasOwnProperty('audit')) {
                obj['audit'] = ApiClient.convertToType(data['audit'], 'Boolean');
            }
            if (data.hasOwnProperty('docsEdition')) {
                obj['docsEdition'] = ApiClient.convertToType(data['docsEdition'], 'Boolean');
            }
            if (data.hasOwnProperty('ldap')) {
                obj['ldap'] = ApiClient.convertToType(data['ldap'], 'Boolean');
            }
            if (data.hasOwnProperty('sso')) {
                obj['sso'] = ApiClient.convertToType(data['sso'], 'Boolean');
            }
            if (data.hasOwnProperty('statistic')) {
                obj['statistic'] = ApiClient.convertToType(data['statistic'], 'Boolean');
            }
            if (data.hasOwnProperty('branding')) {
                obj['branding'] = ApiClient.convertToType(data['branding'], 'Boolean');
            }
            if (data.hasOwnProperty('customization')) {
                obj['customization'] = ApiClient.convertToType(data['customization'], 'Boolean');
            }
            if (data.hasOwnProperty('lifetime')) {
                obj['lifetime'] = ApiClient.convertToType(data['lifetime'], 'Boolean');
            }
            if (data.hasOwnProperty('custom')) {
                obj['custom'] = ApiClient.convertToType(data['custom'], 'Boolean');
            }
            if (data.hasOwnProperty('autoBackupRestore')) {
                obj['autoBackupRestore'] = ApiClient.convertToType(data['autoBackupRestore'], 'Boolean');
            }
            if (data.hasOwnProperty('oauth')) {
                obj['oauth'] = ApiClient.convertToType(data['oauth'], 'Boolean');
            }
            if (data.hasOwnProperty('contentSearch')) {
                obj['contentSearch'] = ApiClient.convertToType(data['contentSearch'], 'Boolean');
            }
            if (data.hasOwnProperty('thirdParty')) {
                obj['thirdParty'] = ApiClient.convertToType(data['thirdParty'], 'Boolean');
            }
            if (data.hasOwnProperty('year')) {
                obj['year'] = ApiClient.convertToType(data['year'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TenantQuota</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TenantQuota</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['priceCurrencySymbol'] && !(typeof data['priceCurrencySymbol'] === 'string' || data['priceCurrencySymbol'] instanceof String)) {
            throw new Error("Expected the field `priceCurrencySymbol` to be a primitive type in the JSON string but got " + data['priceCurrencySymbol']);
        }
        // ensure the json data is a string
        if (data['priceISOCurrencySymbol'] && !(typeof data['priceISOCurrencySymbol'] === 'string' || data['priceISOCurrencySymbol'] instanceof String)) {
            throw new Error("Expected the field `priceISOCurrencySymbol` to be a primitive type in the JSON string but got " + data['priceISOCurrencySymbol']);
        }
        // ensure the json data is a string
        if (data['productId'] && !(typeof data['productId'] === 'string' || data['productId'] instanceof String)) {
            throw new Error("Expected the field `productId` to be a primitive type in the JSON string but got " + data['productId']);
        }
        // ensure the json data is a string
        if (data['features'] && !(typeof data['features'] === 'string' || data['features'] instanceof String)) {
            throw new Error("Expected the field `features` to be a primitive type in the JSON string but got " + data['features']);
        }

        return true;
    }


}



/**
 * The tenant ID.
 * @member {Number} tenantId
 */
TenantQuota.prototype['tenantId'] = undefined;

/**
 * The tenant name.
 * @member {String} name
 */
TenantQuota.prototype['name'] = undefined;

/**
 * The tenant price.
 * @member {Number} price
 */
TenantQuota.prototype['price'] = undefined;

/**
 * The tenant price currency symbol.
 * @member {String} priceCurrencySymbol
 */
TenantQuota.prototype['priceCurrencySymbol'] = undefined;

/**
 * The tenant price three-character ISO 4217 currency symbol.
 * @member {String} priceISOCurrencySymbol
 */
TenantQuota.prototype['priceISOCurrencySymbol'] = undefined;

/**
 * The tenant product ID.
 * @member {String} productId
 */
TenantQuota.prototype['productId'] = undefined;

/**
 * Specifies if the tenant quota is visible or not.
 * @member {Boolean} visible
 */
TenantQuota.prototype['visible'] = undefined;

/**
 * Specifies if the tenant quota applies to the wallet or not
 * @member {Boolean} wallet
 */
TenantQuota.prototype['wallet'] = undefined;

/**
 * The quota due date.
 * @member {Date} dueDate
 */
TenantQuota.prototype['dueDate'] = undefined;

/**
 * The tenant quota features.
 * @member {String} features
 */
TenantQuota.prototype['features'] = undefined;

/**
 * The tenant maximum file size.
 * @member {Number} maxFileSize
 */
TenantQuota.prototype['maxFileSize'] = undefined;

/**
 * The tenant maximum total size.
 * @member {Number} maxTotalSize
 */
TenantQuota.prototype['maxTotalSize'] = undefined;

/**
 * The number of portal users.
 * @member {Number} countUser
 */
TenantQuota.prototype['countUser'] = undefined;

/**
 * The number of portal room administrators.
 * @member {Number} countRoomAdmin
 */
TenantQuota.prototype['countRoomAdmin'] = undefined;

/**
 * The number of room users.
 * @member {Number} usersInRoom
 */
TenantQuota.prototype['usersInRoom'] = undefined;

/**
 * The number of rooms.
 * @member {Number} countRoom
 */
TenantQuota.prototype['countRoom'] = undefined;

/**
 * Specifies if the tenant quota is nonprofit or not.
 * @member {Boolean} nonProfit
 */
TenantQuota.prototype['nonProfit'] = undefined;

/**
 * Specifies if the tenant quota is trial or not.
 * @member {Boolean} trial
 */
TenantQuota.prototype['trial'] = undefined;

/**
 * Specifies if the tenant quota is free or not.
 * @member {Boolean} free
 */
TenantQuota.prototype['free'] = undefined;

/**
 * Specifies if the tenant quota is updated or not.
 * @member {Boolean} update
 */
TenantQuota.prototype['update'] = undefined;

/**
 * Specifies if the audit trail is available or not.
 * @member {Boolean} audit
 */
TenantQuota.prototype['audit'] = undefined;

/**
 * Specifies if Maticon Office Docs is included in the tenant quota or not.
 * @member {Boolean} docsEdition
 */
TenantQuota.prototype['docsEdition'] = undefined;

/**
 * Specifies if the LDAP settings are available or not.
 * @member {Boolean} ldap
 */
TenantQuota.prototype['ldap'] = undefined;

/**
 * Specifies if the SSO settings are available or not.
 * @member {Boolean} sso
 */
TenantQuota.prototype['sso'] = undefined;

/**
 * Specifies if the statistics settings are available or not.
 * @member {Boolean} statistic
 */
TenantQuota.prototype['statistic'] = undefined;

/**
 * Specifies if the branding settings are available or not.
 * @member {Boolean} branding
 */
TenantQuota.prototype['branding'] = undefined;

/**
 * Specifies if the customization settings are available or not.
 * @member {Boolean} customization
 */
TenantQuota.prototype['customization'] = undefined;

/**
 * Specifies if the license has the lifetime settings or not.
 * @member {Boolean} lifetime
 */
TenantQuota.prototype['lifetime'] = undefined;

/**
 * Specifies if the custom domain URL is available or not.
 * @member {Boolean} custom
 */
TenantQuota.prototype['custom'] = undefined;

/**
 * Specifies if the automatic backup option is enabled or not.
 * @member {Boolean} autoBackupRestore
 */
TenantQuota.prototype['autoBackupRestore'] = undefined;

/**
 * Specifies if Oauth is available or not.
 * @member {Boolean} oauth
 */
TenantQuota.prototype['oauth'] = undefined;

/**
 * Specifies if the content search is available or not.
 * @member {Boolean} contentSearch
 */
TenantQuota.prototype['contentSearch'] = undefined;

/**
 * Specifies if the third-party accounts linking is available or not.
 * @member {Boolean} thirdParty
 */
TenantQuota.prototype['thirdParty'] = undefined;

/**
 * Specifies if the tenant quota is yearly subscription or not.
 * @member {Boolean} year
 */
TenantQuota.prototype['year'] = undefined;






export default TenantQuota;

