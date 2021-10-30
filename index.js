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
  const layer = fs.readdirSync(path.join("samurais", element));
  fileLayers[element] = layer;
}
console.log(fileLayers["0"]);

const stage = new Konva.Stage({});

stage.width(1080);
stage.height(1080);
const konvaLayer = new Konva.Layer();
const imageCache = new Map();

stage.add(konvaLayer);

(async () => {
  try {
    // From background pick one.

    for (let index = 0; index < 2500; index++) {
      // Map file layers.
      const removeSpecialBackground = fileLayers[0].filter(
        (file) => file !== "Space.png"
      );
      const background =
        removeSpecialBackground[
          ~~(Math.random() * removeSpecialBackground.length)
        ];

      const arms =
        fileLayers["arms"][~~(Math.random() * fileLayers["arms"].length)];
      const chest =
        fileLayers["body"][~~(Math.random() * fileLayers["body"].length)];
      const helmet =
        fileLayers["head"][~~(Math.random() * fileLayers["head"].length)];
      const mask =
        fileLayers["mask"][~~(Math.random() * fileLayers["mask"].length)];
      const neck =
        fileLayers["neck"][~~(Math.random() * fileLayers["neck"].length)];
      const eyes =
        fileLayers["eyes"][~~(Math.random() * fileLayers["eyes"].length)];

      const sword =
        fileLayers["sword"][~~(Math.random() * fileLayers["sword"].length)];

      const chainsaw =
        fileLayers["chainsaw"][
          ~~(Math.random() * fileLayers["chainsaw"].length)
        ];

      const buzzsaw =
        fileLayers["buzzsaw"][~~(Math.random() * fileLayers["buzzsaw"].length)];
      const hasSpacebackground = Math.random() <= 0.01;

      // 10% Chainsaw, 20%

      const layers = [
        {
          image: hasSpacebackground ? "Space.png" : background,
          name: "Background",
        },
        {
          image: chest,
          name: "Chest",
        },
        {
          image: helmet,
          name: "Head",
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
          image: eyes,
          name: "Eyes",
        },
      ];

      console.log("Layers", layers[0]);
      // for (let j = 0; j < layers.length; j++) {
      //   const { image, name } = layers[j];
      //   const filePath = path.join("./", "samurais", name, image);

      //   let loaded;
      //   if (imageCache.has(filePath)) {
      //     loaded = imageCache.get(filePath);
      //     console.log(`Loaded from CACHE:${filePath}`);
      //   } else {
      //     loaded = await loadImage(filePath);
      //     imageCache.set(filePath, loaded);
      //     console.log(`Loaded from FS:${filePath}`);
      //   }
      //   const img = new Konva.Image({
      //     width: 1969,
      //     height: 2362,
      //     image: loaded,
      //   });

      //   konvaLayer.add(img);

      //   template["id"] = `#${index + 1}`;
      //   template["name"] = `Samurai #${index + 1}`;

      //   template["attributes"].push({
      //     trait_type: name,
      //     value: path.parse(image.match(/[^0-9].*/g)[0].trim()).name,
      //   });
      // }

      // const res = konvaLayer.toDataURL({
      //   format: "jpg",
      //   devicePixelRatio: 3,
      // });
      // fs.writeFileSync(`output/${index + 1}.jpg`, res.split(";base64,").pop(), {
      //   encoding: "base64",
      // });

      // fs.writeFileSync(
      //   `metadata/${index + 1}`,
      //   JSON.stringify(template),
      //   () => {}
      // );
      // template["attributes"] = [];
      // konvaLayer.clear();
      // console.log(`Finished #${index + 1}`);
    }
  } catch (error) {
    console.log(error);
  }
})();
