const fs = require("fs");
// let rateIndex;
// fs.readFile("./foodInsecurity.json", "utf8", (err, jsonString) => {
//   try {
//     rateIndex = JSON.parse(jsonString).map((item) => ({
//       name: item["Census Subdivision Label"],
//       value: item["Food Insecurity Level"],
//     }));
//     const res = JSON.stringify(rateIndex);

//     fs.writeFile("./public/rateIndex.json", res, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("Successfully wrote file");
//       }
//     });
//   } catch (err) {
//     return;
//   }
// });

let map;
fs.readFile("./foodInsecurity.json", "utf8", (err, jsonString) => {
  try {
    map = JSON.parse(jsonString).map((item) => ({
      name: item["Census Subdivision Label"],
      per_Female_Total:
        item["Percentage of Total Lone-Parent Female Family Households"],
      per_Female1:
        item["Percentage of Female Lone Parent Family Households with 1 Child"],
      per_Female2:
        item[
          "Percentage of Female Lone Parent Family Households with 2 Children"
        ],
      per_Female3:
        item[
          "Percentage of Female Lone Parent Family Households with 3+ Children"
        ],

      per_Income2: item["Percentage of Households Income 0-19999"],
      per_Income4: item["Percentage of Households Income 20000-39999"],
      per_Income6: item["Percentage of Households Income 40000-59999"],
      per_Income_Ave: item["Average Household Income"],

      per_Abo:
        item["Percentage of Household Population with Aboriginal Identity"],

      per_Immi: item["Percentage of Household Population Immigrant"],
      per_Immi_Rec:
        item[
          "Percentage of Household Population of Recent Immigrants (2017-Present)"
        ],

      level: item["Food Insecurity Level"],
    }));
    // const res = JSON.stringify(map);

    fs.writeFile("./src/dataMap.js", map, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully wrote file");
      }
    });
  } catch (err) {
    return;
  }
});
