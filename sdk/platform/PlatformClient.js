const {
  LeadValidator,
  PaymentValidator,
  OrderValidator,
  CompanyProfileValidator,
  AssetsValidator,
  InventoryValidator,
  ConfigurationValidator,
  MarketplacesValidator,
  AnalyticsValidator,
} = require("./PlatformModels");
const PlatformApplicationClient = require("./PlatformApplicationClient");
const Paginator = require("../common/Paginator");
const PlatformAPIClient = require("./PlatformAPIClient");

class PlatformClient {
  constructor(config) {
    this.config = config;
    this.lead = new Lead(config);
    this.payment = new Payment(config);
    this.order = new Order(config);
    this.companyProfile = new CompanyProfile(config);
    this.assets = new Assets(config);
    this.inventory = new Inventory(config);
    this.configuration = new Configuration(config);
    this.marketplaces = new Marketplaces(config);
    this.analytics = new Analytics(config);
  }
  application(applicationId) {
    return new PlatformApplicationClient(applicationId, this.config);
  }
}

/**
        @typedef TicketList
        
        
        @property { Array<Ticket> } [items]
        
        @property { Filter } [filters]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef Page
        
        
        @property { number } itemTotal
        
        @property { string } [nextId]
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
        @property { number } [current]
        
        @property { string } type
        
        @property { number } size
        
         
    */

/**
        @typedef TicketHistoryList
        
        
        @property { Array<TicketHistory> } [docs]
        
        @property { number } [limit]
        
        @property { number } [page]
        
        @property { number } [pages]
        
        @property { number } [total]
        
         
    */

/**
        @typedef CustomFormList
        
        
        @property { Array<CustomForm> } [docs]
        
        @property { number } [limit]
        
        @property { number } [page]
        
        @property { number } [pages]
        
        @property { number } [total]
        
         
    */

/**
        @typedef CreateCustomFormPayload
        
        
        @property { string } slug
        
        @property { string } title
        
        @property { Array<Object> } inputs
        
        @property { string } [description]
        
        @property { string } [headerImage]
        
        @property { boolean } [shouldNotify]
        
        @property { string } [successMessage]
        
        @property { PollForAssignment } [pollForAssignment]
        
         
    */

/**
        @typedef EditCustomFormPayload
        
        
        @property { string } title
        
        @property { Array<Object> } inputs
        
        @property { string } [description]
        
        @property { string } [headerImage]
        
        @property { boolean } [shouldNotify]
        
        @property { boolean } [loginRequired]
        
        @property { string } [successMessage]
        
        @property { PollForAssignment } [pollForAssignment]
        
         
    */

/**
        @typedef EditTicketPayload
        
        
        @property { TicketContent } [content]
        
        @property { string } [category]
        
        @property { string } [source]
        
        @property { string } [status]
        
        @property { string } [priority]
        
        @property { AgentChangePayload } [assignedTo]
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef AgentChangePayload
        
        
        @property { string } agentId
        
         
    */

/**
        @typedef CreateVideoRoomResponse
        
        
        @property { string } uniqueName
        
         
    */

/**
        @typedef CloseVideoRoomResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef CreateVideoRoomPayload
        
        
        @property { string } uniqueName
        
        @property { Array<Object> } [notify]
        
         
    */

/**
        @typedef Filter
        
        
        @property { Array<Priority> } priorities
        
        @property { Array<TicketCategory> } [categories]
        
        @property { Array<Status> } statuses
        
        @property { Array<Object> } assignees
        
         
    */

/**
        @typedef TicketHistoryPayload
        
        
        @property { Object } value
        
        @property { string } type
        
         
    */

/**
        @typedef CustomFormSubmissionPayload
        
        
        @property { Array<KeyValue> } response
        
         
    */

/**
        @typedef KeyValue
        
        
        @property { string } key
        
        @property { string } value
        
         
    */

/**
        @typedef GetTokenForVideoRoomResponse
        
        
        @property { string } accessToken
        
         
    */

/**
        @typedef GetParticipantsInsideVideoRoomResponse
        
        
        @property { Array<Participant> } participants
        
         
    */

/**
        @typedef Participant
        
        
        @property { UserSchema } [user]
        
        @property { string } [identity]
        
        @property { string } [status]
        
         
    */

/**
        @typedef UserSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { Array<PhoneNumber> } [phoneNumbers]
        
        @property { Array<Email> } [emails]
        
        @property { string } [gender]
        
        @property { boolean } [active]
        
        @property { string } [profilePicUrl]
        
        @property { string } [username]
        
        @property { string } [accountType]
        
        @property { string } [uid]
        
        @property { Debug } [debug]
        
        @property { boolean } [hasOldPasswordHash]
        
        @property { string } [id]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
         
    */

/**
        @typedef PhoneNumber
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [phone]
        
        @property { number } [countryCode]
        
         
    */

/**
        @typedef Email
        
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [email]
        
        @property { boolean } [active]
        
         
    */

/**
        @typedef Debug
        
        
        @property { string } [source]
        
        @property { string } [platform]
        
         
    */

/**
        @typedef SubmitCustomFormResponse
        
        
        @property { Ticket } ticket
        
         
    */

/**
        @typedef TicketContext
        
        
        @property { string } [applicationId]
        
        @property { string } companyId
        
         
    */

/**
        @typedef CreatedOn
        
        
        @property { string } userAgent
        
         
    */

/**
        @typedef TicketAsset
        
        
        @property { string } [display]
        
        @property { string } value
        
        @property { string } type
        
         
    */

/**
        @typedef TicketContent
        
        
        @property { string } title
        
        @property { string } [description]
        
        @property { Array<TicketAsset> } [attachments]
        
         
    */

/**
        @typedef AddTicketPayload
        
        
        @property { string } status
        
        @property { string } priority
        
        @property { string } category
        
        @property { TicketContent } content
        
         
    */

/**
        @typedef Priority
        
        
        @property { string } key
        
        @property { string } display
        
        @property { string } color
        
         
    */

/**
        @typedef Status
        
        
        @property { string } key
        
        @property { string } display
        
        @property { string } color
        
         
    */

/**
        @typedef TicketCategory
        
        
        @property { string } key
        
        @property { string } display
        
        @property { CustomForm } [form]
        
         
    */

/**
        @typedef SubmitButton
        
        
        @property { string } title
        
        @property { string } titleColor
        
        @property { string } backgroundColor
        
         
    */

/**
        @typedef PollForAssignment
        
        
        @property { number } duration
        
        @property { string } message
        
        @property { string } successMessage
        
        @property { string } failureMessage
        
         
    */

/**
        @typedef CustomForm
        
        
        @property { string } applicationId
        
        @property { string } slug
        
        @property { string } [headerImage]
        
        @property { string } title
        
        @property { string } [description]
        
        @property { boolean } loginRequired
        
        @property { boolean } shouldNotify
        
        @property { string } [successMessage]
        
        @property { SubmitButton } [submitButton]
        
        @property { Array<Object> } inputs
        
        @property { CreatedOn } [createdOn]
        
        @property { Object } [createdBy]
        
        @property { PollForAssignment } [pollForAssignment]
        
        @property { string } id
        
         
    */

/**
        @typedef TicketHistory
        
        
        @property { string } type
        
        @property { Object } value
        
        @property { string } ticketId
        
        @property { CreatedOn } [createdOn]
        
        @property { Object } [createdBy]
        
        @property { string } id
        
        @property { string } [updatedAt]
        
        @property { string } [createdAt]
        
         
    */

/**
        @typedef Ticket
        
        
        @property { TicketContext } [context]
        
        @property { CreatedOn } [createdOn]
        
        @property { string } [responseId]
        
        @property { TicketContent } [content]
        
        @property { string } ticketId
        
        @property { TicketCategory } category
        
        @property { string } source
        
        @property { Status } status
        
        @property { Priority } priority
        
        @property { Object } [createdBy]
        
        @property { Object } [assignedTo]
        
        @property { Array<string> } [tags]
        
        @property { Object } [customJson]
        
        @property { string } [id]
        
        @property { string } [updatedAt]
        
        @property { string } [createdAt]
        
         
    */

/**
        @typedef PaginationSchema
        
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
        @property { string } [type]
        
        @property { number } [current]
        
         
    */

/**
        @typedef ThemesListingResponseSchema
        
        
        @property { Array<ThemesSchema> } [items]
        
        @property { PaginationSchema } [page]
        
         
    */

/**
        @typedef AddThemeRequestSchema
        
        
        @property { string } [themeId]
        
         
    */

/**
        @typedef UpgradableThemeSchema
        
        
        @property { string } [parentTheme]
        
        @property { string } [appliedTheme]
        
        @property { boolean } [upgrade]
        
         
    */

/**
        @typedef FontsSchema
        
        
        @property { FontsSchemaItems } [items]
        
        @property { string } [kind]
        
         
    */

/**
        @typedef BlitzkriegApiErrorSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef BlitzkriegNotFoundSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef BlitzkriegInternalServerErrorSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef FontsSchemaItems
        
        
        @property { string } [family]
        
        @property { Array<string> } [variants]
        
        @property { Array<string> } [subsets]
        
        @property { string } [version]
        
        @property { string } [lastModified]
        
        @property { FontsSchemaItemsFiles } [files]
        
        @property { string } [category]
        
        @property { string } [kind]
        
         
    */

/**
        @typedef FontsSchemaItemsFiles
        
        
        @property { string } [regular]
        
        @property { string } [italic]
        
        @property { string } [bold]
        
         
    */

/**
        @typedef ThemesSchema
        
        
        @property { string } [application]
        
        @property { boolean } [applied]
        
        @property { boolean } [customized]
        
        @property { boolean } [published]
        
        @property { boolean } [archived]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [version]
        
        @property { string } [parentThemeVersion]
        
        @property { string } [parentTheme]
        
        @property { Information } [information]
        
        @property { Array<string> } [tags]
        
        @property { Src } [src]
        
        @property { AssetsSchema } [assets]
        
        @property { AvailablePages } [availablePages]
        
        @property { Pages } [pages]
        
        @property { Array<availableSectionSchema> } [availableSections]
        
        @property { Array<sectionSchema> } [sections]
        
        @property { Object } [constants]
        
        @property { Object } [styles]
        
        @property { Config } [config]
        
        @property { Object } [settings]
        
        @property { Font } [font]
        
        @property { string } [id]
        
        @property { number } [v]
        
        @property { Colors } [colors]
        
         
    */

/**
        @typedef pagesSchema
        
        
        @property { string } [text]
        
        @property { string } [path]
        
        @property { string } [type]
        
        @property { string } [value]
        
        @property { Sections } [sections]
        
         
    */

/**
        @typedef availableSectionSchema
        
        
        @property { Blocks } [blocks]
        
        @property { string } [name]
        
        @property { string } [label]
        
        @property { Object } [props]
        
         
    */

/**
        @typedef sectionSchema
        
        
        @property { string } [pageKey]
        
        @property { PageSections } [pageSections]
        
         
    */

/**
        @typedef Information
        
        
        @property { Images } [images]
        
        @property { Array<string> } [features]
        
        @property { string } [name]
        
        @property { string } [description]
        
         
    */

/**
        @typedef Images
        
        
        @property { Array<string> } [desktop]
        
        @property { Array<string> } [android]
        
        @property { Array<string> } [ios]
        
        @property { Array<string> } [thumbnail]
        
         
    */

/**
        @typedef Src
        
        
        @property { string } [link]
        
         
    */

/**
        @typedef AssetsSchema
        
        
        @property { UmdJs } [umdJs]
        
        @property { CommonJs } [commonJs]
        
        @property { Css } [css]
        
         
    */

/**
        @typedef UmdJs
        
        
        @property { string } [link]
        
         
    */

/**
        @typedef CommonJs
        
        
        @property { string } [link]
        
         
    */

/**
        @typedef Css
        
        
        @property { string } [link]
        
         
    */

/**
        @typedef AvailablePages
        
        
        @property { string } [path]
        
        @property { string } [type]
        
        @property { string } [text]
        
        @property { string } [value]
        
        @property { Seo } [seo]
        
        @property { Object } [props]
        
        @property { Sections } [sections]
        
         
    */

/**
        @typedef Seo
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */

/**
        @typedef Sections
        
        
        @property { string } [attributes]
        
         
    */

/**
        @typedef Pages
        
        
        @property { pagesSchema } [collectionListing]
        
        @property { pagesSchema } [brands]
        
        @property { pagesSchema } [cartLanding]
        
        @property { pagesSchema } [collections]
        
        @property { pagesSchema } [productDescription]
        
        @property { pagesSchema } [productListing]
        
        @property { pagesSchema } [home]
        
        @property { pagesSchema } [categories]
        
        @property { pagesSchema } [compareProducts]
        
        @property { pagesSchema } [wishlist]
        
         
    */

/**
        @typedef Config
        
        
        @property { Preset } [preset]
        
        @property { GlobalSchema } [globalSchema]
        
        @property { string } [current]
        
        @property { ListSchema } [list]
        
         
    */

/**
        @typedef Preset
        
        
        @property { sectionSchema } [sections]
        
         
    */

/**
        @typedef GlobalSchema
        
        
        @property { Object } [props]
        
         
    */

/**
        @typedef ListSchema
        
        
        @property { Object } [global]
        
        @property { ConfigPage } [page]
        
        @property { string } [name]
        
         
    */

/**
        @typedef Colors
        
        
        @property { string } [bgColor]
        
        @property { string } [primaryColor]
        
        @property { string } [secondaryColor]
        
        @property { string } [accentColor]
        
        @property { string } [linkColor]
        
        @property { string } [buttonSecondaryColor]
        
         
    */

/**
        @typedef Custom
        
        
        @property { Object } [props]
        
         
    */

/**
        @typedef ConfigPage
        
        
        @property { Object } [settings]
        
        @property { string } [page]
        
         
    */

/**
        @typedef Font
        
        
        @property { string } [family]
        
        @property { Variants } [variants]
        
         
    */

/**
        @typedef Variants
        
        
        @property { Medium } [medium]
        
        @property { SemiBold } [semiBold]
        
        @property { Bold } [bold]
        
        @property { Light } [light]
        
        @property { Regular } [regular]
        
         
    */

/**
        @typedef Medium
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */

/**
        @typedef SemiBold
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */

/**
        @typedef Bold
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */

/**
        @typedef Light
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */

/**
        @typedef Regular
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */

/**
        @typedef Blocks
        
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { BlocksProps } [props]
        
         
    */

/**
        @typedef BlocksProps
        
        
        @property { string } [id]
        
        @property { string } [label]
        
        @property { string } [type]
        
         
    */

/**
        @typedef PageSections
        
        
        @property { PageSectionsBlocks } [blocks]
        
        @property { string } [name]
        
        @property { string } [label]
        
        @property { Object } [props]
        
        @property { Object } [preset]
        
        @property { Predicate } [predicate]
        
         
    */

/**
        @typedef PageSectionsBlocks
        
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { PageSectionsBlocksProps } [props]
        
         
    */

/**
        @typedef PageSectionsBlocksProps
        
        
        @property { string } [id]
        
        @property { string } [label]
        
        @property { string } [type]
        
         
    */

/**
        @typedef Predicate
        
        
        @property { Screen } [screen]
        
        @property { PredicateUserSchema } [user]
        
        @property { Route } [route]
        
         
    */

/**
        @typedef Screen
        
        
        @property { boolean } [mobile]
        
        @property { boolean } [desktop]
        
        @property { boolean } [tablet]
        
         
    */

/**
        @typedef PredicateUserSchema
        
        
        @property { boolean } [authenticated]
        
        @property { boolean } [anonymous]
        
         
    */

/**
        @typedef Route
        
        
        @property { string } [selected]
        
        @property { string } [exactUrl]
        
        @property { Object } [query]
        
         
    */

/**
        @typedef EditEmailRequestSchema
        
        
        @property { string } [email]
        
         
    */

/**
        @typedef SendVerificationLinkMobileRequestSchema
        
        
        @property { boolean } [verified]
        
        @property { boolean } [active]
        
        @property { string } [countryCode]
        
        @property { string } [phone]
        
        @property { boolean } [primary]
        
         
    */

/**
        @typedef EditMobileRequestSchema
        
        
        @property { string } [countryCode]
        
        @property { string } [phone]
        
         
    */

/**
        @typedef EditProfileRequestSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { string } [mobile]
        
        @property { string } [email]
        
        @property { string } [gender]
        
        @property { string } [dob]
        
        @property { string } [profilePicUrl]
        
        @property { string } [androidHash]
        
        @property { string } [sender]
        
        @property { string } [registerToken]
        
         
    */

/**
        @typedef SendEmailOtpRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [registerToken]
        
         
    */

/**
        @typedef VerifyOtpRequestSchema
        
        
        @property { string } [requestId]
        
        @property { string } [registerToken]
        
        @property { string } [otp]
        
         
    */

/**
        @typedef SendMobileOtpRequestSchema
        
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [androidHash]
        
        @property { string } [force]
        
         
    */

/**
        @typedef UpdatePasswordRequestSchema
        
        
        @property { string } [oldPassword]
        
        @property { string } [newPassword]
        
         
    */

/**
        @typedef FormRegisterRequestSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { string } [gender]
        
        @property { string } [email]
        
        @property { string } [password]
        
        @property { FormRegisterRequestSchemaPhone } [phone]
        
        @property { string } [registerToken]
        
         
    */

/**
        @typedef TokenRequestBodySchema
        
        
        @property { string } [token]
        
         
    */

/**
        @typedef ForgotPasswordRequestSchema
        
        
        @property { string } [code]
        
        @property { string } [password]
        
         
    */

/**
        @typedef CodeRequestBodySchema
        
        
        @property { string } [code]
        
         
    */

/**
        @typedef SendResetPasswordEmailRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [gRecaptchaResponse]
        
         
    */

/**
        @typedef PasswordLoginRequestSchema
        
        
        @property { string } [gRecaptchaResponse]
        
        @property { string } [password]
        
        @property { string } [username]
        
         
    */

/**
        @typedef SendOtpRequestSchema
        
        
        @property { string } [countryCode]
        
        @property { string } [gRecaptchaResponse]
        
        @property { string } [mobile]
        
         
    */

/**
        @typedef OAuthRequestSchema
        
        
        @property { boolean } [isSignedIn]
        
        @property { OAuthRequestSchemaOauth2 } [oauth2]
        
        @property { OAuthRequestSchemaProfile } [profile]
        
         
    */

/**
        @typedef AuthSuccess
        
        
        @property { string } [registerToken]
        
        @property { boolean } [userExists]
        
        @property { AuthSuccessUser } [user]
        
         
    */

/**
        @typedef SendOtpResponse
        
        
        @property { number } [resendTimer]
        
        @property { string } [resendToken]
        
        @property { boolean } [success]
        
        @property { string } [requestId]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
         
    */

/**
        @typedef LoginSuccess
        
        
        @property { UserSchema } [user]
        
         
    */

/**
        @typedef VerifyOtpSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [userExists]
        
         
    */

/**
        @typedef ResetPasswordSuccess
        
        
        @property { string } [status]
        
         
    */

/**
        @typedef RegisterFormSuccess
        
        
        @property { number } [resendTimer]
        
        @property { string } [resendToken]
        
        @property { boolean } [success]
        
        @property { string } [requestId]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
         
    */

/**
        @typedef VerifyEmailSuccess
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef HasPasswordSuccess
        
        
        @property { boolean } [result]
        
         
    */

/**
        @typedef LogoutSuccess
        
        
        @property { boolean } [logout]
        
         
    */

/**
        @typedef OtpSuccess
        
        
        @property { number } [resendTimer]
        
        @property { string } [resendToken]
        
        @property { boolean } [success]
        
        @property { string } [requestId]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
         
    */

/**
        @typedef EmailOtpSuccess
        
        
        @property { string } [resendToken]
        
         
    */

/**
        @typedef SessionListSuccess
        
        
        @property { Array<string> } [sessions]
        
         
    */

/**
        @typedef VerifyMobileOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verifyMobileLink]
        
         
    */

/**
        @typedef VerifyEmailOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verifyEmailLink]
        
         
    */

/**
        @typedef SendMobileVerifyLinkSuccess
        
        
        @property { boolean } [verifyMobileLink]
        
         
    */

/**
        @typedef SendEmailVerifyLinkSuccess
        
        
        @property { boolean } [verifyEmailLink]
        
         
    */

/**
        @typedef UserSearchResponseSchema
        
        
        @property { Array<UserSchema> } [users]
        
         
    */

/**
        @typedef CustomerListResponseSchema
        
        
        @property { Array<UserSchema> } [items]
        
        @property { PaginationSchema } [page]
        
         
    */

/**
        @typedef UnauthorizedSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef UnauthenticatedSchema
        
        
        @property { boolean } [authenticated]
        
         
    */

/**
        @typedef NotFoundSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef AuthenticationApiErrorSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef ProfileEditSuccessSchema
        
        
        @property { string } [email]
        
        @property { boolean } [verifyEmailOtp]
        
        @property { boolean } [verifyEmailLink]
        
        @property { boolean } [verifyMobileOtp]
        
        @property { string } [user]
        
        @property { string } [registerToken]
        
        @property { boolean } [userExists]
        
         
    */

/**
        @typedef FormRegisterRequestSchemaPhone
        
        
        @property { string } [countryCode]
        
        @property { string } [mobile]
        
         
    */

/**
        @typedef OAuthRequestSchemaOauth2
        
        
        @property { string } [accessToken]
        
        @property { number } [expiry]
        
        @property { string } [refreshToken]
        
         
    */

/**
        @typedef OAuthRequestSchemaProfile
        
        
        @property { string } [lastName]
        
        @property { string } [image]
        
        @property { string } [id]
        
        @property { string } [email]
        
        @property { string } [fullName]
        
        @property { string } [firstName]
        
         
    */

/**
        @typedef AuthSuccessUser
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { AuthSuccessUserDebug } [debug]
        
        @property { boolean } [active]
        
        @property { AuthSuccessUserEmails } [emails]
        
         
    */

/**
        @typedef AuthSuccessUserDebug
        
        
        @property { string } [platform]
        
         
    */

/**
        @typedef AuthSuccessUserEmails
        
        
        @property { string } [email]
        
        @property { boolean } [verified]
        
        @property { boolean } [primary]
        
        @property { boolean } [active]
        
         
    */

/**
        @typedef PlatformSchema
        
        
        @property { string } [display]
        
        @property { LookAndFeel } [lookAndFeel]
        
        @property { string } [updatedAt]
        
        @property { boolean } [active]
        
        @property { boolean } [forgotPassword]
        
        @property { Login } [login]
        
        @property { boolean } [skipCaptcha]
        
        @property { string } [name]
        
        @property { MetaSchema } [meta]
        
        @property { string } [id]
        
        @property { Social } [social]
        
        @property { RequiredFields } [requiredFields]
        
        @property { RegisterRequiredFields } [registerRequiredFields]
        
        @property { boolean } [skipLogin]
        
        @property { FlashCard } [flashCard]
        
        @property { string } [subtext]
        
        @property { SocialTokens } [socialTokens]
        
        @property { string } [createdAt]
        
        @property { boolean } [register]
        
         
    */

