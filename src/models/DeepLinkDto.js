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
 * The DeepLinkDto model module.
 * @module models/DeepLinkDto
 * @version 3.2.0
 */
class DeepLinkDto {
    /**
     * Constructs a new <code>DeepLinkDto</code>.
     * The deep link parameters.
     * @alias module:models/DeepLinkDto
     */
    constructor() { 
        
        DeepLinkDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeepLinkDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/DeepLinkDto} obj Optional instance to populate.
     * @return {module:models/DeepLinkDto} The populated <code>DeepLinkDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeepLinkDto();

            if (data.hasOwnProperty('androidPackageName')) {
                obj['androidPackageName'] = ApiClient.convertToType(data['androidPackageName'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('iosPackageId')) {
                obj['iosPackageId'] = ApiClient.convertToType(data['iosPackageId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeepLinkDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeepLinkDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['androidPackageName'] && !(typeof data['androidPackageName'] === 'string' || data['androidPackageName'] instanceof String)) {
            throw new Error("Expected the field `androidPackageName` to be a primitive type in the JSON string but got " + data['androidPackageName']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['iosPackageId'] && !(typeof data['iosPackageId'] === 'string' || data['iosPackageId'] instanceof String)) {
            throw new Error("Expected the field `iosPackageId` to be a primitive type in the JSON string but got " + data['iosPackageId']);
        }

        return true;
    }


}



/**
 * The Android package name.
 * @member {String} androidPackageName
 */
DeepLinkDto.prototype['androidPackageName'] = undefined;

/**
 * The deep link URL.
 * @member {String} url
 */
DeepLinkDto.prototype['url'] = undefined;

/**
 * The deep link IOS package ID.
 * @member {String} iosPackageId
 */
DeepLinkDto.prototype['iosPackageId'] = undefined;






export default DeepLinkDto;

