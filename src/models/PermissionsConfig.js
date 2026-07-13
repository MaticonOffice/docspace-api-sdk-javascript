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
 * The PermissionsConfig model module.
 * @module models/PermissionsConfig
 * @version 3.2.0
 */
class PermissionsConfig {
    /**
     * Constructs a new <code>PermissionsConfig</code>.
     * The permissions configuration parameters.
     * @alias module:models/PermissionsConfig
     */
    constructor() { 
        
        PermissionsConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PermissionsConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/PermissionsConfig} obj Optional instance to populate.
     * @return {module:models/PermissionsConfig} The populated <code>PermissionsConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermissionsConfig();

            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'Boolean');
            }
            if (data.hasOwnProperty('chat')) {
                obj['chat'] = ApiClient.convertToType(data['chat'], 'Boolean');
            }
            if (data.hasOwnProperty('download')) {
                obj['download'] = ApiClient.convertToType(data['download'], 'Boolean');
            }
            if (data.hasOwnProperty('edit')) {
                obj['edit'] = ApiClient.convertToType(data['edit'], 'Boolean');
            }
            if (data.hasOwnProperty('fillForms')) {
                obj['fillForms'] = ApiClient.convertToType(data['fillForms'], 'Boolean');
            }
            if (data.hasOwnProperty('modifyFilter')) {
                obj['modifyFilter'] = ApiClient.convertToType(data['modifyFilter'], 'Boolean');
            }
            if (data.hasOwnProperty('protect')) {
                obj['protect'] = ApiClient.convertToType(data['protect'], 'Boolean');
            }
            if (data.hasOwnProperty('print')) {
                obj['print'] = ApiClient.convertToType(data['print'], 'Boolean');
            }
            if (data.hasOwnProperty('rename')) {
                obj['rename'] = ApiClient.convertToType(data['rename'], 'Boolean');
            }
            if (data.hasOwnProperty('review')) {
                obj['review'] = ApiClient.convertToType(data['review'], 'Boolean');
            }
            if (data.hasOwnProperty('copy')) {
                obj['copy'] = ApiClient.convertToType(data['copy'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PermissionsConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PermissionsConfig</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Defines if the document can be commented or not.
 * @member {Boolean} comment
 */
PermissionsConfig.prototype['comment'] = undefined;

/**
 * Defines if the chat functionality is enabled in the document or not.
 * @member {Boolean} chat
 */
PermissionsConfig.prototype['chat'] = undefined;

/**
 * Defines if the document can be downloaded or only viewed or edited online.
 * @member {Boolean} download
 */
PermissionsConfig.prototype['download'] = undefined;

/**
 * Defines if the document can be edited or only viewed.
 * @member {Boolean} edit
 */
PermissionsConfig.prototype['edit'] = undefined;

/**
 * Defines if the forms can be filled.
 * @member {Boolean} fillForms
 */
PermissionsConfig.prototype['fillForms'] = undefined;

/**
 * Defines if the filter can be applied globally (true) affecting all the other users,  or locally (false), i.e. for the current user only.
 * @member {Boolean} modifyFilter
 */
PermissionsConfig.prototype['modifyFilter'] = undefined;

/**
 * Defines if the \"Protection\" tab on the toolbar and the \"Protect\" button in the left menu are displayedor hidden.
 * @member {Boolean} protect
 */
PermissionsConfig.prototype['protect'] = undefined;

/**
 * Defines if the document can be printed or not.
 * @member {Boolean} print
 */
PermissionsConfig.prototype['print'] = undefined;

/**
 * Specifies whether to display the \"Rename...\" button when using the \"onRequestRename\" event.
 * @member {Boolean} rename
 */
PermissionsConfig.prototype['rename'] = undefined;

/**
 * Defines if the document can be reviewed or not.
 * @member {Boolean} review
 */
PermissionsConfig.prototype['review'] = undefined;

/**
 * Defines if the content can be copied to the clipboard or not.
 * @member {Boolean} copy
 */
PermissionsConfig.prototype['copy'] = undefined;






export default PermissionsConfig;

