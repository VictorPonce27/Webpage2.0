import Navigation from "../Header/Navigation";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React from 'react';


function makeRows(array){
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


function createData(id, name, tasks) {
    return { id, name, tasks};
  }
  
class Admin extends React.Component {
    
    async getData() {
    
        const options = {
   
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ teamNum: sessionStorage.admin }),
          };
        const response = await fetch('employees', options);
        const data = await response.json();
        console.log("this is the data")
        console.log(data);
        sessionStorage.setItem("employees", JSON.stringify(Object.values(data.resultado)))
        console.log(sessionStorage.employees);
    }
    
    componentDidMount() {
        this.getData()
        setTimeout(() => {
            this.forceUpdate(); 
        }, 500)
    };

    render() {
    
        var rows =[]
        var row = makeRows(sessionStorage.employees)[0];
        console.log(row);
        var tasks
        var cont = 1
        var temp = 1

        console.log(row);

        
        for(var x in row) {
            if(temp === 1) {
                var name = row[x]
                temp = 2
            }
            else {
                tasks = row[x]
                rows.push(createData(cont, name, tasks));
                cont += 1;
                temp = 1
            }
              }

        console.log(rows)

        return (
            <div>
                
                <Navigation state={true}  tab={3} />
                    <Grid container spacing={6} style={{ top: '20%', left: '25%', display: 'block', position: 'absolute' }}>
                        <Grid time medium >
                        <Box width='50%' bgcolor='white'>
                            <p style= {{textAlign: 'center'}}>TAREAS RESTANTES</p>
                        <TableContainer component={Paper}>
                            <Table size="small" aria-label="a dense table">
                                <TableHead>
                                    
                                <TableRow>
                                    <TableCell align="center">ID</TableCell>
                                    <TableCell align="center">Nombre</TableCell>
                                    <TableCell align="center">Tareas</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.id}>
                                    <TableCell align="center" component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">{row.tasks}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        </Box>
                        </Grid>
                    </Grid>
            </div>
        )
    }
}


export default Admin;