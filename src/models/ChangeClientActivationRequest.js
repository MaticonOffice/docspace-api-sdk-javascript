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
 * The ChangeClientActivationRequest model module.
 * @module models/ChangeClientActivationRequest
 * @version 3.2.0
 */
class ChangeClientActivationRequest {
    /**
     * Constructs a new <code>ChangeClientActivationRequest</code>.
     * The request parameters for changing the client activation status.
     * @alias module:models/ChangeClientActivationRequest
     * @param status {Boolean} The client activation status.
     */
    constructor(status) { 
        
        ChangeClientActivationRequest.initialize(this, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status) { 
        obj['status'] = status;
    }

    /**
     * Constructs a <code>ChangeClientActivationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ChangeClientActivationRequest} obj Optional instance to populate.
     * @return {module:models/ChangeClientActivationRequest} The populated <code>ChangeClientActivationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChangeClientActivationRequest();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChangeClientActivationRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChangeClientActivationRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ChangeClientActivationRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

ChangeClientActivationRequest.RequiredProperties = ["status"];

/**
 * The client activation status.
 * @member {Boolean} status
 */
ChangeClientActivationRequest.prototype['status'] = undefined;






export default ChangeClientActivationRequest;

