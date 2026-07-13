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
 * The CultureSpecificExternalResource model module.
 * @module models/CultureSpecificExternalResource
 * @version 3.2.0
 */
class CultureSpecificExternalResource {
    /**
     * Constructs a new <code>CultureSpecificExternalResource</code>.
     * The external resource parameters.
     * @alias module:models/CultureSpecificExternalResource
     */
    constructor() { 
        
        CultureSpecificExternalResource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CultureSpecificExternalResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CultureSpecificExternalResource} obj Optional instance to populate.
     * @return {module:models/CultureSpecificExternalResource} The populated <code>CultureSpecificExternalResource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CultureSpecificExternalResource();

            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('entries')) {
                obj['entries'] = ApiClient.convertToType(data['entries'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CultureSpecificExternalResource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CultureSpecificExternalResource</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['domain'] && !(typeof data['domain'] === 'string' || data['domain'] instanceof String)) {
            throw new Error("Expected the field `domain` to be a primitive type in the JSON string but got " + data['domain']);
        }

        return true;
    }


}



/**
 * The external resource domain.
 * @member {String} domain
 */
CultureSpecificExternalResource.prototype['domain'] = undefined;

/**
 * The external resource entries.
 * @member {Object.<String, String>} entries
 */
CultureSpecificExternalResource.prototype['entries'] = undefined;






export default CultureSpecificExternalResource;

