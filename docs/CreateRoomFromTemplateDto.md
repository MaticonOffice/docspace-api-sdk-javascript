# Api.CreateRoomFromTemplateDto
The parameters for creating a room from a template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**templateId** | **Number** | The template ID from which the room to be created. | 
**title** | **String** | The room title. | 
**logo** | [**LogoRequest**](LogoRequest.md) |  | [optional] 
**copyLogo** | **Boolean** | Specifies whether to copy a logo or not. | [optional] 
**tags** | **[String]** | The collection of tags. | [optional] 
**color** | **String** | The color of the room to be created. | [optional] 
**cover** | **String** | The cover of the room to be created. | [optional] 
**quota** | **Number** | The room quota. | [optional] 
**indexing** | **Boolean** | Specifies whether to create a room with indexing. | [optional] 
**denyDownload** | **Boolean** | Specifies whether to deny downloads from the room. | [optional] 
**lifetime** | [**RoomDataLifetimeDto**](RoomDataLifetimeDto.md) |  | [optional] 
**watermark** | [**WatermarkRequestDto**](WatermarkRequestDto.md) |  | [optional] 
**_private** | **Boolean** | Specifies whether the room to be created is private or not. | [optional] 


