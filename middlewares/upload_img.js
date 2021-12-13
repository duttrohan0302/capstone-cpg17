const multer = require('multer')

const upload_img = multer({
    dest: 'data',
    limits: {
        fileSize: 1000000,
    },

    fileFilter(req, file, cb) {

        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            cb(new Error('Please upload an image.'))
        }
        cb(undefined, true)
    }
})

module.exports = upload_img;
