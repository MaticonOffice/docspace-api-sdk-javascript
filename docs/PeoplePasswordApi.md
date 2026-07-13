# Api.PeoplePasswordApi

All URIs are relative to *http://localhost:8092*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeUserPassword**](#changeuserpassword) | **PUT** /api/2.0/people/{userid}/password | Change a user password
[**sendUserPassword**](#senduserpassword) | **POST** /api/2.0/people/password | Remind a user password



## changeUserPassword

> EmployeeFullWrapper changeUserPassword(userid, opts)

Sets a new password to the user with the ID specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/change-user-password/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **String**| The user ID. | 
 **memberBaseRequestDto** | [**MemberBaseRequestDto**](MemberBaseRequestDto.md)| The request parameters for the user generic information. | [optional] 

### Return type

[**EmployeeFullWrapper**](EmployeeFullWrapper.md)

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

let apiInstance = new Api.PeoplePasswordApi();
let userid = "aae1e103-bca5-9fa1-ba8c-42058b4abf28"; // String | The user ID.
let opts = {
  'memberBaseRequestDto': new Api.MemberBaseRequestDto() // MemberBaseRequestDto | The request parameters for the user generic information.
};
apiInstance.changeUserPassword(userid, opts, (error, data, response) => {
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


## sendUserPassword

> StringWrapper sendUserPassword(opts)

Reminds a password to the user using the email address specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/send-user-password/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailMemberRequestDto** | [**EmailMemberRequestDto**](EmailMemberRequestDto.md)|  | [optional] 

### Return type

[**StringWrapper**](StringWrapper.md)

### Authorization

No authorization required

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';

let apiInstance = new Api.PeoplePasswordApi();
let opts = {
  'emailMemberRequestDto': new Api.EmailMemberRequestDto() // EmailMemberRequestDto | 
};
apiInstance.sendUserPassword(opts, (error, data, response) => {
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

