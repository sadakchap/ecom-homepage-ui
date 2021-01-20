import { CircularProgress, Grid, makeStyles } from "@material-ui/core";
import ProductCard from "./ProductCard";
import { ToastContainer} from "react-toastify";
import { useProductContext } from "../../context/products";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  },
  spinnerWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
}));

const ProductList = () => {
  const classes = useStyles();

  const {isLoading, products} = useProductContext();

  return (
    <>
      <ToastContainer />
      <Grid container className={classes.root}>
        {isLoading && (
          <div className={classes.spinnerWrapper}>
            <CircularProgress />
          </div>
        )}
        {!isLoading &&
          products.length > 0 &&
          products.map((prod) => <ProductCard key={prod.id} product={prod} />)}
      </Grid>
    </>
  );
};

export default ProductList;
