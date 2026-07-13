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
import CoEditingConfigMode from './CoEditingConfigMode';

/**
 * The CoEditingConfig model module.
 * @module models/CoEditingConfig
 * @version 3.2.0
 */
class CoEditingConfig {
    /**
     * Constructs a new <code>CoEditingConfig</code>.
     * The co-editing configuration parameters.
     * @alias module:models/CoEditingConfig
     */
    constructor() { 
        
        CoEditingConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CoEditingConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CoEditingConfig} obj Optional instance to populate.
     * @return {module:models/CoEditingConfig} The populated <code>CoEditingConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CoEditingConfig();

            if (data.hasOwnProperty('change')) {
                obj['change'] = ApiClient.convertToType(data['change'], 'Boolean');
            }
            if (data.hasOwnProperty('fast')) {
                obj['fast'] = ApiClient.convertToType(data['fast'], 'Boolean');
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = CoEditingConfigMode.constructFromObject(data['mode']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CoEditingConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CoEditingConfig</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Specifies if the co-editing mode can be changed in the editor interface or not.
 * @member {Boolean} change
 */
CoEditingConfig.prototype['change'] = undefined;

/**
 * Specifies if the co-editing mode is fast.
 * @member {Boolean} fast
 */
CoEditingConfig.prototype['fast'] = undefined;

/**
 * @member {module:models/CoEditingConfigMode} mode
 */
CoEditingConfig.prototype['mode'] = undefined;






export default CoEditingConfig;

