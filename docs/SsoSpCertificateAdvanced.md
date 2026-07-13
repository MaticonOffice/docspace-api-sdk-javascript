# Api.SsoSpCertificateAdvanced
The SP advanced certificate parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signingAlgorithm** | **String** | The certificate signing algorithm. | [optional] 
**signAuthRequests** | **Boolean** | Specifies if SP will sign the SAML authentication requests sent to IdP or not. | [optional] 
**signLogoutRequests** | **Boolean** | Specifies if SP will sign the SAML logout requests sent to IdP or not. | [optional] 
**signLogoutResponses** | **Boolean** | Specifies if SP will sign the SAML logout responses sent to IdP or not. | [optional] 
**encryptAlgorithm** | **String** | The certificate encryption algorithm. | [optional] 
**decryptAlgorithm** | **String** | The certificate decryption algorithm. | [optional] 
**encryptAssertions** | **Boolean** | Specifies if the assertions will be encrypted or not. | [optional] 


