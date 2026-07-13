# Api.WebhooksConfigDto
The webhook configuration parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The webhook ID. | [optional] 
**name** | **String** | The webhook name. | [optional] 
**uri** | **String** | The webhook URI. | [optional] 
**enabled** | **Boolean** | Specifies if the webhooks are enabled or not. | [optional] 
**ssl** | **Boolean** | The webhook SSL verification (enabled or not). | [optional] 
**triggers** | [**WebhookTrigger**](WebhookTrigger.md) |  | [optional] 
**targetId** | **String** | The webhook target ID. | [optional] 
**createdBy** | [**EmployeeDto**](EmployeeDto.md) |  | [optional] 
**createdOn** | **Date** | The date and time when the webhook was created. | [optional] 
**modifiedBy** | [**EmployeeDto**](EmployeeDto.md) |  | [optional] 
**modifiedOn** | **Date** | The date and time when the webhook was modified. | [optional] 
**lastFailureOn** | **Date** | The date and time of the webhook last failure. | [optional] 
**lastFailureContent** | **String** | The webhook last failure content. | [optional] 
**lastSuccessOn** | **Date** | The date and time of the webhook last success. | [optional] 


