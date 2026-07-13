# Api.CreateWebhooksConfigRequestsDto
The request parameters for creating the webhook configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The human-readable name of the webhook configuration. | 
**uri** | **String** | The destination URL where the webhook events will be sent. | 
**secretKey** | **String** | The webhook secret key used to sign the webhook payloads for the security verification. | [optional] 
**enabled** | **Boolean** | Specifies whether the webhook configuration is active or not. | [optional] 
**ssl** | **Boolean** | Specifies whether the SSL certificate verification is required or not. | [optional] 
**triggers** | [**WebhookTrigger**](WebhookTrigger.md) |  | [optional] 
**targetId** | **String** | Target ID | [optional] 


