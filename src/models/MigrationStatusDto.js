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
import MigrationApiInfo from './MigrationApiInfo';

/**
 * The MigrationStatusDto model module.
 * @module models/MigrationStatusDto
 * @version 3.2.0
 */
class MigrationStatusDto {
    /**
     * Constructs a new <code>MigrationStatusDto</code>.
     * The migration status parameters.
     * @alias module:models/MigrationStatusDto
     */
    constructor() { 
        
        MigrationStatusDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MigrationStatusDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/MigrationStatusDto} obj Optional instance to populate.
     * @return {module:models/MigrationStatusDto} The populated <code>MigrationStatusDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MigrationStatusDto();

            if (data.hasOwnProperty('progress')) {
                obj['progress'] = ApiClient.convertToType(data['progress'], 'Number');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('parseResult')) {
                obj['parseResult'] = MigrationApiInfo.constructFromObject(data['parseResult']);
            }
            if (data.hasOwnProperty('isCompleted')) {
                obj['isCompleted'] = ApiClient.convertToType(data['isCompleted'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MigrationStatusDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MigrationStatusDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['error'] && !(typeof data['error'] === 'string' || data['error'] instanceof String)) {
            throw new Error("Expected the field `error` to be a primitive type in the JSON string but got " + data['error']);
        }
        // validate the optional field `parseResult`
        if (data['parseResult']) { // data not null
          MigrationApiInfo.validateJSON(data['parseResult']);
        }

        return true;
    }


}



/**
 * The migration progress.
 * @member {Number} progress
 */
MigrationStatusDto.prototype['progress'] = undefined;

/**
 * The migration error.
 * @member {String} error
 */
MigrationStatusDto.prototype['error'] = undefined;

/**
 * @member {module:models/MigrationApiInfo} parseResult
 */
MigrationStatusDto.prototype['parseResult'] = undefined;

/**
 * Specifies whether the migration is completed or not.
 * @member {Boolean} isCompleted
 */
MigrationStatusDto.prototype['isCompleted'] = undefined;






export default MigrationStatusDto;

