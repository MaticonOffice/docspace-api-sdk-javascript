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
* Enum class FileStatus.
* @enum {}
* @readonly
*/
export default class FileStatus {
    
        /**
         * value: 0
         * @const
         */
        "None" = 0;

    
        /**
         * value: 1
         * @const
         */
        "IsEditing" = 1;

    
        /**
         * value: 2
         * @const
         */
        "IsNew" = 2;

    
        /**
         * value: 4
         * @const
         */
        "IsConverting" = 4;

    
        /**
         * value: 8
         * @const
         */
        "IsOriginal" = 8;

    
        /**
         * value: 16
         * @const
         */
        "IsEditingAlone" = 16;

    
        /**
         * value: 32
         * @const
         */
        "IsFavorite" = 32;

    
        /**
         * value: 64
         * @const
         */
        "IsTemplate" = 64;

    
        /**
         * value: 128
         * @const
         */
        "IsFillFormDraft" = 128;

    
        /**
         * value: 256
         * @const
         */
        "IsCompletedForm" = 256;

    

    /**
    * Returns a <code>FileStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:models/FileStatus} The enum <code>FileStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

