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
    instance = new Api.SettingsCommonSettingsApi();
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

  describe('SettingsCommonSettingsApi', function() {
    describe('closeAdminHelper', function() {
      it('should call closeAdminHelper successfully', function(done) {
        //uncomment below and update the code to test closeAdminHelper
        //instance.closeAdminHelper(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('completeWizard', function() {
      it('should call completeWizard successfully', function(done) {
        //uncomment below and update the code to test completeWizard
        //instance.completeWizard(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('configureDeepLink', function() {
      it('should call configureDeepLink successfully', function(done) {
        //uncomment below and update the code to test configureDeepLink
        //instance.configureDeepLink(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePortalColorTheme', function() {
      it('should call deletePortalColorTheme successfully', function(done) {
        //uncomment below and update the code to test deletePortalColorTheme
        //instance.deletePortalColorTheme(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeepLinkSettings', function() {
      it('should call getDeepLinkSettings successfully', function(done) {
        //uncomment below and update the code to test getDeepLinkSettings
        //instance.getDeepLinkSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPaymentSettings', function() {
      it('should call getPaymentSettings successfully', function(done) {
        //uncomment below and update the code to test getPaymentSettings
        //instance.getPaymentSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPortalColorTheme', function() {
      it('should call getPortalColorTheme successfully', function(done) {
        //uncomment below and update the code to test getPortalColorTheme
        //instance.getPortalColorTheme(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPortalHostname', function() {
      it('should call getPortalHostname successfully', function(done) {
        //uncomment below and update the code to test getPortalHostname
        //instance.getPortalHostname(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPortalLogo', function() {
      it('should call getPortalLogo successfully', function(done) {
        //uncomment below and update the code to test getPortalLogo
        //instance.getPortalLogo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPortalSettings', function() {
      it('should call getPortalSettings successfully', function(done) {
        //uncomment below and update the code to test getPortalSettings
        //instance.getPortalSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSocketSettings', function() {
      it('should call getSocketSettings successfully', function(done) {
        //uncomment below and update the code to test getSocketSettings
        //instance.getSocketSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSupportedCultures', function() {
      it('should call getSupportedCultures successfully', function(done) {
        //uncomment below and update the code to test getSupportedCultures
        //instance.getSupportedCultures(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTenantUserInvitationSettings', function() {
      it('should call getTenantUserInvitationSettings successfully', function(done) {
        //uncomment below and update the code to test getTenantUserInvitationSettings
        //instance.getTenantUserInvitationSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTimeZones', function() {
      it('should call getTimeZones successfully', function(done) {
        //uncomment below and update the code to test getTimeZones
        //instance.getTimeZones(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveDnsSettings', function() {
      it('should call saveDnsSettings successfully', function(done) {
        //uncomment below and update the code to test saveDnsSettings
        //instance.saveDnsSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveMailDomainSettings', function() {
      it('should call saveMailDomainSettings successfully', function(done) {
        //uncomment below and update the code to test saveMailDomainSettings
        //instance.saveMailDomainSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('savePortalColorTheme', function() {
      it('should call savePortalColorTheme successfully', function(done) {
        //uncomment below and update the code to test savePortalColorTheme
        //instance.savePortalColorTheme(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateEmailActivationSettings', function() {
      it('should call updateEmailActivationSettings successfully', function(done) {
        //uncomment below and update the code to test updateEmailActivationSettings
        //instance.updateEmailActivationSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateInvitationSettings', function() {
      it('should call updateInvitationSettings successfully', function(done) {
        //uncomment below and update the code to test updateInvitationSettings
        //instance.updateInvitationSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
