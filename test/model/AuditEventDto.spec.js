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
    instance = new Api.AuditEventDto();
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

  describe('AuditEventDto', function() {
    it('should create an instance of AuditEventDto', function() {
      // uncomment below and update the code to test AuditEventDto
      //var instance = new Api.AuditEventDto();
      //expect(instance).to.be.a(Api.AuditEventDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Api.AuditEventDto();
      //expect(instance).to.be();
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instance = new Api.AuditEventDto();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instance = new Api.AuditEventDto();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new Api.AuditEventDto();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instance = new Api.AuditEventDto();
      //expect(instance).to.be();
    });

    it('should have the property actionId (base name: "actionId")', function() {
      // uncomment below and update the code to test the property actionId
      //var instance = new Api.AuditEventDto();
      //expect(instance).to.be();
    });

    it('should have the property ip (base name: "ip")', function() {
      // uncomment below and update the code to test the property ip
      //var instance = new Api.AuditEventDto();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new Api.AuditEventDto();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new Api.AuditEventDto();
      //expect(instance).to.be();
    });

    it('should have the property browser (base name: "browser")', function() {
      // uncomment below and update the code to test the property browser
      //var instance = new Api.AuditEventDto();
      //expect(instance).to.be();
    });

    it('should have the property platform (base name: "platform")', function() {
      // uncomment below and update the code to test the property platform
      //var instance = new Api.AuditEventDto();
      //expect(instance).to.be();
    });

    it('should have the property page (base name: "page")', function() {
      // uncomment below and update the code to test the property page
      //var instance = new Api.AuditEventDto();
      //expect(instance).to.be();
    });

    it('should have the property actionType (base name: "actionType")', function() {
      // uncomment below and update the code to test the property actionType
      //var instance = new Api.AuditEventDto();
      //expect(instance).to.be();
    });

    it('should have the property product (base name: "product")', function() {
      // uncomment below and update the code to test the property product
      //var instance = new Api.AuditEventDto();
      //expect(instance).to.be();
    });

    it('should have the property module (base name: "module")', function() {
      // uncomment below and update the code to test the property module
      //var instance = new Api.AuditEventDto();
      //expect(instance).to.be();
    });

    it('should have the property target (base name: "target")', function() {
      // uncomment below and update the code to test the property target
      //var instance = new Api.AuditEventDto();
      //expect(instance).to.be();
    });

    it('should have the property entries (base name: "entries")', function() {
      // uncomment below and update the code to test the property entries
      //var instance = new Api.AuditEventDto();
      //expect(instance).to.be();
    });

    it('should have the property context (base name: "context")', function() {
      // uncomment below and update the code to test the property context
      //var instance = new Api.AuditEventDto();
      //expect(instance).to.be();
    });

  });

}));
