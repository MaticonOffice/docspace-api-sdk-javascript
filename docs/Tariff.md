# Api.Tariff
The tariff parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The tariff ID. | [optional] 
**state** | [**TariffState**](TariffState.md) |  | [optional] 
**dueDate** | **Date** | The tariff due date. | [optional] 
**delayDueDate** | **Date** | The tariff delay due date. | [optional] 
**licenseDate** | **Date** | The tariff license date. | [optional] 
**customerId** | **String** | The tariff customer ID. | [optional] 
**quotas** | [**[Quota]**](Quota.md) | The list of tariff quotas. | [optional] 
**overdueQuotas** | [**[Quota]**](Quota.md) | The list of overdue tariff quotas. | [optional] 


