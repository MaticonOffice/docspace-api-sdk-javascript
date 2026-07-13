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
import QuotaSettingsRequestsDtoDefaultQuota from './QuotaSettingsRequestsDtoDefaultQuota';

/**
 * The QuotaSettingsRequestsDto model module.
 * @module models/QuotaSettingsRequestsDto
 * @version 3.2.0
 */
class QuotaSettingsRequestsDto {
    /**
     * Constructs a new <code>QuotaSettingsRequestsDto</code>.
     * The request parameters for managing the user storage quota configurations.
     * @alias module:models/QuotaSettingsRequestsDto
     * @param defaultQuota {module:models/QuotaSettingsRequestsDtoDefaultQuota} 
     */
    constructor(defaultQuota) { 
        
        QuotaSettingsRequestsDto.initialize(this, defaultQuota);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, defaultQuota) { 
        obj['defaultQuota'] = defaultQuota;
    }

    /**
     * Constructs a <code>QuotaSettingsRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/QuotaSettingsRequestsDto} obj Optional instance to populate.
     * @return {module:models/QuotaSettingsRequestsDto} The populated <code>QuotaSettingsRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuotaSettingsRequestsDto();

            if (data.hasOwnProperty('enableQuota')) {
                obj['enableQuota'] = ApiClient.convertToType(data['enableQuota'], 'Boolean');
            }
            if (data.hasOwnProperty('defaultQuota')) {
                obj['defaultQuota'] = QuotaSettingsRequestsDtoDefaultQuota.constructFromObject(data['defaultQuota']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuotaSettingsRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuotaSettingsRequestsDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of QuotaSettingsRequestsDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `defaultQuota`
        if (data['defaultQuota']) { // data not null
          QuotaSettingsRequestsDtoDefaultQuota.validateJSON(data['defaultQuota']);
        }

        return true;
    }


}

QuotaSettingsRequestsDto.RequiredProperties = ["defaultQuota"];

/**
 * Specifies whether the storage quota restrictions are enabled.
 * @member {Boolean} enableQuota
 */
QuotaSettingsRequestsDto.prototype['enableQuota'] = undefined;

/**
 * @member {module:models/QuotaSettingsRequestsDtoDefaultQuota} defaultQuota
 */
QuotaSettingsRequestsDto.prototype['defaultQuota'] = undefined;






export default QuotaSettingsRequestsDto;

