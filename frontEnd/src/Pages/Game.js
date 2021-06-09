import Navigation from '../Header/Navigation'
import Grid from '@material-ui/core/Grid';
import React from 'react';

class Game extends React.Component {
    render() {
        return (
            <div>
                <Navigation state={true} tab={2} />
                <div>
                        <Grid container spacing={1} style={{ top: '15%', left: '25%', display: 'block', position: 'absolute' }}>
                                <div>
                                <iframe src="https://i.simmer.io/@Equipo1_Cemex/racetracking" style={{width:'900px', height: '540px'}}></iframe>
                                </div>
                        </Grid>
                    </div>
            </div>
        );
    }
   
}

export default Game;