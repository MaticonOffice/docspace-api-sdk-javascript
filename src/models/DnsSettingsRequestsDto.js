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
 * The DnsSettingsRequestsDto model module.
 * @module models/DnsSettingsRequestsDto
 * @version 3.2.0
 */
class DnsSettingsRequestsDto {
    /**
     * Constructs a new <code>DnsSettingsRequestsDto</code>.
     * The request parameters for managing the DNS (Domain Name System) settings.
     * @alias module:models/DnsSettingsRequestsDto
     */
    constructor() { 
        
        DnsSettingsRequestsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DnsSettingsRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/DnsSettingsRequestsDto} obj Optional instance to populate.
     * @return {module:models/DnsSettingsRequestsDto} The populated <code>DnsSettingsRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DnsSettingsRequestsDto();

            if (data.hasOwnProperty('dnsName')) {
                obj['dnsName'] = ApiClient.convertToType(data['dnsName'], 'String');
            }
            if (data.hasOwnProperty('enable')) {
                obj['enable'] = ApiClient.convertToType(data['enable'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DnsSettingsRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DnsSettingsRequestsDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['dnsName'] && !(typeof data['dnsName'] === 'string' || data['dnsName'] instanceof String)) {
            throw new Error("Expected the field `dnsName` to be a primitive type in the JSON string but got " + data['dnsName']);
        }

        return true;
    }


}



/**
 * The DNS (Domain Name System) configuration name.
 * @member {String} dnsName
 */
DnsSettingsRequestsDto.prototype['dnsName'] = undefined;

/**
 * Specifies whether the DNS settings are enabled.
 * @member {Boolean} enable
 */
DnsSettingsRequestsDto.prototype['enable'] = undefined;






export default DnsSettingsRequestsDto;

