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
    instance = new Api.FilesSettingsApi();
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

  describe('FilesSettingsApi', function() {
    describe('changeAccessToThirdparty', function() {
      it('should call changeAccessToThirdparty successfully', function(done) {
        //uncomment below and update the code to test changeAccessToThirdparty
        //instance.changeAccessToThirdparty(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('changeAutomaticallyCleanUp', function() {
      it('should call changeAutomaticallyCleanUp successfully', function(done) {
        //uncomment below and update the code to test changeAutomaticallyCleanUp
        //instance.changeAutomaticallyCleanUp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('changeDefaultAccessRights', function() {
      it('should call changeDefaultAccessRights successfully', function(done) {
        //uncomment below and update the code to test changeDefaultAccessRights
        //instance.changeDefaultAccessRights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('changeDeleteConfirm', function() {
      it('should call changeDeleteConfirm successfully', function(done) {
        //uncomment below and update the code to test changeDeleteConfirm
        //instance.changeDeleteConfirm(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('changeDownloadZipFromBody', function() {
      it('should call changeDownloadZipFromBody successfully', function(done) {
        //uncomment below and update the code to test changeDownloadZipFromBody
        //instance.changeDownloadZipFromBody(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('checkDocServiceUrl', function() {
      it('should call checkDocServiceUrl successfully', function(done) {
        //uncomment below and update the code to test checkDocServiceUrl
        //instance.checkDocServiceUrl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('displayFileExtension', function() {
      it('should call displayFileExtension successfully', function(done) {
        //uncomment below and update the code to test displayFileExtension
        //instance.displayFileExtension(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('externalShare', function() {
      it('should call externalShare successfully', function(done) {
        //uncomment below and update the code to test externalShare
        //instance.externalShare(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('externalShareSocialMedia', function() {
      it('should call externalShareSocialMedia successfully', function(done) {
        //uncomment below and update the code to test externalShareSocialMedia
        //instance.externalShareSocialMedia(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('forcesave', function() {
      it('should call forcesave successfully', function(done) {
        //uncomment below and update the code to test forcesave
        //instance.forcesave(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAutomaticallyCleanUp', function() {
      it('should call getAutomaticallyCleanUp successfully', function(done) {
        //uncomment below and update the code to test getAutomaticallyCleanUp
        //instance.getAutomaticallyCleanUp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocServiceUrl', function() {
      it('should call getDocServiceUrl successfully', function(done) {
        //uncomment below and update the code to test getDocServiceUrl
        //instance.getDocServiceUrl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFilesModule', function() {
      it('should call getFilesModule successfully', function(done) {
        //uncomment below and update the code to test getFilesModule
        //instance.getFilesModule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFilesSettings', function() {
      it('should call getFilesSettings successfully', function(done) {
        //uncomment below and update the code to test getFilesSettings
        //instance.getFilesSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('hideConfirmCancelOperation', function() {
      it('should call hideConfirmCancelOperation successfully', function(done) {
        //uncomment below and update the code to test hideConfirmCancelOperation
        //instance.hideConfirmCancelOperation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('hideConfirmConvert', function() {
      it('should call hideConfirmConvert successfully', function(done) {
        //uncomment below and update the code to test hideConfirmConvert
        //instance.hideConfirmConvert(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('hideConfirmRoomLifetime', function() {
      it('should call hideConfirmRoomLifetime successfully', function(done) {
        //uncomment below and update the code to test hideConfirmRoomLifetime
        //instance.hideConfirmRoomLifetime(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('isAvailablePrivacyRoomSettings', function() {
      it('should call isAvailablePrivacyRoomSettings successfully', function(done) {
        //uncomment below and update the code to test isAvailablePrivacyRoomSettings
        //instance.isAvailablePrivacyRoomSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('keepNewFileName', function() {
      it('should call keepNewFileName successfully', function(done) {
        //uncomment below and update the code to test keepNewFileName
        //instance.keepNewFileName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setOpenEditorInSameTab', function() {
      it('should call setOpenEditorInSameTab successfully', function(done) {
        //uncomment below and update the code to test setOpenEditorInSameTab
        //instance.setOpenEditorInSameTab(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('storeForcesave', function() {
      it('should call storeForcesave successfully', function(done) {
        //uncomment below and update the code to test storeForcesave
        //instance.storeForcesave(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('storeOriginal', function() {
      it('should call storeOriginal successfully', function(done) {
        //uncomment below and update the code to test storeOriginal
        //instance.storeOriginal(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateFileIfExist', function() {
      it('should call updateFileIfExist successfully', function(done) {
        //uncomment below and update the code to test updateFileIfExist
        //instance.updateFileIfExist(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
