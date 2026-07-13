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
 * The ChangeHistory model module.
 * @module models/ChangeHistory
 * @version 3.2.0
 */
class ChangeHistory {
    /**
     * Constructs a new <code>ChangeHistory</code>.
     * The parameters for changing version history.
     * @alias module:models/ChangeHistory
     * @param version {Number} The file version of the change history.
     */
    constructor(version) { 
        
        ChangeHistory.initialize(this, version);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, version) { 
        obj['version'] = version;
    }

    /**
     * Constructs a <code>ChangeHistory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ChangeHistory} obj Optional instance to populate.
     * @return {module:models/ChangeHistory} The populated <code>ChangeHistory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChangeHistory();

            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('continueVersion')) {
                obj['continueVersion'] = ApiClient.convertToType(data['continueVersion'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChangeHistory</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChangeHistory</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ChangeHistory.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

ChangeHistory.RequiredProperties = ["version"];

/**
 * The file version of the change history.
 * @member {Number} version
 */
ChangeHistory.prototype['version'] = undefined;

/**
 * Specifies whether to start a new version or continue revision of the change history.
 * @member {Boolean} continueVersion
 */
ChangeHistory.prototype['continueVersion'] = undefined;






export default ChangeHistory;

