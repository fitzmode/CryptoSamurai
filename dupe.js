const fs = require("fs");
const path = require("path");

for (let index = 0; index < 1500; index++) {
  const content = fs.readFileSync("./metadata/sample");
  const meta = JSON.parse(content.toString());
  meta["name"] = `CrytoSamurai #${index + 1}`;
  meta["id"] = `CrytoSamurai #${index + 1}`;

  fs.writeFileSync(`./metadata/${index + 1}`, JSON.stringify(meta), () => {});
}
