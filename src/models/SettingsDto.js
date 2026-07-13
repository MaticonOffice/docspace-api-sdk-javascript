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
import CultureSpecificExternalResources from './CultureSpecificExternalResources';
import DeepLinkDto from './DeepLinkDto';
import FirebaseDto from './FirebaseDto';
import FormGalleryDto from './FormGalleryDto';
import PasswordHasher from './PasswordHasher';
import PluginsDto from './PluginsDto';
import RecaptchaType from './RecaptchaType';
import TenantDomainValidator from './TenantDomainValidator';
import TenantStatus from './TenantStatus';
import TenantTrustedDomainsType from './TenantTrustedDomainsType';

/**
 * The SettingsDto model module.
 * @module models/SettingsDto
 * @version 3.2.0
 */
class SettingsDto {
    /**
     * Constructs a new <code>SettingsDto</code>.
     * The settings information.
     * @alias module:models/SettingsDto
     */
    constructor() { 
        
        SettingsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SettingsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SettingsDto} obj Optional instance to populate.
     * @return {module:models/SettingsDto} The populated <code>SettingsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SettingsDto();

            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
            if (data.hasOwnProperty('trustedDomains')) {
                obj['trustedDomains'] = ApiClient.convertToType(data['trustedDomains'], ['String']);
            }
            if (data.hasOwnProperty('trustedDomainsType')) {
                obj['trustedDomainsType'] = TenantTrustedDomainsType.constructFromObject(data['trustedDomainsType']);
            }
            if (data.hasOwnProperty('culture')) {
                obj['culture'] = ApiClient.convertToType(data['culture'], 'String');
            }
            if (data.hasOwnProperty('utcOffset')) {
                obj['utcOffset'] = ApiClient.convertToType(data['utcOffset'], 'String');
            }
            if (data.hasOwnProperty('utcHoursOffset')) {
                obj['utcHoursOffset'] = ApiClient.convertToType(data['utcHoursOffset'], 'Number');
            }
            if (data.hasOwnProperty('greetingSettings')) {
                obj['greetingSettings'] = ApiClient.convertToType(data['greetingSettings'], 'String');
            }
            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
            if (data.hasOwnProperty('nameSchemaId')) {
                obj['nameSchemaId'] = ApiClient.convertToType(data['nameSchemaId'], 'String');
            }
            if (data.hasOwnProperty('enabledJoin')) {
                obj['enabledJoin'] = ApiClient.convertToType(data['enabledJoin'], 'Boolean');
            }
            if (data.hasOwnProperty('enableAdmMess')) {
                obj['enableAdmMess'] = ApiClient.convertToType(data['enableAdmMess'], 'Boolean');
            }
            if (data.hasOwnProperty('thirdpartyEnable')) {
                obj['thirdpartyEnable'] = ApiClient.convertToType(data['thirdpartyEnable'], 'Boolean');
            }
            if (data.hasOwnProperty('docSpace')) {
                obj['docSpace'] = ApiClient.convertToType(data['docSpace'], 'Boolean');
            }
            if (data.hasOwnProperty('standalone')) {
                obj['standalone'] = ApiClient.convertToType(data['standalone'], 'Boolean');
            }
            if (data.hasOwnProperty('isAmi')) {
                obj['isAmi'] = ApiClient.convertToType(data['isAmi'], 'Boolean');
            }
            if (data.hasOwnProperty('baseDomain')) {
                obj['baseDomain'] = ApiClient.convertToType(data['baseDomain'], 'String');
            }
            if (data.hasOwnProperty('wizardToken')) {
                obj['wizardToken'] = ApiClient.convertToType(data['wizardToken'], 'String');
            }
            if (data.hasOwnProperty('passwordHash')) {
                obj['passwordHash'] = PasswordHasher.constructFromObject(data['passwordHash']);
            }
            if (data.hasOwnProperty('firebase')) {
                obj['firebase'] = FirebaseDto.constructFromObject(data['firebase']);
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('recaptchaType')) {
                obj['recaptchaType'] = RecaptchaType.constructFromObject(data['recaptchaType']);
            }
            if (data.hasOwnProperty('recaptchaPublicKey')) {
                obj['recaptchaPublicKey'] = ApiClient.convertToType(data['recaptchaPublicKey'], 'String');
            }
            if (data.hasOwnProperty('debugInfo')) {
                obj['debugInfo'] = ApiClient.convertToType(data['debugInfo'], 'Boolean');
            }
            if (data.hasOwnProperty('socketUrl')) {
                obj['socketUrl'] = ApiClient.convertToType(data['socketUrl'], 'String');
            }
            if (data.hasOwnProperty('tenantStatus')) {
                obj['tenantStatus'] = TenantStatus.constructFromObject(data['tenantStatus']);
            }
            if (data.hasOwnProperty('tenantAlias')) {
                obj['tenantAlias'] = ApiClient.convertToType(data['tenantAlias'], 'String');
            }
            if (data.hasOwnProperty('displayAbout')) {
                obj['displayAbout'] = ApiClient.convertToType(data['displayAbout'], 'Boolean');
            }
            if (data.hasOwnProperty('domainValidator')) {
                obj['domainValidator'] = TenantDomainValidator.constructFromObject(data['domainValidator']);
            }
            if (data.hasOwnProperty('zendeskKey')) {
                obj['zendeskKey'] = ApiClient.convertToType(data['zendeskKey'], 'String');
            }
            if (data.hasOwnProperty('tagManagerId')) {
                obj['tagManagerId'] = ApiClient.convertToType(data['tagManagerId'], 'String');
            }
            if (data.hasOwnProperty('cookieSettingsEnabled')) {
                obj['cookieSettingsEnabled'] = ApiClient.convertToType(data['cookieSettingsEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('limitedAccessSpace')) {
                obj['limitedAccessSpace'] = ApiClient.convertToType(data['limitedAccessSpace'], 'Boolean');
            }
            if (data.hasOwnProperty('limitedAccessDevToolsForUsers')) {
                obj['limitedAccessDevToolsForUsers'] = ApiClient.convertToType(data['limitedAccessDevToolsForUsers'], 'Boolean');
            }
            if (data.hasOwnProperty('displayBanners')) {
                obj['displayBanners'] = ApiClient.convertToType(data['displayBanners'], 'Boolean');
            }
            if (data.hasOwnProperty('userNameRegex')) {
                obj['userNameRegex'] = ApiClient.convertToType(data['userNameRegex'], 'String');
            }
            if (data.hasOwnProperty('invitationLimit')) {
                obj['invitationLimit'] = ApiClient.convertToType(data['invitationLimit'], 'Number');
            }
            if (data.hasOwnProperty('plugins')) {
                obj['plugins'] = PluginsDto.constructFromObject(data['plugins']);
            }
            if (data.hasOwnProperty('deepLink')) {
                obj['deepLink'] = DeepLinkDto.constructFromObject(data['deepLink']);
            }
            if (data.hasOwnProperty('formGallery')) {
                obj['formGallery'] = FormGalleryDto.constructFromObject(data['formGallery']);
            }
            if (data.hasOwnProperty('maxImageUploadSize')) {
                obj['maxImageUploadSize'] = ApiClient.convertToType(data['maxImageUploadSize'], 'Number');
            }
            if (data.hasOwnProperty('logoText')) {
                obj['logoText'] = ApiClient.convertToType(data['logoText'], 'String');
            }
            if (data.hasOwnProperty('externalResources')) {
                obj['externalResources'] = CultureSpecificExternalResources.constructFromObject(data['externalResources']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SettingsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SettingsDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['timezone'] && !(typeof data['timezone'] === 'string' || data['timezone'] instanceof String)) {
            throw new Error("Expected the field `timezone` to be a primitive type in the JSON string but got " + data['timezone']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['trustedDomains'])) {
            throw new Error("Expected the field `trustedDomains` to be an array in the JSON data but got " + data['trustedDomains']);
        }
        // ensure the json data is a string
        if (data['culture'] && !(typeof data['culture'] === 'string' || data['culture'] instanceof String)) {
            throw new Error("Expected the field `culture` to be a primitive type in the JSON string but got " + data['culture']);
        }
        // ensure the json data is a string
        if (data['utcOffset'] && !(typeof data['utcOffset'] === 'string' || data['utcOffset'] instanceof String)) {
            throw new Error("Expected the field `utcOffset` to be a primitive type in the JSON string but got " + data['utcOffset']);
        }
        // ensure the json data is a string
        if (data['greetingSettings'] && !(typeof data['greetingSettings'] === 'string' || data['greetingSettings'] instanceof String)) {
            throw new Error("Expected the field `greetingSettings` to be a primitive type in the JSON string but got " + data['greetingSettings']);
        }
        // ensure the json data is a string
        if (data['ownerId'] && !(typeof data['ownerId'] === 'string' || data['ownerId'] instanceof String)) {
            throw new Error("Expected the field `ownerId` to be a primitive type in the JSON string but got " + data['ownerId']);
        }
        // ensure the json data is a string
        if (data['nameSchemaId'] && !(typeof data['nameSchemaId'] === 'string' || data['nameSchemaId'] instanceof String)) {
            throw new Error("Expected the field `nameSchemaId` to be a primitive type in the JSON string but got " + data['nameSchemaId']);
        }
        // ensure the json data is a string
        if (data['baseDomain'] && !(typeof data['baseDomain'] === 'string' || data['baseDomain'] instanceof String)) {
            throw new Error("Expected the field `baseDomain` to be a primitive type in the JSON string but got " + data['baseDomain']);
        }
        // ensure the json data is a string
        if (data['wizardToken'] && !(typeof data['wizardToken'] === 'string' || data['wizardToken'] instanceof String)) {
            throw new Error("Expected the field `wizardToken` to be a primitive type in the JSON string but got " + data['wizardToken']);
        }
        // validate the optional field `passwordHash`
        if (data['passwordHash']) { // data not null
          PasswordHasher.validateJSON(data['passwordHash']);
        }
        // validate the optional field `firebase`
        if (data['firebase']) { // data not null
          FirebaseDto.validateJSON(data['firebase']);
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }
        // ensure the json data is a string
        if (data['recaptchaPublicKey'] && !(typeof data['recaptchaPublicKey'] === 'string' || data['recaptchaPublicKey'] instanceof String)) {
            throw new Error("Expected the field `recaptchaPublicKey` to be a primitive type in the JSON string but got " + data['recaptchaPublicKey']);
        }
        // ensure the json data is a string
        if (data['socketUrl'] && !(typeof data['socketUrl'] === 'string' || data['socketUrl'] instanceof String)) {
            throw new Error("Expected the field `socketUrl` to be a primitive type in the JSON string but got " + data['socketUrl']);
        }
        // ensure the json data is a string
        if (data['tenantAlias'] && !(typeof data['tenantAlias'] === 'string' || data['tenantAlias'] instanceof String)) {
            throw new Error("Expected the field `tenantAlias` to be a primitive type in the JSON string but got " + data['tenantAlias']);
        }
        // validate the optional field `domainValidator`
        if (data['domainValidator']) { // data not null
          TenantDomainValidator.validateJSON(data['domainValidator']);
        }
        // ensure the json data is a string
        if (data['zendeskKey'] && !(typeof data['zendeskKey'] === 'string' || data['zendeskKey'] instanceof String)) {
            throw new Error("Expected the field `zendeskKey` to be a primitive type in the JSON string but got " + data['zendeskKey']);
        }
        // ensure the json data is a string
        if (data['tagManagerId'] && !(typeof data['tagManagerId'] === 'string' || data['tagManagerId'] instanceof String)) {
            throw new Error("Expected the field `tagManagerId` to be a primitive type in the JSON string but got " + data['tagManagerId']);
        }
        // ensure the json data is a string
        if (data['userNameRegex'] && !(typeof data['userNameRegex'] === 'string' || data['userNameRegex'] instanceof String)) {
            throw new Error("Expected the field `userNameRegex` to be a primitive type in the JSON string but got " + data['userNameRegex']);
        }
        // validate the optional field `plugins`
        if (data['plugins']) { // data not null
          PluginsDto.validateJSON(data['plugins']);
        }
        // validate the optional field `deepLink`
        if (data['deepLink']) { // data not null
          DeepLinkDto.validateJSON(data['deepLink']);
        }
        // validate the optional field `formGallery`
        if (data['formGallery']) { // data not null
          FormGalleryDto.validateJSON(data['formGallery']);
        }
        // ensure the json data is a string
        if (data['logoText'] && !(typeof data['logoText'] === 'string' || data['logoText'] instanceof String)) {
            throw new Error("Expected the field `logoText` to be a primitive type in the JSON string but got " + data['logoText']);
        }
        // validate the optional field `externalResources`
        if (data['externalResources']) { // data not null
          CultureSpecificExternalResources.validateJSON(data['externalResources']);
        }

        return true;
    }


}



/**
 * The time zone.
 * @member {String} timezone
 */
SettingsDto.prototype['timezone'] = undefined;

/**
 * The list of the trusted domains.
 * @member {Array.<String>} trustedDomains
 */
SettingsDto.prototype['trustedDomains'] = undefined;

/**
 * @member {module:models/TenantTrustedDomainsType} trustedDomainsType
 */
SettingsDto.prototype['trustedDomainsType'] = undefined;

/**
 * The language.
 * @member {String} culture
 */
SettingsDto.prototype['culture'] = undefined;

/**
 * The UTC offset in the TimeSpan format.
 * @member {String} utcOffset
 */
SettingsDto.prototype['utcOffset'] = undefined;

/**
 * The UTC offset in hours.
 * @member {Number} utcHoursOffset
 */
SettingsDto.prototype['utcHoursOffset'] = undefined;

/**
 * The greeting settings.
 * @member {String} greetingSettings
 */
SettingsDto.prototype['greetingSettings'] = undefined;

/**
 * The owner ID.
 * @member {String} ownerId
 */
SettingsDto.prototype['ownerId'] = undefined;

/**
 * The team template ID.
 * @member {String} nameSchemaId
 */
SettingsDto.prototype['nameSchemaId'] = undefined;

/**
 * Specifies if a user can join the portal or not.
 * @member {Boolean} enabledJoin
 */
SettingsDto.prototype['enabledJoin'] = undefined;

/**
 * Specifies if a user can send a message to the administrator when accessing the DocSpace portal or not.
 * @member {Boolean} enableAdmMess
 */
SettingsDto.prototype['enableAdmMess'] = undefined;

/**
 * Specifies if a user can connect third-party providers to the portal or not.
 * @member {Boolean} thirdpartyEnable
 */
SettingsDto.prototype['thirdpartyEnable'] = undefined;

/**
 * Specifies if this portal is a DocSpace portal or not.
 * @member {Boolean} docSpace
 */
SettingsDto.prototype['docSpace'] = undefined;

/**
 * Indicates whether the system is running in standalone mode.
 * @member {Boolean} standalone
 */
SettingsDto.prototype['standalone'] = undefined;

/**
 * Specifies if this portal is the AMI instance or not.
 * @member {Boolean} isAmi
 */
SettingsDto.prototype['isAmi'] = undefined;

/**
 * The base domain.
 * @member {String} baseDomain
 */
SettingsDto.prototype['baseDomain'] = undefined;

/**
 * The wizard token.
 * @member {String} wizardToken
 */
SettingsDto.prototype['wizardToken'] = undefined;

/**
 * @member {module:models/PasswordHasher} passwordHash
 */
SettingsDto.prototype['passwordHash'] = undefined;

/**
 * @member {module:models/FirebaseDto} firebase
 */
SettingsDto.prototype['firebase'] = undefined;

/**
 * The portal version.
 * @member {String} version
 */
SettingsDto.prototype['version'] = undefined;

/**
 * @member {module:models/RecaptchaType} recaptchaType
 */
SettingsDto.prototype['recaptchaType'] = undefined;

/**
 * The ReCAPTCHA public key.
 * @member {String} recaptchaPublicKey
 */
SettingsDto.prototype['recaptchaPublicKey'] = undefined;

/**
 * Specifies if the debug information will be sent or not.
 * @member {Boolean} debugInfo
 */
SettingsDto.prototype['debugInfo'] = undefined;

/**
 * The socket URL.
 * @member {String} socketUrl
 */
SettingsDto.prototype['socketUrl'] = undefined;

/**
 * @member {module:models/TenantStatus} tenantStatus
 */
SettingsDto.prototype['tenantStatus'] = undefined;

/**
 * The tenant alias.
 * @member {String} tenantAlias
 */
SettingsDto.prototype['tenantAlias'] = undefined;

/**
 * Specifies whether to display the \"About\" portal section.
 * @member {Boolean} displayAbout
 */
SettingsDto.prototype['displayAbout'] = undefined;

/**
 * @member {module:models/TenantDomainValidator} domainValidator
 */
SettingsDto.prototype['domainValidator'] = undefined;

/**
 * The Zendesk key.
 * @member {String} zendeskKey
 */
SettingsDto.prototype['zendeskKey'] = undefined;

/**
 * The tag manager ID.
 * @member {String} tagManagerId
 */
SettingsDto.prototype['tagManagerId'] = undefined;

/**
 * Specifies whether the cookie settings are enabled.
 * @member {Boolean} cookieSettingsEnabled
 */
SettingsDto.prototype['cookieSettingsEnabled'] = undefined;

/**
 * Specifies whether the access to the space management is limited or not.
 * @member {Boolean} limitedAccessSpace
 */
SettingsDto.prototype['limitedAccessSpace'] = undefined;

/**
 * Specifies whether the access to the Developer Tools is limited for users or not.
 * @member {Boolean} limitedAccessDevToolsForUsers
 */
SettingsDto.prototype['limitedAccessDevToolsForUsers'] = undefined;

/**
 * Specifies whether to display the promotional banners.
 * @member {Boolean} displayBanners
 */
SettingsDto.prototype['displayBanners'] = undefined;

/**
 * The user name validation regex.
 * @member {String} userNameRegex
 */
SettingsDto.prototype['userNameRegex'] = undefined;

/**
 * The maximum number of invitations to the portal.
 * @member {Number} invitationLimit
 */
SettingsDto.prototype['invitationLimit'] = undefined;

/**
 * @member {module:models/PluginsDto} plugins
 */
SettingsDto.prototype['plugins'] = undefined;

/**
 * @member {module:models/DeepLinkDto} deepLink
 */
SettingsDto.prototype['deepLink'] = undefined;

/**
 * @member {module:models/FormGalleryDto} formGallery
 */
SettingsDto.prototype['formGallery'] = undefined;

/**
 * The maximum image upload size.
 * @member {Number} maxImageUploadSize
 */
SettingsDto.prototype['maxImageUploadSize'] = undefined;

/**
 * The white label logo text.
 * @member {String} logoText
 */
SettingsDto.prototype['logoText'] = undefined;

/**
 * @member {module:models/CultureSpecificExternalResources} externalResources
 */
SettingsDto.prototype['externalResources'] = undefined;






export default SettingsDto;

