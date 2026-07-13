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
 * The SecurityRequestsDto model module.
 * @module models/SecurityRequestsDto
 * @version 3.2.0
 */
class SecurityRequestsDto {
    /**
     * Constructs a new <code>SecurityRequestsDto</code>.
     * The request parameters for managing user security and access permissions.
     * @alias module:models/SecurityRequestsDto
     * @param productId {String} The product ID for which permissions are being set.
     * @param userId {String} The ID of the user whose permissions are being configured.
     */
    constructor(productId, userId) { 
        
        SecurityRequestsDto.initialize(this, productId, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, productId, userId) { 
        obj['productId'] = productId;
        obj['userId'] = userId;
    }

    /**
     * Constructs a <code>SecurityRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SecurityRequestsDto} obj Optional instance to populate.
     * @return {module:models/SecurityRequestsDto} The populated <code>SecurityRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecurityRequestsDto();

            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'String');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('administrator')) {
                obj['administrator'] = ApiClient.convertToType(data['administrator'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SecurityRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SecurityRequestsDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SecurityRequestsDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['productId'] && !(typeof data['productId'] === 'string' || data['productId'] instanceof String)) {
            throw new Error("Expected the field `productId` to be a primitive type in the JSON string but got " + data['productId']);
        }
        // ensure the json data is a string
        if (data['userId'] && !(typeof data['userId'] === 'string' || data['userId'] instanceof String)) {
            throw new Error("Expected the field `userId` to be a primitive type in the JSON string but got " + data['userId']);
        }

        return true;
    }


}

SecurityRequestsDto.RequiredProperties = ["productId", "userId"];

/**
 * The product ID for which permissions are being set.
 * @member {String} productId
 */
SecurityRequestsDto.prototype['productId'] = undefined;

/**
 * The ID of the user whose permissions are being configured.
 * @member {String} userId
 */
SecurityRequestsDto.prototype['userId'] = undefined;

/**
 * Specifies whether the user has administrative privileges.
 * @member {Boolean} administrator
 */
SecurityRequestsDto.prototype['administrator'] = undefined;






export default SecurityRequestsDto;

