# Api.SsoIdpCertificateAdvanced
The IdP advanced certificate parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verifyAlgorithm** | **String** | The certificate verification algorithm. | [optional] 
**verifyAuthResponsesSign** | **Boolean** | Specifies if the signatures of the SAML authentication responses sent to SP will be verified or not. | [optional] 
**verifyLogoutRequestsSign** | **Boolean** | Specifies if the signatures of the SAML logout requests sent to SP will be verified or not. | [optional] 
**verifyLogoutResponsesSign** | **Boolean** | Specifies if the signatures of the SAML logout responses sent to SP will be verified or not. | [optional] 
**decryptAlgorithm** | **String** | The certificate decryption algorithm. | [optional] 
**decryptAssertions** | **Boolean** | Specifies if the assertions will be decrypted or not. | [optional] 


