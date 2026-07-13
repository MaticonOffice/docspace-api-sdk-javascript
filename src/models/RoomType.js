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
* Enum class RoomType.
* @enum {}
* @readonly
*/
export default class RoomType {
    
        /**
         * value: 1
         * @const
         */
        "FillingFormsRoom" = 1;

    
        /**
         * value: 2
         * @const
         */
        "EditingRoom" = 2;

    
        /**
         * value: 5
         * @const
         */
        "CustomRoom" = 5;

    
        /**
         * value: 6
         * @const
         */
        "PublicRoom" = 6;

    
        /**
         * value: 8
         * @const
         */
        "VirtualDataRoom" = 8;

    

    /**
    * Returns a <code>RoomType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:models/RoomType} The enum <code>RoomType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

