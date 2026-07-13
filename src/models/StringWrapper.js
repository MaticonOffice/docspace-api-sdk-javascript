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
import ActiveConnectionsWrapperLinksInner from './ActiveConnectionsWrapperLinksInner';

/**
 * The StringWrapper model module.
 * @module models/StringWrapper
 * @version 3.2.0
 */
class StringWrapper {
    /**
     * Constructs a new <code>StringWrapper</code>.
     * @alias module:models/StringWrapper
     */
    constructor() { 
        
        StringWrapper.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StringWrapper</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/StringWrapper} obj Optional instance to populate.
     * @return {module:models/StringWrapper} The populated <code>StringWrapper</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StringWrapper();

            if (data.hasOwnProperty('response')) {
                obj['response'] = ApiClient.convertToType(data['response'], 'String');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [ActiveConnectionsWrapperLinksInner]);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('statusCode')) {
                obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StringWrapper</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StringWrapper</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['response'] && !(typeof data['response'] === 'string' || data['response'] instanceof String)) {
            throw new Error("Expected the field `response` to be a primitive type in the JSON string but got " + data['response']);
        }
        if (data['links']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['links'])) {
                throw new Error("Expected the field `links` to be an array in the JSON data but got " + data['links']);
            }
            // validate the optional field `links` (array)
            for (const item of data['links']) {
                ActiveConnectionsWrapperLinksInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} response
 */
StringWrapper.prototype['response'] = undefined;

/**
 * @member {Number} count
 */
StringWrapper.prototype['count'] = undefined;

/**
 * @member {Array.<module:models/ActiveConnectionsWrapperLinksInner>} links
 */
StringWrapper.prototype['links'] = undefined;

/**
 * @member {Number} status
 */
StringWrapper.prototype['status'] = undefined;

/**
 * @member {Number} statusCode
 */
StringWrapper.prototype['statusCode'] = undefined;






export default StringWrapper;

