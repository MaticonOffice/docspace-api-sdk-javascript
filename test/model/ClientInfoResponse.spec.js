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
    instance = new Api.ClientInfoResponse();
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

  describe('ClientInfoResponse', function() {
    it('should create an instance of ClientInfoResponse', function() {
      // uncomment below and update the code to test ClientInfoResponse
      //var instance = new Api.ClientInfoResponse();
      //expect(instance).to.be.a(Api.ClientInfoResponse);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Api.ClientInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new Api.ClientInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property scopes (base name: "scopes")', function() {
      // uncomment below and update the code to test the property scopes
      //var instance = new Api.ClientInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "client_id")', function() {
      // uncomment below and update the code to test the property clientId
      //var instance = new Api.ClientInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property websiteUrl (base name: "website_url")', function() {
      // uncomment below and update the code to test the property websiteUrl
      //var instance = new Api.ClientInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property termsUrl (base name: "terms_url")', function() {
      // uncomment below and update the code to test the property termsUrl
      //var instance = new Api.ClientInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property policyUrl (base name: "policy_url")', function() {
      // uncomment below and update the code to test the property policyUrl
      //var instance = new Api.ClientInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instance = new Api.ClientInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property authenticationMethods (base name: "authentication_methods")', function() {
      // uncomment below and update the code to test the property authenticationMethods
      //var instance = new Api.ClientInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property isPublic (base name: "is_public")', function() {
      // uncomment below and update the code to test the property isPublic
      //var instance = new Api.ClientInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "created_on")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instance = new Api.ClientInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "created_by")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instance = new Api.ClientInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property modifiedOn (base name: "modified_on")', function() {
      // uncomment below and update the code to test the property modifiedOn
      //var instance = new Api.ClientInfoResponse();
      //expect(instance).to.be();
    });

    it('should have the property modifiedBy (base name: "modified_by")', function() {
      // uncomment below and update the code to test the property modifiedBy
      //var instance = new Api.ClientInfoResponse();
      //expect(instance).to.be();
    });

  });

}));
