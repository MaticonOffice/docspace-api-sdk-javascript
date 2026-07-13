# Api.FilesSettingsDto
The file settings parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extsImagePreviewed** | **[String]** | The list of extensions of the viewed images. | [optional] 
**extsMediaPreviewed** | **[String]** | The list of extensions of the viewed media files. | [optional] 
**extsWebPreviewed** | **[String]** | The list of extensions of the viewed files. | [optional] 
**extsWebEdited** | **[String]** | The list of extensions of the edited files. | [optional] 
**extsWebEncrypt** | **[String]** | The list of extensions of the encrypted files. | [optional] 
**extsWebReviewed** | **[String]** | The list of extensions of the reviewed files. | [optional] 
**extsWebCustomFilterEditing** | **[String]** | The list of extensions of the custom filter files. | [optional] 
**extsWebRestrictedEditing** | **[String]** | The list of extensions of the files that are restricted for editing. | [optional] 
**extsWebCommented** | **[String]** | The list of extensions of the commented files. | [optional] 
**extsWebTemplate** | **[String]** | The list of extensions of the template files. | [optional] 
**extsCoAuthoring** | **[String]** | The list of extensions of the co-authoring files. | [optional] 
**extsMustConvert** | **[String]** | The list of extensions of the files that must be converted. | [optional] 
**extsConvertible** | **{String: [String]}** | The list of the convertible extensions. | [optional] 
**extsUploadable** | **[String]** | The list of the uploadable extensions. | [optional] 
**extsArchive** | **[String]** | The list of extensions of the archive files. | [optional] 
**extsVideo** | **[String]** | The list of the video extensions. | [optional] 
**extsAudio** | **[String]** | The list of the audio extensions. | [optional] 
**extsImage** | **[String]** | The list of the image extensions. | [optional] 
**extsSpreadsheet** | **[String]** | The list of the spreadsheet extensions. | [optional] 
**extsPresentation** | **[String]** | The list of the presentation extensions. | [optional] 
**extsDocument** | **[String]** | The list of the text document extensions. | [optional] 
**extsDiagram** | **[String]** | The list of the diagram extensions. | [optional] 
**internalFormats** | [**FilesSettingsDtoInternalFormats**](FilesSettingsDtoInternalFormats.md) |  | [optional] 
**masterFormExtension** | **String** | The master form extension. | [optional] 
**paramVersion** | **String** | The URL parameter which specifies the file version. | [optional] 
**paramOutType** | **String** | The URL parameter which specifies the output type of the converted file. | [optional] 
**fileDownloadUrlString** | **String** | The URL to download a file. | [optional] 
**fileWebViewerUrlString** | **String** | The URL to the file web viewer. | [optional] 
**fileWebViewerExternalUrlString** | **String** | The external URL to the file web viewer. | [optional] 
**fileWebEditorUrlString** | **String** | The URL to the file web editor. | [optional] 
**fileWebEditorExternalUrlString** | **String** | The external URL to the file web editor. | [optional] 
**fileRedirectPreviewUrlString** | **String** | The redirect URL to the file viewer. | [optional] 
**fileThumbnailUrlString** | **String** | The URL to the file thumbnail. | [optional] 
**confirmDelete** | **Boolean** | Specifies whether to confirm the file deletion or not. | [optional] 
**enableThirdParty** | **Boolean** | Specifies whether to allow users to connect the third-party storages. | [optional] 
**externalShare** | **Boolean** | Specifies whether to enable sharing external links to the files. | [optional] 
**externalShareSocialMedia** | **Boolean** | Specifies whether to enable sharing files on social media. | [optional] 
**storeOriginalFiles** | **Boolean** | Specifies whether to enable storing original files. | [optional] 
**keepNewFileName** | **Boolean** | Specifies whether to keep the new file name. | [optional] 
**displayFileExtension** | **Boolean** | Specifies whether to display the file extension. | [optional] 
**convertNotify** | **Boolean** | Specifies whether to display the conversion notification. | [optional] 
**hideConfirmCancelOperation** | **Boolean** | Specifies whether to hide the confirmation dialog for the cancel operation. | [optional] 
**hideConfirmConvertSave** | **Boolean** | Specifies whether to hide the confirmation dialog  for saving the file copy in the original format when converting a file. | [optional] 
**hideConfirmConvertOpen** | **Boolean** | Specifies whether to hide the confirmation dialog  for opening the conversion result. | [optional] 
**hideConfirmRoomLifetime** | **Boolean** | Specifies whether to hide the confirmation dialog about the file lifetime in the room. | [optional] 
**defaultOrder** | [**OrderBy**](OrderBy.md) |  | [optional] 
**forcesave** | **Boolean** | Specifies whether to forcesave the files or not. | [optional] 
**storeForcesave** | **Boolean** | Specifies whether to store the forcesaved file versions or not. | [optional] 
**recentSection** | **Boolean** | Specifies if the \&quot;Recent\&quot; section is displayed or not. | [optional] 
**favoritesSection** | **Boolean** | Specifies if the \&quot;Favorites\&quot; section is displayed or not. | [optional] 
**templatesSection** | **Boolean** | Specifies if the \&quot;Templates\&quot; section is displayed or not. | [optional] 
**downloadTarGz** | **Boolean** | Specifies whether to download the .tar.gz files or not. | [optional] 
**automaticallyCleanUp** | [**AutoCleanUpData**](AutoCleanUpData.md) |  | [optional] 
**canSearchByContent** | **Boolean** | Specifies whether the file can be searched by its content or not. | [optional] 
**defaultSharingAccessRights** | **[Number]** | The default access rights in sharing settings. | [optional] 
**maxUploadThreadCount** | **Number** | The maximum number of upload threads. | [optional] 
**chunkUploadSize** | **Number** | The size of a large file that is uploaded in chunks. | [optional] 
**openEditorInSameTab** | **Boolean** | Specifies whether to open the editor in the same tab or not. | [optional] 



## Enum: [DefaultSharingAccessRightsEnum]


* `None` (value: `0`)

* `ReadWrite` (value: `1`)

* `Read` (value: `2`)

* `Restrict` (value: `3`)

* `Varies` (value: `4`)

* `Review` (value: `5`)

* `Comment` (value: `6`)

* `FillForms` (value: `7`)

* `CustomFilter` (value: `8`)

* `RoomManager` (value: `9`)

* `Editing` (value: `10`)

* `ContentCreator` (value: `11`)




