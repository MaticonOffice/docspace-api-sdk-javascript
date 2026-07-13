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
    instance = new Api.FileDtoInteger();
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

  describe('FileDtoInteger', function() {
    it('should create an instance of FileDtoInteger', function() {
      // uncomment below and update the code to test FileDtoInteger
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be.a(Api.FileDtoInteger);
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property access (base name: "access")', function() {
      // uncomment below and update the code to test the property access
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property shared (base name: "shared")', function() {
      // uncomment below and update the code to test the property shared
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property updated (base name: "updated")', function() {
      // uncomment below and update the code to test the property updated
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property autoDelete (base name: "autoDelete")', function() {
      // uncomment below and update the code to test the property autoDelete
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property rootFolderType (base name: "rootFolderType")', function() {
      // uncomment below and update the code to test the property rootFolderType
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property parentRoomType (base name: "parentRoomType")', function() {
      // uncomment below and update the code to test the property parentRoomType
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property updatedBy (base name: "updatedBy")', function() {
      // uncomment below and update the code to test the property updatedBy
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property providerItem (base name: "providerItem")', function() {
      // uncomment below and update the code to test the property providerItem
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property providerKey (base name: "providerKey")', function() {
      // uncomment below and update the code to test the property providerKey
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property providerId (base name: "providerId")', function() {
      // uncomment below and update the code to test the property providerId
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property order (base name: "order")', function() {
      // uncomment below and update the code to test the property order
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property rootFolderId (base name: "rootFolderId")', function() {
      // uncomment below and update the code to test the property rootFolderId
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property originId (base name: "originId")', function() {
      // uncomment below and update the code to test the property originId
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property originRoomId (base name: "originRoomId")', function() {
      // uncomment below and update the code to test the property originRoomId
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property originTitle (base name: "originTitle")', function() {
      // uncomment below and update the code to test the property originTitle
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property originRoomTitle (base name: "originRoomTitle")', function() {
      // uncomment below and update the code to test the property originRoomTitle
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property canShare (base name: "canShare")', function() {
      // uncomment below and update the code to test the property canShare
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property security (base name: "security")', function() {
      // uncomment below and update the code to test the property security
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property requestToken (base name: "requestToken")', function() {
      // uncomment below and update the code to test the property requestToken
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property folderId (base name: "folderId")', function() {
      // uncomment below and update the code to test the property folderId
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property versionGroup (base name: "versionGroup")', function() {
      // uncomment below and update the code to test the property versionGroup
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property contentLength (base name: "contentLength")', function() {
      // uncomment below and update the code to test the property contentLength
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property pureContentLength (base name: "pureContentLength")', function() {
      // uncomment below and update the code to test the property pureContentLength
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property fileStatus (base name: "fileStatus")', function() {
      // uncomment below and update the code to test the property fileStatus
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property mute (base name: "mute")', function() {
      // uncomment below and update the code to test the property mute
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property viewUrl (base name: "viewUrl")', function() {
      // uncomment below and update the code to test the property viewUrl
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property webUrl (base name: "webUrl")', function() {
      // uncomment below and update the code to test the property webUrl
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property shortWebUrl (base name: "shortWebUrl")', function() {
      // uncomment below and update the code to test the property shortWebUrl
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property fileType (base name: "fileType")', function() {
      // uncomment below and update the code to test the property fileType
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property fileExst (base name: "fileExst")', function() {
      // uncomment below and update the code to test the property fileExst
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property encrypted (base name: "encrypted")', function() {
      // uncomment below and update the code to test the property encrypted
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property thumbnailUrl (base name: "thumbnailUrl")', function() {
      // uncomment below and update the code to test the property thumbnailUrl
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property thumbnailStatus (base name: "thumbnailStatus")', function() {
      // uncomment below and update the code to test the property thumbnailStatus
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property locked (base name: "locked")', function() {
      // uncomment below and update the code to test the property locked
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property lockedBy (base name: "lockedBy")', function() {
      // uncomment below and update the code to test the property lockedBy
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property hasDraft (base name: "hasDraft")', function() {
      // uncomment below and update the code to test the property hasDraft
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property formFillingStatus (base name: "formFillingStatus")', function() {
      // uncomment below and update the code to test the property formFillingStatus
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property isForm (base name: "isForm")', function() {
      // uncomment below and update the code to test the property isForm
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property customFilterEnabled (base name: "customFilterEnabled")', function() {
      // uncomment below and update the code to test the property customFilterEnabled
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property customFilterEnabledBy (base name: "customFilterEnabledBy")', function() {
      // uncomment below and update the code to test the property customFilterEnabledBy
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property startFilling (base name: "startFilling")', function() {
      // uncomment below and update the code to test the property startFilling
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property inProcessFolderId (base name: "inProcessFolderId")', function() {
      // uncomment below and update the code to test the property inProcessFolderId
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property inProcessFolderTitle (base name: "inProcessFolderTitle")', function() {
      // uncomment below and update the code to test the property inProcessFolderTitle
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property draftLocation (base name: "draftLocation")', function() {
      // uncomment below and update the code to test the property draftLocation
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property viewAccessibility (base name: "viewAccessibility")', function() {
      // uncomment below and update the code to test the property viewAccessibility
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property availableExternalRights (base name: "availableExternalRights")', function() {
      // uncomment below and update the code to test the property availableExternalRights
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property lastOpened (base name: "lastOpened")', function() {
      // uncomment below and update the code to test the property lastOpened
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property expired (base name: "expired")', function() {
      // uncomment below and update the code to test the property expired
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

    it('should have the property fileEntryType (base name: "fileEntryType")', function() {
      // uncomment below and update the code to test the property fileEntryType
      //var instance = new Api.FileDtoInteger();
      //expect(instance).to.be();
    });

  });

}));
