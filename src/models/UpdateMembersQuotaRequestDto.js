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
import UpdateMembersQuotaRequestDtoQuota from './UpdateMembersQuotaRequestDtoQuota';

/**
 * The UpdateMembersQuotaRequestDto model module.
 * @module models/UpdateMembersQuotaRequestDto
 * @version 3.2.0
 */
class UpdateMembersQuotaRequestDto {
    /**
     * Constructs a new <code>UpdateMembersQuotaRequestDto</code>.
     * The request parameters for updating a user quota.
     * @alias module:models/UpdateMembersQuotaRequestDto
     */
    constructor() { 
        
        UpdateMembersQuotaRequestDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateMembersQuotaRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UpdateMembersQuotaRequestDto} obj Optional instance to populate.
     * @return {module:models/UpdateMembersQuotaRequestDto} The populated <code>UpdateMembersQuotaRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateMembersQuotaRequestDto();

            if (data.hasOwnProperty('userIds')) {
                obj['userIds'] = ApiClient.convertToType(data['userIds'], ['String']);
            }
            if (data.hasOwnProperty('quota')) {
                obj['quota'] = UpdateMembersQuotaRequestDtoQuota.constructFromObject(data['quota']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateMembersQuotaRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateMembersQuotaRequestDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['userIds'])) {
            throw new Error("Expected the field `userIds` to be an array in the JSON data but got " + data['userIds']);
        }
        // validate the optional field `quota`
        if (data['quota']) { // data not null
          UpdateMembersQuotaRequestDtoQuota.validateJSON(data['quota']);
        }

        return true;
    }


}



/**
 * The list of user IDs.
 * @member {Array.<String>} userIds
 */
UpdateMembersQuotaRequestDto.prototype['userIds'] = undefined;

/**
 * @member {module:models/UpdateMembersQuotaRequestDtoQuota} quota
 */
UpdateMembersQuotaRequestDto.prototype['quota'] = undefined;






export default UpdateMembersQuotaRequestDto;

