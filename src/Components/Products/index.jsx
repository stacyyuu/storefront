import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import cartSlice from "../../store/cart";
import productSlice from "../../store/products";
import Button from "@mui/material/Button";

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
            <Typography variant="body2" color="text.secondary">
              <p>Price: ${product.price}</p>
              <p>In Stock: {product.inStock}</p>
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
