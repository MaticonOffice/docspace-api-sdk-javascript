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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Api);
  }
}(this, function(expect, Api) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Api.FilesSettingsDto();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('FilesSettingsDto', function() {
    it('should create an instance of FilesSettingsDto', function() {
      // uncomment below and update the code to test FilesSettingsDto
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be.a(Api.FilesSettingsDto);
    });

    it('should have the property extsImagePreviewed (base name: "extsImagePreviewed")', function() {
      // uncomment below and update the code to test the property extsImagePreviewed
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property extsMediaPreviewed (base name: "extsMediaPreviewed")', function() {
      // uncomment below and update the code to test the property extsMediaPreviewed
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property extsWebPreviewed (base name: "extsWebPreviewed")', function() {
      // uncomment below and update the code to test the property extsWebPreviewed
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property extsWebEdited (base name: "extsWebEdited")', function() {
      // uncomment below and update the code to test the property extsWebEdited
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property extsWebEncrypt (base name: "extsWebEncrypt")', function() {
      // uncomment below and update the code to test the property extsWebEncrypt
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property extsWebReviewed (base name: "extsWebReviewed")', function() {
      // uncomment below and update the code to test the property extsWebReviewed
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property extsWebCustomFilterEditing (base name: "extsWebCustomFilterEditing")', function() {
      // uncomment below and update the code to test the property extsWebCustomFilterEditing
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property extsWebRestrictedEditing (base name: "extsWebRestrictedEditing")', function() {
      // uncomment below and update the code to test the property extsWebRestrictedEditing
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property extsWebCommented (base name: "extsWebCommented")', function() {
      // uncomment below and update the code to test the property extsWebCommented
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property extsWebTemplate (base name: "extsWebTemplate")', function() {
      // uncomment below and update the code to test the property extsWebTemplate
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property extsCoAuthoring (base name: "extsCoAuthoring")', function() {
      // uncomment below and update the code to test the property extsCoAuthoring
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property extsMustConvert (base name: "extsMustConvert")', function() {
      // uncomment below and update the code to test the property extsMustConvert
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property extsConvertible (base name: "extsConvertible")', function() {
      // uncomment below and update the code to test the property extsConvertible
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property extsUploadable (base name: "extsUploadable")', function() {
      // uncomment below and update the code to test the property extsUploadable
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property extsArchive (base name: "extsArchive")', function() {
      // uncomment below and update the code to test the property extsArchive
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property extsVideo (base name: "extsVideo")', function() {
      // uncomment below and update the code to test the property extsVideo
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property extsAudio (base name: "extsAudio")', function() {
      // uncomment below and update the code to test the property extsAudio
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property extsImage (base name: "extsImage")', function() {
      // uncomment below and update the code to test the property extsImage
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property extsSpreadsheet (base name: "extsSpreadsheet")', function() {
      // uncomment below and update the code to test the property extsSpreadsheet
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property extsPresentation (base name: "extsPresentation")', function() {
      // uncomment below and update the code to test the property extsPresentation
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property extsDocument (base name: "extsDocument")', function() {
      // uncomment below and update the code to test the property extsDocument
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property extsDiagram (base name: "extsDiagram")', function() {
      // uncomment below and update the code to test the property extsDiagram
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property internalFormats (base name: "internalFormats")', function() {
      // uncomment below and update the code to test the property internalFormats
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property masterFormExtension (base name: "masterFormExtension")', function() {
      // uncomment below and update the code to test the property masterFormExtension
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property paramVersion (base name: "paramVersion")', function() {
      // uncomment below and update the code to test the property paramVersion
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property paramOutType (base name: "paramOutType")', function() {
      // uncomment below and update the code to test the property paramOutType
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property fileDownloadUrlString (base name: "fileDownloadUrlString")', function() {
      // uncomment below and update the code to test the property fileDownloadUrlString
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property fileWebViewerUrlString (base name: "fileWebViewerUrlString")', function() {
      // uncomment below and update the code to test the property fileWebViewerUrlString
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property fileWebViewerExternalUrlString (base name: "fileWebViewerExternalUrlString")', function() {
      // uncomment below and update the code to test the property fileWebViewerExternalUrlString
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property fileWebEditorUrlString (base name: "fileWebEditorUrlString")', function() {
      // uncomment below and update the code to test the property fileWebEditorUrlString
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property fileWebEditorExternalUrlString (base name: "fileWebEditorExternalUrlString")', function() {
      // uncomment below and update the code to test the property fileWebEditorExternalUrlString
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property fileRedirectPreviewUrlString (base name: "fileRedirectPreviewUrlString")', function() {
      // uncomment below and update the code to test the property fileRedirectPreviewUrlString
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property fileThumbnailUrlString (base name: "fileThumbnailUrlString")', function() {
      // uncomment below and update the code to test the property fileThumbnailUrlString
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property confirmDelete (base name: "confirmDelete")', function() {
      // uncomment below and update the code to test the property confirmDelete
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property enableThirdParty (base name: "enableThirdParty")', function() {
      // uncomment below and update the code to test the property enableThirdParty
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property externalShare (base name: "externalShare")', function() {
      // uncomment below and update the code to test the property externalShare
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property externalShareSocialMedia (base name: "externalShareSocialMedia")', function() {
      // uncomment below and update the code to test the property externalShareSocialMedia
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property storeOriginalFiles (base name: "storeOriginalFiles")', function() {
      // uncomment below and update the code to test the property storeOriginalFiles
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property keepNewFileName (base name: "keepNewFileName")', function() {
      // uncomment below and update the code to test the property keepNewFileName
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property displayFileExtension (base name: "displayFileExtension")', function() {
      // uncomment below and update the code to test the property displayFileExtension
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property convertNotify (base name: "convertNotify")', function() {
      // uncomment below and update the code to test the property convertNotify
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property hideConfirmCancelOperation (base name: "hideConfirmCancelOperation")', function() {
      // uncomment below and update the code to test the property hideConfirmCancelOperation
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property hideConfirmConvertSave (base name: "hideConfirmConvertSave")', function() {
      // uncomment below and update the code to test the property hideConfirmConvertSave
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property hideConfirmConvertOpen (base name: "hideConfirmConvertOpen")', function() {
      // uncomment below and update the code to test the property hideConfirmConvertOpen
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property hideConfirmRoomLifetime (base name: "hideConfirmRoomLifetime")', function() {
      // uncomment below and update the code to test the property hideConfirmRoomLifetime
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property defaultOrder (base name: "defaultOrder")', function() {
      // uncomment below and update the code to test the property defaultOrder
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property forcesave (base name: "forcesave")', function() {
      // uncomment below and update the code to test the property forcesave
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property storeForcesave (base name: "storeForcesave")', function() {
      // uncomment below and update the code to test the property storeForcesave
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property recentSection (base name: "recentSection")', function() {
      // uncomment below and update the code to test the property recentSection
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property favoritesSection (base name: "favoritesSection")', function() {
      // uncomment below and update the code to test the property favoritesSection
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property templatesSection (base name: "templatesSection")', function() {
      // uncomment below and update the code to test the property templatesSection
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property downloadTarGz (base name: "downloadTarGz")', function() {
      // uncomment below and update the code to test the property downloadTarGz
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property automaticallyCleanUp (base name: "automaticallyCleanUp")', function() {
      // uncomment below and update the code to test the property automaticallyCleanUp
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property canSearchByContent (base name: "canSearchByContent")', function() {
      // uncomment below and update the code to test the property canSearchByContent
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property defaultSharingAccessRights (base name: "defaultSharingAccessRights")', function() {
      // uncomment below and update the code to test the property defaultSharingAccessRights
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property maxUploadThreadCount (base name: "maxUploadThreadCount")', function() {
      // uncomment below and update the code to test the property maxUploadThreadCount
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property chunkUploadSize (base name: "chunkUploadSize")', function() {
      // uncomment below and update the code to test the property chunkUploadSize
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property openEditorInSameTab (base name: "openEditorInSameTab")', function() {
      // uncomment below and update the code to test the property openEditorInSameTab
      //var instance = new Api.FilesSettingsDto();
      //expect(instance).to.be();
    });

  });

}));
