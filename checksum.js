const fs = require("fs");
const path = require("path");
const checksum = require("checksum");
const files = fs.readdirSync(path.join("./", "metadata"));

const map = new Map();
const dupes = [];
for (var i = 1; i < files.sort((a, b) => a - b).length; i++) {
  //Not consecutive sequence, here you can break or do whatever you want
  const file = files[i];
  console.log("Opening file");
  const buffer = fs.readFileSync(path.join("./metadata", file));
  const meta = JSON.parse(buffer.toString());

  const cs = checksum(JSON.stringify(meta.attributes));

  console.log(cs, `::: ${i + 1}`);
  if (map.has(cs)) {
    console.log(cs, `Duped ::: ${i + 1} ======`);

    fs.appendFileSync("./dupes", (i + 1).toString());
    dupes.push({ id: i + 1, dupe: map.get(cs) });
  }

  map.set(cs, i + 1);
}
fs.writeFileSync("Dedupe", JSON.stringify(dupes, null, 2));
console.log(JSON.stringify(dupes, null, 2), "Dupes", "length", files.length);
