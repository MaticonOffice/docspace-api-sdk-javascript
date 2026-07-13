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
    instance = new Api.PermissionsConfig();
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

  describe('PermissionsConfig', function() {
    it('should create an instance of PermissionsConfig', function() {
      // uncomment below and update the code to test PermissionsConfig
      //var instance = new Api.PermissionsConfig();
      //expect(instance).to.be.a(Api.PermissionsConfig);
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instance = new Api.PermissionsConfig();
      //expect(instance).to.be();
    });

    it('should have the property chat (base name: "chat")', function() {
      // uncomment below and update the code to test the property chat
      //var instance = new Api.PermissionsConfig();
      //expect(instance).to.be();
    });

    it('should have the property download (base name: "download")', function() {
      // uncomment below and update the code to test the property download
      //var instance = new Api.PermissionsConfig();
      //expect(instance).to.be();
    });

    it('should have the property edit (base name: "edit")', function() {
      // uncomment below and update the code to test the property edit
      //var instance = new Api.PermissionsConfig();
      //expect(instance).to.be();
    });

    it('should have the property fillForms (base name: "fillForms")', function() {
      // uncomment below and update the code to test the property fillForms
      //var instance = new Api.PermissionsConfig();
      //expect(instance).to.be();
    });

    it('should have the property modifyFilter (base name: "modifyFilter")', function() {
      // uncomment below and update the code to test the property modifyFilter
      //var instance = new Api.PermissionsConfig();
      //expect(instance).to.be();
    });

    it('should have the property protect (base name: "protect")', function() {
      // uncomment below and update the code to test the property protect
      //var instance = new Api.PermissionsConfig();
      //expect(instance).to.be();
    });

    it('should have the property print (base name: "print")', function() {
      // uncomment below and update the code to test the property print
      //var instance = new Api.PermissionsConfig();
      //expect(instance).to.be();
    });

    it('should have the property rename (base name: "rename")', function() {
      // uncomment below and update the code to test the property rename
      //var instance = new Api.PermissionsConfig();
      //expect(instance).to.be();
    });

    it('should have the property review (base name: "review")', function() {
      // uncomment below and update the code to test the property review
      //var instance = new Api.PermissionsConfig();
      //expect(instance).to.be();
    });

    it('should have the property copy (base name: "copy")', function() {
      // uncomment below and update the code to test the property copy
      //var instance = new Api.PermissionsConfig();
      //expect(instance).to.be();
    });

  });

}));
