// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        minWith: 200,
        marginRight: 30,
    },
    media: {
        height: 140,
    },
});

export default function CardItem(Props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {Props.CardContent}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {Props.subtext}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* if you want todo something within the card you need  */}
            </CardActions>
        </Card>
    );
}