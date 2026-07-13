# Api.PeopleThirdPartyAccountsApi

All URIs are relative to *http://localhost:8092*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getThirdPartyAuthProviders**](#getthirdpartyauthproviders) | **GET** /api/2.0/people/thirdparty/providers | Get third-party accounts
[**linkThirdPartyAccount**](#linkthirdpartyaccount) | **PUT** /api/2.0/people/thirdparty/linkaccount | Link a third-pary account
[**signupThirdPartyAccount**](#signupthirdpartyaccount) | **POST** /api/2.0/people/thirdparty/signup | Create a third-pary account
[**unlinkThirdPartyAccount**](#unlinkthirdpartyaccount) | **DELETE** /api/2.0/people/thirdparty/unlinkaccount | Unlink a third-pary account



## getThirdPartyAuthProviders

> AccountInfoArrayWrapper getThirdPartyAuthProviders(opts)

Returns a list of the available third-party accounts.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-third-party-auth-providers/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inviteView** | **Boolean**| Specifies whether to return providers that are available for invitation links, i.e. the user can login or register through these providers. | [optional] 
 **settingsView** | **Boolean**| Specifies whether to display the provider settings in a pop-up window (true) or redirect them to the desktop application (false). | [optional] 
 **clientCallback** | **String**| The method that is called after authentication. | [optional] 
 **fromOnly** | **String**| The provider name if a response is required only from this provider. | [optional] 

### Return type

[**AccountInfoArrayWrapper**](AccountInfoArrayWrapper.md)

### Authorization

No authorization required

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';

let apiInstance = new Api.PeopleThirdPartyAccountsApi();
let opts = {
  'inviteView': true, // Boolean | Specifies whether to return providers that are available for invitation links, i.e. the user can login or register through these providers.
  'settingsView': true, // Boolean | Specifies whether to display the provider settings in a pop-up window (true) or redirect them to the desktop application (false).
  'clientCallback': "some text", // String | The method that is called after authentication.
  'fromOnly': "some text" // String | The provider name if a response is required only from this provider.
};
apiInstance.getThirdPartyAuthProviders(opts, (error, data, response) => {
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


## linkThirdPartyAccount

> linkThirdPartyAccount(opts)

Links a third-party account specified in the request to the user profile.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/link-third-party-account/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkAccountRequestDto** | [**LinkAccountRequestDto**](LinkAccountRequestDto.md)|  | [optional] 

### Return type

null (empty response body)

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

let apiInstance = new Api.PeopleThirdPartyAccountsApi();
let opts = {
  'linkAccountRequestDto': new Api.LinkAccountRequestDto() // LinkAccountRequestDto | 
};
apiInstance.linkThirdPartyAccount(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## signupThirdPartyAccount

> signupThirdPartyAccount(opts)

Creates a third-party account with the parameters specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/signup-third-party-account/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signupAccountRequestDto** | [**SignupAccountRequestDto**](SignupAccountRequestDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';

let apiInstance = new Api.PeopleThirdPartyAccountsApi();
let opts = {
  'signupAccountRequestDto': new Api.SignupAccountRequestDto() // SignupAccountRequestDto | 
};
apiInstance.signupThirdPartyAccount(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## unlinkThirdPartyAccount

> unlinkThirdPartyAccount(opts)

Unlinks a third-party account specified in the request from the user profile.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/unlink-third-party-account/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **String**| The provider name. | [optional] 

### Return type

null (empty response body)

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

let apiInstance = new Api.PeopleThirdPartyAccountsApi();
let opts = {
  'provider': "some text" // String | The provider name.
};
apiInstance.unlinkThirdPartyAccount(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

