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
import BackupStorageType from './BackupStorageType';
import ItemKeyValuePairObjectObject from './ItemKeyValuePairObjectObject';

/**
 * The BackupDto model module.
 * @module models/BackupDto
 * @version 3.2.0
 */
class BackupDto {
    /**
     * Constructs a new <code>BackupDto</code>.
     * The backup parameters.
     * @alias module:models/BackupDto
     */
    constructor() { 
        
        BackupDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BackupDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/BackupDto} obj Optional instance to populate.
     * @return {module:models/BackupDto} The populated <code>BackupDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BackupDto();

            if (data.hasOwnProperty('storageType')) {
                obj['storageType'] = BackupStorageType.constructFromObject(data['storageType']);
            }
            if (data.hasOwnProperty('storageParams')) {
                obj['storageParams'] = ApiClient.convertToType(data['storageParams'], [ItemKeyValuePairObjectObject]);
            }
            if (data.hasOwnProperty('dump')) {
                obj['dump'] = ApiClient.convertToType(data['dump'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BackupDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BackupDto</code>.
     */
    static validateJSON(data) {
        if (data['storageParams']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['storageParams'])) {
                throw new Error("Expected the field `storageParams` to be an array in the JSON data but got " + data['storageParams']);
            }
            // validate the optional field `storageParams` (array)
            for (const item of data['storageParams']) {
                ItemKeyValuePairObjectObject.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:models/BackupStorageType} storageType
 */
BackupDto.prototype['storageType'] = undefined;

/**
 * The backup storage parameters.
 * @member {Array.<module:models/ItemKeyValuePairObjectObject>} storageParams
 */
BackupDto.prototype['storageParams'] = undefined;

/**
 * Specifies if a dump will be created or not.
 * @member {Boolean} dump
 */
BackupDto.prototype['dump'] = undefined;






export default BackupDto;

