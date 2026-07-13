# Api.MemberRequestDto
The user request parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **String** | The user password. | [optional] 
**passwordHash** | **String** | The user password hash. | [optional] 
**email** | **String** | The user email address. | [optional] 
**type** | [**EmployeeType**](EmployeeType.md) |  | [optional] 
**isUser** | **Boolean** | Specifies if this is a guest or a user. | [optional] 
**firstName** | **String** | The user first name. | [optional] 
**lastName** | **String** | The user last name. | [optional] 
**department** | **[String]** | The list of the user departments IDs. | [optional] 
**title** | **String** | The user title. | [optional] 
**location** | **String** | The user location. | [optional] 
**sex** | [**SexEnum**](SexEnum.md) |  | [optional] 
**birthday** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] 
**worksfrom** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] 
**comment** | **String** | The user comment. | [optional] 
**contacts** | [**[Contact]**](Contact.md) | The list of the user contacts. | [optional] 
**files** | **String** | The avatar photo URL. | [optional] 
**fromInviteLink** | **Boolean** | Specifies if the user is added via the invitation link or not. | [optional] 
**key** | **String** | The user key. | [optional] 
**cultureName** | **String** | The user culture code. | [optional] 
**target** | **String** | The user target ID. | [optional] 
**spam** | **Boolean** | Specifies if tips, updates and offers are allowed to be sent to the user or not. | [optional] 


