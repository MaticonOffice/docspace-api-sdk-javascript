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
    instance = new Api.WebPluginDto();
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

  describe('WebPluginDto', function() {
    it('should create an instance of WebPluginDto', function() {
      // uncomment below and update the code to test WebPluginDto
      //var instance = new Api.WebPluginDto();
      //expect(instance).to.be.a(Api.WebPluginDto);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Api.WebPluginDto();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new Api.WebPluginDto();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new Api.WebPluginDto();
      //expect(instance).to.be();
    });

    it('should have the property license (base name: "license")', function() {
      // uncomment below and update the code to test the property license
      //var instance = new Api.WebPluginDto();
      //expect(instance).to.be();
    });

    it('should have the property author (base name: "author")', function() {
      // uncomment below and update the code to test the property author
      //var instance = new Api.WebPluginDto();
      //expect(instance).to.be();
    });

    it('should have the property homePage (base name: "homePage")', function() {
      // uncomment below and update the code to test the property homePage
      //var instance = new Api.WebPluginDto();
      //expect(instance).to.be();
    });

    it('should have the property pluginName (base name: "pluginName")', function() {
      // uncomment below and update the code to test the property pluginName
      //var instance = new Api.WebPluginDto();
      //expect(instance).to.be();
    });

    it('should have the property scopes (base name: "scopes")', function() {
      // uncomment below and update the code to test the property scopes
      //var instance = new Api.WebPluginDto();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instance = new Api.WebPluginDto();
      //expect(instance).to.be();
    });

    it('should have the property createBy (base name: "createBy")', function() {
      // uncomment below and update the code to test the property createBy
      //var instance = new Api.WebPluginDto();
      //expect(instance).to.be();
    });

    it('should have the property createOn (base name: "createOn")', function() {
      // uncomment below and update the code to test the property createOn
      //var instance = new Api.WebPluginDto();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new Api.WebPluginDto();
      //expect(instance).to.be();
    });

    it('should have the property system (base name: "system")', function() {
      // uncomment below and update the code to test the property system
      //var instance = new Api.WebPluginDto();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new Api.WebPluginDto();
      //expect(instance).to.be();
    });

    it('should have the property settings (base name: "settings")', function() {
      // uncomment below and update the code to test the property settings
      //var instance = new Api.WebPluginDto();
      //expect(instance).to.be();
    });

  });

}));
