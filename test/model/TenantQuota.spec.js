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
    instance = new Api.TenantQuota();
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

  describe('TenantQuota', function() {
    it('should create an instance of TenantQuota', function() {
      // uncomment below and update the code to test TenantQuota
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be.a(Api.TenantQuota);
    });

    it('should have the property tenantId (base name: "tenantId")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property priceCurrencySymbol (base name: "priceCurrencySymbol")', function() {
      // uncomment below and update the code to test the property priceCurrencySymbol
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property priceISOCurrencySymbol (base name: "priceISOCurrencySymbol")', function() {
      // uncomment below and update the code to test the property priceISOCurrencySymbol
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "productId")', function() {
      // uncomment below and update the code to test the property productId
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property visible (base name: "visible")', function() {
      // uncomment below and update the code to test the property visible
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property wallet (base name: "wallet")', function() {
      // uncomment below and update the code to test the property wallet
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property dueDate (base name: "dueDate")', function() {
      // uncomment below and update the code to test the property dueDate
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property features (base name: "features")', function() {
      // uncomment below and update the code to test the property features
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property maxFileSize (base name: "maxFileSize")', function() {
      // uncomment below and update the code to test the property maxFileSize
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property maxTotalSize (base name: "maxTotalSize")', function() {
      // uncomment below and update the code to test the property maxTotalSize
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property countUser (base name: "countUser")', function() {
      // uncomment below and update the code to test the property countUser
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property countRoomAdmin (base name: "countRoomAdmin")', function() {
      // uncomment below and update the code to test the property countRoomAdmin
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property usersInRoom (base name: "usersInRoom")', function() {
      // uncomment below and update the code to test the property usersInRoom
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property countRoom (base name: "countRoom")', function() {
      // uncomment below and update the code to test the property countRoom
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property nonProfit (base name: "nonProfit")', function() {
      // uncomment below and update the code to test the property nonProfit
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property trial (base name: "trial")', function() {
      // uncomment below and update the code to test the property trial
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property free (base name: "free")', function() {
      // uncomment below and update the code to test the property free
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property update (base name: "update")', function() {
      // uncomment below and update the code to test the property update
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property audit (base name: "audit")', function() {
      // uncomment below and update the code to test the property audit
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property docsEdition (base name: "docsEdition")', function() {
      // uncomment below and update the code to test the property docsEdition
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property ldap (base name: "ldap")', function() {
      // uncomment below and update the code to test the property ldap
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property sso (base name: "sso")', function() {
      // uncomment below and update the code to test the property sso
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property statistic (base name: "statistic")', function() {
      // uncomment below and update the code to test the property statistic
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property branding (base name: "branding")', function() {
      // uncomment below and update the code to test the property branding
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property customization (base name: "customization")', function() {
      // uncomment below and update the code to test the property customization
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property lifetime (base name: "lifetime")', function() {
      // uncomment below and update the code to test the property lifetime
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property custom (base name: "custom")', function() {
      // uncomment below and update the code to test the property custom
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property autoBackupRestore (base name: "autoBackupRestore")', function() {
      // uncomment below and update the code to test the property autoBackupRestore
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property oauth (base name: "oauth")', function() {
      // uncomment below and update the code to test the property oauth
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property contentSearch (base name: "contentSearch")', function() {
      // uncomment below and update the code to test the property contentSearch
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property thirdParty (base name: "thirdParty")', function() {
      // uncomment below and update the code to test the property thirdParty
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

    it('should have the property year (base name: "year")', function() {
      // uncomment below and update the code to test the property year
      //var instance = new Api.TenantQuota();
      //expect(instance).to.be();
    });

  });

}));