/**
        @typedef LookAndFeel
        
        
        @property { string } [cardPosition]
        
        @property { string } [backgroundColor]
        
         
    */

/**
        @typedef Login
        
        
        @property { boolean } [password]
        
        @property { boolean } [otp]
        
         
    */

/**
        @typedef MetaSchema
        
        
        @property { boolean } [fyndDefault]
        
         
    */

/**
        @typedef Social
        
        
        @property { boolean } [accountKit]
        
        @property { boolean } [facebook]
        
        @property { boolean } [google]
        
         
    */

/**
        @typedef RequiredFields
        
        
        @property { Email } [email]
        
        @property { Mobile } [mobile]
        
         
    */

/**
        @typedef Mobile
        
        
        @property { boolean } [isRequired]
        
        @property { string } [level]
        
         
    */

/**
        @typedef RegisterRequiredFields
        
        
        @property { RegisterRequiredFieldsEmail } [email]
        
        @property { RegisterRequiredFieldsMobile } [mobile]
        
         
    */

/**
        @typedef RegisterRequiredFieldsEmail
        
        
        @property { boolean } [isRequired]
        
        @property { string } [level]
        
         
    */

/**
        @typedef RegisterRequiredFieldsMobile
        
        
        @property { boolean } [isRequired]
        
        @property { string } [level]
        
         
    */

/**
        @typedef FlashCard
        
        
        @property { string } [text]
        
        @property { string } [textColor]
        
        @property { string } [backgroundColor]
        
         
    */

/**
        @typedef SocialTokens
        
        
        @property { Facebook } [facebook]
        
        @property { Accountkit } [accountKit]
        
        @property { Google } [google]
        
         
    */

/**
        @typedef Facebook
        
        
        @property { string } [appId]
        
         
    */

/**
        @typedef Accountkit
        
        
        @property { string } [appId]
        
         
    */

/**
        @typedef Google
        
        
        @property { string } [appId]
        
         
    */

/**
        @typedef ApplicationLegal
        
        
        @property { string } [application]
        
        @property { string } [tnc]
        
        @property { string } [policy]
        
        @property { Array<ApplicationLegalFAQ> } [faq]
        
        @property { string } [id]
        
        @property { string } [updatedAt]
        
        @property { string } [createdAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef ApplicationLegalFAQ
        
        
        @property { string } [question]
        
        @property { string } [answer]
        
         
    */

/**
        @typedef CustomMetaTag
        
        
        @property { string } [name]
        
        @property { string } [content]
        
         
    */

/**
        @typedef Detail
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */

/**
        @typedef StorefrontAnnouncement
        
        
        @property { AnnouncementSchema } [announcements]
        
        @property { number } [refreshRate]
        
        @property { Array<string> } [refreshPages]
        
         
    */

/**
        @typedef AnnouncementPageSchema
        
        
        @property { string } [pageSlug]
        
        @property { string } [type]
        
         
    */

/**
        @typedef EditorMeta
        
        
        @property { string } [foregroundColor]
        
        @property { string } [backgroundColor]
        
        @property { string } [contentType]
        
        @property { string } [content]
        
         
    */

/**
        @typedef AnnouncementAuthorSchema
        
        
        @property { string } [createdBy]
        
        @property { string } [modifiedBy]
        
         
    */

/**
        @typedef AdminAnnouncementSchema
        
        
        @property { string } [id]
        
        @property { Array<string> } [platform]
        
        @property { string } [title]
        
        @property { string } [announcement]
        
        @property { Array<AnnouncementPageSchema> } [pages]
        
        @property { EditorMeta } [editorMeta]
        
        @property { AnnouncementAuthorSchema } [author]
        
        @property { string } [createdAt]
        
        @property { string } [app]
        
        @property { string } [modifiedAt]
        
        @property { ScheduleSchema } [schedule]
        
         
    */

/**
        @typedef ScheduleSchema
        
        
        @property { string } [cron]
        
        @property { boolean } [published]
        
        @property { string } [start]
        
        @property { string } [end]
        
        @property { number } [duration]
        
        @property { Array<Object> } [nextSchedule]
        
         
    */

/**
        @typedef NextSchedule
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */

/**
        @typedef AnnouncementSchema
        
        
        @property { Array<Object> } [pageSlug]
        
         
    */

/**
        @typedef announcementSchema
        
        
        @property { string } [announcement]
        
        @property { scheduleStartSchema } [schedule]
        
         
    */

/**
        @typedef scheduleStartSchema
        
        
        @property { string } [start]
        
         
    */

/**
        @typedef BlogGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */

/**
        @typedef ResourceContent
        
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */

/**
        @typedef Asset
        
        
        @property { string } [secureUrl]
        
         
    */

/**
        @typedef Author
        
        
        @property { string } [designation]
        
        @property { string } [id]
        
        @property { string } [name]
        
         
    */

/**
        @typedef BlogSchema
        
        
        @property { Array<any> } [id]
        
        @property { string } [schedule]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { Object } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Object } [featureImage]
        
        @property { boolean } [published]
        
        @property { string } [readingTime]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
        @property { DateMeta } [dateMeta]
        
         
    */

/**
        @typedef DateMeta
        
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */

/**
        @typedef BlogRequest
        
        
        @property { string } [schedule]
        
        @property { string } [application]
        
        @property { Object } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Object } [featureImage]
        
        @property { boolean } [published]
        
        @property { string } [readingTime]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
         
    */

/**
        @typedef GetAnnouncementListSchema
        
        
        @property { Array<AdminAnnouncementSchema> } [items]
        
         
    */

/**
        @typedef CreateAnnouncementSchema
        
        
        @property { string } [message]
        
        @property { AdminAnnouncementSchema } [data]
        
         
    */

/**
        @typedef Navigation
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { string } [orientation]
        
        @property { CreatedBy } [createdBy]
        
        @property { DateMeta } [dateMeta]
        
        @property { string } [id]
        
        @property { string } [position]
        
        @property { string } [application]
        
        @property { string } [platform]
        
        @property { NavigationReference } [navigation]
        
         
    */

/**
        @typedef LocaleLanguage
        
        
        @property { Language } [hi]
        
        @property { Language } [ar]
        
        @property { Language } [enUs]
        
         
    */

/**
        @typedef Language
        
        
        @property { string } [display]
        
         
    */

/**
        @typedef Action
        
        
        @property { Page } [page]
        
        @property { Page } [popup]
        
        @property { string } [type]
        
         
    */

/**
        @typedef NavigationReference
        
        
        @property { any } [acl]
        
        @property { LocaleLanguage } [localeLanguage]
        
        @property { string } [image]
        
        @property { string } [type]
        
        @property { Action } [action]
        
        @property { boolean } [active]
        
        @property { string } [display]
        
        @property { number } [sortOrder]
        
        @property { NavigationReference } [subNavigation]
        
         
    */

/**
        @typedef LandingPage
        
        
        @property { string } [slug]
        
        @property { Action } [action]
        
        @property { Array<any> } [platform]
        
        @property { CreatedBy } [createdBy]
        
        @property { DateMeta } [dateMeta]
        
        @property { string } [id]
        
        @property { string } [application]
        
         
    */

/**
        @typedef ConfigurationSchema
        
        
        @property { number } [sleepTime]
        
        @property { boolean } [startOnLaunch]
        
        @property { number } [duration]
        
         
    */

/**
        @typedef Media
        
        
        @property { string } [type]
        
        @property { string } [url]
        
        @property { string } [bgColor]
        
        @property { number } [duration]
        
        @property { boolean } [autoDecideDuration]
        
        @property { Action } [action]
        
         
    */

/**
        @typedef Slideshow
        
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { DateMeta } [dateMeta]
        
        @property { string } [application]
        
        @property { string } [name]
        
        @property { string } [platform]
        
        @property { ConfigurationSchema } [configuration]
        
        @property { Array<Media> } [media]
        
        @property { boolean } [active]
        
         
    */

/**
        @typedef AnnouncementsResponseSchema
        
        
        @property { Array<AnnouncementDataSchema> } [announcements]
        
        @property { number } [refreshRate]
        
        @property { Array<string> } [refreshPages]
        
         
    */

/**
        @typedef AnnouncementDataSchema
        
        
        @property { string } [pageSlug]
        
        @property { StorefrontAnnouncement } [announcement]
        
         
    */

/**
        @typedef FaqResponseSchema
        
        
        @property { Array<FAQ> } [faqs]
        
         
    */

/**
        @typedef UpdateHandpickedSchema
        
        
        @property { HandpickedTagSchema } [tag]
        
         
    */

/**
        @typedef HandpickedTagSchema
        
        
        @property { string } [position]
        
        @property { Object } [attributes]
        
        @property { string } [name]
        
        @property { string } [type]
        
        @property { string } [subType]
        
        @property { string } [content]
        
         
    */

/**
        @typedef RemoveHandpickedSchema
        
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef CreateTagSchema
        
        
        @property { string } [name]
        
        @property { string } [subType]
        
        @property { string } [id]
        
        @property { string } [type]
        
        @property { string } [url]
        
        @property { string } [position]
        
         
    */

/**
        @typedef CreateTagRequestSchema
        
        
        @property { Array<CreateTagSchema> } [tags]
        
         
    */

/**
        @typedef APIError
        
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { string } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { string } [requestId]
        
        @property { string } [stackTrace]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef CategorySchema
        
        
        @property { number } [index]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [title]
        
        @property { string } [application]
        
        @property { number } [v]
        
         
    */

/**
        @typedef ChildrenSchema
        
        
        @property { string } [question]
        
        @property { string } [answer]
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { number } [v]
        
        @property { string } [id]
        
         
    */

/**
        @typedef CategoryRequestSchema
        
        
        @property { string } [slug]
        
        @property { string } [title]
        
         
    */

/**
        @typedef FAQCategorySchema
        
        
        @property { number } [index]
        
        @property { ChildrenSchema } [children]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { number } [v]
        
         
    */

/**
        @typedef FaqSchema
        
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { number } [v]
        
        @property { string } [id]
        
        @property { string } [question]
        
        @property { string } [answer]
        
         
    */

/**
        @typedef FAQ
        
        
        @property { string } [slug]
        
        @property { string } [question]
        
        @property { string } [answer]
        
         
    */

/**
        @typedef CreateFaqResponseSchema
        
        
        @property { FaqSchema } [faq]
        
         
    */

/**
        @typedef CreateFaqSchema
        
        
        @property { FAQ } [faq]
        
         
    */

/**
        @typedef GetFaqSchema
        
        
        @property { Array<Object> } [faqs]
        
         
    */

/**
        @typedef UpdateFaqCategoryRequestSchema
        
        
        @property { CategorySchema } [category]
        
         
    */

/**
        @typedef CreateFaqCategoryRequestSchema
        
        
        @property { CategoryRequestSchema } [category]
        
         
    */

/**
        @typedef CreateFaqCategorySchema
        
        
        @property { CategorySchema } [category]
        
         
    */

/**
        @typedef GetFaqCategoriesSchema
        
        
        @property { Array<CategorySchema> } [categories]
        
         
    */

/**
        @typedef GetFaqCategoryByIdOrSlugSchema
        
        
        @property { FAQCategorySchema } [category]
        
         
    */

/**
        @typedef Pagination
        
        
        @property { string } [type]
        
        @property { number } [current]
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
         
    */

/**
        @typedef LandingPageGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Pagination } [page]
        
         
    */

/**
        @typedef LandingPageSchema
        
        
        @property { string } [slug]
        
        @property { Action } [action]
        
        @property { Array<string> } [platform]
        
        @property { CreatedBy } [createdBy]
        
        @property { DateMeta } [dateMeta]
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
         
    */

/**
        @typedef LandingPageRequest
        
        
        @property { string } [slug]
        
        @property { Action } [action]
        
        @property { Array<string> } [platform]
        
         
    */

/**
        @typedef DefaultNavigationResponse
        
        
        @property { Array<Object> } [items]
        
         
    */

/**
        @typedef NavigationGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Pagination } [page]
        
         
    */

/**
        @typedef Orientation
        
        
        @property { Array<string> } [portrait]
        
        @property { Array<string> } [landscape]
        
         
    */

/**
        @typedef NavigationSchema
        
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<string> } [platform]
        
        @property { any } [orientation]
        
        @property { NavigationReference } [navigation]
        
         
    */

/**
        @typedef NavigationRequest
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<string> } [platform]
        
        @property { Orientation } [orientation]
        
        @property { NavigationReference } [navigation]
        
         
    */

/**
        @typedef CustomPageSchema
        
        
        @property { string } [id]
        
        @property { string } [platform]
        
        @property { string } [title]
        
        @property { string } [slug]
        
        @property { string } [type]
        
        @property { string } [orientation]
        
        @property { string } [application]
        
        @property { string } [description]
        
        @property { boolean } [published]
        
        @property { Array<string> } [tags]
        
        @property { Array<ContentSchema> } [content]
        
        @property { CreatedBy } [createdBy]
        
        @property { DateMeta } [dateMeta]
        
        @property { ScheduleSchema } [schedule]
        
         
    */

/**
        @typedef ContentSchema
        
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */

/**
        @typedef CustomPage
        
        
        @property { CustomPageSchema } [data]
        
         
    */

/**
        @typedef CustomBlogSchema
        
        
        @property { string } [id]
        
        @property { string } [title]
        
        @property { string } [slug]
        
        @property { string } [readingTime]
        
        @property { string } [application]
        
        @property { string } [description]
        
        @property { FeatureImage } [featureImage]
        
        @property { boolean } [published]
        
        @property { boolean } [archived]
        
        @property { Array<string> } [tags]
        
        @property { ContentSchema } [content]
        
        @property { Author } [author]
        
        @property { ScheduleSchema } [schedule]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { Object } [customJson]
        
         
    */

/**
        @typedef FeatureImage
        
        
        @property { string } [secureUrl]
        
         
    */

/**
        @typedef CustomBlog
        
        
        @property { CustomBlogSchema } [data]
        
         
    */

/**
        @typedef PageGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */

/**
        @typedef PageSpec
        
        
        @property { Array<Object> } [specifications]
        
         
    */

/**
        @typedef PageSpecItem
        
        
        @property { string } [pageType]
        
        @property { string } [displayName]
        
        @property { Array<string> } [params]
        
        @property { Array<string> } [query]
        
         
    */

/**
        @typedef PageSchema
        
        
        @property { Array<any> } [id]
        
        @property { string } [schedule]
        
        @property { Array<any> } [application]
        
        @property { Array<string> } [componentIds]
        
        @property { Array<PageContent> } [content]
        
        @property { Object } [createdBy]
        
        @property { Object } [dateMeta]
        
        @property { string } [description]
        
        @property { Object } [featureImage]
        
        @property { Array<PageMeta> } [pageMeta]
        
        @property { string } [platform]
        
        @property { boolean } [published]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
        @property { string } [type]
        
        @property { Object } [visibility]
        
         
    */

/**
        @typedef CreatedBy
        
        
        @property { string } [id]
        
         
    */

/**
        @typedef PageContent
        
        
        @property { string } [type]
        
        @property { Object } [value]
        
         
    */

/**
        @typedef PageMeta
        
        
        @property { string } [key]
        
        @property { Object } [value]
        
         
    */

/**
        @typedef PageRequest
        
        
        @property { string } [schedule]
        
        @property { string } [application]
        
        @property { Object } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Object } [featureImage]
        
        @property { boolean } [published]
        
        @property { string } [readingTime]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
         
    */

/**
        @typedef PagePublishRequest
        
        
        @property { boolean } [publish]
        
         
    */

/**
        @typedef PageMetaSchema
        
        
        @property { Array<Object> } [systemPages]
        
        @property { Array<Object> } [customPages]
        
        @property { string } [applicationId]
        
         
    */

/**
        @typedef SlideshowGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Pagination } [page]
        
         
    */

/**
        @typedef SlideshowSchema
        
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { DateMeta } [dateMeta]
        
        @property { string } [application]
        
        @property { string } [platform]
        
        @property { ConfigurationSchema } [configuration]
        
        @property { Media } [media]
        
        @property { boolean } [active]
        
        @property { boolean } [archived]
        
         
    */

/**
        @typedef SlideshowRequest
        
        
        @property { string } [slug]
        
        @property { string } [platform]
        
        @property { ConfigurationSchema } [configuration]
        
        @property { Media } [media]
        
        @property { boolean } [active]
        
         
    */

/**
        @typedef Support
        
        
        @property { boolean } [created]
        
        @property { string } [id]
        
        @property { string } [configType]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { ContactSchema } [contact]
        
         
    */

/**
        @typedef Phone
        
        
        @property { string } [key]
        
        @property { string } [code]
        
        @property { string } [number]
        
         
    */

/**
        @typedef PhoneSchema
        
        
        @property { boolean } [active]
        
        @property { Array<Phone> } [phone]
        
         
    */

/**
        @typedef EmailSchema
        
        
        @property { boolean } [active]
        
        @property { Array<Email> } [email]
        
         
    */

/**
        @typedef ContactSchema
        
        
        @property { PhoneSchema } [phone]
        
        @property { EmailSchema } [email]
        
         
    */

/**
        @typedef TagsSchema
        
        
        @property { string } [application]
        
        @property { string } [id]
        
        @property { Array<TagSchema> } [tags]
        
         
    */

/**
        @typedef TagSchema
        
        
        @property { string } [name]
        
        @property { string } [url]
        
        @property { string } [type]
        
        @property { string } [subType]
        
        @property { string } [position]
        
        @property { Object } [attributes]
        
         
    */

/**
        @typedef PaymentGatewayConfigResponse
        
        
        @property { Array<Object> } [aggregators]
        
        @property { boolean } created
        
        @property { string } appId
        
        @property { boolean } success
        
        @property { Array<string> } excludedFields
        
        @property { Array<string> } displayFields
        
         
    */

/**
        @typedef ErrorCodeDescription
        
        
        @property { string } code
        
        @property { string } description
        
        @property { boolean } success
        
         
    */

/**
        @typedef PaymentGatewayConfig
        
        
        @property { string } key
        
        @property { string } secret
        
        @property { string } configType
        
        @property { boolean } [isActive]
        
        @property { string } merchantSalt
        
         
    */

/**
        @typedef PaymentGatewayConfigRequest
        
        
        @property { string } appId
        
        @property { boolean } [isActive]
        
        @property { PaymentGatewayConfig } [aggregatorName]
        
         
    */

/**
        @typedef PaymentGatewayToBeReviewed
        
        
        @property { boolean } success
        
        @property { Array<string> } aggregator
        
         
    */

/**
        @typedef ErrorCodeAndDescription
        
        
        @property { string } code
        
        @property { string } description
        
         
    */

/**
        @typedef HttpErrorCodeAndResponse
        
        
        @property { ErrorCodeAndDescription } error
        
        @property { boolean } success
        
         
    */

/**
        @typedef PaymentModeLogo
        
        
        @property { string } small
        
        @property { string } large
        
         
    */

/**
        @typedef PaymentModeList
        
        
        @property { string } [cardName]
        
        @property { string } [cardReference]
        
        @property { string } [nickname]
        
        @property { string } [cardIssuer]
        
        @property { PaymentModeLogo } [logoUrl]
        
        @property { string } [displayName]
        
        @property { string } [cardNumber]
        
        @property { number } [expYear]
        
        @property { number } [expMonth]
        
        @property { string } [merchantCode]
        
        @property { number } [displayPriority]
        
        @property { string } aggregatorName
        
        @property { string } [cardToken]
        
        @property { number } [retryCount]
        
        @property { string } [cardBrand]
        
        @property { string } [cardFingerprint]
        
        @property { string } [code]
        
        @property { string } [cardBrandImage]
        
        @property { Array<string> } [intentAppErrorList]
        
        @property { boolean } [expired]
        
        @property { string } [cardType]
        
        @property { string } [intentFlow]
        
        @property { number } [timeout]
        
        @property { string } [cardIsin]
        
        @property { string } [name]
        
        @property { string } [fyndVpa]
        
        @property { string } [cardId]
        
         
    */

/**
        @typedef RootPaymentMode
        
        
        @property { string } displayName
        
        @property { number } displayPriority
        
        @property { string } name
        
        @property { string } [aggregatorName]
        
        @property { boolean } [addCardEnabled]
        
        @property { Array<PaymentModeList> } [list]
        
        @property { boolean } [anonymousEnable]
        
         
    */

/**
        @typedef PaymentOptions
        
        
        @property { Array<RootPaymentMode> } paymentOption
        
         
    */

/**
        @typedef PaymentOptionsResponse
        
        
        @property { PaymentOptions } paymentOptions
        
        @property { boolean } success
        
         
    */

/**
        @typedef PayoutsResponse
        
        
        @property { Object } uniqueTransferNo
        
        @property { Array<Object> } payoutsAggregators
        
        @property { Object } moreAttributes
        
        @property { boolean } isActive
        
        @property { Object } customers
        
        @property { boolean } isDefault
        
        @property { string } transferType
        
         
    */

/**
        @typedef PayoutRequest
        
        
        @property { Object } users
        
        @property { boolean } isActive
        
        @property { string } aggregator
        
        @property { string } uniqueExternalId
        
        @property { Object } bankDetails
        
        @property { string } transferType
        
         
    */

/**
        @typedef PayoutResponse
        
        
        @property { string } paymentStatus
        
        @property { string } uniqueTransferNo
        
        @property { boolean } created
        
        @property { boolean } success
        
        @property { Object } payouts
        
        @property { Object } users
        
        @property { boolean } isActive
        
        @property { string } aggregator
        
        @property { Object } bankDetails
        
        @property { string } transferType
        
         
    */

/**
        @typedef UpdatePayoutResponse
        
        
        @property { boolean } isDefault
        
        @property { boolean } success
        
        @property { boolean } isActive
        
         
    */

/**
        @typedef UpdatePayoutRequest
        
        
        @property { string } uniqueExternalId
        
        @property { boolean } isDefault
        
        @property { boolean } isActive
        
         
    */

/**
        @typedef DeletePayoutResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef SubscriptionPaymentMethodResponse
        
        
        @property { boolean } success
        
        @property { Array<Object> } data
        
         
    */

/**
        @typedef DeleteSubscriptionPaymentMethodResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef SubscriptionConfigResponse
        
        
        @property { boolean } success
        
        @property { string } aggregator
        
        @property { Object } config
        
         
    */

/**
        @typedef SaveSubscriptionSetupIntentRequest
        
        
        @property { string } uniqueExternalId
        
         
    */

/**
        @typedef SaveSubscriptionSetupIntentResponse
        
        
        @property { boolean } success
        
        @property { Object } data
        
         
    */

/**
        @typedef GetActivityStatus
        
        
        @property { ActivityHistory } activityHistory
        
         
    */

/**
        @typedef ActivityHistory
        
        
        @property { string } [createdat]
        
        @property { string } [message]
        
        @property { string } [type]
        
        @property { string } [user]
        
         
    */

