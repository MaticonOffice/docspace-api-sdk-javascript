# Api.SettingsWebhooksApi

All URIs are relative to *http://localhost:8092*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebhook**](#createwebhook) | **POST** /api/2.0/settings/webhook | Create a webhook
[**enableWebhook**](#enablewebhook) | **PUT** /api/2.0/settings/webhook/enable | Enable a webhook
[**getTenantWebhooks**](#gettenantwebhooks) | **GET** /api/2.0/settings/webhook | Get webhooks
[**getWebhookTriggers**](#getwebhooktriggers) | **GET** /api/2.0/settings/webhook/triggers | Get webhook triggers
[**getWebhooksLogs**](#getwebhookslogs) | **GET** /api/2.0/settings/webhooks/log | Get webhook logs
[**removeWebhook**](#removewebhook) | **DELETE** /api/2.0/settings/webhook/{id} | Remove a webhook
[**retryWebhook**](#retrywebhook) | **PUT** /api/2.0/settings/webhook/{id}/retry | Retry a webhook
[**retryWebhooks**](#retrywebhooks) | **PUT** /api/2.0/settings/webhook/retry | Retry webhooks
[**updateWebhook**](#updatewebhook) | **PUT** /api/2.0/settings/webhook | Update a webhook



## createWebhook

> WebhooksConfigWrapper createWebhook(opts)

Creates a new tenant webhook with the parameters specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/create-webhook/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWebhooksConfigRequestsDto** | [**CreateWebhooksConfigRequestsDto**](CreateWebhooksConfigRequestsDto.md)|  | [optional] 

### Return type

[**WebhooksConfigWrapper**](WebhooksConfigWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';
let defaultClient = Api.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKeyBearer
let ApiKeyBearer = defaultClient.authentications['ApiKeyBearer'];
ApiKeyBearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyBearer.apiKeyPrefix = 'Token';
// Configure API key authorization: asc_auth_key
let asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//asc_auth_key.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Api.SettingsWebhooksApi();
let opts = {
  'createWebhooksConfigRequestsDto': new Api.CreateWebhooksConfigRequestsDto() // CreateWebhooksConfigRequestsDto | 
};
apiInstance.createWebhook(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## enableWebhook

> WebhooksConfigWrapper enableWebhook(opts)

Enables or disables a tenant webhook with the parameters specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/enable-webhook/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateWebhooksConfigRequestsDto** | [**UpdateWebhooksConfigRequestsDto**](UpdateWebhooksConfigRequestsDto.md)|  | [optional] 

### Return type

[**WebhooksConfigWrapper**](WebhooksConfigWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';
let defaultClient = Api.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKeyBearer
let ApiKeyBearer = defaultClient.authentications['ApiKeyBearer'];
ApiKeyBearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyBearer.apiKeyPrefix = 'Token';
// Configure API key authorization: asc_auth_key
let asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//asc_auth_key.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Api.SettingsWebhooksApi();
let opts = {
  'updateWebhooksConfigRequestsDto': new Api.UpdateWebhooksConfigRequestsDto() // UpdateWebhooksConfigRequestsDto | 
};
apiInstance.enableWebhook(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTenantWebhooks

> WebhooksConfigWithStatusArrayWrapper getTenantWebhooks()

Returns a list of the tenant webhooks.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-tenant-webhooks/).

### Parameters

This endpoint does not need any parameter.

### Return type

[**WebhooksConfigWithStatusArrayWrapper**](WebhooksConfigWithStatusArrayWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';
let defaultClient = Api.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKeyBearer
let ApiKeyBearer = defaultClient.authentications['ApiKeyBearer'];
ApiKeyBearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyBearer.apiKeyPrefix = 'Token';
// Configure API key authorization: asc_auth_key
let asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//asc_auth_key.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Api.SettingsWebhooksApi();
apiInstance.getTenantWebhooks((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhookTriggers

> UnknownWrapper getWebhookTriggers()

Returns a list of triggers for a webhook.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-webhook-triggers/).

### Parameters

This endpoint does not need any parameter.

### Return type

[**UnknownWrapper**](UnknownWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';
let defaultClient = Api.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKeyBearer
let ApiKeyBearer = defaultClient.authentications['ApiKeyBearer'];
ApiKeyBearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyBearer.apiKeyPrefix = 'Token';
// Configure API key authorization: asc_auth_key
let asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//asc_auth_key.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Api.SettingsWebhooksApi();
apiInstance.getWebhookTriggers((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhooksLogs

> WebhooksLogArrayWrapper getWebhooksLogs(opts)

Returns the logs of the webhook activities.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-webhooks-logs/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deliveryFrom** | **Date**| The delivery start time for filtering webhook logs. | [optional] 
 **deliveryTo** | **Date**| The delivery end time for filtering webhook logs. | [optional] 
 **hookUri** | **String**| The destination URL where webhooks are delivered. | [optional] 
 **configId** | **Number**| The webhook configuration identifier. | [optional] 
 **eventId** | **Number**| The unique identifier of the event that triggered the webhook. | [optional] 
 **groupStatus** | [**WebhookGroupStatus**](.md)| The status of the webhook delivery group. | [optional] 
 **userId** | **String**| The identifier of the user associated with the webhook event. | [optional] 
 **trigger** | [**WebhookTrigger**](.md)| The type of event that triggered the webhook. | [optional] 
 **count** | **Number**| The maximum number of webhook log records to return in the query response. | [optional] 
 **startIndex** | **Number**| Specifies the starting index for retrieving webhook logs.  Used for pagination in the webhook delivery log queries. | [optional] 
 **fields** | **string**| Comma-separated list of fields to include in the response | [optional] 

### Return type

[**WebhooksLogArrayWrapper**](WebhooksLogArrayWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';
let defaultClient = Api.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKeyBearer
let ApiKeyBearer = defaultClient.authentications['ApiKeyBearer'];
ApiKeyBearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyBearer.apiKeyPrefix = 'Token';
// Configure API key authorization: asc_auth_key
let asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//asc_auth_key.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Api.SettingsWebhooksApi();
let opts = {
  'deliveryFrom': new Date("2008-04-10T06:30+04:00"), // Date | The delivery start time for filtering webhook logs.
  'deliveryTo': new Date("2008-04-10T06:30+04:00"), // Date | The delivery end time for filtering webhook logs.
  'hookUri': "some text", // String | The destination URL where webhooks are delivered.
  'configId': 1234, // Number | The webhook configuration identifier.
  'eventId': 1234, // Number | The unique identifier of the event that triggered the webhook.
  'groupStatus': new Api.WebhookGroupStatus(), // WebhookGroupStatus | The status of the webhook delivery group.
  'userId': "aae1e103-bca5-9fa1-ba8c-42058b4abf28", // String | The identifier of the user associated with the webhook event.
  'trigger': new Api.WebhookTrigger(), // WebhookTrigger | The type of event that triggered the webhook.
  'count': 1234, // Number | The maximum number of webhook log records to return in the query response.
  'startIndex': 1234 // Number | Specifies the starting index for retrieving webhook logs.  Used for pagination in the webhook delivery log queries.
};
apiInstance.getWebhooksLogs(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeWebhook

> WebhooksConfigWrapper removeWebhook(id)

Removes a tenant webhook with the ID specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/remove-webhook/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID extracted from the route parameters. | 

### Return type

[**WebhooksConfigWrapper**](WebhooksConfigWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';
let defaultClient = Api.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKeyBearer
let ApiKeyBearer = defaultClient.authentications['ApiKeyBearer'];
ApiKeyBearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyBearer.apiKeyPrefix = 'Token';
// Configure API key authorization: asc_auth_key
let asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//asc_auth_key.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Api.SettingsWebhooksApi();
let id = 9846; // Number | The ID extracted from the route parameters.
apiInstance.removeWebhook(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retryWebhook

> WebhooksLogWrapper retryWebhook(id)

Retries a webhook with the ID specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/retry-webhook/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID extracted from the route parameters. | 

### Return type

[**WebhooksLogWrapper**](WebhooksLogWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';
let defaultClient = Api.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKeyBearer
let ApiKeyBearer = defaultClient.authentications['ApiKeyBearer'];
ApiKeyBearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyBearer.apiKeyPrefix = 'Token';
// Configure API key authorization: asc_auth_key
let asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//asc_auth_key.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Api.SettingsWebhooksApi();
let id = 9846; // Number | The ID extracted from the route parameters.
apiInstance.retryWebhook(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retryWebhooks

> WebhooksLogArrayWrapper retryWebhooks(opts)

Retries all the webhooks with the IDs specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/retry-webhooks/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookRetryRequestsDto** | [**WebhookRetryRequestsDto**](WebhookRetryRequestsDto.md)|  | [optional] 

### Return type

[**WebhooksLogArrayWrapper**](WebhooksLogArrayWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';
let defaultClient = Api.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKeyBearer
let ApiKeyBearer = defaultClient.authentications['ApiKeyBearer'];
ApiKeyBearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyBearer.apiKeyPrefix = 'Token';
// Configure API key authorization: asc_auth_key
let asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//asc_auth_key.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Api.SettingsWebhooksApi();
let opts = {
  'webhookRetryRequestsDto': new Api.WebhookRetryRequestsDto() // WebhookRetryRequestsDto | 
};
apiInstance.retryWebhooks(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateWebhook

> WebhooksConfigWrapper updateWebhook(opts)

Updates a tenant webhook with the parameters specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/update-webhook/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateWebhooksConfigRequestsDto** | [**UpdateWebhooksConfigRequestsDto**](UpdateWebhooksConfigRequestsDto.md)|  | [optional] 

### Return type

[**WebhooksConfigWrapper**](WebhooksConfigWrapper.md)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';
let defaultClient = Api.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ApiKeyBearer
let ApiKeyBearer = defaultClient.authentications['ApiKeyBearer'];
ApiKeyBearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyBearer.apiKeyPrefix = 'Token';
// Configure API key authorization: asc_auth_key
let asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//asc_auth_key.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Api.SettingsWebhooksApi();
let opts = {
  'updateWebhooksConfigRequestsDto': new Api.UpdateWebhooksConfigRequestsDto() // UpdateWebhooksConfigRequestsDto | 
};
apiInstance.updateWebhook(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

