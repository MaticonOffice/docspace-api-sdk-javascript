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
    instance = new Api.MigrationApiInfo();
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

  describe('MigrationApiInfo', function() {
    it('should create an instance of MigrationApiInfo', function() {
      // uncomment below and update the code to test MigrationApiInfo
      //var instance = new Api.MigrationApiInfo();
      //expect(instance).to.be.a(Api.MigrationApiInfo);
    });

    it('should have the property migratorName (base name: "migratorName")', function() {
      // uncomment below and update the code to test the property migratorName
      //var instance = new Api.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property operation (base name: "operation")', function() {
      // uncomment below and update the code to test the property operation
      //var instance = new Api.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property failedArchives (base name: "failedArchives")', function() {
      // uncomment below and update the code to test the property failedArchives
      //var instance = new Api.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property users (base name: "users")', function() {
      // uncomment below and update the code to test the property users
      //var instance = new Api.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property withoutEmailUsers (base name: "withoutEmailUsers")', function() {
      // uncomment below and update the code to test the property withoutEmailUsers
      //var instance = new Api.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property existUsers (base name: "existUsers")', function() {
      // uncomment below and update the code to test the property existUsers
      //var instance = new Api.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instance = new Api.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property importPersonalFiles (base name: "importPersonalFiles")', function() {
      // uncomment below and update the code to test the property importPersonalFiles
      //var instance = new Api.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property importSharedFiles (base name: "importSharedFiles")', function() {
      // uncomment below and update the code to test the property importSharedFiles
      //var instance = new Api.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property importSharedFolders (base name: "importSharedFolders")', function() {
      // uncomment below and update the code to test the property importSharedFolders
      //var instance = new Api.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property importCommonFiles (base name: "importCommonFiles")', function() {
      // uncomment below and update the code to test the property importCommonFiles
      //var instance = new Api.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property importProjectFiles (base name: "importProjectFiles")', function() {
      // uncomment below and update the code to test the property importProjectFiles
      //var instance = new Api.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property importGroups (base name: "importGroups")', function() {
      // uncomment below and update the code to test the property importGroups
      //var instance = new Api.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property successedUsers (base name: "successedUsers")', function() {
      // uncomment below and update the code to test the property successedUsers
      //var instance = new Api.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property failedUsers (base name: "failedUsers")', function() {
      // uncomment below and update the code to test the property failedUsers
      //var instance = new Api.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property files (base name: "files")', function() {
      // uncomment below and update the code to test the property files
      //var instance = new Api.MigrationApiInfo();
      //expect(instance).to.be();
    });

    it('should have the property errors (base name: "errors")', function() {
      // uncomment below and update the code to test the property errors
      //var instance = new Api.MigrationApiInfo();
      //expect(instance).to.be();
    });

  });

}));
