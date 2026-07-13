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
* Enum class ConfirmType.
* @enum {}
* @readonly
*/
export default class ConfirmType {
    
        /**
         * value: 0
         * @const
         */
        "EmpInvite" = 0;

    
        /**
         * value: 1
         * @const
         */
        "LinkInvite" = 1;

    
        /**
         * value: 2
         * @const
         */
        "PortalSuspend" = 2;

    
        /**
         * value: 3
         * @const
         */
        "PortalContinue" = 3;

    
        /**
         * value: 4
         * @const
         */
        "PortalRemove" = 4;

    
        /**
         * value: 5
         * @const
         */
        "DnsChange" = 5;

    
        /**
         * value: 6
         * @const
         */
        "PortalOwnerChange" = 6;

    
        /**
         * value: 7
         * @const
         */
        "Activation" = 7;

    
        /**
         * value: 8
         * @const
         */
        "EmailChange" = 8;

    
        /**
         * value: 9
         * @const
         */
        "EmailActivation" = 9;

    
        /**
         * value: 10
         * @const
         */
        "PasswordChange" = 10;

    
        /**
         * value: 11
         * @const
         */
        "ProfileRemove" = 11;

    
        /**
         * value: 12
         * @const
         */
        "PhoneActivation" = 12;

    
        /**
         * value: 13
         * @const
         */
        "PhoneAuth" = 13;

    
        /**
         * value: 14
         * @const
         */
        "Auth" = 14;

    
        /**
         * value: 15
         * @const
         */
        "TfaActivation" = 15;

    
        /**
         * value: 16
         * @const
         */
        "TfaAuth" = 16;

    
        /**
         * value: 17
         * @const
         */
        "Wizard" = 17;

    
        /**
         * value: 18
         * @const
         */
        "GuestShareLink" = 18;

    

    /**
    * Returns a <code>ConfirmType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:models/ConfirmType} The enum <code>ConfirmType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

