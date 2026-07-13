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
import AutoCleanUpData from './AutoCleanUpData';
import FilesSettingsDtoInternalFormats from './FilesSettingsDtoInternalFormats';
import OrderBy from './OrderBy';

/**
 * The FilesSettingsDto model module.
 * @module models/FilesSettingsDto
 * @version 3.2.0
 */
class FilesSettingsDto {
    /**
     * Constructs a new <code>FilesSettingsDto</code>.
     * The file settings parameters.
     * @alias module:models/FilesSettingsDto
     */
    constructor() { 
        
        FilesSettingsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FilesSettingsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FilesSettingsDto} obj Optional instance to populate.
     * @return {module:models/FilesSettingsDto} The populated <code>FilesSettingsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FilesSettingsDto();

            if (data.hasOwnProperty('extsImagePreviewed')) {
                obj['extsImagePreviewed'] = ApiClient.convertToType(data['extsImagePreviewed'], ['String']);
            }
            if (data.hasOwnProperty('extsMediaPreviewed')) {
                obj['extsMediaPreviewed'] = ApiClient.convertToType(data['extsMediaPreviewed'], ['String']);
            }
            if (data.hasOwnProperty('extsWebPreviewed')) {
                obj['extsWebPreviewed'] = ApiClient.convertToType(data['extsWebPreviewed'], ['String']);
            }
            if (data.hasOwnProperty('extsWebEdited')) {
                obj['extsWebEdited'] = ApiClient.convertToType(data['extsWebEdited'], ['String']);
            }
            if (data.hasOwnProperty('extsWebEncrypt')) {
                obj['extsWebEncrypt'] = ApiClient.convertToType(data['extsWebEncrypt'], ['String']);
            }
            if (data.hasOwnProperty('extsWebReviewed')) {
                obj['extsWebReviewed'] = ApiClient.convertToType(data['extsWebReviewed'], ['String']);
            }
            if (data.hasOwnProperty('extsWebCustomFilterEditing')) {
                obj['extsWebCustomFilterEditing'] = ApiClient.convertToType(data['extsWebCustomFilterEditing'], ['String']);
            }
            if (data.hasOwnProperty('extsWebRestrictedEditing')) {
                obj['extsWebRestrictedEditing'] = ApiClient.convertToType(data['extsWebRestrictedEditing'], ['String']);
            }
            if (data.hasOwnProperty('extsWebCommented')) {
                obj['extsWebCommented'] = ApiClient.convertToType(data['extsWebCommented'], ['String']);
            }
            if (data.hasOwnProperty('extsWebTemplate')) {
                obj['extsWebTemplate'] = ApiClient.convertToType(data['extsWebTemplate'], ['String']);
            }
            if (data.hasOwnProperty('extsCoAuthoring')) {
                obj['extsCoAuthoring'] = ApiClient.convertToType(data['extsCoAuthoring'], ['String']);
            }
            if (data.hasOwnProperty('extsMustConvert')) {
                obj['extsMustConvert'] = ApiClient.convertToType(data['extsMustConvert'], ['String']);
            }
            if (data.hasOwnProperty('extsConvertible')) {
                obj['extsConvertible'] = ApiClient.convertToType(data['extsConvertible'], {'String': ['String']});
            }
            if (data.hasOwnProperty('extsUploadable')) {
                obj['extsUploadable'] = ApiClient.convertToType(data['extsUploadable'], ['String']);
            }
            if (data.hasOwnProperty('extsArchive')) {
                obj['extsArchive'] = ApiClient.convertToType(data['extsArchive'], ['String']);
            }
            if (data.hasOwnProperty('extsVideo')) {
                obj['extsVideo'] = ApiClient.convertToType(data['extsVideo'], ['String']);
            }
            if (data.hasOwnProperty('extsAudio')) {
                obj['extsAudio'] = ApiClient.convertToType(data['extsAudio'], ['String']);
            }
            if (data.hasOwnProperty('extsImage')) {
                obj['extsImage'] = ApiClient.convertToType(data['extsImage'], ['String']);
            }
            if (data.hasOwnProperty('extsSpreadsheet')) {
                obj['extsSpreadsheet'] = ApiClient.convertToType(data['extsSpreadsheet'], ['String']);
            }
            if (data.hasOwnProperty('extsPresentation')) {
                obj['extsPresentation'] = ApiClient.convertToType(data['extsPresentation'], ['String']);
            }
            if (data.hasOwnProperty('extsDocument')) {
                obj['extsDocument'] = ApiClient.convertToType(data['extsDocument'], ['String']);
            }
            if (data.hasOwnProperty('extsDiagram')) {
                obj['extsDiagram'] = ApiClient.convertToType(data['extsDiagram'], ['String']);
            }
            if (data.hasOwnProperty('internalFormats')) {
                obj['internalFormats'] = FilesSettingsDtoInternalFormats.constructFromObject(data['internalFormats']);
            }
            if (data.hasOwnProperty('masterFormExtension')) {
                obj['masterFormExtension'] = ApiClient.convertToType(data['masterFormExtension'], 'String');
            }
            if (data.hasOwnProperty('paramVersion')) {
                obj['paramVersion'] = ApiClient.convertToType(data['paramVersion'], 'String');
            }
            if (data.hasOwnProperty('paramOutType')) {
                obj['paramOutType'] = ApiClient.convertToType(data['paramOutType'], 'String');
            }
            if (data.hasOwnProperty('fileDownloadUrlString')) {
                obj['fileDownloadUrlString'] = ApiClient.convertToType(data['fileDownloadUrlString'], 'String');
            }
            if (data.hasOwnProperty('fileWebViewerUrlString')) {
                obj['fileWebViewerUrlString'] = ApiClient.convertToType(data['fileWebViewerUrlString'], 'String');
            }
            if (data.hasOwnProperty('fileWebViewerExternalUrlString')) {
                obj['fileWebViewerExternalUrlString'] = ApiClient.convertToType(data['fileWebViewerExternalUrlString'], 'String');
            }
            if (data.hasOwnProperty('fileWebEditorUrlString')) {
                obj['fileWebEditorUrlString'] = ApiClient.convertToType(data['fileWebEditorUrlString'], 'String');
            }
            if (data.hasOwnProperty('fileWebEditorExternalUrlString')) {
                obj['fileWebEditorExternalUrlString'] = ApiClient.convertToType(data['fileWebEditorExternalUrlString'], 'String');
            }
            if (data.hasOwnProperty('fileRedirectPreviewUrlString')) {
                obj['fileRedirectPreviewUrlString'] = ApiClient.convertToType(data['fileRedirectPreviewUrlString'], 'String');
            }
            if (data.hasOwnProperty('fileThumbnailUrlString')) {
                obj['fileThumbnailUrlString'] = ApiClient.convertToType(data['fileThumbnailUrlString'], 'String');
            }
            if (data.hasOwnProperty('confirmDelete')) {
                obj['confirmDelete'] = ApiClient.convertToType(data['confirmDelete'], 'Boolean');
            }
            if (data.hasOwnProperty('enableThirdParty')) {
                obj['enableThirdParty'] = ApiClient.convertToType(data['enableThirdParty'], 'Boolean');
            }
            if (data.hasOwnProperty('externalShare')) {
                obj['externalShare'] = ApiClient.convertToType(data['externalShare'], 'Boolean');
            }
            if (data.hasOwnProperty('externalShareSocialMedia')) {
                obj['externalShareSocialMedia'] = ApiClient.convertToType(data['externalShareSocialMedia'], 'Boolean');
            }
            if (data.hasOwnProperty('storeOriginalFiles')) {
                obj['storeOriginalFiles'] = ApiClient.convertToType(data['storeOriginalFiles'], 'Boolean');
            }
            if (data.hasOwnProperty('keepNewFileName')) {
                obj['keepNewFileName'] = ApiClient.convertToType(data['keepNewFileName'], 'Boolean');
            }
            if (data.hasOwnProperty('displayFileExtension')) {
                obj['displayFileExtension'] = ApiClient.convertToType(data['displayFileExtension'], 'Boolean');
            }
            if (data.hasOwnProperty('convertNotify')) {
                obj['convertNotify'] = ApiClient.convertToType(data['convertNotify'], 'Boolean');
            }
            if (data.hasOwnProperty('hideConfirmCancelOperation')) {
                obj['hideConfirmCancelOperation'] = ApiClient.convertToType(data['hideConfirmCancelOperation'], 'Boolean');
            }
            if (data.hasOwnProperty('hideConfirmConvertSave')) {
                obj['hideConfirmConvertSave'] = ApiClient.convertToType(data['hideConfirmConvertSave'], 'Boolean');
            }
            if (data.hasOwnProperty('hideConfirmConvertOpen')) {
                obj['hideConfirmConvertOpen'] = ApiClient.convertToType(data['hideConfirmConvertOpen'], 'Boolean');
            }
            if (data.hasOwnProperty('hideConfirmRoomLifetime')) {
                obj['hideConfirmRoomLifetime'] = ApiClient.convertToType(data['hideConfirmRoomLifetime'], 'Boolean');
            }
            if (data.hasOwnProperty('defaultOrder')) {
                obj['defaultOrder'] = OrderBy.constructFromObject(data['defaultOrder']);
            }
            if (data.hasOwnProperty('forcesave')) {
                obj['forcesave'] = ApiClient.convertToType(data['forcesave'], 'Boolean');
            }
            if (data.hasOwnProperty('storeForcesave')) {
                obj['storeForcesave'] = ApiClient.convertToType(data['storeForcesave'], 'Boolean');
            }
            if (data.hasOwnProperty('recentSection')) {
                obj['recentSection'] = ApiClient.convertToType(data['recentSection'], 'Boolean');
            }
            if (data.hasOwnProperty('favoritesSection')) {
                obj['favoritesSection'] = ApiClient.convertToType(data['favoritesSection'], 'Boolean');
            }
            if (data.hasOwnProperty('templatesSection')) {
                obj['templatesSection'] = ApiClient.convertToType(data['templatesSection'], 'Boolean');
            }
            if (data.hasOwnProperty('downloadTarGz')) {
                obj['downloadTarGz'] = ApiClient.convertToType(data['downloadTarGz'], 'Boolean');
            }
            if (data.hasOwnProperty('automaticallyCleanUp')) {
                obj['automaticallyCleanUp'] = AutoCleanUpData.constructFromObject(data['automaticallyCleanUp']);
            }
            if (data.hasOwnProperty('canSearchByContent')) {
                obj['canSearchByContent'] = ApiClient.convertToType(data['canSearchByContent'], 'Boolean');
            }
            if (data.hasOwnProperty('defaultSharingAccessRights')) {
                obj['defaultSharingAccessRights'] = ApiClient.convertToType(data['defaultSharingAccessRights'], ['Number']);
            }
            if (data.hasOwnProperty('maxUploadThreadCount')) {
                obj['maxUploadThreadCount'] = ApiClient.convertToType(data['maxUploadThreadCount'], 'Number');
            }
            if (data.hasOwnProperty('chunkUploadSize')) {
                obj['chunkUploadSize'] = ApiClient.convertToType(data['chunkUploadSize'], 'Number');
            }
            if (data.hasOwnProperty('openEditorInSameTab')) {
                obj['openEditorInSameTab'] = ApiClient.convertToType(data['openEditorInSameTab'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FilesSettingsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FilesSettingsDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['extsImagePreviewed'])) {
            throw new Error("Expected the field `extsImagePreviewed` to be an array in the JSON data but got " + data['extsImagePreviewed']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['extsMediaPreviewed'])) {
            throw new Error("Expected the field `extsMediaPreviewed` to be an array in the JSON data but got " + data['extsMediaPreviewed']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['extsWebPreviewed'])) {
            throw new Error("Expected the field `extsWebPreviewed` to be an array in the JSON data but got " + data['extsWebPreviewed']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['extsWebEdited'])) {
            throw new Error("Expected the field `extsWebEdited` to be an array in the JSON data but got " + data['extsWebEdited']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['extsWebEncrypt'])) {
            throw new Error("Expected the field `extsWebEncrypt` to be an array in the JSON data but got " + data['extsWebEncrypt']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['extsWebReviewed'])) {
            throw new Error("Expected the field `extsWebReviewed` to be an array in the JSON data but got " + data['extsWebReviewed']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['extsWebCustomFilterEditing'])) {
            throw new Error("Expected the field `extsWebCustomFilterEditing` to be an array in the JSON data but got " + data['extsWebCustomFilterEditing']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['extsWebRestrictedEditing'])) {
            throw new Error("Expected the field `extsWebRestrictedEditing` to be an array in the JSON data but got " + data['extsWebRestrictedEditing']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['extsWebCommented'])) {
            throw new Error("Expected the field `extsWebCommented` to be an array in the JSON data but got " + data['extsWebCommented']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['extsWebTemplate'])) {
            throw new Error("Expected the field `extsWebTemplate` to be an array in the JSON data but got " + data['extsWebTemplate']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['extsCoAuthoring'])) {
            throw new Error("Expected the field `extsCoAuthoring` to be an array in the JSON data but got " + data['extsCoAuthoring']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['extsMustConvert'])) {
            throw new Error("Expected the field `extsMustConvert` to be an array in the JSON data but got " + data['extsMustConvert']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['extsUploadable'])) {
            throw new Error("Expected the field `extsUploadable` to be an array in the JSON data but got " + data['extsUploadable']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['extsArchive'])) {
            throw new Error("Expected the field `extsArchive` to be an array in the JSON data but got " + data['extsArchive']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['extsVideo'])) {
            throw new Error("Expected the field `extsVideo` to be an array in the JSON data but got " + data['extsVideo']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['extsAudio'])) {
            throw new Error("Expected the field `extsAudio` to be an array in the JSON data but got " + data['extsAudio']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['extsImage'])) {
            throw new Error("Expected the field `extsImage` to be an array in the JSON data but got " + data['extsImage']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['extsSpreadsheet'])) {
            throw new Error("Expected the field `extsSpreadsheet` to be an array in the JSON data but got " + data['extsSpreadsheet']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['extsPresentation'])) {
            throw new Error("Expected the field `extsPresentation` to be an array in the JSON data but got " + data['extsPresentation']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['extsDocument'])) {
            throw new Error("Expected the field `extsDocument` to be an array in the JSON data but got " + data['extsDocument']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['extsDiagram'])) {
            throw new Error("Expected the field `extsDiagram` to be an array in the JSON data but got " + data['extsDiagram']);
        }
        // validate the optional field `internalFormats`
        if (data['internalFormats']) { // data not null
          FilesSettingsDtoInternalFormats.validateJSON(data['internalFormats']);
        }
        // ensure the json data is a string
        if (data['masterFormExtension'] && !(typeof data['masterFormExtension'] === 'string' || data['masterFormExtension'] instanceof String)) {
            throw new Error("Expected the field `masterFormExtension` to be a primitive type in the JSON string but got " + data['masterFormExtension']);
        }
        // ensure the json data is a string
        if (data['paramVersion'] && !(typeof data['paramVersion'] === 'string' || data['paramVersion'] instanceof String)) {
            throw new Error("Expected the field `paramVersion` to be a primitive type in the JSON string but got " + data['paramVersion']);
        }
        // ensure the json data is a string
        if (data['paramOutType'] && !(typeof data['paramOutType'] === 'string' || data['paramOutType'] instanceof String)) {
            throw new Error("Expected the field `paramOutType` to be a primitive type in the JSON string but got " + data['paramOutType']);
        }
        // ensure the json data is a string
        if (data['fileDownloadUrlString'] && !(typeof data['fileDownloadUrlString'] === 'string' || data['fileDownloadUrlString'] instanceof String)) {
            throw new Error("Expected the field `fileDownloadUrlString` to be a primitive type in the JSON string but got " + data['fileDownloadUrlString']);
        }
        // ensure the json data is a string
        if (data['fileWebViewerUrlString'] && !(typeof data['fileWebViewerUrlString'] === 'string' || data['fileWebViewerUrlString'] instanceof String)) {
            throw new Error("Expected the field `fileWebViewerUrlString` to be a primitive type in the JSON string but got " + data['fileWebViewerUrlString']);
        }
        // ensure the json data is a string
        if (data['fileWebViewerExternalUrlString'] && !(typeof data['fileWebViewerExternalUrlString'] === 'string' || data['fileWebViewerExternalUrlString'] instanceof String)) {
            throw new Error("Expected the field `fileWebViewerExternalUrlString` to be a primitive type in the JSON string but got " + data['fileWebViewerExternalUrlString']);
        }
        // ensure the json data is a string
        if (data['fileWebEditorUrlString'] && !(typeof data['fileWebEditorUrlString'] === 'string' || data['fileWebEditorUrlString'] instanceof String)) {
            throw new Error("Expected the field `fileWebEditorUrlString` to be a primitive type in the JSON string but got " + data['fileWebEditorUrlString']);
        }
        // ensure the json data is a string
        if (data['fileWebEditorExternalUrlString'] && !(typeof data['fileWebEditorExternalUrlString'] === 'string' || data['fileWebEditorExternalUrlString'] instanceof String)) {
            throw new Error("Expected the field `fileWebEditorExternalUrlString` to be a primitive type in the JSON string but got " + data['fileWebEditorExternalUrlString']);
        }
        // ensure the json data is a string
        if (data['fileRedirectPreviewUrlString'] && !(typeof data['fileRedirectPreviewUrlString'] === 'string' || data['fileRedirectPreviewUrlString'] instanceof String)) {
            throw new Error("Expected the field `fileRedirectPreviewUrlString` to be a primitive type in the JSON string but got " + data['fileRedirectPreviewUrlString']);
        }
        // ensure the json data is a string
        if (data['fileThumbnailUrlString'] && !(typeof data['fileThumbnailUrlString'] === 'string' || data['fileThumbnailUrlString'] instanceof String)) {
            throw new Error("Expected the field `fileThumbnailUrlString` to be a primitive type in the JSON string but got " + data['fileThumbnailUrlString']);
        }
        // validate the optional field `defaultOrder`
        if (data['defaultOrder']) { // data not null
          OrderBy.validateJSON(data['defaultOrder']);
        }
        // validate the optional field `automaticallyCleanUp`
        if (data['automaticallyCleanUp']) { // data not null
          AutoCleanUpData.validateJSON(data['automaticallyCleanUp']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['defaultSharingAccessRights'])) {
            throw new Error("Expected the field `defaultSharingAccessRights` to be an array in the JSON data but got " + data['defaultSharingAccessRights']);
        }

        return true;
    }


}



