export = OrderPlatformModel;
/**
 * @typedef ActionInfo
 * @property {string} description
 * @property {string} display_text
 * @property {number} id
 * @property {string} slug
 */
/**
 * @typedef AdvanceFilterInfo
 * @property {FiltersInfo[]} [action_centre]
 * @property {Object} [applied_filters]
 * @property {FiltersInfo[]} [filters]
 * @property {Object} [page]
 * @property {FiltersInfo[]} [processed]
 * @property {FiltersInfo[]} [returned]
 * @property {FiltersInfo[]} [unfulfilled]
 */
/**
 * @typedef Affiliate
 * @property {AffiliateConfig} [config]
 * @property {string} id
 * @property {string} token
 */
/**
 * @typedef AffiliateAppConfig
 * @property {string} created_at
 * @property {string} [description]
 * @property {string} id
 * @property {AffiliateAppConfigMeta[]} [meta]
 * @property {string} name
 * @property {string} owner
 * @property {string} secret
 * @property {string} token
 * @property {string} updated_at
 */
/**
 * @typedef AffiliateAppConfigMeta
 * @property {string} name
 * @property {string} value
 */
/**
 * @typedef AffiliateBag
 * @property {string} _id
 * @property {Object} affiliate_meta
 * @property {string} affiliate_store_id
 * @property {number} amount_paid
 * @property {number} avl_qty
 * @property {number} company_id
 * @property {number} delivery_charge
 * @property {number} discount
 * @property {string} fynd_store_id
 * @property {string} hsn_code_id
 * @property {Object} identifier
 * @property {number} item_id
 * @property {string} item_size
 * @property {string} modified_on
 * @property {MarketPlacePdf} [pdf_links]
 * @property {number} price_effective
 * @property {number} price_marked
 * @property {number} quantity
 * @property {string} seller_identifier
 * @property {string} sku
 * @property {number} store_id
 * @property {number} transfer_price
 * @property {number} unit_price
 */
/**
 * @typedef AffiliateBagDetails
 * @property {string} affiliate_bag_id
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_order_id
 * @property {number} [employee_discount]
 * @property {number} [loyalty_discount]
 */
/**
 * @typedef AffiliateBagsDetails
 * @property {string} [affiliate_bag_id]
 * @property {AffiliateMeta} [affiliate_meta]
 * @property {string} [coupon_code]
 */
/**
 * @typedef AffiliateConfig
 * @property {AffiliateAppConfig} [app]
 * @property {number} [app_company_id]
 * @property {AffiliateInventoryConfig} [inventory]
 */
/**
 * @typedef AffiliateDetails
 * @property {string} [ad_id]
 * @property {string} affiliate_bag_id
 * @property {string} [affiliate_id]
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_order_id
 * @property {string} affiliate_shipment_id
 * @property {string} affiliate_store_id
 * @property {string} [company_affiliate_tag]
 * @property {AffiliateConfig} [config]
 * @property {PDFLinks} [pdf_links]
 * @property {ShipmentMeta} shipment_meta
 */
/**
 * @typedef AffiliateInventoryArticleAssignmentConfig
 * @property {boolean} [post_order_reassignment]
 */
/**
 * @typedef AffiliateInventoryConfig
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 * @property {AffiliateInventoryStoreConfig} [inventory]
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 * @property {AffiliateInventoryOrderConfig} [order]
 * @property {AffiliateInventoryPaymentConfig} [payment]
 */
/**
 * @typedef AffiliateInventoryLogisticsConfig
 * @property {boolean} [dp_assignment]
 */
/**
 * @typedef AffiliateInventoryOrderConfig
 * @property {boolean} [force_reassignment]
 */
/**
 * @typedef AffiliateInventoryPaymentConfig
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 */
/**
 * @typedef AffiliateInventoryStoreConfig
 * @property {Object} [store]
 */
/**
 * @typedef AffiliateMeta
 * @property {string} [box_type]
 * @property {string} [channel_order_id]
 * @property {string} [channel_shipment_id]
 * @property {string} [coupon_code]
 * @property {number} [customer_selling_price]
 * @property {string} [due_date]
 * @property {number} [employee_discount]
 * @property {number} [fulfilment_priority]
 * @property {boolean} [is_priority]
 * @property {boolean} [is_serial_number_required]
 * @property {number} [loyalty_discount]
 * @property {string} [marketplace_invoice_id]
 * @property {string} [order_item_id]
 * @property {number} [quantity]
 * @property {ReplacementDetails} [replacement_details]
 * @property {number} [size_level_total_qty]
 */
/**
 * @typedef AffiliateStoreIdMapping
 * @property {string} marketplace_store_id
 * @property {number} store_id
 */
/**
 * @typedef AllowedTemplatesResponse
 * @property {Templates[]} [template_x_slug]
 */
/**
 * @typedef AnnouncementResponse
 * @property {number} [company_id]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [from_datetime]
 * @property {number} id
 * @property {string} [logo_url]
 * @property {string} [platform_id]
 * @property {string} [platform_name]
 * @property {string} [title]
 * @property {string} [to_datetime]
 */
/**
 * @typedef AnnouncementsResponse
 * @property {AnnouncementResponse[]} [announcements]
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef AppliedPromos
 * @property {number} [amount]
 * @property {number} [article_quantity]
 * @property {BuyRules[]} [buy_rules]
 * @property {DiscountRules[]} [discount_rules]
 * @property {boolean} [mrp_promotion]
 * @property {string} [promo_id]
 * @property {string} [promotion_name]
 * @property {string} [promotion_type]
 */
/**
 * @typedef Article
 * @property {string} _id
 * @property {Object} [a_set]
 * @property {Object} [child_details]
 * @property {string} [code]
 * @property {Object} [currency]
 * @property {Dimensions} [dimensions]
 * @property {boolean} [esp_modified]
 * @property {Object} identifiers
 * @property {boolean} [is_set]
 * @property {string} [raw_meta]
 * @property {ReturnConfig} [return_config]
 * @property {string} seller_identifier
 * @property {string} size
 * @property {string} uid
 * @property {Weight} [weight]
 */
/**
 * @typedef ArticleDetails
 * @property {string} _id
 * @property {Object} attributes
 * @property {number} brand_id
 * @property {Object} category
 * @property {Object} dimension
 * @property {number} quantity
 * @property {Object} weight
 */
/**
 * @typedef ArticleStatusDetails
 * @property {Object} [status]
 */
/**
 * @typedef AttachOrderUser
 * @property {string} fynd_order_id
 * @property {AttachUserOtpData} otp_data
 * @property {AttachUserInfo} user_info
 */
/**
 * @typedef AttachOrderUserResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef AttachUserInfo
 * @property {string} [country_code]
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} mobile
 */
/**
 * @typedef AttachUserOtpData
 * @property {string} request_id
 */
/**
 * @typedef Attributes
 * @property {string} [brand_name]
 * @property {string} [essential]
 * @property {string[]} [gender]
 * @property {string} [marketer_address]
 * @property {string} [marketer_name]
 * @property {string} [name]
 * @property {string} [primary_color]
 * @property {string} [primary_color_hex]
 * @property {string} [primary_material]
 */
/**
 * @typedef BagConfigs
 * @property {boolean} allow_force_return
 * @property {boolean} can_be_cancelled
 * @property {boolean} enable_tracking
 * @property {boolean} is_active
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} is_returnable
 */
/**
 * @typedef BagData
 * @property {BagDetails[]} [items]
 * @property {BagsPage} [page]
 */
/**
 * @typedef BagDetails
 * @property {AffiliateBagDetails} [affiliate_bag_details]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {Object[]} [applied_promos]
 * @property {Article} [article]
 * @property {ArticleStatusDetails} [article_details]
 * @property {number} [bag_id]
 * @property {BagStatusHistory[]} [bag_status]
 * @property {BagStatusHistory} [bag_status_history]
 * @property {number} [bag_update_time]
 * @property {Brand} [brand]
 * @property {Company} [company]
 * @property {BagStatusHistory} [current_operational_status]
 * @property {BagStatusHistory} [current_status]
 * @property {Dates} [dates]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {DeliverySlotDetails} [delivery_slot]
 * @property {string} [display_name]
 * @property {Object} [dp_details]
 * @property {Object} [einvoice_info]
 * @property {string} [entity_type]
 * @property {Object} [fallback_user]
 * @property {FinancialBreakup[]} [financial_breakup]
 * @property {Store} [fulfilling_store]
 * @property {Object} [fyndstore_emp]
 * @property {GSTDetailsData} [gst_details]
 * @property {string} [id]
 * @property {string} [identifier]
 * @property {InvoiceDetails} [invoice]
 * @property {Item} [item]
 * @property {string} [journey_type]
 * @property {number} [line_number]
 * @property {boolean} [lock_status]
 * @property {string} [manifest_id]
 * @property {Object} [meta]
 * @property {string} [mode_of_payment]
 * @property {number} [no_of_bags_order]
 * @property {string} [operational_status]
 * @property {OrderDetails} [order]
 * @property {string} [order_integration_id]
 * @property {string} [order_type]
 * @property {number} [order_value]
 * @property {Store} [ordering_store]
 * @property {number[]} [original_bag_list]
 * @property {Object} [parent_promo_bags]
 * @property {Object} [payment_methods]
 * @property {string} [payment_type]
 * @property {Object} [payments]
 * @property {Prices} [prices]
 * @property {boolean} [qc_required]
 * @property {number} [quantity]
 * @property {Object[]} [reasons]
 * @property {boolean} [restore_coupon]
 * @property {Object} [restore_promos]
 * @property {PlatformDeliveryAddress} [rto_address]
 * @property {string} [seller_identifier]
 * @property {Shipment} [shipment]
 * @property {ShipmentDetails} [shipment_details]
 * @property {ShipmentGstDetails} [shipment_gst]
 * @property {string} [shipment_id]
 * @property {ShipmentStatusData} [shipment_status]
 * @property {ShipmentStatusData[]} [shipment_status_history]
 * @property {BagReturnableCancelableStatus} [status]
 * @property {string[]} [tags]
 * @property {number} [total_shipment_bags]
 * @property {number} [total_shipments_in_order]
 * @property {string} [transaction_type]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {UserDetails} [user]
 * @property {WeightData} [weight]
 */
/**
 * @typedef BagDetailsPlatformResponse
 * @property {BagDetails} [data]
 * @property {number} [status_code]
 */
/**
 * @typedef BagPaymentMethods
 * @property {number} [amount]
 * @property {string} [mode]
 */
/**
 * @typedef BagReasonMeta
 * @property {boolean} [show_text_area]
 */
/**
 * @typedef BagReasons
 * @property {string} [display_name]
 * @property {number} [id]
 * @property {BagReasonMeta} [meta]
 * @property {string[]} [qc_type]
 * @property {QuestionSet[]} [question_set]
 * @property {BagReasons[]} [reasons]
 */
/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} can_be_cancelled
 * @property {boolean} enable_tracking
 * @property {boolean} is_active
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} is_returnable
 */
/**
 * @typedef Bags
 * @property {string} [affiliate_bag_id] - Application/Affiliate Bag ID,
 *   Required if the ID is missing
 * @property {string} [affiliate_order_id] - Application/Affiliate Order ID,
 *   Required if the ID is missing
 * @property {number} [bag_id] - Bag Id
 * @property {boolean} [is_locked] - Is Bag Locked
 */
/**
 * @typedef BagsPage
 * @property {number} current
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {string} page_type
 * @property {number} size
 */
/**
 * @typedef BagStateMapper
 * @property {string} [app_display_name]
 * @property {boolean} [app_facing]
 * @property {string} [app_state_name]
 * @property {string} display_name
 * @property {number} id
 * @property {boolean} [is_active]
 * @property {string} journey_type
 * @property {string} name
 * @property {boolean} [notify_customer]
 * @property {string} state_type
 */
/**
 * @typedef BagStateTransitionMap
 * @property {Object} [affiliate]
 * @property {Object} [fynd]
 */
/**
 * @typedef BagStatusHistory
 * @property {string} [app_display_name]
 * @property {number} [bag_id]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {number} [bsh_id]
 * @property {string} [created_at]
 * @property {string} [created_ts]
 * @property {string} [delivery_awb_number]
 * @property {number} [delivery_partner_id]
 * @property {string} [display_name]
 * @property {boolean} [forward]
 * @property {boolean} [kafka_sync]
 * @property {Object[]} [reasons]
 * @property {string} [shipment_id]
 * @property {number} [state_id]
 * @property {string} [state_type]
 * @property {string} status
 * @property {number} [store_id]
 * @property {string} [updated_at]
 * @property {string} [updated_ts]
 */
/**
 * @typedef BagUnit
 * @property {AffiliateBagDetails} [affiliate_bag_details]
 * @property {Article} [article]
 * @property {string} [bag_expiry_date]
 * @property {number} bag_id
 * @property {BagStatusHistory[]} [bag_status]
 * @property {string} [bag_type]
 * @property {ShipmentListingBrand} [brand]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {BagStatusHistory} current_operational_status
 * @property {BagStatusHistory} current_status
 * @property {Dates} [dates]
 * @property {string} [display_name]
 * @property {string} [entity_type]
 * @property {FinancialBreakup[]} financial_breakup
 * @property {GSTDetailsData} [gst]
 * @property {PlatformItem} [item]
 * @property {number} [line_number]
 * @property {Object} [meta]
 * @property {Prices} [prices]
 * @property {number} product_quantity
 * @property {Object[]} [reasons]
 * @property {string} [size]
 * @property {BagReturnableCancelableStatus} status
 */
/**
 * @typedef BaseResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef BillingInfo
 * @property {string} [address]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [alternate_email]
 * @property {string} [alternate_mobile_number]
 * @property {string} [area]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [country_iso_code] - Country Code in ISO 2 format (e.g. US, IN)
 * @property {string} [customer_code]
 * @property {string} [external_customer_code]
 * @property {string} [first_name]
 * @property {string} [floor_no]
 * @property {string} [gender]
 * @property {string} [house_no]
 * @property {string} [landmark]
 * @property {string} [last_name]
 * @property {string} [middle_name]
 * @property {string} [pincode]
 * @property {string} [primary_email]
 * @property {string} [primary_mobile_number]
 * @property {string} [state]
 * @property {string} [state_code]
 * @property {string} [title]
 */
/**
 * @typedef Brand
 * @property {number} [brand_id]
 * @property {string} brand_name
 * @property {string} [company]
 * @property {string} [created_on]
 * @property {boolean} [credit_note_allowed]
 * @property {number} [credit_note_expiry_days]
 * @property {number} [id]
 * @property {string} [invoice_prefix]
 * @property {boolean} [is_virtual_invoice]
 * @property {string} [logo]
 * @property {number} [modified_on]
 * @property {string} [pickup_location]
 * @property {string} [script_last_ran]
 * @property {string} [start_date]
 */
/**
 * @typedef BulkActionListingData
 * @property {string} [batch_id]
 * @property {string} [bulk_action_type]
 * @property {number} [company_id]
 * @property {string} [created_ts]
 * @property {boolean} [do_invoice_label_generated]
 * @property {string} [file_name]
 * @property {string} [file_url]
 * @property {number} [id]
 * @property {string} [invoice_document_type]
 * @property {string} [invoice_status]
 * @property {boolean} [is_invoiceable]
 * @property {string} [label_document_type]
 * @property {string} [last_selected_invoice_label_type]
 * @property {Object} [meta]
 * @property {ShipmentActionInfo} [shipments_action_info]
 * @property {boolean} [status]
 * @property {string} [store_code]
 * @property {number} [store_id]
 * @property {string} [store_name]
 * @property {number} [updated_ts]
 * @property {string} [uploaded_by]
 * @property {string} [uploaded_on]
 * @property {string} [user_id]
 * @property {string} [user_name]
 */
/**
 * @typedef BulkActionTemplate
 * @property {string} [text]
 * @property {string} [value]
 */
/**
 * @typedef BulkActionTemplateResponse
 * @property {BulkActionTemplate[]} [template_x_slug] - Allowed bulk action template slugs
 */
/**
 * @typedef BulkFailedResponse
 * @property {string} [error]
 * @property {boolean} [status]
 */
/**
 * @typedef BulkListingResponse
 * @property {BulkActionListingData[]} [data]
 * @property {BulkListinPage} [page]
 * @property {boolean} [success]
 * @property {number} [total_count]
 */
/**
 * @typedef BulkListinPage
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {number} [total]
 * @property {string} [type]
 */
/**
 * @typedef BulkReportsDownloadRequest
 * @property {Object} [custom_filters_for_lane]
 * @property {string} [custom_headers] - Download report with specific headers
 * @property {string} [end_date] - UTC end date in ISO format
 * @property {string[]} [entities] - Download for specific enitites, entities
 *   can be bag, shipment or order_id, etc.
 * @property {string} [filter_type]
 * @property {boolean} [is_cross_company_enabled] - Download lanes for cross company.
 * @property {string} [lane_type]
 * @property {string} [report_type] - Type of report
 * @property {string} [start_date] - UTC start date in ISO format
 * @property {string[]} [store_ids] - Download for specific store ids.
 */
/**
 * @typedef BulkReportsDownloadResponse
 * @property {string} [batch_id]
 * @property {boolean} [success]
 */
/**
 * @typedef BulkStateTransistionRequest
 * @property {string} [file_name]
 * @property {string} [url]
 */
/**
 * @typedef BulkStateTransistionResponse
 * @property {string} [batch_id]
 * @property {string} [message]
 * @property {boolean} [status]
 */
/**
 * @typedef BuyerDetails
 * @property {string} address
 * @property {string} [ajio_site_id]
 * @property {string} city
 * @property {string} gstin
 * @property {string} name
 * @property {number} pincode
 * @property {string} state
 */
/**
 * @typedef BuyRules
 * @property {Object} [cart_conditions]
 * @property {ItemCriterias} [item_criteria]
 */
/**
 * @typedef Charge
 * @property {Object} amount
 * @property {string} [code]
 * @property {string} name
 * @property {Tax} [tax]
 * @property {string} type
 */
/**
 * @typedef CheckResponse
 * @property {string} [affiliate_id] - Affiliate ID
 * @property {string} [affiliate_shipment_id] - Affiliate Shipment ID
 * @property {Bags[]} [bags]
 * @property {boolean} [is_bag_locked] - Is Bag Locked
 * @property {boolean} [is_shipment_locked] - Is Shipment Locked
 * @property {string} [lock_status] - Lock Status: Expected lock_status:
 *   [complete, operational, financial]
 * @property {OriginalFilter} [original_filter] - Filter
 * @property {string} [shipment_id] - Shipment ID
 * @property {string} [status] - Status
 */
/**
 * @typedef Click2CallResponse
 * @property {string} call_id - Call ID from the provider
 * @property {boolean} success - Success
 */
/**
 * @typedef Company
 * @property {string} [agreement_start_date]
 * @property {string} [business_type]
 * @property {string} [company_name]
 * @property {string} [company_type]
 * @property {string} [created_on]
 * @property {string} [gst_number]
 * @property {number} [id]
 * @property {Object} [meta]
 * @property {string} [modified_on]
 * @property {string} [pan_no]
 */
/**
 * @typedef CompanyDetails
 * @property {Object} [address]
 * @property {string} [company_cin]
 * @property {ContactDetails} [company_contact]
 * @property {string} [company_gst]
 * @property {number} [company_id]
 * @property {string} [company_name]
 */
/**
 * @typedef ContactDetails
 * @property {string[]} [emails]
 * @property {PhoneDetails[]} [phone]
 */
/**
 * @typedef ConversionRate
 * @property {string} [base]
 * @property {Object} [rates]
 */
/**
 * @typedef CourierPartnerTrackingDetails
 * @property {string} awb - AWB Number
 * @property {string} [dp_location] - Current location of Courier partner
 * @property {string} dp_name - Courier Partner name
 * @property {string} dp_status - Status at Courier partner end
 * @property {string} dp_status_updated_at - Date Time at which status was
 *   updated at Courier partner
 * @property {string} [estimated_delivery_date] - Estimated delivery date
 *   received from Courier partner
 * @property {number} [id] - Id of Tracking history
 * @property {string} journey - Journey type of the shipment
 * @property {Object} [meta] - Meta field to store Courier partner's meta data
 * @property {string} operational_status - Operational status of OMS
 * @property {string} [promised_delivery_date] - Promised delivery date received
 *   from Courier partner
 * @property {string} [remark] - Remark from courier partner
 * @property {string} shipment_id - Shipment ID
 */
/**
 * @typedef CourierPartnerTrackingResponse
 * @property {CourierPartnerTrackingDetails[]} [items]
 * @property {PageDetails} [page]
 */
/**
 * @typedef CreateChannelConfig
 * @property {DpConfiguration} [dp_configuration]
 * @property {boolean} [location_reassignment]
 * @property {string[]} [lock_states]
 * @property {Object} [logo_url]
 * @property {CreateChannelPaymentInfo} [payment_info]
 * @property {string} [shipment_assignment]
 */
/**
 * @typedef CreateChannelConfigData
 * @property {CreateChannelConfig} [config_data]
 */
/**
 * @typedef CreateChannelConfigResponse
 * @property {boolean} [acknowledged]
 * @property {boolean} [is_inserted]
 * @property {boolean} [is_upserted]
 */
/**
 * @typedef CreateChannelConifgErrorResponse
 * @property {string} [error]
 */
/**
 * @typedef CreateChannelPaymentInfo
 * @property {string} [mode_of_payment]
 * @property {PaymentMethods[]} [payment_methods]
 * @property {string} [source]
 */
/**
 * @typedef CreateOrderAPI
 * @property {BillingInfo} billing_info
 * @property {Charge[]} [charges]
 * @property {Object} [config]
 * @property {Object} [currency_info]
 * @property {string} [external_creation_date]
 * @property {string} [external_order_id]
 * @property {Object} [meta]
 * @property {PaymentInfo} payment_info
 * @property {Shipment[]} shipments
 * @property {ShippingInfo} shipping_info
 * @property {TaxInfo} [tax_info]
 * @property {UserInfo} [user_info]
 */
/**
 * @typedef CreateOrderErrorReponse
 * @property {string} [code]
 * @property {string} [exception]
 * @property {Object} [info]
 * @property {string} message
 * @property {string} [meta]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {number} status
 */
/**
 * @typedef CreateOrderPayload
 * @property {string} affiliate_id
 * @property {OrderConfig} order_config
 * @property {OrderInfo} order_info
 */
/**
 * @typedef CreateOrderResponse
 * @property {string} fynd_order_id
 */
/**
 * @typedef CreditBalanceInfo
 * @property {string} [customer_mobile_number]
 * @property {string} [reason]
 * @property {string} [total_credited_balance]
 */
