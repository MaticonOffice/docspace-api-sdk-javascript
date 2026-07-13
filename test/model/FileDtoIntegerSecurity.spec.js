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
    instance = new Api.FileDtoIntegerSecurity();
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

  describe('FileDtoIntegerSecurity', function() {
    it('should create an instance of FileDtoIntegerSecurity', function() {
      // uncomment below and update the code to test FileDtoIntegerSecurity
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be.a(Api.FileDtoIntegerSecurity);
    });

    it('should have the property read (base name: "Read")', function() {
      // uncomment below and update the code to test the property read
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "Comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property fillForms (base name: "FillForms")', function() {
      // uncomment below and update the code to test the property fillForms
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property review (base name: "Review")', function() {
      // uncomment below and update the code to test the property review
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property create (base name: "Create")', function() {
      // uncomment below and update the code to test the property create
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property createFrom (base name: "CreateFrom")', function() {
      // uncomment below and update the code to test the property createFrom
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property edit (base name: "Edit")', function() {
      // uncomment below and update the code to test the property edit
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property _delete (base name: "Delete")', function() {
      // uncomment below and update the code to test the property _delete
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property customFilter (base name: "CustomFilter")', function() {
      // uncomment below and update the code to test the property customFilter
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property editRoom (base name: "EditRoom")', function() {
      // uncomment below and update the code to test the property editRoom
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property rename (base name: "Rename")', function() {
      // uncomment below and update the code to test the property rename
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property readHistory (base name: "ReadHistory")', function() {
      // uncomment below and update the code to test the property readHistory
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property lock (base name: "Lock")', function() {
      // uncomment below and update the code to test the property lock
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property editHistory (base name: "EditHistory")', function() {
      // uncomment below and update the code to test the property editHistory
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property copyTo (base name: "CopyTo")', function() {
      // uncomment below and update the code to test the property copyTo
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property copy (base name: "Copy")', function() {
      // uncomment below and update the code to test the property copy
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property moveTo (base name: "MoveTo")', function() {
      // uncomment below and update the code to test the property moveTo
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property move (base name: "Move")', function() {
      // uncomment below and update the code to test the property move
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property pin (base name: "Pin")', function() {
      // uncomment below and update the code to test the property pin
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property mute (base name: "Mute")', function() {
      // uncomment below and update the code to test the property mute
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property editAccess (base name: "EditAccess")', function() {
      // uncomment below and update the code to test the property editAccess
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property duplicate (base name: "Duplicate")', function() {
      // uncomment below and update the code to test the property duplicate
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property submitToFormGallery (base name: "SubmitToFormGallery")', function() {
      // uncomment below and update the code to test the property submitToFormGallery
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property download (base name: "Download")', function() {
      // uncomment below and update the code to test the property download
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property convert (base name: "Convert")', function() {
      // uncomment below and update the code to test the property convert
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property copySharedLink (base name: "CopySharedLink")', function() {
      // uncomment below and update the code to test the property copySharedLink
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property readLinks (base name: "ReadLinks")', function() {
      // uncomment below and update the code to test the property readLinks
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property reconnect (base name: "Reconnect")', function() {
      // uncomment below and update the code to test the property reconnect
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property createRoomFrom (base name: "CreateRoomFrom")', function() {
      // uncomment below and update the code to test the property createRoomFrom
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property copyLink (base name: "CopyLink")', function() {
      // uncomment below and update the code to test the property copyLink
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property embed (base name: "Embed")', function() {
      // uncomment below and update the code to test the property embed
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property changeOwner (base name: "ChangeOwner")', function() {
      // uncomment below and update the code to test the property changeOwner
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property indexExport (base name: "IndexExport")', function() {
      // uncomment below and update the code to test the property indexExport
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property startFilling (base name: "StartFilling")', function() {
      // uncomment below and update the code to test the property startFilling
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property fillingStatus (base name: "FillingStatus")', function() {
      // uncomment below and update the code to test the property fillingStatus
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property resetFilling (base name: "ResetFilling")', function() {
      // uncomment below and update the code to test the property resetFilling
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property stopFilling (base name: "StopFilling")', function() {
      // uncomment below and update the code to test the property stopFilling
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

    it('should have the property openForm (base name: "OpenForm")', function() {
      // uncomment below and update the code to test the property openForm
      //var instance = new Api.FileDtoIntegerSecurity();
      //expect(instance).to.be();
    });

  });

}));
