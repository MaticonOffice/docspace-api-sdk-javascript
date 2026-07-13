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
import DateToAutoCleanUp from './DateToAutoCleanUp';

/**
 * The AutoCleanUpData model module.
 * @module models/AutoCleanUpData
 * @version 3.2.0
 */
class AutoCleanUpData {
    /**
     * Constructs a new <code>AutoCleanUpData</code>.
     * The auto-clearing setting parameters.
     * @alias module:models/AutoCleanUpData
     */
    constructor() { 
        
        AutoCleanUpData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AutoCleanUpData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/AutoCleanUpData} obj Optional instance to populate.
     * @return {module:models/AutoCleanUpData} The populated <code>AutoCleanUpData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutoCleanUpData();

            if (data.hasOwnProperty('isAutoCleanUp')) {
                obj['isAutoCleanUp'] = ApiClient.convertToType(data['isAutoCleanUp'], 'Boolean');
            }
            if (data.hasOwnProperty('gap')) {
                obj['gap'] = DateToAutoCleanUp.constructFromObject(data['gap']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AutoCleanUpData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoCleanUpData</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Specifies whether to permanently delete files in the Trash folder.
 * @member {Boolean} isAutoCleanUp
 */
AutoCleanUpData.prototype['isAutoCleanUp'] = undefined;

/**
 * @member {module:models/DateToAutoCleanUp} gap
 */
AutoCleanUpData.prototype['gap'] = undefined;






export default AutoCleanUpData;

