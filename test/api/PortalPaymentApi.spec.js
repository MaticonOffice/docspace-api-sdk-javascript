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
    instance = new Api.PortalPaymentApi();
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

  describe('PortalPaymentApi', function() {
    describe('calculateWalletPayment', function() {
      it('should call calculateWalletPayment successfully', function(done) {
        //uncomment below and update the code to test calculateWalletPayment
        //instance.calculateWalletPayment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCustomerOperationsReport', function() {
      it('should call createCustomerOperationsReport successfully', function(done) {
        //uncomment below and update the code to test createCustomerOperationsReport
        //instance.createCustomerOperationsReport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCheckoutSetupUrl', function() {
      it('should call getCheckoutSetupUrl successfully', function(done) {
        //uncomment below and update the code to test getCheckoutSetupUrl
        //instance.getCheckoutSetupUrl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerBalance', function() {
      it('should call getCustomerBalance successfully', function(done) {
        //uncomment below and update the code to test getCustomerBalance
        //instance.getCustomerBalance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerInfo', function() {
      it('should call getCustomerInfo successfully', function(done) {
        //uncomment below and update the code to test getCustomerInfo
        //instance.getCustomerInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerOperations', function() {
      it('should call getCustomerOperations successfully', function(done) {
        //uncomment below and update the code to test getCustomerOperations
        //instance.getCustomerOperations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPaymentAccount', function() {
      it('should call getPaymentAccount successfully', function(done) {
        //uncomment below and update the code to test getPaymentAccount
        //instance.getPaymentAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPaymentCurrencies', function() {
      it('should call getPaymentCurrencies successfully', function(done) {
        //uncomment below and update the code to test getPaymentCurrencies
        //instance.getPaymentCurrencies(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPaymentQuotas', function() {
      it('should call getPaymentQuotas successfully', function(done) {
        //uncomment below and update the code to test getPaymentQuotas
        //instance.getPaymentQuotas(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPaymentUrl', function() {
      it('should call getPaymentUrl successfully', function(done) {
        //uncomment below and update the code to test getPaymentUrl
        //instance.getPaymentUrl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPortalPrices', function() {
      it('should call getPortalPrices successfully', function(done) {
        //uncomment below and update the code to test getPortalPrices
        //instance.getPortalPrices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getQuotaPaymentInformation', function() {
      it('should call getQuotaPaymentInformation successfully', function(done) {
        //uncomment below and update the code to test getQuotaPaymentInformation
        //instance.getQuotaPaymentInformation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTenantWalletSettings', function() {
      it('should call getTenantWalletSettings successfully', function(done) {
        //uncomment below and update the code to test getTenantWalletSettings
        //instance.getTenantWalletSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendPaymentRequest', function() {
      it('should call sendPaymentRequest successfully', function(done) {
        //uncomment below and update the code to test sendPaymentRequest
        //instance.sendPaymentRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setTenantWalletSettings', function() {
      it('should call setTenantWalletSettings successfully', function(done) {
        //uncomment below and update the code to test setTenantWalletSettings
        //instance.setTenantWalletSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('topUpDeposit', function() {
      it('should call topUpDeposit successfully', function(done) {
        //uncomment below and update the code to test topUpDeposit
        //instance.topUpDeposit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePayment', function() {
      it('should call updatePayment successfully', function(done) {
        //uncomment below and update the code to test updatePayment
        //instance.updatePayment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWalletPayment', function() {
      it('should call updateWalletPayment successfully', function(done) {
        //uncomment below and update the code to test updateWalletPayment
        //instance.updateWalletPayment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
