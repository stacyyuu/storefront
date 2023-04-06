import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import cat from "./cat-56.png";
import { categories } from "../../store/categories/index";
import { useDispatch } from "react-redux";
import productSlice from "../../store/products";

const Header = () => {
  const dispatch = useDispatch();

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
            Neko Store
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {categories.map((category) => (
              <Button
                variant="h5"
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
