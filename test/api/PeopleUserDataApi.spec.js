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
    instance = new Api.PeopleUserDataApi();
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

  describe('PeopleUserDataApi', function() {
    describe('getDeletePersonalFolderProgress', function() {
      it('should call getDeletePersonalFolderProgress successfully', function(done) {
        //uncomment below and update the code to test getDeletePersonalFolderProgress
        //instance.getDeletePersonalFolderProgress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getReassignProgress', function() {
      it('should call getReassignProgress successfully', function(done) {
        //uncomment below and update the code to test getReassignProgress
        //instance.getReassignProgress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRemoveProgress', function() {
      it('should call getRemoveProgress successfully', function(done) {
        //uncomment below and update the code to test getRemoveProgress
        //instance.getRemoveProgress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('necessaryReassign', function() {
      it('should call necessaryReassign successfully', function(done) {
        //uncomment below and update the code to test necessaryReassign
        //instance.necessaryReassign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendInstructionsToDelete', function() {
      it('should call sendInstructionsToDelete successfully', function(done) {
        //uncomment below and update the code to test sendInstructionsToDelete
        //instance.sendInstructionsToDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startDeletePersonalFolder', function() {
      it('should call startDeletePersonalFolder successfully', function(done) {
        //uncomment below and update the code to test startDeletePersonalFolder
        //instance.startDeletePersonalFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startReassign', function() {
      it('should call startReassign successfully', function(done) {
        //uncomment below and update the code to test startReassign
        //instance.startReassign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startRemove', function() {
      it('should call startRemove successfully', function(done) {
        //uncomment below and update the code to test startRemove
        //instance.startRemove(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('terminateReassign', function() {
      it('should call terminateReassign successfully', function(done) {
        //uncomment below and update the code to test terminateReassign
        //instance.terminateReassign(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('terminateRemove', function() {
      it('should call terminateRemove successfully', function(done) {
        //uncomment below and update the code to test terminateRemove
        //instance.terminateRemove(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
