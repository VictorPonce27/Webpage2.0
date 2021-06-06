import '../CSS/App.css';
import Navigation from '../Header/Navigation'
import Linegraph from '../Widgets/Linegraph';
import Grid from '@material-ui/core/Grid'
import Table from '../Widgets/Table';
import Box from '@material-ui/core/Box';
import React from 'react';

class Portal extends React.Component {
    
    async getData(){
        console.log(sessionStorage.id)
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: sessionStorage.id}),
        }; 
        const response = await fetch("data",options); 
        const data = await response.json(); 
        console.log(data); 



    }

    componentDidMount(){
        setTimeout( () => {
            this.getData()
        },1000)
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
                                <Table />
                            </Box>

                        </Grid>
                        <Grid item large>
                            <Grid container spacing>
                                <Box width='50%' bgcolor='white'>
                                    <Linegraph />
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item xs>

                        </Grid>


                    </Grid>
                </div>
            </div>
        );
    }
}

export default Portal;
