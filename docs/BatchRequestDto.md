# Api.BatchRequestDto
The request parameters for copying/moving files.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**returnSingleOperation** | **Boolean** | Specifies whether to return only the current operation | [optional] 
**folderIds** | [**[BaseBatchRequestDtoFolderIdsInner]**](BaseBatchRequestDtoFolderIdsInner.md) | The list of folder IDs to be copied/moved. | [optional] 
**fileIds** | [**[BaseBatchRequestDtoFolderIdsInner]**](BaseBatchRequestDtoFolderIdsInner.md) | The list of file IDs to be copied/moved. | [optional] 
**destFolderId** | [**BatchRequestDtoDestFolderId**](BatchRequestDtoDestFolderId.md) |  | [optional] 
**conflictResolveType** | [**FileConflictResolveType**](FileConflictResolveType.md) |  | [optional] 
**deleteAfter** | **Boolean** | Specifies whether to delete the source files/folders after they are moved or copied to the destination folder. | [optional] 
**content** | **Boolean** | Specifies whether to copy or move the folder content or not. | [optional] 
**toFillOut** | **Boolean** | Specifies whether the file is copied for filling out | [optional] 


