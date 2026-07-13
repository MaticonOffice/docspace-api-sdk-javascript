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
* Enum class ActionType.
* @enum {}
* @readonly
*/
export default class ActionType {
    
        /**
         * value: 0
         * @const
         */
        "None" = 0;

    
        /**
         * value: 1
         * @const
         */
        "Create" = 1;

    
        /**
         * value: 2
         * @const
         */
        "Update" = 2;

    
        /**
         * value: 3
         * @const
         */
        "Delete" = 3;

    
        /**
         * value: 4
         * @const
         */
        "Link" = 4;

    
        /**
         * value: 5
         * @const
         */
        "Unlink" = 5;

    
        /**
         * value: 6
         * @const
         */
        "Attach" = 6;

    
        /**
         * value: 7
         * @const
         */
        "Detach" = 7;

    
        /**
         * value: 8
         * @const
         */
        "Send" = 8;

    
        /**
         * value: 9
         * @const
         */
        "Import" = 9;

    
        /**
         * value: 10
         * @const
         */
        "Export" = 10;

    
        /**
         * value: 11
         * @const
         */
        "UpdateAccess" = 11;

    
        /**
         * value: 12
         * @const
         */
        "Download" = 12;

    
        /**
         * value: 13
         * @const
         */
        "Upload" = 13;

    
        /**
         * value: 14
         * @const
         */
        "Copy" = 14;

    
        /**
         * value: 15
         * @const
         */
        "Move" = 15;

    
        /**
         * value: 16
         * @const
         */
        "Reassigns" = 16;

    
        /**
         * value: 17
         * @const
         */
        "Follow" = 17;

    
        /**
         * value: 18
         * @const
         */
        "Unfollow" = 18;

    
        /**
         * value: 19
         * @const
         */
        "Logout" = 19;

    

    /**
    * Returns a <code>ActionType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:models/ActionType} The enum <code>ActionType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

