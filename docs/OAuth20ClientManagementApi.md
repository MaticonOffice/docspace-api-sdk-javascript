# Api.OAuth20ClientManagementApi

All URIs are relative to *http://localhost:8092*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeActivation**](#changeactivation) | **PATCH** /api/2.0/clients/{clientId}/activation | Change the client activation status
[**createClient**](#createclient) | **POST** /api/2.0/clients | Create a new OAuth2 client
[**deleteClient**](#deleteclient) | **DELETE** /api/2.0/clients/{clientId} | Delete an OAuth2 client
[**regenerateSecret**](#regeneratesecret) | **PATCH** /api/2.0/clients/{clientId}/regenerate | Regenerate the client secret
[**revokeUserClient**](#revokeuserclient) | **DELETE** /api/2.0/clients/{clientId}/revoke | Revoke client consent
[**updateClient**](#updateclient) | **PUT** /api/2.0/clients/{clientId} | Update an existing OAuth2 client



## changeActivation

> Object changeActivation(clientId, changeClientActivationRequest)

Activates or deactivates an OAuth2 client. When deactivated, the client cannot request new access tokens, but existing tokens will remain valid until they expire.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/change-activation/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| The client identifier. | 
 **changeClientActivationRequest** | [**ChangeClientActivationRequest**](ChangeClientActivationRequest.md)|  | 

### Return type

**Object**

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

let apiInstance = new Api.OAuth20ClientManagementApi();
let clientId = "6c7cf17b-1bd3-47d5-94c6-be2d3570e168"; // String | The client identifier.
let changeClientActivationRequest = new Api.ChangeClientActivationRequest(); // ChangeClientActivationRequest | 
apiInstance.changeActivation(clientId, changeClientActivationRequest, (error, data, response) => {
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


## createClient

> ClientResponse createClient(createClientRequest)

Creates a new OAuth2 client with the specified configuration. The client will be created with the provided scopes, redirect URIs, and other settings. Returns the created client details including the generated client ID.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/create-client/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createClientRequest** | [**CreateClientRequest**](CreateClientRequest.md)|  | 

### Return type

[**ClientResponse**](ClientResponse.md)

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

let apiInstance = new Api.OAuth20ClientManagementApi();
let createClientRequest = new Api.CreateClientRequest(); // CreateClientRequest | 
apiInstance.createClient(createClientRequest, (error, data, response) => {
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


## deleteClient

> Object deleteClient(clientId)

Permanently deletes an OAuth2 client and all associated data. All access and refresh tokens issued to this client will be invalidated. This operation cannot be undone.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/delete-client/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| The client identifier. | 

### Return type

**Object**

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

let apiInstance = new Api.OAuth20ClientManagementApi();
let clientId = "6c7cf17b-1bd3-47d5-94c6-be2d3570e168"; // String | The client identifier.
apiInstance.deleteClient(clientId, (error, data, response) => {
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


## regenerateSecret

> ClientSecretResponse regenerateSecret(clientId)

Generates a new client secret for the specified OAuth2 client. The old secret will be immediately invalidated. This operation should be used with caution as it requires updating the secret in all client applications.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/regenerate-secret/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| The client identifier. | 

### Return type

[**ClientSecretResponse**](ClientSecretResponse.md)

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

let apiInstance = new Api.OAuth20ClientManagementApi();
let clientId = "6c7cf17b-1bd3-47d5-94c6-be2d3570e168"; // String | The client identifier.
apiInstance.regenerateSecret(clientId, (error, data, response) => {
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


## revokeUserClient

> Object revokeUserClient(clientId)

Revokes all user consents for the specified OAuth2 client. This will invalidate all access tokens and refresh tokens issued to this client for the current user. The user will need to re-authorize the client to access their resources.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/revoke-user-client/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| The client identifier. | 

### Return type

**Object**

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

let apiInstance = new Api.OAuth20ClientManagementApi();
let clientId = "6c7cf17b-1bd3-47d5-94c6-be2d3570e168"; // String | The client identifier.
apiInstance.revokeUserClient(clientId, (error, data, response) => {
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


## updateClient

> Object updateClient(clientId, updateClientRequest)

Updates the configuration of an existing OAuth2 client, allowing modifications to the client name, description, redirect URIs, and other settings. The client ID cannot be modified.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/update-client/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| The client identifier. | 
 **updateClientRequest** | [**UpdateClientRequest**](UpdateClientRequest.md)|  | 

### Return type

**Object**

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

let apiInstance = new Api.OAuth20ClientManagementApi();
let clientId = "6c7cf17b-1bd3-47d5-94c6-be2d3570e168"; // String | The client identifier.
let updateClientRequest = new Api.UpdateClientRequest(); // UpdateClientRequest | 
apiInstance.updateClient(clientId, updateClientRequest, (error, data, response) => {
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

