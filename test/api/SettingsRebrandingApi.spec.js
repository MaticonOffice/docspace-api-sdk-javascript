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
    instance = new Api.SettingsRebrandingApi();
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

  describe('SettingsRebrandingApi', function() {
    describe('deleteAdditionalWhiteLabelSettings', function() {
      it('should call deleteAdditionalWhiteLabelSettings successfully', function(done) {
        //uncomment below and update the code to test deleteAdditionalWhiteLabelSettings
        //instance.deleteAdditionalWhiteLabelSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCompanyWhiteLabelSettings', function() {
      it('should call deleteCompanyWhiteLabelSettings successfully', function(done) {
        //uncomment below and update the code to test deleteCompanyWhiteLabelSettings
        //instance.deleteCompanyWhiteLabelSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAdditionalWhiteLabelSettings', function() {
      it('should call getAdditionalWhiteLabelSettings successfully', function(done) {
        //uncomment below and update the code to test getAdditionalWhiteLabelSettings
        //instance.getAdditionalWhiteLabelSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCompanyWhiteLabelSettings', function() {
      it('should call getCompanyWhiteLabelSettings successfully', function(done) {
        //uncomment below and update the code to test getCompanyWhiteLabelSettings
        //instance.getCompanyWhiteLabelSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEnableWhitelabel', function() {
      it('should call getEnableWhitelabel successfully', function(done) {
        //uncomment below and update the code to test getEnableWhitelabel
        //instance.getEnableWhitelabel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIsDefaultWhiteLabelLogoText', function() {
      it('should call getIsDefaultWhiteLabelLogoText successfully', function(done) {
        //uncomment below and update the code to test getIsDefaultWhiteLabelLogoText
        //instance.getIsDefaultWhiteLabelLogoText(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIsDefaultWhiteLabelLogos', function() {
      it('should call getIsDefaultWhiteLabelLogos successfully', function(done) {
        //uncomment below and update the code to test getIsDefaultWhiteLabelLogos
        //instance.getIsDefaultWhiteLabelLogos(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLicensorData', function() {
      it('should call getLicensorData successfully', function(done) {
        //uncomment below and update the code to test getLicensorData
        //instance.getLicensorData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWhiteLabelLogoText', function() {
      it('should call getWhiteLabelLogoText successfully', function(done) {
        //uncomment below and update the code to test getWhiteLabelLogoText
        //instance.getWhiteLabelLogoText(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWhiteLabelLogos', function() {
      it('should call getWhiteLabelLogos successfully', function(done) {
        //uncomment below and update the code to test getWhiteLabelLogos
        //instance.getWhiteLabelLogos(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('restoreWhiteLabelLogoText', function() {
      it('should call restoreWhiteLabelLogoText successfully', function(done) {
        //uncomment below and update the code to test restoreWhiteLabelLogoText
        //instance.restoreWhiteLabelLogoText(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('restoreWhiteLabelLogos', function() {
      it('should call restoreWhiteLabelLogos successfully', function(done) {
        //uncomment below and update the code to test restoreWhiteLabelLogos
        //instance.restoreWhiteLabelLogos(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveAdditionalWhiteLabelSettings', function() {
      it('should call saveAdditionalWhiteLabelSettings successfully', function(done) {
        //uncomment below and update the code to test saveAdditionalWhiteLabelSettings
        //instance.saveAdditionalWhiteLabelSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveCompanyWhiteLabelSettings', function() {
      it('should call saveCompanyWhiteLabelSettings successfully', function(done) {
        //uncomment below and update the code to test saveCompanyWhiteLabelSettings
        //instance.saveCompanyWhiteLabelSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveWhiteLabelLogoText', function() {
      it('should call saveWhiteLabelLogoText successfully', function(done) {
        //uncomment below and update the code to test saveWhiteLabelLogoText
        //instance.saveWhiteLabelLogoText(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveWhiteLabelSettings', function() {
      it('should call saveWhiteLabelSettings successfully', function(done) {
        //uncomment below and update the code to test saveWhiteLabelSettings
        //instance.saveWhiteLabelSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveWhiteLabelSettingsFromFiles', function() {
      it('should call saveWhiteLabelSettingsFromFiles successfully', function(done) {
        //uncomment below and update the code to test saveWhiteLabelSettingsFromFiles
        //instance.saveWhiteLabelSettingsFromFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
