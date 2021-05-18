import '../CSS/App.css';
import Navigation from '../Header/Navigation'
import CardItem from '../Widgets/cardItem';
import Linegraph from '../Widgets/Linegraph';
import Grid from '@material-ui/core/Grid'
function Welcome() {
    return (
        <div> <Navigation state={true} tab={0} />
            <div>
                <Grid container spacing={6} style={{ top: '10%', left: '25%', display: 'block', position: 'absolute' }}>
                    <Grid item>
                        <div className="GamePlaceholder">
                            <b>Game GamePlace Holder</b>
                        </div>
                    </Grid>
                    <Grid item xs>
                        <Grid container spacing>
                            <CardItem CardContent={<Linegraph />} />
                            <CardItem CardContent={<Linegraph />} />
                            <CardItem CardContent={<Linegraph />} />
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
