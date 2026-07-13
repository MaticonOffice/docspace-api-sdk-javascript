# Api.SecurityCSPApi

All URIs are relative to *http://localhost:8092*

Method | HTTP request | Description
------------- | ------------- | -------------
[**configureCsp**](#configurecsp) | **POST** /api/2.0/security/csp | Configure CSP settings
[**getCspSettings**](#getcspsettings) | **GET** /api/2.0/security/csp | Get CSP settings



## configureCsp

> CspWrapper configureCsp(opts)

Configures the CSP (Content Security Policy) settings for the current portal.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/configure-csp/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cspRequestsDto** | [**CspRequestsDto**](CspRequestsDto.md)|  | [optional] 

### Return type

[**CspWrapper**](CspWrapper.md)

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

let apiInstance = new Api.SecurityCSPApi();
let opts = {
  'cspRequestsDto': new Api.CspRequestsDto() // CspRequestsDto | 
};
apiInstance.configureCsp(opts, (error, data, response) => {
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


## getCspSettings

> CspWrapper getCspSettings()

Returns the CSP (Content Security Policy) settings for the current portal.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-csp-settings/).

### Parameters

This endpoint does not need any parameter.

### Return type

[**CspWrapper**](CspWrapper.md)

### Authorization

No authorization required

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';

let apiInstance = new Api.SecurityCSPApi();
apiInstance.getCspSettings((error, data, response) => {
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

