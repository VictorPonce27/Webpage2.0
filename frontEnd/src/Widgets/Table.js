import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


function MakeRows(array){
  var list = []; 
  var keys = []; 
  var string =""; 
  var keystring =""; 
  var isKey = true; 
  for(var i in array){
    if (array[i] !== "{" && array[i] !== "}" && array[i] !== "["  && array[i] !== '"' && array[i] !== "\""){
      
      if(array[i] === "," || array[i]=== "]"){
        isKey = true; 
        if(string !== ""){
          list.push(string); 
        }
        string = ""; 
      }
      else{
        if(array[i] === ":"){
          isKey = false; 
          if(keys.indexOf(keystring) === -1){
            keys.push(keystring);
          }
          keystring = ""; 
        }
        else {
          if(isKey === true){
            keystring += array[i]; 
          }
          else{
            string += array[i]; 
          }
        }
      }
    }
  }
  var done = [list, keys]; 
  return done; 
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function finished(ID) {
      const options = {
      
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: ID }),
      };
    const response = fetch('delete', options);
    console.log("task has been completed")
    window.location.reload(true);
}

function changeButton(ID) {
  if(document.getElementById(ID).innerHTML === "Empezar") {
    document.getElementById(ID).innerHTML = "Detener";
    document.getElementById(ID).style.backgroundColor = "#FF0000";
  }
  else {
    document.getElementById(ID).innerHTML = "Empezar"
    document.getElementById(ID).style.backgroundColor = "#0000FF";
  }
}

function createData(id, priority, summary) {
  return { id, priority, summary};
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function TableP(props) {

  const classes = useStyles();

  if(typeof(props.row) === undefined) {
    return (
      <p>You are done</p>
    )
  }
  // var columns=[];
  var rows = [];

    var list = MakeRows(props.row); 
    var cols = list[1];  
    console.log(cols)  
    var row = list[0]; 
    console.log(row); 
    var temp = 1;
    var id, priority, summary;
    for(var x in row) {
      if(temp === 1) {
        id = row[x];
        temp += 1;
      }
      else if(temp === 2) {
        priority = row[x];
        temp += 1;
      }
      else if(temp === 3) {
        summary = row[x];
        rows.push(createData(id, priority, summary));
        temp = 1;
      }
    }
    console.log(rows);


    // TABLE CREATION

    return (
      <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Eror ID</TableCell>
            <TableCell align="center">Priority</TableCell>
            <TableCell align="center">Summary</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center" component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.priority}</TableCell>
              <TableCell align="center">{row.summary}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" id={row.id} onClick={() => finished(row.id)}>Empezar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



      // <div style={{ height: 400, width: '100%' }}>
      //   <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
      // </div>
      
      // <div style={{ height: 400, width: '100%' }}>
      //   <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
      // </div>
    );
}