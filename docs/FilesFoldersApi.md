# Api.FilesFoldersApi

All URIs are relative to *http://localhost:8092*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkUpload**](#checkupload) | **POST** /api/2.0/files/{folderId}/upload/check | Check file uploads
[**createFolder**](#createfolder) | **POST** /api/2.0/files/folder/{folderId} | Create a folder
[**deleteFolder**](#deletefolder) | **DELETE** /api/2.0/files/folder/{folderId} | Delete a folder
[**getFilesUsedSpace**](#getfilesusedspace) | **GET** /api/2.0/files/filesusedspace | Get used space of files
[**getFolder**](#getfolder) | **GET** /api/2.0/files/{folderId}/formfilter | Get folder form filter
[**getFolderByFolderId**](#getfolderbyfolderid) | **GET** /api/2.0/files/{folderId} | Get a folder by ID
[**getFolderHistory**](#getfolderhistory) | **GET** /api/2.0/files/folder/{folderId}/log | Get folder history
[**getFolderInfo**](#getfolderinfo) | **GET** /api/2.0/files/folder/{folderId} | Get folder information
[**getFolderPath**](#getfolderpath) | **GET** /api/2.0/files/folder/{folderId}/path | Get the folder path
[**getFolderPrimaryExternalLink**](#getfolderprimaryexternallink) | **GET** /api/2.0/files/folder/{id}/link | Get primary external link
[**getFolders**](#getfolders) | **GET** /api/2.0/files/{folderId}/subfolders | Get subfolders
[**getMyFolder**](#getmyfolder) | **GET** /api/2.0/files/@my | Get the \&quot;My documents\&quot; section
[**getNewFolderItems**](#getnewfolderitems) | **GET** /api/2.0/files/{folderId}/news | Get new folder items
[**getPrivacyFolder**](#getprivacyfolder) | **GET** /api/2.0/files/@privacy | Get the \&quot;Private Room\&quot; section
[**getRootFolders**](#getrootfolders) | **GET** /api/2.0/files/@root | Get filtered sections
[**getTrashFolder**](#gettrashfolder) | **GET** /api/2.0/files/@trash | Get the \&quot;Trash\&quot; section
[**insertFile**](#insertfile) | **POST** /api/2.0/files/{folderId}/insert | Insert a file
[**insertFileToMyFromBody**](#insertfiletomyfrombody) | **POST** /api/2.0/files/@my/insert | Insert a file to the \&quot;My documents\&quot; section
[**renameFolder**](#renamefolder) | **PUT** /api/2.0/files/folder/{folderId} | Rename a folder
[**setFolderOrder**](#setfolderorder) | **PUT** /api/2.0/files/folder/{folderId}/order | Set folder order
[**uploadFile**](#uploadfile) | **POST** /api/2.0/files/{folderId}/upload | Upload a file
[**uploadFileToMy**](#uploadfiletomy) | **POST** /api/2.0/files/@my/upload | Upload a file to the \&quot;My documents\&quot; section



## checkUpload

> STRINGArrayWrapper checkUpload(folderId, opts)

Checks the file uploads to the folder with the ID specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/check-upload/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **Number**| The folder ID. | 
 **checkUploadRequest** | [**CheckUploadRequest**](CheckUploadRequest.md)| The request parameters for checking file uploads. | [optional] 

### Return type

[**STRINGArrayWrapper**](STRINGArrayWrapper.md)

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

let apiInstance = new Api.FilesFoldersApi();
let folderId = 9846; // Number | The folder ID.
let opts = {
  'checkUploadRequest': new Api.CheckUploadRequest() // CheckUploadRequest | The request parameters for checking file uploads.
};
apiInstance.checkUpload(folderId, opts, (error, data, response) => {
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


## createFolder

> FolderIntegerWrapper createFolder(folderId, opts)

Creates a new folder with the title specified in the request. The parent folder ID can be also specified.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/create-folder/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **Number**| The folder ID for the folder creation. | 
 **createFolder** | [**CreateFolder**](CreateFolder.md)| The parameters for creating a folder. | [optional] 

### Return type

[**FolderIntegerWrapper**](FolderIntegerWrapper.md)

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

let apiInstance = new Api.FilesFoldersApi();
let folderId = 9846; // Number | The folder ID for the folder creation.
let opts = {
  'createFolder': new Api.CreateFolder() // CreateFolder | The parameters for creating a folder.
};
apiInstance.createFolder(folderId, opts, (error, data, response) => {
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


## deleteFolder

> FileOperationArrayWrapper deleteFolder(folderId, opts)

Deletes a folder with the ID specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/delete-folder/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **Number**| The folder ID to delete. | 
 **deleteFolder** | [**DeleteFolder**](DeleteFolder.md)| The parameters for deleting a folder. | [optional] 

### Return type

[**FileOperationArrayWrapper**](FileOperationArrayWrapper.md)

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

let apiInstance = new Api.FilesFoldersApi();
let folderId = 9846; // Number | The folder ID to delete.
let opts = {
  'deleteFolder': new Api.DeleteFolder() // DeleteFolder | The parameters for deleting a folder.
};
apiInstance.deleteFolder(folderId, opts, (error, data, response) => {
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


## getFilesUsedSpace

> FilesStatisticsResultWrapper getFilesUsedSpace()

Returns the used space of files in the root folders.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-files-used-space/).

### Parameters

This endpoint does not need any parameter.

### Return type

[**FilesStatisticsResultWrapper**](FilesStatisticsResultWrapper.md)

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

let apiInstance = new Api.FilesFoldersApi();
apiInstance.getFilesUsedSpace((error, data, response) => {
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


## getFolder

> FormsItemArrayWrapper getFolder(folderId)

Returns the form filter of a folder with the ID specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-folder/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **Number**| The request folder ID. | 

### Return type

[**FormsItemArrayWrapper**](FormsItemArrayWrapper.md)

### Authorization

No authorization required

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';

let apiInstance = new Api.FilesFoldersApi();
let folderId = 9846; // Number | The request folder ID.
apiInstance.getFolder(folderId, (error, data, response) => {
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


## getFolderByFolderId

> FolderContentIntegerWrapper getFolderByFolderId(folderId, opts)

Returns the detailed list of files and folders located in the folder with the ID specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-folder-by-folder-id/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **Number**| The folder ID of the request. | 
 **userIdOrGroupId** | **String**| The user or group ID. | [optional] 
 **filterType** | [**FilterType**](.md)| The filter type. | [optional] 
 **roomId** | **Number**| The room ID. | [optional] 
 **excludeSubject** | **Boolean**| Specifies whether to exclude search by user or group ID. | [optional] 
 **applyFilterOption** | [**ApplyFilterOption**](.md)| Specifies whether to return only files, only folders or all elements from the specified folder. | [optional] 
 **extension** | **String**| Specifies whether to search for the specific file extension. | [optional] 
 **searchArea** | [**SearchArea**](.md)| The search area. | [optional] 
 **formsItemKey** | **String**| The forms item key. | [optional] 
 **formsItemType** | **String**| The forms item type. | [optional] 
 **count** | **Number**| The maximum number of items to retrieve in the request. | [optional] 
 **startIndex** | **Number**| The zero-based index of the first item to retrieve in a paginated request. | [optional] 
 **sortBy** | **String**| Specifies the property used for sorting the folder request results. | [optional] 
 **sortOrder** | [**SortOrder**](.md)| The order in which the results are sorted. | [optional] 
 **filterValue** | **String**| The text value used as a filter parameter for folder content queries. | [optional] 

### Return type

[**FolderContentIntegerWrapper**](FolderContentIntegerWrapper.md)

### Authorization

No authorization required

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';

let apiInstance = new Api.FilesFoldersApi();
let folderId = 9846; // Number | The folder ID of the request.
let opts = {
  'userIdOrGroupId': "75a5f745-f697-4418-b38d-0fe0d277e258", // String | The user or group ID.
  'filterType': new Api.FilterType(), // FilterType | The filter type.
  'roomId': 9846, // Number | The room ID.
  'excludeSubject': true, // Boolean | Specifies whether to exclude search by user or group ID.
  'applyFilterOption': new Api.ApplyFilterOption(), // ApplyFilterOption | Specifies whether to return only files, only folders or all elements from the specified folder.
  'extension': ".txt", // String | Specifies whether to search for the specific file extension.
  'searchArea': new Api.SearchArea(), // SearchArea | The search area.
  'formsItemKey': "some text", // String | The forms item key.
  'formsItemType': "some text", // String | The forms item type.
  'count': 1234, // Number | The maximum number of items to retrieve in the request.
  'startIndex': 1234, // Number | The zero-based index of the first item to retrieve in a paginated request.
  'sortBy': "some text", // String | Specifies the property used for sorting the folder request results.
  'sortOrder': new Api.SortOrder(), // SortOrder | The order in which the results are sorted.
  'filterValue': "some text" // String | The text value used as a filter parameter for folder content queries.
};
apiInstance.getFolderByFolderId(folderId, opts, (error, data, response) => {
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


## getFolderHistory

> HistoryArrayWrapper getFolderHistory(folderId, opts)

Returns the activity history of a folder with a specified identifier.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-folder-history/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **Number**| The folder ID of the history request. | 
 **fromDate** | [**ApiDateTime**](.md)| The start date of the history request. | [optional] 
 **toDate** | [**ApiDateTime**](.md)| The end date of the history request. | [optional] 
 **count** | **Number**| The number of records to retrieve for the folder history. | [optional] 
 **startIndex** | **Number**| The starting index from which the history records are retrieved in the request. | [optional] 

### Return type

[**HistoryArrayWrapper**](HistoryArrayWrapper.md)

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

let apiInstance = new Api.FilesFoldersApi();
let folderId = 9846; // Number | The folder ID of the history request.
let opts = {
  'fromDate': new Api.ApiDateTime(), // ApiDateTime | The start date of the history request.
  'toDate': new Api.ApiDateTime(), // ApiDateTime | The end date of the history request.
  'count': 1234, // Number | The number of records to retrieve for the folder history.
  'startIndex': 1234 // Number | The starting index from which the history records are retrieved in the request.
};
apiInstance.getFolderHistory(folderId, opts, (error, data, response) => {
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


## getFolderInfo

> FolderIntegerWrapper getFolderInfo(folderId)

Returns the detailed information about a folder with the ID specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-folder-info/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **Number**| The request folder ID. | 

### Return type

[**FolderIntegerWrapper**](FolderIntegerWrapper.md)

### Authorization

No authorization required

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';

let apiInstance = new Api.FilesFoldersApi();
let folderId = 9846; // Number | The request folder ID.
apiInstance.getFolderInfo(folderId, (error, data, response) => {
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


## getFolderPath

> FileEntryArrayWrapper getFolderPath(folderId)

Returns a path to the folder with the ID specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-folder-path/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **Number**| The request folder ID. | 

### Return type

[**FileEntryArrayWrapper**](FileEntryArrayWrapper.md)

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

let apiInstance = new Api.FilesFoldersApi();
let folderId = 9846; // Number | The request folder ID.
apiInstance.getFolderPath(folderId, (error, data, response) => {
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


## getFolderPrimaryExternalLink

> FileShareWrapper getFolderPrimaryExternalLink(id)

Returns the primary external link by the identifier specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-folder-primary-external-link/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The request folder ID. | 

### Return type

[**FileShareWrapper**](FileShareWrapper.md)

### Authorization

No authorization required

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';

let apiInstance = new Api.FilesFoldersApi();
let id = 9846; // Number | The request folder ID.
apiInstance.getFolderPrimaryExternalLink(id, (error, data, response) => {
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


## getFolders

> FileEntryArrayWrapper getFolders(folderId)

Returns a list of all the subfolders from a folder with the ID specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-folders/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **Number**| The request folder ID. | 

### Return type

[**FileEntryArrayWrapper**](FileEntryArrayWrapper.md)

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

let apiInstance = new Api.FilesFoldersApi();
let folderId = 9846; // Number | The request folder ID.
apiInstance.getFolders(folderId, (error, data, response) => {
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


## getMyFolder

> FolderContentIntegerWrapper getMyFolder(opts)

Returns the detailed list of files and folders located in the \&quot;My documents\&quot; section.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-my-folder/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userIdOrGroupId** | **String**| The user or group ID. | [optional] 
 **filterType** | [**FilterType**](.md)| The filter type. | [optional] 
 **applyFilterOption** | [**ApplyFilterOption**](.md)| Specifies whether to return only files, only folders or all elements. | [optional] 
 **count** | **Number**| The maximum number of items to retrieve in the response. | [optional] 
 **startIndex** | **Number**| The starting position of the items to be retrieved. | [optional] 
 **sortBy** | **String**| The property used to specify the sorting criteria for folder contents. | [optional] 
 **sortOrder** | [**SortOrder**](.md)| The order in which the results are sorted. | [optional] 
 **filterValue** | **String**| The text used for filtering or searching folder contents. | [optional] 
 **fields** | **string**| Comma-separated list of fields to include in the response | [optional] 

### Return type

[**FolderContentIntegerWrapper**](FolderContentIntegerWrapper.md)

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

let apiInstance = new Api.FilesFoldersApi();
let opts = {
  'userIdOrGroupId': "75a5f745-f697-4418-b38d-0fe0d277e258", // String | The user or group ID.
  'filterType': new Api.FilterType(), // FilterType | The filter type.
  'applyFilterOption': new Api.ApplyFilterOption(), // ApplyFilterOption | Specifies whether to return only files, only folders or all elements.
  'count': 1234, // Number | The maximum number of items to retrieve in the response.
  'startIndex': 1234, // Number | The starting position of the items to be retrieved.
  'sortBy': "some text", // String | The property used to specify the sorting criteria for folder contents.
  'sortOrder': new Api.SortOrder(), // SortOrder | The order in which the results are sorted.
  'filterValue': "some text" // String | The text used for filtering or searching folder contents.
};
apiInstance.getMyFolder(opts, (error, data, response) => {
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


## getNewFolderItems

> FileEntryArrayWrapper getNewFolderItems(folderId)

Returns a list of all the new items from a folder with the ID specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-new-folder-items/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **Number**| The request folder ID. | 

### Return type

[**FileEntryArrayWrapper**](FileEntryArrayWrapper.md)

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

let apiInstance = new Api.FilesFoldersApi();
let folderId = 9846; // Number | The request folder ID.
apiInstance.getNewFolderItems(folderId, (error, data, response) => {
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


## getPrivacyFolder

> FolderContentIntegerWrapper getPrivacyFolder(opts)

Returns the detailed list of files and folders located in the \&quot;Private Room\&quot; section.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-privacy-folder/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userIdOrGroupId** | **String**| The user or group ID. | [optional] 
 **filterType** | [**FilterType**](.md)| The filter type. | [optional] 
 **count** | **Number**| The maximum number of items to retrieve in the request. | [optional] 
 **startIndex** | **Number**| The zero-based index of the first item to retrieve in a paginated list. | [optional] 
 **sortBy** | **String**| Specifies the field by which the folder content should be sorted. | [optional] 
 **sortOrder** | [**SortOrder**](.md)| The order in which the results are sorted. | [optional] 
 **filterValue** | **String**| The text used as a filter or search criterion for folder content queries. | [optional] 
 **fields** | **string**| Comma-separated list of fields to include in the response | [optional] 

### Return type

[**FolderContentIntegerWrapper**](FolderContentIntegerWrapper.md)

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

let apiInstance = new Api.FilesFoldersApi();
let opts = {
  'userIdOrGroupId': "75a5f745-f697-4418-b38d-0fe0d277e258", // String | The user or group ID.
  'filterType': new Api.FilterType(), // FilterType | The filter type.
  'count': 1234, // Number | The maximum number of items to retrieve in the request.
  'startIndex': 1234, // Number | The zero-based index of the first item to retrieve in a paginated list.
  'sortBy': "some text", // String | Specifies the field by which the folder content should be sorted.
  'sortOrder': new Api.SortOrder(), // SortOrder | The order in which the results are sorted.
  'filterValue': "some text" // String | The text used as a filter or search criterion for folder content queries.
};
apiInstance.getPrivacyFolder(opts, (error, data, response) => {
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


## getRootFolders

> FolderContentIntegerArrayWrapper getRootFolders(opts)

Returns all the sections matching the parameters specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-root-folders/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userIdOrGroupId** | **String**| The user or group ID. | [optional] 
 **filterType** | [**FilterType**](.md)| The filter type. | [optional] 
 **withoutTrash** | **Boolean**| Specifies whether to return the \&quot;Trash\&quot; section or not. | [optional] 
 **count** | **Number**| The maximum number of items to retrieve in the response. | [optional] 
 **startIndex** | **Number**| The starting position of the items to be retrieved. | [optional] 
 **sortBy** | **String**| Specifies the field by which the folder content should be sorted. | [optional] 
 **sortOrder** | [**SortOrder**](.md)| The order in which the results are sorted. | [optional] 
 **filterValue** | **String**| The text used as a filter for searching or retrieving folder contents. | [optional] 
 **fields** | **string**| Comma-separated list of fields to include in the response | [optional] 

### Return type

[**FolderContentIntegerArrayWrapper**](FolderContentIntegerArrayWrapper.md)

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

let apiInstance = new Api.FilesFoldersApi();
let opts = {
  'userIdOrGroupId': "75a5f745-f697-4418-b38d-0fe0d277e258", // String | The user or group ID.
  'filterType': new Api.FilterType(), // FilterType | The filter type.
  'withoutTrash': true, // Boolean | Specifies whether to return the \"Trash\" section or not.
  'count': 1234, // Number | The maximum number of items to retrieve in the response.
  'startIndex': 1234, // Number | The starting position of the items to be retrieved.
  'sortBy': "some text", // String | Specifies the field by which the folder content should be sorted.
  'sortOrder': new Api.SortOrder(), // SortOrder | The order in which the results are sorted.
  'filterValue': "some text" // String | The text used as a filter for searching or retrieving folder contents.
};
apiInstance.getRootFolders(opts, (error, data, response) => {
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


## getTrashFolder

> FolderContentIntegerWrapper getTrashFolder(opts)

Returns the detailed list of files and folders located in the \&quot;Trash\&quot; section.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-trash-folder/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userIdOrGroupId** | **String**| The user or group ID. | [optional] 
 **filterType** | [**FilterType**](.md)| The filter type. | [optional] 
 **applyFilterOption** | [**ApplyFilterOption**](.md)| Specifies whether to return only files, only folders or all elements. | [optional] 
 **count** | **Number**| The maximum number of items to retrieve in the response. | [optional] 
 **startIndex** | **Number**| The starting position of the items to be retrieved. | [optional] 
 **sortBy** | **String**| The property used to specify the sorting criteria for folder contents. | [optional] 
 **sortOrder** | [**SortOrder**](.md)| The order in which the results are sorted. | [optional] 
 **filterValue** | **String**| The text used for filtering or searching folder contents. | [optional] 
 **fields** | **string**| Comma-separated list of fields to include in the response | [optional] 

### Return type

[**FolderContentIntegerWrapper**](FolderContentIntegerWrapper.md)

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

let apiInstance = new Api.FilesFoldersApi();
let opts = {
  'userIdOrGroupId': "75a5f745-f697-4418-b38d-0fe0d277e258", // String | The user or group ID.
  'filterType': new Api.FilterType(), // FilterType | The filter type.
  'applyFilterOption': new Api.ApplyFilterOption(), // ApplyFilterOption | Specifies whether to return only files, only folders or all elements.
  'count': 1234, // Number | The maximum number of items to retrieve in the response.
  'startIndex': 1234, // Number | The starting position of the items to be retrieved.
  'sortBy': "some text", // String | The property used to specify the sorting criteria for folder contents.
  'sortOrder': new Api.SortOrder(), // SortOrder | The order in which the results are sorted.
  'filterValue': "some text" // String | The text used for filtering or searching folder contents.
};
apiInstance.getTrashFolder(opts, (error, data, response) => {
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


## insertFile

> FileIntegerWrapper insertFile(folderId, opts)

Inserts a file specified in the request to the selected folder by single file uploading.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/insert-file/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **Number**| The folder ID for inserting a file. | 
 **insertFileFile** | **File**| The file to be inserted. | [optional] 
 **insertFileTitle** | **String**| The file title to be inserted. | [optional] 
 **insertFileCreateNewIfExist** | **Boolean**| Specifies whether to create a new file if it already exists or not. | [optional] 
 **insertFileKeepConvertStatus** | **Boolean**| Specifies whether to keep the file converting status or not. | [optional] 
 **insertFileStreamCanRead** | **Boolean**|  | [optional] 
 **insertFileStreamCanWrite** | **Boolean**|  | [optional] 
 **insertFileStreamCanSeek** | **Boolean**|  | [optional] 
 **insertFileStreamCanTimeout** | **Boolean**|  | [optional] 
 **insertFileStreamLength** | **Number**|  | [optional] 
 **insertFileStreamPosition** | **Number**|  | [optional] 
 **insertFileStreamReadTimeout** | **Number**|  | [optional] 
 **insertFileStreamWriteTimeout** | **Number**|  | [optional] 

### Return type

[**FileIntegerWrapper**](FileIntegerWrapper.md)

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

let apiInstance = new Api.FilesFoldersApi();
let folderId = 9846; // Number | The folder ID for inserting a file.
let opts = {
  'insertFileFile': "/path/to/file", // File | The file to be inserted.
  'insertFileTitle': "insertFileTitle_example", // String | The file title to be inserted.
  'insertFileCreateNewIfExist': true, // Boolean | Specifies whether to create a new file if it already exists or not.
  'insertFileKeepConvertStatus': true, // Boolean | Specifies whether to keep the file converting status or not.
  'insertFileStreamCanRead': true, // Boolean | 
  'insertFileStreamCanWrite': true, // Boolean | 
  'insertFileStreamCanSeek': true, // Boolean | 
  'insertFileStreamCanTimeout': true, // Boolean | 
  'insertFileStreamLength': 789, // Number | 
  'insertFileStreamPosition': 789, // Number | 
  'insertFileStreamReadTimeout': 56, // Number | 
  'insertFileStreamWriteTimeout': 56 // Number | 
};
apiInstance.insertFile(folderId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## insertFileToMyFromBody

> FileIntegerWrapper insertFileToMyFromBody(opts)

Inserts a file specified in the request to the \&quot;My documents\&quot; section by single file uploading.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/insert-file-to-my-from-body/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| The file to be inserted. | [optional] 
 **title** | **String**| The file title to be inserted. | [optional] 
 **createNewIfExist** | **Boolean**| Specifies whether to create a new file if it already exists or not. | [optional] 
 **keepConvertStatus** | **Boolean**| Specifies whether to keep the file converting status or not. | [optional] 
 **streamCanRead** | **Boolean**|  | [optional] 
 **streamCanWrite** | **Boolean**|  | [optional] 
 **streamCanSeek** | **Boolean**|  | [optional] 
 **streamCanTimeout** | **Boolean**|  | [optional] 
 **streamLength** | **Number**|  | [optional] 
 **streamPosition** | **Number**|  | [optional] 
 **streamReadTimeout** | **Number**|  | [optional] 
 **streamWriteTimeout** | **Number**|  | [optional] 

### Return type

[**FileIntegerWrapper**](FileIntegerWrapper.md)

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

let apiInstance = new Api.FilesFoldersApi();
let opts = {
  'file': "/path/to/file", // File | The file to be inserted.
  'title': "title_example", // String | The file title to be inserted.
  'createNewIfExist': true, // Boolean | Specifies whether to create a new file if it already exists or not.
  'keepConvertStatus': true, // Boolean | Specifies whether to keep the file converting status or not.
  'streamCanRead': true, // Boolean | 
  'streamCanWrite': true, // Boolean | 
  'streamCanSeek': true, // Boolean | 
  'streamCanTimeout': true, // Boolean | 
  'streamLength': 789, // Number | 
  'streamPosition': 789, // Number | 
  'streamReadTimeout': 56, // Number | 
  'streamWriteTimeout': 56 // Number | 
};
apiInstance.insertFileToMyFromBody(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## renameFolder

> FolderIntegerWrapper renameFolder(folderId, opts)

Renames the selected folder with a new title specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/rename-folder/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **Number**| The folder ID for the folder creation. | 
 **createFolder** | [**CreateFolder**](CreateFolder.md)| The parameters for creating a folder. | [optional] 

### Return type

[**FolderIntegerWrapper**](FolderIntegerWrapper.md)

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

let apiInstance = new Api.FilesFoldersApi();
let folderId = 9846; // Number | The folder ID for the folder creation.
let opts = {
  'createFolder': new Api.CreateFolder() // CreateFolder | The parameters for creating a folder.
};
apiInstance.renameFolder(folderId, opts, (error, data, response) => {
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


## setFolderOrder

> FolderIntegerWrapper setFolderOrder(folderId, opts)

Sets the file order in the folder with ID specified in the request.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/set-folder-order/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **Number**| The folder unique identifier. | 
 **orderRequestDto** | [**OrderRequestDto**](OrderRequestDto.md)| The folder order information. | [optional] 

### Return type

[**FolderIntegerWrapper**](FolderIntegerWrapper.md)

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

let apiInstance = new Api.FilesFoldersApi();
let folderId = 9846; // Number | The folder unique identifier.
let opts = {
  'orderRequestDto': new Api.OrderRequestDto() // OrderRequestDto | The folder order information.
};
apiInstance.setFolderOrder(folderId, opts, (error, data, response) => {
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


## uploadFile

> ObjectWrapper uploadFile(folderId, opts)

Uploads a file specified in the request to the selected folder by single file uploading or standart multipart/form-data method.   **Note**:  You can upload files in two different ways:   &lt;ol&gt;  &lt;li&gt;Using single file upload. You should set the Content-Type and Content-Disposition headers to specify a file name and content type, and send the file to the request body.&lt;/li&gt;  &lt;li&gt;Using standart multipart/form-data method.&lt;/li&gt;  &lt;/ol&gt;

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/upload-file/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **Number**| The folder ID to upload a file. | 
 **uploadRequestDto** | [**UploadRequestDto**](UploadRequestDto.md)| The request parameters for uploading a file. | [optional] 

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

let apiInstance = new Api.FilesFoldersApi();
let folderId = 9846; // Number | The folder ID to upload a file.
let opts = {
  'uploadRequestDto': new Api.UploadRequestDto() // UploadRequestDto | The request parameters for uploading a file.
};
apiInstance.uploadFile(folderId, opts, (error, data, response) => {
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


## uploadFileToMy

> ObjectWrapper uploadFileToMy(opts)

Uploads a file specified in the request to the \&quot;My documents\&quot; section by single file uploading or standart multipart/form-data method.   **Note**:  You can upload files in two different ways:   &lt;ol&gt;  &lt;li&gt;Using single file upload. You should set the Content-Type and Content-Disposition headers to specify a file name and content type, and send the file to the request body.&lt;/li&gt;  &lt;li&gt;Using standart multipart/form-data method.&lt;/li&gt;  &lt;/ol&gt;

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/upload-file-to-my/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inDto** | [**UploadRequestDto**](.md)| The request parameters for uploading a file. | [optional] 

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

let apiInstance = new Api.FilesFoldersApi();
let opts = {
  'inDto': new Api.UploadRequestDto() // UploadRequestDto | The request parameters for uploading a file.
};
apiInstance.uploadFileToMy(opts, (error, data, response) => {
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

