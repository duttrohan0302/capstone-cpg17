const multer = require('multer')

const upload_pdf = multer({
    dest: 'data',
    limits: {
        fileSize: 100000000000,
    },

    fileFilter(req, file, cb) {

        if (!file.originalname.match(/\.(pdf)$/)) {
            cb(new Error('Please upload a pdf file.'))
        }
        cb(undefined, true)
    }
})

module.exports = upload_pdf;