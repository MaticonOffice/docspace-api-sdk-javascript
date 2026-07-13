# Api.ApiKeyResponseDto
The response data for the API key operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique identifier of the API key. | [optional] 
**name** | **String** | The API key name. | [optional] 
**key** | **String** | The full API key value (only returned when creating a new key). | [optional] 
**keyPostfix** | **String** | The API key postfix (used for identification). | [optional] 
**permissions** | **[String]** | The list of permissions granted to the API key. | [optional] 
**lastUsed** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] 
**createOn** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] 
**createBy** | [**EmployeeDto**](EmployeeDto.md) |  | [optional] 
**expiresAt** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] 
**isActive** | **Boolean** | Indicates whether the API key is active or not. | [optional] 