/**
 * The list of extensions of the viewed images.
 * @member {Array.<String>} extsImagePreviewed
 */
FilesSettingsDto.prototype['extsImagePreviewed'] = undefined;

/**
 * The list of extensions of the viewed media files.
 * @member {Array.<String>} extsMediaPreviewed
 */
FilesSettingsDto.prototype['extsMediaPreviewed'] = undefined;

/**
 * The list of extensions of the viewed files.
 * @member {Array.<String>} extsWebPreviewed
 */
FilesSettingsDto.prototype['extsWebPreviewed'] = undefined;

/**
 * The list of extensions of the edited files.
 * @member {Array.<String>} extsWebEdited
 */
FilesSettingsDto.prototype['extsWebEdited'] = undefined;

/**
 * The list of extensions of the encrypted files.
 * @member {Array.<String>} extsWebEncrypt
 */
FilesSettingsDto.prototype['extsWebEncrypt'] = undefined;

/**
 * The list of extensions of the reviewed files.
 * @member {Array.<String>} extsWebReviewed
 */
FilesSettingsDto.prototype['extsWebReviewed'] = undefined;

/**
 * The list of extensions of the custom filter files.
 * @member {Array.<String>} extsWebCustomFilterEditing
 */
FilesSettingsDto.prototype['extsWebCustomFilterEditing'] = undefined;

