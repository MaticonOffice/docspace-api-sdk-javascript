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
    instance = new Api.DocumentConfigDto();
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

  describe('DocumentConfigDto', function() {
    it('should create an instance of DocumentConfigDto', function() {
      // uncomment below and update the code to test DocumentConfigDto
      //var instance = new Api.DocumentConfigDto();
      //expect(instance).to.be.a(Api.DocumentConfigDto);
    });

    it('should have the property fileType (base name: "fileType")', function() {
      // uncomment below and update the code to test the property fileType
      //var instance = new Api.DocumentConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property info (base name: "info")', function() {
      // uncomment below and update the code to test the property info
      //var instance = new Api.DocumentConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property isLinkedForMe (base name: "isLinkedForMe")', function() {
      // uncomment below and update the code to test the property isLinkedForMe
      //var instance = new Api.DocumentConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new Api.DocumentConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property permissions (base name: "permissions")', function() {
      // uncomment below and update the code to test the property permissions
      //var instance = new Api.DocumentConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property sharedLinkParam (base name: "sharedLinkParam")', function() {
      // uncomment below and update the code to test the property sharedLinkParam
      //var instance = new Api.DocumentConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property sharedLinkKey (base name: "sharedLinkKey")', function() {
      // uncomment below and update the code to test the property sharedLinkKey
      //var instance = new Api.DocumentConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property referenceData (base name: "referenceData")', function() {
      // uncomment below and update the code to test the property referenceData
      //var instance = new Api.DocumentConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new Api.DocumentConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new Api.DocumentConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property isForm (base name: "isForm")', function() {
      // uncomment below and update the code to test the property isForm
      //var instance = new Api.DocumentConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property options (base name: "options")', function() {
      // uncomment below and update the code to test the property options
      //var instance = new Api.DocumentConfigDto();
      //expect(instance).to.be();
    });

  });

}));
