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
 * The WebhookRetryRequestsDto model module.
 * @module models/WebhookRetryRequestsDto
 * @version 3.2.0
 */
class WebhookRetryRequestsDto {
    /**
     * Constructs a new <code>WebhookRetryRequestsDto</code>.
     * The request parameters for requesting the webhook delivery retries.
     * @alias module:models/WebhookRetryRequestsDto
     */
    constructor() { 
        
        WebhookRetryRequestsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookRetryRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/WebhookRetryRequestsDto} obj Optional instance to populate.
     * @return {module:models/WebhookRetryRequestsDto} The populated <code>WebhookRetryRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookRetryRequestsDto();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookRetryRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookRetryRequestsDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['ids'])) {
            throw new Error("Expected the field `ids` to be an array in the JSON data but got " + data['ids']);
        }

        return true;
    }


}



/**
 * The list of webhook delivery IDs to retry.
 * @member {Array.<Number>} ids
 */
WebhookRetryRequestsDto.prototype['ids'] = undefined;






export default WebhookRetryRequestsDto;

