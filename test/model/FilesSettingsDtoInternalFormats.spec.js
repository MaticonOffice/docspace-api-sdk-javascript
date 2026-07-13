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
    instance = new Api.FilesSettingsDtoInternalFormats();
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

  describe('FilesSettingsDtoInternalFormats', function() {
    it('should create an instance of FilesSettingsDtoInternalFormats', function() {
      // uncomment below and update the code to test FilesSettingsDtoInternalFormats
      //var instance = new Api.FilesSettingsDtoInternalFormats();
      //expect(instance).to.be.a(Api.FilesSettingsDtoInternalFormats);
    });

    it('should have the property unknown (base name: "Unknown")', function() {
      // uncomment below and update the code to test the property unknown
      //var instance = new Api.FilesSettingsDtoInternalFormats();
      //expect(instance).to.be();
    });

    it('should have the property archive (base name: "Archive")', function() {
      // uncomment below and update the code to test the property archive
      //var instance = new Api.FilesSettingsDtoInternalFormats();
      //expect(instance).to.be();
    });

    it('should have the property video (base name: "Video")', function() {
      // uncomment below and update the code to test the property video
      //var instance = new Api.FilesSettingsDtoInternalFormats();
      //expect(instance).to.be();
    });

    it('should have the property audio (base name: "Audio")', function() {
      // uncomment below and update the code to test the property audio
      //var instance = new Api.FilesSettingsDtoInternalFormats();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "Image")', function() {
      // uncomment below and update the code to test the property image
      //var instance = new Api.FilesSettingsDtoInternalFormats();
      //expect(instance).to.be();
    });

    it('should have the property spreadsheet (base name: "Spreadsheet")', function() {
      // uncomment below and update the code to test the property spreadsheet
      //var instance = new Api.FilesSettingsDtoInternalFormats();
      //expect(instance).to.be();
    });

    it('should have the property presentation (base name: "Presentation")', function() {
      // uncomment below and update the code to test the property presentation
      //var instance = new Api.FilesSettingsDtoInternalFormats();
      //expect(instance).to.be();
    });

    it('should have the property document (base name: "Document")', function() {
      // uncomment below and update the code to test the property document
      //var instance = new Api.FilesSettingsDtoInternalFormats();
      //expect(instance).to.be();
    });

    it('should have the property pdf (base name: "Pdf")', function() {
      // uncomment below and update the code to test the property pdf
      //var instance = new Api.FilesSettingsDtoInternalFormats();
      //expect(instance).to.be();
    });

    it('should have the property diagram (base name: "Diagram")', function() {
      // uncomment below and update the code to test the property diagram
      //var instance = new Api.FilesSettingsDtoInternalFormats();
      //expect(instance).to.be();
    });

  });

}));
