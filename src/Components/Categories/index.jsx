import Products from "../Products";
import { filteredProducts } from "../../store/products";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Unstable_Grid2";

const Categories = () => {
  const products = useSelector(filteredProducts);
  return (
    <>
      <Grid container spacing={2} sx={{ my: 2 }}>
        {products.map((item) => (
          <Grid xs={4}>
            <Products product={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Categories;