/**
        @typedef FailedOrders
        
        
        @property { FailOrder } orders
        
         
    */

/**
        @typedef FailOrder
        
        
        @property { string } [updatedAt]
        
        @property { string } [id]
        
        @property { string } [reason]
        
        @property { MarketplaceOrder } [marketplaceOrder]
        
        @property { string } [marketplaceOrderId]
        
        @property { string } [createdAt]
        
        @property { string } [appId]
        
        @property { string } [marketplace]
        
        @property { number } [companyId]
        
         
    */

/**
        @typedef MarketplaceOrder
        
        
        @property { string } [orderStatusUrl]
        
        @property { string } [adminGraphqlApiId]
        
        @property { string } [email]
        
        @property { boolean } [test]
        
        @property { string } [note]
        
        @property { string } [totalPrice]
        
        @property { number } [appId]
        
        @property { TotalDiscountsSet } [totalDiscountsSet]
        
        @property { TotalPriceSet } [totalPriceSet]
        
        @property { TotalTaxSet } [totalTaxSet]
        
        @property { string } [gateway]
        
        @property { string } [name]
        
        @property { SubtotalPriceSet } [subtotalPriceSet]
        
        @property { number } [number]
        
        @property { boolean } [buyerAcceptsMarketing]
        
        @property { string } [contactEmail]
        
        @property { string } [token]
        
        @property { string } [sourceName]
        
        @property { Array<any> } [paymentGatewayNames]
        
        @property { string } [presentmentCurrency]
        
        @property { string } [subtotalPrice]
        
        @property { string } [processedAt]
        
        @property { number } [orderNumber]
        
        @property { string } [totalTipReceived]
        
        @property { number } [id]
        
        @property { boolean } [confirmed]
        
        @property { string } [currency]
        
        @property { string } [totalLineItemsPrice]
        
        @property { LineItems } [lineItems]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [totalWeight]
        
        @property { BillingAddress } [billingAddress]
        
        @property { TotalShippingPriceSet } [totalShippingPriceSet]
        
        @property { Customer } [customer]
        
        @property { string } [totalDiscounts]
        
        @property { TotalLineItemsPriceSet } [totalLineItemsPriceSet]
        
        @property { string } [tags]
        
        @property { string } [totalPriceUsd]
        
        @property { number } [userId]
        
        @property { string } [totalTax]
        
        @property { string } [processingMethod]
        
        @property { ShippingAddress } [shippingAddress]
        
        @property { boolean } [taxesIncluded]
        
        @property { string } [financialStatus]
        
         
    */

/**
        @typedef TotalDiscountsSet
        
        
        @property { PresentmentMoney } [presentmentMoney]
        
        @property { ShopMoney } [shopMoney]
        
         
    */

/**
        @typedef PresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef ShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TotalPriceSet
        
        
        @property { TotalPriceSetShopMoney } [shopMoney]
        
        @property { TotalPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */

/**
        @typedef TotalPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TotalPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TotalTaxSet
        
        
        @property { TotalTaxSetShopMoney } [shopMoney]
        
        @property { TotalTaxSetPresentmentMoney } [presentmentMoney]
        
         
    */

/**
        @typedef TotalTaxSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TotalTaxSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef SubtotalPriceSet
        
        
        @property { SubtotalPriceSetShopMoney } [shopMoney]
        
        @property { SubtotalPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */

/**
        @typedef SubtotalPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef SubtotalPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef LineItems
        
        
        @property { string } [sku]
        
        @property { number } [fulfillableQuantity]
        
        @property { number } [grams]
        
        @property { string } [totalDiscount]
        
        @property { LineItemsArticle } [article]
        
        @property { string } [title]
        
        @property { string } [variantInventoryManagement]
        
        @property { number } [id]
        
        @property { number } [variantId]
        
        @property { string } [variantTitle]
        
        @property { boolean } [productExists]
        
        @property { string } [price]
        
        @property { string } [adminGraphqlApiId]
        
        @property { number } [quantity]
        
        @property { string } [vendor]
        
        @property { string } [fulfillmentService]
        
        @property { boolean } [taxable]
        
        @property { string } [name]
        
        @property { number } [productId]
        
        @property { PriceSet } [priceSet]
        
        @property { TaxLines } [taxLines]
        
        @property { boolean } [requiresShipping]
        
        @property { boolean } [giftCard]
        
        @property { TotalDiscountSet } [totalDiscountSet]
        
         
    */

/**
        @typedef LineItemsArticle
        
        
        @property { Quantities } [quantities]
        
        @property { string } [oldArticleUid]
        
        @property { number } [totalQuantity]
        
        @property { Manufacturer } [manufacturer]
        
        @property { ArticlePrice } [price]
        
        @property { boolean } [trackInventory]
        
        @property { Company } [company]
        
        @property { boolean } [isActive]
        
        @property { FailOrderDateMeta } [dateMeta]
        
        @property { boolean } [fragile]
        
        @property { MarketplaceIdentifiers } [marketplaceIdentifiers]
        
        @property { string } [size]
        
        @property { boolean } [isSet]
        
        @property { Dimension } [dimension]
        
        @property { Weight } [weight]
        
        @property { Store } [store]
        
        @property { ArticleMeta } [meta]
        
        @property { string } [uid]
        
        @property { ArticleBrand } [brand]
        
        @property { number } [itemId]
        
        @property { string } [fyndArticleCode]
        
        @property { string } [id]
        
        @property { LineItemsArticleIdentifier } [identifier]
        
        @property { string } [sellerIdentifier]
        
        @property { string } [fyndItemCode]
        
        @property { string } [countryOfOrigin]
        
         
    */

/**
        @typedef Quantities
        
        
        @property { NotAvailable } [notAvailable]
        
        @property { Sellable } [sellable]
        
        @property { OrderCommitted } [orderCommitted]
        
        @property { Damaged } [damaged]
        
         
    */

/**
        @typedef NotAvailable
        
        
        @property { number } [count]
        
        @property { string } [updatedAt]
        
         
    */

/**
        @typedef Sellable
        
        
        @property { number } [count]
        
        @property { string } [updatedAt]
        
         
    */

/**
        @typedef OrderCommitted
        
        
        @property { number } [count]
        
        @property { string } [updatedAt]
        
         
    */

/**
        @typedef Damaged
        
        
        @property { string } [updatedAt]
        
        @property { number } [count]
        
         
    */

/**
        @typedef Manufacturer
        
        
        @property { boolean } [isDefault]
        
        @property { string } [address]
        
        @property { string } [name]
        
         
    */

/**
        @typedef ArticlePrice
        
        
        @property { number } [marked]
        
        @property { string } [currency]
        
        @property { number } [effective]
        
        @property { number } [transfer]
        
         
    */

/**
        @typedef Company
        
        
        @property { number } [id]
        
        @property { string } [companyType]
        
        @property { string } [businessType]
        
        @property { string } [companyName]
        
        @property { string } [createdOn]
        
        @property { string } [panNo]
        
        @property { boolean } [returnAllowed]
        
        @property { string } [meta]
        
        @property { boolean } [exchangeAllowed]
        
        @property { string } [agreementStartDate]
        
        @property { number } [exchangeWithinDays]
        
        @property { number } [paymentProcesingCharge]
        
        @property { boolean } [fyndAFitAvailable]
        
        @property { string } [modifiedOn]
        
        @property { number } [returnWithinDays]
        
         
    */

/**
        @typedef FailOrderDateMeta
        
        
        @property { string } [addedOnStore]
        
        @property { string } [inventoryUpdatedOn]
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */

/**
        @typedef MarketplaceIdentifiers
        
        
        @property { TatacliqLuxury } [tatacliqLuxury]
        
         
    */

/**
        @typedef TatacliqLuxury
        
        
        @property { string } [sku]
        
         
    */

/**
        @typedef Dimension
        
        
        @property { number } [height]
        
        @property { number } [width]
        
        @property { string } [unit]
        
        @property { number } [length]
        
        @property { boolean } [isDefault]
        
         
    */

/**
        @typedef Weight
        
        
        @property { boolean } [isDefault]
        
        @property { string } [unit]
        
        @property { number } [shipping]
        
         
    */

/**
        @typedef Store
        
        
        @property { number } [id]
        
         
    */

/**
        @typedef ArticleMeta
        
        
        @property { string } [service]
        
         
    */

/**
        @typedef ArticleBrand
        
        
        @property { string } [name]
        
        @property { number } [id]
        
         
    */

/**
        @typedef LineItemsArticleIdentifier
        
        
        @property { string } [skuCode]
        
         
    */

/**
        @typedef PriceSet
        
        
        @property { PriceSetShopMoney } [shopMoney]
        
        @property { PriceSetPresentmentMoney } [presentmentMoney]
        
         
    */

/**
        @typedef PriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef PriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TaxLines
        
        
        @property { string } [title]
        
        @property { string } [price]
        
        @property { number } [rate]
        
        @property { TaxLinesPriceSet } [priceSet]
        
         
    */

/**
        @typedef TaxLinesPriceSet
        
        
        @property { TaxLinesPriceSetShopMoney } [shopMoney]
        
        @property { TaxLinesPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */

/**
        @typedef TaxLinesPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TaxLinesPriceSetPresentmentMoney
        
        
        @property { string } [currencyCode]
        
        @property { string } [amount]
        
         
    */

/**
        @typedef TotalDiscountSet
        
        
        @property { TotalDiscountSetPresentmentMoney } [presentmentMoney]
        
        @property { TotalDiscountSetShopMoney } [shopMoney]
        
         
    */

/**
        @typedef TotalDiscountSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TotalDiscountSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef BillingAddress
        
        
        @property { string } [address1]
        
        @property { string } [city]
        
        @property { string } [zip]
        
        @property { string } [lastName]
        
        @property { string } [address2]
        
        @property { number } [longitude]
        
        @property { string } [provinceCode]
        
        @property { string } [phone]
        
        @property { string } [company]
        
        @property { number } [latitude]
        
        @property { string } [name]
        
        @property { string } [country]
        
        @property { string } [countryCode]
        
        @property { string } [firstName]
        
        @property { string } [province]
        
         
    */

/**
        @typedef TotalShippingPriceSet
        
        
        @property { TotalShippingPriceSetShopMoney } [shopMoney]
        
        @property { TotalShippingPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */

/**
        @typedef TotalShippingPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TotalShippingPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef Customer
        
        
        @property { string } [createdAt]
        
        @property { number } [id]
        
        @property { string } [lastName]
        
        @property { string } [state]
        
        @property { number } [lastOrderId]
        
        @property { string } [note]
        
        @property { boolean } [verifiedEmail]
        
        @property { string } [phone]
        
        @property { boolean } [acceptsMarketing]
        
        @property { string } [firstName]
        
        @property { string } [tags]
        
        @property { string } [lastOrderName]
        
        @property { number } [ordersCount]
        
        @property { string } [totalSpent]
        
        @property { boolean } [taxExempt]
        
        @property { string } [currency]
        
        @property { string } [acceptsMarketingUpdatedAt]
        
        @property { string } [email]
        
        @property { string } [updatedAt]
        
        @property { string } [adminGraphqlApiId]
        
        @property { DefaultAddress } [defaultAddress]
        
         
    */

/**
        @typedef DefaultAddress
        
        
        @property { string } [lastName]
        
        @property { string } [name]
        
        @property { string } [provinceCode]
        
        @property { string } [countryCode]
        
        @property { boolean } [isDefault]
        
        @property { number } [id]
        
        @property { number } [customerId]
        
        @property { string } [firstName]
        
        @property { string } [address1]
        
        @property { string } [phone]
        
        @property { string } [countryName]
        
        @property { string } [company]
        
        @property { string } [address2]
        
        @property { string } [city]
        
        @property { string } [province]
        
        @property { string } [country]
        
        @property { string } [zip]
        
         
    */

/**
        @typedef TotalLineItemsPriceSet
        
        
        @property { TotalLineItemsPriceSetShopMoney } [shopMoney]
        
        @property { TotalLineItemsPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */

/**
        @typedef TotalLineItemsPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TotalLineItemsPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef ShippingAddress
        
        
        @property { string } [address1]
        
        @property { string } [zip]
        
        @property { string } [address2]
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
        @property { string } [lastName]
        
        @property { number } [latitude]
        
        @property { string } [provinceCode]
        
        @property { string } [firstName]
        
        @property { string } [phone]
        
        @property { string } [province]
        
        @property { number } [longitude]
        
        @property { string } [city]
        
        @property { string } [company]
        
        @property { string } [name]
        
         
    */

/**
        @typedef OrderListing
        
        
        @property { Array<OrderItems> } items
        
        @property { Filters } filters
        
        @property { NextOrderStatus } nextOrderStatus
        
        @property { PlatformOrderPage } page
        
        @property { AppliedFilters } appliedFilters
        
         
    */

/**
        @typedef OrderItems
        
        
        @property { PlatformOrderUserInfo } [user]
        
        @property { PlatformDeliveryAddress } [deliveryAddress]
        
        @property { Channel } [channel]
        
        @property { PlatformBreakupValues } [breakupValues]
        
        @property { string } [id]
        
        @property { PlatformApplication } [application]
        
        @property { PlatformShipment } [shipments]
        
        @property { string } [createdAt]
        
        @property { number } [totalShipmentsInOrder]
        
        @property { ItemsPayments } [payments]
        
         
    */

/**
        @typedef PlatformOrderUserInfo
        
        
        @property { string } [mobile]
        
        @property { string } [firstName]
        
        @property { string } [gender]
        
        @property { string } [email]
        
        @property { string } [lastName]
        
        @property { boolean } [isAnonymousUser]
        
        @property { number } [uid]
        
        @property { string } [avisUserId]
        
         
    */

/**
        @typedef PlatformDeliveryAddress
        
        
        @property { string } [area]
        
        @property { string } [state]
        
        @property { string } [country]
        
        @property { string } [version]
        
        @property { string } [address1]
        
        @property { number } [latitude]
        
        @property { string } [updatedAt]
        
        @property { string } [city]
        
        @property { string } [landmark]
        
        @property { string } [createdAt]
        
        @property { string } [name]
        
        @property { string } [address]
        
        @property { string } [phone]
        
        @property { number } [longitude]
        
        @property { string } [addressType]
        
        @property { string } [email]
        
        @property { string } [pincode]
        
        @property { string } [address2]
        
        @property { string } [contactPerson]
        
        @property { string } [addressCategory]
        
         
    */

/**
        @typedef Channel
        
        
        @property { string } [name]
        
        @property { string } [logo]
        
         
    */

/**
        @typedef PlatformBreakupValues
        
        
        @property { string } [display]
        
        @property { number } [value]
        
        @property { string } [name]
        
         
    */

/**
        @typedef PlatformApplication
        
        
        @property { string } [name]
        
        @property { string } [owner]
        
        @property { boolean } [postOrderReassignment]
        
        @property { string } [id]
        
        @property { string } [description]
        
        @property { boolean } [dpAssignment]
        
        @property { ArticleAssignment } [articleAssignment]
        
        @property { boolean } [forceReassignment]
        
        @property { string } [token]
        
        @property { string } [secret]
        
         
    */

/**
        @typedef ArticleAssignment
        
        
        @property { string } [strategy]
        
        @property { string } [level]
        
         
    */

/**
        @typedef PlatformShipment
        
        
        @property { PlatformShipmentStatus } [status]
        
        @property { Bags } [bags]
        
        @property { ShipmentPrices } [prices]
        
        @property { ShipmentBreakupValues } [breakupValues]
        
        @property { string } [id]
        
        @property { DpDetails } [dpDetails]
        
        @property { ShipmentInvoice } [invoice]
        
        @property { PlatformFulfillingStore } [fulfillingStore]
        
        @property { Payments } [payments]
        
        @property { ShipmentGst } [gst]
        
        @property { Company } [company]
        
        @property { PlatformShipmentBrand } [brand]
        
        @property { Object } [coupon]
        
        @property { string } [orderSource]
        
        @property { boolean } [isNotFyndSource]
        
        @property { string } [comment]
        
        @property { Promise } [promise]
        
        @property { ShipmentTrackingDetails } [trackingDetails]
        
        @property { boolean } [isFyndCoupon]
        
        @property { string } [orderType]
        
        @property { ShipmentUser } [user]
        
         
    */

/**
        @typedef PlatformShipmentStatus
        
        
        @property { number } [id]
        
        @property { Array<number> } [bagList]
        
        @property { string } [createdAt]
        
        @property { string } [status]
        
        @property { string } [name]
        
        @property { number } [progress]
        
        @property { string } [shipmentId]
        
        @property { string } [currentShipmentStatus]
        
        @property { string } [colorCode]
        
         
    */

/**
        @typedef Bags
        
        
        @property { Array<BagFinancialBreakup> } [financialBreakup]
        
        @property { BagCurrStatus } [status]
        
        @property { BagItem } [item]
        
        @property { BagArticle } [article]
        
        @property { number } [id]
        
        @property { BagPrices } [prices]
        
        @property { GstDetails } [gstDetails]
        
        @property { BagBreakupValues } [breakupValues]
        
        @property { number } [updateTime]
        
        @property { BagCurrentStatus } [currentStatus]
        
        @property { BagStatus } [bagStatus]
        
         
    */

/**
        @typedef BagFinancialBreakup
        
        
        @property { number } [valueOfGood]
        
        @property { string } [hsnCode]
        
        @property { number } [priceEffective]
        
        @property { number } [codCharges]
        
        @property { string } [gstFee]
        
        @property { number } [fyndCredits]
        
        @property { number } [refundAmount]
        
        @property { number } [cashbackApplied]
        
        @property { number } [transferPrice]
        
        @property { number } [amountPaidRoundoff]
        
        @property { number } [couponValue]
        
        @property { number } [amountPaid]
        
        @property { number } [gstTaxPercentage]
        
        @property { string } [size]
        
        @property { number } [totalUnits]
        
        @property { number } [discount]
        
        @property { number } [couponEffectiveDiscount]
        
        @property { number } [cashback]
        
        @property { number } [promotionEffectiveDiscount]
        
        @property { string } [gstTag]
        
        @property { number } [deliveryCharge]
        
        @property { number } [refundCredit]
        
        @property { number } [priceMarked]
        
        @property { Identifiers } [identifiers]
        
        @property { string } [itemName]
        
        @property { boolean } [addedToFyndCash]
        
        @property { number } [brandCalculatedAmount]
        
         
    */

/**
        @typedef Identifiers
        
        
        @property { string } [ean]
        
         
    */

/**
        @typedef BagCurrStatus
        
        
        @property { boolean } [enableTracking]
        
        @property { boolean } [isCustomerReturnAllowed]
        
        @property { boolean } [isActive]
        
        @property { boolean } [isReturnable]
        
        @property { boolean } [canBeCancelled]
        
         
    */

/**
        @typedef BagItem
        
        
        @property { number } [id]
        
        @property { string } [size]
        
        @property { string } [slugKey]
        
        @property { boolean } [canReturn]
        
        @property { number } [brandId]
        
        @property { Array<string> } [l2Category]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { boolean } [canCancel]
        
        @property { BagItemAttributes } [attributes]
        
        @property { string } [l3CategoryName]
        
        @property { number } [l3Category]
        
        @property { Array<string> } [l1Category]
        
        @property { Array<string> } [image]
        
        @property { string } [brand]
        
        @property { string } [lastUpdatedAt]
        
         
    */

/**
        @typedef BagItemAttributes
        
        
        @property { string } [itemCode]
        
        @property { string } [brandName]
        
        @property { string } [countryOfOrigin]
        
         
    */

/**
        @typedef BagArticle
        
        
        @property { ArticleIdentifiers } [identifiers]
        
        @property { boolean } [espModified]
        
        @property { boolean } [isSet]
        
        @property { string } [size]
        
        @property { string } [code]
        
        @property { Set } [set]
        
        @property { string } [sellerIdentifier]
        
        @property { BagArticleReturnConfig } [returnConfig]
        
        @property { string } [id]
        
        @property { string } [uid]
        
        @property { Object } [childDetails]
        
         
    */

/**
        @typedef ArticleIdentifiers
        
        
        @property { string } [ean]
        
         
    */

/**
        @typedef Set
        
        
        @property { number } [quantity]
        
        @property { SetSizeDistribution } [sizeDistribution]
        
         
    */

/**
        @typedef SetSizeDistribution
        
        
        @property { Sizes } [sizes]
        
         
    */

/**
        @typedef Sizes
        
        
        @property { string } [size]
        
        @property { number } [pieces]
        
         
    */

/**
        @typedef BagArticleReturnConfig
        
        
        @property { number } [time]
        
        @property { string } [unit]
        
        @property { boolean } [returnable]
        
         
    */

/**
        @typedef ShipmentPrices
        
        
        @property { number } [refundAmount]
        
        @property { number } [cashbackApplied]
        
        @property { number } [transferPrice]
        
        @property { number } [couponValue]
        
        @property { number } [amountPaid]
        
        @property { number } [deliveryCharge]
        
        @property { number } [couponEffectiveDiscount]
        
        @property { number } [codCharges]
        
        @property { number } [refundCredit]
        
        @property { boolean } [addedToFyndCash]
        
        @property { number } [gstTaxPercentage]
        
        @property { number } [priceMarked]
        
        @property { number } [priceEffective]
        
        @property { number } [discount]
        
        @property { number } [promotionEffectiveDiscount]
        
        @property { number } [amountPaidRoundoff]
        
        @property { number } [fyndCredits]
        
        @property { number } [brandCalculatedAmount]
        
        @property { number } [cashback]
        
        @property { number } [valueOfGood]
        
         
    */

/**
        @typedef GstDetails
        
        
        @property { number } [brandCalculatedAmount]
        
        @property { string } [gstFee]
        
        @property { string } [gstTag]
        
        @property { string } [hsnCode]
        
        @property { number } [valueOfGood]
        
        @property { number } [gstTaxPercentage]
        
        @property { boolean } [isDefaultHsnCode]
        
         
    */

/**
        @typedef BagBreakupValues
        
        
        @property { string } [name]
        
        @property { string } [display]
        
        @property { number } [value]
        
         
    */

/**
        @typedef BagCurrentStatus
        
        
        @property { string } [updatedAt]
        
        @property { BagStateMapper } [bagStateMapper]
        
        @property { string } [status]
        
        @property { string } [stateType]
        
         
    */

/**
        @typedef BagStateMapper
        
        
        @property { string } [appStateName]
        
        @property { boolean } [isActive]
        
        @property { string } [displayName]
        
        @property { string } [name]
        
        @property { string } [appDisplayName]
        
         
    */

/**
        @typedef BagStatus
        
        
        @property { string } [status]
        
        @property { string } [stateType]
        
        @property { string } [updatedAt]
        
        @property { BagStatusBagStateMapper } [bagStateMapper]
        
         
    */

/**
        @typedef BagStatusBagStateMapper
        
        
        @property { boolean } [isActive]
        
        @property { string } [displayName]
        
        @property { string } [name]
        
        @property { string } [appDisplayName]
        
        @property { string } [appStateName]
        
         
    */

