import * as React from 'react'; 
import {DataGrid} from '@material-ui/data-grid';


export default function Table(props) {
 
  var columns = props.cols; 
  var rows = props.rows; 


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
  if (typeof columns !== 'undefined'){
    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
      </div>
    );
  }
  else    
    return(
      <div style={{ height: 400, width: '100%' }}>
        <text>Place holder when nothing is sent</text>
        {/* <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection /> */}
      </div>
    )


}