/**
 * The list of extensions of the files that are restricted for editing.
 * @member {Array.<String>} extsWebRestrictedEditing
 */
FilesSettingsDto.prototype['extsWebRestrictedEditing'] = undefined;

/**
 * The list of extensions of the commented files.
 * @member {Array.<String>} extsWebCommented
 */
FilesSettingsDto.prototype['extsWebCommented'] = undefined;

/**
 * The list of extensions of the template files.
 * @member {Array.<String>} extsWebTemplate
 */
FilesSettingsDto.prototype['extsWebTemplate'] = undefined;

/**
 * The list of extensions of the co-authoring files.
 * @member {Array.<String>} extsCoAuthoring
 */
FilesSettingsDto.prototype['extsCoAuthoring'] = undefined;

/**
 * The list of extensions of the files that must be converted.
 * @member {Array.<String>} extsMustConvert
 */
FilesSettingsDto.prototype['extsMustConvert'] = undefined;

/**
 * The list of the convertible extensions.
 * @member {Object.<String, Array.<String>>} extsConvertible
 */
FilesSettingsDto.prototype['extsConvertible'] = undefined;

/**
 * The list of the uploadable extensions.
 * @member {Array.<String>} extsUploadable
 */
FilesSettingsDto.prototype['extsUploadable'] = undefined;

