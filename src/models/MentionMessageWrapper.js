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
import ActionLinkConfig from './ActionLinkConfig';

/**
 * The MentionMessageWrapper model module.
 * @module models/MentionMessageWrapper
 * @version 3.2.0
 */
class MentionMessageWrapper {
    /**
     * Constructs a new <code>MentionMessageWrapper</code>.
     * The mention message parameters.
     * @alias module:models/MentionMessageWrapper
     */
    constructor() { 
        
        MentionMessageWrapper.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MentionMessageWrapper</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/MentionMessageWrapper} obj Optional instance to populate.
     * @return {module:models/MentionMessageWrapper} The populated <code>MentionMessageWrapper</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MentionMessageWrapper();

            if (data.hasOwnProperty('actionLink')) {
                obj['actionLink'] = ActionLinkConfig.constructFromObject(data['actionLink']);
            }
            if (data.hasOwnProperty('emails')) {
                obj['emails'] = ApiClient.convertToType(data['emails'], ['String']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MentionMessageWrapper</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MentionMessageWrapper</code>.
     */
    static validateJSON(data) {
        // validate the optional field `actionLink`
        if (data['actionLink']) { // data not null
          ActionLinkConfig.validateJSON(data['actionLink']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['emails'])) {
            throw new Error("Expected the field `emails` to be an array in the JSON data but got " + data['emails']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * @member {module:models/ActionLinkConfig} actionLink
 */
MentionMessageWrapper.prototype['actionLink'] = undefined;

/**
 * A list of emails which will receive the mention message.
 * @member {Array.<String>} emails
 */
MentionMessageWrapper.prototype['emails'] = undefined;

/**
 * The comment message.
 * @member {String} message
 */
MentionMessageWrapper.prototype['message'] = undefined;






export default MentionMessageWrapper;

