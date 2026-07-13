# Api.PeopleSearchApi

All URIs are relative to *http://localhost:8092*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountsEntriesWithShared**](#getaccountsentrieswithshared) | **GET** /api/2.0/accounts/room/{id}/search | Get account entries
[**getSearch**](#getsearch) | **GET** /api/2.0/people/@search/{query} | Search users
[**getSimpleByFilter**](#getsimplebyfilter) | **GET** /api/2.0/people/simple/filter | Search users by extended filter
[**getUsersWithRoomShared**](#getuserswithroomshared) | **GET** /api/2.0/people/room/{id} | Get users with room sharing settings
[**searchUsersByExtendedFilter**](#searchusersbyextendedfilter) | **GET** /api/2.0/people/filter | Search users with detaailed information by extended filter
[**searchUsersByQuery**](#searchusersbyquery) | **GET** /api/2.0/people/search | Search users (using query parameters)
[**searchUsersByStatus**](#searchusersbystatus) | **GET** /api/2.0/people/status/{status}/search | Search users by status filter



## getAccountsEntriesWithShared

> ObjectArrayWrapper getAccountsEntriesWithShared(id, opts)

Returns the account entries with their sharing settings.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-accounts-entries-with-shared/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The user ID. | 
 **employeeStatus** | [**EmployeeStatus**](.md)| The user status. | [optional] 
 **activationStatus** | [**EmployeeActivationStatus**](.md)| The user activation status. | [optional] 
 **excludeShared** | **Boolean**| Specifies whether to exclude the account sharing settings from the response. | [optional] 
 **includeShared** | **Boolean**| Specifies whether to include the account sharing settings in the response. | [optional] 
 **invitedByMe** | **Boolean**| Specifies whether the user is invited by the current user or not. | [optional] 
 **inviterId** | **String**| The inviter ID. | [optional] 
 **area** | [**Area**](.md)| The area of the account entries. | [optional] 
 **employeeTypes** | [**[EmployeeType]**](EmployeeType.md)| The list of the user types. | [optional] 
 **count** | **Number**| The number of items to retrieve in a request. | [optional] 
 **startIndex** | **Number**| The starting index for the query results. | [optional] 
 **filterSeparator** | **String**| Specifies the separator used in filter expressions. | [optional] 
 **filterValue** | **String**| The text filter applied to the accounts search query. | [optional] 

### Return type

[**ObjectArrayWrapper**](ObjectArrayWrapper.md)

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

let apiInstance = new Api.PeopleSearchApi();
let id = 9846; // Number | The user ID.
let opts = {
  'employeeStatus': new Api.EmployeeStatus(), // EmployeeStatus | The user status.
  'activationStatus': new Api.EmployeeActivationStatus(), // EmployeeActivationStatus | The user activation status.
  'excludeShared': true, // Boolean | Specifies whether to exclude the account sharing settings from the response.
  'includeShared': true, // Boolean | Specifies whether to include the account sharing settings in the response.
  'invitedByMe': true, // Boolean | Specifies whether the user is invited by the current user or not.
  'inviterId': "75a5f745-f697-4418-b38d-0fe0d277e258", // String | The inviter ID.
  'area': new Api.Area(), // Area | The area of the account entries.
  'employeeTypes': [null], // [EmployeeType] | The list of the user types.
  'count': 1234, // Number | The number of items to retrieve in a request.
  'startIndex': 1234, // Number | The starting index for the query results.
  'filterSeparator': "some text", // String | Specifies the separator used in filter expressions.
  'filterValue': "some text" // String | The text filter applied to the accounts search query.
};
apiInstance.getAccountsEntriesWithShared(id, opts, (error, data, response) => {
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


## getSearch

> EmployeeFullArrayWrapper getSearch(query, opts)

Returns a list of users matching the search query.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-search/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| The search query. | 
 **filterBy** | **String**| Specifies a filter criteria for the user search query. | [optional] 
 **filterValue** | **String**| The value used for filtering users, allowing additional constraints for the query. | [optional] 

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

let apiInstance = new Api.PeopleSearchApi();
let query = "some text"; // String | The search query.
let opts = {
  'filterBy': "some text", // String | Specifies a filter criteria for the user search query.
  'filterValue': "some text" // String | The value used for filtering users, allowing additional constraints for the query.
};
apiInstance.getSearch(query, opts, (error, data, response) => {
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


## getSimpleByFilter

> EmployeeArrayWrapper getSimpleByFilter(opts)

Returns a list of users matching the parameters specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-simple-by-filter/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeStatus** | [**EmployeeStatus**](.md)| The user status. | [optional] 
 **groupId** | **String**| The group ID. | [optional] 
 **activationStatus** | [**EmployeeActivationStatus**](.md)| The user activation status. | [optional] 
 **employeeType** | [**EmployeeType**](.md)| The user type. | [optional] 
 **employeeTypes** | [**[Number]**](Number.md)| The list of user types. | [optional] 
 **isAdministrator** | **Boolean**| Specifies if the user is an administrator or not. | [optional] 
 **payments** | [**Payments**](.md)| The user payment status. | [optional] 
 **accountLoginType** | [**AccountLoginType**](.md)| The account login type. | [optional] 
 **quotaFilter** | [**QuotaFilter**](.md)| The quota filter (All - 0, Default - 1, Custom - 2). | [optional] 
 **withoutGroup** | **Boolean**| Specifies whether the user should be a member of a group or not. | [optional] 
 **excludeGroup** | **Boolean**| Specifies whether the user should be a member of the group with the specified ID. | [optional] 
 **invitedByMe** | **Boolean**| Specifies whether the user is invited by the current user or not. | [optional] 
 **inviterId** | **String**| The inviter ID. | [optional] 
 **area** | [**Area**](.md)| The filter area. | [optional] 
 **count** | **Number**| The maximum number of items to be retrieved in the response. | [optional] 
 **startIndex** | **Number**| The zero-based index of the first item to be retrieved in a filtered result set. | [optional] 
 **sortBy** | **String**| Specifies the property or field name by which the results should be sorted. | [optional] 
 **sortOrder** | [**SortOrder**](.md)| The order in which the results are sorted. | [optional] 
 **filterSeparator** | **String**| Represents the separator used to split filter criteria in query parameters. | [optional] 
 **filterValue** | **String**| The search text used to filter results based on user input. | [optional] 
 **fields** | **string**| Comma-separated list of fields to include in the response | [optional] 

### Return type

[**EmployeeArrayWrapper**](EmployeeArrayWrapper.md)

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

let apiInstance = new Api.PeopleSearchApi();
let opts = {
  'employeeStatus': new Api.EmployeeStatus(), // EmployeeStatus | The user status.
  'groupId': "75a5f745-f697-4418-b38d-0fe0d277e258", // String | The group ID.
  'activationStatus': new Api.EmployeeActivationStatus(), // EmployeeActivationStatus | The user activation status.
  'employeeType': new Api.EmployeeType(), // EmployeeType | The user type.
  'employeeTypes': [null], // [Number] | The list of user types.
  'isAdministrator': true, // Boolean | Specifies if the user is an administrator or not.
  'payments': new Api.Payments(), // Payments | The user payment status.
  'accountLoginType': new Api.AccountLoginType(), // AccountLoginType | The account login type.
  'quotaFilter': new Api.QuotaFilter(), // QuotaFilter | The quota filter (All - 0, Default - 1, Custom - 2).
  'withoutGroup': true, // Boolean | Specifies whether the user should be a member of a group or not.
  'excludeGroup': true, // Boolean | Specifies whether the user should be a member of the group with the specified ID.
  'invitedByMe': true, // Boolean | Specifies whether the user is invited by the current user or not.
  'inviterId': "75a5f745-f697-4418-b38d-0fe0d277e258", // String | The inviter ID.
  'area': new Api.Area(), // Area | The filter area.
  'count': 1234, // Number | The maximum number of items to be retrieved in the response.
  'startIndex': 1234, // Number | The zero-based index of the first item to be retrieved in a filtered result set.
  'sortBy': "some text", // String | Specifies the property or field name by which the results should be sorted.
  'sortOrder': new Api.SortOrder(), // SortOrder | The order in which the results are sorted.
  'filterSeparator': "some text", // String | Represents the separator used to split filter criteria in query parameters.
  'filterValue': "some text" // String | The search text used to filter results based on user input.
};
apiInstance.getSimpleByFilter(opts, (error, data, response) => {
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


## getUsersWithRoomShared

> EmployeeFullArrayWrapper getUsersWithRoomShared(id, opts)

Returns the users with the sharing settings in a room with the ID specified in request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-users-with-room-shared/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The user ID. | 
 **employeeStatus** | [**EmployeeStatus**](.md)| The user status. | [optional] 
 **activationStatus** | [**EmployeeActivationStatus**](.md)| The user activation status. | [optional] 
 **excludeShared** | **Boolean**| Specifies whether to exclude the user sharing settings or not. | [optional] 
 **includeShared** | **Boolean**| Specifies whether to include the user sharing settings or not. | [optional] 
 **invitedByMe** | **Boolean**| Specifies whether the user was invited by the current user or not. | [optional] 
 **inviterId** | **String**| The inviter ID. | [optional] 
 **area** | [**Area**](.md)| The user area. | [optional] 
 **employeeTypes** | [**[EmployeeType]**](EmployeeType.md)| The list of user types. | [optional] 
 **count** | **Number**| The maximum number of users to be retrieved in the request. | [optional] 
 **startIndex** | **Number**| The zero-based index of the first record to retrieve in a paged query. | [optional] 
 **filterSeparator** | **String**| The character or string used to separate multiple filter values in a filtering query. | [optional] 
 **filterValue** | **String**| The filter text value used for searching or filtering user results. | [optional] 

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

let apiInstance = new Api.PeopleSearchApi();
let id = 9846; // Number | The user ID.
let opts = {
  'employeeStatus': new Api.EmployeeStatus(), // EmployeeStatus | The user status.
  'activationStatus': new Api.EmployeeActivationStatus(), // EmployeeActivationStatus | The user activation status.
  'excludeShared': true, // Boolean | Specifies whether to exclude the user sharing settings or not.
  'includeShared': true, // Boolean | Specifies whether to include the user sharing settings or not.
  'invitedByMe': true, // Boolean | Specifies whether the user was invited by the current user or not.
  'inviterId': "75a5f745-f697-4418-b38d-0fe0d277e258", // String | The inviter ID.
  'area': new Api.Area(), // Area | The user area.
  'employeeTypes': [null], // [EmployeeType] | The list of user types.
  'count': 1234, // Number | The maximum number of users to be retrieved in the request.
  'startIndex': 1234, // Number | The zero-based index of the first record to retrieve in a paged query.
  'filterSeparator': "some text", // String | The character or string used to separate multiple filter values in a filtering query.
  'filterValue': "some text" // String | The filter text value used for searching or filtering user results.
};
apiInstance.getUsersWithRoomShared(id, opts, (error, data, response) => {
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


## searchUsersByExtendedFilter

> EmployeeFullArrayWrapper searchUsersByExtendedFilter(opts)

Returns a list of users with full information about them matching the parameters specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/search-users-by-extended-filter/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeStatus** | [**EmployeeStatus**](.md)| The user status. | [optional] 
 **groupId** | **String**| The group ID. | [optional] 
 **activationStatus** | [**EmployeeActivationStatus**](.md)| The user activation status. | [optional] 
 **employeeType** | [**EmployeeType**](.md)| The user type. | [optional] 
 **employeeTypes** | [**[Number]**](Number.md)| The list of user types. | [optional] 
 **isAdministrator** | **Boolean**| Specifies if the user is an administrator or not. | [optional] 
 **payments** | [**Payments**](.md)| The user payment status. | [optional] 
 **accountLoginType** | [**AccountLoginType**](.md)| The account login type. | [optional] 
 **quotaFilter** | [**QuotaFilter**](.md)| The quota filter (All - 0, Default - 1, Custom - 2). | [optional] 
 **withoutGroup** | **Boolean**| Specifies whether the user should be a member of a group or not. | [optional] 
 **excludeGroup** | **Boolean**| Specifies whether the user should be a member of the group with the specified ID. | [optional] 
 **invitedByMe** | **Boolean**| Specifies whether the user is invited by the current user or not. | [optional] 
 **inviterId** | **String**| The inviter ID. | [optional] 
 **area** | [**Area**](.md)| The filter area. | [optional] 
 **count** | **Number**| The maximum number of items to be retrieved in the response. | [optional] 
 **startIndex** | **Number**| The zero-based index of the first item to be retrieved in a filtered result set. | [optional] 
 **sortBy** | **String**| Specifies the property or field name by which the results should be sorted. | [optional] 
 **sortOrder** | [**SortOrder**](.md)| The order in which the results are sorted. | [optional] 
 **filterSeparator** | **String**| Represents the separator used to split filter criteria in query parameters. | [optional] 
 **filterValue** | **String**| The search text used to filter results based on user input. | [optional] 
 **fields** | **string**| Comma-separated list of fields to include in the response | [optional] 

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

let apiInstance = new Api.PeopleSearchApi();
let opts = {
  'employeeStatus': new Api.EmployeeStatus(), // EmployeeStatus | The user status.
  'groupId': "75a5f745-f697-4418-b38d-0fe0d277e258", // String | The group ID.
  'activationStatus': new Api.EmployeeActivationStatus(), // EmployeeActivationStatus | The user activation status.
  'employeeType': new Api.EmployeeType(), // EmployeeType | The user type.
  'employeeTypes': [null], // [Number] | The list of user types.
  'isAdministrator': true, // Boolean | Specifies if the user is an administrator or not.
  'payments': new Api.Payments(), // Payments | The user payment status.
  'accountLoginType': new Api.AccountLoginType(), // AccountLoginType | The account login type.
  'quotaFilter': new Api.QuotaFilter(), // QuotaFilter | The quota filter (All - 0, Default - 1, Custom - 2).
  'withoutGroup': true, // Boolean | Specifies whether the user should be a member of a group or not.
  'excludeGroup': true, // Boolean | Specifies whether the user should be a member of the group with the specified ID.
  'invitedByMe': true, // Boolean | Specifies whether the user is invited by the current user or not.
  'inviterId': "75a5f745-f697-4418-b38d-0fe0d277e258", // String | The inviter ID.
  'area': new Api.Area(), // Area | The filter area.
  'count': 1234, // Number | The maximum number of items to be retrieved in the response.
  'startIndex': 1234, // Number | The zero-based index of the first item to be retrieved in a filtered result set.
  'sortBy': "some text", // String | Specifies the property or field name by which the results should be sorted.
  'sortOrder': new Api.SortOrder(), // SortOrder | The order in which the results are sorted.
  'filterSeparator': "some text", // String | Represents the separator used to split filter criteria in query parameters.
  'filterValue': "some text" // String | The search text used to filter results based on user input.
};
apiInstance.searchUsersByExtendedFilter(opts, (error, data, response) => {
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


## searchUsersByQuery

> EmployeeArrayWrapper searchUsersByQuery(opts)

Returns a list of users matching the search query. This method uses the query parameters.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/search-users-by-query/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| The search query. | [optional] 

### Return type

[**EmployeeArrayWrapper**](EmployeeArrayWrapper.md)

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

let apiInstance = new Api.PeopleSearchApi();
let opts = {
  'query': "some text" // String | The search query.
};
apiInstance.searchUsersByQuery(opts, (error, data, response) => {
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


## searchUsersByStatus

> EmployeeFullArrayWrapper searchUsersByStatus(status, opts)

Returns a list of users matching the status filter and search query.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/search-users-by-status/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | [**EmployeeStatus**](.md)| The user status. | 
 **query** | **String**| The advanced search query. | [optional] 
 **filterBy** | **String**| Specifies the criteria used to filter search results in advanced queries. | [optional] 
 **filterValue** | **String**| The value used to filter the search query. | [optional] 

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

let apiInstance = new Api.PeopleSearchApi();
let status = new Api.EmployeeStatus(); // EmployeeStatus | The user status.
let opts = {
  'query': "some text", // String | The advanced search query.
  'filterBy': "some text", // String | Specifies the criteria used to filter search results in advanced queries.
  'filterValue': "some text" // String | The value used to filter the search query.
};
apiInstance.searchUsersByStatus(status, opts, (error, data, response) => {
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

