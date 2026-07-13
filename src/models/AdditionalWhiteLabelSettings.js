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
 * The AdditionalWhiteLabelSettings model module.
 * @module models/AdditionalWhiteLabelSettings
 * @version 3.2.0
 */
class AdditionalWhiteLabelSettings {
    /**
     * Constructs a new <code>AdditionalWhiteLabelSettings</code>.
     * The additional white label settings.
     * @alias module:models/AdditionalWhiteLabelSettings
     */
    constructor() { 
        
        AdditionalWhiteLabelSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AdditionalWhiteLabelSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/AdditionalWhiteLabelSettings} obj Optional instance to populate.
     * @return {module:models/AdditionalWhiteLabelSettings} The populated <code>AdditionalWhiteLabelSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AdditionalWhiteLabelSettings();

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
            if (data.hasOwnProperty('lastModified')) {
                obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AdditionalWhiteLabelSettings</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AdditionalWhiteLabelSettings</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Specifies if the sample documents are displayed or hidden.
 * @member {Boolean} startDocsEnabled
 */
AdditionalWhiteLabelSettings.prototype['startDocsEnabled'] = undefined;

/**
 * Specifies if the Help Center link is available or not.
 * @member {Boolean} helpCenterEnabled
 */
AdditionalWhiteLabelSettings.prototype['helpCenterEnabled'] = undefined;

/**
 * Specifies if the \"Feedback & Support\" link is available or not.
 * @member {Boolean} feedbackAndSupportEnabled
 */
AdditionalWhiteLabelSettings.prototype['feedbackAndSupportEnabled'] = undefined;

/**
 * Specifies if the user forum is available or not.
 * @member {Boolean} userForumEnabled
 */
AdditionalWhiteLabelSettings.prototype['userForumEnabled'] = undefined;

/**
 * Specifies if the Video Guides link is available or not.
 * @member {Boolean} videoGuidesEnabled
 */
AdditionalWhiteLabelSettings.prototype['videoGuidesEnabled'] = undefined;

/**
 * Specifies if the License Agreements link is available or not.
 * @member {Boolean} licenseAgreementsEnabled
 */
AdditionalWhiteLabelSettings.prototype['licenseAgreementsEnabled'] = undefined;

/**
 * @member {Date} lastModified
 */
AdditionalWhiteLabelSettings.prototype['lastModified'] = undefined;






export default AdditionalWhiteLabelSettings;

