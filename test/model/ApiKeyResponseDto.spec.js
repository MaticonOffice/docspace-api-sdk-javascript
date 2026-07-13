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
    instance = new Api.ApiKeyResponseDto();
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

  describe('ApiKeyResponseDto', function() {
    it('should create an instance of ApiKeyResponseDto', function() {
      // uncomment below and update the code to test ApiKeyResponseDto
      //var instance = new Api.ApiKeyResponseDto();
      //expect(instance).to.be.a(Api.ApiKeyResponseDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Api.ApiKeyResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Api.ApiKeyResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new Api.ApiKeyResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property keyPostfix (base name: "keyPostfix")', function() {
      // uncomment below and update the code to test the property keyPostfix
      //var instance = new Api.ApiKeyResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property permissions (base name: "permissions")', function() {
      // uncomment below and update the code to test the property permissions
      //var instance = new Api.ApiKeyResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property lastUsed (base name: "lastUsed")', function() {
      // uncomment below and update the code to test the property lastUsed
      //var instance = new Api.ApiKeyResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property createOn (base name: "createOn")', function() {
      // uncomment below and update the code to test the property createOn
      //var instance = new Api.ApiKeyResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property createBy (base name: "createBy")', function() {
      // uncomment below and update the code to test the property createBy
      //var instance = new Api.ApiKeyResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property expiresAt (base name: "expiresAt")', function() {
      // uncomment below and update the code to test the property expiresAt
      //var instance = new Api.ApiKeyResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "isActive")', function() {
      // uncomment below and update the code to test the property isActive
      //var instance = new Api.ApiKeyResponseDto();
      //expect(instance).to.be();
    });

  });

}));
