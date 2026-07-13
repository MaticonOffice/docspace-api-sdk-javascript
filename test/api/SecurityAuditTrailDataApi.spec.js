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
    instance = new Api.SecurityAuditTrailDataApi();
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

  describe('SecurityAuditTrailDataApi', function() {
    describe('createAuditTrailReport', function() {
      it('should call createAuditTrailReport successfully', function(done) {
        //uncomment below and update the code to test createAuditTrailReport
        //instance.createAuditTrailReport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAuditEventsByFilter', function() {
      it('should call getAuditEventsByFilter successfully', function(done) {
        //uncomment below and update the code to test getAuditEventsByFilter
        //instance.getAuditEventsByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAuditSettings', function() {
      it('should call getAuditSettings successfully', function(done) {
        //uncomment below and update the code to test getAuditSettings
        //instance.getAuditSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAuditTrailMappers', function() {
      it('should call getAuditTrailMappers successfully', function(done) {
        //uncomment below and update the code to test getAuditTrailMappers
        //instance.getAuditTrailMappers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAuditTrailTypes', function() {
      it('should call getAuditTrailTypes successfully', function(done) {
        //uncomment below and update the code to test getAuditTrailTypes
        //instance.getAuditTrailTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLastAuditEvents', function() {
      it('should call getLastAuditEvents successfully', function(done) {
        //uncomment below and update the code to test getLastAuditEvents
        //instance.getLastAuditEvents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setAuditSettings', function() {
      it('should call setAuditSettings successfully', function(done) {
        //uncomment below and update the code to test setAuditSettings
        //instance.setAuditSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
