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
import ApiClient from '../ApiClient';
/**
* Enum class MessageAction.
* @enum {}
* @readonly
*/
export default class MessageAction {
    
        /**
         * value: 1000
         * @const
         */
        "LoginSuccess" = 1000;

    
        /**
         * value: 1001
         * @const
         */
        "LoginSuccessViaSocialAccount" = 1001;

    
        /**
         * value: 1002
         * @const
         */
        "LoginFailInvalidCombination" = 1002;

    
        /**
         * value: 1003
         * @const
         */
        "LoginFailSocialAccountNotFound" = 1003;

    
        /**
         * value: 1004
         * @const
         */
        "LoginFailDisabledProfile" = 1004;

    
        /**
         * value: 1005
         * @const
         */
        "LoginFail" = 1005;

    
        /**
         * value: 1006
         * @const
         */
        "Logout" = 1006;

    
        /**
         * value: 1007
         * @const
         */
        "LoginSuccessViaSms" = 1007;

    
        /**
         * value: 1008
         * @const
         */
        "LoginFailViaSms" = 1008;

    
        /**
         * value: 1009
         * @const
         */
        "LoginFailIpSecurity" = 1009;

    
        /**
         * value: 1010
         * @const
         */
        "LoginSuccessViaApi" = 1010;

    
        /**
         * value: 1011
         * @const
         */
        "LoginSuccessViaSocialApp" = 1011;

    
        /**
         * value: 1012
         * @const
         */
        "LoginSuccessViaApiSms" = 1012;

    
        /**
         * value: 1013
         * @const
         */
        "LoginFailViaApi" = 1013;

    
        /**
         * value: 1014
         * @const
         */
        "LoginFailViaApiSms" = 1014;

    
        /**
         * value: 1015
         * @const
         */
        "LoginSuccessViaSSO" = 1015;

    
        /**
         * value: 1016
         * @const
         */
        "SessionStarted" = 1016;

    
        /**
         * value: 1017
         * @const
         */
        "SessionCompleted" = 1017;

    
        /**
         * value: 1018
         * @const
         */
        "LoginFailViaSSO" = 1018;

    
        /**
         * value: 1019
         * @const
         */
        "LoginSuccessViaApiSocialAccount" = 1019;

    
        /**
         * value: 1020
         * @const
         */
        "LoginFailViaApiSocialAccount" = 1020;

    
        /**
         * value: 1021
         * @const
         */
        "LoginSuccesViaTfaApp" = 1021;

    
        /**
         * value: 1022
         * @const
         */
        "LoginFailViaTfaApp" = 1022;

    
        /**
         * value: 1023
         * @const
         */
        "LoginFailBruteForce" = 1023;

    
        /**
         * value: 1024
         * @const
         */
        "LoginSuccessViaApiTfa" = 1024;

    
        /**
         * value: 1025
         * @const
         */
        "LoginFailViaApiTfa" = 1025;

    
        /**
         * value: 1026
         * @const
         */
        "LoginFailRecaptcha" = 1026;

    
        /**
         * value: 1027
         * @const
         */
        "AuthLinkActivated" = 1027;

    
        /**
         * value: 4000
         * @const
         */
        "UserCreated" = 4000;

    
        /**
         * value: 4001
         * @const
         */
        "GuestCreated" = 4001;

    
        /**
         * value: 4002
         * @const
         */
        "UserCreatedViaInvite" = 4002;

    
        /**
         * value: 4003
         * @const
         */
        "GuestCreatedViaInvite" = 4003;

    
        /**
         * value: 4004
         * @const
         */
        "UserActivated" = 4004;

    
        /**
         * value: 4005
         * @const
         */
        "GuestActivated" = 4005;

    
        /**
         * value: 4006
         * @const
         */
        "UserUpdated" = 4006;

    
        /**
         * value: 4007
         * @const
         */
        "UserUpdatedLanguage" = 4007;

    
        /**
         * value: 4008
         * @const
         */
        "UserAddedAvatar" = 4008;

    
        /**
         * value: 4009
         * @const
         */
        "UserDeletedAvatar" = 4009;

    
        /**
         * value: 4010
         * @const
         */
        "UserUpdatedAvatarThumbnails" = 4010;

    
        /**
         * value: 4011
         * @const
         */
        "UserLinkedSocialAccount" = 4011;

    
        /**
         * value: 4012
         * @const
         */
        "UserUnlinkedSocialAccount" = 4012;

    
        /**
         * value: 4013
         * @const
         */
        "UserSentActivationInstructions" = 4013;

    
        /**
         * value: 4014
         * @const
         */
        "UserSentEmailChangeInstructions" = 4014;

    
        /**
         * value: 4015
         * @const
         */
        "UserSentPasswordChangeInstructions" = 4015;

    
        /**
         * value: 4016
         * @const
         */
        "UserSentDeleteInstructions" = 4016;

    
        /**
         * value: 4017
         * @const
         */
        "UserUpdatedPassword" = 4017;

    
        /**
         * value: 4018
         * @const
         */
        "UserDeleted" = 4018;

    
        /**
         * value: 4019
         * @const
         */
        "UsersUpdatedType" = 4019;

    
        /**
         * value: 4020
         * @const
         */
        "UsersUpdatedStatus" = 4020;

    
        /**
         * value: 4021
         * @const
         */
        "UsersSentActivationInstructions" = 4021;

    
        /**
         * value: 4022
         * @const
         */
        "UsersDeleted" = 4022;

    
        /**
         * value: 4023
         * @const
         */
        "SentInviteInstructions" = 4023;

    
        /**
         * value: 4024
         * @const
         */
        "UserImported" = 4024;

    
        /**
         * value: 4025
         * @const
         */
        "GuestImported" = 4025;

    
        /**
         * value: 4026
         * @const
         */
        "GroupCreated" = 4026;

    
        /**
         * value: 4027
         * @const
         */
        "GroupUpdated" = 4027;

    
        /**
         * value: 4028
         * @const
         */
        "GroupDeleted" = 4028;

    
        /**
         * value: 4029
         * @const
         */
        "UserUpdatedMobileNumber" = 4029;

    
        /**
         * value: 4030
         * @const
         */
        "UserDataReassigns" = 4030;

    
        /**
         * value: 4031
         * @const
         */
        "UserDataRemoving" = 4031;

    
        /**
         * value: 4032
         * @const
         */
        "UserConnectedTfaApp" = 4032;

    
        /**
         * value: 4033
         * @const
         */
        "UserDisconnectedTfaApp" = 4033;

    
        /**
         * value: 4034
         * @const
         */
        "UserLogoutActiveConnections" = 4034;

    
        /**
         * value: 4035
         * @const
         */
        "UserLogoutActiveConnection" = 4035;

    
        /**
         * value: 4036
         * @const
         */
        "UserLogoutActiveConnectionsForUser" = 4036;

    
        /**
         * value: 4037
         * @const
         */
        "SendJoinInvite" = 4037;

    
        /**
         * value: 5000
         * @const
         */
        "FileCreated" = 5000;

    
        /**
         * value: 5001
         * @const
         */
        "FileRenamed" = 5001;

    
        /**
         * value: 5002
         * @const
         */
        "FileUpdated" = 5002;

    
        /**
         * value: 5003
         * @const
         */
        "FileCreatedVersion" = 5003;

    
        /**
         * value: 5004
         * @const
         */
        "FileDeletedVersion" = 5004;

    
        /**
         * value: 5005
         * @const
         */
        "FileUpdatedRevisionComment" = 5005;

    
        /**
         * value: 5006
         * @const
         */
        "FileLocked" = 5006;

    
        /**
         * value: 5007
         * @const
         */
        "FileUnlocked" = 5007;

    
        /**
         * value: 5008
         * @const
         */
        "FileUpdatedAccess" = 5008;

    
        /**
         * value: 5009
         * @const
         */
        "FileDownloaded" = 5009;

    
        /**
         * value: 5010
         * @const
         */
        "FileDownloadedAs" = 5010;

    
        /**
         * value: 5011
         * @const
         */
        "FileUploaded" = 5011;

    
        /**
         * value: 5012
         * @const
         */
        "FileImported" = 5012;

    
        /**
         * value: 5013
         * @const
         */
        "FileCopied" = 5013;

    
        /**
         * value: 5014
         * @const
         */
        "FileCopiedWithOverwriting" = 5014;

    
        /**
         * value: 5015
         * @const
         */
        "FileMoved" = 5015;

    
        /**
         * value: 5016
         * @const
         */
        "FileMovedWithOverwriting" = 5016;

    
        /**
         * value: 5017
         * @const
         */
        "FileMovedToTrash" = 5017;

    
        /**
         * value: 5018
         * @const
         */
        "FileDeleted" = 5018;

    
        /**
         * value: 5019
         * @const
         */
        "FolderCreated" = 5019;

    
        /**
         * value: 5020
         * @const
         */
        "FolderRenamed" = 5020;

    
        /**
         * value: 5021
         * @const
         */
        "FolderUpdatedAccess" = 5021;

    
        /**
         * value: 5022
         * @const
         */
        "FolderCopied" = 5022;

    
        /**
         * value: 5023
         * @const
         */
        "FolderCopiedWithOverwriting" = 5023;

    
        /**
         * value: 5024
         * @const
         */
        "FolderMoved" = 5024;

    
        /**
         * value: 5025
         * @const
         */
        "FolderMovedWithOverwriting" = 5025;

    
        /**
         * value: 5026
         * @const
         */
        "FolderMovedToTrash" = 5026;

    
        /**
         * value: 5027
         * @const
         */
        "FolderDeleted" = 5027;

    
        /**
         * value: 5028
         * @const
         */
        "ThirdPartyCreated" = 5028;

    
        /**
         * value: 5029
         * @const
         */
        "ThirdPartyUpdated" = 5029;

    
        /**
         * value: 5030
         * @const
         */
        "ThirdPartyDeleted" = 5030;

    
        /**
         * value: 5031
         * @const
         */
        "DocumentsThirdPartySettingsUpdated" = 5031;

    
        /**
         * value: 5032
         * @const
         */
        "DocumentsOverwritingSettingsUpdated" = 5032;

    
        /**
         * value: 5033
         * @const
         */
        "DocumentsUploadingFormatsSettingsUpdated" = 5033;

    
        /**
         * value: 5034
         * @const
         */
        "UserFileUpdated" = 5034;

    
        /**
         * value: 5035
         * @const
         */
        "FileConverted" = 5035;

    
        /**
         * value: 5036
         * @const
         */
        "FileSendAccessLink" = 5036;

    
        /**
         * value: 5037
         * @const
         */
        "DocumentServiceLocationSetting" = 5037;

    
        /**
         * value: 5038
         * @const
         */
        "AuthorizationKeysSetting" = 5038;

    
        /**
         * value: 5039
         * @const
         */
        "FullTextSearchSetting" = 5039;

    
        /**
         * value: 5040
         * @const
         */
        "StartTransferSetting" = 5040;

    
        /**
         * value: 5041
         * @const
         */
        "StartBackupSetting" = 5041;

    
        /**
         * value: 5042
         * @const
         */
        "LicenseKeyUploaded" = 5042;

    
        /**
         * value: 5043
         * @const
         */
        "FileChangeOwner" = 5043;

    
        /**
         * value: 5044
         * @const
         */
        "FileRestoreVersion" = 5044;

    
        /**
         * value: 5045
         * @const
         */
        "DocumentSendToSign" = 5045;

    
        /**
         * value: 5046
         * @const
         */
        "DocumentSignComplete" = 5046;

    
        /**
         * value: 5047
         * @const
         */
        "UserUpdatedEmail" = 5047;

    
        /**
         * value: 5048
         * @const
         */
        "DocumentsStoreForcesave" = 5048;

    
        /**
         * value: 5049
         * @const
         */
        "DocumentsForcesave" = 5049;

    
        /**
         * value: 5050
         * @const
         */
        "StartStorageEncryption" = 5050;

    
        /**
         * value: 5051
         * @const
         */
        "PrivacyRoomEnable" = 5051;

    
        /**
         * value: 5052
         * @const
         */
        "PrivacyRoomDisable" = 5052;

    
        /**
         * value: 5053
         * @const
         */
        "StartStorageDecryption" = 5053;

    
        /**
         * value: 5054
         * @const
         */
        "FileOpenedForChange" = 5054;

    
        /**
         * value: 5055
         * @const
         */
        "FileMarkedAsFavorite" = 5055;

    
        /**
         * value: 5056
         * @const
         */
        "FileRemovedFromFavorite" = 5056;

    
        /**
         * value: 5057
         * @const
         */
        "FolderDownloaded" = 5057;

    
        /**
         * value: 5058
         * @const
         */
        "FileRemovedFromList" = 5058;

    
        /**
         * value: 5059
         * @const
         */
        "FolderRemovedFromList" = 5059;

    
        /**
         * value: 5060
         * @const
         */
        "FileExternalLinkAccessUpdated" = 5060;

    
        /**
         * value: 5061
         * @const
         */
        "TrashEmptied" = 5061;

    
        /**
         * value: 5062
         * @const
         */
        "FileRevisionDownloaded" = 5062;

    
        /**
         * value: 5063
         * @const
         */
        "FileMarkedAsRead" = 5063;

    
        /**
         * value: 5064
         * @const
         */
        "FileReaded" = 5064;

    
        /**
         * value: 5065
         * @const
         */
        "FolderMarkedAsRead" = 5065;

    
        /**
         * value: 5066
         * @const
         */
        "FolderUpdatedAccessFor" = 5066;

    
        /**
         * value: 5068
         * @const
         */
        "FileUpdatedAccessFor" = 5068;

    
        /**
         * value: 5069
         * @const
         */
        "DocumentsExternalShareSettingsUpdated" = 5069;

    
        /**
         * value: 5070
         * @const
         */
        "RoomCreated" = 5070;

    
        /**
         * value: 5071
         * @const
         */
        "RoomRenamed" = 5071;

    
        /**
         * value: 5072
         * @const
         */
        "RoomArchived" = 5072;

    
        /**
         * value: 5073
         * @const
         */
        "RoomUnarchived" = 5073;

    
        /**
         * value: 5074
         * @const
         */
        "RoomDeleted" = 5074;

    
        /**
         * value: 5075
         * @const
         */
        "RoomUpdateAccessForUser" = 5075;

    
        /**
         * value: 5076
         * @const
         */
        "TagCreated" = 5076;

    
        /**
         * value: 5077
         * @const
         */
        "TagsDeleted" = 5077;

    
        /**
         * value: 5078
         * @const
         */
        "AddedRoomTags" = 5078;

    
        /**
         * value: 5079
         * @const
         */
        "DeletedRoomTags" = 5079;

    
        /**
         * value: 5080
         * @const
         */
        "RoomLogoCreated" = 5080;

    
        /**
         * value: 5081
         * @const
         */
        "RoomLogoDeleted" = 5081;

    
        /**
         * value: 5082
         * @const
         */
        "RoomInvitationLinkUpdated" = 5082;

    
        /**
         * value: 5083
         * @const
         */
        "DocumentsKeepNewFileNameSettingsUpdated" = 5083;

    
        /**
         * value: 5084
         * @const
         */
        "RoomRemoveUser" = 5084;

    
        /**
         * value: 5085
         * @const
         */
        "RoomCreateUser" = 5085;

    
        /**
         * value: 5086
         * @const
         */
        "RoomInvitationLinkCreated" = 5086;

    
        /**
         * value: 5087
         * @const
         */
        "RoomInvitationLinkDeleted" = 5087;

    
        /**
         * value: 5088
         * @const
         */
        "RoomExternalLinkCreated" = 5088;

    
        /**
         * value: 5089
         * @const
         */
        "RoomExternalLinkUpdated" = 5089;

    
        /**
         * value: 5090
         * @const
         */
        "RoomExternalLinkDeleted" = 5090;

    
        /**
         * value: 5091
         * @const
         */
        "FileExternalLinkCreated" = 5091;

    
        /**
         * value: 5092
         * @const
         */
        "FileExternalLinkUpdated" = 5092;

    
        /**
         * value: 5093
         * @const
         */
        "FileExternalLinkDeleted" = 5093;

    
        /**
         * value: 5094
         * @const
         */
        "RoomGroupAdded" = 5094;

    
        /**
         * value: 5095
         * @const
         */
        "RoomUpdateAccessForGroup" = 5095;

    
        /**
         * value: 5096
         * @const
         */
        "RoomGroupRemove" = 5096;

    
        /**
         * value: 5097
         * @const
         */
        "RoomExternalLinkRevoked" = 5097;

    
        /**
         * value: 5098
         * @const
         */
        "RoomExternalLinkRenamed" = 5098;

    
        /**
         * value: 5099
         * @const
         */
        "FileUploadedWithOverwriting" = 5099;

    
        /**
         * value: 5100
         * @const
         */
        "RoomCopied" = 5100;

    
        /**
         * value: 5101
         * @const
         */
        "DocumentsDisplayFileExtensionUpdated" = 5101;

    
        /**
         * value: 5102
         * @const
         */
        "RoomColorChanged" = 5102;

    
        /**
         * value: 5103
         * @const
         */
        "RoomCoverChanged" = 5103;

    
        /**
         * value: 5104
         * @const
         */
        "RoomIndexingChanged" = 5104;

    
        /**
         * value: 5105
         * @const
         */
        "RoomDenyDownloadChanged" = 5105;

    
        /**
         * value: 5106
         * @const
         */
        "RoomIndexExportSaved" = 5106;

    
        /**
         * value: 5107
         * @const
         */
        "FolderIndexChanged" = 5107;

    
        /**
         * value: 5108
         * @const
         */
        "FolderIndexReordered" = 5108;

    
        /**
         * value: 5109
         * @const
         */
        "RoomDenyDownloadEnabled" = 5109;

    
        /**
         * value: 5110
         * @const
         */
        "RoomDenyDownloadDisabled" = 5110;

    
        /**
         * value: 5111
         * @const
         */
        "FileIndexChanged" = 5111;

    
        /**
         * value: 5112
         * @const
         */
        "RoomWatermarkSet" = 5112;

    
        /**
         * value: 5113
         * @const
         */
        "RoomWatermarkDisabled" = 5113;

    
        /**
         * value: 5114
         * @const
         */
        "RoomIndexingEnabled" = 5114;

    
        /**
         * value: 5115
         * @const
         */
        "RoomIndexingDisabled" = 5115;

    
        /**
         * value: 5116
         * @const
         */
        "RoomLifeTimeSet" = 5116;

    
        /**
         * value: 5117
         * @const
         */
        "RoomLifeTimeDisabled" = 5117;

    
        /**
         * value: 5118
         * @const
         */
        "RoomInviteResend" = 5118;

    
        /**
         * value: 5119
         * @const
         */
        "FileVersionRemoved" = 5119;

    
        /**
         * value: 5120
         * @const
         */
        "FileCustomFilterEnabled" = 5120;

    
        /**
         * value: 5121
         * @const
         */
        "FileCustomFilterDisabled" = 5121;

    
        /**
         * value: 5150
         * @const
         */
        "FormStartedToFill" = 5150;

    
        /**
         * value: 5151
         * @const
         */
        "FormPartiallyFilled" = 5151;

    
        /**
         * value: 5152
         * @const
         */
        "FormCompletelyFilled" = 5152;

    
        /**
         * value: 5153
         * @const
         */
        "FormStopped" = 5153;

    
        /**
         * value: 5501
         * @const
         */
        "LdapEnabled" = 5501;

    
        /**
         * value: 5502
         * @const
         */
        "LdapDisabled" = 5502;

    
        /**
         * value: 5503
         * @const
         */
        "LdapSync" = 5503;

    
        /**
         * value: 6000
         * @const
         */
        "LanguageSettingsUpdated" = 6000;

    
        /**
         * value: 6001
         * @const
         */
        "TimeZoneSettingsUpdated" = 6001;

    
        /**
         * value: 6002
         * @const
         */
        "DnsSettingsUpdated" = 6002;

    
        /**
         * value: 6003
         * @const
         */
        "TrustedMailDomainSettingsUpdated" = 6003;

    
        /**
         * value: 6004
         * @const
         */
        "PasswordStrengthSettingsUpdated" = 6004;

    
        /**
         * value: 6005
         * @const
         */
        "TwoFactorAuthenticationSettingsUpdated" = 6005;

    
        /**
         * value: 6006
         * @const
         */
        "AdministratorMessageSettingsUpdated" = 6006;

    
        /**
         * value: 6007
         * @const
         */
        "DefaultStartPageSettingsUpdated" = 6007;

    
        /**
         * value: 6008
         * @const
         */
        "ProductsListUpdated" = 6008;

    
        /**
         * value: 6009
         * @const
         */
        "AdministratorAdded" = 6009;

    
        /**
         * value: 6010
         * @const
         */
        "AdministratorOpenedFullAccess" = 6010;

    
        /**
         * value: 6011
         * @const
         */
        "AdministratorDeleted" = 6011;

    
        /**
         * value: 6012
         * @const
         */
        "UsersOpenedProductAccess" = 6012;

    
        /**
         * value: 6013
         * @const
         */
        "GroupsOpenedProductAccess" = 6013;

    
        /**
         * value: 6014
         * @const
         */
        "ProductAccessOpened" = 6014;

    
        /**
         * value: 6015
         * @const
         */
        "ProductAccessRestricted" = 6015;

    
        /**
         * value: 6016
         * @const
         */
        "ProductAddedAdministrator" = 6016;

    
        /**
         * value: 6017
         * @const
         */
        "ProductDeletedAdministrator" = 6017;

    
        /**
         * value: 6018
         * @const
         */
        "GreetingSettingsUpdated" = 6018;

    
        /**
         * value: 6019
         * @const
         */
        "TeamTemplateChanged" = 6019;

    
        /**
         * value: 6020
         * @const
         */
        "ColorThemeChanged" = 6020;

    
        /**
         * value: 6021
         * @const
         */
        "OwnerSentChangeOwnerInstructions" = 6021;

    
        /**
         * value: 6022
         * @const
         */
        "OwnerUpdated" = 6022;

    
        /**
         * value: 6023
         * @const
         */
        "OwnerSentPortalDeactivationInstructions" = 6023;

    
        /**
         * value: 6024
         * @const
         */
        "OwnerSentPortalDeleteInstructions" = 6024;

    
        /**
         * value: 6025
         * @const
         */
        "PortalDeactivated" = 6025;

    
        /**
         * value: 6026
         * @const
         */
        "PortalDeleted" = 6026;

    
        /**
         * value: 6027
         * @const
         */
        "LoginHistoryReportDownloaded" = 6027;

    
        /**
         * value: 6028
         * @const
         */
        "AuditTrailReportDownloaded" = 6028;

    
        /**
         * value: 6029
         * @const
         */
        "SSOEnabled" = 6029;

    
        /**
         * value: 6030
         * @const
         */
        "SSODisabled" = 6030;

    
        /**
         * value: 6031
         * @const
         */
        "PortalAccessSettingsUpdated" = 6031;

    
        /**
         * value: 6032
         * @const
         */
        "CookieSettingsUpdated" = 6032;

    
        /**
         * value: 6033
         * @const
         */
        "MailServiceSettingsUpdated" = 6033;

    
        /**
         * value: 6034
         * @const
         */
        "CustomNavigationSettingsUpdated" = 6034;

    
        /**
         * value: 6035
         * @const
         */
        "AuditSettingsUpdated" = 6035;

    
        /**
         * value: 6036
         * @const
         */
        "TwoFactorAuthenticationDisabled" = 6036;

    
        /**
         * value: 6037
         * @const
         */
        "TwoFactorAuthenticationEnabledBySms" = 6037;

    
        /**
         * value: 6038
         * @const
         */
        "TwoFactorAuthenticationEnabledByTfaApp" = 6038;

    
        /**
         * value: 6039
         * @const
         */
        "PortalRenamed" = 6039;

    
        /**
         * value: 6040
         * @const
         */
        "QuotaPerRoomChanged" = 6040;

    
        /**
         * value: 6041
         * @const
         */
        "QuotaPerRoomDisabled" = 6041;

    
        /**
         * value: 6042
         * @const
         */
        "QuotaPerUserChanged" = 6042;

    
        /**
         * value: 6043
         * @const
         */
        "QuotaPerUserDisabled" = 6043;

    
        /**
         * value: 6044
         * @const
         */
        "QuotaPerPortalChanged" = 6044;

    
        /**
         * value: 6045
         * @const
         */
        "QuotaPerPortalDisabled" = 6045;

    
        /**
         * value: 6046
         * @const
         */
        "FormSubmit" = 6046;

    
        /**
         * value: 6047
         * @const
         */
        "FormOpenedForFilling" = 6047;

    
        /**
         * value: 6048
         * @const
         */
        "CustomQuotaPerRoomDefault" = 6048;

    
        /**
         * value: 6049
         * @const
         */
        "CustomQuotaPerRoomChanged" = 6049;

    
        /**
         * value: 6050
         * @const
         */
        "CustomQuotaPerRoomDisabled" = 6050;

    
        /**
         * value: 6051
         * @const
         */
        "CustomQuotaPerUserDefault" = 6051;

    
        /**
         * value: 6052
         * @const
         */
        "CustomQuotaPerUserChanged" = 6052;

    
        /**
         * value: 6053
         * @const
         */
        "CustomQuotaPerUserDisabled" = 6053;

    
        /**
         * value: 6054
         * @const
         */
        "DevToolsAccessSettingsChanged" = 6054;

    
        /**
         * value: 6055
         * @const
         */
        "WebhookCreated" = 6055;

    
        /**
         * value: 6056
         * @const
         */
        "WebhookUpdated" = 6056;

    
        /**
         * value: 6057
         * @const
         */
        "WebhookDeleted" = 6057;

    
        /**
         * value: 6058
         * @const
         */
        "ApiKeyCreated" = 6058;

    
        /**
         * value: 6059
         * @const
         */
        "ApiKeyUpdated" = 6059;

    
        /**
         * value: 6060
         * @const
         */
        "ApiKeyDeleted" = 6060;

    
        /**
         * value: 6061
         * @const
         */
        "CustomerWalletToppedUp" = 6061;

    
        /**
         * value: 6062
         * @const
         */
        "CustomerOperationPerformed" = 6062;

    
        /**
         * value: 6063
         * @const
         */
        "CustomerOperationsReportDownloaded" = 6063;

    
        /**
         * value: 6064
         * @const
         */
        "CustomerWalletTopUpSettingsUpdated" = 6064;

    
        /**
         * value: 6065
         * @const
         */
        "CustomerSubscriptionUpdated" = 6065;

    
        /**
         * value: 6066
         * @const
         */
        "BannerSettingsChanged" = 6066;

    
        /**
         * value: 7000
         * @const
         */
        "ContactAdminMailSent" = 7000;

    
        /**
         * value: 7001
         * @const
         */
        "RoomInviteLinkUsed" = 7001;

    
        /**
         * value: 7002
         * @const
         */
        "UserCreatedAndAddedToRoom" = 7002;

    
        /**
         * value: 7003
         * @const
         */
        "GuestCreatedAndAddedToRoom" = 7003;

    
        /**
         * value: 7004
         * @const
         */
        "ContactSalesMailSent" = 7004;

    
        /**
         * value: 9901
         * @const
         */
        "CreateClient" = 9901;

    
        /**
         * value: 9902
         * @const
         */
        "UpdateClient" = 9902;

    
        /**
         * value: 9903
         * @const
         */
        "RegenerateSecret" = 9903;

    
        /**
         * value: 9904
         * @const
         */
        "DeleteClient" = 9904;

    
        /**
         * value: 9905
         * @const
         */
        "ChangeClientActivation" = 9905;

    
        /**
         * value: 9906
         * @const
         */
        "ChangeClientVisibility" = 9906;

    
        /**
         * value: 9907
         * @const
         */
        "RevokeUserClient" = 9907;

    
        /**
         * value: 9908
         * @const
         */
        "GenerateAuthorizationCodeToken" = 9908;

    
        /**
         * value: 9909
         * @const
         */
        "GeneratePersonalAccessToken" = 9909;

    
        /**
         * value: -1
         * @const
         */
        "None" = -1;

    

    /**
    * Returns a <code>MessageAction</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:models/MessageAction} The enum <code>MessageAction</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

