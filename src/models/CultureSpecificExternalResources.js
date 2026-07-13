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
import CultureSpecificExternalResource from './CultureSpecificExternalResource';

/**
 * The CultureSpecificExternalResources model module.
 * @module models/CultureSpecificExternalResources
 * @version 3.2.0
 */
class CultureSpecificExternalResources {
    /**
     * Constructs a new <code>CultureSpecificExternalResources</code>.
     * The external resources settings.
     * @alias module:models/CultureSpecificExternalResources
     */
    constructor() { 
        
        CultureSpecificExternalResources.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CultureSpecificExternalResources</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CultureSpecificExternalResources} obj Optional instance to populate.
     * @return {module:models/CultureSpecificExternalResources} The populated <code>CultureSpecificExternalResources</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CultureSpecificExternalResources();

            if (data.hasOwnProperty('api')) {
                obj['api'] = CultureSpecificExternalResource.constructFromObject(data['api']);
            }
            if (data.hasOwnProperty('common')) {
                obj['common'] = CultureSpecificExternalResource.constructFromObject(data['common']);
            }
            if (data.hasOwnProperty('forum')) {
                obj['forum'] = CultureSpecificExternalResource.constructFromObject(data['forum']);
            }
            if (data.hasOwnProperty('helpcenter')) {
                obj['helpcenter'] = CultureSpecificExternalResource.constructFromObject(data['helpcenter']);
            }
            if (data.hasOwnProperty('integrations')) {
                obj['integrations'] = CultureSpecificExternalResource.constructFromObject(data['integrations']);
            }
            if (data.hasOwnProperty('site')) {
                obj['site'] = CultureSpecificExternalResource.constructFromObject(data['site']);
            }
            if (data.hasOwnProperty('socialNetworks')) {
                obj['socialNetworks'] = CultureSpecificExternalResource.constructFromObject(data['socialNetworks']);
            }
            if (data.hasOwnProperty('support')) {
                obj['support'] = CultureSpecificExternalResource.constructFromObject(data['support']);
            }
            if (data.hasOwnProperty('videoguides')) {
                obj['videoguides'] = CultureSpecificExternalResource.constructFromObject(data['videoguides']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CultureSpecificExternalResources</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CultureSpecificExternalResources</code>.
     */
    static validateJSON(data) {
        // validate the optional field `api`
        if (data['api']) { // data not null
          CultureSpecificExternalResource.validateJSON(data['api']);
        }
        // validate the optional field `common`
        if (data['common']) { // data not null
          CultureSpecificExternalResource.validateJSON(data['common']);
        }
        // validate the optional field `forum`
        if (data['forum']) { // data not null
          CultureSpecificExternalResource.validateJSON(data['forum']);
        }
        // validate the optional field `helpcenter`
        if (data['helpcenter']) { // data not null
          CultureSpecificExternalResource.validateJSON(data['helpcenter']);
        }
        // validate the optional field `integrations`
        if (data['integrations']) { // data not null
          CultureSpecificExternalResource.validateJSON(data['integrations']);
        }
        // validate the optional field `site`
        if (data['site']) { // data not null
          CultureSpecificExternalResource.validateJSON(data['site']);
        }
        // validate the optional field `socialNetworks`
        if (data['socialNetworks']) { // data not null
          CultureSpecificExternalResource.validateJSON(data['socialNetworks']);
        }
        // validate the optional field `support`
        if (data['support']) { // data not null
          CultureSpecificExternalResource.validateJSON(data['support']);
        }
        // validate the optional field `videoguides`
        if (data['videoguides']) { // data not null
          CultureSpecificExternalResource.validateJSON(data['videoguides']);
        }

        return true;
    }


}



/**
 * @member {module:models/CultureSpecificExternalResource} api
 */
CultureSpecificExternalResources.prototype['api'] = undefined;

/**
 * @member {module:models/CultureSpecificExternalResource} common
 */
CultureSpecificExternalResources.prototype['common'] = undefined;

/**
 * @member {module:models/CultureSpecificExternalResource} forum
 */
CultureSpecificExternalResources.prototype['forum'] = undefined;

/**
 * @member {module:models/CultureSpecificExternalResource} helpcenter
 */
CultureSpecificExternalResources.prototype['helpcenter'] = undefined;

/**
 * @member {module:models/CultureSpecificExternalResource} integrations
 */
CultureSpecificExternalResources.prototype['integrations'] = undefined;

/**
 * @member {module:models/CultureSpecificExternalResource} site
 */
CultureSpecificExternalResources.prototype['site'] = undefined;

/**
 * @member {module:models/CultureSpecificExternalResource} socialNetworks
 */
CultureSpecificExternalResources.prototype['socialNetworks'] = undefined;

/**
 * @member {module:models/CultureSpecificExternalResource} support
 */
CultureSpecificExternalResources.prototype['support'] = undefined;

/**
 * @member {module:models/CultureSpecificExternalResource} videoguides
 */
CultureSpecificExternalResources.prototype['videoguides'] = undefined;






export default CultureSpecificExternalResources;

