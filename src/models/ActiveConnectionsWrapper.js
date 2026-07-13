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
import ActiveConnectionsDto from './ActiveConnectionsDto';
import ActiveConnectionsWrapperLinksInner from './ActiveConnectionsWrapperLinksInner';

/**
 * The ActiveConnectionsWrapper model module.
 * @module models/ActiveConnectionsWrapper
 * @version 3.2.0
 */
class ActiveConnectionsWrapper {
    /**
     * Constructs a new <code>ActiveConnectionsWrapper</code>.
     * @alias module:models/ActiveConnectionsWrapper
     */
    constructor() { 
        
        ActiveConnectionsWrapper.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActiveConnectionsWrapper</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ActiveConnectionsWrapper} obj Optional instance to populate.
     * @return {module:models/ActiveConnectionsWrapper} The populated <code>ActiveConnectionsWrapper</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActiveConnectionsWrapper();

            if (data.hasOwnProperty('response')) {
                obj['response'] = ActiveConnectionsDto.constructFromObject(data['response']);
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
     * Validates the JSON data with respect to <code>ActiveConnectionsWrapper</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActiveConnectionsWrapper</code>.
     */
    static validateJSON(data) {
        // validate the optional field `response`
        if (data['response']) { // data not null
          ActiveConnectionsDto.validateJSON(data['response']);
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
 * @member {module:models/ActiveConnectionsDto} response
 */
ActiveConnectionsWrapper.prototype['response'] = undefined;

/**
 * @member {Number} count
 */
ActiveConnectionsWrapper.prototype['count'] = undefined;

/**
 * @member {Array.<module:models/ActiveConnectionsWrapperLinksInner>} links
 */
ActiveConnectionsWrapper.prototype['links'] = undefined;

/**
 * @member {Number} status
 */
ActiveConnectionsWrapper.prototype['status'] = undefined;

/**
 * @member {Number} statusCode
 */
ActiveConnectionsWrapper.prototype['statusCode'] = undefined;






export default ActiveConnectionsWrapper;

