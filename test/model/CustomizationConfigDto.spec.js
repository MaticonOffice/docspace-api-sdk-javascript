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
    instance = new Api.CustomizationConfigDto();
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

  describe('CustomizationConfigDto', function() {
    it('should create an instance of CustomizationConfigDto', function() {
      // uncomment below and update the code to test CustomizationConfigDto
      //var instance = new Api.CustomizationConfigDto();
      //expect(instance).to.be.a(Api.CustomizationConfigDto);
    });

    it('should have the property about (base name: "about")', function() {
      // uncomment below and update the code to test the property about
      //var instance = new Api.CustomizationConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property customer (base name: "customer")', function() {
      // uncomment below and update the code to test the property customer
      //var instance = new Api.CustomizationConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property anonymous (base name: "anonymous")', function() {
      // uncomment below and update the code to test the property anonymous
      //var instance = new Api.CustomizationConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property feedback (base name: "feedback")', function() {
      // uncomment below and update the code to test the property feedback
      //var instance = new Api.CustomizationConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property forcesave (base name: "forcesave")', function() {
      // uncomment below and update the code to test the property forcesave
      //var instance = new Api.CustomizationConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property goback (base name: "goback")', function() {
      // uncomment below and update the code to test the property goback
      //var instance = new Api.CustomizationConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property review (base name: "review")', function() {
      // uncomment below and update the code to test the property review
      //var instance = new Api.CustomizationConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instance = new Api.CustomizationConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property mentionShare (base name: "mentionShare")', function() {
      // uncomment below and update the code to test the property mentionShare
      //var instance = new Api.CustomizationConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property submitForm (base name: "submitForm")', function() {
      // uncomment below and update the code to test the property submitForm
      //var instance = new Api.CustomizationConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property startFillingForm (base name: "startFillingForm")', function() {
      // uncomment below and update the code to test the property startFillingForm
      //var instance = new Api.CustomizationConfigDto();
      //expect(instance).to.be();
    });

  });

}));
