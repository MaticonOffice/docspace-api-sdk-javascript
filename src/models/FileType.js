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
* Enum class FileType.
* @enum {}
* @readonly
*/
export default class FileType {
    
        /**
         * value: 0
         * @const
         */
        "Unknown" = 0;

    
        /**
         * value: 1
         * @const
         */
        "Archive" = 1;

    
        /**
         * value: 2
         * @const
         */
        "Video" = 2;

    
        /**
         * value: 3
         * @const
         */
        "Audio" = 3;

    
        /**
         * value: 4
         * @const
         */
        "Image" = 4;

    
        /**
         * value: 5
         * @const
         */
        "Spreadsheet" = 5;

    
        /**
         * value: 6
         * @const
         */
        "Presentation" = 6;

    
        /**
         * value: 7
         * @const
         */
        "Document" = 7;

    
        /**
         * value: 10
         * @const
         */
        "Pdf" = 10;

    
        /**
         * value: 11
         * @const
         */
        "Diagram" = 11;

    

    /**
    * Returns a <code>FileType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:models/FileType} The enum <code>FileType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

