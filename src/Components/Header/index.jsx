import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import cat from "./pet.png";
// import { displayCategories } from "../../store/categories";
import { useDispatch, useSelector } from "react-redux";
import productSlice from "../../store/products";
import SimpleCart from "../SimpleCart";
// import { useEffect } from "react";
import {categories} from '../../store/categories/index'

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => {
    return state.cart;
  });

  // const categories = useSelector((state) => {
  //   return state.categories;
  // });

  // useEffect(() => {
  //   dispatch(displayCategories());
  // }, []);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#b9ac9f" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={cat}
            alt="cat"
            style={{ width: "55px", marginRight: "10px" }}
          />
          <Typography
            role="header"
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mt: -1,
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Maru Mart
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {categories.map((category) => (
              <Button
                variant="h4"
                key={category.displayName}
                sx={{
                  my: 3,
                  color: "white",
                  display: "block",
                  fontWeight: 500,
                }}
                onClick={() => {
                  dispatch(
                    productSlice.actions.setActiveCategory(category.name)
                  );
                }}
              >
                {category.displayName}
              </Button>
            ))}
          </Box>

          <ShoppingBagIcon />
          <Button
            variant="h4"
            key="cart"
            sx={{
              my: 3,
              ml: -1.5,
              color: "white",
              display: "block",
              fontWeight: 500,
            }}
            onClick={handleOpen}
          >
            CART({items.numItems})
          </Button>

          <SimpleCart
            handleOpen={handleOpen}
            handleClose={handleClose}
            open={open}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
