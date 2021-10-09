const fs = require("fs");
const path = require("path");

const url = path.join("output-ducks");

const files = fs.readdirSync(url);

for (let index = 0; index < files.length; index++) {
  const name = files[index];
  fs.rename(`${url}/${name}`, `${url}/${name.replace("Duck #", "")}`, () => {});
}
