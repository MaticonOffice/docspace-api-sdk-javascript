# Api.AuthServiceRequestsDto
The request parameters for handling the authorization service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the authentication service. | [optional] 
**title** | **String** | The user-friendly display title of the authentication service. | [optional] 
**description** | **String** | The brief description of the authentication service. | [optional] 
**instruction** | **String** | The detailed instructions for configuring or using the authentication service. | [optional] 
**canSet** | **Boolean** | Specifies whether the authentication service can be configured by the user. | [optional] 
**props** | [**[AuthKey]**](AuthKey.md) | The collection of authorization keys associated with the authentication service. | [optional] 


