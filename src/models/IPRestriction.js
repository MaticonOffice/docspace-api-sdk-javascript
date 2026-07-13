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
 * The IPRestriction model module.
 * @module models/IPRestriction
 * @version 3.2.0
 */
class IPRestriction {
    /**
     * Constructs a new <code>IPRestriction</code>.
     * @alias module:models/IPRestriction
     */
    constructor() { 
        
        IPRestriction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IPRestriction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/IPRestriction} obj Optional instance to populate.
     * @return {module:models/IPRestriction} The populated <code>IPRestriction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IPRestriction();

            if (data.hasOwnProperty('ip')) {
                obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
            }
            if (data.hasOwnProperty('forAdmin')) {
                obj['forAdmin'] = ApiClient.convertToType(data['forAdmin'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IPRestriction</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IPRestriction</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ip'] && !(typeof data['ip'] === 'string' || data['ip'] instanceof String)) {
            throw new Error("Expected the field `ip` to be a primitive type in the JSON string but got " + data['ip']);
        }

        return true;
    }


}



/**
 * @member {String} ip
 */
IPRestriction.prototype['ip'] = undefined;

/**
 * @member {Boolean} forAdmin
 */
IPRestriction.prototype['forAdmin'] = undefined;

/**
 * @member {Number} id
 */
IPRestriction.prototype['id'] = undefined;

/**
 * @member {Number} tenantId
 */
IPRestriction.prototype['tenantId'] = undefined;






export default IPRestriction;

