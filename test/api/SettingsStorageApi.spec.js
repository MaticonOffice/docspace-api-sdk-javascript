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
    instance = new Api.SettingsStorageApi();
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

  describe('SettingsStorageApi', function() {
    describe('getAllBackupStorages', function() {
      it('should call getAllBackupStorages successfully', function(done) {
        //uncomment below and update the code to test getAllBackupStorages
        //instance.getAllBackupStorages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllCdnStorages', function() {
      it('should call getAllCdnStorages successfully', function(done) {
        //uncomment below and update the code to test getAllCdnStorages
        //instance.getAllCdnStorages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllStorages', function() {
      it('should call getAllStorages successfully', function(done) {
        //uncomment below and update the code to test getAllStorages
        //instance.getAllStorages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAmazonS3Regions', function() {
      it('should call getAmazonS3Regions successfully', function(done) {
        //uncomment below and update the code to test getAmazonS3Regions
        //instance.getAmazonS3Regions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStorageProgress', function() {
      it('should call getStorageProgress successfully', function(done) {
        //uncomment below and update the code to test getStorageProgress
        //instance.getStorageProgress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('resetCdnToDefault', function() {
      it('should call resetCdnToDefault successfully', function(done) {
        //uncomment below and update the code to test resetCdnToDefault
        //instance.resetCdnToDefault(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('resetStorageToDefault', function() {
      it('should call resetStorageToDefault successfully', function(done) {
        //uncomment below and update the code to test resetStorageToDefault
        //instance.resetStorageToDefault(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCdnStorage', function() {
      it('should call updateCdnStorage successfully', function(done) {
        //uncomment below and update the code to test updateCdnStorage
        //instance.updateCdnStorage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateStorage', function() {
      it('should call updateStorage successfully', function(done) {
        //uncomment below and update the code to test updateStorage
        //instance.updateStorage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
