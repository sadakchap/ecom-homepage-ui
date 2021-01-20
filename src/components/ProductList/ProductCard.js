import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(2, 4)
  },
  cardImg: {
    height: 250,
    objectFit: "contain",
  },
  cardContent:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}));

const ProductCard = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt={product.name}
        height="140"
        image={product.image}
        title={product.name}
        className={classes.cardImg}
      />
      <CardContent >
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="h2">
            {product.name}
          </Typography>
          <Typography variant="subtitle2" component="div" color="secondary">
            ${product.price}
          </Typography>
        </div>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
