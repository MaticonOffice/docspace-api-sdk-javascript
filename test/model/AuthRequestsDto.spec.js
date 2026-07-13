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
    instance = new Api.AuthRequestsDto();
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

  describe('AuthRequestsDto', function() {
    it('should create an instance of AuthRequestsDto', function() {
      // uncomment below and update the code to test AuthRequestsDto
      //var instance = new Api.AuthRequestsDto();
      //expect(instance).to.be.a(Api.AuthRequestsDto);
    });

    it('should have the property userName (base name: "userName")', function() {
      // uncomment below and update the code to test the property userName
      //var instance = new Api.AuthRequestsDto();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new Api.AuthRequestsDto();
      //expect(instance).to.be();
    });

    it('should have the property passwordHash (base name: "passwordHash")', function() {
      // uncomment below and update the code to test the property passwordHash
      //var instance = new Api.AuthRequestsDto();
      //expect(instance).to.be();
    });

    it('should have the property provider (base name: "provider")', function() {
      // uncomment below and update the code to test the property provider
      //var instance = new Api.AuthRequestsDto();
      //expect(instance).to.be();
    });

    it('should have the property accessToken (base name: "accessToken")', function() {
      // uncomment below and update the code to test the property accessToken
      //var instance = new Api.AuthRequestsDto();
      //expect(instance).to.be();
    });

    it('should have the property serializedProfile (base name: "serializedProfile")', function() {
      // uncomment below and update the code to test the property serializedProfile
      //var instance = new Api.AuthRequestsDto();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new Api.AuthRequestsDto();
      //expect(instance).to.be();
    });

    it('should have the property codeOAuth (base name: "codeOAuth")', function() {
      // uncomment below and update the code to test the property codeOAuth
      //var instance = new Api.AuthRequestsDto();
      //expect(instance).to.be();
    });

    it('should have the property session (base name: "session")', function() {
      // uncomment below and update the code to test the property session
      //var instance = new Api.AuthRequestsDto();
      //expect(instance).to.be();
    });

    it('should have the property confirmData (base name: "confirmData")', function() {
      // uncomment below and update the code to test the property confirmData
      //var instance = new Api.AuthRequestsDto();
      //expect(instance).to.be();
    });

    it('should have the property recaptchaType (base name: "recaptchaType")', function() {
      // uncomment below and update the code to test the property recaptchaType
      //var instance = new Api.AuthRequestsDto();
      //expect(instance).to.be();
    });

    it('should have the property recaptchaResponse (base name: "recaptchaResponse")', function() {
      // uncomment below and update the code to test the property recaptchaResponse
      //var instance = new Api.AuthRequestsDto();
      //expect(instance).to.be();
    });

    it('should have the property culture (base name: "culture")', function() {
      // uncomment below and update the code to test the property culture
      //var instance = new Api.AuthRequestsDto();
      //expect(instance).to.be();
    });

  });

}));
