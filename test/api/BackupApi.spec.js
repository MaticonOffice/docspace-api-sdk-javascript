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
    instance = new Api.BackupApi();
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

  describe('BackupApi', function() {
    describe('createBackupSchedule', function() {
      it('should call createBackupSchedule successfully', function(done) {
        //uncomment below and update the code to test createBackupSchedule
        //instance.createBackupSchedule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBackup', function() {
      it('should call deleteBackup successfully', function(done) {
        //uncomment below and update the code to test deleteBackup
        //instance.deleteBackup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBackupHistory', function() {
      it('should call deleteBackupHistory successfully', function(done) {
        //uncomment below and update the code to test deleteBackupHistory
        //instance.deleteBackupHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBackupSchedule', function() {
      it('should call deleteBackupSchedule successfully', function(done) {
        //uncomment below and update the code to test deleteBackupSchedule
        //instance.deleteBackupSchedule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBackupHistory', function() {
      it('should call getBackupHistory successfully', function(done) {
        //uncomment below and update the code to test getBackupHistory
        //instance.getBackupHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBackupProgress', function() {
      it('should call getBackupProgress successfully', function(done) {
        //uncomment below and update the code to test getBackupProgress
        //instance.getBackupProgress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBackupSchedule', function() {
      it('should call getBackupSchedule successfully', function(done) {
        //uncomment below and update the code to test getBackupSchedule
        //instance.getBackupSchedule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRestoreProgress', function() {
      it('should call getRestoreProgress successfully', function(done) {
        //uncomment below and update the code to test getRestoreProgress
        //instance.getRestoreProgress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startBackup', function() {
      it('should call startBackup successfully', function(done) {
        //uncomment below and update the code to test startBackup
        //instance.startBackup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startBackupRestore', function() {
      it('should call startBackupRestore successfully', function(done) {
        //uncomment below and update the code to test startBackupRestore
        //instance.startBackupRestore(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
