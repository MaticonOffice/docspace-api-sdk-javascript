# Api.TfaSettingsDto
The parameters representing the Two-Factor Authentication (TFA) configuration settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of the TFA configuration. | [optional] 
**title** | **String** | The display name or description of the TFA configuration. | [optional] 
**enabled** | **Boolean** | Indicates whether the TFA configuration is currently active. | [optional] 
**avaliable** | **Boolean** | Indicates whether the TFA configuration can be used. | [optional] 
**trustedIps** | **[String]** | The list of IP addresses that are exempt from TFA requirements. | [optional] 
**mandatoryUsers** | **[String]** | The list of user IDs that are required to use TFA. | [optional] 
**mandatoryGroups** | **[String]** | The list of group IDs whose members are required to use TFA. | [optional] 


