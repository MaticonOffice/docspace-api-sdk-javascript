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
* Enum class ProductQuantityType.
* @enum {}
* @readonly
*/
export default class ProductQuantityType {
    
        /**
         * value: 0
         * @const
         */
        "0" = 0;

    
        /**
         * value: 1
         * @const
         */
        "1" = 1;

    
        /**
         * value: 2
         * @const
         */
        "2" = 2;

    
        /**
         * value: 3
         * @const
         */
        "3" = 3;

    

    /**
    * Returns a <code>ProductQuantityType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:models/ProductQuantityType} The enum <code>ProductQuantityType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

