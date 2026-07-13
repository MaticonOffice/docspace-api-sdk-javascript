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
 * The LogoCover model module.
 * @module models/LogoCover
 * @version 3.2.0
 */
class LogoCover {
    /**
     * Constructs a new <code>LogoCover</code>.
     * The logo cover information.
     * @alias module:models/LogoCover
     */
    constructor() { 
        
        LogoCover.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogoCover</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/LogoCover} obj Optional instance to populate.
     * @return {module:models/LogoCover} The populated <code>LogoCover</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogoCover();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LogoCover</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LogoCover</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['data'] && !(typeof data['data'] === 'string' || data['data'] instanceof String)) {
            throw new Error("Expected the field `data` to be a primitive type in the JSON string but got " + data['data']);
        }

        return true;
    }


}



/**
 * The logo cover ID.
 * @member {String} id
 */
LogoCover.prototype['id'] = undefined;

/**
 * The logo cover data.
 * @member {String} data
 */
LogoCover.prototype['data'] = undefined;






export default LogoCover;

