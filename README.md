[RU](README.md) | [EN](README.en.md)

# @maticonoffice/docspace-api-sdk

SDK Maticon Office DocSpace для JavaScript — библиотека с инструментами для интеграции возможностей DocSpace в приложения и управления ими. Она упрощает взаимодействие с TypeScript API DocSpace с помощью готовых методов и моделей.

- Версия API: 3.2.0
- Версия SDK: 1.0.0

Дополнительная информация доступна по адресу [https://support.maticonoffice.ru/hc/en-us](https://support.maticonoffice.ru/hc/en-us).

## Установка

### Использование с [Node.js](https://nodejs.org/)

#### npm

Чтобы опубликовать библиотеку как пакет [npm](https://www.npmjs.com/), следуйте [инструкции по публикации пакетов](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Чтобы установить пакет, выполните:

```shell
npm install @maticonoffice/docspace-api-sdk --save
```

Затем соберите модуль:

```shell
npm run build
```

##### Локальная разработка

Чтобы использовать библиотеку локально без публикации в удалённом реестре npm:

1. Перейдите в каталог с `package.json` и этим файлом `README.md`. Далее этот путь обозначается как `JAVASCRIPT_CLIENT_DIR`.

2. Установите зависимости:

```shell
npm install
```

3. Зарегистрируйте глобальную ссылку на пакет:

```shell
npm link
```

4. Перейдите в каталог проекта, в котором будет использоваться `@maticonoffice/docspace-api-sdk`.

5. Подключите зарегистрированную ссылку к проекту:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

6. Соберите модуль:

```shell
npm run build
```

#### Git

Если библиотека размещена в Git-репозитории, например https://github.com/MaticonOffice/docspace-api-sdk-javascript, её можно установить напрямую:

```shell
    npm install git+https://github.com/MaticonOffice/docspace-api-sdk-javascript.git
```

### Использование в браузере

Библиотека также работает в браузере через npm и [Browserify](http://browserify.org/):

1. Выполните инструкции из раздела [«Использование с Node.js»](https://nodejs.org/en).

2. Установите Browserify:

```shell
npm install -g browserify
```

3. Если точкой входа служит `main.js`, соберите код в пакет:

```shell
browserify main.js > bundle.js
```

4. Подключите `bundle.js` на HTML-страницах.

### Настройка Webpack

При использовании Webpack может возникнуть ошибка `Module not found: Error: Cannot resolve module`. В этом случае следует отключить загрузчик AMD. Добавьте следующий раздел в конфигурацию Webpack или объедините его с существующим:

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

## Документация по авторизации


Схемы аутентификации, определённые для API:
<a id="asc_auth_key"></a>
### asc_auth_key


- **Тип**: API-ключ
- **Имя параметра API-ключа**: asc_auth_key
- **Расположение**: Cookie

<a id="Basic"></a>
### Basic

- **Тип**: базовая HTTP-аутентификация

<a id="Bearer"></a>
### Bearer

- **Тип**: Bearer-аутентификация (JWT)

<a id="ApiKeyBearer"></a>
### ApiKeyBearer


- **Тип**: API-ключ
- **Имя параметра API-ключа**: ApiKeyBearer
- **Расположение**: HTTP-заголовок

<a id="OAuth2"></a>
### OAuth2

- **Тип**: OAuth
- **Поток**: accessCode
- **URL авторизации**: {{authBaseUrl}}/oauth2/authorize
- **URL токена**: {{authBaseUrl}}/oauth2/token
- **Области доступа**:
  - read: доступ к защищённым ресурсам для чтения
  - write: доступ к защищённым ресурсам для записи

<a id="OpenId"></a>
### OpenId

- **Тип**: OpenID Connect
- **URL OpenID Connect**: {{authBaseUrl}}/.well-known/openid-configuration

<a id="x-signature"></a>
### x-signature


- **Тип**: API-ключ
- **Имя параметра API-ключа**: x-signature
- **Расположение**: Cookie


## Начало работы

Выполните инструкции по [установке](#установка), а затем запустите следующий код JavaScript:

```javascript
var Api = require('@maticonoffice/docspace-api-sdk');

var defaultClient = Api.ApiClient.instance;
// Настройка базовой HTTP-авторизации: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME'
Basic.password = 'YOUR PASSWORD'
// Настройка токена доступа OAuth2 для авторизации: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = "YOUR ACCESS TOKEN"
// Настройка авторизации по API-ключу: ApiKeyBearer
var ApiKeyBearer = defaultClient.authentications['ApiKeyBearer'];
ApiKeyBearer.apiKey = "YOUR API KEY"
// Раскомментируйте следующую строку, чтобы задать префикс API-ключа, например "Token"; по умолчанию null
//ApiKeyBearer.apiKeyPrefix['ApiKeyBearer'] = "Token"
// Настройка авторизации по API-ключу: asc_auth_key
var asc_auth_key = defaultClient.authentications['asc_auth_key'];
asc_auth_key.apiKey = "YOUR API KEY"
// Раскомментируйте следующую строку, чтобы задать префикс API-ключа, например "Token"; по умолчанию null
//asc_auth_key.apiKeyPrefix['asc_auth_key'] = "Token"
// Настройка токена доступа Bearer (JWT) для авторизации: Bearer
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
    console.log('API успешно вызван. Полученные данные: ' + data);
  }
};
api.createApiKey(opts, callback);

```

## Документация по конечным точкам API

Все URI указаны относительно *http://localhost:8092*.

<details><summary>Таблица конечных точек API</summary>

Класс | Метод | HTTP-запрос | Описание
------------ | ------------- | ------------- | -------------
*Api.ApiKeysApi* | [**createApiKey**](docs/ApiKeysApi.md#createapikey) | **POST** /api/2.0/keys | Создать пользовательский API-ключ
*Api.ApiKeysApi* | [**deleteApiKey**](docs/ApiKeysApi.md#deleteapikey) | **DELETE** /api/2.0/keys/{keyId} | Удалить пользовательский API-ключ
*Api.ApiKeysApi* | [**getAllPermissions**](docs/ApiKeysApi.md#getallpermissions) | **GET** /api/2.0/keys/permissions | Получить разрешения API-ключа
*Api.ApiKeysApi* | [**getApiKey**](docs/ApiKeysApi.md#getapikey) | **GET** /api/2.0/keys/@self | Получить сведения об API-ключе пользователя
*Api.ApiKeysApi* | [**getApiKeys**](docs/ApiKeysApi.md#getapikeys) | **GET** /api/2.0/keys | Получить API-ключи пользователя
*Api.ApiKeysApi* | [**updateApiKey**](docs/ApiKeysApi.md#updateapikey) | **PUT** /api/2.0/keys/{keyId} | Обновить API-ключ
*Api.AuthenticationApi* | [**authenticateMe**](docs/AuthenticationApi.md#authenticateme) | **POST** /api/2.0/authentication | Аутентифицировать пользователя
*Api.AuthenticationApi* | [**authenticateMeFromBodyWithCode**](docs/AuthenticationApi.md#authenticatemefrombodywithcode) | **POST** /api/2.0/authentication/{code} | Аутентифицировать пользователя по коду
*Api.AuthenticationApi* | [**checkConfirm**](docs/AuthenticationApi.md#checkconfirm) | **POST** /api/2.0/authentication/confirm | Открыть URL из письма с подтверждением
*Api.AuthenticationApi* | [**getIsAuthentificated**](docs/AuthenticationApi.md#getisauthentificated) | **GET** /api/2.0/authentication | Проверить аутентификацию
*Api.AuthenticationApi* | [**logout**](docs/AuthenticationApi.md#logout) | **POST** /api/2.0/authentication/logout | Выйти
*Api.AuthenticationApi* | [**saveMobilePhone**](docs/AuthenticationApi.md#savemobilephone) | **POST** /api/2.0/authentication/setphone | Указать номер мобильного телефона
*Api.AuthenticationApi* | [**sendSmsCode**](docs/AuthenticationApi.md#sendsmscode) | **POST** /api/2.0/authentication/sendsms | Отправить код по SMS
*Api.BackupApi* | [**createBackupSchedule**](docs/BackupApi.md#createbackupschedule) | **POST** /api/2.0/backup/createbackupschedule | Создать расписание резервного копирования
*Api.BackupApi* | [**deleteBackup**](docs/BackupApi.md#deletebackup) | **DELETE** /api/2.0/backup/deletebackup/{id} | Удалить резервную копию
*Api.BackupApi* | [**deleteBackupHistory**](docs/BackupApi.md#deletebackuphistory) | **DELETE** /api/2.0/backup/deletebackuphistory | Удалить историю резервного копирования
*Api.BackupApi* | [**deleteBackupSchedule**](docs/BackupApi.md#deletebackupschedule) | **DELETE** /api/2.0/backup/deletebackupschedule | Удалить расписание резервного копирования
*Api.BackupApi* | [**getBackupHistory**](docs/BackupApi.md#getbackuphistory) | **GET** /api/2.0/backup/getbackuphistory | Получить историю резервного копирования
*Api.BackupApi* | [**getBackupProgress**](docs/BackupApi.md#getbackupprogress) | **GET** /api/2.0/backup/getbackupprogress | Получить ход резервного копирования
*Api.BackupApi* | [**getBackupSchedule**](docs/BackupApi.md#getbackupschedule) | **GET** /api/2.0/backup/getbackupschedule | Получить расписание резервного копирования
*Api.BackupApi* | [**getRestoreProgress**](docs/BackupApi.md#getrestoreprogress) | **GET** /api/2.0/backup/getrestoreprogress | Получить ход восстановления
*Api.BackupApi* | [**startBackup**](docs/BackupApi.md#startbackup) | **POST** /api/2.0/backup/startbackup | Начать резервное копирование
*Api.BackupApi* | [**startBackupRestore**](docs/BackupApi.md#startbackuprestore) | **POST** /api/2.0/backup/startrestore | Начать восстановление
*Api.CapabilitiesApi* | [**getPortalCapabilities**](docs/CapabilitiesApi.md#getportalcapabilities) | **GET** /api/2.0/capabilities | Получить возможности портала
*Api.FilesFilesApi* | [**addTemplates**](docs/FilesFilesApi.md#addtemplates) | **POST** /api/2.0/files/templates | Добавить файлы шаблонов
*Api.FilesFilesApi* | [**changeVersionHistory**](docs/FilesFilesApi.md#changeversionhistory) | **PUT** /api/2.0/files/file/{fileId}/history | Изменить историю версий
*Api.FilesFilesApi* | [**checkFillFormDraft**](docs/FilesFilesApi.md#checkfillformdraft) | **POST** /api/2.0/files/masterform/{fileId}/checkfillformdraft | Проверить заполнение черновика формы
*Api.FilesFilesApi* | [**copyFileAs**](docs/FilesFilesApi.md#copyfileas) | **POST** /api/2.0/files/file/{fileId}/copyas | Скопировать файл
*Api.FilesFilesApi* | [**createEditSession**](docs/FilesFilesApi.md#createeditsession) | **POST** /api/2.0/files/file/{fileId}/edit_session | Создать сеанс редактирования
*Api.FilesFilesApi* | [**createFile**](docs/FilesFilesApi.md#createfile) | **POST** /api/2.0/files/{folderId}/file | Создать файл
*Api.FilesFilesApi* | [**createFileInMyDocuments**](docs/FilesFilesApi.md#createfileinmydocuments) | **POST** /api/2.0/files/@my/file | Создать файл в разделе «Мои документы»
*Api.FilesFilesApi* | [**createHtmlFile**](docs/FilesFilesApi.md#createhtmlfile) | **POST** /api/2.0/files/{folderId}/html | Создать HTML-файл
*Api.FilesFilesApi* | [**createHtmlFileInMyDocuments**](docs/FilesFilesApi.md#createhtmlfileinmydocuments) | **POST** /api/2.0/files/@my/html | Создать HTML-файл в разделе «Мои документы»
*Api.FilesFilesApi* | [**createPrimaryExternalLink**](docs/FilesFilesApi.md#createprimaryexternallink) | **POST** /api/2.0/files/file/{id}/link | Создать основную внешнюю ссылку
*Api.FilesFilesApi* | [**createTextFile**](docs/FilesFilesApi.md#createtextfile) | **POST** /api/2.0/files/{folderId}/text | Создать текстовый файл
*Api.FilesFilesApi* | [**createTextFileInMyDocuments**](docs/FilesFilesApi.md#createtextfileinmydocuments) | **POST** /api/2.0/files/@my/text | Создать текстовый файл в разделе «Мои документы»
*Api.FilesFilesApi* | [**createThumbnails**](docs/FilesFilesApi.md#createthumbnails) | **POST** /api/2.0/files/thumbnails | Создать миниатюры файлов
*Api.FilesFilesApi* | [**deleteFile**](docs/FilesFilesApi.md#deletefile) | **DELETE** /api/2.0/files/file/{fileId} | Удалить файл
*Api.FilesFilesApi* | [**deleteRecent**](docs/FilesFilesApi.md#deleterecent) | **DELETE** /api/2.0/files/recent | Удалить недавние файлы
*Api.FilesFilesApi* | [**deleteTemplates**](docs/FilesFilesApi.md#deletetemplates) | **DELETE** /api/2.0/files/templates | Удалить файлы шаблонов
*Api.FilesFilesApi* | [**getAllFormRoles**](docs/FilesFilesApi.md#getallformroles) | **GET** /api/2.0/files/file/{fileId}/formroles | Получить роли формы
*Api.FilesFilesApi* | [**getEditDiffUrl**](docs/FilesFilesApi.md#geteditdiffurl) | **GET** /api/2.0/files/file/{fileId}/edit/diff | Получить URL изменений
*Api.FilesFilesApi* | [**getEditHistory**](docs/FilesFilesApi.md#getedithistory) | **GET** /api/2.0/files/file/{fileId}/edit/history | Получить историю версий
*Api.FilesFilesApi* | [**getFileHistory**](docs/FilesFilesApi.md#getfilehistory) | **GET** /api/2.0/files/file/{fileId}/log | Получить историю файла
*Api.FilesFilesApi* | [**getFileInfo**](docs/FilesFilesApi.md#getfileinfo) | **GET** /api/2.0/files/file/{fileId} | Получить сведения о файле
*Api.FilesFilesApi* | [**getFileLinks**](docs/FilesFilesApi.md#getfilelinks) | **GET** /api/2.0/files/file/{id}/links | Получить внешние ссылки файла
*Api.FilesFilesApi* | [**getFilePrimaryExternalLink**](docs/FilesFilesApi.md#getfileprimaryexternallink) | **GET** /api/2.0/files/file/{id}/link | Получить основную внешнюю ссылку
*Api.FilesFilesApi* | [**getFileVersionInfo**](docs/FilesFilesApi.md#getfileversioninfo) | **GET** /api/2.0/files/file/{fileId}/history | Получить версии файла
*Api.FilesFilesApi* | [**getFillResult**](docs/FilesFilesApi.md#getfillresult) | **GET** /api/2.0/files/file/fillresult | Получить результат заполнения формы
*Api.FilesFilesApi* | [**getPresignedFileUri**](docs/FilesFilesApi.md#getpresignedfileuri) | **GET** /api/2.0/files/file/{fileId}/presigned | Асинхронно получить ссылку для скачивания файла
*Api.FilesFilesApi* | [**getPresignedUri**](docs/FilesFilesApi.md#getpresigneduri) | **GET** /api/2.0/files/file/{fileId}/presigneduri | Получить ссылку для скачивания файла
*Api.FilesFilesApi* | [**getProtectedFileUsers**](docs/FilesFilesApi.md#getprotectedfileusers) | **GET** /api/2.0/files/file/{fileId}/protectusers | Получить права доступа пользователей к защищённому файлу
*Api.FilesFilesApi* | [**getReferenceData**](docs/FilesFilesApi.md#getreferencedata) | **POST** /api/2.0/files/file/referencedata | Получить справочные данные
*Api.FilesFilesApi* | [**isFormPDF**](docs/FilesFilesApi.md#isformpdf) | **GET** /api/2.0/files/file/{fileId}/isformpdf | Проверить PDF-файл
*Api.FilesFilesApi* | [**lockFile**](docs/FilesFilesApi.md#lockfile) | **PUT** /api/2.0/files/file/{fileId}/lock | Заблокировать файл
*Api.FilesFilesApi* | [**manageFormFilling**](docs/FilesFilesApi.md#manageformfilling) | **PUT** /api/2.0/files/file/{fileId}/manageformfilling | Выполнить действие заполнения формы
*Api.FilesFilesApi* | [**openEditFile**](docs/FilesFilesApi.md#openeditfile) | **GET** /api/2.0/files/file/{fileId}/openedit | Открыть конфигурацию файла
*Api.FilesFilesApi* | [**restoreFileVersion**](docs/FilesFilesApi.md#restorefileversion) | **GET** /api/2.0/files/file/{fileId}/restoreversion | Восстановить версию файла
*Api.FilesFilesApi* | [**saveEditingFileFromForm**](docs/FilesFilesApi.md#saveeditingfilefromform) | **PUT** /api/2.0/files/file/{fileId}/saveediting | Сохранить изменения файла
*Api.FilesFilesApi* | [**saveFileAsPdf**](docs/FilesFilesApi.md#savefileaspdf) | **POST** /api/2.0/files/file/{id}/saveaspdf | Сохранить файл как PDF
*Api.FilesFilesApi* | [**saveFormRoleMapping**](docs/FilesFilesApi.md#saveformrolemapping) | **POST** /api/2.0/files/file/{fileId}/formrolemapping | Сохранить сопоставление ролей формы
*Api.FilesFilesApi* | [**setCustomFilterTag**](docs/FilesFilesApi.md#setcustomfiltertag) | **PUT** /api/2.0/files/file/{fileId}/customfilter | Установить режим редактирования пользовательского фильтра
*Api.FilesFilesApi* | [**setExternalLink**](docs/FilesFilesApi.md#setexternallink) | **PUT** /api/2.0/files/file/{id}/links | Установить внешнюю ссылку
*Api.FilesFilesApi* | [**setFileOrder**](docs/FilesFilesApi.md#setfileorder) | **PUT** /api/2.0/files/{fileId}/order | Установить порядок файлов
*Api.FilesFilesApi* | [**setFilesOrder**](docs/FilesFilesApi.md#setfilesorder) | **PUT** /api/2.0/files/order | Установить порядок файлов
*Api.FilesFilesApi* | [**startEditFile**](docs/FilesFilesApi.md#starteditfile) | **POST** /api/2.0/files/file/{fileId}/startedit | Начать редактирование файла
*Api.FilesFilesApi* | [**startFillingFile**](docs/FilesFilesApi.md#startfillingfile) | **PUT** /api/2.0/files/file/{fileId}/startfilling | Начать заполнение файла
*Api.FilesFilesApi* | [**trackEditFile**](docs/FilesFilesApi.md#trackeditfile) | **GET** /api/2.0/files/file/{fileId}/trackeditfile | Отслеживать редактирование файла
*Api.FilesFilesApi* | [**updateFile**](docs/FilesFilesApi.md#updatefile) | **PUT** /api/2.0/files/file/{fileId} | Обновить файл
*Api.FilesFoldersApi* | [**checkUpload**](docs/FilesFoldersApi.md#checkupload) | **POST** /api/2.0/files/{folderId}/upload/check | Проверить загрузки файлов
*Api.FilesFoldersApi* | [**createFolder**](docs/FilesFoldersApi.md#createfolder) | **POST** /api/2.0/files/folder/{folderId} | Создать папку
*Api.FilesFoldersApi* | [**deleteFolder**](docs/FilesFoldersApi.md#deletefolder) | **DELETE** /api/2.0/files/folder/{folderId} | Удалить папку
*Api.FilesFoldersApi* | [**getFilesUsedSpace**](docs/FilesFoldersApi.md#getfilesusedspace) | **GET** /api/2.0/files/filesusedspace | Получить объём пространства, занятого файлами
*Api.FilesFoldersApi* | [**getFolder**](docs/FilesFoldersApi.md#getfolder) | **GET** /api/2.0/files/{folderId}/formfilter | Получить фильтр формы папки
*Api.FilesFoldersApi* | [**getFolderByFolderId**](docs/FilesFoldersApi.md#getfolderbyfolderid) | **GET** /api/2.0/files/{folderId} | Получить папку по идентификатору
*Api.FilesFoldersApi* | [**getFolderHistory**](docs/FilesFoldersApi.md#getfolderhistory) | **GET** /api/2.0/files/folder/{folderId}/log | Получить историю папки
*Api.FilesFoldersApi* | [**getFolderInfo**](docs/FilesFoldersApi.md#getfolderinfo) | **GET** /api/2.0/files/folder/{folderId} | Получить сведения о папке
*Api.FilesFoldersApi* | [**getFolderPath**](docs/FilesFoldersApi.md#getfolderpath) | **GET** /api/2.0/files/folder/{folderId}/path | Получить путь к папке
*Api.FilesFoldersApi* | [**getFolderPrimaryExternalLink**](docs/FilesFoldersApi.md#getfolderprimaryexternallink) | **GET** /api/2.0/files/folder/{id}/link | Получить основную внешнюю ссылку
*Api.FilesFoldersApi* | [**getFolders**](docs/FilesFoldersApi.md#getfolders) | **GET** /api/2.0/files/{folderId}/subfolders | Получить вложенные папки
*Api.FilesFoldersApi* | [**getMyFolder**](docs/FilesFoldersApi.md#getmyfolder) | **GET** /api/2.0/files/@my | Получить раздел «Мои документы»
*Api.FilesFoldersApi* | [**getNewFolderItems**](docs/FilesFoldersApi.md#getnewfolderitems) | **GET** /api/2.0/files/{folderId}/news | Получить новые элементы папки
*Api.FilesFoldersApi* | [**getPrivacyFolder**](docs/FilesFoldersApi.md#getprivacyfolder) | **GET** /api/2.0/files/@privacy | Получить раздел «Приватная комната»
*Api.FilesFoldersApi* | [**getRootFolders**](docs/FilesFoldersApi.md#getrootfolders) | **GET** /api/2.0/files/@root | Получить отфильтрованные разделы
*Api.FilesFoldersApi* | [**getTrashFolder**](docs/FilesFoldersApi.md#gettrashfolder) | **GET** /api/2.0/files/@trash | Получить раздел «Корзина»
*Api.FilesFoldersApi* | [**insertFile**](docs/FilesFoldersApi.md#insertfile) | **POST** /api/2.0/files/{folderId}/insert | Вставить файл
*Api.FilesFoldersApi* | [**insertFileToMyFromBody**](docs/FilesFoldersApi.md#insertfiletomyfrombody) | **POST** /api/2.0/files/@my/insert | Вставить файл в раздел «Мои документы»
*Api.FilesFoldersApi* | [**renameFolder**](docs/FilesFoldersApi.md#renamefolder) | **PUT** /api/2.0/files/folder/{folderId} | Переименовать папку
*Api.FilesFoldersApi* | [**setFolderOrder**](docs/FilesFoldersApi.md#setfolderorder) | **PUT** /api/2.0/files/folder/{folderId}/order | Установить порядок папок
*Api.FilesFoldersApi* | [**uploadFile**](docs/FilesFoldersApi.md#uploadfile) | **POST** /api/2.0/files/{folderId}/upload | Загрузить файл
*Api.FilesFoldersApi* | [**uploadFileToMy**](docs/FilesFoldersApi.md#uploadfiletomy) | **POST** /api/2.0/files/@my/upload | Загрузить файл в раздел «Мои документы»
*Api.FilesOperationsApi* | [**bulkDownload**](docs/FilesOperationsApi.md#bulkdownload) | **PUT** /api/2.0/files/fileops/bulkdownload | Выполнить пакетное скачивание
*Api.FilesOperationsApi* | [**checkConversionStatus**](docs/FilesOperationsApi.md#checkconversionstatus) | **GET** /api/2.0/files/file/{fileId}/checkconversion | Получить статус преобразования
*Api.FilesOperationsApi* | [**checkMoveOrCopyBatchItems**](docs/FilesOperationsApi.md#checkmoveorcopybatchitems) | **GET** /api/2.0/files/fileops/move | Проверить и переместить или скопировать в папку
*Api.FilesOperationsApi* | [**checkMoveOrCopyDestFolder**](docs/FilesOperationsApi.md#checkmoveorcopydestfolder) | **GET** /api/2.0/files/fileops/checkdestfolder | Проверить возможность перемещения или копирования в папку
*Api.FilesOperationsApi* | [**copyBatchItems**](docs/FilesOperationsApi.md#copybatchitems) | **PUT** /api/2.0/files/fileops/copy | Скопировать в папку
*Api.FilesOperationsApi* | [**createUploadSession**](docs/FilesOperationsApi.md#createuploadsession) | **POST** /api/2.0/files/{folderId}/upload/create_session | Выполнить загрузку по частям
*Api.FilesOperationsApi* | [**deleteBatchItems**](docs/FilesOperationsApi.md#deletebatchitems) | **PUT** /api/2.0/files/fileops/delete | Удалить файлы и папки
*Api.FilesOperationsApi* | [**deleteFileVersions**](docs/FilesOperationsApi.md#deletefileversions) | **PUT** /api/2.0/files/fileops/deleteversion | Удалить версии файла
*Api.FilesOperationsApi* | [**duplicateBatchItems**](docs/FilesOperationsApi.md#duplicatebatchitems) | **PUT** /api/2.0/files/fileops/duplicate | Дублировать файлы и папки
*Api.FilesOperationsApi* | [**emptyTrash**](docs/FilesOperationsApi.md#emptytrash) | **PUT** /api/2.0/files/fileops/emptytrash | Очистить папку «Корзина»
*Api.FilesOperationsApi* | [**getOperationStatuses**](docs/FilesOperationsApi.md#getoperationstatuses) | **GET** /api/2.0/files/fileops | Получить активные файловые операции
*Api.FilesOperationsApi* | [**getOperationStatusesByType**](docs/FilesOperationsApi.md#getoperationstatusesbytype) | **GET** /api/2.0/files/fileops/{operationType} | Получить статусы файловых операций
*Api.FilesOperationsApi* | [**markAsRead**](docs/FilesOperationsApi.md#markasread) | **PUT** /api/2.0/files/fileops/markasread | Отметить как прочитанное
*Api.FilesOperationsApi* | [**moveBatchItems**](docs/FilesOperationsApi.md#movebatchitems) | **PUT** /api/2.0/files/fileops/move | Переместить или скопировать в папку
*Api.FilesOperationsApi* | [**startFileConversion**](docs/FilesOperationsApi.md#startfileconversion) | **PUT** /api/2.0/files/file/{fileId}/checkconversion | Начать преобразование файла
*Api.FilesOperationsApi* | [**terminateTasks**](docs/FilesOperationsApi.md#terminatetasks) | **PUT** /api/2.0/files/fileops/terminate/{id} | Завершить активные операции
*Api.FilesOperationsApi* | [**updateFileComment**](docs/FilesOperationsApi.md#updatefilecomment) | **PUT** /api/2.0/files/file/{fileId}/comment | Обновить комментарий
*Api.FilesQuotaApi* | [**resetRoomQuota**](docs/FilesQuotaApi.md#resetroomquota) | **PUT** /api/2.0/files/rooms/resetquota | Сбросить ограничение квоты комнаты
*Api.FilesQuotaApi* | [**updateRoomsQuota**](docs/FilesQuotaApi.md#updateroomsquota) | **PUT** /api/2.0/files/rooms/roomquota | Изменить ограничение квоты комнаты
*Api.FilesSettingsApi* | [**changeAccessToThirdparty**](docs/FilesSettingsApi.md#changeaccesstothirdparty) | **PUT** /api/2.0/files/thirdparty | Изменить доступ к настройкам сторонних служб
*Api.FilesSettingsApi* | [**changeAutomaticallyCleanUp**](docs/FilesSettingsApi.md#changeautomaticallycleanup) | **PUT** /api/2.0/files/settings/autocleanup | Обновить настройку автоматической очистки корзины
*Api.FilesSettingsApi* | [**changeDefaultAccessRights**](docs/FilesSettingsApi.md#changedefaultaccessrights) | **PUT** /api/2.0/files/settings/dafaultaccessrights | Изменить права доступа по умолчанию
*Api.FilesSettingsApi* | [**changeDeleteConfirm**](docs/FilesSettingsApi.md#changedeleteconfirm) | **PUT** /api/2.0/files/changedeleteconfrim | Подтвердить удаление файла
*Api.FilesSettingsApi* | [**changeDownloadZipFromBody**](docs/FilesSettingsApi.md#changedownloadzipfrombody) | **PUT** /api/2.0/files/settings/downloadtargz | Изменить формат архива с помощью параметров тела запроса
*Api.FilesSettingsApi* | [**checkDocServiceUrl**](docs/FilesSettingsApi.md#checkdocserviceurl) | **PUT** /api/2.0/files/docservice | Проверить URL службы документов
*Api.FilesSettingsApi* | [**displayFileExtension**](docs/FilesSettingsApi.md#displayfileextension) | **PUT** /api/2.0/files/displayfileextension | Отобразить расширение файла
*Api.FilesSettingsApi* | [**externalShare**](docs/FilesSettingsApi.md#externalshare) | **PUT** /api/2.0/files/settings/external | Изменить возможность внешнего общего доступа
*Api.FilesSettingsApi* | [**externalShareSocialMedia**](docs/FilesSettingsApi.md#externalsharesocialmedia) | **PUT** /api/2.0/files/settings/externalsocialmedia | Изменить возможность внешнего общего доступа в социальных сетях
*Api.FilesSettingsApi* | [**forcesave**](docs/FilesSettingsApi.md#forcesave) | **PUT** /api/2.0/files/forcesave | Изменить возможность принудительного сохранения
*Api.FilesSettingsApi* | [**getAutomaticallyCleanUp**](docs/FilesSettingsApi.md#getautomaticallycleanup) | **GET** /api/2.0/files/settings/autocleanup | Получить настройку автоматической очистки корзины
*Api.FilesSettingsApi* | [**getDocServiceUrl**](docs/FilesSettingsApi.md#getdocserviceurl) | **GET** /api/2.0/files/docservice | Получить URL службы документов
*Api.FilesSettingsApi* | [**getFilesModule**](docs/FilesSettingsApi.md#getfilesmodule) | **GET** /api/2.0/files/info | Получить сведения о разделе «Документы»
*Api.FilesSettingsApi* | [**getFilesSettings**](docs/FilesSettingsApi.md#getfilessettings) | **GET** /api/2.0/files/settings | Получить настройки файлов
*Api.FilesSettingsApi* | [**hideConfirmCancelOperation**](docs/FilesSettingsApi.md#hideconfirmcanceloperation) | **PUT** /api/2.0/files/hideconfirmcanceloperation | Скрыть диалог подтверждения при отмене операций
*Api.FilesSettingsApi* | [**hideConfirmConvert**](docs/FilesSettingsApi.md#hideconfirmconvert) | **PUT** /api/2.0/files/hideconfirmconvert | Скрыть диалог подтверждения при преобразовании
*Api.FilesSettingsApi* | [**hideConfirmRoomLifetime**](docs/FilesSettingsApi.md#hideconfirmroomlifetime) | **PUT** /api/2.0/files/hideconfirmroomlifetime | Скрыть диалог подтверждения при изменении срока жизни комнаты
*Api.FilesSettingsApi* | [**isAvailablePrivacyRoomSettings**](docs/FilesSettingsApi.md#isavailableprivacyroomsettings) | **GET** /api/2.0/files/@privacy/available | Проверить доступность раздела «Приватная комната»
*Api.FilesSettingsApi* | [**keepNewFileName**](docs/FilesSettingsApi.md#keepnewfilename) | **PUT** /api/2.0/files/keepnewfilename | Запросить новое имя файла
*Api.FilesSettingsApi* | [**setOpenEditorInSameTab**](docs/FilesSettingsApi.md#setopeneditorinsametab) | **PUT** /api/2.0/files/settings/openeditorinsametab | Открыть документ в той же вкладке браузера
*Api.FilesSettingsApi* | [**storeForcesave**](docs/FilesSettingsApi.md#storeforcesave) | **PUT** /api/2.0/files/storeforcesave | Изменить возможность хранения принудительно сохранённых файлов
*Api.FilesSettingsApi* | [**storeOriginal**](docs/FilesSettingsApi.md#storeoriginal) | **PUT** /api/2.0/files/storeoriginal | Изменить возможность загрузки исходных форматов
*Api.FilesSettingsApi* | [**updateFileIfExist**](docs/FilesSettingsApi.md#updatefileifexist) | **PUT** /api/2.0/files/updateifexist | Обновить версию файла, если она существует
*Api.FilesSharingApi* | [**applyExternalSharePassword**](docs/FilesSharingApi.md#applyexternalsharepassword) | **POST** /api/2.0/files/share/{key}/password | Применить пароль внешних данных
*Api.FilesSharingApi* | [**changeFileOwner**](docs/FilesSharingApi.md#changefileowner) | **POST** /api/2.0/files/owner | Изменить владельца файла
*Api.FilesSharingApi* | [**getExternalShareData**](docs/FilesSharingApi.md#getexternalsharedata) | **GET** /api/2.0/files/share/{key} | Получить внешние данные
*Api.FilesSharingApi* | [**getSharedUsers**](docs/FilesSharingApi.md#getsharedusers) | **GET** /api/2.0/files/file/{fileId}/sharedusers | Получить права доступа пользователя по идентификатору файла
*Api.FilesSharingApi* | [**sendEditorNotify**](docs/FilesSharingApi.md#sendeditornotify) | **POST** /api/2.0/files/file/{fileId}/sendeditornotify | Отправить сообщение с упоминанием
*Api.FilesThirdPartyIntegrationApi* | [**deleteThirdParty**](docs/FilesThirdPartyIntegrationApi.md#deletethirdparty) | **DELETE** /api/2.0/files/thirdparty/{providerId} | Удалить учётную запись сторонней службы
*Api.FilesThirdPartyIntegrationApi* | [**getAllProviders**](docs/FilesThirdPartyIntegrationApi.md#getallproviders) | **GET** /api/2.0/files/thirdparty/providers | Получить всех поставщиков
*Api.FilesThirdPartyIntegrationApi* | [**getBackupThirdPartyAccount**](docs/FilesThirdPartyIntegrationApi.md#getbackupthirdpartyaccount) | **GET** /api/2.0/files/thirdparty/backup | Получить резервную копию учётной записи сторонней службы
*Api.FilesThirdPartyIntegrationApi* | [**getCapabilities**](docs/FilesThirdPartyIntegrationApi.md#getcapabilities) | **GET** /api/2.0/files/thirdparty/capabilities | Получить поставщиков
*Api.FilesThirdPartyIntegrationApi* | [**getCommonThirdPartyFolders**](docs/FilesThirdPartyIntegrationApi.md#getcommonthirdpartyfolders) | **GET** /api/2.0/files/thirdparty/common | Получить общие сторонние службы
*Api.FilesThirdPartyIntegrationApi* | [**getThirdPartyAccounts**](docs/FilesThirdPartyIntegrationApi.md#getthirdpartyaccounts) | **GET** /api/2.0/files/thirdparty | Получить учётные записи сторонних служб
*Api.FilesThirdPartyIntegrationApi* | [**saveThirdParty**](docs/FilesThirdPartyIntegrationApi.md#savethirdparty) | **POST** /api/2.0/files/thirdparty | Сохранить учётную запись сторонней службы
*Api.FilesThirdPartyIntegrationApi* | [**saveThirdPartyBackup**](docs/FilesThirdPartyIntegrationApi.md#savethirdpartybackup) | **POST** /api/2.0/files/thirdparty/backup | Сохранить резервную копию учётной записи сторонней службы
*Api.GroupApi* | [**addGroup**](docs/GroupApi.md#addgroup) | **POST** /api/2.0/group | Добавить новую группу
*Api.GroupApi* | [**addMembersTo**](docs/GroupApi.md#addmembersto) | **PUT** /api/2.0/group/{id}/members | Добавить участников группы
*Api.GroupApi* | [**deleteGroup**](docs/GroupApi.md#deletegroup) | **DELETE** /api/2.0/group/{id} | Удалить группу
*Api.GroupApi* | [**getGroup**](docs/GroupApi.md#getgroup) | **GET** /api/2.0/group/{id} | Получить группу
*Api.GroupApi* | [**getGroupByUserId**](docs/GroupApi.md#getgroupbyuserid) | **GET** /api/2.0/group/user/{userid} | Получить группы пользователя
*Api.GroupApi* | [**getGroups**](docs/GroupApi.md#getgroups) | **GET** /api/2.0/group | Получить группы
*Api.GroupApi* | [**moveMembersTo**](docs/GroupApi.md#movemembersto) | **PUT** /api/2.0/group/{fromId}/members/{toId} | Переместить участников группы
*Api.GroupApi* | [**removeMembersFrom**](docs/GroupApi.md#removemembersfrom) | **DELETE** /api/2.0/group/{id}/members | Удалить участников группы
*Api.GroupApi* | [**setGroupManager**](docs/GroupApi.md#setgroupmanager) | **PUT** /api/2.0/group/{id}/manager | Назначить руководителя группы
*Api.GroupApi* | [**setMembersTo**](docs/GroupApi.md#setmembersto) | **POST** /api/2.0/group/{id}/members | Заменить участников группы
*Api.GroupApi* | [**updateGroup**](docs/GroupApi.md#updategroup) | **PUT** /api/2.0/group/{id} | Обновить группу
*Api.GroupRoomsApi* | [**getGroupsWithShared**](docs/GroupRoomsApi.md#getgroupswithshared) | **GET** /api/2.0/group/room/{id} | Получить группы с настройками общего доступа
*Api.MigrationApi* | [**cancelMigration**](docs/MigrationApi.md#cancelmigration) | **POST** /api/2.0/migration/cancel | Отменить миграцию
*Api.MigrationApi* | [**clearMigration**](docs/MigrationApi.md#clearmigration) | **POST** /api/2.0/migration/clear | Очистить миграцию
*Api.MigrationApi* | [**finishMigration**](docs/MigrationApi.md#finishmigration) | **POST** /api/2.0/migration/finish | Завершить миграцию
*Api.MigrationApi* | [**getMigrationLogs**](docs/MigrationApi.md#getmigrationlogs) | **GET** /api/2.0/migration/logs | Получить журналы миграции
*Api.MigrationApi* | [**getMigrationStatus**](docs/MigrationApi.md#getmigrationstatus) | **GET** /api/2.0/migration/status | Получить статус миграции
*Api.MigrationApi* | [**listMigrations**](docs/MigrationApi.md#listmigrations) | **GET** /api/2.0/migration/list | Получить миграции
*Api.MigrationApi* | [**startMigration**](docs/MigrationApi.md#startmigration) | **POST** /api/2.0/migration/migrate | Начать миграцию
*Api.MigrationApi* | [**uploadAndInitializeMigration**](docs/MigrationApi.md#uploadandinitializemigration) | **POST** /api/2.0/migration/init/{migratorName} | Загрузить и инициализировать миграцию
*Api.OAuth20AuthorizationApi* | [**authorizeOAuth**](docs/OAuth20AuthorizationApi.md#authorizeoauth) | **GET** /oauth2/authorize | Конечная точка авторизации OAuth2
*Api.OAuth20AuthorizationApi* | [**exchangeToken**](docs/OAuth20AuthorizationApi.md#exchangetoken) | **POST** /oauth2/token | Конечная точка токена OAuth2
*Api.OAuth20AuthorizationApi* | [**submitConsent**](docs/OAuth20AuthorizationApi.md#submitconsent) | **POST** /oauth2/authorize | Конечная точка согласия OAuth2
*Api.OAuth20ClientManagementApi* | [**changeActivation**](docs/OAuth20ClientManagementApi.md#changeactivation) | **PATCH** /api/2.0/clients/{clientId}/activation | Изменить статус активации клиента
*Api.OAuth20ClientManagementApi* | [**createClient**](docs/OAuth20ClientManagementApi.md#createclient) | **POST** /api/2.0/clients | Создать новый клиент OAuth2
*Api.OAuth20ClientManagementApi* | [**deleteClient**](docs/OAuth20ClientManagementApi.md#deleteclient) | **DELETE** /api/2.0/clients/{clientId} | Удалить клиент OAuth2
*Api.OAuth20ClientManagementApi* | [**regenerateSecret**](docs/OAuth20ClientManagementApi.md#regeneratesecret) | **PATCH** /api/2.0/clients/{clientId}/regenerate | Повторно создать секрет клиента
*Api.OAuth20ClientManagementApi* | [**revokeUserClient**](docs/OAuth20ClientManagementApi.md#revokeuserclient) | **DELETE** /api/2.0/clients/{clientId}/revoke | Отозвать согласие клиента
*Api.OAuth20ClientManagementApi* | [**updateClient**](docs/OAuth20ClientManagementApi.md#updateclient) | **PUT** /api/2.0/clients/{clientId} | Обновить существующий клиент OAuth2
*Api.OAuth20ClientQueryingApi* | [**getClient**](docs/OAuth20ClientQueryingApi.md#getclient) | **GET** /api/2.0/clients/{clientId} | Получить сведения о клиенте
*Api.OAuth20ClientQueryingApi* | [**getClientInfo**](docs/OAuth20ClientQueryingApi.md#getclientinfo) | **GET** /api/2.0/clients/{clientId}/info | Получить подробные сведения о клиенте
*Api.OAuth20ClientQueryingApi* | [**getClients**](docs/OAuth20ClientQueryingApi.md#getclients) | **GET** /api/2.0/clients | Получить клиентов
*Api.OAuth20ClientQueryingApi* | [**getClientsInfo**](docs/OAuth20ClientQueryingApi.md#getclientsinfo) | **GET** /api/2.0/clients/info | Получить подробные сведения о клиентах
*Api.OAuth20ClientQueryingApi* | [**getConsents**](docs/OAuth20ClientQueryingApi.md#getconsents) | **GET** /api/2.0/clients/consents | Получить согласия пользователя
*Api.OAuth20ClientQueryingApi* | [**getPublicClientInfo**](docs/OAuth20ClientQueryingApi.md#getpublicclientinfo) | **GET** /api/2.0/clients/{clientId}/public/info | Получить публичные сведения о клиенте
*Api.OAuth20ScopeManagementApi* | [**getScopes**](docs/OAuth20ScopeManagementApi.md#getscopes) | **GET** /api/2.0/scopes | Получить доступные области доступа OAuth2
*Api.PeopleGuestsApi* | [**approveGuestShareLink**](docs/PeopleGuestsApi.md#approveguestsharelink) | **POST** /api/2.0/people/guests/share/approve | Подтвердить гостевую ссылку общего доступа
*Api.PeopleGuestsApi* | [**deleteGuests**](docs/PeopleGuestsApi.md#deleteguests) | **DELETE** /api/2.0/people/guests | Удалить гостей
*Api.PeoplePasswordApi* | [**changeUserPassword**](docs/PeoplePasswordApi.md#changeuserpassword) | **PUT** /api/2.0/people/{userid}/password | Изменить пароль пользователя
*Api.PeoplePasswordApi* | [**sendUserPassword**](docs/PeoplePasswordApi.md#senduserpassword) | **POST** /api/2.0/people/password | Напомнить пользователю пароль
*Api.PeoplePhotosApi* | [**createMemberPhotoThumbnails**](docs/PeoplePhotosApi.md#creatememberphotothumbnails) | **POST** /api/2.0/people/{userid}/photo/thumbnails | Создать миниатюры фотографий
*Api.PeoplePhotosApi* | [**deleteMemberPhoto**](docs/PeoplePhotosApi.md#deletememberphoto) | **DELETE** /api/2.0/people/{userid}/photo | Удалить фотографию пользователя
*Api.PeoplePhotosApi* | [**getMemberPhoto**](docs/PeoplePhotosApi.md#getmemberphoto) | **GET** /api/2.0/people/{userid}/photo | Получить фотографию пользователя
*Api.PeoplePhotosApi* | [**updateMemberPhoto**](docs/PeoplePhotosApi.md#updatememberphoto) | **PUT** /api/2.0/people/{userid}/photo | Обновить фотографию пользователя
*Api.PeoplePhotosApi* | [**uploadMemberPhoto**](docs/PeoplePhotosApi.md#uploadmemberphoto) | **POST** /api/2.0/people/{userid}/photo | Загрузить фотографию пользователя
*Api.PeopleProfilesApi* | [**addMember**](docs/PeopleProfilesApi.md#addmember) | **POST** /api/2.0/people | Добавить пользователя
*Api.PeopleProfilesApi* | [**deleteMember**](docs/PeopleProfilesApi.md#deletemember) | **DELETE** /api/2.0/people/{userid} | Удалить пользователя
*Api.PeopleProfilesApi* | [**deleteProfile**](docs/PeopleProfilesApi.md#deleteprofile) | **DELETE** /api/2.0/people/@self | Удалить мой профиль
*Api.PeopleProfilesApi* | [**getAllProfiles**](docs/PeopleProfilesApi.md#getallprofiles) | **GET** /api/2.0/people | Получить профили
*Api.PeopleProfilesApi* | [**getClaims**](docs/PeopleProfilesApi.md#getclaims) | **GET** /api/2.0/people/tokendiagnostics | Возвращает утверждения пользователя.
*Api.PeopleProfilesApi* | [**getProfileByEmail**](docs/PeopleProfilesApi.md#getprofilebyemail) | **GET** /api/2.0/people/email | Получить профиль по адресу электронной почты пользователя
*Api.PeopleProfilesApi* | [**getProfileByUserId**](docs/PeopleProfilesApi.md#getprofilebyuserid) | **GET** /api/2.0/people/{userid} | Получить профиль по имени пользователя
*Api.PeopleProfilesApi* | [**getSelfProfile**](docs/PeopleProfilesApi.md#getselfprofile) | **GET** /api/2.0/people/@self | Получить мой профиль
*Api.PeopleProfilesApi* | [**inviteUsers**](docs/PeopleProfilesApi.md#inviteusers) | **POST** /api/2.0/people/invite | Пригласить пользователей
*Api.PeopleProfilesApi* | [**removeUsers**](docs/PeopleProfilesApi.md#removeusers) | **PUT** /api/2.0/people/delete | Удалить пользователей
*Api.PeopleProfilesApi* | [**resendUserInvites**](docs/PeopleProfilesApi.md#resenduserinvites) | **PUT** /api/2.0/people/invite | Повторно отправить письма активации
*Api.PeopleProfilesApi* | [**sendEmailChangeInstructions**](docs/PeopleProfilesApi.md#sendemailchangeinstructions) | **POST** /api/2.0/people/email | Отправить инструкции по изменению адреса электронной почты
*Api.PeopleProfilesApi* | [**updateMember**](docs/PeopleProfilesApi.md#updatemember) | **PUT** /api/2.0/people/{userid} | Обновить пользователя
*Api.PeopleProfilesApi* | [**updateMemberCulture**](docs/PeopleProfilesApi.md#updatememberculture) | **PUT** /api/2.0/people/{userid}/culture | Обновить код культуры пользователя
*Api.PeopleQuotaApi* | [**resetUsersQuota**](docs/PeopleQuotaApi.md#resetusersquota) | **PUT** /api/2.0/people/resetquota | Сбросить ограничение квоты пользователя
*Api.PeopleQuotaApi* | [**updateUserQuota**](docs/PeopleQuotaApi.md#updateuserquota) | **PUT** /api/2.0/people/userquota | Изменить ограничение квоты пользователя
*Api.PeopleSearchApi* | [**getAccountsEntriesWithShared**](docs/PeopleSearchApi.md#getaccountsentrieswithshared) | **GET** /api/2.0/accounts/room/{id}/search | Получить записи учётной записи
*Api.PeopleSearchApi* | [**getSearch**](docs/PeopleSearchApi.md#getsearch) | **GET** /api/2.0/people/@search/{query} | Найти пользователей
*Api.PeopleSearchApi* | [**getSimpleByFilter**](docs/PeopleSearchApi.md#getsimplebyfilter) | **GET** /api/2.0/people/simple/filter | Найти пользователей по расширенному фильтру
*Api.PeopleSearchApi* | [**getUsersWithRoomShared**](docs/PeopleSearchApi.md#getuserswithroomshared) | **GET** /api/2.0/people/room/{id} | Получить пользователей с настройками общего доступа к комнате
*Api.PeopleSearchApi* | [**searchUsersByExtendedFilter**](docs/PeopleSearchApi.md#searchusersbyextendedfilter) | **GET** /api/2.0/people/filter | Найти пользователей с подробными сведениями по расширенному фильтру
*Api.PeopleSearchApi* | [**searchUsersByQuery**](docs/PeopleSearchApi.md#searchusersbyquery) | **GET** /api/2.0/people/search | Найти пользователей с помощью параметров запроса
*Api.PeopleSearchApi* | [**searchUsersByStatus**](docs/PeopleSearchApi.md#searchusersbystatus) | **GET** /api/2.0/people/status/{status}/search | Найти пользователей по фильтру статуса
*Api.PeopleThemeApi* | [**changePortalTheme**](docs/PeopleThemeApi.md#changeportaltheme) | **PUT** /api/2.0/people/theme | Изменить тему портала
*Api.PeopleThemeApi* | [**getPortalTheme**](docs/PeopleThemeApi.md#getportaltheme) | **GET** /api/2.0/people/theme | Получить тему портала
*Api.PeopleThirdPartyAccountsApi* | [**getThirdPartyAuthProviders**](docs/PeopleThirdPartyAccountsApi.md#getthirdpartyauthproviders) | **GET** /api/2.0/people/thirdparty/providers | Получить учётные записи сторонних служб
*Api.PeopleThirdPartyAccountsApi* | [**linkThirdPartyAccount**](docs/PeopleThirdPartyAccountsApi.md#linkthirdpartyaccount) | **PUT** /api/2.0/people/thirdparty/linkaccount | Подключить учётную запись сторонней службы
*Api.PeopleThirdPartyAccountsApi* | [**signupThirdPartyAccount**](docs/PeopleThirdPartyAccountsApi.md#signupthirdpartyaccount) | **POST** /api/2.0/people/thirdparty/signup | Создать учётную запись сторонней службы
*Api.PeopleThirdPartyAccountsApi* | [**unlinkThirdPartyAccount**](docs/PeopleThirdPartyAccountsApi.md#unlinkthirdpartyaccount) | **DELETE** /api/2.0/people/thirdparty/unlinkaccount | Отключить учётную запись сторонней службы
*Api.PeopleUserDataApi* | [**getDeletePersonalFolderProgress**](docs/PeopleUserDataApi.md#getdeletepersonalfolderprogress) | **GET** /api/2.0/people/delete/personal/progress | Получить ход удаления личной папки
*Api.PeopleUserDataApi* | [**getReassignProgress**](docs/PeopleUserDataApi.md#getreassignprogress) | **GET** /api/2.0/people/reassign/progress/{userid} | Получить ход переназначения
*Api.PeopleUserDataApi* | [**getRemoveProgress**](docs/PeopleUserDataApi.md#getremoveprogress) | **GET** /api/2.0/people/remove/progress/{userid} | Получить ход удаления
*Api.PeopleUserDataApi* | [**necessaryReassign**](docs/PeopleUserDataApi.md#necessaryreassign) | **GET** /api/2.0/people/reassign/necessary | Проверить необходимость переназначения данных
*Api.PeopleUserDataApi* | [**sendInstructionsToDelete**](docs/PeopleUserDataApi.md#sendinstructionstodelete) | **PUT** /api/2.0/people/self/delete | Отправить инструкции по удалению
*Api.PeopleUserDataApi* | [**startDeletePersonalFolder**](docs/PeopleUserDataApi.md#startdeletepersonalfolder) | **POST** /api/2.0/people/delete/personal/start | Удалить личную папку
*Api.PeopleUserDataApi* | [**startReassign**](docs/PeopleUserDataApi.md#startreassign) | **POST** /api/2.0/people/reassign/start | Начать переназначение данных
*Api.PeopleUserDataApi* | [**startRemove**](docs/PeopleUserDataApi.md#startremove) | **POST** /api/2.0/people/remove/start | Начать удаление данных
*Api.PeopleUserDataApi* | [**terminateReassign**](docs/PeopleUserDataApi.md#terminatereassign) | **PUT** /api/2.0/people/reassign/terminate | Прервать переназначение данных
*Api.PeopleUserDataApi* | [**terminateRemove**](docs/PeopleUserDataApi.md#terminateremove) | **PUT** /api/2.0/people/remove/terminate | Прервать удаление данных
*Api.PeopleUserStatusApi* | [**getByStatus**](docs/PeopleUserStatusApi.md#getbystatus) | **GET** /api/2.0/people/status/{status} | Получить профили по статусу
*Api.PeopleUserStatusApi* | [**updateUserActivationStatus**](docs/PeopleUserStatusApi.md#updateuseractivationstatus) | **PUT** /api/2.0/people/activationstatus/{activationstatus} | Установить статус активации пользователям
*Api.PeopleUserStatusApi* | [**updateUserStatus**](docs/PeopleUserStatusApi.md#updateuserstatus) | **PUT** /api/2.0/people/status/{status} | Изменить статус пользователя
*Api.PeopleUserTypeApi* | [**getUserTypeUpdateProgress**](docs/PeopleUserTypeApi.md#getusertypeupdateprogress) | **GET** /api/2.0/people/type/progress/{userid} | Получить ход обновления типа пользователя
*Api.PeopleUserTypeApi* | [**starUserTypetUpdate**](docs/PeopleUserTypeApi.md#starusertypetupdate) | **POST** /api/2.0/people/type | Обновить тип пользователя
*Api.PeopleUserTypeApi* | [**terminateUserTypeUpdate**](docs/PeopleUserTypeApi.md#terminateusertypeupdate) | **PUT** /api/2.0/people/type/terminate | Прервать обновление типа пользователя
*Api.PeopleUserTypeApi* | [**updateUserType**](docs/PeopleUserTypeApi.md#updateusertype) | **PUT** /api/2.0/people/type/{type} | Изменить тип пользователя
*Api.PortalGuestsApi* | [**getGuestSharingLink**](docs/PortalGuestsApi.md#getguestsharinglink) | **GET** /api/2.0/people/guests/{userid}/share | Получить гостевую ссылку общего доступа
*Api.PortalPaymentApi* | [**calculateWalletPayment**](docs/PortalPaymentApi.md#calculatewalletpayment) | **PUT** /api/2.0/portal/payment/calculatewallet | Рассчитать сумму платежа из кошелька
*Api.PortalPaymentApi* | [**createCustomerOperationsReport**](docs/PortalPaymentApi.md#createcustomeroperationsreport) | **POST** /api/2.0/portal/payment/customer/operationsreport | Создать отчёт об операциях клиента
*Api.PortalPaymentApi* | [**getCheckoutSetupUrl**](docs/PortalPaymentApi.md#getcheckoutsetupurl) | **GET** /api/2.0/portal/payment/chechoutsetupurl | Получить URL страницы настройки оформления заказа
*Api.PortalPaymentApi* | [**getCustomerBalance**](docs/PortalPaymentApi.md#getcustomerbalance) | **GET** /api/2.0/portal/payment/customer/balance | Получить баланс клиента
*Api.PortalPaymentApi* | [**getCustomerInfo**](docs/PortalPaymentApi.md#getcustomerinfo) | **GET** /api/2.0/portal/payment/customerinfo | Получить сведения о клиенте
*Api.PortalPaymentApi* | [**getCustomerOperations**](docs/PortalPaymentApi.md#getcustomeroperations) | **GET** /api/2.0/portal/payment/customer/operations | Получить операции клиента
*Api.PortalPaymentApi* | [**getPaymentAccount**](docs/PortalPaymentApi.md#getpaymentaccount) | **GET** /api/2.0/portal/payment/account | Получить платёжную учётную запись
*Api.PortalPaymentApi* | [**getPaymentCurrencies**](docs/PortalPaymentApi.md#getpaymentcurrencies) | **GET** /api/2.0/portal/payment/currencies | Получить валюты
*Api.PortalPaymentApi* | [**getPaymentQuotas**](docs/PortalPaymentApi.md#getpaymentquotas) | **GET** /api/2.0/portal/payment/quotas | Получить квоты
*Api.PortalPaymentApi* | [**getPaymentUrl**](docs/PortalPaymentApi.md#getpaymenturl) | **PUT** /api/2.0/portal/payment/url | Получить URL страницы оплаты
*Api.PortalPaymentApi* | [**getPortalPrices**](docs/PortalPaymentApi.md#getportalprices) | **GET** /api/2.0/portal/payment/prices | Получить цены
*Api.PortalPaymentApi* | [**getQuotaPaymentInformation**](docs/PortalPaymentApi.md#getquotapaymentinformation) | **GET** /api/2.0/portal/payment/quota | Получить сведения об оплате квоты
*Api.PortalPaymentApi* | [**getTenantWalletSettings**](docs/PortalPaymentApi.md#gettenantwalletsettings) | **GET** /api/2.0/portal/payment/topupsettings | Получить настройки автоматического пополнения кошелька
*Api.PortalPaymentApi* | [**sendPaymentRequest**](docs/PortalPaymentApi.md#sendpaymentrequest) | **POST** /api/2.0/portal/payment/request | Отправить запрос на оплату
*Api.PortalPaymentApi* | [**setTenantWalletSettings**](docs/PortalPaymentApi.md#settenantwalletsettings) | **POST** /api/2.0/portal/payment/topupsettings | Установить настройки автоматического пополнения кошелька
*Api.PortalPaymentApi* | [**topUpDeposit**](docs/PortalPaymentApi.md#topupdeposit) | **POST** /api/2.0/portal/payment/deposit | Внести деньги на депозит
*Api.PortalPaymentApi* | [**updatePayment**](docs/PortalPaymentApi.md#updatepayment) | **PUT** /api/2.0/portal/payment/update | Обновить сумму платежа
*Api.PortalPaymentApi* | [**updateWalletPayment**](docs/PortalPaymentApi.md#updatewalletpayment) | **PUT** /api/2.0/portal/payment/updatewallet | Обновить сумму платежа из кошелька
*Api.PortalQuotaApi* | [**getPortalQuota**](docs/PortalQuotaApi.md#getportalquota) | **GET** /api/2.0/portal/quota | Получить квоту портала
*Api.PortalQuotaApi* | [**getPortalTariff**](docs/PortalQuotaApi.md#getportaltariff) | **GET** /api/2.0/portal/tariff | Получить тариф портала
*Api.PortalQuotaApi* | [**getPortalUsedSpace**](docs/PortalQuotaApi.md#getportalusedspace) | **GET** /api/2.0/portal/usedspace | Получить занятое пространство портала
*Api.PortalQuotaApi* | [**getRightQuota**](docs/PortalQuotaApi.md#getrightquota) | **GET** /api/2.0/portal/quota/right | Получить рекомендуемую квоту
*Api.PortalSettingsApi* | [**continuePortal**](docs/PortalSettingsApi.md#continueportal) | **PUT** /api/2.0/portal/continue | Восстановить портал
*Api.PortalSettingsApi* | [**deletePortal**](docs/PortalSettingsApi.md#deleteportal) | **DELETE** /api/2.0/portal/delete | Удалить портал
*Api.PortalSettingsApi* | [**getPortalInformation**](docs/PortalSettingsApi.md#getportalinformation) | **GET** /api/2.0/portal | Получить портал
*Api.PortalSettingsApi* | [**getPortalPath**](docs/PortalSettingsApi.md#getportalpath) | **GET** /api/2.0/portal/path | Получить путь к порталу
*Api.PortalSettingsApi* | [**sendDeleteInstructions**](docs/PortalSettingsApi.md#senddeleteinstructions) | **POST** /api/2.0/portal/delete | Отправить инструкции по удалению
*Api.PortalSettingsApi* | [**sendSuspendInstructions**](docs/PortalSettingsApi.md#sendsuspendinstructions) | **POST** /api/2.0/portal/suspend | Отправить инструкции по приостановке
*Api.PortalSettingsApi* | [**suspendPortal**](docs/PortalSettingsApi.md#suspendportal) | **PUT** /api/2.0/portal/suspend | Деактивировать портал
*Api.PortalUsersApi* | [**getInvitationLink**](docs/PortalUsersApi.md#getinvitationlink) | **GET** /api/2.0/portal/users/invite/{employeeType} | Получить ссылку-приглашение
*Api.PortalUsersApi* | [**getPortalUsersCount**](docs/PortalUsersApi.md#getportaluserscount) | **GET** /api/2.0/portal/userscount | Получить количество пользователей портала
*Api.PortalUsersApi* | [**getUserById**](docs/PortalUsersApi.md#getuserbyid) | **GET** /api/2.0/portal/users/{userID} | Получить пользователя по идентификатору
*Api.PortalUsersApi* | [**markGiftMessageAsRead**](docs/PortalUsersApi.md#markgiftmessageasread) | **POST** /api/2.0/portal/present/mark | Отметить сообщение о подарке как прочитанное
*Api.PortalUsersApi* | [**sendCongratulations**](docs/PortalUsersApi.md#sendcongratulations) | **POST** /api/2.0/portal/sendcongratulations | Отправить поздравления
*Api.RoomsApi* | [**addRoomTags**](docs/RoomsApi.md#addroomtags) | **PUT** /api/2.0/files/rooms/{id}/tags | Добавить теги комнаты
*Api.RoomsApi* | [**archiveRoom**](docs/RoomsApi.md#archiveroom) | **PUT** /api/2.0/files/rooms/{id}/archive | Архивировать комнату
*Api.RoomsApi* | [**changeRoomCover**](docs/RoomsApi.md#changeroomcover) | **POST** /api/2.0/files/rooms/{id}/cover | Изменить обложку комнаты
*Api.RoomsApi* | [**createRoom**](docs/RoomsApi.md#createroom) | **POST** /api/2.0/files/rooms | Создать комнату
*Api.RoomsApi* | [**createRoomFromTemplate**](docs/RoomsApi.md#createroomfromtemplate) | **POST** /api/2.0/files/rooms/fromtemplate | Создать комнату из шаблона
*Api.RoomsApi* | [**createRoomLogo**](docs/RoomsApi.md#createroomlogo) | **POST** /api/2.0/files/rooms/{id}/logo | Создать логотип комнаты
*Api.RoomsApi* | [**createRoomTag**](docs/RoomsApi.md#createroomtag) | **POST** /api/2.0/files/tags | Создать тег
*Api.RoomsApi* | [**createRoomTemplate**](docs/RoomsApi.md#createroomtemplate) | **POST** /api/2.0/files/roomtemplate | Начать создание шаблона комнаты
*Api.RoomsApi* | [**createRoomThirdParty**](docs/RoomsApi.md#createroomthirdparty) | **POST** /api/2.0/files/rooms/thirdparty/{id} | Создать стороннюю комнату
*Api.RoomsApi* | [**deleteCustomTags**](docs/RoomsApi.md#deletecustomtags) | **DELETE** /api/2.0/files/tags | Удалить теги
*Api.RoomsApi* | [**deleteRoom**](docs/RoomsApi.md#deleteroom) | **DELETE** /api/2.0/files/rooms/{id} | Удалить комнату
*Api.RoomsApi* | [**deleteRoomLogo**](docs/RoomsApi.md#deleteroomlogo) | **DELETE** /api/2.0/files/rooms/{id}/logo | Удалить логотип комнаты
*Api.RoomsApi* | [**deleteRoomTags**](docs/RoomsApi.md#deleteroomtags) | **DELETE** /api/2.0/files/rooms/{id}/tags | Удалить теги комнаты
*Api.RoomsApi* | [**getNewRoomItems**](docs/RoomsApi.md#getnewroomitems) | **GET** /api/2.0/files/rooms/{id}/news | Получить новые элементы комнаты
*Api.RoomsApi* | [**getPublicSettings**](docs/RoomsApi.md#getpublicsettings) | **GET** /api/2.0/files/roomtemplate/{id}/public | Получить публичные настройки
*Api.RoomsApi* | [**getRoomCovers**](docs/RoomsApi.md#getroomcovers) | **GET** /api/2.0/files/rooms/covers | Получить обложки
*Api.RoomsApi* | [**getRoomCreatingStatus**](docs/RoomsApi.md#getroomcreatingstatus) | **GET** /api/2.0/files/rooms/fromtemplate/status | Получить ход создания комнаты
*Api.RoomsApi* | [**getRoomIndexExport**](docs/RoomsApi.md#getroomindexexport) | **GET** /api/2.0/files/rooms/indexexport | Получить экспорт индекса комнаты
*Api.RoomsApi* | [**getRoomInfo**](docs/RoomsApi.md#getroominfo) | **GET** /api/2.0/files/rooms/{id} | Получить сведения о комнате
*Api.RoomsApi* | [**getRoomLinks**](docs/RoomsApi.md#getroomlinks) | **GET** /api/2.0/files/rooms/{id}/links | Получить ссылки комнаты
*Api.RoomsApi* | [**getRoomSecurityInfo**](docs/RoomsApi.md#getroomsecurityinfo) | **GET** /api/2.0/files/rooms/{id}/share | Получить права доступа к комнате
*Api.RoomsApi* | [**getRoomTagsInfo**](docs/RoomsApi.md#getroomtagsinfo) | **GET** /api/2.0/files/tags | Получить теги
*Api.RoomsApi* | [**getRoomTemplateCreatingStatus**](docs/RoomsApi.md#getroomtemplatecreatingstatus) | **GET** /api/2.0/files/roomtemplate/status | Получить статус создания шаблона комнаты
*Api.RoomsApi* | [**getRoomsFolder**](docs/RoomsApi.md#getroomsfolder) | **GET** /api/2.0/files/rooms | Получить комнаты
*Api.RoomsApi* | [**getRoomsNewItems**](docs/RoomsApi.md#getroomsnewitems) | **GET** /api/2.0/files/rooms/news | Получить новые элементы комнаты
*Api.RoomsApi* | [**getRoomsPrimaryExternalLink**](docs/RoomsApi.md#getroomsprimaryexternallink) | **GET** /api/2.0/files/rooms/{id}/link | Получить основную внешнюю ссылку комнаты
*Api.RoomsApi* | [**pinRoom**](docs/RoomsApi.md#pinroom) | **PUT** /api/2.0/files/rooms/{id}/pin | Закрепить комнату
*Api.RoomsApi* | [**reorderRoom**](docs/RoomsApi.md#reorderroom) | **PUT** /api/2.0/files/rooms/{id}/reorder | Изменить порядок комнаты
*Api.RoomsApi* | [**resendEmailInvitations**](docs/RoomsApi.md#resendemailinvitations) | **POST** /api/2.0/files/rooms/{id}/resend | Повторно отправить приглашения в комнату
*Api.RoomsApi* | [**setPublicSettings**](docs/RoomsApi.md#setpublicsettings) | **PUT** /api/2.0/files/roomtemplate/public | Установить публичные настройки
*Api.RoomsApi* | [**setRoomLink**](docs/RoomsApi.md#setroomlink) | **PUT** /api/2.0/files/rooms/{id}/links | Установить внешнюю ссылку комнаты или ссылку-приглашение
*Api.RoomsApi* | [**setRoomSecurity**](docs/RoomsApi.md#setroomsecurity) | **PUT** /api/2.0/files/rooms/{id}/share | Установить права доступа к комнате
*Api.RoomsApi* | [**startRoomIndexExport**](docs/RoomsApi.md#startroomindexexport) | **POST** /api/2.0/files/rooms/{id}/indexexport | Начать экспорт индекса комнаты
*Api.RoomsApi* | [**terminateRoomIndexExport**](docs/RoomsApi.md#terminateroomindexexport) | **DELETE** /api/2.0/files/rooms/indexexport | Прервать экспорт индекса комнаты
*Api.RoomsApi* | [**unarchiveRoom**](docs/RoomsApi.md#unarchiveroom) | **PUT** /api/2.0/files/rooms/{id}/unarchive | Вернуть комнату из архива
*Api.RoomsApi* | [**unpinRoom**](docs/RoomsApi.md#unpinroom) | **PUT** /api/2.0/files/rooms/{id}/unpin | Открепить комнату
*Api.RoomsApi* | [**updateRoom**](docs/RoomsApi.md#updateroom) | **PUT** /api/2.0/files/rooms/{id} | Обновить комнату
*Api.RoomsApi* | [**uploadRoomLogo**](docs/RoomsApi.md#uploadroomlogo) | **POST** /api/2.0/files/logos | Загрузить изображение логотипа комнаты
*Api.SecurityAccessToDevToolsApi* | [**setTenantDevToolsAccessSettings**](docs/SecurityAccessToDevToolsApi.md#settenantdevtoolsaccesssettings) | **POST** /api/2.0/settings/devtoolsaccess | Установить настройки доступа к инструментам разработчика
*Api.SecurityActiveConnectionsApi* | [**getAllActiveConnections**](docs/SecurityActiveConnectionsApi.md#getallactiveconnections) | **GET** /api/2.0/security/activeconnections | Получить активные подключения
*Api.SecurityActiveConnectionsApi* | [**logOutActiveConnection**](docs/SecurityActiveConnectionsApi.md#logoutactiveconnection) | **PUT** /api/2.0/security/activeconnections/logout/{loginEventId} | Выйти из подключения
*Api.SecurityActiveConnectionsApi* | [**logOutAllActiveConnectionsChangePassword**](docs/SecurityActiveConnectionsApi.md#logoutallactiveconnectionschangepassword) | **PUT** /api/2.0/security/activeconnections/logoutallchangepassword | Выйти и изменить пароль
*Api.SecurityActiveConnectionsApi* | [**logOutAllActiveConnectionsForUser**](docs/SecurityActiveConnectionsApi.md#logoutallactiveconnectionsforuser) | **PUT** /api/2.0/security/activeconnections/logoutall/{userId} | Завершить сеанс пользователя по идентификатору
*Api.SecurityActiveConnectionsApi* | [**logOutAllExceptThisConnection**](docs/SecurityActiveConnectionsApi.md#logoutallexceptthisconnection) | **PUT** /api/2.0/security/activeconnections/logoutallexceptthis | Выйти из всех подключений, кроме текущего
*Api.SecurityAuditTrailDataApi* | [**createAuditTrailReport**](docs/SecurityAuditTrailDataApi.md#createaudittrailreport) | **POST** /api/2.0/security/audit/events/report | Создать отчёт журнала аудита
*Api.SecurityAuditTrailDataApi* | [**getAuditEventsByFilter**](docs/SecurityAuditTrailDataApi.md#getauditeventsbyfilter) | **GET** /api/2.0/security/audit/events/filter | Получить отфильтрованные данные журнала аудита
*Api.SecurityAuditTrailDataApi* | [**getAuditSettings**](docs/SecurityAuditTrailDataApi.md#getauditsettings) | **GET** /api/2.0/security/audit/settings/lifetime | Получить настройки журнала аудита
*Api.SecurityAuditTrailDataApi* | [**getAuditTrailMappers**](docs/SecurityAuditTrailDataApi.md#getaudittrailmappers) | **GET** /api/2.0/security/audit/mappers | Получить сопоставления журнала аудита
*Api.SecurityAuditTrailDataApi* | [**getAuditTrailTypes**](docs/SecurityAuditTrailDataApi.md#getaudittrailtypes) | **GET** /api/2.0/security/audit/types | Получить типы журнала аудита
*Api.SecurityAuditTrailDataApi* | [**getLastAuditEvents**](docs/SecurityAuditTrailDataApi.md#getlastauditevents) | **GET** /api/2.0/security/audit/events/last | Получить данные журнала аудита
*Api.SecurityAuditTrailDataApi* | [**setAuditSettings**](docs/SecurityAuditTrailDataApi.md#setauditsettings) | **POST** /api/2.0/security/audit/settings/lifetime | Установить настройки журнала аудита
*Api.SecurityBannersVisibilityApi* | [**setTenantBannerSettings**](docs/SecurityBannersVisibilityApi.md#settenantbannersettings) | **POST** /api/2.0/settings/banner | Установить настройки видимости рекламных баннеров
*Api.SecurityCSPApi* | [**configureCsp**](docs/SecurityCSPApi.md#configurecsp) | **POST** /api/2.0/security/csp | Настроить параметры CSP
*Api.SecurityCSPApi* | [**getCspSettings**](docs/SecurityCSPApi.md#getcspsettings) | **GET** /api/2.0/security/csp | Получить настройки CSP
*Api.SecurityFirebaseApi* | [**docRegisterPusnNotificationDevice**](docs/SecurityFirebaseApi.md#docregisterpusnnotificationdevice) | **POST** /api/2.0/settings/push/docregisterdevice | Сохранить токен устройства Firebase для Documents
*Api.SecurityFirebaseApi* | [**subscribeDocumentsPushNotification**](docs/SecurityFirebaseApi.md#subscribedocumentspushnotification) | **PUT** /api/2.0/settings/push/docsubscribe | Подписаться на push-уведомления Documents
*Api.SecurityLoginHistoryApi* | [**createLoginHistoryReport**](docs/SecurityLoginHistoryApi.md#createloginhistoryreport) | **POST** /api/2.0/security/audit/login/report | Создать отчёт об истории входов
*Api.SecurityLoginHistoryApi* | [**getLastLoginEvents**](docs/SecurityLoginHistoryApi.md#getlastloginevents) | **GET** /api/2.0/security/audit/login/last | Получить историю входов
*Api.SecurityLoginHistoryApi* | [**getLoginEventsByFilter**](docs/SecurityLoginHistoryApi.md#getlogineventsbyfilter) | **GET** /api/2.0/security/audit/login/filter | Получить отфильтрованные события входа
*Api.SecurityOAuth2Api* | [**generateJwtToken**](docs/SecurityOAuth2Api.md#generatejwttoken) | **GET** /api/2.0/security/oauth2/token | Создать JWT-токен
*Api.SecuritySMTPSettingsApi* | [**getSmtpOperationStatus**](docs/SecuritySMTPSettingsApi.md#getsmtpoperationstatus) | **GET** /api/2.0/smtpsettings/smtp/test/status | Получить статус проверки настроек SMTP
*Api.SecuritySMTPSettingsApi* | [**getSmtpSettings**](docs/SecuritySMTPSettingsApi.md#getsmtpsettings) | **GET** /api/2.0/smtpsettings/smtp | Получить настройки SMTP
*Api.SecuritySMTPSettingsApi* | [**resetSmtpSettings**](docs/SecuritySMTPSettingsApi.md#resetsmtpsettings) | **DELETE** /api/2.0/smtpsettings/smtp | Сбросить настройки SMTP
*Api.SecuritySMTPSettingsApi* | [**saveSmtpSettings**](docs/SecuritySMTPSettingsApi.md#savesmtpsettings) | **POST** /api/2.0/smtpsettings/smtp | Сохранить настройки SMTP
*Api.SecuritySMTPSettingsApi* | [**testSmtpSettings**](docs/SecuritySMTPSettingsApi.md#testsmtpsettings) | **GET** /api/2.0/smtpsettings/smtp/test | Проверить настройки SMTP
*Api.SettingsAccessToDevToolsApi* | [**getTenantAccessDevToolsSettings**](docs/SettingsAccessToDevToolsApi.md#gettenantaccessdevtoolssettings) | **GET** /api/2.0/settings/devtoolsaccess | Получить настройки доступа к инструментам разработчика
*Api.SettingsAuthorizationApi* | [**getAuthServices**](docs/SettingsAuthorizationApi.md#getauthservices) | **GET** /api/2.0/settings/authservice | Получить службы авторизации
*Api.SettingsAuthorizationApi* | [**saveAuthKeys**](docs/SettingsAuthorizationApi.md#saveauthkeys) | **POST** /api/2.0/settings/authservice | Сохранить ключи авторизации
*Api.SettingsBannersVisibilityApi* | [**getTenantBannerSettings**](docs/SettingsBannersVisibilityApi.md#gettenantbannersettings) | **GET** /api/2.0/settings/banner | Получить настройки видимости рекламных баннеров
*Api.SettingsCommonSettingsApi* | [**closeAdminHelper**](docs/SettingsCommonSettingsApi.md#closeadminhelper) | **PUT** /api/2.0/settings/closeadminhelper | Закрыть помощник администратора
*Api.SettingsCommonSettingsApi* | [**completeWizard**](docs/SettingsCommonSettingsApi.md#completewizard) | **PUT** /api/2.0/settings/wizard/complete | Завершить настройку мастера
*Api.SettingsCommonSettingsApi* | [**configureDeepLink**](docs/SettingsCommonSettingsApi.md#configuredeeplink) | **POST** /api/2.0/settings/deeplink | Настроить параметры глубоких ссылок
*Api.SettingsCommonSettingsApi* | [**deletePortalColorTheme**](docs/SettingsCommonSettingsApi.md#deleteportalcolortheme) | **DELETE** /api/2.0/settings/colortheme | Удалить цветовую тему
*Api.SettingsCommonSettingsApi* | [**getDeepLinkSettings**](docs/SettingsCommonSettingsApi.md#getdeeplinksettings) | **GET** /api/2.0/settings/deeplink | Получить настройки глубоких ссылок
*Api.SettingsCommonSettingsApi* | [**getPaymentSettings**](docs/SettingsCommonSettingsApi.md#getpaymentsettings) | **GET** /api/2.0/settings/payment | Получить настройки оплаты
*Api.SettingsCommonSettingsApi* | [**getPortalColorTheme**](docs/SettingsCommonSettingsApi.md#getportalcolortheme) | **GET** /api/2.0/settings/colortheme | Получить цветовую тему
*Api.SettingsCommonSettingsApi* | [**getPortalHostname**](docs/SettingsCommonSettingsApi.md#getportalhostname) | **GET** /api/2.0/settings/machine | Получить имя узла
*Api.SettingsCommonSettingsApi* | [**getPortalLogo**](docs/SettingsCommonSettingsApi.md#getportallogo) | **GET** /api/2.0/settings/logo | Получить логотип портала
*Api.SettingsCommonSettingsApi* | [**getPortalSettings**](docs/SettingsCommonSettingsApi.md#getportalsettings) | **GET** /api/2.0/settings | Получить настройки портала
*Api.SettingsCommonSettingsApi* | [**getSocketSettings**](docs/SettingsCommonSettingsApi.md#getsocketsettings) | **GET** /api/2.0/settings/socket | Получить настройки сокета
*Api.SettingsCommonSettingsApi* | [**getSupportedCultures**](docs/SettingsCommonSettingsApi.md#getsupportedcultures) | **GET** /api/2.0/settings/cultures | Получить поддерживаемые языки
*Api.SettingsCommonSettingsApi* | [**getTenantUserInvitationSettings**](docs/SettingsCommonSettingsApi.md#gettenantuserinvitationsettings) | **GET** /api/2.0/settings/invitationsettings | Получить настройки приглашения пользователей
*Api.SettingsCommonSettingsApi* | [**getTimeZones**](docs/SettingsCommonSettingsApi.md#gettimezones) | **GET** /api/2.0/settings/timezones | Получить часовые пояса
*Api.SettingsCommonSettingsApi* | [**saveDnsSettings**](docs/SettingsCommonSettingsApi.md#savednssettings) | **PUT** /api/2.0/settings/dns | Сохранить настройки DNS
*Api.SettingsCommonSettingsApi* | [**saveMailDomainSettings**](docs/SettingsCommonSettingsApi.md#savemaildomainsettings) | **POST** /api/2.0/settings/maildomainsettings | Сохранить настройки почтового домена
*Api.SettingsCommonSettingsApi* | [**savePortalColorTheme**](docs/SettingsCommonSettingsApi.md#saveportalcolortheme) | **PUT** /api/2.0/settings/colortheme | Сохранить цветовую тему
*Api.SettingsCommonSettingsApi* | [**updateEmailActivationSettings**](docs/SettingsCommonSettingsApi.md#updateemailactivationsettings) | **PUT** /api/2.0/settings/emailactivation | Обновить настройки активации по электронной почте
*Api.SettingsCommonSettingsApi* | [**updateInvitationSettings**](docs/SettingsCommonSettingsApi.md#updateinvitationsettings) | **PUT** /api/2.0/settings/invitationsettings | Обновить настройки приглашения пользователей
*Api.SettingsCookiesApi* | [**getCookieSettings**](docs/SettingsCookiesApi.md#getcookiesettings) | **GET** /api/2.0/settings/cookiesettings | Получить срок действия файлов cookie
*Api.SettingsCookiesApi* | [**updateCookieSettings**](docs/SettingsCookiesApi.md#updatecookiesettings) | **PUT** /api/2.0/settings/cookiesettings | Обновить срок действия файлов cookie
*Api.SettingsCustomNavigationApi* | [**createCustomNavigationItem**](docs/SettingsCustomNavigationApi.md#createcustomnavigationitem) | **POST** /api/2.0/settings/customnavigation/create | Добавить пользовательский элемент навигации
*Api.SettingsCustomNavigationApi* | [**deleteCustomNavigationItem**](docs/SettingsCustomNavigationApi.md#deletecustomnavigationitem) | **DELETE** /api/2.0/settings/customnavigation/delete/{id} | Удалить пользовательский элемент навигации
*Api.SettingsCustomNavigationApi* | [**getCustomNavigationItem**](docs/SettingsCustomNavigationApi.md#getcustomnavigationitem) | **GET** /api/2.0/settings/customnavigation/get/{id} | Получить пользовательский элемент навигации по идентификатору
*Api.SettingsCustomNavigationApi* | [**getCustomNavigationItemSample**](docs/SettingsCustomNavigationApi.md#getcustomnavigationitemsample) | **GET** /api/2.0/settings/customnavigation/getsample | Получить пример пользовательского элемента навигации
*Api.SettingsCustomNavigationApi* | [**getCustomNavigationItems**](docs/SettingsCustomNavigationApi.md#getcustomnavigationitems) | **GET** /api/2.0/settings/customnavigation/getall | Получить пользовательские элементы навигации
*Api.SettingsEncryptionApi* | [**getStorageEncryptionProgress**](docs/SettingsEncryptionApi.md#getstorageencryptionprogress) | **GET** /api/2.0/settings/encryption/progress | Получить ход шифрования хранилища
*Api.SettingsEncryptionApi* | [**getStorageEncryptionSettings**](docs/SettingsEncryptionApi.md#getstorageencryptionsettings) | **GET** /api/2.0/settings/encryption/settings | Получить настройки шифрования хранилища
*Api.SettingsEncryptionApi* | [**startStorageEncryption**](docs/SettingsEncryptionApi.md#startstorageencryption) | **POST** /api/2.0/settings/encryption/start | Начать шифрование хранилища
*Api.SettingsGreetingSettingsApi* | [**getGreetingSettings**](docs/SettingsGreetingSettingsApi.md#getgreetingsettings) | **GET** /api/2.0/settings/greetingsettings | Получить настройки приветствия
*Api.SettingsGreetingSettingsApi* | [**getIsDefaultGreetingSettings**](docs/SettingsGreetingSettingsApi.md#getisdefaultgreetingsettings) | **GET** /api/2.0/settings/greetingsettings/isdefault | Проверить настройки приветствия по умолчанию
*Api.SettingsGreetingSettingsApi* | [**restoreGreetingSettings**](docs/SettingsGreetingSettingsApi.md#restoregreetingsettings) | **POST** /api/2.0/settings/greetingsettings/restore | Восстановить настройки приветствия
*Api.SettingsGreetingSettingsApi* | [**saveGreetingSettings**](docs/SettingsGreetingSettingsApi.md#savegreetingsettings) | **POST** /api/2.0/settings/greetingsettings | Сохранить настройки приветствия
*Api.SettingsIPRestrictionsApi* | [**getIpRestrictions**](docs/SettingsIPRestrictionsApi.md#getiprestrictions) | **GET** /api/2.0/settings/iprestrictions | Получить IP-ограничения портала
*Api.SettingsIPRestrictionsApi* | [**readIpRestrictionsSettings**](docs/SettingsIPRestrictionsApi.md#readiprestrictionssettings) | **GET** /api/2.0/settings/iprestrictions/settings | Получить настройки IP-ограничений
*Api.SettingsIPRestrictionsApi* | [**saveIpRestrictions**](docs/SettingsIPRestrictionsApi.md#saveiprestrictions) | **PUT** /api/2.0/settings/iprestrictions | Обновить IP-ограничения
*Api.SettingsIPRestrictionsApi* | [**updateIpRestrictionsSettings**](docs/SettingsIPRestrictionsApi.md#updateiprestrictionssettings) | **PUT** /api/2.0/settings/iprestrictions/settings | Обновить настройки IP-ограничений
*Api.SettingsLicenseApi* | [**acceptLicense**](docs/SettingsLicenseApi.md#acceptlicense) | **POST** /api/2.0/settings/license/accept | Активировать лицензию
*Api.SettingsLicenseApi* | [**getIsLicenseRequired**](docs/SettingsLicenseApi.md#getislicenserequired) | **GET** /api/2.0/settings/license/required | Запросить лицензию
*Api.SettingsLicenseApi* | [**refreshLicense**](docs/SettingsLicenseApi.md#refreshlicense) | **GET** /api/2.0/settings/license/refresh | Обновить лицензию
*Api.SettingsLicenseApi* | [**uploadLicense**](docs/SettingsLicenseApi.md#uploadlicense) | **POST** /api/2.0/settings/license | Загрузить лицензию
*Api.SettingsLoginSettingsApi* | [**getLoginSettings**](docs/SettingsLoginSettingsApi.md#getloginsettings) | **GET** /api/2.0/settings/security/loginsettings | Получить настройки входа
*Api.SettingsLoginSettingsApi* | [**setDefaultLoginSettings**](docs/SettingsLoginSettingsApi.md#setdefaultloginsettings) | **DELETE** /api/2.0/settings/security/loginsettings | Сбросить настройки входа
*Api.SettingsLoginSettingsApi* | [**updateLoginSettings**](docs/SettingsLoginSettingsApi.md#updateloginsettings) | **PUT** /api/2.0/settings/security/loginsettings | Обновить настройки входа
*Api.SettingsMessagesApi* | [**enableAdminMessageSettings**](docs/SettingsMessagesApi.md#enableadminmessagesettings) | **POST** /api/2.0/settings/messagesettings | Включить настройки сообщений администратора
*Api.SettingsMessagesApi* | [**sendAdminMail**](docs/SettingsMessagesApi.md#sendadminmail) | **POST** /api/2.0/settings/sendadmmail | Отправить сообщение администратору
*Api.SettingsMessagesApi* | [**sendJoinInviteMail**](docs/SettingsMessagesApi.md#sendjoininvitemail) | **POST** /api/2.0/settings/sendjoininvite | Отправляет письмо-приглашение
*Api.SettingsNotificationsApi* | [**getNotificationSettings**](docs/SettingsNotificationsApi.md#getnotificationsettings) | **GET** /api/2.0/settings/notification/{type} | Проверить доступность уведомлений
*Api.SettingsNotificationsApi* | [**getRoomsNotificationSettings**](docs/SettingsNotificationsApi.md#getroomsnotificationsettings) | **GET** /api/2.0/settings/notification/rooms | Получить настройки уведомлений комнаты
*Api.SettingsNotificationsApi* | [**setNotificationSettings**](docs/SettingsNotificationsApi.md#setnotificationsettings) | **POST** /api/2.0/settings/notification | Включить уведомления
*Api.SettingsNotificationsApi* | [**setRoomsNotificationStatus**](docs/SettingsNotificationsApi.md#setroomsnotificationstatus) | **POST** /api/2.0/settings/notification/rooms | Установить статус уведомлений комнаты
*Api.SettingsOwnerApi* | [**sendOwnerChangeInstructions**](docs/SettingsOwnerApi.md#sendownerchangeinstructions) | **POST** /api/2.0/settings/owner | Отправить инструкции по смене владельца
*Api.SettingsOwnerApi* | [**updatePortalOwner**](docs/SettingsOwnerApi.md#updateportalowner) | **PUT** /api/2.0/settings/owner | Обновить владельца портала
*Api.SettingsQuotaApi* | [**getUserQuotaSettings**](docs/SettingsQuotaApi.md#getuserquotasettings) | **GET** /api/2.0/settings/userquotasettings | Получить настройки квот пользователей
*Api.SettingsQuotaApi* | [**saveRoomQuotaSettings**](docs/SettingsQuotaApi.md#saveroomquotasettings) | **POST** /api/2.0/settings/roomquotasettings | Сохранить настройки квоты комнаты
*Api.SettingsQuotaApi* | [**setTenantQuotaSettings**](docs/SettingsQuotaApi.md#settenantquotasettings) | **PUT** /api/2.0/settings/tenantquotasettings | Сохранить настройки квоты арендатора
*Api.SettingsRebrandingApi* | [**deleteAdditionalWhiteLabelSettings**](docs/SettingsRebrandingApi.md#deleteadditionalwhitelabelsettings) | **DELETE** /api/2.0/settings/rebranding/additional | Удалить дополнительные настройки white label
*Api.SettingsRebrandingApi* | [**deleteCompanyWhiteLabelSettings**](docs/SettingsRebrandingApi.md#deletecompanywhitelabelsettings) | **DELETE** /api/2.0/settings/rebranding/company | Удалить корпоративные настройки white label
*Api.SettingsRebrandingApi* | [**getAdditionalWhiteLabelSettings**](docs/SettingsRebrandingApi.md#getadditionalwhitelabelsettings) | **GET** /api/2.0/settings/rebranding/additional | Получить дополнительные настройки white label
*Api.SettingsRebrandingApi* | [**getCompanyWhiteLabelSettings**](docs/SettingsRebrandingApi.md#getcompanywhitelabelsettings) | **GET** /api/2.0/settings/rebranding/company | Получить корпоративные настройки white label
*Api.SettingsRebrandingApi* | [**getEnableWhitelabel**](docs/SettingsRebrandingApi.md#getenablewhitelabel) | **GET** /api/2.0/settings/enablewhitelabel | Проверить доступность white label
*Api.SettingsRebrandingApi* | [**getIsDefaultWhiteLabelLogoText**](docs/SettingsRebrandingApi.md#getisdefaultwhitelabellogotext) | **GET** /api/2.0/settings/whitelabel/logotext/isdefault | Проверить текст логотипа white label по умолчанию
*Api.SettingsRebrandingApi* | [**getIsDefaultWhiteLabelLogos**](docs/SettingsRebrandingApi.md#getisdefaultwhitelabellogos) | **GET** /api/2.0/settings/whitelabel/logos/isdefault | Проверить логотипы white label по умолчанию
*Api.SettingsRebrandingApi* | [**getLicensorData**](docs/SettingsRebrandingApi.md#getlicensordata) | **GET** /api/2.0/settings/companywhitelabel | Получить данные лицензиара
*Api.SettingsRebrandingApi* | [**getWhiteLabelLogoText**](docs/SettingsRebrandingApi.md#getwhitelabellogotext) | **GET** /api/2.0/settings/whitelabel/logotext | Получить текст логотипа white label
*Api.SettingsRebrandingApi* | [**getWhiteLabelLogos**](docs/SettingsRebrandingApi.md#getwhitelabellogos) | **GET** /api/2.0/settings/whitelabel/logos | Получить логотипы white label
*Api.SettingsRebrandingApi* | [**restoreWhiteLabelLogoText**](docs/SettingsRebrandingApi.md#restorewhitelabellogotext) | **PUT** /api/2.0/settings/whitelabel/logotext/restore | Восстановить текст логотипа white label
*Api.SettingsRebrandingApi* | [**restoreWhiteLabelLogos**](docs/SettingsRebrandingApi.md#restorewhitelabellogos) | **PUT** /api/2.0/settings/whitelabel/logos/restore | Восстановить логотипы white label
*Api.SettingsRebrandingApi* | [**saveAdditionalWhiteLabelSettings**](docs/SettingsRebrandingApi.md#saveadditionalwhitelabelsettings) | **POST** /api/2.0/settings/rebranding/additional | Сохранить дополнительные настройки white label
*Api.SettingsRebrandingApi* | [**saveCompanyWhiteLabelSettings**](docs/SettingsRebrandingApi.md#savecompanywhitelabelsettings) | **POST** /api/2.0/settings/rebranding/company | Сохранить корпоративные настройки white label
*Api.SettingsRebrandingApi* | [**saveWhiteLabelLogoText**](docs/SettingsRebrandingApi.md#savewhitelabellogotext) | **POST** /api/2.0/settings/whitelabel/logotext/save | Сохранить настройки текста логотипа white label
*Api.SettingsRebrandingApi* | [**saveWhiteLabelSettings**](docs/SettingsRebrandingApi.md#savewhitelabelsettings) | **POST** /api/2.0/settings/whitelabel/logos/save | Сохранить логотипы white label
*Api.SettingsRebrandingApi* | [**saveWhiteLabelSettingsFromFiles**](docs/SettingsRebrandingApi.md#savewhitelabelsettingsfromfiles) | **POST** /api/2.0/settings/whitelabel/logos/savefromfiles | Сохранить логотипы white label из файлов
*Api.SettingsSSOApi* | [**getDefaultSsoSettingsV2**](docs/SettingsSSOApi.md#getdefaultssosettingsv2) | **GET** /api/2.0/settings/ssov2/default | Получить настройки SSO по умолчанию
*Api.SettingsSSOApi* | [**getSsoSettingsV2**](docs/SettingsSSOApi.md#getssosettingsv2) | **GET** /api/2.0/settings/ssov2 | Получить настройки SSO
*Api.SettingsSSOApi* | [**getSsoSettingsV2Constants**](docs/SettingsSSOApi.md#getssosettingsv2constants) | **GET** /api/2.0/settings/ssov2/constants | Получить константы настроек SSO
*Api.SettingsSSOApi* | [**resetSsoSettingsV2**](docs/SettingsSSOApi.md#resetssosettingsv2) | **DELETE** /api/2.0/settings/ssov2 | Сбросить настройки SSO
*Api.SettingsSSOApi* | [**saveSsoSettingsV2**](docs/SettingsSSOApi.md#savessosettingsv2) | **POST** /api/2.0/settings/ssov2 | Сохранить настройки SSO
*Api.SettingsSecurityApi* | [**getEnabledModules**](docs/SettingsSecurityApi.md#getenabledmodules) | **GET** /api/2.0/settings/security/modules | Получить включённые модули
*Api.SettingsSecurityApi* | [**getIsProductAdministrator**](docs/SettingsSecurityApi.md#getisproductadministrator) | **GET** /api/2.0/settings/security/administrator | Проверить администратора продукта
*Api.SettingsSecurityApi* | [**getPasswordSettings**](docs/SettingsSecurityApi.md#getpasswordsettings) | **GET** /api/2.0/settings/security/password | Получить настройки пароля
*Api.SettingsSecurityApi* | [**getProductAdministrators**](docs/SettingsSecurityApi.md#getproductadministrators) | **GET** /api/2.0/settings/security/administrator/{productid} | Получить администраторов продукта
*Api.SettingsSecurityApi* | [**getWebItemSecurityInfo**](docs/SettingsSecurityApi.md#getwebitemsecurityinfo) | **GET** /api/2.0/settings/security/{id} | Получить доступность модулей
*Api.SettingsSecurityApi* | [**getWebItemSettingsSecurityInfo**](docs/SettingsSecurityApi.md#getwebitemsettingssecurityinfo) | **GET** /api/2.0/settings/security | Получить настройки безопасности
*Api.SettingsSecurityApi* | [**setAccessToWebItems**](docs/SettingsSecurityApi.md#setaccesstowebitems) | **PUT** /api/2.0/settings/security/access | Установить настройки безопасности для модулей
*Api.SettingsSecurityApi* | [**setProductAdministrator**](docs/SettingsSecurityApi.md#setproductadministrator) | **PUT** /api/2.0/settings/security/administrator | Назначить администратора продукта
*Api.SettingsSecurityApi* | [**setWebItemSecurity**](docs/SettingsSecurityApi.md#setwebitemsecurity) | **PUT** /api/2.0/settings/security | Установить настройки безопасности модулей
*Api.SettingsSecurityApi* | [**updatePasswordSettings**](docs/SettingsSecurityApi.md#updatepasswordsettings) | **PUT** /api/2.0/settings/security/password | Установить настройки пароля
*Api.SettingsStatisticsApi* | [**getSpaceUsageStatistics**](docs/SettingsStatisticsApi.md#getspaceusagestatistics) | **GET** /api/2.0/settings/statistics/spaceusage/{id} | Получить статистику использования пространства
*Api.SettingsStorageApi* | [**getAllBackupStorages**](docs/SettingsStorageApi.md#getallbackupstorages) | **GET** /api/2.0/settings/storage/backup | Получить хранилища резервных копий
*Api.SettingsStorageApi* | [**getAllCdnStorages**](docs/SettingsStorageApi.md#getallcdnstorages) | **GET** /api/2.0/settings/storage/cdn | Получить хранилища CDN
*Api.SettingsStorageApi* | [**getAllStorages**](docs/SettingsStorageApi.md#getallstorages) | **GET** /api/2.0/settings/storage | Получить хранилища
*Api.SettingsStorageApi* | [**getAmazonS3Regions**](docs/SettingsStorageApi.md#getamazons3regions) | **GET** /api/2.0/settings/storage/s3/regions | Получить регионы Amazon
*Api.SettingsStorageApi* | [**getStorageProgress**](docs/SettingsStorageApi.md#getstorageprogress) | **GET** /api/2.0/settings/storage/progress | Получить состояние хранилища
*Api.SettingsStorageApi* | [**resetCdnToDefault**](docs/SettingsStorageApi.md#resetcdntodefault) | **DELETE** /api/2.0/settings/storage/cdn | Сбросить настройки хранилища CDN
*Api.SettingsStorageApi* | [**resetStorageToDefault**](docs/SettingsStorageApi.md#resetstoragetodefault) | **DELETE** /api/2.0/settings/storage | Сбросить настройки хранилища
*Api.SettingsStorageApi* | [**updateCdnStorage**](docs/SettingsStorageApi.md#updatecdnstorage) | **PUT** /api/2.0/settings/storage/cdn | Обновить хранилище CDN
*Api.SettingsStorageApi* | [**updateStorage**](docs/SettingsStorageApi.md#updatestorage) | **PUT** /api/2.0/settings/storage | Обновить хранилище
*Api.SettingsTFASettingsApi* | [**getTfaAppCodes**](docs/SettingsTFASettingsApi.md#gettfaappcodes) | **GET** /api/2.0/settings/tfaappcodes | Получить коды TFA
*Api.SettingsTFASettingsApi* | [**getTfaConfirmUrl**](docs/SettingsTFASettingsApi.md#gettfaconfirmurl) | **GET** /api/2.0/settings/tfaapp/confirm | Получить письмо с подтверждением
*Api.SettingsTFASettingsApi* | [**getTfaSettings**](docs/SettingsTFASettingsApi.md#gettfasettings) | **GET** /api/2.0/settings/tfaapp | Получить настройки TFA
*Api.SettingsTFASettingsApi* | [**tfaAppGenerateSetupCode**](docs/SettingsTFASettingsApi.md#tfaappgeneratesetupcode) | **GET** /api/2.0/settings/tfaapp/setup | Создать код настройки
*Api.SettingsTFASettingsApi* | [**tfaValidateAuthCode**](docs/SettingsTFASettingsApi.md#tfavalidateauthcode) | **POST** /api/2.0/settings/tfaapp/validate | Проверить код TFA
*Api.SettingsTFASettingsApi* | [**unlinkTfaApp**](docs/SettingsTFASettingsApi.md#unlinktfaapp) | **PUT** /api/2.0/settings/tfaappnewapp | Отключить приложение TFA
*Api.SettingsTFASettingsApi* | [**updateTfaAppCodes**](docs/SettingsTFASettingsApi.md#updatetfaappcodes) | **PUT** /api/2.0/settings/tfaappnewcodes | Обновить коды TFA
*Api.SettingsTFASettingsApi* | [**updateTfaSettings**](docs/SettingsTFASettingsApi.md#updatetfasettings) | **PUT** /api/2.0/settings/tfaapp | Обновить настройки TFA
*Api.SettingsTFASettingsApi* | [**updateTfaSettingsLink**](docs/SettingsTFASettingsApi.md#updatetfasettingslink) | **PUT** /api/2.0/settings/tfaappwithlink | Получить письмо для подтверждения обновления настроек TFA
*Api.SettingsWebhooksApi* | [**createWebhook**](docs/SettingsWebhooksApi.md#createwebhook) | **POST** /api/2.0/settings/webhook | Создать вебхук
*Api.SettingsWebhooksApi* | [**enableWebhook**](docs/SettingsWebhooksApi.md#enablewebhook) | **PUT** /api/2.0/settings/webhook/enable | Включить вебхук
*Api.SettingsWebhooksApi* | [**getTenantWebhooks**](docs/SettingsWebhooksApi.md#gettenantwebhooks) | **GET** /api/2.0/settings/webhook | Получить вебхуки
*Api.SettingsWebhooksApi* | [**getWebhookTriggers**](docs/SettingsWebhooksApi.md#getwebhooktriggers) | **GET** /api/2.0/settings/webhook/triggers | Получить триггеры вебхуков
*Api.SettingsWebhooksApi* | [**getWebhooksLogs**](docs/SettingsWebhooksApi.md#getwebhookslogs) | **GET** /api/2.0/settings/webhooks/log | Получить журналы вебхуков
*Api.SettingsWebhooksApi* | [**removeWebhook**](docs/SettingsWebhooksApi.md#removewebhook) | **DELETE** /api/2.0/settings/webhook/{id} | Удалить вебхук
*Api.SettingsWebhooksApi* | [**retryWebhook**](docs/SettingsWebhooksApi.md#retrywebhook) | **PUT** /api/2.0/settings/webhook/{id}/retry | Повторить вебхук
*Api.SettingsWebhooksApi* | [**retryWebhooks**](docs/SettingsWebhooksApi.md#retrywebhooks) | **PUT** /api/2.0/settings/webhook/retry | Повторить вебхуки
*Api.SettingsWebhooksApi* | [**updateWebhook**](docs/SettingsWebhooksApi.md#updatewebhook) | **PUT** /api/2.0/settings/webhook | Обновить вебхук
*Api.SettingsWebpluginsApi* | [**addWebPluginFromFile**](docs/SettingsWebpluginsApi.md#addwebpluginfromfile) | **POST** /api/2.0/settings/webplugins | Добавить веб-плагин
*Api.SettingsWebpluginsApi* | [**deleteWebPlugin**](docs/SettingsWebpluginsApi.md#deletewebplugin) | **DELETE** /api/2.0/settings/webplugins/{name} | Удалить веб-плагин
*Api.SettingsWebpluginsApi* | [**getWebPlugin**](docs/SettingsWebpluginsApi.md#getwebplugin) | **GET** /api/2.0/settings/webplugins/{name} | Получить веб-плагин по имени
*Api.SettingsWebpluginsApi* | [**getWebPlugins**](docs/SettingsWebpluginsApi.md#getwebplugins) | **GET** /api/2.0/settings/webplugins | Получить веб-плагины
*Api.SettingsWebpluginsApi* | [**updateWebPlugin**](docs/SettingsWebpluginsApi.md#updatewebplugin) | **PUT** /api/2.0/settings/webplugins/{name} | Обновить веб-плагин
*Api.ThirdPartyApi* | [**getThirdPartyCode**](docs/ThirdPartyApi.md#getthirdpartycode) | **GET** /api/2.0/thirdparty/{provider} | Получить запрос кода

</details>

## Документация по моделям

<details><summary>Список моделей</summary>

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
