import multer from "multer";
import path from "path";
import crypto from "crypto";

export default module.exports = {
  dest: path.resolve(__dirname, "..", "tmp", "imgs"),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "tmp", "imgs"));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err, null);
        const fileName = `${hash.toString("hex")} - ${file.originalname}`;

        cb(null, fileName);
      });
    },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
};
