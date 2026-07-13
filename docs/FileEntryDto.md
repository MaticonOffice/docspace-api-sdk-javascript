# Api.FileEntryDto
The file entry information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | The file entry title. | [optional] 
**access** | [**FileShare**](FileShare.md) |  | [optional] 
**shared** | **Boolean** | Specifies if the file entry is shared or not. | [optional] 
**created** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] 
**createdBy** | [**EmployeeDto**](EmployeeDto.md) |  | [optional] 
**updated** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] 
**autoDelete** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] 
**rootFolderType** | [**FolderType**](FolderType.md) |  | [optional] 
**parentRoomType** | [**FolderType**](FolderType.md) |  | [optional] 
**updatedBy** | [**EmployeeDto**](EmployeeDto.md) |  | [optional] 
**providerItem** | **Boolean** | Specifies if the file entry provider is specified or not. | [optional] 
**providerKey** | **String** | The provider key of the file entry. | [optional] 
**providerId** | **Number** | The provider ID of the file entry. | [optional] 
**order** | **String** | The order of the file entry. | [optional] 
**fileEntryType** | [**FileEntryType**](FileEntryType.md) |  | [optional] 


