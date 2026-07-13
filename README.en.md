[RU](README.md) | [EN](README.en.md)

# @maticonoffice/docspace-api-sdk

The Maticon Office DocSpace SDK for JavaScript is a library that provides tools for integrating and managing DocSpace features within your applications. It simplifies interaction with the DocSpace TypeScript API by offering ready-to-use methods and models.

- API version: 3.2.0
- SDK version: 1.0.0

For more information, please visit [https://support.maticonoffice.ru/hc/en-us](https://support.maticonoffice.ru/hc/en-us)

## Installation

### Using [Node.js](https://nodejs.org/)

#### npm

To publish the library as an [npm](https://www.npmjs.com/) package, please follow the instructions [here](https://docs.npmjs.com/getting-started/publishing-npm-packages).

To install the package, run:

```shell
npm install @maticonoffice/docspace-api-sdk --save
```

Finally, build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing it to a remote npm registry:

1. Navigate to the directory containing `package.json` (and this `README.md` file). Let's refer to this path as `JAVASCRIPT_CLIENT_DIR`.

2. Install dependencies:

```shell
npm install
```

3. Link the package globally:

```shell
npm link
```

4. Switch to the directory you want to use your @maticonoffice/docspace-api-sdk from.

5. To use the link defined in your project, run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

6. Build the module:

```shell
npm run build
```

#### Git

If the library is hosted in a Git repository (e.g., https://github.com/MaticonOffice/docspace-api-sdk-javascript), you can install it directly:

```shell
    npm install git+https://github.com/MaticonOffice/docspace-api-sdk-javascript.git
```

### Using browser

The library also works in the browser environment via npm and [Browserify](http://browserify.org/):

1. Follow the instructions from the [Using Node.js](https://nodejs.org/en) section.

2. Install Browserify:

```shell
npm install -g browserify
```

3. Assuming `main.js` is your entry file, bundle the code:

```shell
browserify main.js > bundle.js
```

4. Include `bundle.js` in the HTML pages.

### Webpack Configuration

When using Webpack you may encounter the following error: "Module not found: Error: Cannot resolve module". You should probably disable the AMD loader. Add/merge
the following section to your Webpack configuration:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Documentation for Authorization


Authentication schemes defined for the API:
<a id="asc_auth_key"></a>
### asc_auth_key


- **Type**: API key
- **API key parameter name**: asc_auth_key
- **Location**: Cookie

<a id="Basic"></a>
### Basic

- **Type**: HTTP basic authentication

<a id="Bearer"></a>
### Bearer

- **Type**: Bearer authentication (JWT)

<a id="ApiKeyBearer"></a>
### ApiKeyBearer


- **Type**: API key
- **API key parameter name**: ApiKeyBearer
- **Location**: HTTP header

<a id="OAuth2"></a>
### OAuth2

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: {{authBaseUrl}}/oauth2/authorize
- **Token Url**: {{authBaseUrl}}/oauth2/token
- **Scopes**:
  - read: Read access to protected resources
  - write: Write access to protected resources

<a id="OpenId"></a>
### OpenId

- **Type**: OpenId Connect
- **OpenId Connect URL**: {{authBaseUrl}}/.well-known/openid-configuration

<a id="x-signature"></a>
### x-signature


- **Type**: API key
- **API key parameter name**: x-signature
- **Location**: Cookie


## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Api = require('@maticonoffice/docspace-api-sdk');

var defaultClient = Api.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME'
Basic.password = 'YOUR PASSWORD'
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = "YOUR ACCESS TOKEN"
// Configure API key authorization: ApiKeyBearer
var ApiKeyBearer = defaultClient.authentications['ApiKeyBearer'];
ApiKeyBearer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyBearer.apiKeyPrefix['ApiKeyBearer'] = "Token"
// Configure API key authorization: asc_auth_key
var asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//asc_auth_key.apiKeyPrefix['asc_auth_key'] = "Token"
// Configure Bearer (JWT) access token for authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.accessToken = "YOUR ACCESS TOKEN"

var api = new Api.ApiKeysApi()
var opts = {
  'createApiKeyRequestDto': new Api.CreateApiKeyRequestDto() // {CreateApiKeyRequestDto}
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createApiKey(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:8092*

<details><summary>API Endoints table</summary>

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Api.ApiKeysApi* | [**createApiKey**](docs/ApiKeysApi.md#createapikey) | **POST** /api/2.0/keys | Create a user API key
*Api.ApiKeysApi* | [**deleteApiKey**](docs/ApiKeysApi.md#deleteapikey) | **DELETE** /api/2.0/keys/{keyId} | Delete a user API key
*Api.ApiKeysApi* | [**getAllPermissions**](docs/ApiKeysApi.md#getallpermissions) | **GET** /api/2.0/keys/permissions | Get API key permissions
*Api.ApiKeysApi* | [**getApiKey**](docs/ApiKeysApi.md#getapikey) | **GET** /api/2.0/keys/@self | Get user API key info
*Api.ApiKeysApi* | [**getApiKeys**](docs/ApiKeysApi.md#getapikeys) | **GET** /api/2.0/keys | Get user API keys
*Api.ApiKeysApi* | [**updateApiKey**](docs/ApiKeysApi.md#updateapikey) | **PUT** /api/2.0/keys/{keyId} | Update an API key
*Api.AuthenticationApi* | [**authenticateMe**](docs/AuthenticationApi.md#authenticateme) | **POST** /api/2.0/authentication | Authenticate a user
*Api.AuthenticationApi* | [**authenticateMeFromBodyWithCode**](docs/AuthenticationApi.md#authenticatemefrombodywithcode) | **POST** /api/2.0/authentication/{code} | Authenticate a user by code
*Api.AuthenticationApi* | [**checkConfirm**](docs/AuthenticationApi.md#checkconfirm) | **POST** /api/2.0/authentication/confirm | Open confirmation email URL
*Api.AuthenticationApi* | [**getIsAuthentificated**](docs/AuthenticationApi.md#getisauthentificated) | **GET** /api/2.0/authentication | Check authentication
*Api.AuthenticationApi* | [**logout**](docs/AuthenticationApi.md#logout) | **POST** /api/2.0/authentication/logout | Log out
*Api.AuthenticationApi* | [**saveMobilePhone**](docs/AuthenticationApi.md#savemobilephone) | **POST** /api/2.0/authentication/setphone | Set a mobile phone
*Api.AuthenticationApi* | [**sendSmsCode**](docs/AuthenticationApi.md#sendsmscode) | **POST** /api/2.0/authentication/sendsms | Send SMS code
*Api.BackupApi* | [**createBackupSchedule**](docs/BackupApi.md#createbackupschedule) | **POST** /api/2.0/backup/createbackupschedule | Create the backup schedule
*Api.BackupApi* | [**deleteBackup**](docs/BackupApi.md#deletebackup) | **DELETE** /api/2.0/backup/deletebackup/{id} | Delete the backup
*Api.BackupApi* | [**deleteBackupHistory**](docs/BackupApi.md#deletebackuphistory) | **DELETE** /api/2.0/backup/deletebackuphistory | Delete the backup history
*Api.BackupApi* | [**deleteBackupSchedule**](docs/BackupApi.md#deletebackupschedule) | **DELETE** /api/2.0/backup/deletebackupschedule | Delete the backup schedule
*Api.BackupApi* | [**getBackupHistory**](docs/BackupApi.md#getbackuphistory) | **GET** /api/2.0/backup/getbackuphistory | Get the backup history
*Api.BackupApi* | [**getBackupProgress**](docs/BackupApi.md#getbackupprogress) | **GET** /api/2.0/backup/getbackupprogress | Get the backup progress
*Api.BackupApi* | [**getBackupSchedule**](docs/BackupApi.md#getbackupschedule) | **GET** /api/2.0/backup/getbackupschedule | Get the backup schedule
*Api.BackupApi* | [**getRestoreProgress**](docs/BackupApi.md#getrestoreprogress) | **GET** /api/2.0/backup/getrestoreprogress | Get the restoring progress
*Api.BackupApi* | [**startBackup**](docs/BackupApi.md#startbackup) | **POST** /api/2.0/backup/startbackup | Start the backup
*Api.BackupApi* | [**startBackupRestore**](docs/BackupApi.md#startbackuprestore) | **POST** /api/2.0/backup/startrestore | Start the restoring process
*Api.CapabilitiesApi* | [**getPortalCapabilities**](docs/CapabilitiesApi.md#getportalcapabilities) | **GET** /api/2.0/capabilities | Get portal capabilities
*Api.FilesFilesApi* | [**addTemplates**](docs/FilesFilesApi.md#addtemplates) | **POST** /api/2.0/files/templates | Add template files
*Api.FilesFilesApi* | [**changeVersionHistory**](docs/FilesFilesApi.md#changeversionhistory) | **PUT** /api/2.0/files/file/{fileId}/history | Change version history
*Api.FilesFilesApi* | [**checkFillFormDraft**](docs/FilesFilesApi.md#checkfillformdraft) | **POST** /api/2.0/files/masterform/{fileId}/checkfillformdraft | Check the form draft filling
*Api.FilesFilesApi* | [**copyFileAs**](docs/FilesFilesApi.md#copyfileas) | **POST** /api/2.0/files/file/{fileId}/copyas | Copy a file
*Api.FilesFilesApi* | [**createEditSession**](docs/FilesFilesApi.md#createeditsession) | **POST** /api/2.0/files/file/{fileId}/edit_session | Create the editing session
*Api.FilesFilesApi* | [**createFile**](docs/FilesFilesApi.md#createfile) | **POST** /api/2.0/files/{folderId}/file | Create a file
*Api.FilesFilesApi* | [**createFileInMyDocuments**](docs/FilesFilesApi.md#createfileinmydocuments) | **POST** /api/2.0/files/@my/file | Create a file in the \&quot;My documents\&quot; section
*Api.FilesFilesApi* | [**createHtmlFile**](docs/FilesFilesApi.md#createhtmlfile) | **POST** /api/2.0/files/{folderId}/html | Create an HTML file
*Api.FilesFilesApi* | [**createHtmlFileInMyDocuments**](docs/FilesFilesApi.md#createhtmlfileinmydocuments) | **POST** /api/2.0/files/@my/html | Create an HTML file in the \&quot;My documents\&quot; section
*Api.FilesFilesApi* | [**createPrimaryExternalLink**](docs/FilesFilesApi.md#createprimaryexternallink) | **POST** /api/2.0/files/file/{id}/link | Create primary external link
*Api.FilesFilesApi* | [**createTextFile**](docs/FilesFilesApi.md#createtextfile) | **POST** /api/2.0/files/{folderId}/text | Create a text file
*Api.FilesFilesApi* | [**createTextFileInMyDocuments**](docs/FilesFilesApi.md#createtextfileinmydocuments) | **POST** /api/2.0/files/@my/text | Create a text file in the \&quot;My documents\&quot; section
*Api.FilesFilesApi* | [**createThumbnails**](docs/FilesFilesApi.md#createthumbnails) | **POST** /api/2.0/files/thumbnails | Create file thumbnails
*Api.FilesFilesApi* | [**deleteFile**](docs/FilesFilesApi.md#deletefile) | **DELETE** /api/2.0/files/file/{fileId} | Delete a file
*Api.FilesFilesApi* | [**deleteRecent**](docs/FilesFilesApi.md#deleterecent) | **DELETE** /api/2.0/files/recent | Delete recent files
*Api.FilesFilesApi* | [**deleteTemplates**](docs/FilesFilesApi.md#deletetemplates) | **DELETE** /api/2.0/files/templates | Delete template files
*Api.FilesFilesApi* | [**getAllFormRoles**](docs/FilesFilesApi.md#getallformroles) | **GET** /api/2.0/files/file/{fileId}/formroles | Get form roles
*Api.FilesFilesApi* | [**getEditDiffUrl**](docs/FilesFilesApi.md#geteditdiffurl) | **GET** /api/2.0/files/file/{fileId}/edit/diff | Get changes URL
*Api.FilesFilesApi* | [**getEditHistory**](docs/FilesFilesApi.md#getedithistory) | **GET** /api/2.0/files/file/{fileId}/edit/history | Get version history
*Api.FilesFilesApi* | [**getFileHistory**](docs/FilesFilesApi.md#getfilehistory) | **GET** /api/2.0/files/file/{fileId}/log | Get file history
*Api.FilesFilesApi* | [**getFileInfo**](docs/FilesFilesApi.md#getfileinfo) | **GET** /api/2.0/files/file/{fileId} | Get file information
*Api.FilesFilesApi* | [**getFileLinks**](docs/FilesFilesApi.md#getfilelinks) | **GET** /api/2.0/files/file/{id}/links | Get file external links
*Api.FilesFilesApi* | [**getFilePrimaryExternalLink**](docs/FilesFilesApi.md#getfileprimaryexternallink) | **GET** /api/2.0/files/file/{id}/link | Get primary external link
*Api.FilesFilesApi* | [**getFileVersionInfo**](docs/FilesFilesApi.md#getfileversioninfo) | **GET** /api/2.0/files/file/{fileId}/history | Get file versions
*Api.FilesFilesApi* | [**getFillResult**](docs/FilesFilesApi.md#getfillresult) | **GET** /api/2.0/files/file/fillresult | Get form-filling result
*Api.FilesFilesApi* | [**getPresignedFileUri**](docs/FilesFilesApi.md#getpresignedfileuri) | **GET** /api/2.0/files/file/{fileId}/presigned | Get file download link asynchronously
*Api.FilesFilesApi* | [**getPresignedUri**](docs/FilesFilesApi.md#getpresigneduri) | **GET** /api/2.0/files/file/{fileId}/presigneduri | Get file download link
*Api.FilesFilesApi* | [**getProtectedFileUsers**](docs/FilesFilesApi.md#getprotectedfileusers) | **GET** /api/2.0/files/file/{fileId}/protectusers | Get users access rights to the protected file
*Api.FilesFilesApi* | [**getReferenceData**](docs/FilesFilesApi.md#getreferencedata) | **POST** /api/2.0/files/file/referencedata | Get reference data
*Api.FilesFilesApi* | [**isFormPDF**](docs/FilesFilesApi.md#isformpdf) | **GET** /api/2.0/files/file/{fileId}/isformpdf | Check the PDF file
*Api.FilesFilesApi* | [**lockFile**](docs/FilesFilesApi.md#lockfile) | **PUT** /api/2.0/files/file/{fileId}/lock | Lock a file
*Api.FilesFilesApi* | [**manageFormFilling**](docs/FilesFilesApi.md#manageformfilling) | **PUT** /api/2.0/files/file/{fileId}/manageformfilling | Perform form filling action
*Api.FilesFilesApi* | [**openEditFile**](docs/FilesFilesApi.md#openeditfile) | **GET** /api/2.0/files/file/{fileId}/openedit | Open a file configuration
*Api.FilesFilesApi* | [**restoreFileVersion**](docs/FilesFilesApi.md#restorefileversion) | **GET** /api/2.0/files/file/{fileId}/restoreversion | Restore a file version
*Api.FilesFilesApi* | [**saveEditingFileFromForm**](docs/FilesFilesApi.md#saveeditingfilefromform) | **PUT** /api/2.0/files/file/{fileId}/saveediting | Save file edits
*Api.FilesFilesApi* | [**saveFileAsPdf**](docs/FilesFilesApi.md#savefileaspdf) | **POST** /api/2.0/files/file/{id}/saveaspdf | Save a file as PDF
*Api.FilesFilesApi* | [**saveFormRoleMapping**](docs/FilesFilesApi.md#saveformrolemapping) | **POST** /api/2.0/files/file/{fileId}/formrolemapping | Save form role mapping
*Api.FilesFilesApi* | [**setCustomFilterTag**](docs/FilesFilesApi.md#setcustomfiltertag) | **PUT** /api/2.0/files/file/{fileId}/customfilter | Set the Custom Filter editing mode
*Api.FilesFilesApi* | [**setExternalLink**](docs/FilesFilesApi.md#setexternallink) | **PUT** /api/2.0/files/file/{id}/links | Set an external link
*Api.FilesFilesApi* | [**setFileOrder**](docs/FilesFilesApi.md#setfileorder) | **PUT** /api/2.0/files/{fileId}/order | Set file order
*Api.FilesFilesApi* | [**setFilesOrder**](docs/FilesFilesApi.md#setfilesorder) | **PUT** /api/2.0/files/order | Set order of files
*Api.FilesFilesApi* | [**startEditFile**](docs/FilesFilesApi.md#starteditfile) | **POST** /api/2.0/files/file/{fileId}/startedit | Start file editing
*Api.FilesFilesApi* | [**startFillingFile**](docs/FilesFilesApi.md#startfillingfile) | **PUT** /api/2.0/files/file/{fileId}/startfilling | Start file filling
*Api.FilesFilesApi* | [**trackEditFile**](docs/FilesFilesApi.md#trackeditfile) | **GET** /api/2.0/files/file/{fileId}/trackeditfile | Track file editing
*Api.FilesFilesApi* | [**updateFile**](docs/FilesFilesApi.md#updatefile) | **PUT** /api/2.0/files/file/{fileId} | Update a file
*Api.FilesFoldersApi* | [**checkUpload**](docs/FilesFoldersApi.md#checkupload) | **POST** /api/2.0/files/{folderId}/upload/check | Check file uploads
*Api.FilesFoldersApi* | [**createFolder**](docs/FilesFoldersApi.md#createfolder) | **POST** /api/2.0/files/folder/{folderId} | Create a folder
*Api.FilesFoldersApi* | [**deleteFolder**](docs/FilesFoldersApi.md#deletefolder) | **DELETE** /api/2.0/files/folder/{folderId} | Delete a folder
*Api.FilesFoldersApi* | [**getFilesUsedSpace**](docs/FilesFoldersApi.md#getfilesusedspace) | **GET** /api/2.0/files/filesusedspace | Get used space of files
*Api.FilesFoldersApi* | [**getFolder**](docs/FilesFoldersApi.md#getfolder) | **GET** /api/2.0/files/{folderId}/formfilter | Get folder form filter
*Api.FilesFoldersApi* | [**getFolderByFolderId**](docs/FilesFoldersApi.md#getfolderbyfolderid) | **GET** /api/2.0/files/{folderId} | Get a folder by ID
*Api.FilesFoldersApi* | [**getFolderHistory**](docs/FilesFoldersApi.md#getfolderhistory) | **GET** /api/2.0/files/folder/{folderId}/log | Get folder history
*Api.FilesFoldersApi* | [**getFolderInfo**](docs/FilesFoldersApi.md#getfolderinfo) | **GET** /api/2.0/files/folder/{folderId} | Get folder information
*Api.FilesFoldersApi* | [**getFolderPath**](docs/FilesFoldersApi.md#getfolderpath) | **GET** /api/2.0/files/folder/{folderId}/path | Get the folder path
*Api.FilesFoldersApi* | [**getFolderPrimaryExternalLink**](docs/FilesFoldersApi.md#getfolderprimaryexternallink) | **GET** /api/2.0/files/folder/{id}/link | Get primary external link
*Api.FilesFoldersApi* | [**getFolders**](docs/FilesFoldersApi.md#getfolders) | **GET** /api/2.0/files/{folderId}/subfolders | Get subfolders
*Api.FilesFoldersApi* | [**getMyFolder**](docs/FilesFoldersApi.md#getmyfolder) | **GET** /api/2.0/files/@my | Get the \&quot;My documents\&quot; section
*Api.FilesFoldersApi* | [**getNewFolderItems**](docs/FilesFoldersApi.md#getnewfolderitems) | **GET** /api/2.0/files/{folderId}/news | Get new folder items
*Api.FilesFoldersApi* | [**getPrivacyFolder**](docs/FilesFoldersApi.md#getprivacyfolder) | **GET** /api/2.0/files/@privacy | Get the \&quot;Private Room\&quot; section
*Api.FilesFoldersApi* | [**getRootFolders**](docs/FilesFoldersApi.md#getrootfolders) | **GET** /api/2.0/files/@root | Get filtered sections
*Api.FilesFoldersApi* | [**getTrashFolder**](docs/FilesFoldersApi.md#gettrashfolder) | **GET** /api/2.0/files/@trash | Get the \&quot;Trash\&quot; section
*Api.FilesFoldersApi* | [**insertFile**](docs/FilesFoldersApi.md#insertfile) | **POST** /api/2.0/files/{folderId}/insert | Insert a file
*Api.FilesFoldersApi* | [**insertFileToMyFromBody**](docs/FilesFoldersApi.md#insertfiletomyfrombody) | **POST** /api/2.0/files/@my/insert | Insert a file to the \&quot;My documents\&quot; section
*Api.FilesFoldersApi* | [**renameFolder**](docs/FilesFoldersApi.md#renamefolder) | **PUT** /api/2.0/files/folder/{folderId} | Rename a folder
*Api.FilesFoldersApi* | [**setFolderOrder**](docs/FilesFoldersApi.md#setfolderorder) | **PUT** /api/2.0/files/folder/{folderId}/order | Set folder order
*Api.FilesFoldersApi* | [**uploadFile**](docs/FilesFoldersApi.md#uploadfile) | **POST** /api/2.0/files/{folderId}/upload | Upload a file
*Api.FilesFoldersApi* | [**uploadFileToMy**](docs/FilesFoldersApi.md#uploadfiletomy) | **POST** /api/2.0/files/@my/upload | Upload a file to the \&quot;My documents\&quot; section
*Api.FilesOperationsApi* | [**bulkDownload**](docs/FilesOperationsApi.md#bulkdownload) | **PUT** /api/2.0/files/fileops/bulkdownload | Bulk download
*Api.FilesOperationsApi* | [**checkConversionStatus**](docs/FilesOperationsApi.md#checkconversionstatus) | **GET** /api/2.0/files/file/{fileId}/checkconversion | Get conversion status
*Api.FilesOperationsApi* | [**checkMoveOrCopyBatchItems**](docs/FilesOperationsApi.md#checkmoveorcopybatchitems) | **GET** /api/2.0/files/fileops/move | Check and move or copy to a folder
*Api.FilesOperationsApi* | [**checkMoveOrCopyDestFolder**](docs/FilesOperationsApi.md#checkmoveorcopydestfolder) | **GET** /api/2.0/files/fileops/checkdestfolder | Check for moving or copying to a folder
*Api.FilesOperationsApi* | [**copyBatchItems**](docs/FilesOperationsApi.md#copybatchitems) | **PUT** /api/2.0/files/fileops/copy | Copy to the folder
*Api.FilesOperationsApi* | [**createUploadSession**](docs/FilesOperationsApi.md#createuploadsession) | **POST** /api/2.0/files/{folderId}/upload/create_session | Chunked upload
*Api.FilesOperationsApi* | [**deleteBatchItems**](docs/FilesOperationsApi.md#deletebatchitems) | **PUT** /api/2.0/files/fileops/delete | Delete files and folders
*Api.FilesOperationsApi* | [**deleteFileVersions**](docs/FilesOperationsApi.md#deletefileversions) | **PUT** /api/2.0/files/fileops/deleteversion | Delete file versions
*Api.FilesOperationsApi* | [**duplicateBatchItems**](docs/FilesOperationsApi.md#duplicatebatchitems) | **PUT** /api/2.0/files/fileops/duplicate | Duplicate files and folders
*Api.FilesOperationsApi* | [**emptyTrash**](docs/FilesOperationsApi.md#emptytrash) | **PUT** /api/2.0/files/fileops/emptytrash | Empty the \&quot;Trash\&quot; folder
*Api.FilesOperationsApi* | [**getOperationStatuses**](docs/FilesOperationsApi.md#getoperationstatuses) | **GET** /api/2.0/files/fileops | Get active file operations
*Api.FilesOperationsApi* | [**getOperationStatusesByType**](docs/FilesOperationsApi.md#getoperationstatusesbytype) | **GET** /api/2.0/files/fileops/{operationType} | Get file operation statuses
*Api.FilesOperationsApi* | [**markAsRead**](docs/FilesOperationsApi.md#markasread) | **PUT** /api/2.0/files/fileops/markasread | Mark as read
*Api.FilesOperationsApi* | [**moveBatchItems**](docs/FilesOperationsApi.md#movebatchitems) | **PUT** /api/2.0/files/fileops/move | Move or copy to a folder
*Api.FilesOperationsApi* | [**startFileConversion**](docs/FilesOperationsApi.md#startfileconversion) | **PUT** /api/2.0/files/file/{fileId}/checkconversion | Start file conversion
*Api.FilesOperationsApi* | [**terminateTasks**](docs/FilesOperationsApi.md#terminatetasks) | **PUT** /api/2.0/files/fileops/terminate/{id} | Finish active operations
*Api.FilesOperationsApi* | [**updateFileComment**](docs/FilesOperationsApi.md#updatefilecomment) | **PUT** /api/2.0/files/file/{fileId}/comment | Update a comment
*Api.FilesQuotaApi* | [**resetRoomQuota**](docs/FilesQuotaApi.md#resetroomquota) | **PUT** /api/2.0/files/rooms/resetquota | Reset the room quota limit
*Api.FilesQuotaApi* | [**updateRoomsQuota**](docs/FilesQuotaApi.md#updateroomsquota) | **PUT** /api/2.0/files/rooms/roomquota | Change the room quota limit
*Api.FilesSettingsApi* | [**changeAccessToThirdparty**](docs/FilesSettingsApi.md#changeaccesstothirdparty) | **PUT** /api/2.0/files/thirdparty | Change the third-party settings access
*Api.FilesSettingsApi* | [**changeAutomaticallyCleanUp**](docs/FilesSettingsApi.md#changeautomaticallycleanup) | **PUT** /api/2.0/files/settings/autocleanup | Update the trash bin auto-clearing setting
*Api.FilesSettingsApi* | [**changeDefaultAccessRights**](docs/FilesSettingsApi.md#changedefaultaccessrights) | **PUT** /api/2.0/files/settings/dafaultaccessrights | Change the default access rights
*Api.FilesSettingsApi* | [**changeDeleteConfirm**](docs/FilesSettingsApi.md#changedeleteconfirm) | **PUT** /api/2.0/files/changedeleteconfrim | Confirm the file deletion
*Api.FilesSettingsApi* | [**changeDownloadZipFromBody**](docs/FilesSettingsApi.md#changedownloadzipfrombody) | **PUT** /api/2.0/files/settings/downloadtargz | Change the archive format (using body parameters)
*Api.FilesSettingsApi* | [**checkDocServiceUrl**](docs/FilesSettingsApi.md#checkdocserviceurl) | **PUT** /api/2.0/files/docservice | Check the document service URL
*Api.FilesSettingsApi* | [**displayFileExtension**](docs/FilesSettingsApi.md#displayfileextension) | **PUT** /api/2.0/files/displayfileextension | Display a file extension
*Api.FilesSettingsApi* | [**externalShare**](docs/FilesSettingsApi.md#externalshare) | **PUT** /api/2.0/files/settings/external | Change the external sharing ability
*Api.FilesSettingsApi* | [**externalShareSocialMedia**](docs/FilesSettingsApi.md#externalsharesocialmedia) | **PUT** /api/2.0/files/settings/externalsocialmedia | Change the external sharing ability on social networks
*Api.FilesSettingsApi* | [**forcesave**](docs/FilesSettingsApi.md#forcesave) | **PUT** /api/2.0/files/forcesave | Change the forcesaving ability
*Api.FilesSettingsApi* | [**getAutomaticallyCleanUp**](docs/FilesSettingsApi.md#getautomaticallycleanup) | **GET** /api/2.0/files/settings/autocleanup | Get the trash bin auto-clearing setting
*Api.FilesSettingsApi* | [**getDocServiceUrl**](docs/FilesSettingsApi.md#getdocserviceurl) | **GET** /api/2.0/files/docservice | Get the document service URL
*Api.FilesSettingsApi* | [**getFilesModule**](docs/FilesSettingsApi.md#getfilesmodule) | **GET** /api/2.0/files/info | Get the \&quot;Documents\&quot; information
*Api.FilesSettingsApi* | [**getFilesSettings**](docs/FilesSettingsApi.md#getfilessettings) | **GET** /api/2.0/files/settings | Get file settings
*Api.FilesSettingsApi* | [**hideConfirmCancelOperation**](docs/FilesSettingsApi.md#hideconfirmcanceloperation) | **PUT** /api/2.0/files/hideconfirmcanceloperation | Hide confirmation dialog when canceling operations
*Api.FilesSettingsApi* | [**hideConfirmConvert**](docs/FilesSettingsApi.md#hideconfirmconvert) | **PUT** /api/2.0/files/hideconfirmconvert | Hide the confirmation dialog when converting
*Api.FilesSettingsApi* | [**hideConfirmRoomLifetime**](docs/FilesSettingsApi.md#hideconfirmroomlifetime) | **PUT** /api/2.0/files/hideconfirmroomlifetime | Hide confirmation dialog when changing room lifetime settings
*Api.FilesSettingsApi* | [**isAvailablePrivacyRoomSettings**](docs/FilesSettingsApi.md#isavailableprivacyroomsettings) | **GET** /api/2.0/files/@privacy/available | Check the \&quot;Private Room\&quot; availability
*Api.FilesSettingsApi* | [**keepNewFileName**](docs/FilesSettingsApi.md#keepnewfilename) | **PUT** /api/2.0/files/keepnewfilename | Ask a new file name
*Api.FilesSettingsApi* | [**setOpenEditorInSameTab**](docs/FilesSettingsApi.md#setopeneditorinsametab) | **PUT** /api/2.0/files/settings/openeditorinsametab | Open document in the same browser tab
*Api.FilesSettingsApi* | [**storeForcesave**](docs/FilesSettingsApi.md#storeforcesave) | **PUT** /api/2.0/files/storeforcesave | Change the ability to store the forcesaved files
*Api.FilesSettingsApi* | [**storeOriginal**](docs/FilesSettingsApi.md#storeoriginal) | **PUT** /api/2.0/files/storeoriginal | Change the ability to upload original formats
*Api.FilesSettingsApi* | [**updateFileIfExist**](docs/FilesSettingsApi.md#updatefileifexist) | **PUT** /api/2.0/files/updateifexist | Update a file version if it exists
*Api.FilesSharingApi* | [**applyExternalSharePassword**](docs/FilesSharingApi.md#applyexternalsharepassword) | **POST** /api/2.0/files/share/{key}/password | Apply external data password
*Api.FilesSharingApi* | [**changeFileOwner**](docs/FilesSharingApi.md#changefileowner) | **POST** /api/2.0/files/owner | Change the file owner
*Api.FilesSharingApi* | [**getExternalShareData**](docs/FilesSharingApi.md#getexternalsharedata) | **GET** /api/2.0/files/share/{key} | Get the external data
*Api.FilesSharingApi* | [**getSharedUsers**](docs/FilesSharingApi.md#getsharedusers) | **GET** /api/2.0/files/file/{fileId}/sharedusers | Get user access rights by file ID
*Api.FilesSharingApi* | [**sendEditorNotify**](docs/FilesSharingApi.md#sendeditornotify) | **POST** /api/2.0/files/file/{fileId}/sendeditornotify | Send the mention message
*Api.FilesThirdPartyIntegrationApi* | [**deleteThirdParty**](docs/FilesThirdPartyIntegrationApi.md#deletethirdparty) | **DELETE** /api/2.0/files/thirdparty/{providerId} | Remove a third-party account
*Api.FilesThirdPartyIntegrationApi* | [**getAllProviders**](docs/FilesThirdPartyIntegrationApi.md#getallproviders) | **GET** /api/2.0/files/thirdparty/providers | Get all providers
*Api.FilesThirdPartyIntegrationApi* | [**getBackupThirdPartyAccount**](docs/FilesThirdPartyIntegrationApi.md#getbackupthirdpartyaccount) | **GET** /api/2.0/files/thirdparty/backup | Get a third-party account backup
*Api.FilesThirdPartyIntegrationApi* | [**getCapabilities**](docs/FilesThirdPartyIntegrationApi.md#getcapabilities) | **GET** /api/2.0/files/thirdparty/capabilities | Get providers
*Api.FilesThirdPartyIntegrationApi* | [**getCommonThirdPartyFolders**](docs/FilesThirdPartyIntegrationApi.md#getcommonthirdpartyfolders) | **GET** /api/2.0/files/thirdparty/common | Get the common third-party services
*Api.FilesThirdPartyIntegrationApi* | [**getThirdPartyAccounts**](docs/FilesThirdPartyIntegrationApi.md#getthirdpartyaccounts) | **GET** /api/2.0/files/thirdparty | Get the third-party accounts
*Api.FilesThirdPartyIntegrationApi* | [**saveThirdParty**](docs/FilesThirdPartyIntegrationApi.md#savethirdparty) | **POST** /api/2.0/files/thirdparty | Save a third-party account
*Api.FilesThirdPartyIntegrationApi* | [**saveThirdPartyBackup**](docs/FilesThirdPartyIntegrationApi.md#savethirdpartybackup) | **POST** /api/2.0/files/thirdparty/backup | Save a third-party account backup
*Api.GroupApi* | [**addGroup**](docs/GroupApi.md#addgroup) | **POST** /api/2.0/group | Add a new group
*Api.GroupApi* | [**addMembersTo**](docs/GroupApi.md#addmembersto) | **PUT** /api/2.0/group/{id}/members | Add group members
*Api.GroupApi* | [**deleteGroup**](docs/GroupApi.md#deletegroup) | **DELETE** /api/2.0/group/{id} | Delete a group
*Api.GroupApi* | [**getGroup**](docs/GroupApi.md#getgroup) | **GET** /api/2.0/group/{id} | Get a group
*Api.GroupApi* | [**getGroupByUserId**](docs/GroupApi.md#getgroupbyuserid) | **GET** /api/2.0/group/user/{userid} | Get user groups
*Api.GroupApi* | [**getGroups**](docs/GroupApi.md#getgroups) | **GET** /api/2.0/group | Get groups
*Api.GroupApi* | [**moveMembersTo**](docs/GroupApi.md#movemembersto) | **PUT** /api/2.0/group/{fromId}/members/{toId} | Move group members
*Api.GroupApi* | [**removeMembersFrom**](docs/GroupApi.md#removemembersfrom) | **DELETE** /api/2.0/group/{id}/members | Remove group members
*Api.GroupApi* | [**setGroupManager**](docs/GroupApi.md#setgroupmanager) | **PUT** /api/2.0/group/{id}/manager | Set a group manager
*Api.GroupApi* | [**setMembersTo**](docs/GroupApi.md#setmembersto) | **POST** /api/2.0/group/{id}/members | Replace group members
*Api.GroupApi* | [**updateGroup**](docs/GroupApi.md#updategroup) | **PUT** /api/2.0/group/{id} | Update a group
*Api.GroupRoomsApi* | [**getGroupsWithShared**](docs/GroupRoomsApi.md#getgroupswithshared) | **GET** /api/2.0/group/room/{id} | Get groups with sharing settings
*Api.MigrationApi* | [**cancelMigration**](docs/MigrationApi.md#cancelmigration) | **POST** /api/2.0/migration/cancel | Cancel migration
*Api.MigrationApi* | [**clearMigration**](docs/MigrationApi.md#clearmigration) | **POST** /api/2.0/migration/clear | Clear migration
*Api.MigrationApi* | [**finishMigration**](docs/MigrationApi.md#finishmigration) | **POST** /api/2.0/migration/finish | Finish migration
*Api.MigrationApi* | [**getMigrationLogs**](docs/MigrationApi.md#getmigrationlogs) | **GET** /api/2.0/migration/logs | Get migration logs
*Api.MigrationApi* | [**getMigrationStatus**](docs/MigrationApi.md#getmigrationstatus) | **GET** /api/2.0/migration/status | Get migration status
*Api.MigrationApi* | [**listMigrations**](docs/MigrationApi.md#listmigrations) | **GET** /api/2.0/migration/list | Get migrations
*Api.MigrationApi* | [**startMigration**](docs/MigrationApi.md#startmigration) | **POST** /api/2.0/migration/migrate | Start migration
*Api.MigrationApi* | [**uploadAndInitializeMigration**](docs/MigrationApi.md#uploadandinitializemigration) | **POST** /api/2.0/migration/init/{migratorName} | Upload and initialize migration
*Api.OAuth20AuthorizationApi* | [**authorizeOAuth**](docs/OAuth20AuthorizationApi.md#authorizeoauth) | **GET** /oauth2/authorize | OAuth2 authorization endpoint
*Api.OAuth20AuthorizationApi* | [**exchangeToken**](docs/OAuth20AuthorizationApi.md#exchangetoken) | **POST** /oauth2/token | OAuth2 token endpoint
*Api.OAuth20AuthorizationApi* | [**submitConsent**](docs/OAuth20AuthorizationApi.md#submitconsent) | **POST** /oauth2/authorize | OAuth2 consent endpoint
*Api.OAuth20ClientManagementApi* | [**changeActivation**](docs/OAuth20ClientManagementApi.md#changeactivation) | **PATCH** /api/2.0/clients/{clientId}/activation | Change the client activation status
*Api.OAuth20ClientManagementApi* | [**createClient**](docs/OAuth20ClientManagementApi.md#createclient) | **POST** /api/2.0/clients | Create a new OAuth2 client
*Api.OAuth20ClientManagementApi* | [**deleteClient**](docs/OAuth20ClientManagementApi.md#deleteclient) | **DELETE** /api/2.0/clients/{clientId} | Delete an OAuth2 client
*Api.OAuth20ClientManagementApi* | [**regenerateSecret**](docs/OAuth20ClientManagementApi.md#regeneratesecret) | **PATCH** /api/2.0/clients/{clientId}/regenerate | Regenerate the client secret
*Api.OAuth20ClientManagementApi* | [**revokeUserClient**](docs/OAuth20ClientManagementApi.md#revokeuserclient) | **DELETE** /api/2.0/clients/{clientId}/revoke | Revoke client consent
*Api.OAuth20ClientManagementApi* | [**updateClient**](docs/OAuth20ClientManagementApi.md#updateclient) | **PUT** /api/2.0/clients/{clientId} | Update an existing OAuth2 client
*Api.OAuth20ClientQueryingApi* | [**getClient**](docs/OAuth20ClientQueryingApi.md#getclient) | **GET** /api/2.0/clients/{clientId} | Get client details
*Api.OAuth20ClientQueryingApi* | [**getClientInfo**](docs/OAuth20ClientQueryingApi.md#getclientinfo) | **GET** /api/2.0/clients/{clientId}/info | Get detailed client information
*Api.OAuth20ClientQueryingApi* | [**getClients**](docs/OAuth20ClientQueryingApi.md#getclients) | **GET** /api/2.0/clients | Get clients
*Api.OAuth20ClientQueryingApi* | [**getClientsInfo**](docs/OAuth20ClientQueryingApi.md#getclientsinfo) | **GET** /api/2.0/clients/info | Get detailed information of clients
*Api.OAuth20ClientQueryingApi* | [**getConsents**](docs/OAuth20ClientQueryingApi.md#getconsents) | **GET** /api/2.0/clients/consents | Get user consents
*Api.OAuth20ClientQueryingApi* | [**getPublicClientInfo**](docs/OAuth20ClientQueryingApi.md#getpublicclientinfo) | **GET** /api/2.0/clients/{clientId}/public/info | Get public client information
*Api.OAuth20ScopeManagementApi* | [**getScopes**](docs/OAuth20ScopeManagementApi.md#getscopes) | **GET** /api/2.0/scopes | Get available OAuth2 scopes
*Api.PeopleGuestsApi* | [**approveGuestShareLink**](docs/PeopleGuestsApi.md#approveguestsharelink) | **POST** /api/2.0/people/guests/share/approve | Approve a guest sharing link
*Api.PeopleGuestsApi* | [**deleteGuests**](docs/PeopleGuestsApi.md#deleteguests) | **DELETE** /api/2.0/people/guests | Delete guests
*Api.PeoplePasswordApi* | [**changeUserPassword**](docs/PeoplePasswordApi.md#changeuserpassword) | **PUT** /api/2.0/people/{userid}/password | Change a user password
*Api.PeoplePasswordApi* | [**sendUserPassword**](docs/PeoplePasswordApi.md#senduserpassword) | **POST** /api/2.0/people/password | Remind a user password
*Api.PeoplePhotosApi* | [**createMemberPhotoThumbnails**](docs/PeoplePhotosApi.md#creatememberphotothumbnails) | **POST** /api/2.0/people/{userid}/photo/thumbnails | Create photo thumbnails
*Api.PeoplePhotosApi* | [**deleteMemberPhoto**](docs/PeoplePhotosApi.md#deletememberphoto) | **DELETE** /api/2.0/people/{userid}/photo | Delete a user photo
*Api.PeoplePhotosApi* | [**getMemberPhoto**](docs/PeoplePhotosApi.md#getmemberphoto) | **GET** /api/2.0/people/{userid}/photo | Get a user photo
*Api.PeoplePhotosApi* | [**updateMemberPhoto**](docs/PeoplePhotosApi.md#updatememberphoto) | **PUT** /api/2.0/people/{userid}/photo | Update a user photo
*Api.PeoplePhotosApi* | [**uploadMemberPhoto**](docs/PeoplePhotosApi.md#uploadmemberphoto) | **POST** /api/2.0/people/{userid}/photo | Upload a user photo
*Api.PeopleProfilesApi* | [**addMember**](docs/PeopleProfilesApi.md#addmember) | **POST** /api/2.0/people | Add a user
*Api.PeopleProfilesApi* | [**deleteMember**](docs/PeopleProfilesApi.md#deletemember) | **DELETE** /api/2.0/people/{userid} | Delete a user
*Api.PeopleProfilesApi* | [**deleteProfile**](docs/PeopleProfilesApi.md#deleteprofile) | **DELETE** /api/2.0/people/@self | Delete my profile
*Api.PeopleProfilesApi* | [**getAllProfiles**](docs/PeopleProfilesApi.md#getallprofiles) | **GET** /api/2.0/people | Get profiles
*Api.PeopleProfilesApi* | [**getClaims**](docs/PeopleProfilesApi.md#getclaims) | **GET** /api/2.0/people/tokendiagnostics | Returns the user claims.
*Api.PeopleProfilesApi* | [**getProfileByEmail**](docs/PeopleProfilesApi.md#getprofilebyemail) | **GET** /api/2.0/people/email | Get a profile by user email
*Api.PeopleProfilesApi* | [**getProfileByUserId**](docs/PeopleProfilesApi.md#getprofilebyuserid) | **GET** /api/2.0/people/{userid} | Get a profile by user name
*Api.PeopleProfilesApi* | [**getSelfProfile**](docs/PeopleProfilesApi.md#getselfprofile) | **GET** /api/2.0/people/@self | Get my profile
*Api.PeopleProfilesApi* | [**inviteUsers**](docs/PeopleProfilesApi.md#inviteusers) | **POST** /api/2.0/people/invite | Invite users
*Api.PeopleProfilesApi* | [**removeUsers**](docs/PeopleProfilesApi.md#removeusers) | **PUT** /api/2.0/people/delete | Delete users
*Api.PeopleProfilesApi* | [**resendUserInvites**](docs/PeopleProfilesApi.md#resenduserinvites) | **PUT** /api/2.0/people/invite | Resend activation emails
*Api.PeopleProfilesApi* | [**sendEmailChangeInstructions**](docs/PeopleProfilesApi.md#sendemailchangeinstructions) | **POST** /api/2.0/people/email | Send instructions to change email
*Api.PeopleProfilesApi* | [**updateMember**](docs/PeopleProfilesApi.md#updatemember) | **PUT** /api/2.0/people/{userid} | Update a user
*Api.PeopleProfilesApi* | [**updateMemberCulture**](docs/PeopleProfilesApi.md#updatememberculture) | **PUT** /api/2.0/people/{userid}/culture | Update a user culture code
*Api.PeopleQuotaApi* | [**resetUsersQuota**](docs/PeopleQuotaApi.md#resetusersquota) | **PUT** /api/2.0/people/resetquota | Reset a user quota limit
*Api.PeopleQuotaApi* | [**updateUserQuota**](docs/PeopleQuotaApi.md#updateuserquota) | **PUT** /api/2.0/people/userquota | Change a user quota limit
*Api.PeopleSearchApi* | [**getAccountsEntriesWithShared**](docs/PeopleSearchApi.md#getaccountsentrieswithshared) | **GET** /api/2.0/accounts/room/{id}/search | Get account entries
*Api.PeopleSearchApi* | [**getSearch**](docs/PeopleSearchApi.md#getsearch) | **GET** /api/2.0/people/@search/{query} | Search users
*Api.PeopleSearchApi* | [**getSimpleByFilter**](docs/PeopleSearchApi.md#getsimplebyfilter) | **GET** /api/2.0/people/simple/filter | Search users by extended filter
*Api.PeopleSearchApi* | [**getUsersWithRoomShared**](docs/PeopleSearchApi.md#getuserswithroomshared) | **GET** /api/2.0/people/room/{id} | Get users with room sharing settings
*Api.PeopleSearchApi* | [**searchUsersByExtendedFilter**](docs/PeopleSearchApi.md#searchusersbyextendedfilter) | **GET** /api/2.0/people/filter | Search users with detaailed information by extended filter
*Api.PeopleSearchApi* | [**searchUsersByQuery**](docs/PeopleSearchApi.md#searchusersbyquery) | **GET** /api/2.0/people/search | Search users (using query parameters)
*Api.PeopleSearchApi* | [**searchUsersByStatus**](docs/PeopleSearchApi.md#searchusersbystatus) | **GET** /api/2.0/people/status/{status}/search | Search users by status filter
*Api.PeopleThemeApi* | [**changePortalTheme**](docs/PeopleThemeApi.md#changeportaltheme) | **PUT** /api/2.0/people/theme | Change the portal theme
*Api.PeopleThemeApi* | [**getPortalTheme**](docs/PeopleThemeApi.md#getportaltheme) | **GET** /api/2.0/people/theme | Get the portal theme
*Api.PeopleThirdPartyAccountsApi* | [**getThirdPartyAuthProviders**](docs/PeopleThirdPartyAccountsApi.md#getthirdpartyauthproviders) | **GET** /api/2.0/people/thirdparty/providers | Get third-party accounts
*Api.PeopleThirdPartyAccountsApi* | [**linkThirdPartyAccount**](docs/PeopleThirdPartyAccountsApi.md#linkthirdpartyaccount) | **PUT** /api/2.0/people/thirdparty/linkaccount | Link a third-pary account
*Api.PeopleThirdPartyAccountsApi* | [**signupThirdPartyAccount**](docs/PeopleThirdPartyAccountsApi.md#signupthirdpartyaccount) | **POST** /api/2.0/people/thirdparty/signup | Create a third-pary account
*Api.PeopleThirdPartyAccountsApi* | [**unlinkThirdPartyAccount**](docs/PeopleThirdPartyAccountsApi.md#unlinkthirdpartyaccount) | **DELETE** /api/2.0/people/thirdparty/unlinkaccount | Unlink a third-pary account
*Api.PeopleUserDataApi* | [**getDeletePersonalFolderProgress**](docs/PeopleUserDataApi.md#getdeletepersonalfolderprogress) | **GET** /api/2.0/people/delete/personal/progress | Get the progress of deleting the personal folder
*Api.PeopleUserDataApi* | [**getReassignProgress**](docs/PeopleUserDataApi.md#getreassignprogress) | **GET** /api/2.0/people/reassign/progress/{userid} | Get the reassignment progress
*Api.PeopleUserDataApi* | [**getRemoveProgress**](docs/PeopleUserDataApi.md#getremoveprogress) | **GET** /api/2.0/people/remove/progress/{userid} | Get the deletion progress
*Api.PeopleUserDataApi* | [**necessaryReassign**](docs/PeopleUserDataApi.md#necessaryreassign) | **GET** /api/2.0/people/reassign/necessary | Check the data reassignment need
*Api.PeopleUserDataApi* | [**sendInstructionsToDelete**](docs/PeopleUserDataApi.md#sendinstructionstodelete) | **PUT** /api/2.0/people/self/delete | Send the deletion instructions
*Api.PeopleUserDataApi* | [**startDeletePersonalFolder**](docs/PeopleUserDataApi.md#startdeletepersonalfolder) | **POST** /api/2.0/people/delete/personal/start | Delete the personal folder
*Api.PeopleUserDataApi* | [**startReassign**](docs/PeopleUserDataApi.md#startreassign) | **POST** /api/2.0/people/reassign/start | Start the data reassignment
*Api.PeopleUserDataApi* | [**startRemove**](docs/PeopleUserDataApi.md#startremove) | **POST** /api/2.0/people/remove/start | Start the data deletion
*Api.PeopleUserDataApi* | [**terminateReassign**](docs/PeopleUserDataApi.md#terminatereassign) | **PUT** /api/2.0/people/reassign/terminate | Terminate the data reassignment
*Api.PeopleUserDataApi* | [**terminateRemove**](docs/PeopleUserDataApi.md#terminateremove) | **PUT** /api/2.0/people/remove/terminate | Terminate the data deletion
*Api.PeopleUserStatusApi* | [**getByStatus**](docs/PeopleUserStatusApi.md#getbystatus) | **GET** /api/2.0/people/status/{status} | Get profiles by status
*Api.PeopleUserStatusApi* | [**updateUserActivationStatus**](docs/PeopleUserStatusApi.md#updateuseractivationstatus) | **PUT** /api/2.0/people/activationstatus/{activationstatus} | Set an activation status to the users
*Api.PeopleUserStatusApi* | [**updateUserStatus**](docs/PeopleUserStatusApi.md#updateuserstatus) | **PUT** /api/2.0/people/status/{status} | Change a user status
*Api.PeopleUserTypeApi* | [**getUserTypeUpdateProgress**](docs/PeopleUserTypeApi.md#getusertypeupdateprogress) | **GET** /api/2.0/people/type/progress/{userid} | Get the progress of updating user type
*Api.PeopleUserTypeApi* | [**starUserTypetUpdate**](docs/PeopleUserTypeApi.md#starusertypetupdate) | **POST** /api/2.0/people/type | Update user type
*Api.PeopleUserTypeApi* | [**terminateUserTypeUpdate**](docs/PeopleUserTypeApi.md#terminateusertypeupdate) | **PUT** /api/2.0/people/type/terminate | Terminate update user type
*Api.PeopleUserTypeApi* | [**updateUserType**](docs/PeopleUserTypeApi.md#updateusertype) | **PUT** /api/2.0/people/type/{type} | Change a user type
*Api.PortalGuestsApi* | [**getGuestSharingLink**](docs/PortalGuestsApi.md#getguestsharinglink) | **GET** /api/2.0/people/guests/{userid}/share | Get a guest sharing link
*Api.PortalPaymentApi* | [**calculateWalletPayment**](docs/PortalPaymentApi.md#calculatewalletpayment) | **PUT** /api/2.0/portal/payment/calculatewallet | Calculate amount of the wallet payment
*Api.PortalPaymentApi* | [**createCustomerOperationsReport**](docs/PortalPaymentApi.md#createcustomeroperationsreport) | **POST** /api/2.0/portal/payment/customer/operationsreport | Generate the customer operations report
*Api.PortalPaymentApi* | [**getCheckoutSetupUrl**](docs/PortalPaymentApi.md#getcheckoutsetupurl) | **GET** /api/2.0/portal/payment/chechoutsetupurl | Get the checkout setup page URL
*Api.PortalPaymentApi* | [**getCustomerBalance**](docs/PortalPaymentApi.md#getcustomerbalance) | **GET** /api/2.0/portal/payment/customer/balance | Get the customer balance
*Api.PortalPaymentApi* | [**getCustomerInfo**](docs/PortalPaymentApi.md#getcustomerinfo) | **GET** /api/2.0/portal/payment/customerinfo | Get the customer info
*Api.PortalPaymentApi* | [**getCustomerOperations**](docs/PortalPaymentApi.md#getcustomeroperations) | **GET** /api/2.0/portal/payment/customer/operations | Get the customer operations
*Api.PortalPaymentApi* | [**getPaymentAccount**](docs/PortalPaymentApi.md#getpaymentaccount) | **GET** /api/2.0/portal/payment/account | Get the payment account
*Api.PortalPaymentApi* | [**getPaymentCurrencies**](docs/PortalPaymentApi.md#getpaymentcurrencies) | **GET** /api/2.0/portal/payment/currencies | Get currencies
*Api.PortalPaymentApi* | [**getPaymentQuotas**](docs/PortalPaymentApi.md#getpaymentquotas) | **GET** /api/2.0/portal/payment/quotas | Get quotas
*Api.PortalPaymentApi* | [**getPaymentUrl**](docs/PortalPaymentApi.md#getpaymenturl) | **PUT** /api/2.0/portal/payment/url | Get the payment page URL
*Api.PortalPaymentApi* | [**getPortalPrices**](docs/PortalPaymentApi.md#getportalprices) | **GET** /api/2.0/portal/payment/prices | Get prices
*Api.PortalPaymentApi* | [**getQuotaPaymentInformation**](docs/PortalPaymentApi.md#getquotapaymentinformation) | **GET** /api/2.0/portal/payment/quota | Get quota payment information
*Api.PortalPaymentApi* | [**getTenantWalletSettings**](docs/PortalPaymentApi.md#gettenantwalletsettings) | **GET** /api/2.0/portal/payment/topupsettings | Get wallet auto top up settings
*Api.PortalPaymentApi* | [**sendPaymentRequest**](docs/PortalPaymentApi.md#sendpaymentrequest) | **POST** /api/2.0/portal/payment/request | Send a payment request
*Api.PortalPaymentApi* | [**setTenantWalletSettings**](docs/PortalPaymentApi.md#settenantwalletsettings) | **POST** /api/2.0/portal/payment/topupsettings | Set wallet auto top up settings
*Api.PortalPaymentApi* | [**topUpDeposit**](docs/PortalPaymentApi.md#topupdeposit) | **POST** /api/2.0/portal/payment/deposit | Put money on deposit
*Api.PortalPaymentApi* | [**updatePayment**](docs/PortalPaymentApi.md#updatepayment) | **PUT** /api/2.0/portal/payment/update | Update the payment quantity
*Api.PortalPaymentApi* | [**updateWalletPayment**](docs/PortalPaymentApi.md#updatewalletpayment) | **PUT** /api/2.0/portal/payment/updatewallet | Update the wallet payment quantity
*Api.PortalQuotaApi* | [**getPortalQuota**](docs/PortalQuotaApi.md#getportalquota) | **GET** /api/2.0/portal/quota | Get a portal quota
*Api.PortalQuotaApi* | [**getPortalTariff**](docs/PortalQuotaApi.md#getportaltariff) | **GET** /api/2.0/portal/tariff | Get a portal tariff
*Api.PortalQuotaApi* | [**getPortalUsedSpace**](docs/PortalQuotaApi.md#getportalusedspace) | **GET** /api/2.0/portal/usedspace | Get the portal used space
*Api.PortalQuotaApi* | [**getRightQuota**](docs/PortalQuotaApi.md#getrightquota) | **GET** /api/2.0/portal/quota/right | Get the recommended quota
*Api.PortalSettingsApi* | [**continuePortal**](docs/PortalSettingsApi.md#continueportal) | **PUT** /api/2.0/portal/continue | Restore a portal
*Api.PortalSettingsApi* | [**deletePortal**](docs/PortalSettingsApi.md#deleteportal) | **DELETE** /api/2.0/portal/delete | Delete a portal
*Api.PortalSettingsApi* | [**getPortalInformation**](docs/PortalSettingsApi.md#getportalinformation) | **GET** /api/2.0/portal | Get a portal
*Api.PortalSettingsApi* | [**getPortalPath**](docs/PortalSettingsApi.md#getportalpath) | **GET** /api/2.0/portal/path | Get a path to the portal
*Api.PortalSettingsApi* | [**sendDeleteInstructions**](docs/PortalSettingsApi.md#senddeleteinstructions) | **POST** /api/2.0/portal/delete | Send removal instructions
*Api.PortalSettingsApi* | [**sendSuspendInstructions**](docs/PortalSettingsApi.md#sendsuspendinstructions) | **POST** /api/2.0/portal/suspend | Send suspension instructions
*Api.PortalSettingsApi* | [**suspendPortal**](docs/PortalSettingsApi.md#suspendportal) | **PUT** /api/2.0/portal/suspend | Deactivate a portal
*Api.PortalUsersApi* | [**getInvitationLink**](docs/PortalUsersApi.md#getinvitationlink) | **GET** /api/2.0/portal/users/invite/{employeeType} | Get an invitation link
*Api.PortalUsersApi* | [**getPortalUsersCount**](docs/PortalUsersApi.md#getportaluserscount) | **GET** /api/2.0/portal/userscount | Get a number of portal users
*Api.PortalUsersApi* | [**getUserById**](docs/PortalUsersApi.md#getuserbyid) | **GET** /api/2.0/portal/users/{userID} | Get a user by ID
*Api.PortalUsersApi* | [**markGiftMessageAsRead**](docs/PortalUsersApi.md#markgiftmessageasread) | **POST** /api/2.0/portal/present/mark | Mark a gift message as read
*Api.PortalUsersApi* | [**sendCongratulations**](docs/PortalUsersApi.md#sendcongratulations) | **POST** /api/2.0/portal/sendcongratulations | Send congratulations
*Api.RoomsApi* | [**addRoomTags**](docs/RoomsApi.md#addroomtags) | **PUT** /api/2.0/files/rooms/{id}/tags | Add the room tags
*Api.RoomsApi* | [**archiveRoom**](docs/RoomsApi.md#archiveroom) | **PUT** /api/2.0/files/rooms/{id}/archive | Archive a room
*Api.RoomsApi* | [**changeRoomCover**](docs/RoomsApi.md#changeroomcover) | **POST** /api/2.0/files/rooms/{id}/cover | Change the room cover
*Api.RoomsApi* | [**createRoom**](docs/RoomsApi.md#createroom) | **POST** /api/2.0/files/rooms | Create a room
*Api.RoomsApi* | [**createRoomFromTemplate**](docs/RoomsApi.md#createroomfromtemplate) | **POST** /api/2.0/files/rooms/fromtemplate | Create a room from the template
*Api.RoomsApi* | [**createRoomLogo**](docs/RoomsApi.md#createroomlogo) | **POST** /api/2.0/files/rooms/{id}/logo | Create a room logo
*Api.RoomsApi* | [**createRoomTag**](docs/RoomsApi.md#createroomtag) | **POST** /api/2.0/files/tags | Create a tag
*Api.RoomsApi* | [**createRoomTemplate**](docs/RoomsApi.md#createroomtemplate) | **POST** /api/2.0/files/roomtemplate | Start creating room template
*Api.RoomsApi* | [**createRoomThirdParty**](docs/RoomsApi.md#createroomthirdparty) | **POST** /api/2.0/files/rooms/thirdparty/{id} | Create a third-party room
*Api.RoomsApi* | [**deleteCustomTags**](docs/RoomsApi.md#deletecustomtags) | **DELETE** /api/2.0/files/tags | Delete tags
*Api.RoomsApi* | [**deleteRoom**](docs/RoomsApi.md#deleteroom) | **DELETE** /api/2.0/files/rooms/{id} | Remove a room
*Api.RoomsApi* | [**deleteRoomLogo**](docs/RoomsApi.md#deleteroomlogo) | **DELETE** /api/2.0/files/rooms/{id}/logo | Remove a room logo
*Api.RoomsApi* | [**deleteRoomTags**](docs/RoomsApi.md#deleteroomtags) | **DELETE** /api/2.0/files/rooms/{id}/tags | Remove the room tags
*Api.RoomsApi* | [**getNewRoomItems**](docs/RoomsApi.md#getnewroomitems) | **GET** /api/2.0/files/rooms/{id}/news | Get the new room items
*Api.RoomsApi* | [**getPublicSettings**](docs/RoomsApi.md#getpublicsettings) | **GET** /api/2.0/files/roomtemplate/{id}/public | Get public settings
*Api.RoomsApi* | [**getRoomCovers**](docs/RoomsApi.md#getroomcovers) | **GET** /api/2.0/files/rooms/covers | Get covers
*Api.RoomsApi* | [**getRoomCreatingStatus**](docs/RoomsApi.md#getroomcreatingstatus) | **GET** /api/2.0/files/rooms/fromtemplate/status | Get the room creation progress
*Api.RoomsApi* | [**getRoomIndexExport**](docs/RoomsApi.md#getroomindexexport) | **GET** /api/2.0/files/rooms/indexexport | Get the room index export
*Api.RoomsApi* | [**getRoomInfo**](docs/RoomsApi.md#getroominfo) | **GET** /api/2.0/files/rooms/{id} | Get room information
*Api.RoomsApi* | [**getRoomLinks**](docs/RoomsApi.md#getroomlinks) | **GET** /api/2.0/files/rooms/{id}/links | Get the room links
*Api.RoomsApi* | [**getRoomSecurityInfo**](docs/RoomsApi.md#getroomsecurityinfo) | **GET** /api/2.0/files/rooms/{id}/share | Get the room access rights
*Api.RoomsApi* | [**getRoomTagsInfo**](docs/RoomsApi.md#getroomtagsinfo) | **GET** /api/2.0/files/tags | Get tags
*Api.RoomsApi* | [**getRoomTemplateCreatingStatus**](docs/RoomsApi.md#getroomtemplatecreatingstatus) | **GET** /api/2.0/files/roomtemplate/status | Get status of room template creation
*Api.RoomsApi* | [**getRoomsFolder**](docs/RoomsApi.md#getroomsfolder) | **GET** /api/2.0/files/rooms | Get rooms
*Api.RoomsApi* | [**getRoomsNewItems**](docs/RoomsApi.md#getroomsnewitems) | **GET** /api/2.0/files/rooms/news | Get the room new items
*Api.RoomsApi* | [**getRoomsPrimaryExternalLink**](docs/RoomsApi.md#getroomsprimaryexternallink) | **GET** /api/2.0/files/rooms/{id}/link | Get the room primary external link
*Api.RoomsApi* | [**pinRoom**](docs/RoomsApi.md#pinroom) | **PUT** /api/2.0/files/rooms/{id}/pin | Pin a room
*Api.RoomsApi* | [**reorderRoom**](docs/RoomsApi.md#reorderroom) | **PUT** /api/2.0/files/rooms/{id}/reorder | Reorder the room
*Api.RoomsApi* | [**resendEmailInvitations**](docs/RoomsApi.md#resendemailinvitations) | **POST** /api/2.0/files/rooms/{id}/resend | Resend the room invitations
*Api.RoomsApi* | [**setPublicSettings**](docs/RoomsApi.md#setpublicsettings) | **PUT** /api/2.0/files/roomtemplate/public | Set public settings
*Api.RoomsApi* | [**setRoomLink**](docs/RoomsApi.md#setroomlink) | **PUT** /api/2.0/files/rooms/{id}/links | Set the room external or invitation link
*Api.RoomsApi* | [**setRoomSecurity**](docs/RoomsApi.md#setroomsecurity) | **PUT** /api/2.0/files/rooms/{id}/share | Set the room access rights
*Api.RoomsApi* | [**startRoomIndexExport**](docs/RoomsApi.md#startroomindexexport) | **POST** /api/2.0/files/rooms/{id}/indexexport | Start the room index export
*Api.RoomsApi* | [**terminateRoomIndexExport**](docs/RoomsApi.md#terminateroomindexexport) | **DELETE** /api/2.0/files/rooms/indexexport | Terminate the room index export
*Api.RoomsApi* | [**unarchiveRoom**](docs/RoomsApi.md#unarchiveroom) | **PUT** /api/2.0/files/rooms/{id}/unarchive | Unarchive a room
*Api.RoomsApi* | [**unpinRoom**](docs/RoomsApi.md#unpinroom) | **PUT** /api/2.0/files/rooms/{id}/unpin | Unpin a room
*Api.RoomsApi* | [**updateRoom**](docs/RoomsApi.md#updateroom) | **PUT** /api/2.0/files/rooms/{id} | Update a room
*Api.RoomsApi* | [**uploadRoomLogo**](docs/RoomsApi.md#uploadroomlogo) | **POST** /api/2.0/files/logos | Upload a room logo image
*Api.SecurityAccessToDevToolsApi* | [**setTenantDevToolsAccessSettings**](docs/SecurityAccessToDevToolsApi.md#settenantdevtoolsaccesssettings) | **POST** /api/2.0/settings/devtoolsaccess | Set the Developer Tools access settings
*Api.SecurityActiveConnectionsApi* | [**getAllActiveConnections**](docs/SecurityActiveConnectionsApi.md#getallactiveconnections) | **GET** /api/2.0/security/activeconnections | Get active connections
*Api.SecurityActiveConnectionsApi* | [**logOutActiveConnection**](docs/SecurityActiveConnectionsApi.md#logoutactiveconnection) | **PUT** /api/2.0/security/activeconnections/logout/{loginEventId} | Log out from the connection
*Api.SecurityActiveConnectionsApi* | [**logOutAllActiveConnectionsChangePassword**](docs/SecurityActiveConnectionsApi.md#logoutallactiveconnectionschangepassword) | **PUT** /api/2.0/security/activeconnections/logoutallchangepassword | Log out and change password
*Api.SecurityActiveConnectionsApi* | [**logOutAllActiveConnectionsForUser**](docs/SecurityActiveConnectionsApi.md#logoutallactiveconnectionsforuser) | **PUT** /api/2.0/security/activeconnections/logoutall/{userId} | Log out for the user by ID
*Api.SecurityActiveConnectionsApi* | [**logOutAllExceptThisConnection**](docs/SecurityActiveConnectionsApi.md#logoutallexceptthisconnection) | **PUT** /api/2.0/security/activeconnections/logoutallexceptthis | Log out from all connections except the current one
*Api.SecurityAuditTrailDataApi* | [**createAuditTrailReport**](docs/SecurityAuditTrailDataApi.md#createaudittrailreport) | **POST** /api/2.0/security/audit/events/report | Generate the audit trail report
*Api.SecurityAuditTrailDataApi* | [**getAuditEventsByFilter**](docs/SecurityAuditTrailDataApi.md#getauditeventsbyfilter) | **GET** /api/2.0/security/audit/events/filter | Get filtered audit trail data
*Api.SecurityAuditTrailDataApi* | [**getAuditSettings**](docs/SecurityAuditTrailDataApi.md#getauditsettings) | **GET** /api/2.0/security/audit/settings/lifetime | Get the audit trail settings
*Api.SecurityAuditTrailDataApi* | [**getAuditTrailMappers**](docs/SecurityAuditTrailDataApi.md#getaudittrailmappers) | **GET** /api/2.0/security/audit/mappers | Get audit trail mappers
*Api.SecurityAuditTrailDataApi* | [**getAuditTrailTypes**](docs/SecurityAuditTrailDataApi.md#getaudittrailtypes) | **GET** /api/2.0/security/audit/types | Get audit trail types
*Api.SecurityAuditTrailDataApi* | [**getLastAuditEvents**](docs/SecurityAuditTrailDataApi.md#getlastauditevents) | **GET** /api/2.0/security/audit/events/last | Get audit trail data
*Api.SecurityAuditTrailDataApi* | [**setAuditSettings**](docs/SecurityAuditTrailDataApi.md#setauditsettings) | **POST** /api/2.0/security/audit/settings/lifetime | Set the audit trail settings
*Api.SecurityBannersVisibilityApi* | [**setTenantBannerSettings**](docs/SecurityBannersVisibilityApi.md#settenantbannersettings) | **POST** /api/2.0/settings/banner | Set the promotional banners visibility settings
*Api.SecurityCSPApi* | [**configureCsp**](docs/SecurityCSPApi.md#configurecsp) | **POST** /api/2.0/security/csp | Configure CSP settings
*Api.SecurityCSPApi* | [**getCspSettings**](docs/SecurityCSPApi.md#getcspsettings) | **GET** /api/2.0/security/csp | Get CSP settings
*Api.SecurityFirebaseApi* | [**docRegisterPusnNotificationDevice**](docs/SecurityFirebaseApi.md#docregisterpusnnotificationdevice) | **POST** /api/2.0/settings/push/docregisterdevice | Save the Documents Firebase device token
*Api.SecurityFirebaseApi* | [**subscribeDocumentsPushNotification**](docs/SecurityFirebaseApi.md#subscribedocumentspushnotification) | **PUT** /api/2.0/settings/push/docsubscribe | Subscribe to Documents push notification
*Api.SecurityLoginHistoryApi* | [**createLoginHistoryReport**](docs/SecurityLoginHistoryApi.md#createloginhistoryreport) | **POST** /api/2.0/security/audit/login/report | Generate the login history report
*Api.SecurityLoginHistoryApi* | [**getLastLoginEvents**](docs/SecurityLoginHistoryApi.md#getlastloginevents) | **GET** /api/2.0/security/audit/login/last | Get login history
*Api.SecurityLoginHistoryApi* | [**getLoginEventsByFilter**](docs/SecurityLoginHistoryApi.md#getlogineventsbyfilter) | **GET** /api/2.0/security/audit/login/filter | Get filtered login events
*Api.SecurityOAuth2Api* | [**generateJwtToken**](docs/SecurityOAuth2Api.md#generatejwttoken) | **GET** /api/2.0/security/oauth2/token | Generate JWT token
*Api.SecuritySMTPSettingsApi* | [**getSmtpOperationStatus**](docs/SecuritySMTPSettingsApi.md#getsmtpoperationstatus) | **GET** /api/2.0/smtpsettings/smtp/test/status | Get the SMTP testing process status
*Api.SecuritySMTPSettingsApi* | [**getSmtpSettings**](docs/SecuritySMTPSettingsApi.md#getsmtpsettings) | **GET** /api/2.0/smtpsettings/smtp | Get the SMTP settings
*Api.SecuritySMTPSettingsApi* | [**resetSmtpSettings**](docs/SecuritySMTPSettingsApi.md#resetsmtpsettings) | **DELETE** /api/2.0/smtpsettings/smtp | Reset the SMTP settings
*Api.SecuritySMTPSettingsApi* | [**saveSmtpSettings**](docs/SecuritySMTPSettingsApi.md#savesmtpsettings) | **POST** /api/2.0/smtpsettings/smtp | Save the SMTP settings
*Api.SecuritySMTPSettingsApi* | [**testSmtpSettings**](docs/SecuritySMTPSettingsApi.md#testsmtpsettings) | **GET** /api/2.0/smtpsettings/smtp/test | Test the SMTP settings
*Api.SettingsAccessToDevToolsApi* | [**getTenantAccessDevToolsSettings**](docs/SettingsAccessToDevToolsApi.md#gettenantaccessdevtoolssettings) | **GET** /api/2.0/settings/devtoolsaccess | Get the Developer Tools access settings
*Api.SettingsAuthorizationApi* | [**getAuthServices**](docs/SettingsAuthorizationApi.md#getauthservices) | **GET** /api/2.0/settings/authservice | Get the authorization services
*Api.SettingsAuthorizationApi* | [**saveAuthKeys**](docs/SettingsAuthorizationApi.md#saveauthkeys) | **POST** /api/2.0/settings/authservice | Save the authorization keys
*Api.SettingsBannersVisibilityApi* | [**getTenantBannerSettings**](docs/SettingsBannersVisibilityApi.md#gettenantbannersettings) | **GET** /api/2.0/settings/banner | Get the promotional banners visibility settings
*Api.SettingsCommonSettingsApi* | [**closeAdminHelper**](docs/SettingsCommonSettingsApi.md#closeadminhelper) | **PUT** /api/2.0/settings/closeadminhelper | Close the admin helper
*Api.SettingsCommonSettingsApi* | [**completeWizard**](docs/SettingsCommonSettingsApi.md#completewizard) | **PUT** /api/2.0/settings/wizard/complete | Complete the Wizard settings
*Api.SettingsCommonSettingsApi* | [**configureDeepLink**](docs/SettingsCommonSettingsApi.md#configuredeeplink) | **POST** /api/2.0/settings/deeplink | Configure the deep link settings
*Api.SettingsCommonSettingsApi* | [**deletePortalColorTheme**](docs/SettingsCommonSettingsApi.md#deleteportalcolortheme) | **DELETE** /api/2.0/settings/colortheme | Delete a color theme
*Api.SettingsCommonSettingsApi* | [**getDeepLinkSettings**](docs/SettingsCommonSettingsApi.md#getdeeplinksettings) | **GET** /api/2.0/settings/deeplink | Get the deep link settings
*Api.SettingsCommonSettingsApi* | [**getPaymentSettings**](docs/SettingsCommonSettingsApi.md#getpaymentsettings) | **GET** /api/2.0/settings/payment | Get the payment settings
*Api.SettingsCommonSettingsApi* | [**getPortalColorTheme**](docs/SettingsCommonSettingsApi.md#getportalcolortheme) | **GET** /api/2.0/settings/colortheme | Get a color theme
*Api.SettingsCommonSettingsApi* | [**getPortalHostname**](docs/SettingsCommonSettingsApi.md#getportalhostname) | **GET** /api/2.0/settings/machine | Get hostname
*Api.SettingsCommonSettingsApi* | [**getPortalLogo**](docs/SettingsCommonSettingsApi.md#getportallogo) | **GET** /api/2.0/settings/logo | Get a portal logo
*Api.SettingsCommonSettingsApi* | [**getPortalSettings**](docs/SettingsCommonSettingsApi.md#getportalsettings) | **GET** /api/2.0/settings | Get the portal settings
*Api.SettingsCommonSettingsApi* | [**getSocketSettings**](docs/SettingsCommonSettingsApi.md#getsocketsettings) | **GET** /api/2.0/settings/socket | Get the socket settings
*Api.SettingsCommonSettingsApi* | [**getSupportedCultures**](docs/SettingsCommonSettingsApi.md#getsupportedcultures) | **GET** /api/2.0/settings/cultures | Get supported languages
*Api.SettingsCommonSettingsApi* | [**getTenantUserInvitationSettings**](docs/SettingsCommonSettingsApi.md#gettenantuserinvitationsettings) | **GET** /api/2.0/settings/invitationsettings | Get the user invitation settings
*Api.SettingsCommonSettingsApi* | [**getTimeZones**](docs/SettingsCommonSettingsApi.md#gettimezones) | **GET** /api/2.0/settings/timezones | Get time zones
*Api.SettingsCommonSettingsApi* | [**saveDnsSettings**](docs/SettingsCommonSettingsApi.md#savednssettings) | **PUT** /api/2.0/settings/dns | Save the DNS settings
*Api.SettingsCommonSettingsApi* | [**saveMailDomainSettings**](docs/SettingsCommonSettingsApi.md#savemaildomainsettings) | **POST** /api/2.0/settings/maildomainsettings | Save the mail domain settings
*Api.SettingsCommonSettingsApi* | [**savePortalColorTheme**](docs/SettingsCommonSettingsApi.md#saveportalcolortheme) | **PUT** /api/2.0/settings/colortheme | Save a color theme
*Api.SettingsCommonSettingsApi* | [**updateEmailActivationSettings**](docs/SettingsCommonSettingsApi.md#updateemailactivationsettings) | **PUT** /api/2.0/settings/emailactivation | Update the email activation settings
*Api.SettingsCommonSettingsApi* | [**updateInvitationSettings**](docs/SettingsCommonSettingsApi.md#updateinvitationsettings) | **PUT** /api/2.0/settings/invitationsettings | Update user invitation settings
*Api.SettingsCookiesApi* | [**getCookieSettings**](docs/SettingsCookiesApi.md#getcookiesettings) | **GET** /api/2.0/settings/cookiesettings | Get cookies lifetime
*Api.SettingsCookiesApi* | [**updateCookieSettings**](docs/SettingsCookiesApi.md#updatecookiesettings) | **PUT** /api/2.0/settings/cookiesettings | Update cookies lifetime
*Api.SettingsCustomNavigationApi* | [**createCustomNavigationItem**](docs/SettingsCustomNavigationApi.md#createcustomnavigationitem) | **POST** /api/2.0/settings/customnavigation/create | Add a custom navigation item
*Api.SettingsCustomNavigationApi* | [**deleteCustomNavigationItem**](docs/SettingsCustomNavigationApi.md#deletecustomnavigationitem) | **DELETE** /api/2.0/settings/customnavigation/delete/{id} | Delete a custom navigation item
*Api.SettingsCustomNavigationApi* | [**getCustomNavigationItem**](docs/SettingsCustomNavigationApi.md#getcustomnavigationitem) | **GET** /api/2.0/settings/customnavigation/get/{id} | Get a custom navigation item by ID
*Api.SettingsCustomNavigationApi* | [**getCustomNavigationItemSample**](docs/SettingsCustomNavigationApi.md#getcustomnavigationitemsample) | **GET** /api/2.0/settings/customnavigation/getsample | Get a custom navigation item sample
*Api.SettingsCustomNavigationApi* | [**getCustomNavigationItems**](docs/SettingsCustomNavigationApi.md#getcustomnavigationitems) | **GET** /api/2.0/settings/customnavigation/getall | Get the custom navigation items
*Api.SettingsEncryptionApi* | [**getStorageEncryptionProgress**](docs/SettingsEncryptionApi.md#getstorageencryptionprogress) | **GET** /api/2.0/settings/encryption/progress | Get the storage encryption progress
*Api.SettingsEncryptionApi* | [**getStorageEncryptionSettings**](docs/SettingsEncryptionApi.md#getstorageencryptionsettings) | **GET** /api/2.0/settings/encryption/settings | Get the storage encryption settings
*Api.SettingsEncryptionApi* | [**startStorageEncryption**](docs/SettingsEncryptionApi.md#startstorageencryption) | **POST** /api/2.0/settings/encryption/start | Start the storage encryption process
*Api.SettingsGreetingSettingsApi* | [**getGreetingSettings**](docs/SettingsGreetingSettingsApi.md#getgreetingsettings) | **GET** /api/2.0/settings/greetingsettings | Get greeting settings
*Api.SettingsGreetingSettingsApi* | [**getIsDefaultGreetingSettings**](docs/SettingsGreetingSettingsApi.md#getisdefaultgreetingsettings) | **GET** /api/2.0/settings/greetingsettings/isdefault | Check the default greeting settings
*Api.SettingsGreetingSettingsApi* | [**restoreGreetingSettings**](docs/SettingsGreetingSettingsApi.md#restoregreetingsettings) | **POST** /api/2.0/settings/greetingsettings/restore | Restore the greeting settings
*Api.SettingsGreetingSettingsApi* | [**saveGreetingSettings**](docs/SettingsGreetingSettingsApi.md#savegreetingsettings) | **POST** /api/2.0/settings/greetingsettings | Save the greeting settings
*Api.SettingsIPRestrictionsApi* | [**getIpRestrictions**](docs/SettingsIPRestrictionsApi.md#getiprestrictions) | **GET** /api/2.0/settings/iprestrictions | Get the IP portal restrictions
*Api.SettingsIPRestrictionsApi* | [**readIpRestrictionsSettings**](docs/SettingsIPRestrictionsApi.md#readiprestrictionssettings) | **GET** /api/2.0/settings/iprestrictions/settings | Get the IP restriction settings
*Api.SettingsIPRestrictionsApi* | [**saveIpRestrictions**](docs/SettingsIPRestrictionsApi.md#saveiprestrictions) | **PUT** /api/2.0/settings/iprestrictions | Update the IP restrictions
*Api.SettingsIPRestrictionsApi* | [**updateIpRestrictionsSettings**](docs/SettingsIPRestrictionsApi.md#updateiprestrictionssettings) | **PUT** /api/2.0/settings/iprestrictions/settings | Update the IP restriction settings
*Api.SettingsLicenseApi* | [**acceptLicense**](docs/SettingsLicenseApi.md#acceptlicense) | **POST** /api/2.0/settings/license/accept | Activate a license
*Api.SettingsLicenseApi* | [**getIsLicenseRequired**](docs/SettingsLicenseApi.md#getislicenserequired) | **GET** /api/2.0/settings/license/required | Request a license
*Api.SettingsLicenseApi* | [**refreshLicense**](docs/SettingsLicenseApi.md#refreshlicense) | **GET** /api/2.0/settings/license/refresh | Refresh the license
*Api.SettingsLicenseApi* | [**uploadLicense**](docs/SettingsLicenseApi.md#uploadlicense) | **POST** /api/2.0/settings/license | Upload a license
*Api.SettingsLoginSettingsApi* | [**getLoginSettings**](docs/SettingsLoginSettingsApi.md#getloginsettings) | **GET** /api/2.0/settings/security/loginsettings | Get the login settings
*Api.SettingsLoginSettingsApi* | [**setDefaultLoginSettings**](docs/SettingsLoginSettingsApi.md#setdefaultloginsettings) | **DELETE** /api/2.0/settings/security/loginsettings | Reset the login settings
*Api.SettingsLoginSettingsApi* | [**updateLoginSettings**](docs/SettingsLoginSettingsApi.md#updateloginsettings) | **PUT** /api/2.0/settings/security/loginsettings | Update the login settings
*Api.SettingsMessagesApi* | [**enableAdminMessageSettings**](docs/SettingsMessagesApi.md#enableadminmessagesettings) | **POST** /api/2.0/settings/messagesettings | Enable the administrator message settings
*Api.SettingsMessagesApi* | [**sendAdminMail**](docs/SettingsMessagesApi.md#sendadminmail) | **POST** /api/2.0/settings/sendadmmail | Send a message to the administrator
*Api.SettingsMessagesApi* | [**sendJoinInviteMail**](docs/SettingsMessagesApi.md#sendjoininvitemail) | **POST** /api/2.0/settings/sendjoininvite | Sends an invitation email
*Api.SettingsNotificationsApi* | [**getNotificationSettings**](docs/SettingsNotificationsApi.md#getnotificationsettings) | **GET** /api/2.0/settings/notification/{type} | Check notification availability
*Api.SettingsNotificationsApi* | [**getRoomsNotificationSettings**](docs/SettingsNotificationsApi.md#getroomsnotificationsettings) | **GET** /api/2.0/settings/notification/rooms | Get room notification settings
*Api.SettingsNotificationsApi* | [**setNotificationSettings**](docs/SettingsNotificationsApi.md#setnotificationsettings) | **POST** /api/2.0/settings/notification | Enable notifications
*Api.SettingsNotificationsApi* | [**setRoomsNotificationStatus**](docs/SettingsNotificationsApi.md#setroomsnotificationstatus) | **POST** /api/2.0/settings/notification/rooms | Set room notification status
*Api.SettingsOwnerApi* | [**sendOwnerChangeInstructions**](docs/SettingsOwnerApi.md#sendownerchangeinstructions) | **POST** /api/2.0/settings/owner | Send the owner change instructions
*Api.SettingsOwnerApi* | [**updatePortalOwner**](docs/SettingsOwnerApi.md#updateportalowner) | **PUT** /api/2.0/settings/owner | Update the portal owner
*Api.SettingsQuotaApi* | [**getUserQuotaSettings**](docs/SettingsQuotaApi.md#getuserquotasettings) | **GET** /api/2.0/settings/userquotasettings | Get the user quota settings
*Api.SettingsQuotaApi* | [**saveRoomQuotaSettings**](docs/SettingsQuotaApi.md#saveroomquotasettings) | **POST** /api/2.0/settings/roomquotasettings | Save the room quota settings
*Api.SettingsQuotaApi* | [**setTenantQuotaSettings**](docs/SettingsQuotaApi.md#settenantquotasettings) | **PUT** /api/2.0/settings/tenantquotasettings | Save the tenant quota settings
*Api.SettingsRebrandingApi* | [**deleteAdditionalWhiteLabelSettings**](docs/SettingsRebrandingApi.md#deleteadditionalwhitelabelsettings) | **DELETE** /api/2.0/settings/rebranding/additional | Delete the additional white label settings
*Api.SettingsRebrandingApi* | [**deleteCompanyWhiteLabelSettings**](docs/SettingsRebrandingApi.md#deletecompanywhitelabelsettings) | **DELETE** /api/2.0/settings/rebranding/company | Delete the company white label settings
*Api.SettingsRebrandingApi* | [**getAdditionalWhiteLabelSettings**](docs/SettingsRebrandingApi.md#getadditionalwhitelabelsettings) | **GET** /api/2.0/settings/rebranding/additional | Get the additional white label settings
*Api.SettingsRebrandingApi* | [**getCompanyWhiteLabelSettings**](docs/SettingsRebrandingApi.md#getcompanywhitelabelsettings) | **GET** /api/2.0/settings/rebranding/company | Get the company white label settings
*Api.SettingsRebrandingApi* | [**getEnableWhitelabel**](docs/SettingsRebrandingApi.md#getenablewhitelabel) | **GET** /api/2.0/settings/enablewhitelabel | Check the white label availability
*Api.SettingsRebrandingApi* | [**getIsDefaultWhiteLabelLogoText**](docs/SettingsRebrandingApi.md#getisdefaultwhitelabellogotext) | **GET** /api/2.0/settings/whitelabel/logotext/isdefault | Check the default white label logo text
*Api.SettingsRebrandingApi* | [**getIsDefaultWhiteLabelLogos**](docs/SettingsRebrandingApi.md#getisdefaultwhitelabellogos) | **GET** /api/2.0/settings/whitelabel/logos/isdefault | Check the default white label logos
*Api.SettingsRebrandingApi* | [**getLicensorData**](docs/SettingsRebrandingApi.md#getlicensordata) | **GET** /api/2.0/settings/companywhitelabel | Get the licensor data
*Api.SettingsRebrandingApi* | [**getWhiteLabelLogoText**](docs/SettingsRebrandingApi.md#getwhitelabellogotext) | **GET** /api/2.0/settings/whitelabel/logotext | Get the white label logo text
*Api.SettingsRebrandingApi* | [**getWhiteLabelLogos**](docs/SettingsRebrandingApi.md#getwhitelabellogos) | **GET** /api/2.0/settings/whitelabel/logos | Get the white label logos
*Api.SettingsRebrandingApi* | [**restoreWhiteLabelLogoText**](docs/SettingsRebrandingApi.md#restorewhitelabellogotext) | **PUT** /api/2.0/settings/whitelabel/logotext/restore | Restore the white label logo text
*Api.SettingsRebrandingApi* | [**restoreWhiteLabelLogos**](docs/SettingsRebrandingApi.md#restorewhitelabellogos) | **PUT** /api/2.0/settings/whitelabel/logos/restore | Restore the white label logos
*Api.SettingsRebrandingApi* | [**saveAdditionalWhiteLabelSettings**](docs/SettingsRebrandingApi.md#saveadditionalwhitelabelsettings) | **POST** /api/2.0/settings/rebranding/additional | Save the additional white label settings
*Api.SettingsRebrandingApi* | [**saveCompanyWhiteLabelSettings**](docs/SettingsRebrandingApi.md#savecompanywhitelabelsettings) | **POST** /api/2.0/settings/rebranding/company | Save the company white label settings
*Api.SettingsRebrandingApi* | [**saveWhiteLabelLogoText**](docs/SettingsRebrandingApi.md#savewhitelabellogotext) | **POST** /api/2.0/settings/whitelabel/logotext/save | Save the white label logo text settings
*Api.SettingsRebrandingApi* | [**saveWhiteLabelSettings**](docs/SettingsRebrandingApi.md#savewhitelabelsettings) | **POST** /api/2.0/settings/whitelabel/logos/save | Save the white label logos
*Api.SettingsRebrandingApi* | [**saveWhiteLabelSettingsFromFiles**](docs/SettingsRebrandingApi.md#savewhitelabelsettingsfromfiles) | **POST** /api/2.0/settings/whitelabel/logos/savefromfiles | Save the white label logos from files
*Api.SettingsSSOApi* | [**getDefaultSsoSettingsV2**](docs/SettingsSSOApi.md#getdefaultssosettingsv2) | **GET** /api/2.0/settings/ssov2/default | Get the default SSO settings
*Api.SettingsSSOApi* | [**getSsoSettingsV2**](docs/SettingsSSOApi.md#getssosettingsv2) | **GET** /api/2.0/settings/ssov2 | Get the SSO settings
*Api.SettingsSSOApi* | [**getSsoSettingsV2Constants**](docs/SettingsSSOApi.md#getssosettingsv2constants) | **GET** /api/2.0/settings/ssov2/constants | Get the SSO settings constants
*Api.SettingsSSOApi* | [**resetSsoSettingsV2**](docs/SettingsSSOApi.md#resetssosettingsv2) | **DELETE** /api/2.0/settings/ssov2 | Reset the SSO settings
*Api.SettingsSSOApi* | [**saveSsoSettingsV2**](docs/SettingsSSOApi.md#savessosettingsv2) | **POST** /api/2.0/settings/ssov2 | Save the SSO settings
*Api.SettingsSecurityApi* | [**getEnabledModules**](docs/SettingsSecurityApi.md#getenabledmodules) | **GET** /api/2.0/settings/security/modules | Get the enabled modules
*Api.SettingsSecurityApi* | [**getIsProductAdministrator**](docs/SettingsSecurityApi.md#getisproductadministrator) | **GET** /api/2.0/settings/security/administrator | Check a product administrator
*Api.SettingsSecurityApi* | [**getPasswordSettings**](docs/SettingsSecurityApi.md#getpasswordsettings) | **GET** /api/2.0/settings/security/password | Get the password settings
*Api.SettingsSecurityApi* | [**getProductAdministrators**](docs/SettingsSecurityApi.md#getproductadministrators) | **GET** /api/2.0/settings/security/administrator/{productid} | Get the product administrators
*Api.SettingsSecurityApi* | [**getWebItemSecurityInfo**](docs/SettingsSecurityApi.md#getwebitemsecurityinfo) | **GET** /api/2.0/settings/security/{id} | Get the module availability
*Api.SettingsSecurityApi* | [**getWebItemSettingsSecurityInfo**](docs/SettingsSecurityApi.md#getwebitemsettingssecurityinfo) | **GET** /api/2.0/settings/security | Get the security settings
*Api.SettingsSecurityApi* | [**setAccessToWebItems**](docs/SettingsSecurityApi.md#setaccesstowebitems) | **PUT** /api/2.0/settings/security/access | Set the security settings to modules
*Api.SettingsSecurityApi* | [**setProductAdministrator**](docs/SettingsSecurityApi.md#setproductadministrator) | **PUT** /api/2.0/settings/security/administrator | Set a product administrator
*Api.SettingsSecurityApi* | [**setWebItemSecurity**](docs/SettingsSecurityApi.md#setwebitemsecurity) | **PUT** /api/2.0/settings/security | Set the module security settings
*Api.SettingsSecurityApi* | [**updatePasswordSettings**](docs/SettingsSecurityApi.md#updatepasswordsettings) | **PUT** /api/2.0/settings/security/password | Set the password settings
*Api.SettingsStatisticsApi* | [**getSpaceUsageStatistics**](docs/SettingsStatisticsApi.md#getspaceusagestatistics) | **GET** /api/2.0/settings/statistics/spaceusage/{id} | Get the space usage statistics
*Api.SettingsStorageApi* | [**getAllBackupStorages**](docs/SettingsStorageApi.md#getallbackupstorages) | **GET** /api/2.0/settings/storage/backup | Get the backup storages
*Api.SettingsStorageApi* | [**getAllCdnStorages**](docs/SettingsStorageApi.md#getallcdnstorages) | **GET** /api/2.0/settings/storage/cdn | Get the CDN storages
*Api.SettingsStorageApi* | [**getAllStorages**](docs/SettingsStorageApi.md#getallstorages) | **GET** /api/2.0/settings/storage | Get storages
*Api.SettingsStorageApi* | [**getAmazonS3Regions**](docs/SettingsStorageApi.md#getamazons3regions) | **GET** /api/2.0/settings/storage/s3/regions | Get Amazon regions
*Api.SettingsStorageApi* | [**getStorageProgress**](docs/SettingsStorageApi.md#getstorageprogress) | **GET** /api/2.0/settings/storage/progress | Get the storage progress
*Api.SettingsStorageApi* | [**resetCdnToDefault**](docs/SettingsStorageApi.md#resetcdntodefault) | **DELETE** /api/2.0/settings/storage/cdn | Reset the CDN storage settings
*Api.SettingsStorageApi* | [**resetStorageToDefault**](docs/SettingsStorageApi.md#resetstoragetodefault) | **DELETE** /api/2.0/settings/storage | Reset the storage settings
*Api.SettingsStorageApi* | [**updateCdnStorage**](docs/SettingsStorageApi.md#updatecdnstorage) | **PUT** /api/2.0/settings/storage/cdn | Update the CDN storage
*Api.SettingsStorageApi* | [**updateStorage**](docs/SettingsStorageApi.md#updatestorage) | **PUT** /api/2.0/settings/storage | Update a storage
*Api.SettingsTFASettingsApi* | [**getTfaAppCodes**](docs/SettingsTFASettingsApi.md#gettfaappcodes) | **GET** /api/2.0/settings/tfaappcodes | Get the TFA codes
*Api.SettingsTFASettingsApi* | [**getTfaConfirmUrl**](docs/SettingsTFASettingsApi.md#gettfaconfirmurl) | **GET** /api/2.0/settings/tfaapp/confirm | Get confirmation email
*Api.SettingsTFASettingsApi* | [**getTfaSettings**](docs/SettingsTFASettingsApi.md#gettfasettings) | **GET** /api/2.0/settings/tfaapp | Get the TFA settings
*Api.SettingsTFASettingsApi* | [**tfaAppGenerateSetupCode**](docs/SettingsTFASettingsApi.md#tfaappgeneratesetupcode) | **GET** /api/2.0/settings/tfaapp/setup | Generate setup code
*Api.SettingsTFASettingsApi* | [**tfaValidateAuthCode**](docs/SettingsTFASettingsApi.md#tfavalidateauthcode) | **POST** /api/2.0/settings/tfaapp/validate | Validate the TFA code
*Api.SettingsTFASettingsApi* | [**unlinkTfaApp**](docs/SettingsTFASettingsApi.md#unlinktfaapp) | **PUT** /api/2.0/settings/tfaappnewapp | Unlink the TFA application
*Api.SettingsTFASettingsApi* | [**updateTfaAppCodes**](docs/SettingsTFASettingsApi.md#updatetfaappcodes) | **PUT** /api/2.0/settings/tfaappnewcodes | Update the TFA codes
*Api.SettingsTFASettingsApi* | [**updateTfaSettings**](docs/SettingsTFASettingsApi.md#updatetfasettings) | **PUT** /api/2.0/settings/tfaapp | Update the TFA settings
*Api.SettingsTFASettingsApi* | [**updateTfaSettingsLink**](docs/SettingsTFASettingsApi.md#updatetfasettingslink) | **PUT** /api/2.0/settings/tfaappwithlink | Get a confirmation email for updating TFA settings
*Api.SettingsWebhooksApi* | [**createWebhook**](docs/SettingsWebhooksApi.md#createwebhook) | **POST** /api/2.0/settings/webhook | Create a webhook
*Api.SettingsWebhooksApi* | [**enableWebhook**](docs/SettingsWebhooksApi.md#enablewebhook) | **PUT** /api/2.0/settings/webhook/enable | Enable a webhook
*Api.SettingsWebhooksApi* | [**getTenantWebhooks**](docs/SettingsWebhooksApi.md#gettenantwebhooks) | **GET** /api/2.0/settings/webhook | Get webhooks
*Api.SettingsWebhooksApi* | [**getWebhookTriggers**](docs/SettingsWebhooksApi.md#getwebhooktriggers) | **GET** /api/2.0/settings/webhook/triggers | Get webhook triggers
*Api.SettingsWebhooksApi* | [**getWebhooksLogs**](docs/SettingsWebhooksApi.md#getwebhookslogs) | **GET** /api/2.0/settings/webhooks/log | Get webhook logs
*Api.SettingsWebhooksApi* | [**removeWebhook**](docs/SettingsWebhooksApi.md#removewebhook) | **DELETE** /api/2.0/settings/webhook/{id} | Remove a webhook
*Api.SettingsWebhooksApi* | [**retryWebhook**](docs/SettingsWebhooksApi.md#retrywebhook) | **PUT** /api/2.0/settings/webhook/{id}/retry | Retry a webhook
*Api.SettingsWebhooksApi* | [**retryWebhooks**](docs/SettingsWebhooksApi.md#retrywebhooks) | **PUT** /api/2.0/settings/webhook/retry | Retry webhooks
*Api.SettingsWebhooksApi* | [**updateWebhook**](docs/SettingsWebhooksApi.md#updatewebhook) | **PUT** /api/2.0/settings/webhook | Update a webhook
*Api.SettingsWebpluginsApi* | [**addWebPluginFromFile**](docs/SettingsWebpluginsApi.md#addwebpluginfromfile) | **POST** /api/2.0/settings/webplugins | Add a web plugin
*Api.SettingsWebpluginsApi* | [**deleteWebPlugin**](docs/SettingsWebpluginsApi.md#deletewebplugin) | **DELETE** /api/2.0/settings/webplugins/{name} | Delete a web plugin
*Api.SettingsWebpluginsApi* | [**getWebPlugin**](docs/SettingsWebpluginsApi.md#getwebplugin) | **GET** /api/2.0/settings/webplugins/{name} | Get a web plugin by name
*Api.SettingsWebpluginsApi* | [**getWebPlugins**](docs/SettingsWebpluginsApi.md#getwebplugins) | **GET** /api/2.0/settings/webplugins | Get web plugins
*Api.SettingsWebpluginsApi* | [**updateWebPlugin**](docs/SettingsWebpluginsApi.md#updatewebplugin) | **PUT** /api/2.0/settings/webplugins/{name} | Update a web plugin
*Api.ThirdPartyApi* | [**getThirdPartyCode**](docs/ThirdPartyApi.md#getthirdpartycode) | **GET** /api/2.0/thirdparty/{provider} | Get the code request

</details>

## Documentation for Models

<details><summary>Models list</summary>

 - [Api.AccountInfoArrayWrapper](docs/AccountInfoArrayWrapper.md)
 - [Api.AccountInfoDto](docs/AccountInfoDto.md)
 - [Api.AccountLoginType](docs/AccountLoginType.md)
 - [Api.AceShortWrapper](docs/AceShortWrapper.md)
 - [Api.AceShortWrapperArrayWrapper](docs/AceShortWrapperArrayWrapper.md)
 - [Api.ActionConfig](docs/ActionConfig.md)
 - [Api.ActionLinkConfig](docs/ActionLinkConfig.md)
 - [Api.ActionType](docs/ActionType.md)
 - [Api.ActiveConnectionsDto](docs/ActiveConnectionsDto.md)
 - [Api.ActiveConnectionsItemDto](docs/ActiveConnectionsItemDto.md)
 - [Api.ActiveConnectionsWrapper](docs/ActiveConnectionsWrapper.md)
 - [Api.ActiveConnectionsWrapperLinksInner](docs/ActiveConnectionsWrapperLinksInner.md)
 - [Api.AdditionalWhiteLabelSettings](docs/AdditionalWhiteLabelSettings.md)
 - [Api.AdditionalWhiteLabelSettingsDto](docs/AdditionalWhiteLabelSettingsDto.md)
 - [Api.AdditionalWhiteLabelSettingsWrapper](docs/AdditionalWhiteLabelSettingsWrapper.md)
 - [Api.AdminMessageBaseSettingsRequestsDto](docs/AdminMessageBaseSettingsRequestsDto.md)
 - [Api.AdminMessageSettingsRequestsDto](docs/AdminMessageSettingsRequestsDto.md)
 - [Api.AnonymousConfigDto](docs/AnonymousConfigDto.md)
 - [Api.ApiDateTime](docs/ApiDateTime.md)
 - [Api.ApiKeyResponseArrayWrapper](docs/ApiKeyResponseArrayWrapper.md)
 - [Api.ApiKeyResponseDto](docs/ApiKeyResponseDto.md)
 - [Api.ApiKeyResponseWrapper](docs/ApiKeyResponseWrapper.md)
 - [Api.ApplyFilterOption](docs/ApplyFilterOption.md)
 - [Api.ArchiveRoomRequest](docs/ArchiveRoomRequest.md)
 - [Api.Area](docs/Area.md)
 - [Api.ArrayArrayWrapper](docs/ArrayArrayWrapper.md)
 - [Api.AuditEventArrayWrapper](docs/AuditEventArrayWrapper.md)
 - [Api.AuditEventDto](docs/AuditEventDto.md)
 - [Api.AuthData](docs/AuthData.md)
 - [Api.AuthKey](docs/AuthKey.md)
 - [Api.AuthRequestsDto](docs/AuthRequestsDto.md)
 - [Api.AuthServiceRequestsArrayWrapper](docs/AuthServiceRequestsArrayWrapper.md)
 - [Api.AuthServiceRequestsDto](docs/AuthServiceRequestsDto.md)
 - [Api.AuthenticationTokenDto](docs/AuthenticationTokenDto.md)
 - [Api.AuthenticationTokenWrapper](docs/AuthenticationTokenWrapper.md)
 - [Api.AutoCleanUpData](docs/AutoCleanUpData.md)
 - [Api.AutoCleanUpDataWrapper](docs/AutoCleanUpDataWrapper.md)
 - [Api.AutoCleanupRequestDto](docs/AutoCleanupRequestDto.md)
 - [Api.BackupDto](docs/BackupDto.md)
 - [Api.BackupHistoryRecord](docs/BackupHistoryRecord.md)
 - [Api.BackupHistoryRecordArrayWrapper](docs/BackupHistoryRecordArrayWrapper.md)
 - [Api.BackupPeriod](docs/BackupPeriod.md)
 - [Api.BackupProgress](docs/BackupProgress.md)
 - [Api.BackupProgressEnum](docs/BackupProgressEnum.md)
 - [Api.BackupProgressWrapper](docs/BackupProgressWrapper.md)
 - [Api.BackupRestoreDto](docs/BackupRestoreDto.md)
 - [Api.BackupScheduleDto](docs/BackupScheduleDto.md)
 - [Api.BackupStorageType](docs/BackupStorageType.md)
 - [Api.Balance](docs/Balance.md)
 - [Api.BalanceWrapper](docs/BalanceWrapper.md)
 - [Api.BaseBatchRequestDto](docs/BaseBatchRequestDto.md)
 - [Api.BaseBatchRequestDtoFolderIdsInner](docs/BaseBatchRequestDtoFolderIdsInner.md)
 - [Api.BatchRequestDto](docs/BatchRequestDto.md)
 - [Api.BatchRequestDtoDestFolderId](docs/BatchRequestDtoDestFolderId.md)
 - [Api.BatchTagsRequestDto](docs/BatchTagsRequestDto.md)
 - [Api.BooleanWrapper](docs/BooleanWrapper.md)
 - [Api.CapabilitiesDto](docs/CapabilitiesDto.md)
 - [Api.CapabilitiesWrapper](docs/CapabilitiesWrapper.md)
 - [Api.CdnStorageSettings](docs/CdnStorageSettings.md)
 - [Api.CdnStorageSettingsWrapper](docs/CdnStorageSettingsWrapper.md)
 - [Api.ChangeClientActivationRequest](docs/ChangeClientActivationRequest.md)
 - [Api.ChangeHistory](docs/ChangeHistory.md)
 - [Api.ChangeOwnerRequestDto](docs/ChangeOwnerRequestDto.md)
 - [Api.CheckConversionRequestDtoInteger](docs/CheckConversionRequestDtoInteger.md)
 - [Api.CheckDestFolderDto](docs/CheckDestFolderDto.md)
 - [Api.CheckDestFolderResult](docs/CheckDestFolderResult.md)
 - [Api.CheckDestFolderWrapper](docs/CheckDestFolderWrapper.md)
 - [Api.CheckDocServiceUrlRequestDto](docs/CheckDocServiceUrlRequestDto.md)
 - [Api.CheckFillFormDraft](docs/CheckFillFormDraft.md)
 - [Api.CheckUploadRequest](docs/CheckUploadRequest.md)
 - [Api.ClientInfoResponse](docs/ClientInfoResponse.md)
 - [Api.ClientResponse](docs/ClientResponse.md)
 - [Api.ClientSecretResponse](docs/ClientSecretResponse.md)
 - [Api.CoEditingConfig](docs/CoEditingConfig.md)
 - [Api.CoEditingConfigMode](docs/CoEditingConfigMode.md)
 - [Api.CompanyWhiteLabelSettings](docs/CompanyWhiteLabelSettings.md)
 - [Api.CompanyWhiteLabelSettingsArrayWrapper](docs/CompanyWhiteLabelSettingsArrayWrapper.md)
 - [Api.CompanyWhiteLabelSettingsDto](docs/CompanyWhiteLabelSettingsDto.md)
 - [Api.CompanyWhiteLabelSettingsWrapper](docs/CompanyWhiteLabelSettingsWrapper.md)
 - [Api.ConfigurationDtoInteger](docs/ConfigurationDtoInteger.md)
 - [Api.ConfigurationIntegerWrapper](docs/ConfigurationIntegerWrapper.md)
 - [Api.ConfirmData](docs/ConfirmData.md)
 - [Api.ConfirmDto](docs/ConfirmDto.md)
 - [Api.ConfirmType](docs/ConfirmType.md)
 - [Api.ConfirmWrapper](docs/ConfirmWrapper.md)
 - [Api.Contact](docs/Contact.md)
 - [Api.ContentDisposition](docs/ContentDisposition.md)
 - [Api.ContentType](docs/ContentType.md)
 - [Api.ConversationResultArrayWrapper](docs/ConversationResultArrayWrapper.md)
 - [Api.ConversationResultDto](docs/ConversationResultDto.md)
 - [Api.CookieSettingsDto](docs/CookieSettingsDto.md)
 - [Api.CookieSettingsRequestsDto](docs/CookieSettingsRequestsDto.md)
 - [Api.CookieSettingsWrapper](docs/CookieSettingsWrapper.md)
 - [Api.CopyAsJsonElement](docs/CopyAsJsonElement.md)
 - [Api.CopyAsJsonElementDestFolderId](docs/CopyAsJsonElementDestFolderId.md)
 - [Api.CoverRequestDto](docs/CoverRequestDto.md)
 - [Api.CoversResultArrayWrapper](docs/CoversResultArrayWrapper.md)
 - [Api.CoversResultDto](docs/CoversResultDto.md)
 - [Api.CreateApiKeyRequestDto](docs/CreateApiKeyRequestDto.md)
 - [Api.CreateClientRequest](docs/CreateClientRequest.md)
 - [Api.CreateFileJsonElement](docs/CreateFileJsonElement.md)
 - [Api.CreateFileJsonElementTemplateId](docs/CreateFileJsonElementTemplateId.md)
 - [Api.CreateFolder](docs/CreateFolder.md)
 - [Api.CreateRoomFromTemplateDto](docs/CreateRoomFromTemplateDto.md)
 - [Api.CreateRoomRequestDto](docs/CreateRoomRequestDto.md)
 - [Api.CreateTagRequestDto](docs/CreateTagRequestDto.md)
 - [Api.CreateTextOrHtmlFile](docs/CreateTextOrHtmlFile.md)
 - [Api.CreateThirdPartyRoom](docs/CreateThirdPartyRoom.md)
 - [Api.CreateWebhooksConfigRequestsDto](docs/CreateWebhooksConfigRequestsDto.md)
 - [Api.Cron](docs/Cron.md)
 - [Api.CronParams](docs/CronParams.md)
 - [Api.CspDto](docs/CspDto.md)
 - [Api.CspRequestsDto](docs/CspRequestsDto.md)
 - [Api.CspWrapper](docs/CspWrapper.md)
 - [Api.Culture](docs/Culture.md)
 - [Api.CultureSpecificExternalResource](docs/CultureSpecificExternalResource.md)
 - [Api.CultureSpecificExternalResources](docs/CultureSpecificExternalResources.md)
 - [Api.CurrenciesArrayWrapper](docs/CurrenciesArrayWrapper.md)
 - [Api.CurrenciesDto](docs/CurrenciesDto.md)
 - [Api.CurrentLicenseInfo](docs/CurrentLicenseInfo.md)
 - [Api.CustomColorThemesSettingsColorItem](docs/CustomColorThemesSettingsColorItem.md)
 - [Api.CustomColorThemesSettingsDto](docs/CustomColorThemesSettingsDto.md)
 - [Api.CustomColorThemesSettingsItem](docs/CustomColorThemesSettingsItem.md)
 - [Api.CustomColorThemesSettingsRequestsDto](docs/CustomColorThemesSettingsRequestsDto.md)
 - [Api.CustomColorThemesSettingsWrapper](docs/CustomColorThemesSettingsWrapper.md)
 - [Api.CustomFilterParameters](docs/CustomFilterParameters.md)
 - [Api.CustomNavigationItem](docs/CustomNavigationItem.md)
 - [Api.CustomNavigationItemArrayWrapper](docs/CustomNavigationItemArrayWrapper.md)
 - [Api.CustomNavigationItemWrapper](docs/CustomNavigationItemWrapper.md)
 - [Api.CustomerConfigDto](docs/CustomerConfigDto.md)
 - [Api.CustomerInfoDto](docs/CustomerInfoDto.md)
 - [Api.CustomerInfoWrapper](docs/CustomerInfoWrapper.md)
 - [Api.CustomerOperationsReportRequestDto](docs/CustomerOperationsReportRequestDto.md)
 - [Api.CustomizationConfigDto](docs/CustomizationConfigDto.md)
 - [Api.DarkThemeSettings](docs/DarkThemeSettings.md)
 - [Api.DarkThemeSettingsRequestDto](docs/DarkThemeSettingsRequestDto.md)
 - [Api.DarkThemeSettingsType](docs/DarkThemeSettingsType.md)
 - [Api.DarkThemeSettingsWrapper](docs/DarkThemeSettingsWrapper.md)
 - [Api.DateToAutoCleanUp](docs/DateToAutoCleanUp.md)
 - [Api.DbTenant](docs/DbTenant.md)
 - [Api.DbTenantPartner](docs/DbTenantPartner.md)
 - [Api.DeepLinkConfigurationRequestsDto](docs/DeepLinkConfigurationRequestsDto.md)
 - [Api.DeepLinkDto](docs/DeepLinkDto.md)
 - [Api.DeepLinkHandlingMode](docs/DeepLinkHandlingMode.md)
 - [Api.Delete](docs/Delete.md)
 - [Api.DeleteBatchRequestDto](docs/DeleteBatchRequestDto.md)
 - [Api.DeleteFolder](docs/DeleteFolder.md)
 - [Api.DeleteRoomRequest](docs/DeleteRoomRequest.md)
 - [Api.DeleteVersionBatchRequestDto](docs/DeleteVersionBatchRequestDto.md)
 - [Api.DisplayRequestDto](docs/DisplayRequestDto.md)
 - [Api.DistributedTaskStatus](docs/DistributedTaskStatus.md)
 - [Api.DnsSettingsRequestsDto](docs/DnsSettingsRequestsDto.md)
 - [Api.DocServiceUrlDto](docs/DocServiceUrlDto.md)
 - [Api.DocServiceUrlWrapper](docs/DocServiceUrlWrapper.md)
 - [Api.DocumentBuilderTaskDto](docs/DocumentBuilderTaskDto.md)
 - [Api.DocumentBuilderTaskWrapper](docs/DocumentBuilderTaskWrapper.md)
 - [Api.DocumentConfigDto](docs/DocumentConfigDto.md)
 - [Api.DoubleWrapper](docs/DoubleWrapper.md)
 - [Api.DownloadRequestDto](docs/DownloadRequestDto.md)
 - [Api.DownloadRequestItemDto](docs/DownloadRequestItemDto.md)
 - [Api.DownloadRequestItemDtoKey](docs/DownloadRequestItemDtoKey.md)
 - [Api.DraftLocationInteger](docs/DraftLocationInteger.md)
 - [Api.DuplicateRequestDto](docs/DuplicateRequestDto.md)
 - [Api.EditHistoryArrayWrapper](docs/EditHistoryArrayWrapper.md)
 - [Api.EditHistoryAuthor](docs/EditHistoryAuthor.md)
 - [Api.EditHistoryChangesWrapper](docs/EditHistoryChangesWrapper.md)
 - [Api.EditHistoryDataDto](docs/EditHistoryDataDto.md)
 - [Api.EditHistoryDataWrapper](docs/EditHistoryDataWrapper.md)
 - [Api.EditHistoryDto](docs/EditHistoryDto.md)
 - [Api.EditHistoryUrl](docs/EditHistoryUrl.md)
 - [Api.EditorConfigurationDto](docs/EditorConfigurationDto.md)
 - [Api.EditorType](docs/EditorType.md)
 - [Api.EmailActivationSettings](docs/EmailActivationSettings.md)
 - [Api.EmailActivationSettingsWrapper](docs/EmailActivationSettingsWrapper.md)
 - [Api.EmailMemberRequestDto](docs/EmailMemberRequestDto.md)
 - [Api.EmailValidationKeyModel](docs/EmailValidationKeyModel.md)
 - [Api.EmbeddedConfig](docs/EmbeddedConfig.md)
 - [Api.EmployeeActivationStatus](docs/EmployeeActivationStatus.md)
 - [Api.EmployeeArrayWrapper](docs/EmployeeArrayWrapper.md)
 - [Api.EmployeeDto](docs/EmployeeDto.md)
 - [Api.EmployeeFullArrayWrapper](docs/EmployeeFullArrayWrapper.md)
 - [Api.EmployeeFullDto](docs/EmployeeFullDto.md)
 - [Api.EmployeeFullWrapper](docs/EmployeeFullWrapper.md)
 - [Api.EmployeeStatus](docs/EmployeeStatus.md)
 - [Api.EmployeeType](docs/EmployeeType.md)
 - [Api.EncryprtionStatus](docs/EncryprtionStatus.md)
 - [Api.EncryptionKeysConfig](docs/EncryptionKeysConfig.md)
 - [Api.EncryptionSettings](docs/EncryptionSettings.md)
 - [Api.EncryptionSettingsWrapper](docs/EncryptionSettingsWrapper.md)
 - [Api.EntryType](docs/EntryType.md)
 - [Api.ErrorResponse](docs/ErrorResponse.md)
 - [Api.ExchangeToken200Response](docs/ExchangeToken200Response.md)
 - [Api.ExternalShareDto](docs/ExternalShareDto.md)
 - [Api.ExternalShareRequestParam](docs/ExternalShareRequestParam.md)
 - [Api.ExternalShareWrapper](docs/ExternalShareWrapper.md)
 - [Api.FeatureUsedDto](docs/FeatureUsedDto.md)
 - [Api.FeedbackConfig](docs/FeedbackConfig.md)
 - [Api.FileConflictResolveType](docs/FileConflictResolveType.md)
 - [Api.FileDtoInteger](docs/FileDtoInteger.md)
 - [Api.FileDtoIntegerSecurity](docs/FileDtoIntegerSecurity.md)
 - [Api.FileDtoIntegerViewAccessibility](docs/FileDtoIntegerViewAccessibility.md)
 - [Api.FileEntryArrayWrapper](docs/FileEntryArrayWrapper.md)
 - [Api.FileEntryDto](docs/FileEntryDto.md)
 - [Api.FileEntryType](docs/FileEntryType.md)
 - [Api.FileEntryWrapper](docs/FileEntryWrapper.md)
 - [Api.FileIntegerArrayWrapper](docs/FileIntegerArrayWrapper.md)
 - [Api.FileIntegerWrapper](docs/FileIntegerWrapper.md)
 - [Api.FileLink](docs/FileLink.md)
 - [Api.FileLinkRequest](docs/FileLinkRequest.md)
 - [Api.FileLinkWrapper](docs/FileLinkWrapper.md)
 - [Api.FileOperationArrayWrapper](docs/FileOperationArrayWrapper.md)
 - [Api.FileOperationDto](docs/FileOperationDto.md)
 - [Api.FileOperationType](docs/FileOperationType.md)
 - [Api.FileOperationWrapper](docs/FileOperationWrapper.md)
 - [Api.FileReference](docs/FileReference.md)
 - [Api.FileReferenceData](docs/FileReferenceData.md)
 - [Api.FileReferenceWrapper](docs/FileReferenceWrapper.md)
 - [Api.FileShare](docs/FileShare.md)
 - [Api.FileShareArrayWrapper](docs/FileShareArrayWrapper.md)
 - [Api.FileShareDto](docs/FileShareDto.md)
 - [Api.FileShareParams](docs/FileShareParams.md)
 - [Api.FileShareWrapper](docs/FileShareWrapper.md)
 - [Api.FileStatus](docs/FileStatus.md)
 - [Api.FileType](docs/FileType.md)
 - [Api.FileUploadResultDto](docs/FileUploadResultDto.md)
 - [Api.FileUploadResultWrapper](docs/FileUploadResultWrapper.md)
 - [Api.FilesSettingsDto](docs/FilesSettingsDto.md)
 - [Api.FilesSettingsDtoInternalFormats](docs/FilesSettingsDtoInternalFormats.md)
 - [Api.FilesSettingsWrapper](docs/FilesSettingsWrapper.md)
 - [Api.FilesStatisticsFolder](docs/FilesStatisticsFolder.md)
 - [Api.FilesStatisticsResultDto](docs/FilesStatisticsResultDto.md)
 - [Api.FilesStatisticsResultWrapper](docs/FilesStatisticsResultWrapper.md)
 - [Api.FillingFormResultDtoInteger](docs/FillingFormResultDtoInteger.md)
 - [Api.FillingFormResultIntegerWrapper](docs/FillingFormResultIntegerWrapper.md)
 - [Api.FilterType](docs/FilterType.md)
 - [Api.FinishDto](docs/FinishDto.md)
 - [Api.FireBaseUser](docs/FireBaseUser.md)
 - [Api.FireBaseUserWrapper](docs/FireBaseUserWrapper.md)
 - [Api.FirebaseDto](docs/FirebaseDto.md)
 - [Api.FirebaseRequestsDto](docs/FirebaseRequestsDto.md)
 - [Api.FolderContentDtoInteger](docs/FolderContentDtoInteger.md)
 - [Api.FolderContentIntegerArrayWrapper](docs/FolderContentIntegerArrayWrapper.md)
 - [Api.FolderContentIntegerWrapper](docs/FolderContentIntegerWrapper.md)
 - [Api.FolderDtoInteger](docs/FolderDtoInteger.md)
 - [Api.FolderDtoString](docs/FolderDtoString.md)
 - [Api.FolderIntegerArrayWrapper](docs/FolderIntegerArrayWrapper.md)
 - [Api.FolderIntegerWrapper](docs/FolderIntegerWrapper.md)
 - [Api.FolderStringArrayWrapper](docs/FolderStringArrayWrapper.md)
 - [Api.FolderStringWrapper](docs/FolderStringWrapper.md)
 - [Api.FolderType](docs/FolderType.md)
 - [Api.FormFillingManageAction](docs/FormFillingManageAction.md)
 - [Api.FormFillingStatus](docs/FormFillingStatus.md)
 - [Api.FormGalleryDto](docs/FormGalleryDto.md)
 - [Api.FormRole](docs/FormRole.md)
 - [Api.FormRoleArrayWrapper](docs/FormRoleArrayWrapper.md)
 - [Api.FormRoleWrapper](docs/FormRoleWrapper.md)
 - [Api.FormsItemArrayWrapper](docs/FormsItemArrayWrapper.md)
 - [Api.FormsItemDto](docs/FormsItemDto.md)
 - [Api.GetReferenceDataDtoInteger](docs/GetReferenceDataDtoInteger.md)
 - [Api.GobackConfig](docs/GobackConfig.md)
 - [Api.GreetingSettingsRequestsDto](docs/GreetingSettingsRequestsDto.md)
 - [Api.GroupArrayWrapper](docs/GroupArrayWrapper.md)
 - [Api.GroupDto](docs/GroupDto.md)
 - [Api.GroupRequestDto](docs/GroupRequestDto.md)
 - [Api.GroupSummaryArrayWrapper](docs/GroupSummaryArrayWrapper.md)
 - [Api.GroupSummaryDto](docs/GroupSummaryDto.md)
 - [Api.GroupWrapper](docs/GroupWrapper.md)
 - [Api.HideConfirmConvertRequestDto](docs/HideConfirmConvertRequestDto.md)
 - [Api.HistoryAction](docs/HistoryAction.md)
 - [Api.HistoryArrayWrapper](docs/HistoryArrayWrapper.md)
 - [Api.HistoryData](docs/HistoryData.md)
 - [Api.HistoryDto](docs/HistoryDto.md)
 - [Api.ICompressWrapper](docs/ICompressWrapper.md)
 - [Api.IMagickGeometry](docs/IMagickGeometry.md)
 - [Api.IPRestriction](docs/IPRestriction.md)
 - [Api.IPRestrictionArrayWrapper](docs/IPRestrictionArrayWrapper.md)
 - [Api.IPRestrictionsSettings](docs/IPRestrictionsSettings.md)
 - [Api.IPRestrictionsSettingsWrapper](docs/IPRestrictionsSettingsWrapper.md)
 - [Api.InfoConfigDto](docs/InfoConfigDto.md)
 - [Api.Int64Wrapper](docs/Int64Wrapper.md)
 - [Api.InviteUsersRequestDto](docs/InviteUsersRequestDto.md)
 - [Api.IpRestrictionBase](docs/IpRestrictionBase.md)
 - [Api.IpRestrictionsDto](docs/IpRestrictionsDto.md)
 - [Api.IpRestrictionsWrapper](docs/IpRestrictionsWrapper.md)
 - [Api.IsDefaultWhiteLabelLogosArrayWrapper](docs/IsDefaultWhiteLabelLogosArrayWrapper.md)
 - [Api.IsDefaultWhiteLabelLogosDto](docs/IsDefaultWhiteLabelLogosDto.md)
 - [Api.IsDefaultWhiteLabelLogosWrapper](docs/IsDefaultWhiteLabelLogosWrapper.md)
 - [Api.ItemKeyValuePairObjectObject](docs/ItemKeyValuePairObjectObject.md)
 - [Api.ItemKeyValuePairStringBoolean](docs/ItemKeyValuePairStringBoolean.md)
 - [Api.ItemKeyValuePairStringLogoRequestsDto](docs/ItemKeyValuePairStringLogoRequestsDto.md)
 - [Api.ItemKeyValuePairStringString](docs/ItemKeyValuePairStringString.md)
 - [Api.KeyValuePairBooleanString](docs/KeyValuePairBooleanString.md)
 - [Api.KeyValuePairBooleanStringWrapper](docs/KeyValuePairBooleanStringWrapper.md)
 - [Api.KeyValuePairStringStringValues](docs/KeyValuePairStringStringValues.md)
 - [Api.LinkAccountRequestDto](docs/LinkAccountRequestDto.md)
 - [Api.LinkType](docs/LinkType.md)
 - [Api.LockFileParameters](docs/LockFileParameters.md)
 - [Api.LoginEventArrayWrapper](docs/LoginEventArrayWrapper.md)
 - [Api.LoginEventDto](docs/LoginEventDto.md)
 - [Api.LoginProvider](docs/LoginProvider.md)
 - [Api.LoginSettingsDto](docs/LoginSettingsDto.md)
 - [Api.LoginSettingsRequestDto](docs/LoginSettingsRequestDto.md)
 - [Api.LoginSettingsWrapper](docs/LoginSettingsWrapper.md)
 - [Api.Logo](docs/Logo.md)
 - [Api.LogoConfigDto](docs/LogoConfigDto.md)
 - [Api.LogoCover](docs/LogoCover.md)
 - [Api.LogoRequest](docs/LogoRequest.md)
 - [Api.LogoRequestsDto](docs/LogoRequestsDto.md)
 - [Api.MailDomainSettingsRequestsDto](docs/MailDomainSettingsRequestsDto.md)
 - [Api.ManageFormFillingDtoInteger](docs/ManageFormFillingDtoInteger.md)
 - [Api.MemberBaseRequestDto](docs/MemberBaseRequestDto.md)
 - [Api.MemberRequestDto](docs/MemberRequestDto.md)
 - [Api.MembersRequest](docs/MembersRequest.md)
 - [Api.MentionMessageWrapper](docs/MentionMessageWrapper.md)
 - [Api.MentionWrapper](docs/MentionWrapper.md)
 - [Api.MentionWrapperArrayWrapper](docs/MentionWrapperArrayWrapper.md)
 - [Api.MessageAction](docs/MessageAction.md)
 - [Api.MigratingApiFiles](docs/MigratingApiFiles.md)
 - [Api.MigratingApiGroup](docs/MigratingApiGroup.md)
 - [Api.MigratingApiUser](docs/MigratingApiUser.md)
 - [Api.MigrationApiInfo](docs/MigrationApiInfo.md)
 - [Api.MigrationStatusDto](docs/MigrationStatusDto.md)
 - [Api.MigrationStatusWrapper](docs/MigrationStatusWrapper.md)
 - [Api.MobilePhoneActivationStatus](docs/MobilePhoneActivationStatus.md)
 - [Api.MobileRequestsDto](docs/MobileRequestsDto.md)
 - [Api.Module](docs/Module.md)
 - [Api.ModuleType](docs/ModuleType.md)
 - [Api.ModuleWrapper](docs/ModuleWrapper.md)
 - [Api.NewItemsDtoFileEntryDto](docs/NewItemsDtoFileEntryDto.md)
 - [Api.NewItemsDtoRoomNewItemsDto](docs/NewItemsDtoRoomNewItemsDto.md)
 - [Api.NewItemsFileEntryArrayWrapper](docs/NewItemsFileEntryArrayWrapper.md)
 - [Api.NewItemsRoomNewItemsArrayWrapper](docs/NewItemsRoomNewItemsArrayWrapper.md)
 - [Api.NoContentResult](docs/NoContentResult.md)
 - [Api.NoContentResultWrapper](docs/NoContentResultWrapper.md)
 - [Api.NotificationSettingsDto](docs/NotificationSettingsDto.md)
 - [Api.NotificationSettingsRequestsDto](docs/NotificationSettingsRequestsDto.md)
 - [Api.NotificationSettingsWrapper](docs/NotificationSettingsWrapper.md)
 - [Api.NotificationType](docs/NotificationType.md)
 - [Api.OAuth20Token](docs/OAuth20Token.md)
 - [Api.ObjectArrayWrapper](docs/ObjectArrayWrapper.md)
 - [Api.ObjectWrapper](docs/ObjectWrapper.md)
 - [Api.OperationDto](docs/OperationDto.md)
 - [Api.Options](docs/Options.md)
 - [Api.OrderBy](docs/OrderBy.md)
 - [Api.OrderRequestDto](docs/OrderRequestDto.md)
 - [Api.OrdersItemRequestDtoInteger](docs/OrdersItemRequestDtoInteger.md)
 - [Api.OrdersRequestDtoInteger](docs/OrdersRequestDtoInteger.md)
 - [Api.OwnerChangeInstructionsDto](docs/OwnerChangeInstructionsDto.md)
 - [Api.OwnerChangeInstructionsWrapper](docs/OwnerChangeInstructionsWrapper.md)
 - [Api.OwnerIdSettingsRequestDto](docs/OwnerIdSettingsRequestDto.md)
 - [Api.PageableModificationResponse](docs/PageableModificationResponse.md)
 - [Api.PageableResponse](docs/PageableResponse.md)
 - [Api.PageableResponseClientInfoResponse](docs/PageableResponseClientInfoResponse.md)
 - [Api.Paragraph](docs/Paragraph.md)
 - [Api.PasswordHasher](docs/PasswordHasher.md)
 - [Api.PasswordSettingsDto](docs/PasswordSettingsDto.md)
 - [Api.PasswordSettingsRequestsDto](docs/PasswordSettingsRequestsDto.md)
 - [Api.PasswordSettingsWrapper](docs/PasswordSettingsWrapper.md)
 - [Api.PaymentCalculation](docs/PaymentCalculation.md)
 - [Api.PaymentCalculationWrapper](docs/PaymentCalculationWrapper.md)
 - [Api.PaymentMethodStatus](docs/PaymentMethodStatus.md)
 - [Api.PaymentSettingsDto](docs/PaymentSettingsDto.md)
 - [Api.PaymentSettingsWrapper](docs/PaymentSettingsWrapper.md)
 - [Api.PaymentUrlRequestsDto](docs/PaymentUrlRequestsDto.md)
 - [Api.Payments](docs/Payments.md)
 - [Api.PermissionsConfig](docs/PermissionsConfig.md)
 - [Api.PluginsConfig](docs/PluginsConfig.md)
 - [Api.PluginsDto](docs/PluginsDto.md)
 - [Api.PriceDto](docs/PriceDto.md)
 - [Api.ProductAdministratorDto](docs/ProductAdministratorDto.md)
 - [Api.ProductAdministratorWrapper](docs/ProductAdministratorWrapper.md)
 - [Api.ProductQuantityType](docs/ProductQuantityType.md)
 - [Api.ProductType](docs/ProductType.md)
 - [Api.ProviderArrayWrapper](docs/ProviderArrayWrapper.md)
 - [Api.ProviderDto](docs/ProviderDto.md)
 - [Api.ProviderFilter](docs/ProviderFilter.md)
 - [Api.QuantityRequestDto](docs/QuantityRequestDto.md)
 - [Api.Quota](docs/Quota.md)
 - [Api.QuotaArrayWrapper](docs/QuotaArrayWrapper.md)
 - [Api.QuotaDto](docs/QuotaDto.md)
 - [Api.QuotaFilter](docs/QuotaFilter.md)
 - [Api.QuotaSettingsRequestsDto](docs/QuotaSettingsRequestsDto.md)
 - [Api.QuotaSettingsRequestsDtoDefaultQuota](docs/QuotaSettingsRequestsDtoDefaultQuota.md)
 - [Api.QuotaState](docs/QuotaState.md)
 - [Api.QuotaWrapper](docs/QuotaWrapper.md)
 - [Api.RecaptchaType](docs/RecaptchaType.md)
 - [Api.RecentConfig](docs/RecentConfig.md)
 - [Api.ReportDto](docs/ReportDto.md)
 - [Api.ReportWrapper](docs/ReportWrapper.md)
 - [Api.ReviewConfig](docs/ReviewConfig.md)
 - [Api.RoomDataLifetimeDto](docs/RoomDataLifetimeDto.md)
 - [Api.RoomDataLifetimePeriod](docs/RoomDataLifetimePeriod.md)
 - [Api.RoomFromTemplateStatusDto](docs/RoomFromTemplateStatusDto.md)
 - [Api.RoomFromTemplateStatusWrapper](docs/RoomFromTemplateStatusWrapper.md)
 - [Api.RoomInvitation](docs/RoomInvitation.md)
 - [Api.RoomInvitationRequest](docs/RoomInvitationRequest.md)
 - [Api.RoomLinkRequest](docs/RoomLinkRequest.md)
 - [Api.RoomNewItemsDto](docs/RoomNewItemsDto.md)
 - [Api.RoomSecurityDto](docs/RoomSecurityDto.md)
 - [Api.RoomSecurityError](docs/RoomSecurityError.md)
 - [Api.RoomSecurityWrapper](docs/RoomSecurityWrapper.md)
 - [Api.RoomTemplateDto](docs/RoomTemplateDto.md)
 - [Api.RoomTemplateStatusDto](docs/RoomTemplateStatusDto.md)
 - [Api.RoomTemplateStatusWrapper](docs/RoomTemplateStatusWrapper.md)
 - [Api.RoomType](docs/RoomType.md)
 - [Api.RoomsNotificationSettingsDto](docs/RoomsNotificationSettingsDto.md)
 - [Api.RoomsNotificationSettingsWrapper](docs/RoomsNotificationSettingsWrapper.md)
 - [Api.RoomsNotificationsSettingsRequestDto](docs/RoomsNotificationsSettingsRequestDto.md)
 - [Api.Run](docs/Run.md)
 - [Api.STRINGArrayWrapper](docs/STRINGArrayWrapper.md)
 - [Api.SalesRequestsDto](docs/SalesRequestsDto.md)
 - [Api.SaveAsPdfInteger](docs/SaveAsPdfInteger.md)
 - [Api.SaveFormRoleMappingDtoInteger](docs/SaveFormRoleMappingDtoInteger.md)
 - [Api.Schedule](docs/Schedule.md)
 - [Api.ScheduleWrapper](docs/ScheduleWrapper.md)
 - [Api.ScopeResponse](docs/ScopeResponse.md)
 - [Api.SearchArea](docs/SearchArea.md)
 - [Api.SecurityArrayWrapper](docs/SecurityArrayWrapper.md)
 - [Api.SecurityDto](docs/SecurityDto.md)
 - [Api.SecurityRequestsDto](docs/SecurityRequestsDto.md)
 - [Api.SessionRequest](docs/SessionRequest.md)
 - [Api.SetManagerRequest](docs/SetManagerRequest.md)
 - [Api.SetPublicDto](docs/SetPublicDto.md)
 - [Api.SettingsDto](docs/SettingsDto.md)
 - [Api.SettingsRequestDto](docs/SettingsRequestDto.md)
 - [Api.SettingsWrapper](docs/SettingsWrapper.md)
 - [Api.SetupCode](docs/SetupCode.md)
 - [Api.SetupCodeWrapper](docs/SetupCodeWrapper.md)
 - [Api.SexEnum](docs/SexEnum.md)
 - [Api.ShareFilterType](docs/ShareFilterType.md)
 - [Api.SignupAccountRequestDto](docs/SignupAccountRequestDto.md)
 - [Api.SmtpOperationStatusRequestsDto](docs/SmtpOperationStatusRequestsDto.md)
 - [Api.SmtpOperationStatusRequestsWrapper](docs/SmtpOperationStatusRequestsWrapper.md)
 - [Api.SmtpSettingsDto](docs/SmtpSettingsDto.md)
 - [Api.SmtpSettingsWrapper](docs/SmtpSettingsWrapper.md)
 - [Api.SortOrder](docs/SortOrder.md)
 - [Api.SortedByType](docs/SortedByType.md)
 - [Api.SsoCertificate](docs/SsoCertificate.md)
 - [Api.SsoFieldMapping](docs/SsoFieldMapping.md)
 - [Api.SsoIdpCertificateAdvanced](docs/SsoIdpCertificateAdvanced.md)
 - [Api.SsoIdpSettings](docs/SsoIdpSettings.md)
 - [Api.SsoSettingsRequestsDto](docs/SsoSettingsRequestsDto.md)
 - [Api.SsoSettingsV2](docs/SsoSettingsV2.md)
 - [Api.SsoSettingsV2Wrapper](docs/SsoSettingsV2Wrapper.md)
 - [Api.SsoSpCertificateAdvanced](docs/SsoSpCertificateAdvanced.md)
 - [Api.StartEdit](docs/StartEdit.md)
 - [Api.StartFillingForm](docs/StartFillingForm.md)
 - [Api.StartFillingMode](docs/StartFillingMode.md)
 - [Api.StartReassignRequestDto](docs/StartReassignRequestDto.md)
 - [Api.StartUpdateUserTypeDto](docs/StartUpdateUserTypeDto.md)
 - [Api.Status](docs/Status.md)
 - [Api.StorageArrayWrapper](docs/StorageArrayWrapper.md)
 - [Api.StorageDto](docs/StorageDto.md)
 - [Api.StorageEncryptionRequestsDto](docs/StorageEncryptionRequestsDto.md)
 - [Api.StorageFilter](docs/StorageFilter.md)
 - [Api.StorageRequestsDto](docs/StorageRequestsDto.md)
 - [Api.StorageSettings](docs/StorageSettings.md)
 - [Api.StorageSettingsWrapper](docs/StorageSettingsWrapper.md)
 - [Api.StringWrapper](docs/StringWrapper.md)
 - [Api.SubAccount](docs/SubAccount.md)
 - [Api.SubjectFilter](docs/SubjectFilter.md)
 - [Api.SubjectType](docs/SubjectType.md)
 - [Api.SubmitForm](docs/SubmitForm.md)
 - [Api.Tariff](docs/Tariff.md)
 - [Api.TariffState](docs/TariffState.md)
 - [Api.TariffWrapper](docs/TariffWrapper.md)
 - [Api.TaskProgressResponseDto](docs/TaskProgressResponseDto.md)
 - [Api.TaskProgressResponseWrapper](docs/TaskProgressResponseWrapper.md)
 - [Api.TemplatesConfig](docs/TemplatesConfig.md)
 - [Api.TemplatesRequestDto](docs/TemplatesRequestDto.md)
 - [Api.TenantAuditSettings](docs/TenantAuditSettings.md)
 - [Api.TenantAuditSettingsWrapper](docs/TenantAuditSettingsWrapper.md)
 - [Api.TenantBannerSettings](docs/TenantBannerSettings.md)
 - [Api.TenantBannerSettingsDto](docs/TenantBannerSettingsDto.md)
 - [Api.TenantBannerSettingsWrapper](docs/TenantBannerSettingsWrapper.md)
 - [Api.TenantDeepLinkSettings](docs/TenantDeepLinkSettings.md)
 - [Api.TenantDeepLinkSettingsWrapper](docs/TenantDeepLinkSettingsWrapper.md)
 - [Api.TenantDevToolsAccessSettings](docs/TenantDevToolsAccessSettings.md)
 - [Api.TenantDevToolsAccessSettingsDto](docs/TenantDevToolsAccessSettingsDto.md)
 - [Api.TenantDevToolsAccessSettingsWrapper](docs/TenantDevToolsAccessSettingsWrapper.md)
 - [Api.TenantDomainValidator](docs/TenantDomainValidator.md)
 - [Api.TenantDto](docs/TenantDto.md)
 - [Api.TenantEntityQuotaSettings](docs/TenantEntityQuotaSettings.md)
 - [Api.TenantIndustry](docs/TenantIndustry.md)
 - [Api.TenantQuota](docs/TenantQuota.md)
 - [Api.TenantQuotaFeatureDto](docs/TenantQuotaFeatureDto.md)
 - [Api.TenantQuotaSettings](docs/TenantQuotaSettings.md)
 - [Api.TenantQuotaSettingsRequestsDto](docs/TenantQuotaSettingsRequestsDto.md)
 - [Api.TenantQuotaSettingsWrapper](docs/TenantQuotaSettingsWrapper.md)
 - [Api.TenantQuotaWrapper](docs/TenantQuotaWrapper.md)
 - [Api.TenantRoomQuotaSettings](docs/TenantRoomQuotaSettings.md)
 - [Api.TenantRoomQuotaSettingsWrapper](docs/TenantRoomQuotaSettingsWrapper.md)
 - [Api.TenantStatus](docs/TenantStatus.md)
 - [Api.TenantTrustedDomainsType](docs/TenantTrustedDomainsType.md)
 - [Api.TenantUserInvitationSettingsDto](docs/TenantUserInvitationSettingsDto.md)
 - [Api.TenantUserInvitationSettingsRequestDto](docs/TenantUserInvitationSettingsRequestDto.md)
 - [Api.TenantUserInvitationSettingsWrapper](docs/TenantUserInvitationSettingsWrapper.md)
 - [Api.TenantUserQuotaSettings](docs/TenantUserQuotaSettings.md)
 - [Api.TenantUserQuotaSettingsWrapper](docs/TenantUserQuotaSettingsWrapper.md)
 - [Api.TenantWalletSettings](docs/TenantWalletSettings.md)
 - [Api.TenantWalletSettingsWrapper](docs/TenantWalletSettingsWrapper.md)
 - [Api.TenantWrapper](docs/TenantWrapper.md)
 - [Api.TerminateRequestDto](docs/TerminateRequestDto.md)
 - [Api.TfaRequestsDto](docs/TfaRequestsDto.md)
 - [Api.TfaRequestsDtoType](docs/TfaRequestsDtoType.md)
 - [Api.TfaSettingsArrayWrapper](docs/TfaSettingsArrayWrapper.md)
 - [Api.TfaSettingsDto](docs/TfaSettingsDto.md)
 - [Api.TfaValidateRequestsDto](docs/TfaValidateRequestsDto.md)
 - [Api.ThirdPartyBackupRequestDto](docs/ThirdPartyBackupRequestDto.md)
 - [Api.ThirdPartyParams](docs/ThirdPartyParams.md)
 - [Api.ThirdPartyParamsArrayWrapper](docs/ThirdPartyParamsArrayWrapper.md)
 - [Api.ThirdPartyRequestDto](docs/ThirdPartyRequestDto.md)
 - [Api.Thumbnail](docs/Thumbnail.md)
 - [Api.ThumbnailsDataDto](docs/ThumbnailsDataDto.md)
 - [Api.ThumbnailsDataWrapper](docs/ThumbnailsDataWrapper.md)
 - [Api.ThumbnailsRequest](docs/ThumbnailsRequest.md)
 - [Api.TimezonesRequestsArrayWrapper](docs/TimezonesRequestsArrayWrapper.md)
 - [Api.TimezonesRequestsDto](docs/TimezonesRequestsDto.md)
 - [Api.TopUpDepositRequestDto](docs/TopUpDepositRequestDto.md)
 - [Api.TurnOnAdminMessageSettingsRequestDto](docs/TurnOnAdminMessageSettingsRequestDto.md)
 - [Api.UnknownWrapper](docs/UnknownWrapper.md)
 - [Api.UpdateApiKeyRequest](docs/UpdateApiKeyRequest.md)
 - [Api.UpdateClientRequest](docs/UpdateClientRequest.md)
 - [Api.UpdateComment](docs/UpdateComment.md)
 - [Api.UpdateFile](docs/UpdateFile.md)
 - [Api.UpdateGroupRequest](docs/UpdateGroupRequest.md)
 - [Api.UpdateMemberRequestDto](docs/UpdateMemberRequestDto.md)
 - [Api.UpdateMembersQuotaRequestDto](docs/UpdateMembersQuotaRequestDto.md)
 - [Api.UpdateMembersQuotaRequestDtoQuota](docs/UpdateMembersQuotaRequestDtoQuota.md)
 - [Api.UpdateMembersRequestDto](docs/UpdateMembersRequestDto.md)
 - [Api.UpdatePhotoMemberRequest](docs/UpdatePhotoMemberRequest.md)
 - [Api.UpdateRoomRequest](docs/UpdateRoomRequest.md)
 - [Api.UpdateRoomsQuotaRequestDtoInteger](docs/UpdateRoomsQuotaRequestDtoInteger.md)
 - [Api.UpdateRoomsRoomIdsRequestDtoInteger](docs/UpdateRoomsRoomIdsRequestDtoInteger.md)
 - [Api.UpdateWebhooksConfigRequestsDto](docs/UpdateWebhooksConfigRequestsDto.md)
 - [Api.UploadRequestDto](docs/UploadRequestDto.md)
 - [Api.UploadResultDto](docs/UploadResultDto.md)
 - [Api.UploadResultWrapper](docs/UploadResultWrapper.md)
 - [Api.UsageSpaceStatItemArrayWrapper](docs/UsageSpaceStatItemArrayWrapper.md)
 - [Api.UsageSpaceStatItemDto](docs/UsageSpaceStatItemDto.md)
 - [Api.UserConfig](docs/UserConfig.md)
 - [Api.UserInfo](docs/UserInfo.md)
 - [Api.UserInfoWrapper](docs/UserInfoWrapper.md)
 - [Api.UserInvitation](docs/UserInvitation.md)
 - [Api.UserInvitationRequestDto](docs/UserInvitationRequestDto.md)
 - [Api.ValidationResult](docs/ValidationResult.md)
 - [Api.WalletQuantityRequestDto](docs/WalletQuantityRequestDto.md)
 - [Api.WatermarkAdditions](docs/WatermarkAdditions.md)
 - [Api.WatermarkDto](docs/WatermarkDto.md)
 - [Api.WatermarkOnDraw](docs/WatermarkOnDraw.md)
 - [Api.WatermarkRequestDto](docs/WatermarkRequestDto.md)
 - [Api.WebItemSecurityRequestsDto](docs/WebItemSecurityRequestsDto.md)
 - [Api.WebItemsSecurityRequestsDto](docs/WebItemsSecurityRequestsDto.md)
 - [Api.WebPluginArrayWrapper](docs/WebPluginArrayWrapper.md)
 - [Api.WebPluginDto](docs/WebPluginDto.md)
 - [Api.WebPluginRequests](docs/WebPluginRequests.md)
 - [Api.WebPluginWrapper](docs/WebPluginWrapper.md)
 - [Api.WebhookGroupStatus](docs/WebhookGroupStatus.md)
 - [Api.WebhookRetryRequestsDto](docs/WebhookRetryRequestsDto.md)
 - [Api.WebhookTrigger](docs/WebhookTrigger.md)
 - [Api.WebhooksConfigDto](docs/WebhooksConfigDto.md)
 - [Api.WebhooksConfigWithStatusArrayWrapper](docs/WebhooksConfigWithStatusArrayWrapper.md)
 - [Api.WebhooksConfigWithStatusDto](docs/WebhooksConfigWithStatusDto.md)
 - [Api.WebhooksConfigWrapper](docs/WebhooksConfigWrapper.md)
 - [Api.WebhooksLogArrayWrapper](docs/WebhooksLogArrayWrapper.md)
 - [Api.WebhooksLogDto](docs/WebhooksLogDto.md)
 - [Api.WebhooksLogWrapper](docs/WebhooksLogWrapper.md)
 - [Api.WhiteLabelItemArrayWrapper](docs/WhiteLabelItemArrayWrapper.md)
 - [Api.WhiteLabelItemDto](docs/WhiteLabelItemDto.md)
 - [Api.WhiteLabelItemPathDto](docs/WhiteLabelItemPathDto.md)
 - [Api.WhiteLabelRequestsDto](docs/WhiteLabelRequestsDto.md)
 - [Api.WizardRequestsDto](docs/WizardRequestsDto.md)
 - [Api.WizardSettings](docs/WizardSettings.md)
 - [Api.WizardSettingsWrapper](docs/WizardSettingsWrapper.md)

</details>
