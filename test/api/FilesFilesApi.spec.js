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
    instance = new Api.FilesFilesApi();
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

  describe('FilesFilesApi', function() {
    describe('addTemplates', function() {
      it('should call addTemplates successfully', function(done) {
        //uncomment below and update the code to test addTemplates
        //instance.addTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('changeVersionHistory', function() {
      it('should call changeVersionHistory successfully', function(done) {
        //uncomment below and update the code to test changeVersionHistory
        //instance.changeVersionHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('checkFillFormDraft', function() {
      it('should call checkFillFormDraft successfully', function(done) {
        //uncomment below and update the code to test checkFillFormDraft
        //instance.checkFillFormDraft(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('copyFileAs', function() {
      it('should call copyFileAs successfully', function(done) {
        //uncomment below and update the code to test copyFileAs
        //instance.copyFileAs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createEditSession', function() {
      it('should call createEditSession successfully', function(done) {
        //uncomment below and update the code to test createEditSession
        //instance.createEditSession(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createFile', function() {
      it('should call createFile successfully', function(done) {
        //uncomment below and update the code to test createFile
        //instance.createFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createFileInMyDocuments', function() {
      it('should call createFileInMyDocuments successfully', function(done) {
        //uncomment below and update the code to test createFileInMyDocuments
        //instance.createFileInMyDocuments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createHtmlFile', function() {
      it('should call createHtmlFile successfully', function(done) {
        //uncomment below and update the code to test createHtmlFile
        //instance.createHtmlFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createHtmlFileInMyDocuments', function() {
      it('should call createHtmlFileInMyDocuments successfully', function(done) {
        //uncomment below and update the code to test createHtmlFileInMyDocuments
        //instance.createHtmlFileInMyDocuments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createPrimaryExternalLink', function() {
      it('should call createPrimaryExternalLink successfully', function(done) {
        //uncomment below and update the code to test createPrimaryExternalLink
        //instance.createPrimaryExternalLink(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createTextFile', function() {
      it('should call createTextFile successfully', function(done) {
        //uncomment below and update the code to test createTextFile
        //instance.createTextFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createTextFileInMyDocuments', function() {
      it('should call createTextFileInMyDocuments successfully', function(done) {
        //uncomment below and update the code to test createTextFileInMyDocuments
        //instance.createTextFileInMyDocuments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createThumbnails', function() {
      it('should call createThumbnails successfully', function(done) {
        //uncomment below and update the code to test createThumbnails
        //instance.createThumbnails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFile', function() {
      it('should call deleteFile successfully', function(done) {
        //uncomment below and update the code to test deleteFile
        //instance.deleteFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRecent', function() {
      it('should call deleteRecent successfully', function(done) {
        //uncomment below and update the code to test deleteRecent
        //instance.deleteRecent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTemplates', function() {
      it('should call deleteTemplates successfully', function(done) {
        //uncomment below and update the code to test deleteTemplates
        //instance.deleteTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllFormRoles', function() {
      it('should call getAllFormRoles successfully', function(done) {
        //uncomment below and update the code to test getAllFormRoles
        //instance.getAllFormRoles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEditDiffUrl', function() {
      it('should call getEditDiffUrl successfully', function(done) {
        //uncomment below and update the code to test getEditDiffUrl
        //instance.getEditDiffUrl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEditHistory', function() {
      it('should call getEditHistory successfully', function(done) {
        //uncomment below and update the code to test getEditHistory
        //instance.getEditHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFileHistory', function() {
      it('should call getFileHistory successfully', function(done) {
        //uncomment below and update the code to test getFileHistory
        //instance.getFileHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFileInfo', function() {
      it('should call getFileInfo successfully', function(done) {
        //uncomment below and update the code to test getFileInfo
        //instance.getFileInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFileLinks', function() {
      it('should call getFileLinks successfully', function(done) {
        //uncomment below and update the code to test getFileLinks
        //instance.getFileLinks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFilePrimaryExternalLink', function() {
      it('should call getFilePrimaryExternalLink successfully', function(done) {
        //uncomment below and update the code to test getFilePrimaryExternalLink
        //instance.getFilePrimaryExternalLink(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFileVersionInfo', function() {
      it('should call getFileVersionInfo successfully', function(done) {
        //uncomment below and update the code to test getFileVersionInfo
        //instance.getFileVersionInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFillResult', function() {
      it('should call getFillResult successfully', function(done) {
        //uncomment below and update the code to test getFillResult
        //instance.getFillResult(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPresignedFileUri', function() {
      it('should call getPresignedFileUri successfully', function(done) {
        //uncomment below and update the code to test getPresignedFileUri
        //instance.getPresignedFileUri(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPresignedUri', function() {
      it('should call getPresignedUri successfully', function(done) {
        //uncomment below and update the code to test getPresignedUri
        //instance.getPresignedUri(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProtectedFileUsers', function() {
      it('should call getProtectedFileUsers successfully', function(done) {
        //uncomment below and update the code to test getProtectedFileUsers
        //instance.getProtectedFileUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getReferenceData', function() {
      it('should call getReferenceData successfully', function(done) {
        //uncomment below and update the code to test getReferenceData
        //instance.getReferenceData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('isFormPDF', function() {
      it('should call isFormPDF successfully', function(done) {
        //uncomment below and update the code to test isFormPDF
        //instance.isFormPDF(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('lockFile', function() {
      it('should call lockFile successfully', function(done) {
        //uncomment below and update the code to test lockFile
        //instance.lockFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('manageFormFilling', function() {
      it('should call manageFormFilling successfully', function(done) {
        //uncomment below and update the code to test manageFormFilling
        //instance.manageFormFilling(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('openEditFile', function() {
      it('should call openEditFile successfully', function(done) {
        //uncomment below and update the code to test openEditFile
        //instance.openEditFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('restoreFileVersion', function() {
      it('should call restoreFileVersion successfully', function(done) {
        //uncomment below and update the code to test restoreFileVersion
        //instance.restoreFileVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveEditingFileFromForm', function() {
      it('should call saveEditingFileFromForm successfully', function(done) {
        //uncomment below and update the code to test saveEditingFileFromForm
        //instance.saveEditingFileFromForm(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveFileAsPdf', function() {
      it('should call saveFileAsPdf successfully', function(done) {
        //uncomment below and update the code to test saveFileAsPdf
        //instance.saveFileAsPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveFormRoleMapping', function() {
      it('should call saveFormRoleMapping successfully', function(done) {
        //uncomment below and update the code to test saveFormRoleMapping
        //instance.saveFormRoleMapping(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setCustomFilterTag', function() {
      it('should call setCustomFilterTag successfully', function(done) {
        //uncomment below and update the code to test setCustomFilterTag
        //instance.setCustomFilterTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setExternalLink', function() {
      it('should call setExternalLink successfully', function(done) {
        //uncomment below and update the code to test setExternalLink
        //instance.setExternalLink(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setFileOrder', function() {
      it('should call setFileOrder successfully', function(done) {
        //uncomment below and update the code to test setFileOrder
        //instance.setFileOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setFilesOrder', function() {
      it('should call setFilesOrder successfully', function(done) {
        //uncomment below and update the code to test setFilesOrder
        //instance.setFilesOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startEditFile', function() {
      it('should call startEditFile successfully', function(done) {
        //uncomment below and update the code to test startEditFile
        //instance.startEditFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startFillingFile', function() {
      it('should call startFillingFile successfully', function(done) {
        //uncomment below and update the code to test startFillingFile
        //instance.startFillingFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('trackEditFile', function() {
      it('should call trackEditFile successfully', function(done) {
        //uncomment below and update the code to test trackEditFile
        //instance.trackEditFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateFile', function() {
      it('should call updateFile successfully', function(done) {
        //uncomment below and update the code to test updateFile
        //instance.updateFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
