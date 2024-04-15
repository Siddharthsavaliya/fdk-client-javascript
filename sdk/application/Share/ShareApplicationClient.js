const ApplicationAPIClient = require("../ApplicationAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const ShareApplicationValidator = require("./ShareApplicationValidator");
const ShareApplicationModel = require("./ShareApplicationModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Share {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      createShortLink: "/service/application/share/v1.0/links/short-link/",
      getApplicationQRCode: "/service/application/share/v1.0/qr/",
      getCollectionQRCodeBySlug:
        "/service/application/share/v1.0/qr/collection/{slug}/",
      getOriginalShortLinkByHash:
        "/service/application/share/v1.0/links/short-link/{hash}/original/",
      getProductQRCodeBySlug:
        "/service/application/share/v1.0/qr/products/{slug}/",
      getShortLinkByHash:
        "/service/application/share/v1.0/links/short-link/{hash}/",
      getUrlQRCode: "/service/application/share/v1.0/qr/url/",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {ShareApplicationValidator.CreateShortLinkParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ShareApplicationModel.ShortLinkRes>} - Success response
   * @name createShortLink
   * @summary: Shorten URL
   * @description: Creates a shortened version of a given URL for easier sharing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/share/createShortLink/).
   */
  async createShortLink(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ShareApplicationValidator.createShortLink().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ShareApplicationValidator.createShortLink().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Share > createShortLink \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createShortLink"],
        params: {},
      }),
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ShareApplicationModel.ShortLinkRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Share > createShortLink \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ShareApplicationValidator.GetApplicationQRCodeParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ShareApplicationModel.QRCodeResp>} - Success response
   * @name getApplicationQRCode
   * @summary: App QR code
   * @description: Generates a QR code for the application for easy sharing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/share/getApplicationQRCode/).
   */
  async getApplicationQRCode(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ShareApplicationValidator.getApplicationQRCode().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ShareApplicationValidator.getApplicationQRCode().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Share > getApplicationQRCode \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getApplicationQRCode"],
        params: {},
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ShareApplicationModel.QRCodeResp().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Share > getApplicationQRCode \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ShareApplicationValidator.GetCollectionQRCodeBySlugParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ShareApplicationModel.QRCodeResp>} - Success response
   * @name getCollectionQRCodeBySlug
   * @summary: Collection QR code
   * @description: Generates a QR code for a specific product collection using its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/share/getCollectionQRCodeBySlug/).
   */
  async getCollectionQRCodeBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ShareApplicationValidator.getCollectionQRCodeBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ShareApplicationValidator.getCollectionQRCodeBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Share > getCollectionQRCodeBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getCollectionQRCodeBySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ShareApplicationModel.QRCodeResp().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Share > getCollectionQRCodeBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ShareApplicationValidator.GetOriginalShortLinkByHashParam} arg -
   *   Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ShareApplicationModel.ShortLinkRes>} - Success response
   * @name getOriginalShortLinkByHash
   * @summary: Original URL
   * @description: Retrieve the original link from a short-link by using a hash value. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/share/getOriginalShortLinkByHash/).
   */
  async getOriginalShortLinkByHash(
    { hash, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ShareApplicationValidator.getOriginalShortLinkByHash().validate(
      { hash },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ShareApplicationValidator.getOriginalShortLinkByHash().validate(
      { hash },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Share > getOriginalShortLinkByHash \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getOriginalShortLinkByHash"],
        params: { hash },
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ShareApplicationModel.ShortLinkRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Share > getOriginalShortLinkByHash \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ShareApplicationValidator.GetProductQRCodeBySlugParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ShareApplicationModel.QRCodeResp>} - Success response
   * @name getProductQRCodeBySlug
   * @summary: Product QR code
   * @description: Creates a QR code for a specific product identified by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/share/getProductQRCodeBySlug/).
   */
  async getProductQRCodeBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ShareApplicationValidator.getProductQRCodeBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ShareApplicationValidator.getProductQRCodeBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Share > getProductQRCodeBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getProductQRCodeBySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ShareApplicationModel.QRCodeResp().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Share > getProductQRCodeBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ShareApplicationValidator.GetShortLinkByHashParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ShareApplicationModel.ShortLinkRes>} - Success response
   * @name getShortLinkByHash
   * @summary: Fetch short link
   * @description: Retrieves a previously created short link using its hash identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/share/getShortLinkByHash/).
   */
  async getShortLinkByHash(
    { hash, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ShareApplicationValidator.getShortLinkByHash().validate(
      { hash },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ShareApplicationValidator.getShortLinkByHash().validate(
      { hash },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Share > getShortLinkByHash \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getShortLinkByHash"],
        params: { hash },
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ShareApplicationModel.ShortLinkRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Share > getShortLinkByHash \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ShareApplicationValidator.GetUrlQRCodeParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ShareApplicationModel.QRCodeResp>} - Success response
   * @name getUrlQRCode
   * @summary: URL to QR code
   * @description: Converts a given URL into a scannable QR code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/share/getUrlQRCode/).
   */
  async getUrlQRCode(
    { url, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ShareApplicationValidator.getUrlQRCode().validate(
      { url },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ShareApplicationValidator.getUrlQRCode().validate(
      { url },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Share > getUrlQRCode \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["url"] = url;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getUrlQRCode"],
        params: {},
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ShareApplicationModel.QRCodeResp().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Share > getUrlQRCode \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Share;