/**
        @typedef BagPrices
        
        
        @property { number } [cashback]
        
        @property { number } [refundCredit]
        
        @property { number } [couponValue]
        
        @property { number } [deliveryCharge]
        
        @property { number } [fyndCredits]
        
        @property { number } [priceMarked]
        
        @property { number } [cashbackApplied]
        
        @property { number } [valueOfGood]
        
        @property { number } [amountPaidRoundoff]
        
        @property { number } [amountPaid]
        
        @property { number } [codCharges]
        
        @property { number } [priceEffective]
        
        @property { number } [refundAmount]
        
        @property { number } [discount]
        
         
    */

/**
        @typedef ShipmentBreakupValues
        
        
        @property { string } [name]
        
        @property { string } [display]
        
        @property { number } [value]
        
         
    */

/**
        @typedef DpDetails
        
        
        @property { string } [gstTag]
        
         
    */

/**
        @typedef ShipmentInvoice
        
        
        @property { string } [paymentType]
        
        @property { string } [updatedDate]
        
        @property { string } [invoiceUrl]
        
        @property { string } [labelUrl]
        
        @property { string } [paymentMode]
        
        @property { number } [amountToCollect]
        
        @property { RtoAddress } [rtoAddress]
        
         
    */

/**
        @typedef RtoAddress
        
        
        @property { string } [name]
        
        @property { number } [id]
        
        @property { string } [phone]
        
        @property { string } [locationType]
        
        @property { StoreAddressJson } [storeAddressJson]
        
        @property { string } [code]
        
        @property { string } [address1]
        
        @property { string } [city]
        
        @property { string } [country]
        
        @property { string } [pincode]
        
        @property { number } [companyId]
        
        @property { string } [contactPerson]
        
        @property { string } [state]
        
        @property { string } [storeEmail]
        
        @property { string } [address2]
        
         
    */

/**
        @typedef StoreAddressJson
        
        
        @property { string } [country]
        
        @property { number } [latitude]
        
        @property { string } [updatedAt]
        
        @property { string } [area]
        
        @property { string } [state]
        
        @property { string } [addressType]
        
        @property { string } [city]
        
        @property { string } [pincode]
        
        @property { string } [address1]
        
        @property { string } [address2]
        
        @property { number } [longitude]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { string } [createdAt]
        
        @property { string } [contactPerson]
        
        @property { string } [addressCategory]
        
        @property { string } [version]
        
        @property { string } [landmark]
        
         
    */

/**
        @typedef PlatformFulfillingStore
        
        
        @property { number } [packagingMaterialCount]
        
        @property { string } [locationType]
        
        @property { string } [code]
        
        @property { string } [city]
        
        @property { FulfillingStoreMeta } [meta]
        
        @property { string } [name]
        
        @property { boolean } [isActive]
        
        @property { string } [address1]
        
        @property { string } [storeEmail]
        
        @property { boolean } [isArchived]
        
        @property { string } [state]
        
        @property { string } [address2]
        
        @property { string } [contactPerson]
        
        @property { string } [phone]
        
        @property { boolean } [isEnabledForRecon]
        
        @property { string } [fulfillmentChannel]
        
        @property { string } [createdAt]
        
        @property { number } [id]
        
        @property { string } [pincode]
        
        @property { Array<string> } [brandStoreTags]
        
        @property { number } [companyId]
        
        @property { FulfillingStoreStoreAddressJson } [storeAddressJson]
        
        @property { string } [updatedAt]
        
        @property { string } [loginUsername]
        
        @property { string } [country]
        
         
    */

/**
        @typedef FulfillingStoreMeta
        
        
        @property { AdditionalContactDetails } [additionalContactDetails]
        
        @property { Documents } [documents]
        
        @property { string } [gstNumber]
        
        @property { string } [displayName]
        
        @property { ProductReturnConfig } [productReturnConfig]
        
        @property { boolean } [allowDpAssignmentFromFynd]
        
        @property { string } [stage]
        
        @property { Timing } [timing]
        
         
    */

/**
        @typedef AdditionalContactDetails
        
        
        @property { Array<string> } [number]
        
         
    */

/**
        @typedef Documents
        
        
        @property { Gst } [gst]
        
         
    */

/**
        @typedef Gst
        
        
        @property { string } [legalName]
        
        @property { string } [type]
        
        @property { string } [value]
        
        @property { boolean } [verified]
        
         
    */

/**
        @typedef ProductReturnConfig
        
        
        @property { boolean } [onSameStore]
        
         
    */

/**
        @typedef Timing
        
        
        @property { Opening } [opening]
        
        @property { string } [weekday]
        
        @property { boolean } [open]
        
        @property { Closing } [closing]
        
         
    */

/**
        @typedef Opening
        
        
        @property { number } [minute]
        
        @property { number } [hour]
        
         
    */

/**
        @typedef Closing
        
        
        @property { number } [hour]
        
        @property { number } [minute]
        
         
    */

/**
        @typedef FulfillingStoreStoreAddressJson
        
        
        @property { string } [address2]
        
        @property { string } [area]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { string } [state]
        
        @property { string } [contactPerson]
        
        @property { string } [country]
        
        @property { string } [pincode]
        
        @property { string } [version]
        
        @property { string } [createdAt]
        
        @property { string } [addressType]
        
        @property { string } [city]
        
        @property { string } [address1]
        
        @property { string } [landmark]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [updatedAt]
        
        @property { string } [addressCategory]
        
         
    */

/**
        @typedef Payments
        
        
        @property { boolean } [isActive]
        
        @property { string } [displayName]
        
        @property { string } [logo]
        
        @property { string } [source]
        
        @property { string } [sourceNickname]
        
        @property { number } [displayPriority]
        
        @property { number } [id]
        
        @property { string } [mode]
        
        @property { string } [paymentIdentifier]
        
         
    */

/**
        @typedef ShipmentGst
        
        
        @property { number } [brandCalculatedAmount]
        
        @property { number } [valueOfGood]
        
        @property { number } [gstFee]
        
         
    */

/**
        @typedef PlatformShipmentBrand
        
        
        @property { boolean } [creditNoteAllowed]
        
        @property { string } [brandName]
        
        @property { string } [modifiedOn]
        
        @property { number } [id]
        
        @property { boolean } [isVirtualInvoice]
        
        @property { string } [createdOn]
        
        @property { string } [logo]
        
         
    */

/**
        @typedef Promise
        
        
        @property { Timestamp } [timestamp]
        
         
    */

/**
        @typedef Timestamp
        
        
        @property { string } [min]
        
        @property { string } [max]
        
         
    */

/**
        @typedef ShipmentTrackingDetails
        
        
        @property { string } [status]
        
        @property { string } [time]
        
        @property { boolean } [isPassed]
        
        @property { boolean } [isCurrent]
        
         
    */

/**
        @typedef ShipmentUser
        
        
        @property { string } [email]
        
        @property { number } [id]
        
        @property { string } [firstName]
        
        @property { string } [mobile]
        
        @property { string } [gender]
        
        @property { string } [lastName]
        
        @property { boolean } [isAnonymousUser]
        
        @property { string } [mongoUserId]
        
         
    */

/**
        @typedef ItemsPayments
        
        
        @property { number } [displayPriority]
        
        @property { number } [id]
        
        @property { boolean } [isActive]
        
        @property { string } [displayName]
        
        @property { string } [logo]
        
        @property { string } [paymentIdentifier]
        
        @property { string } [sourceNickname]
        
        @property { string } [mode]
        
        @property { string } [source]
        
         
    */

/**
        @typedef Filters
        
        
        @property { Stages } [stages]
        
         
    */

/**
        @typedef Stages
        
        
        @property { string } [text]
        
        @property { string } [value]
        
        @property { boolean } [isDefault]
        
        @property { StagesFilters } [filters]
        
         
    */

/**
        @typedef StagesFilters
        
        
        @property { string } [text]
        
        @property { string } [value]
        
        @property { string } [type]
        
        @property { Options } [options]
        
         
    */

/**
        @typedef Options
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */

/**
        @typedef NextOrderStatus
        
        
        @property { BagConfirmed } [bagConfirmed]
        
        @property { DpAssigned } [dpAssigned]
        
        @property { ReturnBagDelivered } [returnBagDelivered]
        
        @property { Placed } [placed]
        
        @property { DeliveryDone } [deliveryDone]
        
        @property { Pending } [pending]
        
        @property { BagPacked } [bagPacked]
        
         
    */

/**
        @typedef BagConfirmed
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */

/**
        @typedef DpAssigned
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */

/**
        @typedef ReturnBagDelivered
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */

/**
        @typedef Placed
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */

/**
        @typedef DeliveryDone
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */

/**
        @typedef Pending
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */

/**
        @typedef BagPacked
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */

/**
        @typedef PlatformOrderPage
        
        
        @property { string } [next]
        
        @property { string } [previous]
        
        @property { string } [type]
        
        @property { number } [size]
        
        @property { number } [current]
        
        @property { boolean } [hasNext]
        
        @property { ItemTotal } [itemTotal]
        
         
    */

/**
        @typedef ItemTotal
        
        
        @property { number } [new]
        
        @property { number } [processing]
        
        @property { number } [returns]
        
        @property { number } [all]
        
         
    */

/**
        @typedef AppliedFilters
        
        
        @property { string } [stage]
        
        @property { Array<string> } [stores]
        
        @property { string } [fromDate]
        
        @property { string } [toDate]
        
         
    */

/**
        @typedef UpdateOrderReprocessResponse
        
        
        @property { string } status
        
         
    */

/**
        @typedef PlatformOrderTrack
        
        
        @property { boolean } success
        
        @property { string } requestId
        
        @property { string } message
        
        @property { string } mobile
        
        @property { string } countryCode
        
        @property { number } resendTimer
        
        @property { string } [resendToken]
        
         
    */

/**
        @typedef GetPingResponse
        
        
        @property { string } ping
        
         
    */

/**
        @typedef UpdateShipmentStatusResponse
        
        
        @property { Object } shipments
        
        @property { Array<any> } [errorShipments]
        
         
    */

/**
        @typedef UpdateShipmentStatusBody
        
        
        @property { Object } shipments
        
        @property { boolean } forceTransition
        
        @property { boolean } task
        
         
    */

/**
        @typedef PlatformShipmentTrack
        
        
        @property { Results } results
        
         
    */

/**
        @typedef Results
        
        
        @property { string } [awb]
        
        @property { string } [updatedAt]
        
        @property { string } [lastLocationRecievedAt]
        
        @property { string } [reason]
        
        @property { string } [shipmentType]
        
        @property { string } [status]
        
        @property { string } [updatedTime]
        
        @property { string } [accountName]
        
         
    */

/**
        @typedef UpdateProcessShipmenstRequestBody
        
        
        @property { Array<string> } shipmentIds
        
        @property { string } expectedStatus
        
         
    */

/**
        @typedef UpdateProcessShipmenstRequestResponse
        
        
        @property { boolean } success
        
        @property { string } message
        
         
    */

/**
        @typedef GetVoiceCallbackResponse
        
        
        @property { string } message
        
         
    */

/**
        @typedef GetClickToCallResponse
        
        
        @property { string } message
        
         
    */

/**
        @typedef ApefaceApiError
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef CompanyAddress
        
        
        @property { number } longitude
        
        @property { string } city
        
        @property { string } [address2]
        
        @property { string } [countryCode]
        
        @property { number } pincode
        
        @property { string } [landmark]
        
        @property { string } country
        
        @property { string } state
        
        @property { number } latitude
        
        @property { string } address1
        
         
    */

/**
        @typedef ReferralInfo
        
        
        @property { string } [referralCode]
        
         
    */

/**
        @typedef BusinessCountryInfo
        
        
        @property { string } [country]
        
        @property { string } [countryCode]
        
         
    */

/**
        @typedef Document
        
        
        @property { string } legalName
        
        @property { boolean } [verified]
        
        @property { string } [url]
        
        @property { string } type
        
        @property { string } value
        
         
    */

/**
        @typedef CompanyStoreSerializerRequest
        
        
        @property { string } name
        
        @property { string } businessType
        
        @property { number } [uid]
        
        @property { CompanyAddress } address
        
        @property { Array<string> } [notificationEmails]
        
        @property { ReferralInfo } [referralInfo]
        
        @property { BusinessCountryInfo } businessCountryInfo
        
        @property { boolean } [franchiseEnabled]
        
        @property { string } [businessInfo]
        
        @property { Document } document
        
        @property { Array<number> } brands
        
        @property { Object } [warnings]
        
         
    */

/**
        @typedef SuccessResponse
        
        
        @property { boolean } [success]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef ErrorResponse
        
        
        @property { string } [message]
        
        @property { string } [code]
        
        @property { Object } [meta]
        
        @property { number } [status]
        
        @property { Object } [errors]
        
         
    */

/**
        @typedef ContactDetails
        
        
        @property { Array<PhoneNumber> } [phone]
        
        @property { Array<string> } [emails]
        
         
    */

/**
        @typedef UserSerializer
        
        
        @property { string } [username]
        
        @property { string } [contact]
        
        @property { string } [userId]
        
         
    */

/**
        @typedef BusinessCountryInfo1
        
        
        @property { string } [country]
        
        @property { string } [countryCode]
        
         
    */

/**
        @typedef Website
        
        
        @property { string } [url]
        
         
    */

/**
        @typedef BusinessDetails
        
        
        @property { Website } [website]
        
         
    */

/**
        @typedef GetAddressSerializer
        
        
        @property { number } [longitude]
        
        @property { string } [city]
        
        @property { string } [address2]
        
        @property { string } [countryCode]
        
        @property { number } [pincode]
        
        @property { string } [addressType]
        
        @property { string } [landmark]
        
        @property { string } [country]
        
        @property { string } [state]
        
        @property { number } [latitude]
        
        @property { string } [address1]
        
         
    */

/**
        @typedef GetCompanyProfileSerializerResponse
        
        
        @property { string } [verifiedOn]
        
        @property { string } [name]
        
        @property { ContactDetails } [contactDetails]
        
        @property { UserSerializer } [createdBy]
        
        @property { Array<Document> } [documents]
        
        @property { string } businessType
        
        @property { string } [businessInfo]
        
        @property { string } [stage]
        
        @property { string } companyType
        
        @property { BusinessCountryInfo1 } [businessCountryInfo]
        
        @property { string } [createdOn]
        
        @property { BusinessDetails } [businessDetails]
        
        @property { boolean } [franchiseEnabled]
        
        @property { Object } [warnings]
        
        @property { string } [modifiedOn]
        
        @property { number } uid
        
        @property { Array<string> } [notificationEmails]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
         
    */

/**
        @typedef DocumentsObj
        
        
        @property { number } [pending]
        
        @property { number } [verified]
        
         
    */

/**
        @typedef MetricsSerializer
        
        
        @property { DocumentsObj } [brand]
        
        @property { number } [uid]
        
        @property { DocumentsObj } [store]
        
        @property { DocumentsObj } [storeDocuments]
        
        @property { DocumentsObj } [product]
        
        @property { DocumentsObj } [companyDocuments]
        
        @property { string } [stage]
        
         
    */

/**
        @typedef BrandBannerSerializer
        
        
        @property { string } [landscape]
        
        @property { string } [portrait]
        
         
    */

/**
        @typedef CreateUpdateBrandRequestSerializer
        
        
        @property { string } name
        
        @property { string } [brandTier]
        
        @property { number } [uid]
        
        @property { Array<string> } [synonyms]
        
        @property { Object } [localeLanguage]
        
        @property { string } logo
        
        @property { BrandBannerSerializer } [banner]
        
        @property { Object } [customJson]
        
        @property { string } [description]
        
        @property { number } [companyId]
        
         
    */

/**
        @typedef UserSerializer1
        
        
        @property { string } [username]
        
        @property { string } [contact]
        
        @property { string } [userId]
        
         
    */

/**
        @typedef GetBrandResponseSerializer
        
        
        @property { string } [verifiedOn]
        
        @property { string } name
        
        @property { number } [uid]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [rejectReason]
        
        @property { Object } [localeLanguage]
        
        @property { string } [createdOn]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { string } [logo]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { Object } [customJson]
        
        @property { string } [description]
        
        @property { string } [slugKey]
        
        @property { string } [stage]
        
        @property { Object } [warnings]
        
        @property { string } [modifiedOn]
        
         
    */

/**
        @typedef CompanyBrandListSerializer
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */

/**
        @typedef CompanyBrandPostRequestSerializer
        
        
        @property { number } company
        
        @property { Array<number> } brands
        
        @property { number } [uid]
        
         
    */

/**
        @typedef LocationListSerializer
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */

/**
        @typedef GetAddressSerializer1
        
        
        @property { number } [longitude]
        
        @property { string } [city]
        
        @property { string } [address2]
        
        @property { string } [countryCode]
        
        @property { number } [pincode]
        
        @property { string } [addressType]
        
        @property { string } [landmark]
        
        @property { string } [country]
        
        @property { string } [state]
        
        @property { number } [latitude]
        
        @property { string } [address1]
        
         
    */

/**
        @typedef LocationTimingSerializer
        
        
        @property { number } [minute]
        
        @property { number } [hour]
        
         
    */

/**
        @typedef LocationDayWiseSerializer
        
        
        @property { LocationTimingSerializer } [closing]
        
        @property { string } weekday
        
        @property { boolean } open
        
        @property { LocationTimingSerializer } [opening]
        
         
    */

/**
        @typedef InvoiceCredSerializer
        
        
        @property { string } [username]
        
        @property { boolean } [enabled]
        
        @property { string } [password]
        
         
    */

/**
        @typedef InvoiceDetailsSerializer
        
        
        @property { InvoiceCredSerializer } [eInvoice]
        
        @property { InvoiceCredSerializer } [eWaybill]
        
         
    */

/**
        @typedef LocationManagerSerializer
        
        
        @property { string } [name]
        
        @property { PhoneNumber } mobileNo
        
        @property { string } [email]
        
         
    */

/**
        @typedef ProductReturnConfigSerializer
        
        
        @property { boolean } [onSameStore]
        
        @property { number } [storeUid]
        
         
    */

/**
        @typedef LocationSerializer
        
        
        @property { string } name
        
        @property { string } displayName
        
        @property { number } [uid]
        
        @property { string } code
        
        @property { Array<PhoneNumber> } [contactNumbers]
        
        @property { string } [storeType]
        
        @property { GetAddressSerializer1 } address
        
        @property { Array<string> } [notificationEmails]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { number } company
        
        @property { LocationManagerSerializer } [manager]
        
        @property { Object } [customJson]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { Array<Document> } [documents]
        
        @property { string } [stage]
        
        @property { Object } [warnings]
        
         
    */

/**
        @typedef GetCompanySerializer
        
        
        @property { string } [verifiedOn]
        
        @property { string } [name]
        
        @property { string } [businessType]
        
        @property { number } [uid]
        
        @property { string } [companyType]
        
        @property { string } [rejectReason]
        
        @property { string } [createdOn]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { UserSerializer } [createdBy]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [stage]
        
        @property { string } [modifiedOn]
        
         
    */

/**
        @typedef LocationIntegrationType
        
        
        @property { string } [inventory]
        
        @property { string } [order]
        
         
    */

/**
        @typedef GetLocationSerializer
        
        
        @property { string } [verifiedOn]
        
        @property { string } name
        
        @property { string } phoneNumber
        
        @property { Array<PhoneNumber> } [contactNumbers]
        
        @property { GetAddressSerializer } address
        
        @property { string } [storeType]
        
        @property { GetCompanySerializer } [company]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { Array<Document> } [documents]
        
        @property { LocationIntegrationType } [integrationType]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { string } [stage]
        
        @property { string } code
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
        @property { Object } [warnings]
        
        @property { string } displayName
        
        @property { number } [uid]
        
        @property { Array<string> } [notificationEmails]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { Object } [customJson]
        
         
    */

/**
        @typedef FailedResponse
        
        
        @property { string } message
        
         
    */

/**
        @typedef CDN
        
        
        @property { string } url
        
         
    */

/**
        @typedef Upload
        
        
        @property { number } expiry
        
        @property { string } url
        
         
    */

/**
        @typedef StartResponse
        
        
        @property { string } fileName
        
        @property { string } filePath
        
        @property { string } contentType
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
         
    */

/**
        @typedef StartRequest
        
        
        @property { string } fileName
        
        @property { string } contentType
        
        @property { number } size
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef CompleteResponse
        
        
        @property { string } id
        
        @property { string } fileName
        
        @property { string } filePath
        
        @property { string } contentType
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } success
        
        @property { Array<string> } [tags]
        
        @property { string } createdOn
        
        @property { string } modifiedOn
        
         
    */

/**
        @typedef Opts
        
        
        @property { number } [attempts]
        
        @property { number } [timestamp]
        
        @property { number } [delay]
        
         
    */

/**
        @typedef CopyFileTask
        
        
        @property { string } id
        
        @property { string } name
        
        @property { BulkRequest } data
        
        @property { Opts } opts
        
        @property { number } progress
        
        @property { number } delay
        
        @property { number } timestamp
        
        @property { number } attemptsMade
        
        @property { Array<string> } [stacktrace]
        
        @property { number } finishedOn
        
        @property { number } processedOn
        
         
    */

/**
        @typedef BulkResponse
        
        
        @property { string } trackingUrl
        
        @property { CopyFileTask } task
        
         
    */

/**
        @typedef ReqConfiguration
        
        
        @property { number } [concurrency]
        
         
    */

/**
        @typedef Destination
        
        
        @property { string } namespace
        
        @property { string } rewrite
        
        @property { string } [basepath]
        
         
    */

/**
        @typedef BulkRequest
        
        
        @property { Array<string> } urls
        
        @property { Destination } destination
        
        @property { ReqConfiguration } [configuration]
        
         
    */

/**
        @typedef Urls
        
        
        @property { string } url
        
        @property { string } signedUrl
        
        @property { number } expiry
        
         
    */

/**
        @typedef SignUrlResponse
        
        
        @property { Array<Urls> } urls
        
         
    */

/**
        @typedef SignUrlRequest
        
        
        @property { number } expiry
        
        @property { Array<string> } urls
        
         
    */

/**
        @typedef DbRecord
        
        
        @property { boolean } success
        
        @property { Array<string> } tags
        
        @property { string } id
        
        @property { string } fileName
        
        @property { string } [operation]
        
        @property { string } namespace
        
        @property { string } contentType
        
        @property { string } filePath
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } createdOn
        
        @property { string } modifiedOn
        
         
    */

/**
        @typedef BrowseResponse
        
        
        @property { Array<DbRecord> } items
        
        @property { Page } page
        
         
    */

/**
        @typedef RedirectDevice
        
        
        @property { string } link
        
        @property { string } type
        
         
    */

/**
        @typedef WebRedirect
        
        
        @property { string } [link]
        
        @property { string } [type]
        
         
    */

