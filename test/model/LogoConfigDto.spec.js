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
    instance = new Api.LogoConfigDto();
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

  describe('LogoConfigDto', function() {
    it('should create an instance of LogoConfigDto', function() {
      // uncomment below and update the code to test LogoConfigDto
      //var instance = new Api.LogoConfigDto();
      //expect(instance).to.be.a(Api.LogoConfigDto);
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instance = new Api.LogoConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property imageDark (base name: "imageDark")', function() {
      // uncomment below and update the code to test the property imageDark
      //var instance = new Api.LogoConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property imageLight (base name: "imageLight")', function() {
      // uncomment below and update the code to test the property imageLight
      //var instance = new Api.LogoConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property imageEmbedded (base name: "imageEmbedded")', function() {
      // uncomment below and update the code to test the property imageEmbedded
      //var instance = new Api.LogoConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new Api.LogoConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property visible (base name: "visible")', function() {
      // uncomment below and update the code to test the property visible
      //var instance = new Api.LogoConfigDto();
      //expect(instance).to.be();
    });

  });

}));
