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
    instance = new Api.RoomsApi();
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

  describe('RoomsApi', function() {
    describe('addRoomTags', function() {
      it('should call addRoomTags successfully', function(done) {
        //uncomment below and update the code to test addRoomTags
        //instance.addRoomTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('archiveRoom', function() {
      it('should call archiveRoom successfully', function(done) {
        //uncomment below and update the code to test archiveRoom
        //instance.archiveRoom(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('changeRoomCover', function() {
      it('should call changeRoomCover successfully', function(done) {
        //uncomment below and update the code to test changeRoomCover
        //instance.changeRoomCover(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRoom', function() {
      it('should call createRoom successfully', function(done) {
        //uncomment below and update the code to test createRoom
        //instance.createRoom(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRoomFromTemplate', function() {
      it('should call createRoomFromTemplate successfully', function(done) {
        //uncomment below and update the code to test createRoomFromTemplate
        //instance.createRoomFromTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRoomLogo', function() {
      it('should call createRoomLogo successfully', function(done) {
        //uncomment below and update the code to test createRoomLogo
        //instance.createRoomLogo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRoomTag', function() {
      it('should call createRoomTag successfully', function(done) {
        //uncomment below and update the code to test createRoomTag
        //instance.createRoomTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRoomTemplate', function() {
      it('should call createRoomTemplate successfully', function(done) {
        //uncomment below and update the code to test createRoomTemplate
        //instance.createRoomTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRoomThirdParty', function() {
      it('should call createRoomThirdParty successfully', function(done) {
        //uncomment below and update the code to test createRoomThirdParty
        //instance.createRoomThirdParty(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCustomTags', function() {
      it('should call deleteCustomTags successfully', function(done) {
        //uncomment below and update the code to test deleteCustomTags
        //instance.deleteCustomTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRoom', function() {
      it('should call deleteRoom successfully', function(done) {
        //uncomment below and update the code to test deleteRoom
        //instance.deleteRoom(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRoomLogo', function() {
      it('should call deleteRoomLogo successfully', function(done) {
        //uncomment below and update the code to test deleteRoomLogo
        //instance.deleteRoomLogo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRoomTags', function() {
      it('should call deleteRoomTags successfully', function(done) {
        //uncomment below and update the code to test deleteRoomTags
        //instance.deleteRoomTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNewRoomItems', function() {
      it('should call getNewRoomItems successfully', function(done) {
        //uncomment below and update the code to test getNewRoomItems
        //instance.getNewRoomItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPublicSettings', function() {
      it('should call getPublicSettings successfully', function(done) {
        //uncomment below and update the code to test getPublicSettings
        //instance.getPublicSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRoomCovers', function() {
      it('should call getRoomCovers successfully', function(done) {
        //uncomment below and update the code to test getRoomCovers
        //instance.getRoomCovers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRoomCreatingStatus', function() {
      it('should call getRoomCreatingStatus successfully', function(done) {
        //uncomment below and update the code to test getRoomCreatingStatus
        //instance.getRoomCreatingStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRoomIndexExport', function() {
      it('should call getRoomIndexExport successfully', function(done) {
        //uncomment below and update the code to test getRoomIndexExport
        //instance.getRoomIndexExport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRoomInfo', function() {
      it('should call getRoomInfo successfully', function(done) {
        //uncomment below and update the code to test getRoomInfo
        //instance.getRoomInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRoomLinks', function() {
      it('should call getRoomLinks successfully', function(done) {
        //uncomment below and update the code to test getRoomLinks
        //instance.getRoomLinks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRoomSecurityInfo', function() {
      it('should call getRoomSecurityInfo successfully', function(done) {
        //uncomment below and update the code to test getRoomSecurityInfo
        //instance.getRoomSecurityInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRoomTagsInfo', function() {
      it('should call getRoomTagsInfo successfully', function(done) {
        //uncomment below and update the code to test getRoomTagsInfo
        //instance.getRoomTagsInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRoomTemplateCreatingStatus', function() {
      it('should call getRoomTemplateCreatingStatus successfully', function(done) {
        //uncomment below and update the code to test getRoomTemplateCreatingStatus
        //instance.getRoomTemplateCreatingStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRoomsFolder', function() {
      it('should call getRoomsFolder successfully', function(done) {
        //uncomment below and update the code to test getRoomsFolder
        //instance.getRoomsFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRoomsNewItems', function() {
      it('should call getRoomsNewItems successfully', function(done) {
        //uncomment below and update the code to test getRoomsNewItems
        //instance.getRoomsNewItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRoomsPrimaryExternalLink', function() {
      it('should call getRoomsPrimaryExternalLink successfully', function(done) {
        //uncomment below and update the code to test getRoomsPrimaryExternalLink
        //instance.getRoomsPrimaryExternalLink(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pinRoom', function() {
      it('should call pinRoom successfully', function(done) {
        //uncomment below and update the code to test pinRoom
        //instance.pinRoom(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reorderRoom', function() {
      it('should call reorderRoom successfully', function(done) {
        //uncomment below and update the code to test reorderRoom
        //instance.reorderRoom(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('resendEmailInvitations', function() {
      it('should call resendEmailInvitations successfully', function(done) {
        //uncomment below and update the code to test resendEmailInvitations
        //instance.resendEmailInvitations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setPublicSettings', function() {
      it('should call setPublicSettings successfully', function(done) {
        //uncomment below and update the code to test setPublicSettings
        //instance.setPublicSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setRoomLink', function() {
      it('should call setRoomLink successfully', function(done) {
        //uncomment below and update the code to test setRoomLink
        //instance.setRoomLink(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setRoomSecurity', function() {
      it('should call setRoomSecurity successfully', function(done) {
        //uncomment below and update the code to test setRoomSecurity
        //instance.setRoomSecurity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startRoomIndexExport', function() {
      it('should call startRoomIndexExport successfully', function(done) {
        //uncomment below and update the code to test startRoomIndexExport
        //instance.startRoomIndexExport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('terminateRoomIndexExport', function() {
      it('should call terminateRoomIndexExport successfully', function(done) {
        //uncomment below and update the code to test terminateRoomIndexExport
        //instance.terminateRoomIndexExport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unarchiveRoom', function() {
      it('should call unarchiveRoom successfully', function(done) {
        //uncomment below and update the code to test unarchiveRoom
        //instance.unarchiveRoom(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unpinRoom', function() {
      it('should call unpinRoom successfully', function(done) {
        //uncomment below and update the code to test unpinRoom
        //instance.unpinRoom(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRoom', function() {
      it('should call updateRoom successfully', function(done) {
        //uncomment below and update the code to test updateRoom
        //instance.updateRoom(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadRoomLogo', function() {
      it('should call uploadRoomLogo successfully', function(done) {
        //uncomment below and update the code to test uploadRoomLogo
        //instance.uploadRoomLogo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
