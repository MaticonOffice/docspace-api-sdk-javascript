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
 * The LockFileParameters model module.
 * @module models/LockFileParameters
 * @version 3.2.0
 */
class LockFileParameters {
    /**
     * Constructs a new <code>LockFileParameters</code>.
     * The parameters for locking a file.
     * @alias module:models/LockFileParameters
     */
    constructor() { 
        
        LockFileParameters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LockFileParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/LockFileParameters} obj Optional instance to populate.
     * @return {module:models/LockFileParameters} The populated <code>LockFileParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LockFileParameters();

            if (data.hasOwnProperty('lockFile')) {
                obj['lockFile'] = ApiClient.convertToType(data['lockFile'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LockFileParameters</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LockFileParameters</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Specifies whether to lock a file or not.
 * @member {Boolean} lockFile
 */
LockFileParameters.prototype['lockFile'] = undefined;






export default LockFileParameters;

