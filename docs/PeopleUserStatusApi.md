# Api.PeopleUserStatusApi

All URIs are relative to *http://localhost:8092*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByStatus**](#getbystatus) | **GET** /api/2.0/people/status/{status} | Get profiles by status
[**updateUserActivationStatus**](#updateuseractivationstatus) | **PUT** /api/2.0/people/activationstatus/{activationstatus} | Set an activation status to the users
[**updateUserStatus**](#updateuserstatus) | **PUT** /api/2.0/people/status/{status} | Change a user status



## getByStatus

> EmployeeFullArrayWrapper getByStatus(status, opts)

Returns a list of profiles filtered by the user status.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-by-status/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | [**EmployeeStatus**](.md)| The user status. | 
 **filterBy** | **String**| Specifies the criteria used to filter the profiles in the request. | [optional] 
 **count** | **Number**| The maximum number of user profiles to retrieve. | [optional] 
 **startIndex** | **Number**| The starting index for retrieving data in a paginated request. | [optional] 
 **sortBy** | **String**| Specifies the property or field name by which the results should be sorted. | [optional] 
 **sortOrder** | [**SortOrder**](.md)| The order in which the results are sorted. | [optional] 
 **filterSeparator** | **String**| Represents the separator used to split multiple filter criteria in a query string. | [optional] 
 **filterValue** | **String**| A string value representing additional filter criteria used in query parameters. | [optional] 

### Return type

[**EmployeeFullArrayWrapper**](EmployeeFullArrayWrapper.md)

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

let apiInstance = new Api.PeopleUserStatusApi();
let status = new Api.EmployeeStatus(); // EmployeeStatus | The user status.
let opts = {
  'filterBy': "some text", // String | Specifies the criteria used to filter the profiles in the request.
  'count': 1234, // Number | The maximum number of user profiles to retrieve.
  'startIndex': 1234, // Number | The starting index for retrieving data in a paginated request.
  'sortBy': "some text", // String | Specifies the property or field name by which the results should be sorted.
  'sortOrder': new Api.SortOrder(), // SortOrder | The order in which the results are sorted.
  'filterSeparator': "some text", // String | Represents the separator used to split multiple filter criteria in a query string.
  'filterValue': "some text" // String | A string value representing additional filter criteria used in query parameters.
};
apiInstance.getByStatus(status, opts, (error, data, response) => {
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


## updateUserActivationStatus

> EmployeeFullArrayWrapper updateUserActivationStatus(activationstatus, opts)

Sets the required activation status to the list of users with the IDs specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/update-user-activation-status/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationstatus** | [**EmployeeActivationStatus**](.md)| The new user activation status. | 
 **updateMembersRequestDto** | [**UpdateMembersRequestDto**](UpdateMembersRequestDto.md)| The request parameters for updating the user information. | [optional] 

### Return type

[**EmployeeFullArrayWrapper**](EmployeeFullArrayWrapper.md)

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

let apiInstance = new Api.PeopleUserStatusApi();
let activationstatus = new Api.EmployeeActivationStatus(); // EmployeeActivationStatus | The new user activation status.
let opts = {
  'updateMembersRequestDto': new Api.UpdateMembersRequestDto() // UpdateMembersRequestDto | The request parameters for updating the user information.
};
apiInstance.updateUserActivationStatus(activationstatus, opts, (error, data, response) => {
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


## updateUserStatus

> EmployeeFullArrayWrapper updateUserStatus(status, opts)

Changes a status of the users with the IDs specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/update-user-status/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | [**EmployeeStatus**](.md)| The new user status. | 
 **updateMembersRequestDto** | [**UpdateMembersRequestDto**](UpdateMembersRequestDto.md)| The request parameters for updating the user information. | [optional] 

### Return type

[**EmployeeFullArrayWrapper**](EmployeeFullArrayWrapper.md)

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

let apiInstance = new Api.PeopleUserStatusApi();
let status = new Api.EmployeeStatus(); // EmployeeStatus | The new user status.
let opts = {
  'updateMembersRequestDto': new Api.UpdateMembersRequestDto() // UpdateMembersRequestDto | The request parameters for updating the user information.
};
apiInstance.updateUserStatus(status, opts, (error, data, response) => {
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

