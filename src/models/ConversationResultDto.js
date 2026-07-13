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
import FileOperationType from './FileOperationType';

/**
 * The ConversationResultDto model module.
 * @module models/ConversationResultDto
 * @version 3.2.0
 */
class ConversationResultDto {
    /**
     * Constructs a new <code>ConversationResultDto</code>.
     * The result of file convertion operation.
     * @alias module:models/ConversationResultDto
     */
    constructor() { 
        
        ConversationResultDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationResultDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ConversationResultDto} obj Optional instance to populate.
     * @return {module:models/ConversationResultDto} The populated <code>ConversationResultDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationResultDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('Operation')) {
                obj['Operation'] = FileOperationType.constructFromObject(data['Operation']);
            }
            if (data.hasOwnProperty('progress')) {
                obj['progress'] = ApiClient.convertToType(data['progress'], 'Number');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], Object);
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('processed')) {
                obj['processed'] = ApiClient.convertToType(data['processed'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ConversationResultDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConversationResultDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['source'] && !(typeof data['source'] === 'string' || data['source'] instanceof String)) {
            throw new Error("Expected the field `source` to be a primitive type in the JSON string but got " + data['source']);
        }
        // ensure the json data is a string
        if (data['error'] && !(typeof data['error'] === 'string' || data['error'] instanceof String)) {
            throw new Error("Expected the field `error` to be a primitive type in the JSON string but got " + data['error']);
        }
        // ensure the json data is a string
        if (data['processed'] && !(typeof data['processed'] === 'string' || data['processed'] instanceof String)) {
            throw new Error("Expected the field `processed` to be a primitive type in the JSON string but got " + data['processed']);
        }

        return true;
    }


}



/**
 * The conversion operation ID.
 * @member {String} id
 */
ConversationResultDto.prototype['id'] = undefined;

/**
 * @member {module:models/FileOperationType} Operation
 */
ConversationResultDto.prototype['Operation'] = undefined;

/**
 * The conversion operation progress.
 * @member {Number} progress
 */
ConversationResultDto.prototype['progress'] = undefined;

/**
 * The source file for the conversion.
 * @member {String} source
 */
ConversationResultDto.prototype['source'] = undefined;

/**
 * The resulting file after the conversion.
 * @member {Object} result
 */
ConversationResultDto.prototype['result'] = undefined;

/**
 * The conversion operation error message.
 * @member {String} error
 */
ConversationResultDto.prototype['error'] = undefined;

/**
 * Specifies if the conversion operation is processed or not.
 * @member {String} processed
 */
ConversationResultDto.prototype['processed'] = undefined;






export default ConversationResultDto;

