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
 * The ProductAdministratorDto model module.
 * @module models/ProductAdministratorDto
 * @version 3.2.0
 */
class ProductAdministratorDto {
    /**
     * Constructs a new <code>ProductAdministratorDto</code>.
     * The product administrator parameters.
     * @alias module:models/ProductAdministratorDto
     */
    constructor() { 
        
        ProductAdministratorDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductAdministratorDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ProductAdministratorDto} obj Optional instance to populate.
     * @return {module:models/ProductAdministratorDto} The populated <code>ProductAdministratorDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductAdministratorDto();

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
     * Validates the JSON data with respect to <code>ProductAdministratorDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductAdministratorDto</code>.
     */
    static validateJSON(data) {
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



/**
 * The product ID.
 * @member {String} productId
 */
ProductAdministratorDto.prototype['productId'] = undefined;

/**
 * The user unique identifier.
 * @member {String} userId
 */
ProductAdministratorDto.prototype['userId'] = undefined;

/**
 * Indicates whether the user has administrator privileges for the product.
 * @member {Boolean} administrator
 */
ProductAdministratorDto.prototype['administrator'] = undefined;






export default ProductAdministratorDto;

