# Api.AuthenticationApi

All URIs are relative to *http://localhost:8092*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticateMe**](#authenticateme) | **POST** /api/2.0/authentication | Authenticate a user
[**authenticateMeFromBodyWithCode**](#authenticatemefrombodywithcode) | **POST** /api/2.0/authentication/{code} | Authenticate a user by code
[**checkConfirm**](#checkconfirm) | **POST** /api/2.0/authentication/confirm | Open confirmation email URL
[**getIsAuthentificated**](#getisauthentificated) | **GET** /api/2.0/authentication | Check authentication
[**logout**](#logout) | **POST** /api/2.0/authentication/logout | Log out
[**saveMobilePhone**](#savemobilephone) | **POST** /api/2.0/authentication/setphone | Set a mobile phone
[**sendSmsCode**](#sendsmscode) | **POST** /api/2.0/authentication/sendsms | Send SMS code



## authenticateMe

> AuthenticationTokenWrapper authenticateMe(opts)

Authenticates the current user by SMS, authenticator app, or without two-factor authentication.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/authenticate-me/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authRequestsDto** | [**AuthRequestsDto**](AuthRequestsDto.md)|  | [optional] 

### Return type

[**AuthenticationTokenWrapper**](AuthenticationTokenWrapper.md)

### Authorization

No authorization required

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';

let apiInstance = new Api.AuthenticationApi();
let opts = {
  'authRequestsDto': new Api.AuthRequestsDto() // AuthRequestsDto | 
};
apiInstance.authenticateMe(opts, (error, data, response) => {
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


## authenticateMeFromBodyWithCode

> AuthenticationTokenWrapper authenticateMeFromBodyWithCode(code, opts)

Authenticates the current user by SMS or two-factor authentication code.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/authenticate-me-from-body-with-code/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**|  | 
 **authRequestsDto** | [**AuthRequestsDto**](AuthRequestsDto.md)|  | [optional] 

### Return type

[**AuthenticationTokenWrapper**](AuthenticationTokenWrapper.md)

### Authorization

No authorization required

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';

let apiInstance = new Api.AuthenticationApi();
let code = "code_example"; // String | 
let opts = {
  'authRequestsDto': new Api.AuthRequestsDto() // AuthRequestsDto | 
};
apiInstance.authenticateMeFromBodyWithCode(code, opts, (error, data, response) => {
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


## checkConfirm

> ConfirmWrapper checkConfirm(opts)

Opens a confirmation email URL to validate a certain action (employee invitation, portal removal, phone activation, etc.).

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/check-confirm/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailValidationKeyModel** | [**EmailValidationKeyModel**](EmailValidationKeyModel.md)|  | [optional] 

### Return type

[**ConfirmWrapper**](ConfirmWrapper.md)

### Authorization

No authorization required

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';

let apiInstance = new Api.AuthenticationApi();
let opts = {
  'emailValidationKeyModel': new Api.EmailValidationKeyModel() // EmailValidationKeyModel | 
};
apiInstance.checkConfirm(opts, (error, data, response) => {
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


## getIsAuthentificated

> BooleanWrapper getIsAuthentificated()

Checks if the current user is authenticated or not.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-is-authentificated/).

### Parameters

This endpoint does not need any parameter.

### Return type

[**BooleanWrapper**](BooleanWrapper.md)

### Authorization

No authorization required

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';

let apiInstance = new Api.AuthenticationApi();
apiInstance.getIsAuthentificated((error, data, response) => {
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


## logout

> StringWrapper logout()

Logs out of the current user account.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/logout/).

### Parameters

This endpoint does not need any parameter.

### Return type

[**StringWrapper**](StringWrapper.md)

### Authorization

No authorization required

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';

let apiInstance = new Api.AuthenticationApi();
apiInstance.logout((error, data, response) => {
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


## saveMobilePhone

> AuthenticationTokenWrapper saveMobilePhone(opts)

Sets a mobile phone for the current user.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/save-mobile-phone/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mobileRequestsDto** | [**MobileRequestsDto**](MobileRequestsDto.md)|  | [optional] 

### Return type

[**AuthenticationTokenWrapper**](AuthenticationTokenWrapper.md)

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

let apiInstance = new Api.AuthenticationApi();
let opts = {
  'mobileRequestsDto': new Api.MobileRequestsDto() // MobileRequestsDto | 
};
apiInstance.saveMobilePhone(opts, (error, data, response) => {
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


## sendSmsCode

> AuthenticationTokenWrapper sendSmsCode(opts)

Sends SMS with an authentication code.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/send-sms-code/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authRequestsDto** | [**AuthRequestsDto**](AuthRequestsDto.md)|  | [optional] 

### Return type

[**AuthenticationTokenWrapper**](AuthenticationTokenWrapper.md)

### Authorization

No authorization required

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';

let apiInstance = new Api.AuthenticationApi();
let opts = {
  'authRequestsDto': new Api.AuthRequestsDto() // AuthRequestsDto | 
};
apiInstance.sendSmsCode(opts, (error, data, response) => {
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

