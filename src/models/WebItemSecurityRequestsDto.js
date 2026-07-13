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
 * The WebItemSecurityRequestsDto model module.
 * @module models/WebItemSecurityRequestsDto
 * @version 3.2.0
 */
class WebItemSecurityRequestsDto {
    /**
     * Constructs a new <code>WebItemSecurityRequestsDto</code>.
     * The request parameters for configuring security settings of a single web module.
     * @alias module:models/WebItemSecurityRequestsDto
     * @param id {String} The module ID.
     */
    constructor(id) { 
        
        WebItemSecurityRequestsDto.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>WebItemSecurityRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/WebItemSecurityRequestsDto} obj Optional instance to populate.
     * @return {module:models/WebItemSecurityRequestsDto} The populated <code>WebItemSecurityRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebItemSecurityRequestsDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('subjects')) {
                obj['subjects'] = ApiClient.convertToType(data['subjects'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebItemSecurityRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebItemSecurityRequestsDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebItemSecurityRequestsDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['subjects'])) {
            throw new Error("Expected the field `subjects` to be an array in the JSON data but got " + data['subjects']);
        }

        return true;
    }


}

WebItemSecurityRequestsDto.RequiredProperties = ["id"];

/**
 * The module ID.
 * @member {String} id
 */
WebItemSecurityRequestsDto.prototype['id'] = undefined;

/**
 * Controls whether the security restrictions are enforced for this module.
 * @member {Boolean} enabled
 */
WebItemSecurityRequestsDto.prototype['enabled'] = undefined;

/**
 * The collection of user and group identifiers granted access to the module.
 * @member {Array.<String>} subjects
 */
WebItemSecurityRequestsDto.prototype['subjects'] = undefined;






export default WebItemSecurityRequestsDto;

