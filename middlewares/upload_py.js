const multer = require('multer')

const upload_py = multer({
    dest: 'data',
    limits: {
        fileSize: 1000000,
    },

    fileFilter(req, file, cb) {

        if (!file.originalname.match(/\.(py)$/)) {
            cb(new Error('Please upload an python file.'))
        }
        cb(undefined, true)
    }
})

module.exports = upload_py;
