# Api.UpdateRoomRequest
The request parameters for updating a room.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | The room title. | [optional] 
**quota** | **Number** | The room quota. | [optional] 
**indexing** | **Boolean** | Specifies whether to create a third-party room with indexing. | [optional] 
**denyDownload** | **Boolean** | Specifies whether to deny downloads from the third-party room. | [optional] 
**lifetime** | [**RoomDataLifetimeDto**](RoomDataLifetimeDto.md) |  | [optional] 
**watermark** | [**WatermarkRequestDto**](WatermarkRequestDto.md) |  | [optional] 
**logo** | [**LogoRequest**](LogoRequest.md) |  | [optional] 
**tags** | **[String]** | The list of tags. | [optional] 
**color** | **String** | The room color. | [optional] 
**cover** | **String** | The room cover. | [optional] 


