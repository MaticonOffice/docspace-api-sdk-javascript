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
    instance = new Api.FileDtoIntegerViewAccessibility();
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

  describe('FileDtoIntegerViewAccessibility', function() {
    it('should create an instance of FileDtoIntegerViewAccessibility', function() {
      // uncomment below and update the code to test FileDtoIntegerViewAccessibility
      //var instance = new Api.FileDtoIntegerViewAccessibility();
      //expect(instance).to.be.a(Api.FileDtoIntegerViewAccessibility);
    });

    it('should have the property imageView (base name: "ImageView")', function() {
      // uncomment below and update the code to test the property imageView
      //var instance = new Api.FileDtoIntegerViewAccessibility();
      //expect(instance).to.be();
    });

    it('should have the property mediaView (base name: "MediaView")', function() {
      // uncomment below and update the code to test the property mediaView
      //var instance = new Api.FileDtoIntegerViewAccessibility();
      //expect(instance).to.be();
    });

    it('should have the property webView (base name: "WebView")', function() {
      // uncomment below and update the code to test the property webView
      //var instance = new Api.FileDtoIntegerViewAccessibility();
      //expect(instance).to.be();
    });

    it('should have the property webEdit (base name: "WebEdit")', function() {
      // uncomment below and update the code to test the property webEdit
      //var instance = new Api.FileDtoIntegerViewAccessibility();
      //expect(instance).to.be();
    });

    it('should have the property webReview (base name: "WebReview")', function() {
      // uncomment below and update the code to test the property webReview
      //var instance = new Api.FileDtoIntegerViewAccessibility();
      //expect(instance).to.be();
    });

    it('should have the property webCustomFilterEditing (base name: "WebCustomFilterEditing")', function() {
      // uncomment below and update the code to test the property webCustomFilterEditing
      //var instance = new Api.FileDtoIntegerViewAccessibility();
      //expect(instance).to.be();
    });

    it('should have the property webRestrictedEditing (base name: "WebRestrictedEditing")', function() {
      // uncomment below and update the code to test the property webRestrictedEditing
      //var instance = new Api.FileDtoIntegerViewAccessibility();
      //expect(instance).to.be();
    });

    it('should have the property webComment (base name: "WebComment")', function() {
      // uncomment below and update the code to test the property webComment
      //var instance = new Api.FileDtoIntegerViewAccessibility();
      //expect(instance).to.be();
    });

    it('should have the property coAuhtoring (base name: "CoAuhtoring")', function() {
      // uncomment below and update the code to test the property coAuhtoring
      //var instance = new Api.FileDtoIntegerViewAccessibility();
      //expect(instance).to.be();
    });

    it('should have the property canConvert (base name: "CanConvert")', function() {
      // uncomment below and update the code to test the property canConvert
      //var instance = new Api.FileDtoIntegerViewAccessibility();
      //expect(instance).to.be();
    });

    it('should have the property mustConvert (base name: "MustConvert")', function() {
      // uncomment below and update the code to test the property mustConvert
      //var instance = new Api.FileDtoIntegerViewAccessibility();
      //expect(instance).to.be();
    });

  });

}));