/**
 * @typedef Currency
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 */
/**
 * @typedef CurrencyInfo
 * @property {ConversionRate} [conversion_rate]
 * @property {OrderingCurrency} [ordering_currency]
 */
/**
 * @typedef CurrentStatus
 * @property {number} [bag_id]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {string} [created_at]
 * @property {string} [created_ts]
 * @property {string} [delivery_awb_number]
 * @property {number} [delivery_partner_id]
 * @property {number} id
 * @property {boolean} [kafka_sync]
 * @property {string} [shipment_id]
 * @property {number} [state_id]
 * @property {string} [state_type]
 * @property {string} [status]
 * @property {number} [store_id]
 * @property {string} [updated_at]
 */
/**
 * @typedef DataUpdates
 * @property {EntitiesDataUpdates[]} [entities]
 * @property {OrderItemDataUpdates[]} [order_item_status]
 * @property {ProductsDataUpdates[]} [products]
 */
/**
 * @typedef DateRange
 * @property {string} [from_date]
 * @property {string} [to_date]
 */
/**
 * @typedef Dates
 * @property {string} [delivery_date]
 * @property {string} [order_created]
 */
/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid]
 */
/**
 * @typedef DeliverySlotDetails
 * @property {string} [date]
 * @property {string} [lower_bound]
 * @property {string} [slot]
 * @property {string} [type]
 * @property {string} [upper_bound]
 */
/**
 * @typedef Dimension
 * @property {string} [height]
 * @property {number} [length]
 * @property {string} [packaging_type]
 * @property {string} [weight]
 * @property {number} [width]
 */
/**
 * @typedef Dimensions
 * @property {number} [height]
 * @property {boolean} [is_default]
 * @property {number} [length]
 * @property {string} [unit]
 * @property {number} [width]
 */
/**
 * @typedef DiscountRules
 * @property {string} [type]
 * @property {number} [value]
 */
/**
 * @typedef DispatchManifest
 * @property {string} manifest_id
 */
/**
 * @typedef Document
 * @property {string} ds_type
 * @property {string} legal_name
 * @property {string} [url]
 * @property {string} value
 * @property {boolean} verified
 */
/**
 * @typedef DpConfiguration
 * @property {string} [shipping_by]
 */
/**
 * @typedef DPDetailsData
 * @property {string} [awb_no]
 * @property {string} [country]
 * @property {string} [eway_bill_id]
 * @property {string} [gst_tag]
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [pincode]
 * @property {string} [track_url]
 */
/**
 * @typedef EInvoiceDetails
 * @property {EInvoiceErrorDetails[]} [error_details]
 * @property {EInvoiceIrnDetails} [irn_details]
 */
/**
 * @typedef EInvoiceErrorDetails
 * @property {string} [error_code]
 * @property {string} error_message
 */
/**
 * @typedef EInvoiceErrorInfo
 * @property {EInvoiceErrorDetails[]} [error_details]
 */
/**
 * @typedef EInvoiceErrorResponse
 * @property {string} [message]
 * @property {EInvoiceErrorResponseData[]} [response_data]
 */
/**
 * @typedef EInvoiceErrorResponseData
 * @property {EInvoiceErrorInfo} [einvoice_info]
 * @property {string} einvoice_type
 * @property {string} message
 * @property {string} shipment_id
 * @property {number} status
 */
/**
 * @typedef EInvoiceErrorResponseDetails
 * @property {string} [message]
 * @property {EInvoiceErrorResponseData[]} response_data
 */
/**
 * @typedef EinvoiceInfo
 * @property {Object} [credit_note]
 * @property {Object} [invoice]
 */
/**
 * @typedef EInvoiceIrnDetails
 * @property {string} ack_dt
 * @property {string} ack_no
 * @property {string} irn
 * @property {string} signed_invoice
 * @property {string} signed_qr_code
 */
/**
 * @typedef EInvoicePortalDetails
 * @property {string} [password]
 * @property {string} [user]
 * @property {string} [username]
 */
/**
 * @typedef EInvoiceResponseData
 * @property {EInvoiceDetails} [einvoice_info]
 * @property {string} einvoice_type
 * @property {string} message
 * @property {string} shipment_id
 * @property {number} status
 */
/**
 * @typedef EInvoiceRetry
 * @property {EInvoiceRetryShipmentData[]} [shipments_data]
 */
/**
 * @typedef EInvoiceRetryResponse
 * @property {EInvoiceResponseData[]} response_data
 */
/**
 * @typedef EInvoiceRetryShipmentData
 * @property {string} einvoice_type
 * @property {string} shipment_id
 */
/**
 * @typedef Entities
 * @property {string} [affiliate_bag_id] - Application/Affiliate Bag ID,
 *   Required if the ID is missing
 * @property {string} [affiliate_id] - Application/Affiliate ID, Required if the
 *   ID is missing
 * @property {string} [affiliate_order_id] - Application/Affiliate Order ID,
 *   Required if the ID is missing
 * @property {string} [affiliate_shipment_id] - Application/Affiliate Shipment
 *   ID, Required if the ID is missing
 * @property {string} [id] - Shipment ID if 'entity_type': shipments | Bag Id if
 *   'entity_type': bags
 * @property {string} reason_text - Reason For Shipment/Bag Action
 */
/**
 * @typedef EntitiesDataUpdates
 * @property {Object} [data]
 * @property {Object[]} [filters]
 */
/**
 * @typedef EntitiesReasons
 * @property {EntityReasonData} [data]
 * @property {Object[]} [filters]
 */
/**
 * @typedef EntityReasonData
 * @property {number} [reason_id]
 * @property {string} [reason_text]
 */
/**
 * @typedef Error
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef ErrorDetail
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef ErrorResponse
 * @property {string} [error]
 * @property {string} [error_trace]
 * @property {string} message
 * @property {number} [status]
 * @property {boolean} [success]
 */
/**
 * @typedef FailedOrderLogDetails
 * @property {string} error_trace
 * @property {string} exception
 */
/**
 * @typedef FailedOrderLogs
 * @property {FailedOrdersItem} items
 * @property {PageDetails} page
 */
/**
 * @typedef FailedOrdersItem
 * @property {LogsChannelDetails} channel
 * @property {string} created_at
 * @property {string} display_message
 * @property {string} error_message
 * @property {number} log_id
 * @property {Object} meta
 * @property {string} method_name
 * @property {string} order_id
 * @property {LogPaymentDetails} payment
 */
/**
 * @typedef FetchCreditBalanceRequestPayload
 * @property {string} affiliate_id
 * @property {string} customer_mobile_number
 * @property {string} seller_id
 */
/**
 * @typedef FetchCreditBalanceResponsePayload
 * @property {CreditBalanceInfo} data
 * @property {boolean} success
 */
/**
 * @typedef FileResponse
 * @property {URL} [cdn]
 * @property {string} [file_name] - Name of the file
 */
/**
 * @typedef FilterInfoOption
 * @property {number} [min_search_size]
 * @property {string} [name]
 * @property {string} [placeholder_text]
 * @property {boolean} [show_ui]
 * @property {string} [text]
 * @property {string} [value]
 */
/**
 * @typedef Filters
 * @property {DateRange} [date_range]
 * @property {number} [dp_ids]
 * @property {string} [dp_name]
 * @property {string} [from_date]
 * @property {string} [lane]
 * @property {string} [logo]
 * @property {string} [selected_shipments]
 * @property {string} [store_name]
 * @property {number} [stores]
 * @property {string} [to_date]
 */
/**
 * @typedef FiltersInfo
 * @property {FilterInfoOption[]} [options]
 * @property {string} [placeholder_text]
 * @property {boolean} [required]
 * @property {string} text
 * @property {string} type
 * @property {string} value
 */
/**
 * @typedef FiltersRequest
 * @property {DateRange} [date_range]
 * @property {number} dp_ids
 * @property {string} dp_name
 * @property {string} lane
 * @property {string} [logo]
 * @property {string} store_name
 * @property {number} stores
 */
/**
 * @typedef FiltersResponse
 * @property {AdvanceFilterInfo} [advance_filter]
 * @property {FiltersInfo[]} [global_filter]
 */
/**
 * @typedef FinancialBreakup
 * @property {boolean} added_to_fynd_cash
 * @property {number} amount_paid
 * @property {number} [amount_paid_roundoff]
 * @property {number} brand_calculated_amount
 * @property {number} cashback
 * @property {number} cashback_applied
 * @property {number} cod_charges
 * @property {number} coupon_effective_discount
 * @property {number} coupon_value
 * @property {number} delivery_charge
 * @property {number} discount
 * @property {number} fynd_credits
 * @property {number} gst_fee
 * @property {string} gst_tag
 * @property {number} gst_tax_percentage
 * @property {string} hsn_code
 * @property {Identifier} identifiers
 * @property {string} item_name
 * @property {number} price_effective
 * @property {number} price_marked
 * @property {number} promotion_effective_discount
 * @property {number} refund_credit
 * @property {string} size
 * @property {number} [tax_collected_at_source]
 * @property {number} total_units
 * @property {number} transfer_price
 * @property {number} value_of_good
 */
/**
 * @typedef Formatted
 * @property {string} [max]
 * @property {string} [min]
 */
/**
 * @typedef FulfillingStore
 * @property {string} address
 * @property {string} [address1]
 * @property {string} city
 * @property {string} code
 * @property {string} contact_person
 * @property {string} country
 * @property {string} [display_address]
 * @property {string} fulfillment_channel
 * @property {number} id
 * @property {Object} meta
 * @property {string} phone
 * @property {string} pincode
 * @property {string} state
 * @property {string} store_name
 */
/**
 * @typedef FyndOrderIdList
 * @property {string[]} [fynd_order_id]
 */
/**
 * @typedef GenerateInvoiceIDErrorResponse
 * @property {GenerateInvoiceIDErrorResponseData[]} [items]
 */
/**
 * @typedef GenerateInvoiceIDErrorResponseData
 * @property {string} [error_message]
 * @property {boolean} [invoice_id]
 * @property {string} [shipment_id]
 * @property {boolean} [success]
 */
/**
 * @typedef GenerateInvoiceIDRequest
 * @property {string[]} shipment_ids
 */
/**
 * @typedef GenerateInvoiceIDResponse
 * @property {GenerateInvoiceIDResponseData[]} [items]
 */
/**
 * @typedef GenerateInvoiceIDResponseData
 * @property {boolean} [error_message]
 * @property {string} [invoice_id]
 * @property {string} [shipment_id]
 * @property {boolean} [success]
 */
/**
 * @typedef GeneratePosOrderReceiptResponse
 * @property {string} [customer_cn_receipt]
 * @property {string} [customer_cn_receipt_template]
 * @property {string} [invoice_receipt]
 * @property {string} [invoice_receipt_template]
 * @property {string} [merchant_cn_receipt]
 * @property {string} [order_id]
 * @property {string} [payment_receipt]
 * @property {string} [payment_receipt_template]
 * @property {boolean} [success]
 */
/**
 * @typedef GetActionsResponse
 * @property {ActionInfo[]} [permissions]
 */
/**
 * @typedef GetBagsPlatformResponse
 * @property {BagData} [data]
 * @property {number} [status_code]
 */
/**
 * @typedef GSTDetailsData
 * @property {number} brand_calculated_amount
 * @property {number} [cgst_gst_fee]
 * @property {number} [cgst_tax_percentage]
 * @property {number} gst_fee
 * @property {string} [gst_tag]
 * @property {number} [gst_tax_percentage]
 * @property {string} [gstin_code]
 * @property {string} [hsn_code]
 * @property {string} [hsn_code_id]
 * @property {number} [igst_gst_fee]
 * @property {number} [igst_tax_percentage]
 * @property {boolean} [is_default_hsn_code]
 * @property {number} [sgst_gst_fee]
 * @property {number} [sgst_tax_percentage]
 * @property {number} tax_collected_at_source
 * @property {number} value_of_good
 */
/**
 * @typedef HistoryDict
 * @property {string} [assigned_agent] - Assigned Agent
 * @property {number} [bag_id] - Bag ID
 * @property {string} createdat - Create date
 * @property {string} [display_message] - Display Message
 * @property {string} [l1_detail] - L1 details of bag
 * @property {string} [l2_detail] - L2 details of bag
 * @property {string} [l3_detail] - L3 details of bag
 * @property {string} message - History Message or comment
 * @property {HistoryMeta} [meta] - Meta
 * @property {string} [ticket_id] - Ticket ID
 * @property {string} [ticket_url] - Ticket URL
 * @property {string} type - Type of history, Expected Values: [
 *   activity_status, activity_escalation, activity_comment,
 *   outbound_notification, outbound_voice ]
 * @property {string} user - User who created the history
 */
/**
 * @typedef HistoryMeta
 * @property {string} [activity_comment]
 * @property {string} [activity_type]
 * @property {string} [billsec]
 * @property {string} [call_id]
 * @property {string} [caller]
 * @property {string} [callerid]
 * @property {string} [channel_type]
 * @property {string} [duration]
 * @property {string} [endtime]
 * @property {string} [message]
 * @property {HistoryReason} [reason]
 * @property {string} [receiver]
 * @property {string} [recipient]
 * @property {string} [recordpath]
 * @property {string} [short_link]
 * @property {string} [slug]
 * @property {string} [starttime]
 * @property {string} [status]
 * @property {string} [status1]
 * @property {string} [status2]
 * @property {string} [store_code]
 * @property {number} [store_id]
 * @property {string} [store_name]
 */
/**
 * @typedef HistoryReason
 * @property {string} [category]
 * @property {number} [code]
 * @property {string} [dislay_name]
 * @property {number} [quantity]
 * @property {string} [state]
 * @property {string} [text]
 */
/**
 * @typedef Identifier
 * @property {string} [alu]
 * @property {string} [ean]
 * @property {string} [isbn]
 * @property {string} [sku_code]
 * @property {string} [upc]
 */
/**
 * @typedef InvalidateShipmentCacheNestedResponse
 * @property {string} [error]
 * @property {string} [message]
 * @property {string} [shipment_id]
 * @property {number} [status]
 */
/**
 * @typedef InvalidateShipmentCachePayload
 * @property {string[]} [affiliate_bag_ids] - Affiliate Bag Ids to clear cache
 *   of shipment Ids mapped to it
 * @property {string[]} [bag_ids] - Bag Ids to clear cache of shipment Ids mapped to it
 * @property {string[]} [shipment_ids] - Shipment Ids to clear cache
 */
/**
 * @typedef InvalidateShipmentCacheResponse
 * @property {InvalidateShipmentCacheNestedResponse[]} [response]
 */
/**
 * @typedef InvoiceDetails
 * @property {string} [invoice_url]
 * @property {string} [label_url]
 * @property {string} [store_invoice_id]
 * @property {string} [updated_date]
 */
/**
 * @typedef InvoiceInfo
 * @property {string} [credit_note_id]
 * @property {string} [external_invoice_id]
 * @property {string} [invoice_url]
 * @property {string} [label_url]
 * @property {Object} [links]
 * @property {string} [store_invoice_id]
 * @property {string} [updated_date]
 */
/**
 * @typedef Item
 * @property {Attributes} attributes
 * @property {string} [branch_url]
 * @property {string} brand
 * @property {number} brand_id
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {string} [code]
 * @property {string} [color]
 * @property {number} [department_id]
 * @property {string} [gender]
 * @property {string[]} image
 * @property {number} item_id
 * @property {string[]} [l1_category]
 * @property {number} [l1_category_id]
 * @property {string[]} [l2_category]
 * @property {number} [l2_category_id]
 * @property {number} [l3_category]
 * @property {string} [l3_category_name]
 * @property {string} [last_updated_at]
 * @property {Object} [meta]
 * @property {string} name
 * @property {string} size
 * @property {string} slug_key
 * @property {string} [webstore_product_url]
 */
/**
 * @typedef ItemCriterias
 * @property {number[]} [item_brand]
 */
/**
 * @typedef JobDetailsData
 * @property {string} [batch_id]
 * @property {string} [company_id]
 * @property {number} [failed_shipments_count]
 * @property {number} [processing_shipments_count]
 * @property {string[]} [successful_shipment_ids]
 * @property {number} [successful_shipments_count]
 * @property {number} [total_shipments_count]
 */
/**
 * @typedef JobDetailsResponse
 * @property {string} [created_ts]
 * @property {JobDetailsData[]} [data]
 * @property {Object[]} [failed_records]
 * @property {string} [file_url]
 * @property {string} [message]
 * @property {string} [status]
 * @property {boolean} [success]
 * @property {string} [uploaded_by]
 * @property {string} [uploaded_on]
 * @property {string} [user_id]
 */
/**
 * @typedef JobFailedResponse
 * @property {string} [file_name]
 * @property {string} [url]
 */
/**
 * @typedef LaneConfigResponse
 * @property {SuperLane[]} [super_lanes]
 */
/**
 * @typedef LineItem
 * @property {Charge[]} [charges]
 * @property {string} [custom_message]
 * @property {string} [external_line_id]
 * @property {Object} [meta]
 * @property {number} [quantity]
 * @property {string} seller_identifier
 */
/**
 * @typedef LocationDetails
 * @property {ArticleDetails[]} articles
 * @property {number} fulfillment_id
 * @property {string} fulfillment_type
 */
/**
 * @typedef LockData
 * @property {string} [lock_message]
 * @property {boolean} [locked]
 * @property {boolean} [mto]
 */
/**
 * @typedef LogPaymentDetails
 * @property {string} [amount_paid]
 * @property {string} [payment_mode]
 */
/**
 * @typedef LogsChannelDetails
 * @property {string} [channel_id]
 * @property {string} [channel_shipment_id]
 * @property {string} [logo]
 * @property {string} [name]
 */
/**
 * @typedef Manifest
 * @property {number} company_id
 * @property {string} created_at
 * @property {string} created_by
 * @property {string} [created_ts]
 * @property {Filters} [filters]
 * @property {number} id
 * @property {boolean} is_active
 * @property {string} manifest_id
 * @property {ManifestMeta} [meta]
 * @property {PDFMeta} [pdf_meta]
 * @property {string} status
 * @property {string} uid
 * @property {string} user_id
 */
/**
 * @typedef ManifestDetails
 * @property {number} [additional_shipment_count]
 * @property {ManifestItemDetails[]} [items]
 * @property {Manifest[]} [manifest_details]
 * @property {ManifestPageInfo} [page]
 */
/**
 * @typedef ManifestFile
 * @property {string} [bucket]
 * @property {string} [key]
 * @property {string} [region]
 */
/**
 * @typedef ManifestFiltersResponse
 * @property {FiltersInfo[]} [advance_filter]
 * @property {FiltersInfo[]} [global_filter]
 */
/**
 * @typedef ManifestItemDetails
 * @property {string} [awb_number]
 * @property {string} [invoice_id]
 * @property {string} order_id
 * @property {number} [quantity]
 * @property {string} [shipment_created_at]
 * @property {string} shipment_id
 */
/**
 * @typedef ManifestList
 * @property {Manifest[]} [items]
 * @property {ManifestPageInfo} [page]
 */
/**
 * @typedef ManifestMediaUpdate
 * @property {number} [code]
 * @property {string} [entity]
 * @property {ManifestFile} [file]
 * @property {string} [link]
 * @property {string} [media_type]
 * @property {boolean} [status]
 */
/**
 * @typedef ManifestMeta
 * @property {Filters} [filters]
 * @property {TotalShipmentPricesCount} [total_shipment_prices_count]
 */
/**
 * @typedef ManifestPageInfo
 * @property {number} current
 * @property {boolean} has_next
 * @property {boolean} has_previous
 * @property {number} size
 * @property {number} total
 * @property {string} type
 */
/**
 * @typedef ManifestShipmentListing
 * @property {ManifestItemDetails[]} [items]
 * @property {string} [lane]
 * @property {string} [message]
 * @property {ManifestPageInfo} page
 * @property {number} status
 * @property {boolean} success
 * @property {number} total_count
 */
/**
 * @typedef MarketPlacePdf
 * @property {string} [invoice]
 * @property {string} [label]
 */
/**
 * @typedef Meta
 * @property {number} [kafka_emission_status]
 * @property {string} [state_manager_used]
 */
/**
 * @typedef OrderBagArticle
 * @property {Object} [identifiers]
 * @property {ReturnConfig} [return_config]
 * @property {string} [size]
 * @property {string} [uid]
 */
/**
 * @typedef OrderBags
 * @property {AffiliateBagsDetails} [affiliate_bag_details]
 * @property {AppliedPromos[]} [applied_promos]
 * @property {OrderBagArticle} [article]
 * @property {BagConfigs} [bag_configs]
 * @property {number} bag_id
 * @property {BagStatusHistory[]} [bag_status]
 * @property {OrderBrandName} [brand]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {CurrentStatus} [current_status]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {string} [display_name]
 * @property {string} [entity_type]
 * @property {FinancialBreakup} [financial_breakup]
 * @property {string} [group_id]
 * @property {GSTDetailsData} [gst_details]
 * @property {string} [identifier]
 * @property {boolean} [is_parent]
 * @property {PlatformItem} [item]
 * @property {number} [line_number]
 * @property {Object} [meta]
 * @property {Object} [parent_promo_bags]
 * @property {BagPaymentMethods[]} [payment_methods]
 * @property {Prices} [prices]
 * @property {number} [quantity]
 * @property {string} [seller_identifier]
 */
/**
 * @typedef OrderBrandName
 * @property {string} [brand_name]
 * @property {number} [company]
 * @property {string} [created_on]
 * @property {number} id
 * @property {string} [logo]
 * @property {string} [modified_on]
 */
/**
 * @typedef OrderConfig
 * @property {Affiliate} affiliate
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 * @property {string} [article_lookup]
 * @property {string} [bag_end_state]
 * @property {boolean} [create_user]
 * @property {string} [store_lookup]
 */
/**
 * @typedef OrderData
 * @property {string} [created_ts]
 * @property {string} fynd_order_id
 * @property {Object} [meta]
 * @property {string} order_date
 * @property {Object} [payment_methods]
 * @property {Prices} [prices]
 * @property {TaxDetails} [tax_details]
 */
/**
 * @typedef OrderDetails
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_order_date]
 * @property {string} [affiliate_order_id]
 * @property {number} [cashback_applied]
 * @property {number} [cashback_value]
 * @property {number} [cod_charges]
 * @property {string} [collect_by]
 * @property {number} [coupon_value]
 * @property {string} [created_at]
 * @property {string} [created_time]
 * @property {string} [currency]
 * @property {number} [delivery_charges]
 * @property {number} [discount]
 * @property {number} [fynd_credits]
 * @property {string} [fynd_order_id]
 * @property {Object} [headers]
 * @property {Object} [meta]
 * @property {string} [mode_of_payment]
 * @property {number} [mongo_cart_id]
 * @property {number} [order_value]
 * @property {string} [ordering_channel]
 * @property {string} [ordering_channel_logo]
 * @property {Object} [payment_methods]
 * @property {number} [payment_mode_id]
 * @property {Prices} [prices]
 * @property {number} [promotion_effective_discount]
 * @property {string} [refund_by]
 * @property {TaxDetails} [tax_details]
 * @property {number} [total_order_value]
 * @property {string} [transaction_id]
 * @property {string} [user_id]
 */
