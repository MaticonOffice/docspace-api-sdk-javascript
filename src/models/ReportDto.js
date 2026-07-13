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
import OperationDto from './OperationDto';

/**
 * The ReportDto model module.
 * @module models/ReportDto
 * @version 3.2.0
 */
class ReportDto {
    /**
     * Constructs a new <code>ReportDto</code>.
     * Represents a report containing a collection of operations.
     * @alias module:models/ReportDto
     */
    constructor() { 
        
        ReportDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ReportDto} obj Optional instance to populate.
     * @return {module:models/ReportDto} The populated <code>ReportDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportDto();

            if (data.hasOwnProperty('collection')) {
                obj['collection'] = ApiClient.convertToType(data['collection'], [OperationDto]);
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('totalQuantity')) {
                obj['totalQuantity'] = ApiClient.convertToType(data['totalQuantity'], 'Number');
            }
            if (data.hasOwnProperty('totalPage')) {
                obj['totalPage'] = ApiClient.convertToType(data['totalPage'], 'Number');
            }
            if (data.hasOwnProperty('currentPage')) {
                obj['currentPage'] = ApiClient.convertToType(data['currentPage'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReportDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReportDto</code>.
     */
    static validateJSON(data) {
        if (data['collection']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['collection'])) {
                throw new Error("Expected the field `collection` to be an array in the JSON data but got " + data['collection']);
            }
            // validate the optional field `collection` (array)
            for (const item of data['collection']) {
                OperationDto.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Collection of operations.
 * @member {Array.<module:models/OperationDto>} collection
 */
ReportDto.prototype['collection'] = undefined;

/**
 * Offset of the report data.
 * @member {Number} offset
 */
ReportDto.prototype['offset'] = undefined;

/**
 * Limit of the report data.
 * @member {Number} limit
 */
ReportDto.prototype['limit'] = undefined;

/**
 * Total quantity of operations in the report.
 * @member {Number} totalQuantity
 */
ReportDto.prototype['totalQuantity'] = undefined;

/**
 * Total number of pages in the report.
 * @member {Number} totalPage
 */
ReportDto.prototype['totalPage'] = undefined;

/**
 * Current page number of the report.
 * @member {Number} currentPage
 */
ReportDto.prototype['currentPage'] = undefined;






export default ReportDto;

