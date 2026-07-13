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
    instance = new Api.FirebaseDto();
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

  describe('FirebaseDto', function() {
    it('should create an instance of FirebaseDto', function() {
      // uncomment below and update the code to test FirebaseDto
      //var instance = new Api.FirebaseDto();
      //expect(instance).to.be.a(Api.FirebaseDto);
    });

    it('should have the property apiKey (base name: "apiKey")', function() {
      // uncomment below and update the code to test the property apiKey
      //var instance = new Api.FirebaseDto();
      //expect(instance).to.be();
    });

    it('should have the property authDomain (base name: "authDomain")', function() {
      // uncomment below and update the code to test the property authDomain
      //var instance = new Api.FirebaseDto();
      //expect(instance).to.be();
    });

    it('should have the property projectId (base name: "projectId")', function() {
      // uncomment below and update the code to test the property projectId
      //var instance = new Api.FirebaseDto();
      //expect(instance).to.be();
    });

    it('should have the property storageBucket (base name: "storageBucket")', function() {
      // uncomment below and update the code to test the property storageBucket
      //var instance = new Api.FirebaseDto();
      //expect(instance).to.be();
    });

    it('should have the property messagingSenderId (base name: "messagingSenderId")', function() {
      // uncomment below and update the code to test the property messagingSenderId
      //var instance = new Api.FirebaseDto();
      //expect(instance).to.be();
    });

    it('should have the property appId (base name: "appId")', function() {
      // uncomment below and update the code to test the property appId
      //var instance = new Api.FirebaseDto();
      //expect(instance).to.be();
    });

    it('should have the property measurementId (base name: "measurementId")', function() {
      // uncomment below and update the code to test the property measurementId
      //var instance = new Api.FirebaseDto();
      //expect(instance).to.be();
    });

    it('should have the property databaseURL (base name: "databaseURL")', function() {
      // uncomment below and update the code to test the property databaseURL
      //var instance = new Api.FirebaseDto();
      //expect(instance).to.be();
    });

  });

}));
