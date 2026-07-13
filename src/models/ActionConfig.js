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
 * The ActionConfig model module.
 * @module models/ActionConfig
 * @version 3.2.0
 */
class ActionConfig {
    /**
     * Constructs a new <code>ActionConfig</code>.
     * The information about the action in the document that will be scrolled to.
     * @alias module:models/ActionConfig
     */
    constructor() { 
        
        ActionConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActionConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ActionConfig} obj Optional instance to populate.
     * @return {module:models/ActionConfig} The populated <code>ActionConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionConfig();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ActionConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActionConfig</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['data'] && !(typeof data['data'] === 'string' || data['data'] instanceof String)) {
            throw new Error("Expected the field `data` to be a primitive type in the JSON string but got " + data['data']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * The action data that will be scrolled to.
 * @member {String} data
 */
ActionConfig.prototype['data'] = undefined;

/**
 * The action type.
 * @member {String} type
 */
ActionConfig.prototype['type'] = undefined;






export default ActionConfig;

