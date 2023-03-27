const Paginator = require("../../common/Paginator");
const { FDKClientValidationError } = require("../../common/FDKError");
const PlatformAPIClient = require("../PlatformAPIClient");
const DiscountValidator = require("./DiscountPlatformValidator");
class Discount {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.view] - Listing or calender. Default is listing.
   * @param {string} [arg.q] - The search query. This can be a partial or
   *   complete name of a discount.
   * @param {number} [arg.pageNo] - Page number. Default is 1.
   * @param {number} [arg.pageSize] - Page size. Default is 12.
   * @param {boolean} [arg.archived] - Archived. Default is false.
   * @param {number} [arg.month] - Month. Default is current month.
   * @param {number} [arg.year] - Year. Default is current year.
   * @param {string} [arg.type] - Basic or custom.
   * @param {string[]} [arg.appIds] - Application ids.
   * @summary: Fetch discount list.
   * @description: Fetch discount list.
   */
  getDiscounts({
    view,
    q,
    pageNo,
    pageSize,
    archived,
    month,
    year,
    type,
    appIds,
  } = {}) {
    const { error } = DiscountValidator.getDiscounts().validate(
      {
        view,
        q,
        pageNo,
        pageSize,
        archived,
        month,
        year,
        type,
        appIds,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = DiscountValidator.getDiscounts().validate(
      {
        view,
        q,
        pageNo,
        pageSize,
        archived,
        month,
        year,
        type,
        appIds,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getDiscounts");
      console.log(warrning);
    }

    const query_params = {};
    query_params["view"] = view;
    query_params["q"] = q;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["archived"] = archived;
    query_params["month"] = month;
    query_params["year"] = year;
    query_params["type"] = type;
    query_params["app_ids"] = appIds;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/job/`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateUpdateDiscount} arg.body
   * @summary: Create Discount.
   * @description: Create Discount.
   */
  createDiscount({ body } = {}) {
    const { error } = DiscountValidator.createDiscount().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = DiscountValidator.createDiscount().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for createDiscount");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/job/`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Unique id.
   * @summary: Fetch discount.
   * @description: Fetch discount.
   */
  getDiscount({ id } = {}) {
    const { error } = DiscountValidator.getDiscount().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = DiscountValidator.getDiscount().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getDiscount");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/job/${id}/`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Id
   * @param {CreateUpdateDiscount} arg.body
   * @summary: Create Discount.
   * @description: Create Discount.
   */
  updateDiscount({ id, body } = {}) {
    const { error } = DiscountValidator.updateDiscount().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = DiscountValidator.updateDiscount().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for updateDiscount");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/job/${id}/`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Job ID of the discount.
   * @param {BulkDiscount} arg.body
   * @summary: Create custom discount from bulk.
   * @description: Create custom discounts through API.
   */
  upsertDiscountItems({ id, body } = {}) {
    const { error } = DiscountValidator.upsertDiscountItems().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = DiscountValidator.upsertDiscountItems().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for upsertDiscountItems");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/job/${id}/items/`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.discount] - Discount
   * @param {DiscountJob} arg.body
   * @summary: Validate File.
   * @description: Validate File.
   */
  validateDiscountFile({ body, discount } = {}) {
    const { error } = DiscountValidator.validateDiscountFile().validate(
      {
        body,
        discount,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = DiscountValidator.validateDiscountFile().validate(
      {
        body,
        discount,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for validateDiscountFile");
      console.log(warrning);
    }

    const query_params = {};
    query_params["discount"] = discount;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/file/validation/`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.type - Type
   * @param {DownloadFileJob} arg.body
   * @summary: Validate File.
   * @description: Validate File.
   */
  downloadDiscountFile({ type, body } = {}) {
    const { error } = DiscountValidator.downloadDiscountFile().validate(
      {
        type,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = DiscountValidator.downloadDiscountFile().validate(
      {
        type,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for downloadDiscountFile");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/file/${type}/download/`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Id
   * @summary: Validate File Job.
   * @description: Validate File Job.
   */
  getValidationJob({ id } = {}) {
    const { error } = DiscountValidator.getValidationJob().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = DiscountValidator.getValidationJob().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getValidationJob");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/file/validation/${id}/`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Id
   * @summary: Cancel Validation Job.
   * @description: Cancel Validation Job.
   */
  cancelValidationJob({ id } = {}) {
    const { error } = DiscountValidator.cancelValidationJob().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = DiscountValidator.cancelValidationJob().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for cancelValidationJob");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/file/validation/${id}/`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Id
   * @summary: Download File Job.
   * @description: Download File Job.
   */
  getDownloadJob({ id } = {}) {
    const { error } = DiscountValidator.getDownloadJob().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = DiscountValidator.getDownloadJob().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getDownloadJob");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/file/download/${id}/`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Id
   * @summary: Cancel Download Job.
   * @description: Cancel Download Job.
   */
  cancelDownloadJob({ id } = {}) {
    const { error } = DiscountValidator.cancelDownloadJob().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = DiscountValidator.cancelDownloadJob().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for cancelDownloadJob");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/file/download/${id}/`,
      query_params,
      undefined,
      xHeaders
    );
  }
}

module.exports = Discount;