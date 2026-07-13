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
    instance = new Api.WebhooksConfigDto();
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

  describe('WebhooksConfigDto', function() {
    it('should create an instance of WebhooksConfigDto', function() {
      // uncomment below and update the code to test WebhooksConfigDto
      //var instance = new Api.WebhooksConfigDto();
      //expect(instance).to.be.a(Api.WebhooksConfigDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Api.WebhooksConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Api.WebhooksConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property uri (base name: "uri")', function() {
      // uncomment below and update the code to test the property uri
      //var instance = new Api.WebhooksConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new Api.WebhooksConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property ssl (base name: "ssl")', function() {
      // uncomment below and update the code to test the property ssl
      //var instance = new Api.WebhooksConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property triggers (base name: "triggers")', function() {
      // uncomment below and update the code to test the property triggers
      //var instance = new Api.WebhooksConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property targetId (base name: "targetId")', function() {
      // uncomment below and update the code to test the property targetId
      //var instance = new Api.WebhooksConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instance = new Api.WebhooksConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "createdOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instance = new Api.WebhooksConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property modifiedBy (base name: "modifiedBy")', function() {
      // uncomment below and update the code to test the property modifiedBy
      //var instance = new Api.WebhooksConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property modifiedOn (base name: "modifiedOn")', function() {
      // uncomment below and update the code to test the property modifiedOn
      //var instance = new Api.WebhooksConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property lastFailureOn (base name: "lastFailureOn")', function() {
      // uncomment below and update the code to test the property lastFailureOn
      //var instance = new Api.WebhooksConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property lastFailureContent (base name: "lastFailureContent")', function() {
      // uncomment below and update the code to test the property lastFailureContent
      //var instance = new Api.WebhooksConfigDto();
      //expect(instance).to.be();
    });

    it('should have the property lastSuccessOn (base name: "lastSuccessOn")', function() {
      // uncomment below and update the code to test the property lastSuccessOn
      //var instance = new Api.WebhooksConfigDto();
      //expect(instance).to.be();
    });

  });

}));
