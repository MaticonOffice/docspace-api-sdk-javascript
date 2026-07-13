# Api.OAuth20AuthorizationApi

All URIs are relative to *http://localhost:8092*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorizeOAuth**](#authorizeoauth) | **GET** /oauth2/authorize | OAuth2 authorization endpoint
[**exchangeToken**](#exchangetoken) | **POST** /oauth2/token | OAuth2 token endpoint
[**submitConsent**](#submitconsent) | **POST** /oauth2/authorize | OAuth2 consent endpoint



## authorizeOAuth

> authorizeOAuth(responseType, clientId, redirectUri, scope)

Initiates the OAuth2 authorization flow.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/authorize-oauth/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **responseType** | **String**| The OAuth 2.0 response type, must be &#39;code&#39; for authorization code flow. | 
 **clientId** | **String**| The client identifier issued to the client during registration. | 
 **redirectUri** | **String**| The URL to redirect to after authorization is complete. | 
 **scope** | **String**| The space-separated list of requested scope permissions. | 

### Return type

null (empty response body)

### Authorization

[asc_auth_key](../README.md#asc_auth_key)

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';
let defaultClient = Api.ApiClient.instance;
// Configure API key authorization: asc_auth_key
let asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//asc_auth_key.apiKeyPrefix = 'Token';

let apiInstance = new Api.OAuth20AuthorizationApi();
let responseType = "code"; // String | The OAuth 2.0 response type, must be 'code' for authorization code flow.
let clientId = "6c7cf17b-1bd3-47d5-94c6-be2d3570e168"; // String | The client identifier issued to the client during registration.
let redirectUri = "https://example.com"; // String | The URL to redirect to after authorization is complete.
let scope = "files:read"; // String | The space-separated list of requested scope permissions.
apiInstance.authorizeOAuth(responseType, clientId, redirectUri, scope, (error, data, response) => {
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


## exchangeToken

> ExchangeToken200Response exchangeToken(opts)

Exchanges an authorization code specified in the request for the access token.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/exchange-token/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | **String**| The OAuth2 grant type, must be &#39;authorization_code&#39; for the authorization code flow. | [optional] 
 **code** | **String**| A temporary authorization code that is sent to the client to be exchanged for a token. | [optional] 
 **redirectUri** | **String**| The URL where the user will be redirected after successful or unsuccessful authentication. | [optional] 
 **clientId** | **String**| The client identifier issued to the client during registration. | [optional] 
 **clientSecret** | **String**| The client secret issued to the client during registration. | [optional] 

### Return type

[**ExchangeToken200Response**](ExchangeToken200Response.md)

### Authorization

No authorization required

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';

let apiInstance = new Api.OAuth20AuthorizationApi();
let opts = {
  'grantType': "grantType_example", // String | The OAuth2 grant type, must be 'authorization_code' for the authorization code flow.
  'code': "code_example", // String | A temporary authorization code that is sent to the client to be exchanged for a token.
  'redirectUri': "redirectUri_example", // String | The URL where the user will be redirected after successful or unsuccessful authentication.
  'clientId': "clientId_example", // String | The client identifier issued to the client during registration.
  'clientSecret': "clientSecret_example" // String | The client secret issued to the client during registration.
};
apiInstance.exchangeToken(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## submitConsent

> submitConsent(opts)

Sends a consent request with the specified parameters.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/submit-consent/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| The client identifier issued to the client during registration. | [optional] 
 **state** | **String**| The random string used to solve the CSRF vulnerability problem. | [optional] 
 **scope** | **String**| The space-separated list of requested scope permissions. | [optional] 

### Return type

null (empty response body)

### Authorization

[asc_auth_key](../README.md#asc_auth_key)

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';
let defaultClient = Api.ApiClient.instance;
// Configure API key authorization: asc_auth_key
let asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//asc_auth_key.apiKeyPrefix = 'Token';

let apiInstance = new Api.OAuth20AuthorizationApi();
let opts = {
  'clientId': "clientId_example", // String | The client identifier issued to the client during registration.
  'state': "state_example", // String | The random string used to solve the CSRF vulnerability problem.
  'scope': "scope_example" // String | The space-separated list of requested scope permissions.
};
apiInstance.submitConsent(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined

