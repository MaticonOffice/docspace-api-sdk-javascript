# Api.TenantDto
The tenant parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliateId** | **String** | The affiliate ID. | [optional] 
**tenantAlias** | **String** | The tenant alias. | [optional] 
**calls** | **Boolean** | Specifies if the calls are available for this tenant or not. | [optional] 
**campaign** | **String** | The tenant campaign. | [optional] 
**creationDateTime** | **Date** | The tenant creation date and time. | [optional] [readonly] 
**hostedRegion** | **String** | The hosted region. | [optional] 
**tenantId** | **Number** | The tenant ID. | [optional] [readonly] 
**industry** | [**TenantIndustry**](TenantIndustry.md) |  | [optional] 
**language** | **String** | The tenant language. | [optional] 
**lastModified** | **Date** | The date and time when the tenant was last modified. | [optional] 
**mappedDomain** | **String** | The tenant mapped domain. | [optional] 
**name** | **String** | The tenant name. | [optional] 
**ownerId** | **String** | The tenant owner ID. | [optional] 
**paymentId** | **String** | The tenant payment ID. | [optional] 
**spam** | **Boolean** | Specifies if the Maticon Office newsletter is allowed or not. | [optional]
**status** | [**TenantStatus**](TenantStatus.md) |  | [optional] 
**statusChangeDate** | **Date** | The date and time when the tenant status was changed. | [optional] [readonly] 
**timeZone** | **String** | The tenant time zone. | [optional] 
**trustedDomains** | **[String]** | The list of tenant trusted domains. | [optional] 
**trustedDomainsRaw** | **String** | The tenant trusted domains in the string format. | [optional] 
**trustedDomainsType** | [**TenantTrustedDomainsType**](TenantTrustedDomainsType.md) |  | [optional] 
**version** | **Number** | The tenant version | [optional] 
**versionChanged** | **Date** | The date and time when the tenant version was changed. | [optional] 
**region** | **String** | The tenant AWS region. | [optional] 