/**
 * @typedef OrderDetailsData
 * @property {string} [affiliate_id]
 * @property {string} [cod_charges]
 * @property {string} [created_ts]
 * @property {string} fynd_order_id
 * @property {Object} [meta]
 * @property {string} [order_date]
 * @property {string} [order_value]
 * @property {string} [ordering_channel]
 * @property {Object} [ordering_channel_logo]
 * @property {string} [source]
 * @property {Object} [tax_details]
 */
/**
 * @typedef OrderDetailsResponse
 * @property {OrderData} [order]
 * @property {PlatformShipment[]} [shipments]
 * @property {boolean} success
 */
/**
 * @typedef OrderInfo
 * @property {string} [affiliate_order_id]
 * @property {AffiliateBag[]} bags
 * @property {OrderUser} billing_address
 * @property {number} cod_charges
 * @property {string} [coupon]
 * @property {number} delivery_charges
 * @property {number} discount
 * @property {Object} items
 * @property {OrderPriority} [order_priority]
 * @property {number} order_value
 * @property {Object} [payment]
 * @property {string} payment_mode
 * @property {ShipmentData} [shipment]
 * @property {OrderUser} shipping_address
 * @property {UserData} user
 */
/**
 * @typedef OrderingCurrency
 * @property {string} [currency_code]
 * @property {string} [currency_name]
 * @property {string} [currency_sub_unit]
 * @property {string} [currency_symbol]
 */
/**
 * @typedef OrderingStoreDetails
 * @property {string} [address]
 * @property {string} [address1]
 * @property {string} [city]
 * @property {string} [code]
 * @property {string} [contact_person]
 * @property {string} [country]
 * @property {string} [display_address]
 * @property {number} [id]
 * @property {Object} [meta]
 * @property {string} [phone]
 * @property {string} [pincode]
 * @property {string} [state]
 * @property {string} [store_name]
 */
/**
 * @typedef OrderItemDataUpdates
 * @property {Object} [data]
 */
/**
 * @typedef OrderListingResponse
 * @property {PlatformOrderItems[]} [items]
 * @property {string} [lane]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {boolean} [success]
 * @property {number} [total_count]
 */
/**
 * @typedef OrderPriority
 * @property {string} [affiliate_priority_code]
 * @property {number} [fulfilment_priority]
 * @property {string} [fulfilment_priority_text]
 */
/**
 * @typedef OrderStatus
 * @property {string} end_date
 * @property {number} mobile
 * @property {FyndOrderIdList[]} [order_details]
 * @property {string} start_date
 */
/**
 * @typedef OrderStatusData
 * @property {string[]} [errors]
 * @property {OrderDetails} order_details
 * @property {ShipmentDetail[]} [shipment_details]
 */
/**
 * @typedef OrderStatusResult
 * @property {OrderStatusData[]} [result]
 * @property {string} success
 */
/**
 * @typedef OrderUser
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} city
 * @property {string} country
 * @property {string} email
 * @property {string} first_name
 * @property {string} last_name
 * @property {number} mobile
 * @property {number} phone
 * @property {string} pincode
 * @property {string} state
 */
/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_id] - Affiliate ID
 * @property {string} [affiliate_shipment_id] - Affiliate Shipment ID
 */
/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */
/**
 * @typedef PageDetails
 * @property {number} [current] - Current page number
 * @property {boolean} [has_next] - If next page contains any result
 * @property {boolean} [has_previous] - If previous page contains any result
 * @property {number} item_total - Total count of the results present in the
 *   requested filter
 * @property {number} [size] - Page size
 * @property {string} [type] - Type of the page
 */
/**
 * @typedef PaymentInfo
 * @property {PaymentMethod[]} [payment_methods]
 * @property {string} primary_mode
 */
/**
 * @typedef PaymentMethod
 * @property {number} amount
 * @property {string} collect_by
 * @property {Object} [meta]
 * @property {string} mode
 * @property {string} name
 * @property {string} refund_by
 * @property {Object} [transaction_data]
 */
/**
 * @typedef PaymentMethods
 * @property {string} [collect_by]
 * @property {string} [mode]
 * @property {string} [refund_by]
 */
/**
 * @typedef PDFLinks
 * @property {string} [b2b]
 * @property {string} [credit_note_url]
 * @property {string} [delivery_challan_a4]
 * @property {string} [invoice]
 * @property {string} [invoice_a4]
 * @property {string} [invoice_a6]
 * @property {string} [invoice_export]
 * @property {string} [invoice_pos]
 * @property {string} invoice_type
 * @property {string} [label]
 * @property {string} [label_a4]
 * @property {string} [label_a6]
 * @property {string} [label_export]
 * @property {string} [label_pos]
 * @property {string} label_type
 * @property {string} [po_invoice]
 */
/**
 * @typedef PDFMeta
 * @property {string} [consent]
 * @property {ManifestMediaUpdate[]} [media_updates]
 */
/**
 * @typedef PhoneDetails
 * @property {number} [country_code]
 * @property {string} [number]
 */
/**
 * @typedef PlatformArticleAttributes
 * @property {string} [currency]
 */
/**
 * @typedef PlatformBreakupValues
 * @property {string} [display]
 * @property {string} [name]
 * @property {string} [value]
 */
/**
 * @typedef PlatformChannel
 * @property {string} [logo]
 * @property {string} [name]
 */
/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [address_category]
 * @property {string} [address_type]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [area]
 * @property {string} [city]
 * @property {string} [contact_person]
 * @property {string} [country]
 * @property {string} [created_at]
 * @property {string} [display_address]
 * @property {string} [email]
 * @property {string} [landmark]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [phone]
 * @property {string} [pincode]
 * @property {string} [state]
 * @property {string} [updated_at]
 * @property {string} [version]
 */
/**
 * @typedef PlatformItem
 * @property {PlatformArticleAttributes} [attributes]
 * @property {string} [branch_url]
 * @property {string} [brand]
 * @property {number} [brand_id]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {string} [code]
 * @property {string} [color]
 * @property {number} [department_id]
 * @property {number} [id]
 * @property {string[]} [image]
 * @property {string[]} [images]
 * @property {string[]} [l1_category]
 * @property {string[]} [l2_category]
 * @property {number} [l3_category]
 * @property {string} [l3_category_name]
 * @property {string} [last_updated_at]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {string} [size]
 * @property {string} [slug_key]
 */
/**
 * @typedef PlatformOrderItems
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {PlatformChannel} [channel]
 * @property {Currency} [currency]
 * @property {CurrencyInfo} [currency_info]
 * @property {Object} [meta]
 * @property {string} [order_created_time]
 * @property {string} [order_created_ts]
 * @property {string} [order_id]
 * @property {number} [order_value]
 * @property {string} [payment_mode]
 * @property {PlatformShipment[]} [shipments]
 * @property {number} [total_order_value]
 * @property {UserDataInfo} [user_info]
 */
/**
 * @typedef PlatformOrderUpdate
 * @property {string} order_id
 */
/**
 * @typedef PlatformShipment
 * @property {AffiliateDetails} [affiliate_details]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {OrderBags[]} [bags]
 * @property {UserDetailsData} [billing_details]
 * @property {boolean} [can_update_dimension]
 * @property {CompanyDetails} [company_details]
 * @property {Object} [coupon]
 * @property {string} [credit_note_id]
 * @property {Currency} [currency]
 * @property {CurrencyInfo} [currency_info]
 * @property {string} [custom_message]
 * @property {Object[]} [custom_meta]
 * @property {UserDetailsData} [delivery_details]
 * @property {Object} [delivery_slot]
 * @property {boolean} [dp_assignment]
 * @property {DPDetailsData} [dp_details]
 * @property {boolean} [enable_dp_tracking]
 * @property {string} [estimated_sla_time]
 * @property {string} [estimated_sla_ts]
 * @property {string} [forward_shipment_id]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {number} [fulfilment_priority]
 * @property {GSTDetailsData} [gst_details]
 * @property {InvoiceInfo} [invoice]
 * @property {string} [invoice_id]
 * @property {boolean} [is_dp_assign_enabled]
 * @property {boolean} [is_self_ship]
 * @property {string} [journey_type]
 * @property {boolean} [lock_status]
 * @property {Object} [meta]
 * @property {string} [mode_of_payment]
 * @property {string} [operational_status]
 * @property {OrderDetailsData} [order]
 * @property {OrderingStoreDetails} [ordering_store]
 * @property {string} [packaging_type]
 * @property {Object} [payment_methods]
 * @property {string} [payment_mode]
 * @property {ShipmentPayments} [payments]
 * @property {Object} [pdf_links]
 * @property {string} [picked_date]
 * @property {string} [platform_logo]
 * @property {string} [previous_shipment_id]
 * @property {Prices} [prices]
 * @property {string} [priority_text]
 * @property {PlatformDeliveryAddress} [rto_address]
 * @property {string} [shipment_created_at]
 * @property {string} [shipment_created_ts]
 * @property {ShipmentLockDetails} [shipment_details]
 * @property {string} shipment_id
 * @property {string[]} [shipment_images]
 * @property {number} [shipment_quantity]
 * @property {string} [shipment_status]
 * @property {number} [shipment_update_time]
 * @property {ShipmentStatusData} [status]
 * @property {number} [total_bags]
 * @property {number} [total_items]
 * @property {TrackingList[]} [tracking_list]
 * @property {UserDataInfo} [user]
 * @property {string} [user_agent]
 * @property {string} [vertical]
 */
/**
 * @typedef PlatformShipmentReasonsResponse
 * @property {Reason[]} [reasons]
 * @property {boolean} [success]
 */
/**
 * @typedef PlatformShipmentTrack
 * @property {Object} [meta]
 * @property {PlatformTrack[]} [results]
 */
/**
 * @typedef PlatformTrack
 * @property {string} [account_name]
 * @property {string} [awb]
 * @property {string} [last_location_recieved_at]
 * @property {Object} [meta]
 * @property {string} [raw_status]
 * @property {string} [reason]
 * @property {string} [shipment_type]
 * @property {string} [status]
 * @property {string} [updated_at]
 * @property {string} [updated_time]
 */
/**
 * @typedef PointBlankOtpData
 * @property {string} [message]
 * @property {number} [mobile]
 * @property {string} [request_id]
 * @property {number} [resend_timer]
 */
/**
 * @typedef PostHistoryData
 * @property {string} message
 * @property {string} user_name
 */
/**
 * @typedef PostHistoryDict
 * @property {PostHistoryData} data
 * @property {PostHistoryFilters[]} filters
 */
/**
 * @typedef PostHistoryFilters
 * @property {string} [identifier]
 * @property {string} [line_number]
 * @property {string} shipment_id
 */
/**
 * @typedef PostShipmentHistory
 * @property {PostHistoryDict[]} [activity_history]
 */
/**
 * @typedef Prices
 * @property {number} [amount_paid]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [brand_calculated_amount]
 * @property {number} [cashback]
 * @property {number} [cashback_applied]
 * @property {number} [cod_charges]
 * @property {number} [coupon_effective_discount]
 * @property {number} [coupon_value]
 * @property {number} [delivery_charge]
 * @property {number} [discount]
 * @property {number} [fynd_credits]
 * @property {number} [gift_price]
 * @property {number} [pm_price_split]
 * @property {number} [price_effective]
 * @property {number} [price_marked]
 * @property {number} [promotion_effective_discount]
 * @property {number} [refund_amount]
 * @property {number} [refund_credit]
 * @property {number} [tax_collected_at_source]
 * @property {number} [transfer_price]
 * @property {number} [value_of_good]
 */
/**
 * @typedef ProcessingDates
 * @property {string} [confirm_by_date]
 * @property {Object} [customer_pickup_slot]
 * @property {string} [dispatch_after_date]
 * @property {string} [dispatch_by_date]
 * @property {Object} [dp_pickup_slot]
 * @property {string} [pack_by_date]
 */
/**
 * @typedef ProcessManifest
 * @property {string} action
 * @property {FiltersRequest} filters
 * @property {string} [manifest_id]
 * @property {string} unique_id
 */
/**
 * @typedef ProcessManifestItemResponse
 * @property {ProcessManifestResponse} [items]
 */
/**
 * @typedef ProcessManifestResponse
 * @property {string} [action]
 * @property {number} [company_id]
 * @property {string} [created_by]
 * @property {Filters} [filters]
 * @property {string} [manifest_id]
 * @property {string} [uid]
 * @property {string} [user_id]
 */
/**
 * @typedef Products
 * @property {string} [identifier] - Product/Bag Article/Item Identifier
 * @property {number} [line_number] - Product/Bag Line number for the
 *   Product/Bag Identifier
 * @property {number} [quantity]
 */
/**
 * @typedef ProductsDataUpdates
 * @property {Object} [data]
 * @property {ProductsDataUpdatesFilters[]} [filters] - Filter for the Product/Bag
 */
/**
 * @typedef ProductsDataUpdatesFilters
 * @property {string} [identifier] - Product/Bag Article/Item Identifier
 * @property {number} [line_number] - Product/Bag Line number for the
 *   Product/Bag Identifier
 */
/**
 * @typedef ProductsReasons
 * @property {ProductsReasonsData} [data]
 * @property {ProductsReasonsFilters[]} [filters]
 */
/**
 * @typedef ProductsReasonsData
 * @property {number} [reason_id]
 * @property {string} [reason_text]
 */
/**
 * @typedef ProductsReasonsFilters
 * @property {string} [identifier] - Product/Bag Article/Item Identifier
 * @property {number} [line_number] - Product/Bag Line number for the
 *   Product/Bag Identifier
 * @property {number} [quantity]
 */
/**
 * @typedef QuestionSet
 * @property {string} [display_name]
 * @property {number} [id]
 */
/**
 * @typedef Reason
 * @property {string} [display_name]
 * @property {number} [id]
 * @property {string[]} [qc_type]
 * @property {QuestionSet[]} [question_set]
 */
/**
 * @typedef ReasonsData
 * @property {EntitiesReasons[]} [entities]
 * @property {ProductsReasons[]} [products]
 */
/**
 * @typedef RefundModeConfigRequestPayload
 * @property {string} affiliate_id
 * @property {string} [customer_mobile_number]
 * @property {string} fynd_order_id
 * @property {number} seller_id
 */
/**
 * @typedef RefundModeConfigResponsePayload
 * @property {RefundModeInfo[]} data
 * @property {boolean} success
 */
/**
 * @typedef RefundModeInfo
 * @property {string} [display_name]
 * @property {boolean} [is_active]
 * @property {RefundOption[]} [options]
 * @property {string} [slug]
 */
/**
 * @typedef RefundOption
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef ReplacementDetails
 * @property {string} [original_affiliate_order_id]
 * @property {string} [replacement_type]
 */
/**
 * @typedef ResponseDetail
 * @property {string[]} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef ReturnConfig
 * @property {boolean} [returnable]
 * @property {number} [time]
 * @property {string} [unit]
 */
/**
 * @typedef RoleBaseStateTransitionMapping
 * @property {string[]} [next_statuses]
 * @property {boolean} [success]
 */
/**
 * @typedef SendSmsPayload
 * @property {number} bag_id - Bag_id for the activity history track
 * @property {SmsDataPayload} [data] - SMS Data
 * @property {string} slug - Slug name for the template mapped in pointblank
 */
/**
 * @typedef SendUserMobileOTP
 * @property {string} [country_code]
 * @property {string} mobile
 */
/**
 * @typedef SendUserMobileOtpResponse
 * @property {PointBlankOtpData} [data]
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef Shipment
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_shipment_id]
 * @property {PlatformDeliveryAddress} [billing_address_json]
 * @property {string} [created_at]
 * @property {string} [credit_note_id]
 * @property {PlatformDeliveryAddress} [delivery_address_json]
 * @property {string} [delivery_awb_number]
 * @property {string} [eway_bill_id]
 * @property {string} [external_shipment_id]
 * @property {number} [fulfilment_priority]
 * @property {string} [fynd_order_id]
 * @property {ShipmentGstDetails} [gst]
 * @property {PlatformDeliveryAddress} [hand_over_contact_json]
 * @property {string} [id]
 * @property {boolean} [is_active]
 * @property {LineItem[]} line_items
 * @property {number} location_id
 * @property {string} [lock_status]
 * @property {Object} [meta]
 * @property {string} [order_type]
 * @property {string} [packaging_type]
 * @property {string} [parent_id]
 * @property {string} [parent_type]
 * @property {Object} [pdf_links]
 * @property {string} [previous_shipment_id]
 * @property {Prices} [price]
 * @property {number} [priority]
 * @property {ProcessingDates} [processing_dates]
 * @property {number} [quantity]
 * @property {ShipmentStatusData} [status]
 * @property {string} [store_invoice_id]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [vertical]
 */
/**
 * @typedef ShipmentActionInfo
 * @property {Object} [failed_invoiced_shipments]
 * @property {Object[]} [failed_shipments]
 * @property {string[]} [invoice]
 * @property {string[]} [invoiceable_shipments]
 * @property {string[]} [label]
 * @property {string[]} [processing_invoice_shipments]
 * @property {string[]} [processing_shipments]
 * @property {string[]} [successful_invoiced_shipments]
 * @property {string[]} [successful_shipments]
 */
/**
 * @typedef ShipmentBagReasons
 * @property {BagReasons[]} [reasons]
 * @property {boolean} [success]
 */
/**
 * @typedef ShipmentConfig
 * @property {string} action
 * @property {string} identifier
 * @property {string} journey
 * @property {LocationDetails} [location_details]
 * @property {string} payment_mode
 * @property {ShipmentDetails[]} shipment
 * @property {string} source
 * @property {string} to_pincode
 */
/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
 */
/**
 * @typedef ShipmentDetail
 * @property {number[]} [bag_list]
 * @property {number} id
 * @property {Meta} meta
 * @property {string} [remarks]
 * @property {string} [shipment_id]
 * @property {string} [status]
 */
/**
 * @typedef ShipmentDetails
 * @property {Object} [action_to_status]
 * @property {string} affiliate_shipment_id
 * @property {ArticleDetails[]} articles
 * @property {string} [box_type]
 * @property {string} [dp_id]
 * @property {Object} [dp_options]
 * @property {number} fulfillment_id
 * @property {boolean} [lock_status]
 * @property {Object} [meta]
 * @property {number} shipments
 */
/**
 * @typedef ShipmentGstDetails
 * @property {number} [brand_calculated_amount]
 * @property {number} [gst_fee]
 * @property {number} [gstin_code]
 * @property {number} [tax_collected_at_source]
 * @property {number} [value_of_good]
 */
/**
 * @typedef ShipmentHistoryResponse
 * @property {HistoryDict[]} activity_history
 * @property {boolean} [success]
 */
/**
 * @typedef ShipmentInfoResponse
 * @property {string} [message]
 * @property {PlatformShipment[]} [shipments]
 * @property {boolean} success
 */
/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {ShipmentItem[]} [items]
 * @property {string} [lane]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {boolean} [success]
 * @property {number} [total_count]
 */
/**
 * @typedef ShipmentItem
 * @property {BagUnit[]} [bags]
 * @property {boolean} [can_process]
 * @property {ShipmentListingChannel} [channel]
 * @property {Currency} [currency]
 * @property {CurrencyInfo} [currency_info]
 * @property {string} [customer_note]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {string} [display_name]
 * @property {string} [estimated_sla_time]
 * @property {string} [estimated_sla_ts]
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {string} [invoice_id]
 * @property {boolean} [lock_status]
 * @property {Object} [meta]
 * @property {string} [mode_of_payment]
 * @property {string} [order_created_ts]
 * @property {string} [order_date]
 * @property {string} order_id
 * @property {string} [ordering_channnel]
 * @property {Object} [payment_methods]
 * @property {string} [payment_mode]
 * @property {string} [previous_shipment_id]
 * @property {Prices} [prices]
 * @property {string} shipment_created_at
 * @property {string} [shipment_created_ts]
 * @property {string} [shipment_id]
 * @property {ShipmentStatus} [shipment_status]
 * @property {string} [status_created_at]
 * @property {string} [status_created_ts]
 * @property {number} total_bags
 * @property {UserDataInfo} [user]
 */
/**
 * @typedef ShipmentItemFulFillingStore
 * @property {string} [address]
 * @property {string} [address1]
 * @property {string[]} [brand_store_tags]
 * @property {string} [city]
 * @property {string} code
 * @property {string} [display_address]
 * @property {number} id
 * @property {string} [location_type]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {string} [phone]
 * @property {string} [pincode]
 * @property {string} [state]
 * @property {string} [store_email]
 * @property {string[]} [tags]
 */
/**
 * @typedef ShipmentListingBrand
 * @property {string} [created_on]
 * @property {string} [logo]
 * @property {string} [logo_base64]
 * @property {string} [name]
 */
/**
 * @typedef ShipmentListingChannel
 * @property {string} [channel_shipment_id]
 * @property {boolean} [is_affiliate]
 * @property {string} [logo]
 * @property {string} [name]
 */
/**
 * @typedef ShipmentLockDetails
 * @property {Object} [action_to_status]
 * @property {string} [lock_message]
 * @property {boolean} [lock_status]
 */
/**
 * @typedef ShipmentMeta
 * @property {boolean} [assign_dp_from_sb]
 * @property {boolean} [auto_trigger_dp_assignment_acf]
 * @property {string} [awb_number]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {Object} [b2c_buyer_details]
 * @property {Object} [bag_weight]
 * @property {string} [box_type]
 * @property {DebugInfo} [debug_info]
 * @property {Dimensions} [dimension]
 * @property {string} [dp_id]
 * @property {string} [dp_name]
 * @property {Object} [dp_options]
 * @property {string} [dp_sort_key]
 * @property {string} [due_date]
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {string} [estimated_delivery_date]
 * @property {Object} [ewaybill_info]
 * @property {Object} [external]
 * @property {Formatted} [formatted]
 * @property {string} [forward_affiliate_order_id]
 * @property {string} [forward_affiliate_shipment_id]
 * @property {string} [fulfilment_priority_text]
 * @property {boolean} [is_self_ship]
 * @property {LockData} [lock_data]
 * @property {string} [marketplace_store_id]
 * @property {string} [order_type]
 * @property {string} [packaging_name]
 * @property {string} [parent_dp_id]
 * @property {string} [po_number]
 * @property {string} [refund_to]
 * @property {string} [return_affiliate_order_id]
 * @property {string} [return_affiliate_shipment_id]
 * @property {string} [return_awb_number]
 * @property {Object} [return_details]
 * @property {number} [return_store_node]
 * @property {boolean} same_store_available
 * @property {ShipmentTags[]} [shipment_tags]
 * @property {number} [shipment_volumetric_weight]
 * @property {number} [shipment_weight]
 * @property {string} [store_invoice_updated_date]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {string} [tracking_url]
 * @property {number} weight
 */
