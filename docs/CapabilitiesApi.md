# Api.CapabilitiesApi

All URIs are relative to *http://localhost:8092*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPortalCapabilities**](#getportalcapabilities) | **GET** /api/2.0/capabilities | Get portal capabilities



## getPortalCapabilities

> CapabilitiesWrapper getPortalCapabilities()

Returns the information about portal capabilities.

For more information, see [api.maticonoffice.ru](https://api.maticonoffice.ru/docspace/api-backend/usage-api/get-portal-capabilities/).

### Parameters

This endpoint does not need any parameter.

### Return type

[**CapabilitiesWrapper**](CapabilitiesWrapper.md)

### Authorization

No authorization required

### Example

```javascript
import Api from '@maticonoffice/docspace-api-sdk';

let apiInstance = new Api.CapabilitiesApi();
apiInstance.getPortalCapabilities((error, data, response) => {
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

