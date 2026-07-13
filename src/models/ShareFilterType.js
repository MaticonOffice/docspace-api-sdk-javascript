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
* Enum class ShareFilterType.
* @enum {}
* @readonly
*/
export default class ShareFilterType {
    
        /**
         * value: 0
         * @const
         */
        "UserOrGroup" = 0;

    
        /**
         * value: 1
         * @const
         */
        "InvitationLink" = 1;

    
        /**
         * value: 2
         * @const
         */
        "ExternalLink" = 2;

    
        /**
         * value: 4
         * @const
         */
        "AdditionalExternalLink" = 4;

    
        /**
         * value: 8
         * @const
         */
        "PrimaryExternalLink" = 8;

    
        /**
         * value: 16
         * @const
         */
        "User" = 16;

    
        /**
         * value: 32
         * @const
         */
        "Group" = 32;

    

    /**
    * Returns a <code>ShareFilterType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:models/ShareFilterType} The enum <code>ShareFilterType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