/**
 * The list of extensions of the archive files.
 * @member {Array.<String>} extsArchive
 */
FilesSettingsDto.prototype['extsArchive'] = undefined;

/**
 * The list of the video extensions.
 * @member {Array.<String>} extsVideo
 */
FilesSettingsDto.prototype['extsVideo'] = undefined;

/**
 * The list of the audio extensions.
 * @member {Array.<String>} extsAudio
 */
FilesSettingsDto.prototype['extsAudio'] = undefined;

/**
 * The list of the image extensions.
 * @member {Array.<String>} extsImage
 */
FilesSettingsDto.prototype['extsImage'] = undefined;

/**
 * The list of the spreadsheet extensions.
 * @member {Array.<String>} extsSpreadsheet
 */
FilesSettingsDto.prototype['extsSpreadsheet'] = undefined;

/**
 * The list of the presentation extensions.
 * @member {Array.<String>} extsPresentation
 */
FilesSettingsDto.prototype['extsPresentation'] = undefined;

/**
 * The list of the text document extensions.
 * @member {Array.<String>} extsDocument
 */
FilesSettingsDto.prototype['extsDocument'] = undefined;

/**
 * The list of the diagram extensions.
 * @member {Array.<String>} extsDiagram
 */
FilesSettingsDto.prototype['extsDiagram'] = undefined;

