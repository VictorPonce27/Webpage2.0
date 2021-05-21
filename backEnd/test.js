const express = require('express'); 
var request = require('request'); 
const app = express(); 
const port = 4015; 
const sqlConfig = require('./sqlConfig'); 


app.get('/', function (req, res) {
    var sql = require("mssql");

    sql.connect(sqlConfig, function (err) {
        if (err) console.log(err);

        var request = new sql.Request();

        request.query("select * from empleado where empleado.id = '557058:0444128a-ce7b-46a2-a3b9'", function (err, recordset) {
            if (err) console.log(err);
            res.send(recordset);
        });
    });
});

var server = app.listen({ port }, function () {
    console.log('Server is running..');
});