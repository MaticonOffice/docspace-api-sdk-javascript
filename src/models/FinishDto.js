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
 * The FinishDto model module.
 * @module models/FinishDto
 * @version 3.2.0
 */
class FinishDto {
    /**
     * Constructs a new <code>FinishDto</code>.
     * The parameters for terminating a process or operation.
     * @alias module:models/FinishDto
     */
    constructor() { 
        
        FinishDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FinishDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FinishDto} obj Optional instance to populate.
     * @return {module:models/FinishDto} The populated <code>FinishDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FinishDto();

            if (data.hasOwnProperty('isSendWelcomeEmail')) {
                obj['isSendWelcomeEmail'] = ApiClient.convertToType(data['isSendWelcomeEmail'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FinishDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FinishDto</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Specifies whether to send a welcome email or not.
 * @member {Boolean} isSendWelcomeEmail
 */
FinishDto.prototype['isSendWelcomeEmail'] = undefined;






export default FinishDto;

