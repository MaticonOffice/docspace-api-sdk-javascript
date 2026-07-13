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
    instance = new Api.TenantDto();
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

  describe('TenantDto', function() {
    it('should create an instance of TenantDto', function() {
      // uncomment below and update the code to test TenantDto
      //var instance = new Api.TenantDto();
      //expect(instance).to.be.a(Api.TenantDto);
    });

    it('should have the property affiliateId (base name: "affiliateId")', function() {
      // uncomment below and update the code to test the property affiliateId
      //var instance = new Api.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property tenantAlias (base name: "tenantAlias")', function() {
      // uncomment below and update the code to test the property tenantAlias
      //var instance = new Api.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property calls (base name: "calls")', function() {
      // uncomment below and update the code to test the property calls
      //var instance = new Api.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property campaign (base name: "campaign")', function() {
      // uncomment below and update the code to test the property campaign
      //var instance = new Api.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property creationDateTime (base name: "creationDateTime")', function() {
      // uncomment below and update the code to test the property creationDateTime
      //var instance = new Api.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property hostedRegion (base name: "hostedRegion")', function() {
      // uncomment below and update the code to test the property hostedRegion
      //var instance = new Api.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property tenantId (base name: "tenantId")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instance = new Api.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property industry (base name: "industry")', function() {
      // uncomment below and update the code to test the property industry
      //var instance = new Api.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instance = new Api.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property lastModified (base name: "lastModified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instance = new Api.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property mappedDomain (base name: "mappedDomain")', function() {
      // uncomment below and update the code to test the property mappedDomain
      //var instance = new Api.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Api.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property ownerId (base name: "ownerId")', function() {
      // uncomment below and update the code to test the property ownerId
      //var instance = new Api.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property paymentId (base name: "paymentId")', function() {
      // uncomment below and update the code to test the property paymentId
      //var instance = new Api.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property spam (base name: "spam")', function() {
      // uncomment below and update the code to test the property spam
      //var instance = new Api.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new Api.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property statusChangeDate (base name: "statusChangeDate")', function() {
      // uncomment below and update the code to test the property statusChangeDate
      //var instance = new Api.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property timeZone (base name: "timeZone")', function() {
      // uncomment below and update the code to test the property timeZone
      //var instance = new Api.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property trustedDomains (base name: "trustedDomains")', function() {
      // uncomment below and update the code to test the property trustedDomains
      //var instance = new Api.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property trustedDomainsRaw (base name: "trustedDomainsRaw")', function() {
      // uncomment below and update the code to test the property trustedDomainsRaw
      //var instance = new Api.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property trustedDomainsType (base name: "trustedDomainsType")', function() {
      // uncomment below and update the code to test the property trustedDomainsType
      //var instance = new Api.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new Api.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property versionChanged (base name: "versionChanged")', function() {
      // uncomment below and update the code to test the property versionChanged
      //var instance = new Api.TenantDto();
      //expect(instance).to.be();
    });

    it('should have the property region (base name: "region")', function() {
      // uncomment below and update the code to test the property region
      //var instance = new Api.TenantDto();
      //expect(instance).to.be();
    });

  });

}));
