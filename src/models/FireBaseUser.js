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
import DbTenant from './DbTenant';

/**
 * The FireBaseUser model module.
 * @module models/FireBaseUser
 * @version 3.2.0
 */
class FireBaseUser {
    /**
     * Constructs a new <code>FireBaseUser</code>.
     * The Firebase user parameters.
     * @alias module:models/FireBaseUser
     */
    constructor() { 
        
        FireBaseUser.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FireBaseUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FireBaseUser} obj Optional instance to populate.
     * @return {module:models/FireBaseUser} The populated <code>FireBaseUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FireBaseUser();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'Number');
            }
            if (data.hasOwnProperty('firebaseDeviceToken')) {
                obj['firebaseDeviceToken'] = ApiClient.convertToType(data['firebaseDeviceToken'], 'String');
            }
            if (data.hasOwnProperty('application')) {
                obj['application'] = ApiClient.convertToType(data['application'], 'String');
            }
            if (data.hasOwnProperty('isSubscribed')) {
                obj['isSubscribed'] = ApiClient.convertToType(data['isSubscribed'], 'Boolean');
            }
            if (data.hasOwnProperty('tenant')) {
                obj['tenant'] = DbTenant.constructFromObject(data['tenant']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FireBaseUser</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FireBaseUser</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['userId'] && !(typeof data['userId'] === 'string' || data['userId'] instanceof String)) {
            throw new Error("Expected the field `userId` to be a primitive type in the JSON string but got " + data['userId']);
        }
        // ensure the json data is a string
        if (data['firebaseDeviceToken'] && !(typeof data['firebaseDeviceToken'] === 'string' || data['firebaseDeviceToken'] instanceof String)) {
            throw new Error("Expected the field `firebaseDeviceToken` to be a primitive type in the JSON string but got " + data['firebaseDeviceToken']);
        }
        // ensure the json data is a string
        if (data['application'] && !(typeof data['application'] === 'string' || data['application'] instanceof String)) {
            throw new Error("Expected the field `application` to be a primitive type in the JSON string but got " + data['application']);
        }
        // validate the optional field `tenant`
        if (data['tenant']) { // data not null
          DbTenant.validateJSON(data['tenant']);
        }

        return true;
    }


}



/**
 * The Firebase user ID.
 * @member {Number} id
 */
FireBaseUser.prototype['id'] = undefined;

/**
 * The user ID.
 * @member {String} userId
 */
FireBaseUser.prototype['userId'] = undefined;

/**
 * The tenant ID.
 * @member {Number} tenantId
 */
FireBaseUser.prototype['tenantId'] = undefined;

/**
 * The Firebase device token.
 * @member {String} firebaseDeviceToken
 */
FireBaseUser.prototype['firebaseDeviceToken'] = undefined;

/**
 * The Firebase application.
 * @member {String} application
 */
FireBaseUser.prototype['application'] = undefined;

/**
 * Specifies if the user is subscribed to the push notifications or not.
 * @member {Boolean} isSubscribed
 */
FireBaseUser.prototype['isSubscribed'] = undefined;

/**
 * @member {module:models/DbTenant} tenant
 */
FireBaseUser.prototype['tenant'] = undefined;






export default FireBaseUser;

