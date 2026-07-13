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
    instance = new Api.CreateRoomRequestDto();
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

  describe('CreateRoomRequestDto', function() {
    it('should create an instance of CreateRoomRequestDto', function() {
      // uncomment below and update the code to test CreateRoomRequestDto
      //var instance = new Api.CreateRoomRequestDto();
      //expect(instance).to.be.a(Api.CreateRoomRequestDto);
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new Api.CreateRoomRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property quota (base name: "quota")', function() {
      // uncomment below and update the code to test the property quota
      //var instance = new Api.CreateRoomRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property indexing (base name: "indexing")', function() {
      // uncomment below and update the code to test the property indexing
      //var instance = new Api.CreateRoomRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property denyDownload (base name: "denyDownload")', function() {
      // uncomment below and update the code to test the property denyDownload
      //var instance = new Api.CreateRoomRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property lifetime (base name: "lifetime")', function() {
      // uncomment below and update the code to test the property lifetime
      //var instance = new Api.CreateRoomRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property watermark (base name: "watermark")', function() {
      // uncomment below and update the code to test the property watermark
      //var instance = new Api.CreateRoomRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instance = new Api.CreateRoomRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new Api.CreateRoomRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property color (base name: "color")', function() {
      // uncomment below and update the code to test the property color
      //var instance = new Api.CreateRoomRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property cover (base name: "cover")', function() {
      // uncomment below and update the code to test the property cover
      //var instance = new Api.CreateRoomRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property roomType (base name: "roomType")', function() {
      // uncomment below and update the code to test the property roomType
      //var instance = new Api.CreateRoomRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property _private (base name: "private")', function() {
      // uncomment below and update the code to test the property _private
      //var instance = new Api.CreateRoomRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property share (base name: "share")', function() {
      // uncomment below and update the code to test the property share
      //var instance = new Api.CreateRoomRequestDto();
      //expect(instance).to.be();
    });

  });

}));
