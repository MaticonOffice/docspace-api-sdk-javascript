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
 * The SalesRequestsDto model module.
 * @module models/SalesRequestsDto
 * @version 3.2.0
 */
class SalesRequestsDto {
    /**
     * Constructs a new <code>SalesRequestsDto</code>.
     * The request parameters for handling sales and payment inquiries in the portal.
     * @alias module:models/SalesRequestsDto
     * @param email {String} The contact email address for the sales inquiry.
     * @param message {String} The details of the sales inquiry or payment request.
     */
    constructor(email, message) { 
        
        SalesRequestsDto.initialize(this, email, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, message) { 
        obj['email'] = email;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>SalesRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SalesRequestsDto} obj Optional instance to populate.
     * @return {module:models/SalesRequestsDto} The populated <code>SalesRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SalesRequestsDto();

            if (data.hasOwnProperty('userName')) {
                obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SalesRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SalesRequestsDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SalesRequestsDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['userName'] && !(typeof data['userName'] === 'string' || data['userName'] instanceof String)) {
            throw new Error("Expected the field `userName` to be a primitive type in the JSON string but got " + data['userName']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}

SalesRequestsDto.RequiredProperties = ["email", "message"];

/**
 * The name of the user submitting the sales request.
 * @member {String} userName
 */
SalesRequestsDto.prototype['userName'] = undefined;

/**
 * The contact email address for the sales inquiry.
 * @member {String} email
 */
SalesRequestsDto.prototype['email'] = undefined;

/**
 * The details of the sales inquiry or payment request.
 * @member {String} message
 */
SalesRequestsDto.prototype['message'] = undefined;






export default SalesRequestsDto;

