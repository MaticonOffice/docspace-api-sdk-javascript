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
 * The ApiDateTime model module.
 * @module models/ApiDateTime
 * @version 3.2.0
 */
class ApiDateTime {
    /**
     * Constructs a new <code>ApiDateTime</code>.
     * The API date and time parameters.
     * @alias module:models/ApiDateTime
     */
    constructor() { 
        
        ApiDateTime.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiDateTime</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ApiDateTime} obj Optional instance to populate.
     * @return {module:models/ApiDateTime} The populated <code>ApiDateTime</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiDateTime();

            if (data.hasOwnProperty('utcTime')) {
                obj['utcTime'] = ApiClient.convertToType(data['utcTime'], 'Date');
            }
            if (data.hasOwnProperty('timeZoneOffset')) {
                obj['timeZoneOffset'] = ApiClient.convertToType(data['timeZoneOffset'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApiDateTime</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApiDateTime</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['timeZoneOffset'] && !(typeof data['timeZoneOffset'] === 'string' || data['timeZoneOffset'] instanceof String)) {
            throw new Error("Expected the field `timeZoneOffset` to be a primitive type in the JSON string but got " + data['timeZoneOffset']);
        }

        return true;
    }


}



/**
 * The time in UTC format.
 * @member {Date} utcTime
 */
ApiDateTime.prototype['utcTime'] = undefined;

/**
 * The time zone offset.
 * @member {String} timeZoneOffset
 */
ApiDateTime.prototype['timeZoneOffset'] = undefined;






export default ApiDateTime;

