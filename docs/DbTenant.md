# Api.DbTenant
The database tenant parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The tenant ID. | [optional] 
**name** | **String** | The tenant name. | [optional] 
**alias** | **String** | The tenant alias. | [optional] 
**mappedDomain** | **String** | Mapped domain | [optional] 
**version** | **Number** | The tenant version. | [optional] 
**versionChanged** | **Date** | The Version_changed field. | [optional] 
**versionChanged** | **Date** | The date and time when the version was changed. | [optional] 
**language** | **String** | The tenant language. | [optional] 
**timeZone** | **String** | The tenant time zone. | [optional] 
**trustedDomainsRaw** | **String** | The tenant trusted domains raw. | [optional] 
**trustedDomainsEnabled** | [**TenantTrustedDomainsType**](TenantTrustedDomainsType.md) |  | [optional] 
**status** | [**TenantStatus**](TenantStatus.md) |  | [optional] 
**statusChanged** | **Date** | The date and time when the tenant status was changed. | [optional] 
**statusChangedHack** | **Date** | The hacked date and time when the tenant status was changed. | [optional] 
**creationDateTime** | **Date** | The tenant creation date. | [optional] 
**ownerId** | **String** | The tenant owner ID. | [optional] 
**paymentId** | **String** | The tenant payment ID. | [optional] 
**industry** | [**TenantIndustry**](TenantIndustry.md) |  | [optional] 
**lastModified** | **Date** | The date and time when the tenant was last modified. | [optional] 
**calls** | **Boolean** | Specifies if the calls are available for the current tenant or not. | [optional] 
**partner** | [**DbTenantPartner**](DbTenantPartner.md) |  | [optional] 


