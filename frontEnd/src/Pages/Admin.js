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

function createData(id, name, tasks) {
    return { id, name, tasks};
  }

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

function Admin() {

    const classes = useStyles();

    var rows = [];

    rows.push(createData(1, 'Victor D. Ponce', 69));

    return (
        <div>
            <Navigation state={true}  tab={3} />
                <Grid container spacing={6} style={{ top: '20%', left: '25%', display: 'block', position: 'absolute' }}>
                    <Grid time medium >
                    <Box width='50%' bgcolor='white'>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                            <TableRow>
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Tasks</TableCell>
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

export default Admin;