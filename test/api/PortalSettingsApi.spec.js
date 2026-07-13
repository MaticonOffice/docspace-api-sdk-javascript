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
    instance = new Api.PortalSettingsApi();
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

  describe('PortalSettingsApi', function() {
    describe('continuePortal', function() {
      it('should call continuePortal successfully', function(done) {
        //uncomment below and update the code to test continuePortal
        //instance.continuePortal(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePortal', function() {
      it('should call deletePortal successfully', function(done) {
        //uncomment below and update the code to test deletePortal
        //instance.deletePortal(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPortalInformation', function() {
      it('should call getPortalInformation successfully', function(done) {
        //uncomment below and update the code to test getPortalInformation
        //instance.getPortalInformation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPortalPath', function() {
      it('should call getPortalPath successfully', function(done) {
        //uncomment below and update the code to test getPortalPath
        //instance.getPortalPath(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendDeleteInstructions', function() {
      it('should call sendDeleteInstructions successfully', function(done) {
        //uncomment below and update the code to test sendDeleteInstructions
        //instance.sendDeleteInstructions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendSuspendInstructions', function() {
      it('should call sendSuspendInstructions successfully', function(done) {
        //uncomment below and update the code to test sendSuspendInstructions
        //instance.sendSuspendInstructions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('suspendPortal', function() {
      it('should call suspendPortal successfully', function(done) {
        //uncomment below and update the code to test suspendPortal
        //instance.suspendPortal(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