/**
        @typedef Redirects
        
        
        @property { RedirectDevice } [ios]
        
        @property { RedirectDevice } [android]
        
        @property { WebRedirect } [web]
        
        @property { boolean } [forceWeb]
        
         
    */

/**
        @typedef ShortLinkReq
        
        
        @property { string } title
        
        @property { string } url
        
        @property { string } [hash]
        
        @property { string } [active]
        
        @property { string } [type]
        
        @property { string } [expireAt]
        
        @property { boolean } [enableTracking]
        
        @property { Redirects } [redirects]
        
         
    */

/**
        @typedef UrlInfo
        
        
        @property { string } [original]
        
        @property { string } [short]
        
        @property { string } [hash]
        
         
    */

/**
        @typedef ShortLinkRes
        
        
        @property { string } [title]
        
        @property { UrlInfo } [url]
        
        @property { string } [createdBy]
        
        @property { string } [personalized]
        
        @property { string } [appRedirect]
        
        @property { string } [fallback]
        
        @property { boolean } [active]
        
        @property { string } [id]
        
        @property { boolean } [enableTracking]
        
        @property { boolean } [expireAt]
        
        @property { string } [application]
        
        @property { boolean } [userId]
        
        @property { boolean } [createdAt]
        
        @property { boolean } [updatedAt]
        
        @property { Redirects } [redirects]
        
         
    */

/**
        @typedef ShortLinkList
        
        
        @property { Array<ShortLinkRes> } [items]
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
        @property { number } [current]
        
        @property { string } [hasNext]
        
        @property { string } [type]
        
         
    */

/**
        @typedef DataTresholdDTO
        
        
        @property { number } [minPrice]
        
        @property { number } [safeStock]
        
        @property { number } [periodThreshold]
        
        @property { string } [periodThresholdType]
        
        @property { Array<GenericDTO> } [periodTypeList]
        
         
    */

/**
        @typedef GenericDTO
        
        
        @property { string } [text]
        
        @property { Object } [value]
        
         
    */

/**
        @typedef JobConfigDTO
        
        
        @property { string } integration
        
        @property { Object } [integrationData]
        
        @property { string } [companyName]
        
        @property { number } companyId
        
        @property { TaskDTO } [taskDetails]
        
        @property { DataTresholdDTO } [thresholdDetails]
        
        @property { string } [jobCode]
        
        @property { string } [alias]
        
         
    */

/**
        @typedef TaskDTO
        
        
        @property { number } [type]
        
        @property { Array<GenericDTO> } [groupList]
        
         
    */

/**
        @typedef ResponseEnvelopeString
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { string } [items]
        
        @property { string } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef AWSS3config
        
        
        @property { string } [bucket]
        
        @property { string } [region]
        
        @property { string } [dir]
        
        @property { string } [accessKey]
        
        @property { string } [secretKey]
        
        @property { string } [localFilePath]
        
        @property { string } [archivePath]
        
        @property { boolean } [archive]
        
        @property { boolean } [delete]
        
        @property { boolean } [unzip]
        
        @property { string } [zipFormat]
        
        @property { string } [fileRegex]
        
        @property { ArchiveConfig } [archiveConfig]
        
         
    */

/**
        @typedef ArchiveConfig
        
        
        @property { boolean } [delete]
        
        @property { boolean } [archive]
        
        @property { string } [archiveDir]
        
         
    */

/**
        @typedef Audit
        
        
        @property { string } [createdBy]
        
        @property { string } [modifiedBy]
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */

/**
        @typedef CatalogMasterConfig
        
        
        @property { string } [sourceSlug]
        
         
    */

/**
        @typedef CompanyConfig
        
        
        @property { number } [companyId]
        
        @property { Array<number> } [excludeSteps]
        
        @property { Array<string> } [hiddenClosetKeys]
        
        @property { Object } [openTags]
        
        @property { Array<string> } [taxIdentifiers]
        
        @property { number } [deleteQuantityThreshold]
        
         
    */

/**
        @typedef DBConfig
        
        
        @property { string } [vendor]
        
        @property { string } [host]
        
        @property { number } [port]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { string } [dbname]
        
        @property { string } [query]
        
        @property { boolean } [procedure]
        
        @property { string } [driverClass]
        
        @property { string } [jdbcUrl]
        
        @property { Object } [optionalProperties]
        
         
    */

/**
        @typedef DBConnectionProfile
        
        
        @property { string } [inventory]
        
         
    */

/**
        @typedef DBParamConfig
        
        
        @property { Object } [params]
        
         
    */

/**
        @typedef DefaultHeadersDTO
        
        
        @property { PropBeanDTO } [store]
        
        @property { PropBeanDTO } [intfArticleId]
        
        @property { PropBeanDTO } [priceEffective]
        
        @property { PropBeanDTO } [quantity]
        
         
    */

/**
        @typedef DocMappingConfig
        
        
        @property { Object } [properties]
        
        @property { number } [junkDataThresholdCount]
        
        @property { Array<PropBeanConfig> } [propBeanConfigs]
        
        @property { string } [unwindField]
        
        @property { DefaultHeadersDTO } [defaultHeaders]
        
         
    */

/**
        @typedef EmailConfig
        
        
        @property { string } [recepient]
        
        @property { string } [host]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { boolean } [readFromContent]
        
        @property { boolean } [filterBasedOnRecepients]
        
        @property { string } [pcol]
        
        @property { string } [subjectLineRegex]
        
        @property { string } [senderAddress]
        
        @property { string } [localDir]
        
        @property { Array<string> } [folderNameHierarchies]
        
        @property { string } [attachmentRegex]
        
        @property { string } [bodyContentRegex]
        
        @property { boolean } [passwordProtected]
        
        @property { string } [zipFormat]
        
        @property { boolean } [attachmentMandate]
        
        @property { boolean } [filterFilesAfterExtraction]
        
        @property { ArchiveConfig } [archiveConfig]
        
        @property { boolean } [readAllUnreadMails]
        
        @property { string } [contentType]
        
        @property { boolean } [downloadableLink]
        
        @property { Object } [properties]
        
         
    */

/**
        @typedef FTPConfig
        
        
        @property { string } [host]
        
        @property { number } [port]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [localDir]
        
        @property { string } [remoteDir]
        
        @property { string } [zipFileRegex]
        
        @property { ArchiveConfig } [archiveConfig]
        
        @property { string } [fileRegex]
        
        @property { string } [zipFormat]
        
        @property { boolean } [readAllFiles]
        
         
    */

/**
        @typedef FileConfig
        
        
        @property { string } [delimiter]
        
        @property { string } [charset]
        
        @property { Object } [properties]
        
        @property { boolean } [fileHasHeader]
        
        @property { number } [headerIndex]
        
        @property { Array<string> } [headerArray]
        
        @property { number } [dataStartIndex]
        
        @property { Array<PropBeanConfig> } [propBeanConfigs]
        
        @property { number } [junkDataThresholdCount]
        
        @property { string } [fileType]
        
        @property { boolean } [lineValidityCheck]
        
        @property { Array<string> } [sheetNames]
        
        @property { boolean } [readAllSheets]
        
        @property { string } [quoteChar]
        
        @property { string } [escapeChar]
        
        @property { DefaultHeadersDTO } [defaultHeaders]
        
         
    */

/**
        @typedef GoogleSpreadSheetConfig
        
        
        @property { string } [range]
        
        @property { string } [sheetId]
        
        @property { string } [clientSecretLocation]
        
        @property { string } [credStorageDirectory]
        
        @property { string } [localDir]
        
        @property { ArchiveConfig } [archiveConfig]
        
         
    */

/**
        @typedef HttpConfig
        
        
        @property { string } [hosturl]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { Object } [requestParams]
        
        @property { string } [httpMethod]
        
        @property { string } [requestPayload]
        
        @property { string } [localPath]
        
        @property { ArchiveConfig } [archiveConfig]
        
         
    */

/**
        @typedef JobConfig
        
        
        @property { number } [id]
        
        @property { string } [jobCode]
        
        @property { string } [taskType]
        
        @property { number } [syncDelay]
        
        @property { string } [cronExpression]
        
        @property { StoreFilter } [storeFilter]
        
        @property { ProcessConfig } [processConfig]
        
        @property { Array<StoreConfig> } [storeConfig]
        
        @property { Object } [properties]
        
        @property { boolean } [immediateFirstRun]
        
        @property { boolean } [disable]
        
        @property { Array<string> } [dependentJobCodes]
        
        @property { Array<CompanyConfig> } [companyConfig]
        
        @property { Array<number> } [companyIds]
        
        @property { Array<string> } [taxIdentifiers]
        
        @property { string } [priority]
        
        @property { number } [periodThreshold]
        
        @property { string } [periodThresholdType]
        
        @property { DBConnectionProfile } [dbConnectionProfile]
        
        @property { Object } [params]
        
        @property { Object } [openTags]
        
        @property { number } [deleteQuantityThreshold]
        
        @property { CatalogMasterConfig } [catalogMasterConfig]
        
        @property { Array<string> } [aggregatorTypes]
        
        @property { string } [integrationType]
        
        @property { number } [minPrice]
        
        @property { Audit } [audit]
        
        @property { number } [version]
        
        @property { string } [alias]
        
         
    */

/**
        @typedef JobConfigRawDTO
        
        
        @property { string } integration
        
        @property { string } companyName
        
        @property { number } companyId
        
        @property { JobConfig } [data]
        
         
    */

/**
        @typedef JsonDocConfig
        
        
        @property { Array<PropBeanConfig> } [propBeanConfigs]
        
         
    */

/**
        @typedef LocalFileConfig
        
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [localDir]
        
        @property { string } [workingDir]
        
        @property { boolean } [unzip]
        
        @property { string } [zipFileRegex]
        
        @property { string } [fileRegex]
        
        @property { string } [zipFormat]
        
        @property { ArchiveConfig } [archiveConfig]
        
        @property { boolean } [readAllFiles]
        
         
    */

/**
        @typedef MongoDocConfig
        
        
        @property { string } [collectionName]
        
        @property { Object } [findQuery]
        
        @property { Object } [projectionQuery]
        
        @property { Array<PropBeanConfig> } [propBeanConfigs]
        
        @property { Array<Object> } [aggregatePipeline]
        
        @property { boolean } [skipSave]
        
         
    */

/**
        @typedef OAuthConfig
        
        
        @property { number } [limit]
        
        @property { number } [pages]
        
        @property { number } [interval]
        
        @property { string } [consumerKey]
        
        @property { string } [consumerSecret]
        
        @property { string } [token]
        
        @property { string } [tokenSecret]
        
        @property { string } [restUrl]
        
        @property { string } [restBaseUrl]
        
        @property { string } [functionName]
        
         
    */

/**
        @typedef ProcessConfig
        
        
        @property { DBConfig } [dbConfig]
        
        @property { DBParamConfig } [dbParamConfig]
        
        @property { SFTPConfig } [sftpConfig]
        
        @property { AWSS3config } [awsS3Config]
        
        @property { MongoDocConfig } [mongoDocConfig]
        
        @property { FTPConfig } [ftpConfig]
        
        @property { EmailConfig } [emailConfig]
        
        @property { FileConfig } [fileConfig]
        
        @property { JsonDocConfig } [jsonDocConfig]
        
        @property { DocMappingConfig } [docMappingConfig]
        
        @property { TaskStepConfig } [taskStepConfig]
        
        @property { HttpConfig } [httpConfig]
        
        @property { LocalFileConfig } [localFileConfig]
        
        @property { OAuthConfig } [oauthConfig]
        
        @property { GoogleSpreadSheetConfig } [googleSpreadsheetConfig]
        
         
    */

/**
        @typedef PropBeanConfig
        
        
        @property { boolean } [required]
        
        @property { Object } [mapping]
        
        @property { boolean } [optional]
        
        @property { Send } [send]
        
        @property { Array<Object> } [validations]
        
        @property { Array<string> } [values]
        
        @property { boolean } [include]
        
        @property { string } [sourceField]
        
        @property { Array<string> } [sourceFields]
        
        @property { string } [destinationField]
        
        @property { string } [dataType]
        
        @property { Object } [defaultValue]
        
        @property { Object } [constValue]
        
        @property { string } [concatStr]
        
        @property { string } [functionName]
        
        @property { string } [transformerName]
        
        @property { string } [allParamFunctionName]
        
        @property { string } [subSeparator]
        
        @property { string } [indexField]
        
        @property { boolean } [ignoreIfNotExists]
        
        @property { string } [identifierType]
        
        @property { Object } [projectionQuery]
        
        @property { boolean } [enrichFromMaster]
        
         
    */

/**
        @typedef PropBeanDTO
        
        
        @property { boolean } [required]
        
        @property { boolean } [optional]
        
        @property { boolean } [include]
        
        @property { string } [sourceField]
        
        @property { Array<string> } [sourceFields]
        
        @property { string } [destinationField]
        
        @property { string } [dataType]
        
        @property { Object } [defaultValue]
        
        @property { Object } [constValue]
        
        @property { string } [concatStr]
        
        @property { string } [functionName]
        
        @property { string } [transformerName]
        
        @property { string } [allParamFunctionName]
        
        @property { string } [subSeparator]
        
        @property { string } [indexField]
        
        @property { boolean } [ignoreIfNotExists]
        
        @property { string } [identifierType]
        
        @property { Object } [projectionQuery]
        
        @property { boolean } [enrichFromMaster]
        
         
    */

/**
        @typedef ResponseEnvelopeListJobConfigRawDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { Array<JobConfigRawDTO> } [items]
        
        @property { Array<JobConfigRawDTO> } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef SFTPConfig
        
        
        @property { string } [host]
        
        @property { number } [port]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [privateKeyPath]
        
        @property { boolean } [strictHostKeyChecking]
        
        @property { string } [localDir]
        
        @property { string } [remoteDir]
        
        @property { boolean } [passwordProtected]
        
        @property { string } [zipFileRegex]
        
        @property { string } [fileRegex]
        
        @property { string } [zipFormat]
        
        @property { ArchiveConfig } [archiveConfig]
        
        @property { boolean } [readAllFiles]
        
         
    */

/**
        @typedef Send
        
        
        @property { boolean } [raw]
        
        @property { boolean } [processed]
        
         
    */

/**
        @typedef StoreConfig
        
        
        @property { string } [jobCode]
        
        @property { string } [storeid]
        
        @property { string } [storeAlias]
        
        @property { string } [storeFileRegex]
        
        @property { string } [storeFileName]
        
        @property { ProcessConfig } [processConfig]
        
        @property { Object } [properties]
        
         
    */

/**
        @typedef StoreFilter
        
        
        @property { Array<string> } [includeTags]
        
        @property { Array<string> } [excludeTags]
        
        @property { Object } [query]
        
         
    */

/**
        @typedef TaskConfig
        
        
        @property { string } [name]
        
        @property { number } [taskConfigId]
        
        @property { Array<TaskParam> } [taskParams]
        
         
    */

/**
        @typedef TaskParam
        
        
        @property { string } [name]
        
        @property { Object } [value]
        
         
    */

/**
        @typedef TaskStepConfig
        
        
        @property { Array<TaskConfig> } [taskConfigs]
        
        @property { Array<number> } [taskConfigIds]
        
        @property { Array<number> } [taskConfigGroupIds]
        
         
    */

/**
        @typedef ResponseEnvelopeListJobConfigDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { Array<JobConfigDTO> } [items]
        
        @property { Array<JobConfigDTO> } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ResponseEnvelopeJobConfigDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { JobConfigDTO } [items]
        
        @property { JobConfigDTO } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef JobConfigListDTO
        
        
        @property { string } [code]
        
        @property { string } [alias]
        
        @property { string } [modifiedBy]
        
        @property { string } [createdBy]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { boolean } [active]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ResponseEnvelopeListJobConfigListDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { Array<JobConfigListDTO> } [items]
        
        @property { Array<JobConfigListDTO> } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ApplicationInventory
        
        
        @property { AppInventoryConfig } [inventory]
        
        @property { AuthenticationConfig } [authentication]
        
        @property { ArticleAssignmentConfig } [articleAssignment]
        
        @property { RewardPointsConfig } [rewardPoints]
        
        @property { AppCartConfig } [cart]
        
        @property { AppPaymentConfig } [payment]
        
        @property { AppOrderConfig } [order]
        
        @property { AppLogisticsConfig } [logistics]
        
        @property { string } [business]
        
        @property { boolean } [commsEnabled]
        
        @property { Array<string> } [platforms]
        
        @property { string } [id]
        
        @property { LoyaltyPoints } [loyaltyPoints]
        
        @property { string } [app]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [modifiedBy]
        
         
    */

/**
        @typedef AppInventoryConfig
        
        
        @property { InventoryBrand } [brand]
        
        @property { InventoryStore } [store]
        
        @property { InventoryCategory } [category]
        
        @property { InventoryPrice } [price]
        
        @property { InventoryDiscount } [discount]
        
        @property { boolean } [outOfStock]
        
        @property { boolean } [franchiseEnabled]
        
        @property { Array<any> } [excludeCategory]
        
        @property { Array<string> } [image]
        
        @property { Array<any> } [companyStore]
        
         
    */

/**
        @typedef InventoryBrand
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [brands]
        
         
    */

/**
        @typedef InventoryStore
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [stores]
        
        @property { AppStoreRules } [rules]
        
         
    */

/**
        @typedef AppStoreRules
        
        
        @property { Array<number> } [companies]
        
        @property { Array<any> } [brands]
        
         
    */

/**
        @typedef InventoryCategory
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [categories]
        
         
    */

/**
        @typedef InventoryPrice
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */

/**
        @typedef InventoryDiscount
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */

/**
        @typedef AuthenticationConfig
        
        
        @property { boolean } [required]
        
        @property { string } [provider]
        
         
    */

/**
        @typedef ArticleAssignmentConfig
        
        
        @property { ArticleAssignmentRules } [rules]
        
        @property { boolean } [postOrderReassignment]
        
        @property { Array<any> } [enforcedStores]
        
         
    */

/**
        @typedef ArticleAssignmentRules
        
        
        @property { StorePriority } [storePriority]
        
         
    */

/**
        @typedef StorePriority
        
        
        @property { boolean } [enabled]
        
        @property { Array<any> } [storetypeOrder]
        
         
    */

/**
        @typedef RewardPointsConfig
        
        
        @property { Credit } [credit]
        
        @property { Debit } [debit]
        
         
    */

/**
        @typedef Credit
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef Debit
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [autoApply]
        
        @property { string } [strategyChannel]
        
         
    */

/**
        @typedef AppCartConfig
        
        
        @property { DeliveryCharges } [deliveryCharges]
        
        @property { boolean } [enabled]
        
        @property { number } [maxCartItems]
        
        @property { number } [minCartValue]
        
        @property { boolean } [bulkCoupons]
        
         
    */

/**
        @typedef DeliveryCharges
        
        
        @property { boolean } [enabled]
        
        @property { Charges } [charges]
        
         
    */

/**
        @typedef Charges
        
        
        @property { number } [threshold]
        
        @property { number } [charges]
        
         
    */

/**
        @typedef AppPaymentConfig
        
        
        @property { CallbackUrl } [callbackUrl]
        
        @property { Methods } [methods]
        
        @property { PaymentSelectionLock } [paymentSelectionLock]
        
        @property { string } [modeOfPayment]
        
        @property { string } [source]
        
        @property { boolean } [enabled]
        
        @property { number } [codAmountLimit]
        
        @property { number } [codCharges]
        
         
    */

/**
        @typedef CallbackUrl
        
        
        @property { string } [app]
        
        @property { string } [web]
        
         
    */

/**
        @typedef Methods
        
        
        @property { PaymentModeConfig } [pl]
        
        @property { PaymentModeConfig } [card]
        
        @property { PaymentModeConfig } [nb]
        
        @property { PaymentModeConfig } [wl]
        
        @property { PaymentModeConfig } [ps]
        
        @property { PaymentModeConfig } [upi]
        
        @property { PaymentModeConfig } [qr]
        
        @property { PaymentModeConfig } [cod]
        
        @property { PaymentModeConfig } [pp]
        
        @property { PaymentModeConfig } [jp]
        
        @property { PaymentModeConfig } [pac]
        
        @property { PaymentModeConfig } [fc]
        
        @property { PaymentModeConfig } [jiopp]
        
        @property { PaymentModeConfig } [stripepg]
        
        @property { PaymentModeConfig } [juspaypg]
        
        @property { PaymentModeConfig } [payubizpg]
        
        @property { PaymentModeConfig } [payumoneypg]
        
        @property { PaymentModeConfig } [rupifipg]
        
        @property { PaymentModeConfig } [simpl]
        
         
    */

/**
        @typedef PaymentModeConfig
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef PaymentSelectionLock
        
        
        @property { boolean } [enabled]
        
        @property { string } [defaultOptions]
        
        @property { string } [paymentIdentifier]
        
         
    */

/**
        @typedef AppOrderConfig
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [forceReassignment]
        
         
    */

/**
        @typedef AppLogisticsConfig
        
        
        @property { boolean } [logisticsBySeller]
        
        @property { boolean } [serviceabilityCheck]
        
        @property { boolean } [sameDayDelivery]
        
        @property { boolean } [dpAssignment]
        
         
    */

/**
        @typedef LoyaltyPoints
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [autoApply]
        
         
    */

/**
        @typedef AppInventoryPartialUpdate
        
        
        @property { RewardPointsConfig } [rewardPoints]
        
        @property { AppCartConfig } [cart]
        
        @property { AppPaymentConfig } [payment]
        
        @property { LoyaltyPoints } [loyaltyPoints]
        
        @property { boolean } [commsEnabled]
        
         
    */

/**
        @typedef BrandCompanyInfo
        
        
        @property { string } [companyName]
        
        @property { number } [companyId]
        
         
    */

/**
        @typedef CompanyByBrandsRequest
        
        
        @property { number } brands
        
        @property { string } [searchText]
        
         
    */

/**
        @typedef CompanyByBrandsResponse
        
        
        @property { Array<BrandCompanyInfo> } [items]
        
        @property { Pagination } [page]
        
         
    */

/**
        @typedef StoreByBrandsRequest
        
        
        @property { number } [companyId]
        
        @property { number } brands
        
        @property { string } [searchText]
        
         
    */

/**
        @typedef StoreByBrandsResponse
        
        
        @property { Array<BrandStoreInfo> } [items]
        
        @property { Pagination } [page]
        
         
    */

/**
        @typedef BrandStoreInfo
        
        
        @property { string } [storeName]
        
        @property { number } [storeId]
        
        @property { string } [storeType]
        
        @property { string } [storeCode]
        
        @property { OptedStoreAddress } [storeAddress]
        
        @property { OptedCompany } [company]
        
         
    */

/**
        @typedef CompanyBrandInfo
        
        
        @property { string } [name]
        
        @property { number } [value]
        
        @property { string } [brandLogoUrl]
        
        @property { string } [brandBannerUrl]
        
        @property { string } [brandBannerPortraitUrl]
        
         
    */

/**
        @typedef BrandsByCompanyResponse
        
        
        @property { CompanyBrandInfo } [brands]
        
         
    */

