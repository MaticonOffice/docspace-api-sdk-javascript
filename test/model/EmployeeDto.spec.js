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
    instance = new Api.EmployeeDto();
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

  describe('EmployeeDto', function() {
    it('should create an instance of EmployeeDto', function() {
      // uncomment below and update the code to test EmployeeDto
      //var instance = new Api.EmployeeDto();
      //expect(instance).to.be.a(Api.EmployeeDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Api.EmployeeDto();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "displayName")', function() {
      // uncomment below and update the code to test the property displayName
      //var instance = new Api.EmployeeDto();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new Api.EmployeeDto();
      //expect(instance).to.be();
    });

    it('should have the property avatar (base name: "avatar")', function() {
      // uncomment below and update the code to test the property avatar
      //var instance = new Api.EmployeeDto();
      //expect(instance).to.be();
    });

    it('should have the property avatarOriginal (base name: "avatarOriginal")', function() {
      // uncomment below and update the code to test the property avatarOriginal
      //var instance = new Api.EmployeeDto();
      //expect(instance).to.be();
    });

    it('should have the property avatarMax (base name: "avatarMax")', function() {
      // uncomment below and update the code to test the property avatarMax
      //var instance = new Api.EmployeeDto();
      //expect(instance).to.be();
    });

    it('should have the property avatarMedium (base name: "avatarMedium")', function() {
      // uncomment below and update the code to test the property avatarMedium
      //var instance = new Api.EmployeeDto();
      //expect(instance).to.be();
    });

    it('should have the property avatarSmall (base name: "avatarSmall")', function() {
      // uncomment below and update the code to test the property avatarSmall
      //var instance = new Api.EmployeeDto();
      //expect(instance).to.be();
    });

    it('should have the property profileUrl (base name: "profileUrl")', function() {
      // uncomment below and update the code to test the property profileUrl
      //var instance = new Api.EmployeeDto();
      //expect(instance).to.be();
    });

    it('should have the property hasAvatar (base name: "hasAvatar")', function() {
      // uncomment below and update the code to test the property hasAvatar
      //var instance = new Api.EmployeeDto();
      //expect(instance).to.be();
    });

    it('should have the property isAnonim (base name: "isAnonim")', function() {
      // uncomment below and update the code to test the property isAnonim
      //var instance = new Api.EmployeeDto();
      //expect(instance).to.be();
    });

  });

}));
