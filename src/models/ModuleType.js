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
* Enum class ModuleType.
* @enum {}
* @readonly
*/
export default class ModuleType {
    
        /**
         * value: 0
         * @const
         */
        "None" = 0;

    
        /**
         * value: 1
         * @const
         */
        "Files" = 1;

    
        /**
         * value: 2
         * @const
         */
        "Folders" = 2;

    
        /**
         * value: 3
         * @const
         */
        "DocumentsSettings" = 3;

    
        /**
         * value: 4
         * @const
         */
        "Companies" = 4;

    
        /**
         * value: 5
         * @const
         */
        "Persons" = 5;

    
        /**
         * value: 6
         * @const
         */
        "Contacts" = 6;

    
        /**
         * value: 7
         * @const
         */
        "CrmTasks" = 7;

    
        /**
         * value: 8
         * @const
         */
        "Opportunities" = 8;

    
        /**
         * value: 9
         * @const
         */
        "Invoices" = 9;

    
        /**
         * value: 10
         * @const
         */
        "Cases" = 10;

    
        /**
         * value: 11
         * @const
         */
        "CommonCrmSettings" = 11;

    
        /**
         * value: 12
         * @const
         */
        "ContactsSettings" = 12;

    
        /**
         * value: 13
         * @const
         */
        "ContactTypes" = 13;

    
        /**
         * value: 14
         * @const
         */
        "InvoiceSettings" = 14;

    
        /**
         * value: 15
         * @const
         */
        "OtherCrmSettings" = 15;

    
        /**
         * value: 16
         * @const
         */
        "Users" = 16;

    
        /**
         * value: 17
         * @const
         */
        "Groups" = 17;

    
        /**
         * value: 18
         * @const
         */
        "Projects" = 18;

    
        /**
         * value: 19
         * @const
         */
        "Milestones" = 19;

    
        /**
         * value: 20
         * @const
         */
        "Tasks" = 20;

    
        /**
         * value: 21
         * @const
         */
        "Discussions" = 21;

    
        /**
         * value: 22
         * @const
         */
        "TimeTracking" = 22;

    
        /**
         * value: 23
         * @const
         */
        "Reports" = 23;

    
        /**
         * value: 24
         * @const
         */
        "ProjectsSettings" = 24;

    
        /**
         * value: 25
         * @const
         */
        "General" = 25;

    
        /**
         * value: 26
         * @const
         */
        "Products" = 26;

    
        /**
         * value: 27
         * @const
         */
        "Rooms" = 27;

    
        /**
         * value: 28
         * @const
         */
        "OAuth" = 28;

    

    /**
    * Returns a <code>ModuleType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:models/ModuleType} The enum <code>ModuleType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

