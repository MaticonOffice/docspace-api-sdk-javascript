# Api.DownloadRequestDto
The request parameters for downloading files.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**returnSingleOperation** | **Boolean** | Specifies whether to return only the current operation | [optional] 
**folderIds** | [**[BaseBatchRequestDtoFolderIdsInner]**](BaseBatchRequestDtoFolderIdsInner.md) | The list of folder IDs to be downloaded. | [optional] 
**fileIds** | [**[BaseBatchRequestDtoFolderIdsInner]**](BaseBatchRequestDtoFolderIdsInner.md) | The list of file IDs to be downloaded. | [optional] 
**fileConvertIds** | [**[DownloadRequestItemDto]**](DownloadRequestItemDto.md) | The list of file IDs which will be converted. | [optional] 


