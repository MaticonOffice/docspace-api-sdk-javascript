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
* Enum class FilterType.
* @enum {}
* @readonly
*/
export default class FilterType {
    
        /**
         * value: 0
         * @const
         */
        "None" = 0;

    
        /**
         * value: 1
         * @const
         */
        "FilesOnly" = 1;

    
        /**
         * value: 2
         * @const
         */
        "FoldersOnly" = 2;

    
        /**
         * value: 3
         * @const
         */
        "DocumentsOnly" = 3;

    
        /**
         * value: 4
         * @const
         */
        "PresentationsOnly" = 4;

    
        /**
         * value: 5
         * @const
         */
        "SpreadsheetsOnly" = 5;

    
        /**
         * value: 7
         * @const
         */
        "ImagesOnly" = 7;

    
        /**
         * value: 8
         * @const
         */
        "ByUser" = 8;

    
        /**
         * value: 9
         * @const
         */
        "ByDepartment" = 9;

    
        /**
         * value: 10
         * @const
         */
        "ArchiveOnly" = 10;

    
        /**
         * value: 11
         * @const
         */
        "ByExtension" = 11;

    
        /**
         * value: 12
         * @const
         */
        "MediaOnly" = 12;

    
        /**
         * value: 13
         * @const
         */
        "FillingFormsRooms" = 13;

    
        /**
         * value: 14
         * @const
         */
        "EditingRooms" = 14;

    
        /**
         * value: 17
         * @const
         */
        "CustomRooms" = 17;

    
        /**
         * value: 20
         * @const
         */
        "PublicRooms" = 20;

    
        /**
         * value: 22
         * @const
         */
        "Pdf" = 22;

    
        /**
         * value: 23
         * @const
         */
        "PdfForm" = 23;

    
        /**
         * value: 24
         * @const
         */
        "VirtualDataRooms" = 24;

    
        /**
         * value: 25
         * @const
         */
        "DiagramsOnly" = 25;

    

    /**
    * Returns a <code>FilterType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:models/FilterType} The enum <code>FilterType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

