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
import FilesStatisticsFolder from './FilesStatisticsFolder';

/**
 * The FilesStatisticsResultDto model module.
 * @module models/FilesStatisticsResultDto
 * @version 3.2.0
 */
class FilesStatisticsResultDto {
    /**
     * Constructs a new <code>FilesStatisticsResultDto</code>.
     * The file statistics result parameters.
     * @alias module:models/FilesStatisticsResultDto
     */
    constructor() { 
        
        FilesStatisticsResultDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FilesStatisticsResultDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FilesStatisticsResultDto} obj Optional instance to populate.
     * @return {module:models/FilesStatisticsResultDto} The populated <code>FilesStatisticsResultDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FilesStatisticsResultDto();

            if (data.hasOwnProperty('myDocumentsUsedSpace')) {
                obj['myDocumentsUsedSpace'] = FilesStatisticsFolder.constructFromObject(data['myDocumentsUsedSpace']);
            }
            if (data.hasOwnProperty('trashUsedSpace')) {
                obj['trashUsedSpace'] = FilesStatisticsFolder.constructFromObject(data['trashUsedSpace']);
            }
            if (data.hasOwnProperty('archiveUsedSpace')) {
                obj['archiveUsedSpace'] = FilesStatisticsFolder.constructFromObject(data['archiveUsedSpace']);
            }
            if (data.hasOwnProperty('roomsUsedSpace')) {
                obj['roomsUsedSpace'] = FilesStatisticsFolder.constructFromObject(data['roomsUsedSpace']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FilesStatisticsResultDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FilesStatisticsResultDto</code>.
     */
    static validateJSON(data) {
        // validate the optional field `myDocumentsUsedSpace`
        if (data['myDocumentsUsedSpace']) { // data not null
          FilesStatisticsFolder.validateJSON(data['myDocumentsUsedSpace']);
        }
        // validate the optional field `trashUsedSpace`
        if (data['trashUsedSpace']) { // data not null
          FilesStatisticsFolder.validateJSON(data['trashUsedSpace']);
        }
        // validate the optional field `archiveUsedSpace`
        if (data['archiveUsedSpace']) { // data not null
          FilesStatisticsFolder.validateJSON(data['archiveUsedSpace']);
        }
        // validate the optional field `roomsUsedSpace`
        if (data['roomsUsedSpace']) { // data not null
          FilesStatisticsFolder.validateJSON(data['roomsUsedSpace']);
        }

        return true;
    }


}



/**
 * @member {module:models/FilesStatisticsFolder} myDocumentsUsedSpace
 */
FilesStatisticsResultDto.prototype['myDocumentsUsedSpace'] = undefined;

/**
 * @member {module:models/FilesStatisticsFolder} trashUsedSpace
 */
FilesStatisticsResultDto.prototype['trashUsedSpace'] = undefined;

/**
 * @member {module:models/FilesStatisticsFolder} archiveUsedSpace
 */
FilesStatisticsResultDto.prototype['archiveUsedSpace'] = undefined;

/**
 * @member {module:models/FilesStatisticsFolder} roomsUsedSpace
 */
FilesStatisticsResultDto.prototype['roomsUsedSpace'] = undefined;






export default FilesStatisticsResultDto;

