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
    instance = new Api.ThirdPartyParams();
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

  describe('ThirdPartyParams', function() {
    it('should create an instance of ThirdPartyParams', function() {
      // uncomment below and update the code to test ThirdPartyParams
      //var instance = new Api.ThirdPartyParams();
      //expect(instance).to.be.a(Api.ThirdPartyParams);
    });

    it('should have the property authData (base name: "auth_data")', function() {
      // uncomment below and update the code to test the property authData
      //var instance = new Api.ThirdPartyParams();
      //expect(instance).to.be();
    });

    it('should have the property corporate (base name: "corporate")', function() {
      // uncomment below and update the code to test the property corporate
      //var instance = new Api.ThirdPartyParams();
      //expect(instance).to.be();
    });

    it('should have the property roomsStorage (base name: "roomsStorage")', function() {
      // uncomment below and update the code to test the property roomsStorage
      //var instance = new Api.ThirdPartyParams();
      //expect(instance).to.be();
    });

    it('should have the property customerTitle (base name: "customer_title")', function() {
      // uncomment below and update the code to test the property customerTitle
      //var instance = new Api.ThirdPartyParams();
      //expect(instance).to.be();
    });

    it('should have the property providerId (base name: "provider_id")', function() {
      // uncomment below and update the code to test the property providerId
      //var instance = new Api.ThirdPartyParams();
      //expect(instance).to.be();
    });

    it('should have the property providerKey (base name: "provider_key")', function() {
      // uncomment below and update the code to test the property providerKey
      //var instance = new Api.ThirdPartyParams();
      //expect(instance).to.be();
    });

  });

}));
