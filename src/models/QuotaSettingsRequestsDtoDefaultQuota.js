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
 * The QuotaSettingsRequestsDtoDefaultQuota model module.
 * @module models/QuotaSettingsRequestsDtoDefaultQuota
 * @version 3.2.0
 */
class QuotaSettingsRequestsDtoDefaultQuota {
    /**
     * Constructs a new <code>QuotaSettingsRequestsDtoDefaultQuota</code>.
     * The default storage quota value applied to new users.
     * @alias module:models/QuotaSettingsRequestsDtoDefaultQuota
     * @param {(module:models/Number|module:models/String)} instance The actual instance to initialize QuotaSettingsRequestsDtoDefaultQuota.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            // validate integer
            if (!(typeof instance === 'number' && instance % 1 === 0)) {
                throw new Error("Invalid value. Must be integer. Input: " + JSON.stringify(instance));
            }
            this.actualInstance = instance;
            match++;
        } catch(err) {
            // json data failed to deserialize into Number
            errorMessages.push("Failed to construct Number: " + err)
        }

        try {
            // validate string
            if (!(typeof instance === 'string')) {
                throw new Error("Invalid value. Must be string. Input: " + JSON.stringify(instance));
            }
            this.actualInstance = instance;
            match++;
        } catch(err) {
            // json data failed to deserialize into String
            errorMessages.push("Failed to construct String: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `QuotaSettingsRequestsDtoDefaultQuota` with oneOf schemas Number, String. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `QuotaSettingsRequestsDtoDefaultQuota` with oneOf schemas Number, String. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>QuotaSettingsRequestsDtoDefaultQuota</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/QuotaSettingsRequestsDtoDefaultQuota} obj Optional instance to populate.
     * @return {module:models/QuotaSettingsRequestsDtoDefaultQuota} The populated <code>QuotaSettingsRequestsDtoDefaultQuota</code> instance.
     */
    static constructFromObject(data, obj) {
        return new QuotaSettingsRequestsDtoDefaultQuota(data);
    }

    /**
     * Gets the actual instance, which can be <code>Number</code>, <code>String</code>.
     * @return {(module:models/Number|module:models/String)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>Number</code>, <code>String</code>.
     * @param {(module:models/Number|module:models/String)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = QuotaSettingsRequestsDtoDefaultQuota.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of QuotaSettingsRequestsDtoDefaultQuota from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:models/QuotaSettingsRequestsDtoDefaultQuota} An instance of QuotaSettingsRequestsDtoDefaultQuota.
     */
    static fromJSON = function(json_string){
        return QuotaSettingsRequestsDtoDefaultQuota.constructFromObject(JSON.parse(json_string));
    }
}


QuotaSettingsRequestsDtoDefaultQuota.OneOf = ["Number", "String"];

export default QuotaSettingsRequestsDtoDefaultQuota;

