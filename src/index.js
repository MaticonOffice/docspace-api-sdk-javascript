/**
 *
 * (c) Copyright Ascensio System SIA 2025
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import ApiClient from './ApiClient';
import AccountInfoArrayWrapper from './models/AccountInfoArrayWrapper';
import AccountInfoDto from './models/AccountInfoDto';
import AccountLoginType from './models/AccountLoginType';
import AceShortWrapper from './models/AceShortWrapper';
import AceShortWrapperArrayWrapper from './models/AceShortWrapperArrayWrapper';
import ActionConfig from './models/ActionConfig';
import ActionLinkConfig from './models/ActionLinkConfig';
import ActionType from './models/ActionType';
import ActiveConnectionsDto from './models/ActiveConnectionsDto';
import ActiveConnectionsItemDto from './models/ActiveConnectionsItemDto';
import ActiveConnectionsWrapper from './models/ActiveConnectionsWrapper';
import ActiveConnectionsWrapperLinksInner from './models/ActiveConnectionsWrapperLinksInner';
import AdditionalWhiteLabelSettings from './models/AdditionalWhiteLabelSettings';
import AdditionalWhiteLabelSettingsDto from './models/AdditionalWhiteLabelSettingsDto';
import AdditionalWhiteLabelSettingsWrapper from './models/AdditionalWhiteLabelSettingsWrapper';
import AdminMessageBaseSettingsRequestsDto from './models/AdminMessageBaseSettingsRequestsDto';
import AdminMessageSettingsRequestsDto from './models/AdminMessageSettingsRequestsDto';
import AnonymousConfigDto from './models/AnonymousConfigDto';
import ApiDateTime from './models/ApiDateTime';
import ApiKeyResponseArrayWrapper from './models/ApiKeyResponseArrayWrapper';
import ApiKeyResponseDto from './models/ApiKeyResponseDto';
import ApiKeyResponseWrapper from './models/ApiKeyResponseWrapper';
import ApplyFilterOption from './models/ApplyFilterOption';
import ArchiveRoomRequest from './models/ArchiveRoomRequest';
import Area from './models/Area';
import ArrayArrayWrapper from './models/ArrayArrayWrapper';
import AuditEventArrayWrapper from './models/AuditEventArrayWrapper';
import AuditEventDto from './models/AuditEventDto';
import AuthData from './models/AuthData';
import AuthKey from './models/AuthKey';
import AuthRequestsDto from './models/AuthRequestsDto';
import AuthServiceRequestsArrayWrapper from './models/AuthServiceRequestsArrayWrapper';
import AuthServiceRequestsDto from './models/AuthServiceRequestsDto';
import AuthenticationTokenDto from './models/AuthenticationTokenDto';
import AuthenticationTokenWrapper from './models/AuthenticationTokenWrapper';
import AutoCleanUpData from './models/AutoCleanUpData';
import AutoCleanUpDataWrapper from './models/AutoCleanUpDataWrapper';
import AutoCleanupRequestDto from './models/AutoCleanupRequestDto';
import BackupDto from './models/BackupDto';
import BackupHistoryRecord from './models/BackupHistoryRecord';
import BackupHistoryRecordArrayWrapper from './models/BackupHistoryRecordArrayWrapper';
import BackupPeriod from './models/BackupPeriod';
import BackupProgress from './models/BackupProgress';
import BackupProgressEnum from './models/BackupProgressEnum';
import BackupProgressWrapper from './models/BackupProgressWrapper';
import BackupRestoreDto from './models/BackupRestoreDto';
import BackupScheduleDto from './models/BackupScheduleDto';
import BackupStorageType from './models/BackupStorageType';
import Balance from './models/Balance';
import BalanceWrapper from './models/BalanceWrapper';
import BaseBatchRequestDto from './models/BaseBatchRequestDto';
import BaseBatchRequestDtoFolderIdsInner from './models/BaseBatchRequestDtoFolderIdsInner';
import BatchRequestDto from './models/BatchRequestDto';
import BatchRequestDtoDestFolderId from './models/BatchRequestDtoDestFolderId';
import BatchTagsRequestDto from './models/BatchTagsRequestDto';
import BooleanWrapper from './models/BooleanWrapper';
import CapabilitiesDto from './models/CapabilitiesDto';
import CapabilitiesWrapper from './models/CapabilitiesWrapper';
import CdnStorageSettings from './models/CdnStorageSettings';
import CdnStorageSettingsWrapper from './models/CdnStorageSettingsWrapper';
import ChangeClientActivationRequest from './models/ChangeClientActivationRequest';
import ChangeHistory from './models/ChangeHistory';
import ChangeOwnerRequestDto from './models/ChangeOwnerRequestDto';
import CheckConversionRequestDtoInteger from './models/CheckConversionRequestDtoInteger';
import CheckDestFolderDto from './models/CheckDestFolderDto';
import CheckDestFolderResult from './models/CheckDestFolderResult';
import CheckDestFolderWrapper from './models/CheckDestFolderWrapper';
import CheckDocServiceUrlRequestDto from './models/CheckDocServiceUrlRequestDto';
import CheckFillFormDraft from './models/CheckFillFormDraft';
import CheckUploadRequest from './models/CheckUploadRequest';
import ClientInfoResponse from './models/ClientInfoResponse';
import ClientResponse from './models/ClientResponse';
import ClientSecretResponse from './models/ClientSecretResponse';
import CoEditingConfig from './models/CoEditingConfig';
import CoEditingConfigMode from './models/CoEditingConfigMode';
import CompanyWhiteLabelSettings from './models/CompanyWhiteLabelSettings';
import CompanyWhiteLabelSettingsArrayWrapper from './models/CompanyWhiteLabelSettingsArrayWrapper';
import CompanyWhiteLabelSettingsDto from './models/CompanyWhiteLabelSettingsDto';
import CompanyWhiteLabelSettingsWrapper from './models/CompanyWhiteLabelSettingsWrapper';
import ConfigurationDtoInteger from './models/ConfigurationDtoInteger';
import ConfigurationIntegerWrapper from './models/ConfigurationIntegerWrapper';
import ConfirmData from './models/ConfirmData';
import ConfirmDto from './models/ConfirmDto';
import ConfirmType from './models/ConfirmType';
import ConfirmWrapper from './models/ConfirmWrapper';
import Contact from './models/Contact';
import ContentDisposition from './models/ContentDisposition';
import ContentType from './models/ContentType';
import ConversationResultArrayWrapper from './models/ConversationResultArrayWrapper';
import ConversationResultDto from './models/ConversationResultDto';
import CookieSettingsDto from './models/CookieSettingsDto';
import CookieSettingsRequestsDto from './models/CookieSettingsRequestsDto';
import CookieSettingsWrapper from './models/CookieSettingsWrapper';
import CopyAsJsonElement from './models/CopyAsJsonElement';
import CopyAsJsonElementDestFolderId from './models/CopyAsJsonElementDestFolderId';
import CoverRequestDto from './models/CoverRequestDto';
import CoversResultArrayWrapper from './models/CoversResultArrayWrapper';
import CoversResultDto from './models/CoversResultDto';
import CreateApiKeyRequestDto from './models/CreateApiKeyRequestDto';
import CreateClientRequest from './models/CreateClientRequest';
import CreateFileJsonElement from './models/CreateFileJsonElement';
import CreateFileJsonElementTemplateId from './models/CreateFileJsonElementTemplateId';
import CreateFolder from './models/CreateFolder';
import CreateRoomFromTemplateDto from './models/CreateRoomFromTemplateDto';
import CreateRoomRequestDto from './models/CreateRoomRequestDto';
import CreateTagRequestDto from './models/CreateTagRequestDto';
import CreateTextOrHtmlFile from './models/CreateTextOrHtmlFile';
import CreateThirdPartyRoom from './models/CreateThirdPartyRoom';
import CreateWebhooksConfigRequestsDto from './models/CreateWebhooksConfigRequestsDto';
import Cron from './models/Cron';
import CronParams from './models/CronParams';
import CspDto from './models/CspDto';
import CspRequestsDto from './models/CspRequestsDto';
import CspWrapper from './models/CspWrapper';
import Culture from './models/Culture';
import CultureSpecificExternalResource from './models/CultureSpecificExternalResource';
import CultureSpecificExternalResources from './models/CultureSpecificExternalResources';
import CurrenciesArrayWrapper from './models/CurrenciesArrayWrapper';
import CurrenciesDto from './models/CurrenciesDto';
import CurrentLicenseInfo from './models/CurrentLicenseInfo';
import CustomColorThemesSettingsColorItem from './models/CustomColorThemesSettingsColorItem';
import CustomColorThemesSettingsDto from './models/CustomColorThemesSettingsDto';
import CustomColorThemesSettingsItem from './models/CustomColorThemesSettingsItem';
import CustomColorThemesSettingsRequestsDto from './models/CustomColorThemesSettingsRequestsDto';
import CustomColorThemesSettingsWrapper from './models/CustomColorThemesSettingsWrapper';
import CustomFilterParameters from './models/CustomFilterParameters';
import CustomNavigationItem from './models/CustomNavigationItem';
import CustomNavigationItemArrayWrapper from './models/CustomNavigationItemArrayWrapper';
import CustomNavigationItemWrapper from './models/CustomNavigationItemWrapper';
import CustomerConfigDto from './models/CustomerConfigDto';
import CustomerInfoDto from './models/CustomerInfoDto';
import CustomerInfoWrapper from './models/CustomerInfoWrapper';
import CustomerOperationsReportRequestDto from './models/CustomerOperationsReportRequestDto';
import CustomizationConfigDto from './models/CustomizationConfigDto';
import DarkThemeSettings from './models/DarkThemeSettings';
import DarkThemeSettingsRequestDto from './models/DarkThemeSettingsRequestDto';
import DarkThemeSettingsType from './models/DarkThemeSettingsType';
import DarkThemeSettingsWrapper from './models/DarkThemeSettingsWrapper';
import DateToAutoCleanUp from './models/DateToAutoCleanUp';
import DbTenant from './models/DbTenant';
import DbTenantPartner from './models/DbTenantPartner';
import DeepLinkConfigurationRequestsDto from './models/DeepLinkConfigurationRequestsDto';
import DeepLinkDto from './models/DeepLinkDto';
import DeepLinkHandlingMode from './models/DeepLinkHandlingMode';
import Delete from './models/Delete';
import DeleteBatchRequestDto from './models/DeleteBatchRequestDto';
import DeleteFolder from './models/DeleteFolder';
import DeleteRoomRequest from './models/DeleteRoomRequest';
import DeleteVersionBatchRequestDto from './models/DeleteVersionBatchRequestDto';
import DisplayRequestDto from './models/DisplayRequestDto';
import DistributedTaskStatus from './models/DistributedTaskStatus';
import DnsSettingsRequestsDto from './models/DnsSettingsRequestsDto';
import DocServiceUrlDto from './models/DocServiceUrlDto';
import DocServiceUrlWrapper from './models/DocServiceUrlWrapper';
import DocumentBuilderTaskDto from './models/DocumentBuilderTaskDto';
import DocumentBuilderTaskWrapper from './models/DocumentBuilderTaskWrapper';
import DocumentConfigDto from './models/DocumentConfigDto';
import DoubleWrapper from './models/DoubleWrapper';
import DownloadRequestDto from './models/DownloadRequestDto';
import DownloadRequestItemDto from './models/DownloadRequestItemDto';
import DownloadRequestItemDtoKey from './models/DownloadRequestItemDtoKey';
import DraftLocationInteger from './models/DraftLocationInteger';
import DuplicateRequestDto from './models/DuplicateRequestDto';
import EditHistoryArrayWrapper from './models/EditHistoryArrayWrapper';
import EditHistoryAuthor from './models/EditHistoryAuthor';
import EditHistoryChangesWrapper from './models/EditHistoryChangesWrapper';
import EditHistoryDataDto from './models/EditHistoryDataDto';
import EditHistoryDataWrapper from './models/EditHistoryDataWrapper';
import EditHistoryDto from './models/EditHistoryDto';
import EditHistoryUrl from './models/EditHistoryUrl';
import EditorConfigurationDto from './models/EditorConfigurationDto';
import EditorType from './models/EditorType';
import EmailActivationSettings from './models/EmailActivationSettings';
import EmailActivationSettingsWrapper from './models/EmailActivationSettingsWrapper';
import EmailMemberRequestDto from './models/EmailMemberRequestDto';
import EmailValidationKeyModel from './models/EmailValidationKeyModel';
import EmbeddedConfig from './models/EmbeddedConfig';
import EmployeeActivationStatus from './models/EmployeeActivationStatus';
import EmployeeArrayWrapper from './models/EmployeeArrayWrapper';
import EmployeeDto from './models/EmployeeDto';
import EmployeeFullArrayWrapper from './models/EmployeeFullArrayWrapper';
import EmployeeFullDto from './models/EmployeeFullDto';
import EmployeeFullWrapper from './models/EmployeeFullWrapper';
import EmployeeStatus from './models/EmployeeStatus';
import EmployeeType from './models/EmployeeType';
import EncryprtionStatus from './models/EncryprtionStatus';
import EncryptionKeysConfig from './models/EncryptionKeysConfig';
import EncryptionSettings from './models/EncryptionSettings';
import EncryptionSettingsWrapper from './models/EncryptionSettingsWrapper';
import EntryType from './models/EntryType';
import ErrorResponse from './models/ErrorResponse';
import ExchangeToken200Response from './models/ExchangeToken200Response';
import ExternalShareDto from './models/ExternalShareDto';
import ExternalShareRequestParam from './models/ExternalShareRequestParam';
import ExternalShareWrapper from './models/ExternalShareWrapper';
import FeatureUsedDto from './models/FeatureUsedDto';
import FeedbackConfig from './models/FeedbackConfig';
import FileConflictResolveType from './models/FileConflictResolveType';
import FileDtoInteger from './models/FileDtoInteger';
import FileDtoIntegerSecurity from './models/FileDtoIntegerSecurity';
import FileDtoIntegerViewAccessibility from './models/FileDtoIntegerViewAccessibility';
import FileEntryArrayWrapper from './models/FileEntryArrayWrapper';
import FileEntryDto from './models/FileEntryDto';
import FileEntryType from './models/FileEntryType';
import FileEntryWrapper from './models/FileEntryWrapper';
import FileIntegerArrayWrapper from './models/FileIntegerArrayWrapper';
import FileIntegerWrapper from './models/FileIntegerWrapper';
import FileLink from './models/FileLink';
import FileLinkRequest from './models/FileLinkRequest';
import FileLinkWrapper from './models/FileLinkWrapper';
import FileOperationArrayWrapper from './models/FileOperationArrayWrapper';
import FileOperationDto from './models/FileOperationDto';
import FileOperationType from './models/FileOperationType';
import FileOperationWrapper from './models/FileOperationWrapper';
import FileReference from './models/FileReference';
import FileReferenceData from './models/FileReferenceData';
import FileReferenceWrapper from './models/FileReferenceWrapper';
import FileShare from './models/FileShare';
import FileShareArrayWrapper from './models/FileShareArrayWrapper';
import FileShareDto from './models/FileShareDto';
import FileShareParams from './models/FileShareParams';
import FileShareWrapper from './models/FileShareWrapper';
import FileStatus from './models/FileStatus';
import FileType from './models/FileType';
import FileUploadResultDto from './models/FileUploadResultDto';
import FileUploadResultWrapper from './models/FileUploadResultWrapper';
import FilesSettingsDto from './models/FilesSettingsDto';
import FilesSettingsDtoInternalFormats from './models/FilesSettingsDtoInternalFormats';
import FilesSettingsWrapper from './models/FilesSettingsWrapper';
import FilesStatisticsFolder from './models/FilesStatisticsFolder';
import FilesStatisticsResultDto from './models/FilesStatisticsResultDto';
import FilesStatisticsResultWrapper from './models/FilesStatisticsResultWrapper';
import FillingFormResultDtoInteger from './models/FillingFormResultDtoInteger';
import FillingFormResultIntegerWrapper from './models/FillingFormResultIntegerWrapper';
import FilterType from './models/FilterType';
import FinishDto from './models/FinishDto';
import FireBaseUser from './models/FireBaseUser';
import FireBaseUserWrapper from './models/FireBaseUserWrapper';
import FirebaseDto from './models/FirebaseDto';
import FirebaseRequestsDto from './models/FirebaseRequestsDto';
import FolderContentDtoInteger from './models/FolderContentDtoInteger';
import FolderContentIntegerArrayWrapper from './models/FolderContentIntegerArrayWrapper';
import FolderContentIntegerWrapper from './models/FolderContentIntegerWrapper';
import FolderDtoInteger from './models/FolderDtoInteger';
import FolderDtoString from './models/FolderDtoString';
import FolderIntegerArrayWrapper from './models/FolderIntegerArrayWrapper';
import FolderIntegerWrapper from './models/FolderIntegerWrapper';
import FolderStringArrayWrapper from './models/FolderStringArrayWrapper';
import FolderStringWrapper from './models/FolderStringWrapper';
import FolderType from './models/FolderType';
import FormFillingManageAction from './models/FormFillingManageAction';
import FormFillingStatus from './models/FormFillingStatus';
import FormGalleryDto from './models/FormGalleryDto';
import FormRole from './models/FormRole';
import FormRoleArrayWrapper from './models/FormRoleArrayWrapper';
import FormRoleWrapper from './models/FormRoleWrapper';
import FormsItemArrayWrapper from './models/FormsItemArrayWrapper';
import FormsItemDto from './models/FormsItemDto';
import GetReferenceDataDtoInteger from './models/GetReferenceDataDtoInteger';
import GobackConfig from './models/GobackConfig';
import GreetingSettingsRequestsDto from './models/GreetingSettingsRequestsDto';
import GroupArrayWrapper from './models/GroupArrayWrapper';
import GroupDto from './models/GroupDto';
import GroupRequestDto from './models/GroupRequestDto';
import GroupSummaryArrayWrapper from './models/GroupSummaryArrayWrapper';
import GroupSummaryDto from './models/GroupSummaryDto';
import GroupWrapper from './models/GroupWrapper';
import HideConfirmConvertRequestDto from './models/HideConfirmConvertRequestDto';
import HistoryAction from './models/HistoryAction';
import HistoryArrayWrapper from './models/HistoryArrayWrapper';
import HistoryData from './models/HistoryData';
import HistoryDto from './models/HistoryDto';
import ICompressWrapper from './models/ICompressWrapper';
import IMagickGeometry from './models/IMagickGeometry';
import IPRestriction from './models/IPRestriction';
import IPRestrictionArrayWrapper from './models/IPRestrictionArrayWrapper';
import IPRestrictionsSettings from './models/IPRestrictionsSettings';
import IPRestrictionsSettingsWrapper from './models/IPRestrictionsSettingsWrapper';
import InfoConfigDto from './models/InfoConfigDto';
import Int64Wrapper from './models/Int64Wrapper';
import InviteUsersRequestDto from './models/InviteUsersRequestDto';
import IpRestrictionBase from './models/IpRestrictionBase';
import IpRestrictionsDto from './models/IpRestrictionsDto';
import IpRestrictionsWrapper from './models/IpRestrictionsWrapper';
import IsDefaultWhiteLabelLogosArrayWrapper from './models/IsDefaultWhiteLabelLogosArrayWrapper';
import IsDefaultWhiteLabelLogosDto from './models/IsDefaultWhiteLabelLogosDto';
import IsDefaultWhiteLabelLogosWrapper from './models/IsDefaultWhiteLabelLogosWrapper';
import ItemKeyValuePairObjectObject from './models/ItemKeyValuePairObjectObject';
import ItemKeyValuePairStringBoolean from './models/ItemKeyValuePairStringBoolean';
import ItemKeyValuePairStringLogoRequestsDto from './models/ItemKeyValuePairStringLogoRequestsDto';
import ItemKeyValuePairStringString from './models/ItemKeyValuePairStringString';
import KeyValuePairBooleanString from './models/KeyValuePairBooleanString';
import KeyValuePairBooleanStringWrapper from './models/KeyValuePairBooleanStringWrapper';
import KeyValuePairStringStringValues from './models/KeyValuePairStringStringValues';
import LinkAccountRequestDto from './models/LinkAccountRequestDto';
import LinkType from './models/LinkType';
import LockFileParameters from './models/LockFileParameters';
import LoginEventArrayWrapper from './models/LoginEventArrayWrapper';
import LoginEventDto from './models/LoginEventDto';
import LoginProvider from './models/LoginProvider';
import LoginSettingsDto from './models/LoginSettingsDto';
import LoginSettingsRequestDto from './models/LoginSettingsRequestDto';
import LoginSettingsWrapper from './models/LoginSettingsWrapper';
import Logo from './models/Logo';
import LogoConfigDto from './models/LogoConfigDto';
import LogoCover from './models/LogoCover';
import LogoRequest from './models/LogoRequest';
import LogoRequestsDto from './models/LogoRequestsDto';
import MailDomainSettingsRequestsDto from './models/MailDomainSettingsRequestsDto';
import ManageFormFillingDtoInteger from './models/ManageFormFillingDtoInteger';
import MemberBaseRequestDto from './models/MemberBaseRequestDto';
import MemberRequestDto from './models/MemberRequestDto';
import MembersRequest from './models/MembersRequest';
import MentionMessageWrapper from './models/MentionMessageWrapper';
import MentionWrapper from './models/MentionWrapper';
import MentionWrapperArrayWrapper from './models/MentionWrapperArrayWrapper';
import MessageAction from './models/MessageAction';
import MigratingApiFiles from './models/MigratingApiFiles';
import MigratingApiGroup from './models/MigratingApiGroup';
import MigratingApiUser from './models/MigratingApiUser';
import MigrationApiInfo from './models/MigrationApiInfo';
import MigrationStatusDto from './models/MigrationStatusDto';
import MigrationStatusWrapper from './models/MigrationStatusWrapper';
import MobilePhoneActivationStatus from './models/MobilePhoneActivationStatus';
import MobileRequestsDto from './models/MobileRequestsDto';
import Module from './models/Module';
import ModuleType from './models/ModuleType';
import ModuleWrapper from './models/ModuleWrapper';
import NewItemsDtoFileEntryDto from './models/NewItemsDtoFileEntryDto';
import NewItemsDtoRoomNewItemsDto from './models/NewItemsDtoRoomNewItemsDto';
import NewItemsFileEntryArrayWrapper from './models/NewItemsFileEntryArrayWrapper';
import NewItemsRoomNewItemsArrayWrapper from './models/NewItemsRoomNewItemsArrayWrapper';
import NoContentResult from './models/NoContentResult';
import NoContentResultWrapper from './models/NoContentResultWrapper';
import NotificationSettingsDto from './models/NotificationSettingsDto';
import NotificationSettingsRequestsDto from './models/NotificationSettingsRequestsDto';
import NotificationSettingsWrapper from './models/NotificationSettingsWrapper';
import NotificationType from './models/NotificationType';
import OAuth20Token from './models/OAuth20Token';
import ObjectArrayWrapper from './models/ObjectArrayWrapper';
import ObjectWrapper from './models/ObjectWrapper';
import OperationDto from './models/OperationDto';
import Options from './models/Options';
import OrderBy from './models/OrderBy';
import OrderRequestDto from './models/OrderRequestDto';
import OrdersItemRequestDtoInteger from './models/OrdersItemRequestDtoInteger';
import OrdersRequestDtoInteger from './models/OrdersRequestDtoInteger';
import OwnerChangeInstructionsDto from './models/OwnerChangeInstructionsDto';
import OwnerChangeInstructionsWrapper from './models/OwnerChangeInstructionsWrapper';
import OwnerIdSettingsRequestDto from './models/OwnerIdSettingsRequestDto';
import PageableModificationResponse from './models/PageableModificationResponse';
import PageableResponse from './models/PageableResponse';
import PageableResponseClientInfoResponse from './models/PageableResponseClientInfoResponse';
import Paragraph from './models/Paragraph';
import PasswordHasher from './models/PasswordHasher';
import PasswordSettingsDto from './models/PasswordSettingsDto';
import PasswordSettingsRequestsDto from './models/PasswordSettingsRequestsDto';
import PasswordSettingsWrapper from './models/PasswordSettingsWrapper';
import PaymentCalculation from './models/PaymentCalculation';
import PaymentCalculationWrapper from './models/PaymentCalculationWrapper';
import PaymentMethodStatus from './models/PaymentMethodStatus';
import PaymentSettingsDto from './models/PaymentSettingsDto';
import PaymentSettingsWrapper from './models/PaymentSettingsWrapper';
import PaymentUrlRequestsDto from './models/PaymentUrlRequestsDto';
import Payments from './models/Payments';
import PermissionsConfig from './models/PermissionsConfig';
import PluginsConfig from './models/PluginsConfig';
import PluginsDto from './models/PluginsDto';
import PriceDto from './models/PriceDto';
import ProductAdministratorDto from './models/ProductAdministratorDto';
import ProductAdministratorWrapper from './models/ProductAdministratorWrapper';
import ProductQuantityType from './models/ProductQuantityType';
import ProductType from './models/ProductType';
import ProviderArrayWrapper from './models/ProviderArrayWrapper';
import ProviderDto from './models/ProviderDto';
import ProviderFilter from './models/ProviderFilter';
import QuantityRequestDto from './models/QuantityRequestDto';
import Quota from './models/Quota';
import QuotaArrayWrapper from './models/QuotaArrayWrapper';
import QuotaDto from './models/QuotaDto';
import QuotaFilter from './models/QuotaFilter';
import QuotaSettingsRequestsDto from './models/QuotaSettingsRequestsDto';
import QuotaSettingsRequestsDtoDefaultQuota from './models/QuotaSettingsRequestsDtoDefaultQuota';
import QuotaState from './models/QuotaState';
import QuotaWrapper from './models/QuotaWrapper';
import RecaptchaType from './models/RecaptchaType';
import RecentConfig from './models/RecentConfig';
import ReportDto from './models/ReportDto';
import ReportWrapper from './models/ReportWrapper';
import ReviewConfig from './models/ReviewConfig';
import RoomDataLifetimeDto from './models/RoomDataLifetimeDto';
import RoomDataLifetimePeriod from './models/RoomDataLifetimePeriod';
import RoomFromTemplateStatusDto from './models/RoomFromTemplateStatusDto';
import RoomFromTemplateStatusWrapper from './models/RoomFromTemplateStatusWrapper';
import RoomInvitation from './models/RoomInvitation';
import RoomInvitationRequest from './models/RoomInvitationRequest';
import RoomLinkRequest from './models/RoomLinkRequest';
import RoomNewItemsDto from './models/RoomNewItemsDto';
import RoomSecurityDto from './models/RoomSecurityDto';
import RoomSecurityError from './models/RoomSecurityError';
import RoomSecurityWrapper from './models/RoomSecurityWrapper';
import RoomTemplateDto from './models/RoomTemplateDto';
import RoomTemplateStatusDto from './models/RoomTemplateStatusDto';
import RoomTemplateStatusWrapper from './models/RoomTemplateStatusWrapper';
import RoomType from './models/RoomType';
import RoomsNotificationSettingsDto from './models/RoomsNotificationSettingsDto';
import RoomsNotificationSettingsWrapper from './models/RoomsNotificationSettingsWrapper';
import RoomsNotificationsSettingsRequestDto from './models/RoomsNotificationsSettingsRequestDto';
import Run from './models/Run';
import STRINGArrayWrapper from './models/STRINGArrayWrapper';
import SalesRequestsDto from './models/SalesRequestsDto';
import SaveAsPdfInteger from './models/SaveAsPdfInteger';
import SaveFormRoleMappingDtoInteger from './models/SaveFormRoleMappingDtoInteger';
import Schedule from './models/Schedule';
import ScheduleWrapper from './models/ScheduleWrapper';
import ScopeResponse from './models/ScopeResponse';
import SearchArea from './models/SearchArea';
import SecurityArrayWrapper from './models/SecurityArrayWrapper';
import SecurityDto from './models/SecurityDto';
import SecurityRequestsDto from './models/SecurityRequestsDto';
import SessionRequest from './models/SessionRequest';
import SetManagerRequest from './models/SetManagerRequest';
import SetPublicDto from './models/SetPublicDto';
import SettingsDto from './models/SettingsDto';
import SettingsRequestDto from './models/SettingsRequestDto';
import SettingsWrapper from './models/SettingsWrapper';
import SetupCode from './models/SetupCode';
import SetupCodeWrapper from './models/SetupCodeWrapper';
import SexEnum from './models/SexEnum';
import ShareFilterType from './models/ShareFilterType';
import SignupAccountRequestDto from './models/SignupAccountRequestDto';
import SmtpOperationStatusRequestsDto from './models/SmtpOperationStatusRequestsDto';
import SmtpOperationStatusRequestsWrapper from './models/SmtpOperationStatusRequestsWrapper';
import SmtpSettingsDto from './models/SmtpSettingsDto';
import SmtpSettingsWrapper from './models/SmtpSettingsWrapper';
import SortOrder from './models/SortOrder';
import SortedByType from './models/SortedByType';
import SsoCertificate from './models/SsoCertificate';
import SsoFieldMapping from './models/SsoFieldMapping';
import SsoIdpCertificateAdvanced from './models/SsoIdpCertificateAdvanced';
import SsoIdpSettings from './models/SsoIdpSettings';
import SsoSettingsRequestsDto from './models/SsoSettingsRequestsDto';
import SsoSettingsV2 from './models/SsoSettingsV2';
import SsoSettingsV2Wrapper from './models/SsoSettingsV2Wrapper';
import SsoSpCertificateAdvanced from './models/SsoSpCertificateAdvanced';
import StartEdit from './models/StartEdit';
import StartFillingForm from './models/StartFillingForm';
import StartFillingMode from './models/StartFillingMode';
import StartReassignRequestDto from './models/StartReassignRequestDto';
import StartUpdateUserTypeDto from './models/StartUpdateUserTypeDto';
import Status from './models/Status';
import StorageArrayWrapper from './models/StorageArrayWrapper';
import StorageDto from './models/StorageDto';
import StorageEncryptionRequestsDto from './models/StorageEncryptionRequestsDto';
import StorageFilter from './models/StorageFilter';
import StorageRequestsDto from './models/StorageRequestsDto';
import StorageSettings from './models/StorageSettings';
import StorageSettingsWrapper from './models/StorageSettingsWrapper';
import StringWrapper from './models/StringWrapper';
import SubAccount from './models/SubAccount';
import SubjectFilter from './models/SubjectFilter';
import SubjectType from './models/SubjectType';
import SubmitForm from './models/SubmitForm';
import Tariff from './models/Tariff';
import TariffState from './models/TariffState';
import TariffWrapper from './models/TariffWrapper';
import TaskProgressResponseDto from './models/TaskProgressResponseDto';
import TaskProgressResponseWrapper from './models/TaskProgressResponseWrapper';
import TemplatesConfig from './models/TemplatesConfig';
import TemplatesRequestDto from './models/TemplatesRequestDto';
import TenantAuditSettings from './models/TenantAuditSettings';
import TenantAuditSettingsWrapper from './models/TenantAuditSettingsWrapper';
import TenantBannerSettings from './models/TenantBannerSettings';
import TenantBannerSettingsDto from './models/TenantBannerSettingsDto';
import TenantBannerSettingsWrapper from './models/TenantBannerSettingsWrapper';
import TenantDeepLinkSettings from './models/TenantDeepLinkSettings';
import TenantDeepLinkSettingsWrapper from './models/TenantDeepLinkSettingsWrapper';
import TenantDevToolsAccessSettings from './models/TenantDevToolsAccessSettings';
import TenantDevToolsAccessSettingsDto from './models/TenantDevToolsAccessSettingsDto';
import TenantDevToolsAccessSettingsWrapper from './models/TenantDevToolsAccessSettingsWrapper';
import TenantDomainValidator from './models/TenantDomainValidator';
import TenantDto from './models/TenantDto';
import TenantEntityQuotaSettings from './models/TenantEntityQuotaSettings';
import TenantIndustry from './models/TenantIndustry';
import TenantQuota from './models/TenantQuota';
import TenantQuotaFeatureDto from './models/TenantQuotaFeatureDto';
import TenantQuotaSettings from './models/TenantQuotaSettings';
import TenantQuotaSettingsRequestsDto from './models/TenantQuotaSettingsRequestsDto';
import TenantQuotaSettingsWrapper from './models/TenantQuotaSettingsWrapper';
import TenantQuotaWrapper from './models/TenantQuotaWrapper';
import TenantRoomQuotaSettings from './models/TenantRoomQuotaSettings';
import TenantRoomQuotaSettingsWrapper from './models/TenantRoomQuotaSettingsWrapper';
import TenantStatus from './models/TenantStatus';
import TenantTrustedDomainsType from './models/TenantTrustedDomainsType';
import TenantUserInvitationSettingsDto from './models/TenantUserInvitationSettingsDto';
import TenantUserInvitationSettingsRequestDto from './models/TenantUserInvitationSettingsRequestDto';
import TenantUserInvitationSettingsWrapper from './models/TenantUserInvitationSettingsWrapper';
import TenantUserQuotaSettings from './models/TenantUserQuotaSettings';
import TenantUserQuotaSettingsWrapper from './models/TenantUserQuotaSettingsWrapper';
import TenantWalletSettings from './models/TenantWalletSettings';
import TenantWalletSettingsWrapper from './models/TenantWalletSettingsWrapper';
import TenantWrapper from './models/TenantWrapper';
import TerminateRequestDto from './models/TerminateRequestDto';
import TfaRequestsDto from './models/TfaRequestsDto';
import TfaRequestsDtoType from './models/TfaRequestsDtoType';
import TfaSettingsArrayWrapper from './models/TfaSettingsArrayWrapper';
import TfaSettingsDto from './models/TfaSettingsDto';
import TfaValidateRequestsDto from './models/TfaValidateRequestsDto';
import ThirdPartyBackupRequestDto from './models/ThirdPartyBackupRequestDto';
import ThirdPartyParams from './models/ThirdPartyParams';
import ThirdPartyParamsArrayWrapper from './models/ThirdPartyParamsArrayWrapper';
import ThirdPartyRequestDto from './models/ThirdPartyRequestDto';
import Thumbnail from './models/Thumbnail';
import ThumbnailsDataDto from './models/ThumbnailsDataDto';
import ThumbnailsDataWrapper from './models/ThumbnailsDataWrapper';
import ThumbnailsRequest from './models/ThumbnailsRequest';
import TimezonesRequestsArrayWrapper from './models/TimezonesRequestsArrayWrapper';
import TimezonesRequestsDto from './models/TimezonesRequestsDto';
import TopUpDepositRequestDto from './models/TopUpDepositRequestDto';
import TurnOnAdminMessageSettingsRequestDto from './models/TurnOnAdminMessageSettingsRequestDto';
import UnknownWrapper from './models/UnknownWrapper';
import UpdateApiKeyRequest from './models/UpdateApiKeyRequest';
import UpdateClientRequest from './models/UpdateClientRequest';
import UpdateComment from './models/UpdateComment';
import UpdateFile from './models/UpdateFile';
import UpdateGroupRequest from './models/UpdateGroupRequest';
import UpdateMemberRequestDto from './models/UpdateMemberRequestDto';
import UpdateMembersQuotaRequestDto from './models/UpdateMembersQuotaRequestDto';
import UpdateMembersQuotaRequestDtoQuota from './models/UpdateMembersQuotaRequestDtoQuota';
import UpdateMembersRequestDto from './models/UpdateMembersRequestDto';
import UpdatePhotoMemberRequest from './models/UpdatePhotoMemberRequest';
import UpdateRoomRequest from './models/UpdateRoomRequest';
import UpdateRoomsQuotaRequestDtoInteger from './models/UpdateRoomsQuotaRequestDtoInteger';
import UpdateRoomsRoomIdsRequestDtoInteger from './models/UpdateRoomsRoomIdsRequestDtoInteger';
import UpdateWebhooksConfigRequestsDto from './models/UpdateWebhooksConfigRequestsDto';
import UploadRequestDto from './models/UploadRequestDto';
import UploadResultDto from './models/UploadResultDto';
import UploadResultWrapper from './models/UploadResultWrapper';
import UsageSpaceStatItemArrayWrapper from './models/UsageSpaceStatItemArrayWrapper';
import UsageSpaceStatItemDto from './models/UsageSpaceStatItemDto';
import UserConfig from './models/UserConfig';
import UserInfo from './models/UserInfo';
import UserInfoWrapper from './models/UserInfoWrapper';
import UserInvitation from './models/UserInvitation';
import UserInvitationRequestDto from './models/UserInvitationRequestDto';
import ValidationResult from './models/ValidationResult';
import WalletQuantityRequestDto from './models/WalletQuantityRequestDto';
import WatermarkAdditions from './models/WatermarkAdditions';
import WatermarkDto from './models/WatermarkDto';
import WatermarkOnDraw from './models/WatermarkOnDraw';
import WatermarkRequestDto from './models/WatermarkRequestDto';
import WebItemSecurityRequestsDto from './models/WebItemSecurityRequestsDto';
import WebItemsSecurityRequestsDto from './models/WebItemsSecurityRequestsDto';
import WebPluginArrayWrapper from './models/WebPluginArrayWrapper';
import WebPluginDto from './models/WebPluginDto';
import WebPluginRequests from './models/WebPluginRequests';
import WebPluginWrapper from './models/WebPluginWrapper';
import WebhookGroupStatus from './models/WebhookGroupStatus';
import WebhookRetryRequestsDto from './models/WebhookRetryRequestsDto';
import WebhookTrigger from './models/WebhookTrigger';
import WebhooksConfigDto from './models/WebhooksConfigDto';
import WebhooksConfigWithStatusArrayWrapper from './models/WebhooksConfigWithStatusArrayWrapper';
import WebhooksConfigWithStatusDto from './models/WebhooksConfigWithStatusDto';
import WebhooksConfigWrapper from './models/WebhooksConfigWrapper';
import WebhooksLogArrayWrapper from './models/WebhooksLogArrayWrapper';
import WebhooksLogDto from './models/WebhooksLogDto';
import WebhooksLogWrapper from './models/WebhooksLogWrapper';
import WhiteLabelItemArrayWrapper from './models/WhiteLabelItemArrayWrapper';
import WhiteLabelItemDto from './models/WhiteLabelItemDto';
import WhiteLabelItemPathDto from './models/WhiteLabelItemPathDto';
import WhiteLabelRequestsDto from './models/WhiteLabelRequestsDto';
import WizardRequestsDto from './models/WizardRequestsDto';
import WizardSettings from './models/WizardSettings';
import WizardSettingsWrapper from './models/WizardSettingsWrapper';
import ApiKeysApi from './api/ApiKeysApi';
import AuthenticationApi from './api/AuthenticationApi';
import BackupApi from './api/BackupApi';
import CapabilitiesApi from './api/CapabilitiesApi';
import FilesFilesApi from './api/FilesFilesApi';
import FilesFoldersApi from './api/FilesFoldersApi';
import FilesOperationsApi from './api/FilesOperationsApi';
import FilesQuotaApi from './api/FilesQuotaApi';
import FilesSettingsApi from './api/FilesSettingsApi';
import FilesSharingApi from './api/FilesSharingApi';
import FilesThirdPartyIntegrationApi from './api/FilesThirdPartyIntegrationApi';
import GroupApi from './api/GroupApi';
import GroupRoomsApi from './api/GroupRoomsApi';
import MigrationApi from './api/MigrationApi';
import OAuth20AuthorizationApi from './api/OAuth20AuthorizationApi';
import OAuth20ClientManagementApi from './api/OAuth20ClientManagementApi';
import OAuth20ClientQueryingApi from './api/OAuth20ClientQueryingApi';
import OAuth20ScopeManagementApi from './api/OAuth20ScopeManagementApi';
import PeopleGuestsApi from './api/PeopleGuestsApi';
import PeoplePasswordApi from './api/PeoplePasswordApi';
import PeoplePhotosApi from './api/PeoplePhotosApi';
import PeopleProfilesApi from './api/PeopleProfilesApi';
import PeopleQuotaApi from './api/PeopleQuotaApi';
import PeopleSearchApi from './api/PeopleSearchApi';
import PeopleThemeApi from './api/PeopleThemeApi';
import PeopleThirdPartyAccountsApi from './api/PeopleThirdPartyAccountsApi';
import PeopleUserDataApi from './api/PeopleUserDataApi';
import PeopleUserStatusApi from './api/PeopleUserStatusApi';
import PeopleUserTypeApi from './api/PeopleUserTypeApi';
import PortalGuestsApi from './api/PortalGuestsApi';
import PortalPaymentApi from './api/PortalPaymentApi';
import PortalQuotaApi from './api/PortalQuotaApi';
import PortalSettingsApi from './api/PortalSettingsApi';
import PortalUsersApi from './api/PortalUsersApi';
import RoomsApi from './api/RoomsApi';
import SecurityAccessToDevToolsApi from './api/SecurityAccessToDevToolsApi';
import SecurityActiveConnectionsApi from './api/SecurityActiveConnectionsApi';
import SecurityAuditTrailDataApi from './api/SecurityAuditTrailDataApi';
import SecurityBannersVisibilityApi from './api/SecurityBannersVisibilityApi';
import SecurityCSPApi from './api/SecurityCSPApi';
import SecurityFirebaseApi from './api/SecurityFirebaseApi';
import SecurityLoginHistoryApi from './api/SecurityLoginHistoryApi';
import SecurityOAuth2Api from './api/SecurityOAuth2Api';
import SecuritySMTPSettingsApi from './api/SecuritySMTPSettingsApi';
import SettingsAccessToDevToolsApi from './api/SettingsAccessToDevToolsApi';
import SettingsAuthorizationApi from './api/SettingsAuthorizationApi';
import SettingsBannersVisibilityApi from './api/SettingsBannersVisibilityApi';
import SettingsCommonSettingsApi from './api/SettingsCommonSettingsApi';
import SettingsCookiesApi from './api/SettingsCookiesApi';
import SettingsCustomNavigationApi from './api/SettingsCustomNavigationApi';
import SettingsEncryptionApi from './api/SettingsEncryptionApi';
import SettingsGreetingSettingsApi from './api/SettingsGreetingSettingsApi';
import SettingsIPRestrictionsApi from './api/SettingsIPRestrictionsApi';
import SettingsLicenseApi from './api/SettingsLicenseApi';
import SettingsLoginSettingsApi from './api/SettingsLoginSettingsApi';
import SettingsMessagesApi from './api/SettingsMessagesApi';
import SettingsNotificationsApi from './api/SettingsNotificationsApi';
import SettingsOwnerApi from './api/SettingsOwnerApi';
import SettingsQuotaApi from './api/SettingsQuotaApi';
import SettingsRebrandingApi from './api/SettingsRebrandingApi';
import SettingsSSOApi from './api/SettingsSSOApi';
import SettingsSecurityApi from './api/SettingsSecurityApi';
import SettingsStatisticsApi from './api/SettingsStatisticsApi';
import SettingsStorageApi from './api/SettingsStorageApi';
import SettingsTFASettingsApi from './api/SettingsTFASettingsApi';
import SettingsWebhooksApi from './api/SettingsWebhooksApi';
import SettingsWebpluginsApi from './api/SettingsWebpluginsApi';
import ThirdPartyApi from './api/ThirdPartyApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Api = require('index'); // See note below*.
* var xxxSvc = new Api.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Api.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Api.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Api.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 3.2.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AccountInfoArrayWrapper model constructor.
     * @property {module:models/AccountInfoArrayWrapper}
     */
    AccountInfoArrayWrapper,

    /**
     * The AccountInfoDto model constructor.
     * @property {module:models/AccountInfoDto}
     */
    AccountInfoDto,

    /**
     * The AccountLoginType model constructor.
     * @property {module:models/AccountLoginType}
     */
    AccountLoginType,

    /**
     * The AceShortWrapper model constructor.
     * @property {module:models/AceShortWrapper}
     */
    AceShortWrapper,

    /**
     * The AceShortWrapperArrayWrapper model constructor.
     * @property {module:models/AceShortWrapperArrayWrapper}
     */
    AceShortWrapperArrayWrapper,

    /**
     * The ActionConfig model constructor.
     * @property {module:models/ActionConfig}
     */
    ActionConfig,

    /**
     * The ActionLinkConfig model constructor.
     * @property {module:models/ActionLinkConfig}
     */
    ActionLinkConfig,

    /**
     * The ActionType model constructor.
     * @property {module:models/ActionType}
     */
    ActionType,

    /**
     * The ActiveConnectionsDto model constructor.
     * @property {module:models/ActiveConnectionsDto}
     */
    ActiveConnectionsDto,

    /**
     * The ActiveConnectionsItemDto model constructor.
     * @property {module:models/ActiveConnectionsItemDto}
     */
    ActiveConnectionsItemDto,

    /**
     * The ActiveConnectionsWrapper model constructor.
     * @property {module:models/ActiveConnectionsWrapper}
     */
    ActiveConnectionsWrapper,

    /**
     * The ActiveConnectionsWrapperLinksInner model constructor.
     * @property {module:models/ActiveConnectionsWrapperLinksInner}
     */
    ActiveConnectionsWrapperLinksInner,

    /**
     * The AdditionalWhiteLabelSettings model constructor.
     * @property {module:models/AdditionalWhiteLabelSettings}
     */
    AdditionalWhiteLabelSettings,

    /**
     * The AdditionalWhiteLabelSettingsDto model constructor.
     * @property {module:models/AdditionalWhiteLabelSettingsDto}
     */
    AdditionalWhiteLabelSettingsDto,

    /**
     * The AdditionalWhiteLabelSettingsWrapper model constructor.
     * @property {module:models/AdditionalWhiteLabelSettingsWrapper}
     */
    AdditionalWhiteLabelSettingsWrapper,

    /**
     * The AdminMessageBaseSettingsRequestsDto model constructor.
     * @property {module:models/AdminMessageBaseSettingsRequestsDto}
     */
    AdminMessageBaseSettingsRequestsDto,

    /**
     * The AdminMessageSettingsRequestsDto model constructor.
     * @property {module:models/AdminMessageSettingsRequestsDto}
     */
    AdminMessageSettingsRequestsDto,

    /**
     * The AnonymousConfigDto model constructor.
     * @property {module:models/AnonymousConfigDto}
     */
    AnonymousConfigDto,

    /**
     * The ApiDateTime model constructor.
     * @property {module:models/ApiDateTime}
     */
    ApiDateTime,

    /**
     * The ApiKeyResponseArrayWrapper model constructor.
     * @property {module:models/ApiKeyResponseArrayWrapper}
     */
    ApiKeyResponseArrayWrapper,

    /**
     * The ApiKeyResponseDto model constructor.
     * @property {module:models/ApiKeyResponseDto}
     */
    ApiKeyResponseDto,

    /**
     * The ApiKeyResponseWrapper model constructor.
     * @property {module:models/ApiKeyResponseWrapper}
     */
    ApiKeyResponseWrapper,

    /**
     * The ApplyFilterOption model constructor.
     * @property {module:models/ApplyFilterOption}
     */
    ApplyFilterOption,

    /**
     * The ArchiveRoomRequest model constructor.
     * @property {module:models/ArchiveRoomRequest}
     */
    ArchiveRoomRequest,

    /**
     * The Area model constructor.
     * @property {module:models/Area}
     */
    Area,

    /**
     * The ArrayArrayWrapper model constructor.
     * @property {module:models/ArrayArrayWrapper}
     */
    ArrayArrayWrapper,

    /**
     * The AuditEventArrayWrapper model constructor.
     * @property {module:models/AuditEventArrayWrapper}
     */
    AuditEventArrayWrapper,

    /**
     * The AuditEventDto model constructor.
     * @property {module:models/AuditEventDto}
     */
    AuditEventDto,

    /**
     * The AuthData model constructor.
     * @property {module:models/AuthData}
     */
    AuthData,

    /**
     * The AuthKey model constructor.
     * @property {module:models/AuthKey}
     */
    AuthKey,

    /**
     * The AuthRequestsDto model constructor.
     * @property {module:models/AuthRequestsDto}
     */
    AuthRequestsDto,

    /**
     * The AuthServiceRequestsArrayWrapper model constructor.
     * @property {module:models/AuthServiceRequestsArrayWrapper}
     */
    AuthServiceRequestsArrayWrapper,

    /**
     * The AuthServiceRequestsDto model constructor.
     * @property {module:models/AuthServiceRequestsDto}
     */
    AuthServiceRequestsDto,

    /**
     * The AuthenticationTokenDto model constructor.
     * @property {module:models/AuthenticationTokenDto}
     */
    AuthenticationTokenDto,

    /**
     * The AuthenticationTokenWrapper model constructor.
     * @property {module:models/AuthenticationTokenWrapper}
     */
    AuthenticationTokenWrapper,

    /**
     * The AutoCleanUpData model constructor.
     * @property {module:models/AutoCleanUpData}
     */
    AutoCleanUpData,

    /**
     * The AutoCleanUpDataWrapper model constructor.
     * @property {module:models/AutoCleanUpDataWrapper}
     */
    AutoCleanUpDataWrapper,

    /**
     * The AutoCleanupRequestDto model constructor.
     * @property {module:models/AutoCleanupRequestDto}
     */
    AutoCleanupRequestDto,

    /**
     * The BackupDto model constructor.
     * @property {module:models/BackupDto}
     */
    BackupDto,

    /**
     * The BackupHistoryRecord model constructor.
     * @property {module:models/BackupHistoryRecord}
     */
    BackupHistoryRecord,

    /**
     * The BackupHistoryRecordArrayWrapper model constructor.
     * @property {module:models/BackupHistoryRecordArrayWrapper}
     */
    BackupHistoryRecordArrayWrapper,

    /**
     * The BackupPeriod model constructor.
     * @property {module:models/BackupPeriod}
     */
    BackupPeriod,

    /**
     * The BackupProgress model constructor.
     * @property {module:models/BackupProgress}
     */
    BackupProgress,

    /**
     * The BackupProgressEnum model constructor.
     * @property {module:models/BackupProgressEnum}
     */
    BackupProgressEnum,

    /**
     * The BackupProgressWrapper model constructor.
     * @property {module:models/BackupProgressWrapper}
     */
    BackupProgressWrapper,

    /**
     * The BackupRestoreDto model constructor.
     * @property {module:models/BackupRestoreDto}
     */
    BackupRestoreDto,

    /**
     * The BackupScheduleDto model constructor.
     * @property {module:models/BackupScheduleDto}
     */
    BackupScheduleDto,

    /**
     * The BackupStorageType model constructor.
     * @property {module:models/BackupStorageType}
     */
    BackupStorageType,

    /**
     * The Balance model constructor.
     * @property {module:models/Balance}
     */
    Balance,

    /**
     * The BalanceWrapper model constructor.
     * @property {module:models/BalanceWrapper}
     */
    BalanceWrapper,

    /**
     * The BaseBatchRequestDto model constructor.
     * @property {module:models/BaseBatchRequestDto}
     */
    BaseBatchRequestDto,

    /**
     * The BaseBatchRequestDtoFolderIdsInner model constructor.
     * @property {module:models/BaseBatchRequestDtoFolderIdsInner}
     */
    BaseBatchRequestDtoFolderIdsInner,

    /**
     * The BatchRequestDto model constructor.
     * @property {module:models/BatchRequestDto}
     */
    BatchRequestDto,

    /**
     * The BatchRequestDtoDestFolderId model constructor.
     * @property {module:models/BatchRequestDtoDestFolderId}
     */
    BatchRequestDtoDestFolderId,

    /**
     * The BatchTagsRequestDto model constructor.
     * @property {module:models/BatchTagsRequestDto}
     */
    BatchTagsRequestDto,

    /**
     * The BooleanWrapper model constructor.
     * @property {module:models/BooleanWrapper}
     */
    BooleanWrapper,

    /**
     * The CapabilitiesDto model constructor.
     * @property {module:models/CapabilitiesDto}
     */
    CapabilitiesDto,

    /**
     * The CapabilitiesWrapper model constructor.
     * @property {module:models/CapabilitiesWrapper}
     */
    CapabilitiesWrapper,

    /**
     * The CdnStorageSettings model constructor.
     * @property {module:models/CdnStorageSettings}
     */
    CdnStorageSettings,

    /**
     * The CdnStorageSettingsWrapper model constructor.
     * @property {module:models/CdnStorageSettingsWrapper}
     */
    CdnStorageSettingsWrapper,

    /**
     * The ChangeClientActivationRequest model constructor.
     * @property {module:models/ChangeClientActivationRequest}
     */
    ChangeClientActivationRequest,

    /**
     * The ChangeHistory model constructor.
     * @property {module:models/ChangeHistory}
     */
    ChangeHistory,

    /**
     * The ChangeOwnerRequestDto model constructor.
     * @property {module:models/ChangeOwnerRequestDto}
     */
    ChangeOwnerRequestDto,

    /**
     * The CheckConversionRequestDtoInteger model constructor.
     * @property {module:models/CheckConversionRequestDtoInteger}
     */
    CheckConversionRequestDtoInteger,

    /**
     * The CheckDestFolderDto model constructor.
     * @property {module:models/CheckDestFolderDto}
     */
    CheckDestFolderDto,

    /**
     * The CheckDestFolderResult model constructor.
     * @property {module:models/CheckDestFolderResult}
     */
    CheckDestFolderResult,

    /**
     * The CheckDestFolderWrapper model constructor.
     * @property {module:models/CheckDestFolderWrapper}
     */
    CheckDestFolderWrapper,

    /**
     * The CheckDocServiceUrlRequestDto model constructor.
     * @property {module:models/CheckDocServiceUrlRequestDto}
     */
    CheckDocServiceUrlRequestDto,

    /**
     * The CheckFillFormDraft model constructor.
     * @property {module:models/CheckFillFormDraft}
     */
    CheckFillFormDraft,

    /**
     * The CheckUploadRequest model constructor.
     * @property {module:models/CheckUploadRequest}
     */
    CheckUploadRequest,

    /**
     * The ClientInfoResponse model constructor.
     * @property {module:models/ClientInfoResponse}
     */
    ClientInfoResponse,

    /**
     * The ClientResponse model constructor.
     * @property {module:models/ClientResponse}
     */
    ClientResponse,

    /**
     * The ClientSecretResponse model constructor.
     * @property {module:models/ClientSecretResponse}
     */
    ClientSecretResponse,

    /**
     * The CoEditingConfig model constructor.
     * @property {module:models/CoEditingConfig}
     */
    CoEditingConfig,

    /**
     * The CoEditingConfigMode model constructor.
     * @property {module:models/CoEditingConfigMode}
     */
    CoEditingConfigMode,

    /**
     * The CompanyWhiteLabelSettings model constructor.
     * @property {module:models/CompanyWhiteLabelSettings}
     */
    CompanyWhiteLabelSettings,

    /**
     * The CompanyWhiteLabelSettingsArrayWrapper model constructor.
     * @property {module:models/CompanyWhiteLabelSettingsArrayWrapper}
     */
    CompanyWhiteLabelSettingsArrayWrapper,

    /**
     * The CompanyWhiteLabelSettingsDto model constructor.
     * @property {module:models/CompanyWhiteLabelSettingsDto}
     */
    CompanyWhiteLabelSettingsDto,

    /**
     * The CompanyWhiteLabelSettingsWrapper model constructor.
     * @property {module:models/CompanyWhiteLabelSettingsWrapper}
     */
    CompanyWhiteLabelSettingsWrapper,

    /**
     * The ConfigurationDtoInteger model constructor.
     * @property {module:models/ConfigurationDtoInteger}
     */
    ConfigurationDtoInteger,

    /**
     * The ConfigurationIntegerWrapper model constructor.
     * @property {module:models/ConfigurationIntegerWrapper}
     */
    ConfigurationIntegerWrapper,

    /**
     * The ConfirmData model constructor.
     * @property {module:models/ConfirmData}
     */
    ConfirmData,

    /**
     * The ConfirmDto model constructor.
     * @property {module:models/ConfirmDto}
     */
    ConfirmDto,

    /**
     * The ConfirmType model constructor.
     * @property {module:models/ConfirmType}
     */
    ConfirmType,

    /**
     * The ConfirmWrapper model constructor.
     * @property {module:models/ConfirmWrapper}
     */
    ConfirmWrapper,

    /**
     * The Contact model constructor.
     * @property {module:models/Contact}
     */
    Contact,

    /**
     * The ContentDisposition model constructor.
     * @property {module:models/ContentDisposition}
     */
    ContentDisposition,

    /**
     * The ContentType model constructor.
     * @property {module:models/ContentType}
     */
    ContentType,

    /**
     * The ConversationResultArrayWrapper model constructor.
     * @property {module:models/ConversationResultArrayWrapper}
     */
    ConversationResultArrayWrapper,

    /**
     * The ConversationResultDto model constructor.
     * @property {module:models/ConversationResultDto}
     */
    ConversationResultDto,

    /**
     * The CookieSettingsDto model constructor.
     * @property {module:models/CookieSettingsDto}
     */
    CookieSettingsDto,

    /**
     * The CookieSettingsRequestsDto model constructor.
     * @property {module:models/CookieSettingsRequestsDto}
     */
    CookieSettingsRequestsDto,

    /**
     * The CookieSettingsWrapper model constructor.
     * @property {module:models/CookieSettingsWrapper}
     */
    CookieSettingsWrapper,

    /**
     * The CopyAsJsonElement model constructor.
     * @property {module:models/CopyAsJsonElement}
     */
    CopyAsJsonElement,

    /**
     * The CopyAsJsonElementDestFolderId model constructor.
     * @property {module:models/CopyAsJsonElementDestFolderId}
     */
    CopyAsJsonElementDestFolderId,

    /**
     * The CoverRequestDto model constructor.
     * @property {module:models/CoverRequestDto}
     */
    CoverRequestDto,

    /**
     * The CoversResultArrayWrapper model constructor.
     * @property {module:models/CoversResultArrayWrapper}
     */
    CoversResultArrayWrapper,

    /**
     * The CoversResultDto model constructor.
     * @property {module:models/CoversResultDto}
     */
    CoversResultDto,

    /**
     * The CreateApiKeyRequestDto model constructor.
     * @property {module:models/CreateApiKeyRequestDto}
     */
    CreateApiKeyRequestDto,

    /**
     * The CreateClientRequest model constructor.
     * @property {module:models/CreateClientRequest}
     */
    CreateClientRequest,

    /**
     * The CreateFileJsonElement model constructor.
     * @property {module:models/CreateFileJsonElement}
     */
    CreateFileJsonElement,

    /**
     * The CreateFileJsonElementTemplateId model constructor.
     * @property {module:models/CreateFileJsonElementTemplateId}
     */
    CreateFileJsonElementTemplateId,

    /**
     * The CreateFolder model constructor.
     * @property {module:models/CreateFolder}
     */
    CreateFolder,

    /**
     * The CreateRoomFromTemplateDto model constructor.
     * @property {module:models/CreateRoomFromTemplateDto}
     */
    CreateRoomFromTemplateDto,

    /**
     * The CreateRoomRequestDto model constructor.
     * @property {module:models/CreateRoomRequestDto}
     */
    CreateRoomRequestDto,

    /**
     * The CreateTagRequestDto model constructor.
     * @property {module:models/CreateTagRequestDto}
     */
    CreateTagRequestDto,

    /**
     * The CreateTextOrHtmlFile model constructor.
     * @property {module:models/CreateTextOrHtmlFile}
     */
    CreateTextOrHtmlFile,

    /**
     * The CreateThirdPartyRoom model constructor.
     * @property {module:models/CreateThirdPartyRoom}
     */
    CreateThirdPartyRoom,

    /**
     * The CreateWebhooksConfigRequestsDto model constructor.
     * @property {module:models/CreateWebhooksConfigRequestsDto}
     */
    CreateWebhooksConfigRequestsDto,

    /**
     * The Cron model constructor.
     * @property {module:models/Cron}
     */
    Cron,

    /**
     * The CronParams model constructor.
     * @property {module:models/CronParams}
     */
    CronParams,

    /**
     * The CspDto model constructor.
     * @property {module:models/CspDto}
     */
    CspDto,

    /**
     * The CspRequestsDto model constructor.
     * @property {module:models/CspRequestsDto}
     */
    CspRequestsDto,

    /**
     * The CspWrapper model constructor.
     * @property {module:models/CspWrapper}
     */
    CspWrapper,

    /**
     * The Culture model constructor.
     * @property {module:models/Culture}
     */
    Culture,

    /**
     * The CultureSpecificExternalResource model constructor.
     * @property {module:models/CultureSpecificExternalResource}
     */
    CultureSpecificExternalResource,

    /**
     * The CultureSpecificExternalResources model constructor.
     * @property {module:models/CultureSpecificExternalResources}
     */
    CultureSpecificExternalResources,

    /**
     * The CurrenciesArrayWrapper model constructor.
     * @property {module:models/CurrenciesArrayWrapper}
     */
    CurrenciesArrayWrapper,

    /**
     * The CurrenciesDto model constructor.
     * @property {module:models/CurrenciesDto}
     */
    CurrenciesDto,

    /**
     * The CurrentLicenseInfo model constructor.
     * @property {module:models/CurrentLicenseInfo}
     */
    CurrentLicenseInfo,

    /**
     * The CustomColorThemesSettingsColorItem model constructor.
     * @property {module:models/CustomColorThemesSettingsColorItem}
     */
    CustomColorThemesSettingsColorItem,

    /**
     * The CustomColorThemesSettingsDto model constructor.
     * @property {module:models/CustomColorThemesSettingsDto}
     */
    CustomColorThemesSettingsDto,

    /**
     * The CustomColorThemesSettingsItem model constructor.
     * @property {module:models/CustomColorThemesSettingsItem}
     */
    CustomColorThemesSettingsItem,

    /**
     * The CustomColorThemesSettingsRequestsDto model constructor.
     * @property {module:models/CustomColorThemesSettingsRequestsDto}
     */
    CustomColorThemesSettingsRequestsDto,

    /**
     * The CustomColorThemesSettingsWrapper model constructor.
     * @property {module:models/CustomColorThemesSettingsWrapper}
     */
    CustomColorThemesSettingsWrapper,

    /**
     * The CustomFilterParameters model constructor.
     * @property {module:models/CustomFilterParameters}
     */
    CustomFilterParameters,

    /**
     * The CustomNavigationItem model constructor.
     * @property {module:models/CustomNavigationItem}
     */
    CustomNavigationItem,

    /**
     * The CustomNavigationItemArrayWrapper model constructor.
     * @property {module:models/CustomNavigationItemArrayWrapper}
     */
    CustomNavigationItemArrayWrapper,

    /**
     * The CustomNavigationItemWrapper model constructor.
     * @property {module:models/CustomNavigationItemWrapper}
     */
    CustomNavigationItemWrapper,

    /**
     * The CustomerConfigDto model constructor.
     * @property {module:models/CustomerConfigDto}
     */
    CustomerConfigDto,

    /**
     * The CustomerInfoDto model constructor.
     * @property {module:models/CustomerInfoDto}
     */
    CustomerInfoDto,

    /**
     * The CustomerInfoWrapper model constructor.
     * @property {module:models/CustomerInfoWrapper}
     */
    CustomerInfoWrapper,

    /**
     * The CustomerOperationsReportRequestDto model constructor.
     * @property {module:models/CustomerOperationsReportRequestDto}
     */
    CustomerOperationsReportRequestDto,

    /**
     * The CustomizationConfigDto model constructor.
     * @property {module:models/CustomizationConfigDto}
     */
    CustomizationConfigDto,

    /**
     * The DarkThemeSettings model constructor.
     * @property {module:models/DarkThemeSettings}
     */
    DarkThemeSettings,

    /**
     * The DarkThemeSettingsRequestDto model constructor.
     * @property {module:models/DarkThemeSettingsRequestDto}
     */
    DarkThemeSettingsRequestDto,

    /**
     * The DarkThemeSettingsType model constructor.
     * @property {module:models/DarkThemeSettingsType}
     */
    DarkThemeSettingsType,

    /**
     * The DarkThemeSettingsWrapper model constructor.
     * @property {module:models/DarkThemeSettingsWrapper}
     */
    DarkThemeSettingsWrapper,

    /**
     * The DateToAutoCleanUp model constructor.
     * @property {module:models/DateToAutoCleanUp}
     */
    DateToAutoCleanUp,

    /**
     * The DbTenant model constructor.
     * @property {module:models/DbTenant}
     */
    DbTenant,

    /**
     * The DbTenantPartner model constructor.
     * @property {module:models/DbTenantPartner}
     */
    DbTenantPartner,

    /**
     * The DeepLinkConfigurationRequestsDto model constructor.
     * @property {module:models/DeepLinkConfigurationRequestsDto}
     */
    DeepLinkConfigurationRequestsDto,

    /**
     * The DeepLinkDto model constructor.
     * @property {module:models/DeepLinkDto}
     */
    DeepLinkDto,

    /**
     * The DeepLinkHandlingMode model constructor.
     * @property {module:models/DeepLinkHandlingMode}
     */
    DeepLinkHandlingMode,

    /**
     * The Delete model constructor.
     * @property {module:models/Delete}
     */
    Delete,

    /**
     * The DeleteBatchRequestDto model constructor.
     * @property {module:models/DeleteBatchRequestDto}
     */
    DeleteBatchRequestDto,

    /**
     * The DeleteFolder model constructor.
     * @property {module:models/DeleteFolder}
     */
    DeleteFolder,

    /**
     * The DeleteRoomRequest model constructor.
     * @property {module:models/DeleteRoomRequest}
     */
    DeleteRoomRequest,

    /**
     * The DeleteVersionBatchRequestDto model constructor.
     * @property {module:models/DeleteVersionBatchRequestDto}
     */
    DeleteVersionBatchRequestDto,

    /**
     * The DisplayRequestDto model constructor.
     * @property {module:models/DisplayRequestDto}
     */
    DisplayRequestDto,

    /**
     * The DistributedTaskStatus model constructor.
     * @property {module:models/DistributedTaskStatus}
     */
    DistributedTaskStatus,

    /**
     * The DnsSettingsRequestsDto model constructor.
     * @property {module:models/DnsSettingsRequestsDto}
     */
    DnsSettingsRequestsDto,

    /**
     * The DocServiceUrlDto model constructor.
     * @property {module:models/DocServiceUrlDto}
     */
    DocServiceUrlDto,

    /**
     * The DocServiceUrlWrapper model constructor.
     * @property {module:models/DocServiceUrlWrapper}
     */
    DocServiceUrlWrapper,

    /**
     * The DocumentBuilderTaskDto model constructor.
     * @property {module:models/DocumentBuilderTaskDto}
     */
    DocumentBuilderTaskDto,

    /**
     * The DocumentBuilderTaskWrapper model constructor.
     * @property {module:models/DocumentBuilderTaskWrapper}
     */
    DocumentBuilderTaskWrapper,

    /**
     * The DocumentConfigDto model constructor.
     * @property {module:models/DocumentConfigDto}
     */
    DocumentConfigDto,

    /**
     * The DoubleWrapper model constructor.
     * @property {module:models/DoubleWrapper}
     */
    DoubleWrapper,

    /**
     * The DownloadRequestDto model constructor.
     * @property {module:models/DownloadRequestDto}
     */
    DownloadRequestDto,

    /**
     * The DownloadRequestItemDto model constructor.
     * @property {module:models/DownloadRequestItemDto}
     */
    DownloadRequestItemDto,

    /**
     * The DownloadRequestItemDtoKey model constructor.
     * @property {module:models/DownloadRequestItemDtoKey}
     */
    DownloadRequestItemDtoKey,

    /**
     * The DraftLocationInteger model constructor.
     * @property {module:models/DraftLocationInteger}
     */
    DraftLocationInteger,

    /**
     * The DuplicateRequestDto model constructor.
     * @property {module:models/DuplicateRequestDto}
     */
    DuplicateRequestDto,

    /**
     * The EditHistoryArrayWrapper model constructor.
     * @property {module:models/EditHistoryArrayWrapper}
     */
    EditHistoryArrayWrapper,

    /**
     * The EditHistoryAuthor model constructor.
     * @property {module:models/EditHistoryAuthor}
     */
    EditHistoryAuthor,

    /**
     * The EditHistoryChangesWrapper model constructor.
     * @property {module:models/EditHistoryChangesWrapper}
     */
    EditHistoryChangesWrapper,

    /**
     * The EditHistoryDataDto model constructor.
     * @property {module:models/EditHistoryDataDto}
     */
    EditHistoryDataDto,

    /**
     * The EditHistoryDataWrapper model constructor.
     * @property {module:models/EditHistoryDataWrapper}
     */
    EditHistoryDataWrapper,

    /**
     * The EditHistoryDto model constructor.
     * @property {module:models/EditHistoryDto}
     */
    EditHistoryDto,

    /**
     * The EditHistoryUrl model constructor.
     * @property {module:models/EditHistoryUrl}
     */
    EditHistoryUrl,

    /**
     * The EditorConfigurationDto model constructor.
     * @property {module:models/EditorConfigurationDto}
     */
    EditorConfigurationDto,

    /**
     * The EditorType model constructor.
     * @property {module:models/EditorType}
     */
    EditorType,

    /**
     * The EmailActivationSettings model constructor.
     * @property {module:models/EmailActivationSettings}
     */
    EmailActivationSettings,

    /**
     * The EmailActivationSettingsWrapper model constructor.
     * @property {module:models/EmailActivationSettingsWrapper}
     */
    EmailActivationSettingsWrapper,

    /**
     * The EmailMemberRequestDto model constructor.
     * @property {module:models/EmailMemberRequestDto}
     */
    EmailMemberRequestDto,

    /**
     * The EmailValidationKeyModel model constructor.
     * @property {module:models/EmailValidationKeyModel}
     */
    EmailValidationKeyModel,

    /**
     * The EmbeddedConfig model constructor.
     * @property {module:models/EmbeddedConfig}
     */
    EmbeddedConfig,

    /**
     * The EmployeeActivationStatus model constructor.
     * @property {module:models/EmployeeActivationStatus}
     */
    EmployeeActivationStatus,

    /**
     * The EmployeeArrayWrapper model constructor.
     * @property {module:models/EmployeeArrayWrapper}
     */
    EmployeeArrayWrapper,

    /**
     * The EmployeeDto model constructor.
     * @property {module:models/EmployeeDto}
     */
    EmployeeDto,

    /**
     * The EmployeeFullArrayWrapper model constructor.
     * @property {module:models/EmployeeFullArrayWrapper}
     */
    EmployeeFullArrayWrapper,

    /**
     * The EmployeeFullDto model constructor.
     * @property {module:models/EmployeeFullDto}
     */
    EmployeeFullDto,

    /**
     * The EmployeeFullWrapper model constructor.
     * @property {module:models/EmployeeFullWrapper}
     */
    EmployeeFullWrapper,

    /**
     * The EmployeeStatus model constructor.
     * @property {module:models/EmployeeStatus}
     */
    EmployeeStatus,

    /**
     * The EmployeeType model constructor.
     * @property {module:models/EmployeeType}
     */
    EmployeeType,

    /**
     * The EncryprtionStatus model constructor.
     * @property {module:models/EncryprtionStatus}
     */
    EncryprtionStatus,

    /**
     * The EncryptionKeysConfig model constructor.
     * @property {module:models/EncryptionKeysConfig}
     */
    EncryptionKeysConfig,

    /**
     * The EncryptionSettings model constructor.
     * @property {module:models/EncryptionSettings}
     */
    EncryptionSettings,

    /**
     * The EncryptionSettingsWrapper model constructor.
     * @property {module:models/EncryptionSettingsWrapper}
     */
    EncryptionSettingsWrapper,

    /**
     * The EntryType model constructor.
     * @property {module:models/EntryType}
     */
    EntryType,

    /**
     * The ErrorResponse model constructor.
     * @property {module:models/ErrorResponse}
     */
    ErrorResponse,

    /**
     * The ExchangeToken200Response model constructor.
     * @property {module:models/ExchangeToken200Response}
     */
    ExchangeToken200Response,

    /**
     * The ExternalShareDto model constructor.
     * @property {module:models/ExternalShareDto}
     */
    ExternalShareDto,

    /**
     * The ExternalShareRequestParam model constructor.
     * @property {module:models/ExternalShareRequestParam}
     */
    ExternalShareRequestParam,

    /**
     * The ExternalShareWrapper model constructor.
     * @property {module:models/ExternalShareWrapper}
     */
    ExternalShareWrapper,

    /**
     * The FeatureUsedDto model constructor.
     * @property {module:models/FeatureUsedDto}
     */
    FeatureUsedDto,

    /**
     * The FeedbackConfig model constructor.
     * @property {module:models/FeedbackConfig}
     */
    FeedbackConfig,

    /**
     * The FileConflictResolveType model constructor.
     * @property {module:models/FileConflictResolveType}
     */
    FileConflictResolveType,

    /**
     * The FileDtoInteger model constructor.
     * @property {module:models/FileDtoInteger}
     */
    FileDtoInteger,

    /**
     * The FileDtoIntegerSecurity model constructor.
     * @property {module:models/FileDtoIntegerSecurity}
     */
    FileDtoIntegerSecurity,

    /**
     * The FileDtoIntegerViewAccessibility model constructor.
     * @property {module:models/FileDtoIntegerViewAccessibility}
     */
    FileDtoIntegerViewAccessibility,

    /**
     * The FileEntryArrayWrapper model constructor.
     * @property {module:models/FileEntryArrayWrapper}
     */
    FileEntryArrayWrapper,

    /**
     * The FileEntryDto model constructor.
     * @property {module:models/FileEntryDto}
     */
    FileEntryDto,

    /**
     * The FileEntryType model constructor.
     * @property {module:models/FileEntryType}
     */
    FileEntryType,

    /**
     * The FileEntryWrapper model constructor.
     * @property {module:models/FileEntryWrapper}
     */
    FileEntryWrapper,

    /**
     * The FileIntegerArrayWrapper model constructor.
     * @property {module:models/FileIntegerArrayWrapper}
     */
    FileIntegerArrayWrapper,

    /**
     * The FileIntegerWrapper model constructor.
     * @property {module:models/FileIntegerWrapper}
     */
    FileIntegerWrapper,

    /**
     * The FileLink model constructor.
     * @property {module:models/FileLink}
     */
    FileLink,

    /**
     * The FileLinkRequest model constructor.
     * @property {module:models/FileLinkRequest}
     */
    FileLinkRequest,

    /**
     * The FileLinkWrapper model constructor.
     * @property {module:models/FileLinkWrapper}
     */
    FileLinkWrapper,

    /**
     * The FileOperationArrayWrapper model constructor.
     * @property {module:models/FileOperationArrayWrapper}
     */
    FileOperationArrayWrapper,

    /**
     * The FileOperationDto model constructor.
     * @property {module:models/FileOperationDto}
     */
    FileOperationDto,

    /**
     * The FileOperationType model constructor.
     * @property {module:models/FileOperationType}
     */
    FileOperationType,

    /**
     * The FileOperationWrapper model constructor.
     * @property {module:models/FileOperationWrapper}
     */
    FileOperationWrapper,

    /**
     * The FileReference model constructor.
     * @property {module:models/FileReference}
     */
    FileReference,

    /**
     * The FileReferenceData model constructor.
     * @property {module:models/FileReferenceData}
     */
    FileReferenceData,

    /**
     * The FileReferenceWrapper model constructor.
     * @property {module:models/FileReferenceWrapper}
     */
    FileReferenceWrapper,

    /**
     * The FileShare model constructor.
     * @property {module:models/FileShare}
     */
    FileShare,

    /**
     * The FileShareArrayWrapper model constructor.
     * @property {module:models/FileShareArrayWrapper}
     */
    FileShareArrayWrapper,

    /**
     * The FileShareDto model constructor.
     * @property {module:models/FileShareDto}
     */
    FileShareDto,

    /**
     * The FileShareParams model constructor.
     * @property {module:models/FileShareParams}
     */
    FileShareParams,

    /**
     * The FileShareWrapper model constructor.
     * @property {module:models/FileShareWrapper}
     */
    FileShareWrapper,

    /**
     * The FileStatus model constructor.
     * @property {module:models/FileStatus}
     */
    FileStatus,

    /**
     * The FileType model constructor.
     * @property {module:models/FileType}
     */
    FileType,

    /**
     * The FileUploadResultDto model constructor.
     * @property {module:models/FileUploadResultDto}
     */
    FileUploadResultDto,

    /**
     * The FileUploadResultWrapper model constructor.
     * @property {module:models/FileUploadResultWrapper}
     */
    FileUploadResultWrapper,

    /**
     * The FilesSettingsDto model constructor.
     * @property {module:models/FilesSettingsDto}
     */
    FilesSettingsDto,

    /**
     * The FilesSettingsDtoInternalFormats model constructor.
     * @property {module:models/FilesSettingsDtoInternalFormats}
     */
    FilesSettingsDtoInternalFormats,

    /**
     * The FilesSettingsWrapper model constructor.
     * @property {module:models/FilesSettingsWrapper}
     */
    FilesSettingsWrapper,

    /**
     * The FilesStatisticsFolder model constructor.
     * @property {module:models/FilesStatisticsFolder}
     */
    FilesStatisticsFolder,

    /**
     * The FilesStatisticsResultDto model constructor.
     * @property {module:models/FilesStatisticsResultDto}
     */
    FilesStatisticsResultDto,

    /**
     * The FilesStatisticsResultWrapper model constructor.
     * @property {module:models/FilesStatisticsResultWrapper}
     */
    FilesStatisticsResultWrapper,

    /**
     * The FillingFormResultDtoInteger model constructor.
     * @property {module:models/FillingFormResultDtoInteger}
     */
    FillingFormResultDtoInteger,

    /**
     * The FillingFormResultIntegerWrapper model constructor.
     * @property {module:models/FillingFormResultIntegerWrapper}
     */
    FillingFormResultIntegerWrapper,

    /**
     * The FilterType model constructor.
     * @property {module:models/FilterType}
     */
    FilterType,

    /**
     * The FinishDto model constructor.
     * @property {module:models/FinishDto}
     */
    FinishDto,

    /**
     * The FireBaseUser model constructor.
     * @property {module:models/FireBaseUser}
     */
    FireBaseUser,

    /**
     * The FireBaseUserWrapper model constructor.
     * @property {module:models/FireBaseUserWrapper}
     */
    FireBaseUserWrapper,

    /**
     * The FirebaseDto model constructor.
     * @property {module:models/FirebaseDto}
     */
    FirebaseDto,

    /**
     * The FirebaseRequestsDto model constructor.
     * @property {module:models/FirebaseRequestsDto}
     */
    FirebaseRequestsDto,

    /**
     * The FolderContentDtoInteger model constructor.
     * @property {module:models/FolderContentDtoInteger}
     */
    FolderContentDtoInteger,

    /**
     * The FolderContentIntegerArrayWrapper model constructor.
     * @property {module:models/FolderContentIntegerArrayWrapper}
     */
    FolderContentIntegerArrayWrapper,

    /**
     * The FolderContentIntegerWrapper model constructor.
     * @property {module:models/FolderContentIntegerWrapper}
     */
    FolderContentIntegerWrapper,

    /**
     * The FolderDtoInteger model constructor.
     * @property {module:models/FolderDtoInteger}
     */
    FolderDtoInteger,

    /**
     * The FolderDtoString model constructor.
     * @property {module:models/FolderDtoString}
     */
    FolderDtoString,

    /**
     * The FolderIntegerArrayWrapper model constructor.
     * @property {module:models/FolderIntegerArrayWrapper}
     */
    FolderIntegerArrayWrapper,

    /**
     * The FolderIntegerWrapper model constructor.
     * @property {module:models/FolderIntegerWrapper}
     */
    FolderIntegerWrapper,

    /**
     * The FolderStringArrayWrapper model constructor.
     * @property {module:models/FolderStringArrayWrapper}
     */
    FolderStringArrayWrapper,

    /**
     * The FolderStringWrapper model constructor.
     * @property {module:models/FolderStringWrapper}
     */
    FolderStringWrapper,

    /**
     * The FolderType model constructor.
     * @property {module:models/FolderType}
     */
    FolderType,

    /**
     * The FormFillingManageAction model constructor.
     * @property {module:models/FormFillingManageAction}
     */
    FormFillingManageAction,

    /**
     * The FormFillingStatus model constructor.
     * @property {module:models/FormFillingStatus}
     */
    FormFillingStatus,

    /**
     * The FormGalleryDto model constructor.
     * @property {module:models/FormGalleryDto}
     */
    FormGalleryDto,

    /**
     * The FormRole model constructor.
     * @property {module:models/FormRole}
     */
    FormRole,

    /**
     * The FormRoleArrayWrapper model constructor.
     * @property {module:models/FormRoleArrayWrapper}
     */
    FormRoleArrayWrapper,

    /**
     * The FormRoleWrapper model constructor.
     * @property {module:models/FormRoleWrapper}
     */
    FormRoleWrapper,

    /**
     * The FormsItemArrayWrapper model constructor.
     * @property {module:models/FormsItemArrayWrapper}
     */
    FormsItemArrayWrapper,

    /**
     * The FormsItemDto model constructor.
     * @property {module:models/FormsItemDto}
     */
    FormsItemDto,

    /**
     * The GetReferenceDataDtoInteger model constructor.
     * @property {module:models/GetReferenceDataDtoInteger}
     */
    GetReferenceDataDtoInteger,

    /**
     * The GobackConfig model constructor.
     * @property {module:models/GobackConfig}
     */
    GobackConfig,

    /**
     * The GreetingSettingsRequestsDto model constructor.
     * @property {module:models/GreetingSettingsRequestsDto}
     */
    GreetingSettingsRequestsDto,

    /**
     * The GroupArrayWrapper model constructor.
     * @property {module:models/GroupArrayWrapper}
     */
    GroupArrayWrapper,

    /**
     * The GroupDto model constructor.
     * @property {module:models/GroupDto}
     */
    GroupDto,

    /**
     * The GroupRequestDto model constructor.
     * @property {module:models/GroupRequestDto}
     */
    GroupRequestDto,

    /**
     * The GroupSummaryArrayWrapper model constructor.
     * @property {module:models/GroupSummaryArrayWrapper}
     */
    GroupSummaryArrayWrapper,

    /**
     * The GroupSummaryDto model constructor.
     * @property {module:models/GroupSummaryDto}
     */
    GroupSummaryDto,

    /**
     * The GroupWrapper model constructor.
     * @property {module:models/GroupWrapper}
     */
    GroupWrapper,

    /**
     * The HideConfirmConvertRequestDto model constructor.
     * @property {module:models/HideConfirmConvertRequestDto}
     */
    HideConfirmConvertRequestDto,

    /**
     * The HistoryAction model constructor.
     * @property {module:models/HistoryAction}
     */
    HistoryAction,

    /**
     * The HistoryArrayWrapper model constructor.
     * @property {module:models/HistoryArrayWrapper}
     */
    HistoryArrayWrapper,

    /**
     * The HistoryData model constructor.
     * @property {module:models/HistoryData}
     */
    HistoryData,

    /**
     * The HistoryDto model constructor.
     * @property {module:models/HistoryDto}
     */
    HistoryDto,

    /**
     * The ICompressWrapper model constructor.
     * @property {module:models/ICompressWrapper}
     */
    ICompressWrapper,

    /**
     * The IMagickGeometry model constructor.
     * @property {module:models/IMagickGeometry}
     */
    IMagickGeometry,

    /**
     * The IPRestriction model constructor.
     * @property {module:models/IPRestriction}
     */
    IPRestriction,

    /**
     * The IPRestrictionArrayWrapper model constructor.
     * @property {module:models/IPRestrictionArrayWrapper}
     */
    IPRestrictionArrayWrapper,

    /**
     * The IPRestrictionsSettings model constructor.
     * @property {module:models/IPRestrictionsSettings}
     */
    IPRestrictionsSettings,

    /**
     * The IPRestrictionsSettingsWrapper model constructor.
     * @property {module:models/IPRestrictionsSettingsWrapper}
     */
    IPRestrictionsSettingsWrapper,

    /**
     * The InfoConfigDto model constructor.
     * @property {module:models/InfoConfigDto}
     */
    InfoConfigDto,

    /**
     * The Int64Wrapper model constructor.
     * @property {module:models/Int64Wrapper}
     */
    Int64Wrapper,

    /**
     * The InviteUsersRequestDto model constructor.
     * @property {module:models/InviteUsersRequestDto}
     */
    InviteUsersRequestDto,

    /**
     * The IpRestrictionBase model constructor.
     * @property {module:models/IpRestrictionBase}
     */
    IpRestrictionBase,

    /**
     * The IpRestrictionsDto model constructor.
     * @property {module:models/IpRestrictionsDto}
     */
    IpRestrictionsDto,

    /**
     * The IpRestrictionsWrapper model constructor.
     * @property {module:models/IpRestrictionsWrapper}
     */
    IpRestrictionsWrapper,

    /**
     * The IsDefaultWhiteLabelLogosArrayWrapper model constructor.
     * @property {module:models/IsDefaultWhiteLabelLogosArrayWrapper}
     */
    IsDefaultWhiteLabelLogosArrayWrapper,

    /**
     * The IsDefaultWhiteLabelLogosDto model constructor.
     * @property {module:models/IsDefaultWhiteLabelLogosDto}
     */
    IsDefaultWhiteLabelLogosDto,

    /**
     * The IsDefaultWhiteLabelLogosWrapper model constructor.
     * @property {module:models/IsDefaultWhiteLabelLogosWrapper}
     */
    IsDefaultWhiteLabelLogosWrapper,

    /**
     * The ItemKeyValuePairObjectObject model constructor.
     * @property {module:models/ItemKeyValuePairObjectObject}
     */
    ItemKeyValuePairObjectObject,

    /**
     * The ItemKeyValuePairStringBoolean model constructor.
     * @property {module:models/ItemKeyValuePairStringBoolean}
     */
    ItemKeyValuePairStringBoolean,

    /**
     * The ItemKeyValuePairStringLogoRequestsDto model constructor.
     * @property {module:models/ItemKeyValuePairStringLogoRequestsDto}
     */
    ItemKeyValuePairStringLogoRequestsDto,

    /**
     * The ItemKeyValuePairStringString model constructor.
     * @property {module:models/ItemKeyValuePairStringString}
     */
    ItemKeyValuePairStringString,

    /**
     * The KeyValuePairBooleanString model constructor.
     * @property {module:models/KeyValuePairBooleanString}
     */
    KeyValuePairBooleanString,

    /**
     * The KeyValuePairBooleanStringWrapper model constructor.
     * @property {module:models/KeyValuePairBooleanStringWrapper}
     */
    KeyValuePairBooleanStringWrapper,

    /**
     * The KeyValuePairStringStringValues model constructor.
     * @property {module:models/KeyValuePairStringStringValues}
     */
    KeyValuePairStringStringValues,

    /**
     * The LinkAccountRequestDto model constructor.
     * @property {module:models/LinkAccountRequestDto}
     */
    LinkAccountRequestDto,

    /**
     * The LinkType model constructor.
     * @property {module:models/LinkType}
     */
    LinkType,

    /**
     * The LockFileParameters model constructor.
     * @property {module:models/LockFileParameters}
     */
    LockFileParameters,

    /**
     * The LoginEventArrayWrapper model constructor.
     * @property {module:models/LoginEventArrayWrapper}
     */
    LoginEventArrayWrapper,

    /**
     * The LoginEventDto model constructor.
     * @property {module:models/LoginEventDto}
     */
    LoginEventDto,

    /**
     * The LoginProvider model constructor.
     * @property {module:models/LoginProvider}
     */
    LoginProvider,

    /**
     * The LoginSettingsDto model constructor.
     * @property {module:models/LoginSettingsDto}
     */
    LoginSettingsDto,

    /**
     * The LoginSettingsRequestDto model constructor.
     * @property {module:models/LoginSettingsRequestDto}
     */
    LoginSettingsRequestDto,

    /**
     * The LoginSettingsWrapper model constructor.
     * @property {module:models/LoginSettingsWrapper}
     */
    LoginSettingsWrapper,

    /**
     * The Logo model constructor.
     * @property {module:models/Logo}
     */
    Logo,

    /**
     * The LogoConfigDto model constructor.
     * @property {module:models/LogoConfigDto}
     */
    LogoConfigDto,

    /**
     * The LogoCover model constructor.
     * @property {module:models/LogoCover}
     */
    LogoCover,

    /**
     * The LogoRequest model constructor.
     * @property {module:models/LogoRequest}
     */
    LogoRequest,

    /**
     * The LogoRequestsDto model constructor.
     * @property {module:models/LogoRequestsDto}
     */
    LogoRequestsDto,

    /**
     * The MailDomainSettingsRequestsDto model constructor.
     * @property {module:models/MailDomainSettingsRequestsDto}
     */
    MailDomainSettingsRequestsDto,

    /**
     * The ManageFormFillingDtoInteger model constructor.
     * @property {module:models/ManageFormFillingDtoInteger}
     */
    ManageFormFillingDtoInteger,

    /**
     * The MemberBaseRequestDto model constructor.
     * @property {module:models/MemberBaseRequestDto}
     */
    MemberBaseRequestDto,

    /**
     * The MemberRequestDto model constructor.
     * @property {module:models/MemberRequestDto}
     */
    MemberRequestDto,

    /**
     * The MembersRequest model constructor.
     * @property {module:models/MembersRequest}
     */
    MembersRequest,

    /**
     * The MentionMessageWrapper model constructor.
     * @property {module:models/MentionMessageWrapper}
     */
    MentionMessageWrapper,

    /**
     * The MentionWrapper model constructor.
     * @property {module:models/MentionWrapper}
     */
    MentionWrapper,

    /**
     * The MentionWrapperArrayWrapper model constructor.
     * @property {module:models/MentionWrapperArrayWrapper}
     */
    MentionWrapperArrayWrapper,

    /**
     * The MessageAction model constructor.
     * @property {module:models/MessageAction}
     */
    MessageAction,

    /**
     * The MigratingApiFiles model constructor.
     * @property {module:models/MigratingApiFiles}
     */
    MigratingApiFiles,

    /**
     * The MigratingApiGroup model constructor.
     * @property {module:models/MigratingApiGroup}
     */
    MigratingApiGroup,

    /**
     * The MigratingApiUser model constructor.
     * @property {module:models/MigratingApiUser}
     */
    MigratingApiUser,

    /**
     * The MigrationApiInfo model constructor.
     * @property {module:models/MigrationApiInfo}
     */
    MigrationApiInfo,

    /**
     * The MigrationStatusDto model constructor.
     * @property {module:models/MigrationStatusDto}
     */
    MigrationStatusDto,

    /**
     * The MigrationStatusWrapper model constructor.
     * @property {module:models/MigrationStatusWrapper}
     */
    MigrationStatusWrapper,

    /**
     * The MobilePhoneActivationStatus model constructor.
     * @property {module:models/MobilePhoneActivationStatus}
     */
    MobilePhoneActivationStatus,

    /**
     * The MobileRequestsDto model constructor.
     * @property {module:models/MobileRequestsDto}
     */
    MobileRequestsDto,

    /**
     * The Module model constructor.
     * @property {module:models/Module}
     */
    Module,

    /**
     * The ModuleType model constructor.
     * @property {module:models/ModuleType}
     */
    ModuleType,

    /**
     * The ModuleWrapper model constructor.
     * @property {module:models/ModuleWrapper}
     */
    ModuleWrapper,

    /**
     * The NewItemsDtoFileEntryDto model constructor.
     * @property {module:models/NewItemsDtoFileEntryDto}
     */
    NewItemsDtoFileEntryDto,

    /**
     * The NewItemsDtoRoomNewItemsDto model constructor.
     * @property {module:models/NewItemsDtoRoomNewItemsDto}
     */
    NewItemsDtoRoomNewItemsDto,

    /**
     * The NewItemsFileEntryArrayWrapper model constructor.
     * @property {module:models/NewItemsFileEntryArrayWrapper}
     */
    NewItemsFileEntryArrayWrapper,

    /**
     * The NewItemsRoomNewItemsArrayWrapper model constructor.
     * @property {module:models/NewItemsRoomNewItemsArrayWrapper}
     */
    NewItemsRoomNewItemsArrayWrapper,

    /**
     * The NoContentResult model constructor.
     * @property {module:models/NoContentResult}
     */
    NoContentResult,

    /**
     * The NoContentResultWrapper model constructor.
     * @property {module:models/NoContentResultWrapper}
     */
    NoContentResultWrapper,

    /**
     * The NotificationSettingsDto model constructor.
     * @property {module:models/NotificationSettingsDto}
     */
    NotificationSettingsDto,

    /**
     * The NotificationSettingsRequestsDto model constructor.
     * @property {module:models/NotificationSettingsRequestsDto}
     */
    NotificationSettingsRequestsDto,

    /**
     * The NotificationSettingsWrapper model constructor.
     * @property {module:models/NotificationSettingsWrapper}
     */
    NotificationSettingsWrapper,

    /**
     * The NotificationType model constructor.
     * @property {module:models/NotificationType}
     */
    NotificationType,

    /**
     * The OAuth20Token model constructor.
     * @property {module:models/OAuth20Token}
     */
    OAuth20Token,

    /**
     * The ObjectArrayWrapper model constructor.
     * @property {module:models/ObjectArrayWrapper}
     */
    ObjectArrayWrapper,

    /**
     * The ObjectWrapper model constructor.
     * @property {module:models/ObjectWrapper}
     */
    ObjectWrapper,

    /**
     * The OperationDto model constructor.
     * @property {module:models/OperationDto}
     */
    OperationDto,

    /**
     * The Options model constructor.
     * @property {module:models/Options}
     */
    Options,

    /**
     * The OrderBy model constructor.
     * @property {module:models/OrderBy}
     */
    OrderBy,

    /**
     * The OrderRequestDto model constructor.
     * @property {module:models/OrderRequestDto}
     */
    OrderRequestDto,

    /**
     * The OrdersItemRequestDtoInteger model constructor.
     * @property {module:models/OrdersItemRequestDtoInteger}
     */
    OrdersItemRequestDtoInteger,

    /**
     * The OrdersRequestDtoInteger model constructor.
     * @property {module:models/OrdersRequestDtoInteger}
     */
    OrdersRequestDtoInteger,

    /**
     * The OwnerChangeInstructionsDto model constructor.
     * @property {module:models/OwnerChangeInstructionsDto}
     */
    OwnerChangeInstructionsDto,

    /**
     * The OwnerChangeInstructionsWrapper model constructor.
     * @property {module:models/OwnerChangeInstructionsWrapper}
     */
    OwnerChangeInstructionsWrapper,

    /**
     * The OwnerIdSettingsRequestDto model constructor.
     * @property {module:models/OwnerIdSettingsRequestDto}
     */
    OwnerIdSettingsRequestDto,

    /**
     * The PageableModificationResponse model constructor.
     * @property {module:models/PageableModificationResponse}
     */
    PageableModificationResponse,

    /**
     * The PageableResponse model constructor.
     * @property {module:models/PageableResponse}
     */
    PageableResponse,

    /**
     * The PageableResponseClientInfoResponse model constructor.
     * @property {module:models/PageableResponseClientInfoResponse}
     */
    PageableResponseClientInfoResponse,

    /**
     * The Paragraph model constructor.
     * @property {module:models/Paragraph}
     */
    Paragraph,

    /**
     * The PasswordHasher model constructor.
     * @property {module:models/PasswordHasher}
     */
    PasswordHasher,

    /**
     * The PasswordSettingsDto model constructor.
     * @property {module:models/PasswordSettingsDto}
     */
    PasswordSettingsDto,

    /**
     * The PasswordSettingsRequestsDto model constructor.
     * @property {module:models/PasswordSettingsRequestsDto}
     */
    PasswordSettingsRequestsDto,

    /**
     * The PasswordSettingsWrapper model constructor.
     * @property {module:models/PasswordSettingsWrapper}
     */
    PasswordSettingsWrapper,

    /**
     * The PaymentCalculation model constructor.
     * @property {module:models/PaymentCalculation}
     */
    PaymentCalculation,

    /**
     * The PaymentCalculationWrapper model constructor.
     * @property {module:models/PaymentCalculationWrapper}
     */
    PaymentCalculationWrapper,

    /**
     * The PaymentMethodStatus model constructor.
     * @property {module:models/PaymentMethodStatus}
     */
    PaymentMethodStatus,

    /**
     * The PaymentSettingsDto model constructor.
     * @property {module:models/PaymentSettingsDto}
     */
    PaymentSettingsDto,

    /**
     * The PaymentSettingsWrapper model constructor.
     * @property {module:models/PaymentSettingsWrapper}
     */
    PaymentSettingsWrapper,

    /**
     * The PaymentUrlRequestsDto model constructor.
     * @property {module:models/PaymentUrlRequestsDto}
     */
    PaymentUrlRequestsDto,

    /**
     * The Payments model constructor.
     * @property {module:models/Payments}
     */
    Payments,

    /**
     * The PermissionsConfig model constructor.
     * @property {module:models/PermissionsConfig}
     */
    PermissionsConfig,

    /**
     * The PluginsConfig model constructor.
     * @property {module:models/PluginsConfig}
     */
    PluginsConfig,

    /**
     * The PluginsDto model constructor.
     * @property {module:models/PluginsDto}
     */
    PluginsDto,

    /**
     * The PriceDto model constructor.
     * @property {module:models/PriceDto}
     */
    PriceDto,

    /**
     * The ProductAdministratorDto model constructor.
     * @property {module:models/ProductAdministratorDto}
     */
    ProductAdministratorDto,

    /**
     * The ProductAdministratorWrapper model constructor.
     * @property {module:models/ProductAdministratorWrapper}
     */
    ProductAdministratorWrapper,

    /**
     * The ProductQuantityType model constructor.
     * @property {module:models/ProductQuantityType}
     */
    ProductQuantityType,

    /**
     * The ProductType model constructor.
     * @property {module:models/ProductType}
     */
    ProductType,

    /**
     * The ProviderArrayWrapper model constructor.
     * @property {module:models/ProviderArrayWrapper}
     */
    ProviderArrayWrapper,

    /**
     * The ProviderDto model constructor.
     * @property {module:models/ProviderDto}
     */
    ProviderDto,

    /**
     * The ProviderFilter model constructor.
     * @property {module:models/ProviderFilter}
     */
    ProviderFilter,

    /**
     * The QuantityRequestDto model constructor.
     * @property {module:models/QuantityRequestDto}
     */
    QuantityRequestDto,

    /**
     * The Quota model constructor.
     * @property {module:models/Quota}
     */
    Quota,

    /**
     * The QuotaArrayWrapper model constructor.
     * @property {module:models/QuotaArrayWrapper}
     */
    QuotaArrayWrapper,

    /**
     * The QuotaDto model constructor.
     * @property {module:models/QuotaDto}
     */
    QuotaDto,

    /**
     * The QuotaFilter model constructor.
     * @property {module:models/QuotaFilter}
     */
    QuotaFilter,

    /**
     * The QuotaSettingsRequestsDto model constructor.
     * @property {module:models/QuotaSettingsRequestsDto}
     */
    QuotaSettingsRequestsDto,

    /**
     * The QuotaSettingsRequestsDtoDefaultQuota model constructor.
     * @property {module:models/QuotaSettingsRequestsDtoDefaultQuota}
     */
    QuotaSettingsRequestsDtoDefaultQuota,

    /**
     * The QuotaState model constructor.
     * @property {module:models/QuotaState}
     */
    QuotaState,

    /**
     * The QuotaWrapper model constructor.
     * @property {module:models/QuotaWrapper}
     */
    QuotaWrapper,

    /**
     * The RecaptchaType model constructor.
     * @property {module:models/RecaptchaType}
     */
    RecaptchaType,

    /**
     * The RecentConfig model constructor.
     * @property {module:models/RecentConfig}
     */
    RecentConfig,

    /**
     * The ReportDto model constructor.
     * @property {module:models/ReportDto}
     */
    ReportDto,

    /**
     * The ReportWrapper model constructor.
     * @property {module:models/ReportWrapper}
     */
    ReportWrapper,

    /**
     * The ReviewConfig model constructor.
     * @property {module:models/ReviewConfig}
     */
    ReviewConfig,

    /**
     * The RoomDataLifetimeDto model constructor.
     * @property {module:models/RoomDataLifetimeDto}
     */
    RoomDataLifetimeDto,

    /**
     * The RoomDataLifetimePeriod model constructor.
     * @property {module:models/RoomDataLifetimePeriod}
     */
    RoomDataLifetimePeriod,

    /**
     * The RoomFromTemplateStatusDto model constructor.
     * @property {module:models/RoomFromTemplateStatusDto}
     */
    RoomFromTemplateStatusDto,

    /**
     * The RoomFromTemplateStatusWrapper model constructor.
     * @property {module:models/RoomFromTemplateStatusWrapper}
     */
    RoomFromTemplateStatusWrapper,

    /**
     * The RoomInvitation model constructor.
     * @property {module:models/RoomInvitation}
     */
    RoomInvitation,

    /**
     * The RoomInvitationRequest model constructor.
     * @property {module:models/RoomInvitationRequest}
     */
    RoomInvitationRequest,

    /**
     * The RoomLinkRequest model constructor.
     * @property {module:models/RoomLinkRequest}
     */
    RoomLinkRequest,

    /**
     * The RoomNewItemsDto model constructor.
     * @property {module:models/RoomNewItemsDto}
     */
    RoomNewItemsDto,

    /**
     * The RoomSecurityDto model constructor.
     * @property {module:models/RoomSecurityDto}
     */
    RoomSecurityDto,

    /**
     * The RoomSecurityError model constructor.
     * @property {module:models/RoomSecurityError}
     */
    RoomSecurityError,

    /**
     * The RoomSecurityWrapper model constructor.
     * @property {module:models/RoomSecurityWrapper}
     */
    RoomSecurityWrapper,

    /**
     * The RoomTemplateDto model constructor.
     * @property {module:models/RoomTemplateDto}
     */
    RoomTemplateDto,

    /**
     * The RoomTemplateStatusDto model constructor.
     * @property {module:models/RoomTemplateStatusDto}
     */
    RoomTemplateStatusDto,

    /**
     * The RoomTemplateStatusWrapper model constructor.
     * @property {module:models/RoomTemplateStatusWrapper}
     */
    RoomTemplateStatusWrapper,

    /**
     * The RoomType model constructor.
     * @property {module:models/RoomType}
     */
    RoomType,

    /**
     * The RoomsNotificationSettingsDto model constructor.
     * @property {module:models/RoomsNotificationSettingsDto}
     */
    RoomsNotificationSettingsDto,

    /**
     * The RoomsNotificationSettingsWrapper model constructor.
     * @property {module:models/RoomsNotificationSettingsWrapper}
     */
    RoomsNotificationSettingsWrapper,

    /**
     * The RoomsNotificationsSettingsRequestDto model constructor.
     * @property {module:models/RoomsNotificationsSettingsRequestDto}
     */
    RoomsNotificationsSettingsRequestDto,

    /**
     * The Run model constructor.
     * @property {module:models/Run}
     */
    Run,

    /**
     * The STRINGArrayWrapper model constructor.
     * @property {module:models/STRINGArrayWrapper}
     */
    STRINGArrayWrapper,

    /**
     * The SalesRequestsDto model constructor.
     * @property {module:models/SalesRequestsDto}
     */
    SalesRequestsDto,

    /**
     * The SaveAsPdfInteger model constructor.
     * @property {module:models/SaveAsPdfInteger}
     */
    SaveAsPdfInteger,

    /**
     * The SaveFormRoleMappingDtoInteger model constructor.
     * @property {module:models/SaveFormRoleMappingDtoInteger}
     */
    SaveFormRoleMappingDtoInteger,

    /**
     * The Schedule model constructor.
     * @property {module:models/Schedule}
     */
    Schedule,

    /**
     * The ScheduleWrapper model constructor.
     * @property {module:models/ScheduleWrapper}
     */
    ScheduleWrapper,

    /**
     * The ScopeResponse model constructor.
     * @property {module:models/ScopeResponse}
     */
    ScopeResponse,

    /**
     * The SearchArea model constructor.
     * @property {module:models/SearchArea}
     */
    SearchArea,

    /**
     * The SecurityArrayWrapper model constructor.
     * @property {module:models/SecurityArrayWrapper}
     */
    SecurityArrayWrapper,

    /**
     * The SecurityDto model constructor.
     * @property {module:models/SecurityDto}
     */
    SecurityDto,

    /**
     * The SecurityRequestsDto model constructor.
     * @property {module:models/SecurityRequestsDto}
     */
    SecurityRequestsDto,

    /**
     * The SessionRequest model constructor.
     * @property {module:models/SessionRequest}
     */
    SessionRequest,

    /**
     * The SetManagerRequest model constructor.
     * @property {module:models/SetManagerRequest}
     */
    SetManagerRequest,

    /**
     * The SetPublicDto model constructor.
     * @property {module:models/SetPublicDto}
     */
    SetPublicDto,

    /**
     * The SettingsDto model constructor.
     * @property {module:models/SettingsDto}
     */
    SettingsDto,

    /**
     * The SettingsRequestDto model constructor.
     * @property {module:models/SettingsRequestDto}
     */
    SettingsRequestDto,

    /**
     * The SettingsWrapper model constructor.
     * @property {module:models/SettingsWrapper}
     */
    SettingsWrapper,

    /**
     * The SetupCode model constructor.
     * @property {module:models/SetupCode}
     */
    SetupCode,

    /**
     * The SetupCodeWrapper model constructor.
     * @property {module:models/SetupCodeWrapper}
     */
    SetupCodeWrapper,

    /**
     * The SexEnum model constructor.
     * @property {module:models/SexEnum}
     */
    SexEnum,

    /**
     * The ShareFilterType model constructor.
     * @property {module:models/ShareFilterType}
     */
    ShareFilterType,

    /**
     * The SignupAccountRequestDto model constructor.
     * @property {module:models/SignupAccountRequestDto}
     */
    SignupAccountRequestDto,

    /**
     * The SmtpOperationStatusRequestsDto model constructor.
     * @property {module:models/SmtpOperationStatusRequestsDto}
     */
    SmtpOperationStatusRequestsDto,

    /**
     * The SmtpOperationStatusRequestsWrapper model constructor.
     * @property {module:models/SmtpOperationStatusRequestsWrapper}
     */
    SmtpOperationStatusRequestsWrapper,

    /**
     * The SmtpSettingsDto model constructor.
     * @property {module:models/SmtpSettingsDto}
     */
    SmtpSettingsDto,

    /**
     * The SmtpSettingsWrapper model constructor.
     * @property {module:models/SmtpSettingsWrapper}
     */
    SmtpSettingsWrapper,

    /**
     * The SortOrder model constructor.
     * @property {module:models/SortOrder}
     */
    SortOrder,

    /**
     * The SortedByType model constructor.
     * @property {module:models/SortedByType}
     */
    SortedByType,

    /**
     * The SsoCertificate model constructor.
     * @property {module:models/SsoCertificate}
     */
    SsoCertificate,

    /**
     * The SsoFieldMapping model constructor.
     * @property {module:models/SsoFieldMapping}
     */
    SsoFieldMapping,

    /**
     * The SsoIdpCertificateAdvanced model constructor.
     * @property {module:models/SsoIdpCertificateAdvanced}
     */
    SsoIdpCertificateAdvanced,

    /**
     * The SsoIdpSettings model constructor.
     * @property {module:models/SsoIdpSettings}
     */
    SsoIdpSettings,

    /**
     * The SsoSettingsRequestsDto model constructor.
     * @property {module:models/SsoSettingsRequestsDto}
     */
    SsoSettingsRequestsDto,

    /**
     * The SsoSettingsV2 model constructor.
     * @property {module:models/SsoSettingsV2}
     */
    SsoSettingsV2,

    /**
     * The SsoSettingsV2Wrapper model constructor.
     * @property {module:models/SsoSettingsV2Wrapper}
     */
    SsoSettingsV2Wrapper,

    /**
     * The SsoSpCertificateAdvanced model constructor.
     * @property {module:models/SsoSpCertificateAdvanced}
     */
    SsoSpCertificateAdvanced,

    /**
     * The StartEdit model constructor.
     * @property {module:models/StartEdit}
     */
    StartEdit,

    /**
     * The StartFillingForm model constructor.
     * @property {module:models/StartFillingForm}
     */
    StartFillingForm,

    /**
     * The StartFillingMode model constructor.
     * @property {module:models/StartFillingMode}
     */
    StartFillingMode,

    /**
     * The StartReassignRequestDto model constructor.
     * @property {module:models/StartReassignRequestDto}
     */
    StartReassignRequestDto,

    /**
     * The StartUpdateUserTypeDto model constructor.
     * @property {module:models/StartUpdateUserTypeDto}
     */
    StartUpdateUserTypeDto,

    /**
     * The Status model constructor.
     * @property {module:models/Status}
     */
    Status,

    /**
     * The StorageArrayWrapper model constructor.
     * @property {module:models/StorageArrayWrapper}
     */
    StorageArrayWrapper,

    /**
     * The StorageDto model constructor.
     * @property {module:models/StorageDto}
     */
    StorageDto,

    /**
     * The StorageEncryptionRequestsDto model constructor.
     * @property {module:models/StorageEncryptionRequestsDto}
     */
    StorageEncryptionRequestsDto,

    /**
     * The StorageFilter model constructor.
     * @property {module:models/StorageFilter}
     */
    StorageFilter,

    /**
     * The StorageRequestsDto model constructor.
     * @property {module:models/StorageRequestsDto}
     */
    StorageRequestsDto,

    /**
     * The StorageSettings model constructor.
     * @property {module:models/StorageSettings}
     */
    StorageSettings,

    /**
     * The StorageSettingsWrapper model constructor.
     * @property {module:models/StorageSettingsWrapper}
     */
    StorageSettingsWrapper,

    /**
     * The StringWrapper model constructor.
     * @property {module:models/StringWrapper}
     */
    StringWrapper,

    /**
     * The SubAccount model constructor.
     * @property {module:models/SubAccount}
     */
    SubAccount,

    /**
     * The SubjectFilter model constructor.
     * @property {module:models/SubjectFilter}
     */
    SubjectFilter,

    /**
     * The SubjectType model constructor.
     * @property {module:models/SubjectType}
     */
    SubjectType,

    /**
     * The SubmitForm model constructor.
     * @property {module:models/SubmitForm}
     */
    SubmitForm,

    /**
     * The Tariff model constructor.
     * @property {module:models/Tariff}
     */
    Tariff,

    /**
     * The TariffState model constructor.
     * @property {module:models/TariffState}
     */
    TariffState,

    /**
     * The TariffWrapper model constructor.
     * @property {module:models/TariffWrapper}
     */
    TariffWrapper,

    /**
     * The TaskProgressResponseDto model constructor.
     * @property {module:models/TaskProgressResponseDto}
     */
    TaskProgressResponseDto,

    /**
     * The TaskProgressResponseWrapper model constructor.
     * @property {module:models/TaskProgressResponseWrapper}
     */
    TaskProgressResponseWrapper,

    /**
     * The TemplatesConfig model constructor.
     * @property {module:models/TemplatesConfig}
     */
    TemplatesConfig,

    /**
     * The TemplatesRequestDto model constructor.
     * @property {module:models/TemplatesRequestDto}
     */
    TemplatesRequestDto,

    /**
     * The TenantAuditSettings model constructor.
     * @property {module:models/TenantAuditSettings}
     */
    TenantAuditSettings,

    /**
     * The TenantAuditSettingsWrapper model constructor.
     * @property {module:models/TenantAuditSettingsWrapper}
     */
    TenantAuditSettingsWrapper,

    /**
     * The TenantBannerSettings model constructor.
     * @property {module:models/TenantBannerSettings}
     */
    TenantBannerSettings,

    /**
     * The TenantBannerSettingsDto model constructor.
     * @property {module:models/TenantBannerSettingsDto}
     */
    TenantBannerSettingsDto,

    /**
     * The TenantBannerSettingsWrapper model constructor.
     * @property {module:models/TenantBannerSettingsWrapper}
     */
    TenantBannerSettingsWrapper,

    /**
     * The TenantDeepLinkSettings model constructor.
     * @property {module:models/TenantDeepLinkSettings}
     */
    TenantDeepLinkSettings,

    /**
     * The TenantDeepLinkSettingsWrapper model constructor.
     * @property {module:models/TenantDeepLinkSettingsWrapper}
     */
    TenantDeepLinkSettingsWrapper,

    /**
     * The TenantDevToolsAccessSettings model constructor.
     * @property {module:models/TenantDevToolsAccessSettings}
     */
    TenantDevToolsAccessSettings,

    /**
     * The TenantDevToolsAccessSettingsDto model constructor.
     * @property {module:models/TenantDevToolsAccessSettingsDto}
     */
    TenantDevToolsAccessSettingsDto,

    /**
     * The TenantDevToolsAccessSettingsWrapper model constructor.
     * @property {module:models/TenantDevToolsAccessSettingsWrapper}
     */
    TenantDevToolsAccessSettingsWrapper,

    /**
     * The TenantDomainValidator model constructor.
     * @property {module:models/TenantDomainValidator}
     */
    TenantDomainValidator,

    /**
     * The TenantDto model constructor.
     * @property {module:models/TenantDto}
     */
    TenantDto,

    /**
     * The TenantEntityQuotaSettings model constructor.
     * @property {module:models/TenantEntityQuotaSettings}
     */
    TenantEntityQuotaSettings,

    /**
     * The TenantIndustry model constructor.
     * @property {module:models/TenantIndustry}
     */
    TenantIndustry,

    /**
     * The TenantQuota model constructor.
     * @property {module:models/TenantQuota}
     */
    TenantQuota,

    /**
     * The TenantQuotaFeatureDto model constructor.
     * @property {module:models/TenantQuotaFeatureDto}
     */
    TenantQuotaFeatureDto,

    /**
     * The TenantQuotaSettings model constructor.
     * @property {module:models/TenantQuotaSettings}
     */
    TenantQuotaSettings,

    /**
     * The TenantQuotaSettingsRequestsDto model constructor.
     * @property {module:models/TenantQuotaSettingsRequestsDto}
     */
    TenantQuotaSettingsRequestsDto,

    /**
     * The TenantQuotaSettingsWrapper model constructor.
     * @property {module:models/TenantQuotaSettingsWrapper}
     */
    TenantQuotaSettingsWrapper,

    /**
     * The TenantQuotaWrapper model constructor.
     * @property {module:models/TenantQuotaWrapper}
     */
    TenantQuotaWrapper,

    /**
     * The TenantRoomQuotaSettings model constructor.
     * @property {module:models/TenantRoomQuotaSettings}
     */
    TenantRoomQuotaSettings,

    /**
     * The TenantRoomQuotaSettingsWrapper model constructor.
     * @property {module:models/TenantRoomQuotaSettingsWrapper}
     */
    TenantRoomQuotaSettingsWrapper,

    /**
     * The TenantStatus model constructor.
     * @property {module:models/TenantStatus}
     */
    TenantStatus,

    /**
     * The TenantTrustedDomainsType model constructor.
     * @property {module:models/TenantTrustedDomainsType}
     */
    TenantTrustedDomainsType,

    /**
     * The TenantUserInvitationSettingsDto model constructor.
     * @property {module:models/TenantUserInvitationSettingsDto}
     */
    TenantUserInvitationSettingsDto,

    /**
     * The TenantUserInvitationSettingsRequestDto model constructor.
     * @property {module:models/TenantUserInvitationSettingsRequestDto}
     */
    TenantUserInvitationSettingsRequestDto,

    /**
     * The TenantUserInvitationSettingsWrapper model constructor.
     * @property {module:models/TenantUserInvitationSettingsWrapper}
     */
    TenantUserInvitationSettingsWrapper,

    /**
     * The TenantUserQuotaSettings model constructor.
     * @property {module:models/TenantUserQuotaSettings}
     */
    TenantUserQuotaSettings,

    /**
     * The TenantUserQuotaSettingsWrapper model constructor.
     * @property {module:models/TenantUserQuotaSettingsWrapper}
     */
    TenantUserQuotaSettingsWrapper,

    /**
     * The TenantWalletSettings model constructor.
     * @property {module:models/TenantWalletSettings}
     */
    TenantWalletSettings,

    /**
     * The TenantWalletSettingsWrapper model constructor.
     * @property {module:models/TenantWalletSettingsWrapper}
     */
    TenantWalletSettingsWrapper,

    /**
     * The TenantWrapper model constructor.
     * @property {module:models/TenantWrapper}
     */
    TenantWrapper,

    /**
     * The TerminateRequestDto model constructor.
     * @property {module:models/TerminateRequestDto}
     */
    TerminateRequestDto,

    /**
     * The TfaRequestsDto model constructor.
     * @property {module:models/TfaRequestsDto}
     */
    TfaRequestsDto,

    /**
     * The TfaRequestsDtoType model constructor.
     * @property {module:models/TfaRequestsDtoType}
     */
    TfaRequestsDtoType,

    /**
     * The TfaSettingsArrayWrapper model constructor.
     * @property {module:models/TfaSettingsArrayWrapper}
     */
    TfaSettingsArrayWrapper,

    /**
     * The TfaSettingsDto model constructor.
     * @property {module:models/TfaSettingsDto}
     */
    TfaSettingsDto,

    /**
     * The TfaValidateRequestsDto model constructor.
     * @property {module:models/TfaValidateRequestsDto}
     */
    TfaValidateRequestsDto,

    /**
     * The ThirdPartyBackupRequestDto model constructor.
     * @property {module:models/ThirdPartyBackupRequestDto}
     */
    ThirdPartyBackupRequestDto,

    /**
     * The ThirdPartyParams model constructor.
     * @property {module:models/ThirdPartyParams}
     */
    ThirdPartyParams,

    /**
     * The ThirdPartyParamsArrayWrapper model constructor.
     * @property {module:models/ThirdPartyParamsArrayWrapper}
     */
    ThirdPartyParamsArrayWrapper,

    /**
     * The ThirdPartyRequestDto model constructor.
     * @property {module:models/ThirdPartyRequestDto}
     */
    ThirdPartyRequestDto,

    /**
     * The Thumbnail model constructor.
     * @property {module:models/Thumbnail}
     */
    Thumbnail,

    /**
     * The ThumbnailsDataDto model constructor.
     * @property {module:models/ThumbnailsDataDto}
     */
    ThumbnailsDataDto,

    /**
     * The ThumbnailsDataWrapper model constructor.
     * @property {module:models/ThumbnailsDataWrapper}
     */
    ThumbnailsDataWrapper,

    /**
     * The ThumbnailsRequest model constructor.
     * @property {module:models/ThumbnailsRequest}
     */
    ThumbnailsRequest,

    /**
     * The TimezonesRequestsArrayWrapper model constructor.
     * @property {module:models/TimezonesRequestsArrayWrapper}
     */
    TimezonesRequestsArrayWrapper,

    /**
     * The TimezonesRequestsDto model constructor.
     * @property {module:models/TimezonesRequestsDto}
     */
    TimezonesRequestsDto,

    /**
     * The TopUpDepositRequestDto model constructor.
     * @property {module:models/TopUpDepositRequestDto}
     */
    TopUpDepositRequestDto,

    /**
     * The TurnOnAdminMessageSettingsRequestDto model constructor.
     * @property {module:models/TurnOnAdminMessageSettingsRequestDto}
     */
    TurnOnAdminMessageSettingsRequestDto,

    /**
     * The UnknownWrapper model constructor.
     * @property {module:models/UnknownWrapper}
     */
    UnknownWrapper,

    /**
     * The UpdateApiKeyRequest model constructor.
     * @property {module:models/UpdateApiKeyRequest}
     */
    UpdateApiKeyRequest,

    /**
     * The UpdateClientRequest model constructor.
     * @property {module:models/UpdateClientRequest}
     */
    UpdateClientRequest,

    /**
     * The UpdateComment model constructor.
     * @property {module:models/UpdateComment}
     */
    UpdateComment,

    /**
     * The UpdateFile model constructor.
     * @property {module:models/UpdateFile}
     */
    UpdateFile,

    /**
     * The UpdateGroupRequest model constructor.
     * @property {module:models/UpdateGroupRequest}
     */
    UpdateGroupRequest,

    /**
     * The UpdateMemberRequestDto model constructor.
     * @property {module:models/UpdateMemberRequestDto}
     */
    UpdateMemberRequestDto,

    /**
     * The UpdateMembersQuotaRequestDto model constructor.
     * @property {module:models/UpdateMembersQuotaRequestDto}
     */
    UpdateMembersQuotaRequestDto,

    /**
     * The UpdateMembersQuotaRequestDtoQuota model constructor.
     * @property {module:models/UpdateMembersQuotaRequestDtoQuota}
     */
    UpdateMembersQuotaRequestDtoQuota,

    /**
     * The UpdateMembersRequestDto model constructor.
     * @property {module:models/UpdateMembersRequestDto}
     */
    UpdateMembersRequestDto,

    /**
     * The UpdatePhotoMemberRequest model constructor.
     * @property {module:models/UpdatePhotoMemberRequest}
     */
    UpdatePhotoMemberRequest,

    /**
     * The UpdateRoomRequest model constructor.
     * @property {module:models/UpdateRoomRequest}
     */
    UpdateRoomRequest,

    /**
     * The UpdateRoomsQuotaRequestDtoInteger model constructor.
     * @property {module:models/UpdateRoomsQuotaRequestDtoInteger}
     */
    UpdateRoomsQuotaRequestDtoInteger,

    /**
     * The UpdateRoomsRoomIdsRequestDtoInteger model constructor.
     * @property {module:models/UpdateRoomsRoomIdsRequestDtoInteger}
     */
    UpdateRoomsRoomIdsRequestDtoInteger,

    /**
     * The UpdateWebhooksConfigRequestsDto model constructor.
     * @property {module:models/UpdateWebhooksConfigRequestsDto}
     */
    UpdateWebhooksConfigRequestsDto,

    /**
     * The UploadRequestDto model constructor.
     * @property {module:models/UploadRequestDto}
     */
    UploadRequestDto,

    /**
     * The UploadResultDto model constructor.
     * @property {module:models/UploadResultDto}
     */
    UploadResultDto,

    /**
     * The UploadResultWrapper model constructor.
     * @property {module:models/UploadResultWrapper}
     */
    UploadResultWrapper,

    /**
     * The UsageSpaceStatItemArrayWrapper model constructor.
     * @property {module:models/UsageSpaceStatItemArrayWrapper}
     */
    UsageSpaceStatItemArrayWrapper,

    /**
     * The UsageSpaceStatItemDto model constructor.
     * @property {module:models/UsageSpaceStatItemDto}
     */
    UsageSpaceStatItemDto,

    /**
     * The UserConfig model constructor.
     * @property {module:models/UserConfig}
     */
    UserConfig,

    /**
     * The UserInfo model constructor.
     * @property {module:models/UserInfo}
     */
    UserInfo,

    /**
     * The UserInfoWrapper model constructor.
     * @property {module:models/UserInfoWrapper}
     */
    UserInfoWrapper,

    /**
     * The UserInvitation model constructor.
     * @property {module:models/UserInvitation}
     */
    UserInvitation,

    /**
     * The UserInvitationRequestDto model constructor.
     * @property {module:models/UserInvitationRequestDto}
     */
    UserInvitationRequestDto,

    /**
     * The ValidationResult model constructor.
     * @property {module:models/ValidationResult}
     */
    ValidationResult,

    /**
     * The WalletQuantityRequestDto model constructor.
     * @property {module:models/WalletQuantityRequestDto}
     */
    WalletQuantityRequestDto,

    /**
     * The WatermarkAdditions model constructor.
     * @property {module:models/WatermarkAdditions}
     */
    WatermarkAdditions,

    /**
     * The WatermarkDto model constructor.
     * @property {module:models/WatermarkDto}
     */
    WatermarkDto,

    /**
     * The WatermarkOnDraw model constructor.
     * @property {module:models/WatermarkOnDraw}
     */
    WatermarkOnDraw,

    /**
     * The WatermarkRequestDto model constructor.
     * @property {module:models/WatermarkRequestDto}
     */
    WatermarkRequestDto,

    /**
     * The WebItemSecurityRequestsDto model constructor.
     * @property {module:models/WebItemSecurityRequestsDto}
     */
    WebItemSecurityRequestsDto,

    /**
     * The WebItemsSecurityRequestsDto model constructor.
     * @property {module:models/WebItemsSecurityRequestsDto}
     */
    WebItemsSecurityRequestsDto,

    /**
     * The WebPluginArrayWrapper model constructor.
     * @property {module:models/WebPluginArrayWrapper}
     */
    WebPluginArrayWrapper,

    /**
     * The WebPluginDto model constructor.
     * @property {module:models/WebPluginDto}
     */
    WebPluginDto,

    /**
     * The WebPluginRequests model constructor.
     * @property {module:models/WebPluginRequests}
     */
    WebPluginRequests,

    /**
     * The WebPluginWrapper model constructor.
     * @property {module:models/WebPluginWrapper}
     */
    WebPluginWrapper,

    /**
     * The WebhookGroupStatus model constructor.
     * @property {module:models/WebhookGroupStatus}
     */
    WebhookGroupStatus,

    /**
     * The WebhookRetryRequestsDto model constructor.
     * @property {module:models/WebhookRetryRequestsDto}
     */
    WebhookRetryRequestsDto,

    /**
     * The WebhookTrigger model constructor.
     * @property {module:models/WebhookTrigger}
     */
    WebhookTrigger,

    /**
     * The WebhooksConfigDto model constructor.
     * @property {module:models/WebhooksConfigDto}
     */
    WebhooksConfigDto,

    /**
     * The WebhooksConfigWithStatusArrayWrapper model constructor.
     * @property {module:models/WebhooksConfigWithStatusArrayWrapper}
     */
    WebhooksConfigWithStatusArrayWrapper,

    /**
     * The WebhooksConfigWithStatusDto model constructor.
     * @property {module:models/WebhooksConfigWithStatusDto}
     */
    WebhooksConfigWithStatusDto,

    /**
     * The WebhooksConfigWrapper model constructor.
     * @property {module:models/WebhooksConfigWrapper}
     */
    WebhooksConfigWrapper,

    /**
     * The WebhooksLogArrayWrapper model constructor.
     * @property {module:models/WebhooksLogArrayWrapper}
     */
    WebhooksLogArrayWrapper,

    /**
     * The WebhooksLogDto model constructor.
     * @property {module:models/WebhooksLogDto}
     */
    WebhooksLogDto,

    /**
     * The WebhooksLogWrapper model constructor.
     * @property {module:models/WebhooksLogWrapper}
     */
    WebhooksLogWrapper,

    /**
     * The WhiteLabelItemArrayWrapper model constructor.
     * @property {module:models/WhiteLabelItemArrayWrapper}
     */
    WhiteLabelItemArrayWrapper,

    /**
     * The WhiteLabelItemDto model constructor.
     * @property {module:models/WhiteLabelItemDto}
     */
    WhiteLabelItemDto,

    /**
     * The WhiteLabelItemPathDto model constructor.
     * @property {module:models/WhiteLabelItemPathDto}
     */
    WhiteLabelItemPathDto,

    /**
     * The WhiteLabelRequestsDto model constructor.
     * @property {module:models/WhiteLabelRequestsDto}
     */
    WhiteLabelRequestsDto,

    /**
     * The WizardRequestsDto model constructor.
     * @property {module:models/WizardRequestsDto}
     */
    WizardRequestsDto,

    /**
     * The WizardSettings model constructor.
     * @property {module:models/WizardSettings}
     */
    WizardSettings,

    /**
     * The WizardSettingsWrapper model constructor.
     * @property {module:models/WizardSettingsWrapper}
     */
    WizardSettingsWrapper,

    /**
    * The ApiKeysApi service constructor.
    * @property {module:api/ApiKeysApi}
    */
    ApiKeysApi,

    /**
    * The AuthenticationApi service constructor.
    * @property {module:api/AuthenticationApi}
    */
    AuthenticationApi,

    /**
    * The BackupApi service constructor.
    * @property {module:api/BackupApi}
    */
    BackupApi,

    /**
    * The CapabilitiesApi service constructor.
    * @property {module:api/CapabilitiesApi}
    */
    CapabilitiesApi,

    /**
    * The FilesFilesApi service constructor.
    * @property {module:api/FilesFilesApi}
    */
    FilesFilesApi,

    /**
    * The FilesFoldersApi service constructor.
    * @property {module:api/FilesFoldersApi}
    */
    FilesFoldersApi,

    /**
    * The FilesOperationsApi service constructor.
    * @property {module:api/FilesOperationsApi}
    */
    FilesOperationsApi,

    /**
    * The FilesQuotaApi service constructor.
    * @property {module:api/FilesQuotaApi}
    */
    FilesQuotaApi,

    /**
    * The FilesSettingsApi service constructor.
    * @property {module:api/FilesSettingsApi}
    */
    FilesSettingsApi,

    /**
    * The FilesSharingApi service constructor.
    * @property {module:api/FilesSharingApi}
    */
    FilesSharingApi,

    /**
    * The FilesThirdPartyIntegrationApi service constructor.
    * @property {module:api/FilesThirdPartyIntegrationApi}
    */
    FilesThirdPartyIntegrationApi,

    /**
    * The GroupApi service constructor.
    * @property {module:api/GroupApi}
    */
    GroupApi,

    /**
    * The GroupRoomsApi service constructor.
    * @property {module:api/GroupRoomsApi}
    */
    GroupRoomsApi,

    /**
    * The MigrationApi service constructor.
    * @property {module:api/MigrationApi}
    */
    MigrationApi,

    /**
    * The OAuth20AuthorizationApi service constructor.
    * @property {module:api/OAuth20AuthorizationApi}
    */
    OAuth20AuthorizationApi,

    /**
    * The OAuth20ClientManagementApi service constructor.
    * @property {module:api/OAuth20ClientManagementApi}
    */
    OAuth20ClientManagementApi,

    /**
    * The OAuth20ClientQueryingApi service constructor.
    * @property {module:api/OAuth20ClientQueryingApi}
    */
    OAuth20ClientQueryingApi,

    /**
    * The OAuth20ScopeManagementApi service constructor.
    * @property {module:api/OAuth20ScopeManagementApi}
    */
    OAuth20ScopeManagementApi,

    /**
    * The PeopleGuestsApi service constructor.
    * @property {module:api/PeopleGuestsApi}
    */
    PeopleGuestsApi,

    /**
    * The PeoplePasswordApi service constructor.
    * @property {module:api/PeoplePasswordApi}
    */
    PeoplePasswordApi,

    /**
    * The PeoplePhotosApi service constructor.
    * @property {module:api/PeoplePhotosApi}
    */
    PeoplePhotosApi,

    /**
    * The PeopleProfilesApi service constructor.
    * @property {module:api/PeopleProfilesApi}
    */
    PeopleProfilesApi,

    /**
    * The PeopleQuotaApi service constructor.
    * @property {module:api/PeopleQuotaApi}
    */
    PeopleQuotaApi,

    /**
    * The PeopleSearchApi service constructor.
    * @property {module:api/PeopleSearchApi}
    */
    PeopleSearchApi,

    /**
    * The PeopleThemeApi service constructor.
    * @property {module:api/PeopleThemeApi}
    */
    PeopleThemeApi,

    /**
    * The PeopleThirdPartyAccountsApi service constructor.
    * @property {module:api/PeopleThirdPartyAccountsApi}
    */
    PeopleThirdPartyAccountsApi,

    /**
    * The PeopleUserDataApi service constructor.
    * @property {module:api/PeopleUserDataApi}
    */
    PeopleUserDataApi,

    /**
    * The PeopleUserStatusApi service constructor.
    * @property {module:api/PeopleUserStatusApi}
    */
    PeopleUserStatusApi,

    /**
    * The PeopleUserTypeApi service constructor.
    * @property {module:api/PeopleUserTypeApi}
    */
    PeopleUserTypeApi,

    /**
    * The PortalGuestsApi service constructor.
    * @property {module:api/PortalGuestsApi}
    */
    PortalGuestsApi,

    /**
    * The PortalPaymentApi service constructor.
    * @property {module:api/PortalPaymentApi}
    */
    PortalPaymentApi,

    /**
    * The PortalQuotaApi service constructor.
    * @property {module:api/PortalQuotaApi}
    */
    PortalQuotaApi,

    /**
    * The PortalSettingsApi service constructor.
    * @property {module:api/PortalSettingsApi}
    */
    PortalSettingsApi,

    /**
    * The PortalUsersApi service constructor.
    * @property {module:api/PortalUsersApi}
    */
    PortalUsersApi,

    /**
    * The RoomsApi service constructor.
    * @property {module:api/RoomsApi}
    */
    RoomsApi,

    /**
    * The SecurityAccessToDevToolsApi service constructor.
    * @property {module:api/SecurityAccessToDevToolsApi}
    */
    SecurityAccessToDevToolsApi,

    /**
    * The SecurityActiveConnectionsApi service constructor.
    * @property {module:api/SecurityActiveConnectionsApi}
    */
    SecurityActiveConnectionsApi,

    /**
    * The SecurityAuditTrailDataApi service constructor.
    * @property {module:api/SecurityAuditTrailDataApi}
    */
    SecurityAuditTrailDataApi,

    /**
    * The SecurityBannersVisibilityApi service constructor.
    * @property {module:api/SecurityBannersVisibilityApi}
    */
    SecurityBannersVisibilityApi,

    /**
    * The SecurityCSPApi service constructor.
    * @property {module:api/SecurityCSPApi}
    */
    SecurityCSPApi,

    /**
    * The SecurityFirebaseApi service constructor.
    * @property {module:api/SecurityFirebaseApi}
    */
    SecurityFirebaseApi,

    /**
    * The SecurityLoginHistoryApi service constructor.
    * @property {module:api/SecurityLoginHistoryApi}
    */
    SecurityLoginHistoryApi,

    /**
    * The SecurityOAuth2Api service constructor.
    * @property {module:api/SecurityOAuth2Api}
    */
    SecurityOAuth2Api,

    /**
    * The SecuritySMTPSettingsApi service constructor.
    * @property {module:api/SecuritySMTPSettingsApi}
    */
    SecuritySMTPSettingsApi,

    /**
    * The SettingsAccessToDevToolsApi service constructor.
    * @property {module:api/SettingsAccessToDevToolsApi}
    */
    SettingsAccessToDevToolsApi,

    /**
    * The SettingsAuthorizationApi service constructor.
    * @property {module:api/SettingsAuthorizationApi}
    */
    SettingsAuthorizationApi,

    /**
    * The SettingsBannersVisibilityApi service constructor.
    * @property {module:api/SettingsBannersVisibilityApi}
    */
    SettingsBannersVisibilityApi,

    /**
    * The SettingsCommonSettingsApi service constructor.
    * @property {module:api/SettingsCommonSettingsApi}
    */
    SettingsCommonSettingsApi,

    /**
    * The SettingsCookiesApi service constructor.
    * @property {module:api/SettingsCookiesApi}
    */
    SettingsCookiesApi,

    /**
    * The SettingsCustomNavigationApi service constructor.
    * @property {module:api/SettingsCustomNavigationApi}
    */
    SettingsCustomNavigationApi,

    /**
    * The SettingsEncryptionApi service constructor.
    * @property {module:api/SettingsEncryptionApi}
    */
    SettingsEncryptionApi,

    /**
    * The SettingsGreetingSettingsApi service constructor.
    * @property {module:api/SettingsGreetingSettingsApi}
    */
    SettingsGreetingSettingsApi,

    /**
    * The SettingsIPRestrictionsApi service constructor.
    * @property {module:api/SettingsIPRestrictionsApi}
    */
    SettingsIPRestrictionsApi,

    /**
    * The SettingsLicenseApi service constructor.
    * @property {module:api/SettingsLicenseApi}
    */
    SettingsLicenseApi,

    /**
    * The SettingsLoginSettingsApi service constructor.
    * @property {module:api/SettingsLoginSettingsApi}
    */
    SettingsLoginSettingsApi,

    /**
    * The SettingsMessagesApi service constructor.
    * @property {module:api/SettingsMessagesApi}
    */
    SettingsMessagesApi,

    /**
    * The SettingsNotificationsApi service constructor.
    * @property {module:api/SettingsNotificationsApi}
    */
    SettingsNotificationsApi,

    /**
    * The SettingsOwnerApi service constructor.
    * @property {module:api/SettingsOwnerApi}
    */
    SettingsOwnerApi,

    /**
    * The SettingsQuotaApi service constructor.
    * @property {module:api/SettingsQuotaApi}
    */
    SettingsQuotaApi,

    /**
    * The SettingsRebrandingApi service constructor.
    * @property {module:api/SettingsRebrandingApi}
    */
    SettingsRebrandingApi,

    /**
    * The SettingsSSOApi service constructor.
    * @property {module:api/SettingsSSOApi}
    */
    SettingsSSOApi,

    /**
    * The SettingsSecurityApi service constructor.
    * @property {module:api/SettingsSecurityApi}
    */
    SettingsSecurityApi,

    /**
    * The SettingsStatisticsApi service constructor.
    * @property {module:api/SettingsStatisticsApi}
    */
    SettingsStatisticsApi,

    /**
    * The SettingsStorageApi service constructor.
    * @property {module:api/SettingsStorageApi}
    */
    SettingsStorageApi,

    /**
    * The SettingsTFASettingsApi service constructor.
    * @property {module:api/SettingsTFASettingsApi}
    */
    SettingsTFASettingsApi,

    /**
    * The SettingsWebhooksApi service constructor.
    * @property {module:api/SettingsWebhooksApi}
    */
    SettingsWebhooksApi,

    /**
    * The SettingsWebpluginsApi service constructor.
    * @property {module:api/SettingsWebpluginsApi}
    */
    SettingsWebpluginsApi,

    /**
    * The ThirdPartyApi service constructor.
    * @property {module:api/ThirdPartyApi}
    */
    ThirdPartyApi
};
