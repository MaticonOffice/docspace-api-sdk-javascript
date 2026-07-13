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
 * The CheckDocServiceUrlRequestDto model module.
 * @module models/CheckDocServiceUrlRequestDto
 * @version 3.2.0
 */
class CheckDocServiceUrlRequestDto {
    /**
     * Constructs a new <code>CheckDocServiceUrlRequestDto</code>.
     * The request parameters for checking the document service location.
     * @alias module:models/CheckDocServiceUrlRequestDto
     */
    constructor() { 
        
        CheckDocServiceUrlRequestDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CheckDocServiceUrlRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CheckDocServiceUrlRequestDto} obj Optional instance to populate.
     * @return {module:models/CheckDocServiceUrlRequestDto} The populated <code>CheckDocServiceUrlRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckDocServiceUrlRequestDto();

            if (data.hasOwnProperty('docServiceUrl')) {
                obj['docServiceUrl'] = ApiClient.convertToType(data['docServiceUrl'], 'String');
            }
            if (data.hasOwnProperty('docServiceUrlInternal')) {
                obj['docServiceUrlInternal'] = ApiClient.convertToType(data['docServiceUrlInternal'], 'String');
            }
            if (data.hasOwnProperty('docServiceUrlPortal')) {
                obj['docServiceUrlPortal'] = ApiClient.convertToType(data['docServiceUrlPortal'], 'String');
            }
            if (data.hasOwnProperty('docServiceSignatureSecret')) {
                obj['docServiceSignatureSecret'] = ApiClient.convertToType(data['docServiceSignatureSecret'], 'String');
            }
            if (data.hasOwnProperty('docServiceSignatureHeader')) {
                obj['docServiceSignatureHeader'] = ApiClient.convertToType(data['docServiceSignatureHeader'], 'String');
            }
            if (data.hasOwnProperty('docServiceSslVerification')) {
                obj['docServiceSslVerification'] = ApiClient.convertToType(data['docServiceSslVerification'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CheckDocServiceUrlRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CheckDocServiceUrlRequestDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['docServiceUrl'] && !(typeof data['docServiceUrl'] === 'string' || data['docServiceUrl'] instanceof String)) {
            throw new Error("Expected the field `docServiceUrl` to be a primitive type in the JSON string but got " + data['docServiceUrl']);
        }
        // ensure the json data is a string
        if (data['docServiceUrlInternal'] && !(typeof data['docServiceUrlInternal'] === 'string' || data['docServiceUrlInternal'] instanceof String)) {
            throw new Error("Expected the field `docServiceUrlInternal` to be a primitive type in the JSON string but got " + data['docServiceUrlInternal']);
        }
        // ensure the json data is a string
        if (data['docServiceUrlPortal'] && !(typeof data['docServiceUrlPortal'] === 'string' || data['docServiceUrlPortal'] instanceof String)) {
            throw new Error("Expected the field `docServiceUrlPortal` to be a primitive type in the JSON string but got " + data['docServiceUrlPortal']);
        }
        // ensure the json data is a string
        if (data['docServiceSignatureSecret'] && !(typeof data['docServiceSignatureSecret'] === 'string' || data['docServiceSignatureSecret'] instanceof String)) {
            throw new Error("Expected the field `docServiceSignatureSecret` to be a primitive type in the JSON string but got " + data['docServiceSignatureSecret']);
        }
        // ensure the json data is a string
        if (data['docServiceSignatureHeader'] && !(typeof data['docServiceSignatureHeader'] === 'string' || data['docServiceSignatureHeader'] instanceof String)) {
            throw new Error("Expected the field `docServiceSignatureHeader` to be a primitive type in the JSON string but got " + data['docServiceSignatureHeader']);
        }

        return true;
    }


}



/**
 * The Maticon Office Docs URL address.
 * @member {String} docServiceUrl
 */
CheckDocServiceUrlRequestDto.prototype['docServiceUrl'] = undefined;

/**
 * The Maticon Office Docs URL address in the local private network.
 * @member {String} docServiceUrlInternal
 */
CheckDocServiceUrlRequestDto.prototype['docServiceUrlInternal'] = undefined;

/**
 * The Maticon Office Docs URL address.
 * @member {String} docServiceUrlPortal
 */
CheckDocServiceUrlRequestDto.prototype['docServiceUrlPortal'] = undefined;

/**
 * The signature secret of the Maticon Office Docs.
 * @member {String} docServiceSignatureSecret
 */
CheckDocServiceUrlRequestDto.prototype['docServiceSignatureSecret'] = undefined;

/**
 * The signature header of the Maticon Office Docs.
 * @member {String} docServiceSignatureHeader
 */
CheckDocServiceUrlRequestDto.prototype['docServiceSignatureHeader'] = undefined;

/**
 * Specifies if the SSL verification of the Maticon Office Docs is enabled or not.
 * @member {Boolean} docServiceSslVerification
 */
CheckDocServiceUrlRequestDto.prototype['docServiceSslVerification'] = undefined;






export default CheckDocServiceUrlRequestDto;

