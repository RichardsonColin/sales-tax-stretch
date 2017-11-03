var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

//Creates and populates an object with the comapany names as keys, which have an obect of two keys.
function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var resultObject = {};
  for(var obj in salesData){
    resultObject[salesData[obj]["name"]] = {
      "totalSales": 0,
      "totalTaxes": 0
    };
  }
  //Reads companySalesData and populates resultObject's totalSales with the summed sales numbers.
  for(var obj = 0; obj < salesData.length; obj++){
    for(var key in resultObject){
      if(salesData[obj]["name"] === key){
        for(var i = 0; i < salesData[obj].sales.length; i++){
          resultObject[key]["totalSales"] += salesData[obj].sales[i];
        }
      }
    }
  }
  //Reads SalesTaxRates and companySalesData and produces the correct taxes for each company in resultObject.
  for(var taxKey in taxRates){
    for(var salesKey in salesData){
      if(taxKey === salesData[salesKey]["province"]){
        for(var i = 0; i < salesData[salesKey].sales.length; i++){
        resultObject[salesData[salesKey]["name"]]["totalTaxes"] += taxRates[taxKey] * salesData[salesKey].sales[i];
        }
      }
    }
  }
console.log(resultObject);
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
//console.log("results", results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/