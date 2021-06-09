const express = require('express');
var request = require('request');
const { user } = require('./sqlConfig');
const app = express();
// const port = process.env.PORT = 5000;
const port = 5000; 
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
    var sql = require("mssql"); 
    const con = sql.connect(sqlConfig, function(err) {
        if (err) console.log(err);
        var request = new sql.Request();

        console.log(req.body.name); 
        let query =
            "select * from DB.employee where employee.name='" + req.body.name + "'";
        console.log(query);
        request.query(query, (err, { recordset }) => {
            if (err) console.log(err);
            console.log(recordset[0]);
            let login = false;
            if (
                recordset[0].name === req.body.name
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

app.post("/data",(req,res)=> {
    var sql = require("mssql"); 
    const con = sql.connect(sqlConfig,function(err){
        if(err) console.log(err); 
        var request = new sql.Request(); 

        console.log(req.body.id); 
        let query = "select DB.ticket.Error_id,DB.ticket.priority,DB.ticket.summary from DB.ticket where DB.ticket.assigned = '"+ req.body.id +"'"; 
        console.log(query); 
        request.query(query,(err,{recordset}) => {
            if(err) console.log(err); 
            console.log(recordset[0]); 
            res.json({
                resultado: recordset,
            }); 
        });
    });
    console.log("Post Login"); 
    console.log(req.body);
});

app.post("/delete",(req,res)=> {
    var sql = require("mssql"); 
    const con = sql.connect(sqlConfig,function(err){
        if(err) console.log(err); 
        var request = new sql.Request(); 

        console.log(req.body.id); 
        let query = "DELETE FROM DB.ticket WHERE Error_id = '"+ req.body.error +"'"; 
        console.log(query); 
        request.query(query,(err,{recordset}) => {
            if(err) console.log(err); 
        });
    });
    console.log("Ticket has been deleted"); 
    console.log(req.body);
});

app.post("/employees", (req, res) => {
    var sql = require("mssql"); 
    const con = sql.connect(sqlConfig, function(err) {
        if (err) console.log(err);
        var request = new sql.Request();
        console.log(req.body.teamNum); 
        let query =
            "select name, COUNT(name) as tasks from DB.ticket join DB.employee on assigned = id where team_num = '" + req.body.teamNum + "' GROUP BY name";
        console.log(query);
        request.query(query, (err, { recordset }) => {
            if (err) console.log(err);
            console.log(recordset);
            res.json({
                resultado: recordset,
            });
        });
    });
    console.log("Post Login");
    console.log(req.body);
});



app.get('/test/user',function(req,res){
    var sql = require("mssql");
    const con = sql.connect(sqlConfig, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();

        console.log(req.query.id);
        let query = "INSERT INTO DB.game(name,tasks,time,laps) VALUES('" + req.query.name + "','" + req.query.tasks +"','"+req.query.time+"','" + req.query.laps+"')";
        console.log(query);
        request.query(query,function(err,result){
            if(err) throw err; 
            console.log("1 record has been inserted!"); 
            console.log(result); 
        }); 
        // request.query(query, (err, { recordset }) => {
        //     if (err) console.log(err);
        //     console.log(recordset);
        // });
    });
    console.log("Post Login");
    this.stop(); 
}); 

var server = app.listen({ port }, function () {
    console.log('Server is running..');
});