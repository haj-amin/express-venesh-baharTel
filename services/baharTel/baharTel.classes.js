class CarFinesResponse {
  constructor(data) {
    this.totalRial = data.TotalAmount
    this.totalToman = Math.floor(parseInt(data.TotalAmount) / 10)
    this.plateNumber = data.PlateNumber
    this.tickets = []
    data.Bills.forEach((fine) => {
      this.tickets.push({
        price: Math.floor(parseInt(fine.Amount) / 10),
        priceRial: fine.Amount,
        billId: fine.BillId,
        paymentId: fine.PayId,
        city: fine.City,
        // serialNumber: fine.SerialNumber,
        persianDate: fine.Date ? _convertToJalaali(fine.Date) : "",
        deliveryType: fine.DeliveryType,
        location: fine.Location,
        description: fine.Type,
        type: "ticket",
        typeId: 9,
      })
    })
  }
}