/**
 * @member {module:models/FilesSettingsDtoInternalFormats} internalFormats
 */
FilesSettingsDto.prototype['internalFormats'] = undefined;

/**
 * The master form extension.
 * @member {String} masterFormExtension
 */
FilesSettingsDto.prototype['masterFormExtension'] = undefined;

/**
 * The URL parameter which specifies the file version.
 * @member {String} paramVersion
 */
FilesSettingsDto.prototype['paramVersion'] = undefined;

/**
 * The URL parameter which specifies the output type of the converted file.
 * @member {String} paramOutType
 */
FilesSettingsDto.prototype['paramOutType'] = undefined;

/**
 * The URL to download a file.
 * @member {String} fileDownloadUrlString
 */
FilesSettingsDto.prototype['fileDownloadUrlString'] = undefined;

/**
 * The URL to the file web viewer.
 * @member {String} fileWebViewerUrlString
 */
FilesSettingsDto.prototype['fileWebViewerUrlString'] = undefined;

/**
 * The external URL to the file web viewer.
 * @member {String} fileWebViewerExternalUrlString
 */
FilesSettingsDto.prototype['fileWebViewerExternalUrlString'] = undefined;

/**
 * The URL to the file web editor.
 * @member {String} fileWebEditorUrlString
 */
FilesSettingsDto.prototype['fileWebEditorUrlString'] = undefined;

