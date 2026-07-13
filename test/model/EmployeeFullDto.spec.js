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
    instance = new Api.EmployeeFullDto();
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

  describe('EmployeeFullDto', function() {
    it('should create an instance of EmployeeFullDto', function() {
      // uncomment below and update the code to test EmployeeFullDto
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be.a(Api.EmployeeFullDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "displayName")', function() {
      // uncomment below and update the code to test the property displayName
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property avatar (base name: "avatar")', function() {
      // uncomment below and update the code to test the property avatar
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property avatarOriginal (base name: "avatarOriginal")', function() {
      // uncomment below and update the code to test the property avatarOriginal
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property avatarMax (base name: "avatarMax")', function() {
      // uncomment below and update the code to test the property avatarMax
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property avatarMedium (base name: "avatarMedium")', function() {
      // uncomment below and update the code to test the property avatarMedium
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property avatarSmall (base name: "avatarSmall")', function() {
      // uncomment below and update the code to test the property avatarSmall
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property profileUrl (base name: "profileUrl")', function() {
      // uncomment below and update the code to test the property profileUrl
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property hasAvatar (base name: "hasAvatar")', function() {
      // uncomment below and update the code to test the property hasAvatar
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property isAnonim (base name: "isAnonim")', function() {
      // uncomment below and update the code to test the property isAnonim
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property userName (base name: "userName")', function() {
      // uncomment below and update the code to test the property userName
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property contacts (base name: "contacts")', function() {
      // uncomment below and update the code to test the property contacts
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property birthday (base name: "birthday")', function() {
      // uncomment below and update the code to test the property birthday
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property sex (base name: "sex")', function() {
      // uncomment below and update the code to test the property sex
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property activationStatus (base name: "activationStatus")', function() {
      // uncomment below and update the code to test the property activationStatus
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property terminated (base name: "terminated")', function() {
      // uncomment below and update the code to test the property terminated
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property department (base name: "department")', function() {
      // uncomment below and update the code to test the property department
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property workFrom (base name: "workFrom")', function() {
      // uncomment below and update the code to test the property workFrom
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property isAdmin (base name: "isAdmin")', function() {
      // uncomment below and update the code to test the property isAdmin
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property isRoomAdmin (base name: "isRoomAdmin")', function() {
      // uncomment below and update the code to test the property isRoomAdmin
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property isLDAP (base name: "isLDAP")', function() {
      // uncomment below and update the code to test the property isLDAP
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property listAdminModules (base name: "listAdminModules")', function() {
      // uncomment below and update the code to test the property listAdminModules
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property isOwner (base name: "isOwner")', function() {
      // uncomment below and update the code to test the property isOwner
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property isVisitor (base name: "isVisitor")', function() {
      // uncomment below and update the code to test the property isVisitor
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property isCollaborator (base name: "isCollaborator")', function() {
      // uncomment below and update the code to test the property isCollaborator
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property cultureName (base name: "cultureName")', function() {
      // uncomment below and update the code to test the property cultureName
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property mobilePhone (base name: "mobilePhone")', function() {
      // uncomment below and update the code to test the property mobilePhone
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property mobilePhoneActivationStatus (base name: "mobilePhoneActivationStatus")', function() {
      // uncomment below and update the code to test the property mobilePhoneActivationStatus
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property isSSO (base name: "isSSO")', function() {
      // uncomment below and update the code to test the property isSSO
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property theme (base name: "theme")', function() {
      // uncomment below and update the code to test the property theme
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property quotaLimit (base name: "quotaLimit")', function() {
      // uncomment below and update the code to test the property quotaLimit
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property usedSpace (base name: "usedSpace")', function() {
      // uncomment below and update the code to test the property usedSpace
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property shared (base name: "shared")', function() {
      // uncomment below and update the code to test the property shared
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property isCustomQuota (base name: "isCustomQuota")', function() {
      // uncomment below and update the code to test the property isCustomQuota
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property loginEventId (base name: "loginEventId")', function() {
      // uncomment below and update the code to test the property loginEventId
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property registrationDate (base name: "registrationDate")', function() {
      // uncomment below and update the code to test the property registrationDate
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property hasPersonalFolder (base name: "hasPersonalFolder")', function() {
      // uncomment below and update the code to test the property hasPersonalFolder
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

    it('should have the property tfaAppEnabled (base name: "tfaAppEnabled")', function() {
      // uncomment below and update the code to test the property tfaAppEnabled
      //var instance = new Api.EmployeeFullDto();
      //expect(instance).to.be();
    });

  });

}));
