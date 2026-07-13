# Api.SecurityDto
The security information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webItemId** | **String** | The module ID. | [optional] 
**users** | [**[EmployeeDto]**](EmployeeDto.md) | The list of users with the access to the module. | [optional] 
**groups** | [**[GroupSummaryDto]**](GroupSummaryDto.md) | The list of groups with the access to the module. | [optional] 
**enabled** | **Boolean** | Specifies if the security settings are enabled or not. | [optional] 
**isSubItem** | **Boolean** | Specifies if the module is a subitem or not. | [optional] 


