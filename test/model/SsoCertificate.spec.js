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
    instance = new Api.SsoCertificate();
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

  describe('SsoCertificate', function() {
    it('should create an instance of SsoCertificate', function() {
      // uncomment below and update the code to test SsoCertificate
      //var instance = new Api.SsoCertificate();
      //expect(instance).to.be.a(Api.SsoCertificate);
    });

    it('should have the property selfSigned (base name: "selfSigned")', function() {
      // uncomment below and update the code to test the property selfSigned
      //var instance = new Api.SsoCertificate();
      //expect(instance).to.be();
    });

    it('should have the property crt (base name: "crt")', function() {
      // uncomment below and update the code to test the property crt
      //var instance = new Api.SsoCertificate();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new Api.SsoCertificate();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instance = new Api.SsoCertificate();
      //expect(instance).to.be();
    });

    it('should have the property domainName (base name: "domainName")', function() {
      // uncomment below and update the code to test the property domainName
      //var instance = new Api.SsoCertificate();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "startDate")', function() {
      // uncomment below and update the code to test the property startDate
      //var instance = new Api.SsoCertificate();
      //expect(instance).to.be();
    });

    it('should have the property expiredDate (base name: "expiredDate")', function() {
      // uncomment below and update the code to test the property expiredDate
      //var instance = new Api.SsoCertificate();
      //expect(instance).to.be();
    });

  });

}));
