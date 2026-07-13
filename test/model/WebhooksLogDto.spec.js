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
    instance = new Api.WebhooksLogDto();
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

  describe('WebhooksLogDto', function() {
    it('should create an instance of WebhooksLogDto', function() {
      // uncomment below and update the code to test WebhooksLogDto
      //var instance = new Api.WebhooksLogDto();
      //expect(instance).to.be.a(Api.WebhooksLogDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Api.WebhooksLogDto();
      //expect(instance).to.be();
    });

    it('should have the property configName (base name: "configName")', function() {
      // uncomment below and update the code to test the property configName
      //var instance = new Api.WebhooksLogDto();
      //expect(instance).to.be();
    });

    it('should have the property trigger (base name: "trigger")', function() {
      // uncomment below and update the code to test the property trigger
      //var instance = new Api.WebhooksLogDto();
      //expect(instance).to.be();
    });

    it('should have the property creationTime (base name: "creationTime")', function() {
      // uncomment below and update the code to test the property creationTime
      //var instance = new Api.WebhooksLogDto();
      //expect(instance).to.be();
    });

    it('should have the property method (base name: "method")', function() {
      // uncomment below and update the code to test the property method
      //var instance = new Api.WebhooksLogDto();
      //expect(instance).to.be();
    });

    it('should have the property route (base name: "route")', function() {
      // uncomment below and update the code to test the property route
      //var instance = new Api.WebhooksLogDto();
      //expect(instance).to.be();
    });

    it('should have the property requestHeaders (base name: "requestHeaders")', function() {
      // uncomment below and update the code to test the property requestHeaders
      //var instance = new Api.WebhooksLogDto();
      //expect(instance).to.be();
    });

    it('should have the property requestPayload (base name: "requestPayload")', function() {
      // uncomment below and update the code to test the property requestPayload
      //var instance = new Api.WebhooksLogDto();
      //expect(instance).to.be();
    });

    it('should have the property responseHeaders (base name: "responseHeaders")', function() {
      // uncomment below and update the code to test the property responseHeaders
      //var instance = new Api.WebhooksLogDto();
      //expect(instance).to.be();
    });

    it('should have the property responsePayload (base name: "responsePayload")', function() {
      // uncomment below and update the code to test the property responsePayload
      //var instance = new Api.WebhooksLogDto();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new Api.WebhooksLogDto();
      //expect(instance).to.be();
    });

    it('should have the property delivery (base name: "delivery")', function() {
      // uncomment below and update the code to test the property delivery
      //var instance = new Api.WebhooksLogDto();
      //expect(instance).to.be();
    });

  });

}));
