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
import TenantDeepLinkSettings from './TenantDeepLinkSettings';

/**
 * The DeepLinkConfigurationRequestsDto model module.
 * @module models/DeepLinkConfigurationRequestsDto
 * @version 3.2.0
 */
class DeepLinkConfigurationRequestsDto {
    /**
     * Constructs a new <code>DeepLinkConfigurationRequestsDto</code>.
     * The request parameters for managing the deep link configuration.
     * @alias module:models/DeepLinkConfigurationRequestsDto
     */
    constructor() { 
        
        DeepLinkConfigurationRequestsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeepLinkConfigurationRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/DeepLinkConfigurationRequestsDto} obj Optional instance to populate.
     * @return {module:models/DeepLinkConfigurationRequestsDto} The populated <code>DeepLinkConfigurationRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeepLinkConfigurationRequestsDto();

            if (data.hasOwnProperty('deepLinkSettings')) {
                obj['deepLinkSettings'] = TenantDeepLinkSettings.constructFromObject(data['deepLinkSettings']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeepLinkConfigurationRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeepLinkConfigurationRequestsDto</code>.
     */
    static validateJSON(data) {
        // validate the optional field `deepLinkSettings`
        if (data['deepLinkSettings']) { // data not null
          TenantDeepLinkSettings.validateJSON(data['deepLinkSettings']);
        }

        return true;
    }


}



/**
 * @member {module:models/TenantDeepLinkSettings} deepLinkSettings
 */
DeepLinkConfigurationRequestsDto.prototype['deepLinkSettings'] = undefined;






export default DeepLinkConfigurationRequestsDto;

