const express = require('express'); 
var request = require('request'); 
const app = express(); 
const port = 4001; 

app.get('/', function (req, res) {
    var sql = require("mssql");

   


    sql.connect(sqlConfig, function (err) {
        if (err) console.log(err);

        var request = new sql.Request();

        request.query('select * from empleado', function (err, recordset) {
            if (err) console.log(err);
            res.send(recordset);
        });
    });
});

var server = app.listen({ port }, function () {
    console.log('Server is running..');
});