const path = require('path');
const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, `${file.fieldname}${path.extname(file.originalname)}`);
    }
});
const upload = multer({ storage: storage });
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.file);
    return res.send('Upload 100%');
});

app.listen(3000, () => console.log('Express has been started...'));

// const path = require('path');
// const express = require('express');
// const multer = require('multer');

// const upload = multer({ dest: '/uploads' });
// const app = express();

// app.use(express.static(path.join(__dirname, '/public')));

// app.post('/upload', upload.single('file'), (req, res) => {
//     return res.send('Upload 100%')
// });

// app.listen(3000, () => console.log('Express has been started...'));