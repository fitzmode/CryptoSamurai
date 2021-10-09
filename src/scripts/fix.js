const fs = require("fs");
const path = require("path");
const checksum = require("checksum");

const files = fs.readdirSync(path.join("./", "final"));
const missing = [];

fs.readdir(path.join("./", "final"), (err, files) => {
  console.log(files.length, "LENGTH");
});
let counter = 0;
for (var i = 0; i < files.length; i++) {
  const file = files[i];
  const buffer = fs.readFileSync(`final/${file}`);
  const meta = JSON.parse(buffer.toString());
  const id = meta["id"];
  delete meta["id"];
  const obj = {
    id,
    name: `Duck ${id}`,
    ...meta,
  };

  // meta[
  //   "image"
  // ] = `ipfs://QmSx7ywAYEuXcGQszGpjYxRziYGxHSy9grufaDi2j87L5J/${file}.jpg`;
  // const find = meta["attributes"].find(
  //   (each) => each["trait_type"] == "Eyes" && each["value"] == "Non Confomist"
  // );
  // if (find) {
  //   console.log("Found", meta["id"]);
  //   counter++;
  // }

  fs.writeFileSync(`named/${file}`, JSON.stringify(obj));
}

console.log(counter);

// const map = new Map();
// const dupes = [];
// for (var i = 1; i < files.sort((a, b) => a - b).length; i++) {
//   //Not consecutive sequence, here you can break or do whatever you want
//   const file = files[i];
//   console.log("Opening file");
//   const buffer = fs.readFileSync(path.join("./test", file));
//   const meta = JSON.parse(buffer.toString());

//   const cs = checksum(JSON.stringify(meta.attributes));

//   console.log(cs, `::: ${i + 1}`);
//   if (map.has(cs)) {
//     console.log(cs, `Duped ::: ${i + 1} ======`);

//     fs.appendFileSync("./dupes", (i + 1).toString());
//     dupes.push({ id: i + 1, dupe: map.get(cs) });
//   }

//   map.set(cs, i + 1);
// }

// console.log(dupes, "Dupes");

console.log(files.length);
