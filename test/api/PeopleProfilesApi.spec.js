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
    instance = new Api.PeopleProfilesApi();
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

  describe('PeopleProfilesApi', function() {
    describe('addMember', function() {
      it('should call addMember successfully', function(done) {
        //uncomment below and update the code to test addMember
        //instance.addMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMember', function() {
      it('should call deleteMember successfully', function(done) {
        //uncomment below and update the code to test deleteMember
        //instance.deleteMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProfile', function() {
      it('should call deleteProfile successfully', function(done) {
        //uncomment below and update the code to test deleteProfile
        //instance.deleteProfile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllProfiles', function() {
      it('should call getAllProfiles successfully', function(done) {
        //uncomment below and update the code to test getAllProfiles
        //instance.getAllProfiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClaims', function() {
      it('should call getClaims successfully', function(done) {
        //uncomment below and update the code to test getClaims
        //instance.getClaims(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProfileByEmail', function() {
      it('should call getProfileByEmail successfully', function(done) {
        //uncomment below and update the code to test getProfileByEmail
        //instance.getProfileByEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProfileByUserId', function() {
      it('should call getProfileByUserId successfully', function(done) {
        //uncomment below and update the code to test getProfileByUserId
        //instance.getProfileByUserId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSelfProfile', function() {
      it('should call getSelfProfile successfully', function(done) {
        //uncomment below and update the code to test getSelfProfile
        //instance.getSelfProfile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('inviteUsers', function() {
      it('should call inviteUsers successfully', function(done) {
        //uncomment below and update the code to test inviteUsers
        //instance.inviteUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeUsers', function() {
      it('should call removeUsers successfully', function(done) {
        //uncomment below and update the code to test removeUsers
        //instance.removeUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('resendUserInvites', function() {
      it('should call resendUserInvites successfully', function(done) {
        //uncomment below and update the code to test resendUserInvites
        //instance.resendUserInvites(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendEmailChangeInstructions', function() {
      it('should call sendEmailChangeInstructions successfully', function(done) {
        //uncomment below and update the code to test sendEmailChangeInstructions
        //instance.sendEmailChangeInstructions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMember', function() {
      it('should call updateMember successfully', function(done) {
        //uncomment below and update the code to test updateMember
        //instance.updateMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMemberCulture', function() {
      it('should call updateMemberCulture successfully', function(done) {
        //uncomment below and update the code to test updateMemberCulture
        //instance.updateMemberCulture(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
