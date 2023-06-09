import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import cartSlice from "../../store/cart";
import productSlice from "../../store/products";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <>
      {product.inStock > 0 && (
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <CardMedia
              component="img"
              height="195"
              image={product.image}
              alt={product.name}
            />
            <Typography variant="body2" color="text.secondary">
              <p>Price: ${product.price}</p>
              <p>In Stock: {product.inStock}</p>
              <Link to ={`/products/${product._id}`} onClick={() => {
                dispatch(productSlice.actions.setProduct(product._id))
              }}>Product Details</Link>
              <Button
                onClick={() => {
                  dispatch(productSlice.actions.decreaseStock(product.name));
                  dispatch(cartSlice.actions.addCartItem(product));
                }}
              >
                Add to Cart
              </Button>
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Products;
