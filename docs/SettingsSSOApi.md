# Api.SettingsSSOApi

All URIs are relative to *http://localhost:8092*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDefaultSsoSettingsV2**](#getdefaultssosettingsv2) | **GET** /api/2.0/settings/ssov2/default | Get the default SSO settings
[**getSsoSettingsV2**](#getssosettingsv2) | **GET** /api/2.0/settings/ssov2 | Get the SSO settings
[**getSsoSettingsV2Constants**](#getssosettingsv2constants) | **GET** /api/2.0/settings/ssov2/constants | Get the SSO settings constants
[**resetSsoSettingsV2**](#resetssosettingsv2) | **DELETE** /api/2.0/settings/ssov2 | Reset the SSO settings
[**saveSsoSettingsV2**](#savessosettingsv2) | **POST** /api/2.0/settings/ssov2 | Save the SSO settings



## getDefaultSsoSettingsV2

> SsoSettingsV2Wrapper getDefaultSsoSettingsV2()

Returns the default portal SSO settings.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-default-sso-settings-v2/).

### Parameters

This endpoint does not need any parameter.

### Return type

[**SsoSettingsV2Wrapper**](SsoSettingsV2Wrapper.md)

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

let apiInstance = new Api.SettingsSSOApi();
apiInstance.getDefaultSsoSettingsV2((error, data, response) => {
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


## getSsoSettingsV2

> SsoSettingsV2Wrapper getSsoSettingsV2()

Returns the current portal SSO settings.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-sso-settings-v2/).

### Parameters

This endpoint does not need any parameter.

### Return type

[**SsoSettingsV2Wrapper**](SsoSettingsV2Wrapper.md)

### Authorization

No authorization required

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';

let apiInstance = new Api.SettingsSSOApi();
apiInstance.getSsoSettingsV2((error, data, response) => {
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


## getSsoSettingsV2Constants

> ObjectWrapper getSsoSettingsV2Constants()

Returns the SSO settings constants.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-sso-settings-v2constants/).

### Parameters

This endpoint does not need any parameter.

### Return type

[**ObjectWrapper**](ObjectWrapper.md)

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

let apiInstance = new Api.SettingsSSOApi();
apiInstance.getSsoSettingsV2Constants((error, data, response) => {
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


## resetSsoSettingsV2

> SsoSettingsV2Wrapper resetSsoSettingsV2()

Resets the SSO settings of the current portal.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/reset-sso-settings-v2/).

### Parameters

This endpoint does not need any parameter.

### Return type

[**SsoSettingsV2Wrapper**](SsoSettingsV2Wrapper.md)

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

let apiInstance = new Api.SettingsSSOApi();
apiInstance.resetSsoSettingsV2((error, data, response) => {
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


## saveSsoSettingsV2

> SsoSettingsV2Wrapper saveSsoSettingsV2(opts)

Saves the SSO settings for the current portal.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/save-sso-settings-v2/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ssoSettingsRequestsDto** | [**SsoSettingsRequestsDto**](SsoSettingsRequestsDto.md)|  | [optional] 

### Return type

[**SsoSettingsV2Wrapper**](SsoSettingsV2Wrapper.md)

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

let apiInstance = new Api.SettingsSSOApi();
let opts = {
  'ssoSettingsRequestsDto': new Api.SsoSettingsRequestsDto() // SsoSettingsRequestsDto | 
};
apiInstance.saveSsoSettingsV2(opts, (error, data, response) => {
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

