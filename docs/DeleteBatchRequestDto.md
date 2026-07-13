# Api.DeleteBatchRequestDto
The request parameters for deleting files.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**returnSingleOperation** | **Boolean** | Specifies whether to return only the current operation | [optional] 
**folderIds** | [**[BaseBatchRequestDtoFolderIdsInner]**](BaseBatchRequestDtoFolderIdsInner.md) | The list of folder IDs to be deleted. | [optional] 
**fileIds** | [**[BaseBatchRequestDtoFolderIdsInner]**](BaseBatchRequestDtoFolderIdsInner.md) | The list of file IDs to be deleted. | [optional] 
**deleteAfter** | **Boolean** | Specifies whether to delete a file after the editing session is finished or not | [optional] 
**immediately** | **Boolean** | Specifies whether to move a file to the \\\&quot;Trash\\\&quot; folder or delete it immediately. | [optional] 


