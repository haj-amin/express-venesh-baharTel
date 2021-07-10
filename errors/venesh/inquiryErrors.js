class VeneshInquiryError extends Error {
  constructor(httpStatus, code, message, englishDescription) {
    super()
    this.httpStatus = httpStatus
    this.code = code
    this.message = message
    this.englishDescription = englishDescription
    this.class = 'VeneshInquiryError'
  }

  jsonify() {
    let jsonified = {
      success: false,
      error: this.code,
      description: this.message,
      englishDescription: this.englishDescription,
    }
    return jsonified
  }

  stringify() {
    return JSON.stringify(this.jsonify())
  }
}

module.exports = {
  Custom: VeneshInquiryError,
  Server: {
    Internal: new VeneshInquiryError(500, -1, 'خطایی رخ داده، زمان دیگری امتحان کنید.', 'Internal Server Error'),
    Database: new VeneshInquiryError(500, -2, 'خطایی رخ داده، زمان دیگری امتحان کنید.', 'Internal Server Database Error'),
    Temporary: new VeneshInquiryError(500, -3, 'سرویس تا چند ساعت آینده موقتا غیرفعال است.', 'Service is temporarily disabled'),
    Unknwon: new VeneshInquiryError(500, -4, 'خطای ناشناخته', 'Unknown Error'),
    Cryptography: new VeneshInquiryError(500, -5, 'خطا در رمزنگاری', 'Error in cryptography'),
    Provider: new VeneshInquiryError(500, -6, 'خطای تامین‌کننده', 'Provider Error'),
    ProviderBeforeProductDelivery: new VeneshInquiryError(500, -7, 'خطای تامین‌کننده', 'Provider Error'),
    Bank: new VeneshInquiryError(500, -8, 'خطای بانک', 'Bank Error'),
    ProviderWithRecheckNeeded: new VeneshInquiryError(500, -9, 'خطای تامین‌کننده', 'Provider Error')
  },
  General: {
    InvalidRequest: new VeneshInquiryError(400, 1, 'درخواست نادرست', 'Invalid Request'),
    TooManyRequests: new VeneshInquiryError(403, 2, 'درخواست بیش از حد مجاز', 'Too Many Requests'),
    Unauthorized: new VeneshInquiryError(401, 3, 'لطفا مجددا وارد حساب کاربری خود شوید.', 'Unauthorized'),
    AccessDenied: new VeneshInquiryError(403, 4, 'دسترسی غیر مجاز', 'Access Denied'),
    TryAgain: new VeneshInquiryError(400, 5, 'خطا در دریافت اطلاعات. مجددا سعی کنید.', 'Try again')
  },
  Bill: {
    NoAccess: new VeneshInquiryError(400, 41003, 'اجازه دسترسی ندارید.', 'NoAccess'),
    BillTypeIsEmpty: new VeneshInquiryError(400, 41003, 'نوع قبض ارسال نشده است.', 'BillTypeIsEmpty'),
    BillParameterIsEmpty: new VeneshInquiryError(400, 41003, 'پارامتر استعلام ارسال نشده است.', 'BillParameterIsEmpty'),
    WrongParameter: new VeneshInquiryError(400, 41003, 'مقدار ورودی نامعتبر است.', 'WrongParameter'),
    BillPaid: new VeneshInquiryError(400, 41003, 'قبض پرداخت شده است.', 'BillPaid'),
    NoBill: new VeneshInquiryError(400, 41003, 'قبضی یافت نشد.', 'NoBill'),
    BillWrongType: new VeneshInquiryError(400, 41003, 'نوع قبض اشتباه است.', 'BillWrongType'),
    ServiceTotallyDisabled: new VeneshInquiryError(400, 41003, 'استعلام فعال نمی باشد.', 'ServiceTotallyDisabled'),
    ServiceDisabledForUser: new VeneshInquiryError(400, 41003, 'استعلام مورد نظر برای شما فعال نمی باشد.', 'ServiceDisabledForUser'),
    ServiceDisabled: new VeneshInquiryError(400, 41003, 'سرویس با اختلال همراه است.', 'ServiceDisabled'),
    RegionNotExists: new VeneshInquiryError(400, 41003, 'منطقه یافت نشد.', 'RegionNotExists'),
    RegionNotSupported: new VeneshInquiryError(400, 41003, '', 'RegionNotSupported'),
    BillIsEmpty: new VeneshInquiryError(400, 41003, '', 'BillIsEmpty'),
    InvalidBillData: new VeneshInquiryError(400, 41003, '', 'InvalidBillData'),
    PleaseEnterGroupName: new VeneshInquiryError(400, 41003, '', 'PleaseEnterGroupName'),
    PleaseEnterGroupType: new VeneshInquiryError(400, 41003, '', 'PleaseEnterGroupType'),
    WrongGroupType: new VeneshInquiryError(400, 41003, '', 'WrongGroupType'),
    PleaseEnterGroupId: new VeneshInquiryError(400, 41003, '', 'PleaseEnterGroupId'),
    WrongGroupId: new VeneshInquiryError(400, 41003, '', 'WrongGroupId'),
    GroupNotExists: new VeneshInquiryError(400, 41003, '', 'GroupNotExists'),
    EmptyParameterType: new VeneshInquiryError(400, 41003, '', 'EmptyParameterType'),
    EmptyParameter: new VeneshInquiryError(400, 41003, '', 'EmptyParameter'),
    ParameterExistInThisGroup: new VeneshInquiryError(400, 41003, '', 'ParameterExistInThisGroup'),
    EmptyParameterId: new VeneshInquiryError(400, 41003, '', 'EmptyParameterId'),
    ParameterIdNotExist: new VeneshInquiryError(400, 41003, '', 'ParameterIdNotExist'),
    ParameterNotExists: new VeneshInquiryError(400, 41003, '', 'ParameterNotExists'),
    EnterGroupName: new VeneshInquiryError(400, 41003, '', 'EnterGroupName'),
    EnterAlias: new VeneshInquiryError(400, 41003, '', 'EnterAlias'),
    AliasMaxLimit: new VeneshInquiryError(400, 41003, '', 'AliasMaxLimit'),
    WrongInfo: new VeneshInquiryError(400, 41003, '', 'WrongInfo'),
    PackageNotExists: new VeneshInquiryError(400, 41003, '', 'PackageNotExists'),
    PackageGroupUsed: new VeneshInquiryError(400, 41003, '', 'PackageGroupUsed'),
    PackageParameterUsed: new VeneshInquiryError(400, 41003, '', 'PackageParameterUsed'),
    PackageInquiryUsed: new VeneshInquiryError(400, 41003, '', 'PackageInquiryUsed'),
    MaximumTransactionPerSecondReached: new VeneshInquiryError(400, 41003, '', 'MaximumTransactionPerSecondReached'),
    LicenseNumberIsEmpty: new VeneshInquiryError(400, 41003, '', 'LicenseNumberIsEmpty'),
    LicenseNumberIsInvalid: new VeneshInquiryError(400, 41003, '', 'LicenseNumberIsInvalid'),
    InformationNotFound: new VeneshInquiryError(400, 41003, '', 'InformationNotFound'),
    PlateNumberIsEmpty: new VeneshInquiryError(400, 41003, '', 'PlateNumberIsEmpty'),
    PlateNumberIsInvalid: new VeneshInquiryError(400, 41003, '', 'PlateNumberIsInvalid'),
    VINIsEmpty: new VeneshInquiryError(400, 41003, '', 'VINIsEmpty'),
    VINIsInvalid: new VeneshInquiryError(400, 41003, '', 'VINIsInvalid'),
    NoHTTPResourceWasFound: new VeneshInquiryError(400, 41003, '', 'NoHTTPResourceWasFound'),
  },
  Auth: {},
  License: {},
}
