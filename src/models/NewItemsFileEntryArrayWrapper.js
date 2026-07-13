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
import NewItemsDtoFileEntryDto from './NewItemsDtoFileEntryDto';

/**
 * The NewItemsFileEntryArrayWrapper model module.
 * @module models/NewItemsFileEntryArrayWrapper
 * @version 3.2.0
 */
class NewItemsFileEntryArrayWrapper {
    /**
     * Constructs a new <code>NewItemsFileEntryArrayWrapper</code>.
     * @alias module:models/NewItemsFileEntryArrayWrapper
     */
    constructor() { 
        
        NewItemsFileEntryArrayWrapper.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NewItemsFileEntryArrayWrapper</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/NewItemsFileEntryArrayWrapper} obj Optional instance to populate.
     * @return {module:models/NewItemsFileEntryArrayWrapper} The populated <code>NewItemsFileEntryArrayWrapper</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewItemsFileEntryArrayWrapper();

            if (data.hasOwnProperty('response')) {
                obj['response'] = ApiClient.convertToType(data['response'], [NewItemsDtoFileEntryDto]);
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
     * Validates the JSON data with respect to <code>NewItemsFileEntryArrayWrapper</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NewItemsFileEntryArrayWrapper</code>.
     */
    static validateJSON(data) {
        if (data['response']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['response'])) {
                throw new Error("Expected the field `response` to be an array in the JSON data but got " + data['response']);
            }
            // validate the optional field `response` (array)
            for (const item of data['response']) {
                NewItemsDtoFileEntryDto.validateJSON(item);
            };
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
 * @member {Array.<module:models/NewItemsDtoFileEntryDto>} response
 */
NewItemsFileEntryArrayWrapper.prototype['response'] = undefined;

/**
 * @member {Number} count
 */
NewItemsFileEntryArrayWrapper.prototype['count'] = undefined;

/**
 * @member {Array.<module:models/ActiveConnectionsWrapperLinksInner>} links
 */
NewItemsFileEntryArrayWrapper.prototype['links'] = undefined;

/**
 * @member {Number} status
 */
NewItemsFileEntryArrayWrapper.prototype['status'] = undefined;

/**
 * @member {Number} statusCode
 */
NewItemsFileEntryArrayWrapper.prototype['statusCode'] = undefined;






export default NewItemsFileEntryArrayWrapper;

