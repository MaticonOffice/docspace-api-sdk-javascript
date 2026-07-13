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
    instance = new Api.UploadRequestDto();
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

  describe('UploadRequestDto', function() {
    it('should create an instance of UploadRequestDto', function() {
      // uncomment below and update the code to test UploadRequestDto
      //var instance = new Api.UploadRequestDto();
      //expect(instance).to.be.a(Api.UploadRequestDto);
    });

    it('should have the property file (base name: "file")', function() {
      // uncomment below and update the code to test the property file
      //var instance = new Api.UploadRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property contentType (base name: "contentType")', function() {
      // uncomment below and update the code to test the property contentType
      //var instance = new Api.UploadRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property contentDisposition (base name: "contentDisposition")', function() {
      // uncomment below and update the code to test the property contentDisposition
      //var instance = new Api.UploadRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property files (base name: "files")', function() {
      // uncomment below and update the code to test the property files
      //var instance = new Api.UploadRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property createNewIfExist (base name: "createNewIfExist")', function() {
      // uncomment below and update the code to test the property createNewIfExist
      //var instance = new Api.UploadRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property storeOriginalFileFlag (base name: "storeOriginalFileFlag")', function() {
      // uncomment below and update the code to test the property storeOriginalFileFlag
      //var instance = new Api.UploadRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property keepConvertStatus (base name: "keepConvertStatus")', function() {
      // uncomment below and update the code to test the property keepConvertStatus
      //var instance = new Api.UploadRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property stream (base name: "stream")', function() {
      // uncomment below and update the code to test the property stream
      //var instance = new Api.UploadRequestDto();
      //expect(instance).to.be();
    });

  });

}));