/**
 * The external URL to the file web editor.
 * @member {String} fileWebEditorExternalUrlString
 */
FilesSettingsDto.prototype['fileWebEditorExternalUrlString'] = undefined;

/**
 * The redirect URL to the file viewer.
 * @member {String} fileRedirectPreviewUrlString
 */
FilesSettingsDto.prototype['fileRedirectPreviewUrlString'] = undefined;

/**
 * The URL to the file thumbnail.
 * @member {String} fileThumbnailUrlString
 */
FilesSettingsDto.prototype['fileThumbnailUrlString'] = undefined;

/**
 * Specifies whether to confirm the file deletion or not.
 * @member {Boolean} confirmDelete
 */
FilesSettingsDto.prototype['confirmDelete'] = undefined;

/**
 * Specifies whether to allow users to connect the third-party storages.
 * @member {Boolean} enableThirdParty
 */
FilesSettingsDto.prototype['enableThirdParty'] = undefined;

/**
 * Specifies whether to enable sharing external links to the files.
 * @member {Boolean} externalShare
 */
FilesSettingsDto.prototype['externalShare'] = undefined;

/**
 * Specifies whether to enable sharing files on social media.
 * @member {Boolean} externalShareSocialMedia
 */
FilesSettingsDto.prototype['externalShareSocialMedia'] = undefined;

/**
 * Specifies whether to enable storing original files.
 * @member {Boolean} storeOriginalFiles
 */
FilesSettingsDto.prototype['storeOriginalFiles'] = undefined;

/**
 * Specifies whether to keep the new file name.
 * @member {Boolean} keepNewFileName
 */
FilesSettingsDto.prototype['keepNewFileName'] = undefined;

/**
 * Specifies whether to display the file extension.
 * @member {Boolean} displayFileExtension
 */
FilesSettingsDto.prototype['displayFileExtension'] = undefined;

/**
 * Specifies whether to display the conversion notification.
 * @member {Boolean} convertNotify
 */
FilesSettingsDto.prototype['convertNotify'] = undefined;

/**
 * Specifies whether to hide the confirmation dialog for the cancel operation.
 * @member {Boolean} hideConfirmCancelOperation
 */
