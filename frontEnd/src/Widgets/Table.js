import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';


export default function Table(props) {

  var columns=[];
  var rows = [];


  // var columns = [

  //   { field: 'id', headerName: 'ID'},
  //   { field: 'firstName', headerName: 'First name'},
  //   { field: 'lastName', headerName: 'Last name'},
  //   {
  //     field: 'age',
  //     headerName: 'Age',
  //     type: 'number'
  //   },
  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,

  //   },
  // ];

  // const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  // ];
  function MakeList(array1) {
    var list = [];
    var string = "";
    for (var i in array1) {
      if (array1[i] !== "[" && array1[i] !== "[" && array1[i] !== ",") {
        if (array1[i] === "\"") {
          if (string !== "") {
            list.push(string);
          }
          string = "";
        }
        else {
          string += array1[i];
        }
      }
      // col.push({field: columns[i], headerName:columns[i]});
    }
    return list
  }

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
          if(isKey === true){
            keystring += array[i]; 
          }
          else{
            string += array[i]; 
          }
        }
      }
    }
    var done = [list, keys]; 
    return done; 
  }
 

  if (typeof props.cols !== 'undefined') {
    var list = MakeRows(props.row); 
    // var cols = MakeList(props.cols);
    var cols = list[1];  
    console.log(cols) 
    // var row = MakeRows(props.row); 
    var row = list[0]; 
    console.log(row); 
  

    for( var i in cols){
      columns.push({ field: cols[i], headerName: cols[i]});
    }
    console.log(columns); 

    // console.log(columns);
    // console.log(row);

    // TODO need to work on the rows, need to make the function for this rows 
    return (
      
      <text>Inside the true statement</text>
      
      // <div style={{ height: 400, width: '100%' }}>
      //   <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
      // </div>
    );
  }
  else
    return (
      <div style={{ height: 400, width: '100%' }}>
        <text>Place holderg nothing is sent</text>
        {/* <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection /> */}
      </div>
    )


}