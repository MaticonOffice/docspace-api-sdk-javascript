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
    instance = new Api.FilesThirdPartyIntegrationApi();
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

  describe('FilesThirdPartyIntegrationApi', function() {
    describe('deleteThirdParty', function() {
      it('should call deleteThirdParty successfully', function(done) {
        //uncomment below and update the code to test deleteThirdParty
        //instance.deleteThirdParty(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllProviders', function() {
      it('should call getAllProviders successfully', function(done) {
        //uncomment below and update the code to test getAllProviders
        //instance.getAllProviders(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBackupThirdPartyAccount', function() {
      it('should call getBackupThirdPartyAccount successfully', function(done) {
        //uncomment below and update the code to test getBackupThirdPartyAccount
        //instance.getBackupThirdPartyAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCapabilities', function() {
      it('should call getCapabilities successfully', function(done) {
        //uncomment below and update the code to test getCapabilities
        //instance.getCapabilities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCommonThirdPartyFolders', function() {
      it('should call getCommonThirdPartyFolders successfully', function(done) {
        //uncomment below and update the code to test getCommonThirdPartyFolders
        //instance.getCommonThirdPartyFolders(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getThirdPartyAccounts', function() {
      it('should call getThirdPartyAccounts successfully', function(done) {
        //uncomment below and update the code to test getThirdPartyAccounts
        //instance.getThirdPartyAccounts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveThirdParty', function() {
      it('should call saveThirdParty successfully', function(done) {
        //uncomment below and update the code to test saveThirdParty
        //instance.saveThirdParty(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveThirdPartyBackup', function() {
      it('should call saveThirdPartyBackup successfully', function(done) {
        //uncomment below and update the code to test saveThirdPartyBackup
        //instance.saveThirdPartyBackup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
