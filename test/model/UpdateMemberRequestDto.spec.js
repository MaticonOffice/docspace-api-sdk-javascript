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
    instance = new Api.UpdateMemberRequestDto();
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

  describe('UpdateMemberRequestDto', function() {
    it('should create an instance of UpdateMemberRequestDto', function() {
      // uncomment below and update the code to test UpdateMemberRequestDto
      //var instance = new Api.UpdateMemberRequestDto();
      //expect(instance).to.be.a(Api.UpdateMemberRequestDto);
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new Api.UpdateMemberRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property disable (base name: "disable")', function() {
      // uncomment below and update the code to test the property disable
      //var instance = new Api.UpdateMemberRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new Api.UpdateMemberRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property isUser (base name: "isUser")', function() {
      // uncomment below and update the code to test the property isUser
      //var instance = new Api.UpdateMemberRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new Api.UpdateMemberRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new Api.UpdateMemberRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property department (base name: "department")', function() {
      // uncomment below and update the code to test the property department
      //var instance = new Api.UpdateMemberRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new Api.UpdateMemberRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instance = new Api.UpdateMemberRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property sex (base name: "sex")', function() {
      // uncomment below and update the code to test the property sex
      //var instance = new Api.UpdateMemberRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property birthday (base name: "birthday")', function() {
      // uncomment below and update the code to test the property birthday
      //var instance = new Api.UpdateMemberRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property worksfrom (base name: "worksfrom")', function() {
      // uncomment below and update the code to test the property worksfrom
      //var instance = new Api.UpdateMemberRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instance = new Api.UpdateMemberRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property contacts (base name: "contacts")', function() {
      // uncomment below and update the code to test the property contacts
      //var instance = new Api.UpdateMemberRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property files (base name: "files")', function() {
      // uncomment below and update the code to test the property files
      //var instance = new Api.UpdateMemberRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property spam (base name: "spam")', function() {
      // uncomment below and update the code to test the property spam
      //var instance = new Api.UpdateMemberRequestDto();
      //expect(instance).to.be();
    });

  });

}));
