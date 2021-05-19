import '../CSS/App.css';
import Navigation from '../Header/Navigation'
import Linegraph from '../Widgets/Linegraph';
import Grid from '@material-ui/core/Grid'
import Table from '../Widgets/Table';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
function Welcome() {
    return (
        <div> <Navigation tab='1' />
            <div>
                <Grid container spacing={6} style={{ top: '10%', left: '25%', display: 'block', position: 'absolute' }}>
                    <Grid item>
                        <div className="GamePlaceholder">
                            <b>Game GamePlace Holder</b>
                        </div>
                    </Grid>
                    <Grid time medium >
                        <Box width = '50%'bgcolor = 'white'>
                            <Table/>
                        </Box>

                    </Grid>
                    <Grid item large>
                        <Grid container spacing>
                            <Box width = '50%' bgcolor = 'white'> 
                                <Linegraph/>
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

export default Welcome;
