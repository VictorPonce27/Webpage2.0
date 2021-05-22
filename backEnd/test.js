const express = require('express');
var request = require('request');
const app = express();
const port = process.env.PORT || 5000;
const sqlConfig = require('./sqlConfig');


// app.get('/', function (req, res) {
//     var sql = require("mssql");

//     sql.connect(sqlConfig, function (err) {
//         if (err) console.log(err);

//         var request = new sql.Request();

//         request.query("select * from empleado where empleado.id = '557058:0444128a-ce7b-46a2-a3b9'", function (err, recordset) {
//             if (err) console.log(err);
//             res.send(recordset);
//         });
//     });
// });

app.use("/", express.static("public"));
app.use(express.json());

app.post("/login", (req, res) => {
    const conn = sql.connect(sqlConfig, (err) => {
        if (err) console.log(err);
        const request = new sql.Request();
        let query =
            "select * from empleado where UserName='" + req.body.UserName + "'";
        console.log(query);
        request.query(query, (err, { recordset }) => {
            if (err) console.log(err);
            console.log(recordset[0]);
            let login = false;
            if (
                recordset[0].UserName === req.body.UserName
            ) {
                login = true;
            }
            res.json({
                login: login,
                resultado: recordset[0],
            });
        });
    });
    console.log("Post Login");
    console.log(req.body);
});



var server = app.listen({ port }, function () {
    console.log('Server is running..');
});