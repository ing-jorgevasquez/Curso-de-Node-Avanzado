const multer = require("multer");
const ExtensionValidator = require("../util/ImageExtensionValidator");

var path = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../", "public/done"));
  },
  filename: function (req, file, cb) {
    const validator = new ExtensionValidator();
    const extension = validator.getExtension(file.mimetype);
    if (extension === undefined) {
      cb(new Error("Unkonwn file extension"), file?.filename);
    } else {
      cb(null, file.fieldname + "-" + Date.now() + extension);
    }
  },
});

const upload = multer({
  limits: {
    fileSize: 4 * 1024 * 1024,
  },
  // using dest is not necessary as storage has defined a destination function
  // dest: path.join(__dirname, "../", "public"),
  storage: storage,
});

module.exports = upload;
