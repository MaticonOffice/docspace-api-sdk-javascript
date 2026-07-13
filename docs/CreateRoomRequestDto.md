# Api.CreateRoomRequestDto
The request parameters for creating a room.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | The room name. | 
**quota** | **Number** | The room quota. | [optional] 
**indexing** | **Boolean** | Specifies whether to create a room with indexing. | [optional] 
**denyDownload** | **Boolean** | Specifies whether to deny downloads from the room. | [optional] 
**lifetime** | [**RoomDataLifetimeDto**](RoomDataLifetimeDto.md) |  | [optional] 
**watermark** | [**WatermarkRequestDto**](WatermarkRequestDto.md) |  | [optional] 
**logo** | [**LogoRequest**](LogoRequest.md) |  | [optional] 
**tags** | **[String]** | The list of tags. | [optional] 
**color** | **String** | The room color. | [optional] 
**cover** | **String** | The room cover. | [optional] 
**roomType** | [**RoomType**](RoomType.md) |  | 
**_private** | **Boolean** | Specifies whether the room to be created is private or not. | [optional] 
**share** | [**[FileShareParams]**](FileShareParams.md) | The collection of sharing parameters. | [optional] 


