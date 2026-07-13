# Api.CreateApiKeyRequestDto
The request parameters for creating a new API key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The API key name. | 
**permissions** | **[String]** | The list of permissions granted to the API key. | [optional] 
**expiresInDays** | **Number** | The number of days until the API key expires (null for no expiration). | [optional] 


