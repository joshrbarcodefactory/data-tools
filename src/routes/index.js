var express = require('express');
var router = express.Router();
var index = require('../middlewares/index');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/selectTodos', function(req, res) {
    var tableName = req.query.tablename;

    index.selectTodos(tableName)
        .then(data => {

            res.render('selects', { data: data });
        })
        .catch(err => {
            console.error(err);
        })

})

module.exports = router;