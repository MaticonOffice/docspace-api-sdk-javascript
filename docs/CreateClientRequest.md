# Api.CreateClientRequest
The request parameters for creating a client.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The client name. | [optional] 
**description** | **String** | The client description. | [optional] 
**logo** | **String** | The client logo in base64 format. | [optional] 
**scopes** | **[String]** | The client scopes. | [optional] 
**allowPkce** | **Boolean** | Indicates whether PKCE is allowed for the client. | [optional] 
**isPublic** | **Boolean** | Indicates whether the client is accessible by third-party tenants. | [optional] 
**websiteUrl** | **String** | The URL to the client&#39;s website. | [optional] 
**termsUrl** | **String** | The URL to the client&#39;s terms of service. | [optional] 
**policyUrl** | **String** | The URL to the client&#39;s privacy policy. | [optional] 
**redirectUris** | **[String]** | The list of allowed redirect URIs. | 
**allowedOrigins** | **[String]** | The list of allowed CORS origins. | 
**logoutRedirectUri** | **String** | The list of allowed logout redirect URIs. | [optional] 


