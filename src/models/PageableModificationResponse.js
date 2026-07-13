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
 * The PageableModificationResponse model module.
 * @module models/PageableModificationResponse
 * @version 3.2.0
 */
class PageableModificationResponse {
    /**
     * Constructs a new <code>PageableModificationResponse</code>.
     * The response containing paginated modification information.
     * @alias module:models/PageableModificationResponse
     */
    constructor() { 
        
        PageableModificationResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PageableModificationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/PageableModificationResponse} obj Optional instance to populate.
     * @return {module:models/PageableModificationResponse} The populated <code>PageableModificationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PageableModificationResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('last_modified_on')) {
                obj['last_modified_on'] = ApiClient.convertToType(data['last_modified_on'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PageableModificationResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PageableModificationResponse</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The paginated modification data.
 * @member {Object} data
 */
PageableModificationResponse.prototype['data'] = undefined;

/**
 * The maximum number of results returned per page.
 * @member {Number} limit
 */
PageableModificationResponse.prototype['limit'] = undefined;

/**
 * The date when the user consent was last modified.
 * @member {Date} last_modified_on
 */
PageableModificationResponse.prototype['last_modified_on'] = undefined;






export default PageableModificationResponse;

