export = PlatformApplicationClient;
declare class PlatformApplicationClient {
    constructor(applicationId: any, config: any);
    config: any;
    companyId: any;
    applicationId: any;
    lead: Lead;
    feedback: Feedback;
    theme: Theme;
    user: User;
    content: Content;
    communication: Communication;
    payment: Payment;
    order: Order;
    catalog: Catalog;
    fileStorage: FileStorage;
    share: Share;
    configuration: Configuration;
    cart: Cart;
    rewards: Rewards;
    analytics: Analytics;
    partner: Partner;
    setExtraHeaders(header: any): void;
}
declare namespace PlatformApplicationClient {
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketCategory, TicketSubCategory, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, Facebook, Accountkit, Google, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, RedirectionSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, BeneficiaryModeDetails, AddBeneficiaryDetailsRequest, RefundAccountResponse, NotFoundResourceError, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, GetActivityStatus, ActivityHistory, CanBreakRequestBody, CanBreakResponse, FailedOrders, FailOrder, MarketplaceOrder, TotalDiscountsSet, PresentmentMoney, ShopMoney, TotalPriceSet, TotalPriceSetShopMoney, TotalPriceSetPresentmentMoney, TotalTaxSet, TotalTaxSetShopMoney, TotalTaxSetPresentmentMoney, SubtotalPriceSet, SubtotalPriceSetShopMoney, SubtotalPriceSetPresentmentMoney, LineItems, LineItemsArticle, Quantities, NotAvailable, Sellable, OrderCommitted, Damaged, Manufacturer, ArticlePrice, Company, FailOrderDateMeta, MarketplaceIdentifiers, TatacliqLuxury, Dimension, Weight, Store, ArticleMeta, ArticleBrand, LineItemsArticleIdentifier, PriceSet, PriceSetShopMoney, PriceSetPresentmentMoney, TaxLines, TaxLinesPriceSet, TaxLinesPriceSetShopMoney, TaxLinesPriceSetPresentmentMoney, TotalDiscountSet, TotalDiscountSetPresentmentMoney, TotalDiscountSetShopMoney, BillingAddress, TotalShippingPriceSet, TotalShippingPriceSetShopMoney, TotalShippingPriceSetPresentmentMoney, Customer, DefaultAddress, TotalLineItemsPriceSet, TotalLineItemsPriceSetShopMoney, TotalLineItemsPriceSetPresentmentMoney, OrderShippingAddress, OrderListing, OrderItems, PlatformOrderUserInfo, PlatformDeliveryAddress, Channel, PlatformApplication, PlatformShipment, PlatformShipmentStatus, Bags, BagItem, BagItemAttributes, ShipmentPrices, Payments, Filters, Stage, StagesFilters, Options, PlatformOrderPage, AppliedFilters, OrderDetails, OrderDetailsItem, PlatformBreakupValues, ArticleAssignment, PlatformShipmentDetails, PlatformShipmentDetailsStatus, BagsDetails, BagFinancialBreakup, Identifiers, BagCurrStatus, BagArticle, ArticleIdentifiers, Set, SetSizeDistribution, Sizes, BagArticleReturnConfig, GstDetails, BagBreakupValues, BagCurrentStatus, BagStateMapper, BagStatus, BagStatusBagStateMapper, BagPrices, ShipmentBreakupValues, DpDetails, ShipmentInvoice, RtoAddress, StoreAddressJson, PlatformFulfillingStore, FulfillingStoreMeta, AdditionalContactDetails, Documents, Gst, ProductReturnConfig, Timing, Opening, Closing, FulfillingStoreStoreAddressJson, ShipmentGst, PlatformShipmentDetailsBrand, Promise, Timestamp, ShipmentTrackingDetails, ItemsPayments, PlatformOrderDetailsPage, ShipmentDates, OrderLanesCount, StageItem, UpdateOrderReprocessResponse, PlatformOrderTrack, OrderPicklistListing, Stages, ItemTotal, GetPingResponse, GetShipmentAddressResponse, DataShipmentAddress, UpdateShipmentAddressRequest, UpdateShipmentAddressResponse, ShipmentTrackResponse, ShipmentTrackResponseBagListItem, ShipmentTrackResponseBagListItemBreakValues, ShipmentTrackResponseBagListItemStatuses, ShipmentTrackResponseBagListItemStatusesProgress, ShipmentTrackResponseBagListItemStatusesTrack, ShipmentTrackResponseBagListItemDpDetails, ShipmentTrackResponseBagListItemsProductImage, UpdateShipmentStatusResponse, UpdateShipmentStatusBody, ShipmentReasonsResponse, ShipmentResponseReasons, PlatformShipmentTrack, Results, ShipmentUpdateRequest, ShipmentUpdateResponse, UpdateProcessShipmenstRequestBody, UpdateProcessShipmenstRequestResponse, GetVoiceCallbackResponse, GetClickToCallResponse, ApefaceApiError, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, ErrorResponse, GetSearchWordsDetailResponse, DeleteResponse, GetSearchWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, Price, LimitedProductData, Size, GetProducts, GetProductBundleResponse, Meta, Guide, ValidateSizeGuide, SuccessResponse, ListSizeGuide, SizeGuideResponse, MetaFields, ApplicationItemMeta, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersKey, ProductFiltersValue, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, CollectionBadge, UserInfo, Schedule, CollectionImage, CollectionBanner, SeoDetail, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, Media1, GetCollectionDetailNest, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, CollectionItemRequest, UpdatedResponse, ProductDetailAttribute, ProductDetailGroupedAttribute, Price1, ProductListingPrice, ProductBrand, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, AttributeMasterDetails, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, CategoryMappingValues, CategoryMapping, Hierarchy, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, SingleCategoryResponse, CustomOrder, TeaserTag, ProductPublish, TaxIdentifier, ReturnConfig, Trader, OrderQuantity, ProductCreateUpdate, ProductPublished, Logo, Brand, Image, Product, ProductListingResponse, AttributeMasterSerializer, ProductAttributesResponse, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, ItemQuery, InventoryRequest, InventoryResponse, InventoryResponsePaginated, StoreMeta, QuantityBase, CompanyMeta, PriceMeta, WeightResponse, DimensionResponse, BrandMeta, Trader1, ManufacturerResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportJob, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, PageResponse, HsnCodesListingResponse, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, ArticleQuery, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, GetAddressSerializer, SellerPhoneNumber, LocationManagerSerializer, UserSerializer1, ProductReturnConfigSerializer, Document, UserSerializer2, GetCompanySerializer, LocationIntegrationType, LocationTimingSerializer, LocationDayWiseSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, GetLocationSerializer, LocationListSerializer, CompanyTaxesSerializer, BusinessCountryInfo, Website, BusinessDetails, ContactDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, CouponDateMeta, DisplayMetaDict, DisplayMeta, CouponAuthor, Rule, Validity, CouponSchedule, Identifier, Ownership, PaymentAllowValue, PaymentModes, UsesRemaining, UsesRestriction, PriceRange, PostOrder, BulkBundleRestriction, Restrictions, State, Validation, CouponAction, RuleDefinition, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, DisplayMeta1, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, PromotionDateMeta, PromotionSchedule, PaymentAllowValue1, PromotionPaymentModes, UsesRemaining1, UsesRestriction1, PostOrder1, UserRegistered, Restrictions1, PromotionAction, PromotionAuthor, Visibility, Ownership1, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, CartItem, OpenapiCartDetailsRequest, DisplayBreakup, CouponBreakup, RawBreakup, LoyaltyPoints, CartBreakup, ProductPrice, ProductPriceInfo, ActionQuery, ProductAction, CategoryInfo, ProductImage, BaseInfo, CartProduct, BasePrice, ArticlePriceInfo, ProductArticle, PromoMeta, CartProductIdentifer, ProductAvailability, AppliedPromotion, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AppUser, E, Giveaway, GiveawayResponse, HistoryPretty, HistoryRes, Offer, Points, Referral, RewardUser, RewardsAudience, RewardsRule, ShareMessages, UserRes, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
}
/**
 * @typedef ApplicationResponse
 * @property {Application} [application]
 */
/**
 * @typedef Currency
 * @property {string} [_id]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [decimal_digits]
 * @property {string} [symbol]
 */
/**
 * @typedef Domain
 * @property {boolean} [verified]
 * @property {boolean} [is_primary]
 * @property {boolean} [is_shortlink]
 * @property {string} [_id]
 * @property {string} [name]
 */
/**
 * @typedef ApplicationWebsite
 * @property {boolean} [enabled]
 * @property {string} [basepath]
 */
/**
 * @typedef ApplicationCors
 * @property {string[]} [domains]
 */
/**
 * @typedef ApplicationAuth
 * @property {boolean} [enabled]
 */
/**
 * @typedef ApplicationRedirections
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
 * @property {string} [type]
 */
/**
 * @typedef ApplicationMeta
 * @property {string} [name]
 * @property {string} [value]
 */
/**
 * @typedef SecureUrl
 * @property {string} [secure_url]
 */
/**
 * @typedef Application
 * @property {ApplicationWebsite} [website]
 * @property {ApplicationCors} [cors]
 * @property {ApplicationAuth} [auth]
 * @property {string} [description]
 * @property {string} [channel_type]
 * @property {number} [cache_ttl]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [owner]
 * @property {number} [company_id]
 * @property {string} [token]
 * @property {ApplicationRedirections[]} [redirections]
 * @property {ApplicationMeta[]} [meta]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {SecureUrl} [banner]
 * @property {SecureUrl} [logo]
 * @property {SecureUrl} [favicon]
 * @property {Domain[]} [domains]
 * @property {string} [app_type]
 * @property {SecureUrl} [mobile_logo]
 * @property {Domain} [domain]
 */
/**
 * @typedef NotFound
 * @property {string} [message]
 */
/**
 * @typedef BadRequest
 * @property {string} [message]
 */
/**
 * @typedef LocationDefaultLanguage
 * @property {string} [name]
 * @property {string} [code]
 */
/**
 * @typedef LocationDefaultCurrency
 * @property {string} [name]
 * @property {string} [symbol]
 * @property {string} [code]
 */
/**
 * @typedef LocationCountry
 * @property {string} [capital]
 * @property {string} [currency]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string} [name]
 * @property {string} [parent]
 * @property {string} [phone_code]
 * @property {string} [type]
 * @property {number} [uid]
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {LocationDefaultCurrency} [default_currency]
 * @property {LocationDefaultLanguage} [default_language]
 */
/**
 * @typedef Locations
 * @property {Object[]} [items]
 */
/**
 * @typedef TicketList
 * @property {Ticket[]} [items]
 * @property {Filter} [filters]
 * @property {Page} [page]
 */
/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */
/**
 * @typedef TicketHistoryList
 * @property {TicketHistory[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CustomFormList
 * @property {CustomForm[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CreateCustomFormPayload
 * @property {string} slug
 * @property {string} title
 * @property {Object[]} inputs
 * @property {string} [description]
 * @property {string} [header_image]
 * @property {PriorityEnum} priority
 * @property {boolean} [should_notify]
 * @property {string} [success_message]
 * @property {PollForAssignment} [poll_for_assignment]
 */
/**
 * @typedef EditCustomFormPayload
 * @property {string} title
 * @property {Object[]} inputs
 * @property {string} [description]
 * @property {PriorityEnum} priority
 * @property {string} [header_image]
 * @property {boolean} [should_notify]
 * @property {boolean} [login_required]
 * @property {string} [success_message]
 * @property {PollForAssignment} [poll_for_assignment]
 */
/**
 * @typedef EditTicketPayload
 * @property {TicketContent} [content]
 * @property {string} [category]
 * @property {string} [sub_category]
 * @property {string} [source]
 * @property {string} [status]
 * @property {PriorityEnum} [priority]
 * @property {AgentChangePayload} [assigned_to]
 * @property {string[]} [tags]
 */
/**
 * @typedef AgentChangePayload
 * @property {string} agent_id
 */
/**
 * @typedef CreateVideoRoomResponse
 * @property {string} unique_name
 */
/**
 * @typedef CloseVideoRoomResponse
 * @property {boolean} success
 */
/**
 * @typedef CreateVideoRoomPayload
 * @property {string} unique_name
 * @property {NotifyUser[]} [notify]
 */
/**
 * @typedef NotifyUser
 * @property {string} country_code
 * @property {string} phone_number
 */
/**
 * @typedef Filter
 * @property {Priority[]} priorities
 * @property {TicketCategory[]} [categories]
 * @property {Status[]} statuses
 * @property {Object[]} assignees
 */
/**
 * @typedef TicketHistoryPayload
 * @property {Object} value
 * @property {HistoryTypeEnum} type
 */
/**
 * @typedef CustomFormSubmissionPayload
 * @property {Object[]} response
 * @property {TicketAsset[]} [attachments]
 */
/**
 * @typedef GetTokenForVideoRoomResponse
 * @property {string} access_token
 */
/**
 * @typedef GetParticipantsInsideVideoRoomResponse
 * @property {Participant[]} participants
 */
/**
 * @typedef Participant
 * @property {UserSchema} [user]
 * @property {string} [identity]
 * @property {string} [status]
 */
/**
 * @typedef Email
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [email]
 * @property {boolean} [active]
 */
/**
 * @typedef Debug
 * @property {string} [source]
 * @property {string} [platform]
 */
/**
 * @typedef SubmitCustomFormResponse
 * @property {string} message
 * @property {Ticket} ticket
 */
/**
 * @typedef TicketContext
 * @property {string} [application_id]
 * @property {string} company_id
 */
/**
 * @typedef CreatedOn
 * @property {string} user_agent
 */
/**
 * @typedef TicketAsset
 * @property {string} [display]
 * @property {string} value
 * @property {TicketAssetTypeEnum} type
 */
/**
 * @typedef TicketContent
 * @property {string} title
 * @property {string} [description]
 * @property {TicketAsset[]} [attachments]
 */
/**
 * @typedef AddTicketPayload
 * @property {Object} [created_by]
 * @property {string} [status]
 * @property {PriorityEnum} [priority]
 * @property {string} category
 * @property {TicketContent} content
 */
/**
 * @typedef Priority
 * @property {PriorityEnum} key
 * @property {string} display
 * @property {string} color
 */
/**
 * @typedef Status
 * @property {string} key
 * @property {string} display
 * @property {string} color
 */
/**
 * @typedef TicketCategory
 * @property {string} key
 * @property {string} display
 * @property {CustomForm} [form]
 * @property {TicketSubCategory[]} [sub_categories]
 * @property {TicketFeedbackForm} [feedback_form]
 */
/**
 * @typedef TicketSubCategory
 * @property {string} key
 * @property {string} display
 */
/**
 * @typedef TicketFeedbackForm
 * @property {string} title
 * @property {Object[]} [display]
 */
/**
 * @typedef TicketFeedbackList
 * @property {TicketFeedback[]} [items]
 */
/**
 * @typedef TicketFeedbackPayload
 * @property {Object} [form_response]
 */
/**
 * @typedef SubmitButton
 * @property {string} title
 * @property {string} title_color
 * @property {string} background_color
 */
/**
 * @typedef PollForAssignment
 * @property {number} duration
 * @property {string} message
 * @property {string} success_message
 * @property {string} failure_message
 */
/**
 * @typedef CustomForm
 * @property {string} application_id
 * @property {string} slug
 * @property {string} [header_image]
 * @property {string} title
 * @property {string} [description]
 * @property {Priority} priority
 * @property {boolean} login_required
 * @property {boolean} should_notify
 * @property {string} [success_message]
 * @property {SubmitButton} [submit_button]
 * @property {Object[]} inputs
 * @property {CreatedOn} [created_on]
 * @property {PollForAssignment} [poll_for_assignment]
 * @property {string} _id
 */
/**
 * @typedef FeedbackResponseItem
 * @property {string} display
 * @property {string} key
 * @property {string} value
 */
/**
 * @typedef TicketFeedback
 * @property {string} _id
 * @property {string} ticket_id
 * @property {string} company_id
 * @property {FeedbackResponseItem[]} response
 * @property {string} [category]
 * @property {Object} [user]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */
/**
 * @typedef TicketHistory
 * @property {string} type
 * @property {Object} value
 * @property {string} ticket_id
 * @property {CreatedOn} [created_on]
 * @property {Object} [created_by]
 * @property {string} _id
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */
/**
 * @typedef Ticket
 * @property {TicketContext} [context]
 * @property {CreatedOn} [created_on]
 * @property {string} [response_id]
 * @property {TicketContent} [content]
 * @property {string} ticket_id
 * @property {TicketCategory} category
 * @property {TicketSubCategory} [sub_category]
 * @property {TicketSourceEnum} source
 * @property {Status} status
 * @property {Priority} priority
 * @property {Object} [created_by]
 * @property {Object} [assigned_to]
 * @property {string[]} [tags]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_feedback_pending]
 * @property {string} _id
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */
/**
 * @typedef Activity
 * @property {Object} [current_state]
 * @property {string} [document_id]
 * @property {Object} [previous_state]
 */
/**
 * @typedef ActivityDump
 * @property {Activity} [activity]
 * @property {CreatedBy} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [id]
 * @property {string} [type]
 */
/**
 * @typedef AddMediaListRequest
 * @property {string} [entity_id]
 * @property {string} [entity_type]
 * @property {AddMediaRequest[]} [media_list]
 * @property {string} [ref_id]
 * @property {string} [ref_type]
 */
/**
 * @typedef AddMediaRequest
 * @property {string} [cloud_id]
 * @property {string} [cloud_name]
 * @property {string} [cloud_provider]
 * @property {string} [entity_id]
 * @property {string} [entity_type]
 * @property {string} [media_url]
 * @property {string} [ref_id]
 * @property {string} [ref_type]
 * @property {string[]} [tags]
 * @property {string} [thumbnail_url]
 * @property {string} [type]
 */
/**
 * @typedef ApproveRequest
 * @property {boolean} [approve]
 * @property {string} [entity_type]
 * @property {string} id
 * @property {string} [reason]
 */
/**
 * @typedef Attribute
 * @property {DateMeta} [date_meta]
 * @property {string} [description]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {TagMeta[]} [tags]
 */
/**
 * @typedef AttributeObject
 * @property {string} [description]
 * @property {string} name
 * @property {string} [slug]
 * @property {string} [title]
 * @property {string} type
 * @property {number} value
 */
/**
 * @typedef CreatedBy
 * @property {string} [id]
 * @property {string} [name]
 * @property {TagMeta[]} [tags]
 */
/**
 * @typedef CursorGetResponse
 * @property {Object[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef DateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef DeviceMeta
 * @property {string} [app_version]
 * @property {string} [platform]
 */
/**
 * @typedef Entity
 * @property {string} [id]
 * @property {string} [type]
 */
/**
 * @typedef EntityRequest
 * @property {string} [entity_id]
 * @property {string} [entity_type]
 */
/**
 * @typedef FeedbackAttributes
 * @property {Attribute[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef FeedbackError
 * @property {Object} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {number} [status]
 */
/**
 * @typedef FeedbackState
 * @property {boolean} [active]
 * @property {boolean} [archive]
 * @property {string} [media]
 * @property {boolean} [qna]
 * @property {boolean} [rating]
 * @property {boolean} [review]
 */
/**
 * @typedef GetResponse
 * @property {Object} [data]
 * @property {Page} [page]
 */
/**
 * @typedef GetReviewResponse
 * @property {ReviewFacet[]} [facets]
 * @property {Object[]} [items]
 * @property {Page} [page]
 * @property {SortMethod[]} [sort]
 */
/**
 * @typedef InsertResponse
 * @property {number} [count]
 */
/**
 * @typedef MediaMeta
 * @property {number} [max_count]
 * @property {number} [size]
 * @property {string} [type]
 */
/**
 * @typedef MediaMetaRequest
 * @property {number} max_count
 * @property {number} size
 */
/**
 * @typedef NumberGetResponse
 * @property {Object[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PageCursor
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} size
 * @property {string} type
 */
/**
 * @typedef PageNumber
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [type]
 */
/**
 * @typedef Rating
 * @property {Attribute[]} [attributes]
 * @property {string[]} [attributes_slugs]
 * @property {UI} [ui]
 */
/**
 * @typedef RatingRequest
 * @property {string[]} attributes
 * @property {UI} [ui]
 */
/**
 * @typedef ReportAbuseRequest
 * @property {string} [description]
 * @property {string} entity_id
 * @property {string} entity_type
 */
/**
 * @typedef Review
 * @property {string} [description]
 * @property {string} [header]
 * @property {MediaMeta} [image_meta]
 * @property {string} [title]
 * @property {MediaMeta} [video_meta]
 * @property {boolean} [vote_allowed]
 */
/**
 * @typedef ReviewFacet
 * @property {string} [display]
 * @property {string} [name]
 * @property {boolean} [selected]
 * @property {string} [slug]
 * @property {string} [type]
 */
/**
 * @typedef ReviewRequest
 * @property {string} description
 * @property {string} header
 * @property {MediaMetaRequest} image_meta
 * @property {boolean} is_vote_allowed
 * @property {string} title
 * @property {MediaMetaRequest} video_meta
 */
/**
 * @typedef SaveAttributeRequest
 * @property {string} [description]
 * @property {string} name
 * @property {string} slug
 */
/**
 * @typedef SortMethod
 * @property {string} [name]
 * @property {boolean} [selected]
 * @property {string} [type]
 */
/**
 * @typedef TagMeta
 * @property {MediaMeta[]} [media]
 * @property {string} [name]
 * @property {string} [type]
 */
/**
 * @typedef Template
 * @property {DateMeta} [date_meta]
 * @property {Entity} [entity]
 * @property {string} [id]
 * @property {string} [name]
 * @property {Rating} [rating]
 * @property {Review} [review]
 * @property {FeedbackState} [state]
 * @property {TagMeta[]} [tags]
 */
/**
 * @typedef TemplateGetResponse
 * @property {Template[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef TemplateRequest
 * @property {boolean} active
 * @property {string} [enable_media_type]
 * @property {boolean} [enable_qna]
 * @property {boolean} enable_rating
 * @property {boolean} enable_review
 * @property {EntityRequest} entity
 * @property {RatingRequest} rating
 * @property {ReviewRequest} review
 */
/**
 * @typedef TemplateRequestList
 * @property {TemplateRequest[]} template_list
 */
/**
 * @typedef UI
 * @property {string[]} [feedback_question]
 * @property {UIIcon} [icon]
 * @property {string[]} [text]
 * @property {string} [type]
 */
/**
 * @typedef UIIcon
 * @property {string} [active]
 * @property {string} [inactive]
 * @property {string[]} [selected]
 */
/**
 * @typedef UpdateAttributeRequest
 * @property {string} [description]
 * @property {string} name
 * @property {string} [slug]
 */
/**
 * @typedef UpdateResponse
 * @property {number} [count]
 */
/**
 * @typedef UpdateReviewRequest
 * @property {boolean} [active]
 * @property {string} [application]
 * @property {boolean} [approve]
 * @property {boolean} [archive]
 * @property {AttributeObject[]} [attributes_rating]
 * @property {string} [description]
 * @property {DeviceMeta} [device_meta]
 * @property {string} [entity_id]
 * @property {string} [entity_type]
 * @property {MediaMeta[]} [media_resource]
 * @property {number} [rating]
 * @property {string} [review_id]
 * @property {string} [template_id]
 * @property {string} [title]
 */
/**
 * @typedef UpdateTemplateRequest
 * @property {boolean} active
 * @property {string} [enable_media_type]
 * @property {boolean} [enable_qna]
 * @property {boolean} enable_rating
 * @property {boolean} enable_review
 * @property {EntityRequest} entity
 * @property {RatingRequest} rating
 * @property {ReviewRequest} review
 */
/**
 * @typedef UpdateTemplateStatusRequest
 * @property {boolean} [active]
 * @property {boolean} [archive]
 */
/**
 * @typedef AvailablePageSchema
 * @property {string} [value]
 * @property {string} [text]
 * @property {string} [path]
 * @property {string} [type]
 * @property {AvailablePageSchemaSections[]} [sections]
 * @property {AvailablePageSectionMetaAttributes[]} [sections_meta]
 * @property {string} [theme]
 * @property {AvailablePageSeo} [seo]
 * @property {Object[]} [props]
 * @property {string} [_id]
 */
/**
 * @typedef AvailablePageSectionMetaAttributes
 * @property {Object} [attributes]
 */
/**
 * @typedef AvailablePageSeo
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [_id]
 */
/**
 * @typedef AvailablePageSchemaSections
 * @property {string} [name]
 * @property {string} [label]
 * @property {Object} [props]
 * @property {Object[]} [blocks]
 * @property {Object} [preset]
 * @property {AvailablePagePredicate} [predicate]
 */
/**
 * @typedef AvailablePageScreenPredicate
 * @property {boolean} [mobile]
 * @property {boolean} [desktop]
 * @property {boolean} [tablet]
 */
/**
 * @typedef AvailablePageUserPredicate
 * @property {boolean} [authenticated]
 * @property {boolean} [anonymous]
 */
/**
 * @typedef AvailablePageRoutePredicate
 * @property {string} [selected]
 * @property {string} [exact_url]
 * @property {Object} [query]
 */
/**
 * @typedef AvailablePagePredicate
 * @property {AvailablePageScreenPredicate} [screen]
 * @property {AvailablePageUserPredicate} [user]
 * @property {AvailablePageRoutePredicate} [route]
 */
/**
 * @typedef AllAvailablePageSchema
 * @property {AvailablePageSchema[]} [pages]
 */
/**
 * @typedef PaginationSchema
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 * @property {string} [type]
 * @property {number} [current]
 */
/**
 * @typedef ThemesListingResponseSchema
 * @property {ThemesSchema[]} [items]
 * @property {PaginationSchema} [page]
 */
/**
 * @typedef AddThemeRequestSchema
 * @property {string} [theme_id]
 */
/**
 * @typedef UpgradableThemeSchema
 * @property {string} [parent_theme]
 * @property {string} [applied_theme]
 * @property {boolean} [upgrade]
 */
/**
 * @typedef FontsSchema
 * @property {FontsSchemaItems} [items]
 * @property {string} [kind]
 */
/**
 * @typedef BlitzkriegApiErrorSchema
 * @property {string} [message]
 */
/**
 * @typedef BlitzkriegNotFoundSchema
 * @property {string} [message]
 */
/**
 * @typedef BlitzkriegInternalServerErrorSchema
 * @property {string} [message]
 */
/**
 * @typedef FontsSchemaItems
 * @property {string} [family]
 * @property {string[]} [variants]
 * @property {string[]} [subsets]
 * @property {string} [version]
 * @property {string} [last_modified]
 * @property {FontsSchemaItemsFiles} [files]
 * @property {string} [category]
 * @property {string} [kind]
 */
/**
 * @typedef FontsSchemaItemsFiles
 * @property {string} [regular]
 * @property {string} [italic]
 * @property {string} [bold]
 */
/**
 * @typedef ThemesSchema
 * @property {string} [application]
 * @property {boolean} [applied]
 * @property {boolean} [customized]
 * @property {boolean} [published]
 * @property {boolean} [archived]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [version]
 * @property {string} [parent_theme_version]
 * @property {string} [parent_theme]
 * @property {Information} [information]
 * @property {string[]} [tags]
 * @property {Src} [src]
 * @property {AssetsSchema} [assets]
 * @property {availableSectionSchema[]} [available_sections]
 * @property {Object} [styles]
 * @property {Config} [config]
 * @property {Font} [font]
 * @property {string} [_id]
 * @property {number} [__v]
 * @property {Colors} [colors]
 */
/**
 * @typedef availableSectionSchema
 * @property {Blocks[]} [blocks]
 * @property {string} [name]
 * @property {string} [label]
 * @property {BlocksProps[]} [props]
 */
/**
 * @typedef Information
 * @property {Images} [images]
 * @property {string[]} [features]
 * @property {string} [name]
 * @property {string} [description]
 */
/**
 * @typedef Images
 * @property {string[]} [desktop]
 * @property {string[]} [android]
 * @property {string[]} [ios]
 * @property {string[]} [thumbnail]
 */
/**
 * @typedef Src
 * @property {string} [link]
 */
/**
 * @typedef AssetsSchema
 * @property {UmdJs} [umd_js]
 * @property {CommonJs} [common_js]
 * @property {Css} [css]
 */
/**
 * @typedef UmdJs
 * @property {string} [link]
 * @property {string[]} [links]
 */
/**
 * @typedef CommonJs
 * @property {string} [link]
 */
/**
 * @typedef Css
 * @property {string} [link]
 * @property {string[]} [links]
 */
/**
 * @typedef Sections
 * @property {string} [attributes]
 */
/**
 * @typedef Config
 * @property {Preset} [preset]
 * @property {GlobalSchema} [global_schema]
 * @property {string} [current]
 * @property {ListSchemaItem[]} [list]
 */
/**
 * @typedef Preset
 * @property {AvailablePageSchema[]} [pages]
 */
/**
 * @typedef GlobalSchema
 * @property {GlobalSchemaProps[]} [props]
 */
/**
 * @typedef ListSchemaItem
 * @property {Object} [global_config]
 * @property {ConfigPage[]} [page]
 * @property {string} [name]
 */
/**
 * @typedef Colors
 * @property {string} [bg_color]
 * @property {string} [primary_color]
 * @property {string} [secondary_color]
 * @property {string} [accent_color]
 * @property {string} [link_color]
 * @property {string} [button_secondary_color]
 */
/**
 * @typedef Custom
 * @property {Object} [props]
 */
/**
 * @typedef ConfigPage
 * @property {Object} [settings]
 * @property {string} [page]
 */
/**
 * @typedef Font
 * @property {string} [family]
 * @property {Variants} [variants]
 */
/**
 * @typedef Variants
 * @property {Medium} [medium]
 * @property {SemiBold} [semi_bold]
 * @property {Bold} [bold]
 * @property {Light} [light]
 * @property {Regular} [regular]
 */
/**
 * @typedef Medium
 * @property {string} [name]
 * @property {string} [file]
 */
/**
 * @typedef SemiBold
 * @property {string} [name]
 * @property {string} [file]
 */
/**
 * @typedef Bold
 * @property {string} [name]
 * @property {string} [file]
 */
/**
 * @typedef Light
 * @property {string} [name]
 * @property {string} [file]
 */
/**
 * @typedef Regular
 * @property {string} [name]
 * @property {string} [file]
 */
/**
 * @typedef Blocks
 * @property {string} [type]
 * @property {string} [name]
 * @property {BlocksProps[]} [props]
 */
/**
 * @typedef GlobalSchemaProps
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 * @property {string} [category]
 */
/**
 * @typedef BlocksProps
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 */
/**
 * @typedef EditEmailRequestSchema
 * @property {string} [email]
 */
/**
 * @typedef SendVerificationLinkMobileRequestSchema
 * @property {boolean} [verified]
 * @property {boolean} [active]
 * @property {string} [country_code]
 * @property {string} [phone]
 * @property {boolean} [primary]
 */
/**
 * @typedef EditMobileRequestSchema
 * @property {string} [country_code]
 * @property {string} [phone]
 */
/**
 * @typedef EditProfileRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {EditProfileMobileSchema} [mobile]
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [gender]
 * @property {string} [dob]
 * @property {string} [profile_pic_url]
 * @property {string} [android_hash]
 * @property {string} [sender]
 * @property {string} [register_token]
 */
/**
 * @typedef EditProfileMobileSchema
 * @property {string} [phone]
 * @property {string} [country_code]
 */
/**
 * @typedef SendEmailOtpRequestSchema
 * @property {string} [email]
 * @property {string} [action]
 * @property {string} [token]
 * @property {string} [register_token]
 */
/**
 * @typedef VerifyEmailOtpRequestSchema
 * @property {string} [email]
 * @property {string} [action]
 * @property {string} [register_token]
 * @property {string} [otp]
 */
/**
 * @typedef VerifyOtpRequestSchema
 * @property {string} [request_id]
 * @property {string} [register_token]
 * @property {string} [otp]
 */
/**
 * @typedef SendMobileOtpRequestSchema
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [action]
 * @property {string} [token]
 * @property {string} [android_hash]
 * @property {string} [force]
 * @property {string} [captcha_code]
 */
/**
 * @typedef UpdatePasswordRequestSchema
 * @property {string} [old_password]
 * @property {string} [new_password]
 */
/**
 * @typedef FormRegisterRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} [email]
 * @property {string} [password]
 * @property {FormRegisterRequestSchemaPhone} [phone]
 * @property {string} [register_token]
 */
/**
 * @typedef TokenRequestBodySchema
 * @property {string} [token]
 */
/**
 * @typedef ForgotPasswordRequestSchema
 * @property {string} [code]
 * @property {string} [password]
 */
/**
 * @typedef CodeRequestBodySchema
 * @property {string} [code]
 */
/**
 * @typedef SendResetPasswordEmailRequestSchema
 * @property {string} [email]
 * @property {string} [captcha_code]
 */
/**
 * @typedef PasswordLoginRequestSchema
 * @property {string} [captcha_code]
 * @property {string} [password]
 * @property {string} [username]
 */
/**
 * @typedef SendOtpRequestSchema
 * @property {string} [country_code]
 * @property {string} [captcha_code]
 * @property {string} [mobile]
 */
/**
 * @typedef OAuthRequestSchema
 * @property {boolean} [is_signed_in]
 * @property {OAuthRequestSchemaOauth2} [oauth2]
 * @property {OAuthRequestSchemaProfile} [profile]
 */
/**
 * @typedef OAuthRequestAppleSchema
 * @property {string} [user_identifier]
 * @property {OAuthRequestAppleSchemaOauth} [oauth]
 * @property {OAuthRequestAppleSchemaProfile} [profile]
 */
/**
 * @typedef UserObjectSchema
 * @property {UserSchema} [user]
 */
/**
 * @typedef AuthSuccess
 * @property {string} [register_token]
 * @property {boolean} [user_exists]
 * @property {UserSchema} [user]
 */
/**
 * @typedef SendOtpResponse
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [resend_email_token]
 * @property {string} [register_token]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {boolean} [user_exists]
 */
/**
 * @typedef ProfileEditSuccess
 * @property {UserSchema} [user]
 * @property {string} [resend_email_token]
 * @property {string} [register_token]
 * @property {boolean} [user_exists]
 * @property {boolean} [verify_email_link]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {string} [email]
 * @property {string} [request_id]
 * @property {string} [country_code]
 * @property {string} [mobile]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 */
/**
 * @typedef LoginSuccess
 * @property {UserSchema} [user]
 * @property {string} [request_id]
 * @property {string} [register_token]
 */
/**
 * @typedef VerifyOtpSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [user_exists]
 * @property {string} [register_token]
 */
/**
 * @typedef ResetPasswordSuccess
 * @property {string} [status]
 */
/**
 * @typedef RegisterFormSuccess
 * @property {string} [email]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {string} [resend_email_token]
 * @property {string} [register_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {boolean} [user_exists]
 */
/**
 * @typedef VerifyEmailSuccess
 * @property {string} [message]
 */
/**
 * @typedef HasPasswordSuccess
 * @property {boolean} [result]
 */
/**
 * @typedef LogoutSuccess
 * @property {boolean} [logout]
 */
/**
 * @typedef OtpSuccess
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {string} [register_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 */
/**
 * @typedef EmailOtpSuccess
 * @property {boolean} [success]
 */
/**
 * @typedef SessionListSuccess
 * @property {string[]} [sessions]
 */
/**
 * @typedef VerifyMobileOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_mobile_link]
 */
/**
 * @typedef VerifyEmailOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_email_link]
 */
/**
 * @typedef SendMobileVerifyLinkSuccess
 * @property {boolean} [verify_mobile_link]
 */
/**
 * @typedef SendEmailVerifyLinkSuccess
 * @property {boolean} [verify_email_link]
 */
/**
 * @typedef UserSearchResponseSchema
 * @property {UserSchema[]} [users]
 */
/**
 * @typedef CustomerListResponseSchema
 * @property {UserSchema[]} [items]
 * @property {PaginationSchema} [page]
 */
/**
 * @typedef UnauthorizedSchema
 * @property {string} [message]
 */
/**
 * @typedef UnauthenticatedSchema
 * @property {boolean} [authenticated]
 */
/**
 * @typedef NotFoundSchema
 * @property {string} [message]
 */
/**
 * @typedef AuthenticationInternalServerErrorSchema
 * @property {string} [message]
 */
/**
 * @typedef AuthenticationApiErrorSchema
 * @property {string} [message]
 */
/**
 * @typedef ProfileEditSuccessSchema
 * @property {string} [email]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_email_link]
 * @property {boolean} [verify_mobile_otp]
 * @property {string} [user]
 * @property {string} [register_token]
 * @property {boolean} [user_exists]
 */
/**
 * @typedef FormRegisterRequestSchemaPhone
 * @property {string} [country_code]
 * @property {string} [mobile]
 */
/**
 * @typedef OAuthRequestSchemaOauth2
 * @property {string} [access_token]
 * @property {number} [expiry]
 * @property {string} [refresh_token]
 */
/**
 * @typedef OAuthRequestSchemaProfile
 * @property {string} [last_name]
 * @property {string} [image]
 * @property {string} [id]
 * @property {string} [email]
 * @property {string} [full_name]
 * @property {string} [first_name]
 */
/**
 * @typedef OAuthRequestAppleSchemaOauth
 * @property {string} [identity_token]
 */
/**
 * @typedef OAuthRequestAppleSchemaProfile
 * @property {string} [last_name]
 * @property {string} [full_name]
 * @property {string} [first_name]
 */
/**
 * @typedef AuthSuccessUser
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {AuthSuccessUserDebug} [debug]
 * @property {boolean} [active]
 * @property {AuthSuccessUserEmails} [emails]
 */
/**
 * @typedef AuthSuccessUserDebug
 * @property {string} [platform]
 */
/**
 * @typedef AuthSuccessUserEmails
 * @property {string} [email]
 * @property {boolean} [verified]
 * @property {boolean} [primary]
 * @property {boolean} [active]
 */
/**
 * @typedef CreateUserRequestSchema
 * @property {string} phone_number
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} username
 * @property {Object} [meta]
 */
/**
 * @typedef CreateUserResponseSchema
 * @property {UserSchema} [user]
 */
/**
 * @typedef CreateUserSessionRequestSchema
 * @property {string} [domain]
 * @property {number} [max_age]
 * @property {string} [user_id]
 */
/**
 * @typedef CreateUserSessionResponseSchema
 * @property {string} [domain]
 * @property {number} [max_age]
 * @property {boolean} [secure]
 * @property {boolean} [http_only]
 * @property {Object} [cookie]
 */
/**
 * @typedef PlatformSchema
 * @property {string} [display]
 * @property {LookAndFeel} [look_and_feel]
 * @property {string} [updated_at]
 * @property {boolean} [active]
 * @property {boolean} [forgot_password]
 * @property {Login} [login]
 * @property {boolean} [skip_captcha]
 * @property {string} [name]
 * @property {MetaSchema} [meta]
 * @property {string} [_id]
 * @property {Social} [social]
 * @property {RequiredFields} [required_fields]
 * @property {RegisterRequiredFields} [register_required_fields]
 * @property {boolean} [skip_login]
 * @property {FlashCard} [flash_card]
 * @property {string} [subtext]
 * @property {SocialTokens} [social_tokens]
 * @property {string} [created_at]
 * @property {boolean} [register]
 * @property {string} [mobile_image]
 * @property {string} [desktop_image]
 */
/**
 * @typedef LookAndFeel
 * @property {string} [card_position]
 * @property {string} [background_color]
 */
/**
 * @typedef Login
 * @property {boolean} [password]
 * @property {boolean} [otp]
 */
/**
 * @typedef MetaSchema
 * @property {boolean} [fynd_default]
 */
/**
 * @typedef Social
 * @property {boolean} [account_kit]
 * @property {boolean} [facebook]
 * @property {boolean} [google]
 * @property {boolean} [apple]
 */
/**
 * @typedef RequiredFields
 * @property {PlatformEmail} [email]
 * @property {PlatformMobile} [mobile]
 */
/**
 * @typedef PlatformEmail
 * @property {boolean} [is_required]
 * @property {string} [level]
 */
/**
 * @typedef PlatformMobile
 * @property {boolean} [is_required]
 * @property {string} [level]
 */
/**
 * @typedef RegisterRequiredFields
 * @property {RegisterRequiredFieldsEmail} [email]
 * @property {RegisterRequiredFieldsMobile} [mobile]
 */
/**
 * @typedef RegisterRequiredFieldsEmail
 * @property {boolean} [is_required]
 * @property {string} [level]
 */
/**
 * @typedef RegisterRequiredFieldsMobile
 * @property {boolean} [is_required]
 * @property {string} [level]
 */
/**
 * @typedef FlashCard
 * @property {string} [text]
 * @property {string} [text_color]
 * @property {string} [background_color]
 */
/**
 * @typedef SocialTokens
 * @property {Facebook} [facebook]
 * @property {Accountkit} [account_kit]
 * @property {Google} [google]
 */
/**
 * @typedef Facebook
 * @property {string} [app_id]
 */
/**
 * @typedef Accountkit
 * @property {string} [app_id]
 */
/**
 * @typedef Google
 * @property {string} [app_id]
 */
/**
 * @typedef UpdateUserRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {Object} [meta]
 */
/**
 * @typedef UserSchema
 * @property {string} [first_name]
 * @property {Object} [meta]
 * @property {string} [last_name]
 * @property {PhoneNumber[]} [phone_numbers]
 * @property {Email[]} [emails]
 * @property {string} [gender]
 * @property {string} [dob]
 * @property {boolean} [active]
 * @property {string} [profile_pic_url]
 * @property {string} [username]
 * @property {string} [account_type]
 * @property {string} [uid]
 * @property {Debug} [debug]
 * @property {boolean} [has_old_password_hash]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */
/**
 * @typedef PhoneNumber
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [phone]
 * @property {number} [country_code]
 */
/**
 * @typedef ApplicationLegal
 * @property {string} [application]
 * @property {string} [tnc]
 * @property {string} [policy]
 * @property {string} [shipping]
 * @property {ApplicationLegalFAQ[]} [faq]
 * @property {string} [_id]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */
/**
 * @typedef ApplicationLegalFAQ
 * @property {string} [question]
 * @property {string} [answer]
 */
/**
 * @typedef PathMappingSchema
 * @property {string} [application]
 * @property {RedirectionSchema[]} [redirections]
 * @property {string} [_id]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */
/**
 * @typedef RedirectionSchema
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
 */
/**
 * @typedef SeoComponent
 * @property {SeoSchema} [seo]
 */
/**
 * @typedef SeoSchema
 * @property {string} [app]
 * @property {string} [_id]
 * @property {string} [robots_txt]
 * @property {boolean} [sitemap_enabled]
 * @property {Object[]} [custom_meta_tags]
 * @property {Detail} [details]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */
/**
 * @typedef CustomMetaTag
 * @property {string} [name]
 * @property {string} [content]
 * @property {string} [_id]
 */
/**
 * @typedef Detail
 * @property {string} [title]
 * @property {string} [description]
 */
/**
 * @typedef AnnouncementPageSchema
 * @property {string} [page_slug]
 * @property {string} [type]
 */
/**
 * @typedef EditorMeta
 * @property {string} [foreground_color]
 * @property {string} [background_color]
 * @property {string} [content_type]
 * @property {string} [content]
 */
/**
 * @typedef AnnouncementAuthorSchema
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */
/**
 * @typedef AdminAnnouncementSchema
 * @property {string} [_id]
 * @property {string[]} [platforms]
 * @property {string} [title]
 * @property {string} [announcement]
 * @property {AnnouncementPageSchema[]} [pages]
 * @property {EditorMeta} [editor_meta]
 * @property {AnnouncementAuthorSchema} [author]
 * @property {string} [created_at]
 * @property {string} [app]
 * @property {string} [modified_at]
 * @property {ScheduleSchema} [_schedule]
 */
/**
 * @typedef ScheduleSchema
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 * @property {Object[]} [next_schedule]
 */
/**
 * @typedef NextSchedule
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef AnnouncementSchema
 * @property {string} [announcement]
 * @property {ScheduleStartSchema} [schedule]
 */
/**
 * @typedef ScheduleStartSchema
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef BlogGetResponse
 * @property {BlogSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ResourceContent
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef Asset
 * @property {string} [aspect_ratio]
 * @property {string} [id]
 * @property {string} [secure_url]
 */
/**
 * @typedef Author
 * @property {string} [designation]
 * @property {string} [id]
 * @property {string} [name]
 */
/**
 * @typedef BlogSchema
 * @property {string} [_id]
 * @property {Object} [_custom_json]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {SEO} [seo]
 * @property {CronSchedule} [_schedule]
 * @property {string} [title]
 * @property {DateMeta} [date_meta]
 */
/**
 * @typedef SEO
 * @property {string} [description]
 * @property {SEOImage} [image]
 * @property {string} [title]
 */
/**
 * @typedef SEOImage
 * @property {string} [url]
 */
/**
 * @typedef BlogRequest
 * @property {string} [application]
 * @property {Object} [_custom_json]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {SEO} [seo]
 * @property {CronSchedule} [_schedule]
 */
/**
 * @typedef GetAnnouncementListSchema
 * @property {AdminAnnouncementSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CreateAnnouncementSchema
 * @property {string} [message]
 * @property {AdminAnnouncementSchema} [data]
 */
/**
 * @typedef DataLoaderResponseSchema
 * @property {string} [application]
 * @property {string} [company]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [service]
 * @property {string} [operation_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [content]
 * @property {DataLoaderSourceSchema} [__source]
 */
/**
 * @typedef DataLoaderResetResponseSchema
 * @property {string} [reset]
 */
/**
 * @typedef Navigation
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [orientation]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [_id]
 * @property {string} [position]
 * @property {string} [application]
 * @property {string} [platform]
 * @property {NavigationReference} [navigation]
 */
/**
 * @typedef LocaleLanguage
 * @property {Language} [hi]
 * @property {Language} [ar]
 * @property {Language} [en_us]
 */
/**
 * @typedef Language
 * @property {string} [display]
 */
/**
 * @typedef Action
 * @property {ActionPage} [page]
 * @property {ActionPage} [popup]
 * @property {string} [type]
 */
/**
 * @typedef ActionPage
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {string} [url]
 * @property {PageType} type
 */
/**
 * @typedef NavigationReference
 * @property {string[]} [acl]
 * @property {string[]} [tags]
 * @property {LocaleLanguage} [_locale_language]
 * @property {string} [image]
 * @property {string} [type]
 * @property {Action} [action]
 * @property {boolean} [active]
 * @property {string} [display]
 * @property {number} [sort_order]
 * @property {NavigationReference[]} [sub_navigation]
 */
/**
 * @typedef LandingPage
 * @property {LandingPageSchema} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef ConfigurationSchema
 * @property {number} [sleep_time]
 * @property {boolean} [start_on_launch]
 * @property {number} [duration]
 * @property {string} [slide_direction]
 */
/**
 * @typedef SlideshowMedia
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [bg_color]
 * @property {number} [duration]
 * @property {boolean} [auto_decide_duration]
 * @property {Action} [action]
 */
/**
 * @typedef Slideshow
 * @property {SlideshowSchema} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef AnnouncementsResponseSchema
 * @property {Object} [announcements]
 * @property {number} [refresh_rate]
 * @property {string[]} [refresh_pages]
 */
/**
 * @typedef FaqResponseSchema
 * @property {FaqSchema[]} [faqs]
 */
/**
 * @typedef UpdateHandpickedSchema
 * @property {HandpickedTagSchema} [tag]
 */
/**
 * @typedef HandpickedTagSchema
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {string} [name]
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [sub_type]
 * @property {string} [content]
 */
/**
 * @typedef RemoveHandpickedSchema
 * @property {string[]} [tags]
 */
/**
 * @typedef CreateTagSchema
 * @property {string} [name]
 * @property {string} [sub_type]
 * @property {string} [_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {string} [content]
 */
/**
 * @typedef CreateTagRequestSchema
 * @property {CreateTagSchema[]} [tags]
 */
/**
 * @typedef DataLoaderSchema
 * @property {string} [name]
 * @property {string} [service]
 * @property {string} [operation_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [content]
 * @property {DataLoaderSourceSchema} [__source]
 */
/**
 * @typedef DataLoaderSourceSchema
 * @property {string} [type]
 * @property {string} [id]
 */
/**
 * @typedef DataLoadersSchema
 * @property {DataLoaderSchema[]} [items]
 */
/**
 * @typedef TagDeleteSuccessResponse
 * @property {boolean} [success]
 */
/**
 * @typedef ContentAPIError
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {Object} [meta]
 */
/**
 * @typedef CategorySchema
 * @property {number} [index]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string[]} [children]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [icon_url]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef ChildrenSchema
 * @property {string} [question]
 * @property {string} [answer]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [_id]
 */
/**
 * @typedef CategoryRequestSchema
 * @property {string} [slug]
 * @property {string} [title]
 */
/**
 * @typedef FAQCategorySchema
 * @property {number} [index]
 * @property {string} [title]
 * @property {string} [description]
 * @property {ChildrenSchema[]} [children]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [icon_url]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef FaqSchema
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [_id]
 * @property {string} [question]
 * @property {string} [answer]
 */
/**
 * @typedef FAQ
 * @property {string} [slug]
 * @property {string} [question]
 * @property {string} [answer]
 */
/**
 * @typedef CreateFaqResponseSchema
 * @property {FaqSchema} [faq]
 */
/**
 * @typedef CreateFaqSchema
 * @property {FAQ} [faq]
 */
/**
 * @typedef GetFaqSchema
 * @property {Object[]} [faqs]
 */
/**
 * @typedef UpdateFaqCategoryRequestSchema
 * @property {CategorySchema} [category]
 */
/**
 * @typedef CreateFaqCategoryRequestSchema
 * @property {CategoryRequestSchema} [category]
 */
/**
 * @typedef CreateFaqCategorySchema
 * @property {CategorySchema} [category]
 */
/**
 * @typedef GetFaqCategoriesSchema
 * @property {CategorySchema[]} [categories]
 */
/**
 * @typedef GetFaqCategoryBySlugSchema
 * @property {FAQCategorySchema} [category]
 */
/**
 * @typedef LandingPageGetResponse
 * @property {LandingPageSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef LandingPageSchema
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {string[]} [platform]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef DefaultNavigationResponse
 * @property {NavigationSchema[]} [items]
 */
/**
 * @typedef NavigationGetResponse
 * @property {NavigationSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef Orientation
 * @property {string[]} [portrait]
 * @property {string[]} [landscape]
 */
/**
 * @typedef NavigationSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string[]} [platform]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {Orientation} [orientation]
 * @property {number} [version]
 * @property {NavigationReference[]} [navigation]
 */
/**
 * @typedef NavigationRequest
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string[]} [platform]
 * @property {Orientation} [orientation]
 * @property {NavigationReference[]} [navigation]
 */
/**
 * @typedef CustomPageSchema
 * @property {string} [_id]
 * @property {string} [platform]
 * @property {string} [title]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {string} [orientation]
 * @property {string} [application]
 * @property {string} [description]
 * @property {boolean} [published]
 * @property {string[]} [tags]
 * @property {Object[]} [content]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {ScheduleSchema} [_schedule]
 */
/**
 * @typedef ContentSchema
 * @property {string} [type]
 * @property {Object} [value]
 */
/**
 * @typedef CustomPage
 * @property {CustomPageSchema} [data]
 */
/**
 * @typedef FeatureImage
 * @property {string} [secure_url]
 */
/**
 * @typedef PageGetResponse
 * @property {PageSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PageSpec
 * @property {Object[]} [specifications]
 */
/**
 * @typedef PageSpecParam
 * @property {string} [key]
 * @property {boolean} [required]
 */
/**
 * @typedef PageSpecItem
 * @property {string} [page_type]
 * @property {string} [display_name]
 * @property {PageSpecParam[]} [params]
 * @property {PageSpecParam[]} [query]
 */
/**
 * @typedef PageSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string[]} [component_ids]
 * @property {Object[]} [content]
 * @property {string} [content_path]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [description]
 * @property {Asset} [feature_image]
 * @property {Object[]} [page_meta]
 * @property {ScheduleSchema} [_schedule]
 * @property {Object} [_custom_json]
 * @property {string} [orientation]
 * @property {string} [platform]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {string} [type]
 * @property {SEO} [seo]
 * @property {Object} [visibility]
 * @property {boolean} [archived]
 */
/**
 * @typedef CreatedBySchema
 * @property {string} [id]
 */
/**
 * @typedef PageContent
 * @property {string} [type]
 * @property {Object} [value]
 */
/**
 * @typedef PageMeta
 * @property {string} [key]
 * @property {Object} [value]
 */
/**
 * @typedef PageRequest
 * @property {CronSchedule} [_schedule]
 * @property {string} [application]
 * @property {Author} [author]
 * @property {Object} [_custom_json]
 * @property {string} [orientation]
 * @property {Object[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {SEO} [seo]
 * @property {string} [title]
 */
/**
 * @typedef CronSchedule
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 */
/**
 * @typedef PagePublishRequest
 * @property {boolean} [publish]
 */
/**
 * @typedef PageMetaSchema
 * @property {NavigationSchema[]} [system_pages]
 * @property {PageSchema[]} [custom_pages]
 * @property {string} [application_id]
 */
/**
 * @typedef SlideshowGetResponse
 * @property {SlideshowSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SlideshowSchema
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {DateMeta} [date_meta]
 * @property {string} [application]
 * @property {string} [platform]
 * @property {ConfigurationSchema} [configuration]
 * @property {SlideshowMedia[]} [media]
 * @property {boolean} [active]
 * @property {boolean} [archived]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef SlideshowRequest
 * @property {string} [slug]
 * @property {string} [platform]
 * @property {ConfigurationSchema} [configuration]
 * @property {SlideshowMedia} [media]
 * @property {boolean} [active]
 */
/**
 * @typedef Support
 * @property {boolean} [created]
 * @property {string} [_id]
 * @property {string} [config_type]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {ContactSchema} [contact]
 */
/**
 * @typedef PhoneProperties
 * @property {string} [key]
 * @property {string} [code]
 * @property {string} [number]
 */
/**
 * @typedef PhoneSchema
 * @property {boolean} [active]
 * @property {PhoneProperties[]} [phone]
 */
/**
 * @typedef EmailProperties
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef EmailSchema
 * @property {boolean} [active]
 * @property {EmailProperties[]} [email]
 */
/**
 * @typedef ContactSchema
 * @property {PhoneSchema} [phone]
 * @property {EmailSchema} [email]
 */
/**
 * @typedef TagsSchema
 * @property {string} [application]
 * @property {string} [_id]
 * @property {TagSchema[]} [tags]
 */
/**
 * @typedef TagSchema
 * @property {string} [name]
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [sub_type]
 * @property {string} [_id]
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {string} [content]
 * @property {TagSourceSchema} [__source]
 */
/**
 * @typedef TagSourceSchema
 * @property {string} [type]
 * @property {string} [id]
 */
/**
 * @typedef UnauthenticatedUser
 * @property {string} [message]
 */
/**
 * @typedef UnauthenticatedApplication
 * @property {string} [message]
 */
/**
 * @typedef ResourceNotFound
 * @property {string} [message]
 */
/**
 * @typedef InternalServerError
 * @property {string} [message]
 * @property {string} [code]
 */
/**
 * @typedef CheckValidityResponse
 * @property {boolean} [is_valid]
 * @property {number} [discount_amount]
 */
/**
 * @typedef PlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */
/**
 * @typedef Plan
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */
/**
 * @typedef DetailedPlanComponents
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {string} [group]
 * @property {string} [icon]
 * @property {Object} [links]
 * @property {boolean} [enabled]
 * @property {string} [display_text]
 */
/**
 * @typedef DetailedPlan
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {DetailedPlanComponents[]} [components]
 */
/**
 * @typedef SubscriptionTrialPeriod
 * @property {string} [start_date]
 * @property {string} [end_date]
 */
/**
 * @typedef EntityChargePrice
 * @property {number} amount
 * @property {string} currency_code
 */
/**
 * @typedef EntityChargeRecurring
 * @property {string} interval
 */
/**
 * @typedef ChargeLineItem
 * @property {string} name
 * @property {string} term
 * @property {string} pricing_type
 * @property {EntityChargePrice} price
 * @property {EntityChargeRecurring} [recurring]
 * @property {number} [capped_amount]
 * @property {number} [trial_days]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */
/**
 * @typedef CreateSubscriptionCharge
 * @property {string} name
 * @property {number} [trial_days]
 * @property {ChargeLineItem[]} line_items
 * @property {boolean} [is_test]
 * @property {string} return_url
 */
/**
 * @typedef CurrentPeriod
 * @property {string} [start_date]
 * @property {string} [end_date]
 */
/**
 * @typedef SubscriptionCharge
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [term]
 * @property {string} [pricing_type]
 * @property {EntityChargePrice} [price]
 * @property {EntityChargeRecurring} [recurring]
 * @property {number} [capped_amount]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {string} [billing_date]
 * @property {CurrentPeriod} [current_period]
 * @property {string} [status]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */
/**
 * @typedef EntitySubscription
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [status]
 * @property {number} [company_id]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {number} [trial_days]
 * @property {SubscriptionTrialPeriod} [trial_period]
 * @property {Object} [metadata]
 * @property {SubscriptionCharge[]} [line_items]
 */
/**
 * @typedef CreateSubscriptionResponse
 * @property {EntitySubscription} [subscription]
 * @property {string} [confirm_url]
 */
/**
 * @typedef InvoiceDetailsPeriod
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef InvoiceDetailsClient
 * @property {string[]} [address_lines]
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [phone]
 */
/**
 * @typedef InvoiceDetailsStatusTrail
 * @property {string} [_id]
 * @property {string} [value]
 * @property {string} [timestamp]
 */
/**
 * @typedef InvoiceDetailsPaymentMethodsDataChecks
 * @property {string} [cvc_check]
 * @property {string} [address_line1_check]
 * @property {string} [address_postal_code_check]
 */
/**
 * @typedef InvoiceDetailsPaymentMethodsDataNetworks
 * @property {string[]} [available]
 * @property {string} [preferred]
 */
/**
 * @typedef InvoiceDetailsPaymentMethodsDataThreeDSecureUsage
 * @property {boolean} [supported]
 */
/**
 * @typedef InvoiceDetailsPaymentMethodsData
 * @property {string} [brand]
 * @property {string} [last4]
 * @property {InvoiceDetailsPaymentMethodsDataChecks} [checks]
 * @property {string} [wallet]
 * @property {string} [country]
 * @property {string} [funding]
 * @property {number} [exp_year]
 * @property {InvoiceDetailsPaymentMethodsDataNetworks} [networks]
 * @property {number} [exp_month]
 * @property {string} [fingerprint]
 * @property {string} [generated_from]
 * @property {InvoiceDetailsPaymentMethodsDataThreeDSecureUsage} [three_d_secure_usage]
 */
/**
 * @typedef InvoiceDetailsPaymentMethods
 * @property {number} [id]
 * @property {string} [type]
 * @property {string} [pg_payment_method_id]
 * @property {InvoiceDetailsPaymentMethodsData} [data]
 * @property {boolean} [is_default]
 */
/**
 * @typedef InvoicePaymentMethod
 * @property {string} [pg_payment_method_id]
 */
/**
 * @typedef InvoiceDetails
 * @property {InvoiceDetailsPeriod} [period]
 * @property {InvoiceDetailsClient} [client]
 * @property {boolean} [auto_advance]
 * @property {string} [currency]
 * @property {boolean} [paid]
 * @property {number} [attemp]
 * @property {string} [_id]
 * @property {string} [collection_method]
 * @property {string} [subscriber_id]
 * @property {string} [invoice_url]
 * @property {string} [number]
 * @property {Object} [pg_data]
 * @property {string} [receipt_number]
 * @property {string} [statement_descriptor]
 * @property {string} [current_status]
 * @property {InvoiceDetailsStatusTrail[]} [status_trail]
 * @property {number} [subtotal]
 * @property {number} [total]
 * @property {string} [subscription]
 * @property {string} [next_action_time]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [hash_identifier]
 * @property {InvoicePaymentMethod} [payment_method]
 */
/**
 * @typedef InvoiceItemsPlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */
/**
 * @typedef InvoiceItemsPlan
 * @property {InvoiceItemsPlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */
/**
 * @typedef InvoiceItemsPeriod
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef InvoiceItems
 * @property {string} [_id]
 * @property {string} [currency]
 * @property {InvoiceItemsPlan} [plan]
 * @property {string} [name]
 * @property {number} [quantity]
 * @property {string} [description]
 * @property {InvoiceItemsPeriod} [period]
 * @property {number} [unit_amount]
 * @property {number} [amount]
 * @property {string} [type]
 * @property {string} [invoice_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */
/**
 * @typedef Invoice
 * @property {InvoiceDetails} [invoice]
 * @property {InvoiceItems[]} [invoice_items]
 */
/**
 * @typedef InvoicesDataClient
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [phone]
 * @property {string[]} [address_lines]
 */
/**
 * @typedef InvoicesDataPeriod
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef InvoicesDataPaymentMethod
 * @property {string} [pg_payment_method_id]
 */
/**
 * @typedef InvoicesData
 * @property {string} [_id]
 * @property {InvoicesDataClient} [client]
 * @property {boolean} [auto_advance]
 * @property {string} [currency]
 * @property {boolean} [paid]
 * @property {number} [attemp]
 * @property {string} [collection_method]
 * @property {string} [subscriber_id]
 * @property {string} [invoice_url]
 * @property {string} [number]
 * @property {Object} [pg_data]
 * @property {InvoicesDataPeriod} [period]
 * @property {string} [receipt_number]
 * @property {string} [statement_descriptor]
 * @property {string} [current_status]
 * @property {InvoiceDetailsStatusTrail[]} [status_trail]
 * @property {number} [subtotal]
 * @property {number} [total]
 * @property {string} [subscription]
 * @property {string} [next_action_time]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [hash_identifier]
 * @property {InvoicesDataPaymentMethod} [payment_method]
 * @property {InvoiceItems[]} [invoice_items]
 */
/**
 * @typedef Invoices
 * @property {InvoicesData[]} [data]
 * @property {number} [start]
 * @property {number} [end]
 * @property {number} [limit]
 * @property {number} [page]
 * @property {number} [total]
 */
/**
 * @typedef Phone
 * @property {string} [phone_number]
 * @property {string} [phone_country_code]
 */
/**
 * @typedef SubscriptionBillingAddress
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [city]
 * @property {string} [line1]
 * @property {string} [line2]
 * @property {string} [postal_code]
 */
/**
 * @typedef SubscriptionCustomer
 * @property {Phone} [phone]
 * @property {SubscriptionBillingAddress} [billing_address]
 * @property {string} [_id]
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {Object} [data]
 */
/**
 * @typedef SubscriptionCustomerCreate
 * @property {Phone} [phone]
 * @property {SubscriptionBillingAddress} [billing_address]
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [email]
 */
/**
 * @typedef SubscriptionCurrentPeriod
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef SubscriptionPauseCollection
 * @property {string} [behavior]
 * @property {string} [resume_at]
 */
/**
 * @typedef SubscriptionTrial
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef SubscriptionInvoiceSettings
 * @property {boolean} [generation]
 * @property {boolean} [charging]
 */
/**
 * @typedef Subscription
 * @property {SubscriptionCurrentPeriod} [current_period]
 * @property {SubscriptionPauseCollection} [pause_collection]
 * @property {SubscriptionTrial} [trial]
 * @property {SubscriptionInvoiceSettings} [invoice_settings]
 * @property {boolean} [is_active]
 * @property {boolean} [cancel_at_period_end]
 * @property {string} [_id]
 * @property {string} [subscriber_id]
 * @property {string} [plan_id]
 * @property {string} [product_suite_id]
 * @property {Plan} [plan_data]
 * @property {string} [current_status]
 * @property {string} [collection_method]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [latest_invoice]
 */
/**
 * @typedef SubscriptionStatus
 * @property {boolean} [is_enabled]
 * @property {Subscription} [subscription]
 */
/**
 * @typedef SubscriptionLimitApplication
 * @property {boolean} [enabled]
 * @property {number} [hard_limit]
 * @property {number} [soft_limit]
 */
/**
 * @typedef SubscriptionLimitMarketplace
 * @property {boolean} [enabled]
 */
/**
 * @typedef SubscriptionLimitOtherPlatform
 * @property {boolean} [enabled]
 */
/**
 * @typedef SubscriptionLimitTeam
 * @property {number} [limit]
 */
/**
 * @typedef SubscriptionLimitProducts
 * @property {boolean} [bulk]
 * @property {number} [limit]
 */
/**
 * @typedef SubscriptionLimitExtensions
 * @property {boolean} [enabled]
 * @property {number} [limit]
 */
/**
 * @typedef SubscriptionLimitIntegrations
 * @property {boolean} [enabled]
 * @property {number} [limit]
 */
/**
 * @typedef SubscriptionLimit
 * @property {SubscriptionLimitApplication} [application]
 * @property {SubscriptionLimitMarketplace} [marketplace]
 * @property {SubscriptionLimitOtherPlatform} [other_platform]
 * @property {SubscriptionLimitTeam} [team]
 * @property {SubscriptionLimitProducts} [products]
 * @property {SubscriptionLimitExtensions} [extensions]
 * @property {SubscriptionLimitIntegrations} [integrations]
 * @property {boolean} [is_trial_plan]
 */
/**
 * @typedef SubscriptionActivateReq
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [product_suite]
 * @property {string} [plan_id]
 * @property {string} [payment_method]
 */
/**
 * @typedef SubscriptionActivateRes
 * @property {boolean} [success]
 * @property {Subscription} [data]
 */
/**
 * @typedef CancelSubscriptionReq
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [product_suite]
 * @property {string} [subscription_id]
 */
/**
 * @typedef CancelSubscriptionRes
 * @property {boolean} [success]
 * @property {Subscription} [data]
 */
/**
 * @typedef StatsImported
 * @property {number} [count]
 */
/**
 * @typedef StatsProcessedEmail
 * @property {number} [success]
 * @property {number} [failed]
 * @property {number} [suppressed]
 */
/**
 * @typedef StatsProcessedSms
 * @property {number} [success]
 * @property {number} [failed]
 * @property {number} [suppressed]
 */
/**
 * @typedef StatsProcessed
 * @property {StatsProcessedEmail} [email]
 * @property {StatsProcessedSms} [sms]
 */
/**
 * @typedef Stats
 * @property {string} [_id]
 * @property {Object} [imported]
 * @property {Object} [processed]
 */
/**
 * @typedef GetStats
 * @property {Stats[]} [items]
 */
/**
 * @typedef CampaignReq
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 */
/**
 * @typedef RecipientHeaders
 * @property {string} [email]
 */
/**
 * @typedef CampaignEmailTemplate
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef CampignEmailProvider
 * @property {string} [_id]
 * @property {string} [from_name]
 * @property {string} [from_email]
 */
/**
 * @typedef CampaignEmail
 * @property {CampaignEmailTemplate} [template]
 * @property {CampignEmailProvider} [provider]
 */
/**
 * @typedef Campaign
 * @property {RecipientHeaders} [recipient_headers]
 * @property {CampaignEmail} [email]
 * @property {string} [description]
 * @property {Object[]} [tags]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [datasource]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */
/**
 * @typedef Campaigns
 * @property {Campaign[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef BigqueryHeadersReq
 * @property {string} [query]
 * @property {string} [type]
 */
/**
 * @typedef BigqueryHeadersResHeaders
 * @property {string} [name]
 * @property {string} [type]
 */
/**
 * @typedef BigqueryHeadersRes
 * @property {BigqueryHeadersResHeaders[]} [headers]
 */
/**
 * @typedef GetNRecordsCsvReq
 * @property {string} [url]
 * @property {boolean} [header]
 * @property {number} [count]
 */
/**
 * @typedef GetNRecordsCsvResItems
 * @property {string} [phone_number]
 * @property {string} [email]
 * @property {string} [firstname]
 * @property {string} [lastname]
 * @property {string} [orderid]
 */
/**
 * @typedef GetNRecordsCsvRes
 * @property {GetNRecordsCsvResItems[]} [items]
 */
/**
 * @typedef AudienceReq
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 */
/**
 * @typedef Audience
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */
/**
 * @typedef Audiences
 * @property {Audience[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef EmailProviderReqFrom
 * @property {string} [name]
 * @property {string} [email]
 * @property {boolean} [is_default]
 */
/**
 * @typedef EmailProviderReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [api_key]
 * @property {string} [type]
 * @property {string} [provider]
 * @property {EmailProviderReqFrom[]} [from_address]
 */
/**
 * @typedef EmailProvider
 * @property {string} [type]
 * @property {string} [provider]
 * @property {EmailProviderReqFrom[]} [from_address]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [api_key]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */
/**
 * @typedef EmailProviders
 * @property {EmailProvider[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef EmailTemplateDeleteSuccessRes
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef EmailTemplateDeleteFailureRes
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef EmailTemplateKeys
 * @property {string} [to]
 * @property {string} [cc]
 * @property {string} [bcc]
 */
/**
 * @typedef EmailTemplateHeaders
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef EmailTemplateReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {EmailTemplateKeys} [keys]
 * @property {string[]} [static_to]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_bcc]
 * @property {string} [reply_to]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [attachments]
 * @property {string} [priority]
 */
/**
 * @typedef TemplateAndType
 * @property {string} [template_type]
 * @property {string} [template]
 */
/**
 * @typedef EmailTemplateRes
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {string[]} [static_to]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_bcc]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {EmailTemplateKeys} [keys]
 * @property {string} [reply_to]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */
/**
 * @typedef EmailTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [static_to]
 * @property {Object[]} [static_cc]
 * @property {Object[]} [static_bcc]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {string} [from_name]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [headers]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef SystemEmailTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [static_to]
 * @property {Object[]} [static_cc]
 * @property {Object[]} [static_bcc]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {string} [from_name]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [headers]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef EmailTemplates
 * @property {EmailTemplate[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SystemEmailTemplates
 * @property {SystemEmailTemplate[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PayloadEmailTemplateStructure
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef PayloadEmailProviderStructure
 * @property {string} [_id]
 */
/**
 * @typedef PayloadEmailStructure
 * @property {PayloadEmailTemplateStructure} [template]
 * @property {PayloadEmailProviderStructure} [provider]
 */
/**
 * @typedef PayloadSmsTemplateStructure
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef PayloadSmsProviderStructure
 * @property {string} [_id]
 */
/**
 * @typedef PayloadSmsStructure
 * @property {PayloadSmsTemplateStructure} [template]
 * @property {PayloadSmsProviderStructure} [provider]
 */
/**
 * @typedef PayloadStructure
 * @property {Object[]} [data]
 * @property {PayloadEmailStructure} [email]
 * @property {PayloadSmsStructure} [sms]
 * @property {string} [application]
 */
/**
 * @typedef MetaStructure
 * @property {string} [job_type]
 * @property {string} [action]
 * @property {string} [trace]
 * @property {string} [timestamp]
 */
/**
 * @typedef EngineRequest
 * @property {PayloadStructure} [payload]
 * @property {MetaStructure} [meta]
 */
/**
 * @typedef EngineResponse
 * @property {boolean} [success]
 */
/**
 * @typedef EventSubscriptionTemplateSms
 * @property {boolean} [subscribed]
 * @property {string} [template]
 */
/**
 * @typedef EventSubscriptionTemplateEmail
 * @property {boolean} [subscribed]
 * @property {string} [template]
 */
/**
 * @typedef EventSubscriptionTemplate
 * @property {EventSubscriptionTemplateSms} [sms]
 * @property {EventSubscriptionTemplateEmail} [email]
 */
/**
 * @typedef EventSubscription
 * @property {EventSubscriptionTemplate} [template]
 * @property {boolean} [is_default]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [event]
 * @property {string} [slug]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef EventSubscriptions
 * @property {EventSubscription[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef TriggerJobResponse
 * @property {number} [status]
 */
/**
 * @typedef TriggerJobRequest
 * @property {string} [job_id]
 */
/**
 * @typedef Job
 * @property {boolean} [completed]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [campaign]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef Jobs
 * @property {Job[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef JobLog
 * @property {Object} [imported]
 * @property {Object} [processed]
 * @property {string} [_id]
 * @property {string} [job]
 * @property {string} [campaign]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef JobLogs
 * @property {JobLog[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef LogEmail
 * @property {string} [template]
 */
/**
 * @typedef LogPushnotification
 * @property {string[]} [pushtokens]
 */
/**
 * @typedef LogMeta
 * @property {string} [type]
 * @property {string} [identifier]
 * @property {string} [key]
 * @property {string} [offset]
 * @property {string} [partition]
 * @property {string} [topic]
 */
/**
 * @typedef Log
 * @property {LogEmail} [email]
 * @property {LogPushnotification} [pushnotification]
 * @property {LogMeta} [meta]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [service]
 * @property {string} [step]
 * @property {string} [status]
 * @property {Object} [data]
 * @property {string} [expire_at]
 * @property {string} [created_at]
 */
/**
 * @typedef Logs
 * @property {Log[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PushtokenReq
 * @property {string} [action]
 * @property {string} [bundle_identifier]
 * @property {string} [push_token]
 * @property {string} [unique_device_id]
 */
/**
 * @typedef PushtokenRes
 * @property {string} [_id]
 * @property {string} [bundle_identifier]
 * @property {string} [push_token]
 * @property {string} [unique_device_id]
 * @property {string} [type]
 * @property {string} [platform]
 * @property {string} [application_id]
 * @property {string} [user_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [expired_at]
 */
/**
 * @typedef SmsProviderReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [sender]
 * @property {string} [username]
 * @property {string} [authkey]
 * @property {string} [type]
 * @property {string} [provider]
 */
/**
 * @typedef SmsProvider
 * @property {number} [rpt]
 * @property {string} [type]
 * @property {string} [provider]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [sender]
 * @property {string} [username]
 * @property {string} [authkey]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */
/**
 * @typedef SmsProviders
 * @property {SmsProvider[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SmsTemplateDeleteSuccessRes
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef SmsTemplateDeleteFailureRes
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef SmsTemplateMessage
 * @property {string} [template_type]
 * @property {string} [template]
 */
/**
 * @typedef SmsTemplateReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {Object[]} [attachments]
 * @property {string} [priority]
 */
/**
 * @typedef SmsTemplateRes
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */
/**
 * @typedef SmsTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {string} [priority]
 * @property {Object[]} [tags]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef SystemSmsTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef SmsTemplates
 * @property {SmsTemplate[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SystemSmsTemplates
 * @property {SystemSmsTemplate[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef Notification
 * @property {string} [title]
 * @property {string} [body]
 * @property {string} [subtitle]
 * @property {string} [icon]
 * @property {string} [deeplink]
 * @property {string} [click_action]
 */
/**
 * @typedef SystemNotificationUser
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef SystemNotificationSettings
 * @property {boolean} [sound]
 * @property {string} [priority]
 * @property {string} [time_to_live]
 */
/**
 * @typedef SystemNotification
 * @property {Notification} [notification]
 * @property {SystemNotificationUser} [user]
 * @property {SystemNotificationUser} [settings]
 * @property {string} [_id]
 * @property {string} [group]
 * @property {string} [created_at]
 */
/**
 * @typedef SystemNotificationsPage
 * @property {string} [type]
 * @property {number} [current]
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 */
/**
 * @typedef SystemNotifications
 * @property {SystemNotification[]} [items]
 * @property {number} [last_read_anchor]
 * @property {Page} [page]
 */
/**
 * @typedef PaymentGatewayConfigResponse
 * @property {boolean} success
 * @property {string} app_id
 * @property {string[]} excluded_fields
 * @property {boolean} created
 * @property {string[]} display_fields
 * @property {Object[]} [aggregators]
 */
/**
 * @typedef ErrorCodeDescription
 * @property {boolean} success
 * @property {string} code
 * @property {string} description
 */
/**
 * @typedef PaymentGatewayConfig
 * @property {boolean} [is_active]
 * @property {string} config_type
 * @property {string} merchant_salt
 * @property {string} secret
 * @property {string} key
 */
/**
 * @typedef PaymentGatewayConfigRequest
 * @property {string} app_id
 * @property {PaymentGatewayConfig} [aggregator_name]
 * @property {boolean} [is_active]
 */
/**
 * @typedef PaymentGatewayToBeReviewed
 * @property {boolean} success
 * @property {string[]} aggregator
 */
/**
 * @typedef ErrorCodeAndDescription
 * @property {string} code
 * @property {string} description
 */
/**
 * @typedef HttpErrorCodeAndResponse
 * @property {boolean} success
 * @property {ErrorCodeAndDescription} error
 */
/**
 * @typedef PaymentModeLogo
 * @property {string} large
 * @property {string} small
 */
/**
 * @typedef IntentApp
 * @property {string} [display_name]
 * @property {string} [package_name]
 * @property {string} [code]
 * @property {PaymentModeLogo} [logos]
 */
/**
 * @typedef IntentAppErrorList
 * @property {string} [code]
 * @property {string} [package_name]
 */
/**
 * @typedef PaymentModeList
 * @property {IntentApp[]} [intent_app]
 * @property {string} aggregator_name
 * @property {string} [card_token]
 * @property {string} [card_id]
 * @property {boolean} [expired]
 * @property {string} [card_fingerprint]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {PaymentModeLogo} [logo_url]
 * @property {string} [fynd_vpa]
 * @property {string} [nickname]
 * @property {string} [name]
 * @property {string} [card_issuer]
 * @property {number} [retry_count]
 * @property {string} [card_number]
 * @property {number} [exp_month]
 * @property {boolean} [compliant_with_tokenisation_guidelines]
 * @property {string[]} [intent_app_error_list]
 * @property {number} [exp_year]
 * @property {string} [card_name]
 * @property {boolean} [intent_flow]
 * @property {string} [card_brand]
 * @property {number} [display_priority]
 * @property {string} [card_type]
 * @property {string} [code]
 * @property {string} [card_isin]
 * @property {number} [timeout]
 * @property {string} [card_brand_image]
 * @property {string} [display_name]
 * @property {string} [card_reference]
 * @property {string} [merchant_code]
 */
/**
 * @typedef RootPaymentMode
 * @property {boolean} [add_card_enabled]
 * @property {boolean} [anonymous_enable]
 * @property {string} [aggregator_name]
 * @property {string} name
 * @property {PaymentModeList[]} [list]
 * @property {boolean} [save_card]
 * @property {number} display_priority
 * @property {string} display_name
 */
/**
 * @typedef PaymentOptions
 * @property {RootPaymentMode[]} payment_option
 */
/**
 * @typedef PaymentOptionsResponse
 * @property {boolean} success
 * @property {PaymentOptions} payment_options
 */
/**
 * @typedef PayoutsResponse
 * @property {boolean} is_active
 * @property {string} transfer_type
 * @property {boolean} is_default
 * @property {Object} unique_transfer_no
 * @property {Object[]} payouts_aggregators
 * @property {Object} more_attributes
 * @property {Object} customers
 */
/**
 * @typedef PayoutBankDetails
 * @property {string} [bank_name]
 * @property {string} account_type
 * @property {string} [branch_name]
 * @property {string} [country]
 * @property {string} [account_holder]
 * @property {number} [pincode]
 * @property {string} [account_no]
 * @property {string} ifsc_code
 * @property {string} [city]
 * @property {string} [state]
 */
/**
 * @typedef PayoutRequest
 * @property {string} unique_external_id
 * @property {boolean} is_active
 * @property {string} transfer_type
 * @property {Object} users
 * @property {string} aggregator
 * @property {PayoutBankDetails} bank_details
 */
/**
 * @typedef PayoutResponse
 * @property {boolean} success
 * @property {boolean} is_active
 * @property {Object} users
 * @property {string} transfer_type
 * @property {string} aggregator
 * @property {boolean} created
 * @property {Object} bank_details
 * @property {string} unique_transfer_no
 * @property {Object} payouts
 * @property {string} payment_status
 */
/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} success
 * @property {boolean} is_default
 * @property {boolean} is_active
 */
/**
 * @typedef UpdatePayoutRequest
 * @property {string} unique_external_id
 * @property {boolean} is_default
 * @property {boolean} is_active
 */
/**
 * @typedef DeletePayoutResponse
 * @property {boolean} success
 */
/**
 * @typedef SubscriptionPaymentMethodResponse
 * @property {boolean} success
 * @property {Object[]} data
 */
/**
 * @typedef DeleteSubscriptionPaymentMethodResponse
 * @property {boolean} success
 */
/**
 * @typedef SubscriptionConfigResponse
 * @property {boolean} success
 * @property {string} aggregator
 * @property {Object} config
 */
/**
 * @typedef SaveSubscriptionSetupIntentRequest
 * @property {string} unique_external_id
 */
/**
 * @typedef SaveSubscriptionSetupIntentResponse
 * @property {boolean} success
 * @property {Object} data
 */
/**
 * @typedef BeneficiaryModeDetails
 * @property {string} bank_name
 * @property {string} [address]
 * @property {string} [wallet]
 * @property {string} branch_name
 * @property {string} [comment]
 * @property {string} [vpa]
 * @property {string} email
 * @property {string} account_holder
 * @property {string} mobile
 * @property {string} account_no
 * @property {string} ifsc_code
 */
/**
 * @typedef AddBeneficiaryDetailsRequest
 * @property {string} order_id
 * @property {BeneficiaryModeDetails} details
 * @property {string} shipment_id
 * @property {boolean} delights
 * @property {string} transfer_mode
 * @property {string} [otp]
 * @property {string} [request_id]
 */
/**
 * @typedef RefundAccountResponse
 * @property {boolean} success
 * @property {boolean} [is_verified_flag]
 * @property {string} message
 * @property {Object} [data]
 */
/**
 * @typedef NotFoundResourceError
 * @property {boolean} success
 * @property {string} code
 * @property {string} description
 */
/**
 * @typedef IfscCodeResponse
 * @property {boolean} [success]
 * @property {string} bank_name
 * @property {string} branch_name
 */
/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} bank_name
 * @property {boolean} [branch_name]
 * @property {string} [delights_user_name]
 * @property {string} email
 * @property {string} account_holder
 * @property {string} account_no
 * @property {string} modified_on
 * @property {string} address
 * @property {boolean} is_active
 * @property {number} id
 * @property {string} transfer_mode
 * @property {boolean} [mobile]
 * @property {string} ifsc_code
 * @property {string} created_on
 * @property {boolean} [comment]
 * @property {string} subtitle
 * @property {string} beneficiary_id
 * @property {string} title
 * @property {string} display_name
 */
/**
 * @typedef OrderBeneficiaryResponse
 * @property {boolean} [show_beneficiary_details]
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 */
/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [order_id]
 * @property {string} [payment_gateway]
 * @property {string} [current_status]
 * @property {string} [payment_id]
 * @property {Object} [extra_meta]
 */
/**
 * @typedef MultiTenderPaymentMethod
 * @property {string} [name]
 * @property {string} mode
 * @property {number} amount
 * @property {MultiTenderPaymentMeta} [meta]
 */
/**
 * @typedef PaymentConfirmationRequest
 * @property {string} order_id
 * @property {MultiTenderPaymentMethod[]} payment_methods
 */
/**
 * @typedef PaymentConfirmationResponse
 * @property {boolean} success
 * @property {string} message
 * @property {string} order_id
 */
/**
 * @typedef GetActivityStatus
 * @property {ActivityHistory} activity_history
 */
/**
 * @typedef ActivityHistory
 * @property {string} [createdat]
 * @property {string} [message]
 * @property {string} [type]
 * @property {string} [user]
 */
/**
 * @typedef CanBreakRequestBody
 * @property {string[]} shipment_ids
 */
/**
 * @typedef CanBreakResponse
 * @property {boolean} status
 * @property {Object} valid_actions
 */
/**
 * @typedef FailedOrders
 * @property {FailOrder} orders
 */
/**
 * @typedef FailOrder
 * @property {string} [updated_at]
 * @property {string} [_id]
 * @property {string} [reason]
 * @property {MarketplaceOrder} [marketplace_order]
 * @property {string} [marketplace_order_id]
 * @property {string} [created_at]
 * @property {string} [app_id]
 * @property {string} [marketplace]
 * @property {number} [company_id]
 */
/**
 * @typedef MarketplaceOrder
 * @property {string} [order_status_url]
 * @property {string} [admin_graphql_api_id]
 * @property {string} [email]
 * @property {boolean} [test]
 * @property {string} [note]
 * @property {string} [total_price]
 * @property {number} [app_id]
 * @property {TotalDiscountsSet} [total_discounts_set]
 * @property {TotalPriceSet} [total_price_set]
 * @property {TotalTaxSet} [total_tax_set]
 * @property {string} [gateway]
 * @property {string} [name]
 * @property {SubtotalPriceSet} [subtotal_price_set]
 * @property {number} [number]
 * @property {boolean} [buyer_accepts_marketing]
 * @property {string} [contact_email]
 * @property {string} [token]
 * @property {string} [source_name]
 * @property {Object[]} [payment_gateway_names]
 * @property {string} [presentment_currency]
 * @property {string} [subtotal_price]
 * @property {string} [processed_at]
 * @property {number} [order_number]
 * @property {string} [total_tip_received]
 * @property {number} [id]
 * @property {boolean} [confirmed]
 * @property {string} [currency]
 * @property {string} [total_line_items_price]
 * @property {LineItems} [line_items]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [total_weight]
 * @property {BillingAddress} [billing_address]
 * @property {TotalShippingPriceSet} [total_shipping_price_set]
 * @property {Customer} [customer]
 * @property {string} [total_discounts]
 * @property {TotalLineItemsPriceSet} [total_line_items_price_set]
 * @property {string} [tags]
 * @property {string} [total_price_usd]
 * @property {number} [user_id]
 * @property {string} [total_tax]
 * @property {string} [processing_method]
 * @property {OrderShippingAddress} [shipping_address]
 * @property {boolean} [taxes_included]
 * @property {string} [financial_status]
 */
/**
 * @typedef TotalDiscountsSet
 * @property {PresentmentMoney} [presentment_money]
 * @property {ShopMoney} [shop_money]
 */
/**
 * @typedef PresentmentMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef ShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef TotalPriceSet
 * @property {TotalPriceSetShopMoney} [shop_money]
 * @property {TotalPriceSetPresentmentMoney} [presentment_money]
 */
/**
 * @typedef TotalPriceSetShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef TotalPriceSetPresentmentMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef TotalTaxSet
 * @property {TotalTaxSetShopMoney} [shop_money]
 * @property {TotalTaxSetPresentmentMoney} [presentment_money]
 */
/**
 * @typedef TotalTaxSetShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef TotalTaxSetPresentmentMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef SubtotalPriceSet
 * @property {SubtotalPriceSetShopMoney} [shop_money]
 * @property {SubtotalPriceSetPresentmentMoney} [presentment_money]
 */
/**
 * @typedef SubtotalPriceSetShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef SubtotalPriceSetPresentmentMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef LineItems
 * @property {string} [sku]
 * @property {number} [fulfillable_quantity]
 * @property {number} [grams]
 * @property {string} [total_discount]
 * @property {LineItemsArticle} [article]
 * @property {string} [title]
 * @property {string} [variant_inventory_management]
 * @property {number} [id]
 * @property {number} [variant_id]
 * @property {string} [variant_title]
 * @property {boolean} [product_exists]
 * @property {string} [price]
 * @property {string} [admin_graphql_api_id]
 * @property {number} [quantity]
 * @property {string} [vendor]
 * @property {string} [fulfillment_service]
 * @property {boolean} [taxable]
 * @property {string} [name]
 * @property {number} [product_id]
 * @property {PriceSet} [price_set]
 * @property {TaxLines} [tax_lines]
 * @property {boolean} [requires_shipping]
 * @property {boolean} [gift_card]
 * @property {TotalDiscountSet} [total_discount_set]
 */
/**
 * @typedef LineItemsArticle
 * @property {Quantities} [quantities]
 * @property {string} [old_article_uid]
 * @property {number} [total_quantity]
 * @property {Manufacturer} [manufacturer]
 * @property {ArticlePrice} [price]
 * @property {boolean} [track_inventory]
 * @property {Company} [company]
 * @property {boolean} [is_active]
 * @property {FailOrderDateMeta} [date_meta]
 * @property {boolean} [fragile]
 * @property {MarketplaceIdentifiers} [marketplace_identifiers]
 * @property {string} [size]
 * @property {boolean} [is_set]
 * @property {Dimension} [dimension]
 * @property {Weight} [weight]
 * @property {Store} [store]
 * @property {ArticleMeta} [meta]
 * @property {string} [uid]
 * @property {ArticleBrand} [brand]
 * @property {number} [item_id]
 * @property {string} [fynd_article_code]
 * @property {string} [_id]
 * @property {LineItemsArticleIdentifier} [identifier]
 * @property {string} [seller_identifier]
 * @property {string} [fynd_item_code]
 * @property {string} [country_of_origin]
 */
/**
 * @typedef Quantities
 * @property {NotAvailable} [not_available]
 * @property {Sellable} [sellable]
 * @property {OrderCommitted} [order_committed]
 * @property {Damaged} [damaged]
 */
/**
 * @typedef NotAvailable
 * @property {number} [count]
 * @property {string} [updated_at]
 */
/**
 * @typedef Sellable
 * @property {number} [count]
 * @property {string} [updated_at]
 */
/**
 * @typedef OrderCommitted
 * @property {number} [count]
 * @property {string} [updated_at]
 */
/**
 * @typedef Damaged
 * @property {string} [updated_at]
 * @property {number} [count]
 */
/**
 * @typedef Manufacturer
 * @property {boolean} [is_default]
 * @property {string} [address]
 * @property {string} [name]
 */
/**
 * @typedef ArticlePrice
 * @property {number} [marked]
 * @property {string} [currency]
 * @property {number} [effective]
 * @property {number} [transfer]
 */
/**
 * @typedef Company
 * @property {number} [id]
 * @property {string} [company_type]
 * @property {string} [business_type]
 * @property {string} [company_name]
 * @property {string} [created_on]
 * @property {string} [pan_no]
 * @property {boolean} [return_allowed]
 * @property {string} [meta]
 * @property {boolean} [exchange_allowed]
 * @property {string} [agreement_start_date]
 * @property {number} [exchange_within_days]
 * @property {number} [payment_procesing_charge]
 * @property {boolean} [fynd_a_fit_available]
 * @property {string} [modified_on]
 * @property {number} [return_within_days]
 */
/**
 * @typedef FailOrderDateMeta
 * @property {string} [added_on_store]
 * @property {string} [inventory_updated_on]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef MarketplaceIdentifiers
 * @property {TatacliqLuxury} [tatacliq_luxury]
 */
/**
 * @typedef TatacliqLuxury
 * @property {string} [sku]
 */
/**
 * @typedef Dimension
 * @property {number} [height]
 * @property {number} [width]
 * @property {string} [unit]
 * @property {number} [length]
 * @property {boolean} [is_default]
 */
/**
 * @typedef Weight
 * @property {boolean} [is_default]
 * @property {string} [unit]
 * @property {number} [shipping]
 */
/**
 * @typedef Store
 * @property {number} [id]
 */
/**
 * @typedef ArticleMeta
 * @property {string} [service]
 */
/**
 * @typedef ArticleBrand
 * @property {string} [name]
 * @property {number} [id]
 */
/**
 * @typedef LineItemsArticleIdentifier
 * @property {string} [sku_code]
 */
/**
 * @typedef PriceSet
 * @property {PriceSetShopMoney} [shop_money]
 * @property {PriceSetPresentmentMoney} [presentment_money]
 */
/**
 * @typedef PriceSetShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef PriceSetPresentmentMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef TaxLines
 * @property {string} [title]
 * @property {string} [price]
 * @property {number} [rate]
 * @property {TaxLinesPriceSet} [price_set]
 */
/**
 * @typedef TaxLinesPriceSet
 * @property {TaxLinesPriceSetShopMoney} [shop_money]
 * @property {TaxLinesPriceSetPresentmentMoney} [presentment_money]
 */
/**
 * @typedef TaxLinesPriceSetShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef TaxLinesPriceSetPresentmentMoney
 * @property {string} [currency_code]
 * @property {string} [amount]
 */
/**
 * @typedef TotalDiscountSet
 * @property {TotalDiscountSetPresentmentMoney} [presentment_money]
 * @property {TotalDiscountSetShopMoney} [shop_money]
 */
/**
 * @typedef TotalDiscountSetPresentmentMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef TotalDiscountSetShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef BillingAddress
 * @property {string} [address1]
 * @property {string} [city]
 * @property {string} [zip]
 * @property {string} [last_name]
 * @property {string} [address2]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [province_code]
 * @property {string} [phone]
 * @property {string} [company]
 * @property {string} [name]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [first_name]
 * @property {string} [province]
 */
/**
 * @typedef TotalShippingPriceSet
 * @property {TotalShippingPriceSetShopMoney} [shop_money]
 * @property {TotalShippingPriceSetPresentmentMoney} [presentment_money]
 */
/**
 * @typedef TotalShippingPriceSetShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef TotalShippingPriceSetPresentmentMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef Customer
 * @property {string} [created_at]
 * @property {number} [id]
 * @property {string} [last_name]
 * @property {string} [state]
 * @property {number} [last_order_id]
 * @property {string} [note]
 * @property {boolean} [verified_email]
 * @property {string} [phone]
 * @property {boolean} [accepts_marketing]
 * @property {string} [first_name]
 * @property {string} [tags]
 * @property {string} [last_order_name]
 * @property {number} [orders_count]
 * @property {string} [total_spent]
 * @property {boolean} [tax_exempt]
 * @property {string} [currency]
 * @property {string} [accepts_marketing_updated_at]
 * @property {string} [email]
 * @property {string} [updated_at]
 * @property {string} [admin_graphql_api_id]
 * @property {DefaultAddress} [default_address]
 */
/**
 * @typedef DefaultAddress
 * @property {string} [last_name]
 * @property {string} [name]
 * @property {string} [province_code]
 * @property {string} [country_code]
 * @property {boolean} [is_default]
 * @property {number} [id]
 * @property {number} [customer_id]
 * @property {string} [first_name]
 * @property {string} [address1]
 * @property {string} [phone]
 * @property {string} [country_name]
 * @property {string} [company]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [province]
 * @property {string} [country]
 * @property {string} [zip]
 */
/**
 * @typedef TotalLineItemsPriceSet
 * @property {TotalLineItemsPriceSetShopMoney} [shop_money]
 * @property {TotalLineItemsPriceSetPresentmentMoney} [presentment_money]
 */
/**
 * @typedef TotalLineItemsPriceSetShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef TotalLineItemsPriceSetPresentmentMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef OrderShippingAddress
 * @property {string} [address1]
 * @property {string} [zip]
 * @property {string} [address2]
 * @property {string} [country_code]
 * @property {string} [country]
 * @property {string} [last_name]
 * @property {string} [province_code]
 * @property {string} [first_name]
 * @property {string} [phone]
 * @property {string} [province]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [city]
 * @property {string} [company]
 * @property {string} [name]
 */
/**
 * @typedef OrderListing
 * @property {OrderItems[]} items
 * @property {Filters} filters
 * @property {Object} next_order_status
 * @property {PlatformOrderPage} page
 * @property {AppliedFilters} applied_filters
 */
/**
 * @typedef OrderItems
 * @property {PlatformOrderUserInfo} [user]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {Channel} [channel]
 * @property {string} [id]
 * @property {PlatformApplication} [application]
 * @property {PlatformShipment} [shipments]
 * @property {string} [created_at]
 * @property {number} [total_shipments_in_order]
 */
/**
 * @typedef PlatformOrderUserInfo
 * @property {string} [mobile]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [email]
 * @property {string} [last_name]
 * @property {boolean} [is_anonymous_user]
 * @property {number} [uid]
 * @property {string} [avis_user_id]
 */
/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [area]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [version]
 * @property {string} [address1]
 * @property {string} [updated_at]
 * @property {string} [city]
 * @property {string} [landmark]
 * @property {string} [created_at]
 * @property {string} [name]
 * @property {string} [address]
 * @property {string} [phone]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [address_type]
 * @property {string} [email]
 * @property {string} [pincode]
 * @property {string} [address2]
 * @property {string} [contact_person]
 * @property {string} [address_category]
 */
/**
 * @typedef Channel
 * @property {string} [name]
 * @property {string} [logo]
 */
/**
 * @typedef PlatformApplication
 * @property {string} [id]
 */
/**
 * @typedef PlatformShipment
 * @property {PlatformShipmentStatus} [status]
 * @property {Bags} [bags]
 * @property {ShipmentPrices} [prices]
 * @property {string} [id]
 * @property {ShipmentGst} [gst]
 * @property {number} [priority]
 * @property {string} [priority_text]
 * @property {boolean} [lock_status]
 * @property {string} [ordering_channel]
 * @property {number} [total_shipment_bags]
 */
/**
 * @typedef PlatformShipmentStatus
 * @property {number} [id]
 * @property {number[]} [bag_list]
 * @property {string} [created_at]
 * @property {string} [status]
 * @property {string} [name]
 * @property {number} [progress]
 * @property {string} [shipment_id]
 * @property {string} [current_shipment_status]
 * @property {string} [color_code]
 */
/**
 * @typedef Bags
 * @property {BagItem} [item]
 * @property {number} [id]
 */
/**
 * @typedef BagItem
 * @property {number} [id]
 * @property {string} [size]
 * @property {string} [slug_key]
 * @property {boolean} [can_return]
 * @property {number} [brand_id]
 * @property {string[]} [l2_category]
 * @property {string} [name]
 * @property {string} [code]
 * @property {boolean} [can_cancel]
 * @property {BagItemAttributes} [attributes]
 * @property {string} [l3_category_name]
 * @property {number} [l3_category]
 * @property {string[]} [l1_category]
 * @property {string[]} [image]
 * @property {string} [brand]
 * @property {string} [last_updated_at]
 */
/**
 * @typedef BagItemAttributes
 * @property {string} [item_code]
 * @property {string} [brand_name]
 * @property {string} [country_of_origin]
 */
/**
 * @typedef ShipmentPrices
 * @property {number} [refund_amount]
 * @property {number} [cashback_applied]
 * @property {number} [transfer_price]
 * @property {number} [coupon_value]
 * @property {number} [amount_paid]
 * @property {number} [delivery_charge]
 * @property {number} [coupon_effective_discount]
 * @property {number} [cod_charges]
 * @property {number} [refund_credit]
 * @property {boolean} [added_to_fynd_cash]
 * @property {number} [gst_tax_percentage]
 * @property {number} [price_marked]
 * @property {number} [price_effective]
 * @property {number} [discount]
 * @property {number} [promotion_effective_discount]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [fynd_credits]
 * @property {number} [brand_calculated_amount]
 * @property {number} [cashback]
 * @property {number} [value_of_good]
 */
/**
 * @typedef Payments
 * @property {boolean} [is_active]
 * @property {string} [display_name]
 * @property {string} [logo]
 * @property {string} [source]
 * @property {string} [source_nickname]
 * @property {number} [display_priority]
 * @property {number} [id]
 * @property {string} [mode]
 * @property {string} [payment_identifier]
 */
/**
 * @typedef Filters
 * @property {Stage} [stage]
 * @property {Stages} [stages]
 */
/**
 * @typedef Stage
 * @property {string} [text]
 * @property {string} [value]
 * @property {boolean} [is_default]
 * @property {StagesFilters} [filters]
 */
/**
 * @typedef StagesFilters
 * @property {string} [text]
 * @property {string} [value]
 * @property {string} [type]
 * @property {Options} [options]
 */
/**
 * @typedef Options
 * @property {string} [text]
 * @property {string} [value]
 */
/**
 * @typedef PlatformOrderPage
 * @property {string} [next]
 * @property {string} [previous]
 * @property {string} [type]
 * @property {number} [size]
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [total]
 * @property {ItemTotal} [item_total]
 */
/**
 * @typedef AppliedFilters
 * @property {string} [stage]
 * @property {string[]} [stores]
 * @property {string[]} [deployment_stores]
 * @property {number[]} [dp]
 * @property {string} [from_date]
 * @property {string} [to_date]
 */
/**
 * @typedef OrderDetails
 * @property {OrderPicklistListing[]} items
 * @property {PlatformOrderPage} page
 * @property {Filters} filters
 * @property {Object} next_order_status
 * @property {AppliedFilters} applied_filters
 */
/**
 * @typedef OrderDetailsItem
 * @property {PlatformOrderUserInfo} [user]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {Channel} [channel]
 * @property {Object} [fyndstore_emp]
 * @property {Object} [ordering_store]
 * @property {PlatformBreakupValues} [breakup_values]
 * @property {string} [id]
 * @property {PlatformApplication} [application]
 * @property {PlatformShipmentDetails} [shipments]
 * @property {string} [created_at]
 * @property {number} [total_shipments_in_order]
 * @property {ItemsPayments} [payments]
 * @property {Object} [payment_methods]
 */
/**
 * @typedef PlatformBreakupValues
 * @property {string} [display]
 * @property {number} [value]
 * @property {string} [name]
 */
/**
 * @typedef ArticleAssignment
 * @property {string} [strategy]
 * @property {string} [level]
 */
/**
 * @typedef PlatformShipmentDetails
 * @property {PlatformShipmentDetailsStatus} [status]
 * @property {BagsDetails} [bags]
 * @property {ShipmentPrices} [prices]
 * @property {ShipmentBreakupValues} [breakup_values]
 * @property {string} [id]
 * @property {DpDetails} [dp_details]
 * @property {Object} [payment_methods]
 * @property {ShipmentInvoice} [invoice]
 * @property {PlatformFulfillingStore} [fulfilling_store]
 * @property {Payments} [payments]
 * @property {ShipmentGst} [gst]
 * @property {Company} [company]
 * @property {PlatformShipmentDetailsBrand} [brand]
 * @property {Object} [coupon]
 * @property {string} [order_source]
 * @property {boolean} [is_not_fynd_source]
 * @property {Object} [can_break]
 * @property {string} [comment]
 * @property {Promise} [promise]
 * @property {ShipmentTrackingDetails} [tracking_details]
 * @property {boolean} [is_fynd_coupon]
 * @property {string} [order_type]
 * @property {number} [total_shipment_bags]
 * @property {Object} [pod]
 * @property {boolean} [lock_status]
 * @property {number} [priority]
 * @property {string} [priority_text]
 * @property {string} [ordering_channel]
 * @property {string} [credit_note_id]
 * @property {boolean} [auto_trigger_dp_assignment]
 * @property {string} [packaging_type]
 * @property {ShipmentDates} [dates]
 */
/**
 * @typedef PlatformShipmentDetailsStatus
 * @property {number} [id]
 * @property {number[]} [bag_list]
 * @property {string} [created_at]
 * @property {string} [status]
 * @property {string} [name]
 * @property {number} [progress]
 * @property {string} [shipment_id]
 * @property {string} [current_shipment_status]
 * @property {string} [color_code]
 */
/**
 * @typedef BagsDetails
 * @property {BagFinancialBreakup[]} [financial_breakup]
 * @property {BagCurrStatus} [status]
 * @property {BagItem} [item]
 * @property {BagArticle} [article]
 * @property {number} [id]
 * @property {BagPrices} [prices]
 * @property {GstDetails} [gst_details]
 * @property {BagBreakupValues} [breakup_values]
 * @property {number} [update_time]
 * @property {BagCurrentStatus} [current_status]
 * @property {BagStatus} [bag_status]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {Object} [payment_methods]
 */
/**
 * @typedef BagFinancialBreakup
 * @property {number} [value_of_good]
 * @property {string} [hsn_code]
 * @property {number} [price_effective]
 * @property {number} [cod_charges]
 * @property {string} [gst_fee]
 * @property {number} [fynd_credits]
 * @property {number} [refund_amount]
 * @property {number} [cashback_applied]
 * @property {number} [transfer_price]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [coupon_value]
 * @property {number} [amount_paid]
 * @property {number} [gst_tax_percentage]
 * @property {string} [size]
 * @property {number} [total_units]
 * @property {number} [discount]
 * @property {number} [coupon_effective_discount]
 * @property {number} [cashback]
 * @property {number} [promotion_effective_discount]
 * @property {string} [gst_tag]
 * @property {number} [delivery_charge]
 * @property {number} [refund_credit]
 * @property {number} [price_marked]
 * @property {Identifiers} [identifiers]
 * @property {string} [item_name]
 * @property {boolean} [added_to_fynd_cash]
 * @property {number} [brand_calculated_amount]
 */
/**
 * @typedef Identifiers
 * @property {string} [ean]
 */
/**
 * @typedef BagCurrStatus
 * @property {boolean} [enable_tracking]
 * @property {boolean} [is_customer_return_allowed]
 * @property {boolean} [is_active]
 * @property {boolean} [is_returnable]
 * @property {boolean} [can_be_cancelled]
 */
/**
 * @typedef BagArticle
 * @property {ArticleIdentifiers} [identifiers]
 * @property {boolean} [esp_modified]
 * @property {boolean} [is_set]
 * @property {string} [size]
 * @property {string} [code]
 * @property {Set} [set]
 * @property {string} [seller_identifier]
 * @property {BagArticleReturnConfig} [return_config]
 * @property {string} [_id]
 * @property {string} [uid]
 * @property {Object} [child_details]
 */
/**
 * @typedef ArticleIdentifiers
 * @property {string} [ean]
 */
/**
 * @typedef Set
 * @property {number} [quantity]
 * @property {SetSizeDistribution} [size_distribution]
 */
/**
 * @typedef SetSizeDistribution
 * @property {Sizes} [sizes]
 */
/**
 * @typedef Sizes
 * @property {string} [size]
 * @property {number} [pieces]
 */
/**
 * @typedef BagArticleReturnConfig
 * @property {number} [time]
 * @property {string} [unit]
 * @property {boolean} [returnable]
 */
/**
 * @typedef GstDetails
 * @property {number} [brand_calculated_amount]
 * @property {string} [gst_fee]
 * @property {string} [gst_tag]
 * @property {string} [hsn_code]
 * @property {number} [value_of_good]
 * @property {number} [gst_tax_percentage]
 * @property {boolean} [is_default_hsn_code]
 */
/**
 * @typedef BagBreakupValues
 * @property {string} [name]
 * @property {string} [display]
 * @property {number} [value]
 */
/**
 * @typedef BagCurrentStatus
 * @property {string} [updated_at]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {string} [status]
 * @property {string} [state_type]
 */
/**
 * @typedef BagStateMapper
 * @property {string} [app_state_name]
 * @property {boolean} [is_active]
 * @property {string} [display_name]
 * @property {string} [name]
 * @property {string} [app_display_name]
 */
/**
 * @typedef BagStatus
 * @property {string} [status]
 * @property {string} [state_type]
 * @property {string} [updated_at]
 * @property {BagStatusBagStateMapper} [bag_state_mapper]
 */
/**
 * @typedef BagStatusBagStateMapper
 * @property {boolean} [is_active]
 * @property {string} [display_name]
 * @property {string} [name]
 * @property {string} [app_display_name]
 * @property {string} [app_state_name]
 */
/**
 * @typedef BagPrices
 * @property {number} [cashback]
 * @property {number} [refund_credit]
 * @property {number} [coupon_value]
 * @property {number} [delivery_charge]
 * @property {number} [fynd_credits]
 * @property {number} [price_marked]
 * @property {number} [cashback_applied]
 * @property {number} [value_of_good]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [amount_paid]
 * @property {number} [cod_charges]
 * @property {number} [price_effective]
 * @property {number} [refund_amount]
 * @property {number} [discount]
 */
/**
 * @typedef ShipmentBreakupValues
 * @property {string} [name]
 * @property {string} [display]
 * @property {number} [value]
 */
/**
 * @typedef DpDetails
 * @property {string} [gst_tag]
 */
/**
 * @typedef ShipmentInvoice
 * @property {string} [payment_type]
 * @property {string} [updated_date]
 * @property {string} [invoice_url]
 * @property {string} [label_url]
 * @property {string} [payment_mode]
 * @property {number} [amount_to_collect]
 * @property {RtoAddress} [rto_address]
 */
/**
 * @typedef RtoAddress
 * @property {string} [name]
 * @property {number} [id]
 * @property {string} [phone]
 * @property {string} [location_type]
 * @property {StoreAddressJson} [store_address_json]
 * @property {string} [code]
 * @property {string} [address1]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [pincode]
 * @property {number} [company_id]
 * @property {string} [contact_person]
 * @property {string} [state]
 * @property {string} [store_email]
 * @property {string} [address2]
 */
/**
 * @typedef StoreAddressJson
 * @property {string} [country]
 * @property {string} [updated_at]
 * @property {string} [area]
 * @property {string} [state]
 * @property {string} [address_type]
 * @property {string} [city]
 * @property {string} [pincode]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [email]
 * @property {string} [phone]
 * @property {string} [created_at]
 * @property {string} [contact_person]
 * @property {string} [address_category]
 * @property {string} [version]
 * @property {string} [landmark]
 */
/**
 * @typedef PlatformFulfillingStore
 * @property {number} [packaging_material_count]
 * @property {string} [location_type]
 * @property {string} [code]
 * @property {string} [city]
 * @property {FulfillingStoreMeta} [meta]
 * @property {string} [name]
 * @property {boolean} [is_active]
 * @property {string} [address1]
 * @property {string} [store_email]
 * @property {boolean} [is_archived]
 * @property {string} [state]
 * @property {string} [address2]
 * @property {string} [contact_person]
 * @property {string} [phone]
 * @property {boolean} [is_enabled_for_recon]
 * @property {string} [fulfillment_channel]
 * @property {string} [created_at]
 * @property {number} [id]
 * @property {string} [pincode]
 * @property {string[]} [brand_store_tags]
 * @property {number} [company_id]
 * @property {FulfillingStoreStoreAddressJson} [store_address_json]
 * @property {string} [updated_at]
 * @property {string} [login_username]
 * @property {string} [country]
 */
/**
 * @typedef FulfillingStoreMeta
 * @property {AdditionalContactDetails} [additional_contact_details]
 * @property {Documents} [documents]
 * @property {string} [gst_number]
 * @property {string} [display_name]
 * @property {ProductReturnConfig} [product_return_config]
 * @property {boolean} [allow_dp_assignment_from_fynd]
 * @property {string} [stage]
 * @property {Timing} [timing]
 */
/**
 * @typedef AdditionalContactDetails
 * @property {string[]} [number]
 */
/**
 * @typedef Documents
 * @property {Gst} [gst]
 */
/**
 * @typedef Gst
 * @property {string} [legal_name]
 * @property {string} [type]
 * @property {string} [value]
 * @property {boolean} [verified]
 */
/**
 * @typedef ProductReturnConfig
 * @property {boolean} [on_same_store]
 */
/**
 * @typedef Timing
 * @property {Opening} [opening]
 * @property {string} [weekday]
 * @property {boolean} [open]
 * @property {Closing} [closing]
 */
/**
 * @typedef Opening
 * @property {number} [minute]
 * @property {number} [hour]
 */
/**
 * @typedef Closing
 * @property {number} [hour]
 * @property {number} [minute]
 */
/**
 * @typedef FulfillingStoreStoreAddressJson
 * @property {string} [address2]
 * @property {string} [area]
 * @property {string} [email]
 * @property {string} [phone]
 * @property {string} [state]
 * @property {string} [contact_person]
 * @property {string} [country]
 * @property {string} [pincode]
 * @property {string} [version]
 * @property {string} [created_at]
 * @property {string} [address_type]
 * @property {string} [city]
 * @property {string} [address1]
 * @property {string} [landmark]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [updated_at]
 * @property {string} [address_category]
 */
/**
 * @typedef ShipmentGst
 * @property {number} [brand_calculated_amount]
 * @property {number} [value_of_good]
 * @property {number} [gst_fee]
 */
/**
 * @typedef PlatformShipmentDetailsBrand
 * @property {boolean} [credit_note_allowed]
 * @property {string} [brand_name]
 * @property {string} [modified_on]
 * @property {number} [id]
 * @property {boolean} [is_virtual_invoice]
 * @property {string} [created_on]
 * @property {string} [logo]
 */
/**
 * @typedef Promise
 * @property {Timestamp} [timestamp]
 */
/**
 * @typedef Timestamp
 * @property {string} [min]
 * @property {string} [max]
 */
/**
 * @typedef ShipmentTrackingDetails
 * @property {string} [status]
 * @property {string} [time]
 * @property {boolean} [is_passed]
 * @property {boolean} [is_current]
 */
/**
 * @typedef ItemsPayments
 * @property {number} [display_priority]
 * @property {number} [id]
 * @property {boolean} [is_active]
 * @property {string} [display_name]
 * @property {string} [logo]
 * @property {string} [payment_identifier]
 * @property {string} [source_nickname]
 * @property {string} [mode]
 * @property {string} [source]
 */
/**
 * @typedef PlatformOrderDetailsPage
 * @property {string} [next]
 * @property {string} [previous]
 */
/**
 * @typedef ShipmentDates
 * @property {string} [due_date]
 */
/**
 * @typedef OrderLanesCount
 * @property {StageItem[]} stages
 */
/**
 * @typedef StageItem
 * @property {number} [count]
 * @property {string} [text]
 * @property {string} [value]
 */
/**
 * @typedef UpdateOrderReprocessResponse
 * @property {string} status
 */
/**
 * @typedef PlatformOrderTrack
 * @property {boolean} success
 * @property {string} request_id
 * @property {string} message
 * @property {string} mobile
 * @property {string} country_code
 * @property {number} resend_timer
 * @property {string} [resend_token]
 */
/**
 * @typedef OrderPicklistListing
 * @property {PlatformOrderUserInfo} [user]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {Channel} [channel]
 * @property {Object} [fyndstore_emp]
 * @property {Object} [ordering_store]
 * @property {PlatformBreakupValues} [breakup_values]
 * @property {string} [id]
 * @property {PlatformApplication} [application]
 * @property {PlatformShipmentDetails} [shipments]
 * @property {string} [created_at]
 * @property {number} [total_shipments_in_order]
 * @property {ItemsPayments} [payments]
 * @property {Object} [payment_methods]
 */
/**
 * @typedef Stages
 * @property {string} [text]
 * @property {string} [value]
 * @property {boolean} [is_default]
 * @property {StagesFilters} [filters]
 */
/**
 * @typedef ItemTotal
 * @property {number} [new]
 * @property {number} [processing]
 * @property {number} [returns]
 * @property {number} [all]
 */
/**
 * @typedef GetPingResponse
 * @property {string} ping
 */
/**
 * @typedef GetShipmentAddressResponse
 * @property {string} message
 * @property {DataShipmentAddress} data
 * @property {boolean} success
 */
/**
 * @typedef DataShipmentAddress
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [pincode]
 * @property {string} [phone]
 * @property {string} [area]
 * @property {string} [address]
 * @property {string} [landmark]
 * @property {string} [state]
 * @property {string} [address_type]
 * @property {string} [address_category]
 * @property {string} [email]
 * @property {string} [name]
 */
/**
 * @typedef UpdateShipmentAddressRequest
 * @property {string} email
 * @property {string} address
 * @property {string} pincode
 * @property {string} state
 * @property {string} address_type
 * @property {string} country
 * @property {string} name
 * @property {string} phone
 * @property {string} area
 * @property {string} landmark
 * @property {string} city
 */
/**
 * @typedef UpdateShipmentAddressResponse
 * @property {boolean} success
 * @property {string} message
 */
/**
 * @typedef ShipmentTrackResponse
 * @property {ShipmentTrackResponseBagListItem[]} bag_list
 * @property {string} message
 * @property {number} order_value
 */
/**
 * @typedef ShipmentTrackResponseBagListItem
 * @property {boolean} [enable_tracking]
 * @property {string} [price]
 * @property {string} [time_slot]
 * @property {string} [product_name]
 * @property {boolean} [can_return]
 * @property {string} [order_date]
 * @property {boolean} [is_try_at_home]
 * @property {ShipmentTrackResponseBagListItemBreakValues[]} [breakup_values]
 * @property {ShipmentTrackResponseBagListItemStatuses[]} [statuses]
 * @property {boolean} [is_active]
 * @property {string} [bag_id]
 * @property {string} [order_id]
 * @property {string} [size]
 * @property {string} [payment_mode_source]
 * @property {ShipmentTrackResponseBagListItemDpDetails} [dp_details]
 * @property {number} [product_id]
 * @property {ShipmentTrackResponseBagListItemsProductImage} [product_image]
 * @property {string} [brand_name]
 * @property {string} [price_marked]
 * @property {string} [status]
 * @property {boolean} [can_cancel]
 * @property {string} [payment_mode]
 * @property {string} [fynd_cash_msg]
 * @property {string} [delivery_address]
 */
/**
 * @typedef ShipmentTrackResponseBagListItemBreakValues
 * @property {string} [name]
 * @property {string} [display]
 * @property {string} [value]
 */
/**
 * @typedef ShipmentTrackResponseBagListItemStatuses
 * @property {number} [nps_rating]
 * @property {string} [nps_string]
 * @property {ShipmentTrackResponseBagListItemStatusesProgress[]} [progress_status]
 * @property {string} [flow_type]
 * @property {number} [status_progress]
 * @property {boolean} [is_nps_done]
 * @property {string} [header_message]
 * @property {string} [is_delayed]
 * @property {ShipmentTrackResponseBagListItemStatusesTrack[]} [tracking_list]
 */
/**
 * @typedef ShipmentTrackResponseBagListItemStatusesProgress
 * @property {string} [title]
 * @property {string} [type]
 * @property {boolean} [state]
 */
/**
 * @typedef ShipmentTrackResponseBagListItemStatusesTrack
 * @property {string} [status]
 * @property {string} [time]
 * @property {boolean} [is_passed]
 * @property {boolean} [is_current]
 */
/**
 * @typedef ShipmentTrackResponseBagListItemDpDetails
 * @property {string} [tracking_no]
 * @property {string} [courier]
 */
/**
 * @typedef ShipmentTrackResponseBagListItemsProductImage
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 */
/**
 * @typedef UpdateShipmentStatusResponse
 * @property {Object} shipments
 * @property {any[]} [error_shipments]
 */
/**
 * @typedef UpdateShipmentStatusBody
 * @property {Object} shipments
 * @property {boolean} force_transition
 * @property {boolean} task
 */
/**
 * @typedef ShipmentReasonsResponse
 * @property {boolean} success
 * @property {string} message
 * @property {ShipmentResponseReasons[]} reasons
 */
/**
 * @typedef ShipmentResponseReasons
 * @property {number} [reason_id]
 * @property {string} [reason]
 */
/**
 * @typedef PlatformShipmentTrack
 * @property {Results} results
 */
/**
 * @typedef Results
 * @property {string} [awb]
 * @property {string} [updated_at]
 * @property {string} [last_location_recieved_at]
 * @property {string} [reason]
 * @property {string} [shipment_type]
 * @property {string} [status]
 * @property {string} [updated_time]
 * @property {string} [account_name]
 */
/**
 * @typedef ShipmentUpdateRequest
 * @property {string[]} bags
 * @property {Object} reason
 * @property {string} comments
 * @property {string} action
 */
/**
 * @typedef ShipmentUpdateResponse
 * @property {boolean} success
 * @property {string} message
 */
/**
 * @typedef UpdateProcessShipmenstRequestBody
 * @property {string[]} shipment_ids
 * @property {string} expected_status
 */
/**
 * @typedef UpdateProcessShipmenstRequestResponse
 * @property {boolean} success
 * @property {string} message
 */
/**
 * @typedef GetVoiceCallbackResponse
 * @property {string} message
 */
/**
 * @typedef GetClickToCallResponse
 * @property {string} message
 */
/**
 * @typedef ApefaceApiError
 * @property {string} [message]
 */
/**
 * @typedef SearchKeywordResult
 * @property {Object} query
 * @property {string} sort_on
 */
/**
 * @typedef CreateSearchKeyword
 * @property {string} [app_id]
 * @property {SearchKeywordResult} result
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 */
/**
 * @typedef GetSearchWordsData
 * @property {string} [app_id]
 * @property {Object} [result]
 * @property {string} [uid]
 * @property {Object} [_custom_json]
 * @property {string[]} [words]
 */
/**
 * @typedef ErrorResponse
 * @property {Object} [meta]
 * @property {number} [status]
 * @property {string} [message]
 * @property {string} [code]
 */
/**
 * @typedef GetSearchWordsDetailResponse
 * @property {GetSearchWordsData} [items]
 * @property {Page} [page]
 */
/**
 * @typedef DeleteResponse
 * @property {string} [message]
 */
/**
 * @typedef GetSearchWordsResponse
 * @property {GetSearchWordsData[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef AutocompletePageAction
 * @property {string} [url]
 * @property {Object} [query]
 * @property {string} [type]
 * @property {Object} [params]
 */
/**
 * @typedef AutocompleteAction
 * @property {string} [type]
 * @property {AutocompletePageAction} [page]
 */
/**
 * @typedef Media
 * @property {string} [url]
 * @property {string} [type]
 */
/**
 * @typedef AutocompleteResult
 * @property {string} [display]
 * @property {Object} [_custom_json]
 * @property {AutocompleteAction} [action]
 * @property {Media} [logo]
 */
/**
 * @typedef CreateAutocompleteKeyword
 * @property {string} [app_id]
 * @property {AutocompleteResult[]} [results]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 */
/**
 * @typedef GetAutocompleteWordsData
 * @property {string} [app_id]
 * @property {Object[]} [results]
 * @property {string} [uid]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef GetAutocompleteWordsResponse
 * @property {GetAutocompleteWordsData[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {string} [app_id]
 * @property {Object[]} [results]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef ProductBundleItem
 * @property {number} min_quantity
 * @property {boolean} [auto_select]
 * @property {number} product_uid
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [allow_remove]
 * @property {number} max_quantity
 */
/**
 * @typedef ProductBundleRequest
 * @property {string} name
 * @property {Object} [meta]
 * @property {string[]} [page_visibility]
 * @property {string} [logo]
 * @property {ProductBundleItem[]} products
 * @property {Object} [created_by]
 * @property {string} slug
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {boolean} is_active
 * @property {boolean} [same_store_assignment]
 * @property {string} choice
 * @property {Object} [modified_by]
 */
/**
 * @typedef GetProductBundleCreateResponse
 * @property {string} name
 * @property {Object} [meta]
 * @property {string[]} [page_visibility]
 * @property {string} [logo]
 * @property {number} [company_id]
 * @property {ProductBundleItem[]} products
 * @property {string} [id]
 * @property {Object} [created_by]
 * @property {string} slug
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {boolean} is_active
 * @property {boolean} [same_store_assignment]
 * @property {string} choice
 * @property {Object} [modified_by]
 */
/**
 * @typedef GetProductBundleListingResponse
 * @property {GetProductBundleCreateResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ProductBundleUpdateRequest
 * @property {string} name
 * @property {Object} [meta]
 * @property {string[]} [page_visibility]
 * @property {string} [logo]
 * @property {ProductBundleItem[]} products
 * @property {string} slug
 * @property {string} [modified_on]
 * @property {boolean} is_active
 * @property {boolean} [same_store_assignment]
 * @property {string} choice
 * @property {Object} [modified_by]
 */
/**
 * @typedef Price
 * @property {number} [max_effective]
 * @property {number} [min_effective]
 * @property {number} [min_marked]
 * @property {string} [currency]
 * @property {number} [max_marked]
 */
/**
 * @typedef LimitedProductData
 * @property {string} [short_description]
 * @property {string} [name]
 * @property {string} [country_of_origin]
 * @property {Object} [attributes]
 * @property {number} [uid]
 * @property {Object} [price]
 * @property {string} [item_code]
 * @property {string} [slug]
 * @property {number} [quantity]
 * @property {string[]} [images]
 * @property {Object} [identifier]
 * @property {string[]} [sizes]
 */
/**
 * @typedef Size
 * @property {string} [display]
 * @property {string} [value]
 * @property {boolean} [is_available]
 * @property {number} [quantity]
 */
/**
 * @typedef GetProducts
 * @property {number} [min_quantity]
 * @property {boolean} [auto_select]
 * @property {number} [product_uid]
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [allow_remove]
 * @property {Price} [price]
 * @property {number} [max_quantity]
 * @property {LimitedProductData} [product_details]
 * @property {Size[]} [sizes]
 */
/**
 * @typedef GetProductBundleResponse
 * @property {string} [name]
 * @property {string[]} [page_visibility]
 * @property {Object} [meta]
 * @property {string} [logo]
 * @property {number} [company_id]
 * @property {GetProducts[]} [products]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {boolean} [same_store_assignment]
 * @property {string} [choice]
 */
/**
 * @typedef Meta
 * @property {Object} [headers]
 * @property {string} [unit]
 * @property {Object[]} [values]
 */
/**
 * @typedef Guide
 * @property {Meta} [meta]
 */
/**
 * @typedef ValidateSizeGuide
 * @property {string} name
 * @property {string} title
 * @property {string} [subtitle]
 * @property {string} [description]
 * @property {boolean} [active]
 * @property {number} [company_id]
 * @property {string} [id]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} [tag]
 * @property {string} [image]
 * @property {number} [brand_id]
 * @property {Guide} [guide]
 * @property {Object} [modified_by]
 */
/**
 * @typedef SuccessResponse
 * @property {boolean} [success]
 */
/**
 * @typedef ListSizeGuide
 * @property {Object[]} [items]
 * @property {Object} [page]
 */
/**
 * @typedef SizeGuideResponse
 * @property {string} [name]
 * @property {string} [title]
 * @property {string} [subtitle]
 * @property {boolean} [active]
 * @property {number} [company_id]
 * @property {string} [id]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} [tag]
 * @property {number} [brand_id]
 * @property {Object} [guide]
 * @property {Object} [modified_by]
 */
/**
 * @typedef MetaFields
 * @property {string} value
 * @property {string} key
 */
/**
 * @typedef ApplicationItemMeta
 * @property {MetaFields[]} _custom_meta
 */
/**
 * @typedef GetConfigMetadataResponse
 * @property {Object[]} [condition]
 * @property {Object[]} data
 * @property {Object[]} [values]
 */
/**
 * @typedef AttributeDetailsGroup
 * @property {string} name
 * @property {string} [unit]
 * @property {number} priority
 * @property {string} [logo]
 * @property {string} [key]
 * @property {string} [slug]
 * @property {boolean} is_active
 * @property {string} display_type
 */
/**
 * @typedef AppConfigurationDetail
 * @property {string} app_id
 * @property {string} [name]
 * @property {string} [logo]
 * @property {number} priority
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {string[]} [template_slugs]
 * @property {string} slug
 * @property {boolean} is_default
 * @property {boolean} is_active
 */
/**
 * @typedef ConfigErrorResponse
 * @property {string} message
 */
/**
 * @typedef PageResponseType
 * @property {number} total_count
 * @property {number} current
 * @property {number} next
 * @property {boolean} has_next
 */
/**
 * @typedef GetConfigResponse
 * @property {Object[]} data
 * @property {PageResponseType} page
 */
/**
 * @typedef ConfigSuccessResponse
 * @property {string} message
 */
/**
 * @typedef AppConfigurationsSort
 * @property {string} app_id
 * @property {string} [name]
 * @property {string} [logo]
 * @property {number} priority
 * @property {string} key
 * @property {boolean} is_default
 * @property {string} default_key
 * @property {boolean} is_active
 */
/**
 * @typedef AllowSingleRequest
 * @property {boolean} allow_single
 */
/**
 * @typedef DefaultKeyRequest
 * @property {string} default_key
 */
/**
 * @typedef GetCatalogConfigurationDetailsProduct
 * @property {Object} [compare]
 * @property {Object} [similar]
 * @property {Object} [detail]
 * @property {Object} [variant]
 */
/**
 * @typedef MetaDataListingSortMetaResponse
 * @property {string} [display]
 * @property {string} [key]
 */
/**
 * @typedef MetaDataListingSortResponse
 * @property {MetaDataListingSortMetaResponse[]} [data]
 */
/**
 * @typedef MetaDataListingFilterMetaResponse
 * @property {string} [display]
 * @property {Object[]} [units]
 * @property {string[]} [filter_types]
 * @property {string} [key]
 */
/**
 * @typedef MetaDataListingFilterResponse
 * @property {MetaDataListingFilterMetaResponse[]} [data]
 */
/**
 * @typedef MetaDataListingResponse
 * @property {MetaDataListingSortResponse} sort
 * @property {MetaDataListingFilterResponse} filter
 */
/**
 * @typedef GetCatalogConfigurationMetaData
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {MetaDataListingResponse} [listing]
 */
/**
 * @typedef ConfigurationListingSortConfig
 * @property {string} [name]
 * @property {number} priority
 * @property {string} [logo]
 * @property {string} key
 * @property {boolean} is_active
 */
/**
 * @typedef ConfigurationListingSort
 * @property {ConfigurationListingSortConfig[]} [config]
 * @property {string} default_key
 */
/**
 * @typedef ConfigurationBucketPoints
 * @property {number} [end]
 * @property {string} [display]
 * @property {number} [start]
 */
/**
 * @typedef ConfigurationListingFilterValue
 * @property {string} [sort]
 * @property {string} [value]
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 * @property {Object} [map]
 * @property {string} [condition]
 */
/**
 * @typedef ConfigurationListingFilterConfig
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {string} [name]
 * @property {number} priority
 * @property {string} [logo]
 * @property {string} key
 * @property {string} type
 * @property {boolean} is_active
 */
/**
 * @typedef ConfigurationListingFilter
 * @property {boolean} allow_single
 * @property {ConfigurationListingFilterConfig[]} [attribute_config]
 */
/**
 * @typedef ConfigurationListing
 * @property {ConfigurationListingSort} sort
 * @property {ConfigurationListingFilter} filter
 */
/**
 * @typedef ProductSize
 * @property {number} max
 * @property {number} min
 */
/**
 * @typedef ConfigurationProductConfig
 * @property {string} [title]
 * @property {number} priority
 * @property {string} [logo]
 * @property {string} [subtitle]
 * @property {string} key
 * @property {ProductSize} [size]
 * @property {boolean} is_active
 */
/**
 * @typedef ConfigurationProductSimilar
 * @property {ConfigurationProductConfig[]} [config]
 */
/**
 * @typedef ConfigurationProductVariantConfig
 * @property {string} name
 * @property {number} priority
 * @property {string} [logo]
 * @property {string} key
 * @property {ProductSize} size
 * @property {boolean} is_active
 * @property {string} display_type
 */
/**
 * @typedef ConfigurationProductVariant
 * @property {ConfigurationProductVariantConfig[]} [config]
 */
/**
 * @typedef ConfigurationProduct
 * @property {ConfigurationProductSimilar} similar
 * @property {ConfigurationProductVariant} variant
 */
/**
 * @typedef AppConfiguration
 * @property {string} app_id
 * @property {string} config_type
 * @property {ConfigurationListing} [listing]
 * @property {ConfigurationProduct} [product]
 * @property {string} [config_id]
 */
/**
 * @typedef AppCatalogConfiguration
 * @property {string} app_id
 * @property {string} config_type
 * @property {ConfigurationListing} [listing]
 * @property {ConfigurationProduct} [product]
 * @property {string} [id]
 * @property {string} [config_id]
 */
/**
 * @typedef GetAppCatalogConfiguration
 * @property {AppCatalogConfiguration} [data]
 * @property {boolean} [is_default]
 */
/**
 * @typedef GetCatalogConfigurationDetailsSchemaListing
 * @property {Object} [sort]
 * @property {Object} [filter]
 */
/**
 * @typedef EntityConfiguration
 * @property {string} app_id
 * @property {string} config_type
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {string} [id]
 * @property {string} [config_id]
 */
/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {EntityConfiguration} [data]
 * @property {boolean} [is_default]
 */
/**
 * @typedef ProductFiltersKey
 * @property {string} display
 * @property {string} name
 * @property {string} [logo]
 * @property {string} [kind]
 */
/**
 * @typedef ProductFiltersValue
 * @property {boolean} is_selected
 * @property {string} value
 * @property {number} [selected_max]
 * @property {number} [min]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [selected_min]
 * @property {string} [display_format]
 * @property {string} display
 * @property {number} [max]
 * @property {number} [count]
 * @property {string} [query_format]
 */
/**
 * @typedef ProductFilters
 * @property {ProductFiltersKey} key
 * @property {ProductFiltersValue[]} values
 */
/**
 * @typedef ProductSortOn
 * @property {boolean} [is_selected]
 * @property {string} [name]
 * @property {string} [value]
 */
/**
 * @typedef GetCollectionQueryOptionResponse
 * @property {ProductFilters[]} [filters]
 * @property {ProductSortOn[]} [sort_on]
 */
/**
 * @typedef CollectionBadge
 * @property {string} [text]
 * @property {string} [color]
 */
/**
 * @typedef UserInfo
 * @property {string} [user_id]
 * @property {string} [uid]
 * @property {string} [username]
 * @property {string} [email]
 */
/**
 * @typedef Schedule
 * @property {string} [end]
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [start]
 */
/**
 * @typedef CollectionImage
 * @property {string} aspect_ratio
 * @property {string} url
 */
/**
 * @typedef CollectionBanner
 * @property {CollectionImage} landscape
 * @property {CollectionImage} portrait
 */
/**
 * @typedef SeoDetail
 * @property {string} [description]
 * @property {string} [title]
 */
/**
 * @typedef CreateCollection
 * @property {string} app_id
 * @property {string} [description]
 * @property {CollectionBadge} [badge]
 * @property {UserInfo} [created_by]
 * @property {string} slug
 * @property {Schedule} [_schedule]
 * @property {Object} [query]
 * @property {boolean} [is_visible]
 * @property {string[]} [visible_facets_keys]
 * @property {UserInfo} [modified_by]
 * @property {Object} [_custom_json]
 * @property {Object} [meta]
 * @property {boolean} [published]
 * @property {CollectionBanner} banners
 * @property {string} type
 * @property {boolean} [is_active]
 * @property {string} name
 * @property {CollectionImage} logo
 * @property {string[]} [tags]
 * @property {SeoDetail} [seo]
 * @property {boolean} [allow_sort]
 * @property {Object} [_locale_language]
 * @property {boolean} [allow_facets]
 * @property {string} [sort_on]
 */
/**
 * @typedef BannerImage
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 */
/**
 * @typedef ImageUrls
 * @property {BannerImage} [landscape]
 * @property {BannerImage} [portrait]
 */
/**
 * @typedef CollectionCreateResponse
 * @property {string} [app_id]
 * @property {string} [name]
 * @property {Object} [meta]
 * @property {BannerImage} [logo]
 * @property {string} [description]
 * @property {Object} [badge]
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 * @property {Object} [cron]
 * @property {Object} [query]
 * @property {string} [type]
 * @property {boolean} [allow_sort]
 * @property {boolean} [allow_facets]
 * @property {Object} [_schedule]
 * @property {boolean} [is_active]
 * @property {string[]} [tag]
 * @property {string[]} [visible_facets_keys]
 */
/**
 * @typedef CollectionListingFilterType
 * @property {string} [display]
 * @property {boolean} [is_selected]
 * @property {string} [name]
 */
/**
 * @typedef CollectionListingFilterTag
 * @property {string} [display]
 * @property {boolean} [is_selected]
 * @property {string} [name]
 */
/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterType[]} [type]
 * @property {CollectionListingFilterTag[]} [tags]
 */
/**
 * @typedef Media1
 * @property {string} url
 * @property {Object} [meta]
 * @property {string} [type]
 */
/**
 * @typedef GetCollectionDetailNest
 * @property {string} [app_id]
 * @property {string} [description]
 * @property {Object} [badge]
 * @property {string} [slug]
 * @property {Object} [_schedule]
 * @property {Object} [cron]
 * @property {Object} [query]
 * @property {string[]} [tag]
 * @property {string[]} [visible_facets_keys]
 * @property {Action} [action]
 * @property {Object} [meta]
 * @property {string} [uid]
 * @property {ImageUrls} [banners]
 * @property {string} [type]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {Media1} [logo]
 * @property {boolean} [allow_sort]
 * @property {boolean} [allow_facets]
 */
/**
 * @typedef GetCollectionListingResponse
 * @property {CollectionListingFilter} [filters]
 * @property {GetCollectionDetailNest[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CollectionDetailResponse
 * @property {string} [app_id]
 * @property {string} [name]
 * @property {Object} [meta]
 * @property {Media1} [logo]
 * @property {string} [description]
 * @property {Object} [badge]
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 * @property {Object} [cron]
 * @property {Object} [query]
 * @property {string} [type]
 * @property {boolean} [allow_sort]
 * @property {boolean} [allow_facets]
 * @property {Object} [_schedule]
 * @property {boolean} [is_active]
 * @property {string[]} [tag]
 * @property {string[]} [visible_facets_keys]
 */
/**
 * @typedef UpdateCollection
 * @property {string} [description]
 * @property {CollectionBadge} [badge]
 * @property {string} [slug]
 * @property {Schedule} [_schedule]
 * @property {Object} [query]
 * @property {boolean} [is_visible]
 * @property {string[]} [visible_facets_keys]
 * @property {UserInfo} [modified_by]
 * @property {Object} [_custom_json]
 * @property {Object} [meta]
 * @property {boolean} [published]
 * @property {CollectionBanner} [banners]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {CollectionImage} [logo]
 * @property {string[]} [tags]
 * @property {SeoDetail} [seo]
 * @property {boolean} [allow_sort]
 * @property {Object} [_locale_language]
 * @property {boolean} [allow_facets]
 * @property {string} [sort_on]
 */
/**
 * @typedef CollectionItemRequest
 * @property {number} page_no
 * @property {number} page_size
 */
/**
 * @typedef UpdatedResponse
 * @property {string} [message]
 * @property {number[]} [items_not_updated]
 */
/**
 * @typedef ProductDetailAttribute
 * @property {string} [value]
 * @property {string} [type]
 * @property {string} [key]
 */
/**
 * @typedef ProductDetailGroupedAttribute
 * @property {string} [title]
 * @property {ProductDetailAttribute[]} [details]
 */
/**
 * @typedef Price1
 * @property {string} [currency_symbol]
 * @property {number} [max]
 * @property {string} [currency_code]
 * @property {number} [min]
 */
/**
 * @typedef ProductListingPrice
 * @property {Price1} [effective]
 * @property {Price1} [marked]
 */
/**
 * @typedef ProductBrand
 * @property {string} [name]
 * @property {Action} [action]
 * @property {number} [uid]
 * @property {Media1} [logo]
 */
/**
 * @typedef ProductListingDetail
 * @property {string[]} [similars]
 * @property {string} [description]
 * @property {Media1[]} [medias]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string} slug
 * @property {boolean} [has_variant]
 * @property {Object} [teaser_tag]
 * @property {string} [item_type]
 * @property {ProductListingPrice} [price]
 * @property {string} [color]
 * @property {ProductBrand} [brand]
 * @property {number} [uid]
 * @property {Object} [promo_meta]
 * @property {string} [type]
 * @property {string} [discount]
 * @property {number} [rating]
 * @property {string} [name]
 * @property {number} [rating_count]
 * @property {string} [short_description]
 * @property {Object} [attributes]
 * @property {string[]} [tryouts]
 * @property {string} [item_code]
 * @property {string[]} [highlights]
 * @property {boolean} [sellable]
 * @property {string} [product_online_date]
 * @property {string} [image_nature]
 */
/**
 * @typedef GetCollectionItemsResponse
 * @property {ProductFilters[]} [filters]
 * @property {ProductListingDetail[]} [items]
 * @property {ProductSortOn[]} [sort_on]
 * @property {Page} [page]
 */
/**
 * @typedef CatalogInsightBrand
 * @property {string} [name]
 * @property {number} [total_sizes]
 * @property {number} [available_articles]
 * @property {number} [total_articles]
 * @property {number} [article_freshness]
 * @property {number} [available_sizes]
 */
/**
 * @typedef CatalogInsightItem
 * @property {number} [sellable_count]
 * @property {number} [count]
 * @property {number} [out_of_stock_count]
 */
/**
 * @typedef CatalogInsightResponse
 * @property {CatalogInsightBrand} [brand_distribution]
 * @property {CatalogInsightItem} [item]
 */
/**
 * @typedef CrossSellingData
 * @property {number} [articles]
 * @property {number} [products]
 */
/**
 * @typedef CrossSellingResponse
 * @property {CatalogInsightBrand} [brand_distribution]
 * @property {CrossSellingData} [data]
 */
/**
 * @typedef OptInPostRequest
 * @property {number[]} [brand_ids]
 * @property {boolean} [enabled]
 * @property {string} opt_level
 * @property {number[]} [store_ids]
 */
/**
 * @typedef CompanyOptIn
 * @property {number[]} brand_ids
 * @property {number} company_id
 * @property {Object} [created_by]
 * @property {number} created_on
 * @property {number} modified_on
 * @property {string} platform
 * @property {boolean} enabled
 * @property {string} opt_level
 * @property {Object} [modified_by]
 * @property {number[]} store_ids
 */
/**
 * @typedef GetOptInPlatform
 * @property {CompanyOptIn[]} items
 * @property {Page} page
 */
/**
 * @typedef OptinCompanyDetail
 * @property {string} [business_type]
 * @property {string} [name]
 * @property {string} [company_type]
 * @property {number} [uid]
 */
/**
 * @typedef CompanyBrandDetail
 * @property {string} [brand_name]
 * @property {number} [brand_id]
 * @property {number} [company_id]
 * @property {number} [total_article]
 */
/**
 * @typedef OptinCompanyBrandDetailsView
 * @property {CompanyBrandDetail[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef OptinCompanyMetrics
 * @property {number} [store]
 * @property {number} [brand]
 * @property {string} [company]
 */
/**
 * @typedef StoreDetail
 * @property {string} [name]
 * @property {string} [store_type]
 * @property {number} [uid]
 * @property {number} [company_id]
 * @property {Object} [timing]
 * @property {Object[]} [additional_contacts]
 * @property {string} [created_on]
 * @property {string} [store_code]
 * @property {string} [modified_on]
 * @property {string} [display_name]
 * @property {Object[]} [documents]
 */
/**
 * @typedef OptinStoreDetails
 * @property {StoreDetail[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef AttributeMasterMandatoryDetails
 * @property {string[]} [l3_keys]
 */
/**
 * @typedef AttributeMasterMeta
 * @property {boolean} [enriched]
 * @property {AttributeMasterMandatoryDetails} mandatory_details
 */
/**
 * @typedef AttributeSchemaRange
 * @property {number} [max]
 * @property {number} [min]
 */
/**
 * @typedef AttributeMaster
 * @property {string[]} [allowed_values]
 * @property {boolean} [multi]
 * @property {string} type
 * @property {boolean} [mandatory]
 * @property {string} [format]
 * @property {AttributeSchemaRange} [range]
 */
/**
 * @typedef AttributeMasterFilter
 * @property {boolean} indexing
 * @property {number} [priority]
 * @property {string[]} [depends_on]
 */
/**
 * @typedef AttributeMasterDetails
 * @property {string} display_type
 */
/**
 * @typedef GenderDetail
 * @property {string[]} [departments]
 * @property {string} [name]
 * @property {AttributeMasterMeta} [meta]
 * @property {string} [logo]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [description]
 * @property {AttributeMaster} [schema]
 * @property {AttributeMasterFilter} [filters]
 * @property {string} [id]
 * @property {string} [slug]
 * @property {boolean} [is_nested]
 * @property {AttributeMasterDetails} [details]
 */
/**
 * @typedef ProdcutTemplateCategoriesResponse
 * @property {Object[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PTErrorResponse
 * @property {number} [status]
 * @property {Object} [meta]
 * @property {string} [message]
 * @property {Object} [errors]
 * @property {string} [code]
 */
/**
 * @typedef UserSerializer
 * @property {string} [user_id]
 * @property {string} [contact]
 * @property {string} [username]
 */
/**
 * @typedef GetDepartment
 * @property {string} [name]
 * @property {string} [logo]
 * @property {number} [page_size]
 * @property {number} [uid]
 * @property {string[]} [synonyms]
 * @property {string} [item_type]
 * @property {number} [priority_order]
 * @property {number} [page_no]
 * @property {string} [slug]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {string} [search]
 * @property {string} [modified_on]
 * @property {boolean} [is_active]
 * @property {UserSerializer} [modified_by]
 */
/**
 * @typedef DepartmentsResponse
 * @property {GetDepartment[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef DepartmentErrorResponse
 * @property {number} [status]
 * @property {Object} [meta]
 * @property {string} [message]
 * @property {Object} [errors]
 * @property {string} [code]
 */
/**
 * @typedef ProductTemplate
 * @property {string[]} [departments]
 * @property {string} [name]
 * @property {string} [logo]
 * @property {string} [description]
 * @property {string[]} [attributes]
 * @property {string[]} [categories]
 * @property {Object} [created_by]
 * @property {string} slug
 * @property {boolean} [is_archived]
 * @property {boolean} is_physical
 * @property {boolean} is_expirable
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {boolean} [is_active]
 * @property {string} [tag]
 * @property {Object} [modified_by]
 */
/**
 * @typedef TemplatesResponse
 * @property {ProductTemplate} [items]
 * @property {Page} [page]
 */
/**
 * @typedef TemplateDetails
 * @property {string[]} [departments]
 * @property {string} [name]
 * @property {string} [logo]
 * @property {string} [description]
 * @property {string[]} [attributes]
 * @property {string[]} [categories]
 * @property {string} [id]
 * @property {string} slug
 * @property {boolean} [is_archived]
 * @property {boolean} is_physical
 * @property {boolean} is_expirable
 * @property {boolean} [is_active]
 * @property {string} [tag]
 */
/**
 * @typedef Properties
 * @property {Object} [custom_order]
 * @property {Object} [country_of_origin]
 * @property {Object} [description]
 * @property {Object} [multi_size]
 * @property {Object} [slug]
 * @property {Object} [currency]
 * @property {Object} [teaser_tag]
 * @property {Object} [product_publish]
 * @property {Object} [product_group_tag]
 * @property {Object} [item_type]
 * @property {Object} [command]
 * @property {Object} [return_config]
 * @property {Object} [variants]
 * @property {Object} [is_dependent]
 * @property {Object} [trader_type]
 * @property {Object} [is_active]
 * @property {Object} [name]
 * @property {Object} [short_description]
 * @property {Object} [hsn_code]
 * @property {Object} [media]
 * @property {Object} [category_slug]
 * @property {Object} [tags]
 * @property {Object} [item_code]
 * @property {Object} [highlights]
 * @property {Object} [trader]
 * @property {Object} [size_guide]
 * @property {Object} [brand_uid]
 * @property {Object} [sizes]
 * @property {Object} [no_of_boxes]
 * @property {Object} [moq]
 */
/**
 * @typedef GlobalValidation
 * @property {string[]} [required]
 * @property {string} [title]
 * @property {Object} [definitions]
 * @property {string} [description]
 * @property {string} [type]
 * @property {Properties} [properties]
 */
/**
 * @typedef TemplateValidationData
 * @property {Object} [template_validation]
 * @property {GlobalValidation} [global_validation]
 */
/**
 * @typedef TemplatesValidationResponse
 * @property {TemplateDetails} [template_details]
 * @property {TemplateValidationData} [data]
 */
/**
 * @typedef InventoryValidationResponse
 * @property {Object} [data]
 * @property {string} [message]
 */
/**
 * @typedef HSNData
 * @property {string[]} [hsn_code]
 * @property {string[]} [country_of_origin]
 */
/**
 * @typedef HSNCodesResponse
 * @property {HSNData} [data]
 * @property {string} [message]
 */
/**
 * @typedef ProductDownloadItemsData
 * @property {string[]} [templates]
 * @property {string[]} [brand]
 * @property {string} [type]
 */
/**
 * @typedef VerifiedBy
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef ProductDownloadsItems
 * @property {string} [status]
 * @property {ProductDownloadItemsData} [data]
 * @property {string} [completed_on]
 * @property {Object} [template_tags]
 * @property {number} [seller_id]
 * @property {string} [id]
 * @property {VerifiedBy} [created_by]
 * @property {string} [trigger_on]
 * @property {string} [url]
 * @property {string} [task_id]
 */
/**
 * @typedef ProductDownloadsResponse
 * @property {ProductDownloadsItems} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ProductConfigurationDownloads
 * @property {boolean} [multivalue]
 * @property {Object[]} [data]
 */
/**
 * @typedef Media2
 * @property {string} landscape
 * @property {string} portrait
 * @property {string} logo
 */
/**
 * @typedef CategoryMappingValues
 * @property {string} name
 * @property {number} [catalog_id]
 */
/**
 * @typedef CategoryMapping
 * @property {CategoryMappingValues} [google]
 * @property {CategoryMappingValues} [ajio]
 * @property {CategoryMappingValues} [facebook]
 */
/**
 * @typedef Hierarchy
 * @property {number} department
 * @property {number} l2
 * @property {number} l1
 */
/**
 * @typedef CategoryRequestBody
 * @property {number[]} departments
 * @property {string} name
 * @property {Media2} [media]
 * @property {number} [priority]
 * @property {CategoryMapping} [marketplaces]
 * @property {number} level
 * @property {string[]} [tryouts]
 * @property {string[]} [synonyms]
 * @property {string} [slug]
 * @property {Hierarchy[]} [hierarchy]
 * @property {boolean} is_active
 */
/**
 * @typedef CategoryCreateResponse
 * @property {string} [message]
 * @property {number} [uid]
 */
/**
 * @typedef Category
 * @property {number[]} departments
 * @property {string} name
 * @property {Media2} [media]
 * @property {number} [priority]
 * @property {CategoryMapping} [marketplaces]
 * @property {number} [uid]
 * @property {number} level
 * @property {string[]} [tryouts]
 * @property {string[]} [synonyms]
 * @property {Object} [created_by]
 * @property {string} [slug]
 * @property {string} [_id]
 * @property {Hierarchy[]} [hierarchy]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {boolean} is_active
 * @property {Object} [modified_by]
 */
/**
 * @typedef CategoryResponse
 * @property {Category[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CategoryUpdateResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef SingleCategoryResponse
 * @property {Category} [data]
 */
/**
 * @typedef CustomOrder
 * @property {boolean} [is_custom_order]
 * @property {number} [manufacturing_time]
 * @property {string} [manufacturing_time_unit]
 */
/**
 * @typedef TeaserTag
 * @property {string} [tag]
 * @property {string} [url]
 */
/**
 * @typedef ProductPublish
 * @property {string} [product_online_date]
 * @property {boolean} [is_set]
 */
/**
 * @typedef TaxIdentifier
 * @property {string} [hsn_code_id]
 * @property {string} [hsn_code]
 * @property {string} [reporting_hsn]
 */
/**
 * @typedef ReturnConfig
 * @property {number} time
 * @property {boolean} returnable
 * @property {string} unit
 */
/**
 * @typedef Trader
 * @property {string[]} [address]
 * @property {string} [name]
 * @property {string} [type]
 */
/**
 * @typedef OrderQuantity
 * @property {number} [maximum]
 * @property {number} [minimum]
 * @property {boolean} [is_set]
 */
/**
 * @typedef ProductCreateUpdate
 * @property {CustomOrder} [custom_order]
 * @property {string} country_of_origin
 * @property {string} [change_request_id]
 * @property {string} [description]
 * @property {boolean} [multi_size]
 * @property {string} slug
 * @property {string} currency
 * @property {TeaserTag} [teaser_tag]
 * @property {string} [action]
 * @property {boolean} [is_image_less_product]
 * @property {ProductPublish} [product_publish]
 * @property {string} [requester]
 * @property {string[]} [product_group_tag]
 * @property {number} company_id
 * @property {string} item_type
 * @property {TaxIdentifier} tax_identifier
 * @property {Object} [_custom_json]
 * @property {ReturnConfig} return_config
 * @property {Object} [variants]
 * @property {boolean} [is_dependent]
 * @property {number} [uid]
 * @property {boolean} [is_active]
 * @property {boolean} [is_set]
 * @property {number[]} departments
 * @property {string} name
 * @property {string} [short_description]
 * @property {Media1[]} [media]
 * @property {string} template_tag
 * @property {string} category_slug
 * @property {string[]} [tags]
 * @property {string} item_code
 * @property {string[]} [highlights]
 * @property {Trader[]} trader
 * @property {string} [size_guide]
 * @property {number} brand_uid
 * @property {number} [no_of_boxes]
 * @property {OrderQuantity} [moq]
 * @property {string} [bulk_job_id]
 */
/**
 * @typedef ProductPublished
 * @property {number} [product_online_date]
 * @property {boolean} [is_set]
 */
/**
 * @typedef Logo
 * @property {string} [secure_url]
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 * @property {number} [aspect_ratio_f]
 */
/**
 * @typedef Brand
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Logo} [logo]
 */
/**
 * @typedef Image
 * @property {string} [secure_url]
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 * @property {number} [aspect_ratio_f]
 */
/**
 * @typedef Product
 * @property {Object} [custom_order]
 * @property {string} [country_of_origin]
 * @property {string} [description]
 * @property {boolean} [multi_size]
 * @property {string} [slug]
 * @property {boolean} [is_expirable]
 * @property {string} [currency]
 * @property {number} [category_uid]
 * @property {ProductPublished} [product_publish]
 * @property {string} [item_type]
 * @property {string} [primary_color]
 * @property {string} [id]
 * @property {string} [color]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_physical]
 * @property {Object} [variants]
 * @property {Object[]} [all_sizes]
 * @property {Brand} [brand]
 * @property {boolean} [is_dependent]
 * @property {string[]} [l3_mapping]
 * @property {number} [uid]
 * @property {Image[]} [images]
 * @property {boolean} [is_active]
 * @property {boolean} [is_set]
 * @property {number[]} [departments]
 * @property {string} [name]
 * @property {string} [short_description]
 * @property {string} [hsn_code]
 * @property {Media1[]} [media]
 * @property {string} [template_tag]
 * @property {string} [category_slug]
 * @property {string} [item_code]
 * @property {string[]} [highlights]
 * @property {string} [size_guide]
 * @property {number} [brand_uid]
 * @property {string} [image_nature]
 * @property {Object[]} [sizes]
 * @property {Object} [moq]
 */
/**
 * @typedef ProductListingResponse
 * @property {Product[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef AttributeMasterSerializer
 * @property {string} [description]
 * @property {Object} [created_by]
 * @property {string} slug
 * @property {Object} [modified_by]
 * @property {string} [suggestion]
 * @property {string} [unit]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {AttributeMasterFilter} filters
 * @property {AttributeMaster} schema
 * @property {Object} [synonyms]
 * @property {boolean} [is_nested]
 * @property {string} [created_on]
 * @property {boolean} [variant]
 * @property {string[]} departments
 * @property {string} [name]
 * @property {string} [logo]
 * @property {string} [raw_key]
 * @property {string[]} [tags]
 * @property {string} [modified_on]
 * @property {AttributeMasterDetails} details
 */
/**
 * @typedef ProductAttributesResponse
 * @property {AttributeMasterSerializer[]} items
 */
/**
 * @typedef ValidateProduct
 * @property {boolean} [valid]
 */
/**
 * @typedef UserInfo1
 * @property {string} [user_id]
 * @property {string} [uid]
 * @property {string} [username]
 * @property {string} [email]
 */
/**
 * @typedef BulkJob
 * @property {Object[]} [failed_records]
 * @property {number} [failed]
 * @property {string} [custom_template_tag]
 * @property {string} [template_tag]
 * @property {string} [stage]
 * @property {number} company_id
 * @property {string} [file_path]
 * @property {number} total
 * @property {UserInfo1} [created_by]
 * @property {string} created_on
 * @property {string} [modified_on]
 * @property {number} [cancelled]
 * @property {Object[]} [cancelled_records]
 * @property {boolean} [is_active]
 * @property {string} [tracking_url]
 * @property {UserInfo1} [modified_by]
 * @property {number} [succeed]
 */
/**
 * @typedef BulkResponse
 * @property {string} batch_id
 * @property {UserInfo1} [created_by]
 * @property {string} created_on
 * @property {string} [modified_on]
 * @property {boolean} [is_active]
 * @property {UserInfo1} [modified_by]
 */
/**
 * @typedef UserDetail
 * @property {string} [user_id]
 * @property {string} [username]
 * @property {string} [full_name]
 */
/**
 * @typedef ProductBulkRequest
 * @property {string[]} [failed_records]
 * @property {number} [failed]
 * @property {string} [template_tag]
 * @property {string} [stage]
 * @property {number} [company_id]
 * @property {string} [file_path]
 * @property {number} [total]
 * @property {UserDetail} [created_by]
 * @property {string} [created_on]
 * @property {ProductTemplate} [template]
 * @property {string[]} [cancelled_records]
 * @property {string} [modified_on]
 * @property {number} [cancelled]
 * @property {boolean} [is_active]
 * @property {UserDetail} [modified_by]
 * @property {number} [succeed]
 */
/**
 * @typedef ProductBulkRequestList
 * @property {ProductBulkRequest} [items]
 * @property {Page} [page]
 */
/**
 * @typedef BulkProductRequest
 * @property {string} template_tag
 * @property {Object[]} data
 * @property {number} company_id
 * @property {string} batch_id
 */
/**
 * @typedef NestedTags
 * @property {string[]} [tags]
 */
/**
 * @typedef ProductTagsViewResponse
 * @property {NestedTags} [items]
 */
/**
 * @typedef ProductBulkAssets
 * @property {string} url
 * @property {Object} user
 * @property {number} [company_id]
 */
/**
 * @typedef UserCommon
 * @property {string} [user_id]
 * @property {number} [company_id]
 * @property {string} [username]
 */
/**
 * @typedef Items
 * @property {string[]} [failed_records]
 * @property {number} [failed]
 * @property {number} [retry]
 * @property {string} [stage]
 * @property {string} [file_path]
 * @property {number} [company_id]
 * @property {number} [total]
 * @property {string} [id]
 * @property {UserCommon} [created_by]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string[]} [cancelled_records]
 * @property {number} [cancelled]
 * @property {boolean} [is_active]
 * @property {string} [tracking_url]
 * @property {UserCommon} [modified_by]
 * @property {number} [succeed]
 */
/**
 * @typedef BulkAssetResponse
 * @property {Items[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ProductSizeDeleteDataResponse
 * @property {string} [size]
 * @property {number} [item_id]
 * @property {number} [company_id]
 */
/**
 * @typedef ProductSizeDeleteResponse
 * @property {ProductSizeDeleteDataResponse} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef SetSize
 * @property {string} size
 * @property {number} pieces
 */
/**
 * @typedef SizeDistribution
 * @property {SetSize[]} sizes
 */
/**
 * @typedef InventorySet
 * @property {number} [quantity]
 * @property {SizeDistribution} size_distribution
 */
/**
 * @typedef GTIN
 * @property {boolean} [primary]
 * @property {string} gtin_type
 * @property {string} gtin_value
 */
/**
 * @typedef InvSize
 * @property {string} [expiration_date]
 * @property {number} [item_height]
 * @property {string} [item_weight_unit_of_measure]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} [item_length]
 * @property {InventorySet} [set]
 * @property {number} [price]
 * @property {number} [item_width]
 * @property {number} [item_weight]
 * @property {number} quantity
 * @property {string} store_code
 * @property {string} currency
 * @property {string} size
 * @property {number} price_effective
 * @property {boolean} [is_set]
 * @property {number} [price_transfer]
 * @property {GTIN[]} identifiers
 */
/**
 * @typedef ItemQuery
 * @property {number} [uid]
 * @property {number} [brand_uid]
 * @property {string} [item_code]
 */
/**
 * @typedef InventoryRequest
 * @property {InvSize[]} sizes
 * @property {number} company_id
 * @property {ItemQuery} item
 */
/**
 * @typedef InventoryResponse
 * @property {number} [sellable_quantity]
 * @property {Object} [store]
 * @property {string} [uid]
 * @property {number} [price]
 * @property {number} [quantity]
 * @property {string} [currency]
 * @property {string} [inventory_updated_on]
 * @property {string} [size]
 * @property {string} [seller_identifier]
 * @property {number} [item_id]
 * @property {number} [price_effective]
 * @property {Object} [identifiers]
 * @property {number} [price_transfer]
 */
/**
 * @typedef InventoryResponsePaginated
 * @property {InventoryResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef StoreMeta
 * @property {number} id
 */
/**
 * @typedef QuantityBase
 * @property {number} [count]
 * @property {string} [updated_at]
 */
/**
 * @typedef CompanyMeta
 * @property {number} id
 */
/**
 * @typedef PriceMeta
 * @property {number} effective
 * @property {number} marked
 * @property {Object} [tp_notes]
 * @property {string} currency
 * @property {number} transfer
 */
/**
 * @typedef WeightResponse
 * @property {number} shipping
 * @property {string} unit
 * @property {boolean} is_default
 */
/**
 * @typedef DimensionResponse
 * @property {number} length
 * @property {number} height
 * @property {string} unit
 * @property {number} width
 * @property {boolean} is_default
 */
/**
 * @typedef BrandMeta
 * @property {string} name
 * @property {number} id
 */
/**
 * @typedef Trader1
 * @property {string[]} address
 * @property {string} name
 * @property {string} type
 */
/**
 * @typedef ManufacturerResponse
 * @property {string} address
 * @property {string} name
 * @property {boolean} is_default
 */
/**
 * @typedef InventorySellerResponse
 * @property {string} fynd_article_code
 * @property {string} country_of_origin
 * @property {StoreMeta} store
 * @property {Object} [fynd_meta]
 * @property {UserSerializer} [created_by]
 * @property {boolean} fragile
 * @property {Object} [raw_meta]
 * @property {Quantities} [quantities]
 * @property {UserSerializer} [modified_by]
 * @property {string} [expiration_date]
 * @property {CompanyMeta} company
 * @property {boolean} [track_inventory]
 * @property {string} [added_on_store]
 * @property {PriceMeta} price
 * @property {Object} [tax_identifier]
 * @property {Object} [return_config]
 * @property {Object} [_custom_json]
 * @property {number} item_id
 * @property {WeightResponse} weight
 * @property {DimensionResponse} dimension
 * @property {BrandMeta} brand
 * @property {Object} [meta]
 * @property {string} [stage]
 * @property {string} uid
 * @property {InventorySet} [set]
 * @property {string} size
 * @property {boolean} [is_active]
 * @property {string} fynd_item_code
 * @property {boolean} [is_set]
 * @property {number} total_quantity
 * @property {Trader1[]} [trader]
 * @property {Object} identifier
 * @property {ManufacturerResponse} manufacturer
 * @property {string} seller_identifier
 */
/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {InventorySellerResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef BulkInventoryGetItems
 * @property {string[]} [failed_records]
 * @property {number} [failed]
 * @property {string} [stage]
 * @property {number} [company_id]
 * @property {string} [file_path]
 * @property {string} [id]
 * @property {number} [total]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {string[]} [cancelled_records]
 * @property {number} [cancelled]
 * @property {string} [modified_on]
 * @property {boolean} [is_active]
 * @property {Object} [modified_by]
 * @property {number} [succeed]
 */
/**
 * @typedef BulkInventoryGet
 * @property {BulkInventoryGetItems[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef InventoryJobPayload
 * @property {string} [expiration_date]
 * @property {number} [price_marked]
 * @property {number} [total_quantity]
 * @property {string} store_code
 * @property {number} [price_effective]
 * @property {string} seller_identifier
 */
/**
 * @typedef InventoryBulkRequest
 * @property {InventoryJobPayload[]} sizes
 * @property {string} batch_id
 * @property {number} company_id
 * @property {Object} [user]
 */
/**
 * @typedef InventoryExportRequest
 * @property {number[]} [store]
 * @property {number[]} [brand]
 * @property {string} [type]
 */
/**
 * @typedef InventoryExportResponse
 * @property {string} [status]
 * @property {number} seller_id
 * @property {string} [trigger_on]
 * @property {string} task_id
 * @property {Object} [request_params]
 */
/**
 * @typedef InventoryExportJob
 * @property {string} [status]
 * @property {string} [completed_on]
 * @property {number} seller_id
 * @property {string} [trigger_on]
 * @property {string} [url]
 * @property {string} task_id
 * @property {Object} [request_params]
 */
/**
 * @typedef FilerList
 * @property {string} [display]
 * @property {string} [value]
 */
/**
 * @typedef InventoryConfig
 * @property {boolean} [multivalues]
 * @property {FilerList[]} [data]
 */
/**
 * @typedef InventoryPayload
 * @property {string} [expiration_date]
 * @property {number} store_id
 * @property {number} [price_marked]
 * @property {number} [total_quantity]
 * @property {number} [price_effective]
 * @property {string} seller_identifier
 */
/**
 * @typedef InventoryRequestSchemaV2
 * @property {InventoryPayload[]} [payload]
 * @property {Object} [meta]
 * @property {number} company_id
 */
/**
 * @typedef InventoryFailedReason
 * @property {string} [errors]
 * @property {string} message
 */
/**
 * @typedef InventoryResponseItem
 * @property {InventoryFailedReason} [reason]
 * @property {InventoryPayload} [data]
 */
/**
 * @typedef InventoryUpdateResponse
 * @property {InventoryResponseItem[]} [items]
 * @property {string} message
 */
/**
 * @typedef HsnUpsert
 * @property {boolean} tax_on_mrp
 * @property {string} hsn_code
 * @property {number} tax1
 * @property {string} hs2_code
 * @property {number} [threshold2]
 * @property {boolean} [tax_on_esp]
 * @property {number} company_id
 * @property {number} [uid]
 * @property {number} threshold1
 * @property {number} [tax2]
 */
/**
 * @typedef HsnCodesObject
 * @property {boolean} [tax_on_mrp]
 * @property {string} [hsn_code]
 * @property {number} [tax1]
 * @property {string} [hs2_code]
 * @property {number} [threshold2]
 * @property {boolean} [tax_on_esp]
 * @property {number} [company_id]
 * @property {string} [id]
 * @property {number} [threshold1]
 * @property {string} [modified_on]
 * @property {number} [tax2]
 */
/**
 * @typedef HsnCode
 * @property {HsnCodesObject} [data]
 */
/**
 * @typedef PageResponse
 * @property {boolean} [has_previous]
 * @property {string} [current]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {boolean} [has_next]
 */
/**
 * @typedef HsnCodesListingResponse
 * @property {HsnCodesObject[]} [items]
 * @property {PageResponse} [page]
 */
/**
 * @typedef BulkHsnUpsert
 * @property {HsnUpsert[]} data
 */
/**
 * @typedef BulkHsnResponse
 * @property {boolean} [success]
 */
/**
 * @typedef TaxSlab
 * @property {number} rate
 * @property {string} effective_date
 * @property {number} [cess]
 * @property {number} threshold
 */
/**
 * @typedef HSNDataInsertV2
 * @property {string} hsn_code
 * @property {TaxSlab[]} taxes
 * @property {string} description
 * @property {Object} [created_by]
 * @property {string} country_code
 * @property {string} type
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} reporting_hsn
 * @property {Object} [modified_by]
 */
/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {HSNDataInsertV2[]} [items]
 * @property {PageResponse} [page]
 */
/**
 * @typedef BrandItem
 * @property {string[]} [departments]
 * @property {string} [name]
 * @property {Action} [action]
 * @property {Media} [logo]
 * @property {number} [uid]
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 * @property {string} [discount]
 */
/**
 * @typedef BrandListingResponse
 * @property {BrandItem[]} [items]
 * @property {Page} page
 */
/**
 * @typedef Department
 * @property {string} [name]
 * @property {Media} [logo]
 * @property {number} [uid]
 * @property {number} [priority_order]
 * @property {string} [slug]
 */
/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
 */
/**
 * @typedef DepartmentIdentifier
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef ThirdLevelChild
 * @property {string} [name]
 * @property {Action} [action]
 * @property {number} [uid]
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 * @property {Object} [_custom_json]
 * @property {Object[]} [childs]
 */
/**
 * @typedef SecondLevelChild
 * @property {string} [name]
 * @property {Action} [action]
 * @property {number} [uid]
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 * @property {Object} [_custom_json]
 * @property {ThirdLevelChild[]} [childs]
 */
/**
 * @typedef Child
 * @property {string} [name]
 * @property {Action} [action]
 * @property {number} [uid]
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 * @property {Object} [_custom_json]
 * @property {SecondLevelChild[]} [childs]
 */
/**
 * @typedef CategoryItems
 * @property {string} [name]
 * @property {Action} [action]
 * @property {number} [uid]
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 * @property {Child[]} [childs]
 */
/**
 * @typedef DepartmentCategoryTree
 * @property {string} [department]
 * @property {CategoryItems[]} [items]
 */
/**
 * @typedef CategoryListingResponse
 * @property {DepartmentIdentifier[]} [departments]
 * @property {DepartmentCategoryTree[]} [data]
 */
/**
 * @typedef ApplicationProductListingResponse
 * @property {ProductFilters[]} [filters]
 * @property {ProductListingDetail[]} [items]
 * @property {ProductSortOn[]} [sort_on]
 * @property {Page} page
 */
/**
 * @typedef ProductDetail
 * @property {string[]} [similars]
 * @property {string} [description]
 * @property {Media1[]} [medias]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string} slug
 * @property {boolean} [has_variant]
 * @property {Object} [teaser_tag]
 * @property {string} [item_type]
 * @property {string} [color]
 * @property {ProductBrand} [brand]
 * @property {number} [uid]
 * @property {Object} [promo_meta]
 * @property {string} [type]
 * @property {number} [rating]
 * @property {string} [name]
 * @property {number} [rating_count]
 * @property {string} [short_description]
 * @property {Object} [attributes]
 * @property {string[]} [tryouts]
 * @property {string} [item_code]
 * @property {string[]} [highlights]
 * @property {string} [product_online_date]
 * @property {string} [image_nature]
 */
/**
 * @typedef ArticleQuery
 * @property {string} size
 * @property {number} item_id
 * @property {number[]} [ignored_stores]
 */
/**
 * @typedef AssignStoreArticle
 * @property {Object} [meta]
 * @property {ArticleAssignment} [article_assignment]
 * @property {number} [quantity]
 * @property {ArticleQuery} [query]
 * @property {string} [group_id]
 */
/**
 * @typedef AssignStore
 * @property {string} app_id
 * @property {AssignStoreArticle[]} articles
 * @property {number} [company_id]
 * @property {string} pincode
 * @property {string} [channel_type]
 * @property {string} [channel_identifier]
 * @property {number[]} [store_ids]
 */
/**
 * @typedef ArticleAssignment1
 * @property {string} [strategy]
 * @property {string} [level]
 */
/**
 * @typedef StoreAssignResponse
 * @property {boolean} status
 * @property {Object} [meta]
 * @property {number} [store_id]
 * @property {number} [price_marked]
 * @property {Object[]} [strategy_wise_listing]
 * @property {string} [uid]
 * @property {number} [company_id]
 * @property {string} [group_id]
 * @property {ArticleAssignment1} article_assignment
 * @property {number} [index]
 * @property {string} [_id]
 * @property {number} quantity
 * @property {string} [s_city]
 * @property {number} [store_pincode]
 * @property {string} size
 * @property {number} item_id
 * @property {number} [price_effective]
 */
/**
 * @typedef GetAddressSerializer
 * @property {number} [longitude]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [landmark]
 * @property {string} [address_type]
 * @property {number} [pincode]
 * @property {string} [address2]
 * @property {number} [latitude]
 * @property {string} [country_code]
 * @property {string} [address1]
 * @property {string} [country]
 */
/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code
 * @property {string} number
 */
/**
 * @typedef LocationManagerSerializer
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [name]
 * @property {string} [email]
 */
/**
 * @typedef UserSerializer1
 * @property {string} [user_id]
 * @property {string} [contact]
 * @property {string} [username]
 */
/**
 * @typedef ProductReturnConfigSerializer
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */
/**
 * @typedef Document
 * @property {string} value
 * @property {string} [url]
 * @property {boolean} [verified]
 * @property {string} [legal_name]
 * @property {string} type
 */
/**
 * @typedef UserSerializer2
 * @property {string} [user_id]
 * @property {string} [contact]
 * @property {string} [username]
 */
/**
 * @typedef GetCompanySerializer
 * @property {string} [name]
 * @property {UserSerializer2} [verified_by]
 * @property {string} [business_type]
 * @property {string} [company_type]
 * @property {number} [uid]
 * @property {string} [stage]
 * @property {string} [reject_reason]
 * @property {UserSerializer2} [created_by]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} [verified_on]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {UserSerializer2} [modified_by]
 */
/**
 * @typedef LocationIntegrationType
 * @property {string} [order]
 * @property {string} [inventory]
 */
/**
 * @typedef LocationTimingSerializer
 * @property {number} [hour]
 * @property {number} [minute]
 */
/**
 * @typedef LocationDayWiseSerializer
 * @property {boolean} open
 * @property {LocationTimingSerializer} [opening]
 * @property {string} weekday
 * @property {LocationTimingSerializer} [closing]
 */
/**
 * @typedef InvoiceCredSerializer
 * @property {boolean} [enabled]
 * @property {string} [password]
 * @property {string} [username]
 */
/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_invoice]
 * @property {InvoiceCredSerializer} [e_waybill]
 */
/**
 * @typedef GetLocationSerializer
 * @property {string} [store_type]
 * @property {string[]} [notification_emails]
 * @property {GetAddressSerializer} address
 * @property {LocationManagerSerializer} [manager]
 * @property {UserSerializer1} [created_by]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {Document[]} [documents]
 * @property {string} code
 * @property {UserSerializer1} [modified_by]
 * @property {GetCompanySerializer} [company]
 * @property {Object} [_custom_json]
 * @property {string} phone_number
 * @property {UserSerializer1} [verified_by]
 * @property {string} [stage]
 * @property {number} [uid]
 * @property {string} [created_on]
 * @property {string} [verified_on]
 * @property {string} display_name
 * @property {string} name
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {LocationIntegrationType} [integration_type]
 * @property {string} [modified_on]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {Object} [warnings]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 */
/**
 * @typedef LocationListSerializer
 * @property {GetLocationSerializer[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CompanyTaxesSerializer
 * @property {string} [effective_date]
 * @property {boolean} [enable]
 * @property {number} [rate]
 */
/**
 * @typedef BusinessCountryInfo
 * @property {string} [country_code]
 * @property {string} [country]
 */
/**
 * @typedef Website
 * @property {string} [url]
 */
/**
 * @typedef BusinessDetails
 * @property {Website} [website]
 */
/**
 * @typedef ContactDetails
 * @property {SellerPhoneNumber[]} [phone]
 * @property {string[]} [emails]
 */
/**
 * @typedef GetCompanyProfileSerializerResponse
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [mode]
 * @property {string} [stage]
 * @property {string} [created_on]
 * @property {UserSerializer} [modified_by]
 * @property {string} [name]
 * @property {boolean} [franchise_enabled]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {UserSerializer} [created_by]
 * @property {BusinessDetails} [business_details]
 * @property {UserSerializer} [verified_by]
 * @property {string} [modified_on]
 * @property {string} [verified_on]
 * @property {string} [business_info]
 * @property {string} company_type
 * @property {number} uid
 * @property {Document[]} [documents]
 * @property {string} business_type
 * @property {Object} [warnings]
 * @property {string[]} [notification_emails]
 * @property {ContactDetails} [contact_details]
 */
/**
 * @typedef CompanyTaxesSerializer1
 * @property {string} [effective_date]
 * @property {boolean} [enable]
 * @property {number} [rate]
 */
/**
 * @typedef CreateUpdateAddressSerializer
 * @property {number} pincode
 * @property {number} longitude
 * @property {string} state
 * @property {string} country
 * @property {string} address1
 * @property {string} address_type
 * @property {string} [country_code]
 * @property {string} [landmark]
 * @property {string} city
 * @property {number} latitude
 * @property {string} [address2]
 */
/**
 * @typedef UpdateCompany
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {string} [business_type]
 * @property {Document[]} [documents]
 * @property {Object} [warnings]
 * @property {string} [name]
 * @property {string} [reject_reason]
 * @property {string[]} [notification_emails]
 * @property {boolean} [franchise_enabled]
 * @property {Object} [_custom_json]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {BusinessDetails} [business_details]
 * @property {string} [business_info]
 * @property {ContactDetails} [contact_details]
 * @property {string} [company_type]
 */
/**
 * @typedef ProfileSuccessResponse
 * @property {boolean} [success]
 * @property {number} [uid]
 */
/**
 * @typedef DocumentsObj
 * @property {number} [pending]
 * @property {number} [verified]
 */
/**
 * @typedef MetricsSerializer
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [store_documents]
 * @property {DocumentsObj} [store]
 * @property {DocumentsObj} [brand]
 * @property {DocumentsObj} [product]
 * @property {number} [uid]
 * @property {string} [stage]
 */
/**
 * @typedef BrandBannerSerializer
 * @property {string} [landscape]
 * @property {string} [portrait]
 */
/**
 * @typedef GetBrandResponseSerializer
 * @property {string[]} [synonyms]
 * @property {string} [reject_reason]
 * @property {string} [mode]
 * @property {string} [stage]
 * @property {string} [created_on]
 * @property {UserSerializer} [modified_by]
 * @property {string} name
 * @property {UserSerializer} [created_by]
 * @property {UserSerializer} [verified_by]
 * @property {string} [slug_key]
 * @property {string} [modified_on]
 * @property {Object} [_custom_json]
 * @property {string} [verified_on]
 * @property {string} [description]
 * @property {Object} [warnings]
 * @property {string} [logo]
 * @property {BrandBannerSerializer} [banner]
 * @property {number} [uid]
 * @property {Object} [_locale_language]
 */
/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {string} [description]
 * @property {string[]} [synonyms]
 * @property {string} [brand_tier]
 * @property {string} name
 * @property {Object} [_custom_json]
 * @property {string} logo
 * @property {number} [company_id]
 * @property {BrandBannerSerializer} [banner]
 * @property {number} [uid]
 * @property {Object} [_locale_language]
 */
/**
 * @typedef CompanySocialAccounts
 * @property {string} url
 * @property {string} name
 */
/**
 * @typedef CompanyDetails
 * @property {CompanySocialAccounts[]} [socials]
 * @property {string} [website_url]
 */
/**
 * @typedef CompanySerializer
 * @property {CompanyDetails} [details]
 * @property {string} [created_on]
 * @property {UserSerializer} [modified_by]
 * @property {string} business_type
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [name]
 * @property {string} [reject_reason]
 * @property {UserSerializer} [verified_by]
 * @property {string[]} [notification_emails]
 * @property {string} [modified_on]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {Object} [_custom_json]
 * @property {string[]} [market_channels]
 * @property {string} [verified_on]
 * @property {UserSerializer} [created_by]
 * @property {number} [uid]
 * @property {string} [stage]
 * @property {string} company_type
 */
/**
 * @typedef CompanyBrandSerializer
 * @property {string} [created_on]
 * @property {UserSerializer} [modified_by]
 * @property {Object} [warnings]
 * @property {CompanySerializer} [company]
 * @property {string} [reject_reason]
 * @property {UserSerializer} [verified_by]
 * @property {string} [modified_on]
 * @property {string} [verified_on]
 * @property {UserSerializer} [created_by]
 * @property {GetBrandResponseSerializer} [brand]
 * @property {number} [uid]
 * @property {string} [stage]
 */
/**
 * @typedef CompanyBrandListSerializer
 * @property {CompanyBrandSerializer[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number} [uid]
 * @property {number} company
 * @property {number[]} brands
 */
/**
 * @typedef LocationSerializer
 * @property {Document[]} [documents]
 * @property {string} display_name
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {Object} [warnings]
 * @property {string} name
 * @property {number} company
 * @property {string} [store_type]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string[]} [notification_emails]
 * @property {Object} [_custom_json]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {string} code
 * @property {LocationManagerSerializer} [manager]
 * @property {number} [uid]
 * @property {string} [stage]
 * @property {GetAddressSerializer} address
 */
/**
 * @typedef BulkLocationSerializer
 * @property {LocationSerializer[]} [data]
 */
/**
 * @typedef FailedResponse
 * @property {string} message
 */
/**
 * @typedef CDN
 * @property {string} url
 */
/**
 * @typedef Upload
 * @property {number} expiry
 * @property {string} url
 */
/**
 * @typedef StartResponse
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} [method]
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {string[]} [tags]
 */
/**
 * @typedef StartRequest
 * @property {string} file_name
 * @property {string} content_type
 * @property {number} size
 * @property {string[]} [tags]
 * @property {Object} [params]
 */
/**
 * @typedef CompleteResponse
 * @property {string} _id
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {boolean} success
 * @property {string[]} [tags]
 * @property {string} created_on
 * @property {string} modified_on
 */
/**
 * @typedef Opts
 * @property {number} [attempts]
 * @property {number} [timestamp]
 * @property {number} [delay]
 */
/**
 * @typedef CopyFileTask
 * @property {string} id
 * @property {string} name
 * @property {BulkRequest} data
 * @property {Opts} opts
 * @property {number} progress
 * @property {number} delay
 * @property {number} timestamp
 * @property {number} attempts_made
 * @property {string[]} [stacktrace]
 * @property {number} finished_on
 * @property {number} processed_on
 */
/**
 * @typedef ReqConfiguration
 * @property {number} [concurrency]
 */
/**
 * @typedef Destination
 * @property {string} namespace
 * @property {string} rewrite
 * @property {string} [basepath]
 */
/**
 * @typedef BulkRequest
 * @property {string[]} urls
 * @property {Destination} destination
 * @property {ReqConfiguration} [configuration]
 */
/**
 * @typedef Urls
 * @property {string} url
 * @property {string} signed_url
 * @property {number} expiry
 */
/**
 * @typedef SignUrlResponse
 * @property {Urls[]} urls
 */
/**
 * @typedef SignUrlRequest
 * @property {number} expiry
 * @property {string[]} urls
 */
/**
 * @typedef DbRecord
 * @property {boolean} success
 * @property {string[]} tags
 * @property {string} _id
 * @property {string} file_name
 * @property {string} [operation]
 * @property {string} namespace
 * @property {string} content_type
 * @property {string} file_path
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {string} created_on
 * @property {string} modified_on
 */
/**
 * @typedef BrowseResponse
 * @property {DbRecord[]} items
 * @property {Page} page
 */
/**
 * @typedef RedirectDevice
 * @property {string} [link]
 * @property {string} [type]
 */
/**
 * @typedef WebRedirect
 * @property {string} [link]
 * @property {string} [type]
 */
/**
 * @typedef Redirects
 * @property {RedirectDevice} [ios]
 * @property {RedirectDevice} [android]
 * @property {WebRedirect} [web]
 * @property {boolean} [force_web]
 */
/**
 * @typedef CampaignShortLink
 * @property {string} [source]
 * @property {string} [medium]
 */
/**
 * @typedef Attribution
 * @property {string} [campaign_cookie_expiry]
 */
/**
 * @typedef SocialMediaTags
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [image]
 */
/**
 * @typedef ShortLinkReq
 * @property {string} title
 * @property {string} url
 * @property {string} [hash]
 * @property {boolean} [active]
 * @property {string} [expire_at]
 * @property {boolean} [enable_tracking]
 * @property {boolean} [personalized]
 * @property {CampaignShortLink} [campaign]
 * @property {Redirects} [redirects]
 * @property {Attribution} [attribution]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {number} [count]
 */
/**
 * @typedef UrlInfo
 * @property {string} [original]
 * @property {string} [short]
 * @property {string} [hash]
 */
/**
 * @typedef ShortLinkRes
 * @property {string} [title]
 * @property {UrlInfo} [url]
 * @property {string} [created_by]
 * @property {boolean} [app_redirect]
 * @property {string} [fallback]
 * @property {boolean} [active]
 * @property {string} [_id]
 * @property {boolean} [enable_tracking]
 * @property {string} [expire_at]
 * @property {string} [application]
 * @property {string} [user_id]
 * @property {string} [created_at]
 * @property {Object} [meta]
 * @property {string} [updated_at]
 * @property {boolean} [personalized]
 * @property {CampaignShortLink} [campaign]
 * @property {Redirects} [redirects]
 * @property {Attribution} [attribution]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {number} [count]
 */
/**
 * @typedef ShortLinkList
 * @property {ShortLinkRes[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ErrorRes
 * @property {string} [message]
 */
/**
 * @typedef DataTresholdDTO
 * @property {number} [min_price]
 * @property {number} [safe_stock]
 * @property {number} [period_threshold]
 * @property {string} [period_threshold_type]
 * @property {GenericDTO[]} [period_type_list]
 */
/**
 * @typedef GenericDTO
 * @property {string} [text]
 * @property {Object} [value]
 */
/**
 * @typedef JobConfigDTO
 * @property {string} integration
 * @property {Object} [integration_data]
 * @property {string} [company_name]
 * @property {number} company_id
 * @property {TaskDTO} [task_details]
 * @property {DataTresholdDTO} [threshold_details]
 * @property {string} [job_code]
 * @property {string} [alias]
 */
/**
 * @typedef TaskDTO
 * @property {number} [type]
 * @property {GenericDTO[]} [group_list]
 */
/**
 * @typedef ResponseEnvelopeString
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {string} [items]
 * @property {string} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef AWSS3config
 * @property {string} [bucket]
 * @property {string} [region]
 * @property {string} [dir]
 * @property {string} [access_key]
 * @property {string} [secret_key]
 * @property {string} [local_file_path]
 * @property {string} [archive_path]
 * @property {boolean} [archive]
 * @property {boolean} [delete]
 * @property {boolean} [unzip]
 * @property {string} [zip_format]
 * @property {string} [file_regex]
 * @property {ArchiveConfig} [archive_config]
 */
/**
 * @typedef ArchiveConfig
 * @property {boolean} [delete]
 * @property {boolean} [archive]
 * @property {string} [archive_dir]
 */
/**
 * @typedef Audit
 * @property {string} [created_by]
 * @property {string} [modified_by]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef CatalogMasterConfig
 * @property {string} [source_slug]
 */
/**
 * @typedef CompanyConfig
 * @property {number} [company_id]
 * @property {number[]} [exclude_steps]
 * @property {string[]} [hidden_closet_keys]
 * @property {Object} [open_tags]
 * @property {string[]} [tax_identifiers]
 * @property {number} [delete_quantity_threshold]
 */
/**
 * @typedef DBConfig
 * @property {string} [vendor]
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {string} [dbname]
 * @property {string} [query]
 * @property {boolean} [procedure]
 * @property {string} [driver_class]
 * @property {string} [jdbc_url]
 * @property {Object} [optional_properties]
 */
/**
 * @typedef DBConnectionProfile
 * @property {string} [inventory]
 */
/**
 * @typedef DBParamConfig
 * @property {Object} [params]
 */
/**
 * @typedef DefaultHeadersDTO
 * @property {PropBeanDTO} [store]
 * @property {PropBeanDTO} [intf_article_id]
 * @property {PropBeanDTO} [price_effective]
 * @property {PropBeanDTO} [quantity]
 */
/**
 * @typedef DocMappingConfig
 * @property {Object} [properties]
 * @property {number} [junk_data_threshold_count]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {string} [unwind_field]
 * @property {DefaultHeadersDTO} [default_headers]
 */
/**
 * @typedef EmailConfig
 * @property {string} [recepient]
 * @property {string} [host]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {boolean} [read_from_content]
 * @property {boolean} [filter_based_on_recepients]
 * @property {string} [pcol]
 * @property {string} [subject_line_regex]
 * @property {string} [sender_address]
 * @property {string} [local_dir]
 * @property {string[]} [folder_name_hierarchies]
 * @property {string} [attachment_regex]
 * @property {string} [body_content_regex]
 * @property {boolean} [password_protected]
 * @property {string} [zip_format]
 * @property {boolean} [attachment_mandate]
 * @property {boolean} [filter_files_after_extraction]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_unread_mails]
 * @property {string} [content_type]
 * @property {boolean} [downloadable_link]
 * @property {Object} [properties]
 */
/**
 * @typedef FTPConfig
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [local_dir]
 * @property {string} [remote_dir]
 * @property {string} [zip_file_regex]
 * @property {ArchiveConfig} [archive_config]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {boolean} [read_all_files]
 */
/**
 * @typedef FileConfig
 * @property {string} [delimiter]
 * @property {string} [charset]
 * @property {Object} [properties]
 * @property {boolean} [file_has_header]
 * @property {number} [header_index]
 * @property {string[]} [header_array]
 * @property {number} [data_start_index]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {number} [junk_data_threshold_count]
 * @property {string} [file_type]
 * @property {boolean} [line_validity_check]
 * @property {string[]} [sheet_names]
 * @property {boolean} [read_all_sheets]
 * @property {string} [quote_char]
 * @property {string} [escape_char]
 * @property {DefaultHeadersDTO} [default_headers]
 */
/**
 * @typedef GoogleSpreadSheetConfig
 * @property {string} [range]
 * @property {string} [sheet_id]
 * @property {string} [client_secret_location]
 * @property {string} [cred_storage_directory]
 * @property {string} [local_dir]
 * @property {ArchiveConfig} [archive_config]
 */
/**
 * @typedef HttpConfig
 * @property {string} [hosturl]
 * @property {string} [username]
 * @property {string} [password]
 * @property {Object} [request_params]
 * @property {string} [http_method]
 * @property {string} [request_payload]
 * @property {string} [local_path]
 * @property {ArchiveConfig} [archive_config]
 */
/**
 * @typedef JobConfig
 * @property {number} [_id]
 * @property {string} [job_code]
 * @property {string} [task_type]
 * @property {number} [sync_delay]
 * @property {string} [cron_expression]
 * @property {StoreFilter} [store_filter]
 * @property {ProcessConfig} [process_config]
 * @property {StoreConfig[]} [store_config]
 * @property {Object} [properties]
 * @property {boolean} [immediate_first_run]
 * @property {boolean} [disable]
 * @property {string[]} [dependent_job_codes]
 * @property {CompanyConfig[]} [company_config]
 * @property {number[]} [company_ids]
 * @property {string[]} [tax_identifiers]
 * @property {string} [priority]
 * @property {number} [period_threshold]
 * @property {string} [period_threshold_type]
 * @property {DBConnectionProfile} [db_connection_profile]
 * @property {Object} [params]
 * @property {Object} [open_tags]
 * @property {number} [delete_quantity_threshold]
 * @property {CatalogMasterConfig} [catalog_master_config]
 * @property {string[]} [aggregator_types]
 * @property {string} [integration_type]
 * @property {number} [min_price]
 * @property {Audit} [audit]
 * @property {number} [version]
 * @property {string} [alias]
 */
/**
 * @typedef JobConfigRawDTO
 * @property {string} integration
 * @property {string} company_name
 * @property {number} company_id
 * @property {JobConfig} [data]
 */
/**
 * @typedef JsonDocConfig
 * @property {PropBeanConfig[]} [prop_bean_configs]
 */
/**
 * @typedef LocalFileConfig
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [local_dir]
 * @property {string} [working_dir]
 * @property {boolean} [unzip]
 * @property {string} [zip_file_regex]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_files]
 */
/**
 * @typedef MongoDocConfig
 * @property {string} [collection_name]
 * @property {Object} [find_query]
 * @property {Object} [projection_query]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {Object[]} [aggregate_pipeline]
 * @property {boolean} [skip_save]
 */
/**
 * @typedef OAuthConfig
 * @property {number} [limit]
 * @property {number} [pages]
 * @property {number} [interval]
 * @property {string} [consumer_key]
 * @property {string} [consumer_secret]
 * @property {string} [token]
 * @property {string} [token_secret]
 * @property {string} [rest_url]
 * @property {string} [rest_base_url]
 * @property {string} [function_name]
 */
/**
 * @typedef ProcessConfig
 * @property {DBConfig} [db_config]
 * @property {DBParamConfig} [db_param_config]
 * @property {SFTPConfig} [sftp_config]
 * @property {AWSS3config} [aws_s3_config]
 * @property {MongoDocConfig} [mongo_doc_config]
 * @property {FTPConfig} [ftp_config]
 * @property {EmailConfig} [email_config]
 * @property {FileConfig} [file_config]
 * @property {JsonDocConfig} [json_doc_config]
 * @property {DocMappingConfig} [doc_mapping_config]
 * @property {TaskStepConfig} [task_step_config]
 * @property {HttpConfig} [http_config]
 * @property {LocalFileConfig} [local_file_config]
 * @property {OAuthConfig} [oauth_config]
 * @property {GoogleSpreadSheetConfig} [google_spreadsheet_config]
 */
/**
 * @typedef PropBeanConfig
 * @property {boolean} [required]
 * @property {Object} [mapping]
 * @property {boolean} [optional]
 * @property {Send} [send]
 * @property {Object[]} [validations]
 * @property {string[]} [values]
 * @property {boolean} [include]
 * @property {string} [source_field]
 * @property {string[]} [source_fields]
 * @property {string} [destination_field]
 * @property {string} [data_type]
 * @property {Object} [default_value]
 * @property {Object} [const_value]
 * @property {string} [concat_str]
 * @property {string} [function_name]
 * @property {string} [transformer_name]
 * @property {string} [all_param_function_name]
 * @property {string} [sub_separator]
 * @property {string} [index_field]
 * @property {boolean} [ignore_if_not_exists]
 * @property {string} [identifier_type]
 * @property {Object} [projection_query]
 * @property {boolean} [enrich_from_master]
 */
/**
 * @typedef PropBeanDTO
 * @property {boolean} [required]
 * @property {boolean} [optional]
 * @property {boolean} [include]
 * @property {string} [source_field]
 * @property {string[]} [source_fields]
 * @property {string} [destination_field]
 * @property {string} [data_type]
 * @property {Object} [default_value]
 * @property {Object} [const_value]
 * @property {string} [concat_str]
 * @property {string} [function_name]
 * @property {string} [transformer_name]
 * @property {string} [all_param_function_name]
 * @property {string} [sub_separator]
 * @property {string} [index_field]
 * @property {boolean} [ignore_if_not_exists]
 * @property {string} [identifier_type]
 * @property {Object} [projection_query]
 * @property {boolean} [enrich_from_master]
 */
/**
 * @typedef ResponseEnvelopeListJobConfigRawDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigRawDTO[]} [items]
 * @property {JobConfigRawDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef SFTPConfig
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [private_key_path]
 * @property {boolean} [strict_host_key_checking]
 * @property {string} [local_dir]
 * @property {string} [remote_dir]
 * @property {boolean} [password_protected]
 * @property {string} [zip_file_regex]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_files]
 */
/**
 * @typedef Send
 * @property {boolean} [raw]
 * @property {boolean} [processed]
 */
/**
 * @typedef StoreConfig
 * @property {string} [job_code]
 * @property {string} [storeid]
 * @property {string} [store_alias]
 * @property {string} [store_file_regex]
 * @property {string} [store_file_name]
 * @property {ProcessConfig} [process_config]
 * @property {Object} [properties]
 */
/**
 * @typedef StoreFilter
 * @property {string[]} [include_tags]
 * @property {string[]} [exclude_tags]
 * @property {Object} [query]
 */
/**
 * @typedef TaskConfig
 * @property {string} [name]
 * @property {number} [task_config_id]
 * @property {TaskParam[]} [task_params]
 */
/**
 * @typedef TaskParam
 * @property {string} [name]
 * @property {Object} [value]
 */
/**
 * @typedef TaskStepConfig
 * @property {TaskConfig[]} [task_configs]
 * @property {number[]} [task_config_ids]
 * @property {number[]} [task_config_group_ids]
 */
/**
 * @typedef JobStepsDTO
 * @property {string} [step_name]
 * @property {string} [type]
 * @property {number} [step_execution_time]
 * @property {number} [start_count]
 * @property {number} [end_count]
 * @property {number} [deleted_count]
 * @property {string} [processed_start_time]
 * @property {string} [processed_at]
 */
/**
 * @typedef ResponseEnvelopeListJobStepsDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobStepsDTO[]} [items]
 * @property {JobStepsDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef ResponseEnvelopeListJobConfigDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigDTO[]} [items]
 * @property {JobConfigDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef ResponseEnvelopeJobConfigDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigDTO} [items]
 * @property {JobConfigDTO} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef JobHistoryDto
 * @property {number} [total_added_count]
 * @property {number} [total_updated_count]
 * @property {number} [total_suppressed_count]
 * @property {number} [total_initial_count]
 * @property {number} [job_id]
 * @property {string} [status]
 * @property {string} [job_code]
 * @property {string} [processed_on]
 * @property {string[]} [filename]
 * @property {string} [error_type]
 * @property {string} [message]
 */
/**
 * @typedef JobMetricsDto
 * @property {string} [job_code]
 * @property {string} [is_run_more_than_usual]
 * @property {JobHistoryDto[]} [job_history]
 * @property {number} [total_success_count]
 * @property {number} [total_failure_count]
 * @property {number} [total_warning_count]
 * @property {number} [total_suppressed_count]
 * @property {number} [total_job_runs]
 */
/**
 * @typedef ResponseEnvelopeJobMetricsDto
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobMetricsDto} [items]
 * @property {JobMetricsDto} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef JobConfigListDTO
 * @property {string} [code]
 * @property {string} [alias]
 * @property {string} [modified_by]
 * @property {string} [created_by]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {boolean} [active]
 * @property {string} [type]
 */
/**
 * @typedef ResponseEnvelopeListJobConfigListDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigListDTO[]} [items]
 * @property {JobConfigListDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef ApplicationInventory
 * @property {AppInventoryConfig} [inventory]
 * @property {AuthenticationConfig} [authentication]
 * @property {ArticleAssignmentConfig} [article_assignment]
 * @property {RewardPointsConfig} [reward_points]
 * @property {AppCartConfig} [cart]
 * @property {AppPaymentConfig} [payment]
 * @property {AppOrderConfig} [order]
 * @property {AppLogisticsConfig} [logistics]
 * @property {string} [business]
 * @property {boolean} [comms_enabled]
 * @property {string[]} [platforms]
 * @property {string} [_id]
 * @property {LoyaltyPointsConfig} [loyalty_points]
 * @property {string} [app]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [modified_by]
 */
/**
 * @typedef AppInventoryConfig
 * @property {InventoryBrand} [brand]
 * @property {InventoryStore} [store]
 * @property {InventoryCategory} [category]
 * @property {InventoryPrice} [price]
 * @property {InventoryDiscount} [discount]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [only_verified_products]
 * @property {boolean} [franchise_enabled]
 * @property {Object[]} [exclude_category]
 * @property {string[]} [image]
 * @property {Object[]} [company_store]
 */
/**
 * @typedef InventoryBrand
 * @property {string} [criteria]
 * @property {Object[]} [brands]
 */
/**
 * @typedef InventoryStore
 * @property {string} [criteria]
 * @property {Object[]} [stores]
 * @property {AppStoreRules} [rules]
 */
/**
 * @typedef AppStoreRules
 * @property {number[]} [companies]
 * @property {Object[]} [brands]
 */
/**
 * @typedef InventoryCategory
 * @property {string} [criteria]
 * @property {Object[]} [categories]
 */
/**
 * @typedef InventoryPrice
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef InventoryDiscount
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef AuthenticationConfig
 * @property {boolean} [required]
 * @property {string} [provider]
 */
/**
 * @typedef ArticleAssignmentConfig
 * @property {ArticleAssignmentRules} [rules]
 * @property {boolean} [post_order_reassignment]
 */
/**
 * @typedef ArticleAssignmentRules
 * @property {StorePriority} [store_priority]
 */
/**
 * @typedef StorePriority
 * @property {boolean} [enabled]
 * @property {Object[]} [storetype_order]
 */
/**
 * @typedef AppCartConfig
 * @property {DeliveryCharges} [delivery_charges]
 * @property {boolean} [enabled]
 * @property {number} [max_cart_items]
 * @property {number} [min_cart_value]
 * @property {boolean} [bulk_coupons]
 * @property {boolean} [revenue_engine_coupon]
 */
/**
 * @typedef DeliveryCharges
 * @property {boolean} [enabled]
 * @property {Charges} [charges]
 */
/**
 * @typedef Charges
 * @property {number} [threshold]
 * @property {number} [charges]
 */
/**
 * @typedef AppPaymentConfig
 * @property {CallbackUrl} [callback_url]
 * @property {Methods} [methods]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 * @property {boolean} [enabled]
 * @property {number} [cod_amount_limit]
 * @property {number} [cod_charges]
 */
/**
 * @typedef CallbackUrl
 * @property {string} [app]
 * @property {string} [web]
 */
/**
 * @typedef Methods
 * @property {PaymentModeConfig} [pl]
 * @property {PaymentModeConfig} [card]
 * @property {PaymentModeConfig} [nb]
 * @property {PaymentModeConfig} [wl]
 * @property {PaymentModeConfig} [ps]
 * @property {PaymentModeConfig} [upi]
 * @property {PaymentModeConfig} [qr]
 * @property {PaymentModeConfig} [cod]
 * @property {PaymentModeConfig} [pp]
 * @property {PaymentModeConfig} [jp]
 * @property {PaymentModeConfig} [pac]
 * @property {PaymentModeConfig} [fc]
 * @property {PaymentModeConfig} [jiopp]
 * @property {PaymentModeConfig} [stripepg]
 * @property {PaymentModeConfig} [juspaypg]
 * @property {PaymentModeConfig} [payubizpg]
 * @property {PaymentModeConfig} [payumoneypg]
 * @property {PaymentModeConfig} [rupifipg]
 * @property {PaymentModeConfig} [simpl]
 */
/**
 * @typedef PaymentModeConfig
 * @property {boolean} [enabled]
 */
/**
 * @typedef PaymentSelectionLock
 * @property {boolean} [enabled]
 * @property {string} [default_options]
 * @property {string} [payment_identifier]
 */
/**
 * @typedef AppOrderConfig
 * @property {boolean} [enabled]
 * @property {boolean} [force_reassignment]
 * @property {string} [message]
 */
/**
 * @typedef AppLogisticsConfig
 * @property {boolean} [logistics_by_seller]
 * @property {boolean} [serviceability_check]
 * @property {boolean} [same_day_delivery]
 * @property {boolean} [dp_assignment]
 */
/**
 * @typedef LoyaltyPointsConfig
 * @property {boolean} [enabled]
 * @property {boolean} [auto_apply]
 */
/**
 * @typedef AppInventoryPartialUpdate
 * @property {RewardPointsConfig} [reward_points]
 * @property {AppCartConfig} [cart]
 * @property {AppPaymentConfig} [payment]
 * @property {LoyaltyPointsConfig} [loyalty_points]
 * @property {boolean} [comms_enabled]
 */
/**
 * @typedef BrandCompanyInfo
 * @property {string} [company_name]
 * @property {number} [company_id]
 */
/**
 * @typedef CompanyByBrandsRequest
 * @property {number} brands
 * @property {string} [search_text]
 */
/**
 * @typedef CompanyByBrandsResponse
 * @property {BrandCompanyInfo[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef StoreByBrandsRequest
 * @property {number} [company_id]
 * @property {number} brands
 * @property {string} [search_text]
 */
/**
 * @typedef StoreByBrandsResponse
 * @property {BrandStoreInfo[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef BrandStoreInfo
 * @property {string} [store_name]
 * @property {number} [store_id]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {OptedStoreAddress} [store_address]
 * @property {OptedCompany} [company]
 */
/**
 * @typedef CompanyBrandInfo
 * @property {string} [name]
 * @property {number} [value]
 * @property {string} [brand_logo_url]
 * @property {string} [brand_banner_url]
 * @property {string} [brand_banner_portrait_url]
 */
/**
 * @typedef BrandsByCompanyResponse
 * @property {CompanyBrandInfo} [brands]
 */
/**
 * @typedef CreateApplicationRequest
 * @property {App} [app]
 * @property {AppInventory} [configuration]
 * @property {AppDomain} [domain]
 */
/**
 * @typedef CreateAppResponse
 * @property {Application} [app]
 * @property {ApplicationInventory} [configuration]
 */
/**
 * @typedef ApplicationsResponse
 * @property {Application[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef MobileAppConfiguration
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [app_name]
 * @property {LandingImage} [landing_image]
 * @property {SplashImage} [splash_image]
 * @property {string} [application]
 * @property {string} [platform_type]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {string} [package_name]
 */
/**
 * @typedef LandingImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */
/**
 * @typedef SplashImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */
/**
 * @typedef MobileAppConfigRequest
 * @property {string} [app_name]
 * @property {LandingImage} [landing_image]
 * @property {SplashImage} [splash_image]
 * @property {boolean} [is_active]
 */
/**
 * @typedef BuildVersionHistory
 * @property {BuildVersion} [versions]
 * @property {string} [latest_available_version_name]
 */
/**
 * @typedef BuildVersion
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [platform_type]
 * @property {string} [build_status]
 * @property {string} [version_name]
 * @property {number} [version_code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef AppSupportedCurrency
 * @property {string} [_id]
 * @property {string[]} [supported_currency]
 * @property {string} [application]
 * @property {DefaultCurrency} [default_currency]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */
/**
 * @typedef DefaultCurrency
 * @property {string} [ref]
 * @property {string} [code]
 */
/**
 * @typedef CurrencyConfig
 * @property {string} [_id]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [decimal_digits]
 * @property {string} [symbol]
 */
/**
 * @typedef DomainAdd
 * @property {string} [name]
 */
/**
 * @typedef DomainAddRequest
 * @property {DomainAdd} [domain]
 */
/**
 * @typedef DomainsResponse
 * @property {Domain[]} [domains]
 */
/**
 * @typedef UpdateDomain
 * @property {string} [_id]
 */
/**
 * @typedef UpdateDomainTypeRequest
 * @property {UpdateDomain} [domain]
 * @property {string} [action]
 */
/**
 * @typedef DomainStatusRequest
 * @property {string} [domain_url]
 */
/**
 * @typedef DomainStatus
 * @property {string} [display]
 * @property {boolean} [status]
 */
/**
 * @typedef DomainStatusResponse
 * @property {boolean} [connected]
 * @property {DomainStatus[]} [status]
 */
/**
 * @typedef DomainSuggestionsRequest
 * @property {string} [domain_url]
 * @property {boolean} [custom]
 */
/**
 * @typedef DomainSuggestion
 * @property {string} name
 * @property {boolean} [unsupported]
 * @property {boolean} is_available
 * @property {number} [price]
 * @property {string} [currency]
 */
/**
 * @typedef DomainSuggestionsResponse
 * @property {DomainSuggestion[]} [domains]
 */
/**
 * @typedef GetIntegrationsOptInsResponse
 * @property {IntegrationOptIn[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef IntegrationOptIn
 * @property {Validators} [validators]
 * @property {string} [description]
 * @property {string} [description_html]
 * @property {string} [constants]
 * @property {Object[]} [companies]
 * @property {string[]} [support]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [icon]
 * @property {string} [owner]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [token]
 * @property {string} [secret]
 * @property {number} [__v]
 */
/**
 * @typedef Validators
 * @property {CompanyValidator} [company]
 * @property {StoreValidator} [store]
 * @property {InventoryValidator} [inventory]
 * @property {OrderValidator} [order]
 */
/**
 * @typedef CompanyValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */
/**
 * @typedef JsonSchema
 * @property {string} [display]
 * @property {string} [key]
 * @property {string} [type]
 * @property {string} [tooltip]
 */
/**
 * @typedef StoreValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */
/**
 * @typedef InventoryValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */
/**
 * @typedef OrderValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */
/**
 * @typedef IntegrationMeta
 * @property {boolean} [is_public]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [value]
 */
/**
 * @typedef Integration
 * @property {Validators} [validators]
 * @property {string} [description]
 * @property {string} [description_html]
 * @property {Object} [constants]
 * @property {Object[]} [companies]
 * @property {string[]} [support]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [icon]
 * @property {string} [owner]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [token]
 * @property {string} [secret]
 * @property {number} [__v]
 */
/**
 * @typedef IntegrationConfigResponse
 * @property {IntegrationLevel[]} [items]
 */
/**
 * @typedef IntegrationLevel
 * @property {boolean} [opted]
 * @property {Object[]} [permissions]
 * @property {LastPatch[]} [last_patch]
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [token]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {Object} [data]
 */
/**
 * @typedef UpdateIntegrationLevelRequest
 * @property {IntegrationLevel[]} [items]
 */
/**
 * @typedef OptedStoreIntegration
 * @property {boolean} [other_opted]
 * @property {IntegrationOptIn} [other_integration]
 * @property {OtherEntity} [other_entity]
 */
/**
 * @typedef OtherEntity
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {LastPatch[]} [last_patch]
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {OtherEntityData} [data]
 * @property {Object[]} [meta]
 * @property {string} [token]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef LastPatch
 * @property {string} [op]
 * @property {string} [path]
 * @property {string} [value]
 */
/**
 * @typedef OtherEntityData
 * @property {string} [article_identifier]
 */
/**
 * @typedef App
 * @property {string} [company_id]
 * @property {string} [channel_type]
 * @property {ApplicationAuth} [auth]
 * @property {string} [name]
 * @property {string} [desc]
 */
/**
 * @typedef AppInventory
 * @property {InventoryBrandRule} [brand]
 * @property {InventoryStoreRule} [store]
 * @property {string[]} [image]
 * @property {boolean} [franchise_enabled]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [only_verified_products]
 * @property {InventoryPaymentConfig} [payment]
 * @property {InventoryArticleAssignment} [article_assignment]
 */
/**
 * @typedef AppDomain
 * @property {string} [name]
 */
/**
 * @typedef CompaniesResponse
 * @property {AppInventoryCompanies} [items]
 * @property {Page} [page]
 */
/**
 * @typedef AppInventoryCompanies
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [company_type]
 */
/**
 * @typedef StoresResponse
 * @property {AppInventoryStores} [items]
 * @property {Page} [page]
 */
/**
 * @typedef AppInventoryStores
 * @property {string} [_id]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {number} [company_id]
 */
/**
 * @typedef FilterOrderingStoreRequest
 * @property {boolean} [all_stores]
 * @property {number[]} [deployed_stores]
 * @property {string} [q]
 */
/**
 * @typedef DeploymentMeta
 * @property {number[]} [deployed_stores]
 * @property {boolean} [all_stores]
 * @property {boolean} [enabled]
 * @property {string} [type]
 * @property {string} [_id]
 * @property {string} [app]
 */
/**
 * @typedef OrderingStoreConfig
 * @property {DeploymentMeta} [deployment_meta]
 */
/**
 * @typedef OtherSellerCompany
 * @property {number} [uid]
 * @property {string} [name]
 */
/**
 * @typedef OtherSellerApplication
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [_id]
 * @property {string} [domain]
 * @property {OtherSellerCompany} [company]
 * @property {string} [opt_type]
 */
/**
 * @typedef OtherSellerApplications
 * @property {OtherSellerApplication[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef OptedApplicationResponse
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [_id]
 * @property {string} [domain]
 * @property {OptedCompany} [company]
 * @property {OptedInventory} [opted_inventory]
 * @property {OptOutInventory} [opt_out_inventory]
 */
/**
 * @typedef OptedCompany
 * @property {number} [uid]
 * @property {string} [name]
 */
/**
 * @typedef OptedInventory
 * @property {OptType} [opt_type]
 * @property {Object} [items]
 */
/**
 * @typedef OptType
 * @property {string} [key]
 * @property {string} [display]
 */
/**
 * @typedef OptedStore
 * @property {string} [name]
 * @property {string} [store_code]
 * @property {string} [_id]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {OptedStoreAddress} [address]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {number} [company_id]
 */
/**
 * @typedef OptOutInventory
 * @property {number[]} store
 * @property {number[]} company
 */
/**
 * @typedef TokenResponse
 * @property {Tokens} [tokens]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef Tokens
 * @property {Firebase} [firebase]
 * @property {Moengage} [moengage]
 * @property {Segment} [segment]
 * @property {Gtm} [gtm]
 * @property {Freshchat} [freshchat]
 * @property {Safetynet} [safetynet]
 * @property {FyndRewards} [fynd_rewards]
 * @property {GoogleMap} [google_map]
 */
/**
 * @typedef Firebase
 * @property {Credentials} [credentials]
 * @property {boolean} [enabled]
 */
/**
 * @typedef Credentials
 * @property {Ios} [ios]
 * @property {Android} [android]
 * @property {string} [project_id]
 * @property {string} [gcm_sender_id]
 * @property {string} [application_id]
 * @property {string} [api_key]
 */
/**
 * @typedef Ios
 * @property {string} [application_id]
 * @property {string} [api_key]
 */
/**
 * @typedef Android
 * @property {string} [application_id]
 * @property {string} [api_key]
 */
/**
 * @typedef Moengage
 * @property {MoengageCredentials} [credentials]
 * @property {boolean} [enabled]
 */
/**
 * @typedef MoengageCredentials
 * @property {string} [app_id]
 */
/**
 * @typedef Segment
 * @property {SegmentCredentials} [credentials]
 * @property {boolean} [enabled]
 */
/**
 * @typedef SegmentCredentials
 * @property {string} [write_key]
 */
/**
 * @typedef Gtm
 * @property {GtmCredentials} [credentials]
 * @property {boolean} [enabled]
 */
/**
 * @typedef GtmCredentials
 * @property {string} [api_key]
 */
/**
 * @typedef Freshchat
 * @property {FreshchatCredentials} [credentials]
 * @property {boolean} [enabled]
 */
/**
 * @typedef FreshchatCredentials
 * @property {string} [app_id]
 * @property {string} [app_key]
 * @property {string} [web_token]
 */
/**
 * @typedef Safetynet
 * @property {SafetynetCredentials} [credentials]
 * @property {boolean} [enabled]
 */
/**
 * @typedef SafetynetCredentials
 * @property {string} [api_key]
 */
/**
 * @typedef FyndRewards
 * @property {FyndRewardsCredentials} [credentials]
 */
/**
 * @typedef FyndRewardsCredentials
 * @property {string} [public_key]
 */
/**
 * @typedef GoogleMap
 * @property {GoogleMapCredentials} [credentials]
 */
/**
 * @typedef GoogleMapCredentials
 * @property {string} [api_key]
 */
/**
 * @typedef RewardPointsConfig
 * @property {Credit} [credit]
 * @property {Debit} [debit]
 */
/**
 * @typedef Credit
 * @property {boolean} [enabled]
 */
/**
 * @typedef Debit
 * @property {boolean} [enabled]
 * @property {boolean} [auto_apply]
 * @property {string} [strategy_channel]
 */
/**
 * @typedef ProductDetailFeature
 * @property {string[]} [similar]
 * @property {boolean} [seller_selection]
 * @property {boolean} [update_product_meta]
 * @property {boolean} [request_product]
 */
/**
 * @typedef LaunchPage
 * @property {string} [page_type]
 * @property {Object} [params]
 * @property {Object} [query]
 */
/**
 * @typedef LandingPageFeature
 * @property {LaunchPage} [launch_page]
 * @property {boolean} [continue_as_guest]
 * @property {string} [login_btn_text]
 * @property {boolean} [show_domain_textbox]
 * @property {boolean} [show_register_btn]
 */
/**
 * @typedef RegistrationPageFeature
 * @property {boolean} [ask_store_address]
 */
/**
 * @typedef AppFeature
 * @property {ProductDetailFeature} [product_detail]
 * @property {LandingPageFeature} [landing_page]
 * @property {RegistrationPageFeature} [registration_page]
 * @property {HomePageFeature} [home_page]
 * @property {CommonFeature} [common]
 * @property {CartFeature} [cart]
 * @property {QrFeature} [qr]
 * @property {PcrFeature} [pcr]
 * @property {OrderFeature} [order]
 * @property {string} [_id]
 * @property {string} [app]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef HomePageFeature
 * @property {boolean} [order_processing]
 */
/**
 * @typedef CommonFeature
 * @property {CommunicationOptinDialogFeature} [communication_optin_dialog]
 * @property {DeploymentStoreSelectionFeature} [deployment_store_selection]
 * @property {ListingPriceFeature} [listing_price]
 * @property {CurrencyFeature} [currency]
 * @property {RevenueEngineFeature} [revenue_engine]
 * @property {FeedbackFeature} [feedback]
 * @property {CompareProductsFeature} [compare_products]
 * @property {RewardPointsConfig} [reward_points]
 */
/**
 * @typedef CommunicationOptinDialogFeature
 * @property {boolean} [visibility]
 */
/**
 * @typedef DeploymentStoreSelectionFeature
 * @property {boolean} [enabled]
 * @property {string} [type]
 */
/**
 * @typedef ListingPriceFeature
 * @property {string} [value]
 */
/**
 * @typedef CurrencyFeature
 * @property {string[]} [value]
 * @property {string} [type]
 * @property {string} [default_currency]
 */
/**
 * @typedef RevenueEngineFeature
 * @property {boolean} [enabled]
 */
/**
 * @typedef FeedbackFeature
 * @property {boolean} [enabled]
 */
/**
 * @typedef CompareProductsFeature
 * @property {boolean} [enabled]
 */
/**
 * @typedef CartFeature
 * @property {boolean} [gst_input]
 * @property {boolean} [staff_selection]
 * @property {boolean} [placing_for_customer]
 * @property {boolean} [google_map]
 * @property {boolean} [revenue_engine_coupon]
 */
/**
 * @typedef QrFeature
 * @property {boolean} [application]
 * @property {boolean} [products]
 * @property {boolean} [collections]
 */
/**
 * @typedef PcrFeature
 * @property {boolean} [staff_selection]
 */
/**
 * @typedef OrderFeature
 * @property {boolean} [buy_again]
 */
/**
 * @typedef AppFeatureRequest
 * @property {AppFeature} [feature]
 */
/**
 * @typedef AppFeatureResponse
 * @property {AppFeature} [feature]
 */
/**
 * @typedef UnhandledError
 * @property {string} [message]
 */
/**
 * @typedef InvalidPayloadRequest
 * @property {string} [message]
 */
/**
 * @typedef SuccessMessageResponse
 * @property {string} [message]
 */
/**
 * @typedef InventoryBrandRule
 * @property {string} [criteria]
 * @property {number[]} [brands]
 */
/**
 * @typedef StoreCriteriaRule
 * @property {number[]} [companies]
 * @property {number[]} [brands]
 */
/**
 * @typedef InventoryStoreRule
 * @property {string} [criteria]
 * @property {StoreCriteriaRule[]} [rules]
 * @property {number[]} [stores]
 */
/**
 * @typedef InventoryPaymentConfig
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 */
/**
 * @typedef StorePriorityRule
 * @property {boolean} [enabled]
 * @property {string[]} [storetype_order]
 */
/**
 * @typedef ArticleAssignmentRule
 * @property {StorePriorityRule} [store_priority]
 */
/**
 * @typedef InventoryArticleAssignment
 * @property {boolean} [post_order_reassignment]
 * @property {ArticleAssignmentRule} [rules]
 */
/**
 * @typedef CompanyAboutAddress
 * @property {number} [pincode]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [address_type]
 */
/**
 * @typedef UserEmail
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [email]
 */
/**
 * @typedef UserPhoneNumber
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {number} [country_code]
 * @property {string} [phone]
 */
/**
 * @typedef ApplicationInformation
 * @property {InformationAddress} [address]
 * @property {InformationSupport} [support]
 * @property {SocialLinks} [social_links]
 * @property {Links} [links]
 * @property {string} [copyright_text]
 * @property {string} [_id]
 * @property {BusinessHighlights} [business_highlights]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef InformationAddress
 * @property {string} [loc]
 * @property {string[]} [address_line]
 * @property {InformationPhone} [phone]
 * @property {string} [city]
 * @property {string} [country]
 * @property {number} [pincode]
 */
/**
 * @typedef InformationPhone
 * @property {string} [code]
 * @property {string} [number]
 */
/**
 * @typedef InformationSupport
 * @property {string[]} [phone]
 * @property {string[]} [email]
 * @property {string} [timing]
 */
/**
 * @typedef SocialLinks
 * @property {FacebookLink} [facebook]
 * @property {InstagramLink} [instagram]
 * @property {TwitterLink} [twitter]
 * @property {PinterestLink} [pinterest]
 * @property {GooglePlusLink} [google_plus]
 * @property {YoutubeLink} [youtube]
 * @property {LinkedInLink} [linked_in]
 * @property {VimeoLink} [vimeo]
 * @property {BlogLink} [blog_link]
 */
/**
 * @typedef FacebookLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef InstagramLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef TwitterLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef PinterestLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef GooglePlusLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef YoutubeLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef LinkedInLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef VimeoLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef BlogLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef Links
 * @property {string} [title]
 * @property {string} [link]
 */
/**
 * @typedef BusinessHighlights
 * @property {string} [_id]
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [sub_title]
 */
/**
 * @typedef ApplicationDetail
 * @property {string} name
 * @property {string} description
 * @property {SecureUrl} logo
 * @property {SecureUrl} mobile_logo
 * @property {SecureUrl} favicon
 * @property {SecureUrl} banner
 * @property {Domain} [domain]
 * @property {Domain[]} [domains]
 * @property {string} [_id]
 */
/**
 * @typedef CurrenciesResponse
 * @property {Currency[]} [items]
 */
/**
 * @typedef AppCurrencyResponse
 * @property {string} [application]
 * @property {DefaultCurrency} [default_currency]
 * @property {Currency[]} [supported_currency]
 */
/**
 * @typedef StoreLatLong
 * @property {string} [type]
 * @property {number[]} [coordinates]
 */
/**
 * @typedef OptedStoreAddress
 * @property {string} [state]
 * @property {string} [address1]
 * @property {StoreLatLong} [lat_long]
 * @property {string} [address2]
 * @property {number} [pincode]
 * @property {string} [country]
 * @property {string} [city]
 */
/**
 * @typedef OrderingStore
 * @property {OptedStoreAddress} [address]
 * @property {string} [_id]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {number} [pincode]
 * @property {string} [code]
 */
/**
 * @typedef OrderingStores
 * @property {Page} [page]
 * @property {OrderingStore[]} [items]
 * @property {number[]} [deployed_stores]
 * @property {boolean} [all_stores]
 * @property {boolean} [enabled]
 * @property {string} [type]
 * @property {string} [_id]
 * @property {string} [app]
 * @property {number} [__v]
 */
/**
 * @typedef OrderingStoresResponse
 * @property {Page} [page]
 * @property {OrderingStore[]} [items]
 */
/**
 * @typedef CouponDateMeta
 * @property {string} [modified_on]
 * @property {string} [created_on]
 */
/**
 * @typedef DisplayMetaDict
 * @property {string} [title]
 * @property {string} [subtitle]
 */
/**
 * @typedef DisplayMeta
 * @property {string} [title]
 * @property {string} [description]
 * @property {DisplayMetaDict} [apply]
 * @property {DisplayMetaDict} [remove]
 * @property {DisplayMetaDict} [auto]
 * @property {string} [subtitle]
 */
/**
 * @typedef CouponAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */
/**
 * @typedef Rule
 * @property {number} [value]
 * @property {number} [min]
 * @property {number} [key]
 * @property {number} [discount_qty]
 * @property {number} [max]
 */
/**
 * @typedef Validity
 * @property {number} [priority]
 */
/**
 * @typedef CouponSchedule
 * @property {Object[]} [next_schedule]
 * @property {string} [end]
 * @property {string} [start]
 * @property {number} [duration]
 * @property {string} [cron]
 */
/**
 * @typedef Identifier
 * @property {number[]} [company_id]
 * @property {number[]} [store_id]
 * @property {string[]} [user_id]
 * @property {number[]} [category_id]
 * @property {string[]} [collection_id]
 * @property {string[]} [article_id]
 * @property {number[]} [item_id]
 * @property {number[]} [brand_id]
 */
/**
 * @typedef Ownership
 * @property {string} payable_by
 * @property {string} payable_category
 */
/**
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */
/**
 * @typedef PaymentModes
 * @property {string[]} [networks]
 * @property {string[]} [types]
 * @property {string[]} [codes]
 * @property {PaymentAllowValue} [uses]
 */
/**
 * @typedef UsesRemaining
 * @property {number} [user]
 * @property {number} [total]
 * @property {number} [app]
 */
/**
 * @typedef UsesRestriction
 * @property {UsesRemaining} [maximum]
 * @property {UsesRemaining} [remaining]
 */
/**
 * @typedef PriceRange
 * @property {number} [max]
 * @property {number} [min]
 */
/**
 * @typedef PostOrder
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */
/**
 * @typedef BulkBundleRestriction
 * @property {boolean} multi_store_allowed
 */
/**
 * @typedef Restrictions
 * @property {Object} [payments]
 * @property {boolean} [coupon_allowed]
 * @property {UsesRestriction} [uses]
 * @property {number[]} [ordering_stores]
 * @property {PriceRange} [price_range]
 * @property {string[]} [platforms]
 * @property {PostOrder} [post_order]
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {number[]} [user_groups]
 */
/**
 * @typedef State
 * @property {boolean} [is_display]
 * @property {boolean} [is_public]
 * @property {boolean} [is_archived]
 */
/**
 * @typedef Validation
 * @property {string} [user_registered_after]
 * @property {boolean} [anonymous]
 * @property {string[]} [app_id]
 */
/**
 * @typedef CouponAction
 * @property {string} [action_date]
 * @property {string} [txn_mode]
 */
/**
 * @typedef RuleDefinition
 * @property {string} type
 * @property {string} [currency_code]
 * @property {boolean} [auto_apply]
 * @property {string} value_type
 * @property {string[]} [scope]
 * @property {string} calculate_on
 * @property {boolean} [is_exact]
 * @property {string} applicable_on
 */
/**
 * @typedef CouponAdd
 * @property {CouponDateMeta} [date_meta]
 * @property {string} code
 * @property {DisplayMeta} display_meta
 * @property {CouponAuthor} [author]
 * @property {Rule[]} rule
 * @property {Validity} validity
 * @property {CouponSchedule} [_schedule]
 * @property {Identifier} identifiers
 * @property {string} type_slug
 * @property {Ownership} ownership
 * @property {Restrictions} [restrictions]
 * @property {State} [state]
 * @property {Validation} [validation]
 * @property {CouponAction} [action]
 * @property {string[]} [tags]
 * @property {RuleDefinition} rule_definition
 */
/**
 * @typedef CouponsResponse
 * @property {Page} [page]
 * @property {CouponAdd} [items]
 */
/**
 * @typedef SuccessMessage
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef OperationErrorResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef CouponUpdate
 * @property {CouponDateMeta} [date_meta]
 * @property {string} code
 * @property {DisplayMeta} display_meta
 * @property {CouponAuthor} [author]
 * @property {Rule[]} rule
 * @property {Validity} validity
 * @property {CouponSchedule} [_schedule]
 * @property {Identifier} identifiers
 * @property {string} type_slug
 * @property {Ownership} ownership
 * @property {Restrictions} [restrictions]
 * @property {State} [state]
 * @property {Validation} [validation]
 * @property {CouponAction} [action]
 * @property {string[]} [tags]
 * @property {RuleDefinition} rule_definition
 */
/**
 * @typedef CouponPartialUpdate
 * @property {CouponSchedule} [schedule]
 * @property {boolean} [archive]
 */
/**
 * @typedef DisplayMeta1
 * @property {string} [offer_text]
 * @property {string} [description]
 * @property {string} [name]
 */
/**
 * @typedef CompareObject
 * @property {number} [greater_than_equals]
 * @property {number} [greater_than]
 * @property {number} [equals]
 * @property {number} [less_than_equals]
 * @property {number} [less_than]
 */
/**
 * @typedef ItemCriteria
 * @property {string[]} [buy_rules]
 * @property {CompareObject} [cart_total]
 * @property {string[]} [item_sku]
 * @property {number[]} [item_store]
 * @property {number[]} [item_exclude_brand]
 * @property {string[]} [item_size]
 * @property {number[]} [item_company]
 * @property {number[]} [item_brand]
 * @property {CompareObject} [cart_quantity]
 * @property {number[]} [item_exclude_company]
 * @property {boolean} [all_items]
 * @property {number[]} [item_id]
 * @property {string[]} [item_exclude_sku]
 * @property {number[]} [item_exclude_store]
 * @property {number[]} [item_exclude_category]
 * @property {number[]} [item_category]
 */
/**
 * @typedef DiscountOffer
 * @property {string} [code]
 * @property {number} [min_offer_quantity]
 * @property {number} [discount_price]
 * @property {number} [discount_percentage]
 * @property {number} [max_offer_quantity]
 * @property {number} [discount_amount]
 * @property {number} [max_discount_amount]
 */
/**
 * @typedef DiscountRule
 * @property {ItemCriteria} item_criteria
 * @property {string} discount_type
 * @property {DiscountOffer} offer
 * @property {string} buy_condition
 */
/**
 * @typedef PromotionDateMeta
 * @property {string} [modified_on]
 * @property {string} [created_on]
 */
/**
 * @typedef PromotionSchedule
 * @property {boolean} published
 * @property {Object[]} [next_schedule]
 * @property {string} [end]
 * @property {string} start
 * @property {number} [duration]
 * @property {string} [cron]
 */
/**
 * @typedef PaymentAllowValue1
 * @property {number} [max]
 */
/**
 * @typedef PromotionPaymentModes
 * @property {string} type
 * @property {string[]} [codes]
 * @property {PaymentAllowValue1} [uses]
 */
/**
 * @typedef UsesRemaining1
 * @property {number} [user]
 * @property {number} [total]
 */
/**
 * @typedef UsesRestriction1
 * @property {UsesRemaining1} [maximum]
 * @property {UsesRemaining1} [remaining]
 */
/**
 * @typedef PostOrder1
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */
/**
 * @typedef UserRegistered
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef Restrictions1
 * @property {PromotionPaymentModes[]} [payments]
 * @property {UsesRestriction1} uses
 * @property {string[]} [user_id]
 * @property {string[]} [platforms]
 * @property {PostOrder1} [post_order]
 * @property {number[]} [user_groups]
 * @property {boolean} [anonymous_users]
 * @property {UserRegistered} [user_registered]
 * @property {number} [order_quantity]
 */
/**
 * @typedef PromotionAction
 * @property {string} action_type
 * @property {string} action_date
 */
/**
 * @typedef PromotionAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */
/**
 * @typedef Visibility
 * @property {boolean} coupon_list
 * @property {boolean} pdp
 */
/**
 * @typedef Ownership1
 * @property {string} payable_by
 * @property {string} payable_category
 */
/**
 * @typedef PromotionListItem
 * @property {DisplayMeta1} display_meta
 * @property {string} mode
 * @property {boolean} [stackable]
 * @property {string} application_id
 * @property {boolean} [apply_all_discount]
 * @property {DiscountRule[]} discount_rules
 * @property {PromotionDateMeta} [date_meta]
 * @property {Object} buy_rules
 * @property {string} [currency]
 * @property {PromotionSchedule} [_schedule]
 * @property {Restrictions1} [restrictions]
 * @property {number} [apply_priority]
 * @property {string} promotion_type
 * @property {string} promo_group
 * @property {PromotionAction} [post_order_action]
 * @property {string} [code]
 * @property {PromotionAuthor} [author]
 * @property {Visibility} [visiblility]
 * @property {Object} [_custom_json]
 * @property {Ownership1} ownership
 * @property {string} [apply_exclusive]
 */
/**
 * @typedef PromotionsResponse
 * @property {Page} [page]
 * @property {PromotionListItem} [items]
 */
/**
 * @typedef PromotionAdd
 * @property {DisplayMeta1} display_meta
 * @property {string} mode
 * @property {boolean} [stackable]
 * @property {string} application_id
 * @property {boolean} [apply_all_discount]
 * @property {DiscountRule[]} discount_rules
 * @property {PromotionDateMeta} [date_meta]
 * @property {Object} buy_rules
 * @property {string} [currency]
 * @property {PromotionSchedule} [_schedule]
 * @property {Restrictions1} [restrictions]
 * @property {number} [apply_priority]
 * @property {string} promotion_type
 * @property {string} promo_group
 * @property {PromotionAction} [post_order_action]
 * @property {string} [code]
 * @property {PromotionAuthor} [author]
 * @property {Visibility} [visiblility]
 * @property {Object} [_custom_json]
 * @property {Ownership1} ownership
 * @property {string} [apply_exclusive]
 */
/**
 * @typedef PromotionUpdate
 * @property {DisplayMeta1} display_meta
 * @property {string} mode
 * @property {boolean} [stackable]
 * @property {string} application_id
 * @property {boolean} [apply_all_discount]
 * @property {DiscountRule[]} discount_rules
 * @property {PromotionDateMeta} [date_meta]
 * @property {Object} buy_rules
 * @property {string} [currency]
 * @property {PromotionSchedule} [_schedule]
 * @property {Restrictions1} [restrictions]
 * @property {number} [apply_priority]
 * @property {string} promotion_type
 * @property {string} promo_group
 * @property {PromotionAction} [post_order_action]
 * @property {string} [code]
 * @property {PromotionAuthor} [author]
 * @property {Visibility} [visiblility]
 * @property {Object} [_custom_json]
 * @property {Ownership1} ownership
 * @property {string} [apply_exclusive]
 */
/**
 * @typedef PromotionPartialUpdate
 * @property {PromotionSchedule} [schedule]
 * @property {boolean} [archive]
 */
/**
 * @typedef CartItem
 * @property {number} [quantity]
 * @property {string} size
 * @property {string} product_id
 */
/**
 * @typedef OpenapiCartDetailsRequest
 * @property {CartItem} [cart_items]
 */
/**
 * @typedef DisplayBreakup
 * @property {number} [value]
 * @property {string[]} [message]
 * @property {string} [key]
 * @property {string} [currency_code]
 * @property {string} [display]
 * @property {string} [currency_symbol]
 */
/**
 * @typedef CouponBreakup
 * @property {number} [value]
 * @property {string} [code]
 * @property {string} [message]
 * @property {string} [type]
 * @property {boolean} [is_applied]
 * @property {string} [uid]
 */
/**
 * @typedef RawBreakup
 * @property {number} [subtotal]
 * @property {number} [vog]
 * @property {number} [fynd_cash]
 * @property {number} [convenience_fee]
 * @property {number} [mrp_total]
 * @property {number} [cod_charge]
 * @property {number} [total]
 * @property {number} [you_saved]
 * @property {number} [coupon]
 * @property {number} [discount]
 * @property {number} [delivery_charge]
 * @property {number} [gst_charges]
 */
/**
 * @typedef LoyaltyPoints
 * @property {boolean} [is_applied]
 * @property {string} [description]
 * @property {number} [applicable]
 * @property {number} [total]
 */
/**
 * @typedef CartBreakup
 * @property {DisplayBreakup[]} [display]
 * @property {CouponBreakup} [coupon]
 * @property {RawBreakup} [raw]
 * @property {LoyaltyPoints} [loyalty_points]
 */
/**
 * @typedef ProductPrice
 * @property {number} [marked]
 * @property {number} [add_on]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [selling]
 * @property {number} [effective]
 */
/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [converted]
 * @property {ProductPrice} [base]
 */
/**
 * @typedef ActionQuery
 * @property {string[]} [product_slug]
 */
/**
 * @typedef ProductAction
 * @property {string} [type]
 * @property {ActionQuery} [query]
 * @property {string} [url]
 */
/**
 * @typedef CategoryInfo
 * @property {number} [uid]
 * @property {string} [name]
 */
/**
 * @typedef ProductImage
 * @property {string} [secure_url]
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 */
/**
 * @typedef BaseInfo
 * @property {number} [uid]
 * @property {string} [name]
 */
/**
 * @typedef CartProduct
 * @property {string} [type]
 * @property {ProductAction} [action]
 * @property {string} [name]
 * @property {CategoryInfo[]} [categories]
 * @property {number} [uid]
 * @property {ProductImage[]} [images]
 * @property {BaseInfo} [brand]
 * @property {string} [slug]
 */
/**
 * @typedef BasePrice
 * @property {string} [currency_code]
 * @property {number} [effective]
 * @property {string} [currency_symbol]
 * @property {number} [marked]
 */
/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [converted]
 * @property {BasePrice} [base]
 */
/**
 * @typedef ProductArticle
 * @property {ArticlePriceInfo} [price]
 * @property {string} [size]
 * @property {BaseInfo} [store]
 * @property {string} [type]
 * @property {BaseInfo} [seller]
 * @property {number} [quantity]
 * @property {string} [uid]
 * @property {Object} [extra_meta]
 */
/**
 * @typedef PromoMeta
 * @property {string} [message]
 */
/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */
/**
 * @typedef ProductAvailability
 * @property {boolean} [out_of_stock]
 * @property {boolean} [is_valid]
 * @property {string[]} [sizes]
 * @property {boolean} [deliverable]
 * @property {number} [other_store_quantity]
 */
/**
 * @typedef AppliedPromotion
 * @property {number} [article_quantity]
 * @property {boolean} [mrp_promotion]
 * @property {string} [promo_id]
 * @property {number} [amount]
 * @property {string} [promotion_type]
 * @property {string} [offer_text]
 */
/**
 * @typedef CartProductInfo
 * @property {ProductPriceInfo} [price]
 * @property {string} [message]
 * @property {CartProduct} [product]
 * @property {string} [key]
 * @property {ProductArticle} [article]
 * @property {Object} [bulk_offer]
 * @property {PromoMeta} [promo_meta]
 * @property {CartProductIdentifer} identifiers
 * @property {string} [discount]
 * @property {number} [quantity]
 * @property {boolean} [is_set]
 * @property {string} [coupon_message]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {ProductAvailability} [availability]
 * @property {AppliedPromotion[]} [promotions_applied]
 */
/**
 * @typedef OpenapiCartDetailsResponse
 * @property {string} [message]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid]
 * @property {CartProductInfo[]} [items]
 */
/**
 * @typedef OpenApiErrorResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {Object} [errors]
 */
/**
 * @typedef ShippingAddress
 * @property {Object} [meta]
 * @property {string} area_code
 * @property {number} [phone]
 * @property {number} [pincode]
 * @property {string} [email]
 * @property {string} [name]
 * @property {string} [area]
 * @property {string} [country]
 * @property {string} [landmark]
 * @property {string} [area_code_slug]
 * @property {string} [address]
 * @property {string} [state]
 * @property {string} [country_code]
 * @property {string} [city]
 * @property {string} [address_type]
 */
/**
 * @typedef OpenApiCartServiceabilityRequest
 * @property {ShippingAddress} shipping_address
 * @property {CartItem} [cart_items]
 */
/**
 * @typedef PromiseTimestamp
 * @property {number} [max]
 * @property {number} [min]
 */
/**
 * @typedef PromiseFormatted
 * @property {string} [max]
 * @property {string} [min]
 */
/**
 * @typedef ShipmentPromise
 * @property {PromiseTimestamp} [timestamp]
 * @property {PromiseFormatted} [formatted]
 */
/**
 * @typedef OpenApiCartServiceabilityResponse
 * @property {string} [message]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid]
 * @property {CartProductInfo[]} [items]
 * @property {ShipmentPromise} [delivery_promise]
 */
/**
 * @typedef OpenApiFiles
 * @property {string[]} values
 * @property {string} key
 */
/**
 * @typedef CartItemMeta
 * @property {boolean} [primary_item]
 * @property {string} [group_id]
 */
/**
 * @typedef OpenApiOrderItem
 * @property {number} price_marked
 * @property {number} [loyalty_discount]
 * @property {number} cod_charges
 * @property {number} [employee_discount]
 * @property {CartItemMeta} [meta]
 * @property {string} size
 * @property {number} amount_paid
 * @property {number} cashback_applied
 * @property {number} discount
 * @property {number} [quantity]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} price_effective
 * @property {number} coupon_effective_discount
 * @property {number} delivery_charges
 * @property {number} product_id
 * @property {Object} [extra_meta]
 * @property {OpenApiFiles[]} [files]
 */
/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {Object} [employee_discount]
 * @property {string} [gstin]
 * @property {string} [payment_mode]
 * @property {string} [comment]
 * @property {number} coupon_value
 * @property {string} [currency_code]
 * @property {string} coupon_code
 * @property {string} [coupon]
 * @property {number} delivery_charges
 * @property {ShippingAddress} billing_address
 * @property {OpenApiFiles[]} [files]
 * @property {number} cart_value
 * @property {ShippingAddress} [shipping_address]
 * @property {number} [loyalty_discount]
 * @property {number} cod_charges
 * @property {string} [affiliate_order_id]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} cashback_applied
 * @property {string} [order_id]
 * @property {OpenApiOrderItem[]} cart_items
 */
/**
 * @typedef OpenApiCheckoutResponse
 * @property {boolean} [success]
 * @property {string} order_id
 * @property {string} [message]
 * @property {string} [order_ref_id]
 */
/**
 * @typedef AppUser
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {string} [block_reason]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [user_id]
 */
/**
 * @typedef E
 * @property {Object} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {number} [status]
 */
/**
 * @typedef Giveaway
 * @property {string} [_id]
 * @property {Schedule} [_schedule]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {RewardsAudience} [audience]
 * @property {Asset} [banner_image]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [name]
 * @property {RewardsRule} [rule]
 * @property {string} [title]
 * @property {string} [updated_at]
 */
/**
 * @typedef GiveawayResponse
 * @property {Giveaway[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef HistoryPretty
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {boolean} [claimed]
 * @property {string} [created_at]
 * @property {string} [expires_on]
 * @property {number} [points]
 * @property {number} [remaining_points]
 * @property {string} [text_1]
 * @property {string} [text_2]
 * @property {string} [text_3]
 * @property {string} [txn_name]
 * @property {string} [updated_at]
 * @property {string} [user_id]
 */
/**
 * @typedef HistoryRes
 * @property {HistoryPretty[]} [items]
 * @property {Page} [page]
 * @property {number} [points]
 */
/**
 * @typedef Offer
 * @property {Schedule} [_schedule]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {Asset} [banner_image]
 * @property {string} [created_at]
 * @property {string} [name]
 * @property {Object} [rule]
 * @property {ShareMessages} [share]
 * @property {string} [sub_text]
 * @property {string} [text]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [url]
 */
/**
 * @typedef Points
 * @property {number} [available]
 */
/**
 * @typedef Referral
 * @property {string} [code]
 */
/**
 * @typedef RewardUser
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [created_at]
 * @property {Referral} [referral]
 * @property {number} [uid]
 * @property {string} [updated_at]
 * @property {string} [user_block_reason]
 * @property {string} [user_id]
 */
/**
 * @typedef RewardsAudience
 * @property {string} [header_user_id]
 * @property {string} [id]
 */
/**
 * @typedef RewardsRule
 * @property {number} [amount]
 */
/**
 * @typedef ShareMessages
 * @property {string} [email]
 * @property {string} [facebook]
 * @property {string} [fallback]
 * @property {string} [message]
 * @property {string} [messenger]
 * @property {string} [sms]
 * @property {string} [text]
 * @property {string} [twitter]
 * @property {string} [whatsapp]
 */
/**
 * @typedef UserRes
 * @property {Points} [points]
 * @property {RewardUser} [user]
 */
/**
 * @typedef StatGroup
 * @property {string} [key]
 * @property {string} [url]
 * @property {string} [title]
 */
/**
 * @typedef StatsGroups
 * @property {StatGroup[]} [groups]
 */
/**
 * @typedef StatsGroupComponent
 * @property {string} [key]
 * @property {string} [url]
 * @property {string} [title]
 * @property {string} [type]
 * @property {Object} [filters]
 */
/**
 * @typedef StatsGroupComponents
 * @property {string} [title]
 * @property {StatsGroupComponent[]} [components]
 */
/**
 * @typedef StatsRes
 * @property {string} [key]
 * @property {string} [title]
 * @property {string} [type]
 * @property {Object} [data]
 */
/**
 * @typedef ReceivedAt
 * @property {string} [value]
 */
/**
 * @typedef AbandonCartsDetail
 * @property {string} [properties_cart_id]
 * @property {string} [context_traits_first_name]
 * @property {string} [context_traits_last_name]
 * @property {string} [context_traits_phone_number]
 * @property {string} [context_traits_email]
 * @property {string} [context_app_application_id]
 * @property {string} [properties_breakup_values_raw_total]
 * @property {ReceivedAt} [received_at]
 */
/**
 * @typedef AbandonCartsList
 * @property {AbandonCartsDetail[]} [items]
 * @property {string} [cart_total]
 * @property {Page} [page]
 */
/**
 * @typedef AbandonCartDetail
 * @property {string} [_id]
 * @property {string} [user_id]
 * @property {string} [cart_value]
 * @property {Object[]} [articles]
 * @property {Object} [breakup]
 * @property {Object} [address]
 */
/**
 * @typedef ExportJobReq
 * @property {string} [marketplace_name]
 * @property {string} [start_time]
 * @property {string} [end_time]
 * @property {string} [event_type]
 * @property {string} [trace_id]
 */
/**
 * @typedef ExportJobRes
 * @property {string} [status]
 * @property {string} [job_id]
 */
/**
 * @typedef ExportJobStatusRes
 * @property {string} [status]
 * @property {string} [job_id]
 * @property {string} [download_url]
 */
/**
 * @typedef GetLogsListReq
 * @property {string} [marketplace_name]
 * @property {string} [start_date]
 * @property {string} [company_id]
 * @property {string} [end_date]
 */
/**
 * @typedef MkpLogsResp
 * @property {string} [start_time_iso]
 * @property {string} [end_time_iso]
 * @property {string} [event_type]
 * @property {string} [trace_id]
 * @property {string} [count]
 * @property {string} [status]
 */
/**
 * @typedef GetLogsListRes
 * @property {MkpLogsResp[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SearchLogReq
 * @property {string} [marketplace_name]
 * @property {string} [start_date]
 * @property {string} [company_id]
 * @property {string} [end_date]
 * @property {string} [identifier]
 * @property {string} [identifier_value]
 */
/**
 * @typedef LogInfo
 * @property {string} [_id]
 * @property {string} [status]
 * @property {string} [event_type]
 * @property {string} [marketplace_name]
 * @property {string} [event]
 * @property {string} [trace_id]
 * @property {number} [company_id]
 * @property {number} [brand_id]
 * @property {string} [store_code]
 * @property {number} [store_id]
 * @property {number} [item_id]
 * @property {string} [article_id]
 * @property {string} [seller_identifier]
 */
/**
 * @typedef SearchLogRes
 * @property {LogInfo[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ValidityObject
 * @property {string} start
 * @property {string} end
 */
/**
 * @typedef CreateUpdateDiscount
 * @property {string} name
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {string[]} app_ids
 * @property {string[]} extension_ids
 * @property {string} job_type
 * @property {string} discount_type
 * @property {string} discount_level
 * @property {number} [value]
 * @property {string} [file_path]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 */
/**
 * @typedef DiscountJob
 * @property {string} _id
 * @property {string} name
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {string[]} [app_ids]
 * @property {string} [job_type]
 * @property {string} [discount_type]
 * @property {string} [discount_level]
 * @property {number} [value]
 * @property {string} [file_path]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 * @property {string} created_on
 * @property {string} modified_on
 * @property {UserDetails} created_by
 * @property {UserDetails} modified_by
 * @property {Object} [meta]
 */
/**
 * @typedef ListOrCalender
 * @property {DiscountJob[]} items
 * @property {Page} page
 */
/**
 * @typedef FileJobResponse
 * @property {string} stage
 * @property {number} total
 * @property {number} failed
 * @property {number} company_id
 * @property {Object} [body]
 * @property {string} type
 * @property {string} file_type
 */
/**
 * @typedef DownloadFileJob
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 */
/**
 * @typedef CancelJobResponse
 * @property {boolean} success
 */
/**
 * @typedef UserDetails
 * @property {string} username
 * @property {string} user_id
 */
/**
 * @typedef BadRequestObject
 * @property {string} message
 */
/**
 * @typedef AddProxyReq
 * @property {string} [attached_path]
 * @property {string} [proxy_url]
 */
/**
 * @typedef AddProxyResponse
 * @property {string} [_id]
 * @property {string} [attached_path]
 * @property {string} [proxy_url]
 * @property {string} [company_id]
 * @property {string} [application_id]
 * @property {string} [extension_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */
/**
 * @typedef APIError
 * @property {string} [code]
 * @property {string} [message]
 * @property {string} [info]
 * @property {string} [request_id]
 * @property {Object} [meta]
 */
/**
 * @typedef RemoveProxyResponse
 * @property {string} [message]
 * @property {Object} [data]
 */
/**
 * @typedef EventConfig
 * @property {number} [id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 * @property {string} [display_name]
 * @property {string} [description]
 * @property {string} [created_on]
 */
/**
 * @typedef EventConfigList
 * @property {EventConfig[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef EventConfigResponse
 * @property {EventConfig[]} [event_configs]
 */
/**
 * @typedef SubscriberConfigList
 * @property {SubscriberResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef EventProcessedStatus
 * @property {number} [id]
 * @property {string} [subscriber_id]
 * @property {number} [attempt]
 * @property {string} [response_code]
 * @property {string} [response_message]
 * @property {string} [created_on]
 * @property {string} [processed_on]
 * @property {boolean} [status]
 */
/**
 * @typedef EventPayload
 * @property {number} [id]
 * @property {string} [event_trace_id]
 * @property {string} [message_id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [version]
 * @property {boolean} [status]
 */
/**
 * @typedef SubscriberConfig
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {SubscriberStatus} [status]
 * @property {string} [email_id]
 * @property {AuthMeta} [auth_meta]
 * @property {number[]} [event_id]
 */
/**
 * @typedef SubscriberResponse
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {SubscriberStatus} [status]
 * @property {AuthMeta} [auth_meta]
 * @property {string} [created_on]
 * @property {string} [updated_on]
 * @property {EventConfig[]} [event_configs]
 */
/**
 * @typedef SubscriberEvent
 * @property {number} [id]
 * @property {number} [subscriber_id]
 * @property {number} [event_id]
 * @property {string} [created_date]
 */
/**
 * @typedef AuthMeta
 * @property {string} [type]
 * @property {string} [secret]
 */
/**
 * @typedef Association
 * @property {number} [company_id]
 * @property {string[]} [application_id]
 * @property {string} [extension_id]
 * @property {string} [criteria]
 */
/**
 * @typedef EventConfigBase
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 */
/**
 * @typedef RequestBodyAuditLog
 * @property {LogMetaObj} log_meta
 * @property {Object} log_payload
 */
/**
 * @typedef CreateLogResponse
 * @property {string} [message]
 * @property {string} [internal_message]
 */
/**
 * @typedef LogMetaObj
 * @property {Object} [modifier]
 * @property {string} [application]
 * @property {EntityObject} [entity]
 * @property {Object} [device_info]
 * @property {Object} [location]
 */
/**
 * @typedef EntityObject
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [action]
 */
/**
 * @typedef LogSchemaResponse
 * @property {LogDocs[]} [docs]
 */
/**
 * @typedef LogDocs
 * @property {EntityObj} [entity]
 * @property {Modifier} [modifier]
 * @property {DeviceInfo} [device_info]
 * @property {Location} [location]
 * @property {string} [_id]
 * @property {string} [company]
 * @property {string} [application]
 * @property {string} [sessions]
 * @property {string} [date]
 * @property {Object} [logs]
 */
/**
 * @typedef EntityObj
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [action]
 * @property {Object} [entity_details]
 */
/**
 * @typedef Modifier
 * @property {string} [user_id]
 * @property {boolean} [as_administrator]
 * @property {Object} [user_details]
 */
/**
 * @typedef DeviceInfo
 * @property {string} [user_agent]
 * @property {Object} [extra_meta]
 */
/**
 * @typedef Location
 * @property {Object} [extra_meta]
 */
/**
 * @typedef EntityTypesResponse
 * @property {EntityTypeObj[]} [items]
 */
/**
 * @typedef EntityTypeObj
 * @property {string} [entity_value]
 * @property {string} [display_name]
 */
declare class Lead {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.items] - Decides that the reponse will contain the
     *   list of tickets
     * @param {boolean} [arg.filters] - Decides that the reponse will contain
     *   the ticket filters
     * @param {string} [arg.q] - Search through ticket titles and description
     * @param {string} [arg.status] - Filter tickets on status
     * @param {PriorityEnum} [arg.priority] - Filter tickets on priority
     * @param {string} [arg.category] - Filter tickets on category
     * @summary: Gets the list of Application level Tickets and/or ticket filters depending on query params
     * @description: Gets the list of Application level Tickets and/or ticket filters
     */
    getTickets({ items, filters, q, status, priority, category }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: any;
        category?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Tiket ID of the ticket to be fetched
     * @summary: Retreives ticket details of a application level ticket
     * @description: Retreives ticket details of a application level ticket with ticket ID
     */
    getTicket({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID of ticket to be edited
     * @param {EditTicketPayload} arg.body
     * @summary: Edits ticket details of a application level ticket
     * @description: Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
     */
    editTicket({ id, body }?: {
        id: string;
        body: EditTicketPayload;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID for which history is created
     * @param {TicketHistoryPayload} arg.body
     * @summary: Create history for specific application level ticket
     * @description: Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     */
    createHistory({ id, body }?: {
        id: string;
        body: TicketHistoryPayload;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID for which history is to be fetched
     * @summary: Gets history list for specific application level ticket
     * @description: Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     */
    getTicketHistory({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - Slug of form whose response is getting submitted
     * @summary: Get specific custom form using it's slug
     * @description: Get specific custom form using it's slug, this is used to view the form.
     */
    getCustomForm({ slug }?: {
        slug: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - Slug of form whose response is getting submitted
     * @param {EditCustomFormPayload} arg.body
     * @summary: Edit the given custom form
     * @description: Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.
     */
    editCustomForm({ slug, body }?: {
        slug: string;
        body: EditCustomFormPayload;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get list of custom form
     * @description: Get list of custom form for given application
     */
    getCustomForms({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateCustomFormPayload} arg.body
     * @summary: Creates a new custom form
     * @description: Creates a new custom form for given application
     */
    createCustomForm({ body }?: {
        body: CreateCustomFormPayload;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueName - Unique name of video room
     * @summary: Get Token to join a specific Video Room using it's unqiue name
     * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
     */
    getTokenForVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueName - Unique name of Video Room
     * @summary: Get participants of a specific Video Room using it's unique name
     * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
     */
    getVideoParticipants({ uniqueName }?: {
        uniqueName: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateVideoRoomPayload} arg.body
     * @summary: Open a video room.
     * @description: Open a video room.
     */
    openVideoRoom({ body }?: {
        body: CreateVideoRoomPayload;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueName - Unique name of Video Room
     * @summary: Close the video room and force all participants to leave.
     * @description: Close the video room and force all participants to leave.
     */
    closeVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): globalThis.Promise<any>;
}
declare class Feedback {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Pagination page no
     * @param {number} [arg.pageSize] - Pagination page size
     * @summary: Get list of attribute data
     * @description: Provides a list of all attribute data.
     */
    getAttributes({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Pagination page size
     * @summary: Get list of attribute data
     * @description: Provides a list of all attribute data.
     */
    getAttributesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] - Review id
     * @param {string} [arg.entityId] - Entity id
     * @param {string} [arg.entityType] - Entity type
     * @param {string} [arg.userId] - User id
     * @param {string} [arg.media] - Media type e.g. image | video | video_file
     *   | video_link
     * @param {number[]} [arg.rating] - Rating filter, 1-5
     * @param {string[]} [arg.attributeRating] - Attribute rating filter with
     *   ma,e of attribute
     * @param {boolean} [arg.facets] - Facets (true|false)
     * @param {string} [arg.sort] - Sort by : default | top | recent
     * @param {string} [arg.next] - Pagination next
     * @param {string} [arg.start] - Pagination start
     * @param {string} [arg.limit] - Pagination limit
     * @param {string} [arg.count] - Pagination count
     * @param {string} [arg.pageId] - Pagination page id
     * @param {number} [arg.pageSize] - Pagination page size
     * @summary: Get list of customer reviews [admin]
     * @description: The endpoint provides a list of customer reviews based on entity and provided filters
     */
    getCustomerReviews({ id, entityId, entityType, userId, media, rating, attributeRating, facets, sort, next, start, limit, count, pageId, pageSize, }?: {
        id?: string;
        entityId?: string;
        entityType?: string;
        userId?: string;
        media?: string;
        rating?: number[];
        attributeRating?: string[];
        facets?: boolean;
        sort?: string;
        next?: string;
        start?: string;
        limit?: string;
        count?: string;
        pageId?: string;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {string} [arg.id] - Review id
     * @param {string} [arg.entityId] - Entity id
     * @param {string} [arg.entityType] - Entity type
     * @param {string} [arg.userId] - User id
     * @param {string} [arg.media] - Media type e.g. image | video | video_file
     *   | video_link
     * @param {number[]} [arg.rating] - Rating filter, 1-5
     * @param {string[]} [arg.attributeRating] - Attribute rating filter with
     *   ma,e of attribute
     * @param {boolean} [arg.facets] - Facets (true|false)
     * @param {string} [arg.sort] - Sort by : default | top | recent
     * @param {string} [arg.next] - Pagination next
     * @param {string} [arg.start] - Pagination start
     * @param {string} [arg.limit] - Pagination limit
     * @param {string} [arg.count] - Pagination count
     * @param {number} [arg.pageSize] - Pagination page size
     * @summary: Get list of customer reviews [admin]
     * @description: The endpoint provides a list of customer reviews based on entity and provided filters
     */
    getCustomerReviewsPaginator({ companyId, applicationId, id, entityId, entityType, userId, media, rating, attributeRating, facets, sort, next, start, limit, count, pageSize, }?: {
        companyId: string;
        applicationId: string;
        id?: string;
        entityId?: string;
        entityType?: string;
        userId?: string;
        media?: string;
        rating?: number[];
        attributeRating?: string[];
        facets?: boolean;
        sort?: string;
        next?: string;
        start?: string;
        limit?: string;
        count?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.reviewId - Review id
     * @param {ApproveRequest} arg.body
     * @summary: update approve details
     * @description: The is used to update approve details like status and description text
     */
    updateApprove({ reviewId, body }?: {
        reviewId: string;
        body: ApproveRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.reviewId - Review id
     * @summary: get history details
     * @description: The is used to get the history details like status and description text
     */
    getHistory({ reviewId }?: {
        reviewId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.pageId] - Pagination page id
     * @param {number} [arg.pageSize] - Pagination page size
     * @summary: Get list of templates
     * @description: Get all templates of application
     */
    getApplicationTemplates({ pageId, pageSize }?: {
        pageId?: string;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Pagination page size
     * @summary: Get list of templates
     * @description: Get all templates of application
     */
    getApplicationTemplatesPaginator({ companyId, applicationId, pageSize, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {TemplateRequestList} arg.body
     * @summary: Create a new template
     * @description: Create a new template for review with following data:
     * - Enable media, rating and review
     * - Rating - active/inactive/selected rate choices, attributes, text on rate, comment for each rate, type
     * - Review - header, title, description, image and video meta, enable votes
     */
    createTemplate({ body }?: {
        body: TemplateRequestList;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Template id
     * @summary: Get a template by ID
     * @description: Get the template for product or l3 type by ID
     */
    getTemplateById({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Template id
     * @param {UpdateTemplateRequest} arg.body
     * @summary: Update a template's status
     * @description: Update existing template status, active/archive
     */
    updateTemplate({ id, body }?: {
        id: string;
        body: UpdateTemplateRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Template id
     * @param {UpdateTemplateStatusRequest} arg.body
     * @summary: Update a template's status
     * @description: Update existing template status, active/archive
     */
    updateTemplateStatus({ id, body }?: {
        id: string;
        body: UpdateTemplateStatusRequest;
    }): globalThis.Promise<any>;
}
declare class Theme {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme to be retrieved
     * @summary: Get all pages of a theme
     * @description: Use this API to retrieve all the available pages of a theme by its ID.
     */
    getAllPages({ themeId }?: {
        themeId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme
     * @param {AvailablePageSchema} arg.body
     * @summary: Create a page
     * @description: Use this API to create a page for a theme by its ID.
     */
    createPage({ themeId, body }?: {
        themeId: string;
        body: AvailablePageSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme to be retrieved
     * @param {AllAvailablePageSchema} arg.body
     * @summary: Update multiple pages of a theme
     * @description: Use this API to update multiple pages of a theme by its ID.
     */
    updateMultiplePages({ themeId, body }?: {
        themeId: string;
        body: AllAvailablePageSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme to be retrieved
     * @param {string} arg.pageValue - Value of the page to be retrieved
     * @summary: Get page of a theme
     * @description: Use this API to retrieve a page of a theme.
     */
    getPage({ themeId, pageValue }?: {
        themeId: string;
        pageValue: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme
     * @param {string} arg.pageValue - Value of the page to be updated
     * @param {AvailablePageSchema} arg.body
     * @summary: Updates a page
     * @description: Use this API to update a page for a theme by its ID.
     */
    updatePage({ themeId, pageValue, body }?: {
        themeId: string;
        pageValue: string;
        body: AvailablePageSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme
     * @param {string} arg.pageValue - Value of the page to be updated
     * @summary: Deletes a page
     * @description: Use this API to delete a page for a theme by its ID and page_value.
     */
    deletePage({ themeId, pageValue }?: {
        themeId: string;
        pageValue: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @summary: Get a list of themes from the theme library
     * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to fetch a list of themes from the library along with their configuration details.
     */
    getThemeLibrary({ pageSize, pageNo }?: {
        pageSize?: number;
        pageNo?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddThemeRequestSchema} arg.body
     * @summary: Add a theme to the theme library
     * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to choose a theme and add it to the theme library.
     */
    addToThemeLibrary({ body }?: {
        body: AddThemeRequestSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddThemeRequestSchema} arg.body
     * @summary: Apply a theme
     * @description: Use this API to apply a theme to the website.
     */
    applyTheme({ body }?: {
        body: AddThemeRequestSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - Theme ID
     * @summary: Checks if theme is upgradable
     * @description: There's always a possibility that new features get added to a theme. Use this API to check if the applied theme has an upgrade available.
     */
    isUpgradable({ themeId }?: {
        themeId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Upgrade a theme
     * @description: Use this API to upgrade the current theme to its latest version.
     */
    upgradeTheme({ themeId }?: {
        themeId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @summary: Get all public themes
     * @description: Use this API to get a list of free themes that you can apply to your website.
     */
    getPublicThemes({ pageSize, pageNo }?: {
        pageSize?: number;
        pageNo?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ThemesSchema} arg.body
     * @summary: Create a new theme
     * @description: Themes improve the look and appearance of a website. Use this API to create a theme.
     */
    createTheme({ body }?: {
        body: ThemesSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get the applied theme
     * @description: Use this API to retrieve the theme that is currently applied to the website along with its details.
     */
    getAppliedTheme({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get all the supported fonts in a theme
     * @description: Font is a collection of characters with a similar design. Use this API to retrieve a list of website fonts.
     */
    getFonts({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Gets theme by id
     * @description: Use this API to retrieve the details of a specific theme by using its ID.
     */
    getThemeById({ themeId }?: {
        themeId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @param {ThemesSchema} arg.body
     * @summary: Update a theme
     * @description: Use this API to edit an existing theme. You can customize the website font, sections, images, styles, and many more.
     */
    updateTheme({ themeId, body }?: {
        themeId: string;
        body: ThemesSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Delete a theme
     * @description: Use this API to delete a theme from the theme library.
     */
    deleteTheme({ themeId }?: {
        themeId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Get a theme preview
     * @description: A theme can be previewed before applying it. Use this API to retrieve the theme preview by using its ID.
     */
    getThemeForPreview({ themeId }?: {
        themeId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Publish a theme
     * @description: Use this API to publish a theme that is either newly created or edited.
     */
    publishTheme({ themeId }?: {
        themeId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Unpublish a theme
     * @description: Use this API to remove an existing theme from the list of available themes.
     */
    unpublishTheme({ themeId }?: {
        themeId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Archive a theme
     * @description: Use this API to store an existing theme but not delete it so that it can be used in future if required.
     */
    archiveTheme({ themeId }?: {
        themeId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Unarchive a theme
     * @description: Use this API to restore an archived theme and bring it back for editing or publishing.
     */
    unarchiveTheme({ themeId }?: {
        themeId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Fetch last modified timestamp
     * @description: Use this API to fetch Last-Modified timestamp in header metadata.
     */
    getThemeLastModified({ themeId }?: {
        themeId: string;
    }): globalThis.Promise<any>;
}
declare class User {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.q] - The search query. Mobile number or email ID of
     *   a customer.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @summary: Get a list of customers
     * @description: Use this API to retrieve a list of customers who have registered in the application.
     */
    getCustomers({ q, pageSize, pageNo }?: {
        q?: string;
        pageSize?: number;
        pageNo?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {Object} [arg.q] - The search query. Mobile number or email ID of
     *   a customer.
     * @summary: Search an existing user.
     * @description: Use this API to retrieve an existing user from a list.
     */
    searchUsers({ q }?: {
        q?: any;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateUserRequestSchema} arg.body
     * @summary: Create user
     * @description: Create user
     */
    createUser({ body }?: {
        body: CreateUserRequestSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userId - User ID
     * @param {UpdateUserRequestSchema} arg.body
     * @summary: Update user
     * @description: Update user
     */
    updateUser({ userId, body }?: {
        userId: string;
        body: UpdateUserRequestSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateUserSessionRequestSchema} arg.body
     * @summary: Create user session
     * @description: Create user session
     */
    createUserSession({ body }?: {
        body: CreateUserSessionRequestSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get platform configurations
     * @description: Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.
     */
    getPlatformConfig({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PlatformSchema} arg.body
     * @summary: Update platform configurations
     * @description: Use this API to edit the existing platform configurations such as mobile image, desktop image, social logins, and all other text.
     */
    updatePlatformConfig({ body }?: {
        body: PlatformSchema;
    }): globalThis.Promise<any>;
}
declare class Content {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get a list of announcements
     * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve a list of announcements.
     */
    getAnnouncementsList({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get a list of announcements
     * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve a list of announcements.
     */
    getAnnouncementsListPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {AdminAnnouncementSchema} arg.body
     * @summary: Create an announcement
     * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to create an announcement.
     */
    createAnnouncement({ body }?: {
        body: AdminAnnouncementSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.announcementId - ID allotted to the announcement.
     * @summary: Get announcement by ID
     * @description: Use this API to retrieve an announcement and its details such as the target platform and pages on which it's applicable
     */
    getAnnouncementById({ announcementId }?: {
        announcementId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.announcementId - ID allotted to the announcement.
     * @param {AdminAnnouncementSchema} arg.body
     * @summary: Update an announcement
     * @description: Use this API to edit an existing announcement and its details such as the target platform and pages on which it's applicable
     */
    updateAnnouncement({ announcementId, body }?: {
        announcementId: string;
        body: AdminAnnouncementSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.announcementId - ID allotted to the announcement.
     * @param {ScheduleSchema} arg.body
     * @summary: Update the schedule and the publish status of an announcement
     * @description: Use this API to edit the duration, i.e. start date-time and end date-time of an announcement. Moreover, you can enable/disable an announcement using this API.
     */
    updateAnnouncementSchedule({ announcementId, body }?: {
        announcementId: string;
        body: ScheduleSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.announcementId - ID allotted to the announcement.
     * @summary: Delete announcement by id
     * @description: Use this API to delete an existing announcement.
     */
    deleteAnnouncement({ announcementId }?: {
        announcementId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BlogRequest} arg.body
     * @summary: Create a blog
     * @description: Use this API to create a blog.
     */
    createBlog({ body }?: {
        body: BlogRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get blogs
     * @description: Use this API to get a list of blogs along with their details, such as the title, reading time, publish status, feature image, tags, author, etc.
     */
    getBlogs({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get blogs
     * @description: Use this API to get a list of blogs along with their details, such as the title, reading time, publish status, feature image, tags, author, etc.
     */
    getBlogsPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the blog.
     * @param {BlogRequest} arg.body
     * @summary: Update a blog
     * @description: Use this API to update the details of an existing blog which includes title, feature image, content, SEO details, expiry, etc.
     */
    updateBlog({ id, body }?: {
        id: string;
        body: BlogRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the blog.
     * @summary: Delete blogs
     * @description: Use this API to delete a blog.
     */
    deleteBlog({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a blog page. You can get slug value of a blog from `getBlogs` API.
     * @summary: Get components of a blog
     * @description: Use this API to retrieve the components of a blog, such as title, slug, feature image, content, schedule, publish status, author, etc.
     */
    getComponentById({ slug }?: {
        slug: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DataLoaderSchema} arg.body
     * @summary: Adds a data loader
     * @description: Use this API to add data loader. This includes the data loader name, operationId, service name and its type (url/function) with corresponding value.
     */
    addDataLoader({ body }?: {
        body: DataLoaderSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get all the data loaders in an application
     * @description: Use this to get all data loaders of an application
     */
    getDataLoaders({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.dataLoaderId - ID allotted to the data loader.
     * @summary: Delete data loader in application
     * @description: Use this API to delete data loader.
     */
    deleteDataLoader({ dataLoaderId }?: {
        dataLoaderId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.dataLoaderId - ID allotted to the data loader.
     * @param {DataLoaderSchema} arg.body
     * @summary: Edit a data loader by id
     * @description: Use this API to edit the details of an existing data loader by its ID.
     */
    editDataLoader({ dataLoaderId, body }?: {
        dataLoaderId: string;
        body: DataLoaderSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.serviceName - Service name of the data loader.
     * @summary: Get all the data loaders in an application by service name
     * @description: Use this to get all data loaders of an application by service name
     */
    getDataLoadersByService({ serviceName }?: {
        serviceName: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.dataLoaderId - ID allotted to the data loader.
     * @summary: Select a data loader by id
     * @description: Use this API to select a data loader to be used in applications.
     */
    selectDataLoader({ dataLoaderId }?: {
        dataLoaderId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.service - Name of service.
     * @param {string} arg.operationId - Name of operation id of the service.
     * @summary: Reset a data loader by serive name and operation Id
     * @description: Use this API to reselect a data loader.
     */
    resetDataLoader({ service, operationId }?: {
        service: string;
        operationId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get a list of FAQ categories
     * @description: FAQs can be divided into categories. Use this API to get a list of FAQ categories.
     */
    getFaqCategories({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.idOrSlug - ID or the slug allotted to an FAQ
     *   category. Slug is a short, human-readable, URL-friendly identifier of
     *   an object. You can get slug value of an FAQ category from
     *   `getFaqCategories` API.
     * @summary: Get an FAQ category by slug or id
     * @description: FAQs can be divided into categories. Use this API to get an FAQ categories using its slug or ID.
     */
    getFaqCategoryBySlugOrId({ idOrSlug }?: {
        idOrSlug: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateFaqCategoryRequestSchema} arg.body
     * @summary: Create an FAQ category
     * @description: FAQs help users to solve an issue or know more about a process. FAQs can be categorized separately, for e.g. some questions can be related to payment, some could be related to purchase, shipping, navigating, etc. Use this API to create an FAQ category.
     */
    createFaqCategory({ body }?: {
        body: CreateFaqCategoryRequestSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to an FAQ category.
     * @param {UpdateFaqCategoryRequestSchema} arg.body
     * @summary: Update an FAQ category
     * @description: Use this API to edit an existing FAQ category.
     */
    updateFaqCategory({ id, body }?: {
        id: string;
        body: UpdateFaqCategoryRequestSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to an FAQ category.
     * @summary: Delete an FAQ category
     * @description: Use this API to delete an FAQ category.
     */
    deleteFaqCategory({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.idOrSlug - ID or the slug allotted to an FAQ
     *   category. Slug is a short, human-readable, URL-friendly identifier of
     *   an object. You can get slug value of an FAQ category from
     *   `getFaqCategories` API.
     * @summary: Get question and answers within an FAQ category
     * @description: Use this API to retrieve all the commonly asked question and answers belonging to an FAQ category.
     */
    getFaqsByCategoryIdOrSlug({ idOrSlug }?: {
        idOrSlug: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.categoryId - ID allotted to an FAQ category.
     * @param {CreateFaqSchema} arg.body
     * @summary: Create an FAQ
     * @description: FAQs help users to solve an issue or know more about a process. Use this API to create an FAQ for a given FAQ category.
     */
    addFaq({ categoryId, body }?: {
        categoryId: string;
        body: CreateFaqSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.categoryId - ID allotted to an FAQ category.
     * @param {string} arg.faqId - ID allotted to an FAQ.
     * @param {CreateFaqSchema} arg.body
     * @summary: Update an FAQ
     * @description: Use this API to edit an existing FAQ.
     */
    updateFaq({ categoryId, faqId, body }?: {
        categoryId: string;
        faqId: string;
        body: CreateFaqSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.categoryId - ID allotted to an FAQ category.
     * @param {string} arg.faqId - ID allotted to an FAQ.
     * @summary: Delete an FAQ
     * @description: Use this API to delete an existing FAQ.
     */
    deleteFaq({ categoryId, faqId }?: {
        categoryId: string;
        faqId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.idOrSlug - ID or the slug allotted to an FAQ
     *   category. Slug is a short, human-readable, URL-friendly identifier of
     *   an object. You can get slug value of an FAQ category from
     *   `getFaqCategories` API.
     * @summary: Get an FAQ
     * @description: Use this API to retrieve a specific FAQ. You will get the question and answer of that FAQ.
     */
    getFaqByIdOrSlug({ idOrSlug }?: {
        idOrSlug: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get landing pages
     * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch a list of landing pages.
     */
    getLandingPages({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get landing pages
     * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch a list of landing pages.
     */
    getLandingPagesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {LandingPageSchema} arg.body
     * @summary: Create a landing page
     * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to create a landing page.
     */
    createLandingPage({ body }?: {
        body: LandingPageSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to a landing page.
     * @param {LandingPageSchema} arg.body
     * @summary: Update a landing page
     * @description: Use this API to edit the details of an existing landing page.
     */
    updateLandingPage({ id, body }?: {
        id: string;
        body: LandingPageSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to a landing page.
     * @summary: Delete a landing page
     * @description: Use this API to delete an existing landing page.
     */
    deleteLandingPage({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get legal information
     * @description: Use this API to get the legal information of an application, which includes Policy, Terms and Conditions, Shipping Policy and FAQ regarding the application.
     */
    getLegalInformation({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ApplicationLegal} arg.body
     * @summary: Save legal information
     * @description: Use this API to edit, update and save the legal information of an application, which includes Policy, Terms and Conditions, Shipping Policy and FAQ regarding the application.
     */
    updateLegalInformation({ body }?: {
        body: ApplicationLegal;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.devicePlatform - Filter navigations by platform.
     *   Acceptable values are: web, android, ios, all
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get navigations
     * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the orientation, links, sub-navigations, etc.
     */
    getNavigations({ devicePlatform, pageNo, pageSize }?: {
        devicePlatform: string;
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {string} arg.devicePlatform - Filter navigations by platform.
     *   Acceptable values are: web, android, ios, all
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get navigations
     * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the orientation, links, sub-navigations, etc.
     */
    getNavigationsPaginator({ companyId, applicationId, devicePlatform, pageSize, }?: {
        companyId: string;
        applicationId: string;
        devicePlatform: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {NavigationRequest} arg.body
     * @summary: Create a navigation
     * @description: Navigation is the arrangement of navigational items to ease the accessibility of resources for users on a website. Use this API to create a navigation.
     */
    createNavigation({ body }?: {
        body: NavigationRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get default navigations
     * @description: On any website (application), there are navigations that are present by default. Use this API to retrieve those default navigations.
     */
    getDefaultNavigations({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a navigation. You can get slug value of a navigation from
     *   `getNavigations` API.
     * @param {string} arg.devicePlatform - Filter navigations by platform.
     *   Acceptable values are: web, android, ios, all
     * @summary: Get a navigation by slug
     * @description: Use this API to retrieve a navigation by its slug.
     */
    getNavigationBySlug({ slug, devicePlatform }?: {
        slug: string;
        devicePlatform: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the navigation.
     * @param {NavigationRequest} arg.body
     * @summary: Update a navigation
     * @description: Use this API to edit the details of an existing navigation.
     */
    updateNavigation({ id, body }?: {
        id: string;
        body: NavigationRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the navigation.
     * @summary: Delete a navigation
     * @description: Use this API to delete an existing navigation.
     */
    deleteNavigation({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get page meta
     * @description: Use this API to get the meta of custom pages (blog, page) and default system pages (e.g. home/brand/category/collection).
     */
    getPageMeta({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get page spec
     * @description: Use this API to get the specifications of a page, such as page type, display name, params and query.
     */
    getPageSpec({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PageRequest} arg.body
     * @summary: Create a page preview
     * @description: Use this API to create a page preview to check the appearance of a custom page.
     */
    createPagePreview({ body }?: {
        body: PageRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a page. You can get slug value of a page from `getPages` API.
     * @param {PagePublishRequest} arg.body
     * @summary: Change the publish status of a page
     * @description: Use this API to change the publish status of an existing page. Allows you to publish and unpublish the page.
     */
    updatePagePreview({ slug, body }?: {
        slug: string;
        body: PagePublishRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the page.
     * @summary: Delete a page
     * @description: Use this API to delete an existing page.
     */
    deletePage({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PathMappingSchema} arg.body
     * @summary: Save path based redirection rules
     * @description: Use this API to add, update or delete path-based redirection rules
     */
    updatePathRedirectionRules({ body }?: {
        body: PathMappingSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get path based redirection rules
     * @description: Use this API to get path based redirection rules.
     */
    getPathRedirectionRules({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get SEO configuration of an application
     * @description: Use this API to know how the SEO is configured in the application. This includes the sitemap, robot.txt, custom meta tags, etc.
     */
    getSEOConfiguration({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SeoComponent} arg.body
     * @summary: Update SEO of application
     * @description: Use this API to edit the SEO details of an application. This includes the sitemap, robot.txt, custom meta tags, etc.
     */
    updateSEOConfiguration({ body }?: {
        body: SeoComponent;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.devicePlatform - Filter slideshows by platform.
     *   Acceptable values are: web, android, ios and all
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get slideshows
     * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a list of slideshows.
     */
    getSlideshows({ devicePlatform, pageNo, pageSize }?: {
        devicePlatform: string;
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {string} arg.devicePlatform - Filter slideshows by platform.
     *   Acceptable values are: web, android, ios and all
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get slideshows
     * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a list of slideshows.
     */
    getSlideshowsPaginator({ companyId, applicationId, devicePlatform, pageSize, }?: {
        companyId: string;
        applicationId: string;
        devicePlatform: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {SlideshowRequest} arg.body
     * @summary: Create a slideshow
     * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to create a slideshow.
     */
    createSlideshow({ body }?: {
        body: SlideshowRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a slideshow. You can get slug value of a page from
     *   `getSlideshows` API.
     * @param {string} arg.devicePlatform - Filter slideshows by platform.
     *   Acceptable values are: web, android, ios and all
     * @summary: Get slideshow by slug
     * @description: Use this API to retrieve the details of a slideshow by its slug.
     */
    getSlideshowBySlug({ slug, devicePlatform }?: {
        slug: string;
        devicePlatform: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the slideshow.
     * @param {SlideshowRequest} arg.body
     * @summary: Update a slideshow
     * @description: Use this API to edit the details of an existing slideshow.
     */
    updateSlideshow({ id, body }?: {
        id: string;
        body: SlideshowRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the slideshow.
     * @summary: Delete a slideshow
     * @description: Use this API to delete an existing slideshow.
     */
    deleteSlideshow({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get support information
     * @description: Use this API to get the contact details for customer support, including emails and phone numbers.
     */
    getSupportInformation({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {Support} arg.body
     * @summary: Update the support data of an application
     * @description: Use this API to edit the existing contact details for customer support, including emails and phone numbers.
     */
    updateSupportInformation({ body }?: {
        body: Support;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateTagRequestSchema} arg.body
     * @summary: Update a tag
     * @description: Use this API to edit the details of an existing tag. This includes the tag name, tag type (css/js), url and position of the tag.
     */
    updateInjectableTag({ body }?: {
        body: CreateTagRequestSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Delete tags in application
     * @description: Use this API to delete all the existing tags at once.
     */
    deleteAllInjectableTags({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get all the tags in an application
     * @description: Use this API to get all the CSS and JS injected in the application in the form of tags.
     */
    getInjectableTags({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateTagRequestSchema} arg.body
     * @summary: Add a tag
     * @description: CSS and JS can be injected in the application (website) with the help of tags. Use this API to create such tags by entering the tag name, tag type (css/js), url and position of the tag.
     */
    addInjectableTag({ body }?: {
        body: CreateTagRequestSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {RemoveHandpickedSchema} arg.body
     * @summary: Remove a tag
     * @description: Use this API to delete an existing tag.
     */
    removeInjectableTag({ body }?: {
        body: RemoveHandpickedSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.tagId - ID allotted to the tag.
     * @param {UpdateHandpickedSchema} arg.body
     * @summary: Edit a tag by id
     * @description: Use this API to edit the details of an existing tag by its ID.
     */
    editInjectableTag({ tagId, body }?: {
        tagId: string;
        body: UpdateHandpickedSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PageRequest} arg.body
     * @summary: Create a page
     * @description: Use this API to create a custom page using a title, seo, publish status, feature image, tags, meta, etc.
     */
    createPage({ body }?: {
        body: PageRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get a list of pages
     * @description: Use this API to retrieve a list of pages.
     */
    getPages({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get a list of pages
     * @description: Use this API to retrieve a list of pages.
     */
    getPagesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the page.
     * @param {PageSchema} arg.body
     * @summary: Update a page
     * @description: Use this API to edit the details of an existing page, such as its title, seo, publish status, feature image, tags, schedule, etc.
     */
    updatePage({ id, body }?: {
        id: string;
        body: PageSchema;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a page. You can get slug value of a page from `getPages` API.
     * @summary: Get pages by component Id
     * @description: Use this API to retrieve the components of a page, such as its title, seo, publish status, feature image, tags, schedule, etc.
     */
    getPageBySlug({ slug }?: {
        slug: string;
    }): globalThis.Promise<any>;
}
declare class Communication {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get campaigns
     * @description: Get campaigns
     */
    getCampaigns({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get campaigns
     * @description: Get campaigns
     */
    getCampaignsPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {CampaignReq} arg.body
     * @summary: Create campaign
     * @description: Create campaign
     */
    createCampaign({ body }?: {
        body: CampaignReq;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Campaign id
     * @summary: Get campaign by id
     * @description: Get campaign by id
     */
    getCampaignById({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Campaign id
     * @param {CampaignReq} arg.body
     * @summary: Update campaign by id
     * @description: Update campaign by id
     */
    updateCampaignById({ id, body }?: {
        id: string;
        body: CampaignReq;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Campaign id
     * @summary: Get stats of campaign by id
     * @description: Get stats of campaign by id
     */
    getStatsOfCampaignById({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get audiences
     * @description: Get audiences
     */
    getAudiences({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get audiences
     * @description: Get audiences
     */
    getAudiencesPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {AudienceReq} arg.body
     * @summary: Create audience
     * @description: Create audience
     */
    createAudience({ body }?: {
        body: AudienceReq;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BigqueryHeadersReq} arg.body
     * @summary: Get bigquery headers
     * @description: Get bigquery headers
     */
    getBigqueryHeaders({ body }?: {
        body: BigqueryHeadersReq;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Audience id
     * @summary: Get audience by id
     * @description: Get audience by id
     */
    getAudienceById({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Audience id
     * @param {AudienceReq} arg.body
     * @summary: Update audience by id
     * @description: Update audience by id
     */
    updateAudienceById({ id, body }?: {
        id: string;
        body: AudienceReq;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetNRecordsCsvReq} arg.body
     * @summary: Get n sample records from csv
     * @description: Get n sample records from csv
     */
    getNSampleRecordsFromCsv({ body }?: {
        body: GetNRecordsCsvReq;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get email providers
     * @description: Get email providers
     */
    getEmailProviders({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get email providers
     * @description: Get email providers
     */
    getEmailProvidersPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {EmailProviderReq} arg.body
     * @summary: Create email provider
     * @description: Create email provider
     */
    createEmailProvider({ body }?: {
        body: EmailProviderReq;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email provider id
     * @summary: Get email provider by id
     * @description: Get email provider by id
     */
    getEmailProviderById({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email provider id
     * @param {EmailProviderReq} arg.body
     * @summary: Update email provider by id
     * @description: Update email provider by id
     */
    updateEmailProviderById({ id, body }?: {
        id: string;
        body: EmailProviderReq;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get email templates
     * @description: Get email templates
     */
    getEmailTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get email templates
     * @description: Get email templates
     */
    getEmailTemplatesPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {EmailTemplateReq} arg.body
     * @summary: Create email template
     * @description: Create email template
     */
    createEmailTemplate({ body }?: {
        body: EmailTemplateReq;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get system email templates
     * @description: Get system email templates
     */
    getSystemEmailTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get system email templates
     * @description: Get system email templates
     */
    getSystemEmailTemplatesPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email template id
     * @summary: Get email template by id
     * @description: Get email template by id
     */
    getEmailTemplateById({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email template id
     * @param {EmailTemplateReq} arg.body
     * @summary: Update email template by id
     * @description: Update email template by id
     */
    updateEmailTemplateById({ id, body }?: {
        id: string;
        body: EmailTemplateReq;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email template id
     * @summary: Delete email template by id
     * @description: Delete email template by id
     */
    deleteEmailTemplateById({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EngineRequest} arg.body
     * @summary: Send email or sms synchronously
     * @description: Send email or sms synchronously
     */
    sendCommunicationSynchronously({ body }?: {
        body: EngineRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EngineRequest} arg.body
     * @summary: Send email or sms asynchronously
     * @description: Send email or sms asynchronously
     */
    sendCommunicationAsynchronously({ body }?: {
        body: EngineRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {string} [arg.populate] - Populate fields
     * @summary: Get event subscriptions
     * @description: Get event subscriptions
     */
    getEventSubscriptions({ pageNo, pageSize, populate }?: {
        pageNo?: number;
        pageSize?: number;
        populate?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {string} [arg.populate] - Populate fields
     * @summary: Get event subscriptions
     * @description: Get event subscriptions
     */
    getEventSubscriptionsPaginator({ companyId, applicationId, pageSize, populate, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        populate?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get jobs
     * @description: Get jobs
     */
    getJobs({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get jobs
     * @description: Get jobs
     */
    getJobsPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {TriggerJobRequest} arg.body
     * @summary: Trigger campaign job
     * @description: Trigger campaign job
     */
    triggerCampaignJob({ body }?: {
        body: TriggerJobRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get job logs
     * @description: Get job logs
     */
    getJobLogs({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get job logs
     * @description: Get job logs
     */
    getJobLogsPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.pageId] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on _id
     * @param {Object} [arg.query] -
     * @summary: Get communication logs
     * @description: Get communication logs
     */
    getCommunicationLogs({ pageId, pageSize, sort, query }?: {
        pageId?: string;
        pageSize?: number;
        sort?: any;
        query?: any;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on _id
     * @param {Object} [arg.query] -
     * @summary: Get communication logs
     * @description: Get communication logs
     */
    getCommunicationLogsPaginator({ companyId, applicationId, pageSize, sort, query, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
        query?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get sms providers
     * @description: Get sms providers
     */
    getSmsProviders({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get sms providers
     * @description: Get sms providers
     */
    getSmsProvidersPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {SmsProviderReq} arg.body
     * @summary: Create sms provider
     * @description: Create sms provider
     */
    createSmsProvider({ body }?: {
        body: SmsProviderReq;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms provider id
     * @summary: Get sms provider by id
     * @description: Get sms provider by id
     */
    getSmsProviderById({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms provider id
     * @param {SmsProviderReq} arg.body
     * @summary: Update sms provider by id
     * @description: Update sms provider by id
     */
    updateSmsProviderById({ id, body }?: {
        id: string;
        body: SmsProviderReq;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get sms templates
     * @description: Get sms templates
     */
    getSmsTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get sms templates
     * @description: Get sms templates
     */
    getSmsTemplatesPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {SmsTemplateReq} arg.body
     * @summary: Create sms template
     * @description: Create sms template
     */
    createSmsTemplate({ body }?: {
        body: SmsTemplateReq;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms template id
     * @summary: Get sms template by id
     * @description: Get sms template by id
     */
    getSmsTemplateById({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms template id
     * @param {SmsTemplateReq} arg.body
     * @summary: Update sms template by id
     * @description: Update sms template by id
     */
    updateSmsTemplateById({ id, body }?: {
        id: string;
        body: SmsTemplateReq;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms template id
     * @summary: Delete sms template by id
     * @description: Delete sms template by id
     */
    deleteSmsTemplateById({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get system sms templates
     * @description: Get system sms templates
     */
    getSystemSystemTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get system sms templates
     * @description: Get system sms templates
     */
    getSystemSystemTemplatesPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
}
declare class Payment {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get All Brand Payment Gateway Config Secret
     * @description: Get All Brand Payment Gateway Config Secret
     */
    getBrandPaymentGatewayConfig({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentGatewayConfigRequest} arg.body
     * @summary: Save Config Secret For Brand Payment Gateway
     * @description: Save Config Secret For Brand Payment Gateway
     */
    saveBrandPaymentGatewayConfig({ body }?: {
        body: PaymentGatewayConfigRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentGatewayConfigRequest} arg.body
     * @summary: Save Config Secret For Brand Payment Gateway
     * @description: Save Config Secret For Brand Payment Gateway
     */
    updateBrandPaymentGatewayConfig({ body }?: {
        body: PaymentGatewayConfigRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} arg.refresh -
     * @param {string} arg.requestType -
     * @summary: Get All Valid Payment Options
     * @description: Use this API to get Get All Valid Payment Options for making payment
     */
    getPaymentModeRoutes({ refresh, requestType }?: {
        refresh: boolean;
        requestType: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddBeneficiaryDetailsRequest} arg.body
     * @summary: Save bank details for cancelled/returned order
     * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account.
     */
    addBeneficiaryDetails({ body }?: {
        body: AddBeneficiaryDetailsRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @summary: List Order Beneficiary
     * @description: Get all active  beneficiary details added by the user for refund
     */
    getUserOrderBeneficiaries({ orderId }?: {
        orderId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @summary: List User Beneficiary
     * @description: Get all active  beneficiary details added by the user for refund
     */
    getUserBeneficiaries({ orderId }?: {
        orderId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentConfirmationRequest} arg.body
     * @summary: Confirm payment after successful payment from payment gateway
     * @description: Use this API to confirm payment after payment gateway accepted payment.
     */
    confirmPayment({ body }?: {
        body: PaymentConfirmationRequest;
    }): globalThis.Promise<any>;
}
declare class Order {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.orderId] - Order Id
     * @param {string} [arg.next] - Next
     * @param {string} [arg.previous] - Previous
     * @summary: Get Order Details for company based on Company Id and Order Id
     * @description: Get Orders
     */
    getOrderDetails({ orderId, next, previous }?: {
        orderId?: string;
        next?: string;
        previous?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - Shipment Id
     * @summary: Track Shipment by shipment id, for application based on application Id
     * @description: Shipment Track
     */
    trackShipmentPlatform({ shipmentId }?: {
        shipmentId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId - Order Id
     * @summary: Track Order by order id, for application based on application Id
     * @description: Order Track
     */
    trackOrder({ orderId }?: {
        orderId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get all failed orders application wise
     * @description: Failed Orders
     */
    failedOrders({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId - Order Id
     * @summary: Reprocess order by order id
     * @description: Order Reprocess
     */
    reprocessOrder({ orderId }?: {
        orderId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @param {ShipmentUpdateRequest} arg.body
     * @summary: Use this API to update the shipment using its shipment ID.
     * @description: Update the shipment
     */
    updateShipment({ shipmentId, body }?: {
        shipmentId: string;
        body: ShipmentUpdateRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.action - Action
     * @summary: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
     * @description: Get reasons behind full or partial cancellation of a shipment
     */
    getPlatformShipmentReasons({ action }?: {
        action: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId - ID of the order.
     * @param {string} arg.shipmentId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @summary: Use this API to track a shipment using its shipment ID.
     * @description: Track shipment
     */
    getShipmentTrackDetails({ orderId, shipmentId }?: {
        orderId: string;
        shipmentId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
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
     * @param {string} [arg.dp] - Delivery Partners
     * @param {boolean} [arg.shortenUrls] - Shorten URL option
     * @param {string} [arg.filterType] - Filters
     * @summary: Get Orders for company based on Company Id
     * @description: Get Orders at Application Level
     */
    getOrdersByApplicationId({ pageNo, pageSize, fromDate, toDate, q, stage, salesChannels, orderId, stores, status, dp, shortenUrls, filterType, }?: {
        pageNo?: string;
        pageSize?: string;
        fromDate?: string;
        toDate?: string;
        q?: string;
        stage?: string;
        salesChannels?: string;
        orderId?: string;
        stores?: string;
        status?: string;
        dp?: string;
        shortenUrls?: boolean;
        filterType?: string;
    }): globalThis.Promise<any>;
}
declare class Catalog {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to delete.
     * @param {CreateSearchKeyword} arg.body
     * @summary: Update Search Keyword
     * @description: Update Search Keyword by its id. On successful request, returns the updated collection
     */
    updateSearchKeywords({ id, body }?: {
        id: string;
        body: CreateSearchKeyword;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to retrieve.
     * @summary: Get a Search Keywords Details
     * @description: Get the details of a words by its `id`. If successful, returns a Collection resource in the response body specified in `GetSearchWordsDetailResponseSchema`
     */
    getSearchKeywords({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to delete.
     * @summary: Delete a Search Keywords
     * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
     */
    deleteSearchKeywords({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateSearchKeyword} arg.body
     * @summary: Add a Custom Search Keywords
     * @description: Create a Custom Search Keywords. See `CreateSearchKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateSearchKeywordSchema`
     */
    createCustomKeyword({ body }?: {
        body: CreateSearchKeyword;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: List all Search Custom Keyword Listing
     * @description: Custom Search Keyword allows you to map conditions with keywords to give you the ultimate results
     */
    getAllSearchKeyword({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to delete.
     * @param {CreateAutocompleteKeyword} arg.body
     * @summary: Create & Update Autocomplete Keyword
     * @description: Update a mapping by it's id. On successful request, returns the updated Keyword mapping
     */
    updateAutocompleteKeyword({ id, body }?: {
        id: string;
        body: CreateAutocompleteKeyword;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to retrieve.
     * @summary: Get a Autocomplete Keywords Details
     * @description: Get the details of a words by its `id`. If successful, returns a keywords resource in the response body specified in `GetAutocompleteWordsResponseSchema`
     */
    getAutocompleteKeywordDetail({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to delete.
     * @summary: Delete a Autocomplete Keywords
     * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
     */
    deleteAutocompleteKeyword({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateAutocompleteKeyword} arg.body
     * @summary: Add a Custom Autocomplete Keywords
     * @description: Create a Custom Autocomplete Keywords. See `CreateAutocompleteKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateAutocompleteKeywordSchema`
     */
    createCustomAutocompleteRule({ body }?: {
        body: CreateAutocompleteKeyword;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: List all Autocomplete Keyword Listing
     * @description: Custom Autocomplete Keyword allows you to map conditions with keywords to give you the ultimate results
     */
    getAutocompleteConfig({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.itemId - Product id for which the custom_meta is associated.
     * @param {ApplicationItemMeta} arg.body
     * @summary: Update a single custom meta.
     * @description: This API helps to update data associated to a item custom meta.
     */
    updateAppProduct({ itemId, body }?: {
        itemId: string;
        body: ApplicationItemMeta;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is an identifier that
     *   defines a specific type of configuration.
     * @param {string} [arg.templateSlug] - Get configuration list filtered by
     *   `template_slug` string. This is for the details and comparision groups.
     * @summary: Get configuration metadata details for catalog for admin panel
     * @description: Get the configuraion metadata details for catalog.
     */
    getConfigurationMetadata({ configType, templateSlug }?: {
        configType: string;
        templateSlug?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is a unique identifier
     *   for a particular group configuration type.
     * @param {AppConfigurationDetail} arg.body
     * @summary: Create configuration for Group config types.
     * @description: Create configuration for Group config types.
     */
    createGroupConfiguration({ configType, body }?: {
        configType: string;
        body: AppConfigurationDetail;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is an identifier that
     *   defines a specific type of configuration.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.search] - Get configuration list filtered by `search` string.
     * @param {string} [arg.templateSlug] - Get configuration list filtered by
     *   `template_slug` string. This is for the details and comparision groups.
     * @summary: Get the details of the application configured configurations of group config types.
     * @description: Get the details of the application configured configurations of group config types.
     */
    getGroupConfigurations({ configType, pageNo, pageSize, search, templateSlug, }?: {
        configType: string;
        pageNo?: number;
        pageSize?: number;
        search?: string;
        templateSlug?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is a unique identifier
     *   for a particular group configuration type.
     * @param {string} arg.groupSlug - A `group_slug` is a unique identifier of
     *   a particular configuration.
     * @param {AppConfigurationDetail} arg.body
     * @summary: Update the group configurations for the application.
     * @description: Update the group configurations for the application.
     */
    updateGroupConfiguration({ configType, groupSlug, body }?: {
        configType: string;
        groupSlug: string;
        body: AppConfigurationDetail;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is a unique identifier
     *   for a particular group configuration type.
     * @param {string} arg.groupSlug - A `group_slug` is a unique identifier of
     *   a particular configuration.
     * @summary: Delete configuration of the product config type of the application.
     * @description: Delete configuration of the product config type of the application.
     */
    deleteGroupConfiguration({ configType, groupSlug }?: {
        configType: string;
        groupSlug: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is a unique identifier
     *   for a particular listing configuration type.
     * @param {AppConfigurationsSort} arg.body
     * @summary: Add configuration for listings
     * @description: Add configuration for listing.
     */
    createListingConfiguration({ configType, body }?: {
        configType: string;
        body: AppConfigurationsSort;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is an identifier that
     *   defines a specific type of configuration.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.search] - Get configuration list filtered by `search` string.
     * @summary: Get the details of the application configured configurations of listing config types.
     * @description: Get the details of the application configured configurations of listing config types.
     */
    getListingConfigurations({ configType, pageNo, pageSize, search }?: {
        configType: string;
        pageNo?: number;
        pageSize?: number;
        search?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is a unique identifier
     *   for a particular listing configuration type.
     * @param {string} arg.configId - A `config_id` is a unique identifier of a
     *   particular configuration.
     * @param {AppConfigurationsSort} arg.body
     * @summary: Update configuration for listings
     * @description: Update configuration for listing.
     */
    updateListingConfiguration({ configType, configId, body }?: {
        configType: string;
        configId: string;
        body: AppConfigurationsSort;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is a unique identifier
     *   for a particular listing configuration type.
     * @param {string} arg.configId - A `config_id` is a unique identifier of a
     *   particular configuration.
     * @summary: Delete configuration for listings
     * @description: Delete configuration for listing.
     */
    deleteListingConfiguration({ configType, configId }?: {
        configType: string;
        configId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AllowSingleRequest} arg.body
     * @summary: Update allow single flag for filters of the application.
     * @description: Update allow single flag for filters of the application.
     */
    updateAllowSingle({ body }?: {
        body: AllowSingleRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DefaultKeyRequest} arg.body
     * @summary: Update the default sort key configuration for the application.
     * @description: Update the default sort key configuration for the application.
     */
    updateDefaultSort({ body }?: {
        body: DefaultKeyRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get configuration meta  details for catalog for admin panel
     * @description: configuration meta  details for catalog.
     */
    getCatalogConfiguration({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AppConfiguration} arg.body
     * @summary: Add configuration for products & listings
     * @description: Add configuration for products & listing.
     */
    createConfigurationProductListing({ body }?: {
        body: AppConfiguration;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get configured details for catalog
     * @description: configured details for catalog.
     */
    getConfigurations({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.type - Type can be brands, categories etc.
     * @param {AppConfiguration} arg.body
     * @summary: Add configuration for categories and brands
     * @description: Add configuration for categories & brands.
     */
    createConfigurationByType({ type, body }?: {
        type: string;
        body: AppConfiguration;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.type - Type can be brands, categories etc.
     * @summary: Get configured details for catalog
     * @description: configured details for catalog.
     */
    getConfigurationByType({ type }?: {
        type: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get query filters to configure a collection
     * @description: Get query filters to configure a collection
     */
    getQueryFilters({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateCollection} arg.body
     * @summary: Add a Collection
     * @description: Create a collection. See `CreateCollectionRequestSchema` for the list of attributes needed to create a collection and collections/query-options for the available options to create a collection. On successful request, returns a paginated list of collections specified in `CollectionCreateResponse`
     */
    createCollection({ body }?: {
        body: CreateCollection;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.q] - Get collection list filtered by q string,
     * @param {string} [arg.type] - Type of the collections
     * @param {string[]} [arg.tags] - Each response will contain next_id param,
     *   which should be sent back to make pagination work.
     * @param {boolean} [arg.isActive] - Get collections filtered by active status.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @summary: List all the collections
     * @description: A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections as specified in `CollectionListingSchema`
     */
    getAllCollections({ q, type, tags, isActive, pageNo, pageSize }?: {
        q?: string;
        type?: string;
        tags?: string[];
        isActive?: boolean;
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A `slug` is a human readable, URL friendly
     *   unique identifier of an object. Pass the `slug` of the collection which
     *   you want to retrieve.
     * @summary: Get a particular collection
     * @description: Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`
     */
    getCollectionDetail({ slug }?: {
        slug: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier of a collection.
     * @param {UpdateCollection} arg.body
     * @summary: Update a collection
     * @description: Update a collection by it's id. On successful request, returns the updated collection
     */
    updateCollection({ id, body }?: {
        id: string;
        body: UpdateCollection;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier of a collection.
     * @summary: Delete a Collection
     * @description: Delete a collection by it's id. Returns an object that tells whether the collection was deleted successfully
     */
    deleteCollection({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier of a collection.
     * @param {CollectionItemRequest} arg.body
     * @summary: Add items to a collection
     * @description: Adds items to a collection specified by its `id`. See `CollectionItemRequest` for the list of attributes needed to add items to an collection.
     */
    addCollectionItems({ id, body }?: {
        id: string;
        body: CollectionItemRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier of a collection.
     * @param {string} [arg.sortOn] - Each response will contain sort_on param,
     *   which should be sent back to make pagination work.
     * @param {string} [arg.pageId] - Each response will contain next_id param,
     *   which should be sent back to make pagination work.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @summary: Get the items for a collection
     * @description: Get items from a collection specified by its `id`.
     */
    getCollectionItems({ id, sortOn, pageId, pageSize }?: {
        id: string;
        sortOn?: string;
        pageId?: string;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.brand] - Brand slug
     * @summary: Analytics data of catalog and inventory.
     * @description: Catalog Insights api returns the count of catalog related data like products, brands, departments and categories that have been made live as per configuration of the app.
     */
    getCatalogInsights({ brand }?: {
        brand?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.itemId - Item code of the product of which size is to be get.
     * @param {string} arg.sizeIdentifier - Size Identifier (Seller Identifier
     *   or Primary Identifier) of which inventory is to get.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search with help of store code.
     * @param {number[]} [arg.locationIds] - Search by store ids.
     * @summary: Get Inventory for company
     * @description: This API allows get Inventory data for particular company grouped by size and store.
     */
    getDiscountedInventoryBySizeIdentifier({ itemId, sizeIdentifier, pageNo, pageSize, q, locationIds, }?: {
        itemId: number;
        sizeIdentifier: string;
        pageNo?: number;
        pageSize?: number;
        q?: string;
        locationIds?: number[];
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.department] - The name of the department. Use this
     *   parameter to filter products by a particular department. See below the
     *   list of available departments. You can retrieve available departments
     *   from the **v1.0/departments/** API
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @param {number[]} [arg.brandId] - Helps to sort the brands list on the
     *   basis of uid list.
     * @summary: List all the brands
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationBrands({ department, pageNo, pageSize, q, brandId }?: {
        department?: string;
        pageNo?: number;
        pageSize?: number;
        q?: string;
        brandId?: number[];
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {string} [arg.department] - The name of the department. Use this
     *   parameter to filter products by a particular department. See below the
     *   list of available departments. You can retrieve available departments
     *   from the **v1.0/departments/** API
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @param {number[]} [arg.brandId] - Helps to sort the brands list on the
     *   basis of uid list.
     * @summary: List all the brands
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationBrandsPaginator({ companyId, applicationId, department, pageSize, q, brandId, }?: {
        companyId: string;
        applicationId: string;
        department?: string;
        pageSize?: number;
        q?: string;
        brandId?: number[];
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @summary: List all the departments
     * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
     */
    getDepartments({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.department] - The name of the department. Use this
     *   parameter to filter products by a particular department. See below the
     *   list of available departments. You can retrieve available departments
     *   from the **v1.0/departments/** API
     * @summary: List all the categories
     * @description: List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`
     */
    getCategories({ department }?: {
        department?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.q] - The search query. This can be a partial or
     *   complete name of a either a product, brand or category
     * @param {string} [arg.f] - The search filter parameters. All the parameter
     *   filtered from filter parameters will be passed in **f** parameter in
     *   this format. **?f=brand:voi-jeans||and:::category:t-shirts||shirts**
     * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the
     *   filter details. This flag is used to fetch all filters
     * @param {string} [arg.sortOn] - The order to sort the list of products on.
     *   The supported sort parameters are popularity, price, redemption and
     *   discount in either ascending or descending order. See the supported
     *   values below.
     * @param {string} [arg.pageId] - Each response will contain **page_id**
     *   param, which should be sent back to make pagination work.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {number} [arg.pageNo] - If page_type is number then pass it to
     *   fetch page items. Default is 1.
     * @param {string} [arg.pageType] - For pagination type should be cursor or
     *   number. Default is cursor.
     * @param {number[]} [arg.itemIds] - Item Ids of product
     * @summary: List the products
     * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ApplicationProductListingResponse`
     */
    getAppicationProducts({ q, f, filters, sortOn, pageId, pageSize, pageNo, pageType, itemIds, }?: {
        q?: string;
        f?: string;
        filters?: boolean;
        sortOn?: string;
        pageId?: string;
        pageSize?: number;
        pageNo?: number;
        pageType?: string;
        itemIds?: number[];
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {string} [arg.q] - The search query. This can be a partial or
     *   complete name of a either a product, brand or category
     * @param {string} [arg.f] - The search filter parameters. All the parameter
     *   filtered from filter parameters will be passed in **f** parameter in
     *   this format. **?f=brand:voi-jeans||and:::category:t-shirts||shirts**
     * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the
     *   filter details. This flag is used to fetch all filters
     * @param {string} [arg.sortOn] - The order to sort the list of products on.
     *   The supported sort parameters are popularity, price, redemption and
     *   discount in either ascending or descending order. See the supported
     *   values below.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {number[]} [arg.itemIds] - Item Ids of product
     * @summary: List the products
     * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ApplicationProductListingResponse`
     */
    getAppicationProductsPaginator({ companyId, applicationId, q, f, filters, sortOn, pageSize, itemIds, }?: {
        companyId: string;
        applicationId: string;
        q?: string;
        f?: string;
        filters?: boolean;
        sortOn?: string;
        pageSize?: number;
        itemIds?: number[];
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - The unique identifier of a product. i.e;
     *   `slug` of a product. You can retrieve these from the APIs that list
     *   products like **v1.0/products/**
     * @summary: Get a product
     * @description: Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **slug**. If successful, returns a Product resource in the response body specified in `ProductDetail`
     */
    getProductDetailBySlug({ slug }?: {
        slug: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number[]} [arg.brandIds] - Get multiple products filtered by Brand Ids
     * @param {number[]} [arg.categoryIds] - Get multiple products filtered by
     *   Category Ids
     * @param {number[]} [arg.departmentIds] - Get multiple products filtered by
     *   Department Ids
     * @param {string[]} [arg.tags] - Get multiple products filtered by tags
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @param {string} [arg.q] - Search with Item Code, Name, Slug or Identifier.
     * @summary: Get applicationwise products
     * @description: Products are the core resource of an application. Products can be associated by categories, collections, brands and more. If successful, returns a Product resource in the response body specified in `ApplicationProductListingResponseDatabasePowered`
     */
    getAppProducts({ brandIds, categoryIds, departmentIds, tags, pageNo, pageSize, q, }?: {
        brandIds?: number[];
        categoryIds?: number[];
        departmentIds?: number[];
        tags?: string[];
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.storeType] - Helps to sort the location list on the
     *   basis of location type.
     * @param {number[]} [arg.uid] - Helps to sort the location list on the
     *   basis of uid list.
     * @param {string} [arg.q] - Query that is to be searched.
     * @param {string} [arg.stage] - To filter companies on basis of verified or
     *   unverified companies.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 20.
     * @summary: Get list of locations
     * @description: This API allows to view all the locations asscoiated to a application.
     */
    getAppLocations({ storeType, uid, q, stage, pageNo, pageSize }?: {
        storeType?: string;
        uid?: number[];
        q?: string;
        stage?: string;
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Id of the company whose locations are to fetched
     * @param {string} arg.applicationId - Id of the application whose locations
     *   are to fetched
     * @param {string} [arg.storeType] - Helps to sort the location list on the
     *   basis of location type.
     * @param {number[]} [arg.uid] - Helps to sort the location list on the
     *   basis of uid list.
     * @param {string} [arg.q] - Query that is to be searched.
     * @param {string} [arg.stage] - To filter companies on basis of verified or
     *   unverified companies.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 20.
     * @summary: Get list of locations
     * @description: This API allows to view all the locations asscoiated to a application.
     */
    getAppLocationsPaginator({ companyId, applicationId, storeType, uid, q, stage, pageSize, }?: {
        companyId: string;
        applicationId: string;
        storeType?: string;
        uid?: number[];
        q?: string;
        stage?: string;
        pageSize?: number;
    }): Paginator;
}
declare class FileStorage {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Bucket name
     * @param {StartRequest} arg.body
     * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
     * @description: Uploads an arbitrarily sized buffer or blob.
     *
     * It has three Major Steps:
     * Start
     * Upload
     * Complete
     *
     * ### Start
     * Initiates the assets upload using `appStartUpload`.
     * It returns the storage link in response.
     *
     * ### Upload
     * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
     * Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.
     *
     * ### Complete
     * After successfully upload, call `appCompleteUpload` api to complete the upload process.
     * This operation will return the url for the uploaded file.
     */
    appStartUpload({ namespace, body }?: {
        namespace: string;
        body: StartRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Bucket name
     * @param {StartResponse} arg.body
     * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
     * @description: Uploads an arbitrarily sized buffer or blob.
     *
     * It has three Major Steps:
     * Start
     * Upload
     * Complete
     *
     * ### Start
     * Initiates the assets upload using `appStartUpload`.
     * It returns the storage link in response.
     *
     * ### Upload
     * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
     * Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.
     *
     * ### Complete
     * After successfully upload, call `appCompleteUpload` api to complete the upload process.
     * This operation will return the url for the uploaded file.
     */
    appCompleteUpload({ namespace, body }?: {
        namespace: string;
        body: StartResponse;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.sync] - Sync
     * @param {BulkRequest} arg.body
     * @summary: Copy Files
     * @description: Copy Files
     */
    appCopyFiles({ body, sync }?: {
        sync?: boolean;
        body: BulkRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Bucket name
     * @param {number} [arg.pageNo] - Page no
     * @summary: Browse Files
     * @description: Browse Files
     */
    browse({ namespace, pageNo }?: {
        namespace: string;
        pageNo?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Bucket name
     * @param {number} arg.companyId - Company_id
     * @param {number} arg.applicationId - Application_id
     * @summary: Browse Files
     * @description: Browse Files
     */
    browsePaginator({ namespace, companyId, applicationId }?: {
        namespace: string;
        companyId: number;
        applicationId: number;
    }): Paginator;
}
declare class Share {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {ShortLinkReq} arg.body
     * @summary: Create short link
     * @description: Create short link
     */
    createShortLink({ body }?: {
        body: ShortLinkReq;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page number
     * @param {number} [arg.pageSize] - Current page size
     * @param {string} [arg.createdBy] - Short link creator
     * @param {string} [arg.active] - Short link active status
     * @param {string} [arg.q] - Search text for original and short url
     * @summary: Get short links
     * @description: Get short links
     */
    getShortLinks({ pageNo, pageSize, createdBy, active, q }?: {
        pageNo?: number;
        pageSize?: number;
        createdBy?: string;
        active?: string;
        q?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company Id
     * @param {string} arg.applicationId - Application Id
     * @param {number} [arg.pageSize] - Current page size
     * @param {string} [arg.createdBy] - Short link creator
     * @param {string} [arg.active] - Short link active status
     * @param {string} [arg.q] - Search text for original and short url
     * @summary: Get short links
     * @description: Get short links
     */
    getShortLinksPaginator({ companyId, applicationId, pageSize, createdBy, active, q, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        createdBy?: string;
        active?: string;
        q?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.hash - Hash of short url
     * @summary: Get short link by hash
     * @description: Get short link by hash
     */
    getShortLinkByHash({ hash }?: {
        hash: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Short link document identifier
     * @param {ShortLinkReq} arg.body
     * @summary: Update short link by id
     * @description: Update short link by id
     */
    updateShortLinkById({ id, body }?: {
        id: string;
        body: ShortLinkReq;
    }): globalThis.Promise<any>;
}
declare class Configuration {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.platformType - Current platform name
     * @summary: Get latest build config
     * @description: Get latest build config
     */
    getBuildConfig({ platformType }?: {
        platformType: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.platformType - Current platform name
     * @param {MobileAppConfigRequest} arg.body
     * @summary: Update build config for next build
     * @description: Update build config for next build
     */
    updateBuildConfig({ platformType, body }?: {
        platformType: string;
        body: MobileAppConfigRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.platformType - Current platform name
     * @summary: Get previous build versions
     * @description: Get previous build versions
     */
    getPreviousVersions({ platformType }?: {
        platformType: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get features of application
     * @description: Get features of application
     */
    getAppFeatures({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AppFeatureRequest} arg.body
     * @summary: Update features of application
     * @description: Update features of application
     */
    updateAppFeatures({ body }?: {
        body: AppFeatureRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get basic application details
     * @description: Get basic application details like name
     */
    getAppBasicDetails({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ApplicationDetail} arg.body
     * @summary: Add or update application's basic details
     * @description: Add or update application's basic details
     */
    updateAppBasicDetails({ body }?: {
        body: ApplicationDetail;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get application information
     * @description: Get Application Current Information. This includes information about social links, address and contact information of company/seller/brand of the application.
     */
    getAppContactInfo({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ApplicationInformation} arg.body
     * @summary: Get application information
     * @description: Save Application Current Information. This includes information about social links, address and contact information of an application.
     */
    updateAppContactInfo({ body }?: {
        body: ApplicationInformation;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get social tokens
     * @description: Get social tokens.
     */
    getAppApiTokens({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {TokenResponse} arg.body
     * @summary: Add social tokens
     * @description: Add social tokens.
     */
    updateAppApiTokens({ body }?: {
        body: TokenResponse;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.uid] - Uid of companies to be fetched
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @summary: Application inventory enabled companies
     * @description: Application inventory enabled companies.
     */
    getAppCompanies({ uid, pageNo, pageSize }?: {
        uid?: number;
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current application id
     * @param {number} [arg.uid] - Uid of companies to be fetched
     * @param {number} [arg.pageSize] - Current request items count
     * @summary: Application inventory enabled companies
     * @description: Application inventory enabled companies.
     */
    getAppCompaniesPaginator({ companyId, applicationId, uid, pageSize }?: {
        companyId: string;
        applicationId: string;
        uid?: number;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @summary: Application inventory enabled stores
     * @description: Application inventory enabled stores.
     */
    getAppStores({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current application id
     * @param {number} [arg.pageSize] - Current request items count
     * @summary: Application inventory enabled stores
     * @description: Application inventory enabled stores.
     */
    getAppStoresPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get application configuration
     * @description: Get application configuration for various features and data
     */
    getInventoryConfig({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ApplicationInventory} arg.body
     * @summary: Update application configuration
     * @description: Update application configuration for various features and data
     */
    updateInventoryConfig({ body }?: {
        body: ApplicationInventory;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AppInventoryPartialUpdate} arg.body
     * @summary: Partially update application configuration
     * @description: Partially update application configuration for various features and data
     */
    partiallyUpdateInventoryConfig({ body }?: {
        body: AppInventoryPartialUpdate;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get application enabled currency list
     * @description: Get application enabled currency list
     */
    getAppCurrencyConfig({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AppSupportedCurrency} arg.body
     * @summary: Add initial application supported currency
     * @description: Add initial application supported currency for various features and data. Default INR will be enabled.
     */
    updateAppCurrencyConfig({ body }?: {
        body: AppSupportedCurrency;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get currencies enabled in the application
     * @description: Use this API to get a list of currencies allowed in the current application. Moreover, get the name, code, symbol, and the decimal digits of the currencies.
     */
    getAppSupportedCurrency({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {FilterOrderingStoreRequest} arg.body
     * @summary: Get ordering store by filter
     * @description: Get ordering store by filter
     */
    getOrderingStoresByFilter({ body, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        body: FilterOrderingStoreRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {FilterOrderingStoreRequest} arg.body
     * @summary: Get ordering store by filter
     * @description: Get ordering store by filter
     */
    getOrderingStoresByFilterPaginator({ companyId, applicationId, pageSize, body, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        body: FilterOrderingStoreRequest;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {OrderingStoreConfig} arg.body
     * @summary: Add/Update ordering store config
     * @description: Add/Update ordering store config.
     */
    updateOrderingStoreConfig({ body }?: {
        body: OrderingStoreConfig;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {string} [arg.q] - Store code or name of the ordering store.
     * @summary: Get deployment stores
     * @description: Use this API to retrieve the details of all stores access given to the staff member (the selling locations where the application will be utilized for placing orders).
     */
    getStaffOrderingStores({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current application id
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {string} [arg.q] - Store code or name of the ordering store.
     * @summary: Get deployment stores
     * @description: Use this API to retrieve the details of all stores access given to the staff member (the selling locations where the application will be utilized for placing orders).
     */
    getStaffOrderingStoresPaginator({ companyId, applicationId, pageSize, q, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        q?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get attached domain list
     * @description: Get attached domain list.
     */
    getDomains({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DomainAddRequest} arg.body
     * @summary: Add new domain to application
     * @description: Add new domain to application.
     */
    addDomain({ body }?: {
        body: DomainAddRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Domain _id
     * @summary: Remove attached domain
     * @description: Remove attached domain.
     */
    removeDomainById({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateDomainTypeRequest} arg.body
     * @summary: Change domain type
     * @description: Change a domain to Primary or Shortlink domain
     */
    changeDomainType({ body }?: {
        body: UpdateDomainTypeRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DomainStatusRequest} arg.body
     * @summary: Get domain connected status.
     * @description: Get domain connected status. Check if domain is live and mapped to appropriate IP to fynd servers.
     */
    getDomainStatus({ body }?: {
        body: DomainStatusRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get application data from id
     * @description: Get application data from id
     */
    getApplicationById({}?: any): globalThis.Promise<any>;
}
declare class Cart {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {boolean} [arg.isArchived] -
     * @param {string} [arg.title] -
     * @param {boolean} [arg.isPublic] -
     * @param {boolean} [arg.isDisplay] -
     * @param {string} [arg.typeSlug] -
     * @param {string} [arg.code] -
     * @summary: Get with single coupon details or coupon list
     * @description: Get coupon list with pagination
     */
    getCoupons({ pageNo, pageSize, isArchived, title, isPublic, isDisplay, typeSlug, code, }?: {
        pageNo?: number;
        pageSize?: number;
        isArchived?: boolean;
        title?: string;
        isPublic?: boolean;
        isDisplay?: boolean;
        typeSlug?: string;
        code?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current Application _id
     * @param {number} [arg.pageSize] -
     * @param {boolean} [arg.isArchived] -
     * @param {string} [arg.title] -
     * @param {boolean} [arg.isPublic] -
     * @param {boolean} [arg.isDisplay] -
     * @param {string} [arg.typeSlug] -
     * @param {string} [arg.code] -
     * @summary: Get with single coupon details or coupon list
     * @description: Get coupon list with pagination
     */
    getCouponsPaginator({ companyId, applicationId, pageSize, isArchived, title, isPublic, isDisplay, typeSlug, code, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        isArchived?: boolean;
        title?: string;
        isPublic?: boolean;
        isDisplay?: boolean;
        typeSlug?: string;
        code?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {CouponAdd} arg.body
     * @summary: Create new coupon
     * @description: Create new coupon
     */
    createCoupon({ body }?: {
        body: CouponAdd;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @summary: Get with single coupon details or coupon list
     * @description: Get single coupon details with `id` in path param
     */
    getCouponById({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @param {CouponUpdate} arg.body
     * @summary: Update existing coupon configuration
     * @description: Update coupon with id sent in `id`
     */
    updateCoupon({ id, body }?: {
        id: string;
        body: CouponUpdate;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @param {CouponPartialUpdate} arg.body
     * @summary: Update coupon archive state and schedule
     * @description: Update archive/unarchive and change schedule for coupon
     */
    updateCouponPartially({ id, body }?: {
        id: string;
        body: CouponPartialUpdate;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.q] -
     * @param {boolean} [arg.isActive] -
     * @param {string} [arg.promoGroup] -
     * @param {string} [arg.promotionType] -
     * @param {string} [arg.fpPanel] -
     * @param {string} [arg.promotionId] -
     * @summary: Get promotion list
     * @description: Get promotion list with pagination
     */
    getPromotions({ pageNo, pageSize, q, isActive, promoGroup, promotionType, fpPanel, promotionId, }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
        isActive?: boolean;
        promoGroup?: string;
        promotionType?: string;
        fpPanel?: string;
        promotionId?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current Application _id
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.q] -
     * @param {boolean} [arg.isActive] -
     * @param {string} [arg.promoGroup] -
     * @param {string} [arg.promotionType] -
     * @param {string} [arg.fpPanel] -
     * @param {string} [arg.promotionId] -
     * @summary: Get promotion list
     * @description: Get promotion list with pagination
     */
    getPromotionsPaginator({ companyId, applicationId, pageSize, q, isActive, promoGroup, promotionType, fpPanel, promotionId, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        q?: string;
        isActive?: boolean;
        promoGroup?: string;
        promotionType?: string;
        fpPanel?: string;
        promotionId?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {PromotionAdd} arg.body
     * @summary: Create new promotion
     * @description: Create new promotion
     */
    createPromotion({ body }?: {
        body: PromotionAdd;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @summary: Get with single promotion details or promotion list
     * @description: Get single promotion details with `id` in path param
     */
    getPromotionById({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @param {PromotionUpdate} arg.body
     * @summary: Update existing promotion configuration
     * @description: Update promotion with id sent in `id`
     */
    updatePromotion({ id, body }?: {
        id: string;
        body: PromotionUpdate;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @param {PromotionPartialUpdate} arg.body
     * @summary: Update promotion publish state and schedule
     * @description: Update publish/unpublish and change schedule for promotion
     */
    updatePromotionPartially({ id, body }?: {
        id: string;
        body: PromotionPartialUpdate;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OpenapiCartDetailsRequest} arg.body
     * @summary: Fetch Cart Details
     * @description: Get all the details of cart for a list of provided `cart_items`
     */
    fetchAndvalidateCartItems({ body }?: {
        body: OpenapiCartDetailsRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OpenApiCartServiceabilityRequest} arg.body
     * @summary: Check Pincode Serviceability
     * @description: Check Pincode serviceability for cart items provided in `cart_items` and address pincode in `shipping_address`
     */
    checkCartServiceability({ body }?: {
        body: OpenApiCartServiceabilityRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OpenApiPlatformCheckoutReq} arg.body
     * @summary: Create Fynd order with cart details
     * @description: Generate Fynd order for cart details send with provided `cart_items`
     */
    checkoutCart({ body }?: {
        body: OpenApiPlatformCheckoutReq;
    }): globalThis.Promise<any>;
}
declare class Rewards {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.pageId] - Pagination page id
     * @param {number} [arg.pageSize] - Pagination page size
     * @summary: List of giveaways of the current application.
     * @description: List of giveaways of the current application.
     */
    getGiveaways({ pageId, pageSize }?: {
        pageId?: string;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Pagination page size
     * @summary: List of giveaways of the current application.
     * @description: List of giveaways of the current application.
     */
    getGiveawaysPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {Giveaway} arg.body
     * @summary: Adds a new giveaway.
     * @description: Adds a new giveaway.
     */
    createGiveaway({ body }?: {
        body: Giveaway;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Giveaway ID
     * @summary: Get giveaway by ID.
     * @description: Get giveaway by ID.
     */
    getGiveawayByID({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Giveaway ID
     * @param {Giveaway} arg.body
     * @summary: Updates the giveaway by it's ID.
     * @description: Updates the giveaway by it's ID.
     */
    updateGiveaway({ id, body }?: {
        id: string;
        body: Giveaway;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: List of offer of the current application.
     * @description: List of offer of the current application.
     */
    getOffers({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.cookie - User's session cookie. This cookie is set in
     *   browser cookie when logged-in to fynd's authentication system i.e.
     *   `Grimlock` or by using grimlock-backend SDK for backend implementation.
     * @param {string} arg.name - Offer name
     * @summary: Get offer by name.
     * @description: Get offer by name.
     */
    getOfferByName({ cookie, name }?: {
        cookie: string;
        name: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.name - Offer name
     * @param {Offer} arg.body
     * @summary: Updates the offer by name.
     * @description: Updates the offer by name.
     */
    updateOfferByName({ name, body }?: {
        name: string;
        body: Offer;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userId - User id
     * @summary: User's reward details.
     * @description: User's reward details.
     */
    getUserAvailablePoints({ userId }?: {
        userId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userId - User id
     * @param {AppUser} arg.body
     * @summary: Update User status
     * @description: Update user status, active/archive
     */
    updateUserStatus({ userId, body }?: {
        userId: string;
        body: AppUser;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userId - User id
     * @param {string} [arg.pageId] - PageID is the ID of the requested page.
     *   For first request it should be kept empty.
     * @param {number} [arg.pageLimit] - PageLimit is the number of requested
     *   items in response.
     * @param {number} [arg.pageSize] - PageSize is the number of requested
     *   items in response.
     * @summary: Get list of points transactions.
     * @description: Get list of points transactions.
     * The list of points history is paginated.
     */
    getUserPointsHistory({ userId, pageId, pageLimit, pageSize }?: {
        userId: string;
        pageId?: string;
        pageLimit?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {string} arg.userId - User id
     * @param {number} [arg.pageSize] - PageSize is the number of requested
     *   items in response.
     * @summary: Get list of points transactions.
     * @description: Get list of points transactions.
     * The list of points history is paginated.
     */
    getUserPointsHistoryPaginator({ companyId, applicationId, userId, pageSize, }?: {
        companyId: string;
        applicationId: string;
        userId: string;
        pageSize?: number;
    }): Paginator;
}
declare class Analytics {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get statistics groups
     * @description: Get statistics groups
     */
    getStatiscticsGroups({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.groupName - Group name
     * @summary: Get statistics group components
     * @description: Get statistics group components
     */
    getStatiscticsGroupComponents({ groupName }?: {
        groupName: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.componentName - Component name
     * @summary: Get component statistics csv
     * @description: Get component statistics csv
     */
    getComponentStatsCSV({ componentName }?: {
        componentName: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.componentName - Component name
     * @summary: Get component statistics pdf
     * @description: Get component statistics pdf
     */
    getComponentStatsPDF({ componentName }?: {
        componentName: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.componentName - Component name
     * @summary: Get component statistics
     * @description: Get component statistics
     */
    getComponentStats({ componentName }?: {
        componentName: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.fromDate - From date
     * @param {string} arg.toDate - To date
     * @param {number} [arg.pageNo] - Current page number
     * @param {number} [arg.pageSize] - Current page size
     * @summary: Get abandon carts list
     * @description: Get abandon carts list
     */
    getAbandonCartList({ fromDate, toDate, pageNo, pageSize }?: {
        fromDate: string;
        toDate: string;
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company Id
     * @param {string} arg.applicationId - Application Id
     * @param {string} arg.fromDate - From date
     * @param {string} arg.toDate - To date
     * @param {number} [arg.pageSize] - Current page size
     * @summary: Get abandon carts list
     * @description: Get abandon carts list
     */
    getAbandonCartListPaginator({ companyId, applicationId, fromDate, toDate, pageSize, }?: {
        companyId: string;
        applicationId: string;
        fromDate: string;
        toDate: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.fromDate - From date
     * @param {string} arg.toDate - To date
     * @summary: Get abandon carts csv
     * @description: Get abandon carts csv
     */
    getAbandonCartsCSV({ fromDate, toDate }?: {
        fromDate: string;
        toDate: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.cartId - Cart Id
     * @summary: Get abandon carts details
     * @description: Get abandon cart details
     */
    getAbandonCartDetail({ cartId }?: {
        cartId: string;
    }): globalThis.Promise<any>;
}
declare class Partner {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.extensionId - Extension id
     * @param {AddProxyReq} arg.body
     * @summary: Add proxy path for external url
     * @description: Add proxy path for external url
     */
    addProxyPath({ extensionId, body }?: {
        extensionId: string;
        body: AddProxyReq;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.extensionId - Extension id
     * @param {string} arg.attachedPath - Attachaed path slug
     * @summary: Remove proxy path for external url
     * @description: Remove proxy path for external url
     */
    removeProxyPath({ extensionId, attachedPath }?: {
        extensionId: string;
        attachedPath: string;
    }): globalThis.Promise<any>;
}
type ApplicationResponse = {
    application?: Application;
};
type Currency = {
    _id?: string;
    is_active?: boolean;
    name?: string;
    code?: string;
    created_at?: string;
    updated_at?: string;
    decimal_digits?: number;
    symbol?: string;
};
type Domain = {
    verified?: boolean;
    is_primary?: boolean;
    is_shortlink?: boolean;
    _id?: string;
    name?: string;
};
type ApplicationWebsite = {
    enabled?: boolean;
    basepath?: string;
};
type ApplicationCors = {
    domains?: string[];
};
type ApplicationAuth = {
    enabled?: boolean;
};
type ApplicationRedirections = {
    redirect_from?: string;
    redirect_to?: string;
    type?: string;
};
type ApplicationMeta = {
    name?: string;
    value?: string;
};
type SecureUrl = {
    secure_url?: string;
};
type Application = {
    website?: ApplicationWebsite;
    cors?: ApplicationCors;
    auth?: ApplicationAuth;
    description?: string;
    channel_type?: string;
    cache_ttl?: number;
    is_internal?: boolean;
    is_active?: boolean;
    _id?: string;
    name?: string;
    owner?: string;
    company_id?: number;
    token?: string;
    redirections?: ApplicationRedirections[];
    meta?: ApplicationMeta[];
    created_at?: string;
    updated_at?: string;
    __v?: number;
    banner?: SecureUrl;
    logo?: SecureUrl;
    favicon?: SecureUrl;
    domains?: Domain[];
    app_type?: string;
    mobile_logo?: SecureUrl;
    domain?: Domain;
};
type NotFound = {
    message?: string;
};
type BadRequest = {
    message?: string;
};
type LocationDefaultLanguage = {
    name?: string;
    code?: string;
};
type LocationDefaultCurrency = {
    name?: string;
    symbol?: string;
    code?: string;
};
type LocationCountry = {
    capital?: string;
    currency?: string;
    iso2?: string;
    iso3?: string;
    name?: string;
    parent?: string;
    phone_code?: string;
    type?: string;
    uid?: number;
    __v?: number;
    _id?: string;
    default_currency?: LocationDefaultCurrency;
    default_language?: LocationDefaultLanguage;
};
type Locations = {
    items?: any[];
};
type TicketList = {
    items?: Ticket[];
    filters?: Filter;
    page?: Page;
};
type Page = {
    item_total?: number;
    next_id?: string;
    has_previous?: boolean;
    has_next?: boolean;
    current?: number;
    type: string;
    size?: number;
};
type TicketHistoryList = {
    items?: TicketHistory[];
    page?: Page;
};
type CustomFormList = {
    items?: CustomForm[];
    page?: Page;
};
type CreateCustomFormPayload = {
    slug: string;
    title: string;
    inputs: any[];
    description?: string;
    header_image?: string;
    priority: any;
    should_notify?: boolean;
    success_message?: string;
    poll_for_assignment?: PollForAssignment;
};
type EditCustomFormPayload = {
    title: string;
    inputs: any[];
    description?: string;
    priority: any;
    header_image?: string;
    should_notify?: boolean;
    login_required?: boolean;
    success_message?: string;
    poll_for_assignment?: PollForAssignment;
};
type EditTicketPayload = {
    content?: TicketContent;
    category?: string;
    sub_category?: string;
    source?: string;
    status?: string;
    priority?: any;
    assigned_to?: AgentChangePayload;
    tags?: string[];
};
type AgentChangePayload = {
    agent_id: string;
};
type CreateVideoRoomResponse = {
    unique_name: string;
};
type CloseVideoRoomResponse = {
    success: boolean;
};
type CreateVideoRoomPayload = {
    unique_name: string;
    notify?: NotifyUser[];
};
type NotifyUser = {
    country_code: string;
    phone_number: string;
};
type Filter = {
    priorities: Priority[];
    categories?: TicketCategory[];
    statuses: Status[];
    assignees: any[];
};
type TicketHistoryPayload = {
    value: any;
    type: any;
};
type CustomFormSubmissionPayload = {
    response: any[];
    attachments?: TicketAsset[];
};
type GetTokenForVideoRoomResponse = {
    access_token: string;
};
type GetParticipantsInsideVideoRoomResponse = {
    participants: Participant[];
};
type Participant = {
    user?: UserSchema;
    identity?: string;
    status?: string;
};
type Email = {
    primary?: boolean;
    verified?: boolean;
    email?: string;
    active?: boolean;
};
type Debug = {
    source?: string;
    platform?: string;
};
type SubmitCustomFormResponse = {
    message: string;
    ticket: Ticket;
};
type TicketContext = {
    application_id?: string;
    company_id: string;
};
type CreatedOn = {
    user_agent: string;
};
type TicketAsset = {
    display?: string;
    value: string;
    type: any;
};
type TicketContent = {
    title: string;
    description?: string;
    attachments?: TicketAsset[];
};
type AddTicketPayload = {
    created_by?: any;
    status?: string;
    priority?: any;
    category: string;
    content: TicketContent;
};
type Priority = {
    key: any;
    display: string;
    color: string;
};
type Status = {
    key: string;
    display: string;
    color: string;
};
type TicketCategory = {
    key: string;
    display: string;
    form?: CustomForm;
    sub_categories?: TicketSubCategory[];
    feedback_form?: TicketFeedbackForm;
};
type TicketSubCategory = {
    key: string;
    display: string;
};
type TicketFeedbackForm = {
    title: string;
    display?: any[];
};
type TicketFeedbackList = {
    items?: TicketFeedback[];
};
type TicketFeedbackPayload = {
    form_response?: any;
};
type SubmitButton = {
    title: string;
    title_color: string;
    background_color: string;
};
type PollForAssignment = {
    duration: number;
    message: string;
    success_message: string;
    failure_message: string;
};
type CustomForm = {
    application_id: string;
    slug: string;
    header_image?: string;
    title: string;
    description?: string;
    priority: Priority;
    login_required: boolean;
    should_notify: boolean;
    success_message?: string;
    submit_button?: SubmitButton;
    inputs: any[];
    created_on?: CreatedOn;
    poll_for_assignment?: PollForAssignment;
    _id: string;
};
type FeedbackResponseItem = {
    display: string;
    key: string;
    value: string;
};
type TicketFeedback = {
    _id: string;
    ticket_id: string;
    company_id: string;
    response: FeedbackResponseItem[];
    category?: string;
    user?: any;
    updated_at?: string;
    created_at?: string;
};
type TicketHistory = {
    type: string;
    value: any;
    ticket_id: string;
    created_on?: CreatedOn;
    created_by?: any;
    _id: string;
    updated_at?: string;
    created_at?: string;
};
type Ticket = {
    context?: TicketContext;
    created_on?: CreatedOn;
    response_id?: string;
    content?: TicketContent;
    ticket_id: string;
    category: TicketCategory;
    sub_category?: TicketSubCategory;
    source: any;
    status: Status;
    priority: Priority;
    created_by?: any;
    assigned_to?: any;
    tags?: string[];
    _custom_json?: any;
    is_feedback_pending?: boolean;
    _id: string;
    updated_at?: string;
    created_at?: string;
};
type Activity = {
    current_state?: any;
    document_id?: string;
    previous_state?: any;
};
type ActivityDump = {
    activity?: Activity;
    created_by?: CreatedBy;
    date_meta?: DateMeta;
    id?: string;
    type?: string;
};
type AddMediaListRequest = {
    entity_id?: string;
    entity_type?: string;
    media_list?: AddMediaRequest[];
    ref_id?: string;
    ref_type?: string;
};
type AddMediaRequest = {
    cloud_id?: string;
    cloud_name?: string;
    cloud_provider?: string;
    entity_id?: string;
    entity_type?: string;
    media_url?: string;
    ref_id?: string;
    ref_type?: string;
    tags?: string[];
    thumbnail_url?: string;
    type?: string;
};
type ApproveRequest = {
    approve?: boolean;
    entity_type?: string;
    id: string;
    reason?: string;
};
type Attribute = {
    date_meta?: DateMeta;
    description?: string;
    id?: string;
    name?: string;
    slug?: string;
    tags?: TagMeta[];
};
type AttributeObject = {
    description?: string;
    name: string;
    slug?: string;
    title?: string;
    type: string;
    value: number;
};
type CreatedBy = {
    id?: string;
    name?: string;
    tags?: TagMeta[];
};
type CursorGetResponse = {
    items?: any[];
    page?: Page;
};
type DateMeta = {
    created_on?: string;
    modified_on?: string;
};
type DeviceMeta = {
    app_version?: string;
    platform?: string;
};
type Entity = {
    id?: string;
    type?: string;
};
type EntityRequest = {
    entity_id?: string;
    entity_type?: string;
};
type FeedbackAttributes = {
    items?: Attribute[];
    page?: Page;
};
type FeedbackError = {
    code?: any;
    exception?: string;
    info?: string;
    message?: string;
    meta?: any;
    request_id?: string;
    stack_trace?: string;
    status?: number;
};
type FeedbackState = {
    active?: boolean;
    archive?: boolean;
    media?: string;
    qna?: boolean;
    rating?: boolean;
    review?: boolean;
};
type GetResponse = {
    data?: any;
    page?: Page;
};
type GetReviewResponse = {
    facets?: ReviewFacet[];
    items?: any[];
    page?: Page;
    sort?: SortMethod[];
};
type InsertResponse = {
    count?: number;
};
type MediaMeta = {
    max_count?: number;
    size?: number;
    type?: string;
};
type MediaMetaRequest = {
    max_count: number;
    size: number;
};
type NumberGetResponse = {
    items?: any[];
    page?: Page;
};
type PageCursor = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size: number;
    type: string;
};
type PageNumber = {
    current?: number;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    type?: string;
};
type Rating = {
    attributes?: Attribute[];
    attributes_slugs?: string[];
    ui?: UI;
};
type RatingRequest = {
    attributes: string[];
    ui?: UI;
};
type ReportAbuseRequest = {
    description?: string;
    entity_id: string;
    entity_type: string;
};
type Review = {
    description?: string;
    header?: string;
    image_meta?: MediaMeta;
    title?: string;
    video_meta?: MediaMeta;
    vote_allowed?: boolean;
};
type ReviewFacet = {
    display?: string;
    name?: string;
    selected?: boolean;
    slug?: string;
    type?: string;
};
type ReviewRequest = {
    description: string;
    header: string;
    image_meta: MediaMetaRequest;
    is_vote_allowed: boolean;
    title: string;
    video_meta: MediaMetaRequest;
};
type SaveAttributeRequest = {
    description?: string;
    name: string;
    slug: string;
};
type SortMethod = {
    name?: string;
    selected?: boolean;
    type?: string;
};
type TagMeta = {
    media?: MediaMeta[];
    name?: string;
    type?: string;
};
type Template = {
    date_meta?: DateMeta;
    entity?: Entity;
    id?: string;
    name?: string;
    rating?: Rating;
    review?: Review;
    state?: FeedbackState;
    tags?: TagMeta[];
};
type TemplateGetResponse = {
    items?: Template[];
    page?: Page;
};
type TemplateRequest = {
    active: boolean;
    enable_media_type?: string;
    enable_qna?: boolean;
    enable_rating: boolean;
    enable_review: boolean;
    entity: EntityRequest;
    rating: RatingRequest;
    review: ReviewRequest;
};
type TemplateRequestList = {
    template_list: TemplateRequest[];
};
type UI = {
    feedback_question?: string[];
    icon?: UIIcon;
    text?: string[];
    type?: string;
};
type UIIcon = {
    active?: string;
    inactive?: string;
    selected?: string[];
};
type UpdateAttributeRequest = {
    description?: string;
    name: string;
    slug?: string;
};
type UpdateResponse = {
    count?: number;
};
type UpdateReviewRequest = {
    active?: boolean;
    application?: string;
    approve?: boolean;
    archive?: boolean;
    attributes_rating?: AttributeObject[];
    description?: string;
    device_meta?: DeviceMeta;
    entity_id?: string;
    entity_type?: string;
    media_resource?: MediaMeta[];
    rating?: number;
    review_id?: string;
    template_id?: string;
    title?: string;
};
type UpdateTemplateRequest = {
    active: boolean;
    enable_media_type?: string;
    enable_qna?: boolean;
    enable_rating: boolean;
    enable_review: boolean;
    entity: EntityRequest;
    rating: RatingRequest;
    review: ReviewRequest;
};
type UpdateTemplateStatusRequest = {
    active?: boolean;
    archive?: boolean;
};
type AvailablePageSchema = {
    value?: string;
    text?: string;
    path?: string;
    type?: string;
    sections?: AvailablePageSchemaSections[];
    sections_meta?: AvailablePageSectionMetaAttributes[];
    theme?: string;
    seo?: AvailablePageSeo;
    props?: any[];
    _id?: string;
};
type AvailablePageSectionMetaAttributes = {
    attributes?: any;
};
type AvailablePageSeo = {
    title?: string;
    description?: string;
    _id?: string;
};
type AvailablePageSchemaSections = {
    name?: string;
    label?: string;
    props?: any;
    blocks?: any[];
    preset?: any;
    predicate?: AvailablePagePredicate;
};
type AvailablePageScreenPredicate = {
    mobile?: boolean;
    desktop?: boolean;
    tablet?: boolean;
};
type AvailablePageUserPredicate = {
    authenticated?: boolean;
    anonymous?: boolean;
};
type AvailablePageRoutePredicate = {
    selected?: string;
    exact_url?: string;
    query?: any;
};
type AvailablePagePredicate = {
    screen?: AvailablePageScreenPredicate;
    user?: AvailablePageUserPredicate;
    route?: AvailablePageRoutePredicate;
};
type AllAvailablePageSchema = {
    pages?: AvailablePageSchema[];
};
type PaginationSchema = {
    size?: number;
    item_total?: number;
    has_next?: boolean;
    type?: string;
    current?: number;
};
type ThemesListingResponseSchema = {
    items?: ThemesSchema[];
    page?: PaginationSchema;
};
type AddThemeRequestSchema = {
    theme_id?: string;
};
type UpgradableThemeSchema = {
    parent_theme?: string;
    applied_theme?: string;
    upgrade?: boolean;
};
type FontsSchema = {
    items?: FontsSchemaItems;
    kind?: string;
};
type BlitzkriegApiErrorSchema = {
    message?: string;
};
type BlitzkriegNotFoundSchema = {
    message?: string;
};
type BlitzkriegInternalServerErrorSchema = {
    message?: string;
};
type FontsSchemaItems = {
    family?: string;
    variants?: string[];
    subsets?: string[];
    version?: string;
    last_modified?: string;
    files?: FontsSchemaItemsFiles;
    category?: string;
    kind?: string;
};
type FontsSchemaItemsFiles = {
    regular?: string;
    italic?: string;
    bold?: string;
};
type ThemesSchema = {
    application?: string;
    applied?: boolean;
    customized?: boolean;
    published?: boolean;
    archived?: boolean;
    created_at?: string;
    updated_at?: string;
    version?: string;
    parent_theme_version?: string;
    parent_theme?: string;
    information?: Information;
    tags?: string[];
    src?: Src;
    assets?: AssetsSchema;
    available_sections?: availableSectionSchema[];
    styles?: any;
    config?: Config;
    font?: Font;
    _id?: string;
    __v?: number;
    colors?: Colors;
};
type availableSectionSchema = {
    blocks?: Blocks[];
    name?: string;
    label?: string;
    props?: BlocksProps[];
};
type Information = {
    images?: Images;
    features?: string[];
    name?: string;
    description?: string;
};
type Images = {
    desktop?: string[];
    android?: string[];
    ios?: string[];
    thumbnail?: string[];
};
type Src = {
    link?: string;
};
type AssetsSchema = {
    umd_js?: UmdJs;
    common_js?: CommonJs;
    css?: Css;
};
type UmdJs = {
    link?: string;
    links?: string[];
};
type CommonJs = {
    link?: string;
};
type Css = {
    link?: string;
    links?: string[];
};
type Sections = {
    attributes?: string;
};
type Config = {
    preset?: Preset;
    global_schema?: GlobalSchema;
    current?: string;
    list?: ListSchemaItem[];
};
type Preset = {
    pages?: AvailablePageSchema[];
};
type GlobalSchema = {
    props?: GlobalSchemaProps[];
};
type ListSchemaItem = {
    global_config?: any;
    page?: ConfigPage[];
    name?: string;
};
type Colors = {
    bg_color?: string;
    primary_color?: string;
    secondary_color?: string;
    accent_color?: string;
    link_color?: string;
    button_secondary_color?: string;
};
type Custom = {
    props?: any;
};
type ConfigPage = {
    settings?: any;
    page?: string;
};
type Font = {
    family?: string;
    variants?: Variants;
};
type Variants = {
    medium?: Medium;
    semi_bold?: SemiBold;
    bold?: Bold;
    light?: Light;
    regular?: Regular;
};
type Medium = {
    name?: string;
    file?: string;
};
type SemiBold = {
    name?: string;
    file?: string;
};
type Bold = {
    name?: string;
    file?: string;
};
type Light = {
    name?: string;
    file?: string;
};
type Regular = {
    name?: string;
    file?: string;
};
type Blocks = {
    type?: string;
    name?: string;
    props?: BlocksProps[];
};
type GlobalSchemaProps = {
    id?: string;
    label?: string;
    type?: string;
    category?: string;
};
type BlocksProps = {
    id?: string;
    label?: string;
    type?: string;
};
type EditEmailRequestSchema = {
    email?: string;
};
type SendVerificationLinkMobileRequestSchema = {
    verified?: boolean;
    active?: boolean;
    country_code?: string;
    phone?: string;
    primary?: boolean;
};
type EditMobileRequestSchema = {
    country_code?: string;
    phone?: string;
};
type EditProfileRequestSchema = {
    first_name?: string;
    last_name?: string;
    mobile?: EditProfileMobileSchema;
    country_code?: string;
    email?: string;
    gender?: string;
    dob?: string;
    profile_pic_url?: string;
    android_hash?: string;
    sender?: string;
    register_token?: string;
};
type EditProfileMobileSchema = {
    phone?: string;
    country_code?: string;
};
type SendEmailOtpRequestSchema = {
    email?: string;
    action?: string;
    token?: string;
    register_token?: string;
};
type VerifyEmailOtpRequestSchema = {
    email?: string;
    action?: string;
    register_token?: string;
    otp?: string;
};
type VerifyOtpRequestSchema = {
    request_id?: string;
    register_token?: string;
    otp?: string;
};
type SendMobileOtpRequestSchema = {
    mobile?: string;
    country_code?: string;
    action?: string;
    token?: string;
    android_hash?: string;
    force?: string;
    captcha_code?: string;
};
type UpdatePasswordRequestSchema = {
    old_password?: string;
    new_password?: string;
};
type FormRegisterRequestSchema = {
    first_name?: string;
    last_name?: string;
    gender?: string;
    email?: string;
    password?: string;
    phone?: FormRegisterRequestSchemaPhone;
    register_token?: string;
};
type TokenRequestBodySchema = {
    token?: string;
};
type ForgotPasswordRequestSchema = {
    code?: string;
    password?: string;
};
type CodeRequestBodySchema = {
    code?: string;
};
type SendResetPasswordEmailRequestSchema = {
    email?: string;
    captcha_code?: string;
};
type PasswordLoginRequestSchema = {
    captcha_code?: string;
    password?: string;
    username?: string;
};
type SendOtpRequestSchema = {
    country_code?: string;
    captcha_code?: string;
    mobile?: string;
};
type OAuthRequestSchema = {
    is_signed_in?: boolean;
    oauth2?: OAuthRequestSchemaOauth2;
    profile?: OAuthRequestSchemaProfile;
};
type OAuthRequestAppleSchema = {
    user_identifier?: string;
    oauth?: OAuthRequestAppleSchemaOauth;
    profile?: OAuthRequestAppleSchemaProfile;
};
type UserObjectSchema = {
    user?: UserSchema;
};
type AuthSuccess = {
    register_token?: string;
    user_exists?: boolean;
    user?: UserSchema;
};
type SendOtpResponse = {
    resend_timer?: number;
    resend_token?: string;
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
    email?: string;
    resend_email_token?: string;
    register_token?: string;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
    user_exists?: boolean;
};
type ProfileEditSuccess = {
    user?: UserSchema;
    resend_email_token?: string;
    register_token?: string;
    user_exists?: boolean;
    verify_email_link?: boolean;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
    email?: string;
    request_id?: string;
    country_code?: string;
    mobile?: string;
    success?: boolean;
    message?: string;
    resend_timer?: number;
    resend_token?: string;
};
type LoginSuccess = {
    user?: UserSchema;
    request_id?: string;
    register_token?: string;
};
type VerifyOtpSuccess = {
    user?: UserSchema;
    user_exists?: boolean;
    register_token?: string;
};
type ResetPasswordSuccess = {
    status?: string;
};
type RegisterFormSuccess = {
    email?: string;
    resend_timer?: number;
    resend_token?: string;
    resend_email_token?: string;
    register_token?: string;
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
    user_exists?: boolean;
};
type VerifyEmailSuccess = {
    message?: string;
};
type HasPasswordSuccess = {
    result?: boolean;
};
type LogoutSuccess = {
    logout?: boolean;
};
type OtpSuccess = {
    resend_timer?: number;
    resend_token?: string;
    register_token?: string;
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
};
type EmailOtpSuccess = {
    success?: boolean;
};
type SessionListSuccess = {
    sessions?: string[];
};
type VerifyMobileOTPSuccess = {
    user?: UserSchema;
    verify_mobile_link?: boolean;
};
type VerifyEmailOTPSuccess = {
    user?: UserSchema;
    verify_email_link?: boolean;
};
type SendMobileVerifyLinkSuccess = {
    verify_mobile_link?: boolean;
};
type SendEmailVerifyLinkSuccess = {
    verify_email_link?: boolean;
};
type UserSearchResponseSchema = {
    users?: UserSchema[];
};
type CustomerListResponseSchema = {
    items?: UserSchema[];
    page?: PaginationSchema;
};
type UnauthorizedSchema = {
    message?: string;
};
type UnauthenticatedSchema = {
    authenticated?: boolean;
};
type NotFoundSchema = {
    message?: string;
};
type AuthenticationInternalServerErrorSchema = {
    message?: string;
};
type AuthenticationApiErrorSchema = {
    message?: string;
};
type ProfileEditSuccessSchema = {
    email?: string;
    verify_email_otp?: boolean;
    verify_email_link?: boolean;
    verify_mobile_otp?: boolean;
    user?: string;
    register_token?: string;
    user_exists?: boolean;
};
type FormRegisterRequestSchemaPhone = {
    country_code?: string;
    mobile?: string;
};
type OAuthRequestSchemaOauth2 = {
    access_token?: string;
    expiry?: number;
    refresh_token?: string;
};
type OAuthRequestSchemaProfile = {
    last_name?: string;
    image?: string;
    id?: string;
    email?: string;
    full_name?: string;
    first_name?: string;
};
type OAuthRequestAppleSchemaOauth = {
    identity_token?: string;
};
type OAuthRequestAppleSchemaProfile = {
    last_name?: string;
    full_name?: string;
    first_name?: string;
};
type AuthSuccessUser = {
    first_name?: string;
    last_name?: string;
    debug?: AuthSuccessUserDebug;
    active?: boolean;
    emails?: AuthSuccessUserEmails;
};
type AuthSuccessUserDebug = {
    platform?: string;
};
type AuthSuccessUserEmails = {
    email?: string;
    verified?: boolean;
    primary?: boolean;
    active?: boolean;
};
type CreateUserRequestSchema = {
    phone_number: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    gender?: string;
    username: string;
    meta?: any;
};
type CreateUserResponseSchema = {
    user?: UserSchema;
};
type CreateUserSessionRequestSchema = {
    domain?: string;
    max_age?: number;
    user_id?: string;
};
type CreateUserSessionResponseSchema = {
    domain?: string;
    max_age?: number;
    secure?: boolean;
    http_only?: boolean;
    cookie?: any;
};
type PlatformSchema = {
    display?: string;
    look_and_feel?: LookAndFeel;
    updated_at?: string;
    active?: boolean;
    forgot_password?: boolean;
    login?: Login;
    skip_captcha?: boolean;
    name?: string;
    meta?: MetaSchema;
    _id?: string;
    social?: Social;
    required_fields?: RequiredFields;
    register_required_fields?: RegisterRequiredFields;
    skip_login?: boolean;
    flash_card?: FlashCard;
    subtext?: string;
    social_tokens?: SocialTokens;
    created_at?: string;
    register?: boolean;
    mobile_image?: string;
    desktop_image?: string;
};
type LookAndFeel = {
    card_position?: string;
    background_color?: string;
};
type Login = {
    password?: boolean;
    otp?: boolean;
};
type MetaSchema = {
    fynd_default?: boolean;
};
type Social = {
    account_kit?: boolean;
    facebook?: boolean;
    google?: boolean;
    apple?: boolean;
};
type RequiredFields = {
    email?: PlatformEmail;
    mobile?: PlatformMobile;
};
type PlatformEmail = {
    is_required?: boolean;
    level?: string;
};
type PlatformMobile = {
    is_required?: boolean;
    level?: string;
};
type RegisterRequiredFields = {
    email?: RegisterRequiredFieldsEmail;
    mobile?: RegisterRequiredFieldsMobile;
};
type RegisterRequiredFieldsEmail = {
    is_required?: boolean;
    level?: string;
};
type RegisterRequiredFieldsMobile = {
    is_required?: boolean;
    level?: string;
};
type FlashCard = {
    text?: string;
    text_color?: string;
    background_color?: string;
};
type SocialTokens = {
    facebook?: Facebook;
    account_kit?: Accountkit;
    google?: Google;
};
type Facebook = {
    app_id?: string;
};
type Accountkit = {
    app_id?: string;
};
type Google = {
    app_id?: string;
};
type UpdateUserRequestSchema = {
    first_name?: string;
    last_name?: string;
    gender?: string;
    meta?: any;
};
type UserSchema = {
    first_name?: string;
    meta?: any;
    last_name?: string;
    phone_numbers?: PhoneNumber[];
    emails?: Email[];
    gender?: string;
    dob?: string;
    active?: boolean;
    profile_pic_url?: string;
    username?: string;
    account_type?: string;
    uid?: string;
    debug?: Debug;
    has_old_password_hash?: boolean;
    _id?: string;
    created_at?: string;
    updated_at?: string;
};
type PhoneNumber = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    phone?: string;
    country_code?: number;
};
type ApplicationLegal = {
    application?: string;
    tnc?: string;
    policy?: string;
    shipping?: string;
    faq?: ApplicationLegalFAQ[];
    _id?: string;
    updated_at?: string;
    created_at?: string;
};
type ApplicationLegalFAQ = {
    question?: string;
    answer?: string;
};
type PathMappingSchema = {
    application?: string;
    redirections?: RedirectionSchema[];
    _id?: string;
    updated_at?: string;
    created_at?: string;
};
type RedirectionSchema = {
    redirect_from?: string;
    redirect_to?: string;
};
type SeoComponent = {
    seo?: SeoSchema;
};
type SeoSchema = {
    app?: string;
    _id?: string;
    robots_txt?: string;
    sitemap_enabled?: boolean;
    custom_meta_tags?: any[];
    details?: Detail;
    created_at?: string;
    updated_at?: string;
};
type CustomMetaTag = {
    name?: string;
    content?: string;
    _id?: string;
};
type Detail = {
    title?: string;
    description?: string;
};
type AnnouncementPageSchema = {
    page_slug?: string;
    type?: string;
};
type EditorMeta = {
    foreground_color?: string;
    background_color?: string;
    content_type?: string;
    content?: string;
};
type AnnouncementAuthorSchema = {
    created_by?: string;
    modified_by?: string;
};
type AdminAnnouncementSchema = {
    _id?: string;
    platforms?: string[];
    title?: string;
    announcement?: string;
    pages?: AnnouncementPageSchema[];
    editor_meta?: EditorMeta;
    author?: AnnouncementAuthorSchema;
    created_at?: string;
    app?: string;
    modified_at?: string;
    _schedule?: ScheduleSchema;
};
type ScheduleSchema = {
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
    next_schedule?: any[];
};
type NextSchedule = {
    start?: string;
    end?: string;
};
type AnnouncementSchema = {
    announcement?: string;
    schedule?: ScheduleStartSchema;
};
type ScheduleStartSchema = {
    start?: string;
    end?: string;
};
type BlogGetResponse = {
    items?: BlogSchema[];
    page?: Page;
};
type ResourceContent = {
    type?: string;
    value?: string;
};
type Asset = {
    aspect_ratio?: string;
    id?: string;
    secure_url?: string;
};
type Author = {
    designation?: string;
    id?: string;
    name?: string;
};
type BlogSchema = {
    _id?: string;
    _custom_json?: any;
    application?: string;
    archived?: boolean;
    author?: Author;
    content?: ResourceContent[];
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    slug?: string;
    tags?: string[];
    seo?: SEO;
    _schedule?: CronSchedule;
    title?: string;
    date_meta?: DateMeta;
};
type SEO = {
    description?: string;
    image?: SEOImage;
    title?: string;
};
type SEOImage = {
    url?: string;
};
type BlogRequest = {
    application?: string;
    _custom_json?: any;
    author?: Author;
    content?: ResourceContent[];
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    slug?: string;
    tags?: string[];
    title?: string;
    seo?: SEO;
    _schedule?: CronSchedule;
};
type GetAnnouncementListSchema = {
    items?: AdminAnnouncementSchema[];
    page?: Page;
};
type CreateAnnouncementSchema = {
    message?: string;
    data?: AdminAnnouncementSchema;
};
type DataLoaderResponseSchema = {
    application?: string;
    company?: string;
    _id?: string;
    name?: string;
    service?: string;
    operation_id?: string;
    type?: string;
    url?: string;
    content?: string;
    __source?: DataLoaderSourceSchema;
};
type DataLoaderResetResponseSchema = {
    reset?: string;
};
type Navigation = {
    name?: string;
    slug?: string;
    orientation?: string;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    _id?: string;
    position?: string;
    application?: string;
    platform?: string;
    navigation?: NavigationReference;
};
type LocaleLanguage = {
    hi?: Language;
    ar?: Language;
    en_us?: Language;
};
type Language = {
    display?: string;
};
type Action = {
    page?: ActionPage;
    popup?: ActionPage;
    type?: string;
};
type ActionPage = {
    params?: any;
    query?: any;
    url?: string;
    type: any;
};
type NavigationReference = {
    acl?: string[];
    tags?: string[];
    _locale_language?: LocaleLanguage;
    image?: string;
    type?: string;
    action?: Action;
    active?: boolean;
    display?: string;
    sort_order?: number;
    sub_navigation?: NavigationReference[];
};
type LandingPage = {
    data?: LandingPageSchema;
    success?: boolean;
};
type ConfigurationSchema = {
    sleep_time?: number;
    start_on_launch?: boolean;
    duration?: number;
    slide_direction?: string;
};
type SlideshowMedia = {
    type?: string;
    url?: string;
    bg_color?: string;
    duration?: number;
    auto_decide_duration?: boolean;
    action?: Action;
};
type Slideshow = {
    data?: SlideshowSchema;
    success?: boolean;
};
type AnnouncementsResponseSchema = {
    announcements?: any;
    refresh_rate?: number;
    refresh_pages?: string[];
};
type FaqResponseSchema = {
    faqs?: FaqSchema[];
};
type UpdateHandpickedSchema = {
    tag?: HandpickedTagSchema;
};
type HandpickedTagSchema = {
    position?: string;
    attributes?: any;
    name?: string;
    url?: string;
    type?: string;
    sub_type?: string;
    content?: string;
};
type RemoveHandpickedSchema = {
    tags?: string[];
};
type CreateTagSchema = {
    name?: string;
    sub_type?: string;
    _id?: string;
    type?: string;
    url?: string;
    position?: string;
    attributes?: any;
    content?: string;
};
type CreateTagRequestSchema = {
    tags?: CreateTagSchema[];
};
type DataLoaderSchema = {
    name?: string;
    service?: string;
    operation_id?: string;
    type?: string;
    url?: string;
    content?: string;
    __source?: DataLoaderSourceSchema;
};
type DataLoaderSourceSchema = {
    type?: string;
    id?: string;
};
type DataLoadersSchema = {
    items?: DataLoaderSchema[];
};
type TagDeleteSuccessResponse = {
    success?: boolean;
};
type ContentAPIError = {
    message?: string;
    status?: number;
    code?: string;
    exception?: string;
    info?: string;
    request_id?: string;
    stack_trace?: string;
    meta?: any;
};
type CategorySchema = {
    index?: number;
    title?: string;
    description?: string;
    children?: string[];
    _id?: string;
    slug?: string;
    application?: string;
    icon_url?: string;
    _custom_json?: any;
};
type ChildrenSchema = {
    question?: string;
    answer?: string;
    slug?: string;
    application?: string;
    _id?: string;
};
type CategoryRequestSchema = {
    slug?: string;
    title?: string;
};
type FAQCategorySchema = {
    index?: number;
    title?: string;
    description?: string;
    children?: ChildrenSchema[];
    _id?: string;
    slug?: string;
    application?: string;
    icon_url?: string;
    _custom_json?: any;
};
type FaqSchema = {
    slug?: string;
    application?: string;
    _id?: string;
    question?: string;
    answer?: string;
};
type FAQ = {
    slug?: string;
    question?: string;
    answer?: string;
};
type CreateFaqResponseSchema = {
    faq?: FaqSchema;
};
type CreateFaqSchema = {
    faq?: FAQ;
};
type GetFaqSchema = {
    faqs?: any[];
};
type UpdateFaqCategoryRequestSchema = {
    category?: CategorySchema;
};
type CreateFaqCategoryRequestSchema = {
    category?: CategoryRequestSchema;
};
type CreateFaqCategorySchema = {
    category?: CategorySchema;
};
type GetFaqCategoriesSchema = {
    categories?: CategorySchema[];
};
type GetFaqCategoryBySlugSchema = {
    category?: FAQCategorySchema;
};
type LandingPageGetResponse = {
    items?: LandingPageSchema[];
    page?: Page;
};
type LandingPageSchema = {
    slug?: string;
    action?: Action;
    platform?: string[];
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    _id?: string;
    application?: string;
    archived?: boolean;
    _custom_json?: any;
};
type DefaultNavigationResponse = {
    items?: NavigationSchema[];
};
type NavigationGetResponse = {
    items?: NavigationSchema[];
    page?: Page;
};
type Orientation = {
    portrait?: string[];
    landscape?: string[];
};
type NavigationSchema = {
    _id?: string;
    application?: string;
    archived?: boolean;
    name?: string;
    slug?: string;
    platform?: string[];
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    orientation?: Orientation;
    version?: number;
    navigation?: NavigationReference[];
};
type NavigationRequest = {
    name?: string;
    slug?: string;
    platform?: string[];
    orientation?: Orientation;
    navigation?: NavigationReference[];
};
type CustomPageSchema = {
    _id?: string;
    platform?: string;
    title?: string;
    slug?: string;
    type?: string;
    orientation?: string;
    application?: string;
    description?: string;
    published?: boolean;
    tags?: string[];
    content?: any[];
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    _schedule?: ScheduleSchema;
};
type ContentSchema = {
    type?: string;
    value?: any;
};
type CustomPage = {
    data?: CustomPageSchema;
};
type FeatureImage = {
    secure_url?: string;
};
type PageGetResponse = {
    items?: PageSchema[];
    page?: Page;
};
type PageSpec = {
    specifications?: any[];
};
type PageSpecParam = {
    key?: string;
    required?: boolean;
};
type PageSpecItem = {
    page_type?: string;
    display_name?: string;
    params?: PageSpecParam[];
    query?: PageSpecParam[];
};
type PageSchema = {
    _id?: string;
    application?: string;
    component_ids?: string[];
    content?: any[];
    content_path?: string;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    description?: string;
    feature_image?: Asset;
    page_meta?: any[];
    _schedule?: ScheduleSchema;
    _custom_json?: any;
    orientation?: string;
    platform?: string;
    published?: boolean;
    slug?: string;
    tags?: string[];
    title?: string;
    type?: string;
    seo?: SEO;
    visibility?: any;
    archived?: boolean;
};
type CreatedBySchema = {
    id?: string;
};
type PageContent = {
    type?: string;
    value?: any;
};
type PageMeta = {
    key?: string;
    value?: any;
};
type PageRequest = {
    _schedule?: CronSchedule;
    application?: string;
    author?: Author;
    _custom_json?: any;
    orientation?: string;
    content?: any[];
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    slug?: string;
    tags?: string[];
    seo?: SEO;
    title?: string;
};
type CronSchedule = {
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
};
type PagePublishRequest = {
    publish?: boolean;
};
type PageMetaSchema = {
    system_pages?: NavigationSchema[];
    custom_pages?: PageSchema[];
    application_id?: string;
};
type SlideshowGetResponse = {
    items?: SlideshowSchema[];
    page?: Page;
};
type SlideshowSchema = {
    _id?: string;
    slug?: string;
    date_meta?: DateMeta;
    application?: string;
    platform?: string;
    configuration?: ConfigurationSchema;
    media?: SlideshowMedia[];
    active?: boolean;
    archived?: boolean;
    _custom_json?: any;
};
type SlideshowRequest = {
    slug?: string;
    platform?: string;
    configuration?: ConfigurationSchema;
    media?: SlideshowMedia;
    active?: boolean;
};
type Support = {
    created?: boolean;
    _id?: string;
    config_type?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    contact?: ContactSchema;
};
type PhoneProperties = {
    key?: string;
    code?: string;
    number?: string;
};
type PhoneSchema = {
    active?: boolean;
    phone?: PhoneProperties[];
};
type EmailProperties = {
    key?: string;
    value?: string;
};
type EmailSchema = {
    active?: boolean;
    email?: EmailProperties[];
};
type ContactSchema = {
    phone?: PhoneSchema;
    email?: EmailSchema;
};
type TagsSchema = {
    application?: string;
    _id?: string;
    tags?: TagSchema[];
};
type TagSchema = {
    name?: string;
    url?: string;
    type?: string;
    sub_type?: string;
    _id?: string;
    position?: string;
    attributes?: any;
    content?: string;
    __source?: TagSourceSchema;
};
type TagSourceSchema = {
    type?: string;
    id?: string;
};
type UnauthenticatedUser = {
    message?: string;
};
type UnauthenticatedApplication = {
    message?: string;
};
type ResourceNotFound = {
    message?: string;
};
type InternalServerError = {
    message?: string;
    code?: string;
};
type CheckValidityResponse = {
    is_valid?: boolean;
    discount_amount?: number;
};
type PlanRecurring = {
    interval?: string;
    interval_count?: number;
};
type Plan = {
    recurring?: PlanRecurring;
    is_trial_plan?: boolean;
    plan_group?: string;
    tag_lines?: string[];
    currency?: string;
    is_active?: boolean;
    is_visible?: boolean;
    trial_period?: number;
    addons?: string[];
    tags?: string[];
    type?: string;
    country?: string;
    _id?: string;
    name?: string;
    description?: string;
    amount?: number;
    product_suite_id?: string;
    created_at?: string;
    modified_at?: string;
};
type DetailedPlanComponents = {
    name?: string;
    slug?: string;
    description?: string;
    group?: string;
    icon?: string;
    links?: any;
    enabled?: boolean;
    display_text?: string;
};
type DetailedPlan = {
    recurring?: PlanRecurring;
    is_trial_plan?: boolean;
    plan_group?: string;
    tag_lines?: string[];
    currency?: string;
    is_active?: boolean;
    is_visible?: boolean;
    trial_period?: number;
    addons?: string[];
    tags?: string[];
    type?: string;
    country?: string;
    _id?: string;
    name?: string;
    description?: string;
    amount?: number;
    product_suite_id?: string;
    created_at?: string;
    modified_at?: string;
    components?: DetailedPlanComponents[];
};
type SubscriptionTrialPeriod = {
    start_date?: string;
    end_date?: string;
};
type EntityChargePrice = {
    amount: number;
    currency_code: string;
};
type EntityChargeRecurring = {
    interval: string;
};
type ChargeLineItem = {
    name: string;
    term: string;
    pricing_type: string;
    price: EntityChargePrice;
    recurring?: EntityChargeRecurring;
    capped_amount?: number;
    trial_days?: number;
    is_test?: boolean;
    metadata?: any;
};
type CreateSubscriptionCharge = {
    name: string;
    trial_days?: number;
    line_items: ChargeLineItem[];
    is_test?: boolean;
    return_url: string;
};
type CurrentPeriod = {
    start_date?: string;
    end_date?: string;
};
type SubscriptionCharge = {
    _id?: string;
    name?: string;
    term?: string;
    pricing_type?: string;
    price?: EntityChargePrice;
    recurring?: EntityChargeRecurring;
    capped_amount?: number;
    activated_on?: string;
    cancelled_on?: string;
    billing_date?: string;
    current_period?: CurrentPeriod;
    status?: string;
    is_test?: boolean;
    metadata?: any;
};
type EntitySubscription = {
    _id?: string;
    name?: string;
    status?: string;
    company_id?: number;
    activated_on?: string;
    cancelled_on?: string;
    trial_days?: number;
    trial_period?: SubscriptionTrialPeriod;
    metadata?: any;
    line_items?: SubscriptionCharge[];
};
type CreateSubscriptionResponse = {
    subscription?: EntitySubscription;
    confirm_url?: string;
};
type InvoiceDetailsPeriod = {
    start?: string;
    end?: string;
};
type InvoiceDetailsClient = {
    address_lines?: string[];
    name?: string;
    email?: string;
    phone?: string;
};
type InvoiceDetailsStatusTrail = {
    _id?: string;
    value?: string;
    timestamp?: string;
};
type InvoiceDetailsPaymentMethodsDataChecks = {
    cvc_check?: string;
    address_line1_check?: string;
    address_postal_code_check?: string;
};
type InvoiceDetailsPaymentMethodsDataNetworks = {
    available?: string[];
    preferred?: string;
};
type InvoiceDetailsPaymentMethodsDataThreeDSecureUsage = {
    supported?: boolean;
};
type InvoiceDetailsPaymentMethodsData = {
    brand?: string;
    last4?: string;
    checks?: InvoiceDetailsPaymentMethodsDataChecks;
    wallet?: string;
    country?: string;
    funding?: string;
    exp_year?: number;
    networks?: InvoiceDetailsPaymentMethodsDataNetworks;
    exp_month?: number;
    fingerprint?: string;
    generated_from?: string;
    three_d_secure_usage?: InvoiceDetailsPaymentMethodsDataThreeDSecureUsage;
};
type InvoiceDetailsPaymentMethods = {
    id?: number;
    type?: string;
    pg_payment_method_id?: string;
    data?: InvoiceDetailsPaymentMethodsData;
    is_default?: boolean;
};
type InvoicePaymentMethod = {
    pg_payment_method_id?: string;
};
type InvoiceDetails = {
    period?: InvoiceDetailsPeriod;
    client?: InvoiceDetailsClient;
    auto_advance?: boolean;
    currency?: string;
    paid?: boolean;
    attemp?: number;
    _id?: string;
    collection_method?: string;
    subscriber_id?: string;
    invoice_url?: string;
    number?: string;
    pg_data?: any;
    receipt_number?: string;
    statement_descriptor?: string;
    current_status?: string;
    status_trail?: InvoiceDetailsStatusTrail[];
    subtotal?: number;
    total?: number;
    subscription?: string;
    next_action_time?: string;
    created_at?: string;
    modified_at?: string;
    hash_identifier?: string;
    payment_method?: InvoicePaymentMethod;
};
type InvoiceItemsPlanRecurring = {
    interval?: string;
    interval_count?: number;
};
type InvoiceItemsPlan = {
    recurring?: InvoiceItemsPlanRecurring;
    is_trial_plan?: boolean;
    plan_group?: string;
    tag_lines?: string[];
    currency?: string;
    is_active?: boolean;
    is_visible?: boolean;
    trial_period?: number;
    addons?: string[];
    tags?: string[];
    type?: string;
    country?: string;
    _id?: string;
    name?: string;
    description?: string;
    amount?: number;
    product_suite_id?: string;
    created_at?: string;
    modified_at?: string;
};
type InvoiceItemsPeriod = {
    start?: string;
    end?: string;
};
type InvoiceItems = {
    _id?: string;
    currency?: string;
    plan?: InvoiceItemsPlan;
    name?: string;
    quantity?: number;
    description?: string;
    period?: InvoiceItemsPeriod;
    unit_amount?: number;
    amount?: number;
    type?: string;
    invoice_id?: string;
    created_at?: string;
    modified_at?: string;
};
type Invoice = {
    invoice?: InvoiceDetails;
    invoice_items?: InvoiceItems[];
};
type InvoicesDataClient = {
    name?: string;
    email?: string;
    phone?: string;
    address_lines?: string[];
};
type InvoicesDataPeriod = {
    start?: string;
    end?: string;
};
type InvoicesDataPaymentMethod = {
    pg_payment_method_id?: string;
};
type InvoicesData = {
    _id?: string;
    client?: InvoicesDataClient;
    auto_advance?: boolean;
    currency?: string;
    paid?: boolean;
    attemp?: number;
    collection_method?: string;
    subscriber_id?: string;
    invoice_url?: string;
    number?: string;
    pg_data?: any;
    period?: InvoicesDataPeriod;
    receipt_number?: string;
    statement_descriptor?: string;
    current_status?: string;
    status_trail?: InvoiceDetailsStatusTrail[];
    subtotal?: number;
    total?: number;
    subscription?: string;
    next_action_time?: string;
    created_at?: string;
    modified_at?: string;
    hash_identifier?: string;
    payment_method?: InvoicesDataPaymentMethod;
    invoice_items?: InvoiceItems[];
};
type Invoices = {
    data?: InvoicesData[];
    start?: number;
    end?: number;
    limit?: number;
    page?: number;
    total?: number;
};
type Phone = {
    phone_number?: string;
    phone_country_code?: string;
};
type SubscriptionBillingAddress = {
    country?: string;
    state?: string;
    city?: string;
    line1?: string;
    line2?: string;
    postal_code?: string;
};
type SubscriptionCustomer = {
    phone?: Phone;
    billing_address?: SubscriptionBillingAddress;
    _id?: string;
    unique_id?: string;
    type?: string;
    name?: string;
    email?: string;
    created_at?: string;
    modified_at?: string;
    data?: any;
};
type SubscriptionCustomerCreate = {
    phone?: Phone;
    billing_address?: SubscriptionBillingAddress;
    unique_id?: string;
    type?: string;
    name?: string;
    email?: string;
};
type SubscriptionCurrentPeriod = {
    start?: string;
    end?: string;
};
type SubscriptionPauseCollection = {
    behavior?: string;
    resume_at?: string;
};
type SubscriptionTrial = {
    start?: string;
    end?: string;
};
type SubscriptionInvoiceSettings = {
    generation?: boolean;
    charging?: boolean;
};
type Subscription = {
    current_period?: SubscriptionCurrentPeriod;
    pause_collection?: SubscriptionPauseCollection;
    trial?: SubscriptionTrial;
    invoice_settings?: SubscriptionInvoiceSettings;
    is_active?: boolean;
    cancel_at_period_end?: boolean;
    _id?: string;
    subscriber_id?: string;
    plan_id?: string;
    product_suite_id?: string;
    plan_data?: Plan;
    current_status?: string;
    collection_method?: string;
    created_at?: string;
    modified_at?: string;
    latest_invoice?: string;
};
type SubscriptionStatus = {
    is_enabled?: boolean;
    subscription?: Subscription;
};
type SubscriptionLimitApplication = {
    enabled?: boolean;
    hard_limit?: number;
    soft_limit?: number;
};
type SubscriptionLimitMarketplace = {
    enabled?: boolean;
};
type SubscriptionLimitOtherPlatform = {
    enabled?: boolean;
};
type SubscriptionLimitTeam = {
    limit?: number;
};
type SubscriptionLimitProducts = {
    bulk?: boolean;
    limit?: number;
};
type SubscriptionLimitExtensions = {
    enabled?: boolean;
    limit?: number;
};
type SubscriptionLimitIntegrations = {
    enabled?: boolean;
    limit?: number;
};
type SubscriptionLimit = {
    application?: SubscriptionLimitApplication;
    marketplace?: SubscriptionLimitMarketplace;
    other_platform?: SubscriptionLimitOtherPlatform;
    team?: SubscriptionLimitTeam;
    products?: SubscriptionLimitProducts;
    extensions?: SubscriptionLimitExtensions;
    integrations?: SubscriptionLimitIntegrations;
    is_trial_plan?: boolean;
};
type SubscriptionActivateReq = {
    unique_id?: string;
    type?: string;
    product_suite?: string;
    plan_id?: string;
    payment_method?: string;
};
type SubscriptionActivateRes = {
    success?: boolean;
    data?: Subscription;
};
type CancelSubscriptionReq = {
    unique_id?: string;
    type?: string;
    product_suite?: string;
    subscription_id?: string;
};
type CancelSubscriptionRes = {
    success?: boolean;
    data?: Subscription;
};
type StatsImported = {
    count?: number;
};
type StatsProcessedEmail = {
    success?: number;
    failed?: number;
    suppressed?: number;
};
type StatsProcessedSms = {
    success?: number;
    failed?: number;
    suppressed?: number;
};
type StatsProcessed = {
    email?: StatsProcessedEmail;
    sms?: StatsProcessedSms;
};
type Stats = {
    _id?: string;
    imported?: any;
    processed?: any;
};
type GetStats = {
    items?: Stats[];
};
type CampaignReq = {
    description?: string;
    tags?: string[];
    headers?: string[];
    is_active?: boolean;
    name?: string;
    file_url?: string;
    type?: string;
    records_count?: number;
    application?: string;
};
type RecipientHeaders = {
    email?: string;
};
type CampaignEmailTemplate = {
    key?: string;
    value?: string;
};
type CampignEmailProvider = {
    _id?: string;
    from_name?: string;
    from_email?: string;
};
type CampaignEmail = {
    template?: CampaignEmailTemplate;
    provider?: CampignEmailProvider;
};
type Campaign = {
    recipient_headers?: RecipientHeaders;
    email?: CampaignEmail;
    description?: string;
    tags?: any[];
    is_active?: boolean;
    _id?: string;
    datasource?: string;
    type?: string;
    name?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type Campaigns = {
    items?: Campaign[];
    page?: Page;
};
type BigqueryHeadersReq = {
    query?: string;
    type?: string;
};
type BigqueryHeadersResHeaders = {
    name?: string;
    type?: string;
};
type BigqueryHeadersRes = {
    headers?: BigqueryHeadersResHeaders[];
};
type GetNRecordsCsvReq = {
    url?: string;
    header?: boolean;
    count?: number;
};
type GetNRecordsCsvResItems = {
    phone_number?: string;
    email?: string;
    firstname?: string;
    lastname?: string;
    orderid?: string;
};
type GetNRecordsCsvRes = {
    items?: GetNRecordsCsvResItems[];
};
type AudienceReq = {
    description?: string;
    tags?: string[];
    headers?: string[];
    is_active?: boolean;
    name?: string;
    file_url?: string;
    type?: string;
    records_count?: number;
    application?: string;
};
type Audience = {
    description?: string;
    tags?: string[];
    headers?: string[];
    is_active?: boolean;
    _id?: string;
    name?: string;
    file_url?: string;
    type?: string;
    records_count?: number;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type Audiences = {
    items?: Audience[];
    page?: Page;
};
type EmailProviderReqFrom = {
    name?: string;
    email?: string;
    is_default?: boolean;
};
type EmailProviderReq = {
    name?: string;
    description?: string;
    api_key?: string;
    type?: string;
    provider?: string;
    from_address?: EmailProviderReqFrom[];
};
type EmailProvider = {
    type?: string;
    provider?: string;
    from_address?: EmailProviderReqFrom[];
    _id?: string;
    name?: string;
    description?: string;
    api_key?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type EmailProviders = {
    items?: EmailProvider[];
    page?: Page;
};
type EmailTemplateDeleteSuccessRes = {
    success?: boolean;
    message?: string;
};
type EmailTemplateDeleteFailureRes = {
    success?: boolean;
    message?: string;
};
type EmailTemplateKeys = {
    to?: string;
    cc?: string;
    bcc?: string;
};
type EmailTemplateHeaders = {
    key?: string;
    value?: string;
};
type EmailTemplateReq = {
    name?: string;
    description?: string;
    keys?: EmailTemplateKeys;
    static_to?: string[];
    static_cc?: string[];
    static_bcc?: string[];
    reply_to?: string;
    headers?: EmailTemplateHeaders[];
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    attachments?: any[];
    priority?: string;
};
type TemplateAndType = {
    template_type?: string;
    template?: string;
};
type EmailTemplateRes = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    static_to?: string[];
    static_cc?: string[];
    static_bcc?: string[];
    tags?: any[];
    priority?: string;
    published?: boolean;
    _id?: string;
    name?: string;
    keys?: EmailTemplateKeys;
    reply_to?: string;
    headers?: EmailTemplateHeaders[];
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    attachments?: any[];
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type EmailTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    static_to?: any[];
    static_cc?: any[];
    static_bcc?: any[];
    tags?: any[];
    priority?: string;
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    from_name?: string;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    headers?: any[];
    attachments?: any[];
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type SystemEmailTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    static_to?: any[];
    static_cc?: any[];
    static_bcc?: any[];
    tags?: any[];
    priority?: string;
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    from_name?: string;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    headers?: any[];
    attachments?: any[];
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type EmailTemplates = {
    items?: EmailTemplate[];
    page?: Page;
};
type SystemEmailTemplates = {
    items?: SystemEmailTemplate[];
    page?: Page;
};
type PayloadEmailTemplateStructure = {
    key?: string;
    value?: string;
};
type PayloadEmailProviderStructure = {
    _id?: string;
};
type PayloadEmailStructure = {
    template?: PayloadEmailTemplateStructure;
    provider?: PayloadEmailProviderStructure;
};
type PayloadSmsTemplateStructure = {
    key?: string;
    value?: string;
};
type PayloadSmsProviderStructure = {
    _id?: string;
};
type PayloadSmsStructure = {
    template?: PayloadSmsTemplateStructure;
    provider?: PayloadSmsProviderStructure;
};
type PayloadStructure = {
    data?: any[];
    email?: PayloadEmailStructure;
    sms?: PayloadSmsStructure;
    application?: string;
};
type MetaStructure = {
    job_type?: string;
    action?: string;
    trace?: string;
    timestamp?: string;
};
type EngineRequest = {
    payload?: PayloadStructure;
    meta?: MetaStructure;
};
type EngineResponse = {
    success?: boolean;
};
type EventSubscriptionTemplateSms = {
    subscribed?: boolean;
    template?: string;
};
type EventSubscriptionTemplateEmail = {
    subscribed?: boolean;
    template?: string;
};
type EventSubscriptionTemplate = {
    sms?: EventSubscriptionTemplateSms;
    email?: EventSubscriptionTemplateEmail;
};
type EventSubscription = {
    template?: EventSubscriptionTemplate;
    is_default?: boolean;
    _id?: string;
    application?: string;
    event?: string;
    slug?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type EventSubscriptions = {
    items?: EventSubscription[];
    page?: Page;
};
type TriggerJobResponse = {
    status?: number;
};
type TriggerJobRequest = {
    job_id?: string;
};
type Job = {
    completed?: boolean;
    is_active?: boolean;
    _id?: string;
    campaign?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type Jobs = {
    items?: Job[];
    page?: Page;
};
type JobLog = {
    imported?: any;
    processed?: any;
    _id?: string;
    job?: string;
    campaign?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type JobLogs = {
    items?: JobLog[];
    page?: Page;
};
type LogEmail = {
    template?: string;
};
type LogPushnotification = {
    pushtokens?: string[];
};
type LogMeta = {
    type?: string;
    identifier?: string;
    key?: string;
    offset?: string;
    partition?: string;
    topic?: string;
};
type Log = {
    email?: LogEmail;
    pushnotification?: LogPushnotification;
    meta?: LogMeta;
    _id?: string;
    application?: string;
    service?: string;
    step?: string;
    status?: string;
    data?: any;
    expire_at?: string;
    created_at?: string;
};
type Logs = {
    items?: Log[];
    page?: Page;
};
type PushtokenReq = {
    action?: string;
    bundle_identifier?: string;
    push_token?: string;
    unique_device_id?: string;
};
type PushtokenRes = {
    _id?: string;
    bundle_identifier?: string;
    push_token?: string;
    unique_device_id?: string;
    type?: string;
    platform?: string;
    application_id?: string;
    user_id?: string;
    created_at?: string;
    updated_at?: string;
    expired_at?: string;
};
type SmsProviderReq = {
    name?: string;
    description?: string;
    sender?: string;
    username?: string;
    authkey?: string;
    type?: string;
    provider?: string;
};
type SmsProvider = {
    rpt?: number;
    type?: string;
    provider?: string;
    _id?: string;
    name?: string;
    description?: string;
    sender?: string;
    username?: string;
    authkey?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type SmsProviders = {
    items?: SmsProvider[];
    page?: Page;
};
type SmsTemplateDeleteSuccessRes = {
    success?: boolean;
    message?: string;
};
type SmsTemplateDeleteFailureRes = {
    success?: boolean;
    message?: string;
};
type SmsTemplateMessage = {
    template_type?: string;
    template?: string;
};
type SmsTemplateReq = {
    name?: string;
    description?: string;
    message?: SmsTemplateMessage;
    template_variables?: any;
    attachments?: any[];
    priority?: string;
};
type SmsTemplateRes = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    tags?: any[];
    priority?: string;
    published?: boolean;
    _id?: string;
    name?: string;
    message?: SmsTemplateMessage;
    template_variables?: any;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type SmsTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    priority?: string;
    tags?: any[];
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    message?: SmsTemplateMessage;
    template_variables?: any;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type SystemSmsTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    tags?: any[];
    priority?: string;
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    message?: SmsTemplateMessage;
    template_variables?: any;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type SmsTemplates = {
    items?: SmsTemplate[];
    page?: Page;
};
type SystemSmsTemplates = {
    items?: SystemSmsTemplate[];
    page?: Page;
};
type Notification = {
    title?: string;
    body?: string;
    subtitle?: string;
    icon?: string;
    deeplink?: string;
    click_action?: string;
};
type SystemNotificationUser = {
    type?: string;
    value?: string;
};
type SystemNotificationSettings = {
    sound?: boolean;
    priority?: string;
    time_to_live?: string;
};
type SystemNotification = {
    notification?: Notification;
    user?: SystemNotificationUser;
    settings?: SystemNotificationUser;
    _id?: string;
    group?: string;
    created_at?: string;
};
type SystemNotificationsPage = {
    type?: string;
    current?: number;
    size?: number;
    item_total?: number;
    has_next?: boolean;
};
type SystemNotifications = {
    items?: SystemNotification[];
    last_read_anchor?: number;
    page?: Page;
};
type PaymentGatewayConfigResponse = {
    success: boolean;
    app_id: string;
    excluded_fields: string[];
    created: boolean;
    display_fields: string[];
    aggregators?: any[];
};
type ErrorCodeDescription = {
    success: boolean;
    code: string;
    description: string;
};
type PaymentGatewayConfig = {
    is_active?: boolean;
    config_type: string;
    merchant_salt: string;
    secret: string;
    key: string;
};
type PaymentGatewayConfigRequest = {
    app_id: string;
    aggregator_name?: PaymentGatewayConfig;
    is_active?: boolean;
};
type PaymentGatewayToBeReviewed = {
    success: boolean;
    aggregator: string[];
};
type ErrorCodeAndDescription = {
    code: string;
    description: string;
};
type HttpErrorCodeAndResponse = {
    success: boolean;
    error: ErrorCodeAndDescription;
};
type PaymentModeLogo = {
    large: string;
    small: string;
};
type IntentApp = {
    display_name?: string;
    package_name?: string;
    code?: string;
    logos?: PaymentModeLogo;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type PaymentModeList = {
    intent_app?: IntentApp[];
    aggregator_name: string;
    card_token?: string;
    card_id?: string;
    expired?: boolean;
    card_fingerprint?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    logo_url?: PaymentModeLogo;
    fynd_vpa?: string;
    nickname?: string;
    name?: string;
    card_issuer?: string;
    retry_count?: number;
    card_number?: string;
    exp_month?: number;
    compliant_with_tokenisation_guidelines?: boolean;
    intent_app_error_list?: string[];
    exp_year?: number;
    card_name?: string;
    intent_flow?: boolean;
    card_brand?: string;
    display_priority?: number;
    card_type?: string;
    code?: string;
    card_isin?: string;
    timeout?: number;
    card_brand_image?: string;
    display_name?: string;
    card_reference?: string;
    merchant_code?: string;
};
type RootPaymentMode = {
    add_card_enabled?: boolean;
    anonymous_enable?: boolean;
    aggregator_name?: string;
    name: string;
    list?: PaymentModeList[];
    save_card?: boolean;
    display_priority: number;
    display_name: string;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type PayoutsResponse = {
    is_active: boolean;
    transfer_type: string;
    is_default: boolean;
    unique_transfer_no: any;
    payouts_aggregators: any[];
    more_attributes: any;
    customers: any;
};
type PayoutBankDetails = {
    bank_name?: string;
    account_type: string;
    branch_name?: string;
    country?: string;
    account_holder?: string;
    pincode?: number;
    account_no?: string;
    ifsc_code: string;
    city?: string;
    state?: string;
};
type PayoutRequest = {
    unique_external_id: string;
    is_active: boolean;
    transfer_type: string;
    users: any;
    aggregator: string;
    bank_details: PayoutBankDetails;
};
type PayoutResponse = {
    success: boolean;
    is_active: boolean;
    users: any;
    transfer_type: string;
    aggregator: string;
    created: boolean;
    bank_details: any;
    unique_transfer_no: string;
    payouts: any;
    payment_status: string;
};
type UpdatePayoutResponse = {
    success: boolean;
    is_default: boolean;
    is_active: boolean;
};
type UpdatePayoutRequest = {
    unique_external_id: string;
    is_default: boolean;
    is_active: boolean;
};
type DeletePayoutResponse = {
    success: boolean;
};
type SubscriptionPaymentMethodResponse = {
    success: boolean;
    data: any[];
};
type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
type SubscriptionConfigResponse = {
    success: boolean;
    aggregator: string;
    config: any;
};
type SaveSubscriptionSetupIntentRequest = {
    unique_external_id: string;
};
type SaveSubscriptionSetupIntentResponse = {
    success: boolean;
    data: any;
};
type BeneficiaryModeDetails = {
    bank_name: string;
    address?: string;
    wallet?: string;
    branch_name: string;
    comment?: string;
    vpa?: string;
    email: string;
    account_holder: string;
    mobile: string;
    account_no: string;
    ifsc_code: string;
};
type AddBeneficiaryDetailsRequest = {
    order_id: string;
    details: BeneficiaryModeDetails;
    shipment_id: string;
    delights: boolean;
    transfer_mode: string;
    otp?: string;
    request_id?: string;
};
type RefundAccountResponse = {
    success: boolean;
    is_verified_flag?: boolean;
    message: string;
    data?: any;
};
type NotFoundResourceError = {
    success: boolean;
    code: string;
    description: string;
};
type IfscCodeResponse = {
    success?: boolean;
    bank_name: string;
    branch_name: string;
};
type OrderBeneficiaryDetails = {
    bank_name: string;
    branch_name?: boolean;
    delights_user_name?: string;
    email: string;
    account_holder: string;
    account_no: string;
    modified_on: string;
    address: string;
    is_active: boolean;
    id: number;
    transfer_mode: string;
    mobile?: boolean;
    ifsc_code: string;
    created_on: string;
    comment?: boolean;
    subtitle: string;
    beneficiary_id: string;
    title: string;
    display_name: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    order_id?: string;
    payment_gateway?: string;
    current_status?: string;
    payment_id?: string;
    extra_meta?: any;
};
type MultiTenderPaymentMethod = {
    name?: string;
    mode: string;
    amount: number;
    meta?: MultiTenderPaymentMeta;
};
type PaymentConfirmationRequest = {
    order_id: string;
    payment_methods: MultiTenderPaymentMethod[];
};
type PaymentConfirmationResponse = {
    success: boolean;
    message: string;
    order_id: string;
};
type GetActivityStatus = {
    activity_history: ActivityHistory;
};
type ActivityHistory = {
    createdat?: string;
    message?: string;
    type?: string;
    user?: string;
};
type CanBreakRequestBody = {
    shipment_ids: string[];
};
type CanBreakResponse = {
    status: boolean;
    valid_actions: any;
};
type FailedOrders = {
    orders: FailOrder;
};
type FailOrder = {
    updated_at?: string;
    _id?: string;
    reason?: string;
    marketplace_order?: MarketplaceOrder;
    marketplace_order_id?: string;
    created_at?: string;
    app_id?: string;
    marketplace?: string;
    company_id?: number;
};
type MarketplaceOrder = {
    order_status_url?: string;
    admin_graphql_api_id?: string;
    email?: string;
    test?: boolean;
    note?: string;
    total_price?: string;
    app_id?: number;
    total_discounts_set?: TotalDiscountsSet;
    total_price_set?: TotalPriceSet;
    total_tax_set?: TotalTaxSet;
    gateway?: string;
    name?: string;
    subtotal_price_set?: SubtotalPriceSet;
    number?: number;
    buyer_accepts_marketing?: boolean;
    contact_email?: string;
    token?: string;
    source_name?: string;
    payment_gateway_names?: any[];
    presentment_currency?: string;
    subtotal_price?: string;
    processed_at?: string;
    order_number?: number;
    total_tip_received?: string;
    id?: number;
    confirmed?: boolean;
    currency?: string;
    total_line_items_price?: string;
    line_items?: LineItems;
    created_at?: string;
    updated_at?: string;
    total_weight?: number;
    billing_address?: BillingAddress;
    total_shipping_price_set?: TotalShippingPriceSet;
    customer?: Customer;
    total_discounts?: string;
    total_line_items_price_set?: TotalLineItemsPriceSet;
    tags?: string;
    total_price_usd?: string;
    user_id?: number;
    total_tax?: string;
    processing_method?: string;
    shipping_address?: OrderShippingAddress;
    taxes_included?: boolean;
    financial_status?: string;
};
type TotalDiscountsSet = {
    presentment_money?: PresentmentMoney;
    shop_money?: ShopMoney;
};
type PresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type ShopMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalPriceSet = {
    shop_money?: TotalPriceSetShopMoney;
    presentment_money?: TotalPriceSetPresentmentMoney;
};
type TotalPriceSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalPriceSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalTaxSet = {
    shop_money?: TotalTaxSetShopMoney;
    presentment_money?: TotalTaxSetPresentmentMoney;
};
type TotalTaxSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalTaxSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type SubtotalPriceSet = {
    shop_money?: SubtotalPriceSetShopMoney;
    presentment_money?: SubtotalPriceSetPresentmentMoney;
};
type SubtotalPriceSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type SubtotalPriceSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type LineItems = {
    sku?: string;
    fulfillable_quantity?: number;
    grams?: number;
    total_discount?: string;
    article?: LineItemsArticle;
    title?: string;
    variant_inventory_management?: string;
    id?: number;
    variant_id?: number;
    variant_title?: string;
    product_exists?: boolean;
    price?: string;
    admin_graphql_api_id?: string;
    quantity?: number;
    vendor?: string;
    fulfillment_service?: string;
    taxable?: boolean;
    name?: string;
    product_id?: number;
    price_set?: PriceSet;
    tax_lines?: TaxLines;
    requires_shipping?: boolean;
    gift_card?: boolean;
    total_discount_set?: TotalDiscountSet;
};
type LineItemsArticle = {
    quantities?: Quantities;
    old_article_uid?: string;
    total_quantity?: number;
    manufacturer?: Manufacturer;
    price?: ArticlePrice;
    track_inventory?: boolean;
    company?: Company;
    is_active?: boolean;
    date_meta?: FailOrderDateMeta;
    fragile?: boolean;
    marketplace_identifiers?: MarketplaceIdentifiers;
    size?: string;
    is_set?: boolean;
    dimension?: Dimension;
    weight?: Weight;
    store?: Store;
    meta?: ArticleMeta;
    uid?: string;
    brand?: ArticleBrand;
    item_id?: number;
    fynd_article_code?: string;
    _id?: string;
    identifier?: LineItemsArticleIdentifier;
    seller_identifier?: string;
    fynd_item_code?: string;
    country_of_origin?: string;
};
type Quantities = {
    not_available?: NotAvailable;
    sellable?: Sellable;
    order_committed?: OrderCommitted;
    damaged?: Damaged;
};
type NotAvailable = {
    count?: number;
    updated_at?: string;
};
type Sellable = {
    count?: number;
    updated_at?: string;
};
type OrderCommitted = {
    count?: number;
    updated_at?: string;
};
type Damaged = {
    updated_at?: string;
    count?: number;
};
type Manufacturer = {
    is_default?: boolean;
    address?: string;
    name?: string;
};
type ArticlePrice = {
    marked?: number;
    currency?: string;
    effective?: number;
    transfer?: number;
};
type Company = {
    id?: number;
    company_type?: string;
    business_type?: string;
    company_name?: string;
    created_on?: string;
    pan_no?: string;
    return_allowed?: boolean;
    meta?: string;
    exchange_allowed?: boolean;
    agreement_start_date?: string;
    exchange_within_days?: number;
    payment_procesing_charge?: number;
    fynd_a_fit_available?: boolean;
    modified_on?: string;
    return_within_days?: number;
};
type FailOrderDateMeta = {
    added_on_store?: string;
    inventory_updated_on?: string;
    created_on?: string;
    modified_on?: string;
};
type MarketplaceIdentifiers = {
    tatacliq_luxury?: TatacliqLuxury;
};
type TatacliqLuxury = {
    sku?: string;
};
type Dimension = {
    height?: number;
    width?: number;
    unit?: string;
    length?: number;
    is_default?: boolean;
};
type Weight = {
    is_default?: boolean;
    unit?: string;
    shipping?: number;
};
type Store = {
    id?: number;
};
type ArticleMeta = {
    service?: string;
};
type ArticleBrand = {
    name?: string;
    id?: number;
};
type LineItemsArticleIdentifier = {
    sku_code?: string;
};
type PriceSet = {
    shop_money?: PriceSetShopMoney;
    presentment_money?: PriceSetPresentmentMoney;
};
type PriceSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type PriceSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type TaxLines = {
    title?: string;
    price?: string;
    rate?: number;
    price_set?: TaxLinesPriceSet;
};
type TaxLinesPriceSet = {
    shop_money?: TaxLinesPriceSetShopMoney;
    presentment_money?: TaxLinesPriceSetPresentmentMoney;
};
type TaxLinesPriceSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type TaxLinesPriceSetPresentmentMoney = {
    currency_code?: string;
    amount?: string;
};
type TotalDiscountSet = {
    presentment_money?: TotalDiscountSetPresentmentMoney;
    shop_money?: TotalDiscountSetShopMoney;
};
type TotalDiscountSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalDiscountSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type BillingAddress = {
    address1?: string;
    city?: string;
    zip?: string;
    last_name?: string;
    address2?: string;
    latitude?: number;
    longitude?: number;
    province_code?: string;
    phone?: string;
    company?: string;
    name?: string;
    country?: string;
    country_code?: string;
    first_name?: string;
    province?: string;
};
type TotalShippingPriceSet = {
    shop_money?: TotalShippingPriceSetShopMoney;
    presentment_money?: TotalShippingPriceSetPresentmentMoney;
};
type TotalShippingPriceSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalShippingPriceSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type Customer = {
    created_at?: string;
    id?: number;
    last_name?: string;
    state?: string;
    last_order_id?: number;
    note?: string;
    verified_email?: boolean;
    phone?: string;
    accepts_marketing?: boolean;
    first_name?: string;
    tags?: string;
    last_order_name?: string;
    orders_count?: number;
    total_spent?: string;
    tax_exempt?: boolean;
    currency?: string;
    accepts_marketing_updated_at?: string;
    email?: string;
    updated_at?: string;
    admin_graphql_api_id?: string;
    default_address?: DefaultAddress;
};
type DefaultAddress = {
    last_name?: string;
    name?: string;
    province_code?: string;
    country_code?: string;
    is_default?: boolean;
    id?: number;
    customer_id?: number;
    first_name?: string;
    address1?: string;
    phone?: string;
    country_name?: string;
    company?: string;
    address2?: string;
    city?: string;
    province?: string;
    country?: string;
    zip?: string;
};
type TotalLineItemsPriceSet = {
    shop_money?: TotalLineItemsPriceSetShopMoney;
    presentment_money?: TotalLineItemsPriceSetPresentmentMoney;
};
type TotalLineItemsPriceSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalLineItemsPriceSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type OrderShippingAddress = {
    address1?: string;
    zip?: string;
    address2?: string;
    country_code?: string;
    country?: string;
    last_name?: string;
    province_code?: string;
    first_name?: string;
    phone?: string;
    province?: string;
    latitude?: number;
    longitude?: number;
    city?: string;
    company?: string;
    name?: string;
};
type OrderListing = {
    items: OrderItems[];
    filters: Filters;
    next_order_status: any;
    page: PlatformOrderPage;
    applied_filters: AppliedFilters;
};
type OrderItems = {
    user?: PlatformOrderUserInfo;
    delivery_address?: PlatformDeliveryAddress;
    channel?: Channel;
    id?: string;
    application?: PlatformApplication;
    shipments?: PlatformShipment;
    created_at?: string;
    total_shipments_in_order?: number;
};
type PlatformOrderUserInfo = {
    mobile?: string;
    first_name?: string;
    gender?: string;
    email?: string;
    last_name?: string;
    is_anonymous_user?: boolean;
    uid?: number;
    avis_user_id?: string;
};
type PlatformDeliveryAddress = {
    area?: string;
    state?: string;
    country?: string;
    version?: string;
    address1?: string;
    updated_at?: string;
    city?: string;
    landmark?: string;
    created_at?: string;
    name?: string;
    address?: string;
    phone?: string;
    latitude?: number;
    longitude?: number;
    address_type?: string;
    email?: string;
    pincode?: string;
    address2?: string;
    contact_person?: string;
    address_category?: string;
};
type Channel = {
    name?: string;
    logo?: string;
};
type PlatformApplication = {
    id?: string;
};
type PlatformShipment = {
    status?: PlatformShipmentStatus;
    bags?: Bags;
    prices?: ShipmentPrices;
    id?: string;
    gst?: ShipmentGst;
    priority?: number;
    priority_text?: string;
    lock_status?: boolean;
    ordering_channel?: string;
    total_shipment_bags?: number;
};
type PlatformShipmentStatus = {
    id?: number;
    bag_list?: number[];
    created_at?: string;
    status?: string;
    name?: string;
    progress?: number;
    shipment_id?: string;
    current_shipment_status?: string;
    color_code?: string;
};
type Bags = {
    item?: BagItem;
    id?: number;
};
type BagItem = {
    id?: number;
    size?: string;
    slug_key?: string;
    can_return?: boolean;
    brand_id?: number;
    l2_category?: string[];
    name?: string;
    code?: string;
    can_cancel?: boolean;
    attributes?: BagItemAttributes;
    l3_category_name?: string;
    l3_category?: number;
    l1_category?: string[];
    image?: string[];
    brand?: string;
    last_updated_at?: string;
};
type BagItemAttributes = {
    item_code?: string;
    brand_name?: string;
    country_of_origin?: string;
};
type ShipmentPrices = {
    refund_amount?: number;
    cashback_applied?: number;
    transfer_price?: number;
    coupon_value?: number;
    amount_paid?: number;
    delivery_charge?: number;
    coupon_effective_discount?: number;
    cod_charges?: number;
    refund_credit?: number;
    added_to_fynd_cash?: boolean;
    gst_tax_percentage?: number;
    price_marked?: number;
    price_effective?: number;
    discount?: number;
    promotion_effective_discount?: number;
    amount_paid_roundoff?: number;
    fynd_credits?: number;
    brand_calculated_amount?: number;
    cashback?: number;
    value_of_good?: number;
};
type Payments = {
    is_active?: boolean;
    display_name?: string;
    logo?: string;
    source?: string;
    source_nickname?: string;
    display_priority?: number;
    id?: number;
    mode?: string;
    payment_identifier?: string;
};
type Filters = {
    stage?: Stage;
    stages?: Stages;
};
type Stage = {
    text?: string;
    value?: string;
    is_default?: boolean;
    filters?: StagesFilters;
};
type StagesFilters = {
    text?: string;
    value?: string;
    type?: string;
    options?: Options;
};
type Options = {
    text?: string;
    value?: string;
};
type PlatformOrderPage = {
    next?: string;
    previous?: string;
    type?: string;
    size?: number;
    current?: number;
    has_next?: boolean;
    total?: number;
    item_total?: ItemTotal;
};
type AppliedFilters = {
    stage?: string;
    stores?: string[];
    deployment_stores?: string[];
    dp?: number[];
    from_date?: string;
    to_date?: string;
};
type OrderDetails = {
    items: OrderPicklistListing[];
    page: PlatformOrderPage;
    filters: Filters;
    next_order_status: any;
    applied_filters: AppliedFilters;
};
type OrderDetailsItem = {
    user?: PlatformOrderUserInfo;
    delivery_address?: PlatformDeliveryAddress;
    channel?: Channel;
    fyndstore_emp?: any;
    ordering_store?: any;
    breakup_values?: PlatformBreakupValues;
    id?: string;
    application?: PlatformApplication;
    shipments?: PlatformShipmentDetails;
    created_at?: string;
    total_shipments_in_order?: number;
    payments?: ItemsPayments;
    payment_methods?: any;
};
type PlatformBreakupValues = {
    display?: string;
    value?: number;
    name?: string;
};
type ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type PlatformShipmentDetails = {
    status?: PlatformShipmentDetailsStatus;
    bags?: BagsDetails;
    prices?: ShipmentPrices;
    breakup_values?: ShipmentBreakupValues;
    id?: string;
    dp_details?: DpDetails;
    payment_methods?: any;
    invoice?: ShipmentInvoice;
    fulfilling_store?: PlatformFulfillingStore;
    payments?: Payments;
    gst?: ShipmentGst;
    company?: Company;
    brand?: PlatformShipmentDetailsBrand;
    coupon?: any;
    order_source?: string;
    is_not_fynd_source?: boolean;
    can_break?: any;
    comment?: string;
    promise?: Promise;
    tracking_details?: ShipmentTrackingDetails;
    is_fynd_coupon?: boolean;
    order_type?: string;
    total_shipment_bags?: number;
    pod?: any;
    lock_status?: boolean;
    priority?: number;
    priority_text?: string;
    ordering_channel?: string;
    credit_note_id?: string;
    auto_trigger_dp_assignment?: boolean;
    packaging_type?: string;
    dates?: ShipmentDates;
};
type PlatformShipmentDetailsStatus = {
    id?: number;
    bag_list?: number[];
    created_at?: string;
    status?: string;
    name?: string;
    progress?: number;
    shipment_id?: string;
    current_shipment_status?: string;
    color_code?: string;
};
type BagsDetails = {
    financial_breakup?: BagFinancialBreakup[];
    status?: BagCurrStatus;
    item?: BagItem;
    article?: BagArticle;
    id?: number;
    prices?: BagPrices;
    gst_details?: GstDetails;
    breakup_values?: BagBreakupValues;
    update_time?: number;
    current_status?: BagCurrentStatus;
    bag_status?: BagStatus;
    can_cancel?: boolean;
    can_return?: boolean;
    payment_methods?: any;
};
type BagFinancialBreakup = {
    value_of_good?: number;
    hsn_code?: string;
    price_effective?: number;
    cod_charges?: number;
    gst_fee?: string;
    fynd_credits?: number;
    refund_amount?: number;
    cashback_applied?: number;
    transfer_price?: number;
    amount_paid_roundoff?: number;
    coupon_value?: number;
    amount_paid?: number;
    gst_tax_percentage?: number;
    size?: string;
    total_units?: number;
    discount?: number;
    coupon_effective_discount?: number;
    cashback?: number;
    promotion_effective_discount?: number;
    gst_tag?: string;
    delivery_charge?: number;
    refund_credit?: number;
    price_marked?: number;
    identifiers?: Identifiers;
    item_name?: string;
    added_to_fynd_cash?: boolean;
    brand_calculated_amount?: number;
};
type Identifiers = {
    ean?: string;
};
type BagCurrStatus = {
    enable_tracking?: boolean;
    is_customer_return_allowed?: boolean;
    is_active?: boolean;
    is_returnable?: boolean;
    can_be_cancelled?: boolean;
};
type BagArticle = {
    identifiers?: ArticleIdentifiers;
    esp_modified?: boolean;
    is_set?: boolean;
    size?: string;
    code?: string;
    set?: Set;
    seller_identifier?: string;
    return_config?: BagArticleReturnConfig;
    _id?: string;
    uid?: string;
    child_details?: any;
};
type ArticleIdentifiers = {
    ean?: string;
};
type Set = {
    quantity?: number;
    size_distribution?: SetSizeDistribution;
};
type SetSizeDistribution = {
    sizes?: Sizes;
};
type Sizes = {
    size?: string;
    pieces?: number;
};
type BagArticleReturnConfig = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type GstDetails = {
    brand_calculated_amount?: number;
    gst_fee?: string;
    gst_tag?: string;
    hsn_code?: string;
    value_of_good?: number;
    gst_tax_percentage?: number;
    is_default_hsn_code?: boolean;
};
type BagBreakupValues = {
    name?: string;
    display?: string;
    value?: number;
};
type BagCurrentStatus = {
    updated_at?: string;
    bag_state_mapper?: BagStateMapper;
    status?: string;
    state_type?: string;
};
type BagStateMapper = {
    app_state_name?: string;
    is_active?: boolean;
    display_name?: string;
    name?: string;
    app_display_name?: string;
};
type BagStatus = {
    status?: string;
    state_type?: string;
    updated_at?: string;
    bag_state_mapper?: BagStatusBagStateMapper;
};
type BagStatusBagStateMapper = {
    is_active?: boolean;
    display_name?: string;
    name?: string;
    app_display_name?: string;
    app_state_name?: string;
};
type BagPrices = {
    cashback?: number;
    refund_credit?: number;
    coupon_value?: number;
    delivery_charge?: number;
    fynd_credits?: number;
    price_marked?: number;
    cashback_applied?: number;
    value_of_good?: number;
    amount_paid_roundoff?: number;
    amount_paid?: number;
    cod_charges?: number;
    price_effective?: number;
    refund_amount?: number;
    discount?: number;
};
type ShipmentBreakupValues = {
    name?: string;
    display?: string;
    value?: number;
};
type DpDetails = {
    gst_tag?: string;
};
type ShipmentInvoice = {
    payment_type?: string;
    updated_date?: string;
    invoice_url?: string;
    label_url?: string;
    payment_mode?: string;
    amount_to_collect?: number;
    rto_address?: RtoAddress;
};
type RtoAddress = {
    name?: string;
    id?: number;
    phone?: string;
    location_type?: string;
    store_address_json?: StoreAddressJson;
    code?: string;
    address1?: string;
    city?: string;
    country?: string;
    pincode?: string;
    company_id?: number;
    contact_person?: string;
    state?: string;
    store_email?: string;
    address2?: string;
};
type StoreAddressJson = {
    country?: string;
    updated_at?: string;
    area?: string;
    state?: string;
    address_type?: string;
    city?: string;
    pincode?: string;
    address1?: string;
    address2?: string;
    latitude?: number;
    longitude?: number;
    email?: string;
    phone?: string;
    created_at?: string;
    contact_person?: string;
    address_category?: string;
    version?: string;
    landmark?: string;
};
type PlatformFulfillingStore = {
    packaging_material_count?: number;
    location_type?: string;
    code?: string;
    city?: string;
    meta?: FulfillingStoreMeta;
    name?: string;
    is_active?: boolean;
    address1?: string;
    store_email?: string;
    is_archived?: boolean;
    state?: string;
    address2?: string;
    contact_person?: string;
    phone?: string;
    is_enabled_for_recon?: boolean;
    fulfillment_channel?: string;
    created_at?: string;
    id?: number;
    pincode?: string;
    brand_store_tags?: string[];
    company_id?: number;
    store_address_json?: FulfillingStoreStoreAddressJson;
    updated_at?: string;
    login_username?: string;
    country?: string;
};
type FulfillingStoreMeta = {
    additional_contact_details?: AdditionalContactDetails;
    documents?: Documents;
    gst_number?: string;
    display_name?: string;
    product_return_config?: ProductReturnConfig;
    allow_dp_assignment_from_fynd?: boolean;
    stage?: string;
    timing?: Timing;
};
type AdditionalContactDetails = {
    number?: string[];
};
type Documents = {
    gst?: Gst;
};
type Gst = {
    legal_name?: string;
    type?: string;
    value?: string;
    verified?: boolean;
};
type ProductReturnConfig = {
    on_same_store?: boolean;
};
type Timing = {
    opening?: Opening;
    weekday?: string;
    open?: boolean;
    closing?: Closing;
};
type Opening = {
    minute?: number;
    hour?: number;
};
type Closing = {
    hour?: number;
    minute?: number;
};
type FulfillingStoreStoreAddressJson = {
    address2?: string;
    area?: string;
    email?: string;
    phone?: string;
    state?: string;
    contact_person?: string;
    country?: string;
    pincode?: string;
    version?: string;
    created_at?: string;
    address_type?: string;
    city?: string;
    address1?: string;
    landmark?: string;
    latitude?: number;
    longitude?: number;
    updated_at?: string;
    address_category?: string;
};
type ShipmentGst = {
    brand_calculated_amount?: number;
    value_of_good?: number;
    gst_fee?: number;
};
type PlatformShipmentDetailsBrand = {
    credit_note_allowed?: boolean;
    brand_name?: string;
    modified_on?: string;
    id?: number;
    is_virtual_invoice?: boolean;
    created_on?: string;
    logo?: string;
};
type Promise = {
    timestamp?: Timestamp;
};
type Timestamp = {
    min?: string;
    max?: string;
};
type ShipmentTrackingDetails = {
    status?: string;
    time?: string;
    is_passed?: boolean;
    is_current?: boolean;
};
type ItemsPayments = {
    display_priority?: number;
    id?: number;
    is_active?: boolean;
    display_name?: string;
    logo?: string;
    payment_identifier?: string;
    source_nickname?: string;
    mode?: string;
    source?: string;
};
type PlatformOrderDetailsPage = {
    next?: string;
    previous?: string;
};
type ShipmentDates = {
    due_date?: string;
};
type OrderLanesCount = {
    stages: StageItem[];
};
type StageItem = {
    count?: number;
    text?: string;
    value?: string;
};
type UpdateOrderReprocessResponse = {
    status: string;
};
type PlatformOrderTrack = {
    success: boolean;
    request_id: string;
    message: string;
    mobile: string;
    country_code: string;
    resend_timer: number;
    resend_token?: string;
};
type OrderPicklistListing = {
    user?: PlatformOrderUserInfo;
    delivery_address?: PlatformDeliveryAddress;
    channel?: Channel;
    fyndstore_emp?: any;
    ordering_store?: any;
    breakup_values?: PlatformBreakupValues;
    id?: string;
    application?: PlatformApplication;
    shipments?: PlatformShipmentDetails;
    created_at?: string;
    total_shipments_in_order?: number;
    payments?: ItemsPayments;
    payment_methods?: any;
};
type Stages = {
    text?: string;
    value?: string;
    is_default?: boolean;
    filters?: StagesFilters;
};
type ItemTotal = {
    new?: number;
    processing?: number;
    returns?: number;
    all?: number;
};
type GetPingResponse = {
    ping: string;
};
type GetShipmentAddressResponse = {
    message: string;
    data: DataShipmentAddress;
    success: boolean;
};
type DataShipmentAddress = {
    city?: string;
    country?: string;
    pincode?: string;
    phone?: string;
    area?: string;
    address?: string;
    landmark?: string;
    state?: string;
    address_type?: string;
    address_category?: string;
    email?: string;
    name?: string;
};
type UpdateShipmentAddressRequest = {
    email: string;
    address: string;
    pincode: string;
    state: string;
    address_type: string;
    country: string;
    name: string;
    phone: string;
    area: string;
    landmark: string;
    city: string;
};
type UpdateShipmentAddressResponse = {
    success: boolean;
    message: string;
};
type ShipmentTrackResponse = {
    bag_list: ShipmentTrackResponseBagListItem[];
    message: string;
    order_value: number;
};
type ShipmentTrackResponseBagListItem = {
    enable_tracking?: boolean;
    price?: string;
    time_slot?: string;
    product_name?: string;
    can_return?: boolean;
    order_date?: string;
    is_try_at_home?: boolean;
    breakup_values?: ShipmentTrackResponseBagListItemBreakValues[];
    statuses?: ShipmentTrackResponseBagListItemStatuses[];
    is_active?: boolean;
    bag_id?: string;
    order_id?: string;
    size?: string;
    payment_mode_source?: string;
    dp_details?: ShipmentTrackResponseBagListItemDpDetails;
    product_id?: number;
    product_image?: ShipmentTrackResponseBagListItemsProductImage;
    brand_name?: string;
    price_marked?: string;
    status?: string;
    can_cancel?: boolean;
    payment_mode?: string;
    fynd_cash_msg?: string;
    delivery_address?: string;
};
type ShipmentTrackResponseBagListItemBreakValues = {
    name?: string;
    display?: string;
    value?: string;
};
type ShipmentTrackResponseBagListItemStatuses = {
    nps_rating?: number;
    nps_string?: string;
    progress_status?: ShipmentTrackResponseBagListItemStatusesProgress[];
    flow_type?: string;
    status_progress?: number;
    is_nps_done?: boolean;
    header_message?: string;
    is_delayed?: string;
    tracking_list?: ShipmentTrackResponseBagListItemStatusesTrack[];
};
type ShipmentTrackResponseBagListItemStatusesProgress = {
    title?: string;
    type?: string;
    state?: boolean;
};
type ShipmentTrackResponseBagListItemStatusesTrack = {
    status?: string;
    time?: string;
    is_passed?: boolean;
    is_current?: boolean;
};
type ShipmentTrackResponseBagListItemDpDetails = {
    tracking_no?: string;
    courier?: string;
};
type ShipmentTrackResponseBagListItemsProductImage = {
    aspect_ratio?: string;
    url?: string;
};
type UpdateShipmentStatusResponse = {
    shipments: any;
    error_shipments?: any[];
};
type UpdateShipmentStatusBody = {
    shipments: any;
    force_transition: boolean;
    task: boolean;
};
type ShipmentReasonsResponse = {
    success: boolean;
    message: string;
    reasons: ShipmentResponseReasons[];
};
type ShipmentResponseReasons = {
    reason_id?: number;
    reason?: string;
};
type PlatformShipmentTrack = {
    results: Results;
};
type Results = {
    awb?: string;
    updated_at?: string;
    last_location_recieved_at?: string;
    reason?: string;
    shipment_type?: string;
    status?: string;
    updated_time?: string;
    account_name?: string;
};
type ShipmentUpdateRequest = {
    bags: string[];
    reason: any;
    comments: string;
    action: string;
};
type ShipmentUpdateResponse = {
    success: boolean;
    message: string;
};
type UpdateProcessShipmenstRequestBody = {
    shipment_ids: string[];
    expected_status: string;
};
type UpdateProcessShipmenstRequestResponse = {
    success: boolean;
    message: string;
};
type GetVoiceCallbackResponse = {
    message: string;
};
type GetClickToCallResponse = {
    message: string;
};
type ApefaceApiError = {
    message?: string;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    app_id?: string;
    result: SearchKeywordResult;
    words?: string[];
    _custom_json?: any;
    is_active?: boolean;
};
type GetSearchWordsData = {
    app_id?: string;
    result?: any;
    uid?: string;
    _custom_json?: any;
    words?: string[];
};
type ErrorResponse = {
    meta?: any;
    status?: number;
    message?: string;
    code?: string;
};
type GetSearchWordsDetailResponse = {
    items?: GetSearchWordsData;
    page?: Page;
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type AutocompletePageAction = {
    url?: string;
    query?: any;
    type?: string;
    params?: any;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type Media = {
    url?: string;
    type?: string;
};
type AutocompleteResult = {
    display?: string;
    _custom_json?: any;
    action?: AutocompleteAction;
    logo?: Media;
};
type CreateAutocompleteKeyword = {
    app_id?: string;
    results?: AutocompleteResult[];
    words?: string[];
    _custom_json?: any;
    is_active?: boolean;
};
type GetAutocompleteWordsData = {
    app_id?: string;
    results?: any[];
    uid?: string;
    words?: string[];
    _custom_json?: any;
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type CreateAutocompleteWordsResponse = {
    app_id?: string;
    results?: any[];
    words?: string[];
    _custom_json?: any;
};
type ProductBundleItem = {
    min_quantity: number;
    auto_select?: boolean;
    product_uid: number;
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
    max_quantity: number;
};
type ProductBundleRequest = {
    name: string;
    meta?: any;
    page_visibility?: string[];
    logo?: string;
    products: ProductBundleItem[];
    created_by?: any;
    slug: string;
    created_on?: string;
    modified_on?: string;
    is_active: boolean;
    same_store_assignment?: boolean;
    choice: string;
    modified_by?: any;
};
type GetProductBundleCreateResponse = {
    name: string;
    meta?: any;
    page_visibility?: string[];
    logo?: string;
    company_id?: number;
    products: ProductBundleItem[];
    id?: string;
    created_by?: any;
    slug: string;
    created_on?: string;
    modified_on?: string;
    is_active: boolean;
    same_store_assignment?: boolean;
    choice: string;
    modified_by?: any;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleUpdateRequest = {
    name: string;
    meta?: any;
    page_visibility?: string[];
    logo?: string;
    products: ProductBundleItem[];
    slug: string;
    modified_on?: string;
    is_active: boolean;
    same_store_assignment?: boolean;
    choice: string;
    modified_by?: any;
};
type Price = {
    max_effective?: number;
    min_effective?: number;
    min_marked?: number;
    currency?: string;
    max_marked?: number;
};
type LimitedProductData = {
    short_description?: string;
    name?: string;
    country_of_origin?: string;
    attributes?: any;
    uid?: number;
    price?: any;
    item_code?: string;
    slug?: string;
    quantity?: number;
    images?: string[];
    identifier?: any;
    sizes?: string[];
};
type Size = {
    display?: string;
    value?: string;
    is_available?: boolean;
    quantity?: number;
};
type GetProducts = {
    min_quantity?: number;
    auto_select?: boolean;
    product_uid?: number;
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
    price?: Price;
    max_quantity?: number;
    product_details?: LimitedProductData;
    sizes?: Size[];
};
type GetProductBundleResponse = {
    name?: string;
    page_visibility?: string[];
    meta?: any;
    logo?: string;
    company_id?: number;
    products?: GetProducts[];
    slug?: string;
    is_active?: boolean;
    same_store_assignment?: boolean;
    choice?: string;
};
type Meta = {
    headers?: any;
    unit?: string;
    values?: any[];
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    name: string;
    title: string;
    subtitle?: string;
    description?: string;
    active?: boolean;
    company_id?: number;
    id?: string;
    created_by?: any;
    created_on?: string;
    modified_on?: string;
    tag?: string;
    image?: string;
    brand_id?: number;
    guide?: Guide;
    modified_by?: any;
};
type SuccessResponse = {
    success?: boolean;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type SizeGuideResponse = {
    name?: string;
    title?: string;
    subtitle?: string;
    active?: boolean;
    company_id?: number;
    id?: string;
    created_by?: any;
    created_on?: string;
    modified_on?: string;
    tag?: string;
    brand_id?: number;
    guide?: any;
    modified_by?: any;
};
type MetaFields = {
    value: string;
    key: string;
};
type ApplicationItemMeta = {
    _custom_meta: MetaFields[];
};
type GetConfigMetadataResponse = {
    condition?: any[];
    data: any[];
    values?: any[];
};
type AttributeDetailsGroup = {
    name: string;
    unit?: string;
    priority: number;
    logo?: string;
    key?: string;
    slug?: string;
    is_active: boolean;
    display_type: string;
};
type AppConfigurationDetail = {
    app_id: string;
    name?: string;
    logo?: string;
    priority: number;
    attributes?: AttributeDetailsGroup[];
    template_slugs?: string[];
    slug: string;
    is_default: boolean;
    is_active: boolean;
};
type ConfigErrorResponse = {
    message: string;
};
type PageResponseType = {
    total_count: number;
    current: number;
    next: number;
    has_next: boolean;
};
type GetConfigResponse = {
    data: any[];
    page: PageResponseType;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    app_id: string;
    name?: string;
    logo?: string;
    priority: number;
    key: string;
    is_default: boolean;
    default_key: string;
    is_active: boolean;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type GetCatalogConfigurationDetailsProduct = {
    compare?: any;
    similar?: any;
    detail?: any;
    variant?: any;
};
type MetaDataListingSortMetaResponse = {
    display?: string;
    key?: string;
};
type MetaDataListingSortResponse = {
    data?: MetaDataListingSortMetaResponse[];
};
type MetaDataListingFilterMetaResponse = {
    display?: string;
    units?: any[];
    filter_types?: string[];
    key?: string;
};
type MetaDataListingFilterResponse = {
    data?: MetaDataListingFilterMetaResponse[];
};
type MetaDataListingResponse = {
    sort: MetaDataListingSortResponse;
    filter: MetaDataListingFilterResponse;
};
type GetCatalogConfigurationMetaData = {
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: MetaDataListingResponse;
};
type ConfigurationListingSortConfig = {
    name?: string;
    priority: number;
    logo?: string;
    key: string;
    is_active: boolean;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
};
type ConfigurationBucketPoints = {
    end?: number;
    display?: string;
    start?: number;
};
type ConfigurationListingFilterValue = {
    sort?: string;
    value?: string;
    bucket_points?: ConfigurationBucketPoints[];
    map?: any;
    condition?: string;
};
type ConfigurationListingFilterConfig = {
    value_config?: ConfigurationListingFilterValue;
    name?: string;
    priority: number;
    logo?: string;
    key: string;
    type: string;
    is_active: boolean;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListing = {
    sort: ConfigurationListingSort;
    filter: ConfigurationListingFilter;
};
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductConfig = {
    title?: string;
    priority: number;
    logo?: string;
    subtitle?: string;
    key: string;
    size?: ProductSize;
    is_active: boolean;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    name: string;
    priority: number;
    logo?: string;
    key: string;
    size: ProductSize;
    is_active: boolean;
    display_type: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type AppConfiguration = {
    app_id: string;
    config_type: string;
    listing?: ConfigurationListing;
    product?: ConfigurationProduct;
    config_id?: string;
};
type AppCatalogConfiguration = {
    app_id: string;
    config_type: string;
    listing?: ConfigurationListing;
    product?: ConfigurationProduct;
    id?: string;
    config_id?: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    app_id: string;
    config_type: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    product?: GetCatalogConfigurationDetailsProduct;
    id?: string;
    config_id?: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductFiltersKey = {
    display: string;
    name: string;
    logo?: string;
    kind?: string;
};
type ProductFiltersValue = {
    is_selected: boolean;
    value: string;
    selected_max?: number;
    min?: number;
    currency_code?: string;
    currency_symbol?: string;
    selected_min?: number;
    display_format?: string;
    display: string;
    max?: number;
    count?: number;
    query_format?: string;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
type ProductSortOn = {
    is_selected?: boolean;
    name?: string;
    value?: string;
};
type GetCollectionQueryOptionResponse = {
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type UserInfo = {
    user_id?: string;
    uid?: string;
    username?: string;
    email?: string;
};
type Schedule = {
    end?: string;
    cron?: string;
    duration?: number;
    start?: string;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CreateCollection = {
    app_id: string;
    description?: string;
    badge?: CollectionBadge;
    created_by?: UserInfo;
    slug: string;
    _schedule?: Schedule;
    query?: any;
    is_visible?: boolean;
    visible_facets_keys?: string[];
    modified_by?: UserInfo;
    _custom_json?: any;
    meta?: any;
    published?: boolean;
    banners: CollectionBanner;
    type: string;
    is_active?: boolean;
    name: string;
    logo: CollectionImage;
    tags?: string[];
    seo?: SeoDetail;
    allow_sort?: boolean;
    _locale_language?: any;
    allow_facets?: boolean;
    sort_on?: string;
};
type BannerImage = {
    aspect_ratio?: string;
    url?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
type CollectionCreateResponse = {
    app_id?: string;
    name?: string;
    meta?: any;
    logo?: BannerImage;
    description?: string;
    badge?: any;
    banners?: ImageUrls;
    slug?: string;
    cron?: any;
    query?: any;
    type?: string;
    allow_sort?: boolean;
    allow_facets?: boolean;
    _schedule?: any;
    is_active?: boolean;
    tag?: string[];
    visible_facets_keys?: string[];
};
type CollectionListingFilterType = {
    display?: string;
    is_selected?: boolean;
    name?: string;
};
type CollectionListingFilterTag = {
    display?: string;
    is_selected?: boolean;
    name?: string;
};
type CollectionListingFilter = {
    type?: CollectionListingFilterType[];
    tags?: CollectionListingFilterTag[];
};
type Media1 = {
    url: string;
    meta?: any;
    type?: string;
};
type GetCollectionDetailNest = {
    app_id?: string;
    description?: string;
    badge?: any;
    slug?: string;
    _schedule?: any;
    cron?: any;
    query?: any;
    tag?: string[];
    visible_facets_keys?: string[];
    action?: Action;
    meta?: any;
    uid?: string;
    banners?: ImageUrls;
    type?: string;
    is_active?: boolean;
    name?: string;
    logo?: Media1;
    allow_sort?: boolean;
    allow_facets?: boolean;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page?: Page;
};
type CollectionDetailResponse = {
    app_id?: string;
    name?: string;
    meta?: any;
    logo?: Media1;
    description?: string;
    badge?: any;
    banners?: ImageUrls;
    slug?: string;
    cron?: any;
    query?: any;
    type?: string;
    allow_sort?: boolean;
    allow_facets?: boolean;
    _schedule?: any;
    is_active?: boolean;
    tag?: string[];
    visible_facets_keys?: string[];
};
type UpdateCollection = {
    description?: string;
    badge?: CollectionBadge;
    slug?: string;
    _schedule?: Schedule;
    query?: any;
    is_visible?: boolean;
    visible_facets_keys?: string[];
    modified_by?: UserInfo;
    _custom_json?: any;
    meta?: any;
    published?: boolean;
    banners?: CollectionBanner;
    is_active?: boolean;
    name?: string;
    logo?: CollectionImage;
    tags?: string[];
    seo?: SeoDetail;
    allow_sort?: boolean;
    _locale_language?: any;
    allow_facets?: boolean;
    sort_on?: string;
};
type CollectionItemRequest = {
    page_no: number;
    page_size: number;
};
type UpdatedResponse = {
    message?: string;
    items_not_updated?: number[];
};
type ProductDetailAttribute = {
    value?: string;
    type?: string;
    key?: string;
};
type ProductDetailGroupedAttribute = {
    title?: string;
    details?: ProductDetailAttribute[];
};
type Price1 = {
    currency_symbol?: string;
    max?: number;
    currency_code?: string;
    min?: number;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductBrand = {
    name?: string;
    action?: Action;
    uid?: number;
    logo?: Media1;
};
type ProductListingDetail = {
    similars?: string[];
    description?: string;
    medias?: Media1[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    slug: string;
    has_variant?: boolean;
    teaser_tag?: any;
    item_type?: string;
    price?: ProductListingPrice;
    color?: string;
    brand?: ProductBrand;
    uid?: number;
    promo_meta?: any;
    type?: string;
    discount?: string;
    rating?: number;
    name?: string;
    rating_count?: number;
    short_description?: string;
    attributes?: any;
    tryouts?: string[];
    item_code?: string;
    highlights?: string[];
    sellable?: boolean;
    product_online_date?: string;
    image_nature?: string;
};
type GetCollectionItemsResponse = {
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    page?: Page;
};
type CatalogInsightBrand = {
    name?: string;
    total_sizes?: number;
    available_articles?: number;
    total_articles?: number;
    article_freshness?: number;
    available_sizes?: number;
};
type CatalogInsightItem = {
    sellable_count?: number;
    count?: number;
    out_of_stock_count?: number;
};
type CatalogInsightResponse = {
    brand_distribution?: CatalogInsightBrand;
    item?: CatalogInsightItem;
};
type CrossSellingData = {
    articles?: number;
    products?: number;
};
type CrossSellingResponse = {
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    brand_ids?: number[];
    enabled?: boolean;
    opt_level: string;
    store_ids?: number[];
};
type CompanyOptIn = {
    brand_ids: number[];
    company_id: number;
    created_by?: any;
    created_on: number;
    modified_on: number;
    platform: string;
    enabled: boolean;
    opt_level: string;
    modified_by?: any;
    store_ids: number[];
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    business_type?: string;
    name?: string;
    company_type?: string;
    uid?: number;
};
type CompanyBrandDetail = {
    brand_name?: string;
    brand_id?: number;
    company_id?: number;
    total_article?: number;
};
type OptinCompanyBrandDetailsView = {
    items?: CompanyBrandDetail[];
    page?: Page;
};
type OptinCompanyMetrics = {
    store?: number;
    brand?: number;
    company?: string;
};
type StoreDetail = {
    name?: string;
    store_type?: string;
    uid?: number;
    company_id?: number;
    timing?: any;
    additional_contacts?: any[];
    created_on?: string;
    store_code?: string;
    modified_on?: string;
    display_name?: string;
    documents?: any[];
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    enriched?: boolean;
    mandatory_details: AttributeMasterMandatoryDetails;
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    allowed_values?: string[];
    multi?: boolean;
    type: string;
    mandatory?: boolean;
    format?: string;
    range?: AttributeSchemaRange;
};
type AttributeMasterFilter = {
    indexing: boolean;
    priority?: number;
    depends_on?: string[];
};
type AttributeMasterDetails = {
    display_type: string;
};
type GenderDetail = {
    departments?: string[];
    name?: string;
    meta?: AttributeMasterMeta;
    logo?: string;
    enabled_for_end_consumer?: boolean;
    description?: string;
    schema?: AttributeMaster;
    filters?: AttributeMasterFilter;
    id?: string;
    slug?: string;
    is_nested?: boolean;
    details?: AttributeMasterDetails;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    status?: number;
    meta?: any;
    message?: string;
    errors?: any;
    code?: string;
};
type UserSerializer = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type GetDepartment = {
    name?: string;
    logo?: string;
    page_size?: number;
    uid?: number;
    synonyms?: string[];
    item_type?: string;
    priority_order?: number;
    page_no?: number;
    slug?: string;
    created_by?: UserSerializer;
    created_on?: string;
    search?: string;
    modified_on?: string;
    is_active?: boolean;
    modified_by?: UserSerializer;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    status?: number;
    meta?: any;
    message?: string;
    errors?: any;
    code?: string;
};
type ProductTemplate = {
    departments?: string[];
    name?: string;
    logo?: string;
    description?: string;
    attributes?: string[];
    categories?: string[];
    created_by?: any;
    slug: string;
    is_archived?: boolean;
    is_physical: boolean;
    is_expirable: boolean;
    created_on?: string;
    modified_on?: string;
    is_active?: boolean;
    tag?: string;
    modified_by?: any;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type TemplateDetails = {
    departments?: string[];
    name?: string;
    logo?: string;
    description?: string;
    attributes?: string[];
    categories?: string[];
    id?: string;
    slug: string;
    is_archived?: boolean;
    is_physical: boolean;
    is_expirable: boolean;
    is_active?: boolean;
    tag?: string;
};
type Properties = {
    custom_order?: any;
    country_of_origin?: any;
    description?: any;
    multi_size?: any;
    slug?: any;
    currency?: any;
    teaser_tag?: any;
    product_publish?: any;
    product_group_tag?: any;
    item_type?: any;
    command?: any;
    return_config?: any;
    variants?: any;
    is_dependent?: any;
    trader_type?: any;
    is_active?: any;
    name?: any;
    short_description?: any;
    hsn_code?: any;
    media?: any;
    category_slug?: any;
    tags?: any;
    item_code?: any;
    highlights?: any;
    trader?: any;
    size_guide?: any;
    brand_uid?: any;
    sizes?: any;
    no_of_boxes?: any;
    moq?: any;
};
type GlobalValidation = {
    required?: string[];
    title?: string;
    definitions?: any;
    description?: string;
    type?: string;
    properties?: Properties;
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplatesValidationResponse = {
    template_details?: TemplateDetails;
    data?: TemplateValidationData;
};
type InventoryValidationResponse = {
    data?: any;
    message?: string;
};
type HSNData = {
    hsn_code?: string[];
    country_of_origin?: string[];
};
type HSNCodesResponse = {
    data?: HSNData;
    message?: string;
};
type ProductDownloadItemsData = {
    templates?: string[];
    brand?: string[];
    type?: string;
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadsItems = {
    status?: string;
    data?: ProductDownloadItemsData;
    completed_on?: string;
    template_tags?: any;
    seller_id?: number;
    id?: string;
    created_by?: VerifiedBy;
    trigger_on?: string;
    url?: string;
    task_id?: string;
};
type ProductDownloadsResponse = {
    items?: ProductDownloadsItems;
    page?: Page;
};
type ProductConfigurationDownloads = {
    multivalue?: boolean;
    data?: any[];
};
type Media2 = {
    landscape: string;
    portrait: string;
    logo: string;
};
type CategoryMappingValues = {
    name: string;
    catalog_id?: number;
};
type CategoryMapping = {
    google?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
};
type Hierarchy = {
    department: number;
    l2: number;
    l1: number;
};
type CategoryRequestBody = {
    departments: number[];
    name: string;
    media?: Media2;
    priority?: number;
    marketplaces?: CategoryMapping;
    level: number;
    tryouts?: string[];
    synonyms?: string[];
    slug?: string;
    hierarchy?: Hierarchy[];
    is_active: boolean;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type Category = {
    departments: number[];
    name: string;
    media?: Media2;
    priority?: number;
    marketplaces?: CategoryMapping;
    uid?: number;
    level: number;
    tryouts?: string[];
    synonyms?: string[];
    created_by?: any;
    slug?: string;
    _id?: string;
    hierarchy?: Hierarchy[];
    created_on?: string;
    modified_on?: string;
    is_active: boolean;
    modified_by?: any;
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type SingleCategoryResponse = {
    data?: Category;
};
type CustomOrder = {
    is_custom_order?: boolean;
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type TaxIdentifier = {
    hsn_code_id?: string;
    hsn_code?: string;
    reporting_hsn?: string;
};
type ReturnConfig = {
    time: number;
    returnable: boolean;
    unit: string;
};
type Trader = {
    address?: string[];
    name?: string;
    type?: string;
};
type OrderQuantity = {
    maximum?: number;
    minimum?: number;
    is_set?: boolean;
};
type ProductCreateUpdate = {
    custom_order?: CustomOrder;
    country_of_origin: string;
    change_request_id?: string;
    description?: string;
    multi_size?: boolean;
    slug: string;
    currency: string;
    teaser_tag?: TeaserTag;
    action?: string;
    is_image_less_product?: boolean;
    product_publish?: ProductPublish;
    requester?: string;
    product_group_tag?: string[];
    company_id: number;
    item_type: string;
    tax_identifier: TaxIdentifier;
    _custom_json?: any;
    return_config: ReturnConfig;
    variants?: any;
    is_dependent?: boolean;
    uid?: number;
    is_active?: boolean;
    is_set?: boolean;
    departments: number[];
    name: string;
    short_description?: string;
    media?: Media1[];
    template_tag: string;
    category_slug: string;
    tags?: string[];
    item_code: string;
    highlights?: string[];
    trader: Trader[];
    size_guide?: string;
    brand_uid: number;
    no_of_boxes?: number;
    moq?: OrderQuantity;
    bulk_job_id?: string;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Logo = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
    aspect_ratio_f?: number;
};
type Brand = {
    name?: string;
    uid?: number;
    logo?: Logo;
};
type Image = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
    aspect_ratio_f?: number;
};
type Product = {
    custom_order?: any;
    country_of_origin?: string;
    description?: string;
    multi_size?: boolean;
    slug?: string;
    is_expirable?: boolean;
    currency?: string;
    category_uid?: number;
    product_publish?: ProductPublished;
    item_type?: string;
    primary_color?: string;
    id?: string;
    color?: string;
    _custom_json?: any;
    is_physical?: boolean;
    variants?: any;
    all_sizes?: any[];
    brand?: Brand;
    is_dependent?: boolean;
    l3_mapping?: string[];
    uid?: number;
    images?: Image[];
    is_active?: boolean;
    is_set?: boolean;
    departments?: number[];
    name?: string;
    short_description?: string;
    hsn_code?: string;
    media?: Media1[];
    template_tag?: string;
    category_slug?: string;
    item_code?: string;
    highlights?: string[];
    size_guide?: string;
    brand_uid?: number;
    image_nature?: string;
    sizes?: any[];
    moq?: any;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type AttributeMasterSerializer = {
    description?: string;
    created_by?: any;
    slug: string;
    modified_by?: any;
    suggestion?: string;
    unit?: string;
    enabled_for_end_consumer?: boolean;
    filters: AttributeMasterFilter;
    schema: AttributeMaster;
    synonyms?: any;
    is_nested?: boolean;
    created_on?: string;
    variant?: boolean;
    departments: string[];
    name?: string;
    logo?: string;
    raw_key?: string;
    tags?: string[];
    modified_on?: string;
    details: AttributeMasterDetails;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserInfo1 = {
    user_id?: string;
    uid?: string;
    username?: string;
    email?: string;
};
type BulkJob = {
    failed_records?: any[];
    failed?: number;
    custom_template_tag?: string;
    template_tag?: string;
    stage?: string;
    company_id: number;
    file_path?: string;
    total: number;
    created_by?: UserInfo1;
    created_on: string;
    modified_on?: string;
    cancelled?: number;
    cancelled_records?: any[];
    is_active?: boolean;
    tracking_url?: string;
    modified_by?: UserInfo1;
    succeed?: number;
};
type BulkResponse = {
    batch_id: string;
    created_by?: UserInfo1;
    created_on: string;
    modified_on?: string;
    is_active?: boolean;
    modified_by?: UserInfo1;
};
type UserDetail = {
    user_id?: string;
    username?: string;
    full_name?: string;
};
type ProductBulkRequest = {
    failed_records?: string[];
    failed?: number;
    template_tag?: string;
    stage?: string;
    company_id?: number;
    file_path?: string;
    total?: number;
    created_by?: UserDetail;
    created_on?: string;
    template?: ProductTemplate;
    cancelled_records?: string[];
    modified_on?: string;
    cancelled?: number;
    is_active?: boolean;
    modified_by?: UserDetail;
    succeed?: number;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type BulkProductRequest = {
    template_tag: string;
    data: any[];
    company_id: number;
    batch_id: string;
};
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type ProductBulkAssets = {
    url: string;
    user: any;
    company_id?: number;
};
type UserCommon = {
    user_id?: string;
    company_id?: number;
    username?: string;
};
type Items = {
    failed_records?: string[];
    failed?: number;
    retry?: number;
    stage?: string;
    file_path?: string;
    company_id?: number;
    total?: number;
    id?: string;
    created_by?: UserCommon;
    created_on?: string;
    modified_on?: string;
    cancelled_records?: string[];
    cancelled?: number;
    is_active?: boolean;
    tracking_url?: string;
    modified_by?: UserCommon;
    succeed?: number;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
};
type ProductSizeDeleteDataResponse = {
    size?: string;
    item_id?: number;
    company_id?: number;
};
type ProductSizeDeleteResponse = {
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
type SetSize = {
    size: string;
    pieces: number;
};
type SizeDistribution = {
    sizes: SetSize[];
};
type InventorySet = {
    quantity?: number;
    size_distribution: SizeDistribution;
};
type GTIN = {
    primary?: boolean;
    gtin_type: string;
    gtin_value: string;
};
type InvSize = {
    expiration_date?: string;
    item_height?: number;
    item_weight_unit_of_measure?: string;
    item_dimensions_unit_of_measure?: string;
    item_length?: number;
    set?: InventorySet;
    price?: number;
    item_width?: number;
    item_weight?: number;
    quantity: number;
    store_code: string;
    currency: string;
    size: string;
    price_effective: number;
    is_set?: boolean;
    price_transfer?: number;
    identifiers: GTIN[];
};
type ItemQuery = {
    uid?: number;
    brand_uid?: number;
    item_code?: string;
};
type InventoryRequest = {
    sizes: InvSize[];
    company_id: number;
    item: ItemQuery;
};
type InventoryResponse = {
    sellable_quantity?: number;
    store?: any;
    uid?: string;
    price?: number;
    quantity?: number;
    currency?: string;
    inventory_updated_on?: string;
    size?: string;
    seller_identifier?: string;
    item_id?: number;
    price_effective?: number;
    identifiers?: any;
    price_transfer?: number;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type StoreMeta = {
    id: number;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type CompanyMeta = {
    id: number;
};
type PriceMeta = {
    effective: number;
    marked: number;
    tp_notes?: any;
    currency: string;
    transfer: number;
};
type WeightResponse = {
    shipping: number;
    unit: string;
    is_default: boolean;
};
type DimensionResponse = {
    length: number;
    height: number;
    unit: string;
    width: number;
    is_default: boolean;
};
type BrandMeta = {
    name: string;
    id: number;
};
type Trader1 = {
    address: string[];
    name: string;
    type: string;
};
type ManufacturerResponse = {
    address: string;
    name: string;
    is_default: boolean;
};
type InventorySellerResponse = {
    fynd_article_code: string;
    country_of_origin: string;
    store: StoreMeta;
    fynd_meta?: any;
    created_by?: UserSerializer;
    fragile: boolean;
    raw_meta?: any;
    quantities?: Quantities;
    modified_by?: UserSerializer;
    expiration_date?: string;
    company: CompanyMeta;
    track_inventory?: boolean;
    added_on_store?: string;
    price: PriceMeta;
    tax_identifier?: any;
    return_config?: any;
    _custom_json?: any;
    item_id: number;
    weight: WeightResponse;
    dimension: DimensionResponse;
    brand: BrandMeta;
    meta?: any;
    stage?: string;
    uid: string;
    set?: InventorySet;
    size: string;
    is_active?: boolean;
    fynd_item_code: string;
    is_set?: boolean;
    total_quantity: number;
    trader?: Trader1[];
    identifier: any;
    manufacturer: ManufacturerResponse;
    seller_identifier: string;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type BulkInventoryGetItems = {
    failed_records?: string[];
    failed?: number;
    stage?: string;
    company_id?: number;
    file_path?: string;
    id?: string;
    total?: number;
    created_by?: any;
    created_on?: string;
    cancelled_records?: string[];
    cancelled?: number;
    modified_on?: string;
    is_active?: boolean;
    modified_by?: any;
    succeed?: number;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    expiration_date?: string;
    price_marked?: number;
    total_quantity?: number;
    store_code: string;
    price_effective?: number;
    seller_identifier: string;
};
type InventoryBulkRequest = {
    sizes: InventoryJobPayload[];
    batch_id: string;
    company_id: number;
    user?: any;
};
type InventoryExportRequest = {
    store?: number[];
    brand?: number[];
    type?: string;
};
type InventoryExportResponse = {
    status?: string;
    seller_id: number;
    trigger_on?: string;
    task_id: string;
    request_params?: any;
};
type InventoryExportJob = {
    status?: string;
    completed_on?: string;
    seller_id: number;
    trigger_on?: string;
    url?: string;
    task_id: string;
    request_params?: any;
};
type FilerList = {
    display?: string;
    value?: string;
};
type InventoryConfig = {
    multivalues?: boolean;
    data?: FilerList[];
};
type InventoryPayload = {
    expiration_date?: string;
    store_id: number;
    price_marked?: number;
    total_quantity?: number;
    price_effective?: number;
    seller_identifier: string;
};
type InventoryRequestSchemaV2 = {
    payload?: InventoryPayload[];
    meta?: any;
    company_id: number;
};
type InventoryFailedReason = {
    errors?: string;
    message: string;
};
type InventoryResponseItem = {
    reason?: InventoryFailedReason;
    data?: InventoryPayload;
};
type InventoryUpdateResponse = {
    items?: InventoryResponseItem[];
    message: string;
};
type HsnUpsert = {
    tax_on_mrp: boolean;
    hsn_code: string;
    tax1: number;
    hs2_code: string;
    threshold2?: number;
    tax_on_esp?: boolean;
    company_id: number;
    uid?: number;
    threshold1: number;
    tax2?: number;
};
type HsnCodesObject = {
    tax_on_mrp?: boolean;
    hsn_code?: string;
    tax1?: number;
    hs2_code?: string;
    threshold2?: number;
    tax_on_esp?: boolean;
    company_id?: number;
    id?: string;
    threshold1?: number;
    modified_on?: string;
    tax2?: number;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type PageResponse = {
    has_previous?: boolean;
    current?: string;
    item_total?: number;
    size?: number;
    has_next?: boolean;
};
type HsnCodesListingResponse = {
    items?: HsnCodesObject[];
    page?: PageResponse;
};
type BulkHsnUpsert = {
    data: HsnUpsert[];
};
type BulkHsnResponse = {
    success?: boolean;
};
type TaxSlab = {
    rate: number;
    effective_date: string;
    cess?: number;
    threshold: number;
};
type HSNDataInsertV2 = {
    hsn_code: string;
    taxes: TaxSlab[];
    description: string;
    created_by?: any;
    country_code: string;
    type: string;
    created_on?: string;
    modified_on?: string;
    reporting_hsn: string;
    modified_by?: any;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    departments?: string[];
    name?: string;
    action?: Action;
    logo?: Media;
    uid?: number;
    banners?: ImageUrls;
    slug?: string;
    discount?: string;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    name?: string;
    logo?: Media;
    uid?: number;
    priority_order?: number;
    slug?: string;
};
type DepartmentResponse = {
    items?: Department[];
};
type DepartmentIdentifier = {
    slug?: string;
    uid?: number;
};
type ThirdLevelChild = {
    name?: string;
    action?: Action;
    uid?: number;
    banners?: ImageUrls;
    slug?: string;
    _custom_json?: any;
    childs?: any[];
};
type SecondLevelChild = {
    name?: string;
    action?: Action;
    uid?: number;
    banners?: ImageUrls;
    slug?: string;
    _custom_json?: any;
    childs?: ThirdLevelChild[];
};
type Child = {
    name?: string;
    action?: Action;
    uid?: number;
    banners?: ImageUrls;
    slug?: string;
    _custom_json?: any;
    childs?: SecondLevelChild[];
};
type CategoryItems = {
    name?: string;
    action?: Action;
    uid?: number;
    banners?: ImageUrls;
    slug?: string;
    childs?: Child[];
};
type DepartmentCategoryTree = {
    department?: string;
    items?: CategoryItems[];
};
type CategoryListingResponse = {
    departments?: DepartmentIdentifier[];
    data?: DepartmentCategoryTree[];
};
type ApplicationProductListingResponse = {
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    page: Page;
};
type ProductDetail = {
    similars?: string[];
    description?: string;
    medias?: Media1[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    slug: string;
    has_variant?: boolean;
    teaser_tag?: any;
    item_type?: string;
    color?: string;
    brand?: ProductBrand;
    uid?: number;
    promo_meta?: any;
    type?: string;
    rating?: number;
    name?: string;
    rating_count?: number;
    short_description?: string;
    attributes?: any;
    tryouts?: string[];
    item_code?: string;
    highlights?: string[];
    product_online_date?: string;
    image_nature?: string;
};
type ArticleQuery = {
    size: string;
    item_id: number;
    ignored_stores?: number[];
};
type AssignStoreArticle = {
    meta?: any;
    article_assignment?: ArticleAssignment;
    quantity?: number;
    query?: ArticleQuery;
    group_id?: string;
};
type AssignStore = {
    app_id: string;
    articles: AssignStoreArticle[];
    company_id?: number;
    pincode: string;
    channel_type?: string;
    channel_identifier?: string;
    store_ids?: number[];
};
type ArticleAssignment1 = {
    strategy?: string;
    level?: string;
};
type StoreAssignResponse = {
    status: boolean;
    meta?: any;
    store_id?: number;
    price_marked?: number;
    strategy_wise_listing?: any[];
    uid?: string;
    company_id?: number;
    group_id?: string;
    article_assignment: ArticleAssignment1;
    index?: number;
    _id?: string;
    quantity: number;
    s_city?: string;
    store_pincode?: number;
    size: string;
    item_id: number;
    price_effective?: number;
};
type GetAddressSerializer = {
    longitude?: number;
    city?: string;
    state?: string;
    landmark?: string;
    address_type?: string;
    pincode?: number;
    address2?: string;
    latitude?: number;
    country_code?: string;
    address1?: string;
    country?: string;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type LocationManagerSerializer = {
    mobile_no: SellerPhoneNumber;
    name?: string;
    email?: string;
};
type UserSerializer1 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
type Document = {
    value: string;
    url?: string;
    verified?: boolean;
    legal_name?: string;
    type: string;
};
type UserSerializer2 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type GetCompanySerializer = {
    name?: string;
    verified_by?: UserSerializer2;
    business_type?: string;
    company_type?: string;
    uid?: number;
    stage?: string;
    reject_reason?: string;
    created_by?: UserSerializer2;
    created_on?: string;
    modified_on?: string;
    verified_on?: string;
    addresses?: GetAddressSerializer[];
    modified_by?: UserSerializer2;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    open: boolean;
    opening?: LocationTimingSerializer;
    weekday: string;
    closing?: LocationTimingSerializer;
};
type InvoiceCredSerializer = {
    enabled?: boolean;
    password?: string;
    username?: string;
};
type InvoiceDetailsSerializer = {
    e_invoice?: InvoiceCredSerializer;
    e_waybill?: InvoiceCredSerializer;
};
type GetLocationSerializer = {
    store_type?: string;
    notification_emails?: string[];
    address: GetAddressSerializer;
    manager?: LocationManagerSerializer;
    created_by?: UserSerializer1;
    product_return_config?: ProductReturnConfigSerializer;
    documents?: Document[];
    code: string;
    modified_by?: UserSerializer1;
    company?: GetCompanySerializer;
    _custom_json?: any;
    phone_number: string;
    verified_by?: UserSerializer1;
    stage?: string;
    uid?: number;
    created_on?: string;
    verified_on?: string;
    display_name: string;
    name: string;
    contact_numbers?: SellerPhoneNumber[];
    integration_type?: LocationIntegrationType;
    modified_on?: string;
    timing?: LocationDayWiseSerializer[];
    warnings?: any;
    gst_credentials?: InvoiceDetailsSerializer;
};
type LocationListSerializer = {
    items?: GetLocationSerializer[];
    page?: Page;
};
type CompanyTaxesSerializer = {
    effective_date?: string;
    enable?: boolean;
    rate?: number;
};
type BusinessCountryInfo = {
    country_code?: string;
    country?: string;
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type ContactDetails = {
    phone?: SellerPhoneNumber[];
    emails?: string[];
};
type GetCompanyProfileSerializerResponse = {
    taxes?: CompanyTaxesSerializer[];
    business_country_info?: BusinessCountryInfo;
    mode?: string;
    stage?: string;
    created_on?: string;
    modified_by?: UserSerializer;
    name?: string;
    franchise_enabled?: boolean;
    addresses?: GetAddressSerializer[];
    created_by?: UserSerializer;
    business_details?: BusinessDetails;
    verified_by?: UserSerializer;
    modified_on?: string;
    verified_on?: string;
    business_info?: string;
    company_type: string;
    uid: number;
    documents?: Document[];
    business_type: string;
    warnings?: any;
    notification_emails?: string[];
    contact_details?: ContactDetails;
};
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    enable?: boolean;
    rate?: number;
};
type CreateUpdateAddressSerializer = {
    pincode: number;
    longitude: number;
    state: string;
    country: string;
    address1: string;
    address_type: string;
    country_code?: string;
    landmark?: string;
    city: string;
    latitude: number;
    address2?: string;
};
type UpdateCompany = {
    taxes?: CompanyTaxesSerializer1[];
    business_type?: string;
    documents?: Document[];
    warnings?: any;
    name?: string;
    reject_reason?: string;
    notification_emails?: string[];
    franchise_enabled?: boolean;
    _custom_json?: any;
    addresses?: CreateUpdateAddressSerializer[];
    business_details?: BusinessDetails;
    business_info?: string;
    contact_details?: ContactDetails;
    company_type?: string;
};
type ProfileSuccessResponse = {
    success?: boolean;
    uid?: number;
};
type DocumentsObj = {
    pending?: number;
    verified?: number;
};
type MetricsSerializer = {
    company_documents?: DocumentsObj;
    store_documents?: DocumentsObj;
    store?: DocumentsObj;
    brand?: DocumentsObj;
    product?: DocumentsObj;
    uid?: number;
    stage?: string;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    synonyms?: string[];
    reject_reason?: string;
    mode?: string;
    stage?: string;
    created_on?: string;
    modified_by?: UserSerializer;
    name: string;
    created_by?: UserSerializer;
    verified_by?: UserSerializer;
    slug_key?: string;
    modified_on?: string;
    _custom_json?: any;
    verified_on?: string;
    description?: string;
    warnings?: any;
    logo?: string;
    banner?: BrandBannerSerializer;
    uid?: number;
    _locale_language?: any;
};
type CreateUpdateBrandRequestSerializer = {
    description?: string;
    synonyms?: string[];
    brand_tier?: string;
    name: string;
    _custom_json?: any;
    logo: string;
    company_id?: number;
    banner?: BrandBannerSerializer;
    uid?: number;
    _locale_language?: any;
};
type CompanySocialAccounts = {
    url: string;
    name: string;
};
type CompanyDetails = {
    socials?: CompanySocialAccounts[];
    website_url?: string;
};
type CompanySerializer = {
    details?: CompanyDetails;
    created_on?: string;
    modified_by?: UserSerializer;
    business_type: string;
    business_country_info?: BusinessCountryInfo;
    name?: string;
    reject_reason?: string;
    verified_by?: UserSerializer;
    notification_emails?: string[];
    modified_on?: string;
    addresses?: GetAddressSerializer[];
    _custom_json?: any;
    market_channels?: string[];
    verified_on?: string;
    created_by?: UserSerializer;
    uid?: number;
    stage?: string;
    company_type: string;
};
type CompanyBrandSerializer = {
    created_on?: string;
    modified_by?: UserSerializer;
    warnings?: any;
    company?: CompanySerializer;
    reject_reason?: string;
    verified_by?: UserSerializer;
    modified_on?: string;
    verified_on?: string;
    created_by?: UserSerializer;
    brand?: GetBrandResponseSerializer;
    uid?: number;
    stage?: string;
};
type CompanyBrandListSerializer = {
    items?: CompanyBrandSerializer[];
    page?: Page;
};
type CompanyBrandPostRequestSerializer = {
    uid?: number;
    company: number;
    brands: number[];
};
type LocationSerializer = {
    documents?: Document[];
    display_name: string;
    gst_credentials?: InvoiceDetailsSerializer;
    warnings?: any;
    name: string;
    company: number;
    store_type?: string;
    timing?: LocationDayWiseSerializer[];
    notification_emails?: string[];
    _custom_json?: any;
    product_return_config?: ProductReturnConfigSerializer;
    contact_numbers?: SellerPhoneNumber[];
    code: string;
    manager?: LocationManagerSerializer;
    uid?: number;
    stage?: string;
    address: GetAddressSerializer;
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type FailedResponse = {
    message: string;
};
type CDN = {
    url: string;
};
type Upload = {
    expiry: number;
    url: string;
};
type StartResponse = {
    file_name: string;
    file_path: string;
    content_type: string;
    method?: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
    tags?: string[];
};
type StartRequest = {
    file_name: string;
    content_type: string;
    size: number;
    tags?: string[];
    params?: any;
};
type CompleteResponse = {
    _id: string;
    file_name: string;
    file_path: string;
    content_type: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
    success: boolean;
    tags?: string[];
    created_on: string;
    modified_on: string;
};
type Opts = {
    attempts?: number;
    timestamp?: number;
    delay?: number;
};
type CopyFileTask = {
    id: string;
    name: string;
    data: BulkRequest;
    opts: Opts;
    progress: number;
    delay: number;
    timestamp: number;
    attempts_made: number;
    stacktrace?: string[];
    finished_on: number;
    processed_on: number;
};
type ReqConfiguration = {
    concurrency?: number;
};
type Destination = {
    namespace: string;
    rewrite: string;
    basepath?: string;
};
type BulkRequest = {
    urls: string[];
    destination: Destination;
    configuration?: ReqConfiguration;
};
type Urls = {
    url: string;
    signed_url: string;
    expiry: number;
};
type SignUrlResponse = {
    urls: Urls[];
};
type SignUrlRequest = {
    expiry: number;
    urls: string[];
};
type DbRecord = {
    success: boolean;
    tags: string[];
    _id: string;
    file_name: string;
    operation?: string;
    namespace: string;
    content_type: string;
    file_path: string;
    upload: Upload;
    cdn: CDN;
    created_on: string;
    modified_on: string;
};
type BrowseResponse = {
    items: DbRecord[];
    page: Page;
};
type RedirectDevice = {
    link?: string;
    type?: string;
};
type WebRedirect = {
    link?: string;
    type?: string;
};
type Redirects = {
    ios?: RedirectDevice;
    android?: RedirectDevice;
    web?: WebRedirect;
    force_web?: boolean;
};
type CampaignShortLink = {
    source?: string;
    medium?: string;
};
type Attribution = {
    campaign_cookie_expiry?: string;
};
type SocialMediaTags = {
    title?: string;
    description?: string;
    image?: string;
};
type ShortLinkReq = {
    title: string;
    url: string;
    hash?: string;
    active?: boolean;
    expire_at?: string;
    enable_tracking?: boolean;
    personalized?: boolean;
    campaign?: CampaignShortLink;
    redirects?: Redirects;
    attribution?: Attribution;
    social_media_tags?: SocialMediaTags;
    count?: number;
};
type UrlInfo = {
    original?: string;
    short?: string;
    hash?: string;
};
type ShortLinkRes = {
    title?: string;
    url?: UrlInfo;
    created_by?: string;
    app_redirect?: boolean;
    fallback?: string;
    active?: boolean;
    _id?: string;
    enable_tracking?: boolean;
    expire_at?: string;
    application?: string;
    user_id?: string;
    created_at?: string;
    meta?: any;
    updated_at?: string;
    personalized?: boolean;
    campaign?: CampaignShortLink;
    redirects?: Redirects;
    attribution?: Attribution;
    social_media_tags?: SocialMediaTags;
    count?: number;
};
type ShortLinkList = {
    items?: ShortLinkRes[];
    page?: Page;
};
type ErrorRes = {
    message?: string;
};
type DataTresholdDTO = {
    min_price?: number;
    safe_stock?: number;
    period_threshold?: number;
    period_threshold_type?: string;
    period_type_list?: GenericDTO[];
};
type GenericDTO = {
    text?: string;
    value?: any;
};
type JobConfigDTO = {
    integration: string;
    integration_data?: any;
    company_name?: string;
    company_id: number;
    task_details?: TaskDTO;
    threshold_details?: DataTresholdDTO;
    job_code?: string;
    alias?: string;
};
type TaskDTO = {
    type?: number;
    group_list?: GenericDTO[];
};
type ResponseEnvelopeString = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: string;
    payload?: string;
    trace_id?: string;
    page?: Page;
};
type AWSS3config = {
    bucket?: string;
    region?: string;
    dir?: string;
    access_key?: string;
    secret_key?: string;
    local_file_path?: string;
    archive_path?: string;
    archive?: boolean;
    delete?: boolean;
    unzip?: boolean;
    zip_format?: string;
    file_regex?: string;
    archive_config?: ArchiveConfig;
};
type ArchiveConfig = {
    delete?: boolean;
    archive?: boolean;
    archive_dir?: string;
};
type Audit = {
    created_by?: string;
    modified_by?: string;
    created_on?: string;
    modified_on?: string;
};
type CatalogMasterConfig = {
    source_slug?: string;
};
type CompanyConfig = {
    company_id?: number;
    exclude_steps?: number[];
    hidden_closet_keys?: string[];
    open_tags?: any;
    tax_identifiers?: string[];
    delete_quantity_threshold?: number;
};
type DBConfig = {
    vendor?: string;
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    dbname?: string;
    query?: string;
    procedure?: boolean;
    driver_class?: string;
    jdbc_url?: string;
    optional_properties?: any;
};
type DBConnectionProfile = {
    inventory?: string;
};
type DBParamConfig = {
    params?: any;
};
type DefaultHeadersDTO = {
    store?: PropBeanDTO;
    intf_article_id?: PropBeanDTO;
    price_effective?: PropBeanDTO;
    quantity?: PropBeanDTO;
};
type DocMappingConfig = {
    properties?: any;
    junk_data_threshold_count?: number;
    prop_bean_configs?: PropBeanConfig[];
    unwind_field?: string;
    default_headers?: DefaultHeadersDTO;
};
type EmailConfig = {
    recepient?: string;
    host?: string;
    username?: string;
    password?: string;
    unzip?: boolean;
    read_from_content?: boolean;
    filter_based_on_recepients?: boolean;
    pcol?: string;
    subject_line_regex?: string;
    sender_address?: string;
    local_dir?: string;
    folder_name_hierarchies?: string[];
    attachment_regex?: string;
    body_content_regex?: string;
    password_protected?: boolean;
    zip_format?: string;
    attachment_mandate?: boolean;
    filter_files_after_extraction?: boolean;
    archive_config?: ArchiveConfig;
    read_all_unread_mails?: boolean;
    content_type?: string;
    downloadable_link?: boolean;
    properties?: any;
};
type FTPConfig = {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    unzip?: boolean;
    retries?: number;
    interval?: number;
    local_dir?: string;
    remote_dir?: string;
    zip_file_regex?: string;
    archive_config?: ArchiveConfig;
    file_regex?: string;
    zip_format?: string;
    read_all_files?: boolean;
};
type FileConfig = {
    delimiter?: string;
    charset?: string;
    properties?: any;
    file_has_header?: boolean;
    header_index?: number;
    header_array?: string[];
    data_start_index?: number;
    prop_bean_configs?: PropBeanConfig[];
    junk_data_threshold_count?: number;
    file_type?: string;
    line_validity_check?: boolean;
    sheet_names?: string[];
    read_all_sheets?: boolean;
    quote_char?: string;
    escape_char?: string;
    default_headers?: DefaultHeadersDTO;
};
type GoogleSpreadSheetConfig = {
    range?: string;
    sheet_id?: string;
    client_secret_location?: string;
    cred_storage_directory?: string;
    local_dir?: string;
    archive_config?: ArchiveConfig;
};
type HttpConfig = {
    hosturl?: string;
    username?: string;
    password?: string;
    request_params?: any;
    http_method?: string;
    request_payload?: string;
    local_path?: string;
    archive_config?: ArchiveConfig;
};
type JobConfig = {
    _id?: number;
    job_code?: string;
    task_type?: string;
    sync_delay?: number;
    cron_expression?: string;
    store_filter?: StoreFilter;
    process_config?: ProcessConfig;
    store_config?: StoreConfig[];
    properties?: any;
    immediate_first_run?: boolean;
    disable?: boolean;
    dependent_job_codes?: string[];
    company_config?: CompanyConfig[];
    company_ids?: number[];
    tax_identifiers?: string[];
    priority?: string;
    period_threshold?: number;
    period_threshold_type?: string;
    db_connection_profile?: DBConnectionProfile;
    params?: any;
    open_tags?: any;
    delete_quantity_threshold?: number;
    catalog_master_config?: CatalogMasterConfig;
    aggregator_types?: string[];
    integration_type?: string;
    min_price?: number;
    audit?: Audit;
    version?: number;
    alias?: string;
};
type JobConfigRawDTO = {
    integration: string;
    company_name: string;
    company_id: number;
    data?: JobConfig;
};
type JsonDocConfig = {
    prop_bean_configs?: PropBeanConfig[];
};
type LocalFileConfig = {
    retries?: number;
    interval?: number;
    local_dir?: string;
    working_dir?: string;
    unzip?: boolean;
    zip_file_regex?: string;
    file_regex?: string;
    zip_format?: string;
    archive_config?: ArchiveConfig;
    read_all_files?: boolean;
};
type MongoDocConfig = {
    collection_name?: string;
    find_query?: any;
    projection_query?: any;
    prop_bean_configs?: PropBeanConfig[];
    aggregate_pipeline?: any[];
    skip_save?: boolean;
};
type OAuthConfig = {
    limit?: number;
    pages?: number;
    interval?: number;
    consumer_key?: string;
    consumer_secret?: string;
    token?: string;
    token_secret?: string;
    rest_url?: string;
    rest_base_url?: string;
    function_name?: string;
};
type ProcessConfig = {
    db_config?: DBConfig;
    db_param_config?: DBParamConfig;
    sftp_config?: SFTPConfig;
    aws_s3_config?: AWSS3config;
    mongo_doc_config?: MongoDocConfig;
    ftp_config?: FTPConfig;
    email_config?: EmailConfig;
    file_config?: FileConfig;
    json_doc_config?: JsonDocConfig;
    doc_mapping_config?: DocMappingConfig;
    task_step_config?: TaskStepConfig;
    http_config?: HttpConfig;
    local_file_config?: LocalFileConfig;
    oauth_config?: OAuthConfig;
    google_spreadsheet_config?: GoogleSpreadSheetConfig;
};
type PropBeanConfig = {
    required?: boolean;
    mapping?: any;
    optional?: boolean;
    send?: Send;
    validations?: any[];
    values?: string[];
    include?: boolean;
    source_field?: string;
    source_fields?: string[];
    destination_field?: string;
    data_type?: string;
    default_value?: any;
    const_value?: any;
    concat_str?: string;
    function_name?: string;
    transformer_name?: string;
    all_param_function_name?: string;
    sub_separator?: string;
    index_field?: string;
    ignore_if_not_exists?: boolean;
    identifier_type?: string;
    projection_query?: any;
    enrich_from_master?: boolean;
};
type PropBeanDTO = {
    required?: boolean;
    optional?: boolean;
    include?: boolean;
    source_field?: string;
    source_fields?: string[];
    destination_field?: string;
    data_type?: string;
    default_value?: any;
    const_value?: any;
    concat_str?: string;
    function_name?: string;
    transformer_name?: string;
    all_param_function_name?: string;
    sub_separator?: string;
    index_field?: string;
    ignore_if_not_exists?: boolean;
    identifier_type?: string;
    projection_query?: any;
    enrich_from_master?: boolean;
};
type ResponseEnvelopeListJobConfigRawDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobConfigRawDTO[];
    payload?: JobConfigRawDTO[];
    trace_id?: string;
    page?: Page;
};
type SFTPConfig = {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    unzip?: boolean;
    retries?: number;
    interval?: number;
    private_key_path?: string;
    strict_host_key_checking?: boolean;
    local_dir?: string;
    remote_dir?: string;
    password_protected?: boolean;
    zip_file_regex?: string;
    file_regex?: string;
    zip_format?: string;
    archive_config?: ArchiveConfig;
    read_all_files?: boolean;
};
type Send = {
    raw?: boolean;
    processed?: boolean;
};
type StoreConfig = {
    job_code?: string;
    storeid?: string;
    store_alias?: string;
    store_file_regex?: string;
    store_file_name?: string;
    process_config?: ProcessConfig;
    properties?: any;
};
type StoreFilter = {
    include_tags?: string[];
    exclude_tags?: string[];
    query?: any;
};
type TaskConfig = {
    name?: string;
    task_config_id?: number;
    task_params?: TaskParam[];
};
type TaskParam = {
    name?: string;
    value?: any;
};
type TaskStepConfig = {
    task_configs?: TaskConfig[];
    task_config_ids?: number[];
    task_config_group_ids?: number[];
};
type JobStepsDTO = {
    step_name?: string;
    type?: string;
    step_execution_time?: number;
    start_count?: number;
    end_count?: number;
    deleted_count?: number;
    processed_start_time?: string;
    processed_at?: string;
};
type ResponseEnvelopeListJobStepsDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobStepsDTO[];
    payload?: JobStepsDTO[];
    trace_id?: string;
    page?: Page;
};
type ResponseEnvelopeListJobConfigDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobConfigDTO[];
    payload?: JobConfigDTO[];
    trace_id?: string;
    page?: Page;
};
type ResponseEnvelopeJobConfigDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobConfigDTO;
    payload?: JobConfigDTO;
    trace_id?: string;
    page?: Page;
};
type JobHistoryDto = {
    total_added_count?: number;
    total_updated_count?: number;
    total_suppressed_count?: number;
    total_initial_count?: number;
    job_id?: number;
    status?: string;
    job_code?: string;
    processed_on?: string;
    filename?: string[];
    error_type?: string;
    message?: string;
};
type JobMetricsDto = {
    job_code?: string;
    is_run_more_than_usual?: string;
    job_history?: JobHistoryDto[];
    total_success_count?: number;
    total_failure_count?: number;
    total_warning_count?: number;
    total_suppressed_count?: number;
    total_job_runs?: number;
};
type ResponseEnvelopeJobMetricsDto = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobMetricsDto;
    payload?: JobMetricsDto;
    trace_id?: string;
    page?: Page;
};
type JobConfigListDTO = {
    code?: string;
    alias?: string;
    modified_by?: string;
    created_by?: string;
    modified_on?: string;
    created_on?: string;
    active?: boolean;
    type?: string;
};
type ResponseEnvelopeListJobConfigListDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobConfigListDTO[];
    payload?: JobConfigListDTO[];
    trace_id?: string;
    page?: Page;
};
type ApplicationInventory = {
    inventory?: AppInventoryConfig;
    authentication?: AuthenticationConfig;
    article_assignment?: ArticleAssignmentConfig;
    reward_points?: RewardPointsConfig;
    cart?: AppCartConfig;
    payment?: AppPaymentConfig;
    order?: AppOrderConfig;
    logistics?: AppLogisticsConfig;
    business?: string;
    comms_enabled?: boolean;
    platforms?: string[];
    _id?: string;
    loyalty_points?: LoyaltyPointsConfig;
    app?: string;
    created_at?: string;
    updated_at?: string;
    modified_by?: string;
};
type AppInventoryConfig = {
    brand?: InventoryBrand;
    store?: InventoryStore;
    category?: InventoryCategory;
    price?: InventoryPrice;
    discount?: InventoryDiscount;
    out_of_stock?: boolean;
    only_verified_products?: boolean;
    franchise_enabled?: boolean;
    exclude_category?: any[];
    image?: string[];
    company_store?: any[];
};
type InventoryBrand = {
    criteria?: string;
    brands?: any[];
};
type InventoryStore = {
    criteria?: string;
    stores?: any[];
    rules?: AppStoreRules;
};
type AppStoreRules = {
    companies?: number[];
    brands?: any[];
};
type InventoryCategory = {
    criteria?: string;
    categories?: any[];
};
type InventoryPrice = {
    min?: number;
    max?: number;
};
type InventoryDiscount = {
    min?: number;
    max?: number;
};
type AuthenticationConfig = {
    required?: boolean;
    provider?: string;
};
type ArticleAssignmentConfig = {
    rules?: ArticleAssignmentRules;
    post_order_reassignment?: boolean;
};
type ArticleAssignmentRules = {
    store_priority?: StorePriority;
};
type StorePriority = {
    enabled?: boolean;
    storetype_order?: any[];
};
type AppCartConfig = {
    delivery_charges?: DeliveryCharges;
    enabled?: boolean;
    max_cart_items?: number;
    min_cart_value?: number;
    bulk_coupons?: boolean;
    revenue_engine_coupon?: boolean;
};
type DeliveryCharges = {
    enabled?: boolean;
    charges?: Charges;
};
type Charges = {
    threshold?: number;
    charges?: number;
};
type AppPaymentConfig = {
    callback_url?: CallbackUrl;
    methods?: Methods;
    payment_selection_lock?: PaymentSelectionLock;
    mode_of_payment?: string;
    source?: string;
    enabled?: boolean;
    cod_amount_limit?: number;
    cod_charges?: number;
};
type CallbackUrl = {
    app?: string;
    web?: string;
};
type Methods = {
    pl?: PaymentModeConfig;
    card?: PaymentModeConfig;
    nb?: PaymentModeConfig;
    wl?: PaymentModeConfig;
    ps?: PaymentModeConfig;
    upi?: PaymentModeConfig;
    qr?: PaymentModeConfig;
    cod?: PaymentModeConfig;
    pp?: PaymentModeConfig;
    jp?: PaymentModeConfig;
    pac?: PaymentModeConfig;
    fc?: PaymentModeConfig;
    jiopp?: PaymentModeConfig;
    stripepg?: PaymentModeConfig;
    juspaypg?: PaymentModeConfig;
    payubizpg?: PaymentModeConfig;
    payumoneypg?: PaymentModeConfig;
    rupifipg?: PaymentModeConfig;
    simpl?: PaymentModeConfig;
};
type PaymentModeConfig = {
    enabled?: boolean;
};
type PaymentSelectionLock = {
    enabled?: boolean;
    default_options?: string;
    payment_identifier?: string;
};
type AppOrderConfig = {
    enabled?: boolean;
    force_reassignment?: boolean;
    message?: string;
};
type AppLogisticsConfig = {
    logistics_by_seller?: boolean;
    serviceability_check?: boolean;
    same_day_delivery?: boolean;
    dp_assignment?: boolean;
};
type LoyaltyPointsConfig = {
    enabled?: boolean;
    auto_apply?: boolean;
};
type AppInventoryPartialUpdate = {
    reward_points?: RewardPointsConfig;
    cart?: AppCartConfig;
    payment?: AppPaymentConfig;
    loyalty_points?: LoyaltyPointsConfig;
    comms_enabled?: boolean;
};
type BrandCompanyInfo = {
    company_name?: string;
    company_id?: number;
};
type CompanyByBrandsRequest = {
    brands: number;
    search_text?: string;
};
type CompanyByBrandsResponse = {
    items?: BrandCompanyInfo[];
    page?: Page;
};
type StoreByBrandsRequest = {
    company_id?: number;
    brands: number;
    search_text?: string;
};
type StoreByBrandsResponse = {
    items?: BrandStoreInfo[];
    page?: Page;
};
type BrandStoreInfo = {
    store_name?: string;
    store_id?: number;
    store_type?: string;
    store_code?: string;
    store_address?: OptedStoreAddress;
    company?: OptedCompany;
};
type CompanyBrandInfo = {
    name?: string;
    value?: number;
    brand_logo_url?: string;
    brand_banner_url?: string;
    brand_banner_portrait_url?: string;
};
type BrandsByCompanyResponse = {
    brands?: CompanyBrandInfo;
};
type CreateApplicationRequest = {
    app?: App;
    configuration?: AppInventory;
    domain?: AppDomain;
};
type CreateAppResponse = {
    app?: Application;
    configuration?: ApplicationInventory;
};
type ApplicationsResponse = {
    items?: Application[];
    page?: Page;
};
type MobileAppConfiguration = {
    is_active?: boolean;
    _id?: string;
    app_name?: string;
    landing_image?: LandingImage;
    splash_image?: SplashImage;
    application?: string;
    platform_type?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
    package_name?: string;
};
type LandingImage = {
    aspect_ratio?: string;
    secure_url?: string;
};
type SplashImage = {
    aspect_ratio?: string;
    secure_url?: string;
};
type MobileAppConfigRequest = {
    app_name?: string;
    landing_image?: LandingImage;
    splash_image?: SplashImage;
    is_active?: boolean;
};
type BuildVersionHistory = {
    versions?: BuildVersion;
    latest_available_version_name?: string;
};
type BuildVersion = {
    _id?: string;
    application?: string;
    platform_type?: string;
    build_status?: string;
    version_name?: string;
    version_code?: number;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type AppSupportedCurrency = {
    _id?: string;
    supported_currency?: string[];
    application?: string;
    default_currency?: DefaultCurrency;
    created_at?: string;
    updated_at?: string;
};
type DefaultCurrency = {
    ref?: string;
    code?: string;
};
type CurrencyConfig = {
    _id?: string;
    is_active?: boolean;
    name?: string;
    code?: string;
    created_at?: string;
    updated_at?: string;
    decimal_digits?: number;
    symbol?: string;
};
type DomainAdd = {
    name?: string;
};
type DomainAddRequest = {
    domain?: DomainAdd;
};
type DomainsResponse = {
    domains?: Domain[];
};
type UpdateDomain = {
    _id?: string;
};
type UpdateDomainTypeRequest = {
    domain?: UpdateDomain;
    action?: string;
};
type DomainStatusRequest = {
    domain_url?: string;
};
type DomainStatus = {
    display?: string;
    status?: boolean;
};
type DomainStatusResponse = {
    connected?: boolean;
    status?: DomainStatus[];
};
type DomainSuggestionsRequest = {
    domain_url?: string;
    custom?: boolean;
};
type DomainSuggestion = {
    name: string;
    unsupported?: boolean;
    is_available: boolean;
    price?: number;
    currency?: string;
};
type DomainSuggestionsResponse = {
    domains?: DomainSuggestion[];
};
type GetIntegrationsOptInsResponse = {
    items?: IntegrationOptIn[];
    page?: Page;
};
type IntegrationOptIn = {
    validators?: Validators;
    description?: string;
    description_html?: string;
    constants?: string;
    companies?: any[];
    support?: string[];
    _id?: string;
    name?: string;
    meta?: IntegrationMeta[];
    icon?: string;
    owner?: string;
    created_at?: string;
    updated_at?: string;
    token?: string;
    secret?: string;
    __v?: number;
};
type Validators = {
    company?: CompanyValidator;
    store?: StoreValidator;
    inventory?: InventoryValidator;
    order?: OrderValidator;
};
type CompanyValidator = {
    json_schema?: JsonSchema[];
    browser_script?: string;
};
type JsonSchema = {
    display?: string;
    key?: string;
    type?: string;
    tooltip?: string;
};
type StoreValidator = {
    json_schema?: JsonSchema[];
    browser_script?: string;
};
type InventoryValidator = {
    json_schema?: JsonSchema[];
    browser_script?: string;
};
type OrderValidator = {
    json_schema?: JsonSchema[];
    browser_script?: string;
};
type IntegrationMeta = {
    is_public?: boolean;
    _id?: string;
    name?: string;
    value?: string;
};
type Integration = {
    validators?: Validators;
    description?: string;
    description_html?: string;
    constants?: any;
    companies?: any[];
    support?: string[];
    _id?: string;
    name?: string;
    meta?: IntegrationMeta[];
    icon?: string;
    owner?: string;
    created_at?: string;
    updated_at?: string;
    token?: string;
    secret?: string;
    __v?: number;
};
type IntegrationConfigResponse = {
    items?: IntegrationLevel[];
};
type IntegrationLevel = {
    opted?: boolean;
    permissions?: any[];
    last_patch?: LastPatch[];
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    meta?: IntegrationMeta[];
    token?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
    data?: any;
};
type UpdateIntegrationLevelRequest = {
    items?: IntegrationLevel[];
};
type OptedStoreIntegration = {
    other_opted?: boolean;
    other_integration?: IntegrationOptIn;
    other_entity?: OtherEntity;
};
type OtherEntity = {
    opted?: boolean;
    permissions?: string[];
    last_patch?: LastPatch[];
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    data?: OtherEntityData;
    meta?: any[];
    token?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type LastPatch = {
    op?: string;
    path?: string;
    value?: string;
};
type OtherEntityData = {
    article_identifier?: string;
};
type App = {
    company_id?: string;
    channel_type?: string;
    auth?: ApplicationAuth;
    name?: string;
    desc?: string;
};
type AppInventory = {
    brand?: InventoryBrandRule;
    store?: InventoryStoreRule;
    image?: string[];
    franchise_enabled?: boolean;
    out_of_stock?: boolean;
    only_verified_products?: boolean;
    payment?: InventoryPaymentConfig;
    article_assignment?: InventoryArticleAssignment;
};
type AppDomain = {
    name?: string;
};
type CompaniesResponse = {
    items?: AppInventoryCompanies;
    page?: Page;
};
type AppInventoryCompanies = {
    uid?: number;
    name?: string;
    company_type?: string;
};
type StoresResponse = {
    items?: AppInventoryStores;
    page?: Page;
};
type AppInventoryStores = {
    _id?: string;
    modified_on?: string;
    uid?: number;
    name?: string;
    display_name?: string;
    store_type?: string;
    store_code?: string;
    company_id?: number;
};
type FilterOrderingStoreRequest = {
    all_stores?: boolean;
    deployed_stores?: number[];
    q?: string;
};
type DeploymentMeta = {
    deployed_stores?: number[];
    all_stores?: boolean;
    enabled?: boolean;
    type?: string;
    _id?: string;
    app?: string;
};
type OrderingStoreConfig = {
    deployment_meta?: DeploymentMeta;
};
type OtherSellerCompany = {
    uid?: number;
    name?: string;
};
type OtherSellerApplication = {
    name?: string;
    description?: string;
    _id?: string;
    domain?: string;
    company?: OtherSellerCompany;
    opt_type?: string;
};
type OtherSellerApplications = {
    items?: OtherSellerApplication[];
    page?: Page;
};
type OptedApplicationResponse = {
    name?: string;
    description?: string;
    _id?: string;
    domain?: string;
    company?: OptedCompany;
    opted_inventory?: OptedInventory;
    opt_out_inventory?: OptOutInventory;
};
type OptedCompany = {
    uid?: number;
    name?: string;
};
type OptedInventory = {
    opt_type?: OptType;
    items?: any;
};
type OptType = {
    key?: string;
    display?: string;
};
type OptedStore = {
    name?: string;
    store_code?: string;
    _id?: string;
    modified_on?: string;
    uid?: number;
    address?: OptedStoreAddress;
    display_name?: string;
    store_type?: string;
    company_id?: number;
};
type OptOutInventory = {
    store: number[];
    company: number[];
};
type TokenResponse = {
    tokens?: Tokens;
    _id?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type Tokens = {
    firebase?: Firebase;
    moengage?: Moengage;
    segment?: Segment;
    gtm?: Gtm;
    freshchat?: Freshchat;
    safetynet?: Safetynet;
    fynd_rewards?: FyndRewards;
    google_map?: GoogleMap;
};
type Firebase = {
    credentials?: Credentials;
    enabled?: boolean;
};
type Credentials = {
    ios?: Ios;
    android?: Android;
    project_id?: string;
    gcm_sender_id?: string;
    application_id?: string;
    api_key?: string;
};
type Ios = {
    application_id?: string;
    api_key?: string;
};
type Android = {
    application_id?: string;
    api_key?: string;
};
type Moengage = {
    credentials?: MoengageCredentials;
    enabled?: boolean;
};
type MoengageCredentials = {
    app_id?: string;
};
type Segment = {
    credentials?: SegmentCredentials;
    enabled?: boolean;
};
type SegmentCredentials = {
    write_key?: string;
};
type Gtm = {
    credentials?: GtmCredentials;
    enabled?: boolean;
};
type GtmCredentials = {
    api_key?: string;
};
type Freshchat = {
    credentials?: FreshchatCredentials;
    enabled?: boolean;
};
type FreshchatCredentials = {
    app_id?: string;
    app_key?: string;
    web_token?: string;
};
type Safetynet = {
    credentials?: SafetynetCredentials;
    enabled?: boolean;
};
type SafetynetCredentials = {
    api_key?: string;
};
type FyndRewards = {
    credentials?: FyndRewardsCredentials;
};
type FyndRewardsCredentials = {
    public_key?: string;
};
type GoogleMap = {
    credentials?: GoogleMapCredentials;
};
type GoogleMapCredentials = {
    api_key?: string;
};
type RewardPointsConfig = {
    credit?: Credit;
    debit?: Debit;
};
type Credit = {
    enabled?: boolean;
};
type Debit = {
    enabled?: boolean;
    auto_apply?: boolean;
    strategy_channel?: string;
};
type ProductDetailFeature = {
    similar?: string[];
    seller_selection?: boolean;
    update_product_meta?: boolean;
    request_product?: boolean;
};
type LaunchPage = {
    page_type?: string;
    params?: any;
    query?: any;
};
type LandingPageFeature = {
    launch_page?: LaunchPage;
    continue_as_guest?: boolean;
    login_btn_text?: string;
    show_domain_textbox?: boolean;
    show_register_btn?: boolean;
};
type RegistrationPageFeature = {
    ask_store_address?: boolean;
};
type AppFeature = {
    product_detail?: ProductDetailFeature;
    landing_page?: LandingPageFeature;
    registration_page?: RegistrationPageFeature;
    home_page?: HomePageFeature;
    common?: CommonFeature;
    cart?: CartFeature;
    qr?: QrFeature;
    pcr?: PcrFeature;
    order?: OrderFeature;
    _id?: string;
    app?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type HomePageFeature = {
    order_processing?: boolean;
};
type CommonFeature = {
    communication_optin_dialog?: CommunicationOptinDialogFeature;
    deployment_store_selection?: DeploymentStoreSelectionFeature;
    listing_price?: ListingPriceFeature;
    currency?: CurrencyFeature;
    revenue_engine?: RevenueEngineFeature;
    feedback?: FeedbackFeature;
    compare_products?: CompareProductsFeature;
    reward_points?: RewardPointsConfig;
};
type CommunicationOptinDialogFeature = {
    visibility?: boolean;
};
type DeploymentStoreSelectionFeature = {
    enabled?: boolean;
    type?: string;
};
type ListingPriceFeature = {
    value?: string;
};
type CurrencyFeature = {
    value?: string[];
    type?: string;
    default_currency?: string;
};
type RevenueEngineFeature = {
    enabled?: boolean;
};
type FeedbackFeature = {
    enabled?: boolean;
};
type CompareProductsFeature = {
    enabled?: boolean;
};
type CartFeature = {
    gst_input?: boolean;
    staff_selection?: boolean;
    placing_for_customer?: boolean;
    google_map?: boolean;
    revenue_engine_coupon?: boolean;
};
type QrFeature = {
    application?: boolean;
    products?: boolean;
    collections?: boolean;
};
type PcrFeature = {
    staff_selection?: boolean;
};
type OrderFeature = {
    buy_again?: boolean;
};
type AppFeatureRequest = {
    feature?: AppFeature;
};
type AppFeatureResponse = {
    feature?: AppFeature;
};
type UnhandledError = {
    message?: string;
};
type InvalidPayloadRequest = {
    message?: string;
};
type SuccessMessageResponse = {
    message?: string;
};
type InventoryBrandRule = {
    criteria?: string;
    brands?: number[];
};
type StoreCriteriaRule = {
    companies?: number[];
    brands?: number[];
};
type InventoryStoreRule = {
    criteria?: string;
    rules?: StoreCriteriaRule[];
    stores?: number[];
};
type InventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type StorePriorityRule = {
    enabled?: boolean;
    storetype_order?: string[];
};
type ArticleAssignmentRule = {
    store_priority?: StorePriorityRule;
};
type InventoryArticleAssignment = {
    post_order_reassignment?: boolean;
    rules?: ArticleAssignmentRule;
};
type CompanyAboutAddress = {
    pincode?: number;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    country?: string;
    address_type?: string;
};
type UserEmail = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    email?: string;
};
type UserPhoneNumber = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    country_code?: number;
    phone?: string;
};
type ApplicationInformation = {
    address?: InformationAddress;
    support?: InformationSupport;
    social_links?: SocialLinks;
    links?: Links;
    copyright_text?: string;
    _id?: string;
    business_highlights?: BusinessHighlights;
    application?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type InformationAddress = {
    loc?: string;
    address_line?: string[];
    phone?: InformationPhone;
    city?: string;
    country?: string;
    pincode?: number;
};
type InformationPhone = {
    code?: string;
    number?: string;
};
type InformationSupport = {
    phone?: string[];
    email?: string[];
    timing?: string;
};
type SocialLinks = {
    facebook?: FacebookLink;
    instagram?: InstagramLink;
    twitter?: TwitterLink;
    pinterest?: PinterestLink;
    google_plus?: GooglePlusLink;
    youtube?: YoutubeLink;
    linked_in?: LinkedInLink;
    vimeo?: VimeoLink;
    blog_link?: BlogLink;
};
type FacebookLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type InstagramLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type TwitterLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type PinterestLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type GooglePlusLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type YoutubeLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type LinkedInLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type VimeoLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type BlogLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type Links = {
    title?: string;
    link?: string;
};
type BusinessHighlights = {
    _id?: string;
    title?: string;
    icon?: string;
    sub_title?: string;
};
type ApplicationDetail = {
    name: string;
    description: string;
    logo: SecureUrl;
    mobile_logo: SecureUrl;
    favicon: SecureUrl;
    banner: SecureUrl;
    domain?: Domain;
    domains?: Domain[];
    _id?: string;
};
type CurrenciesResponse = {
    items?: Currency[];
};
type AppCurrencyResponse = {
    application?: string;
    default_currency?: DefaultCurrency;
    supported_currency?: Currency[];
};
type StoreLatLong = {
    type?: string;
    coordinates?: number[];
};
type OptedStoreAddress = {
    state?: string;
    address1?: string;
    lat_long?: StoreLatLong;
    address2?: string;
    pincode?: number;
    country?: string;
    city?: string;
};
type OrderingStore = {
    address?: OptedStoreAddress;
    _id?: string;
    uid?: number;
    name?: string;
    display_name?: string;
    store_type?: string;
    store_code?: string;
    pincode?: number;
    code?: string;
};
type OrderingStores = {
    page?: Page;
    items?: OrderingStore[];
    deployed_stores?: number[];
    all_stores?: boolean;
    enabled?: boolean;
    type?: string;
    _id?: string;
    app?: string;
    __v?: number;
};
type OrderingStoresResponse = {
    page?: Page;
    items?: OrderingStore[];
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    title?: string;
    description?: string;
    apply?: DisplayMetaDict;
    remove?: DisplayMetaDict;
    auto?: DisplayMetaDict;
    subtitle?: string;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type Rule = {
    value?: number;
    min?: number;
    key?: number;
    discount_qty?: number;
    max?: number;
};
type Validity = {
    priority?: number;
};
type CouponSchedule = {
    next_schedule?: any[];
    end?: string;
    start?: string;
    duration?: number;
    cron?: string;
};
type Identifier = {
    company_id?: number[];
    store_id?: number[];
    user_id?: string[];
    category_id?: number[];
    collection_id?: string[];
    article_id?: string[];
    item_id?: number[];
    brand_id?: number[];
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    networks?: string[];
    types?: string[];
    codes?: string[];
    uses?: PaymentAllowValue;
};
type UsesRemaining = {
    user?: number;
    total?: number;
    app?: number;
};
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type PriceRange = {
    max?: number;
    min?: number;
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type Restrictions = {
    payments?: any;
    coupon_allowed?: boolean;
    uses?: UsesRestriction;
    ordering_stores?: number[];
    price_range?: PriceRange;
    platforms?: string[];
    post_order?: PostOrder;
    bulk_bundle?: BulkBundleRestriction;
    user_groups?: number[];
};
type State = {
    is_display?: boolean;
    is_public?: boolean;
    is_archived?: boolean;
};
type Validation = {
    user_registered_after?: string;
    anonymous?: boolean;
    app_id?: string[];
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type RuleDefinition = {
    type: string;
    currency_code?: string;
    auto_apply?: boolean;
    value_type: string;
    scope?: string[];
    calculate_on: string;
    is_exact?: boolean;
    applicable_on: string;
};
type CouponAdd = {
    date_meta?: CouponDateMeta;
    code: string;
    display_meta: DisplayMeta;
    author?: CouponAuthor;
    rule: Rule[];
    validity: Validity;
    _schedule?: CouponSchedule;
    identifiers: Identifier;
    type_slug: string;
    ownership: Ownership;
    restrictions?: Restrictions;
    state?: State;
    validation?: Validation;
    action?: CouponAction;
    tags?: string[];
    rule_definition: RuleDefinition;
};
type CouponsResponse = {
    page?: Page;
    items?: CouponAdd;
};
type SuccessMessage = {
    success?: boolean;
    message?: string;
};
type OperationErrorResponse = {
    success?: boolean;
    message?: string;
};
type CouponUpdate = {
    date_meta?: CouponDateMeta;
    code: string;
    display_meta: DisplayMeta;
    author?: CouponAuthor;
    rule: Rule[];
    validity: Validity;
    _schedule?: CouponSchedule;
    identifiers: Identifier;
    type_slug: string;
    ownership: Ownership;
    restrictions?: Restrictions;
    state?: State;
    validation?: Validation;
    action?: CouponAction;
    tags?: string[];
    rule_definition: RuleDefinition;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type DisplayMeta1 = {
    offer_text?: string;
    description?: string;
    name?: string;
};
type CompareObject = {
    greater_than_equals?: number;
    greater_than?: number;
    equals?: number;
    less_than_equals?: number;
    less_than?: number;
};
type ItemCriteria = {
    buy_rules?: string[];
    cart_total?: CompareObject;
    item_sku?: string[];
    item_store?: number[];
    item_exclude_brand?: number[];
    item_size?: string[];
    item_company?: number[];
    item_brand?: number[];
    cart_quantity?: CompareObject;
    item_exclude_company?: number[];
    all_items?: boolean;
    item_id?: number[];
    item_exclude_sku?: string[];
    item_exclude_store?: number[];
    item_exclude_category?: number[];
    item_category?: number[];
};
type DiscountOffer = {
    code?: string;
    min_offer_quantity?: number;
    discount_price?: number;
    discount_percentage?: number;
    max_offer_quantity?: number;
    discount_amount?: number;
    max_discount_amount?: number;
};
type DiscountRule = {
    item_criteria: ItemCriteria;
    discount_type: string;
    offer: DiscountOffer;
    buy_condition: string;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type PromotionSchedule = {
    published: boolean;
    next_schedule?: any[];
    end?: string;
    start: string;
    duration?: number;
    cron?: string;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    type: string;
    codes?: string[];
    uses?: PaymentAllowValue1;
};
type UsesRemaining1 = {
    user?: number;
    total?: number;
};
type UsesRestriction1 = {
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
};
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type UserRegistered = {
    start?: string;
    end?: string;
};
type Restrictions1 = {
    payments?: PromotionPaymentModes[];
    uses: UsesRestriction1;
    user_id?: string[];
    platforms?: string[];
    post_order?: PostOrder1;
    user_groups?: number[];
    anonymous_users?: boolean;
    user_registered?: UserRegistered;
    order_quantity?: number;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type PromotionListItem = {
    display_meta: DisplayMeta1;
    mode: string;
    stackable?: boolean;
    application_id: string;
    apply_all_discount?: boolean;
    discount_rules: DiscountRule[];
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    currency?: string;
    _schedule?: PromotionSchedule;
    restrictions?: Restrictions1;
    apply_priority?: number;
    promotion_type: string;
    promo_group: string;
    post_order_action?: PromotionAction;
    code?: string;
    author?: PromotionAuthor;
    visiblility?: Visibility;
    _custom_json?: any;
    ownership: Ownership1;
    apply_exclusive?: string;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    display_meta: DisplayMeta1;
    mode: string;
    stackable?: boolean;
    application_id: string;
    apply_all_discount?: boolean;
    discount_rules: DiscountRule[];
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    currency?: string;
    _schedule?: PromotionSchedule;
    restrictions?: Restrictions1;
    apply_priority?: number;
    promotion_type: string;
    promo_group: string;
    post_order_action?: PromotionAction;
    code?: string;
    author?: PromotionAuthor;
    visiblility?: Visibility;
    _custom_json?: any;
    ownership: Ownership1;
    apply_exclusive?: string;
};
type PromotionUpdate = {
    display_meta: DisplayMeta1;
    mode: string;
    stackable?: boolean;
    application_id: string;
    apply_all_discount?: boolean;
    discount_rules: DiscountRule[];
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    currency?: string;
    _schedule?: PromotionSchedule;
    restrictions?: Restrictions1;
    apply_priority?: number;
    promotion_type: string;
    promo_group: string;
    post_order_action?: PromotionAction;
    code?: string;
    author?: PromotionAuthor;
    visiblility?: Visibility;
    _custom_json?: any;
    ownership: Ownership1;
    apply_exclusive?: string;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type CartItem = {
    quantity?: number;
    size: string;
    product_id: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type DisplayBreakup = {
    value?: number;
    message?: string[];
    key?: string;
    currency_code?: string;
    display?: string;
    currency_symbol?: string;
};
type CouponBreakup = {
    value?: number;
    code?: string;
    message?: string;
    type?: string;
    is_applied?: boolean;
    uid?: string;
};
type RawBreakup = {
    subtotal?: number;
    vog?: number;
    fynd_cash?: number;
    convenience_fee?: number;
    mrp_total?: number;
    cod_charge?: number;
    total?: number;
    you_saved?: number;
    coupon?: number;
    discount?: number;
    delivery_charge?: number;
    gst_charges?: number;
};
type LoyaltyPoints = {
    is_applied?: boolean;
    description?: string;
    applicable?: number;
    total?: number;
};
type CartBreakup = {
    display?: DisplayBreakup[];
    coupon?: CouponBreakup;
    raw?: RawBreakup;
    loyalty_points?: LoyaltyPoints;
};
type ProductPrice = {
    marked?: number;
    add_on?: number;
    currency_code?: string;
    currency_symbol?: string;
    selling?: number;
    effective?: number;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    type?: string;
    query?: ActionQuery;
    url?: string;
};
type CategoryInfo = {
    uid?: number;
    name?: string;
};
type ProductImage = {
    secure_url?: string;
    url?: string;
    aspect_ratio?: string;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type CartProduct = {
    type?: string;
    action?: ProductAction;
    name?: string;
    categories?: CategoryInfo[];
    uid?: number;
    images?: ProductImage[];
    brand?: BaseInfo;
    slug?: string;
};
type BasePrice = {
    currency_code?: string;
    effective?: number;
    currency_symbol?: string;
    marked?: number;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    price?: ArticlePriceInfo;
    size?: string;
    store?: BaseInfo;
    type?: string;
    seller?: BaseInfo;
    quantity?: number;
    uid?: string;
    extra_meta?: any;
};
type PromoMeta = {
    message?: string;
};
type CartProductIdentifer = {
    identifier?: string;
};
type ProductAvailability = {
    out_of_stock?: boolean;
    is_valid?: boolean;
    sizes?: string[];
    deliverable?: boolean;
    other_store_quantity?: number;
};
type AppliedPromotion = {
    article_quantity?: number;
    mrp_promotion?: boolean;
    promo_id?: string;
    amount?: number;
    promotion_type?: string;
    offer_text?: string;
};
type CartProductInfo = {
    price?: ProductPriceInfo;
    message?: string;
    product?: CartProduct;
    key?: string;
    article?: ProductArticle;
    bulk_offer?: any;
    promo_meta?: PromoMeta;
    identifiers: CartProductIdentifer;
    discount?: string;
    quantity?: number;
    is_set?: boolean;
    coupon_message?: string;
    price_per_unit?: ProductPriceInfo;
    availability?: ProductAvailability;
    promotions_applied?: AppliedPromotion[];
};
type OpenapiCartDetailsResponse = {
    message?: string;
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    items?: CartProductInfo[];
};
type OpenApiErrorResponse = {
    success?: boolean;
    message?: string;
    errors?: any;
};
type ShippingAddress = {
    meta?: any;
    area_code: string;
    phone?: number;
    pincode?: number;
    email?: string;
    name?: string;
    area?: string;
    country?: string;
    landmark?: string;
    area_code_slug?: string;
    address?: string;
    state?: string;
    country_code?: string;
    city?: string;
    address_type?: string;
};
type OpenApiCartServiceabilityRequest = {
    shipping_address: ShippingAddress;
    cart_items?: CartItem;
};
type PromiseTimestamp = {
    max?: number;
    min?: number;
};
type PromiseFormatted = {
    max?: string;
    min?: string;
};
type ShipmentPromise = {
    timestamp?: PromiseTimestamp;
    formatted?: PromiseFormatted;
};
type OpenApiCartServiceabilityResponse = {
    message?: string;
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    items?: CartProductInfo[];
    delivery_promise?: ShipmentPromise;
};
type OpenApiFiles = {
    values: string[];
    key: string;
};
type CartItemMeta = {
    primary_item?: boolean;
    group_id?: string;
};
type OpenApiOrderItem = {
    price_marked: number;
    loyalty_discount?: number;
    cod_charges: number;
    employee_discount?: number;
    meta?: CartItemMeta;
    size: string;
    amount_paid: number;
    cashback_applied: number;
    discount: number;
    quantity?: number;
    payment_methods: MultiTenderPaymentMethod[];
    price_effective: number;
    coupon_effective_discount: number;
    delivery_charges: number;
    product_id: number;
    extra_meta?: any;
    files?: OpenApiFiles[];
};
type OpenApiPlatformCheckoutReq = {
    employee_discount?: any;
    gstin?: string;
    payment_mode?: string;
    comment?: string;
    coupon_value: number;
    currency_code?: string;
    coupon_code: string;
    coupon?: string;
    delivery_charges: number;
    billing_address: ShippingAddress;
    files?: OpenApiFiles[];
    cart_value: number;
    shipping_address?: ShippingAddress;
    loyalty_discount?: number;
    cod_charges: number;
    affiliate_order_id?: string;
    payment_methods: MultiTenderPaymentMethod[];
    cashback_applied: number;
    order_id?: string;
    cart_items: OpenApiOrderItem[];
};
type OpenApiCheckoutResponse = {
    success?: boolean;
    order_id: string;
    message?: string;
    order_ref_id?: string;
};
type AppUser = {
    _id?: string;
    active?: boolean;
    application_id?: string;
    block_reason?: string;
    updated_at?: string;
    updated_by?: string;
    user_id?: string;
};
type E = {
    code?: any;
    exception?: string;
    info?: string;
    message?: string;
    request_id?: string;
    stack_trace?: string;
    status?: number;
};
type Giveaway = {
    _id?: string;
    _schedule?: Schedule;
    active?: boolean;
    application_id?: string;
    audience?: RewardsAudience;
    banner_image?: Asset;
    created_at?: string;
    description?: string;
    name?: string;
    rule?: RewardsRule;
    title?: string;
    updated_at?: string;
};
type GiveawayResponse = {
    items?: Giveaway[];
    page?: Page;
};
type HistoryPretty = {
    _id?: string;
    application_id?: string;
    claimed?: boolean;
    created_at?: string;
    expires_on?: string;
    points?: number;
    remaining_points?: number;
    text_1?: string;
    text_2?: string;
    text_3?: string;
    txn_name?: string;
    updated_at?: string;
    user_id?: string;
};
type HistoryRes = {
    items?: HistoryPretty[];
    page?: Page;
    points?: number;
};
type Offer = {
    _schedule?: Schedule;
    active?: boolean;
    application_id?: string;
    banner_image?: Asset;
    created_at?: string;
    name?: string;
    rule?: any;
    share?: ShareMessages;
    sub_text?: string;
    text?: string;
    type?: string;
    updated_at?: string;
    updated_by?: string;
    url?: string;
};
type Points = {
    available?: number;
};
type Referral = {
    code?: string;
};
type RewardUser = {
    _id?: string;
    active?: boolean;
    created_at?: string;
    referral?: Referral;
    uid?: number;
    updated_at?: string;
    user_block_reason?: string;
    user_id?: string;
};
type RewardsAudience = {
    header_user_id?: string;
    id?: string;
};
type RewardsRule = {
    amount?: number;
};
type ShareMessages = {
    email?: string;
    facebook?: string;
    fallback?: string;
    message?: string;
    messenger?: string;
    sms?: string;
    text?: string;
    twitter?: string;
    whatsapp?: string;
};
type UserRes = {
    points?: Points;
    user?: RewardUser;
};
type StatGroup = {
    key?: string;
    url?: string;
    title?: string;
};
type StatsGroups = {
    groups?: StatGroup[];
};
type StatsGroupComponent = {
    key?: string;
    url?: string;
    title?: string;
    type?: string;
    filters?: any;
};
type StatsGroupComponents = {
    title?: string;
    components?: StatsGroupComponent[];
};
type StatsRes = {
    key?: string;
    title?: string;
    type?: string;
    data?: any;
};
type ReceivedAt = {
    value?: string;
};
type AbandonCartsDetail = {
    properties_cart_id?: string;
    context_traits_first_name?: string;
    context_traits_last_name?: string;
    context_traits_phone_number?: string;
    context_traits_email?: string;
    context_app_application_id?: string;
    properties_breakup_values_raw_total?: string;
    received_at?: ReceivedAt;
};
type AbandonCartsList = {
    items?: AbandonCartsDetail[];
    cart_total?: string;
    page?: Page;
};
type AbandonCartDetail = {
    _id?: string;
    user_id?: string;
    cart_value?: string;
    articles?: any[];
    breakup?: any;
    address?: any;
};
type ExportJobReq = {
    marketplace_name?: string;
    start_time?: string;
    end_time?: string;
    event_type?: string;
    trace_id?: string;
};
type ExportJobRes = {
    status?: string;
    job_id?: string;
};
type ExportJobStatusRes = {
    status?: string;
    job_id?: string;
    download_url?: string;
};
type GetLogsListReq = {
    marketplace_name?: string;
    start_date?: string;
    company_id?: string;
    end_date?: string;
};
type MkpLogsResp = {
    start_time_iso?: string;
    end_time_iso?: string;
    event_type?: string;
    trace_id?: string;
    count?: string;
    status?: string;
};
type GetLogsListRes = {
    items?: MkpLogsResp[];
    page?: Page;
};
type SearchLogReq = {
    marketplace_name?: string;
    start_date?: string;
    company_id?: string;
    end_date?: string;
    identifier?: string;
    identifier_value?: string;
};
type LogInfo = {
    _id?: string;
    status?: string;
    event_type?: string;
    marketplace_name?: string;
    event?: string;
    trace_id?: string;
    company_id?: number;
    brand_id?: number;
    store_code?: string;
    store_id?: number;
    item_id?: number;
    article_id?: string;
    seller_identifier?: string;
};
type SearchLogRes = {
    items?: LogInfo[];
    page?: Page;
};
type ValidityObject = {
    start: string;
    end: string;
};
type CreateUpdateDiscount = {
    name: string;
    company_id: number;
    is_active: boolean;
    app_ids: string[];
    extension_ids: string[];
    job_type: string;
    discount_type: string;
    discount_level: string;
    value?: number;
    file_path?: string;
    brand_ids?: number[];
    store_ids?: number[];
    validity: ValidityObject;
};
type DiscountJob = {
    _id: string;
    name: string;
    company_id: number;
    is_active: boolean;
    app_ids?: string[];
    job_type?: string;
    discount_type?: string;
    discount_level?: string;
    value?: number;
    file_path?: string;
    brand_ids?: number[];
    store_ids?: number[];
    validity: ValidityObject;
    created_on: string;
    modified_on: string;
    created_by: UserDetails;
    modified_by: UserDetails;
    meta?: any;
};
type ListOrCalender = {
    items: DiscountJob[];
    page: Page;
};
type FileJobResponse = {
    stage: string;
    total: number;
    failed: number;
    company_id: number;
    body?: any;
    type: string;
    file_type: string;
};
type DownloadFileJob = {
    brand_ids?: number[];
    store_ids?: number[];
};
type CancelJobResponse = {
    success: boolean;
};
type UserDetails = {
    username: string;
    user_id: string;
};
type BadRequestObject = {
    message: string;
};
type AddProxyReq = {
    attached_path?: string;
    proxy_url?: string;
};
type AddProxyResponse = {
    _id?: string;
    attached_path?: string;
    proxy_url?: string;
    company_id?: string;
    application_id?: string;
    extension_id?: string;
    created_at?: string;
    modified_at?: string;
};
type APIError = {
    code?: string;
    message?: string;
    info?: string;
    request_id?: string;
    meta?: any;
};
type RemoveProxyResponse = {
    message?: string;
    data?: any;
};
type EventConfig = {
    id?: number;
    event_name?: string;
    event_type?: string;
    event_category?: string;
    version?: string;
    display_name?: string;
    description?: string;
    created_on?: string;
};
type EventConfigList = {
    items?: EventConfig[];
    page?: Page;
};
type EventConfigResponse = {
    event_configs?: EventConfig[];
};
type SubscriberConfigList = {
    items?: SubscriberResponse[];
    page?: Page;
};
type EventProcessedStatus = {
    id?: number;
    subscriber_id?: string;
    attempt?: number;
    response_code?: string;
    response_message?: string;
    created_on?: string;
    processed_on?: string;
    status?: boolean;
};
type EventPayload = {
    id?: number;
    event_trace_id?: string;
    message_id?: string;
    event_name?: string;
    event_type?: string;
    version?: string;
    status?: boolean;
};
type SubscriberConfig = {
    id?: number;
    name?: string;
    webhook_url?: string;
    association?: Association;
    custom_headers?: any;
    status?: any;
    email_id?: string;
    auth_meta?: AuthMeta;
    event_id?: number[];
};
type SubscriberResponse = {
    id?: number;
    name?: string;
    webhook_url?: string;
    association?: Association;
    custom_headers?: any;
    email_id?: string;
    status?: any;
    auth_meta?: AuthMeta;
    created_on?: string;
    updated_on?: string;
    event_configs?: EventConfig[];
};
type SubscriberEvent = {
    id?: number;
    subscriber_id?: number;
    event_id?: number;
    created_date?: string;
};
type AuthMeta = {
    type?: string;
    secret?: string;
};
type Association = {
    company_id?: number;
    application_id?: string[];
    extension_id?: string;
    criteria?: string;
};
type EventConfigBase = {
    event_name?: string;
    event_type?: string;
    event_category?: string;
    version?: string;
};
type RequestBodyAuditLog = {
    log_meta: LogMetaObj;
    log_payload: any;
};
type CreateLogResponse = {
    message?: string;
    internal_message?: string;
};
type LogMetaObj = {
    modifier?: any;
    application?: string;
    entity?: EntityObject;
    device_info?: any;
    location?: any;
};
type EntityObject = {
    id?: string;
    type?: string;
    action?: string;
};
type LogSchemaResponse = {
    docs?: LogDocs[];
};
type LogDocs = {
    entity?: EntityObj;
    modifier?: Modifier;
    device_info?: DeviceInfo;
    location?: Location;
    _id?: string;
    company?: string;
    application?: string;
    sessions?: string;
    date?: string;
    logs?: any;
};
type EntityObj = {
    id?: string;
    type?: string;
    action?: string;
    entity_details?: any;
};
type Modifier = {
    user_id?: string;
    as_administrator?: boolean;
    user_details?: any;
};
type DeviceInfo = {
    user_agent?: string;
    extra_meta?: any;
};
type Location = {
    extra_meta?: any;
};
type EntityTypesResponse = {
    items?: EntityTypeObj[];
};
type EntityTypeObj = {
    entity_value?: string;
    display_name?: string;
};
import Paginator = require("../common/Paginator");
import { OrderValidator } from "./PlatformApplicationModels";
