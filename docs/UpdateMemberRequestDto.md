# Api.UpdateMemberRequestDto
The request parameters for updating the user information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** | The user ID. | [optional] 
**disable** | **Boolean** | Specifies whether to disable a user or not. | [optional] 
**email** | **String** | The user email address. | [optional] 
**isUser** | **Boolean** | Specifies if this is a guest or a user. | [optional] 
**firstName** | **String** | The user first name. | [optional] 
**lastName** | **String** | The user last name. | [optional] 
**department** | **[String]** | The list of the user departments. | [optional] 
**title** | **String** | The user title. | [optional] 
**location** | **String** | The user location. | [optional] 
**sex** | [**SexEnum**](SexEnum.md) |  | [optional] 
**birthday** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] 
**worksfrom** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] 
**comment** | **String** | The user comment. | [optional] 
**contacts** | [**[Contact]**](Contact.md) | The list of the user contacts. | [optional] 
**files** | **String** | The user avatar photo URL. | [optional] 
**spam** | **Boolean** | Specifies if tips, updates and offers are allowed to be sent to the user or not. | [optional] 


