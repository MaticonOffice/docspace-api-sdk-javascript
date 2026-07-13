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
    instance = new Api.FilesFoldersApi();
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

  describe('FilesFoldersApi', function() {
    describe('checkUpload', function() {
      it('should call checkUpload successfully', function(done) {
        //uncomment below and update the code to test checkUpload
        //instance.checkUpload(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createFolder', function() {
      it('should call createFolder successfully', function(done) {
        //uncomment below and update the code to test createFolder
        //instance.createFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFolder', function() {
      it('should call deleteFolder successfully', function(done) {
        //uncomment below and update the code to test deleteFolder
        //instance.deleteFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFilesUsedSpace', function() {
      it('should call getFilesUsedSpace successfully', function(done) {
        //uncomment below and update the code to test getFilesUsedSpace
        //instance.getFilesUsedSpace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFolder', function() {
      it('should call getFolder successfully', function(done) {
        //uncomment below and update the code to test getFolder
        //instance.getFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFolderByFolderId', function() {
      it('should call getFolderByFolderId successfully', function(done) {
        //uncomment below and update the code to test getFolderByFolderId
        //instance.getFolderByFolderId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFolderHistory', function() {
      it('should call getFolderHistory successfully', function(done) {
        //uncomment below and update the code to test getFolderHistory
        //instance.getFolderHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFolderInfo', function() {
      it('should call getFolderInfo successfully', function(done) {
        //uncomment below and update the code to test getFolderInfo
        //instance.getFolderInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFolderPath', function() {
      it('should call getFolderPath successfully', function(done) {
        //uncomment below and update the code to test getFolderPath
        //instance.getFolderPath(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFolderPrimaryExternalLink', function() {
      it('should call getFolderPrimaryExternalLink successfully', function(done) {
        //uncomment below and update the code to test getFolderPrimaryExternalLink
        //instance.getFolderPrimaryExternalLink(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFolders', function() {
      it('should call getFolders successfully', function(done) {
        //uncomment below and update the code to test getFolders
        //instance.getFolders(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMyFolder', function() {
      it('should call getMyFolder successfully', function(done) {
        //uncomment below and update the code to test getMyFolder
        //instance.getMyFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNewFolderItems', function() {
      it('should call getNewFolderItems successfully', function(done) {
        //uncomment below and update the code to test getNewFolderItems
        //instance.getNewFolderItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPrivacyFolder', function() {
      it('should call getPrivacyFolder successfully', function(done) {
        //uncomment below and update the code to test getPrivacyFolder
        //instance.getPrivacyFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRootFolders', function() {
      it('should call getRootFolders successfully', function(done) {
        //uncomment below and update the code to test getRootFolders
        //instance.getRootFolders(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTrashFolder', function() {
      it('should call getTrashFolder successfully', function(done) {
        //uncomment below and update the code to test getTrashFolder
        //instance.getTrashFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('insertFile', function() {
      it('should call insertFile successfully', function(done) {
        //uncomment below and update the code to test insertFile
        //instance.insertFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('insertFileToMyFromBody', function() {
      it('should call insertFileToMyFromBody successfully', function(done) {
        //uncomment below and update the code to test insertFileToMyFromBody
        //instance.insertFileToMyFromBody(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('renameFolder', function() {
      it('should call renameFolder successfully', function(done) {
        //uncomment below and update the code to test renameFolder
        //instance.renameFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setFolderOrder', function() {
      it('should call setFolderOrder successfully', function(done) {
        //uncomment below and update the code to test setFolderOrder
        //instance.setFolderOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadFile', function() {
      it('should call uploadFile successfully', function(done) {
        //uncomment below and update the code to test uploadFile
        //instance.uploadFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadFileToMy', function() {
      it('should call uploadFileToMy successfully', function(done) {
        //uncomment below and update the code to test uploadFileToMy
        //instance.uploadFileToMy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
