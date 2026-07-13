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
import AnonymousConfigDto from './AnonymousConfigDto';
import CustomerConfigDto from './CustomerConfigDto';
import FeedbackConfig from './FeedbackConfig';
import GobackConfig from './GobackConfig';
import LogoConfigDto from './LogoConfigDto';
import ReviewConfig from './ReviewConfig';
import StartFillingForm from './StartFillingForm';
import SubmitForm from './SubmitForm';

/**
 * The CustomizationConfigDto model module.
 * @module models/CustomizationConfigDto
 * @version 3.2.0
 */
class CustomizationConfigDto {
    /**
     * Constructs a new <code>CustomizationConfigDto</code>.
     * The customization config parameters.
     * @alias module:models/CustomizationConfigDto
     */
    constructor() { 
        
        CustomizationConfigDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomizationConfigDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CustomizationConfigDto} obj Optional instance to populate.
     * @return {module:models/CustomizationConfigDto} The populated <code>CustomizationConfigDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomizationConfigDto();

            if (data.hasOwnProperty('about')) {
                obj['about'] = ApiClient.convertToType(data['about'], 'Boolean');
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = CustomerConfigDto.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('anonymous')) {
                obj['anonymous'] = AnonymousConfigDto.constructFromObject(data['anonymous']);
            }
            if (data.hasOwnProperty('feedback')) {
                obj['feedback'] = FeedbackConfig.constructFromObject(data['feedback']);
            }
            if (data.hasOwnProperty('forcesave')) {
                obj['forcesave'] = ApiClient.convertToType(data['forcesave'], 'Boolean');
            }
            if (data.hasOwnProperty('goback')) {
                obj['goback'] = GobackConfig.constructFromObject(data['goback']);
            }
            if (data.hasOwnProperty('review')) {
                obj['review'] = ReviewConfig.constructFromObject(data['review']);
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = LogoConfigDto.constructFromObject(data['logo']);
            }
            if (data.hasOwnProperty('mentionShare')) {
                obj['mentionShare'] = ApiClient.convertToType(data['mentionShare'], 'Boolean');
            }
            if (data.hasOwnProperty('submitForm')) {
                obj['submitForm'] = SubmitForm.constructFromObject(data['submitForm']);
            }
            if (data.hasOwnProperty('startFillingForm')) {
                obj['startFillingForm'] = StartFillingForm.constructFromObject(data['startFillingForm']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomizationConfigDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomizationConfigDto</code>.
     */
    static validateJSON(data) {
        // validate the optional field `customer`
        if (data['customer']) { // data not null
          CustomerConfigDto.validateJSON(data['customer']);
        }
        // validate the optional field `anonymous`
        if (data['anonymous']) { // data not null
          AnonymousConfigDto.validateJSON(data['anonymous']);
        }
        // validate the optional field `feedback`
        if (data['feedback']) { // data not null
          FeedbackConfig.validateJSON(data['feedback']);
        }
        // validate the optional field `goback`
        if (data['goback']) { // data not null
          GobackConfig.validateJSON(data['goback']);
        }
        // validate the optional field `review`
        if (data['review']) { // data not null
          ReviewConfig.validateJSON(data['review']);
        }
        // validate the optional field `logo`
        if (data['logo']) { // data not null
          LogoConfigDto.validateJSON(data['logo']);
        }
        // validate the optional field `submitForm`
        if (data['submitForm']) { // data not null
          SubmitForm.validateJSON(data['submitForm']);
        }
        // validate the optional field `startFillingForm`
        if (data['startFillingForm']) { // data not null
          StartFillingForm.validateJSON(data['startFillingForm']);
        }

        return true;
    }


}



/**
 * Specifies if the customization is about.
 * @member {Boolean} about
 */
CustomizationConfigDto.prototype['about'] = undefined;

/**
 * @member {module:models/CustomerConfigDto} customer
 */
CustomizationConfigDto.prototype['customer'] = undefined;

/**
 * @member {module:models/AnonymousConfigDto} anonymous
 */
CustomizationConfigDto.prototype['anonymous'] = undefined;

/**
 * @member {module:models/FeedbackConfig} feedback
 */
CustomizationConfigDto.prototype['feedback'] = undefined;

/**
 * Specifies if the customization should be force saved.
 * @member {Boolean} forcesave
 */
CustomizationConfigDto.prototype['forcesave'] = undefined;

/**
 * @member {module:models/GobackConfig} goback
 */
CustomizationConfigDto.prototype['goback'] = undefined;

/**
 * @member {module:models/ReviewConfig} review
 */
CustomizationConfigDto.prototype['review'] = undefined;

/**
 * @member {module:models/LogoConfigDto} logo
 */
CustomizationConfigDto.prototype['logo'] = undefined;

/**
 * Specifies if the share should be mentioned.
 * @member {Boolean} mentionShare
 */
CustomizationConfigDto.prototype['mentionShare'] = undefined;

/**
 * @member {module:models/SubmitForm} submitForm
 */
CustomizationConfigDto.prototype['submitForm'] = undefined;

/**
 * @member {module:models/StartFillingForm} startFillingForm
 */
CustomizationConfigDto.prototype['startFillingForm'] = undefined;






export default CustomizationConfigDto;

