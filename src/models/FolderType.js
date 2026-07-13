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
* Enum class FolderType.
* @enum {}
* @readonly
*/
export default class FolderType {
    
        /**
         * value: 0
         * @const
         */
        "DEFAULT" = 0;

    
        /**
         * value: 1
         * @const
         */
        "COMMON" = 1;

    
        /**
         * value: 2
         * @const
         */
        "BUNCH" = 2;

    
        /**
         * value: 3
         * @const
         */
        "TRASH" = 3;

    
        /**
         * value: 5
         * @const
         */
        "USER" = 5;

    
        /**
         * value: 6
         * @const
         */
        "SHARE" = 6;

    
        /**
         * value: 8
         * @const
         */
        "Projects" = 8;

    
        /**
         * value: 10
         * @const
         */
        "Favorites" = 10;

    
        /**
         * value: 11
         * @const
         */
        "Recent" = 11;

    
        /**
         * value: 12
         * @const
         */
        "Templates" = 12;

    
        /**
         * value: 13
         * @const
         */
        "Privacy" = 13;

    
        /**
         * value: 14
         * @const
         */
        "VirtualRooms" = 14;

    
        /**
         * value: 15
         * @const
         */
        "FillingFormsRoom" = 15;

    
        /**
         * value: 16
         * @const
         */
        "EditingRoom" = 16;

    
        /**
         * value: 19
         * @const
         */
        "CustomRoom" = 19;

    
        /**
         * value: 20
         * @const
         */
        "Archive" = 20;

    
        /**
         * value: 21
         * @const
         */
        "ThirdpartyBackup" = 21;

    
        /**
         * value: 22
         * @const
         */
        "PublicRoom" = 22;

    
        /**
         * value: 25
         * @const
         */
        "ReadyFormFolder" = 25;

    
        /**
         * value: 26
         * @const
         */
        "InProcessFormFolder" = 26;

    
        /**
         * value: 27
         * @const
         */
        "FormFillingFolderDone" = 27;

    
        /**
         * value: 28
         * @const
         */
        "FormFillingFolderInProgress" = 28;

    
        /**
         * value: 29
         * @const
         */
        "VirtualDataRoom" = 29;

    
        /**
         * value: 30
         * @const
         */
        "RoomTemplates" = 30;

    

    /**
    * Returns a <code>FolderType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:models/FolderType} The enum <code>FolderType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