FilesSettingsDto.prototype['hideConfirmCancelOperation'] = undefined;

/**
 * Specifies whether to hide the confirmation dialog  for saving the file copy in the original format when converting a file.
 * @member {Boolean} hideConfirmConvertSave
 */
FilesSettingsDto.prototype['hideConfirmConvertSave'] = undefined;

/**
 * Specifies whether to hide the confirmation dialog  for opening the conversion result.
 * @member {Boolean} hideConfirmConvertOpen
 */
FilesSettingsDto.prototype['hideConfirmConvertOpen'] = undefined;

/**
 * Specifies whether to hide the confirmation dialog about the file lifetime in the room.
 * @member {Boolean} hideConfirmRoomLifetime
 */
FilesSettingsDto.prototype['hideConfirmRoomLifetime'] = undefined;

/**
 * @member {module:models/OrderBy} defaultOrder
 */
FilesSettingsDto.prototype['defaultOrder'] = undefined;

/**
 * Specifies whether to forcesave the files or not.
 * @member {Boolean} forcesave
 */
FilesSettingsDto.prototype['forcesave'] = undefined;

/**
 * Specifies whether to store the forcesaved file versions or not.
 * @member {Boolean} storeForcesave
 */
FilesSettingsDto.prototype['storeForcesave'] = undefined;

/**
 * Specifies if the \"Recent\" section is displayed or not.
 * @member {Boolean} recentSection
 */
FilesSettingsDto.prototype['recentSection'] = undefined;

/**
 * Specifies if the \"Favorites\" section is displayed or not.
 * @member {Boolean} favoritesSection
 */
FilesSettingsDto.prototype['favoritesSection'] = undefined;

/**
 * Specifies if the \"Templates\" section is displayed or not.
 * @member {Boolean} templatesSection
 */
FilesSettingsDto.prototype['templatesSection'] = undefined;

/**
 * Specifies whether to download the .tar.gz files or not.
 * @member {Boolean} downloadTarGz
 */
FilesSettingsDto.prototype['downloadTarGz'] = undefined;

/**
 * @member {module:models/AutoCleanUpData} automaticallyCleanUp
 */
FilesSettingsDto.prototype['automaticallyCleanUp'] = undefined;

/**
 * Specifies whether the file can be searched by its content or not.
 * @member {Boolean} canSearchByContent
 */
FilesSettingsDto.prototype['canSearchByContent'] = undefined;

/**
 * The default access rights in sharing settings.
 * @member {Array.<module:models/FilesSettingsDto.DefaultSharingAccessRightsEnum>} defaultSharingAccessRights
 */
FilesSettingsDto.prototype['defaultSharingAccessRights'] = undefined;

/**
 * The maximum number of upload threads.
 * @member {Number} maxUploadThreadCount
 */
FilesSettingsDto.prototype['maxUploadThreadCount'] = undefined;

/**
 * The size of a large file that is uploaded in chunks.
 * @member {Number} chunkUploadSize
 */
FilesSettingsDto.prototype['chunkUploadSize'] = undefined;

/**
 * Specifies whether to open the editor in the same tab or not.
 * @member {Boolean} openEditorInSameTab
 */
FilesSettingsDto.prototype['openEditorInSameTab'] = undefined;





/**
 * Allowed values for the <code>defaultSharingAccessRights</code> property.
 * @enum {Number}
 * @readonly
 */
FilesSettingsDto['DefaultSharingAccessRightsEnum'] = {

    /**
     * value: 0
     * @const
     */
    "None": 0,

    /**
     * value: 1
     * @const
     */
    "ReadWrite": 1,

    /**
     * value: 2
     * @const
     */
    "Read": 2,

    /**
     * value: 3
     * @const
     */
    "Restrict": 3,

    /**
     * value: 4
     * @const
     */
    "Varies": 4,

    /**
     * value: 5
     * @const
     */
    "Review": 5,

    /**
     * value: 6
     * @const
     */
    "Comment": 6,

    /**
     * value: 7
     * @const
     */
    "FillForms": 7,

    /**
     * value: 8
     * @const
     */
    "CustomFilter": 8,

    /**
     * value: 9
     * @const
     */
    "RoomManager": 9,

    /**
     * value: 10
     * @const
     */
    "Editing": 10,

    /**
     * value: 11
     * @const
     */
    "ContentCreator": 11
};



export default FilesSettingsDto;

