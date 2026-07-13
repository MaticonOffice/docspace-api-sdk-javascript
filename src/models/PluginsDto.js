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
 * The PluginsDto model module.
 * @module models/PluginsDto
 * @version 3.2.0
 */
class PluginsDto {
    /**
     * Constructs a new <code>PluginsDto</code>.
     * The plugins parameters.
     * @alias module:models/PluginsDto
     */
    constructor() { 
        
        PluginsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PluginsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/PluginsDto} obj Optional instance to populate.
     * @return {module:models/PluginsDto} The populated <code>PluginsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PluginsDto();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('upload')) {
                obj['upload'] = ApiClient.convertToType(data['upload'], 'Boolean');
            }
            if (data.hasOwnProperty('delete')) {
                obj['delete'] = ApiClient.convertToType(data['delete'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PluginsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PluginsDto</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Specifies if the plugins are enabled or not.
 * @member {Boolean} enabled
 */
PluginsDto.prototype['enabled'] = undefined;

/**
 * Specifies if the plugins can be uploaded or not.
 * @member {Boolean} upload
 */
PluginsDto.prototype['upload'] = undefined;

/**
 * Specifies if the plugins can be deleted or not.
 * @member {Boolean} delete
 */
PluginsDto.prototype['delete'] = undefined;






export default PluginsDto;