/**
        @typedef CreateApplicationRequest
        
        
        @property { App } [app]
        
        @property { AppInventory } [configuration]
        
        @property { AppDomain } [domain]
        
         
    */

/**
        @typedef CreateAppResponse
        
        
        @property { Application } [app]
        
        @property { ApplicationInventory } [configuration]
        
         
    */

/**
        @typedef ApplicationsResponse
        
        
        @property { Array<Application> } [items]
        
        @property { Pagination } [page]
        
         
    */

/**
        @typedef MobileAppConfiguration
        
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [appName]
        
        @property { LandingImage } [landingImage]
        
        @property { SplashImage } [splashImage]
        
        @property { string } [application]
        
        @property { string } [platformType]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
        @property { string } [packageName]
        
         
    */

/**
        @typedef LandingImage
        
        
        @property { string } [aspectRatio]
        
        @property { string } [secureUrl]
        
         
    */

/**
        @typedef SplashImage
        
        
        @property { string } [aspectRatio]
        
        @property { string } [secureUrl]
        
         
    */

/**
        @typedef MobileAppConfigRequest
        
        
        @property { string } [appName]
        
        @property { LandingImage } [landingImage]
        
        @property { SplashImage } [splashImage]
        
        @property { boolean } [isActive]
        
         
    */

/**
        @typedef BuildVersionHistory
        
        
        @property { BuildVersion } [versions]
        
        @property { string } [latestAvailableVersionName]
        
         
    */

/**
        @typedef BuildVersion
        
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { string } [platformType]
        
        @property { string } [buildStatus]
        
        @property { string } [versionName]
        
        @property { number } [versionCode]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef AppSupportedCurrency
        
        
        @property { string } [id]
        
        @property { Array<string> } [supportedCurrency]
        
        @property { string } [application]
        
        @property { DefaultCurrency } [defaultCurrency]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
         
    */

/**
        @typedef DefaultCurrency
        
        
        @property { string } [ref]
        
        @property { string } [code]
        
         
    */

/**
        @typedef CurrencyConfig
        
        
        @property { string } [id]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [decimalDigits]
        
        @property { string } [symbol]
        
         
    */

/**
        @typedef DomainAdd
        
        
        @property { string } [name]
        
         
    */

/**
        @typedef DomainAddRequest
        
        
        @property { DomainAdd } [domain]
        
         
    */

/**
        @typedef DomainsResponse
        
        
        @property { Array<Domain> } [domains]
        
         
    */

/**
        @typedef UpdateDomain
        
        
        @property { string } [id]
        
         
    */

/**
        @typedef UpdateDomainTypeRequest
        
        
        @property { UpdateDomain } [domain]
        
        @property { string } [action]
        
         
    */

/**
        @typedef DomainStatusRequest
        
        
        @property { string } [domainUrl]
        
         
    */

/**
        @typedef DomainStatus
        
        
        @property { string } [display]
        
        @property { boolean } [status]
        
         
    */

/**
        @typedef DomainStatusResponse
        
        
        @property { boolean } [connected]
        
        @property { Array<DomainStatus> } [status]
        
         
    */

/**
        @typedef DomainSuggestionsRequest
        
        
        @property { string } [domainUrl]
        
        @property { boolean } [custom]
        
         
    */

/**
        @typedef DomainSuggestion
        
        
        @property { string } name
        
        @property { boolean } [unsupported]
        
        @property { boolean } isAvailable
        
        @property { number } [price]
        
        @property { string } [currency]
        
         
    */

/**
        @typedef DomainSuggestionsResponse
        
        
        @property { Array<DomainSuggestion> } [domains]
        
         
    */

/**
        @typedef GetIntegrationsOptInsResponse
        
        
        @property { IntegrationOptIn } [items]
        
        @property { Pagination } [page]
        
         
    */

/**
        @typedef IntegrationOptIn
        
        
        @property { Validators } [validators]
        
        @property { string } [description]
        
        @property { string } [descriptionHtml]
        
        @property { string } [constants]
        
        @property { Array<Object> } [companies]
        
        @property { Array<string> } [support]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { IntegrationMeta } [meta]
        
        @property { string } [icon]
        
        @property { string } [owner]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [token]
        
        @property { string } [secret]
        
        @property { number } [v]
        
         
    */

/**
        @typedef Validators
        
        
        @property { CompanyValidator } [company]
        
        @property { StoreValidator } [store]
        
        @property { InventoryValidator } [inventory]
        
        @property { OrderValidator } [order]
        
         
    */

/**
        @typedef CompanyValidator
        
        
        @property { JsonSchema } [jsonSchema]
        
        @property { string } [browserScript]
        
         
    */

/**
        @typedef JsonSchema
        
        
        @property { string } [display]
        
        @property { string } [key]
        
        @property { string } [type]
        
        @property { string } [tooltip]
        
         
    */

/**
        @typedef StoreValidator
        
        
        @property { Array<JsonSchema> } [jsonSchema]
        
        @property { string } [browserScript]
        
         
    */

/**
        @typedef InventoryValidator
        
        
        @property { Array<JsonSchema> } [jsonSchema]
        
        @property { string } [browserScript]
        
         
    */

/**
        @typedef OrderValidator
        
        
        @property { Array<JsonSchema> } [jsonSchema]
        
        @property { string } [browserScript]
        
         
    */

/**
        @typedef IntegrationMeta
        
        
        @property { boolean } [isPublic]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */

/**
        @typedef Integration
        
        
        @property { Validators } [validators]
        
        @property { string } [description]
        
        @property { string } [descriptionHtml]
        
        @property { Object } [constants]
        
        @property { Array<Object> } [companies]
        
        @property { Array<string> } [support]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { IntegrationMeta } [meta]
        
        @property { string } [icon]
        
        @property { string } [owner]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [token]
        
        @property { string } [secret]
        
        @property { number } [v]
        
         
    */

/**
        @typedef IntegrationConfigResponse
        
        
        @property { IntegrationLevel } [items]
        
         
    */

/**
        @typedef IntegrationLevel
        
        
        @property { boolean } [opted]
        
        @property { Array<Object> } [permissions]
        
        @property { Array<Object> } [lastPatch]
        
        @property { string } [id]
        
        @property { string } [integration]
        
        @property { string } [level]
        
        @property { number } [uid]
        
        @property { Array<any> } [meta]
        
        @property { string } [token]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
        @property { Object } [data]
        
         
    */

/**
        @typedef OptedStoreIntegration
        
        
        @property { boolean } [otherOpted]
        
        @property { IntegrationOptIn } [otherIntegration]
        
        @property { OtherEntity } [otherEntity]
        
         
    */

/**
        @typedef OtherEntity
        
        
        @property { boolean } [opted]
        
        @property { Array<string> } [permissions]
        
        @property { LastPatch } [lastPatch]
        
        @property { string } [id]
        
        @property { string } [integration]
        
        @property { string } [level]
        
        @property { number } [uid]
        
        @property { OtherEntityData } [data]
        
        @property { Array<Object> } [meta]
        
        @property { string } [token]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef LastPatch
        
        
        @property { string } [op]
        
        @property { string } [path]
        
        @property { string } [value]
        
         
    */

/**
        @typedef OtherEntityData
        
        
        @property { string } [articleIdentifier]
        
         
    */

/**
        @typedef App
        
        
        @property { string } [companyId]
        
        @property { string } [channelType]
        
        @property { ApplicationAuth } [auth]
        
        @property { string } [name]
        
        @property { string } [desc]
        
         
    */

/**
        @typedef AppInventory
        
        
        @property { InventoryBrandRule } [brand]
        
        @property { InventoryStoreRule } [store]
        
        @property { Array<string> } [image]
        
        @property { boolean } [franchiseEnabled]
        
        @property { boolean } [outOfStock]
        
        @property { InventoryPaymentConfig } [payment]
        
        @property { InventoryArticleAssignment } [articleAssignment]
        
         
    */

/**
        @typedef AppDomain
        
        
        @property { string } [name]
        
         
    */

/**
        @typedef CompaniesResponse
        
        
        @property { AppInventoryCompanies } [items]
        
        @property { Pagination } [page]
        
         
    */

/**
        @typedef AppInventoryCompanies
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [companyType]
        
         
    */

/**
        @typedef StoresResponse
        
        
        @property { AppInventoryStores } [items]
        
        @property { Pagination } [page]
        
         
    */

/**
        @typedef AppInventoryStores
        
        
        @property { string } [id]
        
        @property { string } [modifiedOn]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [displayName]
        
        @property { string } [storeType]
        
        @property { string } [storeCode]
        
        @property { number } [companyId]
        
         
    */

/**
        @typedef FilterOrderingStoreRequest
        
        
        @property { boolean } [allStores]
        
        @property { Array<number> } [deployedStores]
        
        @property { string } [q]
        
        @property { number } [pageNo]
        
        @property { number } [pageSize]
        
         
    */

/**
        @typedef DeploymentMeta
        
        
        @property { Array<number> } [deployedStores]
        
        @property { boolean } [allStores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [id]
        
        @property { string } [app]
        
        @property { number } [v]
        
         
    */

/**
        @typedef OrderingStoreConfig
        
        
        @property { DeploymentMeta } [deploymentMeta]
        
         
    */

/**
        @typedef OtherSellerCompany
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */

/**
        @typedef OtherSellerApplication
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [id]
        
        @property { string } [domain]
        
        @property { OtherSellerCompany } [company]
        
        @property { string } [optType]
        
         
    */

/**
        @typedef OtherSellerApplications
        
        
        @property { Array<OtherSellerApplication> } [items]
        
        @property { Pagination } [page]
        
         
    */

/**
        @typedef OptedApplicationResponse
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [id]
        
        @property { string } [domain]
        
        @property { OptedCompany } [company]
        
        @property { OptedInventory } [optedInventory]
        
        @property { OptOutInventory } [optOutInventory]
        
         
    */

/**
        @typedef OptedCompany
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */

/**
        @typedef OptedInventory
        
        
        @property { OptType } [optType]
        
        @property { any } [items]
        
         
    */

/**
        @typedef OptType
        
        
        @property { string } [key]
        
        @property { string } [display]
        
         
    */

/**
        @typedef OptedStore
        
        
        @property { string } [name]
        
        @property { string } [storeCode]
        
        @property { string } [id]
        
        @property { string } [modifiedOn]
        
        @property { number } [uid]
        
        @property { OptedStoreAddress } [address]
        
        @property { string } [displayName]
        
        @property { string } [storeType]
        
        @property { number } [companyId]
        
         
    */

/**
        @typedef OptOutInventory
        
        
        @property { Array<number> } store
        
        @property { Array<number> } company
        
         
    */

/**
        @typedef ProductDetailFeature
        
        
        @property { Array<string> } [similar]
        
        @property { boolean } [sellerSelection]
        
        @property { boolean } [updateProductMeta]
        
        @property { boolean } [requestProduct]
        
         
    */

/**
        @typedef LaunchPage
        
        
        @property { string } [pageType]
        
        @property { string } [params]
        
        @property { string } [query]
        
         
    */

/**
        @typedef LandingPageFeature
        
        
        @property { LaunchPage } [launchPage]
        
        @property { boolean } [continueAsGuest]
        
        @property { string } [loginBtnText]
        
        @property { boolean } [showDomainTextbox]
        
        @property { boolean } [showRegisterBtn]
        
         
    */

/**
        @typedef RegistrationPageFeature
        
        
        @property { boolean } [askStoreAddress]
        
         
    */

/**
        @typedef AppFeature
        
        
        @property { ProductDetailFeature } [productDetail]
        
        @property { LandingPageFeature } [landingPage]
        
        @property { RegistrationPageFeature } [registrationPage]
        
        @property { HomePageFeature } [homePage]
        
        @property { CommonFeature } [common]
        
        @property { CartFeature } [cart]
        
        @property { QrFeature } [qr]
        
        @property { PcrFeature } [pcr]
        
        @property { OrderFeature } [order]
        
        @property { string } [id]
        
        @property { string } [app]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef HomePageFeature
        
        
        @property { boolean } [orderProcessing]
        
         
    */

/**
        @typedef CommonFeature
        
        
        @property { CommunicationOptinDialogFeature } [communicationOptinDialog]
        
        @property { DeploymentStoreSelectionFeature } [deploymentStoreSelection]
        
        @property { ListingPriceFeature } [listingPrice]
        
        @property { ListingPageFeature } [listingPage]
        
        @property { CurrencyFeature } [currency]
        
        @property { RevenueEngineFeature } [revenueEngine]
        
        @property { FeedbackFeature } [feedback]
        
        @property { CompareProductsFeature } [compareProducts]
        
         
    */

/**
        @typedef CommunicationOptinDialogFeature
        
        
        @property { boolean } [visibility]
        
         
    */

/**
        @typedef DeploymentStoreSelectionFeature
        
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ListingPriceFeature
        
        
        @property { string } [value]
        
        @property { string } [sort]
        
         
    */

/**
        @typedef ListingPageFeature
        
        
        @property { string } [sortOn]
        
         
    */

/**
        @typedef CurrencyFeature
        
        
        @property { Array<string> } [value]
        
        @property { string } [type]
        
        @property { string } [defaultCurrency]
        
         
    */

/**
        @typedef RevenueEngineFeature
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef FeedbackFeature
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef CompareProductsFeature
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef CartFeature
        
        
        @property { boolean } [gstInput]
        
        @property { boolean } [staffSelection]
        
        @property { boolean } [placingForCustomer]
        
        @property { boolean } [googleMap]
        
         
    */

/**
        @typedef QrFeature
        
        
        @property { boolean } [application]
        
        @property { boolean } [products]
        
        @property { boolean } [collections]
        
         
    */

/**
        @typedef PcrFeature
        
        
        @property { boolean } [staffSelection]
        
         
    */

/**
        @typedef OrderFeature
        
        
        @property { boolean } [buyAgain]
        
         
    */

/**
        @typedef AppFeatureRequest
        
        
        @property { AppFeature } [feature]
        
         
    */

/**
        @typedef AppFeatureResponse
        
        
        @property { AppFeature } [feature]
        
         
    */

/**
        @typedef Currency
        
        
        @property { string } [id]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [decimalDigits]
        
        @property { string } [symbol]
        
         
    */

/**
        @typedef Domain
        
        
        @property { boolean } [verified]
        
        @property { boolean } [isPrimary]
        
        @property { boolean } [isDefault]
        
        @property { boolean } [isShortlink]
        
        @property { string } [id]
        
        @property { string } [name]
        
         
    */

/**
        @typedef ApplicationWebsite
        
        
        @property { boolean } [enabled]
        
        @property { string } [basepath]
        
         
    */

/**
        @typedef ApplicationCors
        
        
        @property { Array<string> } [domains]
        
         
    */

/**
        @typedef ApplicationAuth
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef ApplicationRedirections
        
        
        @property { string } [from]
        
        @property { string } [redirectTo]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ApplicationMeta
        
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */

/**
        @typedef SecureUrl
        
        
        @property { string } [secureUrl]
        
         
    */

/**
        @typedef Application
        
        
        @property { ApplicationWebsite } [website]
        
        @property { ApplicationCors } [cors]
        
        @property { ApplicationAuth } [auth]
        
        @property { string } [description]
        
        @property { string } [channelType]
        
        @property { number } [cacheTtl]
        
        @property { boolean } [isInternal]
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [owner]
        
        @property { number } [companyId]
        
        @property { string } [token]
        
        @property { Array<ApplicationRedirections> } [redirections]
        
        @property { Array<ApplicationMeta> } [meta]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
        @property { SecureUrl } [banner]
        
        @property { SecureUrl } [logo]
        
        @property { SecureUrl } [favicon]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [appType]
        
        @property { SecureUrl } [mobileLogo]
        
        @property { Domain } [domain]
        
         
    */

/**
        @typedef NotFound
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef UnhandledError
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef InvalidPayloadRequest
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef SuccessMessageResponse
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef InventoryBrandRule
        
        
        @property { string } [criteria]
        
        @property { Array<number> } [brands]
        
         
    */

/**
        @typedef StoreCriteriaRule
        
        
        @property { Array<number> } [companies]
        
        @property { Array<number> } [brands]
        
         
    */

/**
        @typedef InventoryStoreRule
        
        
        @property { string } [criteria]
        
        @property { Array<StoreCriteriaRule> } [rules]
        
        @property { Array<number> } [stores]
        
         
    */

/**
        @typedef InventoryPaymentConfig
        
        
        @property { string } [modeOfPayment]
        
        @property { string } [source]
        
         
    */

/**
        @typedef StorePriorityRule
        
        
        @property { boolean } [enabled]
        
        @property { Array<string> } [storetypeOrder]
        
         
    */

/**
        @typedef ArticleAssignmentRule
        
        
        @property { StorePriorityRule } [storePriority]
        
         
    */

/**
        @typedef InventoryArticleAssignment
        
        
        @property { boolean } [postOrderReassignment]
        
        @property { Array<number> } [enforcedStores]
        
        @property { ArticleAssignmentRule } [rules]
        
         
    */

/**
        @typedef CompanyAboutAddress
        
        
        @property { number } [pincode]
        
        @property { string } [address1]
        
        @property { string } [address2]
        
        @property { string } [city]
        
        @property { string } [state]
        
        @property { string } [country]
        
        @property { string } [addressType]
        
         
    */

/**
        @typedef UserEmail
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [email]
        
         
    */

/**
        @typedef UserPhoneNumber
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { number } [countryCode]
        
        @property { string } [phone]
        
         
    */

/**
        @typedef ApplicationInformation
        
        
        @property { InformationAddress } [address]
        
        @property { InformationSupport } [support]
        
        @property { SocialLinks } [socialLinks]
        
        @property { Links } [links]
        
        @property { string } [copyrightText]
        
        @property { string } [id]
        
        @property { BusinessHighlights } [businessHighlights]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef InformationAddress
        
        
        @property { string } [loc]
        
        @property { Array<string> } [addressLine]
        
        @property { InformationPhone } [phone]
        
        @property { string } [city]
        
        @property { string } [country]
        
        @property { number } [pincode]
        
         
    */

/**
        @typedef InformationPhone
        
        
        @property { string } [code]
        
        @property { string } [number]
        
         
    */

/**
        @typedef InformationSupport
        
        
        @property { Array<string> } [phone]
        
        @property { Array<string> } [email]
        
        @property { string } [timing]
        
         
    */

/**
        @typedef SocialLinks
        
        
        @property { Facebook } [facebook]
        
        @property { Instagram } [instagram]
        
        @property { Twitter } [twitter]
        
        @property { Pinterest } [pinterest]
        
        @property { GooglePlus } [googlePlus]
        
        @property { Youtube } [youtube]
        
        @property { LinkedIn } [linkedIn]
        
        @property { Vimeo } [vimeo]
        
        @property { BlogLink } [blogLink]
        
         
    */

/**
        @typedef Instagram
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef Twitter
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef Pinterest
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef GooglePlus
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef Youtube
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef LinkedIn
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef Vimeo
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef BlogLink
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef Links
        
        
        @property { string } [title]
        
        @property { string } [link]
        
         
    */

/**
        @typedef BusinessHighlights
        
        
        @property { string } [id]
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [subTitle]
        
         
    */

/**
        @typedef ApplicationDetail
        
        
        @property { string } name
        
        @property { string } description
        
        @property { SecureUrl } logo
        
        @property { SecureUrl } mobileLogo
        
        @property { SecureUrl } favicon
        
        @property { SecureUrl } banner
        
        @property { Domain } [domain]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [id]
        
         
    */

/**
        @typedef CurrenciesResponse
        
        
        @property { Array<Currency> } [items]
        
         
    */

/**
        @typedef StoreLatLong
        
        
        @property { string } [type]
        
        @property { Array<number> } [coordinates]
        
         
    */

/**
        @typedef OptedStoreAddress
        
        
        @property { string } [state]
        
        @property { string } [address1]
        
        @property { StoreLatLong } [latLong]
        
        @property { string } [address2]
        
        @property { number } [pincode]
        
        @property { string } [country]
        
        @property { string } [city]
        
         
    */

/**
        @typedef OrderingStore
        
        
        @property { OptedStoreAddress } [address]
        
        @property { string } [id]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [displayName]
        
        @property { string } [storeType]
        
        @property { string } [storeCode]
        
        @property { number } [pincode]
        
        @property { string } [code]
        
         
    */

/**
        @typedef OrderingStores
        
        
        @property { Pagination } [page]
        
        @property { Array<OrderingStore> } [items]
        
        @property { Array<number> } [deployedStores]
        
        @property { boolean } [allStores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [id]
        
        @property { string } [app]
        
        @property { number } [v]
        
         
    */

/**
        @typedef TokenResponse
        
        
        @property { Tokens } [tokens]
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef Tokens
        
        
        @property { Firebase } [firebase]
        
        @property { Moengage } [moengage]
        
        @property { Segment } [segment]
        
        @property { Gtm } [gtm]
        
        @property { Freshchat } [freshchat]
        
        @property { Safetynet } [safetynet]
        
        @property { FyndRewards } [fyndRewards]
        
        @property { Auth } [auth]
        
        @property { GoogleMap } [googleMap]
        
         
    */

/**
        @typedef Firebase
        
        
        @property { Credentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef Credentials
        
        
        @property { Ios } [ios]
        
        @property { Android } [android]
        
        @property { string } [projectId]
        
        @property { string } [gcmSenderId]
        
        @property { string } [applicationId]
        
        @property { string } [apiKey]
        
         
    */

/**
        @typedef Ios
        
        
        @property { string } [applicationId]
        
        @property { string } [apiKey]
        
         
    */

/**
        @typedef Android
        
        
        @property { string } [applicationId]
        
        @property { string } [apiKey]
        
         
    */

/**
        @typedef Moengage
        
        
        @property { MoengageCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef MoengageCredentials
        
        
        @property { string } [appId]
        
         
    */

/**
        @typedef Segment
        
        
        @property { SegmentCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef SegmentCredentials
        
        
        @property { string } [writeKey]
        
         
    */

/**
        @typedef Gtm
        
        
        @property { GtmCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef GtmCredentials
        
        
        @property { string } [apiKey]
        
         
    */

/**
        @typedef Freshchat
        
        
        @property { FreshchatCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef FreshchatCredentials
        
        
        @property { string } [appId]
        
        @property { string } [appKey]
        
        @property { string } [webToken]
        
         
    */

/**
        @typedef Safetynet
        
        
        @property { SafetynetCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef SafetynetCredentials
        
        
        @property { string } [apiKey]
        
         
    */

/**
        @typedef FyndRewards
        
        
        @property { FyndRewardsCredentials } [credentials]
        
         
    */

/**
        @typedef FyndRewardsCredentials
        
        
        @property { string } [publicKey]
        
         
    */

/**
        @typedef Auth
        
        
        @property { Google } [google]
        
        @property { Facebook } [facebook]
        
        @property { Accountkit } [accountkit]
        
         
    */

/**
        @typedef GoogleMap
        
        
        @property { GoogleMapCredentials } [credentials]
        
         
    */

