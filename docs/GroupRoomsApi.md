# Api.GroupRoomsApi

All URIs are relative to *http://localhost:8092*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGroupsWithShared**](#getgroupswithshared) | **GET** /api/2.0/group/room/{id} | Get groups with sharing settings



## getGroupsWithShared

> GroupArrayWrapper getGroupsWithShared(id, opts)

Returns groups with their sharing settings.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-groups-with-shared/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The group ID. | 
 **excludeShared** | **Boolean**| Specifies whether to exclude the group sharing settings from the response. | [optional] 
 **count** | **Number**| The number of groups to retrieve in the request. | [optional] 
 **startIndex** | **Number**| The starting index from which to begin retrieving groups with their sharing settings. | [optional] 
 **filterValue** | **String**| The text used as a filter for retrieving groups with their sharing settings. | [optional] 

### Return type

[**GroupArrayWrapper**](GroupArrayWrapper.md)

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

let apiInstance = new Api.GroupRoomsApi();
let id = 9846; // Number | The group ID.
let opts = {
  'excludeShared': true, // Boolean | Specifies whether to exclude the group sharing settings from the response.
  'count': 1234, // Number | The number of groups to retrieve in the request.
  'startIndex': 1234, // Number | The starting index from which to begin retrieving groups with their sharing settings.
  'filterValue': "some text" // String | The text used as a filter for retrieving groups with their sharing settings.
};
apiInstance.getGroupsWithShared(id, opts, (error, data, response) => {
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

