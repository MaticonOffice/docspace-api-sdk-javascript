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
 * The FileDtoIntegerViewAccessibility model module.
 * @module models/FileDtoIntegerViewAccessibility
 * @version 3.2.0
 */
class FileDtoIntegerViewAccessibility {
    /**
     * Constructs a new <code>FileDtoIntegerViewAccessibility</code>.
     * The file accessibility.
     * @alias module:models/FileDtoIntegerViewAccessibility
     */
    constructor() { 
        
        FileDtoIntegerViewAccessibility.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileDtoIntegerViewAccessibility</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FileDtoIntegerViewAccessibility} obj Optional instance to populate.
     * @return {module:models/FileDtoIntegerViewAccessibility} The populated <code>FileDtoIntegerViewAccessibility</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileDtoIntegerViewAccessibility();

            if (data.hasOwnProperty('ImageView')) {
                obj['ImageView'] = ApiClient.convertToType(data['ImageView'], 'Boolean');
            }
            if (data.hasOwnProperty('MediaView')) {
                obj['MediaView'] = ApiClient.convertToType(data['MediaView'], 'Boolean');
            }
            if (data.hasOwnProperty('WebView')) {
                obj['WebView'] = ApiClient.convertToType(data['WebView'], 'Boolean');
            }
            if (data.hasOwnProperty('WebEdit')) {
                obj['WebEdit'] = ApiClient.convertToType(data['WebEdit'], 'Boolean');
            }
            if (data.hasOwnProperty('WebReview')) {
                obj['WebReview'] = ApiClient.convertToType(data['WebReview'], 'Boolean');
            }
            if (data.hasOwnProperty('WebCustomFilterEditing')) {
                obj['WebCustomFilterEditing'] = ApiClient.convertToType(data['WebCustomFilterEditing'], 'Boolean');
            }
            if (data.hasOwnProperty('WebRestrictedEditing')) {
                obj['WebRestrictedEditing'] = ApiClient.convertToType(data['WebRestrictedEditing'], 'Boolean');
            }
            if (data.hasOwnProperty('WebComment')) {
                obj['WebComment'] = ApiClient.convertToType(data['WebComment'], 'Boolean');
            }
            if (data.hasOwnProperty('CoAuhtoring')) {
                obj['CoAuhtoring'] = ApiClient.convertToType(data['CoAuhtoring'], 'Boolean');
            }
            if (data.hasOwnProperty('CanConvert')) {
                obj['CanConvert'] = ApiClient.convertToType(data['CanConvert'], 'Boolean');
            }
            if (data.hasOwnProperty('MustConvert')) {
                obj['MustConvert'] = ApiClient.convertToType(data['MustConvert'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileDtoIntegerViewAccessibility</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileDtoIntegerViewAccessibility</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Boolean} ImageView
 */
FileDtoIntegerViewAccessibility.prototype['ImageView'] = undefined;

/**
 * @member {Boolean} MediaView
 */
FileDtoIntegerViewAccessibility.prototype['MediaView'] = undefined;

/**
 * @member {Boolean} WebView
 */
FileDtoIntegerViewAccessibility.prototype['WebView'] = undefined;

/**
 * @member {Boolean} WebEdit
 */
FileDtoIntegerViewAccessibility.prototype['WebEdit'] = undefined;

/**
 * @member {Boolean} WebReview
 */
FileDtoIntegerViewAccessibility.prototype['WebReview'] = undefined;

/**
 * @member {Boolean} WebCustomFilterEditing
 */
FileDtoIntegerViewAccessibility.prototype['WebCustomFilterEditing'] = undefined;

/**
 * @member {Boolean} WebRestrictedEditing
 */
FileDtoIntegerViewAccessibility.prototype['WebRestrictedEditing'] = undefined;

/**
 * @member {Boolean} WebComment
 */
FileDtoIntegerViewAccessibility.prototype['WebComment'] = undefined;

/**
 * @member {Boolean} CoAuhtoring
 */
FileDtoIntegerViewAccessibility.prototype['CoAuhtoring'] = undefined;

/**
 * @member {Boolean} CanConvert
 */
FileDtoIntegerViewAccessibility.prototype['CanConvert'] = undefined;

/**
 * @member {Boolean} MustConvert
 */
FileDtoIntegerViewAccessibility.prototype['MustConvert'] = undefined;






export default FileDtoIntegerViewAccessibility;

