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
 * The CustomNavigationItem model module.
 * @module models/CustomNavigationItem
 * @version 3.2.0
 */
class CustomNavigationItem {
    /**
     * Constructs a new <code>CustomNavigationItem</code>.
     * The custom navigation item parameters.
     * @alias module:models/CustomNavigationItem
     */
    constructor() { 
        
        CustomNavigationItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomNavigationItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CustomNavigationItem} obj Optional instance to populate.
     * @return {module:models/CustomNavigationItem} The populated <code>CustomNavigationItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomNavigationItem();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('bigImg')) {
                obj['bigImg'] = ApiClient.convertToType(data['bigImg'], 'String');
            }
            if (data.hasOwnProperty('smallImg')) {
                obj['smallImg'] = ApiClient.convertToType(data['smallImg'], 'String');
            }
            if (data.hasOwnProperty('showInMenu')) {
                obj['showInMenu'] = ApiClient.convertToType(data['showInMenu'], 'Boolean');
            }
            if (data.hasOwnProperty('showOnHomePage')) {
                obj['showOnHomePage'] = ApiClient.convertToType(data['showOnHomePage'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomNavigationItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomNavigationItem</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['bigImg'] && !(typeof data['bigImg'] === 'string' || data['bigImg'] instanceof String)) {
            throw new Error("Expected the field `bigImg` to be a primitive type in the JSON string but got " + data['bigImg']);
        }
        // ensure the json data is a string
        if (data['smallImg'] && !(typeof data['smallImg'] === 'string' || data['smallImg'] instanceof String)) {
            throw new Error("Expected the field `smallImg` to be a primitive type in the JSON string but got " + data['smallImg']);
        }

        return true;
    }


}



/**
 * The ID of the custom navigation item.
 * @member {String} id
 */
CustomNavigationItem.prototype['id'] = undefined;

/**
 * The label of the custom navigation item.
 * @member {String} label
 */
CustomNavigationItem.prototype['label'] = undefined;

/**
 * The URL of the custom navigation item.
 * @member {String} url
 */
CustomNavigationItem.prototype['url'] = undefined;

/**
 * The big image of the custom navigation item.
 * @member {String} bigImg
 */
CustomNavigationItem.prototype['bigImg'] = undefined;

/**
 * The small image of the custom navigation item.
 * @member {String} smallImg
 */
CustomNavigationItem.prototype['smallImg'] = undefined;

/**
 * Specifies whether to show the custom navigation item in menu or not.
 * @member {Boolean} showInMenu
 */
CustomNavigationItem.prototype['showInMenu'] = undefined;

/**
 * Specifies whether to show the custom navigation item on home page or not.
 * @member {Boolean} showOnHomePage
 */
CustomNavigationItem.prototype['showOnHomePage'] = undefined;






export default CustomNavigationItem;

