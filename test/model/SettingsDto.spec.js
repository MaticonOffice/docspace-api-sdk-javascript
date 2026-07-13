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
    instance = new Api.SettingsDto();
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

  describe('SettingsDto', function() {
    it('should create an instance of SettingsDto', function() {
      // uncomment below and update the code to test SettingsDto
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be.a(Api.SettingsDto);
    });

    it('should have the property timezone (base name: "timezone")', function() {
      // uncomment below and update the code to test the property timezone
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property trustedDomains (base name: "trustedDomains")', function() {
      // uncomment below and update the code to test the property trustedDomains
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property trustedDomainsType (base name: "trustedDomainsType")', function() {
      // uncomment below and update the code to test the property trustedDomainsType
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property culture (base name: "culture")', function() {
      // uncomment below and update the code to test the property culture
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property utcOffset (base name: "utcOffset")', function() {
      // uncomment below and update the code to test the property utcOffset
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property utcHoursOffset (base name: "utcHoursOffset")', function() {
      // uncomment below and update the code to test the property utcHoursOffset
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property greetingSettings (base name: "greetingSettings")', function() {
      // uncomment below and update the code to test the property greetingSettings
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property ownerId (base name: "ownerId")', function() {
      // uncomment below and update the code to test the property ownerId
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property nameSchemaId (base name: "nameSchemaId")', function() {
      // uncomment below and update the code to test the property nameSchemaId
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property enabledJoin (base name: "enabledJoin")', function() {
      // uncomment below and update the code to test the property enabledJoin
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property enableAdmMess (base name: "enableAdmMess")', function() {
      // uncomment below and update the code to test the property enableAdmMess
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property thirdpartyEnable (base name: "thirdpartyEnable")', function() {
      // uncomment below and update the code to test the property thirdpartyEnable
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property docSpace (base name: "docSpace")', function() {
      // uncomment below and update the code to test the property docSpace
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property standalone (base name: "standalone")', function() {
      // uncomment below and update the code to test the property standalone
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property isAmi (base name: "isAmi")', function() {
      // uncomment below and update the code to test the property isAmi
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property baseDomain (base name: "baseDomain")', function() {
      // uncomment below and update the code to test the property baseDomain
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property wizardToken (base name: "wizardToken")', function() {
      // uncomment below and update the code to test the property wizardToken
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property passwordHash (base name: "passwordHash")', function() {
      // uncomment below and update the code to test the property passwordHash
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property firebase (base name: "firebase")', function() {
      // uncomment below and update the code to test the property firebase
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property recaptchaType (base name: "recaptchaType")', function() {
      // uncomment below and update the code to test the property recaptchaType
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property recaptchaPublicKey (base name: "recaptchaPublicKey")', function() {
      // uncomment below and update the code to test the property recaptchaPublicKey
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property debugInfo (base name: "debugInfo")', function() {
      // uncomment below and update the code to test the property debugInfo
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property socketUrl (base name: "socketUrl")', function() {
      // uncomment below and update the code to test the property socketUrl
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property tenantStatus (base name: "tenantStatus")', function() {
      // uncomment below and update the code to test the property tenantStatus
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property tenantAlias (base name: "tenantAlias")', function() {
      // uncomment below and update the code to test the property tenantAlias
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property displayAbout (base name: "displayAbout")', function() {
      // uncomment below and update the code to test the property displayAbout
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property domainValidator (base name: "domainValidator")', function() {
      // uncomment below and update the code to test the property domainValidator
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property zendeskKey (base name: "zendeskKey")', function() {
      // uncomment below and update the code to test the property zendeskKey
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property tagManagerId (base name: "tagManagerId")', function() {
      // uncomment below and update the code to test the property tagManagerId
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property cookieSettingsEnabled (base name: "cookieSettingsEnabled")', function() {
      // uncomment below and update the code to test the property cookieSettingsEnabled
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property limitedAccessSpace (base name: "limitedAccessSpace")', function() {
      // uncomment below and update the code to test the property limitedAccessSpace
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property limitedAccessDevToolsForUsers (base name: "limitedAccessDevToolsForUsers")', function() {
      // uncomment below and update the code to test the property limitedAccessDevToolsForUsers
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property displayBanners (base name: "displayBanners")', function() {
      // uncomment below and update the code to test the property displayBanners
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property userNameRegex (base name: "userNameRegex")', function() {
      // uncomment below and update the code to test the property userNameRegex
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property invitationLimit (base name: "invitationLimit")', function() {
      // uncomment below and update the code to test the property invitationLimit
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property plugins (base name: "plugins")', function() {
      // uncomment below and update the code to test the property plugins
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property deepLink (base name: "deepLink")', function() {
      // uncomment below and update the code to test the property deepLink
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property formGallery (base name: "formGallery")', function() {
      // uncomment below and update the code to test the property formGallery
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property maxImageUploadSize (base name: "maxImageUploadSize")', function() {
      // uncomment below and update the code to test the property maxImageUploadSize
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property logoText (base name: "logoText")', function() {
      // uncomment below and update the code to test the property logoText
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

    it('should have the property externalResources (base name: "externalResources")', function() {
      // uncomment below and update the code to test the property externalResources
      //var instance = new Api.SettingsDto();
      //expect(instance).to.be();
    });

  });

}));
