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
* Enum class WebhookTrigger.
* @enum {}
* @readonly
*/
export default class WebhookTrigger {
    
        /**
         * value: 0
         * @const
         */
        "All" = 0;

    
        /**
         * value: 1
         * @const
         */
        "UserCreated" = 1;

    
        /**
         * value: 2
         * @const
         */
        "UserInvited" = 2;

    
        /**
         * value: 4
         * @const
         */
        "UserUpdated" = 4;

    
        /**
         * value: 8
         * @const
         */
        "UserDeleted" = 8;

    
        /**
         * value: 16
         * @const
         */
        "GroupCreated" = 16;

    
        /**
         * value: 32
         * @const
         */
        "GroupUpdated" = 32;

    
        /**
         * value: 64
         * @const
         */
        "GroupDeleted" = 64;

    
        /**
         * value: 128
         * @const
         */
        "FileCreated" = 128;

    
        /**
         * value: 256
         * @const
         */
        "FileUploaded" = 256;

    
        /**
         * value: 512
         * @const
         */
        "FileUpdated" = 512;

    
        /**
         * value: 1024
         * @const
         */
        "FileTrashed" = 1024;

    
        /**
         * value: 2048
         * @const
         */
        "FileDeleted" = 2048;

    
        /**
         * value: 4096
         * @const
         */
        "FileRestored" = 4096;

    
        /**
         * value: 8192
         * @const
         */
        "FileCopied" = 8192;

    
        /**
         * value: 16384
         * @const
         */
        "FileMoved" = 16384;

    
        /**
         * value: 32768
         * @const
         */
        "FolderCreated" = 32768;

    
        /**
         * value: 65536
         * @const
         */
        "FolderUpdated" = 65536;

    
        /**
         * value: 131072
         * @const
         */
        "FolderTrashed" = 131072;

    
        /**
         * value: 262144
         * @const
         */
        "FolderDeleted" = 262144;

    
        /**
         * value: 524288
         * @const
         */
        "FolderRestored" = 524288;

    
        /**
         * value: 1048576
         * @const
         */
        "FolderCopied" = 1048576;

    
        /**
         * value: 2097152
         * @const
         */
        "FolderMoved" = 2097152;

    
        /**
         * value: 4194304
         * @const
         */
        "RoomCreated" = 4194304;

    
        /**
         * value: 8388608
         * @const
         */
        "RoomUpdated" = 8388608;

    
        /**
         * value: 16777216
         * @const
         */
        "RoomArchived" = 16777216;

    
        /**
         * value: 33554432
         * @const
         */
        "RoomDeleted" = 33554432;

    
        /**
         * value: 67108864
         * @const
         */
        "RoomRestored" = 67108864;

    
        /**
         * value: 134217728
         * @const
         */
        "RoomCopied" = 134217728;

    

    /**
    * Returns a <code>WebhookTrigger</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:models/WebhookTrigger} The enum <code>WebhookTrigger</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

