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
    instance = new Api.AuthenticationApi();
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

  describe('AuthenticationApi', function() {
    describe('authenticateMe', function() {
      it('should call authenticateMe successfully', function(done) {
        //uncomment below and update the code to test authenticateMe
        //instance.authenticateMe(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('authenticateMeFromBodyWithCode', function() {
      it('should call authenticateMeFromBodyWithCode successfully', function(done) {
        //uncomment below and update the code to test authenticateMeFromBodyWithCode
        //instance.authenticateMeFromBodyWithCode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('checkConfirm', function() {
      it('should call checkConfirm successfully', function(done) {
        //uncomment below and update the code to test checkConfirm
        //instance.checkConfirm(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIsAuthentificated', function() {
      it('should call getIsAuthentificated successfully', function(done) {
        //uncomment below and update the code to test getIsAuthentificated
        //instance.getIsAuthentificated(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logout', function() {
      it('should call logout successfully', function(done) {
        //uncomment below and update the code to test logout
        //instance.logout(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveMobilePhone', function() {
      it('should call saveMobilePhone successfully', function(done) {
        //uncomment below and update the code to test saveMobilePhone
        //instance.saveMobilePhone(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendSmsCode', function() {
      it('should call sendSmsCode successfully', function(done) {
        //uncomment below and update the code to test sendSmsCode
        //instance.sendSmsCode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
