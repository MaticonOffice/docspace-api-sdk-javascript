# Api.BackupScheduleDto
The backup schedule parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storageType** | [**BackupStorageType**](BackupStorageType.md) |  | [optional] 
**storageParams** | [**[ItemKeyValuePairObjectObject]**](ItemKeyValuePairObjectObject.md) | The backup storage parameters. | [optional] 
**backupsStored** | **Number** | The maximum number of the stored backup copies. | [optional] 
**cronParams** | [**Cron**](Cron.md) |  | [optional] 
**dump** | **Boolean** | Specifies if a dump will be created or not. | [optional] 


