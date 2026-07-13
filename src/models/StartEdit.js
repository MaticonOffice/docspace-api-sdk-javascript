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
 * The StartEdit model module.
 * @module models/StartEdit
 * @version 3.2.0
 */
class StartEdit {
    /**
     * Constructs a new <code>StartEdit</code>.
     * The parameters for starting file editing.
     * @alias module:models/StartEdit
     */
    constructor() { 
        
        StartEdit.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StartEdit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/StartEdit} obj Optional instance to populate.
     * @return {module:models/StartEdit} The populated <code>StartEdit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StartEdit();

            if (data.hasOwnProperty('editingAlone')) {
                obj['editingAlone'] = ApiClient.convertToType(data['editingAlone'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StartEdit</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StartEdit</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Specifies whether to share the file with other users for editing or not.
 * @member {Boolean} editingAlone
 */
StartEdit.prototype['editingAlone'] = undefined;






export default StartEdit;

