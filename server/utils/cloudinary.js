require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const { Readable } = require("stream");
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

async function uploadStream(buffer) {
  return new Promise((res, rej) => {
    const theTransformStream = cloudinary.uploader.upload_stream(
      (err, result) => {
        if (err) return rej(err);
        res(result);
      }
    );
    let str = Readable.from(buffer);
    str.pipe(theTransformStream);
  });
}

module.exports = uploadStream;
