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
 * The PageableResponse model module.
 * @module models/PageableResponse
 * @version 3.2.0
 */
class PageableResponse {
    /**
     * Constructs a new <code>PageableResponse</code>.
     * The response containing paginated data.
     * @alias module:models/PageableResponse
     */
    constructor() { 
        
        PageableResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PageableResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/PageableResponse} obj Optional instance to populate.
     * @return {module:models/PageableResponse} The populated <code>PageableResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PageableResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('last_client_id')) {
                obj['last_client_id'] = ApiClient.convertToType(data['last_client_id'], 'String');
            }
            if (data.hasOwnProperty('last_created_on')) {
                obj['last_created_on'] = ApiClient.convertToType(data['last_created_on'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PageableResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PageableResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['last_client_id'] && !(typeof data['last_client_id'] === 'string' || data['last_client_id'] instanceof String)) {
            throw new Error("Expected the field `last_client_id` to be a primitive type in the JSON string but got " + data['last_client_id']);
        }

        return true;
    }


}



/**
 * The paginated data.
 * @member {Object} data
 */
PageableResponse.prototype['data'] = undefined;

/**
 * The maximum number of results returned per page.
 * @member {Number} limit
 */
PageableResponse.prototype['limit'] = undefined;

/**
 * The identifier of the last retrieved client.
 * @member {String} last_client_id
 */
PageableResponse.prototype['last_client_id'] = undefined;

/**
 * The creation date of the last retrieved client.
 * @member {Date} last_created_on
 */
PageableResponse.prototype['last_created_on'] = undefined;






export default PageableResponse;

