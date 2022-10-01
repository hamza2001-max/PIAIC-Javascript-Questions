const car_model = (manufacturer, model, keywords, color, feature) => {
    let car = {
      manufacturer,
      model,
      keywords,
      color,
      feature,
    };
    return car;
  }
  
  let car = car_model("Audi", 2021, ["smooth", "effecient"], "red", "fast");
  
  console.log(car);