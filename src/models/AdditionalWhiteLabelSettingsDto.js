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
 * The AdditionalWhiteLabelSettingsDto model module.
 * @module models/AdditionalWhiteLabelSettingsDto
 * @version 3.2.0
 */
class AdditionalWhiteLabelSettingsDto {
    /**
     * Constructs a new <code>AdditionalWhiteLabelSettingsDto</code>.
     * The additional white label settings parameters.
     * @alias module:models/AdditionalWhiteLabelSettingsDto
     */
    constructor() { 
        
        AdditionalWhiteLabelSettingsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AdditionalWhiteLabelSettingsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/AdditionalWhiteLabelSettingsDto} obj Optional instance to populate.
     * @return {module:models/AdditionalWhiteLabelSettingsDto} The populated <code>AdditionalWhiteLabelSettingsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AdditionalWhiteLabelSettingsDto();

            if (data.hasOwnProperty('startDocsEnabled')) {
                obj['startDocsEnabled'] = ApiClient.convertToType(data['startDocsEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('helpCenterEnabled')) {
                obj['helpCenterEnabled'] = ApiClient.convertToType(data['helpCenterEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('feedbackAndSupportEnabled')) {
                obj['feedbackAndSupportEnabled'] = ApiClient.convertToType(data['feedbackAndSupportEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('userForumEnabled')) {
                obj['userForumEnabled'] = ApiClient.convertToType(data['userForumEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('videoGuidesEnabled')) {
                obj['videoGuidesEnabled'] = ApiClient.convertToType(data['videoGuidesEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('licenseAgreementsEnabled')) {
                obj['licenseAgreementsEnabled'] = ApiClient.convertToType(data['licenseAgreementsEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('isDefault')) {
                obj['isDefault'] = ApiClient.convertToType(data['isDefault'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AdditionalWhiteLabelSettingsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AdditionalWhiteLabelSettingsDto</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Specifies if the sample documents are displayed or hidden.
 * @member {Boolean} startDocsEnabled
 */
AdditionalWhiteLabelSettingsDto.prototype['startDocsEnabled'] = undefined;

/**
 * Specifies if the Help Center link is available or not.
 * @member {Boolean} helpCenterEnabled
 */
AdditionalWhiteLabelSettingsDto.prototype['helpCenterEnabled'] = undefined;

/**
 * Specifies if the \"Feedback & Support\" link is available or not.
 * @member {Boolean} feedbackAndSupportEnabled
 */
AdditionalWhiteLabelSettingsDto.prototype['feedbackAndSupportEnabled'] = undefined;

/**
 * Specifies if the user forum is available or not.
 * @member {Boolean} userForumEnabled
 */
AdditionalWhiteLabelSettingsDto.prototype['userForumEnabled'] = undefined;

/**
 * Specifies if the Video Guides link is available or not.
 * @member {Boolean} videoGuidesEnabled
 */
AdditionalWhiteLabelSettingsDto.prototype['videoGuidesEnabled'] = undefined;

/**
 * Specifies if the License Agreements link is available or not.
 * @member {Boolean} licenseAgreementsEnabled
 */
AdditionalWhiteLabelSettingsDto.prototype['licenseAgreementsEnabled'] = undefined;

/**
 * Specifies if the additional white label settings are default or not.
 * @member {Boolean} isDefault
 */
AdditionalWhiteLabelSettingsDto.prototype['isDefault'] = undefined;






export default AdditionalWhiteLabelSettingsDto;

