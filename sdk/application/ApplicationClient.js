const axios = require("axios");
const {
  CatalogValidator,
  CartValidator,
  LeadValidator,
  ThemeValidator,
  UserValidator,
  ContentValidator,
  CommunicationValidator,
  ShareValidator,
  FileStorageValidator,
  ConfigurationValidator,
  PaymentValidator,
  OrderValidator,
  RewardsValidator,
  FeedbackValidator,
  PosCartValidator,
  LogisticValidator,
} = require("./ApplicationModels");

const APIClient = require("./ApplicationAPIClient");
const Paginator = require("../common/Paginator");

class ApplicationClient {
  constructor(config) {
    this.catalog = new Catalog(config);
    this.cart = new Cart(config);
    this.lead = new Lead(config);
    this.theme = new Theme(config);
    this.user = new User(config);
    this.content = new Content(config);
    this.communication = new Communication(config);
    this.share = new Share(config);
    this.fileStorage = new FileStorage(config);
    this.configuration = new Configuration(config);
    this.payment = new Payment(config);
    this.order = new Order(config);
    this.rewards = new Rewards(config);
    this.feedback = new Feedback(config);
    this.posCart = new PosCart(config);
    this.logistic = new Logistic(config);
  }
}

class Catalog {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @returns {Promise<ProductDetail>} - Success response
   * @summary: Get a product
   * @description: Use this API to retrieve a product by its slug value.
   */
  getProductDetailBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getProductDetailBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/* @param {number}
   *   [arg.storeId] - The ID of the store that is selling the product, e.g. 1,2,3.
   * @returns {Promise<ProductSizes>} - Success response
   * @summary: Get the sizes of a product
   * @description: A product can have multiple sizes. Use this API to fetch all the available sizes of a product.
   */
  getProductSizesBySlug({ slug, storeId } = {}) {
    const { error } = CatalogValidator.getProductSizesBySlug().validate(
      { slug, storeId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["store_id"] = storeId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/sizes/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/* @param {string} arg.size -
   *   A string indicating the size of the product, e.g. S, M, XL. You can get
   *   slug value from the endpoint
   *   /service/application/catalog/v1.0/products/sizes* @param {string}
   *   arg.pincode - The PIN Code of the area near which the selling locations
   *   should be searched, e.g. 400059* @param {string} [arg.storeId] - The ID
   *   of the store that is selling the product, e.g. 1,2,3.
   * @returns {Promise<ProductSizePriceResponse>} - Success response
   * @summary: Get the price of a product size at a PIN Code
   * @description: Prices may vary for different sizes of a product. Use this API to retrieve the price of a product size at all the selling locations near to a PIN Code.
   */
  getProductPriceBySlug({ slug, size, pincode, storeId } = {}) {
    const { error } = CatalogValidator.getProductPriceBySlug().validate(
      { slug, size, pincode, storeId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["store_id"] = storeId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/sizes/${size}/pincode/${pincode}/price/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/* @param {string} arg.size -
   *   A string indicating the size of the product, e.g. S, M, XL. You can get
   *   slug value from the endpoint
   *   /service/application/catalog/v1.0/products/sizes* @param {string}
   *   arg.pincode - The 6-digit PIN Code of the area near which the selling
   *   locations should be searched, e.g. 400059* @param {number} [arg.pageNo]
   *   - The page number to navigate through the given set of results.* @param
   *   {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<ProductSizeSellersResponse>} - Success response
   * @summary: Get the sellers of a product size at a PIN Code
   * @description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code.
   */
  getProductSellersBySlug({ slug, size, pincode, pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getProductSellersBySlug().validate(
      { slug, size, pincode, pageNo, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/sizes/${size}/pincode/${pincode}/sellers/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @param {string} arg.size - A string indicating the size of the product,
   *   e.g. S, M, XL. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/sizes
   * @param {string} arg.pincode - The 6-digit PIN Code of the area near which
   *   the selling locations should be searched, e.g. 400059
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get the sellers of a product size at a PIN Code
   * @description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code.
   */
  getProductSellersBySlugPaginator({ slug, size, pincode, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getProductSellersBySlug({
        slug: slug,
        size: size,
        pincode: pincode,
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
   * @param {Object} arg - Arg object.
   * @param {string[]} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/.
   * @returns {Promise<ProductsComparisonResponse>} - Success response
   * @summary: Compare products
   * @description: Use this API to compare the features of products belonging to the same category. Note that at least one slug is mandatory in the request query.
   */
  getProductComparisonBySlugs({ slug } = {}) {
    const { error } = CatalogValidator.getProductComparisonBySlugs().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["slug"] = slug;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/compare/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @returns {Promise<ProductCompareResponse>} - Success response
   * @summary: Get comparison between similar products
   * @description: Use this API to compare a given product automatically with similar products. Only one slug is needed.
   */
  getSimilarComparisonProductBySlug({ slug } = {}) {
    const {
      error,
    } = CatalogValidator.getSimilarComparisonProductBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/similar/compare/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @returns {Promise<ProductFrequentlyComparedSimilarResponse>} - Success response
   * @summary: Get comparison between frequently compared products with the given product
   * @description: Use this API to compare a given product automatically with products that are frequently compared with it. Only one slug is needed.
   */
  getComparedFrequentlyProductBySlug({ slug } = {}) {
    const {
      error,
    } = CatalogValidator.getComparedFrequentlyProductBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/similar/compared-frequently/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/* @param {string}
   *   arg.similarType - Similarity criteria such as basic, visual, price,
   *   seller, category and spec. Visual - Products having similar patterns,
   *   Price - Products in similar price range, Seller - Products sold by the
   *   same seller, Category - Products belonging to the same category, e.g.
   *   sports shoes, Spec - Products having similar specifications, e.g.
   *   phones with same memory.
   * @returns {Promise<SimilarProductByTypeResponse>} - Success response
   * @summary: Get similar products
   * @description: Use this API to retrieve products similar to the one specified by its slug. You can search not only similar looking products, but also those that are sold by same seller, or those that belong to the same category, price, specifications, etc.
   */
  getProductSimilarByIdentifier({ slug, similarType } = {}) {
    const { error } = CatalogValidator.getProductSimilarByIdentifier().validate(
      { slug, similarType },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/similar/${similarType}/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @returns {Promise<ProductVariantsResponse>} - Success response
   * @summary: Get variant of a particular product
   * @description: A product can have a different type of variants such as colour, shade, memory. Use this API to fetch all the available variants of a product using its slug.
   */
  getProductVariantsBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getProductVariantsBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/variants/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.itemId] - The Item ID of the product (Max. 50
   *   allowed)* @param {string} [arg.alu] - ALU of the product (limited upto
   *   50 ALU identifier in a single request)* @param {string} [arg.skuCode] -
   *   Stock-keeping Unit of the product (limited upto 50 SKU Code in a single
   *   request)* @param {string} [arg.ean] - European Article Number of the
   *   product (limited upto 50 EAN identifier in a single request)* @param
   *   {string} [arg.upc] - Universal Product Code of the product (limited
   *   upto 50 UPC identifier in a single request)
   * @returns {Promise<ProductStockStatusResponse>} - Success response
   * @summary: Get the stock of a product
   * @description: Retrieve the available stock of the products. Use this API to retrieve stock of multiple products (up to 50) at a time.
   */
  getProductStockByIds({ itemId, alu, skuCode, ean, upc } = {}) {
    const { error } = CatalogValidator.getProductStockByIds().validate(
      { itemId, alu, skuCode, ean, upc },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["item_id"] = itemId;
    query["alu"] = alu;
    query["sku_code"] = skuCode;
    query["ean"] = ean;
    query["upc"] = upc;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/stock-status/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.timestamp - Timestamp in UTC format
   *   (2020-07-23T10:27:50Z)* @param {number} [arg.pageSize] - The number of
   *   items to retrieve in each page.* @param {string} [arg.pageId] - Page ID
   *   to retrieve next set of results.
   * @returns {Promise<ProductStockPolling>} - Success response
   * @summary: Get the stock of a product
   * @description: Retrieve the available stock of the products. Use this API to get the stock status of products whose inventory is updated at the specified time
   */
  getProductStockForTimeByIds({ timestamp, pageSize, pageId } = {}) {
    const { error } = CatalogValidator.getProductStockForTimeByIds().validate(
      { timestamp, pageSize, pageId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["timestamp"] = timestamp;
    query["page_size"] = pageSize;
    query["page_id"] = pageId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/stock-status/poll/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.timestamp - Timestamp in UTC format (2020-07-23T10:27:50Z)
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get the stock of a product
   * @description: Retrieve the available stock of the products. Use this API to get the stock status of products whose inventory is updated at the specified time
   */
  getProductStockForTimeByIdsPaginator({ timestamp, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getProductStockForTimeByIds({
        timestamp: timestamp,
        pageSize: pageSize,
        pageId: pageId,
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
   * @param {Object} arg - Arg object.
   * @param {string} [arg.q] - The search query for entering partial or full
   *   name of product, brand, category, or collection.* @param {string}
   *   [arg.f] - The search filter parameters. Filter parameters will be
   *   passed in f parameter as shown in the example below. Double Pipe (||)
   *   denotes the OR condition, whereas Triple-colon (:::) indicates a new
   *   filter paramater applied as an AND condition.* @param {boolean}
   *   [arg.filters] - This is a boolean value, True for fetching all filter
   *   parameters and False for disabling the filter parameters.* @param
   *   {string} [arg.sortOn] - The order in which the list of products should
   *   be sorted, e.g. popularity, price, latest and discount, in either
   *   ascending or descending order. See the supported values below.* @param
   *   {string} [arg.pageId] - Page ID to retrieve next set of results.*
   *   @param {number} [arg.pageSize] - The number of items to retrieve in
   *   each page.* @param {number} [arg.pageNo] - The page number to navigate
   *   through the given set of results.* @param {string} [arg.pageType] -
   *   Available pagination types are cursor or number.
   * @returns {Promise<ProductListingResponse>} - Success response
   * @summary: Get all the products
   * @description: Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.
   */
  getProducts({
    q,
    f,
    filters,
    sortOn,
    pageId,
    pageSize,
    pageNo,
    pageType,
  } = {}) {
    const { error } = CatalogValidator.getProducts().validate(
      { q, f, filters, sortOn, pageId, pageSize, pageNo, pageType },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["q"] = q;
    query["f"] = f;
    query["filters"] = filters;
    query["sort_on"] = sortOn;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;
    query["page_no"] = pageNo;
    query["page_type"] = pageType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.q] - The search query for entering partial or full
   *   name of product, brand, category, or collection.
   * @param {string} [arg.f] - The search filter parameters. Filter parameters
   *   will be passed in f parameter as shown in the example below. Double
   *   Pipe (||) denotes the OR condition, whereas Triple-colon (:::)
   *   indicates a new filter paramater applied as an AND condition.
   * @param {boolean} [arg.filters] - This is a boolean value, True for
   *   fetching all filter parameters and False for disabling the filter parameters.
   * @param {string} [arg.sortOn] - The order in which the list of products
   *   should be sorted, e.g. popularity, price, latest and discount, in
   *   either ascending or descending order. See the supported values below.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get all the products
   * @description: Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.
   */
  getProductsPaginator({ q, f, filters, sortOn, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getProducts({
        q: q,
        f: f,
        filters: filters,
        sortOn: sortOn,
        pageId: pageId,
        pageSize: pageSize,
        pageNo: pageNo,
        pageType: pageType,
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
   * @param {Object} arg - Arg object.
   * @param {string} [arg.department] - The name of the department. Use this
   *   parameter to filter products by a particular department. See the list
   *   of available departments below. Also, you can get available departments
   *   from the endpoint /service/application/catalog/v1.0/departments/*
   *   @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results.* @param {number} [arg.pageSize] - The number of
   *   items to retrieve in each page.
   * @returns {Promise<BrandListingResponse>} - Success response
   * @summary: Get all the brands
   * @description: A brand is the name under which a product is sold. Use this API to list all the brands. You can also filter the brands by department.
   */
  getBrands({ department, pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getBrands().validate(
      { department, pageNo, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["department"] = department;
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/brands/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.department] - The name of the department. Use this
   *   parameter to filter products by a particular department. See the list
   *   of available departments below. Also, you can get available departments
   *   from the endpoint /service/application/catalog/v1.0/departments/
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get all the brands
   * @description: A brand is the name under which a product is sold. Use this API to list all the brands. You can also filter the brands by department.
   */
  getBrandsPaginator({ department, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getBrands({
        department: department,
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a brand. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/brands/.
   * @returns {Promise<BrandDetailResponse>} - Success response
   * @summary: Get metadata of a brand
   * @description: Fetch metadata of a brand such as name, information, logo, banner, etc.
   */
  getBrandDetailBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getBrandDetailBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/brands/${slug}/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.department] - The name of the department. Use this
   *   parameter to filter products by a particular department. See the list
   *   of available departments below. Also, you can get available departments
   *   from the endpoint /service/application/catalog/v1.0/departments/
   * @returns {Promise<CategoryListingResponse>} - Success response
   * @summary: List all the categories
   * @description: Use this API to list all the categories. You can also filter the categories by department.
   */
  getCategories({ department } = {}) {
    const { error } = CatalogValidator.getCategories().validate(
      { department },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["department"] = department;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/categories/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a brand. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/brands/.
   * @returns {Promise<CategoryMetaResponse>} - Success response
   * @summary: Get metadata of a category
   * @description: Fetch metadata of a category such as name, information, logo, banner, etc.
   */
  getCategoryDetailBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getCategoryDetailBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/categories/${slug}/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.sortOn] - The order in which the list of products
   *   should be sorted, e.g. popularity, price, latest and discount, in
   *   either ascending or descending order.* @param {string} [arg.pageId] -
   *   Page ID to retrieve next set of results.* @param {number}
   *   [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<HomeListingResponse>} - Success response
   * @summary: List the products
   * @description: List all the products associated with a brand, collection or category in a random order.
   */
  getHomeProducts({ sortOn, pageId, pageSize } = {}) {
    const { error } = CatalogValidator.getHomeProducts().validate(
      { sortOn, pageId, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["sort_on"] = sortOn;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/home/listing/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.sortOn] - The order in which the list of products
   *   should be sorted, e.g. popularity, price, latest and discount, in
   *   either ascending or descending order.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: List the products
   * @description: List all the products associated with a brand, collection or category in a random order.
   */
  getHomeProductsPaginator({ sortOn, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getHomeProducts({
        sortOn: sortOn,
        pageId: pageId,
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
   * @param {Object} arg - Arg object.
   * @returns {Promise<DepartmentResponse>} - Success response
   * @summary: List all the departments
   * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
   */
  getDepartments({} = {}) {
    const { error } = CatalogValidator.getDepartments().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/departments/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.q - The search query for entering partial or full
   *   name of a product, brand or category. For example, if the given search
   *   query `q` is *ski*, the relevant search suggestions could be *skirt*,
   *   *ski shoes*, _*skin cream* etc.
   * @returns {Promise<AutoCompleteResponse>} - Success response
   * @summary: Get relevant suggestions for a search query
   * @description: Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that's generated on the basis of query. This is particularly useful to enhance the user experience while using the search tool.
   */
  getSearchResults({ q } = {}) {
    const { error } = CatalogValidator.getSearchResults().validate(
      { q },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["q"] = q;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/auto-complete/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results.* @param {number} [arg.pageSize] - The number of
   *   items to retrieve in each page.
   * @returns {Promise<GetCollectionListingResponse>} - Success response
   * @summary: List all the collections
   * @description: Collections are a great way to organize your products and can improve the ability for customers to find items quickly and efficiently.
   */
  getCollections({ pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getCollections().validate(
      { pageNo, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/collections/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: List all the collections
   * @description: Collections are a great way to organize your products and can improve the ability for customers to find items quickly and efficiently.
   */
  getCollectionsPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getCollections({
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a collection. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/collections/.* @param {string}
   *   [arg.f] - The search filter parameters. Filter parameters will be
   *   passed in f parameter as shown in the example below. Double Pipe (||)
   *   denotes the OR condition, whereas Triple-colon (:::) indicates a new
   *   filter paramater applied as an AND condition.* @param {boolean}
   *   [arg.filters] - This is a boolean value, True for fetching all filter
   *   parameters and False for disabling the filter parameters.* @param
   *   {string} [arg.sortOn] - The order in which the list of products should
   *   be sorted, e.g. popularity, price, latest and discount, in either
   *   ascending or descending order. See the supported values below.* @param
   *   {string} [arg.pageId] - Page ID to retrieve next set of results.*
   *   @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<ProductListingResponse>} - Success response
   * @summary: Get the items in a collection
   * @description: Get items in a collection specified by its `slug`.
   */
  getCollectionItemsBySlug({
    slug,
    f,
    filters,
    sortOn,
    pageId,
    pageSize,
  } = {}) {
    const { error } = CatalogValidator.getCollectionItemsBySlug().validate(
      { slug, f, filters, sortOn, pageId, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["f"] = f;
    query["filters"] = filters;
    query["sort_on"] = sortOn;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/collections/${slug}/items/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a collection. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/collections/.
   * @param {string} [arg.f] - The search filter parameters. Filter parameters
   *   will be passed in f parameter as shown in the example below. Double
   *   Pipe (||) denotes the OR condition, whereas Triple-colon (:::)
   *   indicates a new filter paramater applied as an AND condition.
   * @param {boolean} [arg.filters] - This is a boolean value, True for
   *   fetching all filter parameters and False for disabling the filter parameters.
   * @param {string} [arg.sortOn] - The order in which the list of products
   *   should be sorted, e.g. popularity, price, latest and discount, in
   *   either ascending or descending order. See the supported values below.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get the items in a collection
   * @description: Get items in a collection specified by its `slug`.
   */
  getCollectionItemsBySlugPaginator({
    slug,
    f,
    filters,
    sortOn,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getCollectionItemsBySlug({
        slug: slug,
        f: f,
        filters: filters,
        sortOn: sortOn,
        pageId: pageId,
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a collection. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/collections/.
   * @returns {Promise<CollectionDetailResponse>} - Success response
   * @summary: Get a particular collection
   * @description: Get the details of a collection by its `slug`.
   */
  getCollectionDetailBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getCollectionDetailBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/collections/${slug}/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.collectionType - Type of collection followed, i.e.
   *   products, brands, or collections.* @param {string} [arg.pageId] - Page
   *   ID to retrieve next set of results.* @param {number} [arg.pageSize] -
   *   Page ID to retrieve next set of results.
   * @returns {Promise<GetFollowListingResponse>} - Success response
   * @summary: Get a list of followed Products, Brands, Collections
   * @description: Users can follow a product they like. This API retrieves the products the user have followed.
   */
  getFollowedListing({ collectionType, pageId, pageSize } = {}) {
    const { error } = CatalogValidator.getFollowedListing().validate(
      { collectionType, pageId, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/follow/${collectionType}/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.collectionType - Type of collection followed, i.e.
   *   products, brands, or collections.
   * @param {number} [arg.pageSize] - Page ID to retrieve next set of results.
   * @summary: Get a list of followed Products, Brands, Collections
   * @description: Users can follow a product they like. This API retrieves the products the user have followed.
   */
  getFollowedListingPaginator({ collectionType, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getFollowedListing({
        collectionType: collectionType,
        pageId: pageId,
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.collectionType - Type of collection followed, i.e.
   *   products, brands, or collections.* @param {string} arg.collectionId -
   *   The ID of the collection type.
   * @returns {Promise<FollowPostResponse>} - Success response
   * @summary: Follow an entity (product/brand/collection)
   * @description: Follow a particular entity such as product, brand, collection specified by its ID.
   */
  followById({ collectionType, collectionId } = {}) {
    const { error } = CatalogValidator.followById().validate(
      { collectionType, collectionId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/catalog/v1.0/follow/${collectionType}/${collectionId}/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.collectionType - Type of collection followed, i.e.
   *   products, brands, or collections.* @param {string} arg.collectionId -
   *   The ID of the collection type.
   * @returns {Promise<FollowPostResponse>} - Success response
   * @summary: Unfollow an entity (product/brand/collection)
   * @description: You can undo a followed product, brand or collection by its ID. This action is referred as _unfollow_.
   */
  unfollowById({ collectionType, collectionId } = {}) {
    const { error } = CatalogValidator.unfollowById().validate(
      { collectionType, collectionId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/catalog/v1.0/follow/${collectionType}/${collectionId}/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.collectionType - Type of collection, i.e. products,
   *   brands, or collections.* @param {string} arg.collectionId - The ID of
   *   the collection type.
   * @returns {Promise<FollowerCountResponse>} - Success response
   * @summary: Get Follow Count
   * @description: Get the total count of followers for a given collection type and collection ID.
   */
  getFollowerCountById({ collectionType, collectionId } = {}) {
    const { error } = CatalogValidator.getFollowerCountById().validate(
      { collectionType, collectionId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/follow/${collectionType}/${collectionId}/count/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.collectionType] - Type of collection, i.e. products,
   *   brands, collections.
   * @returns {Promise<FollowIdsResponse>} - Success response
   * @summary: Get the IDs of followed products, brands and collections.
   * @description: You can get the IDs of all the followed Products, Brands and Collections. Pass collection_type as query parameter to fetch specific Ids
   */
  getFollowIds({ collectionType } = {}) {
    const { error } = CatalogValidator.getFollowIds().validate(
      { collectionType },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["collection_type"] = collectionType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/follow/ids/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results.* @param {number} [arg.pageSize] - Number of items
   *   to retrieve in each page.* @param {string} [arg.q] - Search a store by
   *   its name or store_code.* @param {number} [arg.range] - Use this to
   *   retrieve stores within a particular range in meters, e.g. 10000, to
   *   indicate a 10km range* @param {number} [arg.latitude] - Latitude of the
   *   location from where one wants to retreive the nearest stores, e.g.
   *   72.8691788* @param {number} [arg.longitude] - Longitude of the location
   *   from where one wants to retreive the nearest stores, e.g. 19.1174114
   * @returns {Promise<StoreListingResponse>} - Success response
   * @summary: Get store meta information.
   * @description: Use this API to get a list of stores in a specific application.
   */
  getStores({ pageNo, pageSize, q, range, latitude, longitude } = {}) {
    const { error } = CatalogValidator.getStores().validate(
      { pageNo, pageSize, q, range, latitude, longitude },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;
    query["q"] = q;
    query["range"] = range;
    query["latitude"] = latitude;
    query["longitude"] = longitude;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/locations/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
   * @param {string} [arg.q] - Search a store by its name or store_code.
   * @param {number} [arg.range] - Use this to retrieve stores within a
   *   particular range in meters, e.g. 10000, to indicate a 10km range
   * @param {number} [arg.latitude] - Latitude of the location from where one
   *   wants to retreive the nearest stores, e.g. 72.8691788
   * @param {number} [arg.longitude] - Longitude of the location from where
   *   one wants to retreive the nearest stores, e.g. 19.1174114
   * @summary: Get store meta information.
   * @description: Use this API to get a list of stores in a specific application.
   */
  getStoresPaginator({ pageSize, q, range, latitude, longitude } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getStores({
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
        range: range,
        latitude: latitude,
        longitude: longitude,
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
}

class Cart {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.uid] - * @param {boolean} [arg.i] - * @param
   *   {boolean} [arg.b] - * @param {number} [arg.assignCardId] -
   * @returns {Promise<CartResponse>} - Success response
   * @summary: Fetch all Items Added to  Cart
   * @description: Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
   */
  getCart({ uid, i, b, assignCardId } = {}) {
    const { error } = CartValidator.getCart().validate(
      { uid, i, b, assignCardId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;
    query["assign_card_id"] = assignCardId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/detail`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.uid] -
   * @returns {Promise<any>} - Success response
   * @summary: Fetch Last-Modified timestamp
   * @description: Fetch Last-Modified timestamp in header metadata
   */
  getCartLastModified({ uid } = {}) {
    const { error } = CartValidator.getCartLastModified().validate(
      { uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "head",
      `/service/application/cart/v1.0/detail`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.i] - * @param {boolean} [arg.b] -
   * @param {AddCartRequest} arg.body
   * @returns {Promise<AddCartResponse>} - Success response
   * @summary: Add Items to Cart
   * @description: <p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>
   */
  addItems({ body, i, b } = {}) {
    const { error } = CartValidator.addItems().validate(
      { body, i, b },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/detail`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.uid] - * @param {boolean} [arg.i] - * @param
   *   {boolean} [arg.b] -
   * @param {UpdateCartRequest} arg.body
   * @returns {Promise<UpdateCartResponse>} - Success response
   * @summary: Update Items already added to Cart
   * @description: Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
   */
  updateCart({ body, uid, i, b } = {}) {
    const { error } = CartValidator.updateCart().validate(
      { body, uid, i, b },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/cart/v1.0/detail`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.uid] - Cart id
   * @returns {Promise<CartItemCountResponse>} - Success response
   * @summary: Cart item count
   * @description: Get total count of item present in cart
   */
  getItemCount({ uid } = {}) {
    const { error } = CartValidator.getItemCount().validate(
      { uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/basic`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.uid] -
   * @returns {Promise<GetCouponResponse>} - Success response
   * @summary: Fetch Coupon
   * @description: Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse
   */
  getCoupons({ uid } = {}) {
    const { error } = CartValidator.getCoupons().validate(
      { uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/coupon`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.i] - * @param {boolean} [arg.b] - * @param
   *   {boolean} [arg.p] - * @param {number} [arg.uid] -
   * @param {ApplyCouponRequest} arg.body
   * @returns {Promise<CartResponse>} - Success response
   * @summary: Apply Coupon
   * @description: <p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
   * </ul>
   */
  applyCoupon({ body, i, b, p, uid } = {}) {
    const { error } = CartValidator.applyCoupon().validate(
      { body, i, b, p, uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["i"] = i;
    query["b"] = b;
    query["p"] = p;
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/coupon`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.uid] - Cart id
   * @returns {Promise<CartResponse>} - Success response
   * @summary: Remove Coupon Applied
   * @description: Remove Coupon applied on the cart by passing uid in request body.
   */
  removeCoupon({ uid } = {}) {
    const { error } = CartValidator.removeCoupon().validate(
      { uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/cart/v1.0/coupon`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.itemId] - Item id* @param {string} [arg.articleId] -
   *   Article mongo id* @param {number} [arg.uid] - Item id* @param {string}
   *   [arg.slug] - Item unique url from product page
   * @returns {Promise<BulkPriceResponse>} - Success response
   * @summary: Get discount offers based on quantity
   * @description: List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
   */
  getBulkDiscountOffers({ itemId, articleId, uid, slug } = {}) {
    const { error } = CartValidator.getBulkDiscountOffers().validate(
      { itemId, articleId, uid, slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["item_id"] = itemId;
    query["article_id"] = articleId;
    query["uid"] = uid;
    query["slug"] = slug;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/bulk-price`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.uid] - * @param {string} [arg.mobileNo] - * @param
   *   {string} [arg.checkoutMode] - * @param {string} [arg.tags] - * @param
   *   {boolean} [arg.isDefault] -
   * @returns {Promise<GetAddressesResponse>} - Success response
   * @summary: Fetch Address
   * @description: Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
   */
  getAddresses({ uid, mobileNo, checkoutMode, tags, isDefault } = {}) {
    const { error } = CartValidator.getAddresses().validate(
      { uid, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["mobile_no"] = mobileNo;
    query["checkout_mode"] = checkoutMode;
    query["tags"] = tags;
    query["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/address`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {Address} arg.body
   * @returns {Promise<SaveAddressResponse>} - Success response
   * @summary: Add Address to the account
   * @description: <p>Add Address to account. See `Address` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
   */
  addAddress({ body } = {}) {
    const { error } = CartValidator.addAddress().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/address`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.id - * @param {number} [arg.uid] - * @param {string}
   *   [arg.mobileNo] - * @param {string} [arg.checkoutMode] - * @param
   *   {string} [arg.tags] - * @param {boolean} [arg.isDefault] -
   * @returns {Promise<Address>} - Success response
   * @summary: Fetch Single Address
   * @description: Get a addresses with the given id. If successful, returns a Address resource in the response body specified in `Address`.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
   */
  getAddressById({ id, uid, mobileNo, checkoutMode, tags, isDefault } = {}) {
    const { error } = CartValidator.getAddressById().validate(
      { id, uid, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["mobile_no"] = mobileNo;
    query["checkout_mode"] = checkoutMode;
    query["tags"] = tags;
    query["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/address/${id}`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.id - Address id
   * @param {Address} arg.body
   * @returns {Promise<UpdateAddressResponse>} - Success response
   * @summary: Update Address alreay added to account
   * @description: Request object containing attributes mentioned in  <font color="blue">Address </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
   */
  updateAddress({ id, body } = {}) {
    const { error } = CartValidator.updateAddress().validate(
      { id, body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/cart/v1.0/address/${id}`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.id - Address id
   * @returns {Promise<DeleteAddressResponse>} - Success response
   * @summary: Remove Address Associated to the account
   * @description: Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully
   */
  removeAddress({ id } = {}) {
    const { error } = CartValidator.removeAddress().validate(
      { id },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/cart/v1.0/address/${id}`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.uid] - * @param {boolean} [arg.i] - * @param
   *   {boolean} [arg.b] -
   * @param {SelectCartAddressRequest} arg.body
   * @returns {Promise<CartResponse>} - Success response
   * @summary: Select Address from All Addresses
   * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>
   */
  selectAddress({ body, uid, i, b } = {}) {
    const { error } = CartValidator.selectAddress().validate(
      { body, uid, i, b },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/select-address`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.uid] -
   * @param {UpdateCartPaymentRequest} arg.body
   * @returns {Promise<CartResponse>} - Success response
   * @summary: Update Cart Payment
   * @description: Update Cart Payment for Your Account
   */
  selectPaymentMode({ body, uid } = {}) {
    const { error } = CartValidator.selectPaymentMode().validate(
      { body, uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/cart/v1.0/payment`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.uid] - * @param {string} [arg.addressId] - * @param
   *   {string} [arg.paymentMode] - * @param {string} [arg.paymentIdentifier]
   *   - * @param {string} [arg.aggregatorName] - * @param {string}
   *   [arg.merchantCode] -
   * @returns {Promise<PaymentCouponValidate>} - Success response
   * @summary: Get Cart Payment for valid coupon
   * @description: Validate coupon for selected payment mode
   */
  validateCouponForPayment({
    uid,
    addressId,
    paymentMode,
    paymentIdentifier,
    aggregatorName,
    merchantCode,
  } = {}) {
    const { error } = CartValidator.validateCouponForPayment().validate(
      {
        uid,
        addressId,
        paymentMode,
        paymentIdentifier,
        aggregatorName,
        merchantCode,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["payment_mode"] = paymentMode;
    query["payment_identifier"] = paymentIdentifier;
    query["aggregator_name"] = aggregatorName;
    query["merchant_code"] = merchantCode;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/payment/validate/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.p] - Get payment options or not* @param {number}
   *   [arg.uid] - Cart id* @param {number} [arg.addressId] - Address id*
   *   @param {string} [arg.areaCode] - Destination pincode.
   * @returns {Promise<CartShipmentsResponse>} - Success response
   * @summary: Get delivery date and options before checkout
   * @description: Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
   */
  getShipments({ p, uid, addressId, areaCode } = {}) {
    const { error } = CartValidator.getShipments().validate(
      { p, uid, addressId, areaCode },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["p"] = p;
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["area_code"] = areaCode;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/shipment`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CartCheckoutRequest} arg.body
   * @returns {Promise<CartCheckoutResponse>} - Success response
   * @summary: Checkout Cart
   * @description: Checkout all items in cart to payment and order generation.                         For COD only order will be generated while for other checkout mode                         user will be redirected to payment gateway
   */
  checkoutCart({ body } = {}) {
    const { error } = CartValidator.checkoutCart().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/checkout`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.uid] - Cart id received in get cart.
   * @param {CartMetaRequest} arg.body
   * @returns {Promise<CartMetaResponse>} - Success response
   * @summary: Update Cart Meta
   * @description: Update cart meta like checkout_mode, gstin.
   */
  updateCartMeta({ body, uid } = {}) {
    const { error } = CartValidator.updateCartMeta().validate(
      { body, uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/cart/v1.0/meta`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetShareCartLinkRequest} arg.body
   * @returns {Promise<GetShareCartLinkResponse>} - Success response
   * @summary: Generate Cart sharing link token
   * @description: Generates shared cart snapshot and returns shortlink token
   */
  getCartShareLink({ body } = {}) {
    const { error } = CartValidator.getCartShareLink().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/share-cart`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.token - Shared short link token.
   * @returns {Promise<SharedCartResponse>} - Success response
   * @summary: Get shared cart snapshot and cart response
   * @description: Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
   */
  getCartSharedItems({ token } = {}) {
    const { error } = CartValidator.getCartSharedItems().validate(
      { token },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/share-cart/${token}`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.token - Shared short link token.* @param {string}
   *   arg.action - Operation to perform on existing cart, whether to merge or replace.
   * @returns {Promise<SharedCartResponse>} - Success response
   * @summary: Merge or Replace existing cart
   * @description: Merge or Replace cart based on `action` parameter with shared cart of `token`
   */
  updateCartWithSharedItems({ token, action } = {}) {
    const { error } = CartValidator.updateCartWithSharedItems().validate(
      { token, action },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/share-cart/${token}/${action}`,
      query,
      undefined
    );
  }
}

class Lead {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID of ticket to be retrieved
   * @returns {Promise<Ticket>} - Success response
   * @summary: Get Ticket with the specific id
   * @description: Get Ticket with the specific id, this is used to view the ticket details
   */
  getTicket({ id } = {}) {
    const { error } = LeadValidator.getTicket().validate(
      { id },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/lead/v1.0/ticket/${id}`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.ticketId - Ticket ID for which history is created
   * @param {TicketHistoryPayload} arg.body
   * @returns {Promise<TicketHistory>} - Success response
   * @summary: Create history for specific Ticket
   * @description: Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating.
   */
  createHistory({ ticketId, body } = {}) {
    const { error } = LeadValidator.createHistory().validate(
      { ticketId, body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/lead/v1.0/ticket/${ticketId}/history`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AddTicketPayload} arg.body
   * @returns {Promise<Ticket>} - Success response
   * @summary: Create Ticket
   * @description: This is used to Create Ticket.
   */
  createTicket({ body } = {}) {
    const { error } = LeadValidator.createTicket().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/lead/v1.0/ticket/`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - Slug of form whose response is getting submitted
   * @returns {Promise<CustomForm>} - Success response
   * @summary: Get specific Custom Form using it's slug
   * @description: Get specific Custom Form using it's slug, this is used to view the form.
   */
  getCustomForm({ slug } = {}) {
    const { error } = LeadValidator.getCustomForm().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/lead/v1.0/form/${slug}`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - Slug of form whose response is getting submitted
   * @param {CustomFormSubmissionPayload} arg.body
   * @returns {Promise<SubmitCustomFormResponse>} - Success response
   * @summary: Submit Response for a specific Custom Form using it's slug
   * @description: Submit Response for a specific Custom Form using it's slug, this response is then used to create a ticket on behalf of the user.
   */
  submitCustomForm({ slug, body } = {}) {
    const { error } = LeadValidator.submitCustomForm().validate(
      { slug, body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/lead/v1.0/form/${slug}/submit`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.uniqueName - Unique name of Video Room
   * @returns {Promise<GetParticipantsInsideVideoRoomResponse>} - Success response
   * @summary: Get participants of a specific Video Room using it's unique name
   * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
   */
  getParticipantsInsideVideoRoom({ uniqueName } = {}) {
    const { error } = LeadValidator.getParticipantsInsideVideoRoom().validate(
      { uniqueName },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/lead/v1.0/video/room/${uniqueName}/participants`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.uniqueName - Unique name of Video Room
   * @returns {Promise<GetTokenForVideoRoomResponse>} - Success response
   * @summary: Get Token to join a specific Video Room using it's unqiue name
   * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
   */
  getTokenForVideoRoom({ uniqueName } = {}) {
    const { error } = LeadValidator.getTokenForVideoRoom().validate(
      { uniqueName },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/lead/v1.0/video/room/${uniqueName}/token`,
      query,
      undefined
    );
  }
}

class Theme {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<ThemesSchema>} - Success response
   * @summary: Get the theme currently applied to an application
   * @description: An application has multiple themes, but only one theme can be applied at a time. Use this API to retrieve the theme currently applied to the application.
   */
  getAppliedTheme({} = {}) {
    const { error } = ThemeValidator.getAppliedTheme().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/theme/v1.0/applied-theme`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID of the theme to be retrieved
   * @returns {Promise<ThemesSchema>} - Success response
   * @summary: Get a theme for a preview
   * @description: A theme can be previewed before applying it. Use this API to retrieve the preview of a theme by its ID.
   */
  getThemeForPreview({ themeId } = {}) {
    const { error } = ThemeValidator.getThemeForPreview().validate(
      { themeId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/theme/v1.0/${themeId}/preview`,
      query,
      undefined
    );
  }
}

class User {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {OAuthRequestSchema} arg.body
   * @returns {Promise<AuthSuccess>} - Success response
   * @summary: Login or Register using Facebook
   * @description: Use this API to login or register using Facebook credentials.
   */
  loginWithFacebook({ body } = {}) {
    const { error } = UserValidator.loginWithFacebook().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/facebook-token`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {OAuthRequestSchema} arg.body
   * @returns {Promise<AuthSuccess>} - Success response
   * @summary: Login or Register using Google
   * @description: Use this API to login or register using Google Account credentials.
   */
  loginWithGoogle({ body } = {}) {
    const { error } = UserValidator.loginWithGoogle().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/google-token`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {OAuthRequestSchema} arg.body
   * @returns {Promise<AuthSuccess>} - Success response
   * @summary: Login or Register using Google on Android
   * @description: Use this API to login or register in Android app using Google Account credentials.
   */
  loginWithGoogleAndroid({ body } = {}) {
    const { error } = UserValidator.loginWithGoogleAndroid().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/google-android`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {OAuthRequestSchema} arg.body
   * @returns {Promise<AuthSuccess>} - Success response
   * @summary: Login or Register using Google on iOS
   * @description: Use this API to login or register in iOS app using Google Account credentials.
   */
  loginWithGoogleIOS({ body } = {}) {
    const { error } = UserValidator.loginWithGoogleIOS().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/google-ios`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {SendOtpRequestSchema} arg.body
   * @returns {Promise<SendOtpResponse>} - Success response
   * @summary: Login or Register with OTP
   * @description: Use this API to login or register with a One-time Password (OTP) sent via Email or SMS.
   */
  loginWithOTP({ body, platform } = {}) {
    const { error } = UserValidator.loginWithOTP().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/otp`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PasswordLoginRequestSchema} arg.body
   * @returns {Promise<LoginSuccess>} - Success response
   * @summary: Login or Register with password
   * @description: Use this API to login or register using an email address and password.
   */
  loginWithEmailAndPassword({ body } = {}) {
    const { error } = UserValidator.loginWithEmailAndPassword().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/password`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {SendResetPasswordEmailRequestSchema} arg.body
   * @returns {Promise<ResetPasswordSuccess>} - Success response
   * @summary: Reset Password
   * @description: Use this API to reset a password using the link sent on email.
   */
  sendResetPasswordEmail({ body, platform } = {}) {
    const { error } = UserValidator.sendResetPasswordEmail().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/password/reset`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ForgotPasswordRequestSchema} arg.body
   * @returns {Promise<LoginSuccess>} - Success response
   * @summary: Forgot Password
   * @description: Use this API to reset a password using the code sent on email or SMS.
   */
  forgotPassword({ body } = {}) {
    const { error } = UserValidator.forgotPassword().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/password/reset/forgot`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CodeRequestBodySchema} arg.body
   * @returns {Promise<ResetPasswordSuccess>} - Success response
   * @summary: Reset Password using token
   * @description: Use this API to send code to reset password.
   */
  sendResetToken({ body } = {}) {
    const { error } = UserValidator.sendResetToken().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/password/reset/token`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {TokenRequestBodySchema} arg.body
   * @returns {Promise<LoginSuccess>} - Success response
   * @summary: Login or Register with token
   * @description: Use this API to login or register using a token for authentication.
   */
  loginWithToken({ body } = {}) {
    const { error } = UserValidator.loginWithToken().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/login/token`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {FormRegisterRequestSchema} arg.body
   * @returns {Promise<RegisterFormSuccess>} - Success response
   * @summary: Registration using a form
   * @description: Use this API to perform user registration by sending form data in the request body.
   */
  registerWithForm({ body, platform } = {}) {
    const { error } = UserValidator.registerWithForm().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/register/form`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CodeRequestBodySchema} arg.body
   * @returns {Promise<VerifyEmailSuccess>} - Success response
   * @summary: Verify email
   * @description: Use this API to send a verification code to verify an email.
   */
  verifyEmail({ body } = {}) {
    const { error } = UserValidator.verifyEmail().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/verify/email`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CodeRequestBodySchema} arg.body
   * @returns {Promise<VerifyEmailSuccess>} - Success response
   * @summary: Verify mobile
   * @description: Use this API to send a verification code to verify a mobile number.
   */
  verifyMobile({ body } = {}) {
    const { error } = UserValidator.verifyMobile().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/verify/mobile`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<HasPasswordSuccess>} - Success response
   * @summary: Check password
   * @description: Use this API to check if user has created a password for login.
   */
  hasPassword({} = {}) {
    const { error } = UserValidator.hasPassword().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/authentication/v1.0/has-password`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdatePasswordRequestSchema} arg.body
   * @returns {Promise<VerifyEmailSuccess>} - Success response
   * @summary: Update user password
   * @description: Use this API to update the password.
   */
  updatePassword({ body } = {}) {
    const { error } = UserValidator.updatePassword().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/password`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<LogoutSuccess>} - Success response
   * @summary: Logs out currently logged in user
   * @description: Use this API to check to logout a user from the app.
   */
  logout({} = {}) {
    const { error } = UserValidator.logout().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/authentication/v1.0/logout`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {SendMobileOtpRequestSchema} arg.body
   * @returns {Promise<OtpSuccess>} - Success response
   * @summary: Send OTP on mobile
   * @description: Use this API to send an OTP to a mobile number.
   */
  sendOTPOnMobile({ body, platform } = {}) {
    const { error } = UserValidator.sendOTPOnMobile().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/otp/mobile/send`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {VerifyOtpRequestSchema} arg.body
   * @returns {Promise<VerifyOtpSuccess>} - Success response
   * @summary: Verify OTP on mobile
   * @description: Use this API to verify the OTP received on a mobile number.
   */
  verifyMobileOTP({ body, platform } = {}) {
    const { error } = UserValidator.verifyMobileOTP().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/otp/mobile/verify`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {SendEmailOtpRequestSchema} arg.body
   * @returns {Promise<EmailOtpSuccess>} - Success response
   * @summary: Send OTP on email
   * @description: Use this API to send an OTP to an email ID.
   */
  sendOTPOnEmail({ body, platform } = {}) {
    const { error } = UserValidator.sendOTPOnEmail().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/otp/email/send`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {VerifyEmailOtpRequestSchema} arg.body
   * @returns {Promise<VerifyOtpSuccess>} - Success response
   * @summary: Verify OTP on email
   * @description: Use this API to verify the OTP received on an email ID.
   */
  verifyEmailOTP({ body, platform } = {}) {
    const { error } = UserValidator.verifyEmailOTP().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/authentication/v1.0/otp/email/verify`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<UserObjectSchema>} - Success response
   * @summary: Get logged in user
   * @description: Use this API  to get the details of a logged in user.
   */
  getLoggedInUser({} = {}) {
    const { error } = UserValidator.getLoggedInUser().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/authentication/v1.0/session`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<SessionListSuccess>} - Success response
   * @summary: Get list of sessions
   * @description: Use this API to retrieve all active sessions of a user.
   */
  getListOfActiveSessions({} = {}) {
    const { error } = UserValidator.getListOfActiveSessions().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/authentication/v1.0/sessions`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.name] - Name of the application, e.g. Fynd
   * @returns {Promise<PlatformSchema>} - Success response
   * @summary: Get platform configurations
   * @description: Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.
   */
  getPlatformConfig({ name } = {}) {
    const { error } = UserValidator.getPlatformConfig().validate(
      { name },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["name"] = name;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/user/platform/v1.0/config`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {EditProfileRequestSchema} arg.body
   * @returns {Promise<ProfileEditSuccess>} - Success response
   * @summary: Edit Profile Details
   * @description: Use this API to update details in the user profile. Details can be first name, last name, gender, email, phone number, or profile picture.
   */
  updateProfile({ body, platform } = {}) {
    const { error } = UserValidator.updateProfile().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/detail`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {EditMobileRequestSchema} arg.body
   * @returns {Promise<VerifyMobileOTPSuccess>} - Success response
   * @summary: Add mobile number to profile
   * @description: Use this API to add a new mobile number to a profile.
   */
  addMobileNumber({ body, platform } = {}) {
    const { error } = UserValidator.addMobileNumber().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/user/profile/v1.0/mobile`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application* @param {boolean}
   *   arg.active - This is a boolean value to check if mobile number is
   *   active 1.True - Number is active 2. False - Number is inactive* @param
   *   {boolean} arg.primary - This is a boolean value to check if mobile
   *   number is primary number (main number) 1. True - Number is primary 2.
   *   False - Number is not primary* @param {boolean} arg.verified - This is
   *   a boolean value to check if mobile number is verified 1. True - Number
   *   is verified 2.False - Number is not verified yet* @param {string}
   *   arg.countryCode - Country code of the phone number, e.g. 91* @param
   *   {string} arg.phone - Phone number
   * @returns {Promise<LoginSuccess>} - Success response
   * @summary: Delete mobile number from profile
   * @description: Use this API to delete a mobile number from a profile.
   */
  deleteMobileNumber({
    active,
    primary,
    verified,
    countryCode,
    phone,
    platform,
  } = {}) {
    const { error } = UserValidator.deleteMobileNumber().validate(
      { active, primary, verified, countryCode, phone, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;
    query["active"] = active;
    query["primary"] = primary;
    query["verified"] = verified;
    query["country_code"] = countryCode;
    query["phone"] = phone;

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/user/profile/v1.0/mobile`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {SendVerificationLinkMobileRequestSchema} arg.body
   * @returns {Promise<LoginSuccess>} - Success response
   * @summary: Set mobile as primary
   * @description: Use this API to set a mobile number as primary. Primary number is a verified number used for all future communications.
   */
  setMobileNumberAsPrimary({ body } = {}) {
    const { error } = UserValidator.setMobileNumberAsPrimary().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/mobile/primary`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {SendVerificationLinkMobileRequestSchema} arg.body
   * @returns {Promise<SendMobileVerifyLinkSuccess>} - Success response
   * @summary: Send verification link to mobile
   * @description: Use this API to send a verification link to a mobile number
   */
  sendVerificationLinkToMobile({ body, platform } = {}) {
    const { error } = UserValidator.sendVerificationLinkToMobile().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/mobile/link/send`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {EditEmailRequestSchema} arg.body
   * @returns {Promise<VerifyEmailOTPSuccess>} - Success response
   * @summary: Add email to profile
   * @description: Use this API to add a new email address to a profile
   */
  addEmail({ body, platform } = {}) {
    const { error } = UserValidator.addEmail().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/user/profile/v1.0/email`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application* @param {boolean}
   *   arg.active - This is a boolean value to check if email ID is active 1.
   *   True - Email ID is active 2.False - Email ID is inactive* @param
   *   {boolean} arg.primary - This is a boolean value to check if email ID is
   *   primary (main email ID) 1. True - Email ID is primary 2.False - Email
   *   ID is not primary* @param {boolean} arg.verified - This is a boolean
   *   value to check if email ID is verified 1. True - Email ID is verified
   *   2.False - Email ID is not verified yet* @param {string} arg.email - The
   *   email ID to delete
   * @returns {Promise<LoginSuccess>} - Success response
   * @summary: Delete email from profile
   * @description: Use this API to delete an email address from a profile
   */
  deleteEmail({ active, primary, verified, email, platform } = {}) {
    const { error } = UserValidator.deleteEmail().validate(
      { active, primary, verified, email, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;
    query["active"] = active;
    query["primary"] = primary;
    query["verified"] = verified;
    query["email"] = email;

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/user/profile/v1.0/email`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {EditEmailRequestSchema} arg.body
   * @returns {Promise<LoginSuccess>} - Success response
   * @summary: Set email as primary
   * @description: Use this API to set an email address as primary. Primary email ID is a email address used for all future communications.
   */
  setEmailAsPrimary({ body } = {}) {
    const { error } = UserValidator.setEmailAsPrimary().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/email/primary`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.platform] - ID of the application
   * @param {EditEmailRequestSchema} arg.body
   * @returns {Promise<SendEmailVerifyLinkSuccess>} - Success response
   * @summary: Send verification link to email
   * @description: Use this API to send verification link to an email address.
   */
  sendVerificationLinkToEmail({ body, platform } = {}) {
    const { error } = UserValidator.sendVerificationLinkToEmail().validate(
      { body, platform },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["platform"] = platform;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/user/profile/v1.0/email/link/send`,
      query,
      body
    );
  }
}

class Content {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<AnnouncementsResponseSchema>} - Success response
   * @summary: Get live announcements
   * @description: Get live announcements for each or all pages with page slug of page and end date schedule.
   */
  getAnnouncements({} = {}) {
    const { error } = ContentValidator.getAnnouncements().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/announcements`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - The `slug` of a blog. Use this parameter to
   *   retrieve a particular blog* @param {string} [arg.rootId] -
   * @returns {Promise<CustomBlogSchema>} - Success response
   * @summary: Get Blog by slug
   * @description: Use this API to fetch a blog using `slug`
   */
  getBlog({ slug, rootId } = {}) {
    const { error } = ContentValidator.getBlog().validate(
      { slug, rootId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["root_id"] = rootId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/blogs/${slug}`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Each response will contain **page_no**
   *   param, which should be sent back to make pagination work.* @param
   *   {number} [arg.pageSize] - Number of items to retrieve in each page.
   * @returns {Promise<BlogGetResponse>} - Success response
   * @summary: Get blogs
   * @description: Use this to get blogs.
   */
  getBlogs({ pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getBlogs().validate(
      { pageNo, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/blogs/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
   * @summary: Get blogs
   * @description: Use this to get blogs.
   */
  getBlogsPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getBlogs({
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
   * @param {Object} arg - Arg object.
   * @returns {Promise<FaqResponseSchema>} - Success response
   * @summary: Get frequently asked questions
   * @description: Get frequently asked questions list. These will be helpful for users to using website.
   */
  getFaqs({} = {}) {
    const { error } = ContentValidator.getFaqs().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/faq`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<GetFaqCategoriesSchema>} - Success response
   * @summary: Get FAQ categories list
   * @description: Get list of FAQ categories
   */
  getFaqCategories({} = {}) {
    const { error } = ContentValidator.getFaqCategories().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/faq/categories`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - Slug of FAQ
   * @returns {Promise<FaqSchema>} - Success response
   * @summary: Get frequently asked question
   * @description: Get frequently asked questions list. These will be helpful for users to using website.
   */
  getFaqBySlug({ slug } = {}) {
    const { error } = ContentValidator.getFaqBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/faq/${slug}`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - Slug of FAQ Category
   * @returns {Promise<GetFaqCategoryBySlugSchema>} - Success response
   * @summary: Get FAQ category by slug
   * @description: Get FAQ category by slug
   */
  getFaqCategoryBySlug({ slug } = {}) {
    const { error } = ContentValidator.getFaqCategoryBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/faq/category/${slug}`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - Faq category slug
   * @returns {Promise<GetFaqSchema>} - Success response
   * @summary: Get FAQs of a Faq Category slug
   * @description: Get FAQs of a Faq Category `slug`
   */
  getFaqsByCategorySlug({ slug } = {}) {
    const { error } = ContentValidator.getFaqsByCategorySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/faq/category/${slug}/faqs`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<LandingPageSchema>} - Success response
   * @summary: Get landing page
   * @description: Use this API to fetch a landing page
   */
  getLandingPage({} = {}) {
    const { error } = ContentValidator.getLandingPage().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/landing-page`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<ApplicationLegal>} - Success response
   * @summary: Get legal information
   * @description: Get legal information of application, which includes policy, Terms and Conditions, and FAQ information of application.
   */
  getLegalInformation({} = {}) {
    const { error } = ContentValidator.getLegalInformation().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/legal`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Each response will contain **page_no**
   *   param, which should be sent back to make pagination work.* @param
   *   {number} [arg.pageSize] - Number of items to retrieve in each page.
   * @returns {Promise<NavigationGetResponse>} - Success response
   * @summary: Get navigation
   * @description: Use this API to fetch navigations
   */
  getNavigations({ pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getNavigations().validate(
      { pageNo, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/navigations/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
   * @summary: Get navigation
   * @description: Use this API to fetch navigations
   */
  getNavigationsPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getNavigations({
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - The `slug` of a page. Use this parameter to
   *   retrieve a particular page* @param {string} [arg.rootId] -
   * @returns {Promise<CustomPageSchema>} - Success response
   * @summary: Get Page by slug
   * @description: Use this API to fetch a custom page using `slug`
   */
  getPage({ slug, rootId } = {}) {
    const { error } = ContentValidator.getPage().validate(
      { slug, rootId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["root_id"] = rootId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/pages/${slug}`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Each response will contain **page_no**
   *   param, which should be sent back to make pagination work.* @param
   *   {number} [arg.pageSize] - Number of items to retrieve in each page.
   * @returns {Promise<PageGetResponse>} - Success response
   * @summary: Get pages
   * @description: Use this to get pages.
   */
  getPages({ pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getPages().validate(
      { pageNo, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/pages/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
   * @summary: Get pages
   * @description: Use this to get pages.
   */
  getPagesPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getPages({
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
   * @param {Object} arg - Arg object.
   * @returns {Promise<SeoComponent>} - Success response
   * @summary: Get seo of application
   * @description: Get seo of application
   */
  getSEOConfiguration({} = {}) {
    const { error } = ContentValidator.getSEOConfiguration().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/seo`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Each response will contain **page_no**
   *   param, which should be sent back to make pagination work.* @param
   *   {number} [arg.pageSize] - Number of items to retrieve in each page.
   * @returns {Promise<SlideshowGetResponse>} - Success response
   * @summary: Get slideshows
   * @description: Use this to get slideshows.
   */
  getSlideshows({ pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getSlideshows().validate(
      { pageNo, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/slideshow/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
   * @summary: Get slideshows
   * @description: Use this to get slideshows.
   */
  getSlideshowsPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getSlideshows({
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - The `slug` of a slideshow. Use this parameter
   *   to retrieve a particular slideshow
   * @returns {Promise<SlideshowSchema>} - Success response
   * @summary: Get slideshow by slug
   * @description: Use this API to fetch a slideshow using `slug`
   */
  getSlideshow({ slug } = {}) {
    const { error } = ContentValidator.getSlideshow().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/slideshow/${slug}`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<Support>} - Success response
   * @summary: Get support information
   * @description: Get contact details for customer support. Including emails and phone numbers
   */
  getSupportInformation({} = {}) {
    const { error } = ContentValidator.getSupportInformation().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/support`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<TagsSchema>} - Success response
   * @summary: Get Tags for application
   * @description:
   */
  getTags({} = {}) {
    const { error } = ContentValidator.getTags().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/content/v1.0/tags`,
      query,
      undefined
    );
  }
}

class Communication {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<CommunicationConsent>} - Success response
   * @summary: Get communication consent
   * @description: Get communication consent
   */
  getCommunicationConsent({} = {}) {
    const { error } = CommunicationValidator.getCommunicationConsent().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/communication/v1.0/consent`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CommunicationConsentReq} arg.body
   * @returns {Promise<CommunicationConsentRes>} - Success response
   * @summary: Upsert communication consent
   * @description: Upsert communication consent
   */
  upsertCommunicationConsent({ body } = {}) {
    const {
      error,
    } = CommunicationValidator.upsertCommunicationConsent().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/communication/v1.0/consent`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PushtokenReq} arg.body
   * @returns {Promise<PushtokenRes>} - Success response
   * @summary: Upsert push token of a user
   * @description: Upsert push token of a user
   */
  upsertAppPushtoken({ body } = {}) {
    const { error } = CommunicationValidator.upsertAppPushtoken().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/communication/v1.0/pn-token`,
      query,
      body
    );
  }
}

class Share {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<QRCodeResp>} - Success response
   * @summary: Create application QR Code
   * @description: Create application QR Code
   */
  getApplicationQRCode({} = {}) {
    const { error } = ShareValidator.getApplicationQRCode().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/qr/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - The unique identifier of a product
   * @returns {Promise<QRCodeResp>} - Success response
   * @summary: Create product QR Code
   * @description: Create product QR Code
   */
  getProductQRCodeBySlug({ slug } = {}) {
    const { error } = ShareValidator.getProductQRCodeBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/qr/products/${slug}/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - The unique identifier of a collection
   * @returns {Promise<QRCodeResp>} - Success response
   * @summary: Create collection QR Code
   * @description: Create collection QR Code
   */
  getCollectionQRCodeBySlug({ slug } = {}) {
    const { error } = ShareValidator.getCollectionQRCodeBySlug().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/qr/collection/${slug}/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.url - Url
   * @returns {Promise<QRCodeResp>} - Success response
   * @summary: Create url QR Code
   * @description: Create url QR Code
   */
  getUrlQRCode({ url } = {}) {
    const { error } = ShareValidator.getUrlQRCode().validate(
      { url },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["url"] = url;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/qr/url/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ShortLinkReq} arg.body
   * @returns {Promise<ShortLinkRes>} - Success response
   * @summary: Create short link
   * @description: Create short link
   */
  createShortLink({ body } = {}) {
    const { error } = ShareValidator.createShortLink().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/share/v1.0/links/short-link/`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.hash - Hash of short link
   * @returns {Promise<ShortLinkRes>} - Success response
   * @summary: Get short link by hash
   * @description: Get short link by hash
   */
  getShortLinkByHash({ hash } = {}) {
    const { error } = ShareValidator.getShortLinkByHash().validate(
      { hash },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/share/v1.0/links/short-link/${hash}/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.hash - Hash of short link
   * @returns {Promise<ShortLinkRes>} - Success response
   * @summary: Get original link by hash
   * @description: Get original link by hash
   */
  getOriginalShortLinkByHash({ hash } = {}) {
    const { error } = ShareValidator.getOriginalShortLinkByHash().validate(
      { hash },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/share/v1.0/links/short-link/${hash}/original/`,
      query,
      undefined
    );
  }
}

class FileStorage {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.namespace - Bucket name
   * @param {StartRequest} arg.body
   * @returns {Promise<StartResponse>} - Success response
   * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
   * @description: Uploads an arbitrarily sized buffer or blob.
   *
   * It has three Major Steps:
   * Start
   * Upload
   * Complete
   *
   * ### Start
   * Initiates the assets upload using `startUpload`.
   * It returns the storage link in response.
   *
   * ### Upload
   * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
   * Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.
   *
   * ### Complete
   * After successfully upload, call `completeUpload` api to complete the upload process.
   * This operation will return the url for the uploaded file.
   */
  startUpload({ namespace, body } = {}) {
    const { error } = FileStorageValidator.startUpload().validate(
      { namespace, body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/assets/v1.0/namespaces/${namespace}/upload/start/`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.namespace - Bucket name
   * @param {StartResponse} arg.body
   * @returns {Promise<CompleteResponse>} - Success response
   * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
   * @description: Uploads an arbitrarily sized buffer or blob.
   *
   * It has three Major Steps:
   * Start
   * Upload
   * Complete
   *
   * ### Start
   * Initiates the assets upload using `startUpload`.
   * It returns the storage link in response.
   *
   * ### Upload
   * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
   * Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.
   *
   * ### Complete
   * After successfully upload, call `completeUpload` api to complete the upload process.
   * This operation will return the url for the uploaded file.
   */
  completeUpload({ namespace, body } = {}) {
    const { error } = FileStorageValidator.completeUpload().validate(
      { namespace, body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/assets/v1.0/namespaces/${namespace}/upload/complete/`,
      query,
      body
    );
  }
}

class Configuration {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<Application>} - Success response
   * @summary: Get current application details
   * @description: Get current application details.
   */
  getApplication({} = {}) {
    const { error } = ConfigurationValidator.getApplication().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/application`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<ApplicationAboutResponse>} - Success response
   * @summary: Get application, owner and seller information
   * @description: Get application information with owner and seller basic details
   */
  getOwnerInfo({} = {}) {
    const { error } = ConfigurationValidator.getOwnerInfo().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/about`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<ApplicationDetail>} - Success response
   * @summary: Get basic application details
   * @description: Get basic application details like name
   */
  getBasicDetails({} = {}) {
    const { error } = ConfigurationValidator.getBasicDetails().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/detail`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<TokenResponse>} - Success response
   * @summary: Get integration tokens
   * @description: Get tokens for multiple integrations like Facebook, Googlemaps, Segment, Firebase, etc. Note: token values are encrypted with AES encryption using secret key. Kindly reach to developers for secret key.
   */
  getIntegrationTokens({} = {}) {
    const { error } = ConfigurationValidator.getIntegrationTokens().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/token`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no* @param {number}
   *   [arg.pageSize] - Current request items count* @param {string} [arg.q] -
   *   Search ordering store by name or store code
   * @returns {Promise<OrderingStores>} - Success response
   * @summary: Get deployment meta stores
   * @description: Get deployment meta stores.
   */
  getOrderingStores({ pageNo, pageSize, q } = {}) {
    const { error } = ConfigurationValidator.getOrderingStores().validate(
      { pageNo, pageSize, q },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;
    query["q"] = q;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/ordering-store/stores`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - Current request items count
   * @param {string} [arg.q] - Search ordering store by name or store code
   * @summary: Get deployment meta stores
   * @description: Get deployment meta stores.
   */
  getOrderingStoresPaginator({ pageSize, q } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getOrderingStores({
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
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
   * @param {Object} arg - Arg object.
   * @returns {Promise<AppFeatureResponse>} - Success response
   * @summary: Get features of application
   * @description: Get features of application
   */
  getFeatures({} = {}) {
    const { error } = ConfigurationValidator.getFeatures().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/feature`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<ApplicationInformation>} - Success response
   * @summary: Get application information
   * @description: Get Application Current Information. This includes information about social links, address and contact information of company/seller/brand of the application.
   */
  getContactInfo({} = {}) {
    const { error } = ConfigurationValidator.getContactInfo().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/information`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<CurrenciesResponse>} - Success response
   * @summary: Get application enabled currencies
   * @description: Get currency list for allowed currencies under current application
   */
  getCurrencies({} = {}) {
    const { error } = ConfigurationValidator.getCurrencies().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/currencies`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Currency object id
   * @returns {Promise<Currency>} - Success response
   * @summary: Get currency by id
   * @description: Get currency object with symbol and name information by id.
   */
  getCurrencyById({ id } = {}) {
    const { error } = ConfigurationValidator.getCurrencyById().validate(
      { id },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/currency/${id}`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<LanguageResponse>} - Success response
   * @summary: Get list of languages
   * @description: Get list of supported languages under application.
   */
  getLanguages({} = {}) {
    const { error } = ConfigurationValidator.getLanguages().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/languages`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {OrderingStoreSelectRequest} arg.body
   * @returns {Promise<SuccessMessageResponse>} - Success response
   * @summary: Get ordering store signed cookie on selection of ordering store. This will be used by cart service to verify coupon against selected ordering store in cart.
   * @description: Get ordering store signed cookie on selection of ordering store.
   */
  getOrderingStoreCookie({ body } = {}) {
    const { error } = ConfigurationValidator.getOrderingStoreCookie().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/configuration/v1.0/ordering-store/select`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<SuccessMessageResponse>} - Success response
   * @summary: Unset ordering store signed cookie on change of sales channel selection via domain in universal fynd store app.
   * @description: Unset ordering store cookie.
   */
  removeOrderingStoreCookie({} = {}) {
    const {
      error,
    } = ConfigurationValidator.removeOrderingStoreCookie().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/configuration/v1.0/ordering-store/select`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.orderIncent] - This is to check which staff members
   *   are applicable for order incentives.* @param {number}
   *   [arg.orderingStore] - This is to filter staff members from only
   *   selected ordering store.* @param {string} [arg.user] - Get single staff
   *   member details using staff user mongo id
   * @returns {Promise<AppStaffResponse>} - Success response
   * @summary: Get Staff List.
   * @description: Get a staff list based on the user's session token passed in the header.
   */
  getAppStaffs({ orderIncent, orderingStore, user } = {}) {
    const { error } = ConfigurationValidator.getAppStaffs().validate(
      { orderIncent, orderingStore, user },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["order_incent"] = orderIncent;
    query["ordering_store"] = orderingStore;
    query["user"] = user;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/configuration/v1.0/staff`,
      query,
      undefined
    );
  }
}

class Payment {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.xApiToken - Api token* @param {boolean} [arg.refresh]
   *   - refresh cache
   * @returns {Promise<AggregatorsConfigDetailResponse>} - Success response
   * @summary: Get payment gateway keys
   * @description: Get payment gateway (key, secrets, merchant, sdk/api detail) to complete payment at front-end.
   */
  getAggregatorsConfig({ xApiToken, refresh } = {}) {
    const { error } = PaymentValidator.getAggregatorsConfig().validate(
      { xApiToken, refresh },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["refresh"] = refresh;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/config/aggregators/key`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AttachCardRequest} arg.body
   * @returns {Promise<AttachCardsResponse>} - Success response
   * @summary: Attach a saved card to customer.
   * @description: Attach a saved card to customer at payment gateway i.e stripe and refresh card cache.
   */
  attachCardToCustomer({ body } = {}) {
    const { error } = PaymentValidator.attachCardToCustomer().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/card/attach`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.refresh] -
   * @returns {Promise<ActiveCardPaymentGatewayResponse>} - Success response
   * @summary: Fetch active payment gateway for card
   * @description: Fetch active payment gateway along with customer id for cards payments.
   */
  getActiveCardAggregator({ refresh } = {}) {
    const { error } = PaymentValidator.getActiveCardAggregator().validate(
      { refresh },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["refresh"] = refresh;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/card/aggregator`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.forceRefresh] -
   * @returns {Promise<ListCardsResponse>} - Success response
   * @summary: Fetch the list of saved cards of user.
   * @description: Fetch the list of saved cards of user from active payment gateway.
   */
  getActiveUserCards({ forceRefresh } = {}) {
    const { error } = PaymentValidator.getActiveUserCards().validate(
      { forceRefresh },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["force_refresh"] = forceRefresh;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/cards`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {DeletehCardRequest} arg.body
   * @returns {Promise<DeleteCardsResponse>} - Success response
   * @summary: Delete an user card.
   * @description: Delete an added user card on payment gateway and remove from cache.
   */
  deleteUserCard({ body } = {}) {
    const { error } = PaymentValidator.deleteUserCard().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/card/remove`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ValidateCustomerRequest} arg.body
   * @returns {Promise<ValidateCustomerResponse>} - Success response
   * @summary: Validate customer for payment.
   * @description: Validate customer for payment i.e Simpl paylater, Rupifi loan.
   */
  verifyCustomerForPayment({ body } = {}) {
    const { error } = PaymentValidator.verifyCustomerForPayment().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/payment/customer/validation`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ChargeCustomerRequest} arg.body
   * @returns {Promise<ChargeCustomerResponse>} - Success response
   * @summary: Verify and charge payment
   * @description: Verify and charge payment server to server for Simpl & Mswipe.
   */
  verifyAndChargePayment({ body } = {}) {
    const { error } = PaymentValidator.verifyAndChargePayment().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/payment/confirm/charge`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PaymentInitializationRequest} arg.body
   * @returns {Promise<PaymentInitializationResponse>} - Success response
   * @summary: Payment Initialisation server to server for UPI and BharatQR.
   * @description: Payment Initialisation for UPI & BharatQR code, UPI requests to app and QR code to be displayed on screen.
   */
  initialisePayment({ body } = {}) {
    const { error } = PaymentValidator.initialisePayment().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/payment/request`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PaymentStatusUpdateRequest} arg.body
   * @returns {Promise<PaymentStatusUpdateResponse>} - Success response
   * @summary: Continous polling to check status of payment on server.
   * @description: Continous polling on interval to check status of payment untill timeout.
   */
  checkAndUpdatePaymentStatus({ body } = {}) {
    const { error } = PaymentValidator.checkAndUpdatePaymentStatus().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/payment/confirm/polling`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.amount - Payment amount* @param {string} arg.cartId -
   *   Cart id* @param {string} arg.pincode - Pincode* @param {string}
   *   arg.checkoutMode - Checkout mode* @param {boolean} [arg.refresh] - *
   *   @param {string} [arg.assignCardId] - selected card id* @param {string}
   *   [arg.userDetails] - URIencoded json annonymous user
   * @returns {Promise<PaymentModeRouteResponse>} - Success response
   * @summary: Get All Valid Payment Options
   * @description: Use this API to get Get All Valid Payment Options for making payment
   */
  getPaymentModeRoutes({
    amount,
    cartId,
    pincode,
    checkoutMode,
    refresh,
    assignCardId,
    userDetails,
  } = {}) {
    const { error } = PaymentValidator.getPaymentModeRoutes().validate(
      {
        amount,
        cartId,
        pincode,
        checkoutMode,
        refresh,
        assignCardId,
        userDetails,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["amount"] = amount;
    query["cart_id"] = cartId;
    query["pincode"] = pincode;
    query["checkout_mode"] = checkoutMode;
    query["refresh"] = refresh;
    query["assign_card_id"] = assignCardId;
    query["user_details"] = userDetails;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/payment/options`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.amount - Payment amount* @param {string} arg.cartId -
   *   Cart id* @param {string} arg.pincode - Pincode* @param {string}
   *   arg.checkoutMode - Checkout mode* @param {boolean} [arg.refresh] - *
   *   @param {string} [arg.assignCardId] - selected card id* @param {string}
   *   arg.orderType - Order type* @param {string} [arg.userDetails] -
   *   URIencoded json annonymous user
   * @returns {Promise<PaymentModeRouteResponse>} - Success response
   * @summary: Get All Valid Payment Options for POS
   * @description: Use this API to get Get All Valid Payment Options for making payment
   */
  getPosPaymentModeRoutes({
    amount,
    cartId,
    pincode,
    checkoutMode,
    orderType,
    refresh,
    assignCardId,
    userDetails,
  } = {}) {
    const { error } = PaymentValidator.getPosPaymentModeRoutes().validate(
      {
        amount,
        cartId,
        pincode,
        checkoutMode,
        orderType,
        refresh,
        assignCardId,
        userDetails,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["amount"] = amount;
    query["cart_id"] = cartId;
    query["pincode"] = pincode;
    query["checkout_mode"] = checkoutMode;
    query["refresh"] = refresh;
    query["assign_card_id"] = assignCardId;
    query["order_type"] = orderType;
    query["user_details"] = userDetails;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/payment/options/pos`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<TransferModeResponse>} - Success response
   * @summary: List Refund Transfer Mode
   * @description: Get all active transfer mode for adding beneficiary details
   */
  getActiveRefundTransferModes({} = {}) {
    const { error } = PaymentValidator.getActiveRefundTransferModes().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/refund/transfer-mode`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateRefundTransferModeRequest} arg.body
   * @returns {Promise<UpdateRefundTransferModeResponse>} - Success response
   * @summary: Enable/Disable Refund Transfer Mode
   * @description: Activate or Deactivate Transfer Mode to collect Beneficiary Details for Refund
   */
  enableOrDisableRefundTransferMode({ body } = {}) {
    const {
      error,
    } = PaymentValidator.enableOrDisableRefundTransferMode().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/payment/v1.0/refund/transfer-mode`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId -
   * @returns {Promise<OrderBeneficiaryResponse>} - Success response
   * @summary: List User Beneficiary
   * @description: Get all active  beneficiary details added by the user for refund
   */
  getUserBeneficiariesDetail({ orderId } = {}) {
    const { error } = PaymentValidator.getUserBeneficiariesDetail().validate(
      { orderId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["order_id"] = orderId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/refund/user/beneficiary`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.ifscCode] -
   * @returns {Promise<IfscCodeResponse>} - Success response
   * @summary: Ifsc Code Verification
   * @description: Get True/False for correct IFSC Code for adding bank details for refund
   */
  verifyIfscCode({ ifscCode } = {}) {
    const { error } = PaymentValidator.verifyIfscCode().validate(
      { ifscCode },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["ifsc_code"] = ifscCode;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/ifsc-code/verify`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId -
   * @returns {Promise<OrderBeneficiaryResponse>} - Success response
   * @summary: List Order Beneficiary
   * @description: Get all active  beneficiary details added by the user for refund
   */
  getOrderBeneficiariesDetail({ orderId } = {}) {
    const { error } = PaymentValidator.getOrderBeneficiariesDetail().validate(
      { orderId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["order_id"] = orderId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/payment/v1.0/refund/order/beneficiaries`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AddBeneficiaryViaOtpVerificationRequest} arg.body
   * @returns {Promise<AddBeneficiaryViaOtpVerificationResponse>} - Success response
   * @summary: Save Beneficiary details on otp validation.
   * @description: Save Beneficiary details on otp validation.
   */
  verifyOtpAndAddBeneficiaryForBank({ body } = {}) {
    const {
      error,
    } = PaymentValidator.verifyOtpAndAddBeneficiaryForBank().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/refund/verification/bank`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AddBeneficiaryDetailsRequest} arg.body
   * @returns {Promise<RefundAccountResponse>} - Success response
   * @summary: Save bank details for cancelled/returned order
   * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account.
   */
  addBeneficiaryDetails({ body } = {}) {
    const { error } = PaymentValidator.addBeneficiaryDetails().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/refund/account`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {WalletOtpRequest} arg.body
   * @returns {Promise<WalletOtpResponse>} - Success response
   * @summary: Send Otp on Adding wallet beneficiary
   * @description: Send Otp on Adding wallet beneficiary for user mobile verification
   */
  verifyOtpAndAddBeneficiaryForWallet({ body } = {}) {
    const {
      error,
    } = PaymentValidator.verifyOtpAndAddBeneficiaryForWallet().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/refund/verification/wallet`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {SetDefaultBeneficiaryRequest} arg.body
   * @returns {Promise<SetDefaultBeneficiaryResponse>} - Success response
   * @summary: Mark Default Beneficiary For Refund
   * @description: Mark Default Beneficiary ot of all Beneficiary Details for Refund
   */
  updateDefaultBeneficiary({ body } = {}) {
    const { error } = PaymentValidator.updateDefaultBeneficiary().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/payment/v1.0/refund/beneficiary/default`,
      query,
      body
    );
  }
}

class Order {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page number* @param {number}
   *   [arg.pageSize] - Page limit* @param {string} [arg.fromDate] - From
   *   Date* @param {string} [arg.toDate] - To Date* @param {number}
   *   [arg.orderStatus] - Order Status
   * @returns {Promise<OrderList>} - Success response
   * @summary: Get Orders for application based on application Id
   * @description: Get Orders
   */
  getOrders({ pageNo, pageSize, fromDate, toDate, orderStatus } = {}) {
    const { error } = OrderValidator.getOrders().validate(
      { pageNo, pageSize, fromDate, toDate, orderStatus },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;
    query["from_date"] = fromDate;
    query["to_date"] = toDate;
    query["order_status"] = orderStatus;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/order/v1.0/orders`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId - Order Id
   * @returns {Promise<OrderById>} - Success response
   * @summary: Get Order by order id for application based on application Id
   * @description: Get Order By Fynd Order Id
   */
  getOrderById({ orderId } = {}) {
    const { error } = OrderValidator.getOrderById().validate(
      { orderId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/order/v1.0/orders/${orderId}`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - Shipment Id
   * @returns {Promise<ShipmentById>} - Success response
   * @summary: Get Shipment by shipment id and order id for application based on application Id
   * @description: Get Shipment
   */
  getShipmentById({ shipmentId } = {}) {
    const { error } = OrderValidator.getShipmentById().validate(
      { shipmentId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/order/v1.0/orders/shipments/${shipmentId}`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - Shipment Id
   * @returns {Promise<ShipmentReasons>} - Success response
   * @summary: Get Shipment reasons by shipment id and order id for application based on application Id
   * @description: Get Shipment Reasons
   */
  getShipmentReasons({ shipmentId } = {}) {
    const { error } = OrderValidator.getShipmentReasons().validate(
      { shipmentId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/order/v1.0/orders/shipments/${shipmentId}/reasons`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - Shipment Id
   * @param {ShipmentStatusUpdateBody} arg.body
   * @returns {Promise<ShipmentStatusUpdate>} - Success response
   * @summary: Update Shipment status by shipment id and order id for application based on application Id
   * @description: Update Shipment Status
   */
  updateShipmentStatus({ shipmentId, body } = {}) {
    const { error } = OrderValidator.updateShipmentStatus().validate(
      { shipmentId, body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/order/v1.0/orders/shipments/${shipmentId}/status`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - Shipment Id
   * @returns {Promise<ShipmentTrack>} - Success response
   * @summary: Track Shipment by shipment id and order id for application based on application Id
   * @description: Shipment Track
   */
  trackShipment({ shipmentId } = {}) {
    const { error } = OrderValidator.trackShipment().validate(
      { shipmentId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/order/v1.0/orders/shipments/${shipmentId}/track`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId - Order Id
   * @returns {Promise<PosOrderById>} - Success response
   * @summary: Get POS Order by order id for application based on application Id
   * @description: Get Order By Fynd Order Id
   */
  getPosOrderById({ orderId } = {}) {
    const { error } = OrderValidator.getPosOrderById().validate(
      { orderId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/order/v1.0/orders/pos-order/${orderId}`,
      query,
      undefined
    );
  }
}

class Rewards {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CatalogueOrderRequest} arg.body
   * @returns {Promise<CatalogueOrderResponse>} - Success response
   * @summary: Get the eligibility of reward points on a product
   * @description: Use this API to evaluate the amount of reward points that could be earned on any catalogue product.
   */
  getPointsOnProduct({ body } = {}) {
    const { error } = RewardsValidator.getPointsOnProduct().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/rewards/v1.0/catalogue/offer/order/`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.name - The name given to the offer.
   * @returns {Promise<Offer>} - Success response
   * @summary: Get offer by name
   * @description: Use this API to get the offer details and configuration by entering the name of the offer.
   */
  getOfferByName({ name } = {}) {
    const { error } = RewardsValidator.getOfferByName().validate(
      { name },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/rewards/v1.0/offers/${name}/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {OrderDiscountRequest} arg.body
   * @returns {Promise<OrderDiscountResponse>} - Success response
   * @summary: Calculates the discount on order-amount
   * @description: Use this API to calculate the discount on order-amount based on all the amount range configured in order_discount.
   */
  getOrderDiscount({ body } = {}) {
    const { error } = RewardsValidator.getOrderDiscount().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/rewards/v1.0/user/offers/order-discount/`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<PointsResponse>} - Success response
   * @summary: Get reward points available with a user
   * @description: Use this API to retrieve total available points of a user for current application
   */
  getUserPoints({} = {}) {
    const { error } = RewardsValidator.getUserPoints().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/rewards/v1.0/user/points/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.pageId] - PageID is the ID of the requested page.
   *   For first request it should be kept empty.* @param {number}
   *   [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<PointsHistoryResponse>} - Success response
   * @summary: Get all transactions of reward points
   * @description: Use this API to get a list of points transactions. The list of points history is paginated.
   */
  getUserPointsHistory({ pageId, pageSize } = {}) {
    const { error } = RewardsValidator.getUserPointsHistory().validate(
      { pageId, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/rewards/v1.0/user/points/history/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get all transactions of reward points
   * @description: Use this API to get a list of points transactions. The list of points history is paginated.
   */
  getUserPointsHistoryPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getUserPointsHistory({
        pageId: pageId,
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
   * @param {Object} arg - Arg object.
   * @returns {Promise<ReferralDetailsResponse>} - Success response
   * @summary: Get referral details of a user
   * @description: Use this API to retrieve the referral details a user has configured in the application.
   */
  getUserReferralDetails({} = {}) {
    const { error } = RewardsValidator.getUserReferralDetails().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/rewards/v1.0/user/referral/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {RedeemReferralCodeRequest} arg.body
   * @returns {Promise<RedeemReferralCodeResponse>} - Success response
   * @summary: Redeems a referral code and credits reward points to users
   * @description: Use this API to enter a referral code following which, the configured points would be credited to a user's reward points account.
   */
  redeemReferralCode({ body } = {}) {
    const { error } = RewardsValidator.redeemReferralCode().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/rewards/v1.0/user/referral/redeem/`,
      query,
      body
    );
  }
}

class Feedback {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ReportAbuseRequest} arg.body
   * @returns {Promise<InsertResponse>} - Success response
   * @summary: post a new abuse request
   * @description: Report a new abuse for specific entity with description text.
   */
  createAbuseReport({ body } = {}) {
    const { error } = FeedbackValidator.createAbuseReport().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/abuse`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateAbuseStatusRequest} arg.body
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Update abuse details
   * @description: Update the abuse details like status and description text.
   */
  updateAbuseReport({ body } = {}) {
    const { error } = FeedbackValidator.updateAbuseReport().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/abuse`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityId - Entity id* @param {string} arg.entityType
   *   - entity type* @param {string} [arg.id] - abuse id* @param {string}
   *   [arg.pageId] - pagination page id* @param {number} [arg.pageSize] -
   *   pagination page size
   * @returns {Promise<ReportAbuseGetResponse>} - Success response
   * @summary: Get list of abuse data
   * @description: Get the list of abuse data from entity type and entity ID.
   */
  getAbuseReports({ entityId, entityType, id, pageId, pageSize } = {}) {
    const { error } = FeedbackValidator.getAbuseReports().validate(
      { entityId, entityType, id, pageId, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["id"] = id;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/abuse/entity/${entityType}/entity-id/${entityId}`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityId - Entity id
   * @param {string} arg.entityType - Entity type
   * @param {string} [arg.id] - Abuse id
   * @param {number} [arg.pageSize] - Pagination page size
   * @summary: Get list of abuse data
   * @description: Get the list of abuse data from entity type and entity ID.
   */
  getAbuseReportsPaginator({ entityId, entityType, id, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getAbuseReports({
        entityId: entityId,
        entityType: entityType,
        id: id,
        pageId: pageId,
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
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Pagination page no* @param {number}
   *   [arg.pageSize] - pagination page size
   * @returns {Promise<AttributeResponse>} - Success response
   * @summary: Get list of attribute data
   * @description: Provides a list of all attribute data.
   */
  getAttributes({ pageNo, pageSize } = {}) {
    const { error } = FeedbackValidator.getAttributes().validate(
      { pageNo, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/attributes`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - Pagination page size
   * @summary: Get list of attribute data
   * @description: Provides a list of all attribute data.
   */
  getAttributesPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAttributes({
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
   * @param {Object} arg - Arg object.
   * @param {SaveAttributeRequest} arg.body
   * @returns {Promise<InsertResponse>} - Success response
   * @summary: Add a new attribute request
   * @description: Add a new attribute with its name, slug and description.
   */
  createAttribute({ body } = {}) {
    const { error } = FeedbackValidator.createAttribute().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/attributes`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - Slug of attribute
   * @returns {Promise<Attribute>} - Success response
   * @summary: Get single attribute data
   * @description: Get a single attribute data from a given slug.
   */
  getAttribute({ slug } = {}) {
    const { error } = FeedbackValidator.getAttribute().validate(
      { slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/attributes/${slug}`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - Slug of attribute
   * @param {UpdateAttributeRequest} arg.body
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Update attribute details
   * @description: Update the attribute's name and description.
   */
  updateAttribute({ slug, body } = {}) {
    const { error } = FeedbackValidator.updateAttribute().validate(
      { slug, body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/attributes/${slug}`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CommentRequest} arg.body
   * @returns {Promise<InsertResponse>} - Success response
   * @summary: post a new comment
   * @description: This is used to add a new comment for specific entity.
   */
  createComment({ body } = {}) {
    const { error } = FeedbackValidator.createComment().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/comment`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateCommentRequest} arg.body
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Update comment status
   * @description: Update the comment status (active/approve) or text.
   */
  updateComment({ body } = {}) {
    const { error } = FeedbackValidator.updateComment().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/comment`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Entity type* @param {string} [arg.id] -
   *   comment id* @param {string} [arg.entityId] - entity id* @param {string}
   *   [arg.userId] - user id - flag/filter to get comments for user* @param
   *   {string} [arg.pageId] - pagination page id* @param {number}
   *   [arg.pageSize] - pagination page size
   * @returns {Promise<CommentGetResponse>} - Success response
   * @summary: Get list of comments
   * @description: Get the list of comments from specific entity type.
   */
  getComments({ entityType, id, entityId, userId, pageId, pageSize } = {}) {
    const { error } = FeedbackValidator.getComments().validate(
      { entityType, id, entityId, userId, pageId, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["id"] = id;
    query["entity_id"] = entityId;
    query["user_id"] = userId;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/comment/entity/${entityType}`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Entity type
   * @param {string} [arg.id] - Comment id
   * @param {string} [arg.entityId] - Entity id
   * @param {string} [arg.userId] - User id - flag/filter to get comments for user
   * @param {number} [arg.pageSize] - Pagination page size
   * @summary: Get list of comments
   * @description: Get the list of comments from specific entity type.
   */
  getCommentsPaginator({ entityType, id, entityId, userId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getComments({
        entityType: entityType,
        id: id,
        entityId: entityId,
        userId: userId,
        pageId: pageId,
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Entity type* @param {string}
   *   arg.entityId - entity id
   * @returns {Promise<CheckEligibilityResponse>} - Success response
   * @summary: Checks eligibility and cloud media config
   * @description: Checks eligibility to rate and review and cloud media configuration
   */
  checkEligibility({ entityType, entityId } = {}) {
    const { error } = FeedbackValidator.checkEligibility().validate(
      { entityType, entityId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/config/entity/${entityType}/entity-id/${entityId}`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Delete Media
   * @description: Delete Media for the given entity IDs.
   */
  deleteMedia({} = {}) {
    const { error } = FeedbackValidator.deleteMedia().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/feedback/v1.0/media/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AddMediaListRequest} arg.body
   * @returns {Promise<InsertResponse>} - Success response
   * @summary: Add Media
   * @description: Add Media list for specific entity.
   */
  createMedia({ body } = {}) {
    const { error } = FeedbackValidator.createMedia().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/media/`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateMediaListRequest} arg.body
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Update Media
   * @description: Update Media (archive/approve) for the given entity.
   */
  updateMedia({ body } = {}) {
    const { error } = FeedbackValidator.updateMedia().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/media/`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Entity type* @param {string}
   *   arg.entityId - entity id* @param {string} [arg.id] - vote id* @param
   *   {string} [arg.pageId] - pagination page id* @param {number}
   *   [arg.pageSize] - pagination page size
   * @returns {Promise<MediaGetResponse>} - Success response
   * @summary: Get Media
   * @description: Get Media from the given entity type and entity ID.
   */
  getMedias({ entityType, entityId, id, pageId, pageSize } = {}) {
    const { error } = FeedbackValidator.getMedias().validate(
      { entityType, entityId, id, pageId, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["id"] = id;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/media/entity/${entityType}/entity-id/${entityId}`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Entity type
   * @param {string} arg.entityId - Entity id
   * @param {string} [arg.id] - Vote id
   * @param {number} [arg.pageSize] - Pagination page size
   * @summary: Get Media
   * @description: Get Media from the given entity type and entity ID.
   */
  getMediasPaginator({ entityType, entityId, id, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getMedias({
        entityType: entityType,
        entityId: entityId,
        id: id,
        pageId: pageId,
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Entity type* @param {string}
   *   arg.entityId - entity id* @param {string} [arg.id] - review summary
   *   identifier* @param {string} [arg.pageId] - pagination page id* @param
   *   {number} [arg.pageSize] - pagination page size
   * @returns {Promise<RatingGetResponse>} - Success response
   * @summary: Get a review summary
   * @description: Review summary gives ratings and attribute metrics of a review per entity
   * It gives following response data: review count, rating average. review metrics / attribute rating metrics which contains name, type, average and count.
   */
  getReviewSummaries({ entityType, entityId, id, pageId, pageSize } = {}) {
    const { error } = FeedbackValidator.getReviewSummaries().validate(
      { entityType, entityId, id, pageId, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["id"] = id;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/rating/summary/entity/${entityType}/entity-id/${entityId}`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Entity type
   * @param {string} arg.entityId - Entity id
   * @param {string} [arg.id] - Review summary identifier
   * @param {number} [arg.pageSize] - Pagination page size
   * @summary: Get a review summary
   * @description: Review summary gives ratings and attribute metrics of a review per entity
   * It gives following response data: review count, rating average. review metrics / attribute rating metrics which contains name, type, average and count.
   */
  getReviewSummariesPaginator({ entityType, entityId, id, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getReviewSummaries({
        entityType: entityType,
        entityId: entityId,
        id: id,
        pageId: pageId,
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
   * @param {Object} arg - Arg object.
   * @param {UpdateReviewRequest} arg.body
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Add customer reviews
   * @description: Add customer reviews for specific entity with following data:
   * attributes rating, entity rating, title, description, media resources and template id.
   */
  createReview({ body } = {}) {
    const { error } = FeedbackValidator.createReview().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/review/`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateReviewRequest} arg.body
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Update customer reviews
   * @description: Update customer reviews for specific entity with following data:
   * attributes rating, entity rating, title, description, media resources and template id.
   */
  updateReview({ body } = {}) {
    const { error } = FeedbackValidator.updateReview().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/review/`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Entity type* @param {string}
   *   arg.entityId - entity id* @param {string} [arg.id] - review id* @param
   *   {string} [arg.userId] - user id* @param {string} [arg.media] - media
   *   type e.g. image | video | video_file | video_link* @param
   *   {Array<number>} [arg.rating] - rating filter, 1-5* @param
   *   {Array<string>} [arg.attributeRating] - attribute rating filter* @param
   *   {boolean} [arg.facets] - facets (true|false)* @param {string}
   *   [arg.sort] - sort by : default | top | recent* @param {string}
   *   [arg.pageId] - pagination page id* @param {number} [arg.pageSize] -
   *   pagination page size
   * @returns {Promise<ReviewGetResponse>} - Success response
   * @summary: Get list of customer reviews
   * @description: This is used to get the list of customer reviews based on entity and provided filters.
   */
  getReviews({
    entityType,
    entityId,
    id,
    userId,
    media,
    rating,
    attributeRating,
    facets,
    sort,
    pageId,
    pageSize,
  } = {}) {
    const { error } = FeedbackValidator.getReviews().validate(
      {
        entityType,
        entityId,
        id,
        userId,
        media,
        rating,
        attributeRating,
        facets,
        sort,
        pageId,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["id"] = id;
    query["user_id"] = userId;
    query["media"] = media;
    query["rating"] = rating;
    query["attribute_rating"] = attributeRating;
    query["facets"] = facets;
    query["sort"] = sort;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/review/entity/${entityType}/entity-id/${entityId}`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Entity type
   * @param {string} arg.entityId - Entity id
   * @param {string} [arg.id] - Review id
   * @param {string} [arg.userId] - User id
   * @param {string} [arg.media] - Media type e.g. image | video | video_file
   *   | video_link
   * @param {number[]} [arg.rating] - Rating filter, 1-5
   * @param {string[]} [arg.attributeRating] - Attribute rating filter
   * @param {boolean} [arg.facets] - Facets (true|false)
   * @param {string} [arg.sort] - Sort by : default | top | recent
   * @param {number} [arg.pageSize] - Pagination page size
   * @summary: Get list of customer reviews
   * @description: This is used to get the list of customer reviews based on entity and provided filters.
   */
  getReviewsPaginator({
    entityType,
    entityId,
    id,
    userId,
    media,
    rating,
    attributeRating,
    facets,
    sort,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getReviews({
        entityType: entityType,
        entityId: entityId,
        id: id,
        userId: userId,
        media: media,
        rating: rating,
        attributeRating: attributeRating,
        facets: facets,
        sort: sort,
        pageId: pageId,
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
   * @param {Object} arg - Arg object.
   * @param {string} [arg.templateId] - Template id* @param {string}
   *   [arg.entityId] - entity id* @param {string} [arg.entityType] - entity
   *   type e.g. product | l3
   * @returns {Promise<CursorGetResponse>} - Success response
   * @summary: Get the templates for product or l3 type
   * @description: This is used to get the templates details.
   */
  getTemplates({ templateId, entityId, entityType } = {}) {
    const { error } = FeedbackValidator.getTemplates().validate(
      { templateId, entityId, entityType },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["template_id"] = templateId;
    query["entity_id"] = entityId;
    query["entity_type"] = entityType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/template/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateQNARequest} arg.body
   * @returns {Promise<InsertResponse>} - Success response
   * @summary: Create a new question
   * @description: This is used to create a new question with following data:
   * tags, text, type, choices for MCQ type questions, maximum length of answer.
   */
  createQuestion({ body } = {}) {
    const { error } = FeedbackValidator.createQuestion().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/template/qna/`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateQNARequest} arg.body
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Update question
   * @description: This is used to update question's status, tags and choices.
   */
  updateQuestion({ body } = {}) {
    const { error } = FeedbackValidator.updateQuestion().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/template/qna/`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Entity type* @param {string}
   *   arg.entityId - entity id* @param {string} [arg.id] - qna id* @param
   *   {boolean} [arg.showAnswer] - show answer flag* @param {string}
   *   [arg.pageId] - pagination page id* @param {number} [arg.pageSize] -
   *   pagination page size
   * @returns {Promise<QNAGetResponse>} - Success response
   * @summary: Get a list of QnA
   * @description: This is used to get a list of questions and its answers.
   */
  getQuestionAndAnswers({
    entityType,
    entityId,
    id,
    showAnswer,
    pageId,
    pageSize,
  } = {}) {
    const { error } = FeedbackValidator.getQuestionAndAnswers().validate(
      { entityType, entityId, id, showAnswer, pageId, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["id"] = id;
    query["show_answer"] = showAnswer;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/template/qna/entity/${entityType}/entity-id/${entityId}`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Entity type
   * @param {string} arg.entityId - Entity id
   * @param {string} [arg.id] - Qna id
   * @param {boolean} [arg.showAnswer] - Show answer flag
   * @param {number} [arg.pageSize] - Pagination page size
   * @summary: Get a list of QnA
   * @description: This is used to get a list of questions and its answers.
   */
  getQuestionAndAnswersPaginator({
    entityType,
    entityId,
    id,
    showAnswer,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getQuestionAndAnswers({
        entityType: entityType,
        entityId: entityId,
        id: id,
        showAnswer: showAnswer,
        pageId: pageId,
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
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] - Vote id* @param {string} [arg.refType] -
   *   entity type e.g. review | comment* @param {number} [arg.pageNo] -
   *   pagination page no* @param {number} [arg.pageSize] - pagination page size
   * @returns {Promise<VoteResponse>} - Success response
   * @summary: Get list of votes
   * @description: This is used to get the list of votes of a current logged in user. Votes can be filtered using `ref_type` i.e. review | comment.
   */
  getVotes({ id, refType, pageNo, pageSize } = {}) {
    const { error } = FeedbackValidator.getVotes().validate(
      { id, refType, pageNo, pageSize },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["id"] = id;
    query["ref_type"] = refType;
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/vote/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] - Vote id
   * @param {string} [arg.refType] - Entity type e.g. review | comment
   * @param {number} [arg.pageSize] - Pagination page size
   * @summary: Get list of votes
   * @description: This is used to get the list of votes of a current logged in user. Votes can be filtered using `ref_type` i.e. review | comment.
   */
  getVotesPaginator({ id, refType, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getVotes({
        id: id,
        refType: refType,
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
   * @param {Object} arg - Arg object.
   * @param {VoteRequest} arg.body
   * @returns {Promise<InsertResponse>} - Success response
   * @summary: Create a new vote
   * @description: This is used to create a new vote and the actions can be upvote or downvote.
   */
  createVote({ body } = {}) {
    const { error } = FeedbackValidator.createVote().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/vote/`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateVoteRequest} arg.body
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Update vote
   * @description: This is used to update the vote and the actions can be upvote or downvote.
   */
  updateVote({ body } = {}) {
    const { error } = FeedbackValidator.updateVote().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/vote/`,
      query,
      body
    );
  }
}

class PosCart {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.uid] - * @param {boolean} [arg.i] - * @param
   *   {boolean} [arg.b] - * @param {number} [arg.assignCardId] -
   * @returns {Promise<CartResponse>} - Success response
   * @summary: Fetch all Items Added to  Cart
   * @description: Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
   */
  getCart({ uid, i, b, assignCardId } = {}) {
    const { error } = PosCartValidator.getCart().validate(
      { uid, i, b, assignCardId },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;
    query["assign_card_id"] = assignCardId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/detail`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.uid] -
   * @returns {Promise<any>} - Success response
   * @summary: Fetch Last-Modified timestamp
   * @description: Fetch Last-Modified timestamp in header metadata
   */
  getCartLastModified({ uid } = {}) {
    const { error } = PosCartValidator.getCartLastModified().validate(
      { uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "head",
      `/service/application/pos/cart/v1.0/detail`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.i] - * @param {boolean} [arg.b] -
   * @param {AddCartRequest} arg.body
   * @returns {Promise<AddCartResponse>} - Success response
   * @summary: Add Items to Cart
   * @description: <p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>
   */
  addItems({ body, i, b } = {}) {
    const { error } = PosCartValidator.addItems().validate(
      { body, i, b },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/detail`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.uid] - * @param {boolean} [arg.i] - * @param
   *   {boolean} [arg.b] -
   * @param {UpdateCartRequest} arg.body
   * @returns {Promise<UpdateCartResponse>} - Success response
   * @summary: Update Items already added to Cart
   * @description: Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
   */
  updateCart({ body, uid, i, b } = {}) {
    const { error } = PosCartValidator.updateCart().validate(
      { body, uid, i, b },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/detail`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.uid] - Cart id
   * @returns {Promise<CartItemCountResponse>} - Success response
   * @summary: Cart item count
   * @description: Get total count of item present in cart
   */
  getItemCount({ uid } = {}) {
    const { error } = PosCartValidator.getItemCount().validate(
      { uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/basic`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.uid] -
   * @returns {Promise<GetCouponResponse>} - Success response
   * @summary: Fetch Coupon
   * @description: Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse
   */
  getCoupons({ uid } = {}) {
    const { error } = PosCartValidator.getCoupons().validate(
      { uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/coupon`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.i] - * @param {boolean} [arg.b] - * @param
   *   {boolean} [arg.p] - * @param {number} [arg.uid] -
   * @param {ApplyCouponRequest} arg.body
   * @returns {Promise<CartResponse>} - Success response
   * @summary: Apply Coupon
   * @description: <p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
   * </ul>
   */
  applyCoupon({ body, i, b, p, uid } = {}) {
    const { error } = PosCartValidator.applyCoupon().validate(
      { body, i, b, p, uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["i"] = i;
    query["b"] = b;
    query["p"] = p;
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/coupon`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.uid] - Cart id
   * @returns {Promise<CartResponse>} - Success response
   * @summary: Remove Coupon Applied
   * @description: Remove Coupon applied on the cart by passing uid in request body.
   */
  removeCoupon({ uid } = {}) {
    const { error } = PosCartValidator.removeCoupon().validate(
      { uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/pos/cart/v1.0/coupon`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.itemId] - Item id* @param {string} [arg.articleId] -
   *   Article mongo id* @param {number} [arg.uid] - Item id* @param {string}
   *   [arg.slug] - Item unique url from product page
   * @returns {Promise<BulkPriceResponse>} - Success response
   * @summary: Get discount offers based on quantity
   * @description: List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
   */
  getBulkDiscountOffers({ itemId, articleId, uid, slug } = {}) {
    const { error } = PosCartValidator.getBulkDiscountOffers().validate(
      { itemId, articleId, uid, slug },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["item_id"] = itemId;
    query["article_id"] = articleId;
    query["uid"] = uid;
    query["slug"] = slug;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/bulk-price`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.uid] - * @param {string} [arg.mobileNo] - * @param
   *   {string} [arg.checkoutMode] - * @param {string} [arg.tags] - * @param
   *   {boolean} [arg.isDefault] -
   * @returns {Promise<GetAddressesResponse>} - Success response
   * @summary: Fetch Address
   * @description: Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
   */
  getAddresses({ uid, mobileNo, checkoutMode, tags, isDefault } = {}) {
    const { error } = PosCartValidator.getAddresses().validate(
      { uid, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["mobile_no"] = mobileNo;
    query["checkout_mode"] = checkoutMode;
    query["tags"] = tags;
    query["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/address`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {Address} arg.body
   * @returns {Promise<SaveAddressResponse>} - Success response
   * @summary: Add Address to the account
   * @description: <p>Add Address to account. See `Address` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
   */
  addAddress({ body } = {}) {
    const { error } = PosCartValidator.addAddress().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/address`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.id - * @param {number} [arg.uid] - * @param {string}
   *   [arg.mobileNo] - * @param {string} [arg.checkoutMode] - * @param
   *   {string} [arg.tags] - * @param {boolean} [arg.isDefault] -
   * @returns {Promise<Address>} - Success response
   * @summary: Fetch Single Address
   * @description: Get a addresses with the given id. If successful, returns a Address resource in the response body specified in `Address`.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
   */
  getAddressById({ id, uid, mobileNo, checkoutMode, tags, isDefault } = {}) {
    const { error } = PosCartValidator.getAddressById().validate(
      { id, uid, mobileNo, checkoutMode, tags, isDefault },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["mobile_no"] = mobileNo;
    query["checkout_mode"] = checkoutMode;
    query["tags"] = tags;
    query["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/address/${id}`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.id - Address id
   * @param {Address} arg.body
   * @returns {Promise<UpdateAddressResponse>} - Success response
   * @summary: Update Address alreay added to account
   * @description: Request object containing attributes mentioned in  <font color="blue">Address </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
   */
  updateAddress({ id, body } = {}) {
    const { error } = PosCartValidator.updateAddress().validate(
      { id, body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/address/${id}`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.id - Address id
   * @returns {Promise<DeleteAddressResponse>} - Success response
   * @summary: Remove Address Associated to the account
   * @description: Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully
   */
  removeAddress({ id } = {}) {
    const { error } = PosCartValidator.removeAddress().validate(
      { id },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/pos/cart/v1.0/address/${id}`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.uid] - * @param {boolean} [arg.i] - * @param
   *   {boolean} [arg.b] -
   * @param {SelectCartAddressRequest} arg.body
   * @returns {Promise<CartResponse>} - Success response
   * @summary: Select Address from All Addresses
   * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>
   */
  selectAddress({ body, uid, i, b } = {}) {
    const { error } = PosCartValidator.selectAddress().validate(
      { body, uid, i, b },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/select-address`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.uid] -
   * @param {UpdateCartPaymentRequest} arg.body
   * @returns {Promise<CartResponse>} - Success response
   * @summary: Update Cart Payment
   * @description: Update Cart Payment for Your Account
   */
  selectPaymentMode({ body, uid } = {}) {
    const { error } = PosCartValidator.selectPaymentMode().validate(
      { body, uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/payment`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.uid] - * @param {string} [arg.addressId] - * @param
   *   {string} [arg.paymentMode] - * @param {string} [arg.paymentIdentifier]
   *   - * @param {string} [arg.aggregatorName] - * @param {string}
   *   [arg.merchantCode] -
   * @returns {Promise<PaymentCouponValidate>} - Success response
   * @summary: Get Cart Payment for valid coupon
   * @description: Validate coupon for selected payment mode
   */
  validateCouponForPayment({
    uid,
    addressId,
    paymentMode,
    paymentIdentifier,
    aggregatorName,
    merchantCode,
  } = {}) {
    const { error } = PosCartValidator.validateCouponForPayment().validate(
      {
        uid,
        addressId,
        paymentMode,
        paymentIdentifier,
        aggregatorName,
        merchantCode,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["payment_mode"] = paymentMode;
    query["payment_identifier"] = paymentIdentifier;
    query["aggregator_name"] = aggregatorName;
    query["merchant_code"] = merchantCode;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/payment/validate/`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pickAtStoreUid] - * @param {number}
   *   [arg.orderingStoreId] - * @param {boolean} [arg.p] - Get payment
   *   options or not* @param {number} [arg.uid] - Cart id* @param {number}
   *   [arg.addressId] - Address id* @param {string} [arg.areaCode] -
   *   Destination pincode.* @param {string} [arg.orderType] - Order type of shipment
   * @returns {Promise<CartShipmentsResponse>} - Success response
   * @summary: Get delivery date and options before checkout
   * @description: Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
   */
  getShipments({
    pickAtStoreUid,
    orderingStoreId,
    p,
    uid,
    addressId,
    areaCode,
    orderType,
  } = {}) {
    const { error } = PosCartValidator.getShipments().validate(
      {
        pickAtStoreUid,
        orderingStoreId,
        p,
        uid,
        addressId,
        areaCode,
        orderType,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["pick_at_store_uid"] = pickAtStoreUid;
    query["ordering_store_id"] = orderingStoreId;
    query["p"] = p;
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["area_code"] = areaCode;
    query["order_type"] = orderType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/shipment`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.i] - Get items or not* @param {boolean} [arg.p] -
   *   Get payment options or not* @param {number} [arg.uid] - Cart id* @param
   *   {number} [arg.addressId] - Address id* @param {string} [arg.orderType]
   *   - Order is hand over or home delivery
   * @param {UpdateCartShipmentRequest} arg.body
   * @returns {Promise<CartShipmentsResponse>} - Success response
   * @summary: Update shipment delivery type and quantity before checkout
   * @description: Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created. Update the shipment                      type and quantity as per customer preference for store pick up or home delivery
   */
  updateShipments({ body, i, p, uid, addressId, orderType } = {}) {
    const { error } = PosCartValidator.updateShipments().validate(
      { body, i, p, uid, addressId, orderType },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["i"] = i;
    query["p"] = p;
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["order_type"] = orderType;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/shipment`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.uid] -
   * @param {CartPosCheckoutRequest} arg.body
   * @returns {Promise<CartCheckoutResponse>} - Success response
   * @summary: Checkout Cart
   * @description: Checkout all items in cart to payment and order generation.                        For COD only order will be generated while for other checkout mode                        user will be redirected to payment gateway
   */
  checkoutCart({ body, uid } = {}) {
    const { error } = PosCartValidator.checkoutCart().validate(
      { body, uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/checkout`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.uid] - Cart id received in get cart.
   * @param {CartMetaRequest} arg.body
   * @returns {Promise<CartMetaResponse>} - Success response
   * @summary: Update Cart Meta
   * @description: Update cart meta like checkout_mode, gstin.
   */
  updateCartMeta({ body, uid } = {}) {
    const { error } = PosCartValidator.updateCartMeta().validate(
      { body, uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/meta`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.areaCode - * @param {number} [arg.uid] -
   * @returns {Promise<CartDeliveryModesResponse>} - Success response
   * @summary: Get available delivery modes for cart
   * @description: Get available delivery modes for cart and pick up store uid list. From given pick stores list user can pick up delivery. Use this uid to show store address
   */
  getAvailableDeliveryModes({ areaCode, uid } = {}) {
    const { error } = PosCartValidator.getAvailableDeliveryModes().validate(
      { areaCode, uid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["area_code"] = areaCode;
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/available-delivery-mode`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.storeUid -
   * @returns {Promise<StoreDetailsResponse>} - Success response
   * @summary: Get list of stores for give uids
   * @description: Get list of stores by providing pick up available store uids.
   */
  getStoreAddressByUid({ storeUid } = {}) {
    const { error } = PosCartValidator.getStoreAddressByUid().validate(
      { storeUid },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};
    query["store_uid"] = storeUid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/store-address`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetShareCartLinkRequest} arg.body
   * @returns {Promise<GetShareCartLinkResponse>} - Success response
   * @summary: Generate Cart sharing link token
   * @description: Generates shared cart snapshot and returns shortlink token
   */
  getCartShareLink({ body } = {}) {
    const { error } = PosCartValidator.getCartShareLink().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/share-cart`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.token - Shared short link token.
   * @returns {Promise<SharedCartResponse>} - Success response
   * @summary: Get shared cart snapshot and cart response
   * @description: Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
   */
  getCartSharedItems({ token } = {}) {
    const { error } = PosCartValidator.getCartSharedItems().validate(
      { token },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/share-cart/${token}`,
      query,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.token - Shared short link token.* @param {string}
   *   arg.action - Operation to perform on existing cart, whether to merge or replace.
   * @returns {Promise<SharedCartResponse>} - Success response
   * @summary: Merge or Replace existing cart
   * @description: Merge or Replace cart based on `action` parameter with shared cart of `token`
   */
  updateCartWithSharedItems({ token, action } = {}) {
    const { error } = PosCartValidator.updateCartWithSharedItems().validate(
      { token, action },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/share-cart/${token}/${action}`,
      query,
      undefined
    );
  }
}

class Logistic {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetTatProductReqBody} arg.body
   * @returns {Promise<GetTatProductResponse>} - Success response
   * @summary: Get Tat Product
   * @description: Get Tat Product
   */
  getTatProduct({ body } = {}) {
    const { error } = LogisticValidator.getTatProduct().validate(
      { body },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/logistics/v1.0`,
      query,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.pincode - Pincode
   * @returns {Promise<GetPincodeCityResponse>} - Success response
   * @summary: Get City from Pincode
   * @description: Get City from Pincode
   */
  getPincodeCity({ pincode } = {}) {
    const { error } = LogisticValidator.getPincodeCity().validate(
      { pincode },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/logistics/v1.0/pincode/${pincode}`,
      query,
      undefined
    );
  }
}

/**
 * @param data
 * @param {string} file_name
 * @param {string} content_type
 * @param {string} namespace
 * @param {number} size
 * @param {number} tags
 */
FileStorage.prototype.upload = function ({
  data,
  file_name,
  content_type,
  namespace,
  size,
  tags,
} = {}) {
  return new Promise(async (resolve, reject) => {
    try {
      const dataObj = await this.startUpload({
        namespace,
        body: {
          file_name,
          content_type,
          size: size,
          tags: tags,
        },
      });
      if (dataObj.upload && dataObj.upload.url) {
        await axios.put(dataObj.upload.url, data, {
          withCredentials: false,
          headers: { "Content-Type": content_type },
        });
      } else {
        reject({ message: "Failed to upload file" });
      }
      delete dataObj.tags;
      const completeRes = await this.completeUpload({
        namespace,
        body: dataObj,
      });
      resolve(completeRes);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = ApplicationClient;
