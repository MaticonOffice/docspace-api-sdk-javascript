# Api.SmtpOperationStatusRequestsDto
The request parameters for tracking SMTP (Simple Mail Transfer Protocol) operation status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed** | **Boolean** | Specifies whether the SMTP operation has finished processing. | [optional] 
**id** | **String** | The unique identifier for tracking the SMTP operation. | [optional] 
**error** | **String** | The error message if the SMTP operation encountered issues. | [optional] 
**status** | **String** | The current state of the SMTP operation. | [optional] 
**percents** | **Number** | The progress indicator showing completion percentage of the operation. | [optional] 