/**
 * @typedef ShipmentPayments
 * @property {string} [logo]
 * @property {string} [mode]
 * @property {string} [source]
 */
/**
 * @typedef ShipmentReasonsResponse
 * @property {string} message
 * @property {ShipmentResponseReasons[]} reasons
 * @property {boolean} success
 */
/**
 * @typedef ShipmentResponseReasons
 * @property {string} [reason]
 * @property {number} [reason_id]
 */
/**
 * @typedef ShipmentsRequest
 * @property {DataUpdates} [data_updates]
 * @property {string} identifier - Shipment ID
 * @property {Products[]} [products] - Product/Bag to be updated
 * @property {ReasonsData} [reasons]
 */
/**
 * @typedef ShipmentsResponse
 * @property {string} [code]
 * @property {string} [exception]
 * @property {Object} [final_state]
 * @property {string} [identifier]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [stack_trace]
 * @property {number} [status]
 */
/**
 * @typedef ShipmentStatus
 * @property {string[]} [bag_list]
 * @property {string} [created_at]
 * @property {string} [created_ts]
 * @property {string} [current_shipment_status]
 * @property {Object} [meta]
 * @property {string} [shipment_id]
 * @property {number} [shipment_status_id]
 * @property {string} status
 * @property {string} [status_created_at]
 * @property {string} [status_created_ts]
 * @property {string} title
 */
/**
 * @typedef ShipmentStatusData
 * @property {string[]} [bag_list]
 * @property {string} [created_at]
 * @property {string} [created_ts]
 * @property {string} [current_shipment_status]
 * @property {string} [display_name]
 * @property {number} [id]
 * @property {Object} [meta]
 * @property {string} [shipment_id]
 * @property {string} [status]
 * @property {string} [status_created_at]
 */
/**
 * @typedef ShipmentTags
 * @property {string} [display_text]
 * @property {string} [entity_type]
 * @property {string} [slug]
 */
/**
 * @typedef ShipmentTimeStamp
 * @property {number} [max]
 * @property {number} [min]
 */
/**
 * @typedef ShippingInfo
 * @property {string} [address]
 * @property {string} [address_type]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [alternate_email]
 * @property {string} [alternate_mobile_number]
 * @property {string} [area]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [country_iso_code] - Country Code in ISO 2 format (e.g. US, IN)
 * @property {string} [customer_code]
 * @property {string} [external_customer_code]
 * @property {string} [first_name]
 * @property {string} [floor_no]
 * @property {string} [gender]
 * @property {Object} [geo_location]
 * @property {string} [house_no]
 * @property {string} [landmark]
 * @property {string} [last_name]
 * @property {string} [middle_name]
 * @property {string} [pincode]
 * @property {string} [primary_email]
 * @property {string} [primary_mobile_number]
 * @property {string} [shipping_type]
 * @property {Object[]} [slot]
 * @property {string} [state]
 * @property {string} [state_code]
 * @property {string} [title]
 */
/**
 * @typedef SmsDataPayload
 * @property {number} [amount_paid] - Data mapped in Communication template: amount_paid
 * @property {string} [brand_name] - Data mapped in Communication template: brand_name
 * @property {string} country_code - Country code for SMS
 * @property {string} [customer_name] - Data mapped in Communication template:
 *   customer_name
 * @property {string} message - Message to be send in SMS
 * @property {string} order_id - OrderId
 * @property {string} [payment_mode] - Data mapped in Communication template: payment_mode
 * @property {number} phone_number - Phone number for communication
 * @property {number} shipment_id - ShipmentId
 */
/**
 * @typedef StatuesRequest
 * @property {string} [exclude_bags_next_state] - State to be change for
 *   Remaining Bag/Products
 * @property {ShipmentsRequest[]} [shipments]
 * @property {boolean} [split_shipment] - Flag to split shipment
 * @property {string} [status]
 */
/**
 * @typedef StatuesResponse
 * @property {ShipmentsResponse[]} [shipments]
 */
/**
 * @typedef Store
 * @property {string} address1
 * @property {string} [address2]
 * @property {number} [alohomora_user_id]
 * @property {string[]} [brand_store_tags]
 * @property {string} city
 * @property {string} [code]
 * @property {number} company_id
 * @property {string} contact_person
 * @property {string} country
 * @property {string} created_at
 * @property {string} [display_address]
 * @property {string} fulfillment_channel
 * @property {boolean} [is_active]
 * @property {boolean} [is_archived]
 * @property {boolean} [is_enabled_for_recon]
 * @property {number} [latitude]
 * @property {string} location_type
 * @property {string} [login_username]
 * @property {number} [longitude]
 * @property {string} [mall_area]
 * @property {string} [mall_name]
 * @property {StoreMeta} meta
 * @property {string} name
 * @property {string} [order_integration_id]
 * @property {number} [packaging_material_count]
 * @property {number} [parent_store_id]
 * @property {number} phone
 * @property {string} pincode
 * @property {string} [s_id]
 * @property {string} state
 * @property {string} [store_active_from]
 * @property {StoreAddress} [store_address_json]
 * @property {string} store_email
 * @property {string} [updated_at]
 * @property {string} [vat_no]
 */
/**
 * @typedef StoreAddress
 * @property {string} address_category
 * @property {string} address_type
 * @property {string} address1
 * @property {string} [address2]
 * @property {string} [area]
 * @property {string} city
 * @property {string} contact_person
 * @property {string} country
 * @property {string} country_code
 * @property {string} created_at
 * @property {string} [display_address]
 * @property {string} [email]
 * @property {string} [landmark]
 * @property {number} latitude
 * @property {number} longitude
 * @property {string} phone
 * @property {number} pincode
 * @property {string} state
 * @property {string} updated_at
 * @property {string} [version]
 */
/**
 * @typedef StoreDocuments
 * @property {Document} [gst]
 */
/**
 * @typedef StoreEinvoice
 * @property {boolean} enabled
 * @property {string} [password]
 * @property {string} [user]
 * @property {string} [username]
 */
/**
 * @typedef StoreEwaybill
 * @property {boolean} [enabled]
 */
/**
 * @typedef StoreGstCredentials
 * @property {StoreEinvoice} [e_invoice]
 * @property {StoreEwaybill} [e_waybill]
 */
/**
 * @typedef StoreMeta
 * @property {Object} [additional_contact_details]
 * @property {string} display_name
 * @property {StoreDocuments} [documents]
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 * @property {Object} [ewaybill_portal_details]
 * @property {StoreGstCredentials} gst_credentials
 * @property {string} [gst_number]
 * @property {string[]} [notification_emails]
 * @property {Object} [product_return_config]
 * @property {string} stage
 * @property {Object[]} [timing]
 */
/**
 * @typedef StoreReassign
 * @property {string} [affiliate_bag_id]
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_order_id]
 * @property {number} [bag_id]
 * @property {string} [fynd_order_id]
 * @property {string} [item_id]
 * @property {string} [mongo_article_id]
 * @property {number[]} [reason_ids]
 * @property {string} [set_id]
 * @property {number} store_id
 */
/**
 * @typedef StoreReassignResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef SubLane
 * @property {Object[]} [actions]
 * @property {number} [index]
 * @property {string} [text]
 * @property {number} [total_items]
 * @property {string} [value]
 */
/**
 * @typedef SuccessResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef SuperLane
 * @property {SubLane[]} [options]
 * @property {string} text
 * @property {number} [total_items]
 * @property {string} value
 */
/**
 * @typedef Tax
 * @property {Object} amount
 * @property {Object[]} [breakup]
 * @property {string} name
 * @property {number} rate
 */
/**
 * @typedef TaxDetails
 * @property {string} [gstin]
 * @property {string} [pan_no]
 */
/**
 * @typedef TaxInfo
 * @property {string} [b2b_gstin_number]
 * @property {string} [gstin]
 * @property {string} [pan_no]
 */
/**
 * @typedef TemplateDownloadResponse
 * @property {string} [file_name]
 * @property {string} [url]
 */
/**
 * @typedef Templates
 * @property {string} [text]
 * @property {string} [value]
 */
/**
 * @typedef TotalShipmentPricesCount
 * @property {number} [shipment_count]
 * @property {number} [total_price]
 */
/**
 * @typedef TrackingList
 * @property {string} [created_ts]
 * @property {boolean} [is_current]
 * @property {boolean} [is_passed]
 * @property {string} status
 * @property {string} text
 * @property {string} [time]
 */
/**
 * @typedef UpdatePackagingDimensionsPayload
 * @property {string} current_status
 * @property {Dimension[]} dimension
 * @property {string} shipment_id
 */
/**
 * @typedef UpdatePackagingDimensionsResponse
 * @property {string} [message]
 */
/**
 * @typedef UpdateShipmentLockPayload
 * @property {string} action - Expected Actions: [lock, unlock, check]
 * @property {string} action_type - Expected action_type: [complete,
 *   operational, financial]
 * @property {Entities[]} entities - Shipment/Entity
 * @property {string} entity_type - Expected entity_type: [bags, shipments]
 */
/**
 * @typedef UpdateShipmentLockResponse
 * @property {CheckResponse[]} [check_response] - Entity Lock Status, If the
 *   action input as 'check'
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef UpdateShipmentStatusRequest
 * @property {boolean} [force_transition] - Force Transition
 * @property {boolean} [lock_after_transition] - Lock Shipment After Transition
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [task] - To Run Status Update as a background Task
 * @property {boolean} [unlock_before_transition] - Unlock Shipment After Transition
 */
/**
 * @typedef UpdateShipmentStatusResponseBody
 * @property {StatuesResponse[]} [statuses]
 */
/**
 * @typedef UploadConsent
 * @property {string} consent_url
 * @property {string} manifest_id
 */
/**
 * @typedef URL
 * @property {string} [url]
 */
/**
 * @typedef UserData
 * @property {OrderUser} [billing_user]
 * @property {OrderUser} [shipping_user]
 */
/**
 * @typedef UserDataInfo
 * @property {string} [avis_user_id]
 * @property {string} [email]
 * @property {string} [external_customer_id]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [last_name]
 * @property {string} [mobile]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [user_oid]
 */
/**
 * @typedef UserDetails
 * @property {string} [email]
 * @property {string} [external_customer_id]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [last_name]
 * @property {Object} [meta]
 * @property {string} [mobile]
 * @property {string} [mongo_user_id]
 * @property {string} [user_oid]
 */
/**
 * @typedef UserDetailsData
 * @property {string} address
 * @property {string} [address_type]
 * @property {string} [address1]
 * @property {string} [area]
 * @property {string} city
 * @property {string} country
 * @property {string} [country_iso_code]
 * @property {string} [country_phone_code]
 * @property {string} [display_address]
 * @property {string} [email]
 * @property {string} [landmark]
 * @property {string} name
 * @property {string} phone
 * @property {string} pincode
 * @property {string} state
 * @property {string} [state_code]
 */
/**
 * @typedef UserInfo
 * @property {string} first_name
 * @property {string} [gender]
 * @property {string} [last_name]
 * @property {string} primary_email
 * @property {string} primary_mobile_number
 * @property {string} [user_id]
 * @property {string} [user_type]
 */
/**
 * @typedef VerifyMobileOTP
 * @property {string} fynd_order_id
 * @property {VerifyOtpData} otp_data
 */
/**
 * @typedef VerifyOtpData
 * @property {string} mobile
 * @property {number} otp_code
 * @property {string} request_id
 */
/**
 * @typedef VerifyOtpResponse
 * @property {VerifyOtpResponseData} [data]
 * @property {string} [message]
 * @property {number} [status]
 * @property {boolean} [success]
 */
/**
 * @typedef VerifyOtpResponseData
 * @property {string} [country_code]
 * @property {string} [fynd_order_id]
 * @property {string} [message]
 * @property {string} [mobile]
 */
/**
 * @typedef Weight
 * @property {boolean} [is_default]
 * @property {number} [shipping]
 * @property {string} [unit]
 */
/**
 * @typedef WeightData
 * @property {string} [unit]
 * @property {number} [value]
 */
