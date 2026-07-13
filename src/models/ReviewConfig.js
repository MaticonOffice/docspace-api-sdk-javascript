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
 * The ReviewConfig model module.
 * @module models/ReviewConfig
 * @version 3.2.0
 */
class ReviewConfig {
    /**
     * Constructs a new <code>ReviewConfig</code>.
     * @alias module:models/ReviewConfig
     */
    constructor() { 
        
        ReviewConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReviewConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ReviewConfig} obj Optional instance to populate.
     * @return {module:models/ReviewConfig} The populated <code>ReviewConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReviewConfig();

            if (data.hasOwnProperty('reviewDisplay')) {
                obj['reviewDisplay'] = ApiClient.convertToType(data['reviewDisplay'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReviewConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReviewConfig</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['reviewDisplay'] && !(typeof data['reviewDisplay'] === 'string' || data['reviewDisplay'] instanceof String)) {
            throw new Error("Expected the field `reviewDisplay` to be a primitive type in the JSON string but got " + data['reviewDisplay']);
        }

        return true;
    }


}



/**
 * @member {String} reviewDisplay
 */
ReviewConfig.prototype['reviewDisplay'] = undefined;






export default ReviewConfig;

