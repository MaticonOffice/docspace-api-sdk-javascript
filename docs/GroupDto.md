# Api.GroupDto
The group parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The group name. | [optional] 
**parent** | **String** | The parent group ID. | [optional] 
**category** | **String** | The group category ID. | [optional] 
**id** | **String** | The group ID. | [optional] 
**isLDAP** | **Boolean** | Specifies if the LDAP settings are enabled for the group or not. | [optional] 
**manager** | [**EmployeeFullDto**](EmployeeFullDto.md) |  | [optional] 
**members** | [**[EmployeeFullDto]**](EmployeeFullDto.md) | The list of group members. | [optional] 
**shared** | **Boolean** | Specifies whether the group can be shared or not. | [optional] 
**membersCount** | **Number** | The number of group members. | [optional] 


