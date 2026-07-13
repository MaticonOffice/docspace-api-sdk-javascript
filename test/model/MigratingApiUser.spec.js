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
    instance = new Api.MigratingApiUser();
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

  describe('MigratingApiUser', function() {
    it('should create an instance of MigratingApiUser', function() {
      // uncomment below and update the code to test MigratingApiUser
      //var instance = new Api.MigratingApiUser();
      //expect(instance).to.be.a(Api.MigratingApiUser);
    });

    it('should have the property shouldImport (base name: "shouldImport")', function() {
      // uncomment below and update the code to test the property shouldImport
      //var instance = new Api.MigratingApiUser();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new Api.MigratingApiUser();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new Api.MigratingApiUser();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "displayName")', function() {
      // uncomment below and update the code to test the property displayName
      //var instance = new Api.MigratingApiUser();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new Api.MigratingApiUser();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new Api.MigratingApiUser();
      //expect(instance).to.be();
    });

    it('should have the property userType (base name: "userType")', function() {
      // uncomment below and update the code to test the property userType
      //var instance = new Api.MigratingApiUser();
      //expect(instance).to.be();
    });

    it('should have the property migratingFiles (base name: "migratingFiles")', function() {
      // uncomment below and update the code to test the property migratingFiles
      //var instance = new Api.MigratingApiUser();
      //expect(instance).to.be();
    });

  });

}));
