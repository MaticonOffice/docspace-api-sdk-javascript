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
    instance = new Api.OperationDto();
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

  describe('OperationDto', function() {
    it('should create an instance of OperationDto', function() {
      // uncomment below and update the code to test OperationDto
      //var instance = new Api.OperationDto();
      //expect(instance).to.be.a(Api.OperationDto);
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instance = new Api.OperationDto();
      //expect(instance).to.be();
    });

    it('should have the property service (base name: "service")', function() {
      // uncomment below and update the code to test the property service
      //var instance = new Api.OperationDto();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new Api.OperationDto();
      //expect(instance).to.be();
    });

    it('should have the property serviceUnit (base name: "serviceUnit")', function() {
      // uncomment below and update the code to test the property serviceUnit
      //var instance = new Api.OperationDto();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instance = new Api.OperationDto();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new Api.OperationDto();
      //expect(instance).to.be();
    });

    it('should have the property credit (base name: "credit")', function() {
      // uncomment below and update the code to test the property credit
      //var instance = new Api.OperationDto();
      //expect(instance).to.be();
    });

    it('should have the property withdrawal (base name: "withdrawal")', function() {
      // uncomment below and update the code to test the property withdrawal
      //var instance = new Api.OperationDto();
      //expect(instance).to.be();
    });

  });

}));
