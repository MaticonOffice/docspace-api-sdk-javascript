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
 * The DocServiceUrlDto model module.
 * @module models/DocServiceUrlDto
 * @version 3.2.0
 */
class DocServiceUrlDto {
    /**
     * Constructs a new <code>DocServiceUrlDto</code>.
     * The document service URL parameters.
     * @alias module:models/DocServiceUrlDto
     * @param version {String} The version of the document service.
     * @param docServiceUrlApi {String} The document service URL API.
     * @param docServiceUrl {String} The document service URL.
     * @param docServiceUrlInternal {String} The internal document service URL.
     * @param docServicePortalUrl {String} The document service portal URL.
     * @param isDefault {Boolean} Specifies if the document service is default.
     */
    constructor(version, docServiceUrlApi, docServiceUrl, docServiceUrlInternal, docServicePortalUrl, isDefault) { 
        
        DocServiceUrlDto.initialize(this, version, docServiceUrlApi, docServiceUrl, docServiceUrlInternal, docServicePortalUrl, isDefault);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, version, docServiceUrlApi, docServiceUrl, docServiceUrlInternal, docServicePortalUrl, isDefault) { 
        obj['version'] = version;
        obj['docServiceUrlApi'] = docServiceUrlApi;
        obj['docServiceUrl'] = docServiceUrl;
        obj['docServiceUrlInternal'] = docServiceUrlInternal;
        obj['docServicePortalUrl'] = docServicePortalUrl;
        obj['isDefault'] = isDefault;
    }

    /**
     * Constructs a <code>DocServiceUrlDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/DocServiceUrlDto} obj Optional instance to populate.
     * @return {module:models/DocServiceUrlDto} The populated <code>DocServiceUrlDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocServiceUrlDto();

            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('docServiceUrlApi')) {
                obj['docServiceUrlApi'] = ApiClient.convertToType(data['docServiceUrlApi'], 'String');
            }
            if (data.hasOwnProperty('docServiceUrl')) {
                obj['docServiceUrl'] = ApiClient.convertToType(data['docServiceUrl'], 'String');
            }
            if (data.hasOwnProperty('docServiceUrlInternal')) {
                obj['docServiceUrlInternal'] = ApiClient.convertToType(data['docServiceUrlInternal'], 'String');
            }
            if (data.hasOwnProperty('docServicePortalUrl')) {
                obj['docServicePortalUrl'] = ApiClient.convertToType(data['docServicePortalUrl'], 'String');
            }
            if (data.hasOwnProperty('docServiceSignatureHeader')) {
                obj['docServiceSignatureHeader'] = ApiClient.convertToType(data['docServiceSignatureHeader'], 'String');
            }
            if (data.hasOwnProperty('docServiceSslVerification')) {
                obj['docServiceSslVerification'] = ApiClient.convertToType(data['docServiceSslVerification'], 'Boolean');
            }
            if (data.hasOwnProperty('isDefault')) {
                obj['isDefault'] = ApiClient.convertToType(data['isDefault'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DocServiceUrlDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DocServiceUrlDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DocServiceUrlDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }
        // ensure the json data is a string
        if (data['docServiceUrlApi'] && !(typeof data['docServiceUrlApi'] === 'string' || data['docServiceUrlApi'] instanceof String)) {
            throw new Error("Expected the field `docServiceUrlApi` to be a primitive type in the JSON string but got " + data['docServiceUrlApi']);
        }
        // ensure the json data is a string
        if (data['docServiceUrl'] && !(typeof data['docServiceUrl'] === 'string' || data['docServiceUrl'] instanceof String)) {
            throw new Error("Expected the field `docServiceUrl` to be a primitive type in the JSON string but got " + data['docServiceUrl']);
        }
        // ensure the json data is a string
        if (data['docServiceUrlInternal'] && !(typeof data['docServiceUrlInternal'] === 'string' || data['docServiceUrlInternal'] instanceof String)) {
            throw new Error("Expected the field `docServiceUrlInternal` to be a primitive type in the JSON string but got " + data['docServiceUrlInternal']);
        }
        // ensure the json data is a string
        if (data['docServicePortalUrl'] && !(typeof data['docServicePortalUrl'] === 'string' || data['docServicePortalUrl'] instanceof String)) {
            throw new Error("Expected the field `docServicePortalUrl` to be a primitive type in the JSON string but got " + data['docServicePortalUrl']);
        }
        // ensure the json data is a string
        if (data['docServiceSignatureHeader'] && !(typeof data['docServiceSignatureHeader'] === 'string' || data['docServiceSignatureHeader'] instanceof String)) {
            throw new Error("Expected the field `docServiceSignatureHeader` to be a primitive type in the JSON string but got " + data['docServiceSignatureHeader']);
        }

        return true;
    }


}

DocServiceUrlDto.RequiredProperties = ["version", "docServiceUrlApi", "docServiceUrl", "docServiceUrlInternal", "docServicePortalUrl", "isDefault"];

/**
 * The version of the document service.
 * @member {String} version
 */
DocServiceUrlDto.prototype['version'] = undefined;

/**
 * The document service URL API.
 * @member {String} docServiceUrlApi
 */
DocServiceUrlDto.prototype['docServiceUrlApi'] = undefined;

/**
 * The document service URL.
 * @member {String} docServiceUrl
 */
DocServiceUrlDto.prototype['docServiceUrl'] = undefined;

/**
 * The internal document service URL.
 * @member {String} docServiceUrlInternal
 */
DocServiceUrlDto.prototype['docServiceUrlInternal'] = undefined;

/**
 * The document service portal URL.
 * @member {String} docServicePortalUrl
 */
DocServiceUrlDto.prototype['docServicePortalUrl'] = undefined;

/**
 * The document service signature header.
 * @member {String} docServiceSignatureHeader
 */
DocServiceUrlDto.prototype['docServiceSignatureHeader'] = undefined;

/**
 * Specifies if the document service SSL verification is enabled.
 * @member {Boolean} docServiceSslVerification
 */
DocServiceUrlDto.prototype['docServiceSslVerification'] = undefined;

/**
 * Specifies if the document service is default.
 * @member {Boolean} isDefault
 */
DocServiceUrlDto.prototype['isDefault'] = undefined;






export default DocServiceUrlDto;

