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
    instance = new Api.QuotaDto();
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

  describe('QuotaDto', function() {
    it('should create an instance of QuotaDto', function() {
      // uncomment below and update the code to test QuotaDto
      //var instance = new Api.QuotaDto();
      //expect(instance).to.be.a(Api.QuotaDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Api.QuotaDto();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new Api.QuotaDto();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new Api.QuotaDto();
      //expect(instance).to.be();
    });

    it('should have the property nonProfit (base name: "nonProfit")', function() {
      // uncomment below and update the code to test the property nonProfit
      //var instance = new Api.QuotaDto();
      //expect(instance).to.be();
    });

    it('should have the property free (base name: "free")', function() {
      // uncomment below and update the code to test the property free
      //var instance = new Api.QuotaDto();
      //expect(instance).to.be();
    });

    it('should have the property trial (base name: "trial")', function() {
      // uncomment below and update the code to test the property trial
      //var instance = new Api.QuotaDto();
      //expect(instance).to.be();
    });

    it('should have the property features (base name: "features")', function() {
      // uncomment below and update the code to test the property features
      //var instance = new Api.QuotaDto();
      //expect(instance).to.be();
    });

    it('should have the property usersQuota (base name: "usersQuota")', function() {
      // uncomment below and update the code to test the property usersQuota
      //var instance = new Api.QuotaDto();
      //expect(instance).to.be();
    });

    it('should have the property roomsQuota (base name: "roomsQuota")', function() {
      // uncomment below and update the code to test the property roomsQuota
      //var instance = new Api.QuotaDto();
      //expect(instance).to.be();
    });

    it('should have the property tenantCustomQuota (base name: "tenantCustomQuota")', function() {
      // uncomment below and update the code to test the property tenantCustomQuota
      //var instance = new Api.QuotaDto();
      //expect(instance).to.be();
    });

    it('should have the property dueDate (base name: "dueDate")', function() {
      // uncomment below and update the code to test the property dueDate
      //var instance = new Api.QuotaDto();
      //expect(instance).to.be();
    });

  });

}));
