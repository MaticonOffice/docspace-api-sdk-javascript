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
    instance = new Api.CultureSpecificExternalResources();
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

  describe('CultureSpecificExternalResources', function() {
    it('should create an instance of CultureSpecificExternalResources', function() {
      // uncomment below and update the code to test CultureSpecificExternalResources
      //var instance = new Api.CultureSpecificExternalResources();
      //expect(instance).to.be.a(Api.CultureSpecificExternalResources);
    });

    it('should have the property api (base name: "api")', function() {
      // uncomment below and update the code to test the property api
      //var instance = new Api.CultureSpecificExternalResources();
      //expect(instance).to.be();
    });

    it('should have the property common (base name: "common")', function() {
      // uncomment below and update the code to test the property common
      //var instance = new Api.CultureSpecificExternalResources();
      //expect(instance).to.be();
    });

    it('should have the property forum (base name: "forum")', function() {
      // uncomment below and update the code to test the property forum
      //var instance = new Api.CultureSpecificExternalResources();
      //expect(instance).to.be();
    });

    it('should have the property helpcenter (base name: "helpcenter")', function() {
      // uncomment below and update the code to test the property helpcenter
      //var instance = new Api.CultureSpecificExternalResources();
      //expect(instance).to.be();
    });

    it('should have the property integrations (base name: "integrations")', function() {
      // uncomment below and update the code to test the property integrations
      //var instance = new Api.CultureSpecificExternalResources();
      //expect(instance).to.be();
    });

    it('should have the property site (base name: "site")', function() {
      // uncomment below and update the code to test the property site
      //var instance = new Api.CultureSpecificExternalResources();
      //expect(instance).to.be();
    });

    it('should have the property socialNetworks (base name: "socialNetworks")', function() {
      // uncomment below and update the code to test the property socialNetworks
      //var instance = new Api.CultureSpecificExternalResources();
      //expect(instance).to.be();
    });

    it('should have the property support (base name: "support")', function() {
      // uncomment below and update the code to test the property support
      //var instance = new Api.CultureSpecificExternalResources();
      //expect(instance).to.be();
    });

    it('should have the property videoguides (base name: "videoguides")', function() {
      // uncomment below and update the code to test the property videoguides
      //var instance = new Api.CultureSpecificExternalResources();
      //expect(instance).to.be();
    });

  });

}));
