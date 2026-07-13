# Api.FilesQuotaApi

All URIs are relative to *http://localhost:8092*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resetRoomQuota**](#resetroomquota) | **PUT** /api/2.0/files/rooms/resetquota | Reset the room quota limit
[**updateRoomsQuota**](#updateroomsquota) | **PUT** /api/2.0/files/rooms/roomquota | Change the room quota limit



## resetRoomQuota

> FolderIntegerArrayWrapper resetRoomQuota(opts)

Resets the quota limit for the rooms with the IDs specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/reset-room-quota/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateRoomsRoomIdsRequestDtoInteger** | [**UpdateRoomsRoomIdsRequestDtoInteger**](UpdateRoomsRoomIdsRequestDtoInteger.md)|  | [optional] 

### Return type

[**FolderIntegerArrayWrapper**](FolderIntegerArrayWrapper.md)

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

let apiInstance = new Api.FilesQuotaApi();
let opts = {
  'updateRoomsRoomIdsRequestDtoInteger': new Api.UpdateRoomsRoomIdsRequestDtoInteger() // UpdateRoomsRoomIdsRequestDtoInteger | 
};
apiInstance.resetRoomQuota(opts, (error, data, response) => {
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


## updateRoomsQuota

> FolderIntegerArrayWrapper updateRoomsQuota(opts)

Changes the quota limit for the rooms with the IDs specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/update-rooms-quota/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateRoomsQuotaRequestDtoInteger** | [**UpdateRoomsQuotaRequestDtoInteger**](UpdateRoomsQuotaRequestDtoInteger.md)|  | [optional] 

### Return type

[**FolderIntegerArrayWrapper**](FolderIntegerArrayWrapper.md)

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

let apiInstance = new Api.FilesQuotaApi();
let opts = {
  'updateRoomsQuotaRequestDtoInteger': new Api.UpdateRoomsQuotaRequestDtoInteger() // UpdateRoomsQuotaRequestDtoInteger | 
};
apiInstance.updateRoomsQuota(opts, (error, data, response) => {
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

