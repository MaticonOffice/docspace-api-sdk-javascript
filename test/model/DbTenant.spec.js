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
    instance = new Api.DbTenant();
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

  describe('DbTenant', function() {
    it('should create an instance of DbTenant', function() {
      // uncomment below and update the code to test DbTenant
      //var instance = new Api.DbTenant();
      //expect(instance).to.be.a(Api.DbTenant);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Api.DbTenant();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Api.DbTenant();
      //expect(instance).to.be();
    });

    it('should have the property alias (base name: "alias")', function() {
      // uncomment below and update the code to test the property alias
      //var instance = new Api.DbTenant();
      //expect(instance).to.be();
    });

    it('should have the property mappedDomain (base name: "mappedDomain")', function() {
      // uncomment below and update the code to test the property mappedDomain
      //var instance = new Api.DbTenant();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new Api.DbTenant();
      //expect(instance).to.be();
    });

    it('should have the property versionChanged (base name: "version_Changed")', function() {
      // uncomment below and update the code to test the property versionChanged
      //var instance = new Api.DbTenant();
      //expect(instance).to.be();
    });

    it('should have the property versionChanged (base name: "versionChanged")', function() {
      // uncomment below and update the code to test the property versionChanged
      //var instance = new Api.DbTenant();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instance = new Api.DbTenant();
      //expect(instance).to.be();
    });

    it('should have the property timeZone (base name: "timeZone")', function() {
      // uncomment below and update the code to test the property timeZone
      //var instance = new Api.DbTenant();
      //expect(instance).to.be();
    });

    it('should have the property trustedDomainsRaw (base name: "trustedDomainsRaw")', function() {
      // uncomment below and update the code to test the property trustedDomainsRaw
      //var instance = new Api.DbTenant();
      //expect(instance).to.be();
    });

    it('should have the property trustedDomainsEnabled (base name: "trustedDomainsEnabled")', function() {
      // uncomment below and update the code to test the property trustedDomainsEnabled
      //var instance = new Api.DbTenant();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new Api.DbTenant();
      //expect(instance).to.be();
    });

    it('should have the property statusChanged (base name: "statusChanged")', function() {
      // uncomment below and update the code to test the property statusChanged
      //var instance = new Api.DbTenant();
      //expect(instance).to.be();
    });

    it('should have the property statusChangedHack (base name: "statusChangedHack")', function() {
      // uncomment below and update the code to test the property statusChangedHack
      //var instance = new Api.DbTenant();
      //expect(instance).to.be();
    });

    it('should have the property creationDateTime (base name: "creationDateTime")', function() {
      // uncomment below and update the code to test the property creationDateTime
      //var instance = new Api.DbTenant();
      //expect(instance).to.be();
    });

    it('should have the property ownerId (base name: "ownerId")', function() {
      // uncomment below and update the code to test the property ownerId
      //var instance = new Api.DbTenant();
      //expect(instance).to.be();
    });

    it('should have the property paymentId (base name: "paymentId")', function() {
      // uncomment below and update the code to test the property paymentId
      //var instance = new Api.DbTenant();
      //expect(instance).to.be();
    });

    it('should have the property industry (base name: "industry")', function() {
      // uncomment below and update the code to test the property industry
      //var instance = new Api.DbTenant();
      //expect(instance).to.be();
    });

    it('should have the property lastModified (base name: "lastModified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instance = new Api.DbTenant();
      //expect(instance).to.be();
    });

    it('should have the property calls (base name: "calls")', function() {
      // uncomment below and update the code to test the property calls
      //var instance = new Api.DbTenant();
      //expect(instance).to.be();
    });

    it('should have the property partner (base name: "partner")', function() {
      // uncomment below and update the code to test the property partner
      //var instance = new Api.DbTenant();
      //expect(instance).to.be();
    });

  });

}));
