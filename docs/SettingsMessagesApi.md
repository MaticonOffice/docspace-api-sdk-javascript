# Api.SettingsMessagesApi

All URIs are relative to *http://localhost:8092*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enableAdminMessageSettings**](#enableadminmessagesettings) | **POST** /api/2.0/settings/messagesettings | Enable the administrator message settings
[**sendAdminMail**](#sendadminmail) | **POST** /api/2.0/settings/sendadmmail | Send a message to the administrator
[**sendJoinInviteMail**](#sendjoininvitemail) | **POST** /api/2.0/settings/sendjoininvite | Sends an invitation email



## enableAdminMessageSettings

> StringWrapper enableAdminMessageSettings(opts)

Displays the contact form on the \&quot;Sign In\&quot; page, allowing users to send a message to the DocSpace administrator in case they encounter any issues while accessing DocSpace.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/enable-admin-message-settings/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **turnOnAdminMessageSettingsRequestDto** | [**TurnOnAdminMessageSettingsRequestDto**](TurnOnAdminMessageSettingsRequestDto.md)|  | [optional] 

### Return type

[**StringWrapper**](StringWrapper.md)

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

let apiInstance = new Api.SettingsMessagesApi();
let opts = {
  'turnOnAdminMessageSettingsRequestDto': new Api.TurnOnAdminMessageSettingsRequestDto() // TurnOnAdminMessageSettingsRequestDto | 
};
apiInstance.enableAdminMessageSettings(opts, (error, data, response) => {
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


## sendAdminMail

> StringWrapper sendAdminMail(opts)

Sends a message to the administrator email when unauthorized users encounter issues accessing DocSpace.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/send-admin-mail/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminMessageSettingsRequestsDto** | [**AdminMessageSettingsRequestsDto**](AdminMessageSettingsRequestsDto.md)|  | [optional] 

### Return type

[**StringWrapper**](StringWrapper.md)

### Authorization

No authorization required

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';

let apiInstance = new Api.SettingsMessagesApi();
let opts = {
  'adminMessageSettingsRequestsDto': new Api.AdminMessageSettingsRequestsDto() // AdminMessageSettingsRequestsDto | 
};
apiInstance.sendAdminMail(opts, (error, data, response) => {
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


## sendJoinInviteMail

> StringWrapper sendJoinInviteMail(opts)

Sends an invitation email with a link to the DocSpace.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/send-join-invite-mail/).

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adminMessageBaseSettingsRequestsDto** | [**AdminMessageBaseSettingsRequestsDto**](AdminMessageBaseSettingsRequestsDto.md)|  | [optional] 

### Return type

[**StringWrapper**](StringWrapper.md)

### Authorization

No authorization required

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';

let apiInstance = new Api.SettingsMessagesApi();
let opts = {
  'adminMessageBaseSettingsRequestsDto': new Api.AdminMessageBaseSettingsRequestsDto() // AdminMessageBaseSettingsRequestsDto | 
};
apiInstance.sendJoinInviteMail(opts, (error, data, response) => {
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

