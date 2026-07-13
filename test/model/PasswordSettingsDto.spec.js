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
    instance = new Api.PasswordSettingsDto();
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

  describe('PasswordSettingsDto', function() {
    it('should create an instance of PasswordSettingsDto', function() {
      // uncomment below and update the code to test PasswordSettingsDto
      //var instance = new Api.PasswordSettingsDto();
      //expect(instance).to.be.a(Api.PasswordSettingsDto);
    });

    it('should have the property minLength (base name: "minLength")', function() {
      // uncomment below and update the code to test the property minLength
      //var instance = new Api.PasswordSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property upperCase (base name: "upperCase")', function() {
      // uncomment below and update the code to test the property upperCase
      //var instance = new Api.PasswordSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property digits (base name: "digits")', function() {
      // uncomment below and update the code to test the property digits
      //var instance = new Api.PasswordSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property specSymbols (base name: "specSymbols")', function() {
      // uncomment below and update the code to test the property specSymbols
      //var instance = new Api.PasswordSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property allowedCharactersRegexStr (base name: "allowedCharactersRegexStr")', function() {
      // uncomment below and update the code to test the property allowedCharactersRegexStr
      //var instance = new Api.PasswordSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property digitsRegexStr (base name: "digitsRegexStr")', function() {
      // uncomment below and update the code to test the property digitsRegexStr
      //var instance = new Api.PasswordSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property upperCaseRegexStr (base name: "upperCaseRegexStr")', function() {
      // uncomment below and update the code to test the property upperCaseRegexStr
      //var instance = new Api.PasswordSettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property specSymbolsRegexStr (base name: "specSymbolsRegexStr")', function() {
      // uncomment below and update the code to test the property specSymbolsRegexStr
      //var instance = new Api.PasswordSettingsDto();
      //expect(instance).to.be();
    });

  });

}));
