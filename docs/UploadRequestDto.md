# Api.UploadRequestDto
The request parameters for uploading a file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **File** | The file to be uploaded. | [optional] 
**contentType** | [**ContentType**](ContentType.md) |  | [optional] 
**contentDisposition** | [**ContentDisposition**](ContentDisposition.md) |  | [optional] 
**files** | **[File]** | The list of files when specified as multipart/form-data. | [optional] 
**createNewIfExist** | **Boolean** | Specifies whether to create the new file if it already exists or not. | [optional] 
**storeOriginalFileFlag** | **Boolean** | Specifies whether to upload documents in the original formats as well or not. | [optional] 
**keepConvertStatus** | **Boolean** | Specifies whether to keep the file converting status or not. | [optional] 
**stream** | **File** | The request input stream. | [optional] 


