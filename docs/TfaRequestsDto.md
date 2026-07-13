# Api.TfaRequestsDto
The request parameters for configuring the Two-Factor Authentication (TFA) settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**TfaRequestsDtoType**](TfaRequestsDtoType.md) |  | [optional] 
**id** | **String** | The ID of the user for whom the TFA settings are being configured. | [optional] 
**trustedIps** | **[String]** | The list of IP addresses that bypass TFA verification. | [optional] 
**mandatoryUsers** | **[String]** | The list of user IDs for whom TFA is mandatory. | [optional] 
**mandatoryGroups** | **[String]** | The list group IDs whose members must use TFA. | [optional] 


