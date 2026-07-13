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
    instance = new Api.FilesStatisticsResultDto();
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

  describe('FilesStatisticsResultDto', function() {
    it('should create an instance of FilesStatisticsResultDto', function() {
      // uncomment below and update the code to test FilesStatisticsResultDto
      //var instance = new Api.FilesStatisticsResultDto();
      //expect(instance).to.be.a(Api.FilesStatisticsResultDto);
    });

    it('should have the property myDocumentsUsedSpace (base name: "myDocumentsUsedSpace")', function() {
      // uncomment below and update the code to test the property myDocumentsUsedSpace
      //var instance = new Api.FilesStatisticsResultDto();
      //expect(instance).to.be();
    });

    it('should have the property trashUsedSpace (base name: "trashUsedSpace")', function() {
      // uncomment below and update the code to test the property trashUsedSpace
      //var instance = new Api.FilesStatisticsResultDto();
      //expect(instance).to.be();
    });

    it('should have the property archiveUsedSpace (base name: "archiveUsedSpace")', function() {
      // uncomment below and update the code to test the property archiveUsedSpace
      //var instance = new Api.FilesStatisticsResultDto();
      //expect(instance).to.be();
    });

    it('should have the property roomsUsedSpace (base name: "roomsUsedSpace")', function() {
      // uncomment below and update the code to test the property roomsUsedSpace
      //var instance = new Api.FilesStatisticsResultDto();
      //expect(instance).to.be();
    });

  });

}));
