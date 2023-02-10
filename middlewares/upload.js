import multer from "multer"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const name = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, name + "." + file.mimetype.split("/").pop())
  }
})

export default multer({ storage: storage })
