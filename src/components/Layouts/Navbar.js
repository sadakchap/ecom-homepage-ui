import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  btnText: {
      textTransform: "initial"
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            AMTICA
          </Typography>
          <Button color="inherit" className={classes.btnText}>
            Login / Sign-up
          </Button>
          <Button
            color="inherit"
            className={classes.btnText}
            endIcon={<i class="material-icons">shopping_cart</i>}
          >
            Cart
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;