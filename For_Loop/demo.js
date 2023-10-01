function hotelRoom(input) {
  let month = input[0];
  let nightsSpend = Number(input[1]);
  let studio = 0;
  let apartment = 0;
  let pricePerStudio = 0;
  let pricePerApartment = 0;
  let discountStudio = 0;
  let discountApartment = 0;

  if (month === "May" || month === "October") {
      studio = 50;
      apartment = 65;

      if (nightsSpend > 14) {
        discountStudio = studio * 0.30;
        discountApartment = apartment * 0.10;
      } else if (nightsSpend > 7) {
          discountStudio = studio * 0.95;

      }
      pricePerApartment = (apartment - discountApartment) * nightsSpend;
      pricePerStudio = (studio - discountStudio) * nightsSpend;
      console.log(`Apartment: ${pricePerApartment.toFixed(2)} lv.`);
      console.log(`Studio: ${pricePerStudio.toFixed(2)} lv.`);
  } else if (month === "June" || month === "September") {
      studio = 75.20;
      apartment = 68.70;

      if (nightsSpend > 14) {
          discountStudio = studio * 0.20;
          discountApartment = apartment * 0.10;
      }
      pricePerApartment = (apartment - discountApartment) * nightsSpend;
      pricePerStudio = (studio - discountStudio) * nightsSpend;
      console.log(`Apartment: ${pricePerApartment.toFixed(2)} lv.`);
      console.log(`Studio: ${pricePerStudio.toFixed(2)} lv.`);
  } else if (month === "July" || month === "August") {
      studio = 76;
      apartment = 77;

      if (nightsSpend > 14) {
          discountApartment = apartment * 0.10;
      }
      pricePerApartment = (apartment - discountApartment) * nightsSpend;
      pricePerStudio = (studio - discountStudio) * nightsSpend;
      console.log(`Apartment: ${pricePerApartment.toFixed(2)} lv.`);
      console.log(`Studio: ${pricePerStudio.toFixed(2)} lv.`);
  }
}

hotelRoom(["May","15"])