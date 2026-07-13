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
    instance = new Api.FilesOperationsApi();
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

  describe('FilesOperationsApi', function() {
    describe('bulkDownload', function() {
      it('should call bulkDownload successfully', function(done) {
        //uncomment below and update the code to test bulkDownload
        //instance.bulkDownload(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('checkConversionStatus', function() {
      it('should call checkConversionStatus successfully', function(done) {
        //uncomment below and update the code to test checkConversionStatus
        //instance.checkConversionStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('checkMoveOrCopyBatchItems', function() {
      it('should call checkMoveOrCopyBatchItems successfully', function(done) {
        //uncomment below and update the code to test checkMoveOrCopyBatchItems
        //instance.checkMoveOrCopyBatchItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('checkMoveOrCopyDestFolder', function() {
      it('should call checkMoveOrCopyDestFolder successfully', function(done) {
        //uncomment below and update the code to test checkMoveOrCopyDestFolder
        //instance.checkMoveOrCopyDestFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('copyBatchItems', function() {
      it('should call copyBatchItems successfully', function(done) {
        //uncomment below and update the code to test copyBatchItems
        //instance.copyBatchItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createUploadSession', function() {
      it('should call createUploadSession successfully', function(done) {
        //uncomment below and update the code to test createUploadSession
        //instance.createUploadSession(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBatchItems', function() {
      it('should call deleteBatchItems successfully', function(done) {
        //uncomment below and update the code to test deleteBatchItems
        //instance.deleteBatchItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFileVersions', function() {
      it('should call deleteFileVersions successfully', function(done) {
        //uncomment below and update the code to test deleteFileVersions
        //instance.deleteFileVersions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('duplicateBatchItems', function() {
      it('should call duplicateBatchItems successfully', function(done) {
        //uncomment below and update the code to test duplicateBatchItems
        //instance.duplicateBatchItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('emptyTrash', function() {
      it('should call emptyTrash successfully', function(done) {
        //uncomment below and update the code to test emptyTrash
        //instance.emptyTrash(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOperationStatuses', function() {
      it('should call getOperationStatuses successfully', function(done) {
        //uncomment below and update the code to test getOperationStatuses
        //instance.getOperationStatuses(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOperationStatusesByType', function() {
      it('should call getOperationStatusesByType successfully', function(done) {
        //uncomment below and update the code to test getOperationStatusesByType
        //instance.getOperationStatusesByType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('markAsRead', function() {
      it('should call markAsRead successfully', function(done) {
        //uncomment below and update the code to test markAsRead
        //instance.markAsRead(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('moveBatchItems', function() {
      it('should call moveBatchItems successfully', function(done) {
        //uncomment below and update the code to test moveBatchItems
        //instance.moveBatchItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startFileConversion', function() {
      it('should call startFileConversion successfully', function(done) {
        //uncomment below and update the code to test startFileConversion
        //instance.startFileConversion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('terminateTasks', function() {
      it('should call terminateTasks successfully', function(done) {
        //uncomment below and update the code to test terminateTasks
        //instance.terminateTasks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateFileComment', function() {
      it('should call updateFileComment successfully', function(done) {
        //uncomment below and update the code to test updateFileComment
        //instance.updateFileComment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
