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
    instance = new Api.CustomNavigationItem();
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

  describe('CustomNavigationItem', function() {
    it('should create an instance of CustomNavigationItem', function() {
      // uncomment below and update the code to test CustomNavigationItem
      //var instance = new Api.CustomNavigationItem();
      //expect(instance).to.be.a(Api.CustomNavigationItem);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Api.CustomNavigationItem();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new Api.CustomNavigationItem();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new Api.CustomNavigationItem();
      //expect(instance).to.be();
    });

    it('should have the property bigImg (base name: "bigImg")', function() {
      // uncomment below and update the code to test the property bigImg
      //var instance = new Api.CustomNavigationItem();
      //expect(instance).to.be();
    });

    it('should have the property smallImg (base name: "smallImg")', function() {
      // uncomment below and update the code to test the property smallImg
      //var instance = new Api.CustomNavigationItem();
      //expect(instance).to.be();
    });

    it('should have the property showInMenu (base name: "showInMenu")', function() {
      // uncomment below and update the code to test the property showInMenu
      //var instance = new Api.CustomNavigationItem();
      //expect(instance).to.be();
    });

    it('should have the property showOnHomePage (base name: "showOnHomePage")', function() {
      // uncomment below and update the code to test the property showOnHomePage
      //var instance = new Api.CustomNavigationItem();
      //expect(instance).to.be();
    });

  });

}));
