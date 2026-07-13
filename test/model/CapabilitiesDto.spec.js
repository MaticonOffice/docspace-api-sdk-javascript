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
    instance = new Api.CapabilitiesDto();
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

  describe('CapabilitiesDto', function() {
    it('should create an instance of CapabilitiesDto', function() {
      // uncomment below and update the code to test CapabilitiesDto
      //var instance = new Api.CapabilitiesDto();
      //expect(instance).to.be.a(Api.CapabilitiesDto);
    });

    it('should have the property ldapEnabled (base name: "ldapEnabled")', function() {
      // uncomment below and update the code to test the property ldapEnabled
      //var instance = new Api.CapabilitiesDto();
      //expect(instance).to.be();
    });

    it('should have the property ldapDomain (base name: "ldapDomain")', function() {
      // uncomment below and update the code to test the property ldapDomain
      //var instance = new Api.CapabilitiesDto();
      //expect(instance).to.be();
    });

    it('should have the property providers (base name: "providers")', function() {
      // uncomment below and update the code to test the property providers
      //var instance = new Api.CapabilitiesDto();
      //expect(instance).to.be();
    });

    it('should have the property ssoLabel (base name: "ssoLabel")', function() {
      // uncomment below and update the code to test the property ssoLabel
      //var instance = new Api.CapabilitiesDto();
      //expect(instance).to.be();
    });

    it('should have the property oauthEnabled (base name: "oauthEnabled")', function() {
      // uncomment below and update the code to test the property oauthEnabled
      //var instance = new Api.CapabilitiesDto();
      //expect(instance).to.be();
    });

    it('should have the property ssoUrl (base name: "ssoUrl")', function() {
      // uncomment below and update the code to test the property ssoUrl
      //var instance = new Api.CapabilitiesDto();
      //expect(instance).to.be();
    });

    it('should have the property identityServerEnabled (base name: "identityServerEnabled")', function() {
      // uncomment below and update the code to test the property identityServerEnabled
      //var instance = new Api.CapabilitiesDto();
      //expect(instance).to.be();
    });

  });

}));
