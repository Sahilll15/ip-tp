const multer = require('multer')
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Files will be saved in the 'uploads' directory
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})


const uploadMiddleware = multer({
    storage: storage
}).single('file')

module.exports = {
    upload: uploadMiddleware // Export the middleware correctly
}


