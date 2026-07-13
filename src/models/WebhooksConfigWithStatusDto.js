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
import WebhooksConfigDto from './WebhooksConfigDto';

/**
 * The WebhooksConfigWithStatusDto model module.
 * @module models/WebhooksConfigWithStatusDto
 * @version 3.2.0
 */
class WebhooksConfigWithStatusDto {
    /**
     * Constructs a new <code>WebhooksConfigWithStatusDto</code>.
     * The webhook configuration with its status.
     * @alias module:models/WebhooksConfigWithStatusDto
     */
    constructor() { 
        
        WebhooksConfigWithStatusDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhooksConfigWithStatusDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/WebhooksConfigWithStatusDto} obj Optional instance to populate.
     * @return {module:models/WebhooksConfigWithStatusDto} The populated <code>WebhooksConfigWithStatusDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhooksConfigWithStatusDto();

            if (data.hasOwnProperty('configs')) {
                obj['configs'] = WebhooksConfigDto.constructFromObject(data['configs']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhooksConfigWithStatusDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhooksConfigWithStatusDto</code>.
     */
    static validateJSON(data) {
        // validate the optional field `configs`
        if (data['configs']) { // data not null
          WebhooksConfigDto.validateJSON(data['configs']);
        }

        return true;
    }


}



/**
 * @member {module:models/WebhooksConfigDto} configs
 */
WebhooksConfigWithStatusDto.prototype['configs'] = undefined;

/**
 * The webhook status.
 * @member {Number} status
 */
WebhooksConfigWithStatusDto.prototype['status'] = undefined;






export default WebhooksConfigWithStatusDto;

