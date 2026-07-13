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
    instance = new Api.GroupApi();
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

  describe('GroupApi', function() {
    describe('addGroup', function() {
      it('should call addGroup successfully', function(done) {
        //uncomment below and update the code to test addGroup
        //instance.addGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addMembersTo', function() {
      it('should call addMembersTo successfully', function(done) {
        //uncomment below and update the code to test addMembersTo
        //instance.addMembersTo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteGroup', function() {
      it('should call deleteGroup successfully', function(done) {
        //uncomment below and update the code to test deleteGroup
        //instance.deleteGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGroup', function() {
      it('should call getGroup successfully', function(done) {
        //uncomment below and update the code to test getGroup
        //instance.getGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGroupByUserId', function() {
      it('should call getGroupByUserId successfully', function(done) {
        //uncomment below and update the code to test getGroupByUserId
        //instance.getGroupByUserId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGroups', function() {
      it('should call getGroups successfully', function(done) {
        //uncomment below and update the code to test getGroups
        //instance.getGroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('moveMembersTo', function() {
      it('should call moveMembersTo successfully', function(done) {
        //uncomment below and update the code to test moveMembersTo
        //instance.moveMembersTo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeMembersFrom', function() {
      it('should call removeMembersFrom successfully', function(done) {
        //uncomment below and update the code to test removeMembersFrom
        //instance.removeMembersFrom(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setGroupManager', function() {
      it('should call setGroupManager successfully', function(done) {
        //uncomment below and update the code to test setGroupManager
        //instance.setGroupManager(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setMembersTo', function() {
      it('should call setMembersTo successfully', function(done) {
        //uncomment below and update the code to test setMembersTo
        //instance.setMembersTo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateGroup', function() {
      it('should call updateGroup successfully', function(done) {
        //uncomment below and update the code to test updateGroup
        //instance.updateGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
