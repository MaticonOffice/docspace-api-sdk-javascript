# Api.PeopleGuestsApi

All URIs are relative to *http://localhost:8092*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveGuestShareLink**](#approveguestsharelink) | **POST** /api/2.0/people/guests/share/approve | Approve a guest sharing link
[**deleteGuests**](#deleteguests) | **DELETE** /api/2.0/people/guests | Delete guests



## approveGuestShareLink

> EmployeeFullWrapper approveGuestShareLink(opts)

Approves a guest sharing link and returns the detailed information about a guest.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/approve-guest-share-link/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailMemberRequestDto** | [**EmailMemberRequestDto**](EmailMemberRequestDto.md)|  | [optional] 

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

let apiInstance = new Api.PeopleGuestsApi();
let opts = {
  'emailMemberRequestDto': new Api.EmailMemberRequestDto() // EmailMemberRequestDto | 
};
apiInstance.approveGuestShareLink(opts, (error, data, response) => {
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


## deleteGuests

> deleteGuests(opts)

Deletes guests from the list and excludes them from rooms to which they were invited.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/delete-guests/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateMembersRequestDto** | [**UpdateMembersRequestDto**](UpdateMembersRequestDto.md)|  | [optional] 

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

let apiInstance = new Api.PeopleGuestsApi();
let opts = {
  'updateMembersRequestDto': new Api.UpdateMembersRequestDto() // UpdateMembersRequestDto | 
};
apiInstance.deleteGuests(opts, (error, data, response) => {
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

