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
import ActionConfig from './ActionConfig';

/**
 * The ActionLinkConfig model module.
 * @module models/ActionLinkConfig
 * @version 3.2.0
 */
class ActionLinkConfig {
    /**
     * Constructs a new <code>ActionLinkConfig</code>.
     * The config parameter which contains the information about the action in the document that will be scrolled to.
     * @alias module:models/ActionLinkConfig
     */
    constructor() { 
        
        ActionLinkConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActionLinkConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ActionLinkConfig} obj Optional instance to populate.
     * @return {module:models/ActionLinkConfig} The populated <code>ActionLinkConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionLinkConfig();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ActionConfig.constructFromObject(data['action']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ActionLinkConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActionLinkConfig</code>.
     */
    static validateJSON(data) {
        // validate the optional field `action`
        if (data['action']) { // data not null
          ActionConfig.validateJSON(data['action']);
        }

        return true;
    }


}



/**
 * @member {module:models/ActionConfig} action
 */
ActionLinkConfig.prototype['action'] = undefined;






export default ActionLinkConfig;

