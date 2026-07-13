# Api.AuthRequestsDto
The parameters required for the user authentication requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userName** | **String** | The username or email used for authentication. | [optional] 
**password** | **String** | The password in plain text for user authentication. | [optional] 
**passwordHash** | **String** | The hashed password for secure verification. | [optional] 
**provider** | **String** | The type of authentication provider (e.g., internal, Google, Azure). | [optional] 
**accessToken** | **String** | The access token used for authentication with external providers. | [optional] 
**serializedProfile** | **String** | The serialized user profile data, if applicable. | [optional] 
**code** | **String** | The code for two-factor authentication. | [optional] 
**codeOAuth** | **String** | The authorization code used for obtaining OAuth tokens. | [optional] 
**session** | **Boolean** | Specifies whether the authentication is session-based. | [optional] 
**confirmData** | [**ConfirmData**](ConfirmData.md) |  | [optional] 
**recaptchaType** | [**RecaptchaType**](RecaptchaType.md) |  | [optional] 
**recaptchaResponse** | **String** | The user&#39;s response to the CAPTCHA challenge. | [optional] 
**culture** | **String** | The culture code for localization during authentication. | [optional] 


