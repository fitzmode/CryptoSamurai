// const Konva = require("konva").default;
const Konva = require("konva-node");
const fs = require("fs");

const path = require("path");
const { loadImage } = require("canvas");

const shuffle = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const template = {
  id: "",
  image: "image/png",
  name: "",
  description:
    "5,000 of the most battletested, strongest, and advanced samurai's in all the NFT world",
  attributes: [],
};

const files = fs.readdirSync(path.join("samurais"));
let fileLayers = {};
for (let index = 0; index < files.length; index++) {
  const element = files[index];
  console.log(element);
  const layer = fs.readdirSync(path.join("samurais", element));
  console.log(layer, "Layer");
  // Layer: Loop each layer, get the index and create the number of items for each index
  fileLayers[element] = layer;
}

const stage = new Konva.Stage({});

stage.width(1969);
stage.height(2362);
const konvaLayer = new Konva.Layer();
const imageCache = new Map();

stage.add(konvaLayer);

(async () => {
  try {
    // From background pick one.

    for (let index = 0; index < 10; index++) {
      // Map file layers.
      // const background =
      //   fileLayers[0][~~(Math.random() * fileLayers[0].length)];
      const arms =
        fileLayers["Arms"][~~(Math.random() * fileLayers["Arms"].length)];
      const chest =
        fileLayers["Chest"][~~(Math.random() * fileLayers["Chest"].length)];
      const helmet =
        fileLayers["Helmet"][~~(Math.random() * fileLayers["Helmet"].length)];
      const mask =
        fileLayers["Mask"][~~(Math.random() * fileLayers["Mask"].length)];
      const neck =
        fileLayers["Neck"][~~(Math.random() * fileLayers["Neck"].length)];
      const visor =
        fileLayers["Visor"][~~(Math.random() * fileLayers["Visor"].lengthß)];

      const layers = [
        {
          image: arms,
          name: "Arms",
        },
        {
          image: chest,
          name: "Chest",
        },
        {
          image: helmet,
          name: "Helmet",
        },

        {
          image: mask,
          name: "Mask",
        },
        {
          image: neck,
          name: "Neck",
        },

        {
          image: visor,
          name: "Visor",
        },
      ];

      for (let j = 0; j < layers.length; j++) {
        const { image, name } = layers[j];
        const filePath = path.join("./", "samurais", name, image);

        let loaded;
        if (imageCache.has(filePath)) {
          loaded = imageCache.get(filePath);
          console.log(`Loaded from CACHE:${filePath}`);
        } else {
          loaded = await loadImage(filePath);
          imageCache.set(filePath, loaded);
          console.log(`Loaded from FS:${filePath}`);
        }
        const img = new Konva.Image({
          width: 1969,
          height: 2362,
          image: loaded,
        });

        konvaLayer.add(img);

        template["id"] = `#${index + 1}`;
        template["name"] = `Samurai #${index + 1}`;

        template["attributes"].push({
          trait_type: name,
          value: path.parse(image.match(/[^0-9].*/g)[0].trim()).name,
        });
      }

      const res = konvaLayer.toDataURL({
        format: "jpg",
        devicePixelRatio: 3,
      });
      fs.writeFileSync(`output/${index + 1}.jpg`, res.split(";base64,").pop(), {
        encoding: "base64",
      });

      fs.writeFileSync(
        `metadata/${index + 1}`,
        JSON.stringify(template),
        () => {}
      );
      template["attributes"] = [];
      konvaLayer.clear();
      console.log(`Finished #${index + 1}`);
    }
  } catch (error) {
    console.log(error);
  }
})();
