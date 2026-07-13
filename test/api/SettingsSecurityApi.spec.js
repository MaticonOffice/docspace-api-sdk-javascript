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
    instance = new Api.SettingsSecurityApi();
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

  describe('SettingsSecurityApi', function() {
    describe('getEnabledModules', function() {
      it('should call getEnabledModules successfully', function(done) {
        //uncomment below and update the code to test getEnabledModules
        //instance.getEnabledModules(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIsProductAdministrator', function() {
      it('should call getIsProductAdministrator successfully', function(done) {
        //uncomment below and update the code to test getIsProductAdministrator
        //instance.getIsProductAdministrator(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPasswordSettings', function() {
      it('should call getPasswordSettings successfully', function(done) {
        //uncomment below and update the code to test getPasswordSettings
        //instance.getPasswordSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductAdministrators', function() {
      it('should call getProductAdministrators successfully', function(done) {
        //uncomment below and update the code to test getProductAdministrators
        //instance.getProductAdministrators(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWebItemSecurityInfo', function() {
      it('should call getWebItemSecurityInfo successfully', function(done) {
        //uncomment below and update the code to test getWebItemSecurityInfo
        //instance.getWebItemSecurityInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWebItemSettingsSecurityInfo', function() {
      it('should call getWebItemSettingsSecurityInfo successfully', function(done) {
        //uncomment below and update the code to test getWebItemSettingsSecurityInfo
        //instance.getWebItemSettingsSecurityInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setAccessToWebItems', function() {
      it('should call setAccessToWebItems successfully', function(done) {
        //uncomment below and update the code to test setAccessToWebItems
        //instance.setAccessToWebItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setProductAdministrator', function() {
      it('should call setProductAdministrator successfully', function(done) {
        //uncomment below and update the code to test setProductAdministrator
        //instance.setProductAdministrator(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setWebItemSecurity', function() {
      it('should call setWebItemSecurity successfully', function(done) {
        //uncomment below and update the code to test setWebItemSecurity
        //instance.setWebItemSecurity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePasswordSettings', function() {
      it('should call updatePasswordSettings successfully', function(done) {
        //uncomment below and update the code to test updatePasswordSettings
        //instance.updatePasswordSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
