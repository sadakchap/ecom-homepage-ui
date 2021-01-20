import { CircularProgress, Grid, makeStyles } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ToastContainer, toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  spinnerWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
}));

const ProductList = () => {
  const classes = useStyles();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `${process.env.REACT_APP_MOCK_API_ENDPOINT}/products`;
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  }, []);

  return (
    <>
      <ToastContainer />
      <Grid container className={classes.root}>
        {isLoading && (
          <div className={classes.spinnerWrapper} >
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
