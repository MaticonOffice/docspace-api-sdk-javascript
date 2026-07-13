# Api.QuotaDto
The quota information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The quota ID. | [optional] 
**title** | **String** | The quota title. | [optional] 
**price** | [**PriceDto**](PriceDto.md) |  | [optional] 
**nonProfit** | **Boolean** | Specifies if the quota is nonprofit or not. | [optional] 
**free** | **Boolean** | Specifies if the quota is free or not. | [optional] 
**trial** | **Boolean** | Specifies if the quota is trial or not. | [optional] 
**features** | [**[TenantQuotaFeatureDto]**](TenantQuotaFeatureDto.md) | The list of tenant quota features. | [optional] 
**usersQuota** | [**TenantEntityQuotaSettings**](TenantEntityQuotaSettings.md) |  | [optional] 
**roomsQuota** | [**TenantEntityQuotaSettings**](TenantEntityQuotaSettings.md) |  | [optional] 
**tenantCustomQuota** | [**TenantQuotaSettings**](TenantQuotaSettings.md) |  | [optional] 
**dueDate** | **Date** | The due date. | [optional] 


