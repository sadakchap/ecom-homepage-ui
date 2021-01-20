import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import bgImg from "../../assets/images/bg.jpg"
import SearchBar from "./SearchBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    position: "relative",
    height: "calc(100vh - 64px)",
    backgroundImage: `url(${bgImg})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: 1,
    "&::before": {
      position: "absolute",
      content: '""',
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      backgroundColor: "rgb(0 0 0 / 40%)",
      zIndex: -1
    },
  },
  headerContainer: {
    maxWidth: "700px",
    "& h3": {
      color: "#fff"
    }
  }
}));


const HeroSection = () => {

    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.gridContainer}
        >
          <Grid item>
            <Container className={classes.headerContainer}>
              <Typography variant="h3" component="h3" align="center" gutterBottom>
                Find Great Deals Customize for your Need.
              </Typography>
              <SearchBar />
            </Container>
          </Grid>
        </Grid>
      </div>
    );
}

export default HeroSection
