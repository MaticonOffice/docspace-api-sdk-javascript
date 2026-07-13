# Api.RoomInvitationRequest
The request parameters for inviting users to the room.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invitations** | [**[RoomInvitation]**](RoomInvitation.md) | The collection of invitation parameters. | [optional] 
**notify** | **Boolean** | Specifies whether to notify users about the shared room or not. | [optional] 
**message** | **String** | The message to send when notifying about the shared room. | [optional] 
**culture** | **String** | The language of the room invitation. | [optional] 
**force** | **Boolean** | Specifies whether to forcibly delete a user with form roles from the room. | [optional] 


