const VeneshInquiryError = require("../../errors/venesh/inquiryErrors");

module.exports = (errorCode) => {
  switch (errorCode) {
    // Handle these errors.
    case 101:
      return VeneshInquiryError.Bill.NoAccess;
    case 102:
      return VeneshInquiryError.Bill.BillTypeIsEmpty;
    case 103:
      return VeneshInquiryError.Bill.BillParameterIsEmpty;
    case 104:
      return VeneshInquiryError.Bill.WrongParameter;
    case 105:
      return VeneshInquiryError.Bill.BillPaid;
    case 106:
      return VeneshInquiryError.Bill.NoBill;
    case 107:
      return VeneshInquiryError.Bill.BillWrongType;
    case 108:
      return VeneshInquiryError.Bill.ServiceTotallyDisabled;
    case 109:
      return VeneshInquiryError.Bill.ServiceDisabledForUser;
    case 110:
      return VeneshInquiryError.Bill.ServiceDisabled;
    case 111:
      return VeneshInquiryError.Bill.RegionNotExists;
    case 112:
      return VeneshInquiryError.Bill.RegionNotSupported;
    case 113:
      return VeneshInquiryError.Bill.BillIsEmpty;
    case 114:
      return VeneshInquiryError.Bill.InvalidBillData;
    case 115:
      return VeneshInquiryError.Bill.PleaseEnterGroupName;
    case 116:
      return VeneshInquiryError.Bill.PleaseEnterGroupType;
    case 117:
      return VeneshInquiryError.Bill.WrongGroupType;
    case 118:
      return VeneshInquiryError.Bill.PleaseEnterGroupId;
    case 119:
      return VeneshInquiryError.Bill.WrongGroupId;
    case 120:
      return VeneshInquiryError.Bill.GroupNotExists;
    case 121:
      return VeneshInquiryError.Bill.EmptyParameterType;
    case 122:
      return VeneshInquiryError.Bill.EmptyParameter;
    case 123:
      return VeneshInquiryError.Bill.ParameterExistInThisGroup;
    case 124:
      return VeneshInquiryError.Bill.EmptyParameterId;
    case 125:
      return VeneshInquiryError.Bill.ParameterIdNotExist;
    case 126:
      return VeneshInquiryError.Bill.ParameterNotExists;
    case 127:
      return VeneshInquiryError.Bill.EnterGroupName;
    case 128:
      return VeneshInquiryError.Bill.EnterAlias;
    case 129:
      return VeneshInquiryError.Bill.AliasMaxLimit;
    case 130:
      return VeneshInquiryError.Bill.WrongInfo;
    case 137:
      return VeneshInquiryError.Bill.PackageNotExists;
    case 138:
      return VeneshInquiryError.Bill.PackageGroupUsed;
    case 139:
      return VeneshInquiryError.Bill.PackageParameterUsed;
    case 140:
      return VeneshInquiryError.Bill.PackageInquiryUsed;
    case 150:
      return VeneshInquiryError.Bill.MaximumTransactionPerSecondReached;
    case 301:
      return VeneshInquiryError.Bill.LicenseNumberIsEmpty;
    case 302:
      return VeneshInquiryError.Bill.LicenseNumberIsInvalid;
    case 303:
      return VeneshInquiryError.Bill.InformationNotFound;
    case 304:
      return VeneshInquiryError.Bill.PlateNumberIsEmpty;
    case 305:
      return VeneshInquiryError.Bill.PlateNumberIsInvalid;
    case 308:
      return VeneshInquiryError.Bill.VINIsEmpty;
    case 309:
      return VeneshInquiryError.Bill.VINIsInvalid;
    case 310:
      return VeneshInquiryError.Bill.InformationNotFound;
    case 311:
      return VeneshInquiryError.Bill.InformationNotFound;
    case 312:
      return VeneshInquiryError.Bill.InformationNotFound;
    case 313:
      return VeneshInquiryError.Bill.InformationNotFound;
    case 314:
      return VeneshInquiryError.Bill.InformationNotFound;
    case 16:
      return VeneshInquiryError.Bill.NoHTTPResourceWasFound;
    default:
      return new VeneshInquiryError.Custom(
        400,
        -1,
        "متاسفانه مشکلی پیش آمده است. لطفا لحظاتی دیگر مجددا تلاش کنید.",
        ""
      );
  }
};
