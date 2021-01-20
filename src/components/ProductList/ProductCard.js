import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import images from "../../utils/randomImages";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    width: 345,
    margin: theme.spacing(2, 4),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2),
    },
  },
  cardImg: {
    height: 250,
    objectFit: "contain",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const ProductCard = ({ product }) => {
  const classes = useStyles();

  const handleImageError = (e) => {
    e.target.onerror = null;
    const imageUrl = images[Math.floor(Math.random() + images.length)]
    e.target.src = imageUrl;
  };

  return (
    <Card className={classes.root}>
      <CardActionArea >
        <CardMedia
          component="img"
          alt={product.name}
          height="140"
          image={product.image}
          title={product.name}
          className={classes.cardImg}
          onError={handleImageError}
        />
      </CardActionArea>
      <CardContent>
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
