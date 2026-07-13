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
 * The HistoryData model module.
 * @module models/HistoryData
 * @version 3.2.0
 */
class HistoryData {
    /**
     * Constructs a new <code>HistoryData</code>.
     * The history data.
     * @alias module:models/HistoryData
     */
    constructor() { 
        
        HistoryData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoryData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/HistoryData} obj Optional instance to populate.
     * @return {module:models/HistoryData} The populated <code>HistoryData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoryData();

            if (data.hasOwnProperty('initiatorName')) {
                obj['initiatorName'] = ApiClient.convertToType(data['initiatorName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HistoryData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HistoryData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['initiatorName'] && !(typeof data['initiatorName'] === 'string' || data['initiatorName'] instanceof String)) {
            throw new Error("Expected the field `initiatorName` to be a primitive type in the JSON string but got " + data['initiatorName']);
        }

        return true;
    }


}



/**
 * The name of the action initiator.
 * @member {String} initiatorName
 */
HistoryData.prototype['initiatorName'] = undefined;






export default HistoryData;

