# Api.AuditEventDto
The audit event parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The audit event ID. | [optional] 
**date** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] 
**user** | **String** | The name of the user who triggered the audit event. | [optional] 
**userId** | **String** | The ID of the user who triggered the audit event. | [optional] 
**action** | **String** | The audit event action. | [optional] 
**actionId** | [**MessageAction**](MessageAction.md) |  | [optional] 
**ip** | **String** | The audit event IP. | [optional] 
**country** | **String** | The audit event country. | [optional] 
**city** | **String** | The audit event city. | [optional] 
**browser** | **String** | The audit event browser. | [optional] 
**platform** | **String** | The audit event platform. | [optional] 
**page** | **String** | The audit event page. | [optional] 
**actionType** | [**ActionType**](ActionType.md) |  | [optional] 
**product** | [**ProductType**](ProductType.md) |  | [optional] 
**module** | [**ModuleType**](ModuleType.md) |  | [optional] 
**target** | **[String]** | The list of target objects affected by the audit event (e.g., document ID, user account). | [optional] 
**entries** | [**[EntryType]**](EntryType.md) | The list of audit entry types (e.g., Folder, User, File). | [optional] 
**context** | **String** | The audit event context. | [optional] 


