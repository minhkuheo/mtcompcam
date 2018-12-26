import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import withMobileDialog from '@material-ui/core/withMobileDialog';

const styles = {
    card: {
        maxWidth: 200,
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
    content: {
        textAlign: 'center'
    }
};

class ProductCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thisCardOpen: false
        }
    }
    handleOnClickAProduct = () => {
        this.setState(prevState => ({ thisCardOpen: !prevState.thisCardOpen }));
    }

    render() {
        const {
            image,
            classes
        } = this.props;
        console.log(this.state.thisCardOpen);
        return (
            <Grid item>
                <Card className={classes.card} onClick={this.handleOnClickAProduct}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            className={classes.media}
                            height="150"
                            image={image}
                            title="Contemplative Reptile"
                        />
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant="h5" component="h4">
                                {this.props.title}
                            </Typography>
                            <Typography component="h5">
                                {this.props.price}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    {/* <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions> */}
                </Card>

                <Dialog
                    // fullScreen={true}
                    fullWidth={true}
                    maxWidth='lg'
                    open={this.state.thisCardOpen}
                    onClose={this.handleOnClickAProduct}
                    aria-labelledby="maxWidth-dialog-title"
                >
                    <DialogTitle id="maxWidth-dialog-title">{this.props.title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Let Google help apps determine location. This means sending anonymous location data to
                            Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    {/* <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Disagree
                        </Button>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Agree
                        </Button>
                    </DialogActions> */}
                </Dialog>
            </Grid>
        );
    }
}

export default withStyles(styles)(ProductCard);