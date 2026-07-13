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
    instance = new Api.SmtpSettingsDto();
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

  describe('SmtpSettingsDto', function() {
    it('should create an instance of SmtpSettingsDto', function() {
      // uncomment below and update the code to test SmtpSettingsDto
      //var instance = new Api.SmtpSettingsDto();
      //expect(instance).to.be.a(Api.SmtpSettingsDto);
    });

    it('should have the property host (base name: "host")', function() {
      // uncomment below and update the code to test the property host
      //var instance = new Api.SmtpSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property port (base name: "port")', function() {
      // uncomment below and update the code to test the property port
      //var instance = new Api.SmtpSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property senderAddress (base name: "senderAddress")', function() {
      // uncomment below and update the code to test the property senderAddress
      //var instance = new Api.SmtpSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property senderDisplayName (base name: "senderDisplayName")', function() {
      // uncomment below and update the code to test the property senderDisplayName
      //var instance = new Api.SmtpSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property credentialsUserName (base name: "credentialsUserName")', function() {
      // uncomment below and update the code to test the property credentialsUserName
      //var instance = new Api.SmtpSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property credentialsUserPassword (base name: "credentialsUserPassword")', function() {
      // uncomment below and update the code to test the property credentialsUserPassword
      //var instance = new Api.SmtpSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property enableSSL (base name: "enableSSL")', function() {
      // uncomment below and update the code to test the property enableSSL
      //var instance = new Api.SmtpSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property enableAuth (base name: "enableAuth")', function() {
      // uncomment below and update the code to test the property enableAuth
      //var instance = new Api.SmtpSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property useNtlm (base name: "useNtlm")', function() {
      // uncomment below and update the code to test the property useNtlm
      //var instance = new Api.SmtpSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property isDefaultSettings (base name: "isDefaultSettings")', function() {
      // uncomment below and update the code to test the property isDefaultSettings
      //var instance = new Api.SmtpSettingsDto();
      //expect(instance).to.be();
    });

  });

}));
