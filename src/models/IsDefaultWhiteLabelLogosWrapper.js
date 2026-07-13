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
import IsDefaultWhiteLabelLogosDto from './IsDefaultWhiteLabelLogosDto';

/**
 * The IsDefaultWhiteLabelLogosWrapper model module.
 * @module models/IsDefaultWhiteLabelLogosWrapper
 * @version 3.2.0
 */
class IsDefaultWhiteLabelLogosWrapper {
    /**
     * Constructs a new <code>IsDefaultWhiteLabelLogosWrapper</code>.
     * @alias module:models/IsDefaultWhiteLabelLogosWrapper
     */
    constructor() { 
        
        IsDefaultWhiteLabelLogosWrapper.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IsDefaultWhiteLabelLogosWrapper</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/IsDefaultWhiteLabelLogosWrapper} obj Optional instance to populate.
     * @return {module:models/IsDefaultWhiteLabelLogosWrapper} The populated <code>IsDefaultWhiteLabelLogosWrapper</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IsDefaultWhiteLabelLogosWrapper();

            if (data.hasOwnProperty('response')) {
                obj['response'] = IsDefaultWhiteLabelLogosDto.constructFromObject(data['response']);
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
     * Validates the JSON data with respect to <code>IsDefaultWhiteLabelLogosWrapper</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IsDefaultWhiteLabelLogosWrapper</code>.
     */
    static validateJSON(data) {
        // validate the optional field `response`
        if (data['response']) { // data not null
          IsDefaultWhiteLabelLogosDto.validateJSON(data['response']);
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
 * @member {module:models/IsDefaultWhiteLabelLogosDto} response
 */
IsDefaultWhiteLabelLogosWrapper.prototype['response'] = undefined;

/**
 * @member {Number} count
 */
IsDefaultWhiteLabelLogosWrapper.prototype['count'] = undefined;

/**
 * @member {Array.<module:models/ActiveConnectionsWrapperLinksInner>} links
 */
IsDefaultWhiteLabelLogosWrapper.prototype['links'] = undefined;

/**
 * @member {Number} status
 */
IsDefaultWhiteLabelLogosWrapper.prototype['status'] = undefined;

/**
 * @member {Number} statusCode
 */
IsDefaultWhiteLabelLogosWrapper.prototype['statusCode'] = undefined;






export default IsDefaultWhiteLabelLogosWrapper;

