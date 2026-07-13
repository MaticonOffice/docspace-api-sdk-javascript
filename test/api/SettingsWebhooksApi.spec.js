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
    instance = new Api.SettingsWebhooksApi();
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

  describe('SettingsWebhooksApi', function() {
    describe('createWebhook', function() {
      it('should call createWebhook successfully', function(done) {
        //uncomment below and update the code to test createWebhook
        //instance.createWebhook(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('enableWebhook', function() {
      it('should call enableWebhook successfully', function(done) {
        //uncomment below and update the code to test enableWebhook
        //instance.enableWebhook(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTenantWebhooks', function() {
      it('should call getTenantWebhooks successfully', function(done) {
        //uncomment below and update the code to test getTenantWebhooks
        //instance.getTenantWebhooks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWebhookTriggers', function() {
      it('should call getWebhookTriggers successfully', function(done) {
        //uncomment below and update the code to test getWebhookTriggers
        //instance.getWebhookTriggers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWebhooksLogs', function() {
      it('should call getWebhooksLogs successfully', function(done) {
        //uncomment below and update the code to test getWebhooksLogs
        //instance.getWebhooksLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeWebhook', function() {
      it('should call removeWebhook successfully', function(done) {
        //uncomment below and update the code to test removeWebhook
        //instance.removeWebhook(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retryWebhook', function() {
      it('should call retryWebhook successfully', function(done) {
        //uncomment below and update the code to test retryWebhook
        //instance.retryWebhook(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retryWebhooks', function() {
      it('should call retryWebhooks successfully', function(done) {
        //uncomment below and update the code to test retryWebhooks
        //instance.retryWebhooks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWebhook', function() {
      it('should call updateWebhook successfully', function(done) {
        //uncomment below and update the code to test updateWebhook
        //instance.updateWebhook(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
