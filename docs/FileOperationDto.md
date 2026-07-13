# Api.FileOperationDto
The file operation information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The file operation ID. | [optional] 
**operation** | [**FileOperationType**](FileOperationType.md) |  | [optional] 
**progress** | **Number** | The file operation progress in percentage. | [optional] 
**error** | **String** | The file operation error message. | [optional] 
**processed** | **String** | The file operation processing status. | [optional] 
**finished** | **Boolean** | Specifies if the file operation is finished or not. | [optional] 
**url** | **String** | The file operation URL. | [optional] 
**files** | [**[FileEntryDto]**](FileEntryDto.md) | The list of files of the file operation. | [optional] 
**folders** | [**[FileEntryDto]**](FileEntryDto.md) | The list of folders of the file operation. | [optional] 


