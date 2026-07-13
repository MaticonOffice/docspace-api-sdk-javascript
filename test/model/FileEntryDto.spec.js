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
    instance = new Api.FileEntryDto();
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

  describe('FileEntryDto', function() {
    it('should create an instance of FileEntryDto', function() {
      // uncomment below and update the code to test FileEntryDto
      //var instance = new Api.FileEntryDto();
      //expect(instance).to.be.a(Api.FileEntryDto);
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new Api.FileEntryDto();
      //expect(instance).to.be();
    });

    it('should have the property access (base name: "access")', function() {
      // uncomment below and update the code to test the property access
      //var instance = new Api.FileEntryDto();
      //expect(instance).to.be();
    });

    it('should have the property shared (base name: "shared")', function() {
      // uncomment below and update the code to test the property shared
      //var instance = new Api.FileEntryDto();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new Api.FileEntryDto();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instance = new Api.FileEntryDto();
      //expect(instance).to.be();
    });

    it('should have the property updated (base name: "updated")', function() {
      // uncomment below and update the code to test the property updated
      //var instance = new Api.FileEntryDto();
      //expect(instance).to.be();
    });

    it('should have the property autoDelete (base name: "autoDelete")', function() {
      // uncomment below and update the code to test the property autoDelete
      //var instance = new Api.FileEntryDto();
      //expect(instance).to.be();
    });

    it('should have the property rootFolderType (base name: "rootFolderType")', function() {
      // uncomment below and update the code to test the property rootFolderType
      //var instance = new Api.FileEntryDto();
      //expect(instance).to.be();
    });

    it('should have the property parentRoomType (base name: "parentRoomType")', function() {
      // uncomment below and update the code to test the property parentRoomType
      //var instance = new Api.FileEntryDto();
      //expect(instance).to.be();
    });

    it('should have the property updatedBy (base name: "updatedBy")', function() {
      // uncomment below and update the code to test the property updatedBy
      //var instance = new Api.FileEntryDto();
      //expect(instance).to.be();
    });

    it('should have the property providerItem (base name: "providerItem")', function() {
      // uncomment below and update the code to test the property providerItem
      //var instance = new Api.FileEntryDto();
      //expect(instance).to.be();
    });

    it('should have the property providerKey (base name: "providerKey")', function() {
      // uncomment below and update the code to test the property providerKey
      //var instance = new Api.FileEntryDto();
      //expect(instance).to.be();
    });

    it('should have the property providerId (base name: "providerId")', function() {
      // uncomment below and update the code to test the property providerId
      //var instance = new Api.FileEntryDto();
      //expect(instance).to.be();
    });

    it('should have the property order (base name: "order")', function() {
      // uncomment below and update the code to test the property order
      //var instance = new Api.FileEntryDto();
      //expect(instance).to.be();
    });

    it('should have the property fileEntryType (base name: "fileEntryType")', function() {
      // uncomment below and update the code to test the property fileEntryType
      //var instance = new Api.FileEntryDto();
      //expect(instance).to.be();
    });

  });

}));
