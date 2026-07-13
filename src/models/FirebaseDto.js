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
 * The FirebaseDto model module.
 * @module models/FirebaseDto
 * @version 3.2.0
 */
class FirebaseDto {
    /**
     * Constructs a new <code>FirebaseDto</code>.
     * The Firebase parameters.
     * @alias module:models/FirebaseDto
     */
    constructor() { 
        
        FirebaseDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FirebaseDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FirebaseDto} obj Optional instance to populate.
     * @return {module:models/FirebaseDto} The populated <code>FirebaseDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FirebaseDto();

            if (data.hasOwnProperty('apiKey')) {
                obj['apiKey'] = ApiClient.convertToType(data['apiKey'], 'String');
            }
            if (data.hasOwnProperty('authDomain')) {
                obj['authDomain'] = ApiClient.convertToType(data['authDomain'], 'String');
            }
            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'String');
            }
            if (data.hasOwnProperty('storageBucket')) {
                obj['storageBucket'] = ApiClient.convertToType(data['storageBucket'], 'String');
            }
            if (data.hasOwnProperty('messagingSenderId')) {
                obj['messagingSenderId'] = ApiClient.convertToType(data['messagingSenderId'], 'String');
            }
            if (data.hasOwnProperty('appId')) {
                obj['appId'] = ApiClient.convertToType(data['appId'], 'String');
            }
            if (data.hasOwnProperty('measurementId')) {
                obj['measurementId'] = ApiClient.convertToType(data['measurementId'], 'String');
            }
            if (data.hasOwnProperty('databaseURL')) {
                obj['databaseURL'] = ApiClient.convertToType(data['databaseURL'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FirebaseDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FirebaseDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['apiKey'] && !(typeof data['apiKey'] === 'string' || data['apiKey'] instanceof String)) {
            throw new Error("Expected the field `apiKey` to be a primitive type in the JSON string but got " + data['apiKey']);
        }
        // ensure the json data is a string
        if (data['authDomain'] && !(typeof data['authDomain'] === 'string' || data['authDomain'] instanceof String)) {
            throw new Error("Expected the field `authDomain` to be a primitive type in the JSON string but got " + data['authDomain']);
        }
        // ensure the json data is a string
        if (data['projectId'] && !(typeof data['projectId'] === 'string' || data['projectId'] instanceof String)) {
            throw new Error("Expected the field `projectId` to be a primitive type in the JSON string but got " + data['projectId']);
        }
        // ensure the json data is a string
        if (data['storageBucket'] && !(typeof data['storageBucket'] === 'string' || data['storageBucket'] instanceof String)) {
            throw new Error("Expected the field `storageBucket` to be a primitive type in the JSON string but got " + data['storageBucket']);
        }
        // ensure the json data is a string
        if (data['messagingSenderId'] && !(typeof data['messagingSenderId'] === 'string' || data['messagingSenderId'] instanceof String)) {
            throw new Error("Expected the field `messagingSenderId` to be a primitive type in the JSON string but got " + data['messagingSenderId']);
        }
        // ensure the json data is a string
        if (data['appId'] && !(typeof data['appId'] === 'string' || data['appId'] instanceof String)) {
            throw new Error("Expected the field `appId` to be a primitive type in the JSON string but got " + data['appId']);
        }
        // ensure the json data is a string
        if (data['measurementId'] && !(typeof data['measurementId'] === 'string' || data['measurementId'] instanceof String)) {
            throw new Error("Expected the field `measurementId` to be a primitive type in the JSON string but got " + data['measurementId']);
        }
        // ensure the json data is a string
        if (data['databaseURL'] && !(typeof data['databaseURL'] === 'string' || data['databaseURL'] instanceof String)) {
            throw new Error("Expected the field `databaseURL` to be a primitive type in the JSON string but got " + data['databaseURL']);
        }

        return true;
    }


}



/**
 * The Firebase API key.
 * @member {String} apiKey
 */
FirebaseDto.prototype['apiKey'] = undefined;

/**
 * The Firebase authentication domain.
 * @member {String} authDomain
 */
FirebaseDto.prototype['authDomain'] = undefined;

/**
 * The Firebase project ID.
 * @member {String} projectId
 */
FirebaseDto.prototype['projectId'] = undefined;

/**
 * The Firebase storage bucket.
 * @member {String} storageBucket
 */
FirebaseDto.prototype['storageBucket'] = undefined;

/**
 * The Firebase messaging sender ID.
 * @member {String} messagingSenderId
 */
FirebaseDto.prototype['messagingSenderId'] = undefined;

/**
 * The Firebase application ID.
 * @member {String} appId
 */
FirebaseDto.prototype['appId'] = undefined;

/**
 * The Firebase measurement ID.
 * @member {String} measurementId
 */
FirebaseDto.prototype['measurementId'] = undefined;

/**
 * The Firebase database URL.
 * @member {String} databaseURL
 */
FirebaseDto.prototype['databaseURL'] = undefined;






export default FirebaseDto;

