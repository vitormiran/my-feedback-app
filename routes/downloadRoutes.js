const passport = require('passport');

module.exports = (app) => {
    app.get('/download', (req, res) => {
        //grab file from s3 bucket so user can download
        res.download('./index.js');
    })
}

