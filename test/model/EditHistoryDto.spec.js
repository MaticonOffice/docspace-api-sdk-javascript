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
    instance = new Api.EditHistoryDto();
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

  describe('EditHistoryDto', function() {
    it('should create an instance of EditHistoryDto', function() {
      // uncomment below and update the code to test EditHistoryDto
      //var instance = new Api.EditHistoryDto();
      //expect(instance).to.be.a(Api.EditHistoryDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Api.EditHistoryDto();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new Api.EditHistoryDto();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new Api.EditHistoryDto();
      //expect(instance).to.be();
    });

    it('should have the property versionGroup (base name: "versionGroup")', function() {
      // uncomment below and update the code to test the property versionGroup
      //var instance = new Api.EditHistoryDto();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instance = new Api.EditHistoryDto();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new Api.EditHistoryDto();
      //expect(instance).to.be();
    });

    it('should have the property changesHistory (base name: "changesHistory")', function() {
      // uncomment below and update the code to test the property changesHistory
      //var instance = new Api.EditHistoryDto();
      //expect(instance).to.be();
    });

    it('should have the property changes (base name: "changes")', function() {
      // uncomment below and update the code to test the property changes
      //var instance = new Api.EditHistoryDto();
      //expect(instance).to.be();
    });

    it('should have the property serverVersion (base name: "serverVersion")', function() {
      // uncomment below and update the code to test the property serverVersion
      //var instance = new Api.EditHistoryDto();
      //expect(instance).to.be();
    });

  });

}));