/**
        @typedef GoogleMapCredentials
        
        
        @property { string } [apiKey]
        
         
    */

/**
        @typedef Validation
        
        
        @property { string } [userRegisteredAfter]
        
        @property { boolean } [anonymous]
        
        @property { Array<string> } [appId]
        
         
    */

/**
        @typedef CouponDateMeta
        
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */

/**
        @typedef State
        
        
        @property { boolean } [isDisplay]
        
        @property { boolean } [isArchived]
        
        @property { boolean } [isPublic]
        
         
    */

/**
        @typedef Validity
        
        
        @property { number } [priority]
        
         
    */

/**
        @typedef Rule
        
        
        @property { number } [max]
        
        @property { number } [value]
        
        @property { number } [discountQty]
        
        @property { number } [min]
        
        @property { number } [key]
        
         
    */

/**
        @typedef Ownership
        
        
        @property { string } payableCategory
        
        @property { string } payableBy
        
         
    */

/**
        @typedef Schedule
        
        
        @property { number } [duration]
        
        @property { string } [end]
        
        @property { string } [start]
        
        @property { string } [cron]
        
        @property { Array<Object> } [nextSchedule]
        
         
    */

/**
        @typedef CouponAuthor
        
        
        @property { string } [modifiedBy]
        
        @property { string } [createdBy]
        
         
    */

/**
        @typedef RuleDefinition
        
        
        @property { string } calculateOn
        
        @property { Array<string> } [scope]
        
        @property { boolean } [autoApply]
        
        @property { string } [currencyCode]
        
        @property { boolean } [isExact]
        
        @property { string } valueType
        
        @property { string } type
        
        @property { string } applicableOn
        
         
    */

/**
        @typedef PaymentAllowValue
        
        
        @property { number } [max]
        
         
    */

/**
        @typedef PaymentModes
        
        
        @property { Array<string> } [codes]
        
        @property { Array<string> } [networks]
        
        @property { Array<string> } [types]
        
        @property { PaymentAllowValue } [uses]
        
         
    */

/**
        @typedef PaymentCodes
        
        
        @property { PaymentModes } [upi]
        
        @property { PaymentModes } [ps]
        
        @property { PaymentModes } [wl]
        
        @property { PaymentModes } [pl]
        
        @property { PaymentModes } [nb]
        
        @property { PaymentModes } [qr]
        
        @property { PaymentModes } [card]
        
         
    */

/**
        @typedef BulkBundleRestriction
        
        
        @property { boolean } multiStoreAllowed
        
         
    */

/**
        @typedef UsesRemaining
        
        
        @property { number } [user]
        
        @property { number } [total]
        
        @property { number } [app]
        
         
    */

/**
        @typedef UsesRestriction
        
        
        @property { UsesRemaining } [maximum]
        
        @property { UsesRemaining } [remaining]
        
         
    */

/**
        @typedef PostOrder
        
        
        @property { boolean } [cancellationAllowed]
        
        @property { boolean } [returnAllowed]
        
         
    */

/**
        @typedef PriceRange
        
        
        @property { number } [max]
        
        @property { number } [min]
        
         
    */

/**
        @typedef Restrictions
        
        
        @property { boolean } [couponAllowed]
        
        @property { Array<string> } [platforms]
        
        @property { Array<number> } [orderingStores]
        
        @property { PaymentCodes } [payments]
        
        @property { BulkBundleRestriction } [bulkBundle]
        
        @property { UsesRestriction } [uses]
        
        @property { PostOrder } [postOrder]
        
        @property { PriceRange } [priceRange]
        
         
    */

/**
        @typedef Identifier
        
        
        @property { Array<number> } [categoryId]
        
        @property { Array<string> } [articleId]
        
        @property { Array<number> } [storeId]
        
        @property { Array<number> } [companyId]
        
        @property { Array<string> } [collectionId]
        
        @property { Array<string> } [userId]
        
        @property { Array<number> } [brandId]
        
        @property { Array<number> } [itemId]
        
         
    */

/**
        @typedef DisplayMetaDict
        
        
        @property { string } [subtitle]
        
        @property { string } [title]
        
         
    */

/**
        @typedef DisplayMeta
        
        
        @property { string } [subtitle]
        
        @property { string } [title]
        
        @property { string } [description]
        
        @property { DisplayMetaDict } [auto]
        
        @property { DisplayMetaDict } [apply]
        
        @property { DisplayMetaDict } [remove]
        
         
    */

/**
        @typedef CouponAdd
        
        
        @property { string } typeSlug
        
        @property { Validation } [validation]
        
        @property { CouponDateMeta } [dateMeta]
        
        @property { State } [state]
        
        @property { Validity } validity
        
        @property { Array<Rule> } rule
        
        @property { string } code
        
        @property { Ownership } ownership
        
        @property { Schedule } [schedule]
        
        @property { CouponAuthor } [author]
        
        @property { Array<string> } [tags]
        
        @property { RuleDefinition } ruleDefinition
        
        @property { Restrictions } [restrictions]
        
        @property { Identifier } identifiers
        
        @property { Action } [action]
        
        @property { DisplayMeta } displayMeta
        
         
    */

/**
        @typedef CouponsResponse
        
        
        @property { Pagination } [page]
        
        @property { CouponAdd } [items]
        
         
    */

/**
        @typedef OperationErrorResponse
        
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef CouponUpdate
        
        
        @property { string } typeSlug
        
        @property { Validation } [validation]
        
        @property { CouponDateMeta } [dateMeta]
        
        @property { State } [state]
        
        @property { Validity } validity
        
        @property { Array<Rule> } rule
        
        @property { string } code
        
        @property { Ownership } ownership
        
        @property { Schedule } [schedule]
        
        @property { CouponAuthor } [author]
        
        @property { Array<string> } [tags]
        
        @property { RuleDefinition } ruleDefinition
        
        @property { Restrictions } [restrictions]
        
        @property { Identifier } identifiers
        
        @property { Action } [action]
        
        @property { DisplayMeta } displayMeta
        
         
    */

/**
        @typedef CouponPartialUpdate
        
        
        @property { Schedule } [schedule]
        
        @property { boolean } [archive]
        
         
    */

/**
        @typedef StoreMapping
        
        
        @property { string } [enabled]
        
        @property { string } [marketplaceStoreId]
        
        @property { number } [storeId]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef AllChannels
        
        
        @property { boolean } [mkpName]
        
         
    */

/**
        @typedef MyntraPayload
        
        
        @property { string } [merchantId]
        
        @property { string } [secretKey]
        
         
    */

/**
        @typedef AmazonPayload
        
        
        @property { string } [sellerId]
        
        @property { string } [mwsAuthToken]
        
         
    */

/**
        @typedef FlipkartPayload
        
        
        @property { string } [code]
        
         
    */

/**
        @typedef TatacliqPayload
        
        
        @property { string } [userName]
        
        @property { string } [password]
        
        @property { string } [merchantId]
        
         
    */

/**
        @typedef AjioPayload
        
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { string } [clientIp]
        
         
    */

/**
        @typedef InventoryConfig
        
        
        @property { boolean } [inventory]
        
        @property { boolean } [price]
        
         
    */

/**
        @typedef StoreMappingPayload
        
        
        @property { boolean } [storeMappingEnabled]
        
        @property { Array<StoreMapping> } [storeMapping]
        
         
    */

/**
        @typedef StatusPayload
        
        
        @property { boolean } [isActive]
        
         
    */

/**
        @typedef StatusResp
        
        
        @property { boolean } [isActive]
        
         
    */

/**
        @typedef SyncPayload
        
        
        @property { string } [modifiedSince]
        
         
    */

/**
        @typedef SyncResp
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef MkpResp
        
        
        @property { string } [marketplace]
        
        @property { number } [worker]
        
        @property { string } [workerAssigned]
        
        @property { boolean } [isActive]
        
        @property { boolean } [storeMappingEnabled]
        
        @property { number } [companyId]
        
        @property { Object } [configuration]
        
        @property { Array<StoreMapping> } [storeMapping]
        
         
    */

/**
        @typedef StatGroup
        
        
        @property { string } [key]
        
        @property { string } [url]
        
        @property { string } [title]
        
         
    */

/**
        @typedef StatsGroups
        
        
        @property { Array<StatGroup> } [groups]
        
         
    */

/**
        @typedef StatsGroupComponent
        
        
        @property { string } [key]
        
        @property { string } [url]
        
        @property { string } [title]
        
        @property { string } [type]
        
        @property { Object } [filters]
        
         
    */

/**
        @typedef StatsGroupComponents
        
        
        @property { string } [title]
        
        @property { Array<StatsGroupComponent> } [components]
        
         
    */

/**
        @typedef StatsRes
        
        
        @property { string } [key]
        
        @property { string } [title]
        
        @property { string } [type]
        
        @property { Object } [data]
        
         
    */

/**
        @typedef ReceivedAt
        
        
        @property { string } [value]
        
         
    */

/**
        @typedef AbandonCartsDetail
        
        
        @property { string } [propertiesCartId]
        
        @property { string } [contextTraitsFirstName]
        
        @property { string } [contextTraitsLastName]
        
        @property { string } [contextTraitsPhoneNumber]
        
        @property { string } [contextTraitsEmail]
        
        @property { string } [contextAppApplicationId]
        
        @property { string } [propertiesBreakupValuesRawTotal]
        
        @property { ReceivedAt } [receivedAt]
        
         
    */

/**
        @typedef AbdCartPage
        
        
        @property { string } [type]
        
        @property { string } [size]
        
        @property { string } [current]
        
        @property { string } [hasNext]
        
        @property { string } [itemTotal]
        
         
    */

/**
        @typedef AbandonCartsList
        
        
        @property { Array<AbandonCartsDetail> } [items]
        
        @property { string } [cartTotal]
        
        @property { AbdCartPage } [page]
        
         
    */

/**
        @typedef AbandonCartDetail
        
        
        @property { string } [id]
        
        @property { string } [userId]
        
        @property { string } [cartValue]
        
        @property { Array<Object> } [articles]
        
        @property { Object } [breakup]
        
        @property { Object } [address]
        
         
    */

/**
        @typedef ExportJobReq
        
        
        @property { string } [marketplaceName]
        
        @property { string } [startTime]
        
        @property { string } [endTime]
        
        @property { string } [eventType]
        
         
    */

/**
        @typedef ExportJobRes
        
        
        @property { string } [status]
        
        @property { string } [jobId]
        
         
    */

/**
        @typedef ExportJobStatusRes
        
        
        @property { string } [status]
        
        @property { string } [jobId]
        
        @property { string } [downloadUrl]
        
         
    */

/**
        @typedef GetLogsListReq
        
        
        @property { string } [marketplaceName]
        
        @property { string } [startDate]
        
        @property { string } [companyId]
        
        @property { string } [endDate]
        
         
    */

/**
        @typedef MkpLogsResp
        
        
        @property { string } [startTimeIso]
        
        @property { string } [endTimeIso]
        
        @property { string } [eventType]
        
        @property { string } [traceId]
        
        @property { string } [count]
        
        @property { string } [status]
        
         
    */

/**
        @typedef LogsPage
        
        
        @property { string } [type]
        
        @property { string } [size]
        
        @property { string } [current]
        
        @property { string } [hasNext]
        
        @property { string } [itemTotal]
        
         
    */

/**
        @typedef GetLogsListRes
        
        
        @property { Array<MkpLogsResp> } [items]
        
        @property { LogsPage } [page]
        
         
    */

/**
        @typedef SearchLogReq
        
        
        @property { string } [marketplaceName]
        
        @property { string } [startDate]
        
        @property { string } [companyId]
        
        @property { string } [endDate]
        
        @property { string } [identifier]
        
        @property { string } [identifierValue]
        
         
    */

/**
        @typedef LogInfo
        
        
        @property { string } [id]
        
        @property { string } [status]
        
        @property { string } [eventType]
        
        @property { string } [marketplaceName]
        
        @property { string } [event]
        
        @property { string } [traceId]
        
        @property { number } [companyId]
        
        @property { number } [brandId]
        
        @property { string } [storeCode]
        
        @property { number } [storeId]
        
        @property { number } [itemId]
        
        @property { string } [articleId]
        
        @property { string } [sellerIdentifier]
        
         
    */

/**
        @typedef SearchLogRes
        
        
        @property { Array<LogInfo> } [items]
        
        @property { LogsPage } [page]
        
         
    */

