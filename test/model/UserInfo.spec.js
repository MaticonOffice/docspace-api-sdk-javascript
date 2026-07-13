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
    instance = new Api.UserInfo();
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

  describe('UserInfo', function() {
    it('should create an instance of UserInfo', function() {
      // uncomment below and update the code to test UserInfo
      //var instance = new Api.UserInfo();
      //expect(instance).to.be.a(Api.UserInfo);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property userName (base name: "userName")', function() {
      // uncomment below and update the code to test the property userName
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property birthDate (base name: "birthDate")', function() {
      // uncomment below and update the code to test the property birthDate
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property sex (base name: "sex")', function() {
      // uncomment below and update the code to test the property sex
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property activationStatus (base name: "activationStatus")', function() {
      // uncomment below and update the code to test the property activationStatus
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property terminatedDate (base name: "terminatedDate")', function() {
      // uncomment below and update the code to test the property terminatedDate
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property workFromDate (base name: "workFromDate")', function() {
      // uncomment below and update the code to test the property workFromDate
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property contacts (base name: "contacts")', function() {
      // uncomment below and update the code to test the property contacts
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property contactsList (base name: "contactsList")', function() {
      // uncomment below and update the code to test the property contactsList
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property removed (base name: "removed")', function() {
      // uncomment below and update the code to test the property removed
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property lastModified (base name: "lastModified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property tenantId (base name: "tenantId")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "isActive")', function() {
      // uncomment below and update the code to test the property isActive
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property cultureName (base name: "cultureName")', function() {
      // uncomment below and update the code to test the property cultureName
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property mobilePhone (base name: "mobilePhone")', function() {
      // uncomment below and update the code to test the property mobilePhone
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property mobilePhoneActivationStatus (base name: "mobilePhoneActivationStatus")', function() {
      // uncomment below and update the code to test the property mobilePhoneActivationStatus
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property sid (base name: "sid")', function() {
      // uncomment below and update the code to test the property sid
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property ldapQouta (base name: "ldapQouta")', function() {
      // uncomment below and update the code to test the property ldapQouta
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property ssoNameId (base name: "ssoNameId")', function() {
      // uncomment below and update the code to test the property ssoNameId
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property ssoSessionId (base name: "ssoSessionId")', function() {
      // uncomment below and update the code to test the property ssoSessionId
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property spam (base name: "spam")', function() {
      // uncomment below and update the code to test the property spam
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property checkActivation (base name: "checkActivation")', function() {
      // uncomment below and update the code to test the property checkActivation
      //var instance = new Api.UserInfo();
      //expect(instance).to.be();
    });

  });

}));
