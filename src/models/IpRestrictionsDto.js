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
import IpRestrictionBase from './IpRestrictionBase';

/**
 * The IpRestrictionsDto model module.
 * @module models/IpRestrictionsDto
 * @version 3.2.0
 */
class IpRestrictionsDto {
    /**
     * Constructs a new <code>IpRestrictionsDto</code>.
     * The parameters for configuring new IP restriction settings.
     * @alias module:models/IpRestrictionsDto
     */
    constructor() { 
        
        IpRestrictionsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IpRestrictionsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/IpRestrictionsDto} obj Optional instance to populate.
     * @return {module:models/IpRestrictionsDto} The populated <code>IpRestrictionsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IpRestrictionsDto();

            if (data.hasOwnProperty('ipRestrictions')) {
                obj['ipRestrictions'] = ApiClient.convertToType(data['ipRestrictions'], [IpRestrictionBase]);
            }
            if (data.hasOwnProperty('enable')) {
                obj['enable'] = ApiClient.convertToType(data['enable'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IpRestrictionsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IpRestrictionsDto</code>.
     */
    static validateJSON(data) {
        if (data['ipRestrictions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['ipRestrictions'])) {
                throw new Error("Expected the field `ipRestrictions` to be an array in the JSON data but got " + data['ipRestrictions']);
            }
            // validate the optional field `ipRestrictions` (array)
            for (const item of data['ipRestrictions']) {
                IpRestrictionBase.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The list of IP restriction addresses.
 * @member {Array.<module:models/IpRestrictionBase>} ipRestrictions
 */
IpRestrictionsDto.prototype['ipRestrictions'] = undefined;

/**
 * Specifies whether to enable IP restrictions or not.
 * @member {Boolean} enable
 */
IpRestrictionsDto.prototype['enable'] = undefined;






export default IpRestrictionsDto;

