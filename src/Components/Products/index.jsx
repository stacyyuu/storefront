import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

const Products = ({ product }) => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>Price: ${product.price}</p>
          <p>In Stock: {product.inStock}</p>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Products;
