import '../CSS/App.css';
import Navigation from '../Header/Navigation'
import Linegraph from '../Widgets/Linegraph';
import Grid from '@material-ui/core/Grid'
import TableP from '../Widgets/Table';
import Box from '@material-ui/core/Box';
import React from 'react';
import createPalette from '@material-ui/core/styles/createPalette';


class Portal extends React.Component { 


    async getData() {
        console.log(sessionStorage.id)
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: sessionStorage.id }),
        };
        const response = await fetch("data", options);
        const data = await response.json();
        console.log(data.resultado[0]); 
        // console.log(Object.keys(data.resultado[0])); 
        if(data.resultado.length === 0 || typeof(data.resultado) === undefined) {
            console.log("Done!")
        }
        else {
            console.log(data.resultado)
            sessionStorage.setItem("col", JSON.stringify(Object.keys(data.resultado[0])));
            sessionStorage.setItem("row", JSON.stringify(Object.values(data.resultado))); 
        }
    }

    componentDidMount() {
        this.getData()
        setTimeout(() => {
            this.forceUpdate(); 
        }, 500)
    };


    render() {
        return (
            <div> <Navigation state={true} tab={0} />
                <div>
                    <Grid container spacing={6} style={{ top: '10%', left: '25%', display: 'block', position: 'absolute' }}>
                        <Grid item>
                            <div className="GamePlaceholder">
                                <b>Game GamePlace Holder</b>
                            </div>
                        </Grid>
                        <Grid time medium >
                            <Box width='50%' bgcolor='white'>
                                <script>{console.log(sessionStorage.col)}</script>
                                <TableP cols={sessionStorage.col} row={sessionStorage.row}/>
                            </Box>

                        </Grid>
                        {/* <Grid item large>
                            <Grid container spacing>
                                <Box width='50%' bgcolor='white'>
                                    <Linegraph />
                                </Box>
                            </Grid>
                        </Grid> */}
                        <Grid item xs>

                        </Grid>


                    </Grid>
                </div>
            </div>
        );
    }
}

export default Portal;