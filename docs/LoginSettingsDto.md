# Api.LoginSettingsDto
The login settings parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attemptCount** | **Number** | The maximum number of consecutive failed login attempts allowed before triggering account suspension. | [optional] 
**blockTime** | **Number** | The duration (in minutes) for which an account remains suspended after exceeding maximum login attempts. | [optional] 
**checkPeriod** | **Number** | The maximum time (in seconds) allowed for server to process and respond to login requests. | [optional] 
**isDefault** | **Boolean** | Specifies if these settings are default or not | [optional] 