class Lead {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
    * @description: Gets the list of company level tickets and/or ticket filters
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
    * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
    * @param {string} [arg.q] - Search through ticket titles and description
    * @param {string} [arg.status] - Filter tickets on status
    * @param {string} [arg.priority] - Filter tickets on priority
    * @param {string} [arg.category] - Filter tickets on category
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getTickets({
    items,
    filters,
    q,
    status,
    priority,
    category,
    pageNo,
    pageSize,
  } = {}) {
    const { error } = LeadValidator.getTickets().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["items"] = items;
    queryObj["filters"] = filters;
    queryObj["q"] = q;
    queryObj["status"] = status;
    queryObj["priority"] = priority;
    queryObj["category"] = category;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
    * @description: Gets the list of company level tickets and/or ticket filters
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
    * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
    * @param {string} [arg.q] - Search through ticket titles and description
    * @param {string} [arg.status] - Filter tickets on status
    * @param {string} [arg.priority] - Filter tickets on priority
    * @param {string} [arg.category] - Filter tickets on category
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getTicketsPaginator({
    items,
    filters,
    q,
    status,
    priority,
    category,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getTickets({
        items: items,
        filters: filters,
        q: q,
        status: status,
        priority: priority,
        category: category,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   *
   * @summary: Creates a company level ticket
   * @description: Creates a company level ticket
   * @param {Object} arg - arg object.
   * @param {AddTicketPayload} arg.body
   **/
  createTicket({ body } = {}) {
    const { error } = LeadValidator.createTicket().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Retreives ticket details of a company level ticket with ticket ID
    * @description: Retreives ticket details of a company level ticket
    * @param {Object} arg - arg object.
    * @param {string} arg.ticketId - Tiket ID of the ticket to be fetched
    
    **/
  getTicket({ ticketId } = {}) {
    const { error } = LeadValidator.getTicket().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket/${ticketId}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Edits ticket details of a company level ticket
   * @description: Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
   * @param {Object} arg - arg object.
   * @param {string} arg.ticketId - Ticket ID of ticket to be edited
   * @param {EditTicketPayload} arg.body
   **/
  editTicket({ ticketId, body } = {}) {
    const { error } = LeadValidator.editTicket().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket/${ticketId}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create history for specific company level ticket
   * @description: Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
   * @param {Object} arg - arg object.
   * @param {string} arg.ticketId - Ticket ID for which history is created
   * @param {TicketHistoryPayload} arg.body
   **/
  createHistory({ ticketId, body } = {}) {
    const { error } = LeadValidator.createHistory().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket/${ticketId}/history`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Gets history list for specific company level ticket
    * @description: Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
    * @param {Object} arg - arg object.
    * @param {string} arg.ticketId - Ticket ID for which history is to be fetched
    
    **/
  getTicketHistory({ ticketId } = {}) {
    const { error } = LeadValidator.getTicketHistory().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket/${ticketId}/history`,
      queryObj,
      undefined
    );
  }
}

class Payment {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: Get All Payouts
    * @description: Get All Payouts
    * @param {Object} arg - arg object.
    * @param {string} [arg.uniqueExternalId] - Fetch payouts using unique external id
    
    **/
  getAllPayouts({ uniqueExternalId } = {}) {
    const { error } = PaymentValidator.getAllPayouts().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["unique_external_id"] = uniqueExternalId;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Save Payout
   * @description: Save Payout
   * @param {Object} arg - arg object.
   * @param {PayoutRequest} arg.body
   **/
  savePayout({ body } = {}) {
    const { error } = PaymentValidator.savePayout().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update Payout
   * @description: Update Payout
   * @param {Object} arg - arg object.
   * @param {string} arg.uniqueTransferNo - Unique transfer id
   * @param {PayoutRequest} arg.body
   **/
  updatePayout({ uniqueTransferNo, body } = {}) {
    const { error } = PaymentValidator.updatePayout().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts/${uniqueTransferNo}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Partial Update Payout
   * @description: Partial Update Payout
   * @param {Object} arg - arg object.
   * @param {string} arg.uniqueTransferNo - Unique transfer id
   * @param {UpdatePayoutRequest} arg.body
   **/
  activateAndDectivatePayout({ uniqueTransferNo, body } = {}) {
    const {
      error,
    } = PaymentValidator.activateAndDectivatePayout().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts/${uniqueTransferNo}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete Payout
    * @description: Delete Payout
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueTransferNo - Unique transfer id
    
    **/
  deletePayout({ uniqueTransferNo } = {}) {
    const { error } = PaymentValidator.deletePayout().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts/${uniqueTransferNo}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List Subscription Payment Method
    * @description: Get all  Subscription  Payment Method
    * @param {Object} arg - arg object.
    
    **/
  getSubscriptionPaymentMethod({} = {}) {
    const {
      error,
    } = PaymentValidator.getSubscriptionPaymentMethod().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/subscription/methods`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Delete Subscription Payment Method
    * @description: Uses this api to Delete Subscription Payment Method
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueExternalId - 
    * @param {string} arg.paymentMethodId - 
    
    **/
  deleteSubscriptionPaymentMethod({ uniqueExternalId, paymentMethodId } = {}) {
    const {
      error,
    } = PaymentValidator.deleteSubscriptionPaymentMethod().validate(
      arguments[0],
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["unique_external_id"] = uniqueExternalId;
    queryObj["payment_method_id"] = paymentMethodId;

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/subscription/methods`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List Subscription Config
    * @description: Get all  Subscription Config details
    * @param {Object} arg - arg object.
    
    **/
  getSubscriptionConfig({} = {}) {
    const {
      error,
    } = PaymentValidator.getSubscriptionConfig().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/subscription/configs`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Save Subscription Setup Intent
   * @description: Uses this api to Save Subscription Setup Intent
   * @param {Object} arg - arg object.
   * @param {SaveSubscriptionSetupIntentRequest} arg.body
   **/
  saveSubscriptionSetupIntent({ body } = {}) {
    const {
      error,
    } = PaymentValidator.saveSubscriptionSetupIntent().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/subscription/setup/intent`,
      queryObj,
      body
    );
  }
}

class Order {
  constructor(config) {
    this.config = config;
  }

  /**
   *
   * @summary: Update status of Shipment
   * @description: Update Shipment Status
   * @param {Object} arg - arg object.
   * @param {UpdateShipmentStatusBody} arg.body
   **/
  shipmentStatusUpdate({ body } = {}) {
    const {
      error,
    } = OrderValidator.shipmentStatusUpdate().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order/v1.0/company/${this.config.companyId}/actions/status`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get Activity Status
    * @description: Get Activity Status
    * @param {Object} arg - arg object.
    * @param {string} arg.bagId - Bag Id
    
    **/
  activityStatus({ bagId } = {}) {
    const { error } = OrderValidator.activityStatus().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["bag_id"] = bagId;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/actions/activity/status`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update Store Process-Shipment
   * @description: Update Store Process-Shipment
   * @param {Object} arg - arg object.
   * @param {UpdateProcessShipmenstRequestBody} arg.body
   **/
  storeProcessShipmentUpdate({ body } = {}) {
    const {
      error,
    } = OrderValidator.storeProcessShipmentUpdate().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order/v1.0/company/${this.config.companyId}/actions/store/process-shipments`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get Orders for company based on Company Id
    * @description: Get Orders
    * @param {Object} arg - arg object.
    * @param {string} [arg.pageNo] - Current page number
    * @param {string} [arg.pageSize] - Page limit
    * @param {string} [arg.fromDate] - From Date
    * @param {string} [arg.toDate] - To Date
    * @param {string} [arg.q] - Keyword for Search
    * @param {string} [arg.stage] - Specefic Order Stage
    * @param {string} [arg.salesChannels] - Selected Sales Channel
    * @param {string} [arg.orderId] - Order Id
    * @param {string} [arg.stores] - Selected Stores
    * @param {string} [arg.status] - Status of order
    * @param {boolean} [arg.shortenUrls] - Shorten URL option
    * @param {string} [arg.filterType] - Filters
    
    **/
  getOrdersByCompanyId({
    pageNo,
    pageSize,
    fromDate,
    toDate,
    q,
    stage,
    salesChannels,
    orderId,
    stores,
    status,
    shortenUrls,
    filterType,
  } = {}) {
    const {
      error,
    } = OrderValidator.getOrdersByCompanyId().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["from_date"] = fromDate;
    queryObj["to_date"] = toDate;
    queryObj["q"] = q;
    queryObj["stage"] = stage;
    queryObj["sales_channels"] = salesChannels;
    queryObj["order_id"] = orderId;
    queryObj["stores"] = stores;
    queryObj["status"] = status;
    queryObj["shorten_urls"] = shortenUrls;
    queryObj["filter_type"] = filterType;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/orders`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get Ping
    * @description: Get Ping
    * @param {Object} arg - arg object.
    
    **/
  getPing({} = {}) {
    const { error } = OrderValidator.getPing().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/ping`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get Voice Callback
    * @description: Voice Callback
    * @param {Object} arg - arg object.
    
    **/
  voiceCallback({} = {}) {
    const { error } = OrderValidator.voiceCallback().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/voice/callback`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get Voice Click to Call
    * @description: Voice Click to Call
    * @param {Object} arg - arg object.
    * @param {string} arg.caller - Caller contact number
    * @param {string} arg.receiver - Receiver contact number
    
    **/
  voiceClickToCall({ caller, receiver } = {}) {
    const { error } = OrderValidator.voiceClickToCall().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["caller"] = caller;
    queryObj["receiver"] = receiver;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/voice/click-to-call`,
      queryObj,
      undefined
    );
  }
}

class CompanyProfile {
  constructor(config) {
    this.config = config;
  }

  /**
   *
   * @summary: Edit company profile
   * @description: This API allows to edit the company profile of the seller account.
   * @param {Object} arg - arg object.
   * @param {CompanyStoreSerializerRequest} arg.body
   **/
  updateCompany({ body } = {}) {
    const {
      error,
    } = CompanyProfileValidator.updateCompany().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get company profile
    * @description: This API allows to view the company profile of the seller account.
    * @param {Object} arg - arg object.
    
    **/
  cbsOnboardGet({} = {}) {
    const {
      error,
    } = CompanyProfileValidator.cbsOnboardGet().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get company metrics
    * @description: This API allows to view the company metrics, i.e. the status of its brand and stores. Also its allows to view the number of products, company documents & store documents which are verified and unverified.
    * @param {Object} arg - arg object.
    
    **/
  getCompanyMetrics({} = {}) {
    const {
      error,
    } = CompanyProfileValidator.getCompanyMetrics().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/metrics`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Edit a brand.
   * @description: This API allows to edit meta of a brand.
   * @param {Object} arg - arg object.
   * @param {string} arg.brandId - Id of the brand to be viewed.
   * @param {CreateUpdateBrandRequestSerializer} arg.body
   **/
  editBrand({ brandId, body } = {}) {
    const { error } = CompanyProfileValidator.editBrand().validate(
      arguments[0],
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/brand/${brandId}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get a single brand.
    * @description: This API helps to get data associated to a particular brand.
    * @param {Object} arg - arg object.
    * @param {string} arg.brandId - Id of the brand to be viewed.
    
    **/
  getBrand({ brandId } = {}) {
    const { error } = CompanyProfileValidator.getBrand().validate(
      arguments[0],
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/brand/${brandId}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create a Brand.
   * @description: This API allows to create a brand associated to a company.
   * @param {Object} arg - arg object.
   * @param {CreateUpdateBrandRequestSerializer} arg.body
   **/
  createBrand({ body } = {}) {
    const {
      error,
    } = CompanyProfileValidator.createBrand().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/brand`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get brands associated to a company
    * @description: This API helps to get view brands associated to a particular company.
    * @param {Object} arg - arg object.
    
    **/
  getBrands({} = {}) {
    const { error } = CompanyProfileValidator.getBrands().validate(
      arguments[0],
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/company-brand`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create a company brand mapping.
   * @description: This API allows to create a company brand mapping, for a already existing brand in the system.
   * @param {Object} arg - arg object.
   * @param {CompanyBrandPostRequestSerializer} arg.body
   **/
  createBrand({ body } = {}) {
    const {
      error,
    } = CompanyProfileValidator.createBrand().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/company-brand`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get list of locations
    * @description: This API allows to view all the locations asscoiated to a company.
    * @param {Object} arg - arg object.
    * @param {string} [arg.storeType] - Helps to sort the location list on the basis of location type.
    * @param {string} [arg.q] - Query that is to be searched.
    * @param {string} [arg.stage] - to filter companies on basis of verified or unverified companies.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    
    **/
  getLocations({ storeType, q, stage, pageNo, pageSize } = {}) {
    const {
      error,
    } = CompanyProfileValidator.getLocations().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["store_type"] = storeType;
    queryObj["q"] = q;
    queryObj["stage"] = stage;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/location`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create a location asscoiated to a company.
   * @description: This API allows to create a location associated to a company.
   * @param {Object} arg - arg object.
   * @param {LocationSerializer} arg.body
   **/
  createLocation({ body } = {}) {
    const {
      error,
    } = CompanyProfileValidator.createLocation().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/location`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Edit a location asscoiated to a company.
   * @description: This API allows to edit a location associated to a company.
   * @param {Object} arg - arg object.
   * @param {string} arg.locationId - Id of the location which you want to edit.
   * @param {LocationSerializer} arg.body
   **/
  updateLocation({ locationId, body } = {}) {
    const {
      error,
    } = CompanyProfileValidator.updateLocation().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/location/${locationId}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get details of a specific location.
    * @description: This API helps to get data associated to a specific location.
    * @param {Object} arg - arg object.
    * @param {string} arg.locationId - Id of the location which you want to view.
    
    **/
  getLocationDetail({ locationId } = {}) {
    const {
      error,
    } = CompanyProfileValidator.getLocationDetail().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/location/${locationId}`,
      queryObj,
      undefined
    );
  }
}

class Assets {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
    * @description: Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `startUpload`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `completeUpload` api to complete the upload process.
This operation will return the url for the uploaded file.

    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    * @param {StartRequest} arg.body
    **/
  startUpload({ namespace, body } = {}) {
    const { error } = AssetsValidator.startUpload().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/namespaces/${namespace}/upload/start/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
    * @description: Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `startUpload`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `completeUpload` api to complete the upload process.
This operation will return the url for the uploaded file.

    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    * @param {StartResponse} arg.body
    **/
  completeUpload({ namespace, body } = {}) {
    const { error } = AssetsValidator.completeUpload().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/namespaces/${namespace}/upload/complete/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Explain here
   * @description: Describe here
   * @param {Object} arg - arg object.
   * @param {SignUrlRequest} arg.body
   **/
  getSignUrls({ body } = {}) {
    const { error } = AssetsValidator.getSignUrls().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/sign-urls/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Copy Files
   * @description: Copy Files
   * @param {Object} arg - arg object.
   * @param {boolean} [arg.sync] - sync
   * @param {BulkRequest} arg.body
   **/
  copyFiles({ body, sync } = {}) {
    const { error } = AssetsValidator.copyFiles().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["sync"] = sync;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/uploads/copy/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Browse Files
    * @description: Browse Files
    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    
    **/
  browse({ namespace } = {}) {
    const { error } = AssetsValidator.browse().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/namespaces/${namespace}/browse/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Browse Files
    * @description: Browse Files
    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    
    **/
  browsePaginator({ namespace } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.browse({
        namespace: namespace,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: Proxy
    * @description: Proxy
    * @param {Object} arg - arg object.
    * @param {string} arg.url - url
    
    **/
  proxy({ url } = {}) {
    const { error } = AssetsValidator.proxy().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["url"] = url;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/proxy/`,
      queryObj,
      undefined
    );
  }
}

class Inventory {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: Get Job Configs For A Company
    * @description: REST Endpoint that returns all job configs for a company
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Page Number
    * @param {number} [arg.pageSize] - Page Size
    
    **/
  getJobsByCompany({ pageNo, pageSize } = {}) {
    const {
      error,
    } = InventoryValidator.getJobsByCompany().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/v1.0/company/${this.config.companyId}/jobs`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Updates An Existing Job Config
   * @description: REST Endpoint that updates a job config
   * @param {Object} arg - arg object.
   * @param {string} [arg.xUserData] -
   * @param {JobConfigDTO} arg.body
   **/
  updateJob({ body, xUserData } = {}) {
    const { error } = InventoryValidator.updateJob().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/v1.0/company/${this.config.companyId}/jobs`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Creates A New Job Config
   * @description: REST Endpoint that creates a new job config
   * @param {Object} arg - arg object.
   * @param {string} [arg.xUserData] -
   * @param {JobConfigDTO} arg.body
   **/
  createJob({ body, xUserData } = {}) {
    const { error } = InventoryValidator.createJob().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/v1.0/company/${this.config.companyId}/jobs`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get Job Configs By Company And Integration
    * @description: REST Endpoint that returns all job configs by company And integration
    * @param {Object} arg - arg object.
    * @param {string} arg.integrationId - Integration Id
    * @param {number} [arg.pageNo] - Page Number
    * @param {number} [arg.pageSize] - Page Size
    
    **/
  getJobByCompanyAndIntegration({ integrationId, pageNo, pageSize } = {}) {
    const {
      error,
    } = InventoryValidator.getJobByCompanyAndIntegration().validate(
      arguments[0],
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/v1.0/company/${this.config.companyId}/jobs/integration/${integrationId}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get Job Configs Defaults
    * @description: REST Endpoint that returns default fields job configs by company And integration
    * @param {Object} arg - arg object.
    
    **/
  getJobConfigDefaults({} = {}) {
    const {
      error,
    } = InventoryValidator.getJobConfigDefaults().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/v1.0/company/${this.config.companyId}/jobs/defaults`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get Job Config By Code
    * @description: REST Endpoint that returns job config by code
    * @param {Object} arg - arg object.
    * @param {string} arg.code - Job Code
    
    **/
  getJobByCode({ code } = {}) {
    const { error } = InventoryValidator.getJobByCode().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/v1.0/company/${this.config.companyId}/jobs/code/${code}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get Job Codes By Company And Integration
    * @description: REST Endpoint that returns all job codes by company And integration
    * @param {Object} arg - arg object.
    * @param {string} arg.integrationId - Integration Id
    * @param {number} [arg.pageNo] - Page Number
    * @param {number} [arg.pageSize] - Page Size
    
    **/
  getJobCodesByCompanyAndIntegration({ integrationId, pageNo, pageSize } = {}) {
    const {
      error,
    } = InventoryValidator.getJobCodesByCompanyAndIntegration().validate(
      arguments[0],
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/v1.0/company/${this.config.companyId}/jobs/code/integration/${integrationId}`,
      queryObj,
      undefined
    );
  }
}

class Configuration {
  constructor(config) {
    this.config = config;
  }

  /**
   *
   * @summary: Create application
   * @description: Create new application
   * @param {Object} arg - arg object.
   * @param {CreateApplicationRequest} arg.body
   **/
  createApplication({ body } = {}) {
    const {
      error,
    } = ConfigurationValidator.createApplication().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get list of application under company
    * @description: Get list of application under company
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - 
    * @param {number} [arg.pageSize] - 
    * @param {Object} [arg.q] - Url encoded object used as mongodb query
    
    **/
  getApplications({ pageNo, pageSize, q } = {}) {
    const {
      error,
    } = ConfigurationValidator.getApplications().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get all currencies
    * @description: Get all currencies
    * @param {Object} arg - arg object.
    
    **/
  getCurrencies({} = {}) {
    const {
      error,
    } = ConfigurationValidator.getCurrencies().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/currencies`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Check domain availibility before linking to application
   * @description: Check domain availibility before linking to application. Also sends domain suggestions with similar to queried domain. \ Custom domain search is currently powered by GoDaddy provider.
   * @param {Object} arg - arg object.
   * @param {DomainSuggestionsRequest} arg.body
   **/
  getDomainAvailibility({ body } = {}) {
    const {
      error,
    } = ConfigurationValidator.getDomainAvailibility().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/domain/suggestions`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get integration data
    * @description: Get integration data
    * @param {Object} arg - arg object.
    * @param {number} arg.id - Integration id
    
    **/
  getIntegrationById({ id } = {}) {
    const {
      error,
    } = ConfigurationValidator.getIntegrationById().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get all available integration opt-ins
    * @description: Get all available integration opt-ins
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    
    **/
  getAvailableOptIns({ pageNo, pageSize } = {}) {
    const {
      error,
    } = ConfigurationValidator.getAvailableOptIns().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration-opt-in/available`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get company/store level integration opt-ins
    * @description: Get company/store level integration opt-ins
    * @param {Object} arg - arg object.
    * @param {string} arg.level - Integration level
    * @param {number} arg.uid - Integration level uid
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    
    **/
  getSelectedOptIns({ level, uid, pageNo, pageSize } = {}) {
    const {
      error,
    } = ConfigurationValidator.getSelectedOptIns().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration-opt-in/selected/${level}/${uid}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get integration level config
    * @description: Get integration level config
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Integration id
    * @param {string} arg.level - Integration level
    
    **/
  getIntegrationLevelConfig({ id, level } = {}) {
    const {
      error,
    } = ConfigurationValidator.getIntegrationLevelConfig().validate(
      arguments[0],
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration-opt-in/configuration/${id}/${level}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get level data for integration
    * @description: Get level data for integration
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Integration id
    * @param {string} arg.level - Integration level
    * @param {number} arg.uid - Integration level uid
    
    **/
  getIntegrationByLevelId({ id, level, uid } = {}) {
    const {
      error,
    } = ConfigurationValidator.getIntegrationByLevelId().validate(
      arguments[0],
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration-opt-in/configuration/${id}/${level}/${uid}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Check store has active integration
    * @description: API checks if a store is already opted in any other integrations
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Integration id
    * @param {string} arg.level - Integration level
    * @param {number} arg.uid - Integration level uid
    
    **/
  getLevelActiveIntegrations({ id, level, uid } = {}) {
    const {
      error,
    } = ConfigurationValidator.getLevelActiveIntegrations().validate(
      arguments[0],
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration-opt-in/check/configuration/${id}/${level}/${uid}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get brands by company
    * @description: Get brands by company
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - Search text for brand name
    
    **/
  getBrandsByCompany({ q } = {}) {
    const {
      error,
    } = ConfigurationValidator.getBrandsByCompany().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/inventory/brands-by-companies`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Get company by brand uids
   * @description: Get company by brand uids
   * @param {Object} arg - arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {CompanyByBrandsRequest} arg.body
   **/
  getCompanyByBrands({ body, pageNo, pageSize } = {}) {
    const {
      error,
    } = ConfigurationValidator.getCompanyByBrands().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/inventory/companies-by-brands`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Get stores by brand uids
   * @description: Get stores by brand uids
   * @param {Object} arg - arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {StoreByBrandsRequest} arg.body
   **/
  getStoreByBrands({ body, pageNo, pageSize } = {}) {
    const {
      error,
    } = ConfigurationValidator.getStoreByBrands().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/inventory/stores-by-brands`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get other seller applications
    * @description: Get other seller applications who has opted current company as inventory
    * @param {Object} arg - arg object.
    
    **/
  getOtherSellerApplications({} = {}) {
    const {
      error,
    } = ConfigurationValidator.getOtherSellerApplications().validate(
      arguments[0],
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/other-seller-applications/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get other seller applications
    * @description: Get other seller application
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Application Id
    
    **/
  getOtherSellerApplicationById({ id } = {}) {
    const {
      error,
    } = ConfigurationValidator.getOtherSellerApplicationById().validate(
      arguments[0],
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/other-seller-applications/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Opt out company or store from other seller application
   * @description: Opt out company or store from other seller application
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Application Id
   * @param {OptOutInventory} arg.body
   **/
  optOutFromApplication({ id, body } = {}) {
    const {
      error,
    } = ConfigurationValidator.optOutFromApplication().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/other-seller-applications/${id}/opt_out`,
      queryObj,
      body
    );
  }
}

class Marketplaces {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: Get available marketplace channels
    * @description: Get available marketplace channels
    * @param {Object} arg - arg object.
    
    **/
  getAvailableChannels({} = {}) {
    const {
      error,
    } = MarketplacesValidator.getAvailableChannels().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/all-channels`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get all registered marketplace channels for a seller
    * @description: Get all registered marketplace channels for a seller
    * @param {Object} arg - arg object.
    
    **/
  getChannels({} = {}) {
    const { error } = MarketplacesValidator.getChannels().validate(
      arguments[0],
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get registered marketplace channel for a seller
    * @description: Get registered marketplace channel for a seller
    * @param {Object} arg - arg object.
    * @param {string} arg.channel - Name of marketplace channel
    
    **/
  getChannel({ channel } = {}) {
    const { error } = MarketplacesValidator.getChannel().validate(
      arguments[0],
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${channel}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create Myntra marketplace channel for a seller
   * @description: Create Myntra marketplace channel for a seller
   * @param {Object} arg - arg object.
   * @param {MyntraPayload} arg.body
   **/
  registerMyntraChannel({ body } = {}) {
    const {
      error,
    } = MarketplacesValidator.registerMyntraChannel().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/myntra_in`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update Myntra marketplace channel credentials for a seller
   * @description: Update Myntra marketplace channel credentials for a seller
   * @param {Object} arg - arg object.
   * @param {MyntraPayload} arg.body
   **/
  updateMyntraChannelCredentials({ body } = {}) {
    const {
      error,
    } = MarketplacesValidator.updateMyntraChannelCredentials().validate(
      arguments[0],
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/myntra_in`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create Amazon marketplace channel for a seller
   * @description: Create Amazon marketplace channel for a seller
   * @param {Object} arg - arg object.
   * @param {AmazonPayload} arg.body
   **/
  registerAmazonChannel({ body } = {}) {
    const {
      error,
    } = MarketplacesValidator.registerAmazonChannel().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/amazon_in`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update Amazon marketplace channel credentials for a seller
   * @description: Update Amazon marketplace channel credentials for a seller
   * @param {Object} arg - arg object.
   * @param {AmazonPayload} arg.body
   **/
  updateAmazonChannelCredentials({ body } = {}) {
    const {
      error,
    } = MarketplacesValidator.updateAmazonChannelCredentials().validate(
      arguments[0],
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/amazon_in`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create Flipkart / Flipkart Assured marketplace channel for a seller
   * @description: Create Flipkart / Flipkart Assured marketplace channel for a seller
   * @param {Object} arg - arg object.
   * @param {string} arg.flipkartChannel - Name of marketplace channel
   * @param {FlipkartPayload} arg.body
   **/
  registerFlipkartChannel({ flipkartChannel, body } = {}) {
    const {
      error,
    } = MarketplacesValidator.registerFlipkartChannel().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${flipkartChannel}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update Flipkart / Flipkart Assured marketplace channel credentials for a seller
   * @description: Update Flipkart / Flipkart Assured marketplace channel credentials for a seller
   * @param {Object} arg - arg object.
   * @param {string} arg.flipkartChannel - Name of marketplace channel
   * @param {FlipkartPayload} arg.body
   **/
  updateFlipkartChannelCredentials({ flipkartChannel, body } = {}) {
    const {
      error,
    } = MarketplacesValidator.updateFlipkartChannelCredentials().validate(
      arguments[0],
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${flipkartChannel}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create Tatacliq / Tatacliq Luxury marketplace channel for a seller
   * @description: Create Tatacliq / Tatacliq Luxury marketplace channel for a seller
   * @param {Object} arg - arg object.
   * @param {string} arg.tatacliqChannel - Name of marketplace channel
   * @param {TatacliqPayload} arg.body
   **/
  registerTatacliqChannel({ tatacliqChannel, body } = {}) {
    const {
      error,
    } = MarketplacesValidator.registerTatacliqChannel().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${tatacliqChannel}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update Tatacliq / Tatacliq Luxury Assured marketplace channel credentials for a seller
   * @description: Update Tatacliq / Tatacliq Luxury marketplace channel credentials for a seller
   * @param {Object} arg - arg object.
   * @param {string} arg.tatacliqChannel - Name of marketplace channel
   * @param {TatacliqPayload} arg.body
   **/
  updateTatacliqChannelCredentials({ tatacliqChannel, body } = {}) {
    const {
      error,
    } = MarketplacesValidator.updateTatacliqChannelCredentials().validate(
      arguments[0],
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${tatacliqChannel}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create Ajio marketplace channel for a seller
   * @description: Create Ajio marketplace channel for a seller
   * @param {Object} arg - arg object.
   * @param {AjioPayload} arg.body
   **/
  registerAjioChannel({ body } = {}) {
    const {
      error,
    } = MarketplacesValidator.registerAjioChannel().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/ajio_in`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update Ajio marketplace channel credentials for a seller
   * @description: Update Ajio marketplace channel credentials for a seller
   * @param {Object} arg - arg object.
   * @param {AjioPayload} arg.body
   **/
  updateAjioChannelCredentials({ body } = {}) {
    const {
      error,
    } = MarketplacesValidator.updateAjioChannelCredentials().validate(
      arguments[0],
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/ajio_in`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update inventory sync configuration of marketplace channel for a seller
   * @description: Update inventory sync configuration of marketplace channel for a seller
   * @param {Object} arg - arg object.
   * @param {string} arg.channel - Name of marketplace channel
   * @param {string} [arg.validateCred] - Validate marketplace cred while saving inventory config
   * @param {InventoryConfig} arg.body
   **/
  updateChannelInventoryConfig({ channel, body, validateCred } = {}) {
    const {
      error,
    } = MarketplacesValidator.updateChannelInventoryConfig().validate(
      arguments[0],
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["validate_cred"] = validateCred;

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/marketplaces/company/${this.config.companyId}/v1.0/channels/${channel}/inventory/config`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get marketplace channel location config for a seller
    * @description: Get marketplace channel location config for a seller
    * @param {Object} arg - arg object.
    * @param {string} arg.channel - Name of marketplace channel
    
    **/
  getChannelLocationConfig({ channel } = {}) {
    const {
      error,
    } = MarketplacesValidator.getChannelLocationConfig().validate(
      arguments[0],
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${channel}/location/config`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: update marketplace channel location config for a seller
   * @description: update marketplace channel location config for a seller
   * @param {Object} arg - arg object.
   * @param {string} arg.channel - Name of marketplace channel
   * @param {StoreMappingPayload} arg.body
   **/
  updateChannelLocationConfig({ channel, body } = {}) {
    const {
      error,
    } = MarketplacesValidator.updateChannelLocationConfig().validate(
      arguments[0],
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${channel}/location/config`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get marketplace channel active status for a seller
    * @description: Get marketplace channel active status for a seller
    * @param {Object} arg - arg object.
    * @param {string} arg.channel - Name of marketplace channel
    
    **/
  getChannelStatus({ channel } = {}) {
    const {
      error,
    } = MarketplacesValidator.getChannelStatus().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${channel}/status`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update marketplace channel active status for a seller
   * @description: Update marketplace channel active status for a seller
   * @param {Object} arg - arg object.
   * @param {string} arg.channel - Name of marketplace channel
   * @param {StatusPayload} arg.body
   **/
  updateChannelStatus({ channel, body } = {}) {
    const {
      error,
    } = MarketplacesValidator.updateChannelStatus().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${channel}/status`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Trigger marketplace channel inventory updates for a seller
   * @description: Trigger marketplace channel inventory updates for a seller
   * @param {Object} arg - arg object.
   * @param {string} arg.channel - Name of marketplace channel
   * @param {string} arg.updateType - Inventory update type
   * @param {SyncPayload} arg.body
   **/
  triggerChannelInventoryUpdates({ channel, updateType, body } = {}) {
    const {
      error,
    } = MarketplacesValidator.triggerChannelInventoryUpdates().validate(
      arguments[0],
      { abortEarly: false }
    );
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/marketplaces/v1.0/company/${this.config.companyId}/channels/${channel}/inventory/${updateType}/sync`,
      queryObj,
      body
    );
  }
}

class Analytics {
  constructor(config) {
    this.config = config;
  }

  /**
   *
   * @summary: Create data export job in required format
   * @description: Create data export job in required format
   * @param {Object} arg - arg object.
   * @param {string} arg.exportType - Export type / format
   * @param {ExportJobReq} arg.body
   **/
  createExportJob({ exportType, body } = {}) {
    const {
      error,
    } = AnalyticsValidator.createExportJob().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/export/${exportType}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get data export job status
    * @description: Get data export job status
    * @param {Object} arg - arg object.
    * @param {string} arg.exportType - Export type / format
    * @param {string} arg.jobId - Export job id
    
    **/
  getExportJobStatus({ exportType, jobId } = {}) {
    const {
      error,
    } = AnalyticsValidator.getExportJobStatus().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["job_id"] = jobId;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/export/${exportType}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Get logs list
   * @description: Get logs list
   * @param {Object} arg - arg object.
   * @param {string} arg.logType - Log type
   * @param {string} [arg.pageNo] - Current page number
   * @param {string} [arg.pageSize] - Current page size
   * @param {GetLogsListReq} arg.body
   **/
  getLogsList({ logType, body, pageNo, pageSize } = {}) {
    const { error } = AnalyticsValidator.getLogsList().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/logs/${logType}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Search logs
   * @description: Search logs
   * @param {Object} arg - arg object.
   * @param {string} [arg.pageNo] - Current page number
   * @param {string} [arg.pageSize] - Current page size
   * @param {string} arg.logType - Log type
   * @param {SearchLogReq} arg.body
   **/
  searchLogs({ logType, body, pageNo, pageSize } = {}) {
    const { error } = AnalyticsValidator.searchLogs().validate(arguments[0], {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/logs/${logType}/search`,
      queryObj,
      body
    );
  }
}

module.exports = PlatformClient;
