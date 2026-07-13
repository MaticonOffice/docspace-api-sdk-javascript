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
import TfaRequestsDtoType from './TfaRequestsDtoType';

/**
 * The TfaRequestsDto model module.
 * @module models/TfaRequestsDto
 * @version 3.2.0
 */
class TfaRequestsDto {
    /**
     * Constructs a new <code>TfaRequestsDto</code>.
     * The request parameters for configuring the Two-Factor Authentication (TFA) settings.
     * @alias module:models/TfaRequestsDto
     */
    constructor() { 
        
        TfaRequestsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TfaRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TfaRequestsDto} obj Optional instance to populate.
     * @return {module:models/TfaRequestsDto} The populated <code>TfaRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TfaRequestsDto();

            if (data.hasOwnProperty('type')) {
                obj['type'] = TfaRequestsDtoType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('trustedIps')) {
                obj['trustedIps'] = ApiClient.convertToType(data['trustedIps'], ['String']);
            }
            if (data.hasOwnProperty('mandatoryUsers')) {
                obj['mandatoryUsers'] = ApiClient.convertToType(data['mandatoryUsers'], ['String']);
            }
            if (data.hasOwnProperty('mandatoryGroups')) {
                obj['mandatoryGroups'] = ApiClient.convertToType(data['mandatoryGroups'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TfaRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TfaRequestsDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['trustedIps'])) {
            throw new Error("Expected the field `trustedIps` to be an array in the JSON data but got " + data['trustedIps']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['mandatoryUsers'])) {
            throw new Error("Expected the field `mandatoryUsers` to be an array in the JSON data but got " + data['mandatoryUsers']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['mandatoryGroups'])) {
            throw new Error("Expected the field `mandatoryGroups` to be an array in the JSON data but got " + data['mandatoryGroups']);
        }

        return true;
    }


}



/**
 * @member {module:models/TfaRequestsDtoType} type
 */
TfaRequestsDto.prototype['type'] = undefined;

/**
 * The ID of the user for whom the TFA settings are being configured.
 * @member {String} id
 */
TfaRequestsDto.prototype['id'] = undefined;

/**
 * The list of IP addresses that bypass TFA verification.
 * @member {Array.<String>} trustedIps
 */
TfaRequestsDto.prototype['trustedIps'] = undefined;

/**
 * The list of user IDs for whom TFA is mandatory.
 * @member {Array.<String>} mandatoryUsers
 */
TfaRequestsDto.prototype['mandatoryUsers'] = undefined;

/**
 * The list group IDs whose members must use TFA.
 * @member {Array.<String>} mandatoryGroups
 */
TfaRequestsDto.prototype['mandatoryGroups'] = undefined;






export default TfaRequestsDto;

