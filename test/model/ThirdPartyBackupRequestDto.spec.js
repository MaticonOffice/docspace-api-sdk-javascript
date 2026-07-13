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
    instance = new Api.ThirdPartyBackupRequestDto();
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

  describe('ThirdPartyBackupRequestDto', function() {
    it('should create an instance of ThirdPartyBackupRequestDto', function() {
      // uncomment below and update the code to test ThirdPartyBackupRequestDto
      //var instance = new Api.ThirdPartyBackupRequestDto();
      //expect(instance).to.be.a(Api.ThirdPartyBackupRequestDto);
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new Api.ThirdPartyBackupRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property login (base name: "login")', function() {
      // uncomment below and update the code to test the property login
      //var instance = new Api.ThirdPartyBackupRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new Api.ThirdPartyBackupRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new Api.ThirdPartyBackupRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property customerTitle (base name: "customerTitle")', function() {
      // uncomment below and update the code to test the property customerTitle
      //var instance = new Api.ThirdPartyBackupRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property providerKey (base name: "providerKey")', function() {
      // uncomment below and update the code to test the property providerKey
      //var instance = new Api.ThirdPartyBackupRequestDto();
      //expect(instance).to.be();
    });

  });

}));
