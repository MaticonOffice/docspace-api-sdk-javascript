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
    instance = new Api.FileLinkRequest();
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

  describe('FileLinkRequest', function() {
    it('should create an instance of FileLinkRequest', function() {
      // uncomment below and update the code to test FileLinkRequest
      //var instance = new Api.FileLinkRequest();
      //expect(instance).to.be.a(Api.FileLinkRequest);
    });

    it('should have the property linkId (base name: "linkId")', function() {
      // uncomment below and update the code to test the property linkId
      //var instance = new Api.FileLinkRequest();
      //expect(instance).to.be();
    });

    it('should have the property access (base name: "access")', function() {
      // uncomment below and update the code to test the property access
      //var instance = new Api.FileLinkRequest();
      //expect(instance).to.be();
    });

    it('should have the property expirationDate (base name: "expirationDate")', function() {
      // uncomment below and update the code to test the property expirationDate
      //var instance = new Api.FileLinkRequest();
      //expect(instance).to.be();
    });

    it('should have the property internal (base name: "internal")', function() {
      // uncomment below and update the code to test the property internal
      //var instance = new Api.FileLinkRequest();
      //expect(instance).to.be();
    });

    it('should have the property primary (base name: "primary")', function() {
      // uncomment below and update the code to test the property primary
      //var instance = new Api.FileLinkRequest();
      //expect(instance).to.be();
    });

  });

}));