declare class OrderPlatformModel {
}
declare namespace OrderPlatformModel {
    export { ActionInfo, AdvanceFilterInfo, Affiliate, AffiliateAppConfig, AffiliateAppConfigMeta, AffiliateBag, AffiliateBagDetails, AffiliateBagsDetails, AffiliateConfig, AffiliateDetails, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryOrderConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryStoreConfig, AffiliateMeta, AffiliateStoreIdMapping, AllowedTemplatesResponse, AnnouncementResponse, AnnouncementsResponse, AppliedPromos, Article, ArticleDetails, ArticleStatusDetails, AttachOrderUser, AttachOrderUserResponse, AttachUserInfo, AttachUserOtpData, Attributes, BagConfigs, BagData, BagDetails, BagDetailsPlatformResponse, BagPaymentMethods, BagReasonMeta, BagReasons, BagReturnableCancelableStatus, Bags, BagsPage, BagStateMapper, BagStateTransitionMap, BagStatusHistory, BagUnit, BaseResponse, BillingInfo, Brand, BulkActionListingData, BulkActionTemplate, BulkActionTemplateResponse, BulkFailedResponse, BulkListingResponse, BulkListinPage, BulkReportsDownloadRequest, BulkReportsDownloadResponse, BulkStateTransistionRequest, BulkStateTransistionResponse, BuyerDetails, BuyRules, Charge, CheckResponse, Click2CallResponse, Company, CompanyDetails, ContactDetails, ConversionRate, CourierPartnerTrackingDetails, CourierPartnerTrackingResponse, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, CreateChannelPaymentInfo, CreateOrderAPI, CreateOrderErrorReponse, CreateOrderPayload, CreateOrderResponse, CreditBalanceInfo, Currency, CurrencyInfo, CurrentStatus, DataUpdates, DateRange, Dates, DebugInfo, DeliverySlotDetails, Dimension, Dimensions, DiscountRules, DispatchManifest, Document, DpConfiguration, DPDetailsData, EInvoiceDetails, EInvoiceErrorDetails, EInvoiceErrorInfo, EInvoiceErrorResponse, EInvoiceErrorResponseData, EInvoiceErrorResponseDetails, EinvoiceInfo, EInvoiceIrnDetails, EInvoicePortalDetails, EInvoiceResponseData, EInvoiceRetry, EInvoiceRetryResponse, EInvoiceRetryShipmentData, Entities, EntitiesDataUpdates, EntitiesReasons, EntityReasonData, Error, ErrorDetail, ErrorResponse, FailedOrderLogDetails, FailedOrderLogs, FailedOrdersItem, FetchCreditBalanceRequestPayload, FetchCreditBalanceResponsePayload, FileResponse, FilterInfoOption, Filters, FiltersInfo, FiltersRequest, FiltersResponse, FinancialBreakup, Formatted, FulfillingStore, FyndOrderIdList, GenerateInvoiceIDErrorResponse, GenerateInvoiceIDErrorResponseData, GenerateInvoiceIDRequest, GenerateInvoiceIDResponse, GenerateInvoiceIDResponseData, GeneratePosOrderReceiptResponse, GetActionsResponse, GetBagsPlatformResponse, GSTDetailsData, HistoryDict, HistoryMeta, HistoryReason, Identifier, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheResponse, InvoiceDetails, InvoiceInfo, Item, ItemCriterias, JobDetailsData, JobDetailsResponse, JobFailedResponse, LaneConfigResponse, LineItem, LocationDetails, LockData, LogPaymentDetails, LogsChannelDetails, Manifest, ManifestDetails, ManifestFile, ManifestFiltersResponse, ManifestItemDetails, ManifestList, ManifestMediaUpdate, ManifestMeta, ManifestPageInfo, ManifestShipmentListing, MarketPlacePdf, Meta, OrderBagArticle, OrderBags, OrderBrandName, OrderConfig, OrderData, OrderDetails, OrderDetailsData, OrderDetailsResponse, OrderInfo, OrderingCurrency, OrderingStoreDetails, OrderItemDataUpdates, OrderListingResponse, OrderPriority, OrderStatus, OrderStatusData, OrderStatusResult, OrderUser, OriginalFilter, Page, PageDetails, PaymentInfo, PaymentMethod, PaymentMethods, PDFLinks, PDFMeta, PhoneDetails, PlatformArticleAttributes, PlatformBreakupValues, PlatformChannel, PlatformDeliveryAddress, PlatformItem, PlatformOrderItems, PlatformOrderUpdate, PlatformShipment, PlatformShipmentReasonsResponse, PlatformShipmentTrack, PlatformTrack, PointBlankOtpData, PostHistoryData, PostHistoryDict, PostHistoryFilters, PostShipmentHistory, Prices, ProcessingDates, ProcessManifest, ProcessManifestItemResponse, ProcessManifestResponse, Products, ProductsDataUpdates, ProductsDataUpdatesFilters, ProductsReasons, ProductsReasonsData, ProductsReasonsFilters, QuestionSet, Reason, ReasonsData, RefundModeConfigRequestPayload, RefundModeConfigResponsePayload, RefundModeInfo, RefundOption, ReplacementDetails, ResponseDetail, ReturnConfig, RoleBaseStateTransitionMapping, SendSmsPayload, SendUserMobileOTP, SendUserMobileOtpResponse, Shipment, ShipmentActionInfo, ShipmentBagReasons, ShipmentConfig, ShipmentData, ShipmentDetail, ShipmentDetails, ShipmentGstDetails, ShipmentHistoryResponse, ShipmentInfoResponse, ShipmentInternalPlatformViewResponse, ShipmentItem, ShipmentItemFulFillingStore, ShipmentListingBrand, ShipmentListingChannel, ShipmentLockDetails, ShipmentMeta, ShipmentPayments, ShipmentReasonsResponse, ShipmentResponseReasons, ShipmentsRequest, ShipmentsResponse, ShipmentStatus, ShipmentStatusData, ShipmentTags, ShipmentTimeStamp, ShippingInfo, SmsDataPayload, StatuesRequest, StatuesResponse, Store, StoreAddress, StoreDocuments, StoreEinvoice, StoreEwaybill, StoreGstCredentials, StoreMeta, StoreReassign, StoreReassignResponse, SubLane, SuccessResponse, SuperLane, Tax, TaxDetails, TaxInfo, TemplateDownloadResponse, Templates, TotalShipmentPricesCount, TrackingList, UpdatePackagingDimensionsPayload, UpdatePackagingDimensionsResponse, UpdateShipmentLockPayload, UpdateShipmentLockResponse, UpdateShipmentStatusRequest, UpdateShipmentStatusResponseBody, UploadConsent, URL, UserData, UserDataInfo, UserDetails, UserDetailsData, UserInfo, VerifyMobileOTP, VerifyOtpData, VerifyOtpResponse, VerifyOtpResponseData, Weight, WeightData };
}
/** @returns {ActionInfo} */
declare function ActionInfo(): ActionInfo;
type ActionInfo = {
    description: string;
    display_text: string;
    id: number;
    slug: string;
};
/** @returns {AdvanceFilterInfo} */
declare function AdvanceFilterInfo(): AdvanceFilterInfo;
type AdvanceFilterInfo = {
    action_centre?: FiltersInfo[];
    applied_filters?: any;
    filters?: FiltersInfo[];
    page?: any;
    processed?: FiltersInfo[];
    returned?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
};
/** @returns {Affiliate} */
declare function Affiliate(): Affiliate;
type Affiliate = {
    config?: AffiliateConfig;
    id: string;
    token: string;
};
/** @returns {AffiliateAppConfig} */
declare function AffiliateAppConfig(): AffiliateAppConfig;
type AffiliateAppConfig = {
    created_at: string;
    description?: string;
    id: string;
    meta?: AffiliateAppConfigMeta[];
    name: string;
    owner: string;
    secret: string;
    token: string;
    updated_at: string;
};
/** @returns {AffiliateAppConfigMeta} */
declare function AffiliateAppConfigMeta(): AffiliateAppConfigMeta;
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
/** @returns {AffiliateBag} */
declare function AffiliateBag(): AffiliateBag;
type AffiliateBag = {
    _id: string;
    affiliate_meta: any;
    affiliate_store_id: string;
    amount_paid: number;
    avl_qty: number;
    company_id: number;
    delivery_charge: number;
    discount: number;
    fynd_store_id: string;
    hsn_code_id: string;
    identifier: any;
    item_id: number;
    item_size: string;
    modified_on: string;
    pdf_links?: MarketPlacePdf;
    price_effective: number;
    price_marked: number;
    quantity: number;
    seller_identifier: string;
    sku: string;
    store_id: number;
    transfer_price: number;
    unit_price: number;
};
/** @returns {AffiliateBagDetails} */
declare function AffiliateBagDetails(): AffiliateBagDetails;
type AffiliateBagDetails = {
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
    employee_discount?: number;
    loyalty_discount?: number;
};
/** @returns {AffiliateBagsDetails} */
declare function AffiliateBagsDetails(): AffiliateBagsDetails;
type AffiliateBagsDetails = {
    affiliate_bag_id?: string;
    affiliate_meta?: AffiliateMeta;
    coupon_code?: string;
};
/** @returns {AffiliateConfig} */
declare function AffiliateConfig(): AffiliateConfig;
type AffiliateConfig = {
    app?: AffiliateAppConfig;
    app_company_id?: number;
    inventory?: AffiliateInventoryConfig;
};
/** @returns {AffiliateDetails} */
declare function AffiliateDetails(): AffiliateDetails;
type AffiliateDetails = {
    ad_id?: string;
    affiliate_bag_id: string;
    affiliate_id?: string;
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
    affiliate_shipment_id: string;
    affiliate_store_id: string;
    company_affiliate_tag?: string;
    config?: AffiliateConfig;
    pdf_links?: PDFLinks;
    shipment_meta: ShipmentMeta;
};
/** @returns {AffiliateInventoryArticleAssignmentConfig} */
declare function AffiliateInventoryArticleAssignmentConfig(): AffiliateInventoryArticleAssignmentConfig;
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
/** @returns {AffiliateInventoryConfig} */
declare function AffiliateInventoryConfig(): AffiliateInventoryConfig;
type AffiliateInventoryConfig = {
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    inventory?: AffiliateInventoryStoreConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    order?: AffiliateInventoryOrderConfig;
    payment?: AffiliateInventoryPaymentConfig;
};
/** @returns {AffiliateInventoryLogisticsConfig} */
declare function AffiliateInventoryLogisticsConfig(): AffiliateInventoryLogisticsConfig;
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
/** @returns {AffiliateInventoryOrderConfig} */
declare function AffiliateInventoryOrderConfig(): AffiliateInventoryOrderConfig;
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
/** @returns {AffiliateInventoryPaymentConfig} */
declare function AffiliateInventoryPaymentConfig(): AffiliateInventoryPaymentConfig;
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
/** @returns {AffiliateInventoryStoreConfig} */
declare function AffiliateInventoryStoreConfig(): AffiliateInventoryStoreConfig;
type AffiliateInventoryStoreConfig = {
    store?: any;
};
/** @returns {AffiliateMeta} */
declare function AffiliateMeta(): AffiliateMeta;
type AffiliateMeta = {
    box_type?: string;
    channel_order_id?: string;
    channel_shipment_id?: string;
    coupon_code?: string;
    customer_selling_price?: number;
    due_date?: string;
    employee_discount?: number;
    fulfilment_priority?: number;
    is_priority?: boolean;
    is_serial_number_required?: boolean;
    loyalty_discount?: number;
    marketplace_invoice_id?: string;
    order_item_id?: string;
    quantity?: number;
    replacement_details?: ReplacementDetails;
    size_level_total_qty?: number;
};
/** @returns {AffiliateStoreIdMapping} */
declare function AffiliateStoreIdMapping(): AffiliateStoreIdMapping;
type AffiliateStoreIdMapping = {
    marketplace_store_id: string;
    store_id: number;
};
/** @returns {AllowedTemplatesResponse} */
declare function AllowedTemplatesResponse(): AllowedTemplatesResponse;
type AllowedTemplatesResponse = {
    template_x_slug?: Templates[];
};
/** @returns {AnnouncementResponse} */
declare function AnnouncementResponse(): AnnouncementResponse;
type AnnouncementResponse = {
    company_id?: number;
    created_at?: string;
    description?: string;
    from_datetime?: string;
    id: number;
    logo_url?: string;
    platform_id?: string;
    platform_name?: string;
    title?: string;
    to_datetime?: string;
};
/** @returns {AnnouncementsResponse} */
declare function AnnouncementsResponse(): AnnouncementsResponse;
type AnnouncementsResponse = {
    announcements?: AnnouncementResponse[];
    message?: string;
    success?: boolean;
};
/** @returns {AppliedPromos} */
declare function AppliedPromos(): AppliedPromos;
type AppliedPromos = {
    amount?: number;
    article_quantity?: number;
    buy_rules?: BuyRules[];
    discount_rules?: DiscountRules[];
    mrp_promotion?: boolean;
    promo_id?: string;
    promotion_name?: string;
    promotion_type?: string;
};
/** @returns {Article} */
declare function Article(): Article;
type Article = {
    _id: string;
    a_set?: any;
    child_details?: any;
    code?: string;
    currency?: any;
    dimensions?: Dimensions;
    esp_modified?: boolean;
    identifiers: any;
    is_set?: boolean;
    raw_meta?: string;
    return_config?: ReturnConfig;
    seller_identifier: string;
    size: string;
    uid: string;
    weight?: Weight;
};
/** @returns {ArticleDetails} */
declare function ArticleDetails(): ArticleDetails;
type ArticleDetails = {
    _id: string;
    attributes: any;
    brand_id: number;
    category: any;
    dimension: any;
    quantity: number;
    weight: any;
};
/** @returns {ArticleStatusDetails} */
declare function ArticleStatusDetails(): ArticleStatusDetails;
type ArticleStatusDetails = {
    status?: any;
};
/** @returns {AttachOrderUser} */
declare function AttachOrderUser(): AttachOrderUser;
type AttachOrderUser = {
    fynd_order_id: string;
    otp_data: AttachUserOtpData;
    user_info: AttachUserInfo;
};
/** @returns {AttachOrderUserResponse} */
declare function AttachOrderUserResponse(): AttachOrderUserResponse;
type AttachOrderUserResponse = {
    message?: string;
    success?: boolean;
};
/** @returns {AttachUserInfo} */
declare function AttachUserInfo(): AttachUserInfo;
type AttachUserInfo = {
    country_code?: string;
    first_name: string;
    last_name: string;
    mobile: string;
};
/** @returns {AttachUserOtpData} */
declare function AttachUserOtpData(): AttachUserOtpData;
type AttachUserOtpData = {
    request_id: string;
};
/** @returns {Attributes} */
declare function Attributes(): Attributes;
type Attributes = {
    brand_name?: string;
    essential?: string;
    gender?: string[];
    marketer_address?: string;
    marketer_name?: string;
    name?: string;
    primary_color?: string;
    primary_color_hex?: string;
    primary_material?: string;
};
/** @returns {BagConfigs} */
declare function BagConfigs(): BagConfigs;
type BagConfigs = {
    allow_force_return: boolean;
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
};
/** @returns {BagData} */
declare function BagData(): BagData;
type BagData = {
    items?: BagDetails[];
    page?: BagsPage;
};
/** @returns {BagDetails} */
declare function BagDetails(): BagDetails;
type BagDetails = {
    affiliate_bag_details?: AffiliateBagDetails;
    affiliate_details?: AffiliateDetails;
    applied_promos?: any[];
    article?: Article;
    article_details?: ArticleStatusDetails;
    bag_id?: number;
    bag_status?: BagStatusHistory[];
    bag_status_history?: BagStatusHistory;
    bag_update_time?: number;
    brand?: Brand;
    company?: Company;
    current_operational_status?: BagStatusHistory;
    current_status?: BagStatusHistory;
    dates?: Dates;
    delivery_address?: PlatformDeliveryAddress;
    delivery_slot?: DeliverySlotDetails;
    display_name?: string;
    dp_details?: any;
    einvoice_info?: any;
    entity_type?: string;
    fallback_user?: any;
    financial_breakup?: FinancialBreakup[];
    fulfilling_store?: Store;
    fyndstore_emp?: any;
    gst_details?: GSTDetailsData;
    id?: string;
    identifier?: string;
    invoice?: InvoiceDetails;
    item?: Item;
    journey_type?: string;
    line_number?: number;
    lock_status?: boolean;
    manifest_id?: string;
    meta?: any;
    mode_of_payment?: string;
    no_of_bags_order?: number;
    operational_status?: string;
    order?: OrderDetails;
    order_integration_id?: string;
    order_type?: string;
    order_value?: number;
    ordering_store?: Store;
    original_bag_list?: number[];
    parent_promo_bags?: any;
    payment_methods?: any;
    payment_type?: string;
    payments?: any;
    prices?: Prices;
    qc_required?: boolean;
    quantity?: number;
    reasons?: any[];
    restore_coupon?: boolean;
    restore_promos?: any;
    rto_address?: PlatformDeliveryAddress;
    seller_identifier?: string;
    shipment?: Shipment;
    shipment_details?: ShipmentDetails;
    shipment_gst?: ShipmentGstDetails;
    shipment_id?: string;
    shipment_status?: ShipmentStatusData;
    shipment_status_history?: ShipmentStatusData[];
    status?: BagReturnableCancelableStatus;
    tags?: string[];
    total_shipment_bags?: number;
    total_shipments_in_order?: number;
    transaction_type?: string;
    type?: string;
    updated_at?: string;
    user?: UserDetails;
    weight?: WeightData;
};
/** @returns {BagDetailsPlatformResponse} */
declare function BagDetailsPlatformResponse(): BagDetailsPlatformResponse;
type BagDetailsPlatformResponse = {
    data?: BagDetails;
    status_code?: number;
};
/** @returns {BagPaymentMethods} */
declare function BagPaymentMethods(): BagPaymentMethods;
type BagPaymentMethods = {
    amount?: number;
    mode?: string;
};
/** @returns {BagReasonMeta} */
declare function BagReasonMeta(): BagReasonMeta;
type BagReasonMeta = {
    show_text_area?: boolean;
};
/** @returns {BagReasons} */
declare function BagReasons(): BagReasons;
type BagReasons = {
    display_name?: string;
    id?: number;
    meta?: BagReasonMeta;
    qc_type?: string[];
    question_set?: QuestionSet[];
    reasons?: BagReasons[];
};
/** @returns {BagReturnableCancelableStatus} */
declare function BagReturnableCancelableStatus(): BagReturnableCancelableStatus;
type BagReturnableCancelableStatus = {
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
};
/** @returns {Bags} */
declare function Bags(): Bags;
type Bags = {
    /**
     * - Application/Affiliate Bag ID,
     * Required if the ID is missing
     */
    affiliate_bag_id?: string;
    /**
     * - Application/Affiliate Order ID,
     * Required if the ID is missing
     */
    affiliate_order_id?: string;
    /**
     * - Bag Id
     */
    bag_id?: number;
    /**
     * - Is Bag Locked
     */
    is_locked?: boolean;
};
/** @returns {BagsPage} */
declare function BagsPage(): BagsPage;
type BagsPage = {
    current: number;
    has_next: boolean;
    item_total: number;
    page_type: string;
    size: number;
};
/** @returns {BagStateMapper} */
declare function BagStateMapper(): BagStateMapper;
type BagStateMapper = {
    app_display_name?: string;
    app_facing?: boolean;
    app_state_name?: string;
    display_name: string;
    id: number;
    is_active?: boolean;
    journey_type: string;
    name: string;
    notify_customer?: boolean;
    state_type: string;
};
/** @returns {BagStateTransitionMap} */
declare function BagStateTransitionMap(): BagStateTransitionMap;
type BagStateTransitionMap = {
    affiliate?: any;
    fynd?: any;
};
/** @returns {BagStatusHistory} */
declare function BagStatusHistory(): BagStatusHistory;
type BagStatusHistory = {
    app_display_name?: string;
    bag_id?: number;
    bag_state_mapper?: BagStateMapper;
    bsh_id?: number;
    created_at?: string;
    created_ts?: string;
    delivery_awb_number?: string;
    delivery_partner_id?: number;
    display_name?: string;
    forward?: boolean;
    kafka_sync?: boolean;
    reasons?: any[];
    shipment_id?: string;
    state_id?: number;
    state_type?: string;
    status: string;
    store_id?: number;
    updated_at?: string;
    updated_ts?: string;
};
/** @returns {BagUnit} */
declare function BagUnit(): BagUnit;
type BagUnit = {
    affiliate_bag_details?: AffiliateBagDetails;
    article?: Article;
    bag_expiry_date?: string;
    bag_id: number;
    bag_status?: BagStatusHistory[];
    bag_type?: string;
    brand?: ShipmentListingBrand;
    can_cancel?: boolean;
    can_return?: boolean;
    current_operational_status: BagStatusHistory;
    current_status: BagStatusHistory;
    dates?: Dates;
    display_name?: string;
    entity_type?: string;
    financial_breakup: FinancialBreakup[];
    gst?: GSTDetailsData;
    item?: PlatformItem;
    line_number?: number;
    meta?: any;
    prices?: Prices;
    product_quantity: number;
    reasons?: any[];
    size?: string;
    status: BagReturnableCancelableStatus;
};
/** @returns {BaseResponse} */
declare function BaseResponse(): BaseResponse;
type BaseResponse = {
    message?: string;
    success?: boolean;
};
/** @returns {BillingInfo} */
declare function BillingInfo(): BillingInfo;
type BillingInfo = {
    address?: string;
    address1?: string;
    address2?: string;
    alternate_email?: string;
    alternate_mobile_number?: string;
    area?: string;
    city?: string;
    country?: string;
    country_code?: string;
    /**
     * - Country Code in ISO 2 format (e.g. US, IN)
     */
    country_iso_code?: string;
    customer_code?: string;
    external_customer_code?: string;
    first_name?: string;
    floor_no?: string;
    gender?: string;
    house_no?: string;
    landmark?: string;
    last_name?: string;
    middle_name?: string;
    pincode?: string;
    primary_email?: string;
    primary_mobile_number?: string;
    state?: string;
    state_code?: string;
    title?: string;
};
/** @returns {Brand} */
declare function Brand(): Brand;
type Brand = {
    brand_id?: number;
    brand_name: string;
    company?: string;
    created_on?: string;
    credit_note_allowed?: boolean;
    credit_note_expiry_days?: number;
    id?: number;
    invoice_prefix?: string;
    is_virtual_invoice?: boolean;
    logo?: string;
    modified_on?: number;
    pickup_location?: string;
    script_last_ran?: string;
    start_date?: string;
};
/** @returns {BulkActionListingData} */
declare function BulkActionListingData(): BulkActionListingData;
type BulkActionListingData = {
    batch_id?: string;
    bulk_action_type?: string;
    company_id?: number;
    created_ts?: string;
    do_invoice_label_generated?: boolean;
    file_name?: string;
    file_url?: string;
    id?: number;
    invoice_document_type?: string;
    invoice_status?: string;
    is_invoiceable?: boolean;
    label_document_type?: string;
    last_selected_invoice_label_type?: string;
    meta?: any;
    shipments_action_info?: ShipmentActionInfo;
    status?: boolean;
    store_code?: string;
    store_id?: number;
    store_name?: string;
    updated_ts?: number;
    uploaded_by?: string;
    uploaded_on?: string;
    user_id?: string;
    user_name?: string;
};
/** @returns {BulkActionTemplate} */
declare function BulkActionTemplate(): BulkActionTemplate;
type BulkActionTemplate = {
    text?: string;
    value?: string;
};
/** @returns {BulkActionTemplateResponse} */
declare function BulkActionTemplateResponse(): BulkActionTemplateResponse;
type BulkActionTemplateResponse = {
    /**
     * - Allowed bulk action template slugs
     */
    template_x_slug?: BulkActionTemplate[];
};
/** @returns {BulkFailedResponse} */
declare function BulkFailedResponse(): BulkFailedResponse;
type BulkFailedResponse = {
    error?: string;
    status?: boolean;
};
/** @returns {BulkListingResponse} */
declare function BulkListingResponse(): BulkListingResponse;
type BulkListingResponse = {
    data?: BulkActionListingData[];
    page?: BulkListinPage;
    success?: boolean;
    total_count?: number;
};
/** @returns {BulkListinPage} */
declare function BulkListinPage(): BulkListinPage;
type BulkListinPage = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    size?: number;
    total?: number;
    type?: string;
};
/** @returns {BulkReportsDownloadRequest} */
declare function BulkReportsDownloadRequest(): BulkReportsDownloadRequest;
type BulkReportsDownloadRequest = {
    custom_filters_for_lane?: any;
    /**
     * - Download report with specific headers
     */
    custom_headers?: string;
    /**
     * - UTC end date in ISO format
     */
    end_date?: string;
    /**
     * - Download for specific enitites, entities
     * can be bag, shipment or order_id, etc.
     */
    entities?: string[];
    filter_type?: string;
    /**
     * - Download lanes for cross company.
     */
    is_cross_company_enabled?: boolean;
    lane_type?: string;
    /**
     * - Type of report
     */
    report_type?: string;
    /**
     * - UTC start date in ISO format
     */
    start_date?: string;
    /**
     * - Download for specific store ids.
     */
    store_ids?: string[];
};
/** @returns {BulkReportsDownloadResponse} */
declare function BulkReportsDownloadResponse(): BulkReportsDownloadResponse;
type BulkReportsDownloadResponse = {
    batch_id?: string;
    success?: boolean;
};
/** @returns {BulkStateTransistionRequest} */
declare function BulkStateTransistionRequest(): BulkStateTransistionRequest;
type BulkStateTransistionRequest = {
    file_name?: string;
    url?: string;
};
/** @returns {BulkStateTransistionResponse} */
declare function BulkStateTransistionResponse(): BulkStateTransistionResponse;
type BulkStateTransistionResponse = {
    batch_id?: string;
    message?: string;
    status?: boolean;
};
/** @returns {BuyerDetails} */
declare function BuyerDetails(): BuyerDetails;
type BuyerDetails = {
    address: string;
    ajio_site_id?: string;
    city: string;
    gstin: string;
    name: string;
    pincode: number;
    state: string;
};
/** @returns {BuyRules} */
declare function BuyRules(): BuyRules;
type BuyRules = {
    cart_conditions?: any;
    item_criteria?: ItemCriterias;
};
/** @returns {Charge} */
declare function Charge(): Charge;
type Charge = {
    amount: any;
    code?: string;
    name: string;
    tax?: Tax;
    type: string;
};
/** @returns {CheckResponse} */
declare function CheckResponse(): CheckResponse;
type CheckResponse = {
    /**
     * - Affiliate ID
     */
    affiliate_id?: string;
    /**
     * - Affiliate Shipment ID
     */
    affiliate_shipment_id?: string;
    bags?: Bags[];
    /**
     * - Is Bag Locked
     */
    is_bag_locked?: boolean;
    /**
     * - Is Shipment Locked
     */
    is_shipment_locked?: boolean;
    /**
     * - Lock Status: Expected lock_status:
     * [complete, operational, financial]
     */
    lock_status?: string;
    /**
     * - Filter
     */
    original_filter?: OriginalFilter;
    /**
     * - Shipment ID
     */
    shipment_id?: string;
    /**
     * - Status
     */
    status?: string;
};
/** @returns {Click2CallResponse} */
declare function Click2CallResponse(): Click2CallResponse;
type Click2CallResponse = {
    /**
     * - Call ID from the provider
     */
    call_id: string;
    /**
     * - Success
     */
    success: boolean;
};
/** @returns {Company} */
declare function Company(): Company;
type Company = {
    agreement_start_date?: string;
    business_type?: string;
    company_name?: string;
    company_type?: string;
    created_on?: string;
    gst_number?: string;
    id?: number;
    meta?: any;
    modified_on?: string;
    pan_no?: string;
};
/** @returns {CompanyDetails} */
declare function CompanyDetails(): CompanyDetails;
type CompanyDetails = {
    address?: any;
    company_cin?: string;
    company_contact?: ContactDetails;
    company_gst?: string;
    company_id?: number;
    company_name?: string;
};
/** @returns {ContactDetails} */
declare function ContactDetails(): ContactDetails;
type ContactDetails = {
    emails?: string[];
    phone?: PhoneDetails[];
};
/** @returns {ConversionRate} */
declare function ConversionRate(): ConversionRate;
type ConversionRate = {
    base?: string;
    rates?: any;
};
/** @returns {CourierPartnerTrackingDetails} */
declare function CourierPartnerTrackingDetails(): CourierPartnerTrackingDetails;
type CourierPartnerTrackingDetails = {
    /**
     * - AWB Number
     */
    awb: string;
    /**
     * - Current location of Courier partner
     */
    dp_location?: string;
    /**
     * - Courier Partner name
     */
    dp_name: string;
    /**
     * - Status at Courier partner end
     */
    dp_status: string;
    /**
     * - Date Time at which status was
     * updated at Courier partner
     */
    dp_status_updated_at: string;
    /**
     * - Estimated delivery date
     * received from Courier partner
     */
    estimated_delivery_date?: string;
    /**
     * - Id of Tracking history
     */
    id?: number;
    /**
     * - Journey type of the shipment
     */
    journey: string;
    /**
     * - Meta field to store Courier partner's meta data
     */
    meta?: any;
    /**
     * - Operational status of OMS
     */
    operational_status: string;
    /**
     * - Promised delivery date received
     * from Courier partner
     */
    promised_delivery_date?: string;
    /**
     * - Remark from courier partner
     */
    remark?: string;
    /**
     * - Shipment ID
     */
    shipment_id: string;
};
/** @returns {CourierPartnerTrackingResponse} */
declare function CourierPartnerTrackingResponse(): CourierPartnerTrackingResponse;
type CourierPartnerTrackingResponse = {
    items?: CourierPartnerTrackingDetails[];
    page?: PageDetails;
};
/** @returns {CreateChannelConfig} */
declare function CreateChannelConfig(): CreateChannelConfig;
type CreateChannelConfig = {
    dp_configuration?: DpConfiguration;
    location_reassignment?: boolean;
    lock_states?: string[];
    logo_url?: any;
    payment_info?: CreateChannelPaymentInfo;
    shipment_assignment?: string;
};
/** @returns {CreateChannelConfigData} */
declare function CreateChannelConfigData(): CreateChannelConfigData;
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
/** @returns {CreateChannelConfigResponse} */
declare function CreateChannelConfigResponse(): CreateChannelConfigResponse;
type CreateChannelConfigResponse = {
    acknowledged?: boolean;
    is_inserted?: boolean;
    is_upserted?: boolean;
};
/** @returns {CreateChannelConifgErrorResponse} */
declare function CreateChannelConifgErrorResponse(): CreateChannelConifgErrorResponse;
type CreateChannelConifgErrorResponse = {
    error?: string;
};
/** @returns {CreateChannelPaymentInfo} */
declare function CreateChannelPaymentInfo(): CreateChannelPaymentInfo;
type CreateChannelPaymentInfo = {
    mode_of_payment?: string;
    payment_methods?: PaymentMethods[];
    source?: string;
};
/** @returns {CreateOrderAPI} */
declare function CreateOrderAPI(): CreateOrderAPI;
type CreateOrderAPI = {
    billing_info: BillingInfo;
    charges?: Charge[];
    config?: any;
    currency_info?: any;
    external_creation_date?: string;
    external_order_id?: string;
    meta?: any;
    payment_info: PaymentInfo;
    shipments: Shipment[];
    shipping_info: ShippingInfo;
    tax_info?: TaxInfo;
    user_info?: UserInfo;
};
/** @returns {CreateOrderErrorReponse} */
declare function CreateOrderErrorReponse(): CreateOrderErrorReponse;
type CreateOrderErrorReponse = {
    code?: string;
    exception?: string;
    info?: any;
    message: string;
    meta?: string;
    request_id?: string;
    stack_trace?: string;
    status: number;
};
/** @returns {CreateOrderPayload} */
declare function CreateOrderPayload(): CreateOrderPayload;
type CreateOrderPayload = {
    affiliate_id: string;
    order_config: OrderConfig;
    order_info: OrderInfo;
};
/** @returns {CreateOrderResponse} */
declare function CreateOrderResponse(): CreateOrderResponse;
type CreateOrderResponse = {
    fynd_order_id: string;
};
/** @returns {CreditBalanceInfo} */
declare function CreditBalanceInfo(): CreditBalanceInfo;
type CreditBalanceInfo = {
    customer_mobile_number?: string;
    reason?: string;
    total_credited_balance?: string;
};
/** @returns {Currency} */
declare function Currency(): Currency;
type Currency = {
    currency_code?: string;
    currency_symbol?: string;
};
/** @returns {CurrencyInfo} */
declare function CurrencyInfo(): CurrencyInfo;
type CurrencyInfo = {
    conversion_rate?: ConversionRate;
    ordering_currency?: OrderingCurrency;
};
/** @returns {CurrentStatus} */
declare function CurrentStatus(): CurrentStatus;
type CurrentStatus = {
    bag_id?: number;
    bag_state_mapper?: BagStateMapper;
    created_at?: string;
    created_ts?: string;
    delivery_awb_number?: string;
    delivery_partner_id?: number;
    id: number;
    kafka_sync?: boolean;
    shipment_id?: string;
    state_id?: number;
    state_type?: string;
    status?: string;
    store_id?: number;
    updated_at?: string;
};
/** @returns {DataUpdates} */
declare function DataUpdates(): DataUpdates;
type DataUpdates = {
    entities?: EntitiesDataUpdates[];
    order_item_status?: OrderItemDataUpdates[];
    products?: ProductsDataUpdates[];
};
/** @returns {DateRange} */
declare function DateRange(): DateRange;
type DateRange = {
    from_date?: string;
    to_date?: string;
};
/** @returns {Dates} */
declare function Dates(): Dates;
type Dates = {
    delivery_date?: string;
    order_created?: string;
};
/** @returns {DebugInfo} */
declare function DebugInfo(): DebugInfo;
type DebugInfo = {
    stormbreaker_uuid?: string;
};
/** @returns {DeliverySlotDetails} */
declare function DeliverySlotDetails(): DeliverySlotDetails;
type DeliverySlotDetails = {
    date?: string;
    lower_bound?: string;
    slot?: string;
    type?: string;
    upper_bound?: string;
};
/** @returns {Dimension} */
declare function Dimension(): Dimension;
type Dimension = {
    height?: string;
    length?: number;
    packaging_type?: string;
    weight?: string;
    width?: number;
};
/** @returns {Dimensions} */
declare function Dimensions(): Dimensions;
type Dimensions = {
    height?: number;
    is_default?: boolean;
    length?: number;
    unit?: string;
    width?: number;
};
/** @returns {DiscountRules} */
declare function DiscountRules(): DiscountRules;
type DiscountRules = {
    type?: string;
    value?: number;
};
/** @returns {DispatchManifest} */
declare function DispatchManifest(): DispatchManifest;
type DispatchManifest = {
    manifest_id: string;
};
/** @returns {Document} */
declare function Document(): Document;
type Document = {
    ds_type: string;
    legal_name: string;
    url?: string;
    value: string;
    verified: boolean;
};
/** @returns {DpConfiguration} */
declare function DpConfiguration(): DpConfiguration;
type DpConfiguration = {
    shipping_by?: string;
};
/** @returns {DPDetailsData} */
declare function DPDetailsData(): DPDetailsData;
type DPDetailsData = {
    awb_no?: string;
    country?: string;
    eway_bill_id?: string;
    gst_tag?: string;
    id?: number;
    name?: string;
    pincode?: string;
    track_url?: string;
};
/** @returns {EInvoiceDetails} */
declare function EInvoiceDetails(): EInvoiceDetails;
type EInvoiceDetails = {
    error_details?: EInvoiceErrorDetails[];
    irn_details?: EInvoiceIrnDetails;
};
/** @returns {EInvoiceErrorDetails} */
declare function EInvoiceErrorDetails(): EInvoiceErrorDetails;
type EInvoiceErrorDetails = {
    error_code?: string;
    error_message: string;
};
/** @returns {EInvoiceErrorInfo} */
declare function EInvoiceErrorInfo(): EInvoiceErrorInfo;
type EInvoiceErrorInfo = {
    error_details?: EInvoiceErrorDetails[];
};
/** @returns {EInvoiceErrorResponse} */
declare function EInvoiceErrorResponse(): EInvoiceErrorResponse;
type EInvoiceErrorResponse = {
    message?: string;
    response_data?: EInvoiceErrorResponseData[];
};
/** @returns {EInvoiceErrorResponseData} */
declare function EInvoiceErrorResponseData(): EInvoiceErrorResponseData;
type EInvoiceErrorResponseData = {
    einvoice_info?: EInvoiceErrorInfo;
    einvoice_type: string;
    message: string;
    shipment_id: string;
    status: number;
};
/** @returns {EInvoiceErrorResponseDetails} */
declare function EInvoiceErrorResponseDetails(): EInvoiceErrorResponseDetails;
type EInvoiceErrorResponseDetails = {
    message?: string;
    response_data: EInvoiceErrorResponseData[];
};
/** @returns {EinvoiceInfo} */
declare function EinvoiceInfo(): EinvoiceInfo;
type EinvoiceInfo = {
    credit_note?: any;
    invoice?: any;
};
/** @returns {EInvoiceIrnDetails} */
declare function EInvoiceIrnDetails(): EInvoiceIrnDetails;
type EInvoiceIrnDetails = {
    ack_dt: string;
    ack_no: string;
    irn: string;
    signed_invoice: string;
    signed_qr_code: string;
};
/** @returns {EInvoicePortalDetails} */
declare function EInvoicePortalDetails(): EInvoicePortalDetails;
type EInvoicePortalDetails = {
    password?: string;
    user?: string;
    username?: string;
};
/** @returns {EInvoiceResponseData} */
declare function EInvoiceResponseData(): EInvoiceResponseData;
type EInvoiceResponseData = {
    einvoice_info?: EInvoiceDetails;
    einvoice_type: string;
    message: string;
    shipment_id: string;
    status: number;
};
/** @returns {EInvoiceRetry} */
declare function EInvoiceRetry(): EInvoiceRetry;
type EInvoiceRetry = {
    shipments_data?: EInvoiceRetryShipmentData[];
};
/** @returns {EInvoiceRetryResponse} */
declare function EInvoiceRetryResponse(): EInvoiceRetryResponse;
type EInvoiceRetryResponse = {
    response_data: EInvoiceResponseData[];
};
/** @returns {EInvoiceRetryShipmentData} */
declare function EInvoiceRetryShipmentData(): EInvoiceRetryShipmentData;
type EInvoiceRetryShipmentData = {
    einvoice_type: string;
    shipment_id: string;
};
/** @returns {Entities} */
declare function Entities(): Entities;
type Entities = {
    /**
     * - Application/Affiliate Bag ID,
     * Required if the ID is missing
     */
    affiliate_bag_id?: string;
    /**
     * - Application/Affiliate ID, Required if the
     * ID is missing
     */
    affiliate_id?: string;
    /**
     * - Application/Affiliate Order ID,
     * Required if the ID is missing
     */
    affiliate_order_id?: string;
    /**
     * - Application/Affiliate Shipment
     * ID, Required if the ID is missing
     */
    affiliate_shipment_id?: string;
    /**
     * - Shipment ID if 'entity_type': shipments | Bag Id if
     * 'entity_type': bags
     */
    id?: string;
    /**
     * - Reason For Shipment/Bag Action
     */
    reason_text: string;
};
/** @returns {EntitiesDataUpdates} */
declare function EntitiesDataUpdates(): EntitiesDataUpdates;
type EntitiesDataUpdates = {
    data?: any;
    filters?: any[];
};
/** @returns {EntitiesReasons} */
declare function EntitiesReasons(): EntitiesReasons;
type EntitiesReasons = {
    data?: EntityReasonData;
    filters?: any[];
};
/** @returns {EntityReasonData} */
declare function EntityReasonData(): EntityReasonData;
type EntityReasonData = {
    reason_id?: number;
    reason_text?: string;
};
/** @returns {Error} */
declare function Error(): Error;
type Error = {
    message?: string;
    success?: boolean;
};
/** @returns {ErrorDetail} */
declare function ErrorDetail(): ErrorDetail;
type ErrorDetail = {
    message?: string;
    success?: boolean;
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    error?: string;
    error_trace?: string;
    message: string;
    status?: number;
    success?: boolean;
};
/** @returns {FailedOrderLogDetails} */
declare function FailedOrderLogDetails(): FailedOrderLogDetails;
type FailedOrderLogDetails = {
    error_trace: string;
    exception: string;
};
/** @returns {FailedOrderLogs} */
declare function FailedOrderLogs(): FailedOrderLogs;
type FailedOrderLogs = {
    items: FailedOrdersItem;
    page: PageDetails;
};
/** @returns {FailedOrdersItem} */
declare function FailedOrdersItem(): FailedOrdersItem;
type FailedOrdersItem = {
    channel: LogsChannelDetails;
    created_at: string;
    display_message: string;
    error_message: string;
    log_id: number;
    meta: any;
    method_name: string;
    order_id: string;
    payment: LogPaymentDetails;
};
/** @returns {FetchCreditBalanceRequestPayload} */
declare function FetchCreditBalanceRequestPayload(): FetchCreditBalanceRequestPayload;
type FetchCreditBalanceRequestPayload = {
    affiliate_id: string;
    customer_mobile_number: string;
    seller_id: string;
};
/** @returns {FetchCreditBalanceResponsePayload} */
declare function FetchCreditBalanceResponsePayload(): FetchCreditBalanceResponsePayload;
type FetchCreditBalanceResponsePayload = {
    data: CreditBalanceInfo;
    success: boolean;
};
/** @returns {FileResponse} */
declare function FileResponse(): FileResponse;
type FileResponse = {
    cdn?: URL;
    /**
     * - Name of the file
     */
    file_name?: string;
};
/** @returns {FilterInfoOption} */
declare function FilterInfoOption(): FilterInfoOption;
type FilterInfoOption = {
    min_search_size?: number;
    name?: string;
    placeholder_text?: string;
    show_ui?: boolean;
    text?: string;
    value?: string;
};
/** @returns {Filters} */
declare function Filters(): Filters;
type Filters = {
    date_range?: DateRange;
    dp_ids?: number;
    dp_name?: string;
    from_date?: string;
    lane?: string;
    logo?: string;
    selected_shipments?: string;
    store_name?: string;
    stores?: number;
    to_date?: string;
};
/** @returns {FiltersInfo} */
declare function FiltersInfo(): FiltersInfo;
type FiltersInfo = {
    options?: FilterInfoOption[];
    placeholder_text?: string;
    required?: boolean;
    text: string;
    type: string;
    value: string;
};
/** @returns {FiltersRequest} */
declare function FiltersRequest(): FiltersRequest;
type FiltersRequest = {
    date_range?: DateRange;
    dp_ids: number;
    dp_name: string;
    lane: string;
    logo?: string;
    store_name: string;
    stores: number;
};
/** @returns {FiltersResponse} */
declare function FiltersResponse(): FiltersResponse;
type FiltersResponse = {
    advance_filter?: AdvanceFilterInfo;
    global_filter?: FiltersInfo[];
};
/** @returns {FinancialBreakup} */
declare function FinancialBreakup(): FinancialBreakup;
type FinancialBreakup = {
    added_to_fynd_cash: boolean;
    amount_paid: number;
    amount_paid_roundoff?: number;
    brand_calculated_amount: number;
    cashback: number;
    cashback_applied: number;
    cod_charges: number;
    coupon_effective_discount: number;
    coupon_value: number;
    delivery_charge: number;
    discount: number;
    fynd_credits: number;
    gst_fee: number;
    gst_tag: string;
    gst_tax_percentage: number;
    hsn_code: string;
    identifiers: Identifier;
    item_name: string;
    price_effective: number;
    price_marked: number;
    promotion_effective_discount: number;
    refund_credit: number;
    size: string;
    tax_collected_at_source?: number;
    total_units: number;
    transfer_price: number;
    value_of_good: number;
};
/** @returns {Formatted} */
declare function Formatted(): Formatted;
type Formatted = {
    max?: string;
    min?: string;
};
/** @returns {FulfillingStore} */
declare function FulfillingStore(): FulfillingStore;
type FulfillingStore = {
    address: string;
    address1?: string;
    city: string;
    code: string;
    contact_person: string;
    country: string;
    display_address?: string;
    fulfillment_channel: string;
    id: number;
    meta: any;
    phone: string;
    pincode: string;
    state: string;
    store_name: string;
};
/** @returns {FyndOrderIdList} */
declare function FyndOrderIdList(): FyndOrderIdList;
type FyndOrderIdList = {
    fynd_order_id?: string[];
};
/** @returns {GenerateInvoiceIDErrorResponse} */
declare function GenerateInvoiceIDErrorResponse(): GenerateInvoiceIDErrorResponse;
type GenerateInvoiceIDErrorResponse = {
    items?: GenerateInvoiceIDErrorResponseData[];
};
/** @returns {GenerateInvoiceIDErrorResponseData} */
declare function GenerateInvoiceIDErrorResponseData(): GenerateInvoiceIDErrorResponseData;
type GenerateInvoiceIDErrorResponseData = {
    error_message?: string;
    invoice_id?: boolean;
    shipment_id?: string;
    success?: boolean;
};
/** @returns {GenerateInvoiceIDRequest} */
declare function GenerateInvoiceIDRequest(): GenerateInvoiceIDRequest;
type GenerateInvoiceIDRequest = {
    shipment_ids: string[];
};
/** @returns {GenerateInvoiceIDResponse} */
declare function GenerateInvoiceIDResponse(): GenerateInvoiceIDResponse;
type GenerateInvoiceIDResponse = {
    items?: GenerateInvoiceIDResponseData[];
};
/** @returns {GenerateInvoiceIDResponseData} */
declare function GenerateInvoiceIDResponseData(): GenerateInvoiceIDResponseData;
type GenerateInvoiceIDResponseData = {
    error_message?: boolean;
    invoice_id?: string;
    shipment_id?: string;
    success?: boolean;
};
/** @returns {GeneratePosOrderReceiptResponse} */
declare function GeneratePosOrderReceiptResponse(): GeneratePosOrderReceiptResponse;
type GeneratePosOrderReceiptResponse = {
    customer_cn_receipt?: string;
    customer_cn_receipt_template?: string;
    invoice_receipt?: string;
    invoice_receipt_template?: string;
    merchant_cn_receipt?: string;
    order_id?: string;
    payment_receipt?: string;
    payment_receipt_template?: string;
    success?: boolean;
};
/** @returns {GetActionsResponse} */
declare function GetActionsResponse(): GetActionsResponse;
type GetActionsResponse = {
    permissions?: ActionInfo[];
};
/** @returns {GetBagsPlatformResponse} */
declare function GetBagsPlatformResponse(): GetBagsPlatformResponse;
type GetBagsPlatformResponse = {
    data?: BagData;
    status_code?: number;
};
/** @returns {GSTDetailsData} */
declare function GSTDetailsData(): GSTDetailsData;
type GSTDetailsData = {
    brand_calculated_amount: number;
    cgst_gst_fee?: number;
    cgst_tax_percentage?: number;
    gst_fee: number;
    gst_tag?: string;
    gst_tax_percentage?: number;
    gstin_code?: string;
    hsn_code?: string;
    hsn_code_id?: string;
    igst_gst_fee?: number;
    igst_tax_percentage?: number;
    is_default_hsn_code?: boolean;
    sgst_gst_fee?: number;
    sgst_tax_percentage?: number;
    tax_collected_at_source: number;
    value_of_good: number;
};
/** @returns {HistoryDict} */
declare function HistoryDict(): HistoryDict;
type HistoryDict = {
    /**
     * - Assigned Agent
     */
    assigned_agent?: string;
    /**
     * - Bag ID
     */
    bag_id?: number;
    /**
     * - Create date
     */
    createdat: string;
    /**
     * - Display Message
     */
    display_message?: string;
    /**
     * - L1 details of bag
     */
    l1_detail?: string;
    /**
     * - L2 details of bag
     */
    l2_detail?: string;
    /**
     * - L3 details of bag
     */
    l3_detail?: string;
    /**
     * - History Message or comment
     */
    message: string;
    /**
     * - Meta
     */
    meta?: HistoryMeta;
    /**
     * - Ticket ID
     */
    ticket_id?: string;
    /**
     * - Ticket URL
     */
    ticket_url?: string;
    /**
     * - Type of history, Expected Values: [
     * activity_status, activity_escalation, activity_comment,
     * outbound_notification, outbound_voice ]
     */
    type: string;
    /**
     * - User who created the history
     */
    user: string;
};
/** @returns {HistoryMeta} */
declare function HistoryMeta(): HistoryMeta;
type HistoryMeta = {
    activity_comment?: string;
    activity_type?: string;
    billsec?: string;
    call_id?: string;
    caller?: string;
    callerid?: string;
    channel_type?: string;
    duration?: string;
    endtime?: string;
    message?: string;
    reason?: HistoryReason;
    receiver?: string;
    recipient?: string;
    recordpath?: string;
    short_link?: string;
    slug?: string;
    starttime?: string;
    status?: string;
    status1?: string;
    status2?: string;
    store_code?: string;
    store_id?: number;
    store_name?: string;
};
/** @returns {HistoryReason} */
declare function HistoryReason(): HistoryReason;
type HistoryReason = {
    category?: string;
    code?: number;
    dislay_name?: string;
    quantity?: number;
    state?: string;
    text?: string;
};
/** @returns {Identifier} */
declare function Identifier(): Identifier;
type Identifier = {
    alu?: string;
    ean?: string;
    isbn?: string;
    sku_code?: string;
    upc?: string;
};
/** @returns {InvalidateShipmentCacheNestedResponse} */
declare function InvalidateShipmentCacheNestedResponse(): InvalidateShipmentCacheNestedResponse;
type InvalidateShipmentCacheNestedResponse = {
    error?: string;
    message?: string;
    shipment_id?: string;
    status?: number;
};
/** @returns {InvalidateShipmentCachePayload} */
declare function InvalidateShipmentCachePayload(): InvalidateShipmentCachePayload;
type InvalidateShipmentCachePayload = {
    /**
     * - Affiliate Bag Ids to clear cache
     * of shipment Ids mapped to it
     */
    affiliate_bag_ids?: string[];
    /**
     * - Bag Ids to clear cache of shipment Ids mapped to it
     */
    bag_ids?: string[];
    /**
     * - Shipment Ids to clear cache
     */
    shipment_ids?: string[];
};
/** @returns {InvalidateShipmentCacheResponse} */
declare function InvalidateShipmentCacheResponse(): InvalidateShipmentCacheResponse;
type InvalidateShipmentCacheResponse = {
    response?: InvalidateShipmentCacheNestedResponse[];
};
/** @returns {InvoiceDetails} */
declare function InvoiceDetails(): InvoiceDetails;
type InvoiceDetails = {
    invoice_url?: string;
    label_url?: string;
    store_invoice_id?: string;
    updated_date?: string;
};
/** @returns {InvoiceInfo} */
declare function InvoiceInfo(): InvoiceInfo;
type InvoiceInfo = {
    credit_note_id?: string;
    external_invoice_id?: string;
    invoice_url?: string;
    label_url?: string;
    links?: any;
    store_invoice_id?: string;
    updated_date?: string;
};
/** @returns {Item} */
declare function Item(): Item;
type Item = {
    attributes: Attributes;
    branch_url?: string;
    brand: string;
    brand_id: number;
    can_cancel?: boolean;
    can_return?: boolean;
    code?: string;
    color?: string;
    department_id?: number;
    gender?: string;
    image: string[];
    item_id: number;
    l1_category?: string[];
    l1_category_id?: number;
    l2_category?: string[];
    l2_category_id?: number;
    l3_category?: number;
    l3_category_name?: string;
    last_updated_at?: string;
    meta?: any;
    name: string;
    size: string;
    slug_key: string;
    webstore_product_url?: string;
};
/** @returns {ItemCriterias} */
declare function ItemCriterias(): ItemCriterias;
type ItemCriterias = {
    item_brand?: number[];
};
/** @returns {JobDetailsData} */
declare function JobDetailsData(): JobDetailsData;
type JobDetailsData = {
    batch_id?: string;
    company_id?: string;
    failed_shipments_count?: number;
    processing_shipments_count?: number;
    successful_shipment_ids?: string[];
    successful_shipments_count?: number;
    total_shipments_count?: number;
};
/** @returns {JobDetailsResponse} */
declare function JobDetailsResponse(): JobDetailsResponse;
type JobDetailsResponse = {
    created_ts?: string;
    data?: JobDetailsData[];
    failed_records?: any[];
    file_url?: string;
    message?: string;
    status?: string;
    success?: boolean;
    uploaded_by?: string;
    uploaded_on?: string;
    user_id?: string;
};
/** @returns {JobFailedResponse} */
declare function JobFailedResponse(): JobFailedResponse;
type JobFailedResponse = {
    file_name?: string;
    url?: string;
};
/** @returns {LaneConfigResponse} */
declare function LaneConfigResponse(): LaneConfigResponse;
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
/** @returns {LineItem} */
declare function LineItem(): LineItem;
type LineItem = {
    charges?: Charge[];
    custom_message?: string;
    external_line_id?: string;
    meta?: any;
    quantity?: number;
    seller_identifier: string;
};
/** @returns {LocationDetails} */
declare function LocationDetails(): LocationDetails;
type LocationDetails = {
    articles: ArticleDetails[];
    fulfillment_id: number;
    fulfillment_type: string;
};
/** @returns {LockData} */
declare function LockData(): LockData;
type LockData = {
    lock_message?: string;
    locked?: boolean;
    mto?: boolean;
};
/** @returns {LogPaymentDetails} */
declare function LogPaymentDetails(): LogPaymentDetails;
type LogPaymentDetails = {
    amount_paid?: string;
    payment_mode?: string;
};
/** @returns {LogsChannelDetails} */
declare function LogsChannelDetails(): LogsChannelDetails;
type LogsChannelDetails = {
    channel_id?: string;
    channel_shipment_id?: string;
    logo?: string;
    name?: string;
};
/** @returns {Manifest} */
declare function Manifest(): Manifest;
type Manifest = {
    company_id: number;
    created_at: string;
    created_by: string;
    created_ts?: string;
    filters?: Filters;
    id: number;
    is_active: boolean;
    manifest_id: string;
    meta?: ManifestMeta;
    pdf_meta?: PDFMeta;
    status: string;
    uid: string;
    user_id: string;
};
/** @returns {ManifestDetails} */
declare function ManifestDetails(): ManifestDetails;
type ManifestDetails = {
    additional_shipment_count?: number;
    items?: ManifestItemDetails[];
    manifest_details?: Manifest[];
    page?: ManifestPageInfo;
};
/** @returns {ManifestFile} */
declare function ManifestFile(): ManifestFile;
type ManifestFile = {
    bucket?: string;
    key?: string;
    region?: string;
};
/** @returns {ManifestFiltersResponse} */
declare function ManifestFiltersResponse(): ManifestFiltersResponse;
type ManifestFiltersResponse = {
    advance_filter?: FiltersInfo[];
    global_filter?: FiltersInfo[];
};
/** @returns {ManifestItemDetails} */
declare function ManifestItemDetails(): ManifestItemDetails;
type ManifestItemDetails = {
    awb_number?: string;
    invoice_id?: string;
    order_id: string;
    quantity?: number;
    shipment_created_at?: string;
    shipment_id: string;
};
/** @returns {ManifestList} */
declare function ManifestList(): ManifestList;
type ManifestList = {
    items?: Manifest[];
    page?: ManifestPageInfo;
};
/** @returns {ManifestMediaUpdate} */
declare function ManifestMediaUpdate(): ManifestMediaUpdate;
type ManifestMediaUpdate = {
    code?: number;
    entity?: string;
    file?: ManifestFile;
    link?: string;
    media_type?: string;
    status?: boolean;
};
/** @returns {ManifestMeta} */
declare function ManifestMeta(): ManifestMeta;
type ManifestMeta = {
    filters?: Filters;
    total_shipment_prices_count?: TotalShipmentPricesCount;
};
/** @returns {ManifestPageInfo} */
declare function ManifestPageInfo(): ManifestPageInfo;
type ManifestPageInfo = {
    current: number;
    has_next: boolean;
    has_previous: boolean;
    size: number;
    total: number;
    type: string;
};
/** @returns {ManifestShipmentListing} */
declare function ManifestShipmentListing(): ManifestShipmentListing;
type ManifestShipmentListing = {
    items?: ManifestItemDetails[];
    lane?: string;
    message?: string;
    page: ManifestPageInfo;
    status: number;
    success: boolean;
    total_count: number;
};
/** @returns {MarketPlacePdf} */
declare function MarketPlacePdf(): MarketPlacePdf;
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
/** @returns {Meta} */
declare function Meta(): Meta;
type Meta = {
    kafka_emission_status?: number;
    state_manager_used?: string;
};
/** @returns {OrderBagArticle} */
declare function OrderBagArticle(): OrderBagArticle;
type OrderBagArticle = {
    identifiers?: any;
    return_config?: ReturnConfig;
    size?: string;
    uid?: string;
};
/** @returns {OrderBags} */
declare function OrderBags(): OrderBags;
type OrderBags = {
    affiliate_bag_details?: AffiliateBagsDetails;
    applied_promos?: AppliedPromos[];
    article?: OrderBagArticle;
    bag_configs?: BagConfigs;
    bag_id: number;
    bag_status?: BagStatusHistory[];
    brand?: OrderBrandName;
    can_cancel?: boolean;
    can_return?: boolean;
    current_status?: CurrentStatus;
    delivery_address?: PlatformDeliveryAddress;
    display_name?: string;
    entity_type?: string;
    financial_breakup?: FinancialBreakup;
    group_id?: string;
    gst_details?: GSTDetailsData;
    identifier?: string;
    is_parent?: boolean;
    item?: PlatformItem;
    line_number?: number;
    meta?: any;
    parent_promo_bags?: any;
    payment_methods?: BagPaymentMethods[];
    prices?: Prices;
    quantity?: number;
    seller_identifier?: string;
};
/** @returns {OrderBrandName} */
declare function OrderBrandName(): OrderBrandName;
type OrderBrandName = {
    brand_name?: string;
    company?: number;
    created_on?: string;
    id: number;
    logo?: string;
    modified_on?: string;
};
/** @returns {OrderConfig} */
declare function OrderConfig(): OrderConfig;
type OrderConfig = {
    affiliate: Affiliate;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    article_lookup?: string;
    bag_end_state?: string;
    create_user?: boolean;
    store_lookup?: string;
};
/** @returns {OrderData} */
declare function OrderData(): OrderData;
type OrderData = {
    created_ts?: string;
    fynd_order_id: string;
    meta?: any;
    order_date: string;
    payment_methods?: any;
    prices?: Prices;
    tax_details?: TaxDetails;
};
/** @returns {OrderDetails} */
declare function OrderDetails(): OrderDetails;
type OrderDetails = {
    affiliate_id?: string;
    affiliate_order_date?: string;
    affiliate_order_id?: string;
    cashback_applied?: number;
    cashback_value?: number;
    cod_charges?: number;
    collect_by?: string;
    coupon_value?: number;
    created_at?: string;
    created_time?: string;
    currency?: string;
    delivery_charges?: number;
    discount?: number;
    fynd_credits?: number;
    fynd_order_id?: string;
    headers?: any;
    meta?: any;
    mode_of_payment?: string;
    mongo_cart_id?: number;
    order_value?: number;
    ordering_channel?: string;
    ordering_channel_logo?: string;
    payment_methods?: any;
    payment_mode_id?: number;
    prices?: Prices;
    promotion_effective_discount?: number;
    refund_by?: string;
    tax_details?: TaxDetails;
    total_order_value?: number;
    transaction_id?: string;
    user_id?: string;
};
/** @returns {OrderDetailsData} */
declare function OrderDetailsData(): OrderDetailsData;
type OrderDetailsData = {
    affiliate_id?: string;
    cod_charges?: string;
    created_ts?: string;
    fynd_order_id: string;
    meta?: any;
    order_date?: string;
    order_value?: string;
    ordering_channel?: string;
    ordering_channel_logo?: any;
    source?: string;
    tax_details?: any;
};
/** @returns {OrderDetailsResponse} */
declare function OrderDetailsResponse(): OrderDetailsResponse;
type OrderDetailsResponse = {
    order?: OrderData;
    shipments?: PlatformShipment[];
    success: boolean;
};
/** @returns {OrderInfo} */
declare function OrderInfo(): OrderInfo;
type OrderInfo = {
    affiliate_order_id?: string;
    bags: AffiliateBag[];
    billing_address: OrderUser;
    cod_charges: number;
    coupon?: string;
    delivery_charges: number;
    discount: number;
    items: any;
    order_priority?: OrderPriority;
    order_value: number;
    payment?: any;
    payment_mode: string;
    shipment?: ShipmentData;
    shipping_address: OrderUser;
    user: UserData;
};
/** @returns {OrderingCurrency} */
declare function OrderingCurrency(): OrderingCurrency;
type OrderingCurrency = {
    currency_code?: string;
    currency_name?: string;
    currency_sub_unit?: string;
    currency_symbol?: string;
};
/** @returns {OrderingStoreDetails} */
declare function OrderingStoreDetails(): OrderingStoreDetails;
type OrderingStoreDetails = {
    address?: string;
    address1?: string;
    city?: string;
    code?: string;
    contact_person?: string;
    country?: string;
    display_address?: string;
    id?: number;
    meta?: any;
    phone?: string;
    pincode?: string;
    state?: string;
    store_name?: string;
};
/** @returns {OrderItemDataUpdates} */
declare function OrderItemDataUpdates(): OrderItemDataUpdates;
type OrderItemDataUpdates = {
    data?: any;
};
/** @returns {OrderListingResponse} */
declare function OrderListingResponse(): OrderListingResponse;
type OrderListingResponse = {
    items?: PlatformOrderItems[];
    lane?: string;
    message?: string;
    page?: Page;
    success?: boolean;
    total_count?: number;
};
/** @returns {OrderPriority} */
declare function OrderPriority(): OrderPriority;
type OrderPriority = {
    affiliate_priority_code?: string;
    fulfilment_priority?: number;
    fulfilment_priority_text?: string;
};
/** @returns {OrderStatus} */
declare function OrderStatus(): OrderStatus;
type OrderStatus = {
    end_date: string;
    mobile: number;
    order_details?: FyndOrderIdList[];
    start_date: string;
};
/** @returns {OrderStatusData} */
declare function OrderStatusData(): OrderStatusData;
type OrderStatusData = {
    errors?: string[];
    order_details: OrderDetails;
    shipment_details?: ShipmentDetail[];
};
/** @returns {OrderStatusResult} */
declare function OrderStatusResult(): OrderStatusResult;
type OrderStatusResult = {
    result?: OrderStatusData[];
    success: string;
};
/** @returns {OrderUser} */
declare function OrderUser(): OrderUser;
type OrderUser = {
    address1?: string;
    address2?: string;
    city: string;
    country: string;
    email: string;
    first_name: string;
    last_name: string;
    mobile: number;
    phone: number;
    pincode: string;
    state: string;
};
/** @returns {OriginalFilter} */
declare function OriginalFilter(): OriginalFilter;
type OriginalFilter = {
    /**
     * - Affiliate ID
     */
    affiliate_id?: string;
    /**
     * - Affiliate Shipment ID
     */
    affiliate_shipment_id?: string;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size?: number;
    type: string;
};
/** @returns {PageDetails} */
declare function PageDetails(): PageDetails;
type PageDetails = {
    /**
     * - Current page number
     */
    current?: number;
    /**
     * - If next page contains any result
     */
    has_next?: boolean;
    /**
     * - If previous page contains any result
     */
    has_previous?: boolean;
    /**
     * - Total count of the results present in the
     * requested filter
     */
    item_total: number;
    /**
     * - Page size
     */
    size?: number;
    /**
     * - Type of the page
     */
    type?: string;
};
/** @returns {PaymentInfo} */
declare function PaymentInfo(): PaymentInfo;
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
/** @returns {PaymentMethod} */
declare function PaymentMethod(): PaymentMethod;
type PaymentMethod = {
    amount: number;
    collect_by: string;
    meta?: any;
    mode: string;
    name: string;
    refund_by: string;
    transaction_data?: any;
};
/** @returns {PaymentMethods} */
declare function PaymentMethods(): PaymentMethods;
type PaymentMethods = {
    collect_by?: string;
    mode?: string;
    refund_by?: string;
};
/** @returns {PDFLinks} */
declare function PDFLinks(): PDFLinks;
type PDFLinks = {
    b2b?: string;
    credit_note_url?: string;
    delivery_challan_a4?: string;
    invoice?: string;
    invoice_a4?: string;
    invoice_a6?: string;
    invoice_export?: string;
    invoice_pos?: string;
    invoice_type: string;
    label?: string;
    label_a4?: string;
    label_a6?: string;
    label_export?: string;
    label_pos?: string;
    label_type: string;
    po_invoice?: string;
};
/** @returns {PDFMeta} */
declare function PDFMeta(): PDFMeta;
type PDFMeta = {
    consent?: string;
    media_updates?: ManifestMediaUpdate[];
};
/** @returns {PhoneDetails} */
declare function PhoneDetails(): PhoneDetails;
type PhoneDetails = {
    country_code?: number;
    number?: string;
};
/** @returns {PlatformArticleAttributes} */
declare function PlatformArticleAttributes(): PlatformArticleAttributes;
type PlatformArticleAttributes = {
    currency?: string;
};
/** @returns {PlatformBreakupValues} */
declare function PlatformBreakupValues(): PlatformBreakupValues;
type PlatformBreakupValues = {
    display?: string;
    name?: string;
    value?: string;
};
/** @returns {PlatformChannel} */
declare function PlatformChannel(): PlatformChannel;
type PlatformChannel = {
    logo?: string;
    name?: string;
};
/** @returns {PlatformDeliveryAddress} */
declare function PlatformDeliveryAddress(): PlatformDeliveryAddress;
type PlatformDeliveryAddress = {
    address_category?: string;
    address_type?: string;
    address1?: string;
    address2?: string;
    area?: string;
    city?: string;
    contact_person?: string;
    country?: string;
    created_at?: string;
    display_address?: string;
    email?: string;
    landmark?: string;
    latitude?: number;
    longitude?: number;
    phone?: string;
    pincode?: string;
    state?: string;
    updated_at?: string;
    version?: string;
};
/** @returns {PlatformItem} */
declare function PlatformItem(): PlatformItem;
type PlatformItem = {
    attributes?: PlatformArticleAttributes;
    branch_url?: string;
    brand?: string;
    brand_id?: number;
    can_cancel?: boolean;
    can_return?: boolean;
    code?: string;
    color?: string;
    department_id?: number;
    id?: number;
    image?: string[];
    images?: string[];
    l1_category?: string[];
    l2_category?: string[];
    l3_category?: number;
    l3_category_name?: string;
    last_updated_at?: string;
    meta?: any;
    name?: string;
    size?: string;
    slug_key?: string;
};
/** @returns {PlatformOrderItems} */
declare function PlatformOrderItems(): PlatformOrderItems;
type PlatformOrderItems = {
    breakup_values?: PlatformBreakupValues[];
    channel?: PlatformChannel;
    currency?: Currency;
    currency_info?: CurrencyInfo;
    meta?: any;
    order_created_time?: string;
    order_created_ts?: string;
    order_id?: string;
    order_value?: number;
    payment_mode?: string;
    shipments?: PlatformShipment[];
    total_order_value?: number;
    user_info?: UserDataInfo;
};
/** @returns {PlatformOrderUpdate} */
declare function PlatformOrderUpdate(): PlatformOrderUpdate;
type PlatformOrderUpdate = {
    order_id: string;
};
/** @returns {PlatformShipment} */
declare function PlatformShipment(): PlatformShipment;
type PlatformShipment = {
    affiliate_details?: AffiliateDetails;
    bag_status_history?: BagStatusHistory[];
    bags?: OrderBags[];
    billing_details?: UserDetailsData;
    can_update_dimension?: boolean;
    company_details?: CompanyDetails;
    coupon?: any;
    credit_note_id?: string;
    currency?: Currency;
    currency_info?: CurrencyInfo;
    custom_message?: string;
    custom_meta?: any[];
    delivery_details?: UserDetailsData;
    delivery_slot?: any;
    dp_assignment?: boolean;
    dp_details?: DPDetailsData;
    enable_dp_tracking?: boolean;
    estimated_sla_time?: string;
    estimated_sla_ts?: string;
    forward_shipment_id?: string;
    fulfilling_store?: FulfillingStore;
    fulfilment_priority?: number;
    gst_details?: GSTDetailsData;
    invoice?: InvoiceInfo;
    invoice_id?: string;
    is_dp_assign_enabled?: boolean;
    is_self_ship?: boolean;
    journey_type?: string;
    lock_status?: boolean;
    meta?: any;
    mode_of_payment?: string;
    operational_status?: string;
    order?: OrderDetailsData;
    ordering_store?: OrderingStoreDetails;
    packaging_type?: string;
    payment_methods?: any;
    payment_mode?: string;
    payments?: ShipmentPayments;
    pdf_links?: any;
    picked_date?: string;
    platform_logo?: string;
    previous_shipment_id?: string;
    prices?: Prices;
    priority_text?: string;
    rto_address?: PlatformDeliveryAddress;
    shipment_created_at?: string;
    shipment_created_ts?: string;
    shipment_details?: ShipmentLockDetails;
    shipment_id: string;
    shipment_images?: string[];
    shipment_quantity?: number;
    shipment_status?: string;
    shipment_update_time?: number;
    status?: ShipmentStatusData;
    total_bags?: number;
    total_items?: number;
    tracking_list?: TrackingList[];
    user?: UserDataInfo;
    user_agent?: string;
    vertical?: string;
};
/** @returns {PlatformShipmentReasonsResponse} */
declare function PlatformShipmentReasonsResponse(): PlatformShipmentReasonsResponse;
type PlatformShipmentReasonsResponse = {
    reasons?: Reason[];
    success?: boolean;
};
/** @returns {PlatformShipmentTrack} */
declare function PlatformShipmentTrack(): PlatformShipmentTrack;
type PlatformShipmentTrack = {
    meta?: any;
    results?: PlatformTrack[];
};
/** @returns {PlatformTrack} */
declare function PlatformTrack(): PlatformTrack;
type PlatformTrack = {
    account_name?: string;
    awb?: string;
    last_location_recieved_at?: string;
    meta?: any;
    raw_status?: string;
    reason?: string;
    shipment_type?: string;
    status?: string;
    updated_at?: string;
    updated_time?: string;
};
/** @returns {PointBlankOtpData} */
declare function PointBlankOtpData(): PointBlankOtpData;
type PointBlankOtpData = {
    message?: string;
    mobile?: number;
    request_id?: string;
    resend_timer?: number;
};
/** @returns {PostHistoryData} */
declare function PostHistoryData(): PostHistoryData;
type PostHistoryData = {
    message: string;
    user_name: string;
};
/** @returns {PostHistoryDict} */
declare function PostHistoryDict(): PostHistoryDict;
type PostHistoryDict = {
    data: PostHistoryData;
    filters: PostHistoryFilters[];
};
/** @returns {PostHistoryFilters} */
declare function PostHistoryFilters(): PostHistoryFilters;
type PostHistoryFilters = {
    identifier?: string;
    line_number?: string;
    shipment_id: string;
};
/** @returns {PostShipmentHistory} */
declare function PostShipmentHistory(): PostShipmentHistory;
type PostShipmentHistory = {
    activity_history?: PostHistoryDict[];
};
/** @returns {Prices} */
declare function Prices(): Prices;
type Prices = {
    amount_paid?: number;
    amount_paid_roundoff?: number;
    brand_calculated_amount?: number;
    cashback?: number;
    cashback_applied?: number;
    cod_charges?: number;
    coupon_effective_discount?: number;
    coupon_value?: number;
    delivery_charge?: number;
    discount?: number;
    fynd_credits?: number;
    gift_price?: number;
    pm_price_split?: number;
    price_effective?: number;
    price_marked?: number;
    promotion_effective_discount?: number;
    refund_amount?: number;
    refund_credit?: number;
    tax_collected_at_source?: number;
    transfer_price?: number;
    value_of_good?: number;
};
/** @returns {ProcessingDates} */
declare function ProcessingDates(): ProcessingDates;
type ProcessingDates = {
    confirm_by_date?: string;
    customer_pickup_slot?: any;
    dispatch_after_date?: string;
    dispatch_by_date?: string;
    dp_pickup_slot?: any;
    pack_by_date?: string;
};
/** @returns {ProcessManifest} */
declare function ProcessManifest(): ProcessManifest;
type ProcessManifest = {
    action: string;
    filters: FiltersRequest;
    manifest_id?: string;
    unique_id: string;
};
/** @returns {ProcessManifestItemResponse} */
declare function ProcessManifestItemResponse(): ProcessManifestItemResponse;
type ProcessManifestItemResponse = {
    items?: ProcessManifestResponse;
};
/** @returns {ProcessManifestResponse} */
declare function ProcessManifestResponse(): ProcessManifestResponse;
type ProcessManifestResponse = {
    action?: string;
    company_id?: number;
    created_by?: string;
    filters?: Filters;
    manifest_id?: string;
    uid?: string;
    user_id?: string;
};
/** @returns {Products} */
declare function Products(): Products;
type Products = {
    /**
     * - Product/Bag Article/Item Identifier
     */
    identifier?: string;
    /**
     * - Product/Bag Line number for the
     * Product/Bag Identifier
     */
    line_number?: number;
    quantity?: number;
};
/** @returns {ProductsDataUpdates} */
declare function ProductsDataUpdates(): ProductsDataUpdates;
type ProductsDataUpdates = {
    data?: any;
    /**
     * - Filter for the Product/Bag
     */
    filters?: ProductsDataUpdatesFilters[];
};
/** @returns {ProductsDataUpdatesFilters} */
declare function ProductsDataUpdatesFilters(): ProductsDataUpdatesFilters;
type ProductsDataUpdatesFilters = {
    /**
     * - Product/Bag Article/Item Identifier
     */
    identifier?: string;
    /**
     * - Product/Bag Line number for the
     * Product/Bag Identifier
     */
    line_number?: number;
};
/** @returns {ProductsReasons} */
declare function ProductsReasons(): ProductsReasons;
type ProductsReasons = {
    data?: ProductsReasonsData;
    filters?: ProductsReasonsFilters[];
};
/** @returns {ProductsReasonsData} */
declare function ProductsReasonsData(): ProductsReasonsData;
type ProductsReasonsData = {
    reason_id?: number;
    reason_text?: string;
};
/** @returns {ProductsReasonsFilters} */
declare function ProductsReasonsFilters(): ProductsReasonsFilters;
type ProductsReasonsFilters = {
    /**
     * - Product/Bag Article/Item Identifier
     */
    identifier?: string;
    /**
     * - Product/Bag Line number for the
     * Product/Bag Identifier
     */
    line_number?: number;
    quantity?: number;
};
/** @returns {QuestionSet} */
declare function QuestionSet(): QuestionSet;
type QuestionSet = {
    display_name?: string;
    id?: number;
};
/** @returns {Reason} */
declare function Reason(): Reason;
type Reason = {
    display_name?: string;
    id?: number;
    qc_type?: string[];
    question_set?: QuestionSet[];
};
/** @returns {ReasonsData} */
declare function ReasonsData(): ReasonsData;
type ReasonsData = {
    entities?: EntitiesReasons[];
    products?: ProductsReasons[];
};
/** @returns {RefundModeConfigRequestPayload} */
declare function RefundModeConfigRequestPayload(): RefundModeConfigRequestPayload;
type RefundModeConfigRequestPayload = {
    affiliate_id: string;
    customer_mobile_number?: string;
    fynd_order_id: string;
    seller_id: number;
};
/** @returns {RefundModeConfigResponsePayload} */
declare function RefundModeConfigResponsePayload(): RefundModeConfigResponsePayload;
type RefundModeConfigResponsePayload = {
    data: RefundModeInfo[];
    success: boolean;
};
/** @returns {RefundModeInfo} */
declare function RefundModeInfo(): RefundModeInfo;
type RefundModeInfo = {
    display_name?: string;
    is_active?: boolean;
    options?: RefundOption[];
    slug?: string;
};
/** @returns {RefundOption} */
declare function RefundOption(): RefundOption;
type RefundOption = {
    name?: string;
    slug?: string;
    type?: string;
    value?: string;
};
/** @returns {ReplacementDetails} */
declare function ReplacementDetails(): ReplacementDetails;
type ReplacementDetails = {
    original_affiliate_order_id?: string;
    replacement_type?: string;
};
/** @returns {ResponseDetail} */
declare function ResponseDetail(): ResponseDetail;
type ResponseDetail = {
    message?: string[];
    success?: boolean;
};
/** @returns {ReturnConfig} */
declare function ReturnConfig(): ReturnConfig;
type ReturnConfig = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
/** @returns {RoleBaseStateTransitionMapping} */
declare function RoleBaseStateTransitionMapping(): RoleBaseStateTransitionMapping;
type RoleBaseStateTransitionMapping = {
    next_statuses?: string[];
    success?: boolean;
};
/** @returns {SendSmsPayload} */
declare function SendSmsPayload(): SendSmsPayload;
type SendSmsPayload = {
    /**
     * - Bag_id for the activity history track
     */
    bag_id: number;
    /**
     * - SMS Data
     */
    data?: SmsDataPayload;
    /**
     * - Slug name for the template mapped in pointblank
     */
    slug: string;
};
/** @returns {SendUserMobileOTP} */
declare function SendUserMobileOTP(): SendUserMobileOTP;
type SendUserMobileOTP = {
    country_code?: string;
    mobile: string;
};
/** @returns {SendUserMobileOtpResponse} */
declare function SendUserMobileOtpResponse(): SendUserMobileOtpResponse;
type SendUserMobileOtpResponse = {
    data?: PointBlankOtpData;
    message?: string;
    success?: boolean;
};
/** @returns {Shipment} */
declare function Shipment(): Shipment;
type Shipment = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
    billing_address_json?: PlatformDeliveryAddress;
    created_at?: string;
    credit_note_id?: string;
    delivery_address_json?: PlatformDeliveryAddress;
    delivery_awb_number?: string;
    eway_bill_id?: string;
    external_shipment_id?: string;
    fulfilment_priority?: number;
    fynd_order_id?: string;
    gst?: ShipmentGstDetails;
    hand_over_contact_json?: PlatformDeliveryAddress;
    id?: string;
    is_active?: boolean;
    line_items: LineItem[];
    location_id: number;
    lock_status?: string;
    meta?: any;
    order_type?: string;
    packaging_type?: string;
    parent_id?: string;
    parent_type?: string;
    pdf_links?: any;
    previous_shipment_id?: string;
    price?: Prices;
    priority?: number;
    processing_dates?: ProcessingDates;
    quantity?: number;
    status?: ShipmentStatusData;
    store_invoice_id?: string;
    tags?: string[];
    type?: string;
    vertical?: string;
};
/** @returns {ShipmentActionInfo} */
declare function ShipmentActionInfo(): ShipmentActionInfo;
type ShipmentActionInfo = {
    failed_invoiced_shipments?: any;
    failed_shipments?: any[];
    invoice?: string[];
    invoiceable_shipments?: string[];
    label?: string[];
    processing_invoice_shipments?: string[];
    processing_shipments?: string[];
    successful_invoiced_shipments?: string[];
    successful_shipments?: string[];
};
/** @returns {ShipmentBagReasons} */
declare function ShipmentBagReasons(): ShipmentBagReasons;
type ShipmentBagReasons = {
    reasons?: BagReasons[];
    success?: boolean;
};
/** @returns {ShipmentConfig} */
declare function ShipmentConfig(): ShipmentConfig;
type ShipmentConfig = {
    action: string;
    identifier: string;
    journey: string;
    location_details?: LocationDetails;
    payment_mode: string;
    shipment: ShipmentDetails[];
    source: string;
    to_pincode: string;
};
/** @returns {ShipmentData} */
declare function ShipmentData(): ShipmentData;
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
/** @returns {ShipmentDetail} */
declare function ShipmentDetail(): ShipmentDetail;
type ShipmentDetail = {
    bag_list?: number[];
    id: number;
    meta: Meta;
    remarks?: string;
    shipment_id?: string;
    status?: string;
};
/** @returns {ShipmentDetails} */
declare function ShipmentDetails(): ShipmentDetails;
type ShipmentDetails = {
    action_to_status?: any;
    affiliate_shipment_id: string;
    articles: ArticleDetails[];
    box_type?: string;
    dp_id?: string;
    dp_options?: any;
    fulfillment_id: number;
    lock_status?: boolean;
    meta?: any;
    shipments: number;
};
/** @returns {ShipmentGstDetails} */
declare function ShipmentGstDetails(): ShipmentGstDetails;
type ShipmentGstDetails = {
    brand_calculated_amount?: number;
    gst_fee?: number;
    gstin_code?: number;
    tax_collected_at_source?: number;
    value_of_good?: number;
};
/** @returns {ShipmentHistoryResponse} */
declare function ShipmentHistoryResponse(): ShipmentHistoryResponse;
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
    success?: boolean;
};
/** @returns {ShipmentInfoResponse} */
declare function ShipmentInfoResponse(): ShipmentInfoResponse;
type ShipmentInfoResponse = {
    message?: string;
    shipments?: PlatformShipment[];
    success: boolean;
};
/** @returns {ShipmentInternalPlatformViewResponse} */
declare function ShipmentInternalPlatformViewResponse(): ShipmentInternalPlatformViewResponse;
type ShipmentInternalPlatformViewResponse = {
    items?: ShipmentItem[];
    lane?: string;
    message?: string;
    page?: Page;
    success?: boolean;
    total_count?: number;
};
/** @returns {ShipmentItem} */
declare function ShipmentItem(): ShipmentItem;
type ShipmentItem = {
    bags?: BagUnit[];
    can_process?: boolean;
    channel?: ShipmentListingChannel;
    currency?: Currency;
    currency_info?: CurrencyInfo;
    customer_note?: string;
    delivery_address?: PlatformDeliveryAddress;
    display_name?: string;
    estimated_sla_time?: string;
    estimated_sla_ts?: string;
    fulfilling_store?: ShipmentItemFulFillingStore;
    invoice_id?: string;
    lock_status?: boolean;
    meta?: any;
    mode_of_payment?: string;
    order_created_ts?: string;
    order_date?: string;
    order_id: string;
    ordering_channnel?: string;
    payment_methods?: any;
    payment_mode?: string;
    previous_shipment_id?: string;
    prices?: Prices;
    shipment_created_at: string;
    shipment_created_ts?: string;
    shipment_id?: string;
    shipment_status?: ShipmentStatus;
    status_created_at?: string;
    status_created_ts?: string;
    total_bags: number;
    user?: UserDataInfo;
};
/** @returns {ShipmentItemFulFillingStore} */
declare function ShipmentItemFulFillingStore(): ShipmentItemFulFillingStore;
type ShipmentItemFulFillingStore = {
    address?: string;
    address1?: string;
    brand_store_tags?: string[];
    city?: string;
    code: string;
    display_address?: string;
    id: number;
    location_type?: string;
    meta?: any;
    name?: string;
    phone?: string;
    pincode?: string;
    state?: string;
    store_email?: string;
    tags?: string[];
};
/** @returns {ShipmentListingBrand} */
declare function ShipmentListingBrand(): ShipmentListingBrand;
type ShipmentListingBrand = {
    created_on?: string;
    logo?: string;
    logo_base64?: string;
    name?: string;
};
/** @returns {ShipmentListingChannel} */
declare function ShipmentListingChannel(): ShipmentListingChannel;
type ShipmentListingChannel = {
    channel_shipment_id?: string;
    is_affiliate?: boolean;
    logo?: string;
    name?: string;
};
/** @returns {ShipmentLockDetails} */
declare function ShipmentLockDetails(): ShipmentLockDetails;
type ShipmentLockDetails = {
    action_to_status?: any;
    lock_message?: string;
    lock_status?: boolean;
};
/** @returns {ShipmentMeta} */
declare function ShipmentMeta(): ShipmentMeta;
type ShipmentMeta = {
    assign_dp_from_sb?: boolean;
    auto_trigger_dp_assignment_acf?: boolean;
    awb_number?: string;
    b2b_buyer_details?: BuyerDetails;
    b2c_buyer_details?: any;
    bag_weight?: any;
    box_type?: string;
    debug_info?: DebugInfo;
    dimension?: Dimensions;
    dp_id?: string;
    dp_name?: string;
    dp_options?: any;
    dp_sort_key?: string;
    due_date?: string;
    einvoice_info?: EinvoiceInfo;
    estimated_delivery_date?: string;
    ewaybill_info?: any;
    external?: any;
    formatted?: Formatted;
    forward_affiliate_order_id?: string;
    forward_affiliate_shipment_id?: string;
    fulfilment_priority_text?: string;
    is_self_ship?: boolean;
    lock_data?: LockData;
    marketplace_store_id?: string;
    order_type?: string;
    packaging_name?: string;
    parent_dp_id?: string;
    po_number?: string;
    refund_to?: string;
    return_affiliate_order_id?: string;
    return_affiliate_shipment_id?: string;
    return_awb_number?: string;
    return_details?: any;
    return_store_node?: number;
    same_store_available: boolean;
    shipment_tags?: ShipmentTags[];
    shipment_volumetric_weight?: number;
    shipment_weight?: number;
    store_invoice_updated_date?: string;
    timestamp?: ShipmentTimeStamp;
    tracking_url?: string;
    weight: number;
};
/** @returns {ShipmentPayments} */
declare function ShipmentPayments(): ShipmentPayments;
type ShipmentPayments = {
    logo?: string;
    mode?: string;
    source?: string;
};
/** @returns {ShipmentReasonsResponse} */
declare function ShipmentReasonsResponse(): ShipmentReasonsResponse;
type ShipmentReasonsResponse = {
    message: string;
    reasons: ShipmentResponseReasons[];
    success: boolean;
};
/** @returns {ShipmentResponseReasons} */
declare function ShipmentResponseReasons(): ShipmentResponseReasons;
type ShipmentResponseReasons = {
    reason?: string;
    reason_id?: number;
};
/** @returns {ShipmentsRequest} */
declare function ShipmentsRequest(): ShipmentsRequest;
type ShipmentsRequest = {
    data_updates?: DataUpdates;
    /**
     * - Shipment ID
     */
    identifier: string;
    /**
     * - Product/Bag to be updated
     */
    products?: Products[];
    reasons?: ReasonsData;
};
/** @returns {ShipmentsResponse} */
declare function ShipmentsResponse(): ShipmentsResponse;
type ShipmentsResponse = {
    code?: string;
    exception?: string;
    final_state?: any;
    identifier?: string;
    message?: string;
    meta?: any;
    stack_trace?: string;
    status?: number;
};
/** @returns {ShipmentStatus} */
declare function ShipmentStatus(): ShipmentStatus;
type ShipmentStatus = {
    bag_list?: string[];
    created_at?: string;
    created_ts?: string;
    current_shipment_status?: string;
    meta?: any;
    shipment_id?: string;
    shipment_status_id?: number;
    status: string;
    status_created_at?: string;
    status_created_ts?: string;
    title: string;
};
/** @returns {ShipmentStatusData} */
declare function ShipmentStatusData(): ShipmentStatusData;
type ShipmentStatusData = {
    bag_list?: string[];
    created_at?: string;
    created_ts?: string;
    current_shipment_status?: string;
    display_name?: string;
    id?: number;
    meta?: any;
    shipment_id?: string;
    status?: string;
    status_created_at?: string;
};
/** @returns {ShipmentTags} */
declare function ShipmentTags(): ShipmentTags;
type ShipmentTags = {
    display_text?: string;
    entity_type?: string;
    slug?: string;
};
/** @returns {ShipmentTimeStamp} */
declare function ShipmentTimeStamp(): ShipmentTimeStamp;
type ShipmentTimeStamp = {
    max?: number;
    min?: number;
};
/** @returns {ShippingInfo} */
declare function ShippingInfo(): ShippingInfo;
type ShippingInfo = {
    address?: string;
    address_type?: string;
    address1?: string;
    address2?: string;
    alternate_email?: string;
    alternate_mobile_number?: string;
    area?: string;
    city?: string;
    country?: string;
    country_code?: string;
    /**
     * - Country Code in ISO 2 format (e.g. US, IN)
     */
    country_iso_code?: string;
    customer_code?: string;
    external_customer_code?: string;
    first_name?: string;
    floor_no?: string;
    gender?: string;
    geo_location?: any;
    house_no?: string;
    landmark?: string;
    last_name?: string;
    middle_name?: string;
    pincode?: string;
    primary_email?: string;
    primary_mobile_number?: string;
    shipping_type?: string;
    slot?: any[];
    state?: string;
    state_code?: string;
    title?: string;
};
/** @returns {SmsDataPayload} */
declare function SmsDataPayload(): SmsDataPayload;
type SmsDataPayload = {
    /**
     * - Data mapped in Communication template: amount_paid
     */
    amount_paid?: number;
    /**
     * - Data mapped in Communication template: brand_name
     */
    brand_name?: string;
    /**
     * - Country code for SMS
     */
    country_code: string;
    /**
     * - Data mapped in Communication template:
     * customer_name
     */
    customer_name?: string;
    /**
     * - Message to be send in SMS
     */
    message: string;
    /**
     * - OrderId
     */
    order_id: string;
    /**
     * - Data mapped in Communication template: payment_mode
     */
    payment_mode?: string;
    /**
     * - Phone number for communication
     */
    phone_number: number;
    /**
     * - ShipmentId
     */
    shipment_id: number;
};
/** @returns {StatuesRequest} */
declare function StatuesRequest(): StatuesRequest;
type StatuesRequest = {
    /**
     * - State to be change for
     * Remaining Bag/Products
     */
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
    /**
     * - Flag to split shipment
     */
    split_shipment?: boolean;
    status?: string;
};
/** @returns {StatuesResponse} */
declare function StatuesResponse(): StatuesResponse;
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
/** @returns {Store} */
declare function Store(): Store;
type Store = {
    address1: string;
    address2?: string;
    alohomora_user_id?: number;
    brand_store_tags?: string[];
    city: string;
    code?: string;
    company_id: number;
    contact_person: string;
    country: string;
    created_at: string;
    display_address?: string;
    fulfillment_channel: string;
    is_active?: boolean;
    is_archived?: boolean;
    is_enabled_for_recon?: boolean;
    latitude?: number;
    location_type: string;
    login_username?: string;
    longitude?: number;
    mall_area?: string;
    mall_name?: string;
    meta: StoreMeta;
    name: string;
    order_integration_id?: string;
    packaging_material_count?: number;
    parent_store_id?: number;
    phone: number;
    pincode: string;
    s_id?: string;
    state: string;
    store_active_from?: string;
    store_address_json?: StoreAddress;
    store_email: string;
    updated_at?: string;
    vat_no?: string;
};
/** @returns {StoreAddress} */
declare function StoreAddress(): StoreAddress;
type StoreAddress = {
    address_category: string;
    address_type: string;
    address1: string;
    address2?: string;
    area?: string;
    city: string;
    contact_person: string;
    country: string;
    country_code: string;
    created_at: string;
    display_address?: string;
    email?: string;
    landmark?: string;
    latitude: number;
    longitude: number;
    phone: string;
    pincode: number;
    state: string;
    updated_at: string;
    version?: string;
};
/** @returns {StoreDocuments} */
declare function StoreDocuments(): StoreDocuments;
type StoreDocuments = {
    gst?: Document;
};
/** @returns {StoreEinvoice} */
declare function StoreEinvoice(): StoreEinvoice;
type StoreEinvoice = {
    enabled: boolean;
    password?: string;
    user?: string;
    username?: string;
};
/** @returns {StoreEwaybill} */
declare function StoreEwaybill(): StoreEwaybill;
type StoreEwaybill = {
    enabled?: boolean;
};
/** @returns {StoreGstCredentials} */
declare function StoreGstCredentials(): StoreGstCredentials;
type StoreGstCredentials = {
    e_invoice?: StoreEinvoice;
    e_waybill?: StoreEwaybill;
};
/** @returns {StoreMeta} */
declare function StoreMeta(): StoreMeta;
type StoreMeta = {
    additional_contact_details?: any;
    display_name: string;
    documents?: StoreDocuments;
    einvoice_portal_details?: EInvoicePortalDetails;
    ewaybill_portal_details?: any;
    gst_credentials: StoreGstCredentials;
    gst_number?: string;
    notification_emails?: string[];
    product_return_config?: any;
    stage: string;
    timing?: any[];
};
/** @returns {StoreReassign} */
declare function StoreReassign(): StoreReassign;
type StoreReassign = {
    affiliate_bag_id?: string;
    affiliate_id?: string;
    affiliate_order_id?: string;
    bag_id?: number;
    fynd_order_id?: string;
    item_id?: string;
    mongo_article_id?: string;
    reason_ids?: number[];
    set_id?: string;
    store_id: number;
};
/** @returns {StoreReassignResponse} */
declare function StoreReassignResponse(): StoreReassignResponse;
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
/** @returns {SubLane} */
declare function SubLane(): SubLane;
type SubLane = {
    actions?: any[];
    index?: number;
    text?: string;
    total_items?: number;
    value?: string;
};
/** @returns {SuccessResponse} */
declare function SuccessResponse(): SuccessResponse;
type SuccessResponse = {
    message?: string;
    success?: boolean;
};
/** @returns {SuperLane} */
declare function SuperLane(): SuperLane;
type SuperLane = {
    options?: SubLane[];
    text: string;
    total_items?: number;
    value: string;
};
/** @returns {Tax} */
declare function Tax(): Tax;
type Tax = {
    amount: any;
    breakup?: any[];
    name: string;
    rate: number;
};
/** @returns {TaxDetails} */
declare function TaxDetails(): TaxDetails;
type TaxDetails = {
    gstin?: string;
    pan_no?: string;
};
/** @returns {TaxInfo} */
declare function TaxInfo(): TaxInfo;
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
    pan_no?: string;
};
/** @returns {TemplateDownloadResponse} */
declare function TemplateDownloadResponse(): TemplateDownloadResponse;
type TemplateDownloadResponse = {
    file_name?: string;
    url?: string;
};
/** @returns {Templates} */
declare function Templates(): Templates;
type Templates = {
    text?: string;
    value?: string;
};
/** @returns {TotalShipmentPricesCount} */
declare function TotalShipmentPricesCount(): TotalShipmentPricesCount;
type TotalShipmentPricesCount = {
    shipment_count?: number;
    total_price?: number;
};
/** @returns {TrackingList} */
declare function TrackingList(): TrackingList;
type TrackingList = {
    created_ts?: string;
    is_current?: boolean;
    is_passed?: boolean;
    status: string;
    text: string;
    time?: string;
};
/** @returns {UpdatePackagingDimensionsPayload} */
declare function UpdatePackagingDimensionsPayload(): UpdatePackagingDimensionsPayload;
type UpdatePackagingDimensionsPayload = {
    current_status: string;
    dimension: Dimension[];
    shipment_id: string;
};
/** @returns {UpdatePackagingDimensionsResponse} */
declare function UpdatePackagingDimensionsResponse(): UpdatePackagingDimensionsResponse;
type UpdatePackagingDimensionsResponse = {
    message?: string;
};
/** @returns {UpdateShipmentLockPayload} */
declare function UpdateShipmentLockPayload(): UpdateShipmentLockPayload;
type UpdateShipmentLockPayload = {
    /**
     * - Expected Actions: [lock, unlock, check]
     */
    action: string;
    /**
     * - Expected action_type: [complete,
     * operational, financial]
     */
    action_type: string;
    /**
     * - Shipment/Entity
     */
    entities: Entities[];
    /**
     * - Expected entity_type: [bags, shipments]
     */
    entity_type: string;
};
/** @returns {UpdateShipmentLockResponse} */
declare function UpdateShipmentLockResponse(): UpdateShipmentLockResponse;
type UpdateShipmentLockResponse = {
    /**
     * - Entity Lock Status, If the
     * action input as 'check'
     */
    check_response?: CheckResponse[];
    message?: string;
    success?: boolean;
};
/** @returns {UpdateShipmentStatusRequest} */
declare function UpdateShipmentStatusRequest(): UpdateShipmentStatusRequest;
type UpdateShipmentStatusRequest = {
    /**
     * - Force Transition
     */
    force_transition?: boolean;
    /**
     * - Lock Shipment After Transition
     */
    lock_after_transition?: boolean;
    statuses?: StatuesRequest[];
    /**
     * - To Run Status Update as a background Task
     */
    task?: boolean;
    /**
     * - Unlock Shipment After Transition
     */
    unlock_before_transition?: boolean;
};
/** @returns {UpdateShipmentStatusResponseBody} */
declare function UpdateShipmentStatusResponseBody(): UpdateShipmentStatusResponseBody;
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
/** @returns {UploadConsent} */
declare function UploadConsent(): UploadConsent;
type UploadConsent = {
    consent_url: string;
    manifest_id: string;
};
/** @returns {URL} */
declare function URL(): URL;
type URL = {
    url?: string;
};
/** @returns {UserData} */
declare function UserData(): UserData;
type UserData = {
    billing_user?: OrderUser;
    shipping_user?: OrderUser;
};
/** @returns {UserDataInfo} */
declare function UserDataInfo(): UserDataInfo;
type UserDataInfo = {
    avis_user_id?: string;
    email?: string;
    external_customer_id?: string;
    first_name?: string;
    gender?: string;
    is_anonymous_user?: boolean;
    last_name?: string;
    mobile?: string;
    name?: string;
    uid?: number;
    user_oid?: string;
};
/** @returns {UserDetails} */
declare function UserDetails(): UserDetails;
type UserDetails = {
    email?: string;
    external_customer_id?: string;
    first_name?: string;
    gender?: string;
    is_anonymous_user?: boolean;
    last_name?: string;
    meta?: any;
    mobile?: string;
    mongo_user_id?: string;
    user_oid?: string;
};
/** @returns {UserDetailsData} */
declare function UserDetailsData(): UserDetailsData;
type UserDetailsData = {
    address: string;
    address_type?: string;
    address1?: string;
    area?: string;
    city: string;
    country: string;
    country_iso_code?: string;
    country_phone_code?: string;
    display_address?: string;
    email?: string;
    landmark?: string;
    name: string;
    phone: string;
    pincode: string;
    state: string;
    state_code?: string;
};
/** @returns {UserInfo} */
declare function UserInfo(): UserInfo;
type UserInfo = {
    first_name: string;
    gender?: string;
    last_name?: string;
    primary_email: string;
    primary_mobile_number: string;
    user_id?: string;
    user_type?: string;
};
/** @returns {VerifyMobileOTP} */
declare function VerifyMobileOTP(): VerifyMobileOTP;
type VerifyMobileOTP = {
    fynd_order_id: string;
    otp_data: VerifyOtpData;
};
/** @returns {VerifyOtpData} */
declare function VerifyOtpData(): VerifyOtpData;
type VerifyOtpData = {
    mobile: string;
    otp_code: number;
    request_id: string;
};
/** @returns {VerifyOtpResponse} */
declare function VerifyOtpResponse(): VerifyOtpResponse;
type VerifyOtpResponse = {
    data?: VerifyOtpResponseData;
    message?: string;
    status?: number;
    success?: boolean;
};
/** @returns {VerifyOtpResponseData} */
declare function VerifyOtpResponseData(): VerifyOtpResponseData;
type VerifyOtpResponseData = {
    country_code?: string;
    fynd_order_id?: string;
    message?: string;
    mobile?: string;
};
/** @returns {Weight} */
declare function Weight(): Weight;
type Weight = {
    is_default?: boolean;
    shipping?: number;
    unit?: string;
};
/** @returns {WeightData} */
declare function WeightData(): WeightData;
type WeightData = {
    unit?: string;
    value?: number;
};
