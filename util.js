const fs = require("fs");
let rateIndex;
fs.readFile("./foodInsecurity.json", "utf8", (err, jsonString) => {
  try {
    rateIndex = JSON.parse(jsonString).map((item) => ({
      name: item["Census Subdivision Label"],
      value: item["Food Insecurity Level"],
    }));
    const res = JSON.stringify(rateIndex);
    fs.writeFile("./public/rateIndex.json", res, (err) => {
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
