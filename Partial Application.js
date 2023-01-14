const totalCost = function (tax, shipping, cost) {
    return (Number(tax) / 100) * Number(cost) + Number(cost) + Number(shipping);
  };
  
  export const taxes = {
      tax12: totalCost.bind(null, 12),
      tax18: totalCost.bind(null, 18),
    };
  
    export const shipping = {
      petfood: taxes.tax12.bind(null, 2.5),
      smartphones: taxes.tax12.bind(null, 5),
      televisions: taxes.tax18.bind(null, 15),
    };