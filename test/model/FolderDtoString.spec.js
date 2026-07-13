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
    instance = new Api.FolderDtoString();
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

  describe('FolderDtoString', function() {
    it('should create an instance of FolderDtoString', function() {
      // uncomment below and update the code to test FolderDtoString
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be.a(Api.FolderDtoString);
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property access (base name: "access")', function() {
      // uncomment below and update the code to test the property access
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property shared (base name: "shared")', function() {
      // uncomment below and update the code to test the property shared
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property updated (base name: "updated")', function() {
      // uncomment below and update the code to test the property updated
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property autoDelete (base name: "autoDelete")', function() {
      // uncomment below and update the code to test the property autoDelete
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property rootFolderType (base name: "rootFolderType")', function() {
      // uncomment below and update the code to test the property rootFolderType
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property parentRoomType (base name: "parentRoomType")', function() {
      // uncomment below and update the code to test the property parentRoomType
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property updatedBy (base name: "updatedBy")', function() {
      // uncomment below and update the code to test the property updatedBy
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property providerItem (base name: "providerItem")', function() {
      // uncomment below and update the code to test the property providerItem
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property providerKey (base name: "providerKey")', function() {
      // uncomment below and update the code to test the property providerKey
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property providerId (base name: "providerId")', function() {
      // uncomment below and update the code to test the property providerId
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property order (base name: "order")', function() {
      // uncomment below and update the code to test the property order
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property rootFolderId (base name: "rootFolderId")', function() {
      // uncomment below and update the code to test the property rootFolderId
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property originId (base name: "originId")', function() {
      // uncomment below and update the code to test the property originId
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property originRoomId (base name: "originRoomId")', function() {
      // uncomment below and update the code to test the property originRoomId
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property originTitle (base name: "originTitle")', function() {
      // uncomment below and update the code to test the property originTitle
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property originRoomTitle (base name: "originRoomTitle")', function() {
      // uncomment below and update the code to test the property originRoomTitle
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property canShare (base name: "canShare")', function() {
      // uncomment below and update the code to test the property canShare
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property security (base name: "security")', function() {
      // uncomment below and update the code to test the property security
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property requestToken (base name: "requestToken")', function() {
      // uncomment below and update the code to test the property requestToken
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property parentId (base name: "parentId")', function() {
      // uncomment below and update the code to test the property parentId
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property filesCount (base name: "filesCount")', function() {
      // uncomment below and update the code to test the property filesCount
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property foldersCount (base name: "foldersCount")', function() {
      // uncomment below and update the code to test the property foldersCount
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property isShareable (base name: "isShareable")', function() {
      // uncomment below and update the code to test the property isShareable
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property isFavorite (base name: "isFavorite")', function() {
      // uncomment below and update the code to test the property isFavorite
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property mute (base name: "mute")', function() {
      // uncomment below and update the code to test the property mute
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property pinned (base name: "pinned")', function() {
      // uncomment below and update the code to test the property pinned
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property roomType (base name: "roomType")', function() {
      // uncomment below and update the code to test the property roomType
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property _private (base name: "private")', function() {
      // uncomment below and update the code to test the property _private
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property indexing (base name: "indexing")', function() {
      // uncomment below and update the code to test the property indexing
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property denyDownload (base name: "denyDownload")', function() {
      // uncomment below and update the code to test the property denyDownload
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property lifetime (base name: "lifetime")', function() {
      // uncomment below and update the code to test the property lifetime
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property watermark (base name: "watermark")', function() {
      // uncomment below and update the code to test the property watermark
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property inRoom (base name: "inRoom")', function() {
      // uncomment below and update the code to test the property inRoom
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property quotaLimit (base name: "quotaLimit")', function() {
      // uncomment below and update the code to test the property quotaLimit
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property isCustomQuota (base name: "isCustomQuota")', function() {
      // uncomment below and update the code to test the property isCustomQuota
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property usedSpace (base name: "usedSpace")', function() {
      // uncomment below and update the code to test the property usedSpace
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property external (base name: "external")', function() {
      // uncomment below and update the code to test the property external
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property passwordProtected (base name: "passwordProtected")', function() {
      // uncomment below and update the code to test the property passwordProtected
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property expired (base name: "expired")', function() {
      // uncomment below and update the code to test the property expired
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

    it('should have the property fileEntryType (base name: "fileEntryType")', function() {
      // uncomment below and update the code to test the property fileEntryType
      //var instance = new Api.FolderDtoString();
      //expect(instance).to.be();
    });

  });

}));
