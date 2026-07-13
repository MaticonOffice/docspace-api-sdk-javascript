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
    instance = new Api.AuthenticationTokenDto();
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

  describe('AuthenticationTokenDto', function() {
    it('should create an instance of AuthenticationTokenDto', function() {
      // uncomment below and update the code to test AuthenticationTokenDto
      //var instance = new Api.AuthenticationTokenDto();
      //expect(instance).to.be.a(Api.AuthenticationTokenDto);
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new Api.AuthenticationTokenDto();
      //expect(instance).to.be();
    });

    it('should have the property expires (base name: "expires")', function() {
      // uncomment below and update the code to test the property expires
      //var instance = new Api.AuthenticationTokenDto();
      //expect(instance).to.be();
    });

    it('should have the property sms (base name: "sms")', function() {
      // uncomment below and update the code to test the property sms
      //var instance = new Api.AuthenticationTokenDto();
      //expect(instance).to.be();
    });

    it('should have the property phoneNoise (base name: "phoneNoise")', function() {
      // uncomment below and update the code to test the property phoneNoise
      //var instance = new Api.AuthenticationTokenDto();
      //expect(instance).to.be();
    });

    it('should have the property tfa (base name: "tfa")', function() {
      // uncomment below and update the code to test the property tfa
      //var instance = new Api.AuthenticationTokenDto();
      //expect(instance).to.be();
    });

    it('should have the property tfaKey (base name: "tfaKey")', function() {
      // uncomment below and update the code to test the property tfaKey
      //var instance = new Api.AuthenticationTokenDto();
      //expect(instance).to.be();
    });

    it('should have the property confirmUrl (base name: "confirmUrl")', function() {
      // uncomment below and update the code to test the property confirmUrl
      //var instance = new Api.AuthenticationTokenDto();
      //expect(instance).to.be();
    });

  });

}));
